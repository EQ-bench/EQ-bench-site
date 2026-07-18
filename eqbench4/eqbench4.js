/* EQ-Bench 4 leaderboard + dynamic transcript browser.
   Renders from EQBENCH4_DATA (eqbench4_data.js). Transcripts and personas are
   fetched on demand from eqbench4_docs/ (JSON), rendered natively. Vanilla JS. */

(function () {
  "use strict";

  const DATA = (typeof EQBENCH4_DATA !== "undefined") ? EQBENCH4_DATA : { dimensions: [], abilities: [], models: [] };
  const DIMS = DATA.dimensions || [];          // neutral behavioural traits
  const ABILITIES = DATA.abilities || [];      // pairwise abilities
  const ABILITY_MODES = DATA.ability_modes || {};
  const MODEL_SUMMARIES = DATA.model_summaries || {};
  const JUDGE_REPORT = DATA.judge_report || {};
  const JUDGE_BIAS = DATA.judge_bias || {};
  const ITEM_ABILITY_LIMIT = 5;
  const PUBLIC_ABILITY_MODE = "absolute";
  let activeAbilityMode = ABILITY_MODES[PUBLIC_ABILITY_MODE] ? PUBLIC_ABILITY_MODE : (DATA.default_ability_mode || "absolute");
  let abilityScale = DATA.ability_scale || "neighbour-relative";
  const blendWeights = {
    fingerprint_neighbour_blend: 0.5,
    absolute_fingerprint_blend: 0.25,
  };
  const lambdaValues = {
    elo_anchored_fingerprint: 35,
    elo_anchored_neighbour: 50,
  };
  const MODE_VALUE_RANGES = {};
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
  function stripProv(s) {
    // Drop the provider prefix for display (e.g. "google/gemini-3.1-pro" -> "gemini-3.1-pro").
    const str = String(s == null ? "" : s);
    return str.includes("/") ? str.slice(str.indexOf("/") + 1) : str;
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
    const t = Math.max(0, Math.min(1, (v + ITEM_ABILITY_LIMIT) / (ITEM_ABILITY_LIMIT * 2)));
    return heatColorT(t);
  }
  function abilityIs0To10() {
    return String(abilityScale || "").includes("minmax-0-10")
      || String(abilityScale || "").includes("minmax-1-10");
  }
  function abilityModeMeta() {
    return ABILITY_MODES[activeAbilityMode] || { label: "Abilities", description: "" };
  }
  function computeModeValueRanges() {
    Object.keys(ABILITY_MODES).forEach(mode => {
      MODE_VALUE_RANGES[mode] = {};
      ABILITIES.forEach(a => {
        const vals = MODELS.map(m => {
          const modeData = m.ability_modes && m.ability_modes[mode];
          return modeData && modeData.values ? modeData.values[a.key] : null;
        }).filter(v => v != null && !isNaN(v));
        MODE_VALUE_RANGES[mode][a.key] = vals.length ? { min: Math.min(...vals), max: Math.max(...vals) } : { min: 1, max: 10 };
      });
    });
  }
  function modeValueFor(model, mode, abilityKey) {
    const modeData = model.ability_modes && model.ability_modes[mode];
    return modeData && modeData.values ? modeData.values[abilityKey] : null;
  }
  function normalizedModeValueFor(model, mode, abilityKey) {
    const raw = modeValueFor(model, mode, abilityKey);
    if (raw == null || isNaN(raw)) return null;
    const scale = (ABILITY_MODES[mode] && ABILITY_MODES[mode].scale) || "";
    if (String(scale).includes("minmax-0-10") || String(scale).includes("minmax-1-10")) return raw;
    const r = MODE_VALUE_RANGES[mode] && MODE_VALUE_RANGES[mode][abilityKey];
    if (!r || r.max <= r.min) return 5.5;
    return 1.0 + (raw - r.min) / (r.max - r.min) * 9.0;
  }
  function blendModeValues(model, meta, weight) {
    const parts = meta.blend || [];
    const left = parts[0], right = parts[1];
    const vals = {};
    ABILITIES.forEach(a => {
      const va = normalizedModeValueFor(model, left, a.key);
      const vb = normalizedModeValueFor(model, right, a.key);
      if (va == null && vb == null) return;
      const aVal = va == null ? vb : va;
      const bVal = vb == null ? va : vb;
      vals[a.key] = Math.round((aVal * (1 - weight) + bVal * weight) * 100) / 100;
    });
    return vals;
  }
  function eloAnchoredValues(meta) {
    const sourceMode = meta.anchored_source || "fingerprint";
    const lambda = lambdaValues[activeAbilityMode] == null
      ? Number(meta.lambda_default == null ? 100 : meta.lambda_default)
      : lambdaValues[activeAbilityMode];
    const rawByModel = {};
    MODELS.forEach(m => {
      const sourceVals = ABILITIES.map(a => normalizedModeValueFor(m, sourceMode, a.key))
        .filter(v => v != null && !isNaN(v));
      if (!sourceVals.length || !Number.isFinite(m.elo)) return;
      const sourceMean = sourceVals.reduce((sum, v) => sum + v, 0) / sourceVals.length;
      rawByModel[m.model] = {};
      ABILITIES.forEach(a => {
        const sourceValue = normalizedModeValueFor(m, sourceMode, a.key);
        if (sourceValue == null || isNaN(sourceValue)) return;
        rawByModel[m.model][a.key] = m.elo + lambda * (sourceValue - sourceMean);
      });
    });

    const out = {};
    ABILITIES.forEach(a => {
      const vals = MODELS.map(m => rawByModel[m.model] && rawByModel[m.model][a.key])
        .filter(v => v != null && !isNaN(v));
      const lo = vals.length ? Math.min(...vals) : 1;
      const hi = vals.length ? Math.max(...vals) : 10;
      MODELS.forEach(m => {
        const raw = rawByModel[m.model] && rawByModel[m.model][a.key];
        if (raw == null || isNaN(raw)) return;
        if (!out[m.model]) out[m.model] = {};
        out[m.model][a.key] = hi > lo
          ? Math.round((1.0 + (raw - lo) / (hi - lo) * 9.0) * 100) / 100
          : 5.5;
      });
    });
    return out;
  }
  function applyAbilityMode(mode) {
    if (!ABILITY_MODES[mode]) mode = Object.keys(ABILITY_MODES)[0] || mode;
    activeAbilityMode = mode;
    const meta = ABILITY_MODES[mode] || {};
    abilityScale = meta.scale || DATA.ability_scale || "neighbour-relative";
    const anchoredValues = meta.anchored_source ? eloAnchoredValues(meta) : null;
    MODELS.forEach(m => {
      const modeData = m.ability_modes && m.ability_modes[mode];
      if (anchoredValues) {
        m.abilities = anchoredValues[m.model] || {};
        m.ability_elos = {};
        m.ability_ranks = {};
      } else if (meta.blend && meta.blend.length === 2) {
        m.abilities = blendModeValues(m, meta, blendWeights[mode] == null ? 0.5 : blendWeights[mode]);
        m.ability_elos = {};
        m.ability_ranks = {};
      } else if (modeData && modeData.values) {
        m.abilities = modeData.values;
        m.ability_elos = modeData.elos || {};
        m.ability_ranks = modeData.ranks || {};
      }
    });
  }
  function abilityScaleNote() {
    if (String(abilityScale).includes("elo-anchored")) return " (Elo-anchored modifier, normalized 1-10)";
    if (String(abilityScale).includes("blend")) return " (ability/fingerprint blend, normalized 1-10)";
    if (String(abilityScale).includes("halo-centered")) return " (halo-centered per-dimension soft Bradley-Terry, normalized 1-10)";
    if (abilityIs0To10()) return " (per-dimension soft Bradley-Terry, normalized 1-10)";
    return " (relative to neighbours)";
  }
  function refreshAbilityModeSwitch() {
    const shell = document.getElementById("eq4AbilityModeShell");
    const desc = document.getElementById("eq4AbilityModeDesc");
    const sliderShell = document.getElementById("eq4AbilityBlendShell");
    const slider = document.getElementById("eq4AbilityBlendSlider");
    const value = document.getElementById("eq4AbilityBlendValue");
    const left = document.getElementById("eq4AbilityBlendLeft");
    const right = document.getElementById("eq4AbilityBlendRight");
    if (!shell) return;
    const keys = Object.keys(ABILITY_MODES);
    const meta = abilityModeMeta();
    shell.hidden = keys.length < 2;
    shell.querySelectorAll("[data-ability-mode]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.abilityMode === activeAbilityMode);
    });
    if (desc) desc.textContent = meta.description || "";
    if (sliderShell) {
      const blend = meta.blend && meta.blend.length === 2;
      const anchored = !!meta.anchored_source;
      sliderShell.hidden = !blend && !anchored;
      if (blend) {
        const labels = meta.blend_labels || meta.blend;
        const pct = Math.round((blendWeights[activeAbilityMode] == null ? 0.5 : blendWeights[activeAbilityMode]) * 100);
        if (slider) {
          slider.min = "0";
          slider.max = "100";
          slider.step = "1";
          slider.value = String(pct);
          slider.setAttribute("aria-label", "Blend amount");
        }
        if (value) value.textContent = `${pct}%`;
        if (left) left.textContent = labels[0] || "Left";
        if (right) right.textContent = labels[1] || "Right";
      } else if (anchored) {
        const lambda = lambdaValues[activeAbilityMode] == null
          ? Number(meta.lambda_default == null ? 100 : meta.lambda_default)
          : lambdaValues[activeAbilityMode];
        if (slider) {
          slider.min = String(meta.lambda_min == null ? 0 : meta.lambda_min);
          slider.max = String(meta.lambda_max == null ? 250 : meta.lambda_max);
          slider.step = String(meta.lambda_step == null ? 5 : meta.lambda_step);
          slider.value = String(lambda);
          slider.setAttribute("aria-label", "Anchored modifier lambda");
        }
        if (value) value.textContent = `lambda ${lambda}`;
        if (left) left.textContent = "Elo only";
        if (right) right.textContent = `More ${meta.anchored_source_label || titleize(meta.anchored_source)}`;
      }
    }
  }
  function setupAbilityModeSwitch() {
    const el = document.getElementById("eq4AbilityModeSwitch");
    const shell = document.getElementById("eq4AbilityModeShell");
    if (!el || !shell) return;
    const preferred = ["absolute", "fingerprint", "neighbour", "fingerprint_neighbour_blend", "absolute_fingerprint_blend", "elo_anchored_fingerprint", "elo_anchored_neighbour"];
    const keys = preferred.filter(k => ABILITY_MODES[k]).concat(
      Object.keys(ABILITY_MODES).filter(k => !preferred.includes(k))
    );
    if (keys.length < 2) {
      shell.hidden = true;
      return;
    }
    el.innerHTML = keys.map(key => {
      const meta = ABILITY_MODES[key] || {};
      return `<button class="eq4-ability-mode-btn" data-ability-mode="${esc(key)}">${esc(meta.label || titleize(key))}</button>`;
    }).join("");
    el.querySelectorAll("[data-ability-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        applyAbilityMode(btn.dataset.abilityMode);
        computeRanges();
        buildHead();
        buildBody();
        buildGlossary();
        buildInfoModal();
        refreshAbilityModeSwitch();
      });
    });
    const slider = document.getElementById("eq4AbilityBlendSlider");
    if (slider) {
      slider.addEventListener("input", () => {
        const meta = abilityModeMeta();
        if (meta.anchored_source) {
          lambdaValues[activeAbilityMode] = Number(slider.value);
        } else {
          blendWeights[activeAbilityMode] = Number(slider.value) / 100;
        }
        applyAbilityMode(activeAbilityMode);
        computeRanges();
        buildHead();
        buildBody();
        buildGlossary();
        buildInfoModal();
        refreshAbilityModeSwitch();
      });
    }
    refreshAbilityModeSwitch();
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
        <th rowspan="2" class="eq4-details-head"></th>
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
    return `<span class="eq4-model">${esc(m.display || (m.model || "").split("/").pop())}</span>`;
  }
  function detailsBtn(m) {
    const icon = `<svg class="eq4-details-ic" viewBox="0 0 16 16" aria-hidden="true">`
      + `<circle cx="7" cy="7" r="4.4" fill="none" stroke="currentColor" stroke-width="1.5"/>`
      + `<line x1="10.5" y1="10.5" x2="14.3" y2="14.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
    return `<button class="eq4-details-btn" data-details="${esc(m.model)}" aria-label="Open details for ${esc(m.display)}" title="Summary, transcripts, abilities & traits">`
      + `${icon}<span class="eq4-details-lbl">Details</span></button>`;
  }
  function cellFor(obj, d, sep, ability) {
    const v = obj ? obj[d.key] : undefined;
    const na = v == null || isNaN(v);
    const is0To10 = ability && abilityIs0To10();
    const txt = na ? "" : (ability && !is0To10 ? signed(v) : v.toFixed(1));
    const abilityNote = ability ? abilityScaleNote() : "";
    const title = `${d.label}: ${na ? "n/a" : v.toFixed(2)}${abilityNote}`;
    return `<td class="eq4-dim-cell${sep ? " eq4-dim-sep" : ""}" data-v="${na ? "" : v}" style="background-color:${heatColor(v, d.key)}" title="${esc(title)}">${txt}</td>`;
  }
  // compact per-model profile shown in the mobile expand row (incl. details)
  function miniProfile(m) {
    function chips(items, src, ability) {
      return items.map(d => {
        const v = (m[src] || {})[d.key];
        if (v == null || isNaN(v)) return "";
        const txt = ability && !abilityIs0To10() ? signed(v) : v.toFixed(1);
        return `<span class="eq4-mchip" style="background:${heatColor(v, d.key)}"><b>${txt}</b> ${esc(d.short)}</span>`;
      }).join("");
    }
    const info = `<button class="eq4-info" data-info aria-label="What do these mean?">i</button>`;
    return `<div class="eq4-mgrp">Traits ${info}</div><div class="eq4-mchips">${chips(DIMS, "dims", false)}</div>`
      + (ABILITIES.length ? `<div class="eq4-mgrp">Abilities ${info}</div><div class="eq4-mchips">${chips(ABILITIES, "abilities", true)}</div>` : "")
      + `<div class="eq4-mtranscript">${detailsBtn(m)}</div>`;
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
        <td class="eq4-details-cell">${detailsBtn(m)}</td>
      </tr>
      <tr class="eq4-mrow"><td class="eq4-mrow-cell" colspan="${totalCols}">${miniProfile(m)}</td></tr>`;
    }).join("");
    document.getElementById("eq4Body").innerHTML = rows;
    document.querySelectorAll(".eq4-details-btn[data-details]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const m = MODELS.find(x => x.model === btn.dataset.details);
        if (m) openDetails(m);
      });
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
      const label = abilityIs0To10()
        ? (String(abilityScale).includes("elo-anchored")
            ? "Abilities — Elo-anchored modifier scores, normalized 1-10 within each column"
            : String(abilityScale).includes("blend")
            ? "Abilities — 75% per-ability strength + 25% fingerprint, normalized 1-10 within each column"
            : String(abilityScale).includes("halo-centered")
            ? "Abilities — halo-centered per-dimension soft Bradley-Terry ratings, normalized 1-10 within each column"
            : "Abilities — independent per-dimension soft Bradley-Terry ratings, normalized 1-10 within each column")
        : "Abilities — pairwise skill, shown relative to nearest-ranked neighbours";
      html += `<dt class="eq4-gloss-grp">${label}</dt>` + glossList(ABILITIES);
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

  // ---- model profile modal ----------------------------------------------
  function percentile(model, key, src) {
    const vals = MODELS.map(m => m[src] && m[src][key]).filter(v => v != null && !isNaN(v)).sort((a, b) => a - b);
    const v = model[src] && model[src][key];
    if (!vals.length || v == null || isNaN(v)) return null;
    const below = vals.filter(x => x <= v).length;
    return below / vals.length;
  }
  function radarSvg(items, model, src, min, max) {
    const n = items.length;
    if (!n) return "";
    const cx = 120, cy = 120, r = 86;
    const pts = items.map((d, i) => {
      const raw = model[src] && model[src][d.key];
      const t = raw == null || isNaN(raw) ? 0 : Math.max(0, Math.min(1, (raw - min) / (max - min || 1)));
      const a = -Math.PI / 2 + i * Math.PI * 2 / n;
      return [cx + Math.cos(a) * r * t, cy + Math.sin(a) * r * t];
    });
    const axes = items.map((d, i) => {
      const a = -Math.PI / 2 + i * Math.PI * 2 / n;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      const lx = cx + Math.cos(a) * (r + 18), ly = cy + Math.sin(a) * (r + 18);
      return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"></line><text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}">${esc(d.short)}</text>`;
    }).join("");
    const rings = [0.33, 0.66, 1].map(t => `<circle cx="${cx}" cy="${cy}" r="${(r * t).toFixed(1)}"></circle>`).join("");
    return `<svg class="eq4-radar" viewBox="0 0 240 240" role="img">${rings}<g class="axes">${axes}</g><polygon points="${pts.map(p => p.map(x => x.toFixed(1)).join(",")).join(" ")}"></polygon></svg>`;
  }
  function rankedDeltas(model, items, src) {
    return items.map(d => {
      const p = percentile(model, d.key, src);
      const v = model[src] && model[src][d.key];
      return { d, p, v };
    }).filter(x => x.p != null).sort((a, b) => b.p - a.p);
  }
  function strengthList(model, items, src) {
    const ranked = rankedDeltas(model, items, src);
    const hi = ranked.slice(0, 3).map(x => `<li><b>${esc(x.d.label)}</b> <span>${Number(x.v).toFixed(1)}</span></li>`).join("");
    const lo = ranked.slice(-3).reverse().map(x => `<li><b>${esc(x.d.label)}</b> <span>${Number(x.v).toFixed(1)}</span></li>`).join("");
    return `<div class="eq4-profile-lists"><div><h4>Higher relative profile</h4><ul>${hi}</ul></div><div><h4>Lower relative profile</h4><ul>${lo}</ul></div></div>`;
  }
  // Data-driven domain for a point group, computed once across all models so the
  // x-scale is consistent model-to-model. Traits use the natural 0–10 rubric scale.
  const _pointDomain = {};
  function pointDomain(group) {
    if (_pointDomain[group]) return _pointDomain[group];
    if (group === "traits") { _pointDomain[group] = [0, 10]; return _pointDomain[group]; }
    let lo = Infinity, hi = -Infinity;
    MODELS.forEach(m => {
      const pts = (m.profile_points || {})[group] || {};
      Object.values(pts).forEach(arr => (arr || []).forEach(v => {
        if (v != null && !isNaN(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
      }));
    });
    if (!isFinite(lo)) { lo = -2; hi = 2; }
    const pad = (hi - lo) * 0.05 || 0.5;
    _pointDomain[group] = [lo - pad, hi + pad];
    return _pointDomain[group];
  }
  function pointRows(model, items, src) {
    const group = src === "dims" ? "traits" : "abilities";
    const [min, max] = pointDomain(group);
    const points = (model.profile_points || {})[group] || {};
    return items.map(d => {
      const vals = (points[d.key] || []).filter(v => v != null && !isNaN(v));
      const mean = vals.length ? vals.reduce((a, b) => a + Number(b), 0) / vals.length : null;
      const dots = vals.map((v, i) => {
        const pct = Math.max(0, Math.min(100, (v - min) / (max - min || 1) * 100));
        // Deterministic vertical jitter so overlapping points don't fully stack.
        const jit = ((i * 2654435761) % 1000) / 1000; // 0..1
        const top = 18 + jit * 64; // keep within the 24px track (% of height)
        return `<span class="dot" style="left:${pct.toFixed(1)}%;top:${top.toFixed(0)}%" title="${Number(v).toFixed(2)}"></span>`;
      }).join("");
      const meanPct = mean == null || isNaN(mean) ? null : Math.max(0, Math.min(100, (mean - min) / (max - min || 1) * 100));
      return `<div class="eq4-point-row"><div class="eq4-point-name" title="${esc(d.label)}">${esc(d.short)}</div>
        <div class="eq4-point-track">${dots}${meanPct == null ? "" : `<span class="mean" style="left:${meanPct.toFixed(1)}%" title="Mean ${Number(mean).toFixed(2)}"></span>`}</div>
        <div class="eq4-point-val">${vals.length ? vals.length + " pts" : "n/a"}</div></div>`;
    }).join("");
  }
  function profileTabPanel(model, kind) {
    if (kind === "abilities") {
      return `<div class="eq4-profile-grid">
          <div class="eq4-profile-panel"><h4>Ability radar</h4>${radarSvg(ABILITIES, model, "abilities", 1, 10)}<p class="eq4-profile-note">Each ability is fit independently from its pairwise margin outcomes, then normalized 1–10 within that ability column.</p></div>
          <div class="eq4-profile-panel"><h4>Relative strengths</h4>${strengthList(model, ABILITIES, "abilities")}</div>
        </div>
        <div class="eq4-profile-panel"><h4>Per-item ability evidence</h4><p class="eq4-profile-note">Each dot is this model's neighbour-relative ability evidence on one benchmark item (signed win-margin). The amber mark is the mean.</p>${pointRows(model, ABILITIES, "abilities")}</div>`;
    }
    return `<div class="eq4-profile-grid">
        <div class="eq4-profile-panel"><h4>Trait radar</h4>${radarSvg(DIMS, model, "dims", 0, 10)}<p class="eq4-profile-note">Traits are neutral behavioural tendencies scored 0–10 by a judge — a higher number means "more of this tendency", not better.</p></div>
        <div class="eq4-profile-panel"><h4>Relative profile</h4>${strengthList(model, DIMS, "dims")}</div>
      </div>
      <div class="eq4-profile-panel"><h4>Per-conversation trait scores</h4><p class="eq4-profile-note">Each dot is this model's pointwise trait score on one conversation. The amber mark is the mean.</p>${pointRows(model, DIMS, "dims")}</div>`;
  }

  // ====================================================================
  //  Unified model details modal (Summary | Transcripts | Abilities | Traits)
  // ====================================================================
  const TB = { dir: null, display: null, model: null, modelObj: null, index: null, cache: {}, query: "", tInit: false };

  function openDetails(model) {
    if (!model) return;
    TB.dir = model.transcript_dir || null;
    TB.display = model.display;
    TB.model = model.model;
    TB.modelObj = model;
    TB.index = null; TB.cache = {}; TB.query = ""; TB.tInit = false;

    document.getElementById("eq4TmodalTitle").textContent = `${model.display} — details`;
    document.getElementById("eq4PanelAbilities").innerHTML = profileTabPanel(model, "abilities");
    document.getElementById("eq4PanelTraits").innerHTML = profileTabPanel(model, "traits");
    renderSummaryPanel();

    document.getElementById("eq4TmodalShell").classList.remove("reading");
    document.getElementById("eq4TmodalBack").hidden = true;
    document.getElementById("eq4Treader").innerHTML = '<div class="placeholder">Select a conversation to read.</div>';
    document.getElementById("eq4Tlist").innerHTML = TB.dir
      ? '<div class="placeholder" style="padding:1rem">Loading…</div>'
      : '<div class="placeholder" style="padding:1rem">No transcripts available for this model.</div>';

    switchDtab("summary");
    document.getElementById("eq4Tmodal").classList.add("is-open");
    document.body.style.overflow = "hidden";

    if (TB.dir) {
      fetch(`${DOCS_BASE}${TB.dir}/index.json`)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(idx => {
          TB.index = idx; renderTList(); renderSummaryPanel();
          const active = document.querySelector("#eq4Dtabs .eq4-dtab.active");
          if (active && active.dataset.dtab === "transcripts") maybeLoadRandomTranscript();
        })
        .catch(err => {
          document.getElementById("eq4Tlist").innerHTML =
            `<div class="placeholder" style="padding:1rem">Could not load transcripts (${esc(err.message)}).<br>This page must be served over http(s).</div>`;
        });
    }
  }
  function switchDtab(name) {
    document.querySelectorAll("#eq4Dtabs .eq4-dtab").forEach(b => b.classList.toggle("active", b.dataset.dtab === name));
    document.querySelectorAll(".eq4-dpanel").forEach(p => { p.hidden = p.dataset.dpanel !== name; });
    if (name !== "transcripts") {
      document.getElementById("eq4TmodalShell").classList.remove("reading");
      document.getElementById("eq4TmodalBack").hidden = true;
    } else {
      maybeLoadRandomTranscript();
    }
  }
  // On first opening the Transcripts tab, fill the reader with a random conversation
  // instead of an empty placeholder. Does not force the mobile full-screen reader.
  function maybeLoadRandomTranscript() {
    if (TB.tInit || !TB.index) return;
    const rows = TB.index.transcripts || [];
    if (!rows.length) return;
    TB.tInit = true;
    const pick = rows[Math.floor(Math.random() * rows.length)];
    const rowEl = document.querySelector(`#eq4Tlist .eq4-trow[data-file="${pick.file}"]`);
    selectConvo(pick.file, rowEl, { auto: true });
  }
  // Scroll the list (only the list container) so the selected row is visible,
  // centring it when it's off-screen. No-op when already in view.
  function scrollRowIntoView(rowEl) {
    const cont = rowEl && rowEl.closest(".eq4-tlist-rows");
    if (!cont) return;
    const c = cont.getBoundingClientRect(), r = rowEl.getBoundingClientRect();
    if (r.top < c.top || r.bottom > c.bottom) {
      cont.scrollTop += (r.top - c.top) - (c.height - r.height) / 2;
    }
  }
  function renderSummaryPanel() {
    const panel = document.getElementById("eq4PanelSummary");
    if (!panel) return;
    panel.innerHTML = renderSummaryReader(summaryForTranscriptModel());
    panel.querySelectorAll(".eq4-cite[data-file]").forEach(btn => {
      btn.addEventListener("click", () => {
        const file = btn.getAttribute("data-file");
        TB.tInit = true; // explicit pick — don't let the random preload fire first
        switchDtab("transcripts");
        const row = document.querySelector(`.eq4-trow[data-file="${file}"]`);
        selectConvo(file, row);
      });
    });
  }
  function closeDetails() {
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
  function summaryForTranscriptModel() {
    return MODEL_SUMMARIES[TB.model] || MODEL_SUMMARIES[TB.display] || null;
  }
  function citationLookup() {
    // scenario_id -> {file, title} from the loaded transcript index
    const map = {};
    ((TB.index && TB.index.transcripts) || []).forEach(e => {
      if (e.scenario_id) map[e.scenario_id] = { file: e.file, title: e.title };
    });
    return map;
  }
  function renderCitations(ids, lookup) {
    if (!Array.isArray(ids) || !ids.length) return "";
    const chips = ids.map(id => {
      const hit = lookup[id];
      if (hit) return `<button type="button" class="eq4-cite" data-file="${esc(hit.file)}" title="${esc(hit.title || id)}">${esc(hit.title || id)}</button>`;
      return `<span class="eq4-cite eq4-cite-missing" title="${esc(id)}">${esc(id)}</span>`;
    }).join("");
    return `<div class="eq4-cites">${chips}</div>`;
  }
  function renderSummaryReader(summary) {
    if (!summary) return `<div class="eq4-tr-h">${esc(TB.display)} tendency summary</div>
      <div class="eq4-summary-doc">No summary available for this model yet.</div>`;
    // New schema: summary_prose / strengths / weaknesses / strategies[].
    // Falls back to the older {summary,text,evidence} shape.
    const prose = summary.summary_prose || summary.summary || summary.text || "";
    const strengths = Array.isArray(summary.strengths) ? summary.strengths : [];
    const weaknesses = Array.isArray(summary.weaknesses) ? summary.weaknesses : [];
    const strategies = Array.isArray(summary.strategies) ? summary.strategies : [];
    const legacyEvidence = Array.isArray(summary.evidence) ? summary.evidence : [];
    const lookup = citationLookup();
    const byModel = summary.summary_model ? ` · written by ${esc(stripProv(summary.summary_model))}` : "";

    const sw = (strengths.length || weaknesses.length) ? `<div class="eq4-sw">
        ${strengths.length ? `<div class="eq4-sw-col"><h4 class="eq4-sw-h pos">Characteristic strengths</h4><ul>${strengths.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>` : ""}
        ${weaknesses.length ? `<div class="eq4-sw-col"><h4 class="eq4-sw-h neg">Characteristic weak spots</h4><ul>${weaknesses.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>` : ""}
      </div>` : "";

    const strat = strategies.length ? `<h4 class="eq4-evidence-h">Recurring strategies <span class="eq4-cite-hint">(click an example to open it)</span></h4>
      <ul class="eq4-strats">${strategies.map(st => `<li><div class="eq4-strat-claim">${esc(st.claim || "")}</div>${renderCitations(st.cited_transcript_ids, lookup)}</li>`).join("")}</ul>` : "";

    const legacy = (!strategies.length && legacyEvidence.length) ? `<h4 class="eq4-evidence-h">Cited examples</h4><ul class="eq4-summary-evidence">${legacyEvidence.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";

    return `<div class="eq4-tr-h">${esc(TB.display)} — behavioural tendency summary</div>
      <div class="eq4-tr-sub">Synthesised by a summariser model from a sample of this model's transcripts and how its behaviour deviates from the field${byModel}.</div>
      <div class="eq4-summary-doc">${esc(prose || "No summary text available.").replace(/\n/g, "<br>")}</div>
      ${sw}${strat}${legacy}`;
  }
  function renderRowsOnly() {
    return filteredSortedEntries().map(trowHtml).join("") || '<div class="placeholder" style="padding:1rem">No matches.</div>';
  }
  function renderTList() {
    const idx = TB.index;
    document.getElementById("eq4Tlist").innerHTML =
      `<div class="eq4-tlist-controls">
         <input type="text" id="eq4Tsearch" placeholder="Search ${idx.n} conversations…" value="${esc(TB.query)}">
       </div>
       <div class="eq4-tlist-rows">${renderRowsOnly()}</div>`;
    const search = document.getElementById("eq4Tsearch");
    search.addEventListener("input", () => {
      TB.query = search.value;
      document.querySelector(".eq4-tlist-rows").innerHTML = renderRowsOnly();
      wireRows();
    });
    wireRows();
  }
  function wireRows() {
    document.querySelectorAll(".eq4-trow").forEach(row => {
      row.addEventListener("click", () => selectConvo(row.dataset.file, row));
    });
  }

  function selectConvo(file, rowEl, opts) {
    opts = opts || {};
    TB.tInit = true;
    document.querySelectorAll(".eq4-trow.active").forEach(r => r.classList.remove("active"));
    if (rowEl) { rowEl.classList.add("active"); scrollRowIntoView(rowEl); }
    // `auto` (random preload) fills the reader without dropping mobile into the
    // full-screen reader, so the conversation list stays visible.
    if (!opts.auto) {
      document.getElementById("eq4TmodalShell").classList.add("reading");
      document.getElementById("eq4TmodalBack").hidden = false;
    }
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
      c.persona_model ? `<span class="eq4-tr-chip">persona actor: ${esc(c.persona_model.split("/").pop())}</span>` : "",
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
    const judgeName = c.pointwise_judge_model ? c.pointwise_judge_model.split("/").pop() : "pointwise judge";
    const judgeNote = `<div class="eq4-ability-note">Pointwise trait profile from ${esc(judgeName)}. This analysis is about behavioural traits only; ability scores are produced separately by blind pairwise comparisons and do not include a judge thinking trace here.</div>`;
    const judgeFold = `<details class="eq4-fold"><summary>Trait judge analysis &amp; behavioural profile — ${esc(judgeName)}</summary><div class="fold-body">${judgeNote}${profileBlock}${analysisBlock}</div></details>`;

    let abilityFold = "";
    if (c.abilities && Object.keys(c.abilities).length) {
      const sampleTotal = Object.values(c.ability_samples || {}).reduce((a, b) => a + (Number(b) || 0), 0);
      const score = Number(c.ability_score);
      const abilityRows = ABILITIES.map(a => {
        const v = c.abilities[a.key];
        if (v == null || isNaN(v)) return "";
        const left = v < 0 ? Math.min(50, Math.abs(v) / ITEM_ABILITY_LIMIT * 50) : 0;
        const right = v > 0 ? Math.min(50, v / ITEM_ABILITY_LIMIT * 50) : 0;
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
          <div class="eq4-ability-note">Pairwise ability margins for this item on a −5 to +5 scale, shown relative to nearby Elo neighbours.</div>
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

  function setupDetailsModal() {
    document.getElementById("eq4TmodalClose").addEventListener("click", closeDetails);
    document.getElementById("eq4TmodalBack").addEventListener("click", () => {
      document.getElementById("eq4TmodalShell").classList.remove("reading");
      document.getElementById("eq4TmodalBack").hidden = true;
    });
    document.getElementById("eq4Tmodal").addEventListener("click", e => { if (e.target.id === "eq4Tmodal") closeDetails(); });
    document.querySelectorAll("#eq4Dtabs .eq4-dtab").forEach(btn => {
      btn.addEventListener("click", () => switchDtab(btn.dataset.dtab));
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetails(); });
  }

  // ---- heatmap explainer modal ------------------------------------------
  function buildInfoModal() {
    const body = document.getElementById("eq4InfoBody");
    if (!body) return;
    const gloss = items => items.map(d => `<dt>${esc(d.label)}</dt><dd>${esc(d.description)}</dd>`).join("");
    body.innerHTML =
      `<p style="margin-top:0;line-height:1.55">Models are ranked by an <b>ELO</b> rating from blind, head-to-head judgements. The trait and ability scores are shown in two groups:</p>
       <div class="eq4-inote"><b>Evaluation models:</b> personas are acted by <b>Gemini 3.1 Pro Preview</b>. Pairwise comparisons are judged by <b>Gemini 3.1 Pro Preview</b>, <b>GPT-5.5</b>, and <b>Claude Opus 4.6</b>. Pointwise trait scores are judged by <b>Claude Opus 4.8</b>.</div>
       <div class="eq4-inote"><b>Traits</b> are behavioural tendencies, scored <b>0–10 by an LLM judge</b>. They're <b>neutral</b> — a high number just means "more of this tendency", not better or worse.</div>
       <div class="eq4-inote"><b>Abilities</b> are independent per-dimension <b>soft Bradley–Terry ratings</b>, fit directly from the blind pairwise margin outcomes for that ability. They are not blended with or anchored to overall ELO.</div>
       <div class="eq4-inote">For display, each ability column is normalized separately to <b>1–10</b> across the current models. This preserves the ordering within an ability and makes differences easy to see; values should be compared within a column, not as a shared absolute scale across different abilities.</div>
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

  function buildJudgeReport() {
    const el = document.getElementById("eq4JudgeReport");
    if (!el) return;
    const jb = JUDGE_BIAS;
    if (!jb || !jb.judges) {
      el.innerHTML = `<p>Judge robustness report not available. Re-run <code>export_to_site.py</code> to regenerate it.</p>`;
      return;
    }
    const pct = v => (v == null ? "n/a" : (v >= 0 ? "+" : "") + v.toFixed(2));
    const rho = v => v == null ? "n/a" : Number(v).toFixed(3);
    const shortJudge = label => label === "pooled" ? "Pooled" : stripProv(label).replace(/(\d)-(\d+)$/, "$1.$2").replace(/-/g, " ");
    const matrixOrder = (jb.judges || []).filter(j => j !== "pooled");
    const matrix = jb.rank_agreement_matrix || {};
    const matrixVals = [];
    matrixOrder.forEach(row => matrixOrder.forEach(col => {
      const val = matrix[row] && matrix[row][col];
      if (row !== col && Number.isFinite(Number(val))) matrixVals.push(Number(val));
    }));
    const minAgree = matrixVals.length ? Math.min(...matrixVals) : 0;
    const maxAgree = matrixVals.length ? Math.max(...matrixVals) : 1;
    const mix = (a, b, t) => Math.round(a + (b - a) * t);
    const agreeBg = v => {
      if (v == null) return "rgba(120,115,140,.10)";
      if (maxAgree === minAgree) return "rgba(46,139,111,.22)";
      const t = Math.max(0, Math.min(1, (Number(v) - minAgree) / (maxAgree - minAgree)));
      const r = mix(154, 46, t);
      const g = mix(139, 139, t);
      const b = mix(70, 111, t);
      const a = 0.13 + 0.16 * t;
      return `rgba(${r},${g},${b},${a.toFixed(3)})`;
    };

    const agreementMatrix = matrixOrder.length ? `
      <div class="eq4-agree-wrap">
        <table class="eq4-agree">
          <thead><tr><th></th>${matrixOrder.map(col => `<th>${esc(shortJudge(col))}</th>`).join("")}</tr></thead>
          <tbody>
            ${matrixOrder.map(row => `<tr>
              <th>${esc(shortJudge(row))}</th>
              ${matrixOrder.map(col => {
                const val = matrix[row] && matrix[row][col];
                const cls = row === col ? " class=\"self\"" : "";
                const style = row === col ? "" : ` style="background:${agreeBg(val)}"`;
                return `<td${cls}${style}>${rho(val)}</td>`;
              }).join("")}
            </tr>`).join("")}
          </tbody>
        </table>
      </div>` : "";

    const selfBias = (jb.self_bias || []).map(s =>
      `<tr><td>${esc(s.judge)}</td><td>${pct(s.self_score)}</td><td>${pct(s.others_score_for_it)}</td>
        <td class="${s.self_minus_others > 0 ? "eq4-jb-pos" : ""}"><b>${pct(s.self_minus_others)}</b></td></tr>`).join("");

    const judgeCols = (jb.judges || []).map(j => `<th>${esc(j)}</th>`).join("");
    const disagree = (jb.largest_rank_disagreements || []).slice(0, 6).map(d => {
      const cells = (jb.judges || []).map(j => {
        const r = (d.rank_by_judge || {})[j];
        return `<td>${r == null ? "–" : "#" + r}</td>`;
      }).join("");
      return `<tr><td>${esc(d.model)}</td>${cells}<td><b>${d.rank_spread}</b></td></tr>`;
    }).join("");

    el.innerHTML = `
      <p>The pairwise ability ranking is judged round-robin by three models
        (${(jb.judges || []).map(esc).join(", ")}), across ${jb.n_judge_verdicts || 0}
        verdicts. To check judge robustness, we rerun the ELO calculation once for each
        judge, using only that judge's verdicts. We then compare each judge-only ranking
        with the pooled ranking from all judge verdicts. Each calculation is a deterministic
        soft Bradley-Terry fit over the fractional pairwise outcomes.</p>

      <div class="eq4-report-stack">
        <div class="eq4-report-block">
          <h4>Self-preference</h4>
          <table><thead><tr><th>Judge</th><th>Rates self</th><th>Peers rate it</th><th>Gap</th></tr></thead>
            <tbody>${selfBias || "<tr><td colspan='4'>n/a</td></tr>"}</tbody></table>
          <p class="eq4-jb-note">${esc(jb.self_bias_note || "")}</p>
        </div>
        <div class="eq4-report-block">
          <h4>Ranking agreement</h4>
          ${agreementMatrix || "<p class='eq4-jb-note'>n/a</p>"}
          <p class="eq4-jb-note">Spearman rank correlation between judge-only ELO rankings. 1.0 means identical ordering.</p>
        </div>
        <div class="eq4-report-block">
          <h4>Where the judges disagree most (ELO rank by judge)</h4>
          <table class="eq4-jb-wide"><thead><tr><th>Model</th>${judgeCols}<th>Spread</th></tr></thead>
            <tbody>${disagree || "<tr><td>n/a</td></tr>"}</tbody></table>
        </div>
      </div>`;
  }

  // expose the heatmap colorer for the personas module to reuse the palette
  window.EQ4 = { dimColor: dimColor };

  // ---- init --------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    setupDarkModeToggle();
    applySystemTheme();
    displayEncodedEmail();
    setupDetailsModal();
    if (!MODELS.length) {
      document.getElementById("eq4Body").innerHTML =
        `<tr><td>No data found. Run <code>export_to_site.py</code> to generate <code>eqbench4_data.js</code>.</td></tr>`;
      return;
    }
    computeModeValueRanges();
    applyAbilityMode(activeAbilityMode);
    setupAbilityModeSwitch();
    computeRanges();
    buildHead(); buildBody(); buildGlossary(); setupViews(); setupInfoModal(); buildJudgeReport();
  });
})();
