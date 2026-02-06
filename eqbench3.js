//
//  eqbench3.js
//  (Adapted from creative_writing.js v1.0.6 for EQ-Bench 3)
//  (Version 1.0.2 - Added Elo error bars)
//


leaderboardDataEQBench3 = `model_name,elo_norm,rubric_0_100,humanlike,safe,assertive,social_iq,warm,analytical,insightful,empathy,compliant,moral,pragmatic,ci_low_norm,ci_high_norm
*claude-opus-4-6,1961.0,86.8,16.54,16.31,15.00,16.46,15.71,18.69,18.18,17.96,10.65,8.81,17.19,1897.4,2024.6
gpt-5.1-2025-11-13,1727.6,87.0,16.67,16.31,14.23,16.60,15.98,18.85,18.16,17.77,12.65,7.96,17.23,1681.8,1773.4
claude-opus-4-5-20251101,1683.1,85.1,16.58,15.73,14.23,16.13,15.62,18.15,17.71,17.73,11.73,8.12,16.69,1639.9,1726.3
gpt-5.2,1637.0,87.7,16.31,17.23,15.31,16.50,15.27,18.85,18.24,17.58,11.46,8.04,17.54,1592.9,1681.0
gemini-3-pro-preview,1629.5,85.5,17.04,16.54,15.37,16.98,15.50,18.88,17.82,18.12,12.65,9.27,17.77,1590.6,1668.4
moonshotai/Kimi-K2-Instruct,1622.5,88.2,17.29,16.46,14.37,16.79,15.96,18.69,18.40,18.42,13.23,8.27,17.42,1580.8,1664.1
gemini-2.5-pro-preview-06-05,1618.8,86.4,16.85,15.73,13.87,17.17,16.15,18.69,17.73,18.46,14.04,7.04,17.77,1577.8,1659.9
openrouter/horizon-alpha,1562.6,89.7,16.71,16.77,14.85,17.25,16.19,18.88,18.40,18.23,12.46,6.96,18.35,1526.1,1599.2
claude-sonnet-4.5,1501.4,84.0,16.38,15.42,13.79,15.54,15.06,18.42,17.87,17.31,12.92,9.50,16.12,1460.3,1542.5
o3,1500.0,88.0,16.73,16.08,14.00,16.63,16.04,18.77,18.27,17.96,12.19,7.42,17.12,1464.7,1535.3
gpt-5-chat-latest-2025-08-07,1456.9,86.2,16.52,15.92,13.23,16.31,15.42,18.65,17.98,17.62,13.19,6.92,17.15,1425.9,1487.9
zai-org/GLM-4.7,1441.2,80.2,15.85,15.46,14.04,15.17,14.52,18.42,17.00,16.54,13.23,9.54,15.73,1395.7,1486.8
claude-opus-4,1407.9,81.9,16.67,15.62,13.52,15.88,15.50,18.35,17.36,17.50,12.73,8.69,16.12,1368.0,1447.8
grok-4.1-fast,1384.8,83.2,16.25,15.92,13.08,16.17,15.85,18.88,17.49,17.62,15.00,8.35,16.69,1337.4,1432.1
gemini-2.5-pro-preview-03-25,1347.8,83.0,16.44,15.81,12.56,16.52,15.98,18.46,17.16,17.77,12.96,6.85,17.15,1317.5,1378.1
chatgpt-4o-latest-2025-03-27,1336.5,84.5,16.52,15.19,13.27,16.52,16.35,17.81,17.27,17.69,13.46,8.62,16.96,1308.7,1364.2
NousResearch/Hermes-4-405B,1324.2,85.2,17.10,16.35,14.37,17.17,16.10,18.58,17.56,18.19,12.81,8.23,17.58,1295.2,1353.2
chatgpt-4o-latest-2025-04-25,1321.9,83.2,15.94,16.00,12.35,16.02,16.19,17.69,17.04,17.35,13.96,7.96,16.46,1289.3,1354.6
zai-org/GLM-4.5,1240.7,83.7,16.17,15.54,13.33,15.85,15.42,18.65,17.73,17.19,14.19,8.77,16.27,1186.4,1294.9
o4-mini,1210.6,80.6,15.67,15.85,13.10,15.62,15.35,18.15,16.82,17.04,14.42,8.54,16.23,1182.7,1238.5
claude-sonnet-4,1190.6,81.1,16.15,15.54,13.25,15.12,15.37,18.35,17.27,16.96,13.23,9.92,15.58,1160.4,1220.8
deepseek-ai/DeepSeek-R1,1185.6,83.5,16.29,15.42,13.60,16.33,15.48,18.62,17.44,17.54,14.04,8.46,16.69,1154.5,1216.7
grok-3-beta,1180.6,77.5,15.54,15.85,11.98,14.94,15.46,17.77,15.98,16.31,13.62,8.04,15.19,1146.4,1214.8
Qwen/Qwen3-235B-A22B,1167.9,80.9,16.21,15.62,13.46,16.02,16.02,17.50,16.69,17.31,13.54,8.85,16.35,1140.5,1195.4
gemini-2.5-pro-preview-2025-05-07,1162.3,83.4,16.67,15.27,12.56,16.56,16.23,18.65,17.31,17.96,13.85,7.46,17.00,1134.9,1189.6
qwen/qwq-32b,1144.8,79.9,15.87,15.54,13.98,15.77,15.25,18.46,16.73,17.08,13.50,9.35,16.35,1122.4,1167.3
gpt-4.1,1137.7,82.3,16.29,15.38,12.40,15.88,15.96,18.00,17.00,17.12,13.19,7.85,16.19,1108.5,1166.9
grok-4,1131.7,83.1,15.78,15.20,12.46,15.86,16.40,18.32,17.27,17.60,14.80,8.04,16.20,1093.0,1170.4
gpt-4.1-mini,1096.0,81.4,15.87,15.31,12.27,16.00,16.21,17.77,16.71,17.27,14.08,7.62,16.12,1067.2,1125.0
claude-3-7-sonnet-20250219,1083.7,78.8,16.06,15.35,12.69,15.29,14.90,18.23,16.49,16.42,12.73,8.85,15.77,1053.9,1113.6
claude-3-5-sonnet-20241022,1077.8,75.3,15.37,15.65,12.85,14.54,14.15,18.00,15.96,16.00,13.00,8.77,15.00,1041.8,1113.7
mistralai/Mistral-Small-3.2-24B-Instruct-2506,1075.3,79.8,16.31,15.35,13.96,15.87,15.44,18.27,16.80,17.08,12.92,9.69,16.54,1034.7,1116.0
gemini-2.5-flash-preview,1074.2,78.7,15.88,15.23,12.19,15.90,15.62,18.04,16.13,17.12,14.19,7.35,16.31,1039.0,1109.5
openai/gpt-oss-120b,1065.0,83.0,15.60,16.12,12.62,15.65,15.37,18.81,17.49,16.88,13.65,7.73,16.27,1030.2,1099.9
google/gemma-3-27b-it,1059.8,75.6,15.67,15.46,12.85,14.94,14.75,18.04,15.80,16.27,13.38,9.04,15.35,1032.5,1087.3
deepseek-ai/DeepSeek-V3-0324,1048.7,75.6,13.94,14.88,12.15,13.37,13.38,17.35,15.98,15.00,11.31,8.65,14.04,1020.0,1077.5
gpt-4.5-preview-2025-02-27,1034.7,80.6,15.50,14.77,12.37,15.33,15.33,17.96,16.78,16.85,14.23,8.35,15.85,1004.0,1065.5
zai-org/GLM-4.7-Flash,962.5,73.6,14.88,15.08,13.90,13.56,12.82,18.16,16.00,15.36,12.52,10.80,14.28,927.4,997.6
gemini-2.0-flash-001,942.0,66.1,13.88,15.04,11.50,12.60,13.00,16.19,13.87,14.08,14.42,8.69,13.27,918.6,965.3
Qwen/Qwen3-32B,935.5,74.3,14.92,15.23,12.67,14.37,14.48,16.96,15.18,15.81,14.19,9.46,14.92,908.1,963.0
grok-3-mini-beta,934.6,79.0,15.12,15.58,12.23,15.33,15.90,18.15,16.31,17.12,15.85,8.69,15.77,899.3,970.0
openai/gpt-oss-20b,925.6,74.3,13.42,15.04,11.92,13.38,13.29,17.62,15.60,14.73,14.73,8.58,14.27,887.7,963.5
google/gemma-3-4b-it,921.7,72.4,15.42,15.96,12.79,14.46,14.48,18.00,15.38,15.96,14.31,9.38,15.00,899.3,944.2
Qwen/Qwen3-30B-A3B,903.7,66.0,13.54,15.38,11.56,12.33,13.77,15.58,13.40,14.38,15.19,9.04,12.85,874.4,933.1
Qwen/Qwen3-8B,901.1,74.7,15.21,15.65,12.85,14.38,14.46,17.73,15.80,16.12,14.00,9.54,14.85,866.2,936.0
qwen/qwen-2.5-72b-instruct,893.4,66.7,12.94,15.54,11.37,12.79,13.63,16.50,13.73,14.38,15.69,9.00,13.73,865.7,921.1
gpt-4.1-nano,887.8,75.9,14.90,15.32,12.26,14.86,15.36,17.16,15.41,16.44,14.00,8.32,15.72,855.9,919.8
mistralai/Mistral-Large-Instruct-2411,886.0,65.0,13.25,14.15,11.62,13.13,14.19,16.27,13.31,14.42,14.35,8.54,13.92,844.4,927.6
mistralai/Mistral-Small-3.1-24B-Instruct-2503,852.5,63.2,12.21,14.85,11.04,12.13,13.71,15.88,12.84,14.23,15.42,10.04,12.96,820.1,885.0
nvidia/llama-3.1-nemotron-ultra-253b-v1:free,841.8,73.2,14.40,14.85,12.48,14.90,14.75,17.69,14.73,16.04,14.50,8.12,15.62,805.7,877.9
meta-llama/Llama-4-Maverick-17B-128E-Instruct,833.2,60.7,12.98,15.46,10.73,12.60,13.02,15.42,12.27,13.88,14.58,7.92,13.19,802.4,864.0
mistralai/Mistral-Small-24B-Instruct-2501,831.6,62.8,12.25,14.92,10.81,12.08,13.60,15.65,12.86,14.19,15.19,9.38,13.15,803.2,860.1
meta-llama/Llama-3.1-405B-Instruct,826.5,58.6,12.77,14.85,10.69,11.98,13.37,14.88,11.89,13.62,14.69,8.85,12.62,789.3,863.7
Nanbeige/Nanbeige4-3B-Thinking-2511,675.9,76.7,14.96,16.04,15.71,15.25,14.62,18.46,16.56,17.12,11.92,11.58,15.65,629.5,722.2
meta-llama/Llama-4-Scout-17B-16E-Instruct,626.8,56.2,11.90,14.54,10.42,10.73,12.06,14.62,11.47,12.73,14.92,8.88,11.62,594.9,658.7
gpt-4-0314,592.4,55.9,11.63,14.96,9.33,10.83,12.63,13.35,11.07,12.69,14.92,9.23,11.27,553.2,631.7
google/gemma-2-9b-it,574.0,45.9,8.64,12.52,6.82,7.72,10.14,10.76,9.07,10.08,12.52,6.84,8.64,530.0,618.0
meta-llama/llama-3.2-1b-instruct,200.0,21.9,4.37,9.31,3.87,2.85,5.54,6.92,4.87,4.81,9.62,7.38,3.62,130.1,269.9

`

