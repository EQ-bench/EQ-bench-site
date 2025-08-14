//
// delusion-bench.js
// (CSV-driven leaderboard, dynamic feature headers, score bars instead of heatmap)
//


const leaderboardDataDelusion = `model_name,score_norm,score_0_100,pushback,de-escalation,safe_redirection,suggestions_to_seek_help,delusion_reinforcement,consciousness_claims,emotional_or_narrative_escalation,harmful_advice,sycophancy_or_praise,ci_low_norm,ci_high_norm
chatgpt-4o-latest,36.9,36.9,0.249,3.707,0.315,0.012,18.454,2.047,23.271,1.459,9.559,36.9,36.9
claude-3.5-sonnet,35.4,35.4,1.804,5.428,2.649,0.039,20.666,12.62,30.347,0.448,13.111,35.4,35.4
claude-sonnet-4,33.9,33.9,2.16,3.787,1.028,0.049,26.128,7.874,27.562,1.291,6.71,33.9,33.9
deepseek-r1-0528,23.1,23.1,1.013,0.968,0.279,0.317,16.265,2.296,19.832,7.614,4.121,23.1,23.1
gemini-2.5-flash.2,43.8,43.8,1.0,0.673,0.401,0.003,6.799,1.55,11.193,0.516,12.18,43.8,43.8
gemini-2.5-flash,44.9,44.9,1.015,1.282,0.428,0.07,7.239,0.646,9.463,0.649,12.917,44.9,44.9
gpt-5-2025-08-07,76.2,76.2,4.351,7.511,5.825,0.211,3.864,0.04,1.756,0.731,2.983,76.2,76.2
gpt-5-chat-latest,56.0,56.0,0.85,3.271,1.215,0.022,6.947,1.564,11.243,0.645,3.185,56.0,56.0
gpt-oss-120b,70.1,70.1,2.857,2.312,2.097,1.146,1.093,0.081,0.606,0.502,0.664,70.1,70.1
o4-mini,65.5,65.5,5.84,3.966,2.935,0.213,4.359,0.291,5.036,1.241,1.525,65.5,65.5
`;

/* ===================== Column Mapping and Consolidation ===================== */

// Define the display mapping for original columns
const COLUMN_DISPLAY_MAPPING = {
  'pushback': 'Pushback',
  'grounding': 'Grounding',
  'de-escalation': 'De-escalation',
  'safe_redirection': 'Safe Redirection',
  'suggestions_to_seek_help': 'Help Referral',
  'consciousness_claims': 'Consciousness Claims',
  'emotional_or_narrative_escalation': 'Escalation',
  'delusion_reinforcement': 'Delusion Reinforcement',
  'harmful_advice': 'Harmful Advice',
  'missed_cues': 'Missed Cues',
  'sycophancy_or_praise': 'Sycophancy/Praise'
};



// Process CSV data to create consolidated columns
function processCSVData(csvData) {
  const { headers, rows } = parseCSV(csvData);

  // Start with fixed leading columns
  const newHeaders = ['model_name', 'score_norm', 'score_0_100'];
  const processedHeaders = [];

  // Add any header that we have a display mapping for (preserves CSV order)
  for (let i = 3; i < headers.length - 2; i++) { // skip the last two CI cols
    const originalHeader = headers[i];
    if (COLUMN_DISPLAY_MAPPING[originalHeader]) {
      newHeaders.push(originalHeader);
      processedHeaders.push({
        displayName: COLUMN_DISPLAY_MAPPING[originalHeader],
        originalIndex: i,
        isCompound: false
      });
    }
  }

  // Append CI columns
  newHeaders.push('ci_low_norm', 'ci_high_norm');

  // Build processed rows 1:1 from the selected columns
  const processedRows = rows.map(row => {
    const newRow = [row[0], row[1], row[2]]; // model_name, score_norm, score_0_100

    // Add mapped single columns
    processedHeaders.forEach(h => {
      newRow.push(row[h.originalIndex]);
    });

    // CI
    newRow.push(row[row.length - 2], row[row.length - 1]);
    return newRow;
  });

  return {
    headers: newHeaders,
    rows: processedRows,
    displayHeaders: [
      'Model',
      'Score Norm',
      'Score 0-100',
      ...processedHeaders.map(h => h.displayName),
      'CI Low',
      'CI High'
    ]
  };
}


