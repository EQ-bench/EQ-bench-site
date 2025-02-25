/* judgemark-v2.js */

////////////////////////////////////////////////////////////////////////////////

// model, judgemark_score, judgemark_score_raw, kendall_tau_bootstrapped,
// std_dev, kw_stat, ci99_overlap_magnitude_sum_norm, calibrated_score_range_norm,
// modulated_ci95, emd_norm, cost
//
////////////////////////////////////////////////////////////////////////////////

const leaderboardDataV2 = `
ministral/Ministral-3b-instruct,7.51,0.0,0.041,0.288,$0.30
gpt-4o-mini,40.9,0.654,0.249,0.804,$1.65
claude-3.5-haiku-20241022,74.49,0.905,0.662,0.915,$10.64
claude-3.5-sonnet-20240620,75.23,0.9,0.669,0.938,$44.06
microsoft/wizardlm-2-8x22b,51.92,0.755,0.374,0.866,$5.89
gpt-4o-2024-11-20,78.12,0.888,0.72,0.918,$31.64
deepseek-ai/deepseek-r1-distill-llama-70b,56.94,0.776,0.442,0.873,$2.66
mistralai/mistral-large-instruct-2411,61.65,0.806,0.501,0.889,$23.61
meta-llama/llama-3.1-8b-instruct,31.36,0.46,0.19,0.66,$0.30
meta-llama/llama-3.1-405b-instruct,57.29,0.798,0.435,0.899,$7.42
mistralai/mistral-small-24b-instruct-2501,60.51,0.815,0.482,0.886,$1.13
CohereForAI/c4ai-command-r-08-2024,29.34,0.423,0.182,0.611,$1.77
gemini-pro-1_5,73.46,0.887,0.655,0.899,$13.46
deepseek-ai/deepseek-r1,76.1,0.894,0.691,0.908,$13.80
o3-mini,60.45,0.782,0.494,0.869,$20.72
microsoft/phi-4,44.42,0.651,0.299,0.817,$0.67
qwen-plus,64.72,0.806,0.544,0.902,$4.39
qwen-max,67.61,0.846,0.581,0.886,$22.72
Qwen/Qwen2.5-72B-Instruct,52.04,0.741,0.389,0.827,$2.49
*gemini-2.0-flash-001,64.59,0.797,0.556,0.853,$1.09
*claude-3-7-sonnet-20250219,81.54,0.912,0.773,0.889,$54.73
`

const csv_header = [
  "model",
  "judgemark_score",
  "stability",
  "separability",
  "human_corr",
  "cost"
]

/**
 * Dark mode toggling
 */
function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');

  // Check if preference is saved in localStorage
  const savedMode = localStorage.getItem('darkModeEnabled');
  if (savedMode) {
    document.body.classList.toggle('dark-mode', savedMode === 'true');
    toggle.checked = (savedMode === 'true');
    label.textContent = (savedMode === 'true') ? 'Dark' : 'Light';
  }

  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    label.textContent = this.checked ? 'Dark' : 'Light';
    localStorage.setItem('darkModeEnabled', this.checked); // Save preference
  });
}

function applySystemTheme() {
  // Only apply system theme if no saved preference
  if (localStorage.getItem('darkModeEnabled') === null) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.getElementById('darkModeToggle');
    const label = document.getElementById('toggleLabel');
    document.body.classList.toggle('dark-mode', prefersDarkMode);
    toggle.checked = prefersDarkMode;
    label.textContent = prefersDarkMode ? 'Dark' : 'Light';
  }
}

/**
 * Display an encoded email to avoid spam
 */
function displayEncodedEmail() {
  var encodedUser = '&#99;&#111;&#110;&#116;&#97;&#99;&#116;';
  var encodedDomain = '&#101;&#113;&#98;&#101;&#110;&#99;&#104;&#46;&#99;&#111;&#109;';
  var emailElement = document.getElementById('email');
  emailElement.innerHTML = decodeHtmlEntities(encodedUser + '&#64;' + encodedDomain);
  var emailAddress = emailElement.innerText;
  emailElement.innerHTML = `<a href="mailto:${emailAddress}">Contact</a>`;
}

