//
//  eqbench3.js
//  (Adapted from creative_writing.js v1.0.6 for EQ-Bench 3)
//  (Version 1.0.0)
//


leaderboardDataEQBench3 = `model_name,elo_norm,rubric_0_100,humanlike,uptight,assertive,social_iq,warm,analytical,insightful
o3,1557.8,89.9,16.60,15.55,13.45,16.81,17.19,19.57,19.00
chatgpt-4o-latest-2025-01-29,1435.6,88.9,17.54,16.48,14.00,17.11,17.85,18.93,18.49
deepseek-ai/DeepSeek-R1,1293.2,87.5,16.56,16.43,14.46,16.52,17.04,19.56,18.60
deepseek-ai/DeepSeek-V3-0324,1270.4,87.0,16.69,16.35,14.48,16.56,16.85,19.15,18.29
gemini-2.5-pro-preview-03-25,1257.5,87.5,16.85,16.35,13.26,16.74,17.41,19.22,18.34
qwen/qwq-32b,1233.9,86.1,16.13,15.91,14.22,16.48,16.77,19.26,18.40
gpt-4.1-mini,1177.4,85.8,16.00,16.15,12.87,16.37,17.56,18.48,17.83
claude-3-7-sonnet-20250219,1141.0,84.4,15.83,15.17,13.07,15.81,16.48,19.07,18.11
gemini-2.5-flash-preview,1129.1,84.8,16.04,16.02,13.02,16.00,17.16,18.93,17.91
mistralai/Mistral-Small-24B-Instruct-2501,1121.7,66.0,11.80,11.93,8.94,11.22,14.15,15.48,13.37
gemini-2.0-flash-001,1119.2,78.0,15.26,14.59,12.17,14.37,15.68,18.04,16.63
meta-llama/llama-3.1-8b-instruct,1069.5,58.9,11.52,9.74,7.72,10.15,11.80,14.67,12.51
meta-llama/llama-3.2-1b-instruct,727.2,32.9,5.15,4.17,3.41,3.96,5.89,8.96,6.94`
//
//  eqbench3.js
//  (Adapted from creative_writing.js v1.0.6 for EQ-Bench 3)
//  (Version 1.0.1 - Added Heatmap, Fixed Score Bars, Responsive Rows)
//
//
//  eqbench3.js
//  (Adapted from creative_writing.js v1.0.6 for EQ-Bench 3)
//  (Version 1.0.1 - Added heatmap, fixed score bars, responsive height)
//

// --- Global Scope Variables ---
const MOBILE_BREAKPOINT = 992;
let eloScores = [];
let rubricScores = [];
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 11; // Default sort is Elo, which is now column index 11

// Chart.js references:
let abilitiesAbsoluteRadarChart = null;
let abilitiesRelativeRadarChart = null;
let abilitiesStrengthsChart = null;
let abilitiesWeaknessesChart = null;
// Style chart instance (word cloud handled differently)
// --- End Global Scope Variables ---

const s = v => +(v / 2).toFixed(1);   // scale 0‑20 ➜ 0‑10, 1‑dp

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
    }
    // Update open modal chart colors if needed (complex, might require chart recreation)
  });
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

function pastelPlasma(t, {wash = 0.4, alpha = 0.2} = {}) {
  const rgb = plasmaColor(t).match(/\d+/g).map(Number);      // [r,g,b]
  const mixed = rgb.map(c => Math.round((1 - wash) * c + wash * 255));
  return `rgba(${mixed[0]},${mixed[1]},${mixed[2]},${alpha})`;
}

function getHeatmapColor(value,isDarkMode,minVal,maxVal){
    if (isNaN(value)) {
        // Return a neutral background for NaN values
        return isDarkMode ? 'rgba(70, 70, 70, 0.5)' : 'rgba(230, 230, 230, 0.5)';
    }
    const color1 = isDarkMode ? heatmapColorDark1 : heatmapColorLight1;
    const color2 = isDarkMode ? heatmapColorDark2 : heatmapColorLight2;
    return interpolateColor(value, minVal, maxVal, color1, color2);
}
// --- End Heatmap Color Interpolation ---


