
// creative_writing_v3.js

let leaderboardDataCreativeWritingV3 = `model_name,elo_score,creative_writing_score,avg_length,vocab_complexity,slop_score
deepseek-ai/DeepSeek-R1,1594.4,17.17,5352,29.20,4.73
chatgpt-4o-latest-2025-03-27,1453.5,17.15,5956,28.29,4.16
deepseek-ai/DeepSeek-V3-0324,1453.0,16.44,4414,24.28,4.87
gemini-2.5-pro-exp-03-25,1369.4,17.27,7886,41.00,7.80
claude-3-5-sonnet-20241022,1347.5,16.04,4921,39.27,3.94
chatgpt-4o-latest-2025-01-29,1340.2,16.57,5622,29.04,6.04
qwen/qwq-32b,1318.5,16.67,6126,29.23,4.90
claude-3-7-sonnet-20250219,1315.4,16.73,6327,39.58,5.23
google/gemma-3-27b-it,1225.3,16.59,7049,42.62,7.03
gpt-4.5-preview,1174.8,16.32,6451,46.41,10.92
CohereForAI/c4ai-command-a-03-2025,1119.1,16.12,6691,32.24,6.04
anthropic/claude-3.5-haiku-20241022,1107.9,12.90,4016,60.14,6.93
google/gemma-3-12b-it,1097.8,16.15,7150,45.86,8.76
sam-paech/Darkest-muse-v1,1087.1,16.15,8184,39.50,5.45
gemini-2.0-flash-001,1083.5,15.83,6208,37.66,8.50
allura-org/Gemma-3-Glitter-12B,1054.9,15.83,7934,41.37,7.68
google/gemma-3-4b-it,1023.6,15.97,6509,51.77,7.81
ifable/gemma-2-Ifable-9B,992.9,15.56,5324,66.98,12.68
ToastyPigeon/Gemma-3-Starshine-12B,809.8,12.82,7973,29.74,7.52
mistralai/Mistral-Nemo-Instruct-2407,791.7,12.73,7013,30.32,9.47
gpt-4o-mini,789.6,14.28,5999,41.70,9.27
meta-llama/llama-3.1-405b-instruct,769.0,11.66,4531,41.55,9.50
google/gemma-2-9b-it,757.6,11.33,4120,39.98,11.92
liquid/lfm-7b,680.5,12.04,6230,49.84,14.70
meta-llama/llama-3.1-70b-instruct,649.4,10.70,4502,39.85,10.04
mistralai/mistral-small-3.1-24b-instruct-2503,623.2,10.49,7900,28.80,9.24
meta-llama/llama-3.1-8b-instruct,567.5,10.81,4709,37.45,9.83
mistralai/Mistral-Small-24B-Instruct-2501,539.7,10.24,7660,32.53,9.24
meta-llama/llama-3.2-3b-instruct,431.3,9.38,4759,37.38,11.00
ministral-3b,95.9,7.14,11640,28.66,10.14`;

// --- Global Scope Variables ---
let eloScores = [];
let rubricScores = [];
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 5; // Default Elo (column index 5)
// --- End Global Scope Variables ---

// --- Dark Mode / Theme / Email Functions ---
function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');
  const savedMode = localStorage.getItem('darkModeEnabled');
  if (savedMode) {
     document.body.classList.toggle('dark-mode', savedMode === 'true');
     toggle.checked = savedMode === 'true';
     label.textContent = savedMode === 'true' ? 'Dark' : 'Light';
  }
  toggle.addEventListener('change', function() {
     document.body.classList.toggle('dark-mode', this.checked);
     label.textContent = this.checked ? 'Dark' : 'Light';
     localStorage.setItem('darkModeEnabled', this.checked);
     if ($.fn.DataTable.isDataTable('#leaderboard')) {
        $('#leaderboard').DataTable().draw(false); // Use draw(false) to prevent reset page
     }
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

// Gradient logic (applies to visible bars)
function updateScoreBarColorsV3() {
  const scoreBars = document.querySelectorAll('#leaderboard .creative-writing-score-bar');
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    if ($(bar).is(':visible')) { // Check visibility
        const overallIndex = $(bar).closest('tr').index();
        const totalRows = $('#leaderboard tbody tr').length;
        if (totalRows === 0) return; // Avoid division by zero

        const startPercent = (overallIndex / totalRows);
        const endPercent = ((overallIndex + 1) / totalRows);
        const lightness = isDarkMode ? '50%' : '80%';
        const startColor = `hsl(${startPercent * 360}, 40%, ${lightness})`;
        const endColor = `hsl(${endPercent * 360}, 40%, ${lightness})`;
        bar.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    }
  });
}