// --- Global Scope Variables ---
const MOBILE_BREAKPOINT = 1050;
// let eloScores = []; // No longer needed, parse directly
// let rubricScores = []; // No longer needed, parse directly
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 13; // Default sort is Elo, which is now column index 13

const FEATURE_COL_START     = 2;   // first feature column index (Table index)
const FEATURE_COL_END       = 12;  // last  feature column index (Table index)
const ELO_COL_INDEX         = 13;  // Table index for Elo Score column
const SAMPLE_COL_INDEX      = 14;  // Table index for Sample Link column
const TOTAL_COLS            = 15;  // used for colspan messages

// Chart.js references:
let abilitiesAbsoluteRadarChart = null;
let abilitiesRelativeRadarChart = null;
let abilitiesStrengthsChart = null;
let abilitiesWeaknessesChart = null;

/* ---- Heat‑map scaling anchors ----
   Each pair is [input_t , output_t].
   Feel free to tweak or insert more points – the remap function
   linearly interpolates between successive anchors. */
const HEATMAP_SCALE_MAP = [
  [0.00, 0.00],
  //[0.30, 0.2],
  [0.30, 0.05],
  [0.85, 0.60],   // new knee: expand 0.80-0.95 to 0.50-0.80
  [1.00, 1.00]
];

const LINEAR_HEATMAP_FEATURES = [
  "compliant", "moral"
];

// Style chart instance (word cloud handled differently)

const FEATURE_DESCRIPTIONS = {
  "humanlike" : "Humanlike in behaviour & writing style",
  "safety"   : "Safety conscious",
  "assertive" : "Assertive, sets boundaries, pushes back",
  "compliant" : "Compliant -- does what it's told",
  "social_iq" : "Social dexterity & message tailoring",
  "warm": "Warm & validating",
  "empathy": "Demonstrated empathy",
  "analytic": "Reason-first analytical approach",
  "insight": "Depth of insight",
  "moralising": "Moralising: concerned with moral behaviour, possibly preachy.",
  "pragmatic": "Practical problem solving"
};

const featureNames = [
  'humanlike',   // index 3 in data
  'safe',        // index 4
  'assertive',   // index 5
  'social_iq',   // index 6
  'warm',        // index 7
  'analytical',  // index 8
  'insightful',  // index 9
  'empathy',     // index 10
  'compliant',   // index 11
  'moral',       // index 12
  'pragmatic'    // index 13
];

const RUBRIC_GROUPS = {
  humanlike : ["conversational","humanlike"],
  safe      : ["safety_conscious"],
  assertive : ["boundary_setting","challenging"],
  social_iq : ["social_dexterity","message_tailoring"],
  warm      : ["warmth","validating"],
  analytical: ["analytical"],
  insightful: ["depth_of_insight"],
  empathy   : ["demonstrated_empathy"],
  compliant : ["compliant"],
  moral     : ["moralising"],
  pragmatic : ["pragmatic_ei"]
};

