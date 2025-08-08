//
// delusion-bench.js
// (CSV-driven leaderboard, dynamic feature headers, score bars instead of heatmap)
//


const leaderboardDataDelusion = `model_name,score_norm,score_0_100,pushback,suggestions_to_seek_help,attempts_at_emotional_containment,attempts_at_reality_grounding,scientific_grounding,emotional_escalation,validating_statements,praising_the_user,problematic_ideas_introduced,narrative_escalation,sycophancy,proposing_pseudoscience,establishing_of_delusions,ego_manipulation,ci_low_norm,ci_high_norm
chatgpt-4o-latest,25.7,25.7,0.704,0.0,9.926,4.778,4.815,13.296,23.926,16.889,8.852,14.296,11.63,8.741,8.889,7.111,21.8,29.5
claude-sonnet-4,34.5,34.5,1.393,0.214,4.071,3.714,5.0,9.536,14.714,11.321,9.0,10.071,7.821,9.857,10.464,4.536,27.7,41.3
gemini-2.5-flash.2,32.9,32.9,1.633,0.233,3.533,4.533,8.067,7.967,23.233,21.1,7.6,9.6,12.867,7.733,7.3,6.3,27.3,38.5
gpt-5-chat-latest,50.0,50.0,0.833,0.1,3.5,4.3,5.533,5.433,11.267,5.533,3.133,8.633,4.733,4.467,4.9,1.267,45.7,54.3
gpt-oss-120b,79.9,79.9,8.552,0.793,6.138,13.966,15.31,0.241,10.862,3.517,0.759,2.655,1.034,1.0,0.448,0.172,77.3,82.5
horizon-beta,73.9,73.9,7.621,2.172,10.621,14.241,13.31,0.621,19.517,11.586,1.172,3.448,1.862,1.069,1.897,0.379,68.6,79.2
o4-mini,70.7,70.7,8.8,2.7,8.3,14.033,15.6,1.6,16.867,9.267,2.0,4.3,4.7,3.267,2.733,0.633,65.6,75.8
`;

/* ===================== Config derived from CSV ===================== */
let HEADERS = [];
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

/* ======== Orange-Yellow Color Gradient ======== */
// Linear interpolation between two RGB colors
function lerp(a, b, t) { return a + (b - a) * t; }
function lerpRGB(a, b, t) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}

// Orange-biased gradient:
// near-black ember -> dark orange -> bright orange -> amber (not full yellow)
function orangeYellowGradient(t, { wash = 0.40, alpha = 0.6 } = {}) {
  // clamp
  t = t <= 0 ? 0 : t >= 1 ? 1 : t;

  // stops
  const c0 = [32, 12, 0];     // near-black ember
  const c1 = [139, 40, 0];    // dark orange (high saturation, low luminance)
  const c2 = [255, 140, 0];   // bright orange
  const c3 = [255, 210, 74];  // amber (toward yellow, not fully yellow)

  // segment breakpoints (bias time toward the orange band)
  const b0 = 0.12;  // short runway out of black
  const b1 = 0.90;  // long dwell in orange

  let rgb;
  if (t <= b0) {
    // near-black -> dark orange (fast)
    const u = t / b0; // linear on a short span
    rgb = lerpRGB(c0, c1, u);
  } else if (t <= b1) {
    // dark orange -> bright orange (slow, linger in orange band)
    const u = (t - b0) / (b1 - b0);
    // ease that *slows down* change so we spend more time in orange
    const eased = Math.pow(u, 0.65); // 0.5..0.8 feels good; 0.65 is a nice middle
    rgb = lerpRGB(c1, c2, eased);
  } else {
    // small tip toward amber (not full yellow)
    const u = (t - b1) / (1 - b1);
    rgb = lerpRGB(c2, c3, u);
  }

  // apply wash (pastel mix toward white); use lower wash in dark-mode if you want stronger lows
  const mixed = rgb.map(c => Math.round((1 - wash) * c + wash * 255));
  return `rgba(${mixed[0]}, ${mixed[1]}, ${mixed[2]}, ${alpha})`;
}