function loadLeaderboardData() {
    const creativeWritingRows = leaderboardDataCreativeWritingV3.split('\n').slice(1).filter(l => l.trim() !== '');

    // Find original min/max Elo scores for rescaling
    const originalEloScores = creativeWritingRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
    const originalMaxElo = Math.max(...originalEloScores); // Should be DeepSeek-R1
    const originalMinElo = Math.min(...originalEloScores); // Should be ministral-3b
    
    // Populate global score arrays with scaled values
    eloScores = originalEloScores.map(score => {
        const scaleFactor = (1500 - 200) / (originalMaxElo - originalMinElo);
        return 200 + (score - originalMinElo) * scaleFactor;
    });
    
    // Scale rubric scores by multiplying by 5
    rubricScores = creativeWritingRows.map(row => parseFloat(row.split(',')[2]) * 5).filter(s => !isNaN(s));

    // Calculate global max/baseline values
    maxEloScore = eloScores.length > 0 ? Math.max(...eloScores) : 1500;
    maxRubricScore = rubricScores.length > 0 ? Math.max(...rubricScores) : 100;
    baselineEloScore = eloScores.length > 0 ? Math.min(400, Math.min(...eloScores) - 50) : 150;
    baselineRubricScore = rubricScores.length > 0 ? Math.max(0, Math.min(...rubricScores) - 1) : 30;

    let html = creativeWritingRows.map(row => {
        let [modelName, eloScore, creativeWritingScore, avgLength, vocabComplexity, slopScore] = row.split(',');

        // Get model scores and scale them
        const originalEloScoreNum = parseFloat(eloScore);
        const originalRubricScoreNum = parseFloat(creativeWritingScore);
        
        // Scale Elo score to new range (1500 to 200)
        const eloScaleFactor = (1500 - 200) / (originalMaxElo - originalMinElo);
        const eloScoreNum = 200 + (originalEloScoreNum - originalMinElo) * eloScaleFactor;
        
        // Scale rubric score by multiplying by 5
        const rubricScoreNum = originalRubricScoreNum * 5;
        
        let vocabNum = parseFloat(vocabComplexity) / 10; // Divide by 10
        vocabNum = Math.min((vocabNum / 7.0) * 10, 10)
        const slopNum = parseFloat(slopScore);
        const lengthNum = parseInt(avgLength, 10);

        // Initial percentages for width (will be updated by updateScores if needed)
        const eloScoreRange = maxEloScore - baselineEloScore;
        const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
        const eloScorePercentage = eloScoreRange > 0 ? Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRange) * 100)) : 0;

        // Use scaled rubric score for percentage calculation
        const rubricScoreRange = maxRubricScore - baselineRubricScore; // These are already scaled in the global variables
        const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
        const rubricScorePercentage = rubricScoreRange > 0 ? Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRange) * 100)) : 0;

        const isNsfwModel = modelName.startsWith('!');
        modelName = modelName.replace(/^\!/, '');
        const isNewModel = modelName.startsWith('*');
        modelName = modelName.replace(/^\*/, '');

        let displayModelName = modelName.split('/').pop();
        if (isNsfwModel) displayModelName = '🔞' + displayModelName;
        if (isNewModel) displayModelName = '🆕' + displayModelName;

        let modelNameDisplay = modelName.includes('/')
            ? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>`
            : modelName;

        let modelResultsFn = `results/creative-writing-v3/${modelName.replace(/\//g,'__')}.html`;

        // --- Generate Bar Structure for BOTH score columns directly in TD ---
        let scoreBarEloHTML = `<div class="score-bar-container">
            <div class="creative-writing-score-bar" style="width: ${eloScorePercentage}%; display: none;"></div>
            <span class="score-text">${eloScoreNum.toFixed(1)}</span>
        </div>`;
        let scoreBarRubricHTML = `<div class="score-bar-container">
             <div class="creative-writing-score-bar" style="width: ${rubricScorePercentage}%; display: none;"></div>
             <span class="score-text">${rubricScoreNum.toFixed(2)}</span>
         </div>`;

        // --- Create TR with data-order on TD and necessary data attributes ---
        return `
  <tr data-original-elo-score="${eloScoreNum}"
      data-original-rubric-score="${rubricScoreNum}"
      data-vocab="${vocabNum}"
      data-gpt-slop="${slopNum}">
    
    <td>
      <div class="cell-content">
        ${modelNameDisplay}
      </div>
    </td>
    
    <td class="mobile-collapsible" data-order="${lengthNum}">
      <div class="cell-content">
        ${isNaN(lengthNum) ? '-' : lengthNum}
      </div>
    </td>
    
    <td data-order="${slopNum}">
      <div class="cell-content">
        ${slopNum.toFixed(1)}
      </div>
    </td>
    
    <td class="mobile-collapsible" data-order="${vocabNum}">
      <div class="cell-content">
        ${vocabNum.toFixed(1)}
      </div>
    </td>
    
    <td class="mobile-collapsible" data-order="${rubricScoreNum}">
      <div class="cell-content">
        ${scoreBarRubricHTML}
      </div>
    </td>
    
    <td data-order="${eloScoreNum}">
      <div class="cell-content">
        ${scoreBarEloHTML}
      </div>
    </td>
    
    <td>
      <div class="cell-content">
        <a href="${modelResultsFn}">Sample</a>
      </div>
    </td>
  </tr>
`;

    }).join('');

    document.getElementById('leaderboardBody').innerHTML = html;
    initializeDataTable();
}

