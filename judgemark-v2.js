/* judgemark-v2.js */

////////////////////////////////////////////////////////////////////////////////

// model, judgemark_score, judgemark_score_raw, kendall_tau_bootstrapped,
// std_dev, kw_stat, ci99_overlap_magnitude_sum_norm, calibrated_score_range_norm,
// modulated_ci95, emd_norm, cost
//
////////////////////////////////////////////////////////////////////////////////

const leaderboardDataV2 = `
ministral/Ministral-3b-instruct,7.5,15.06,0.0,0.099,0.013,0.094,0.858,0.012,0.363,
gpt-4o-mini,44.05,44.35,0.628,0.438,0.298,0.324,3.149,0.109,1.187,
deepseek-ai/deepseek-r1,76.97,71.77,0.863,0.821,0.905,0.683,6.098,0.6,2.195,$69.80
claude-3.5-haiku-20241022,77.64,76.88,0.898,0.832,0.891,0.665,5.975,0.575,2.229,$10.64
claude-3.5-sonnet-20240620,78.84,74.72,0.905,0.83,0.902,0.664,6.255,0.591,2.232,$44.06
microsoft/wizardlm-2-8x22b,55.42,52.86,0.749,0.566,0.463,0.417,4.62,0.198,1.53,$5.89
gpt-4o-2024-11-20,82.51,77.75,0.89,0.837,0.985,0.75,6.233,0.814,2.228,$31.64
gemini-2.0-flash-thinking-exp-1219,71.79,66.1,0.818,0.765,0.817,0.631,5.519,0.453,2.057,$5.17
deepseek-ai/deepseek-r1-distill-llama-70b,59.67,56.86,0.764,0.642,0.6,0.474,4.485,0.243,1.726,$2.66
mistralai/mistral-large-instruct-2411,65.63,63.25,0.794,0.732,0.636,0.505,5.873,0.296,1.935,$23.61
meta-llama/llama-3.1-8b-instruct,35.72,35.67,0.46,0.401,0.201,0.207,3.232,0.063,1.075,$0.30
meta-llama/llama-3.1-405b-instruct,60.09,58.76,0.791,0.633,0.582,0.471,4.515,0.243,1.712,$7.42
mistralai/mistral-small-24b-instruct-2501,63.64,61.23,0.808,0.67,0.618,0.504,5.194,0.286,1.802,
qwen/qwq-32b-preview,28.61,31.64,0.234,0.317,0.128,0.171,2.456,0.043,0.879,$2.13
CohereForAI/c4ai-command-r-08-2024,34.31,33.68,0.427,0.362,0.194,0.246,2.707,0.07,0.99,$1.77
`;

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
  let sanitized = modelName.replace(/\//g, '__');
  sanitized = sanitized.replace(/[^\w\-]/g, '-');
  return sanitized;
}

/**
 * Parse the CSV data, build rows, and initialize DataTable
 */
function loadLeaderboardDataV2() {
  // Split on newlines, filter out empty lines
  const lines = leaderboardDataV2.trim().split('\n').filter(l => l.trim() !== '');

  // We'll collect calibrated scores to find a maximum for the bar widths
  let calibratedScores = [];

  // Prepare row data
  const rowData = lines.map(line => {
    const parts = line.split(',');
    // Indices:
    //  0: model
    //  1: judgemark_score (Calibrated)
    //  2: judgemark_score_raw
    //  3: kendall_tau_bootstrapped
    //  4: std_dev
    //  5: kw_stat
    //  6: ci99_overlap_magnitude_sum_norm
    //  7: calibrated_score_range_norm
    //  8: modulated_ci95
    //  9: emd_norm
    // 10: cost (new)

    const model = parts[0] || '';
    const scoreCalibrated = parts[1] || '';
    const scoreRaw = parts[2] || '';
    const stability = parts[3] || '';
    // ignoring std_dev, kw_stat, etc. for display
    const separability = parts[6] || '';
    const cost = parts[10] || '';

    // Convert strings to numbers for sorting & bar scaling
    let parsedCalibrated = parseFloat(scoreCalibrated);
    if (!isNaN(parsedCalibrated)) {
      calibratedScores.push(parsedCalibrated);
    }

    const sanitized = sanitizeModelName(model);
    const statsLink = `results/judgemark-v2/stats/${sanitized}.json`;
    const chart3Link = `results/judgemark-v2/charts/judgemark_3chart_${sanitized}.png`;
    const scatterLink = `results/judgemark-v2/charts/judgemark_scattergrid_${sanitized}.png`;

    return {
      model,
      scoreCalibrated,
      scoreRaw,
      stability,
      separability,
      cost,
      statsLink,
      chart3Link,
      scatterLink
    };
  });

  const maxCalibrated = calibratedScores.length > 0
    ? Math.max(...calibratedScores)
    : 1;

  // Build final HTML rows
  const rowsHtml = rowData.map(item => {
    const {
      model,
      scoreCalibrated,
      scoreRaw,
      stability,
      separability,
      cost,
      statsLink,
      chart3Link,
      scatterLink
    } = item;

    let displayModel = model.includes('/')
      ? `<a href="https://huggingface.co/${model}" target="_blank">${model.split('/').pop()}</a>`
      : model;

    // Score bar for calibrated
    let numericScore = parseFloat(scoreCalibrated);
    let barHtml = '-';
    let dataOrder = 0;
    if (!isNaN(numericScore)) {
      const pct = (numericScore / maxCalibrated) * 100;
      dataOrder = numericScore; // for sorting
      barHtml = `
        <div class="score-bar-container">
          <div class="judgemark-score-bar" style="width: ${pct}%;"></div>
          <span class="score-text">${scoreCalibrated}</span>
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
        <td class="middle-stats">${scoreRaw || '-'}</td>
        <td class="middle-stats">${stability || '-'}</td>
        <td class="middle-stats">${separability || '-'}</td>
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
    order: [[1, 'desc']],    // Sort by the (Calibrated Score) column descending
    paging: false,           // Show all
    searching: false,        // No search bar
    lengthMenu: [50, 100, 200, 1000],
    language: {
      lengthMenu: "Show _MENU_"
    },
    columnDefs: [
      // Score (Raw) = col 2, Stability = col 3, Separability = col 4, Cost = col 5
      { targets: [2,3,4,5], className: 'middle-stats' },
      // Score (Calibrated) desc by default; if user clicks, toggle asc
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

  // Expand/Collapse columns (Score Raw, Stability, Separability, Cost) on mobile
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