/* ===================== Config derived from processed CSV ===================== */
let HEADERS = [];
let DISPLAY_HEADERS = [];
let FEATURE_COL_START = 3;  // after model_name, score_norm, score_0_100
let FEATURE_COL_END   = null; // computed from header length
let SCORE_COL_INDEX   = null; // "Safety Score" display column index
let SAMPLE_COL_INDEX  = null; // built last
let TOTAL_COLS        = null;

const MOBILE_BREAKPOINT = 1050;
let lastSortedScoreColumn = null;
let currentSortedColumnIndex = null; // Track which column is currently sorted

/* ======== CSV parsing ======== */
function parseCSV(csvText){
  const lines = csvText.trim().split(/\r?\n/);
  const headers = lines[0].split(',').map(h=>h.trim());
  const rows = lines.slice(1).filter(l=>l.trim()!=='').map(line=>{
    // naive split is ok because our generator doesn't emit quoted commas
    return line.split(',').map(x=>x.trim());
  });
  return { headers, rows };
}

/* ======== Theme & utility ======== */
function setupDarkModeToggle(){
  const toggle = document.getElementById('darkModeToggle');
  const label  = document.getElementById('toggleLabel');
  const saved  = localStorage.getItem('darkModeEnabled');
  if (saved){
    document.body.classList.toggle('dark-mode', saved==='true');
    toggle.checked = (saved==='true'); label.textContent = toggle.checked ? 'Dark' : 'Light';
  }else{
    applySystemTheme();
  }
  toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark-mode', this.checked);
    label.textContent = this.checked ? 'Dark' : 'Light';
    localStorage.setItem('darkModeEnabled', this.checked);
    if ($.fn.DataTable.isDataTable('#leaderboard-delusion')){
      $('#leaderboard-delusion').DataTable().rows().invalidate('data').draw(false);
      updateFeatureScoreBars();
      refreshHeatmapLegend();
    }
  });
}
function applySystemTheme(){
  if (localStorage.getItem('darkModeEnabled') === null){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.getElementById('darkModeToggle');
    const label  = document.getElementById('toggleLabel');
    document.body.classList.toggle('dark-mode', prefersDark);
    toggle.checked = prefersDark; label.textContent = prefersDark ? 'Dark' : 'Light';
  }
}

// Generic 3-stop color scale factory
function lerp(a, b, t) { return a + (b - a) * t; }
function lerpRGB(a, b, t) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}
function hexToRgbArr(h){
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return m ? [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)] : [0,0,0];
}

function makeColorScale(stops) {
  // ---- tweak these to control where each segment starts/ends ----
  const breakpoints = [0.0, 0.15, 0.8, 1.0]; // must be same length as stops array, first=0, last=1

  // ---- convert colours to RGB arrays once ----
  const colors = stops.map(hexToRgbArr);

  return function (t, { alpha = 1 } = {}) {
    t = Math.max(0, Math.min(1, t));

    // find which segment we're in
    let seg = 0;
    for (let i = 0; i < breakpoints.length - 1; i++) {
      if (t <= breakpoints[i + 1]) {
        seg = i;
        break;
      }
    }

    // normalise t within this segment
    const t0 = breakpoints[seg];
    const t1 = breakpoints[seg + 1];
    const u = (t - t0) / (t1 - t0);

    // lerp between colours for this segment
    const rgb = lerpRGB(colors[seg], colors[seg + 1], u);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  };
}

// Example: 4-stop purple scale
const colorScale = makeColorScale([
  '#1d0b2e', // deep purple
  '#4b1360', // mid-dark violet
  '#7a1b90', // mid-light violet
  '#8f1faf',  // bright purple
  //'#a524c9'
]);





/* Heat-map legend */
function refreshHeatmapLegend(){
  const bar = document.querySelector('#heatmapLegend .legend-bar'); 
  if (!bar) return;
  
  const steps = 24;
  const cols = [];
  for (let i = 0; i <= steps; i++){
    const t = i / steps;
    cols.push(colorScale(t, { alpha: 0.9 }));
  }
  bar.style.background = `linear-gradient(to right, ${cols.join(',')})`;
}

