/* judgemark-v2.js */

////////////////////////////////////////////////////////////////////////////////

// model, judgemark_score, judgemark_score_raw, kendall_tau_bootstrapped,
// std_dev, kw_stat, ci99_overlap_magnitude_sum_norm, calibrated_score_range_norm,
// modulated_ci95, emd_norm, cost
//
////////////////////////////////////////////////////////////////////////////////

const leaderboardDataV2 = `
ministral/Ministral-3b-instruct,6.89,8.94,0.0,0.083,0.01,0.018,0.858,0.032,0.363,$0.30
gpt-4o-mini,42.52,42.9,0.625,0.371,0.248,0.265,3.149,0.27,1.187,$1.65
deepseek-ai/deepseek-r1,72.07,66.84,0.864,0.694,0.754,0.677,6.098,0.611,2.195,$13.80
claude-3.5-haiku-20241022,72.19,71.49,0.898,0.704,0.743,0.658,5.975,0.597,2.229,$10.64
claude-3.5-sonnet-20240620,73.1,68.9,0.906,0.702,0.752,0.659,6.255,0.589,2.232,$44.06
microsoft/wizardlm-2-8x22b,53.34,50.75,0.749,0.479,0.386,0.391,4.62,0.355,1.53,$5.89
gpt-4o-2024-11-20,74.69,70.08,0.89,0.708,0.821,0.75,6.233,0.695,2.228,$31.64
gemini-2.0-flash-thinking-exp-1219,67.12,61.83,0.816,0.647,0.681,0.616,5.519,0.555,2.057,$5.17
deepseek-ai/deepseek-r1-distill-llama-70b,56.99,54.23,0.761,0.543,0.5,0.446,4.485,0.42,1.726,$2.66
mistralai/mistral-large-instruct-2411,62.23,59.14,0.792,0.619,0.53,0.488,5.873,0.408,1.935,$23.61
meta-llama/llama-3.1-8b-instruct,34.89,34.25,0.456,0.339,0.168,0.162,3.232,0.156,1.075,$0.30
meta-llama/llama-3.1-405b-instruct,57.57,56.14,0.792,0.536,0.485,0.444,4.515,0.418,1.712,$7.42
mistralai/mistral-small-24b-instruct-2501,60.77,58.07,0.809,0.567,0.515,0.482,5.194,0.43,1.802,$1.13
CohereForAI/c4ai-command-r-08-2024,33.08,31.07,0.428,0.306,0.162,0.163,2.707,0.173,0.99,$1.77
gemini-pro-1_5,71.15,66.9,0.892,0.686,0.728,0.646,5.832,0.582,2.178,$13.46
o3-mini,60.93,55.51,0.781,0.575,0.547,0.506,5.26,0.453,1.83,$20.72
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
    // 10: cost

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
    let {
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

    const isNewModel = model.startsWith('*');
		model = model.replace(/^\*/, '');


    let displayModel = model.includes('/')
      ? `<a href="https://huggingface.co/${model}" target="_blank">${model.split('/').pop()}</a>`
      : model;

    if (isNewModel) {
      displayModel = '🆕' + displayModel
    }

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