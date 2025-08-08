/* judgemark-v2.js */

////////////////////////////////////////////////////////////////////////////////

// model, judgemark_score, judgemark_score_raw, kendall_tau_bootstrapped,
// std_dev, kw_stat, ci99_overlap_magnitude_sum_norm, calibrated_score_range_norm,
// modulated_ci95, emd_norm, cost
//
////////////////////////////////////////////////////////////////////////////////

const leaderboardDataV2 = `
gpt-4.1,76.31,0.727,0.819,0.576,$10.43
claude-sonnet-4,81.99,0.726,0.844,0.818,$18.73
gemini-2.5-pro,72.06,0.675,0.747,0.662,$52.90
mistralai/Mistral-Small-3.2-24B-Instruct-2506,50.21,0.396,0.578,0.306,$0.49
*qwen/qwen3-235b-a22b-2507,59.69,0.437,0.61,0.704,$0.94
z-ai/glm-4.5,63.41,0.53,0.664,0.619,$4.40
gemini-2.5-flash,62.97,0.532,0.66,0.605,$1.87
o3,75.1,0.699,0.779,0.69,$16.16
*gpt-5-mini-2025-08-07:minimal-reasoning,74.49,0.694,0.778,0.662,$1.49
*gpt-5-nano-2025-08-07:minimal-reasoning,52.2,0.411,0.536,0.576,$0.29
*openai/gpt-oss-120b,54.78,0.332,0.57,0.676,$1.14
*openai/gpt-oss-20b,42.8,0.331,0.476,0.334,$0.45
*gpt-5-2025-08-07:minimal-reasoning,81.2,0.8,0.838,0.719,$7.43
*gpt-5-nano-2025-08-07__5x-ensemble,61.08,0.579,0.635,0.548,$1.45
moonshotai/Kimi-K2-Instruct,73.09,0.66,0.752,0.719,$3.70
qwen/qwen3-30b-a3b-instruct-2507,34.58,0.153,0.343,0.548,$0.98
gemini-2.5-flash-lite,55.99,0.483,0.607,0.448,$0.50
gpt-4.1-mini,57.26,0.395,0.623,0.548,$2.09
mistral-medium-3,58.53,0.496,0.621,0.533,$2.31
qwen/qwen3-235b-a22b,56.18,0.318,0.616,0.59,$1.00
o4-mini,56.1,0.455,0.594,0.533,$11.81
meta-llama/llama-3.1-8b-instruct,19.18,0.0,0.286,0.006,$0.11`

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
    const chart3Link = `results/judgemark-v2/charts/judgemark_3chart_${sanitized}.png`;
    const scatterLink = `results/judgemark-v2/charts/judgemark_scattergrid_${sanitized}.png`;

    return {
      model,
      judgemarkScore,
      stability,
      separability,
      humanCorr,
      cost,
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

    let displayModel = model;
    if (model.includes('/')) {
      // Strip “:…” so the link points to the base repo
      const hfRepoPath = model.split(':')[0]; // keep text before first colon
      displayModel = `<a href="https://huggingface.co/${hfRepoPath}" target="_blank" rel="noopener noreferrer">${model}</a>`;
    }

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
      { targets: [2,3,4], className: 'middle-stats' },
      // Judgemark Score desc by default; if user clicks, toggle asc
      { targets: [1,2,3,4], orderSequence: ['desc','asc'] }
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
        $(this).find('th, td').slice(2, 5).wrapAll('<div class="collapsed-columns"></div>');
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