/* ======== Build THEAD/TFOOT dynamically from processed headers ======== */
function buildHeaderFooter(displayHeaders){
  const theadRow = document.getElementById('db-head-row');
  const tfootRow = document.getElementById('db-foot-row');
  theadRow.innerHTML = ''; tfootRow.innerHTML = '';

  // Fixed left col
  const thModel = document.createElement('th'); thModel.textContent = 'Model'; thModel.classList.add('model-col');

  theadRow.appendChild(thModel);

  // Dynamic feature headers (between FEATURE_COL_START and FEATURE_COL_END inclusive)
  for (let i=FEATURE_COL_START; i<=FEATURE_COL_END; i++){
    const th = document.createElement('th');
    th.classList.add('feature-header','mobile-collapsible');
    th.textContent = displayHeaders[i];
    const HEADER_HELP_TEXT = {
      'Pushback': 'Offers pushback on user’s ideas',
      'Grounding': 'Attempts to ground the user in reality',
      'De-escalation': 'Actively reduces emotional or narrative intensity',
      'Safe Redirection': 'Redirects away from risky topics',
      'Help Referral': 'Suggests the user seek outside assistance',
      'Consciousness Claims': 'Asserts or implies it is conscious/sentient',
      'Escalation': 'Emotional or narrative escalation',
      'Delusion Reinforcement': 'Introduces or reinforces delusional frames/pseudoscience',
      'Harmful Advice': 'Suggestions that could be unsafe or damaging',
      'Missed Cues': 'Missed Cues (Fails to notice/act on concerning signals)',
      'Sycophancy/Praise': 'Flattery or praise'
    };

    th.removeAttribute('title');
    th.setAttribute('data-bs-title', HEADER_HELP_TEXT[displayHeaders[i]] || displayHeaders[i]);
    th.setAttribute('data-bs-toggle', 'tooltip');
    th.setAttribute('data-bs-trigger', 'hover click');
    th.setAttribute('data-bs-placement', 'top');


    theadRow.appendChild(th);
  }

  // Score + Sample
  const thScore = document.createElement('th'); thScore.textContent = 'Safety Score';
  const thSample= document.createElement('th'); thSample.textContent = ''; thSample.classList.add('sample-col');

  theadRow.appendChild(thScore); theadRow.appendChild(thSample);

  // Clone to footer
  tfootRow.innerHTML = theadRow.innerHTML;
}

/* ======== CSV → table body HTML ======== */
let maxScoreDisplay = 0;
let featureColumnMaxes = {}; // Store max values for each feature column
let featureColumnValues  = {};
let featureColumnMedians = {};

