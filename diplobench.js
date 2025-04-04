/* diplomacy.js */

////////////////////////////////////////////////////////////////////////////////
// New CSV format with support for multiple games:
// model, results, runPrefix, runNumbers
// Example:
// qwen/qwq-32b,L5|L10|W41,qwq-32b,1.57|1.59|1.60
////////////////////////////////////////////////////////////////////////////////

const leaderboardData = `
o1,W9,o1,1.31
claude-3.7-sonnet-20250219,W14,claude-3.7-sonnet,1.54
deepseek-r1,W14,deepseek-r1,1.56
o3-mini-high,W34,o3-mini-high,1.45
gemini-2.0-flash-001,L12,gemini-2.0-flash-001,1.51
gpt-4o-mini,L5,gpt-4o-mini,1.43
gpt-4o-2024-11-20,S31,gpt-4o-2024-11-20,1.56
qwen/qwq-32b,L5|L10|W41|L29,qwq-32b,1.57|1.59|1.60|1.61
quasar-alpha,W34|W34|W40,quasar-alpha,1.80|1.81|1.82
`

const csv_header = [
  "model",
  "results",
  "runPrefix",
  "runNumbers"
]

/**
 * Parse the CSV data, build rows, and initialize DataTable
 */
function loadLeaderboardData() {
  // Split on newlines, filter out empty lines
  const lines = leaderboardData.trim().split('\n').filter(l => l.trim() !== '');

  // Prepare row data
  const rowData = lines.map(line => {
    const parts = line.split(',');
    // Expected parts:
    // 0: model
    // 1: results (could be multiple tokens separated by |)
    // 2: runPrefix
    // 3: runNumbers (could be multiple tokens separated by |)
    const model = parts[0] || '';
    const resultsField = parts[1] || '';
    const runPrefix = parts[2] || '';
    const runNumbersField = parts[3] || '';

    // Parse results tokens and run numbers tokens
    const resultTokens = resultsField.split('|').map(token => token.trim());
    const runNumbers = runNumbersField.split('|').map(token => token.trim());

    // Calculate average score based on each result token
    let totalScore = 0;
    let count = 0;
    resultTokens.forEach(token => {
      if (token.startsWith('W')) {
        const turn = parseInt(token.slice(1));
        if (!isNaN(turn)) {
          totalScore += 50 + (50 - turn);
          count++;
        }
      } else if (token.startsWith('S')) {
        totalScore += 50;
        count++;
      } else if (token.startsWith('L')) {
        const turn = parseInt(token.slice(1));
        if (!isNaN(turn)) {
          totalScore += turn;
          count++;
        }
      }
    });
    const calculatedScore = count > 0 ? totalScore / count : 0;

    // Build human-readable result text by converting tokens to full text
    const humanReadableResults = resultTokens.map(token => {
      if (token.startsWith('W')) {
        const turn = token.slice(1);
        return `Win after ${turn} turns`;
      } else if (token.startsWith('S')) {
        const turn = token.slice(1);
        return `Stalemate after ${turn} turns`;
      } else if (token.startsWith('L')) {
        const turn = token.slice(1);
        return `Loss after ${turn} turns`;
      }
      return token;
    }).join(' | ');

    // Determine barClass based on token types: if any win, then win; else if any stalemate, then stalemate; else loss.
    let barClass = '';
    if (resultTokens.some(token => token.startsWith('W'))) {
      barClass = 'win-score-bar';
    } else if (resultTokens.some(token => token.startsWith('S'))) {
      barClass = 'stalemate-score-bar';
    } else if (resultTokens.some(token => token.startsWith('L'))) {
      barClass = 'loss-score-bar';
    }

    // Build Game Report links from runNumbers, using runPrefix, but label them "Game Report 1", "Game Report 2", etc.
    const reportLinks = runNumbers.map((num, index) => {
      return `<a href="results/diplomacy/${runPrefix}-${num}.html" target="_blank">Game ${index + 1}</a>`;
    }).join(' ');

    return {
      model,
      score: calculatedScore,
      result: humanReadableResults,
      reportLinks,
      barClass
    };
  });

  // Sort the data by score in descending order
  rowData.sort((a, b) => b.score - a.score);

  // Build final HTML rows
  const rowsHtml = rowData.map(item => {
    let { model, score, result, reportLinks, barClass } = item;

    let displayModel = model.includes('/')
      ? `<a href="https://huggingface.co/${model}" target="_blank">${model.split('/').pop()}</a>`
      : model;

    return `
      <tr>
        <td>${displayModel}</td>
        <td class="result-col ${barClass}">${result}</td>
        <td class="report-col">${reportLinks}</td>
      </tr>
    `;
  }).join('');

  // Insert into DOM
  document.getElementById('leaderboardBody').innerHTML = rowsHtml;

  // Now initialize DataTable with minimal configuration
  initializeDataTable();
}

/**
 * Initializes DataTable with column definitions
 */
function initializeDataTable() {
  const table = $('#diplomacy-leaderboard').DataTable({
    paging: false,           // Show all
    searching: false,        // No search bar
    info: false,             // No info
    ordering: false,         // Disable ordering since we pre-sorted the data
    dom: "<'row'<'col-12'tr>>"
  });
}

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

// On DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Always run
  displayEncodedEmail();
  applySystemTheme();
  setupDarkModeToggle();
  
  // Load data for Diplomacy table
  if (document.getElementById('diplomacy-leaderboard')) {
    loadLeaderboardData();
  }
});