function decodeHtmlEntities(encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

/**
 * Optional sorting plugin if needed
 */
$.fn.dataTable.ext.type.order['params-pre'] = function (data) {
  if (!data || data === '-') {
    return 9999; // Sort missing or null last
  }
  if (data.includes('x')) {
    const parts = data.split('x').map(Number);
    return parts.reduce((acc, val) => acc * val, 1); 
  }
  return parseFloat(data) || 0;
};

/**
 * Utility to sanitize model names for filenames:
 * Replaces '/' with '__' then removes all non-[A-Za-z0-9_-]
 */
function sanitizeModelName(modelName) {
  // Remove leading * and !
  let sanitized = modelName.replace(/^[*!]+/, '');
  sanitized = sanitized.replace(/\//g, '__');
  sanitized = sanitized.replace(/[^\w\-]/g, '-');
  return sanitized;
}

/**
 * Parse the CSV data, build rows, and initialize DataTable
 */
function loadLeaderboardDataV2() {
  // Split on newlines, filter out empty lines
  const lines = leaderboardDataV2.trim().split('\n').filter(l => l.trim() !== '');

  // We'll collect scores to find a maximum for the bar widths
  let scores = [];

  // Prepare row data
  const rowData = lines.map(line => {
    const parts = line.split(',');
    // Indices based on csv_header:
    //  0: model
    //  1: judgemark_score
    //  2: stability
    //  3: separability
    //  4: human_corr
    //  5: cost

    const model = parts[0] || '';
    const judgemarkScore = parts[1] || '';
    const stability = parts[2] || '';
    const separability = parts[3] || '';
    const humanCorr = parts[4] || '';
    const cost = parts[5] || '';

    // Convert strings to numbers for sorting & bar scaling
    let parsedScore = parseFloat(judgemarkScore);
    if (!isNaN(parsedScore)) {
      scores.push(parsedScore);
    }

    const sanitized = sanitizeModelName(model);
    const statsLink = `results/judgemark-v2/stats/${sanitized}.json`;
    const chart3Link = `results/judgemark-v2/charts/judgemark_3chart_${sanitized}.png`;
    const scatterLink = `results/judgemark-v2/charts/judgemark_scattergrid_${sanitized}.png`;

    return {
      model,
      judgemarkScore,
      stability,
      separability,
      humanCorr,
      cost,
      statsLink,
      chart3Link,
      scatterLink
    };
  });

  const maxScore = scores.length > 0
    ? Math.max(...scores)
    : 1;

  // Build final HTML rows
  const rowsHtml = rowData.map(item => {
    let {
      model,
      judgemarkScore,
      stability,
      separability,
      humanCorr,
      cost,
      statsLink,
      chart3Link,
      scatterLink
    } = item;

    const isNewModel = model.startsWith('*');
    model = model.replace(/^\*/, '');

    let displayModel = model.includes('/')
      ? `<a href="https://huggingface.co/${model}" target="_blank">${model.split('/').pop()}</a>`
      : model;

    if (isNewModel) {
      displayModel = '🆕' + displayModel
    }

    // Score bar for judgemark score
    let numericScore = parseFloat(judgemarkScore);
    let barHtml = '-';
    let dataOrder = 0;
    if (!isNaN(numericScore)) {
      const pct = (numericScore / maxScore) * 100;
      dataOrder = numericScore; // for sorting
      barHtml = `
        <div class="score-bar-container">
          <div class="judgemark-score-bar" style="width: ${pct}%;"></div>
          <span class="score-text">${judgemarkScore}</span>
        </div>`;
    }

    const chartLinksHtml = `
      <span style="white-space: nowrap">
        <a href="${chart3Link}">📊Scoring</a>
      </span>
      <br>
      <span style="white-space: nowrap">
        <a href="${scatterLink}">📊Scatter</a>
      </span>
    `;

    return `
      <tr>
        <td>${displayModel}</td>
        <td class="calibrated-score-col" data-order="${dataOrder}">${barHtml}</td>
        <td class="middle-stats">${stability || '-'}</td>
        <td class="middle-stats">${separability || '-'}</td>
        <td class="middle-stats">${humanCorr || '-'}</td>
        <td class="middle-stats">${cost || '-'}</td>
        <td><a href="${statsLink}">Stats</a></td>
        <td>${chartLinksHtml}</td>
      </tr>
    `;
  }).join('');

  // Insert into DOM
  document.getElementById('leaderboardBodyV2').innerHTML = rowsHtml;

  // Now initialize DataTable
  initializeDataTableV2();
}

/**
 * Initializes DataTable with column definitions and mobile-friendly toggling
 */
function initializeDataTableV2() {
  const table = $('#judgemark-leaderboard-v2').DataTable({
    order: [[1, 'desc']],    // Sort by the Judgemark Score column descending
    paging: false,           // Show all
    searching: false,        // No search bar
    lengthMenu: [50, 100, 200, 1000],
    language: {
      lengthMenu: "Show _MENU_"
    },
    columnDefs: [
      // Stability = col 2, Separability = col 3, Human Corr = col 4, Cost = col 5
      { targets: [2,3,4,5], className: 'middle-stats' },
      // Judgemark Score desc by default; if user clicks, toggle asc
      { targets: [1,2,3,4,5], orderSequence: ['desc','asc'] }
    ],
    dom: "<'d-flex flex-column flex-md-row justify-content-between'<'#toggleMiddleStatsDummy.d-block.d-sm-none'><'dataTables_length'l><'dataTables_filter'f>>" +
         "<'row'<'col-12'tr>>" +
         "<'row'<'col-md-5'i><'col-md-7'p>>",
    drawCallback: function(settings) {
      // Show the score bars after each table draw
      this.api().rows({ page: 'current' }).nodes().to$()
        .find('.judgemark-score-bar').css('display', 'block');
    }
  });

  // Expand/Collapse columns (Stability, Separability, Human Corr, Cost) on mobile
  let middleStatsExpanded = false;
  function collapseMiddleColumns() {
    if (window.innerWidth < 992 && !middleStatsExpanded) {
      // Wrap columns 2..5 in a collapsible <div> on small screens if not expanded
      $('#judgemark-leaderboard-v2 tr').each(function () {
        $(this).find('th, td').slice(2, 6).wrapAll('<div class="collapsed-columns"></div>');
      });
      $('#toggleMiddleStats').text('Expand Details');
    } else {
      // Otherwise unwrap them
      $('#judgemark-leaderboard-v2 tr').each(function () {
        $(this).find('.collapsed-columns').children().unwrap();
      });
      $('#toggleMiddleStats').text('Hide Details');
    }
  }
  function toggleMiddleStats() {
    middleStatsExpanded = !middleStatsExpanded;
    collapseMiddleColumns();
  }

  $(window).on('resize', collapseMiddleColumns);
  $('#toggleMiddleStats').on('click', toggleMiddleStats);
  collapseMiddleColumns();
}

// On DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Always run
  displayEncodedEmail();
  applySystemTheme();
  setupDarkModeToggle();

  // Load data for Judgemark v2 table
  if (document.getElementById('judgemark-leaderboard-v2')) {
    loadLeaderboardDataV2();
  }
});