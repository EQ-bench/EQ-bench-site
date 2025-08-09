//
// delusion-bench.js
// (CSV-driven leaderboard, dynamic feature headers, score bars instead of heatmap)
//


const leaderboardDataDelusion = `model_name,score_norm,score_0_100,pushback,suggestions_to_seek_help,attempts_at_emotional_containment,attempts_at_reality_grounding,scientific_grounding,emotional_escalation,validating_statements,praising_the_user,problematic_ideas_introduced,narrative_escalation,sycophancy,proposing_pseudoscience,establishing_of_delusions,ego_manipulation,ci_low_norm,ci_high_norm
chatgpt-4o-latest,25.7,25.7,0.704,0.0,9.926,4.778,4.815,13.296,23.926,16.889,8.852,14.296,11.63,8.741,8.889,7.111,21.8,29.5
claude-sonnet-4,34.5,34.5,1.393,0.214,4.071,3.714,5.0,9.536,14.714,11.321,9.0,10.071,7.821,9.857,10.464,4.536,27.7,41.3
deepseek-r1-0528,29.1,29.1,1.828,0.862,6.793,6.138,9.241,13.69,16.448,15.172,10.828,13.552,9.414,11.586,11.345,9.552,24.4,33.7
gemini-2.5-flash.2,32.9,32.9,1.633,0.233,3.533,4.533,8.067,7.967,23.233,21.1,7.6,9.6,12.867,7.733,7.3,6.3,27.3,38.5
gpt-5-chat-latest,50.0,50.0,0.833,0.1,3.5,4.3,5.533,5.433,11.267,5.533,3.133,8.633,4.733,4.467,4.9,1.267,45.7,54.3
gpt-oss-120b,79.9,79.9,8.552,0.793,6.138,13.966,15.31,0.241,10.862,3.517,0.759,2.655,1.034,1.0,0.448,0.172,77.3,82.5
horizon-beta,73.9,73.9,7.621,2.172,10.621,14.241,13.31,0.621,19.517,11.586,1.172,3.448,1.862,1.069,1.897,0.379,68.6,79.2
llama-4-maverick,43.8,43.8,1.828,0.138,3.69,6.0,7.586,2.655,18.0,16.621,4.793,7.69,9.724,7.655,8.414,0.586,40.0,47.6
o4-mini,70.7,70.7,8.8,2.7,8.3,14.033,15.6,1.6,16.867,9.267,2.0,4.3,4.7,3.267,2.733,0.633,65.6,75.8
`;

/* ===================== Column Mapping and Consolidation ===================== */

// Define the display mapping for original columns
const COLUMN_DISPLAY_MAPPING = {
  'pushback': 'Pushback',
  'suggestions_to_seek_help': 'Help Referral', 
  'attempts_at_emotional_containment': 'Containment',
  'attempts_at_reality_grounding': 'Grounding',
  'scientific_grounding': 'Scientific Grounding',
  'sycophancy': 'Sycophancy',
  'ego_manipulation': 'Ego Manipulation'
};

// Define compound metrics that combine multiple columns
const COMPOUND_METRICS = {
  'Escalation': ['emotional_escalation', 'narrative_escalation'],
  'Validation': ['validating_statements', 'praising_the_user'], 
  'Delusion Reinforcement': ['problematic_ideas_introduced', 'proposing_pseudoscience', 'establishing_of_delusions']
};


// Process CSV data to create consolidated columns
function processCSVData(csvData) {
  const { headers, rows } = parseCSV(csvData);
  
  // Create new headers array with consolidated columns
  const newHeaders = ['model_name', 'score_norm', 'score_0_100'];
  const processedHeaders = [];
  
  // Add individual columns first
  for (let i = 3; i < headers.length - 2; i++) { // Skip CI columns at end
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
  
  // Add compound metrics
  Object.entries(COMPOUND_METRICS).forEach(([displayName, sourceColumns]) => {
    newHeaders.push(displayName.toLowerCase().replace(/ /g, '_'));
    processedHeaders.push({
      displayName: displayName,
      sourceColumns: sourceColumns,
      sourceIndices: sourceColumns.map(col => headers.indexOf(col)),
      isCompound: true
    });
  });
  
  // Add CI columns back
  newHeaders.push('ci_low_norm', 'ci_high_norm');
  
  // Process each row
  const processedRows = rows.map(row => {
    const newRow = [row[0], row[1], row[2]]; // model_name, score_norm, score_0_100
    
    // Add individual columns
    processedHeaders.forEach(headerInfo => {
      if (!headerInfo.isCompound) {
        newRow.push(row[headerInfo.originalIndex]);
      } else {
        // Calculate compound metric (average of source columns)
        const values = headerInfo.sourceIndices
          .map(idx => parseFloat(row[idx]))
          .filter(val => !isNaN(val));
        
        if (values.length > 0) {
          const average = values.reduce((sum, val) => sum + val, 0) / values.length;
          newRow.push(average.toFixed(3));
        } else {
          newRow.push('0');
        }
      }
    });
    
    // Add CI columns
    newRow.push(row[row.length - 2], row[row.length - 1]);
    
    return newRow;
  });
  
  return {
    headers: newHeaders,
    rows: processedRows,
    displayHeaders: ['Model', 'Score Norm', 'Score 0-100', ...processedHeaders.map(h => h.displayName), 'CI Low', 'CI High']
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
function makeColorScale(stop0, stop90, stop100) {
  const C0 = hexToRgbArr(stop0);
  const C1 = hexToRgbArr(stop90);
  const C2 = hexToRgbArr(stop100);
  return function(t, { alpha = 1 } = {}) {
    t = Math.max(0, Math.min(1, t));
    if (t <= 0.90) {
      const u = t / 0.90;
      const rgb = lerpRGB(C0, C1, u);
      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
    } else {
      const u = (t - 0.90) / 0.10;
      const rgb = lerpRGB(C1, C2, u);
      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
    }
  };
}

// Define the active palette here — purple scale
// 0% → deep purple, 90% → rich violet, 100% → bright purple
const colorScale = makeColorScale('#1d0b2e', '#6d1c7e', '#8f1faf');




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
      'Pushback': 'Pushback (Offers pushback on user\'s ideas)',
      'Help Referral': 'Help Referral (Suggests the user seek outside assistance)',
      'Containment': 'Containment (Attempts at emotional containment)',
      'Grounding': 'Grounding (Attempts to ground the user in reality)',
      'Scientific Grounding': 'Scientific Grounding (Offers scientific grounding)',
      'Escalation': 'Escalation (Escalation of emotions or narrative)',
      'Validation': 'Validation (Validating statements or praise of the user)',
      'Delusion Reinforcement': 'Delusion Reinforcement (Introduction & reinforcement of delusions with pseudoscience or problematic ideas)',
      'Sycophancy': 'Sycophancy (Being sycophantic towards the user)',
      'Ego Manipulation': 'Ego Manipulation (Manipulating the user\'s ego)'
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
        
        // Set width based on whether it's the sorted column - scale to use full available width
        const actualWidth = widthPercent;
        
        // Set the bar width as percentage of container, not absolute width
        bar.css('width', `${actualWidth.toFixed(2)}%`);
        
        // Color based on value intensity
        const intensity = v / maxVal;
        const color = colorScale(intensity, { alpha: dark ? 0.9 : 0.85 });
        bar.css('background', ''); // ensure flat fill
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