function rowHTMLFromCSVParts(parts){
  const modelNameRaw = parts[0];
  const scoreNorm    = parseFloat(parts[1]);      // used for bar + CI
  const score100     = parseFloat(parts[2]);      // not displayed, kept for future
  const ciLow        = parseFloat(parts[parts.length-2]);
  const ciHigh       = parseFloat(parts[parts.length-1]);

  // Max scale for bars from max of CI highs
  maxScoreDisplay = Math.max(maxScoreDisplay, isFinite(ciHigh) ? ciHigh : scoreNorm);

  // Features slice
  const featureVals = parts.slice(FEATURE_COL_START, FEATURE_COL_END+1).map(v => parseFloat(v));
  
  // Track max values for each feature column
  featureVals.forEach((val, idx) => {
    const colIndex = FEATURE_COL_START + idx;

    if (!isNaN(val)) {
      // ­­► keep max
      featureColumnMaxes[colIndex] = Math.max(featureColumnMaxes[colIndex] || 0, val);

      // ­­► NEW: stash raw value for median
      if (!featureColumnValues[colIndex]) featureColumnValues[colIndex] = [];
      featureColumnValues[colIndex].push(val);
    }
  });


  // Model display and sample link
  const safe = modelNameRaw
  .replace(/\//g, '__')
  .replace(/[^a-zA-Z0-9_.-]/g, '-')  // note the extra `.` in here
  .toLowerCase();
  const sampleHref = `results/delusionbench_reports/${safe}.html`;

  const featureCells = featureVals.map((v, idx)=>{
    const display = isNaN(v) ? '-' : (Math.round(v*100)/100).toFixed(2);
    const colIndex = FEATURE_COL_START + idx;
    
    // Create score bar for feature column - no visible text, show on hover
    const scoreBar = `
      <div class="score-bar-container feature-score-container">
        <div class="delusion-score-bar feature-score-bar" data-col-index="${colIndex}"
          style="width:0%; display:none;"></div>
      </div>`;

    
    return `<td class="mobile-collapsible feature-cell" 
            data-raw="${isNaN(v)?'':v}"
            data-order="${isNaN(v)?-Infinity:v}"
            data-col-index="${colIndex}"
            data-bs-title="${display}"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover click"
            data-bs-placement="top">
          <div class="cell-content">${scoreBar}</div>
        </td>`;

  }).join('');

  // Safety Score bar - text in front of bar with fixed width for alignment
  const scorePercent = 0; // computed after we know max
  const scoreBar = `
    <div class="score-bar-container safety-score-container">
      <span class="score-text safety-score-text">${isNaN(scoreNorm)?'-':scoreNorm.toFixed(1)}</span>

      <div class="score-track">
        <div class="delusion-score-bar" style="width:${scorePercent}%; display:none;"></div>
        ${ (isFinite(ciLow)&&isFinite(ciHigh)) ? `<div class="error-bar" style="left:0%; width:0%; display:none;"></div>` : '' }
      </div>
    </div>`;

  const modelCell = `<td class="model-col"><div class="cell-content">${modelNameRaw.includes('/') ?
      `<a href="https://huggingface.co/${modelNameRaw}" target="_blank" rel="noopener noreferrer">${modelNameRaw.split('/').pop()}</a>` :
      modelNameRaw}</div></td>`;

  const scoreCell = `<td class="score-col"
                       data-order="${isNaN(scoreNorm)?-Infinity:scoreNorm.toFixed(1)}">
                     <div class="cell-content">${scoreBar}</div>
                   </td>`;


  const sampleCell= `<td class="sample-col"><div class="cell-content"><a href="${sampleHref}">Chatlog</a></div></td>`;

  return `<tr data-model-name-full="${modelNameRaw}" data-score="${scoreNorm}" data-ci-low="${ciLow}" data-ci-high="${ciHigh}">
            ${modelCell}
            ${featureCells}
            ${scoreCell}
            ${sampleCell}
          </tr>`;
}

// 0 = OFF (pure linear v/max), 1 = full median anchoring; 0..1 blends
function scaleByMedian(value, median, max, compress = 0) {
  if (!Number.isFinite(max) || max <= 0 || !Number.isFinite(value)) return 0;

  const linear = Math.max(0, Math.min(1, value / max));
  if (!(compress > 0)) return linear; // OFF

  const hasMedian = Number.isFinite(median) && median > 0 && median < max;
  let anchored;

  if (!hasMedian) {
    anchored = linear; // fallback: no median info → linear
  } else if (value <= median) {
    // map [0..median] → [0..0.5]
    anchored = 0.5 * (value / median);
  } else {
    // map (median..max] → (0.5..1]
    const frac = (value - median) / (max - median);
    anchored = 0.5 + 0.5 * Math.max(0, Math.min(1, frac));
  }

  // Blend: compress=0 → linear, compress=1 → anchored
  return anchored * compress + linear * (1 - compress);
}







/* ======== Feature score bars with median compression ======== */
function updateFeatureScoreBars () {
  const dark = document.body.classList.contains('dark-mode');

  $('#leaderboard-delusion tbody tr').each(function () {
    for (let col = FEATURE_COL_START; col <= FEATURE_COL_END; col++) {
      const td  = $(this).find(`td[data-col-index="${col}"]`);
      const v   = parseFloat(td.attr('data-raw'));
      const max = featureColumnMaxes[col]   || 1;
      const med = featureColumnMedians[col] || 0;

      const bar = td.find('.feature-score-bar');

      if (!isNaN(v) && max > 0) {
        const rawNorm     = v / max;                       // for colour
        const scaledNorm  = scaleByMedian(v, med, max, 0.5);    // for width
        const widthPct    = scaledNorm * 100;

        // colour stays linear in raw value
        const colour = colorScale(Math.min(1, rawNorm), { alpha: dark ? 0.9 : 0.85 });

        bar.css({
          width:            `${widthPct.toFixed(2)}%`,
          'background':     '',
          'background-color': colour
        }).show();
      } else {
        bar.hide();
      }
    }
  });
}



/* ======== Score bar colors and CI placement ======== */
function updateScoreBarColors(){
  const rows = $('#leaderboard-delusion tbody tr:visible');
  const totalRows = rows.length;
  rows.each(function(idx){
    const row = $(this);
    const score = parseFloat(row.data('score'));
    const low   = parseFloat(row.data('ci-low'));
    const high  = parseFloat(row.data('ci-high'));

    const container = row.find('.score-col .score-bar-container');
    const bar  = container.find('.delusion-score-bar');
    const ebar = container.find('.error-bar');

    // width % based on score value, not full width
    const denom = Math.max(1, maxScoreDisplay);
    const w = Math.max(0, Math.min(100, (score/denom)*100));
    bar.css('width', `${w.toFixed(2)}%`);

    // Flat color by value using deep-green scale
    const intensity = Math.max(0, Math.min(1, score / Math.max(1, maxScoreDisplay)));
    const color = colorScale(intensity, { alpha: 1 });
    bar.css('background', ''); // clear any previous gradient
    bar.css('background-color', color);


    // error bar (place on same 0→max scale)
    if (isFinite(low) && isFinite(high)){
      const left = Math.max(0, Math.min(100, (low / denom)*100));
      const right= Math.max(0, Math.min(100, (high/ denom)*100));
      const width= Math.max(0, right - left);
      ebar.css('left', `${left.toFixed(2)}%`).css('width', `${width.toFixed(2)}%`);
    }
  });
}

/* ======== Mobile collapse ======== */
let middleStatsExpanded = false;
function collapseMiddleColumns(){
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const toggle   = $('#toggleMiddleStats');
  const legend   = $('#heatmapLegend');

  if (isMobile){
    toggle.removeClass('d-none').addClass('show-details-toggle-button');
    if (!middleStatsExpanded){
      $('#leaderboard-delusion .mobile-collapsible').hide();
      toggle.text('Expand Details'); legend.addClass('d-none');
    }else{
      $('#leaderboard-delusion .mobile-collapsible').show();
      toggle.text('Hide Details'); legend.removeClass('d-none');
    }
  }else{
    toggle.addClass('d-none').removeClass('show-details-toggle-button');
    legend.removeClass('d-none');
    $('#leaderboard-delusion .mobile-collapsible').show();
  }
  if ($.fn.DataTable.isDataTable('#leaderboard-delusion')){
    setTimeout(()=> $('#leaderboard-delusion').DataTable().columns.adjust(), 10);
  }
}
function toggleMiddleStats(){ middleStatsExpanded = !middleStatsExpanded; collapseMiddleColumns(); }

/* ======== DataTable init & draw hooks ======== */
function setScoreHeaderWidth(api, idx){
  const vw = window.innerWidth; let width;
  if (vw < 580) width='30%';
  else if (vw < MOBILE_BREAKPOINT) width='50%';
  else if (vw < 1300) width='12%';
  else width='20%';
  const header = api.column(idx).header(); if (header) header.style.width = width;
}
// ── helpers ───────────────────────────────────────────────
function median(arr){
  const a = arr.slice().sort((x, y) => x - y);
  const mid = Math.floor(a.length / 2);
  return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
}

function initializeDataTable(){
  if ($.fn.DataTable.isDataTable('#leaderboard-delusion')){
    $('#leaderboard-delusion').DataTable().destroy();
  }
  const featureIndices = Array.from({length: FEATURE_COL_END - FEATURE_COL_START + 1},
                                    (_,i)=> 1 + i); // shift by model col

  const SCORE_INDEX = 1 + featureIndices.length;   // after model + features
  SCORE_COL_INDEX   = SCORE_INDEX;
  SAMPLE_COL_INDEX  = SCORE_INDEX + 1;

  const config = {
    autoWidth: false,
    order: [[SCORE_COL_INDEX,'desc']],
    paging:false, searching:false, info:true, lengthChange:false,
    columnDefs:[
      {targets:[0], type:'string'},
      {targets:featureIndices, orderable:true, type:'num', orderSequence:['desc','asc']},
      {targets:[SCORE_COL_INDEX], type:'num', orderSequence:['desc','asc']},
      {targets:[SAMPLE_COL_INDEX], orderable:false}
    ],
    dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
         "<'row'<'col-12'tr>>" +
         "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    drawCallback: function(){
      const api = this.api();
      $('#leaderboard-delusion .floating-header-row').remove();
      api.rows().nodes().to$().removeClass('selected-row');

      if (!api || api.rows().count()===0) return;

      let order = api.order();
      if (!order || order.length===0){
        order = [[SCORE_COL_INDEX,'desc']];
        api.order(order).draw(false); return;
      }
      const sortedIdx = order[0][0];
      
      // Update current sorted column index
      currentSortedColumnIndex = sortedIdx;
      lastSortedScoreColumn = SCORE_COL_INDEX;

      // Hide then show bars/error bars for score col
      const tableNode = $(api.table().node());
      tableNode.find('.delusion-score-bar, .error-bar').hide();

      api.rows({ page:'current'}).nodes().to$()
      .find(`td:eq(${SCORE_COL_INDEX}) .score-bar-container .score-track .delusion-score-bar, td:eq(${SCORE_COL_INDEX}) .score-bar-container .score-track .error-bar`)
      .show();

      // Show feature score bars
      api.rows({ page:'current'}).nodes().to$()
         .find('.feature-score-bar').show();

      setScoreHeaderWidth(api, SCORE_COL_INDEX);

      updateScoreBarColors();
      collapseMiddleColumns();
      updateFeatureScoreBars(); // Update feature score bars instead of heatmap
    }
  };

  const table = $('#leaderboard-delusion').DataTable(config);

  // First-time layout
  table.one('init.dt', function(){
    collapseMiddleColumns();
    setTimeout(()=> $('#leaderboard-delusion').DataTable().draw(false), 50);
    updateFeatureScoreBars(); // Update feature score bars instead of heatmap
  });

  $(window).on('resize.scoreHeader', ()=>{
    if (lastSortedScoreColumn != null && $.fn.DataTable.isDataTable('#leaderboard-delusion')){
      const api = $('#leaderboard-delusion').DataTable();
      if (api.column(lastSortedScoreColumn).header()){
        setScoreHeaderWidth(api, lastSortedScoreColumn);
      }
    }
  });
}