// DataTable configuration
let dataTableConfig = {
  order: [[5, "desc"]], // Default sort Elo
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    // Define explicit numeric type for sorting
    { targets: [1], type: 'num' }, // Length
    { targets: [2], type: 'num' }, // Slop
    { targets: [3], type: 'num' }, // Vocab
    { targets: [4], type: 'num' }, // Rubric Score
    { targets: [5], type: 'num' }, // Elo Score
    // Define sorting sequences
    { targets: [4, 5], orderSequence: ["desc", "asc"] }, // Rubric, Elo
    { targets: [1, 2, 3], orderSequence: ["desc", "asc"] }, // Length, Slop, Vocab
  ],
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  // drawCallback aligned with eqbench.js logic
  drawCallback: function(settings) {
    let api = this.api();
    if (!api) return;
    let order = api.order();
    if (!order || order.length === 0) {
        order = [[5, 'desc']]; // Fallback to default sort
    }

    let sortedColumnIndex = order[0][0];
    const SCORE_COLUMNS = [4, 5]; // Indices for Rubric Score, Elo Score
    const NON_SCORE_COLUMNS = [0, 1, 2, 3, 6]; // Indices for other columns

    const tableNode = $(api.table().node());

    // Hide all score bars initially within this table
    tableNode.find('.creative-writing-score-bar').hide();
    // Reset header widths
    tableNode.find('th').css('width', '');

    let columnToShowBar = -1;

    // Determine which score column's bar to show
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
        columnToShowBar = sortedColumnIndex;
        lastSortedScoreColumn = sortedColumnIndex;
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) && lastSortedScoreColumn !== null) {
        columnToShowBar = lastSortedScoreColumn;
    } else { // Fallback
        columnToShowBar = 5;
        lastSortedScoreColumn = 5;
    }

    // Show the selected column's score bar and adjust width
    if (columnToShowBar !== -1) {
        try {
            // Show the bar in the target column for all visible rows
            // Use api().rows() to get nodes for current page/view
            api.rows({ page: 'current' }).nodes().to$().find(`td:eq(${columnToShowBar}) .creative-writing-score-bar`).show();

            let header = api.column(columnToShowBar).header();
            if (header) {
                $(header).css('width', '30%');
            }
        } catch (e) {
            console.error("Error showing score bar or adjusting width:", e);
        }
    }

    // Apply the gradient colors to the *now visible* bars
    updateScoreBarColorsV3();
  }
};

