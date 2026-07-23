/* EQ-Bench 4 — native personas app (rendered from eqbench4_docs/personas.json).
   A port of the standalone personas viewer, re-themed to the EQ-Bench 4
   indigo/amber palette and integrated with the page's dark mode. Self-contained:
   injects its own CSS, fetches the data, renders into a container, and is
   idempotent (init runs once). Exposes window.EQ4Personas.init(container). */

(function () {
  "use strict";

  // Resolve payloads from this script rather than the page URL so this also
  // works when the site is served from a nested preview/deployment path.
  const SCRIPT_BASE = new URL(".", document.currentScript ? document.currentScript.src : document.baseURI);
  const PERSONAS_URL = new URL("eqbench4_docs/personas.json", SCRIPT_BASE).href;

  const CLUSTER_COLORS = {
    connection: "#5560b0", // indigo
    distress: "#5b86b8",   // blue
    guarded: "#8a6fb0",    // violet
    anger: "#cf9445",      // amber
  };

  // Emotion taxonomy (matches the dataset) — kept as constants so the persona
  // detail can be rendered standalone (e.g. inside the transcript browser)
  // without waiting for personas.json to load.
  const EMO_CLUSTERS = {
    connection: ["trusting", "respect", "safe", "understood", "engaged", "curious", "motivated", "vulnerable"],
    distress: ["anxious", "overwhelmed", "distressed", "sad", "ashamed", "insecure"],
    guarded: ["defensive", "resistant", "oppositional", "paranoid"],
    anger: ["angry", "irritated", "frustrated"],
  };
  const EMO_LABELS = { connection: "Openness & connection", distress: "Distress", guarded: "Guardedness", anger: "Anger" };
  const SCENARIO_FAMILIES_FALLBACK = [
    { key: "ego_threat_accountability", title: "Ego-Threat / Self-Image", blurb: "Self-image, status, shame or grievance entangled with problematic behaviour." },
    { key: "power_imbalanced_navigation", title: "Power-Imbalanced Navigation", blurb: "The respondent is in the lower-power position with someone who controls access, money, status or reputation." },
    { key: "reality_distortions", title: "Reality Distortions", blurb: "A person invested in a narrative that distorts contact with reality." },
    { key: "social_exclusion_ambiguous_rejection", title: "Social Exclusion / Ambiguous Rejection", blurb: "Ambiguous rejection, demotion and plausible-deniability status pressure." },
  ];

  let inited = false;
  let DATA = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function titleize(s) {
    return String(s || "").replace(/_/g, " ").trim().replace(/\b\w/g, c => c.toUpperCase());
  }

  // ---- CSS (eqp- prefixed, indigo/amber, dark-mode aware) ----------------
  const CSS = `
  .eqp, .eqp-overlay { --s: var(--eq4-surface,#fff); --s2: var(--eq4-inset,rgba(0,0,0,.035));
         --tx:#2a2833; --mut: var(--eq4-muted,#777284); --bd: rgba(120,115,140,.2);
         --indigo:#5560b0; --amber:#cf9445; }
  .eqp { color:var(--tx); }
  body.dark-mode .eqp, body.dark-mode .eqp-overlay { --tx:#ece9f2; --bd: rgba(255,255,255,.12); }
  .eqp-intro { color: var(--mut); max-width: 760px; margin: .2rem 0 1rem; }
  .eqp-toolbar { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin-bottom:1rem; }
  .eqp-toolbar select { font:inherit; font-size:.88rem; color:inherit; background:var(--s2);
    border:1px solid var(--bd); border-radius:999px; padding:.35rem .8rem; cursor:pointer; }
  .eqp-count { font-size:.82rem; color:var(--mut); font-weight:700; margin-left:auto; }
  .eqp-tabs { display:flex; gap:.4rem; margin-bottom:1rem; flex-wrap:wrap; }
  .eqp-tab { font:inherit; font-weight:700; font-size:.9rem; color:var(--mut); background:none; border:none;
    padding:.4rem .9rem; border-radius:999px; cursor:pointer; }
  .eqp-tab:hover { background:var(--s2); color:inherit; }
  .eqp-tab.active { background:var(--indigo); color:#fff; }
  .eqp-panel { display:none; } .eqp-panel.active { display:block; }

  .eqp-grid { display:grid; gap:14px; grid-template-columns:repeat(auto-fill,minmax(290px,1fr)); }
  .eqp-card { background:var(--s); border:1px solid var(--bd); border-radius:14px; padding:16px; cursor:pointer;
    position:relative; overflow:hidden; transition:transform .15s, box-shadow .15s, border-color .15s; }
  .eqp-card::before { content:""; position:absolute; left:0; top:0; bottom:0; width:4px; background:var(--accent,#5560b0); }
  .eqp-card:hover { transform:translateY(-3px); box-shadow:0 10px 24px rgba(40,38,60,.16); border-color:var(--accent,#5560b0); }
  .eqp-card.hide { display:none; }
  .eqp-card-top { display:flex; gap:12px; align-items:center; margin-bottom:10px; }
  .eqp-av { width:54px; height:54px; border-radius:50%; flex-shrink:0; overflow:hidden; background:var(--s2); }
  .eqp-av svg { width:100%; height:100%; display:block; }
  .eqp-id { font-size:.72rem; font-weight:700; color:var(--mut); }
  .eqp-name { font-size:1rem; font-weight:800; line-height:1.2; }
  .eqp-rel { font-size:.82rem; color:var(--mut); } .eqp-rel b{ color:var(--indigo); }
  body.dark-mode .eqp-rel b { color:#aab0e8; }
  .eqp-issue { font-size:.9rem; background:var(--s2); border-radius:9px; padding:9px 11px; margin-bottom:10px; line-height:1.4; }
  .eqp-chips { display:flex; flex-wrap:wrap; gap:6px; }
  .eqp-chip { font-size:.71rem; font-weight:700; padding:3px 9px; border-radius:999px; background:var(--s2); color:var(--mut); }
  .eqp-chip.feel { color:#fff; }
  .eqp-chip.sev-severe{ background:rgba(207,116,69,.18); color:#bd6a3a; }
  .eqp-chip.sev-moderate{ background:rgba(216,164,62,.18); color:#9a7321; }
  .eqp-chip.sev-mild{ background:rgba(85,96,176,.16); color:#4a55a0; }
  body.dark-mode .eqp-chip.sev-mild{ color:#aab0e8; }

  .eqp-empty { text-align:center; color:var(--mut); padding:3rem; }

  /* detail sheet */
  .eqp-overlay { display:none; position:fixed; inset:0; z-index:3200; background:rgba(30,28,40,.5); padding:24px; overflow-y:auto; }
  .eqp-overlay.open { display:flex; align-items:flex-start; justify-content:center; }
  .eqp-sheet { background:var(--eq4-surface,#fff); width:100%; max-width:720px; margin:24px auto; border-radius:16px;
    box-shadow:0 30px 70px rgba(0,0,0,.4); overflow:hidden; }
  body.dark-mode .eqp-sheet { background:#1a1a20; }
  .eqp-sheet-head { display:flex; gap:14px; align-items:center; padding:18px 20px; border-bottom:1px solid var(--bd);
    position:sticky; top:0; background:inherit; z-index:2; }
  .eqp-sheet-head .eqp-av { width:64px; height:64px; }
  .eqp-sheet-head h3 { margin:.1rem 0; font-size:1.3rem; font-weight:800; }
  .eqp-sheet-head .sub { color:var(--mut); font-size:.86rem; }
  .eqp-close { margin-left:auto; align-self:flex-start; border:1px solid var(--bd); background:none; color:inherit;
    border-radius:8px; width:34px; height:34px; cursor:pointer; font-size:1rem; }
  .eqp-close:hover { background:var(--indigo); color:#fff; border-color:var(--indigo); }
  .eqp-sheet-body { padding:18px 20px 24px; }
  .eqp-s { margin-bottom:18px; }
  .eqp-s > h4 { font-size:.74rem; text-transform:uppercase; letter-spacing:.07em; color:var(--mut); margin:0 0 9px;
    display:flex; align-items:center; gap:8px; }
  .eqp-s > h4::after { content:""; flex:1; height:1px; background:var(--bd); }
  .eqp-quote { font-style:italic; background:var(--s); border:1px solid var(--bd); border-left:4px solid var(--indigo);
    border-radius:9px; padding:12px 14px; line-height:1.5; }
  .eqp-prose { background:var(--s); border:1px solid var(--bd); border-radius:9px; padding:12px 14px; line-height:1.55; white-space:pre-wrap; }
  .eqp-prose.muted { color:var(--mut); }
  .eqp-kv { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:9px; margin-bottom:10px; }
  .eqp-kv .item{ background:var(--s); border:1px solid var(--bd); border-radius:9px; padding:9px 12px; }
  .eqp-kv .k{ font-size:.68rem; text-transform:uppercase; letter-spacing:.05em; color:var(--mut); font-weight:700; }
  .eqp-kv .v{ font-weight:700; }
  .eqp-trait{ background:var(--s); border:1px solid var(--bd); border-radius:9px; padding:11px 13px; margin-bottom:9px; }
  .eqp-trait .th{ display:flex; gap:9px; align-items:baseline; flex-wrap:wrap; margin-bottom:4px; }
  .eqp-trait .tc{ font-size:.68rem; text-transform:uppercase; letter-spacing:.05em; color:var(--mut); font-weight:800; }
  .eqp-trait .tn{ font-weight:800; color:var(--indigo); }
  body.dark-mode .eqp-trait .tn{ color:#aab0e8; }
  .eqp-trait .td{ font-size:.86rem; color:var(--mut); line-height:1.5; }
  .eqp-tags{ display:flex; flex-wrap:wrap; gap:7px; }
  .eqp-tag{ font-size:.8rem; padding:5px 11px; border-radius:999px; background:var(--s2); border:1px solid var(--bd); }
  .eqp-disc{ background:var(--s); border:1px solid var(--bd); border-radius:9px; padding:11px 13px; margin-bottom:8px; }
  .eqp-disc .dh{ display:flex; justify-content:space-between; gap:9px; align-items:center; margin-bottom:4px; }
  .eqp-disc .dl{ font-weight:700; font-size:.9rem; }
  .eqp-disc .db{ font-size:.85rem; color:var(--mut); line-height:1.45; }
  .eqp-sens{ font-size:.66rem; font-weight:800; text-transform:uppercase; padding:2px 8px; border-radius:999px; white-space:nowrap; }
  .eqp-sens.low{ background:rgba(85,96,176,.16); color:#4a55a0; }
  .eqp-sens.medium{ background:rgba(216,164,62,.2); color:#9a7321; }
  .eqp-sens.high{ background:rgba(207,116,69,.18); color:#bd6a3a; }
  .eqp-ladder .rung{ display:flex; gap:12px; padding:10px 0; border-bottom:1px solid var(--bd); }
  .eqp-ladder .rung:last-child{ border:none; }
  .eqp-ladder .lvl{ flex:0 0 70px; font-size:.72rem; font-weight:800; text-transform:uppercase; }
  .eqp-ladder .lvl .dot{ width:8px; height:8px; border-radius:50%; display:inline-block; margin-right:5px; }
  .eqp-ladder ul{ margin:0; padding-left:16px; } .eqp-ladder li{ font-size:.86rem; color:var(--mut); margin-bottom:3px; }
  .eqp-bf{ display:flex; gap:8px; padding:6px 0; font-size:.9rem; } .eqp-bf::before{ content:"⚠"; color:var(--amber); }
  .eqp-axes{ display:flex; flex-wrap:wrap; gap:6px; } .eqp-axis{ font-size:.78rem; font-weight:700; padding:4px 10px; border-radius:7px; background:rgba(138,111,176,.16); color:#7a5fa0; }
  body.dark-mode .eqp-axis{ color:#c3b3e0; }

  /* emotion meter + charts */
  .eqp-legend{ display:flex; flex-wrap:wrap; gap:12px; margin-bottom:12px; font-size:.8rem; color:var(--mut); }
  .eqp-legend .sw{ width:11px; height:11px; border-radius:3px; display:inline-block; margin-right:5px; vertical-align:middle; }
  .eqp-emoc{ margin-bottom:12px; } .eqp-emoc .ct{ font-size:.72rem; font-weight:800; text-transform:uppercase; letter-spacing:.05em; margin-bottom:6px; }
  .eqp-emorow{ display:flex; align-items:center; gap:10px; margin-bottom:5px; }
  .eqp-emorow .nm{ width:96px; flex-shrink:0; text-align:right; font-size:.82rem; color:var(--mut); }
  .eqp-emorow .tk{ flex:1; height:9px; background:var(--s2); border-radius:999px; overflow:hidden; }
  .eqp-emorow .fl{ display:block; height:100%; border-radius:999px; }
  .eqp-emorow .vl{ width:26px; font-size:.78rem; font-weight:700; color:var(--mut); }
  .eqp-charts{ display:grid; gap:14px; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); }
  .eqp-chart{ background:var(--s); border:1px solid var(--bd); border-radius:12px; padding:16px; }
  .eqp-chart h4{ margin:0 0 12px; font-size:.96rem; font-weight:800; }
  .eqp-bar{ display:flex; align-items:center; gap:10px; margin-bottom:7px; }
  .eqp-bar .bl{ width:130px; flex-shrink:0; font-size:.82rem; color:var(--mut); text-align:right; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .eqp-bar .bt{ flex:1; height:18px; background:var(--s2); border-radius:6px; overflow:hidden; }
  .eqp-bar .bf{ height:100%; border-radius:6px; display:flex; align-items:center; justify-content:flex-end; padding-right:7px; min-width:22px; }
  .eqp-bar .bv{ font-size:.72rem; font-weight:800; color:#fff; }

  /* dataset */
  .eqp-ds-lead{ color:var(--mut); max-width:820px; line-height:1.6; margin-bottom:1rem; }
  .eqp-flow{ max-width:880px; margin-bottom:1.4rem; }
  .eqp-flow-cols{ display:grid; grid-template-columns:1fr 1fr; gap:18px; }
  .eqp-node{ background:var(--s); border:1px solid var(--bd); border-radius:10px; padding:14px 16px; }
  .eqp-node.src{ background:var(--s2); border-style:dashed; }
  .eqp-node.eng{ border-left:5px solid var(--n,#5560b0); }
  .eqp-node.fin{ border:none; color:#fff; text-align:center; margin-top:6px;
    background:linear-gradient(120deg,#5560b0,#cf9445); }
  .eqp-node .k{ font-size:.7rem; font-weight:800; text-transform:uppercase; letter-spacing:.06em; color:var(--mut); }
  .eqp-node .tag{ font-size:.7rem; font-weight:800; text-transform:uppercase; color:var(--n,#5560b0); }
  .eqp-node .big{ font-size:1.8rem; font-weight:800; line-height:1; margin:2px 0; }
  .eqp-node .sub{ font-size:.82rem; color:var(--mut); line-height:1.4; } .eqp-node.fin .sub{ color:rgba(255,255,255,.92); }
  .eqp-arrow{ text-align:center; font-size:1.2rem; color:var(--mut); line-height:1.5; }
  .eqp-merge{ display:flex; justify-content:space-around; max-width:70%; margin:0 auto; color:var(--mut); }
  .eqp-fams{ display:grid; gap:14px; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); margin-bottom:1.4rem; }
  .eqp-fam{ background:var(--s); border:1px solid var(--bd); border-top:4px solid var(--c,#5560b0); border-radius:10px; padding:14px 16px; }
  .eqp-fam .fh{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
  .eqp-fam .ft{ font-weight:800; } .eqp-fam .fc{ font-size:.75rem; font-weight:800; color:#fff; background:var(--c,#5560b0); border-radius:999px; padding:2px 9px; }
  .eqp-fam p{ margin:0; font-size:.86rem; color:var(--mut); line-height:1.55; }
  .eqp-vs{ display:flex; flex-wrap:wrap; gap:12px; }
  .eqp-vs .it{ flex:1 1 150px; background:var(--s); border:1px solid var(--bd); border-radius:10px; padding:14px 18px; }
  .eqp-vs .n{ font-size:1.6rem; font-weight:800; color:#8a6fb0; } .eqp-vs .l{ font-size:.74rem; font-weight:700; text-transform:uppercase; color:var(--mut); }
  .eqp-h{ font-size:1.05rem; font-weight:800; margin:1.4rem 0 .8rem; }

  @media (max-width:760px){
    .eqp-grid{ grid-template-columns:1fr; }
    .eqp-flow-cols{ grid-template-columns:1fr; }
    .eqp-overlay{ padding:0; } .eqp-sheet{ margin:0; border-radius:0; min-height:100vh; max-width:100vw; }
    .eqp-emorow .nm{ width:76px; } .eqp-bar .bl{ width:96px; }
  }`;

  function injectCss() {
    if (document.getElementById("eqp-style")) return;
    const s = document.createElement("style");
    s.id = "eqp-style";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // ---- card --------------------------------------------------------------
  function card(d) {
    const feel = d._feeling || { name: "", cluster: "connection" };
    const color = CLUSTER_COLORS[feel.cluster] || "#5560b0";
    const pres = d.presenting_issue || {};
    const sev = (pres.severity_hint || "moderate").toLowerCase();
    const rel = titleize(d.assistant_relationship || "");
    const srcChip = d._hand_authored
      ? `<span class="eqp-chip">Targeted</span>` : `<span class="eqp-chip">Generated</span>`;
    const taskChip = d._task_type ? `<span class="eqp-chip">${esc(d._task_type)}</span>` : "";
    return `<div class="eqp-card" style="--accent:${color}"
        data-source="${esc(d.source_type || "")}" data-rel="${esc(d.assistant_relationship || "")}" data-sev="${esc(sev)}"
        data-doc="${d.doc_id}">
        <div class="eqp-card-top">
          <div class="eqp-av">${d._avatar || ""}</div>
          <div>
            <div class="eqp-id">#${String(d.doc_id).padStart(3, "0")}</div>
            <div class="eqp-name">${esc(d._demographics || "Unspecified")}</div>
            <div class="eqp-rel">talking to a <b>${esc(rel || "?")}</b></div>
          </div>
        </div>
        <div class="eqp-issue">${esc(pres.label || pres.description || "")}</div>
        <div class="eqp-chips">
          <span class="eqp-chip feel" style="background:${color}">${esc(titleize(feel.name))}</span>
          <span class="eqp-chip sev-${esc(sev)}">${esc(titleize(sev))}</span>
          ${srcChip}${taskChip}
        </div>
      </div>`;
  }

  // ---- detail sheet ------------------------------------------------------
  function disc(items) {
    if (!items || !items.length) return '<p class="eqp-prose muted">None specified.</p>';
    return items.map(it => {
      const s = (it.sensitivity || "").toLowerCase();
      const badge = s ? `<span class="eqp-sens ${s}">${titleize(s)} sensitivity</span>` : "";
      return `<div class="eqp-disc"><div class="dh"><span class="dl">${esc(it.label || "")}</span>${badge}</div><div class="db">${esc(it.content || "")}</div></div>`;
    }).join("");
  }
  function trait(cat, t) {
    if (!t) return "";
    return `<div class="eqp-trait"><div class="th"><span class="tc">${esc(cat)}</span><span class="tn">${esc(t.name || t.label || "")}</span></div><div class="td">${esc(t.description || "")}</div></div>`;
  }
  function emotionMeter(d) {
    const st = d.initial_state || {};
    const clusters = (DATA && DATA.emotion_clusters) || EMO_CLUSTERS;
    const labels = (DATA && DATA.cluster_labels) || EMO_LABELS;
    const legend = Object.keys(clusters).map(c =>
      `<span><span class="sw" style="background:${CLUSTER_COLORS[c]}"></span>${esc(labels[c] || titleize(c))}</span>`).join("");
    let blocks = "";
    Object.keys(clusters).forEach(c => {
      const present = clusters[c].filter(k => k in st).map(k => [k, +st[k]]).sort((a, b) => b[1] - a[1]);
      if (!present.length) return;
      const color = CLUSTER_COLORS[c];
      const rows = present.map(([k, v]) =>
        `<div class="eqp-emorow"><span class="nm">${titleize(k)}</span><span class="tk"><span class="fl" style="width:${(v * 10).toFixed(0)}%;background:${color}"></span></span><span class="vl">${v.toFixed(1)}</span></div>`).join("");
      blocks += `<div class="eqp-emoc"><div class="ct" style="color:${color}">${esc(labels[c] || titleize(c))}</div>${rows}</div>`;
    });
    return `<div class="eqp-legend">${legend}</div>${blocks}`;
  }
  function sheetBody(d) {
    const pres = d.presenting_issue || {}, core = d.core_issue || {}, persona = d.persona || {};
    const ha = d.hand_authored || {};
    const ps = ha.public_setup || {};
    let h = "";
    h += `<div class="eqp-s"><h4>How they show up</h4><div class="eqp-quote">${esc(pres.label || "")}</div>`;
    if (pres.description && pres.description.trim() !== (pres.label || "").trim())
      h += `<div class="eqp-prose muted" style="margin-top:8px">${esc(pres.description)}</div>`;
    h += `</div>`;
    if (ps.assistant_context)
      h += `<div class="eqp-s"><h4>What the assistant is told</h4><div class="eqp-prose">${esc(ps.assistant_context)}</div></div>`;
    const cat = titleize(core.category), subc = titleize(core.subcategory);
    let kv = "";
    if (cat) kv += `<div class="item"><div class="k">Category</div><div class="v">${esc(cat)}</div></div>`;
    if (subc) kv += `<div class="item"><div class="k">Theme</div><div class="v">${esc(subc)}</div></div>`;
    h += `<div class="eqp-s"><h4>The hidden core</h4>${kv ? `<div class="eqp-kv">${kv}</div>` : ""}
        <div class="eqp-quote" style="border-left-color:var(--amber)">${esc(core.label || "")}</div>
        <div class="eqp-prose" style="margin-top:8px">${esc(core.description || "")}</div></div>`;
    const tr = trait("Trust style", persona.trust_style) + trait("Defense style", persona.defense_style)
      + trait("Help-seeking", persona.help_seeking_stance) + trait("Verbal sophistication", persona.verbal_sophistication);
    if (tr) h += `<div class="eqp-s"><h4>How they relate</h4>${tr}</div>`;
    const staged = ha.staged_reveals;
    if (staged) {
      const order = [["low", "#5560b0"], ["medium", "#cf9445"], ["high", "#bd6a3a"]];
      let rungs = "";
      order.forEach(([lvl, col]) => {
        const vals = staged[lvl] || [];
        if (!vals.length) return;
        rungs += `<div class="rung"><div class="lvl"><span class="dot" style="background:${col}"></span>${lvl}</div><ul>${vals.map(v => `<li>${esc(v)}</li>`).join("")}</ul></div>`;
      });
      h += `<div class="eqp-s"><h4>What they reveal, as trust builds</h4><div class="eqp-ladder">${rungs}</div></div>`;
    }
    const adj = d.core_adjacent_attributes || [];
    if (adj.length && !staged) h += `<div class="eqp-s"><h4>Guarded details</h4>${disc(adj)}</div>`;
    const bf = ha.backfires || [];
    if (bf.length) h += `<div class="eqp-s"><h4>What makes it worse</h4>${bf.map(b => `<div class="eqp-bf"><span>${esc(b)}</span></div>`).join("")}</div>`;
    if ((d.sensitivities || []).length) h += `<div class="eqp-s"><h4>Sensitivities</h4>${disc(d.sensitivities)}</div>`;
    if ((d.preferences || []).length) h += `<div class="eqp-s"><h4>Preferences</h4>${disc(d.preferences)}</div>`;
    const mods = (d.modifiers || []).filter(m => !["age", "gender", "sexuality"].includes(m.category) && m.label !== "Demographics");
    if (mods.length) h += `<div class="eqp-s"><h4>Personality colour</h4><div class="eqp-tags">${mods.map(m => `<span class="eqp-tag">${esc(m.label)}</span>`).join("")}</div></div>`;
    const axes = ha.coverage_axes || [];
    if (axes.length) h += `<div class="eqp-s"><h4>Coverage axes</h4><div class="eqp-axes">${axes.map(a => `<span class="eqp-axis">${esc(titleize(a))}</span>`).join("")}</div></div>`;
    h += `<div class="eqp-s"><h4>Where they start, emotionally</h4>${emotionMeter(d)}</div>`;
    return h;
  }

  function sheet(d) {
    const rel = titleize(d.assistant_relationship || "");
    const subbits = [rel + " conversation", d._task_type].filter(Boolean).join(" · ");
    return `<div class="eqp-sheet">
        <div class="eqp-sheet-head">
          <div class="eqp-av">${d._avatar || ""}</div>
          <div><div class="eqp-id">Persona #${String(d.doc_id).padStart(3, "0")}</div>
            <h3>${esc(d._demographics_full || d._demographics || "")}</h3>
            <div class="sub">${esc(subbits)}</div></div>
          <button class="eqp-close" aria-label="Close">✕</button>
        </div>
        <div class="eqp-sheet-body">${sheetBody(d)}</div>
      </div>`;
  }

  // ---- distributions / charts -------------------------------------------
  function barChart(title, pairs, color) {
    if (!pairs.length) return "";
    const mx = Math.max(...pairs.map(p => p[1])) || 1;
    const rows = pairs.map(([l, v]) =>
      `<div class="eqp-bar"><span class="bl" title="${esc(l)}">${esc(l)}</span><span class="bt"><span class="bf" style="width:${Math.max(4, v / mx * 100).toFixed(0)}%;background:${color}"><span class="bv">${v}</span></span></span></div>`).join("");
    return `<div class="eqp-chart"><h4>${esc(title)}</h4>${rows}</div>`;
  }
  function counter(docs, fn) {
    const m = new Map();
    docs.forEach(d => { const k = fn(d); if (k) m.set(k, (m.get(k) || 0) + 1); });
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }
  function insights(docs) {
    const labels = DATA.cluster_labels || {};
    const charts = [
      barChart("Who they're talking to", counter(docs, d => titleize(d.assistant_relationship)), "#5b86b8"),
      barChart("Core issue category / task type", counter(docs, d => d._hand_authored ? (d._task_type || "Other") : titleize((d.core_issue || {}).category)), "#cf9445"),
      barChart("Severity", counter(docs, d => titleize((d.presenting_issue || {}).severity_hint)), "#bd6a3a"),
      barChart("Dominant feeling at the start", counter(docs, d => labels[(d._feeling || {}).cluster] || titleize((d._feeling || {}).cluster)), "#5560b0"),
      barChart("Gender", counter(docs, d => (d.modifiers || []).filter(m => m.category === "gender").map(m => m.label)[0]), "#8a6fb0"),
      barChart("Age", counter(docs, d => (d.modifiers || []).filter(m => m.category === "age").map(m => m.label)[0]), "#5b86b8"),
      barChart("Verbal sophistication", counter(docs, d => ((d.persona || {}).verbal_sophistication || {}).label), "#8a6fb0"),
    ].join("");
    return `<div class="eqp-charts">${charts}</div>`;
  }

  function dataset(docs) {
    const n = docs.length, nh = docs.filter(d => d._hand_authored).length, ng = n - nh;
    const fams = DATA.scenario_families || [];
    const famCounts = {};
    docs.forEach(d => { if (d.task_type) famCounts[d.task_type] = (famCounts[d.task_type] || 0) + 1; });
    const verbal = counter(docs, d => ((d.persona || {}).verbal_sophistication || {}).label);
    const FAMCOL = { ego_threat_accountability: "#cf9445", power_imbalanced_navigation: "#8a6fb0", reality_distortions: "#5b86b8", social_exclusion_ambiguous_rejection: "#5560b0" };

    const flow = `<div class="eqp-flow"><div class="eqp-flow-cols">
        <div><div class="eqp-node src"><div class="k">Building-block registry</div><div class="sub">core &amp; presenting issues · trust / defense / help-seeking styles · sensitivities · preferences · relationships · modifiers</div></div>
          <div class="eqp-arrow">↓</div>
          <div class="eqp-node eng" style="--n:#5b86b8"><div class="tag">Random generator</div><div class="big">${ng}</div><div class="sub">generated scenarios — breadth across everyday emotional problems</div></div></div>
        <div><div class="eqp-node src"><div class="k">Curated scenario types</div><div class="sub">ego-threat · power-imbalanced · reality distortions · social exclusion — each a distinct failure mode</div></div>
          <div class="eqp-arrow">↓</div>
          <div class="eqp-node eng" style="--n:#cf9445"><div class="tag">Targeted stress testing</div><div class="big">${nh}</div><div class="sub">${Object.keys(famCounts).length} families × 15, each stress-testing a specific failure mode</div></div></div>
      </div>
      <div class="eqp-merge"><span>↓</span><span>↓</span></div>
      <div class="eqp-node fin"><div class="big">${n}</div><div class="sub">scenario EQ-Bench 4 test set · varies verbal sophistication (low / moderate / above-average)</div></div></div>`;

    const famCards = `<div class="eqp-fam" style="--c:#5b86b8"><div class="fh"><span class="ft">Random Generator</span><span class="fc">${ng}</span></div><p>Combines core issues with compatible situations, trust/defense/help-seeking styles and demographic modifiers — breadth across personal conflict, young-adult transitions, caregiving, relationships, mental health, trauma, work, disputes, schooling and venting.</p></div>`
      + fams.map(f => `<div class="eqp-fam" style="--c:${FAMCOL[f.key] || "#5560b0"}"><div class="fh"><span class="ft">${esc(f.title)}</span><span class="fc">${famCounts[f.key] || 0}</span></div><p>${esc(f.blurb)}</p></div>`).join("");

    const vs = verbal.map(([l, v]) => `<div class="it"><div class="n">${v}</div><div class="l">${esc(l)}</div></div>`).join("");

    return `<div class="eqp-ds-lead">Each benchmark item is one persona in one scenario, with a relationship role, severity level, hidden profile, presenting issue, and conversation task. EQ-Bench 4 pairs broad, randomly generated everyday problems with curated scenario types that each stress a different failure mode — validation that becomes collusion, challenge that damages trust, practical help that enables a harmful frame, and apparent progress that may be partial, guarded, or tactical.</div>
      <div class="eqp-h">How the set is built</div>${flow}
      <div class="eqp-h">Scenario families</div><div class="eqp-fams">${famCards}</div>
      <div class="eqp-h">Persona expressiveness</div><div class="eqp-vs">${vs}</div>`;
  }

  // ---- assembly + interactions ------------------------------------------
  function render(container) {
    const docs = DATA.docs || [];
    const n = docs.length, nh = docs.filter(d => d._hand_authored).length, ng = n - nh;
    const rels = [...new Set(docs.map(d => d.assistant_relationship).filter(Boolean))].sort();
    const relOpts = rels.map(r => `<option value="${esc(r)}">${esc(titleize(r))}</option>`).join("");

    container.innerHTML = `<div class="eqp">
      <p class="eqp-intro">A cast of ${n} inner worlds — each a person showing up with a feeling on the surface and something harder underneath. Each card represents one benchmark item: a persona, a scenario, a relationship role, and a severity level. Open the Dataset tab for the category breakdown.</p>
      <div class="eqp-toolbar">
        <select id="eqpSource"><option value="">All sources</option><option value="generated">Generated</option><option value="hand_authored">Targeted</option></select>
        <select id="eqpRel"><option value="">All relationships</option>${relOpts}</select>
        <select id="eqpSev"><option value="">Any severity</option><option value="mild">Mild</option><option value="moderate">Moderate</option><option value="severe">Severe</option></select>
        <span class="eqp-count" id="eqpCount">${n} shown</span>
      </div>
      <div class="eqp-tabs">
        <button class="eqp-tab active" data-tab="gallery">Gallery</button>
        <button class="eqp-tab" data-tab="demographics">Demographics</button>
        <button class="eqp-tab" data-tab="dataset">Dataset</button>
      </div>
      <div class="eqp-panel active" data-panel="gallery"><div class="eqp-grid" id="eqpGrid">${docs.map(card).join("")}</div>
        <div class="eqp-empty" id="eqpEmpty" style="display:none">No personas match those filters.</div></div>
      <div class="eqp-panel" data-panel="demographics">${insights(docs)}</div>
      <div class="eqp-panel" data-panel="dataset">${dataset(docs)}</div>
    </div>
    <div class="eqp-overlay" id="eqpOverlay"></div>`;

    const byId = {};
    docs.forEach(d => byId[d.doc_id] = d);

    const fSrc = container.querySelector("#eqpSource"), fRel = container.querySelector("#eqpRel"), fSev = container.querySelector("#eqpSev");
    function applyFilters() {
      let shown = 0;
      container.querySelectorAll(".eqp-card").forEach(c => {
        const ok = (!fSrc.value || c.dataset.source === fSrc.value)
          && (!fRel.value || c.dataset.rel === fRel.value)
          && (!fSev.value || c.dataset.sev === fSev.value);
        c.classList.toggle("hide", !ok);
        if (ok) shown++;
      });
      container.querySelector("#eqpCount").textContent = shown + " shown";
      container.querySelector("#eqpEmpty").style.display = shown ? "none" : "block";
    }
    [fSrc, fRel, fSev].forEach(s => s.addEventListener("change", applyFilters));

    container.querySelectorAll(".eqp-tab").forEach(t => t.addEventListener("click", () => {
      container.querySelectorAll(".eqp-tab").forEach(x => x.classList.remove("active"));
      container.querySelectorAll(".eqp-panel").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      container.querySelector(`.eqp-panel[data-panel="${t.dataset.tab}"]`).classList.add("active");
    }));

    const overlay = container.querySelector("#eqpOverlay");
    function openSheet(id) {
      overlay.innerHTML = sheet(byId[id]);
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      overlay.querySelector(".eqp-close").addEventListener("click", closeSheet);
    }
    function closeSheet() { overlay.classList.remove("open"); document.body.style.overflow = ""; }
    container.querySelectorAll(".eqp-card").forEach(c => c.addEventListener("click", () => openSheet(+c.dataset.doc)));
    overlay.addEventListener("click", e => { if (e.target === overlay) closeSheet(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeSheet(); });
  }

  window.EQ4Personas = {
    // Render the full persona detail (every section the detail sheet shows) for
    // a raw dataset doc — reused by the transcript browser. Self-contained.
    personaSections: function (doc) {
      injectCss();
      return '<div class="eqp">' + sheetBody(doc || {}) + '</div>';
    },
    init: function (container) {
      if (inited || !container) return;
      inited = true;
      injectCss();
      container.innerHTML = '<p style="padding:2rem;color:#888">Loading personas…</p>';
      fetch(PERSONAS_URL)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(data => { DATA = data; render(container); })
        .catch(err => {
          inited = false;
          container.innerHTML = `<p style="padding:2rem;color:#888">Could not load personas (${esc(err.message)}). This page must be served over http(s).</p>`;
        });
    },
  };
})();