// --- Gradient logic for visible bars (Blue gradient) ---
// ─── Heat‑map midpoint ─────────────────────────────────────
// Portion of the score span where we split the hue range 50‑50
// 0.85 ⇒ top 15 % consumes half the colours.
const HEATMAP_MIDPOINT = 0.85;

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

// --- Load Leaderboard Data (ADAPTED FOR EQ-BENCH 3 CSV + Heatmap) ---
function loadLeaderboardData() {
  // Ensure the correct data variable exists
  if (typeof leaderboardDataEQBench3 === 'undefined') {
      console.error("leaderboardDataEQBench3 is not defined. Make sure the data file is loaded.");
      document.getElementById('leaderboardBody').innerHTML = '<tr><td colspan="13">Error loading leaderboard data.</td></tr>'; // Updated colspan
      return;
  }

  const eqBenchRows = leaderboardDataEQBench3
    .split('\n')
    .slice(1) // Skip header row
    .filter(l => l.trim() !== ''); // Remove empty lines

  if (eqBenchRows.length === 0) {
      document.getElementById('leaderboardBody').innerHTML = '<tr><td colspan="13">No leaderboard data available.</td></tr>'; // Updated colspan
      return; // No data to process
  }

  const featureNames = ['humanlike','uptight','assertive',
                      'social_iq','empathetic','analytical','insightful'];

  const featureRange = Object.fromEntries(
    featureNames.map(f => [f, {min: Infinity, max: -Infinity, focusMin: null}]));
                  


  // gather min & max for each feature column
  eqBenchRows.forEach(r=>{
    const parts = r.split(',');
    featureNames.forEach((f,idx)=>{
      const v = s(parseFloat(parts[3 + idx]));
      if(!isNaN(v)){
          featureRange[f].min = Math.min(featureRange[f].min, v);
          featureRange[f].max = Math.max(featureRange[f].max, v);
      }
    });
  });

  // --- Elo/Rubric Scaling ---
  const originalEloScores = eqBenchRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
  const originalRubricScores = eqBenchRows.map(row => parseFloat(row.split(',')[2])).filter(s => !isNaN(s)); // Rubric is already 0-100

  const originalMaxElo = originalEloScores.length > 0 ? Math.max(...originalEloScores) : 1200;
  const originalMinElo = originalEloScores.length > 0 ? Math.min(...originalEloScores) : 800;

  eloScores = eqBenchRows.map(row => {
    const score = parseFloat(row.split(',')[1]);
    return isNaN(score) ? 800 : score; // Default Elo
  });

  rubricScores = eqBenchRows.map(row => {
      const score = parseFloat(row.split(',')[2]);
      return isNaN(score) ? 0 : score; // Default Rubric (0-100 scale)
  });



  maxEloScore = originalEloScores.length > 0 ? Math.max(...originalEloScores) : 1500;
  maxRubricScore = 100; // Rubric is fixed 0-100 scale
  baselineEloScore = originalEloScores.length > 0 ? Math.max(800, Math.min(...originalEloScores) - 50) : 800;
  baselineRubricScore = 0; // Rubric baseline is 0
  // --- End Scaling ---

  const isDarkMode = document.body.classList.contains('dark-mode'); // Check dark mode once

  let html = eqBenchRows.map((row, index) => {
    let [
      modelNameRaw,
      _elo_norm, // Use pre-calculated global value
      _rubric_0_100, // Use pre-calculated global value
      humanlike,
      uptight,
      assertive,
      social_iq,
      empathetic,
      analytical,
      insightful
    ] = row.split(',');

    const eloScoreNum = eloScores[index];
    const rubricScoreNum = rubricScores[index];

    // --- Feature Metric Parsing & Heatmap Color ---
    const features = [
        { value: s(humanlike), name: 'humanlike' },
        { value: s(uptight), name: 'uptight' },
        { value: s(assertive), name: 'assertive' },
        { value: s(social_iq), name: 'social_iq' },
        { value: s(empathetic), name: 'empathetic' },
        { value: s(analytical), name: 'analytical' },
        { value: s(insightful), name: 'insightful' }
    ];

    const featureCellsHTML = features.map(feature => {
      const {min,max} = featureRange[feature.name];
      let t = Number.isFinite(feature.value) && max !== min
        ? (feature.value - min) / (max - min)
        : 0;
      
      t = Math.min(1, Math.max(0, t));      // clamp
      
      // Piece‑wise remap so 0‑0.85 → 0‑0.5 and 0.85‑1 → 0.5‑1
      if (t <= HEATMAP_MIDPOINT) {
        t = (t / HEATMAP_MIDPOINT) * 0.5;
      } else {
        t = 0.5 + ((t - HEATMAP_MIDPOINT) / (1 - HEATMAP_MIDPOINT)) * 0.5;
      }
    

      // One‑line colour lookup
      const bgColor = isDarkMode
        ? pastelPlasma(t, { wash: 0.4, alpha: 0.7})
        : pastelPlasma(t, { wash: 0.4, alpha: 0.2 });
      const displayValue = isNaN(feature.value) ? '-' : feature.value.toFixed(1);
      const orderValue = isNaN(feature.value) ? -1 : feature.value.toFixed(1);
      return `
          <td class="mobile-collapsible feature-cell"
              data-order="${orderValue}"
              style="background-color: ${bgColor} !important;">
            <div class="cell-content">
              ${displayValue}
            </div>
          </td>`;
    }).join('');
    // --- End Feature Metric Parsing & Heatmap Color ---

    // --- Calculate Percentages for Bars ---
    const eloScoreRangeForBar = (maxEloScore - baselineEloScore) || 1;
    const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
    const eloScorePercentage = Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRangeForBar) * 100));

    const rubricScoreRangeForBar = (maxRubricScore - baselineRubricScore) || 1; // Range is 100
    const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
    const rubricScorePercentage = Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRangeForBar) * 100));
    // --- End Percentage Calculation ---

    // --- Model Name Handling ---
    let currentModelName = modelNameRaw.trim();
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
    let modelResultsFn = `results/_eqbench3/EQBench3_Report_${safeModelName}.html`;
    // --- End Model Name Handling ---

    // --- Score Bar HTML (Use new class name, ensure display: none initially) ---
    let scoreBarEloHTML = `
      <div class="score-bar-container">
        <div class="eqbench3-score-bar" style="width: ${eloScorePercentage.toFixed(1)}%;" display:none;></div>
        <span class="score-text">${eloScoreNum.toFixed(1)}</span>
      </div>`;

    let scoreBarRubricHTML = `
      <div class="score-bar-container">
        <div class="eqbench3-score-bar" style="width: ${rubricScorePercentage.toFixed(1)}%;" display:none;></div>
        <span class="score-text">${rubricScoreNum.toFixed(1)}</span>
      </div>`;
    // --- End Score Bar HTML ---

    // --- Icon Definitions ---
    const abilitiesInfoIcon = `
      <span class="abilities-info-icon chart-icon" data-model-name="${currentModelName}" title="View Abilities Charts"><span></span></span>`;
    const styleInfoIcon = `
      <span class="style-info-icon chart-icon" data-model-name="${currentModelName}" title="View Style Profile"><span></span></span>`;
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

        <td> <!-- Col 2: Style -->
          <div class="cell-content">
            ${styleInfoIcon}
          </div>
        </td>

        ${featureCellsHTML} <!-- Inject feature cells with heatmap -->

        <td class="mobile-collapsible" data-order="${rubricScoreNum.toFixed(1)}"> <!-- Col 10: Rubric Score -->
          <div class="cell-content">
            ${scoreBarRubricHTML}
          </div>
        </td>

        <td data-order="${eloScoreNum.toFixed(1)}"> <!-- Col 11: Elo Score -->
          <div class="cell-content">
            ${scoreBarEloHTML}
          </div>
        </td>

        <td> <!-- Col 12: Sample Link -->
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
let dataTableConfig = {
  autoWidth: false,
  order: [[11, "desc"]], // Default sort by Elo (now index 11)
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    // New column index order:
    // 0: Model, 1: Abilities, 2: Style, 3-9: Features, 10: Rubric, 11: Elo, 12: Sample
    { targets: [0], type: 'string' }, // Model Name
    { targets: [1, 2], orderable: false }, // Abilities, Style (icons)
    { targets: [3, 4, 5, 6, 7, 8, 9], type: 'num' }, // Feature columns
    { targets: [10], type: 'num' }, // Rubric Score
    { targets: [11], type: 'num' }, // Elo Score
    { targets: [12], orderable: false }, // Sample Link

    // Define sorting directions (desc first for most scores)
    { targets: [3, 4, 5, 6, 7, 8, 9, 10, 11], orderSequence: ["desc", "asc"] }
  ],
  // Custom DOM layout unchanged
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

  // Callback after table draw (Updated Indices & Score Bar Fix)
  drawCallback: function(settings) {
    let api = this.api();
    if (!api || api.rows().count() === 0) return;

    let order = api.order();
    if (!order || order.length === 0) {
      order = [[11, 'desc']]; // Default to Elo (index 11)
      api.order(order).draw(false); // Trigger redraw if no order set
      return; // Exit early, the redraw will call this callback again
    }

    let sortedColumnIndex = order[0][0];

    // Updated indices for score columns
    const SCORE_COLUMNS = [10, 11]; // Rubric, Elo (new indices)
    const NON_SCORE_COLUMNS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]; // All others

    const tableNode = $(api.table().node());
    // Hide ALL score bars first
    tableNode.find('.eqbench3-score-bar').hide();
    tableNode.find('thead th').css('width', ''); // Reset header width

    let columnToShowBar = -1;
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
      columnToShowBar = sortedColumnIndex;
      lastSortedScoreColumn = sortedColumnIndex; // Remember the last *score* column sorted
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) && lastSortedScoreColumn !== null) {
      // If a non-score column is sorted, show the bar for the *last remembered* score column
      columnToShowBar = lastSortedScoreColumn;
    } else {
      // Fallback: If no score column was ever sorted, default to Elo
      columnToShowBar = 11; // Default to Elo (index 11)
      lastSortedScoreColumn = 11;
    }

    // Now, show the bars ONLY for the selected column
    if (columnToShowBar !== -1) {
      try {
        // Select the specific column's bars within the visible rows
        api.rows({ page: 'current' })
           .nodes()
           .to$() // Convert to jQuery object
           .find(`td:eq(${columnToShowBar}) .eqbench3-score-bar`) // Find bars in the target column
           .show(); // Show them

        // Adjust header width for the column with the visible bar
        let header = api.column(columnToShowBar).header();
        if (header) {
          $(header).css('width', '25%'); // Adjust width as needed
        }
      } catch (e) {
        console.error("Error showing score bar or adjusting header width:", e);
      }
    }
    
    updateScoreBarColorsEQ3(); // Update gradient colors for visible bars
    
  }
};
// --- End DataTable config ---