const RELATIVE_SCALE_FACTOR = 0.15;   // 0 = off, 0.5 ≈ fairly strong

/* 0-20  ➜  0-10,  rounded to 1 dp – uses integer math to avoid FP quirks */
const s = v => Math.round((v / 2) * 10) / 10;
// --- End Global Scope Variables ---



// --- Dark Mode / Theme / Email Functions ---
function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');
  const savedMode = localStorage.getItem('darkModeEnabled');
  if (savedMode) {
    document.body.classList.toggle('dark-mode', savedMode === 'true');
    toggle.checked = (savedMode === 'true');
    label.textContent = (savedMode === 'true') ? 'Dark' : 'Light';
  } else {
    applySystemTheme();
  }
  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    label.textContent = this.checked ? 'Dark' : 'Light';
    localStorage.setItem('darkModeEnabled', this.checked);
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Redraw needed to update heatmap colors and score bar gradients
      $('#leaderboard').DataTable().rows().invalidate('data').draw(false);
      updateFeatureHeatmapColors();
      refreshHeatmapLegend();
    }
    // Update open modal chart colors if needed (complex, might require chart recreation)
  });
}

function cloneHeaderToFooter() {
  const theadRow = document.querySelector('#leaderboard thead tr');
  if (!theadRow) return;

  const tfoot = document.querySelector('#leaderboard tfoot') || document.createElement('tfoot');
  // wipe any previous clone
  tfoot.innerHTML = '';

  // deep-clone to preserve classes & data- attributes
  const footerRow = theadRow.cloneNode(true);
  tfoot.appendChild(footerRow);

  // append only if we just created the tfoot
  if (!tfoot.parentElement) {
    document.getElementById('leaderboard').appendChild(tfoot);
  }
}


function applySystemTheme() {
  if (localStorage.getItem('darkModeEnabled') === null) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.getElementById('darkModeToggle');
    const label = document.getElementById('toggleLabel');
    document.body.classList.toggle('dark-mode', prefersDarkMode);
    toggle.checked = prefersDarkMode;
    label.textContent = prefersDarkMode ? 'Dark' : 'Light';
  }
}

function updateFeatureHeatmapColors() {
  const dark = document.body.classList.contains('dark-mode');
  document.querySelectorAll('#leaderboard td.feature-cell').forEach(td => {
    const t = parseFloat(td.dataset.heat);
    if (isNaN(t)) return;
    const col = dark
      ? pastelPlasma(t, { wash:0.35, alpha:0.7 })
      : pastelPlasma(t, { wash:0.35, alpha:0.55 });
    td.style.setProperty('background-color', col, 'important');  // 👈
  });
}

function getRelativeScale(modelKey, featureKey){
  if (typeof chartData === 'undefined' || !chartData[modelKey]) return 1;

  // prefer the log variant, fall back if needed
  const rel = chartData[modelKey].relativeRadarLog
           || chartData[modelKey].relativeRadar;
  if (!rel || !rel.labels || !rel.values) return 1;

  const wanted = RUBRIC_GROUPS[featureKey] || [];
  let total = 0, n = 0;

  wanted.forEach(lbl=>{
    const i = rel.labels.indexOf(lbl);
    if (i !== -1){
      total += rel.values[i];
      n++;
    }
  });
  if (n === 0) return 1;

  /* log scores are ≈ -0.6 … 0.4 → normalise to 0-1 */
  const mean   = total / n;
  const norm01 = Math.min(1, Math.max(0, (mean + 0.6)));   // width ≈ 1.0

  /* centre on 1.0 and apply a gentle scale */
  return 1 + (norm01 - 0.5) * RELATIVE_SCALE_FACTOR;
}

function displayEncodedEmail() {
  var encodedUser = 'contact';
  var encodedDomain = 'eqbench.com';
  var emailElement = document.getElementById('email');
  if (emailElement) {
    emailElement.innerHTML = decodeHtmlEntities(encodedUser + '@' + encodedDomain);
    var emailAddress = emailElement.innerText;
    emailElement.innerHTML = `<a href="mailto:${emailAddress}">Contact</a>`;
  }
}

function decodeHtmlEntities(encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}
// --- End Dark Mode / Theme / Email Functions ---