// --- Mobile Column Collapse Logic ---
let middleStatsExpanded = false;
function collapseMiddleColumns() {
    const isMobile = window.innerWidth < 768;
  
    // If on mobile AND not expanded, hide them
    if (isMobile && !middleStatsExpanded) {
      $('#leaderboard .mobile-collapsible').hide(); 
      $('#toggleMiddleStats').text('Expand Details');
    } else {
      $('#leaderboard .mobile-collapsible').show();
      $('#toggleMiddleStats').text('Hide Details');
    }
  }
  
  function toggleMiddleStats() {
    middleStatsExpanded = !middleStatsExpanded;
    collapseMiddleColumns();
  }
  
  // --- End Mobile Column Collapse Logic ---

// Add this function to ensure initial score bars use scaled values
function fixInitialScoreBars() {
    // Wait until the table is fully initialized
    setTimeout(() => {
      // Apply updateScores to set initial bar widths and values based on slider settings
      if ($.fn.DataTable.isDataTable('#leaderboard')) {
        updateScores();
      }
    }, 200); // Small delay to ensure DOM is ready
  }
  
  
  
  // Modify initializeDataTable to ensure bars are properly initialized
  function initializeDataTable() {
    // Don't create the toggle button here if it's already in the HTML
    
    // Check if DataTable already exists and destroy it
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      $('#leaderboard').DataTable().destroy();
    }
    
    let table = $('#leaderboard').DataTable(dataTableConfig);
    
    // Don't set up the event handlers here if they're in document.ready
    
    // Still call collapseMiddleColumns after table initialization
    table.one('init.dt', function () {
      collapseMiddleColumns();
      setupControls();
    });
  }



function setupControls() {
    //const vocabSlider = document.getElementById('vocabControlSlider');
    //const vocabSliderValueLabel = document.getElementById('vocabControlValue');
    const gptSlopSlider = document.getElementById('gptSlopControlSlider');
    const gptSlopSliderValueLabel = document.getElementById('gptSlopControlValue');
  
    //if (!vocabSlider || !gptSlopSlider) {
    if (!gptSlopSlider) {
      console.error("Control sliders not found");
      return;
    }
  
    // Set initial label values
    //vocabSliderValueLabel.textContent = `${vocabSlider.value}%`;
    gptSlopSliderValueLabel.textContent = `${gptSlopSlider.value}%`;
  
    // Add event listeners for sliders (only if they don't already have listeners)
    /*
    if (!vocabSlider.hasListeners) {
      vocabSlider.oninput = function() {
        vocabSliderValueLabel.textContent = `${this.value}%`;
        updateScores();
      };
      vocabSlider.hasListeners = true;
    }
    */
  
    if (!gptSlopSlider.hasListeners) {
      gptSlopSlider.oninput = function() {
        gptSlopSliderValueLabel.textContent = `${this.value}%`;
        updateScores();
      };
      gptSlopSlider.hasListeners = true;
    }
  
    // Initial call to apply slider values
    updateScores();
  }


function normalizeVocabComplexity(value) {
    // Use same range values as original code
    const minVocab = 4.5;
    const maxVocab = 10.0;
    
    // Clamp the value to the min-max range
    const clampedValue = Math.max(minVocab, Math.min(maxVocab, value));
    
    // Normalize to 0-1 range (1 is high complexity, 0 is low)
    return Math.pow((clampedValue - minVocab) / (maxVocab - minVocab), 2);
}

function calculateAverageGptSlop() {
    const gptSlops = Array.from(document.querySelectorAll('#leaderboardBody tr'))
        .map(row => parseFloat(row.getAttribute('data-gpt-slop')))
        .filter(val => !isNaN(val));
    
    return gptSlops.length > 0 ? 
        gptSlops.reduce((a, b) => a + b, 0) / gptSlops.length : 
        1;
}