// --- Mobile Collapse Logic (Unchanged logic, relies on class) ---
let middleStatsExpanded = false;

function collapseMiddleColumns() {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const toggleButton = $('#toggleMiddleStats');

  if (isMobile) {
      toggleButton.removeClass('d-none').addClass('show-details-toggle-button');
      if (!middleStatsExpanded) {
          $('#leaderboard .mobile-collapsible').hide();
          toggleButton.text('Expand Details');
      } else {
          $('#leaderboard .mobile-collapsible').show();
          toggleButton.text('Hide Details');
      }
  } else {
      // On desktop (and wider than mobile breakpoint), always show columns
      toggleButton.addClass('d-none').removeClass('show-details-toggle-button');
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

  let table = $('#leaderboard').DataTable(dataTableConfig);

  // --- Event Listeners for Icons ---
  // Abilities icon listener
  $('#leaderboardBody').on('click', '.abilities-info-icon', function() {
    const modelName = $(this).data('model-name');
    showAbilitiesModal(modelName);
  });

  // Style icon listener
  $('#leaderboardBody').on('click', '.style-info-icon', function() {
    const modelName = $(this).data('model-name');
    showStyleModal(modelName);
  });
  // --- End Event Listeners ---

  table.one('init.dt', function() {
    collapseMiddleColumns(); // Set initial mobile column visibility
    fixInitialScoreBars(); // Ensure default score bars are shown correctly
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
// --- End DOMContentLoaded ---