// --- Abilities Modal Function (Adapted for chartData) ---
function showAbilitiesModal(modelName) {
  // Use the correct data variable name
  if (typeof chartData === 'undefined' || !chartData[modelName]) {
    console.warn("No chart data found for: ", modelName);
    document.getElementById('abilitiesProfileContent').innerHTML =
      `<p><i>No abilities data for ${modelName}</i></p>`;
    const abilitiesModal = new bootstrap.Modal(document.getElementById('abilitiesProfileModal'));
    abilitiesModal.show();
    return;
  }
  const data = chartData[modelName]; // Use correct data source

  // Destroy existing charts if any
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.destroy();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.destroy();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.destroy();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.destroy();

  // Re-inject canvas elements (structure remains the same)
  document.getElementById('abilitiesProfileContent').innerHTML = `
  <div class="row mb-4">
    <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="chart-container" style="position: relative; height: auto; aspect-ratio: 1.6/1;">
        <canvas id="abilitiesAbsoluteRadar"></canvas>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="chart-container" style="position: relative; height: auto; aspect-ratio: 1.6/1;">
        <canvas id="abilitiesRelativeRadar"></canvas>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-lg-6 mb-4">
      <div class="chart-container" style="position: relative; height: 200px;">
        <canvas id="abilitiesStrengthsChart"></canvas>
      </div>
    </div>
    <div class="col-md-12 col-lg-6 mb-4">
      <div class="chart-container" style="position: relative; height: 200px;">
        <canvas id="abilitiesWeaknessesChart"></canvas>
      </div>
    </div>
  </div>
  `;

  // Check dark mode for colors
  const isDarkMode = document.body.classList.contains('dark-mode');
  const axisColor = isDarkMode ? '#eee' : '#333';
  const gridColor = isDarkMode ? '#666' : '#ccc';
  const titleColor = isDarkMode ? '#eee' : '#333';
  const pointLabelColor = isDarkMode ? '#ddd' : '#444';

  // Get contexts after re-injecting canvas
  const ctxAbs = document.getElementById('abilitiesAbsoluteRadar').getContext('2d');
  const ctxRel = document.getElementById('abilitiesRelativeRadar').getContext('2d');
  const ctxStr = document.getElementById('abilitiesStrengthsChart').getContext('2d');
  const ctxWeak = document.getElementById('abilitiesWeaknessesChart').getContext('2d');

  // Chart generation logic remains the same, assuming data structure is consistent
  // (1) Absolute Radar Chart
  abilitiesAbsoluteRadarChart = new Chart(ctxAbs, {
    type: 'radar',
    data: {
      labels: data.absoluteRadar.labels,
      datasets: [{
        label: 'Absolute Score',
        data: data.absoluteRadar.values,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 0 },
      scales: { r: { beginAtZero: true, suggestedMin: 0, suggestedMax: 20, ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false }, pointLabels: { color: pointLabelColor, font: { size: 11 } }, grid: { color: gridColor }, angleLines: { color: gridColor } } },
      plugins: { title: { display: true, text: 'Absolute Scores', color: titleColor, font: { size: 16 } }, legend: { display: false } }
    }
  });

  // (2) Relative Radar Chart
  abilitiesRelativeRadarChart = new Chart(ctxRel, {
    type: 'radar',
    data: {
      labels: data.relativeRadarLog.labels,
      datasets: [{
        label: 'Relative Score (Log Scale)',
        data: data.relativeRadarLog.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 0 },
      scales: { r: { min: -0.6, max: 0.4, ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false }, pointLabels: { color: pointLabelColor, font: { size: 11 } }, grid: { color: gridColor }, angleLines: { color: gridColor } } },
      plugins: { title: { display: true, text: 'Relative Scores', color: titleColor, font: { size: 16 } }, legend: { display: false } }
    }
  });

  // (3) Strengths Bar Chart
  const strengthsLabels = data.strengths.map(x => x.criterion);
  const strengthsValues = data.strengths.map(x => x.relativeScore);
  abilitiesStrengthsChart = new Chart(ctxStr, {
    type: 'bar',
    data: { labels: strengthsLabels, datasets: [{ label: 'Relative Strength', data: strengthsValues, backgroundColor: 'rgba(54, 162, 235, 0.8)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, animation: { duration: 0 }, plugins: { title: { display: true, text: 'High Scoring Traits', color: titleColor, font: { size: 16 } }, legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } }, y: { ticks: { color: axisColor }, grid: { display: false } } } }
  });

  // (4) Weaknesses Bar Chart
  const weaknessesLabels = data.weaknesses.map(x => x.criterion);
  const weaknessesValues = data.weaknesses.map(x => x.relativeScore);
  const weaknessesReversedLabels = [...weaknessesLabels].reverse();
  const weaknessesReversedValues = [...weaknessesValues].reverse();
  abilitiesWeaknessesChart = new Chart(ctxWeak, {
    type: 'bar',
    data: { labels: weaknessesReversedLabels, datasets: [{ label: 'Relative Weakness', data: weaknessesReversedValues, backgroundColor: 'rgba(255, 99, 132, 0.8)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, animation: { duration: 0 }, plugins: { title: { display: true, text: 'Low Scoring Traits', color: titleColor, font: { size: 16 } }, legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } }, y: { ticks: { color: axisColor }, grid: { display: false } } } }
  });

  // Add resize event listener
  window.removeEventListener('resize', resizeModalCharts);
  window.addEventListener('resize', resizeModalCharts);

  // Show the modal
  const abilitiesModal = new bootstrap.Modal(document.getElementById('abilitiesProfileModal'));
  document.getElementById('abilitiesProfileModalLabel').textContent = `Abilities Overview: ${modelName}`;
  abilitiesModal.show();

  // Modal shown event to force chart resize
  document.getElementById('abilitiesProfileModal').addEventListener('shown.bs.modal', function() {
    resizeModalCharts();
  });
}

// Resize handler remains the same
function resizeModalCharts() {
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.resize();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.resize();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.resize();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.resize();
}
// --- End Abilities Modal Function ---

// --- Style Modal Function (Adapted for eqbench3StyleAssociationData) ---
function showStyleModal(modelName) {
  const contentElement = document.getElementById('styleProfileContent');
  const modalTitleElement = document.getElementById('styleProfileModalLabel');
  const styleModalElement = document.getElementById('styleProfileModal');

  if (!contentElement || !modalTitleElement || !styleModalElement) {
      console.error("Style modal elements not found!");
      return;
  }

  const styleModal = bootstrap.Modal.getOrCreateInstance(styleModalElement);

  // Prepare Content Area
  contentElement.innerHTML = `
      <div id="styleCloudContainer" style="width: 100%; height: 500px; min-height: 300px; max-height: 60vh; border: 1px solid var(--border-color, #ccc); border-radius: 4px; position: relative; margin-bottom: 1rem;">
          <p class="text-center p-3"><i>Loading style data...</i></p>
      </div>
      <p> </p>`;
  const containerElement = document.getElementById('styleCloudContainer');

  // Check Data Availability (Use correct data variable name)
  if (typeof eqbench3StyleAssociationData === 'undefined' || !eqbench3StyleAssociationData[modelName] || !eqbench3StyleAssociationData[modelName].mostFavored || eqbench3StyleAssociationData[modelName].mostFavored.length === 0) {
      console.warn("No style data found or empty for: ", modelName);
      if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No style profile data available for ${modelName}.</i></p>`;
      }
      modalTitleElement.textContent = `Style Profile: ${modelName}`;
      styleModal.show();
      return;
  }

  // Prepare Data (Use correct data variable name)
  const data = eqbench3StyleAssociationData[modelName].mostFavored;
  const filteredData = data.filter(item => item.word.toLowerCase() !== "crisp"); // Keep filter? Adjust if needed

  const topTraits = filteredData
      .sort((a, b) => b.strength - a.strength)
      .slice(0, 40); // Limit number of words

  const strengths = topTraits.map(item => item.strength);
  const minStrength = Math.min(...strengths);
  const maxStrength = Math.max(...strengths);
  const minFontSize = 10;
  const maxFontSize = 65;

  const listData = topTraits.map(item => {
      let size;
      if (maxStrength === minStrength) {
          size = (minFontSize + maxFontSize) / 2;
      } else {
          const scale = (item.strength - minStrength) / (maxStrength - minStrength);
          size = minFontSize + scale * (maxFontSize - minFontSize);
      }
      size = Math.max(size, minFontSize);
      const word = typeof item.word === 'string' ? item.word.trim() : '';
      return word ? [word, Math.round(size)] : null;
  }).filter(item => item !== null);

  if (listData.length === 0) {
       console.warn("No valid words left after filtering for: ", modelName);
       if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No valid style traits found for ${modelName}.</i></p>`;
       }
       modalTitleElement.textContent = `Style Profile: ${modelName}`;
       styleModal.show();
       return;
  }

  // Prepare Options
  const isDarkMode = document.body.classList.contains('dark-mode');
  const cloudBgColor = isDarkMode ? '#333' : '#fff';
  const cloudColor = isDarkMode ? 'random-light' : 'random-dark';

  const options = {
      list: listData,
      gridSize: Math.round(16 * maxFontSize / 60),
      weightFactor: 1,
      fontFamily: 'sans-serif',
      color: cloudColor,
      backgroundColor: cloudBgColor,
      rotateRatio: 0.0,
      minSize: 5,
      drawOutOfBound: false,
      hover: (item, dimension, event) => {
          if (item) {
              // Use correct data source for hover lookup
              const originalStrength = eqbench3StyleAssociationData[modelName].mostFavored.find(t => t.word === item[0])?.strength;
              if (originalStrength !== undefined) {
                  event.target.title = `${item[0]}: ${originalStrength.toFixed(5)}`;
              }
          } else {
               event.target.title = '';
          }
      },
      click: (item, dimension, event) => {
          if (item) console.log(item[0] + ': ' + item[1]);
      }
  };

  // Event Listener to Generate Cloud AFTER Modal is Shown
  styleModalElement.removeEventListener('shown.bs.modal', generateCloud); // Remove previous listener

  function generateCloud() {
      const currentContainer = document.getElementById('styleCloudContainer');
      if (!currentContainer) {
          console.error("Container element not found inside shown.bs.modal listener");
          return;
      }
      try {
          if (typeof WordCloud !== 'undefined') {
              currentContainer.innerHTML = ''; // Clear loading message
              WordCloud(currentContainer, options);
          } else {
              console.error("WordCloud library is not loaded.");
              currentContainer.innerHTML = '<p class="text-danger text-center p-3">Error: WordCloud library not loaded.</p>';
          }
      } catch (error) {
          console.error("Error generating word cloud:", error);
          currentContainer.innerHTML = '<p class="text-danger text-center p-3">Error generating word cloud.</p>';
      }
      styleModalElement.removeEventListener('shown.bs.modal', generateCloud); // Remove listener after execution
  }

  styleModalElement.addEventListener('shown.bs.modal', generateCloud, { once: true }); // Add listener

  // Show the Modal
  modalTitleElement.textContent = `Style Profile: ${modelName}`;
  styleModal.show();
}
// --- End Style Modal Function ---

/* ── Build the linear‑gradient for the legend bar ─────────────── */
function refreshHeatmapLegend() {
  const bar = document.querySelector('#heatmapLegend .legend-bar');
  if (!bar) return;

  const dark = document.body.classList.contains('dark-mode');
  const steps = 20;                   // resolution of the gradient
  const colours = [];

  for (let i = 0; i <= steps; i++){
      const t0 = i / steps;           // 0‑1 raw range
      const t  = t0;   // respect the custom ramp
      const col = dark
          ? pastelPlasma(t, {wash:0.2, alpha:0.8})
          : pastelPlasma(t, {wash:0.2, alpha:0.5});
      colours.push(col);
  }
  bar.style.background = `linear-gradient(to right, ${colours.join(',')})`;
}

// --- Heatmap Color Interpolation ---
function interpolateColor(value, min, max, color1, color2) {
  // Ensure value is within bounds
  const clampedValue = Math.max(min, Math.min(max, value));
  // Calculate the mix ratio (0 = color1, 1 = color2)
  const ratio = (clampedValue - min) / (max - min);

  // Simple linear interpolation for RGB
  const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
  const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
  const b = Math.round(color1.b + (color2.b - color1.b) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
}

/* ===== Plasma colormap =====
  key‑frames taken from matplotlib – five stops are plenty */
/* Plasma palette – slight shift away from pure yellow */
const plasmaStops = [
  { t: 0.00, rgb:[ 13,   8, 135] },  // indigo
  { t: 0.25, rgb:[ 75,   3, 161] },  // violet
  { t: 0.50, rgb:[125,   0, 140] },  // magenta
  { t: 0.75, rgb:[182,  52,  97] },  // pink‑red
  { t: 1.00, rgb:[255, 187,  60] }   // amber (was neon yellow)
];


  /* linear interpolation between the two neighbouring stops */
function plasmaColor(t){               // t ∈ [0,1]
  t = Math.min(1, Math.max(0, t));     // clamp
  const hi = plasmaStops.findIndex(s => t <= s.t);
  if (hi === 0)          return `rgb(${plasmaStops[0].rgb})`;
  if (hi === -1)         return `rgb(${plasmaStops.at(-1).rgb})`;
  const lo = plasmaStops[hi-1];
  const hiStop = plasmaStops[hi];
  const f = (t - lo.t) / (hiStop.t - lo.t);
  const rgb = lo.rgb.map((c,i) => Math.round(c + f*(hiStop.rgb[i]-c)));
  return `rgb(${rgb})`;
}

function pastelPlasma(
  t,
  { wash = 0.4, alpha = 1, popCutoff = 0.99, popBoost = 0.02 } = {}
) {
  // If the value is in the top band, make the colour pop by reducing wash
  const effectiveWash = t >= popCutoff
    ? Math.max(0, wash - popBoost)  // never let wash go negative
    : wash;

  const rgb   = plasmaColor(t).match(/\d+/g).map(Number);
  const mixed = rgb.map(c => Math.round((1 - effectiveWash) * c + effectiveWash * 255));

  return `rgba(${mixed[0]},${mixed[1]},${mixed[2]},${alpha})`;
}


/* Clamp t∈[0,1], locate the segment, then linear‑interpolate. */
function remapHeatValue(t) {
  t = Math.min(1, Math.max(0, t));                 // clamp 0-1

  /* piece-wise linear ramp */
  for (let i = 1; i < HEATMAP_SCALE_MAP.length; i++) {
    const [x0, y0] = HEATMAP_SCALE_MAP[i - 1];
    const [x1, y1] = HEATMAP_SCALE_MAP[i];
    if (t <= x1) {
      const f = (t - x0) / (x1 - x0);
      t = y0 + f * (y1 - y0);
      break;
    }
  }

  /* >>> snap to 0.01 so microscopic FP noise can’t matter <<< */
  return Math.round(t * 100) / 100;                // 0.00 … 1.00
}
// --- End Heatmap Color Interpolation ---


// --- Gradient logic for visible bars (Blue gradient) ---
// ─── Heat‑map midpoint ─────────────────────────────────────


function updateScoreBarColorsEQ3() {
  const scoreBars = document.querySelectorAll('#leaderboard .eqbench3-score-bar'); // Use specific class
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    // Check visibility using offsetParent
    if (bar.offsetParent !== null) {
      const row = bar.closest('tr');
      if (!row) return;

      const overallIndex = $(row).index(); // Get visual index
      const totalRows = $('#leaderboard tbody tr:visible').length; // Count only visible rows
      if (totalRows === 0) return;

      // Calculate gradient based on visual position - Blue gradient
      const startPercent = (overallIndex / totalRows);
      const endPercent = ((overallIndex + 1) / totalRows);

      const colorFn = isDarkMode
            ? (t) => pastelPlasma(t,{wash:0.1,alpha:0.9})                             // full strength
            : (t) => pastelPlasma(t,{wash:0.6,alpha:1}); // 60 % white mix

      const startColor = colorFn(1 - startPercent);   // remember: reversed
      const endColor   = colorFn(1 - endPercent);

      bar.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    }
  });
}
// --- End Gradient logic ---

// --- Load Leaderboard Data (ADAPTED FOR EQ-BENCH 3 CSV + Heatmap + Error Bars) ---
function loadLeaderboardData() {
  // Ensure the correct data variable exists
  if (typeof leaderboardDataEQBench3 === 'undefined') {
      console.error("leaderboardDataEQBench3 is not defined. Make sure the data file is loaded.");
      document.getElementById('leaderboardBody').innerHTML =
        `<tr><td colspan="${TOTAL_COLS}">Error loading leaderboard data.</td></tr>`;
      return;
  }

  const eqBenchRows = leaderboardDataEQBench3
    .split('\n')
    .slice(1) // Skip header row
    .filter(l => l.trim() !== ''); // Remove empty lines

  if (eqBenchRows.length === 0) {
    document.getElementById('leaderboardBody').innerHTML =
      `<tr><td colspan="${TOTAL_COLS}">No leaderboard data available.</td></tr>`;
    return; // No data to process
  }

  const featureRange = Object.fromEntries(
    featureNames.map(f => [f, {min: Infinity, max: -Infinity, focusMin: null}]));



  /* --- gather min & max for each feature column (scaled) ----------- */
  eqBenchRows.forEach(r => {
    const parts          = r.split(',');
    const modelNameRaw   = parts[0].trim();
    const modelKey       = modelNameRaw.replace(/^!|\*/g, '');   // strip flags

    featureNames.forEach((f, idx) => {
      const rawAbs  = parseFloat(parts[3 + idx]);   // absolute csv value
      const scaled  = s(rawAbs * getRelativeScale(modelKey, f));

      if (!isNaN(scaled)) {
        featureRange[f].min = Math.min(featureRange[f].min, scaled);
        featureRange[f].max = Math.max(featureRange[f].max, scaled);
      }
    });
  });
  /* ---------------------------------------------------------------- */


  // --- Elo/Rubric Scaling (Adjusted for Error Bars) ---
  const originalEloScores = eqBenchRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
  const originalRubricScores = eqBenchRows.map(row => parseFloat(row.split(',')[2])).filter(s => !isNaN(s)); // Rubric is already 0-100
  const ciHighScores = eqBenchRows.map(row => parseFloat(row.split(',')[15])).filter(s => !isNaN(s)); // Index 15 for ci_high_norm

  const originalMaxElo = originalEloScores.length > 0 ? Math.max(...originalEloScores) : 1500;
  const maxCiHighNorm = ciHighScores.length > 0 ? Math.max(...ciHighScores) : originalMaxElo; // Use originalMaxElo as fallback

  // Use the maximum CI high value to set the scale range for Elo bars
  maxEloScore = Math.max(originalMaxElo, maxCiHighNorm);
  maxRubricScore = 100; // Rubric is fixed 0-100 scale
  baselineEloScore = 0; // Keep baseline at 0 for simplicity with error bars
  baselineRubricScore = 0; // Rubric baseline is 0
  // --- End Scaling ---

  const isDarkMode = document.body.classList.contains('dark-mode'); // Check dark mode once

  let html = eqBenchRows.map((row, index) => {
    let [
      modelNameRaw, // 0
      _elo_norm, // 1
      _rubric_0_100, // 2
      humanlike, // 3
      safe, // 4
      assertive, // 5
      social_iq, // 6
      warm, // 7
      analytical, // 8
      insightful, // 9
      empathy, // 10
      compliant, // 11
      moral, // 12
      pragmatic, // 13
      ci_low_norm, // 14
      ci_high_norm // 15
    ] = row.split(',');

    const eloScoreNum = parseFloat(_elo_norm);
    const rubricScoreNum = parseFloat(_rubric_0_100); // Not displayed in table
    const ciLowNum = parseFloat(ci_low_norm);
    const ciHighNum = parseFloat(ci_high_norm);
    let currentModelName = modelNameRaw.trim();


    // --- Feature Metric Parsing & Heatmap Color ---
    const featuresRaw = {
      humanlike,
      safe,
      assertive,
      social_iq,
      warm,
      analytical,
      insightful,
      empathy,
      compliant,
      moral,
      pragmatic
    };

    const features = Object.entries(featuresRaw).map(([key, raw]) => {
      const scaled = s(parseFloat(raw) * getRelativeScale(currentModelName, key));
      return { value: scaled, name: key };
    });



    const featureCellsHTML = features.map(feature => {
      const {min,max} = featureRange[feature.name];
      let t = Number.isFinite(feature.value) && max !== min
        ? (feature.value - min) / (max - min)
        : 0;

      t = Math.min(1, Math.max(0, t));      // clamp

      if (!LINEAR_HEATMAP_FEATURES.includes(feature.name)) {
        t = remapHeatValue(t);        // nonlinear ramp
      }


      // One‑line colour lookup
      const bgColor = isDarkMode
        ? pastelPlasma(t, { wash: 0.35, alpha: 0.7})
        : pastelPlasma(t, { wash: 0.35, alpha: 0.55 });
      const displayValue = isNaN(feature.value) ? '-' : feature.value.toFixed(1);
      const orderValue = isNaN(feature.value) ? -1 : feature.value.toFixed(1);
      return `
  <td class="mobile-collapsible feature-cell"
      data-order="${orderValue}"
      data-heat="${t}"
      style="background-color: ${bgColor} !important;">   <!-- ← space added -->
    <div class="cell-content">${displayValue}</div>
  </td>`;

    }).join('');
    // --- End Feature Metric Parsing & Heatmap Color ---

    // --- Calculate Percentages for Bars (Elo with Error Bar) ---
    const eloScoreRangeForBar = (maxEloScore - baselineEloScore) || 1; // Use updated maxEloScore
    const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
    const eloScorePercentage = isNaN(eloScoreNum) ? 0 : Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRangeForBar) * 100));

    // Calculate error bar positions based on the same scale
    const errorBarLeftPercent = isNaN(ciLowNum) ? 0 : Math.max(0, Math.min(100, ((ciLowNum - baselineEloScore) / eloScoreRangeForBar) * 100));
    const errorBarRightPercent = isNaN(ciHighNum) ? 0 : Math.max(0, Math.min(100, ((ciHighNum - baselineEloScore) / eloScoreRangeForBar) * 100));
    const errorBarWidthPercent = Math.max(0, errorBarRightPercent - errorBarLeftPercent); // Ensure width is not negative

    // Rubric score percentage (not displayed, but kept for potential future use)
    const rubricScoreRangeForBar = (maxRubricScore - baselineRubricScore) || 1; // Range is 100
    const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
    const rubricScorePercentage = isNaN(rubricScoreNum) ? 0 : Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRangeForBar) * 100));
    // --- End Percentage Calculation ---

    // --- Model Name Handling ---    
    const isNsfwModel = currentModelName.startsWith('!');
    currentModelName = currentModelName.replace(/^!/, '');
    const isNewModel = currentModelName.startsWith('*');
    currentModelName = currentModelName.replace(/^\*/, '');

    let displayModelName = currentModelName.split('/').pop();
    if (isNsfwModel) displayModelName = '🔞 ' + displayModelName;
    if (isNewModel) displayModelName = '🆕 ' + displayModelName;

    let modelNameDisplayHTML = displayModelName;
    if (currentModelName.includes('/')) {
        modelNameDisplayHTML = `<a href="https://huggingface.co/${currentModelName}" target="_blank" rel="noopener noreferrer">${displayModelName}</a>`;
    }

    let safeModelName = currentModelName.replace(/\//g, '__').replace(/[^a-zA-Z0-9_-]/g, '-');
    let modelResultsFn = `results/eqbench3_reports/${safeModelName}.html`.toLowerCase();
    // --- End Model Name Handling ---

    // --- Score Bar HTML (Elo with Error Bar) ---
    let scoreBarEloHTML = `
      <div class="score-bar-container">
        <div class="eqbench3-score-bar" style="width: ${eloScorePercentage.toFixed(1)}%; display:none;"></div>
        ${!isNaN(ciLowNum) && !isNaN(ciHighNum) ? `<div class="error-bar" style="left: ${errorBarLeftPercent.toFixed(2)}%; width: ${errorBarWidthPercent.toFixed(2)}%; display:none;"></div>` : ''}
        <span class="score-text">${isNaN(eloScoreNum) ? '-' : eloScoreNum.toFixed(1)}</span>
      </div>`;

    // Rubric score bar (not displayed)
    // let scoreBarRubricHTML = `
    //   <div class="score-bar-container">
    //     <div class="eqbench3-score-bar" style="width: ${rubricScorePercentage.toFixed(1)}%; display:none;"></div>
    //     <span class="score-text">${isNaN(rubricScoreNum) ? '-' : rubricScoreNum.toFixed(1)}</span>
    //   </div>`;
    // --- End Score Bar HTML ---

    // --- Icon Definitions ---
    const abilitiesInfoIcon = `
      <span class="abilities-info-icon chart-icon" data-model-name="${currentModelName}" title="View Abilities Charts"><span></span></span>`;
    // const styleInfoIcon = `
    //   <span class="style-info-icon chart-icon" data-model-name="${currentModelName}" title="View Style Profile"><span></span></span>`;
    // --- End Icon Definitions ---

    // --- Row HTML Generation (Updated Structure for EQ-Bench 3) ---
    return `
      <tr data-model-name-full="${currentModelName}"
          data-original-elo-score="${eloScoreNum}"
          data-original-rubric-score="${rubricScoreNum}">

        <td> <!-- Col 0: Model -->
          <div class="cell-content">
            ${modelNameDisplayHTML}
          </div>
        </td>

        <td> <!-- Col 1: Abilities -->
          <div class="cell-content">
            ${abilitiesInfoIcon}
          </div>
        </td>

        ${featureCellsHTML} <!-- Inject feature cells (Cols 2-12) -->

        <td data-order="${isNaN(eloScoreNum) ? -Infinity : eloScoreNum.toFixed(1)}"> <!-- Col 13: Elo Score -->
          <div class="cell-content">
            ${scoreBarEloHTML}
          </div>
        </td>

        <td> <!-- Col 14: Sample Link -->
          <div class="cell-content">
            <a href="${modelResultsFn}">Sample</a>
          </div>
        </td>
      </tr>
    `;
    // --- End Row HTML Generation ---
  }).join('');

  document.getElementById('leaderboardBody').innerHTML = html;
  initializeDataTable(); // Initialize DataTable after adding rows
}
// --- End Load Leaderboard Data ---