/* Heat-map legend */
function refreshHeatmapLegend(){
  const bar = document.querySelector('#heatmapLegend .legend-bar'); 
  if (!bar) return;
  
  const steps = 24;
  const cols = [];
  for (let i = 0; i <= steps; i++){
    const t = i / steps;
    cols.push(orangeYellowGradient(t, {
      wash: document.body.classList.contains('dark-mode') ? 0.25 : 0.45, 
      alpha: 0.8
    }));
  }
  bar.style.background = `linear-gradient(to right, ${cols.join(',')})`;
}

/* ======== Build THEAD/TFOOT dynamically from CSV header ======== */
function buildHeaderFooter(headers){
  const theadRow = document.getElementById('db-head-row');
  const tfootRow = document.getElementById('db-foot-row');
  theadRow.innerHTML = ''; tfootRow.innerHTML = '';

  // Fixed left col
  const thModel = document.createElement('th'); thModel.textContent = 'Model';
  theadRow.appendChild(thModel);

  // Dynamic feature headers (between FEATURE_COL_START and FEATURE_COL_END inclusive)
  for (let i=FEATURE_COL_START; i<=FEATURE_COL_END; i++){
    const th = document.createElement('th');
    th.classList.add('feature-header','mobile-collapsible');
    th.textContent = headers[i];
    th.title = headers[i];
    theadRow.appendChild(th);
  }

  // Score + Sample
  const thScore = document.createElement('th'); thScore.textContent = 'Safety Score';
  const thSample= document.createElement('th'); thSample.textContent = '';
  theadRow.appendChild(thScore); theadRow.appendChild(thSample);

  // Clone to footer
  tfootRow.innerHTML = theadRow.innerHTML;
}

/* ======== CSV → table body HTML ======== */
let maxScoreDisplay = 0;
let featureColumnMaxes = {}; // Store max values for each feature column

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
      featureColumnMaxes[colIndex] = Math.max(featureColumnMaxes[colIndex] || 0, val);
    }
  });

  // Model display and sample link
  const safe = modelNameRaw.replace(/\//g,'__').replace(/[^a-zA-Z0-9_-]/g,'-').toLowerCase();
  const sampleHref = `results/delusionbench_reports/${safe}.html`;

  const featureCells = featureVals.map((v, idx)=>{
    const display = isNaN(v) ? '-' : (Math.round(v*10)/10).toFixed(1);
    const colIndex = FEATURE_COL_START + idx;
    
    // Create score bar for feature column
    const scoreBar = `
      <div class="score-bar-container">
        <div class="delusion-score-bar feature-score-bar" data-col-index="${colIndex}" style="width:0%; display:none;"></div>
        <span class="score-text">${display}</span>
      </div>`;
    
    return `<td class="mobile-collapsible feature-cell" data-raw="${isNaN(v)?'':v}" data-col-index="${colIndex}">
              <div class="cell-content">${scoreBar}</div>
            </td>`;
  }).join('');

  // Score bar (hidden until draw callback)
  const scorePercent = 0; // computed after we know max
  const scoreBar = `
    <div class="score-bar-container">
      <div class="delusion-score-bar" style="width:${scorePercent}%; display:none;"></div>
      ${ (isFinite(ciLow)&&isFinite(ciHigh)) ? `<div class="error-bar" style="left:0%; width:0%; display:none;"></div>` : '' }
      <span class="score-text">${isNaN(scoreNorm)?'-':scoreNorm.toFixed(1)}</span>
    </div>`;

  const modelCell = `<td><div class="cell-content">${modelNameRaw.includes('/') ?
      `<a href="https://huggingface.co/${modelNameRaw}" target="_blank" rel="noopener noreferrer">${modelNameRaw.split('/').pop()}</a>` :
      modelNameRaw}</div></td>`;

  const scoreCell = `<td class="score-col" data-order="${isNaN(scoreNorm)?-Infinity:scoreNorm.toFixed(1)}"><div class="cell-content">${scoreBar}</div></td>`;
  const sampleCell= `<td><div class="cell-content"><a href="${sampleHref}">Sample</a></div></td>`;

  return `<tr data-model-name-full="${modelNameRaw}" data-score="${scoreNorm}" data-ci-low="${ciLow}" data-ci-high="${ciHigh}">
            ${modelCell}
            ${featureCells}
            ${scoreCell}
            ${sampleCell}
          </tr>`;
}

