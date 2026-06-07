/* EQ-Bench 4 leaderboard + dynamic transcript browser.
   Renders from EQBENCH4_DATA (eqbench4_data.js). Transcripts and personas are
   fetched on demand from eqbench4_docs/ (JSON), rendered natively. Vanilla JS. */

(function () {
  "use strict";

  const DATA = (typeof EQBENCH4_DATA !== "undefined") ? EQBENCH4_DATA : { dimensions: [], abilities: [], models: [] };
  const DIMS = DATA.dimensions || [];          // neutral behavioural traits
  const ABILITIES = DATA.abilities || [];      // pairwise abilities (neighbour-relative)
  const MODELS = DATA.models || [];
  const DOCS_BASE = "eqbench4_docs/";

  // DEV: dummy long model names to preview wrapping (set false or delete to hide)
  const DEV_DUMMY_NAMES = false;
  if (DEV_DUMMY_NAMES && MODELS.length) {
    const base = MODELS[Math.floor(MODELS.length / 2)] || {};
    [
      "superlab/extremely-long-model-name-v3.5-instruct-preview-20260118",
      "megacorp/SuperLongModelNameWithoutAnySeparatorsRunningOnAndOnAndOn",
      "anthropic/claude-opus-4-8-20260115-experimental-extended-thinking-v2",
      "x-ai/a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z",
    ].forEach((name, i) => {
      MODELS.push(Object.assign({}, base, {
        model: name, display: name.split("/").pop(),
        elo: (base.elo || 1100) - 3 * (i + 1), rank: MODELS.length + 1, transcript_dir: null,
      }));
    });
  }

  let sortKey = "elo";
  let sortDir = -1;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function titleize(s) {
    return String(s || "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }

  // ---- theme boilerplate -------------------------------------------------
  function setupDarkModeToggle() {
    const toggle = document.getElementById("darkModeToggle");
    const label = document.getElementById("toggleLabel");
    const saved = localStorage.getItem("darkModeEnabled");
    if (saved !== null) {
      const on = saved === "true";
      document.body.classList.toggle("dark-mode", on);
      toggle.checked = on;
      label.textContent = on ? "Dark" : "Light";
    }
    toggle.addEventListener("change", function () {
      document.body.classList.toggle("dark-mode", this.checked);
      label.textContent = this.checked ? "Dark" : "Light";
      localStorage.setItem("darkModeEnabled", this.checked);
      if (MODELS.length) buildBody(); // re-colour the heatmap for the new theme
    });
  }
  function applySystemTheme() {
    if (localStorage.getItem("darkModeEnabled") === null) {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const toggle = document.getElementById("darkModeToggle");
      const label = document.getElementById("toggleLabel");
      document.body.classList.toggle("dark-mode", prefers);
      toggle.checked = prefers;
      label.textContent = prefers ? "Dark" : "Light";
    }
  }
  function displayEncodedEmail() {
    const el = document.getElementById("email");
    if (!el) return;
    const ta = document.createElement("textarea");
    ta.innerHTML = "&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#101;&#113;&#98;&#101;&#110;&#99;&#104;&#46;&#99;&#111;&#109;";
    el.innerHTML = `<a href="mailto:${ta.value}">Contact</a>`;
  }

  // ---- diverging heatmap color (amber low <-> indigo high) ----------------
  function dimColor(v) {
    if (v === undefined || v === null || isNaN(v)) return "transparent";
    const dark = document.body.classList.contains("dark-mode");
    const t = Math.max(0, Math.min(1, v / 10));
    const intensity = Math.min(1, Math.abs(t - 0.5) * 2);
    const rgb = t < 0.5 ? [216, 164, 62] : [85, 96, 176];
    const alpha = intensity * (dark ? 0.74 : 0.62);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
  }
  // Heatmap palette — EXACT match of the results viewer's pink<->blue gradient
  // (dark blue -> sky blue -> purple -> neon pink). Used ONLY for the leaderboard
  // dimension heatmap cells and the legend bar. The colour scale is calibrated
  // per column: each dimension's lowest model maps to the blue end, its highest
  // to the pink end, so the shading shows relative spread within that dimension.
  function mix3(a, b, t) { return [0, 1, 2].map(i => Math.round(a[i] + (b[i] - a[i]) * t)); }
  function heatColorT(t) {
    t = Math.max(0, Math.min(1, t));
    // sky originally [0, 140, 220]; darkened/desaturated a touch (midpoint of orig & [25,110,185])
    const dark = [24, 72, 165], sky = [13, 125, 203], purple = [138, 43, 226], pink = [255, 20, 180];
    let c;
    if (t < 0.45) c = mix3(dark, sky, t / 0.45);
    else if (t < 0.72) c = mix3(sky, purple, (t - 0.45) / 0.27);
    else if (t < 0.88) c = purple;
    else c = mix3(purple, pink, (t - 0.88) / 0.12);
    if (!document.body.classList.contains("dark-mode")) {
      // light mode: nudge chroma up a touch, then fade toward white a bit less
      // than before so cells read more saturated and less washed out.
      const mid = (Math.max(...c) + Math.min(...c)) / 2;
      c = c.map(x => mid + (x - mid) * 1.12);            // boost saturation
      c = c.map(x => Math.round(Math.max(0, Math.min(255, x + (255 - x) * 0.42))));
    }
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }
  const RANGE = {};
  function setRange(key, src) {
    const vals = MODELS.map(m => m[src] && m[src][key]).filter(v => v != null && !isNaN(v));
    RANGE[key] = vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 0, max: 10 };
  }
  function computeRanges() {
    DIMS.forEach(d => setRange(d.key, "dims"));
    ABILITIES.forEach(a => setRange(a.key, "abilities"));
  }
  function heatColor(v, key) {
    if (v == null || isNaN(v)) return "transparent";
    const r = RANGE[key] || { min: 0, max: 10 };
    const t = r.max > r.min ? (v - r.min) / (r.max - r.min) : 0.5;
    return heatColorT(t);
  }
  function signed(v) {
    return (v >= 0 ? "+" : "") + Number(v).toFixed(1);
  }
  function abilityTone(v) {
    if (v == null || isNaN(v)) return "transparent";
    const t = Math.max(0, Math.min(1, (v + 2) / 4));
    return heatColorT(t);
  }

  // ---- ELO axis ----------------------------------------------------------
  function eloAxis() {
    const lows = MODELS.map(m => m.ci_low).filter(Number.isFinite);
    const highs = MODELS.map(m => m.ci_high).filter(Number.isFinite);
    const elos = MODELS.map(m => m.elo).filter(Number.isFinite);
    const lo = Math.min(...lows, ...elos), hi = Math.max(...highs, ...elos);
    const pad = (hi - lo) * 0.04 || 1;
    return { lo: lo - pad, hi: hi + pad };
  }

  // ---- leaderboard header/body -------------------------------------------
  function dimTh(d, sep) {
    const sorted = sortKey === d.key;
    return `<th class="eq4-dim sortable${sep ? " eq4-dim-sep" : ""}${sorted ? " sorted" : ""}" data-key="${d.key}" title="${esc(d.label)} — ${esc(d.description)}">`
      + `<span class="dimlabel">${esc(d.short)}</span>${sorted ? `<span class="arrow">${sortDir < 0 ? "▼" : "▲"}</span>` : ""}</th>`;
  }
  function buildHead() {
    const arrow = k => sortKey === k ? `<span class="arrow">${sortDir < 0 ? "▼" : "▲"}</span>` : `<span class="arrow">▼</span>`;
    const cls = k => "sortable" + (sortKey === k ? " sorted" : "");
    const traitHeads = DIMS.map((d, i) => dimTh(d, i === 0)).join("");
    const abilityHeads = ABILITIES.map((a, i) => dimTh(a, i === 0)).join("");
    const info = `<button class="eq4-info" data-info aria-label="What do these mean?">i</button>`;
    const groupRow = (DIMS.length && ABILITIES.length)
      ? `<tr>
           <th colspan="${DIMS.length}" class="eq4-grouphdr eq4-dim-sep"><div class="eq4-group"><span>Traits ${info}</span></div></th>
           <th colspan="${ABILITIES.length}" class="eq4-grouphdr eq4-dim-sep"><div class="eq4-group"><span>Abilities ${info}</span></div></th>
         </tr>` : "";
    document.getElementById("eq4Head").innerHTML =
      `<tr>
        <th rowspan="2" class="eq4-toggle-head"></th>
        <th rowspan="2" class="${cls("model")}" data-key="model">Model${arrow("model")}</th>
        <th rowspan="2" class="${cls("elo")} eq4-elo-cell" data-key="elo">ELO&nbsp;/&nbsp;95% CI${arrow("elo")}</th>
        ${traitHeads}${abilityHeads}
        <th rowspan="2" class="eq4-transcript-head"></th>
      </tr>
      ${groupRow}`;
    document.querySelectorAll("#eqbench4-leaderboard th[data-key]").forEach(th => {
      th.addEventListener("click", () => onSort(th.dataset.key));
    });
  }

  function rowSortVal(m, key) {
    if (key === "rank") return m.rank;
    if (key === "model") return m.display.toLowerCase();
    if (key === "elo") return m.elo;
    if (m.dims && m.dims[key] != null) return m.dims[key];
    if (m.abilities && m.abilities[key] != null) return m.abilities[key];
    return -Infinity;
  }
  function sortedModels() {
    return MODELS.slice().sort((a, b) => {
      const va = rowSortVal(a, sortKey), vb = rowSortVal(b, sortKey);
      if (va < vb) return -sortDir;
      if (va > vb) return sortDir;
      return a.rank - b.rank;
    });
  }
  function eloCell(m) {
    const ax = eloAxis(), span = ax.hi - ax.lo || 1;
    const pct = Math.max(2, Math.min(100, ((m.elo - ax.lo) / span) * 100));
    const hasCi = Number.isFinite(m.ci_low) && Number.isFinite(m.ci_high) && m.ci_high > m.ci_low;
    let ci = "";
    if (hasCi) {
      const leftPct = Math.max(0, Math.min(100, ((m.ci_low - ax.lo) / span) * 100));
      const widthPct = Math.max(0, Math.min(100 - leftPct, ((m.ci_high - m.ci_low) / span) * 100));
      ci = `<div class="error-bar" style="left:${leftPct.toFixed(2)}%; width:${widthPct.toFixed(2)}%;"></div>`;
    }
    const title = `ELO ${m.elo}` + (hasCi ? ` (95% CI ${m.ci_low}–${m.ci_high})` : "");
    return `<div class="eq4-score-cell" title="${esc(title)}">
        <span class="eq4-score-text">${Math.round(m.elo)}</span>
        <div class="eq4-score-track">
          <div class="judgemark-score-bar" style="width:${pct.toFixed(2)}%;"></div>${ci}
        </div>
      </div>`;
  }
  function modelCell(m) {
    const prov = (m.model && m.model.includes("/")) ? `<span class="prov">${esc(m.model.split("/")[0])}/</span>` : "";
    return `<span class="eq4-model">${prov}${esc(m.display)}</span>`;
  }
  function cellFor(obj, d, sep, ability) {
    const v = obj ? obj[d.key] : undefined;
    const na = v == null || isNaN(v);
    const txt = na ? "" : (ability ? (v >= 0 ? "+" : "") + v.toFixed(1) : v.toFixed(1));
    const title = `${d.label}: ${na ? "n/a" : v.toFixed(2)}${ability ? " (relative to neighbours)" : ""}`;
    return `<td class="eq4-dim-cell${sep ? " eq4-dim-sep" : ""}" data-v="${na ? "" : v}" style="background-color:${heatColor(v, d.key)}" title="${esc(title)}">${txt}</td>`;
  }
  function transcriptBtn(m) {
    return m.transcript_dir
      ? `<button class="eq4-transcript-btn" data-dir="${esc(m.transcript_dir)}" data-model="${esc(m.display)}">Transcripts</button>`
      : `<button class="eq4-transcript-btn" disabled>—</button>`;
  }
  // compact per-model profile shown in the mobile expand row (incl. transcripts)
  function miniProfile(m) {
    function chips(items, src, ability) {
      return items.map(d => {
        const v = (m[src] || {})[d.key];
        if (v == null || isNaN(v)) return "";
        const txt = ability ? (v >= 0 ? "+" : "") + v.toFixed(1) : v.toFixed(1);
        return `<span class="eq4-mchip" style="background:${heatColor(v, d.key)}"><b>${txt}</b> ${esc(d.short)}</span>`;
      }).join("");
    }
    const info = `<button class="eq4-info" data-info aria-label="What do these mean?">i</button>`;
    return `<div class="eq4-mgrp">Traits ${info}</div><div class="eq4-mchips">${chips(DIMS, "dims", false)}</div>`
      + (ABILITIES.length ? `<div class="eq4-mgrp">Abilities ${info}</div><div class="eq4-mchips">${chips(ABILITIES, "abilities", true)}</div>` : "")
      + `<div class="eq4-mtranscript">${transcriptBtn(m)}</div>`;
  }
  function buildBody() {
    const totalCols = 4 + DIMS.length + ABILITIES.length;
    const rows = sortedModels().map(m => {
      let dimCells = "";
      DIMS.forEach((d, i) => dimCells += cellFor(m.dims, d, i === 0, false));
      ABILITIES.forEach((a, i) => dimCells += cellFor(m.abilities, a, i === 0, true));
      return `<tr class="eq4-mainrow">
        <td class="eq4-toggle-cell"><button class="eq4-toggle" aria-hidden="true" tabindex="-1"></button></td>
        <td class="eq4-model-cell">${modelCell(m)}</td>
        <td class="eq4-elo-cell">${eloCell(m)}</td>
        ${dimCells}
        <td class="eq4-transcript-cell">${transcriptBtn(m)}</td>
      </tr>
      <tr class="eq4-mrow"><td class="eq4-mrow-cell" colspan="${totalCols}">${miniProfile(m)}</td></tr>`;
    }).join("");
    document.getElementById("eq4Body").innerHTML = rows;
    document.querySelectorAll(".eq4-transcript-btn[data-dir]").forEach(btn => {
      btn.addEventListener("click", e => { e.stopPropagation(); openTranscripts(btn.dataset.dir, btn.dataset.model); });
    });
    // whole row toggles its expand panel (only visible on mobile)
    document.querySelectorAll("tr.eq4-mainrow").forEach(tr => {
      tr.addEventListener("click", () => {
        const mrow = tr.nextElementSibling;
        if (!mrow) return;
        const open = mrow.classList.toggle("open");
        const tog = tr.querySelector(".eq4-toggle");
        if (tog) tog.classList.toggle("open", open);
      });
    });
  }
  function onSort(key) {
    if (sortKey === key) sortDir = -sortDir;
    else { sortKey = key; sortDir = (key === "model" || key === "rank") ? 1 : -1; }
    buildHead(); buildBody();
  }
  function glossList(items) {
    return items.map(d => `<dt>${esc(d.label)}</dt><dd>${esc(d.description)}</dd>`).join("");
  }
  function buildGlossary() {
    const dl = document.getElementById("eq4GlossList");
    if (!dl) return;
    let html = `<dt class="eq4-gloss-grp">Traits — neutral behavioural tendencies</dt>` + glossList(DIMS);
    if (ABILITIES.length) {
      html += `<dt class="eq4-gloss-grp">Abilities — pairwise skill, shown relative to nearest-ranked neighbours</dt>` + glossList(ABILITIES);
    }
    dl.innerHTML = html;
  }

  // ---- view switch (Leaderboard | Personas) ------------------------------
  function setupViews() {
    const lbLink = document.getElementById("eq4LeaderboardLink");
    const pLink = document.getElementById("eq4PersonasLink");
    const lbView = document.getElementById("eq4LeaderboardView");
    const pView = document.getElementById("eq4PersonasView");
    function show(which) {
      const personas = which === "personas";
      lbView.hidden = personas;
      pView.hidden = !personas;
      lbLink.classList.toggle("active", !personas);
      pLink.classList.toggle("active", personas);
      if (personas && window.EQ4Personas) window.EQ4Personas.init(document.getElementById("eq4Personas"));
      if (history.replaceState) history.replaceState(null, "", personas ? "#personas" : "#leaderboard");
    }
    lbLink.addEventListener("click", () => show("leaderboard"));
    pLink.addEventListener("click", () => show("personas"));
    if (location.hash === "#personas") show("personas");
  }

  // ====================================================================
  //  Transcript browser (master–detail modal, fetched on demand)
  // ====================================================================
  const TB = { dir: null, display: null, index: null, cache: {}, query: "" };

  function openTranscripts(dir, display) {
    TB.dir = dir; TB.display = display; TB.index = null; TB.cache = {}; TB.query = "";
    document.getElementById("eq4TmodalTitle").textContent = "Transcripts — " + display;
    document.getElementById("eq4TmodalShell").classList.remove("reading");
    document.getElementById("eq4TmodalBack").hidden = true;
    document.getElementById("eq4Treader").innerHTML = '<div class="placeholder">Select a conversation to read.</div>';
    document.getElementById("eq4Tlist").innerHTML = '<div class="placeholder" style="padding:1rem">Loading…</div>';
    document.getElementById("eq4Tmodal").classList.add("is-open");
    document.body.style.overflow = "hidden";

    fetch(`${DOCS_BASE}${dir}/index.json`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(idx => { TB.index = idx; renderTList(true); })
      .catch(err => {
        document.getElementById("eq4Tlist").innerHTML =
          `<div class="placeholder" style="padding:1rem">Could not load transcripts (${esc(err.message)}).<br>This page must be served over http(s).</div>`;
      });
  }
  function closeTranscripts() {
    document.getElementById("eq4Tmodal").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  // deterministic per-conversation seed → a stable "random" default order
  function shufKey(e) {
    const s = "42|" + String(e.scenario_id || e.i);
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function filteredSortedEntries() {
    let rows = (TB.index.transcripts || []).slice();
    const q = TB.query.trim().toLowerCase();
    if (q) rows = rows.filter(e =>
      [e.title, e.category, e.relationship, e.task_type].some(x => (x || "").toLowerCase().includes(q)));
    rows.sort((a, b) => shufKey(a) - shufKey(b)); // fixed deterministic shuffle
    return rows;
  }
  function trowHtml(e) {
    const meta = [titleize(e.relationship), titleize(e.task_type || e.category)].filter(Boolean).join(" · ");
    const score = Number(e.ability_score);
    const badge = Number.isFinite(score)
      ? `<span class="eq4-ability-badge ${score >= 0 ? "pos" : "neg"}" title="Aggregate pairwise ability score for this item vs nearby Elo neighbours">${signed(score)}</span>`
      : "";
    return `<div class="eq4-trow" data-file="${esc(e.file)}">
        <div class="t-main"><div class="t-title">${esc(e.title || titleize(e.category) || "Conversation")}</div>
          <div class="t-meta">${esc(meta)}</div></div>
        ${badge}
      </div>`;
  }
  function renderRowsOnly() {
    return filteredSortedEntries().map(trowHtml).join("") || '<div class="placeholder" style="padding:1rem">No matches.</div>';
  }
  function renderTList(selectFirst) {
    const idx = TB.index;
    document.getElementById("eq4Tlist").innerHTML =
      `<div class="eq4-tlist-controls">
         <input type="text" id="eq4Tsearch" placeholder="Search ${idx.n} conversations…" value="${esc(TB.query)}">
       </div>
       <div class="eq4-tlist-rows">${renderRowsOnly()}</div>`;
    const search = document.getElementById("eq4Tsearch");
    search.addEventListener("input", () => { TB.query = search.value; document.querySelector(".eq4-tlist-rows").innerHTML = renderRowsOnly(); wireRows(); });
    wireRows();
    if (selectFirst) {
      const first = document.querySelector(".eq4-trow");
      if (first) selectConvo(first.dataset.file, first);
    }
  }
  function wireRows() {
    document.querySelectorAll(".eq4-trow").forEach(row => {
      row.addEventListener("click", () => selectConvo(row.dataset.file, row));
    });
  }

  function selectConvo(file, rowEl) {
    document.querySelectorAll(".eq4-trow.active").forEach(r => r.classList.remove("active"));
    if (rowEl) rowEl.classList.add("active");
    document.getElementById("eq4TmodalShell").classList.add("reading");
    document.getElementById("eq4TmodalBack").hidden = false;
    const reader = document.getElementById("eq4Treader");
    if (TB.cache[file]) { reader.innerHTML = renderReader(TB.cache[file]); reader.scrollTop = 0; return; }
    reader.innerHTML = '<div class="placeholder">Loading…</div>';
    fetch(`${DOCS_BASE}${TB.dir}/${file}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(c => { TB.cache[file] = c; reader.innerHTML = renderReader(c); reader.scrollTop = 0; })
      .catch(err => { reader.innerHTML = `<div class="placeholder">Could not load (${esc(err.message)}).</div>`; });
  }

  function demoFromDoc(doc) {
    const out = {};
    (doc.modifiers || []).forEach(m => { if (["age", "gender", "sexuality"].includes(m.category)) out[m.category] = m.label; });
    const parts = [];
    if (out.age) parts.push(out.age);
    if (out.gender) parts.push(out.gender);
    if (out.sexuality && !["Heterosexual", "Straight"].includes(out.sexuality)) parts.push(out.sexuality);
    const ha = (doc.hand_authored || {}).public_setup;
    if (!parts.length && ha && ha.demographics) return ha.demographics.replace(/\.$/, "");
    return parts.join(", ");
  }

  function renderReader(c) {
    const doc = c.doc || {};
    const pres = doc.presenting_issue || {};
    const modelName = c.evaluated_model ? c.evaluated_model.split("/").pop() : "model";
    const sub = [titleize(c.relationship) + " conversation", titleize(c.task_type || c.category), c.num_turns + " turns"]
      .filter(Boolean).join(" · ");
    const chips = [
      c.task_type ? `<span class="eq4-tr-chip">${esc(titleize(c.task_type))}</span>` : "",
      c.persona_model ? `<span class="eq4-tr-chip">persona: ${esc(c.persona_model.split("/").pop())}</span>` : "",
    ].join("");

    // full persona detail — the same sections the personas detail sheet shows
    const demo = demoFromDoc(doc);
    const detail = (window.EQ4Personas && window.EQ4Personas.personaSections)
      ? window.EQ4Personas.personaSections(doc)
      : `<p>${esc(pres.label || "")}</p>`;
    const personaFold = `<details class="eq4-fold"><summary>Persona context${demo ? " — " + esc(demo) : ""}</summary><div class="fold-body">${detail}</div></details>`;

    // transcript
    let turnsHtml = "";
    if (c.starter) {
      turnsHtml += `<div class="eq4-msg starter"><div class="who">Conversation starter (presenting issue)</div><div class="body">${esc(c.starter)}</div></div>`;
    }
    (c.turns || []).forEach(t => {
      const who = t.role === "user" ? "User (persona)"
        : (t.role === "assistant" ? "Assistant (" + esc(modelName) + ")" : esc(titleize(t.role)));
      let mono = "";
      const thinking = t.thinking || t.monologue;
      if (thinking) {
        const label = t.role === "user" ? "Persona internal thinking" : "Assistant internal thinking";
        mono = `<div class="eq4-thinking"><div class="eq4-thinking-label">${label}</div><div class="eq4-mono">${esc(thinking)}</div></div>`;
      }
      turnsHtml += `<div class="eq4-msg ${esc(t.role)}"><div class="who">${who}</div>${mono}<div class="body">${esc(t.content)}</div></div>`;
    });

    // per-conversation behavioural profile (bars), folded into the judge box
    let dimHtml = "";
    if (c.dims) {
      dimHtml = DIMS.map(d => {
        const v = c.dims[d.key];
        if (v == null) return "";
        return `<span class="n">${esc(d.label)}</span>
          <span class="track"><span class="fill" style="width:${(v * 10).toFixed(0)}%;background:${dimColor(v)}"></span></span>
          <span>${Number(v).toFixed(1)}</span>`;
      }).join("");
    }
    const profileBlock = dimHtml ? `<div class="eq4-dimbars" style="margin-bottom:.8rem">${dimHtml}</div>` : "";
    const analysisBlock = c.judge_analysis
      ? `<div style="white-space:pre-wrap;line-height:1.5">${esc(c.judge_analysis)}</div>`
      : `<em style="color:var(--eq4-muted)">No judge analysis recorded.</em>`;
    const judgeFold = `<details class="eq4-fold"><summary>Judge analysis &amp; behavioural profile</summary><div class="fold-body">${profileBlock}${analysisBlock}</div></details>`;

    let abilityFold = "";
    if (c.abilities && Object.keys(c.abilities).length) {
      const sampleTotal = Object.values(c.ability_samples || {}).reduce((a, b) => a + (Number(b) || 0), 0);
      const score = Number(c.ability_score);
      const abilityRows = ABILITIES.map(a => {
        const v = c.abilities[a.key];
        if (v == null || isNaN(v)) return "";
        const left = v < 0 ? Math.min(50, Math.abs(v) / 2 * 50) : 0;
        const right = v > 0 ? Math.min(50, v / 2 * 50) : 0;
        const style = v < 0
          ? `left:${(50 - left).toFixed(1)}%;width:${left.toFixed(1)}%;background:${abilityTone(v)}`
          : `left:50%;width:${right.toFixed(1)}%;background:${abilityTone(v)}`;
        return `<div class="eq4-abar-row">
          <div class="eq4-abar-name" title="${esc(a.label)}">${esc(a.short)}</div>
          <div class="eq4-abar-track"><span class="zero"></span><span class="fill" style="${style}"></span></div>
          <div class="eq4-abar-val">${signed(v)}</div>
        </div>`;
      }).join("");
      abilityFold = `<details class="eq4-fold eq4-ability-fold">
        <summary>Abilities${Number.isFinite(score) ? ` <span class="eq4-ability-badge ${score >= 0 ? "pos" : "neg"}">${signed(score)}</span>` : ""}</summary>
        <div class="fold-body">
          <div class="eq4-ability-note">Pairwise ability margins for this item, shown relative to nearby Elo neighbours. Positive means this response was judged stronger on that ability; values are sparse and should be read as local evidence, not a standalone item Elo.</div>
          <div class="eq4-abars">${abilityRows}</div>
          ${sampleTotal ? `<div class="eq4-ability-samples">${sampleTotal} judge-direction dimension samples used after neighbour balancing.</div>` : ""}
        </div>
      </details>`;
    }

    return `
      <div class="eq4-tr-h">${esc(pres.label || titleize(c.category) || "Conversation")}</div>
      <div class="eq4-tr-sub">${esc(sub)}</div>
      <div class="eq4-tr-chips">${chips}</div>
      ${judgeFold}
      ${abilityFold}
      ${personaFold}
      <div class="eq4-sec"><h4>Conversation</h4>${turnsHtml}</div>
    `;
  }

  function setupTranscriptModal() {
    document.getElementById("eq4TmodalClose").addEventListener("click", closeTranscripts);
    document.getElementById("eq4TmodalBack").addEventListener("click", () => {
      document.getElementById("eq4TmodalShell").classList.remove("reading");
      document.getElementById("eq4TmodalBack").hidden = true;
    });
    document.getElementById("eq4Tmodal").addEventListener("click", e => { if (e.target.id === "eq4Tmodal") closeTranscripts(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeTranscripts(); });
  }

  // ---- heatmap explainer modal ------------------------------------------
  function buildInfoModal() {
    const body = document.getElementById("eq4InfoBody");
    if (!body) return;
    const gloss = items => items.map(d => `<dt>${esc(d.label)}</dt><dd>${esc(d.description)}</dd>`).join("");
    body.innerHTML =
      `<p style="margin-top:0;line-height:1.55">Models are ranked by an <b>ELO</b> rating from blind, head-to-head judgements. The trait and ability scores are shown in two groups:</p>
       <div class="eq4-inote"><b>Traits</b> are behavioural tendencies, scored <b>0–10 by an LLM judge</b>. They're <b>neutral</b> — a high number just means "more of this tendency", not better or worse.</div>
       <div class="eq4-inote"><b>Abilities</b> are skills scored in <b>head-to-head pairwise comparisons</b> between models. The number shown is each model's <b>relative strength vs similarly ranked models</b> (the 4 nearest-ranked models on each side): <b>+</b> = stronger than nearby models, <b>−</b> = weaker, <b>0</b> ≈ in line with them.</div>
       <div class="eq4-inote">Within each trait or ability, colours run from the lowest model value (blue) to the highest (pink).</div>
       <h4>Traits</h4><dl class="eq4-idl">${gloss(DIMS)}</dl>
       ${ABILITIES.length ? `<h4>Abilities</h4><dl class="eq4-idl">${gloss(ABILITIES)}</dl>` : ""}`;
  }
  function openInfo() { document.getElementById("eq4InfoModal").classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeInfo() { document.getElementById("eq4InfoModal").classList.remove("open"); document.body.style.overflow = ""; }
  function setupInfoModal() {
    buildInfoModal();
    document.getElementById("eq4InfoClose").addEventListener("click", closeInfo);
    document.getElementById("eq4InfoModal").addEventListener("click", e => { if (e.target.id === "eq4InfoModal") closeInfo(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeInfo(); });
    // delegated: any [data-info] icon (header on desktop, breakout on mobile) opens it
    document.addEventListener("click", e => {
      const b = e.target.closest && e.target.closest("[data-info]");
      if (b) { e.stopPropagation(); openInfo(); }
    });
  }

  // expose the heatmap colorer for the personas module to reuse the palette
  window.EQ4 = { dimColor: dimColor };

  // ---- init --------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    setupDarkModeToggle();
    applySystemTheme();
    displayEncodedEmail();
    setupTranscriptModal();
    if (!MODELS.length) {
      document.getElementById("eq4Body").innerHTML =
        `<tr><td>No data found. Run <code>export_to_site.py</code> to generate <code>eqbench4_data.js</code>.</td></tr>`;
      return;
    }
    computeRanges();
    buildHead(); buildBody(); buildGlossary(); setupViews(); setupInfoModal();
  });
})();