// --- DataTable config (Updated Indices for EQ-Bench 3) ---
/* indices of the feature columns, calculated once */
const FEATURE_COLUMN_INDICES =
  Array.from({length: featureNames.length},
             (_, i) => FEATURE_COL_START + i);   // e.g. [2,3,4,…,12]

function setScoreHeaderWidth(api, idx) {
  const vw = window.innerWidth;
  let width;
  if (vw < 580) width = '30%';
  else if (vw < MOBILE_BREAKPOINT) width = '50%';
  else if (vw >= MOBILE_BREAKPOINT && vw < 1300) width = '12%';
  else width = '20%';
  // Ensure the header exists before trying to style it
  const header = api.column(idx).header();
  if (header) {
      header.style.width = width;
  }
}


let dataTableConfig = {
  autoWidth: false,
  order      : [[ELO_COL_INDEX, 'desc']],        // default sort by Elo (Table index 13)
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs : [
    {targets:[0]                              , type:'string'   }, // model
    {targets:[1,SAMPLE_COL_INDEX]             , orderable:false }, // icons/link
    { targets: FEATURE_COLUMN_INDICES         , orderable:true }, // Features (Table indices 2-12)
    {targets:[ELO_COL_INDEX]                  , type:'num'      }, // Elo (Table index 13)
    {targets:[ELO_COL_INDEX]                  , orderSequence:['desc','asc']},
    {targets:FEATURE_COLUMN_INDICES           , orderSequence:['desc','asc']}
  ],
  // Custom DOM layout unchanged
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

  // Callback after table draw (Updated Indices & Score Bar/Error Bar Fix)
  drawCallback: function (settings) {



    const api = this.api();
    /* wipe any inline header + selection created by the previous draw */
    $('#leaderboard .floating-header-row').remove();
    api.rows().nodes().to$().removeClass('selected-row');


    if (!api || api.rows().count() === 0) return;

    /* ---------- Handle score bar and error bar visibility ---------- */
    let order = api.order();
    if (!order || order.length === 0) {
        order = [[ELO_COL_INDEX, 'desc']]; // Default to Elo sort if no order set
        api.order(order).draw(false); // Apply default order and redraw
        return; // Exit early, redraw will call drawCallback again
    }
    let sortedColumnIndex = order[0][0];

    const SCORE_COLUMNS = [ELO_COL_INDEX]; // Only Elo has bars now
    const NON_SCORE_COLUMNS = [...Array(TOTAL_COLS).keys()]
        .filter(i => !SCORE_COLUMNS.includes(i));

    const tableNode = $(api.table().node());
    // Hide ALL score bars and error bars initially on each draw
    tableNode.find('.eqbench3-score-bar, .error-bar').hide();
    tableNode.find('thead th').css('width', ''); // Reset header widths

    let columnToShowBar = -1;
    // Determine which score column's bars (and error bars) should be visible
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
        // If sorted by a score column, show its bars
        columnToShowBar = sortedColumnIndex;
        lastSortedScoreColumn = sortedColumnIndex; // Remember this score column
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) &&
               lastSortedScoreColumn !== null && SCORE_COLUMNS.includes(lastSortedScoreColumn)) {
        // If sorted by a non-score column, show bars for the *last sorted* score column
        columnToShowBar = lastSortedScoreColumn;
    } else {
        // Fallback: If no relevant sort or last sort, default to showing Elo bars
        columnToShowBar = ELO_COL_INDEX;
        lastSortedScoreColumn = ELO_COL_INDEX;
    }

    // Show the bars and error bars for the determined column
    if (columnToShowBar !== -1) {
        api.rows({ page: 'current' })
           .nodes()
           .to$()
           .find(`td:eq(${columnToShowBar}) .score-bar-container`) // Target the container
           .children('.eqbench3-score-bar, .error-bar') // Select both bar and error bar
           .show(); // Show them

        setScoreHeaderWidth(api, columnToShowBar); // Set the width for the header of the visible score column
    }

    
    /* ---------- End bar visibility logic ---------- */

    updateScoreBarColorsEQ3(); // Apply gradient colors to visible score bars
    collapseMiddleColumns(); // Handle mobile column collapsing
    updateFeatureHeatmapColors(); // Apply heatmap colors
  }


};
// --- End DataTable config ---