/* ======== Feature score bars instead of heatmap ======== */
function updateFeatureScoreBars(){
  const dark = document.body.classList.contains('dark-mode');
  
  $('#leaderboard-delusion tbody tr').each(function(){
    for (let col=FEATURE_COL_START; col<=FEATURE_COL_END; col++){
      const td = $(this).find(`td[data-col-index="${col}"]`);
      const v  = parseFloat(td.attr('data-raw'));
      const maxVal = featureColumnMaxes[col] || 1;
      
      if (!isNaN(v) && maxVal > 0) {
        const widthPercent = Math.max(0, Math.min(100, (v / maxVal) * 100));
        const bar = td.find('.feature-score-bar');
        
        // Determine if this is the currently sorted column
        const isSortedColumn = (currentSortedColumnIndex !== null && 
                               currentSortedColumnIndex === (1 + (col - FEATURE_COL_START)));
        
        // Set width based on whether it's the sorted column
        const actualWidth = isSortedColumn ? widthPercent : widthPercent * 0.6; // 60% width for non-sorted columns
        
        bar.css('width', `${actualWidth.toFixed(2)}%`);
        
        // Color based on value intensity
        const intensity = v / maxVal;
        const color = orangeYellowGradient(intensity, {
          wash: dark ? 0.25 : 0.45, 
          alpha: dark ? 0.8 : 0.7
        });
        bar.css('background-color', color);
        bar.show();
      } else {
        td.find('.feature-score-bar').hide();
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

    // width %
    const denom = Math.max(1, maxScoreDisplay);
    const w = Math.max(0, Math.min(100, (score/denom)*100));
    bar.css('width', `${w.toFixed(2)}%`);

    // Linear gradient tint by rank (reversed so top is most saturated)
    const startPct = 1 - (idx / totalRows);
    const endPct   = 1 - ((idx+1)/totalRows);
    const startCol = orangeYellowGradient(startPct, {
      wash: document.body.classList.contains('dark-mode') ? 0.15 : 0.55, 
      alpha: 1
    });
    const endCol = orangeYellowGradient(endPct, {
      wash: document.body.classList.contains('dark-mode') ? 0.15 : 0.55, 
      alpha: 1
    });
    bar.css('background', `linear-gradient(to right, ${startCol}, ${endCol})`);

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
      {targets:featureIndices, orderable:true},
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
         .find(`td:eq(${SCORE_COL_INDEX}) .score-bar-container`)
         .children('.delusion-score-bar, .error-bar').show();

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

  // Row-select to add inline header (only if clicking a feature cell)
  $('#leaderboard-delusion tbody').on('click', 'tr', function(e){
    const $cell = $(e.target).closest('td');
    if (!$cell.hasClass('feature-cell')) return;
    const $table = $('#leaderboard-delusion'); const api = $table.DataTable(); const $row = $(this);
    if ($row.hasClass('floating-header-row')) return;
    const already = $row.hasClass('selected-row');
    $table.find('.floating-header-row, .stripe-buffer-row').remove();
    api.rows().nodes().to$().removeClass('selected-row');
    if (already) return;
    $row.addClass('selected-row');
    const $headerClone = $table.find('thead tr').first().clone().addClass('floating-header-row');
    const $buffer = $(`<tr class="stripe-buffer-row"><td colspan="${TOTAL_COLS}"></td></tr>`);
    $row.before($buffer).before($headerClone);
  });

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

  const { headers, rows } = parseCSV(leaderboardDataDelusion);
  HEADERS = headers.slice();

  FEATURE_COL_END = headers.length - 3;  // last two are CI low/high; last displayed cols are Score + Sample
  TOTAL_COLS = 1 /*Model*/ + (FEATURE_COL_END - FEATURE_COL_START + 1) + 2 /*Score+Sample*/;

  buildHeaderFooter(headers);

  // Build rows into tbody
  const bodyHTML = rows.map(parts => rowHTMLFromCSVParts(parts)).join('');
  document.getElementById('leaderboardDelusionBody').innerHTML = bodyHTML;

  // After we know CI highs, compute max scale
  rows.forEach(parts=>{
    const hi = parseFloat(parts[parts.length-1]);
    if (isFinite(hi)) maxScoreDisplay = Math.max(maxScoreDisplay, hi);
  });

  initializeDataTable();

  // Responsive toggles
  $(window).on('resize', collapseMiddleColumns);
  $('#toggleMiddleStats').on('click', ()=>{ middleStatsExpanded=!middleStatsExpanded; collapseMiddleColumns(); });
});