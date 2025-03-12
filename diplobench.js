/* diplomacy.js */

////////////////////////////////////////////////////////////////////////////////

// model, result, url
//
////////////////////////////////////////////////////////////////////////////////

const leaderboardData = `
o1,Win after 9 turns,results/diplomacy/o1-1.31.html
claude-3.7-sonnet-20250219,Win after 14 turns,results/diplomacy/claude-3.7-sonnet-1.54.html
deepseek-r1,Win after 14 turns,results/diplomacy/deepseek-r1-1.56.html
o3-mini-high,Win after 34 turns,results/diplomacy/o3-mini-high-1.45.html
gemini-2.0-flash-001,Loss after 12 turns,results/diplomacy/gemini-2.0-flash-001-1.51.html
gpt-4o-mini,Loss after 5 turns,results/diplomacy/gpt-4o-mini-1.43.html
gpt-4o-2024-11-20,Stalemate after 31 turns,results/diplomacy/gpt-4o-2024-11-20-1.56.html
qwen/qwq-32b,Loss after 10 turns,results/diplomacy/qwq-32b-1.59.html

`

const csv_header = [
  "model",
  "result",
  "url"
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
    // Indices based on csv_header:
    //  0: model
    //  1: result
    //  2: url

    const model = parts[0] || '';
    const result = parts[1] || '';
    const url = parts[2] || '';
    
    // Calculate a score based on game result for sorting
    let calculatedScore = 0;
    if (result.includes('Win')) {
      // Score = 50 + (50 - winning turn)
      const turnMatch = result.match(/Win after (\d+) turns/);
      if (turnMatch && turnMatch[1]) {
        const turns = parseInt(turnMatch[1]);
        calculatedScore = 50 + (50 - turns);
      }
    } else if (result.includes('Stalemate')) {
      // Score = 50 for stalemates
      calculatedScore = 50;
    } else if (result.includes('Loss')) {
      // Score = losing turn
      const turnMatch = result.match(/Loss after (\d+) turns/);
      if (turnMatch && turnMatch[1]) {
        const turns = parseInt(turnMatch[1]);
        calculatedScore = turns;
      }
    }

    return {
      model,
      score: calculatedScore,
      result,
      url
    };
  });

  // Sort the data by score in descending order
  rowData.sort((a, b) => b.score - a.score);

  // Build final HTML rows
  const rowsHtml = rowData.map(item => {
    let {
      model,
      score,
      result,
      url
    } = item;

    let displayModel = model.includes('/')
      ? `<a href="https://huggingface.co/${model}" target="_blank">${model.split('/').pop()}</a>`
      : model;

    // Set color class based on result
    let barClass = '';
    if (result.includes('Win')) {
      barClass = 'win-score-bar';
    } else if (result.includes('Stalemate')) {
      barClass = 'stalemate-score-bar';
    } else if (result.includes('Loss')) {
      barClass = 'loss-score-bar';
    }

    // Result and Game Report columns
    const resultText = `${result}`;
    const reportLink = `<a href="${url}" target="_blank">Game Report</a>`;

    return `
      <tr>
        <td>${displayModel}</td>
        <td class="result-col">${resultText}</td>
        <td class="report-col">${reportLink}</td>
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