// --- Mobile Collapse Logic (Unchanged logic, relies on class) ---
let middleStatsExpanded = false;

function collapseMiddleColumns() {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const toggleButton = $('#toggleMiddleStats');
  const legend = $('#heatmapLegend');   // ← NEW

  if (isMobile) {
      toggleButton.removeClass('d-none').addClass('show-details-toggle-button');
      if (!middleStatsExpanded) {
          $('#leaderboard .mobile-collapsible').hide();
          toggleButton.text('Expand Details');
          legend.addClass('d-none');
      } else {
          $('#leaderboard .mobile-collapsible').show();
          toggleButton.text('Hide Details');
          legend.removeClass('d-none');
      }
  } else {
      // On desktop (and wider than mobile breakpoint), always show columns
      toggleButton.addClass('d-none').removeClass('show-details-toggle-button');
      legend.removeClass('d-none');
      $('#leaderboard .mobile-collapsible').show();
  }
  // Adjust DataTable layout AFTER showing/hiding columns
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Use a small delay to allow DOM updates before adjusting columns
      setTimeout(() => {
          $('#leaderboard').DataTable().columns.adjust();
      }, 10);
  }
}

/* ------------------------------------------------------------------
   Give every <th class="feature-header"> a tooltip link
   ------------------------------------------------------------------ */