/* ======== Page bootstrap ======== */
document.addEventListener('DOMContentLoaded', function(){
  setupDarkModeToggle();
  refreshHeatmapLegend();

  // Process the CSV data with consolidation and mapping
  const processedData = processCSVData(leaderboardDataDelusion);
  HEADERS = processedData.headers.slice();
  DISPLAY_HEADERS = processedData.displayHeaders.slice();

  FEATURE_COL_END = HEADERS.length - 3;  // last two are CI low/high; last displayed cols are Score + Sample
  TOTAL_COLS = 1 /*Model*/ + (FEATURE_COL_END - FEATURE_COL_START + 1) + 2 /*Score+Sample*/;

  buildHeaderFooter(DISPLAY_HEADERS);

  // Build rows into tbody using processed data
  const bodyHTML = processedData.rows.map(parts => rowHTMLFromCSVParts(parts)).join('');
  document.getElementById('leaderboardDelusionBody').innerHTML = bodyHTML;

  // After we know CI highs, compute max scale
  processedData.rows.forEach(parts=>{
    const hi = parseFloat(parts[parts.length-1]);
    if (isFinite(hi)) maxScoreDisplay = Math.max(maxScoreDisplay, hi);
  });

    /* ----- compute per-column medians (runs after rows are built) ----- */
  Object.keys(featureColumnValues).forEach(col => {
    const vals = featureColumnValues[col];
    featureColumnMedians[col] = vals.length ? median(vals) : 0;
  });


  initializeDataTable();

  // Responsive toggles
  $(window).on('resize', collapseMiddleColumns);
  $('#toggleMiddleStats').on('click', ()=>{ middleStatsExpanded=!middleStatsExpanded; collapseMiddleColumns(); });

  // Enable Bootstrap tooltips globally, but only one at a time; click-off closes any open tooltip
  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipInstances = Array.from(tooltipTriggers).map(el =>
    new bootstrap.Tooltip(el, {
      trigger: 'hover click',
      container: 'body',
      delay: { show: 0, hide: 100 }
    })
  );

  // When one tooltip is about to show, hide all the others
  document.addEventListener('show.bs.tooltip', function (e) {
    tooltipInstances.forEach(t => {
      if (t._element !== e.target) t.hide();
    });
  });

  // Clicking anywhere that is not a tooltip or its trigger hides all
  document.addEventListener('click', function (e) {
    const isTrigger = e.target.closest('[data-bs-toggle="tooltip"]');
    const isTooltip = e.target.closest('.tooltip');
    if (!isTrigger && !isTooltip) {
      tooltipInstances.forEach(t => t.hide());
    }
  });


});