document.addEventListener('DOMContentLoaded', function() {
    displayEncodedEmail();
    applySystemTheme();
    setupDarkModeToggle();
  
    if (document.getElementById('leaderboard')) {
      loadLeaderboardData(); // Calls initializeDataTable
      setupControls(); // Sets up slider listeners
      
      // Directly bind the event handlers here, outside of any other function
      $(window).on('resize', collapseMiddleColumns);
      $('#toggleMiddleStats').on('click', toggleMiddleStats);
      
      // Initial call to collapse columns
      setTimeout(collapseMiddleColumns, 50); // Give time for DataTable to initialize
    }
  });



  function updateScores() {
    // 1) Read slider values
    //const vocabPercentage = document.getElementById('vocabControlSlider').value;
    const gptSlopPercentage = document.getElementById('gptSlopControlSlider').value;

    // 2) Calculate adjustment factors
    //const vocabAdjustmentFactor = parseFloat(vocabPercentage) / 100;
    const vocabAdjustmentFactor = 0.0;
    const gptSlopAdjustmentFactor = 0.30 * parseFloat(gptSlopPercentage) / 100;

    const avgGptSlop = calculateAverageGptSlop();

    // 3) Get the *existing* DataTable instance
    const table = $('#leaderboard').DataTable();

    // 4) Loop over each row in the tbody
    $('#leaderboardBody tr').each(function() {
        const row = $(this);
        const modelGptSlop = parseFloat(row.attr('data-gpt-slop'));
        const vocabComplexity = parseFloat(row.attr('data-vocab'));
        const originalEloScore = parseFloat(row.attr('data-original-elo-score'));
        const originalRubricScore = parseFloat(row.attr('data-original-rubric-score'));

        // --- (A) Compute your adjustments ---
        let vocabAdjustment = 0;
        if (!isNaN(vocabComplexity)) {
            const normalizedVocab = normalizeVocabComplexity(vocabComplexity);
            // Multiply by -12 and scale by vocabAdjustmentFactor
            vocabAdjustment = -12.0 * normalizedVocab * vocabAdjustmentFactor;
        }

        let gptSlopRatio = !isNaN(modelGptSlop) ? (modelGptSlop / avgGptSlop) : 1;
        if (gptSlopRatio < 0.34) {
            gptSlopRatio = 0.34;
        }
        let gptSlopMultiplier = 1.0;
        if (gptSlopRatio > 1) {
            // Penalize higher GPT-slop
            gptSlopMultiplier = 1 - (Math.log(gptSlopRatio) * gptSlopAdjustmentFactor);
            gptSlopMultiplier = Math.max(gptSlopMultiplier, 0.85);
        } else {
            // Reward lower GPT-slop
            gptSlopMultiplier = 1 + (Math.log(1.5 / (gptSlopRatio + 0.5)) * gptSlopAdjustmentFactor);
            gptSlopMultiplier = Math.min(gptSlopMultiplier, 1.02);
        }

        // --- (B) Apply them to get new scores ---
        const adjustedEloScore = originalEloScore * gptSlopMultiplier + 15 * vocabAdjustment;
        const adjustedRubricScore = originalRubricScore * gptSlopMultiplier + vocabAdjustment;

        // --- (C) Update each cell's `data-order` and displayed text ---
        row.find('td:eq(5)')
           .attr('data-order', adjustedEloScore.toFixed(1))
           .find('.score-text').text(adjustedEloScore.toFixed(1));

        row.find('td:eq(4)')
           .attr('data-order', adjustedRubricScore.toFixed(2))
           .find('.score-text').text(adjustedRubricScore.toFixed(2));

        // --- (D) Update the bar widths based on your global maxEloScore / maxRubricScore ---
        const eloPercentage = Math.max(0, Math.min(100, (adjustedEloScore / maxEloScore) * 100));
        const rubricPercentage = Math.max(0, Math.min(100, (adjustedRubricScore / maxRubricScore) * 100));

        row.find('td:eq(5) .creative-writing-score-bar').css('width', `${eloPercentage}%`);
        row.find('td:eq(4) .creative-writing-score-bar').css('width', `${rubricPercentage}%`);
    });

    // 5) Tell DataTables “we changed row data—recheck sorting”
    table.rows().invalidate();

    // 6) Redraw the table (false = stay on the same page)
    table.draw(false);

    // 7) Finally, refresh your color gradients or any final styling
    updateScoreBarColorsV3();
}