/* ------------------------------------------------------------------
   Give every <th class="feature-header"> a tooltip link
   ------------------------------------------------------------------ */
function decorateFeatureHeaders(tableApi) {
  // 1) loop over all headers (thead AND tfoot) that are flagged as feature columns
  const tableNode = tableApi.table().node(); // Get the main table element
  tableNode.querySelectorAll('thead th.feature-header, tfoot th.feature-header') // <--- SELECT FROM BOTH THEAD AND TFOOT
            .forEach(th => {
    const label = th.textContent.trim();                   // e.g. "Empathy"

    // Check if it's already decorated (important to avoid infinite loops if called multiple times)
    if (th.querySelector('a[data-bs-toggle="tooltip"]')) return;

    const key   = label.toLowerCase().replace(/\s+/g, '_');  // "social_iq"
    const desc  = FEATURE_DESCRIPTIONS[key] || '';

    th.innerHTML = `
    <span class="feature-tooltip"
          tabindex="-1"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="${desc}">${label}</span>`;
  });

  // 2) (re)‑initialise Bootstrap 5 tooltips
  // Ensure Bootstrap is loaded before trying to initialize tooltips
    if (typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined') {
        // Destroy existing tooltips first to prevent duplicates if re-run
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach(el => {
                    const existingTooltip = bootstrap.Tooltip.getInstance(el);
                    if (existingTooltip) {
                        existingTooltip.dispose();
                    }
                });
        // Initialize new tooltips
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach(el => new bootstrap.Tooltip(el));
    } else {
        console.warn("Bootstrap Tooltip component not found. Skipping initialization.");
    }
}


function toggleMiddleStats() {
  middleStatsExpanded = !middleStatsExpanded;
  collapseMiddleColumns();
}
// --- End Mobile Collapse Logic ---

// --- Initial Score Bar Fix (Ensures drawCallback runs) ---
function fixInitialScoreBars() {
  setTimeout(() => {
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Trigger a redraw which calls drawCallback to show default bars
      $('#leaderboard').DataTable().draw(false);
    }
  }, 50); // Short delay
}
// --- End Initial Score Bar Fix ---

// --- DataTable Initialization (Removed Slop Listener) ---
function initializeDataTable() {
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    // Unbind previous listeners
    $('#leaderboardBody').off('click', '.abilities-info-icon');
    $('#leaderboardBody').off('click', '.style-info-icon');
  }

  cloneHeaderToFooter();

  let table = $('#leaderboard').DataTable(dataTableConfig);
  decorateFeatureHeaders(table);          // make headers pretty


  // --- Event Listeners for Icons ---
  // Abilities icon listener
  $('#leaderboardBody').on('click', '.abilities-info-icon', function() {
    const modelName = $(this).data('model-name');
    showAbilitiesModal(modelName);
  });

  // Style icon listener (If re-enabled later)
  // $('#leaderboardBody').on('click', '.style-info-icon', function() {
  //   const modelName = $(this).data('model-name');
  //   showStyleModal(modelName);
  // });
  // --- End Event Listeners ---

  table.one('init.dt', function() {
    collapseMiddleColumns(); // Set initial mobile column visibility
    fixInitialScoreBars(); // Ensure default score bars are shown correctly
    updateFeatureHeatmapColors();
  });

  table.on('draw.dt', function() {
      updateFeatureHeatmapColors(); // Ensure heatmap colors update on redraw
      // Note: Score bar colors and visibility are handled within drawCallback now
  });

  /* Row-select ➜ highlight + inline header   (only when a feature-cell is clicked) */
  $('#leaderboard tbody').on('click','tr',function (e){
    const $cell = $(e.target).closest('td');
    /* proceed only if the clicked cell is one of the feature columns */
    if (!$cell.hasClass('feature-cell')) return;

    const $table = $('#leaderboard');
    const api    = $table.DataTable();
    const $row   = $(this);

    /* ignore clicks on the synthetic header row itself */
    if ($row.hasClass('floating-header-row')) return;

    const alreadySelected = $row.hasClass('selected-row');

    /* clear any previous selection & inline header */
    $table.find('.floating-header-row, .stripe-buffer-row').remove();
    api.rows().nodes().to$().removeClass('selected-row');

    if (alreadySelected) return;          /* toggle off on second click */

    /* mark new selection */
    $row.addClass('selected-row');

    /* Only add an inline header when there’s at least one visible row above.
      (Prevents a duplicate header when the very first row is selected.) */
    // 1) clone the header
    const $headerClone = $table.find('thead tr')
                                .first()
                                .clone()
                                .addClass('floating-header-row');
    
    // 2) build a zero-height buffer row to restore stripe parity
    const $buffer = $('<tr class="stripe-buffer-row">')
                      .html(`<td colspan="${TOTAL_COLS}"></td>`);
    
    // 3) insert buffer + header before the selected row
    $row.before($buffer).before($headerClone);

  });


}
// --- End DataTable Initialization ---

// --- Control Setup (Sliders - Kept for structure, but inactive) ---
function setupControls() {
  // This function remains but won't find active sliders to attach listeners to
  const vocabSlider = document.getElementById('vocabControlSlider');
  const vocabSliderValueLabel = document.getElementById('vocabControlValue');
  const gptSlopSlider = document.getElementById('gptSlopControlSlider');
  const gptSlopSliderValueLabel = document.getElementById('gptSlopControlValue');

  if (vocabSlider && vocabSliderValueLabel) {
      vocabSliderValueLabel.textContent = `${vocabSlider.value}%`;
  }
  if (gptSlopSlider && gptSlopSliderValueLabel) {
      gptSlopSliderValueLabel.textContent = `${gptSlopSlider.value}%`;
  }
}
// --- End Control Setup ---

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
  displayEncodedEmail();
  setupDarkModeToggle();
  refreshHeatmapLegend();     // draw legend once everything is ready


  if (document.getElementById('leaderboard')) {
    loadLeaderboardData(); // Load data and build table

    // Setup responsive behavior
    $(window).on('resize', collapseMiddleColumns);
    $('#toggleMiddleStats').on('click', toggleMiddleStats);
    // Initial check needed after table init, handled by init.dt callback now
    // setTimeout(collapseMiddleColumns, 50); // No longer needed here
  } else {
      console.error("Leaderboard container not found in the DOM.");
  }
});

/* one‑time hook after initialisation */
$(window).on('resize.scoreHeader', () => {
  if (lastSortedScoreColumn != null && $.fn.DataTable.isDataTable('#leaderboard')) {
      const api = $('#leaderboard').DataTable();
      // Check if the column index is valid before setting width
      if (api.column(lastSortedScoreColumn).header()) {
          setScoreHeaderWidth(api, lastSortedScoreColumn);
      }
  }
});
// --- End DOMContentLoaded ---