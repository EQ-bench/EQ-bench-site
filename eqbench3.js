const leaderboardDataEqbench3 = `model,params,score
claude-3.7-sonnet,,79.57
claude-3.5-sonnet,,79.14
claude-3.5-haiku-20241022,,64.31
qwen-max,,63.44
chatgpt-4o-latest,,61.31
o3-mini,,59.08
gemini-2.0-flash-001,,58.0
mistralai/mistral-large-2411,,58.81
qwen/qwen-2.5-72b-instruct,72,51.37
gemini-2.0-flash-lite-001,,49.44
alpindale/wizardlm-2-8x22b,8x22,49.94
mistralai/mistral-small-24b-instruct-2501,24,48.56
mistralai/mistral-nemo,,48.62
gpt-4o-2024-08-06,,47.99
google/gemma-2-9b-it,9,42.18
meta-llama/llama-3.1-8b-instruct,8,41.69
gpt-3.5-turbo,,30.86
mistralai/ministral-3b,3,23.24
cohere/command-r7b-12-2024,7,10.62
deepseek/deepseek-r1,,71.64
o1,,59.81
gpt-4o-mini,,50.32
meta-llama/llama-3.1-405b-instruct,405,50.37
gpt-4.5-preview-2025-02-27,,72.38
inflection-3-pi,,42.36`;

/**
 * Custom sorting function for estimated parameters
 */
$.fn.dataTable.ext.type.order['params-pre'] = function (data) {
    if (!data || data === '-') {
        return 9999; // Sort missing or null values last
    }
    if (data.includes('x')) {
        const parts = data.split('x').map(Number);
        return parts.reduce((acc, val) => acc * val, 1); // Multiply if in 'x' format
    }
    return parseFloat(data) || 0; // Default to float conversion
};

let lastSortedScoreColumn = null;

/**
 * Set up dark mode toggle
 */
function setupDarkModeToggle() {
    var toggle = document.getElementById('darkModeToggle');
    var label = document.getElementById('toggleLabel');
    
    // Check if a preference is saved in localStorage and apply it
    const savedMode = localStorage.getItem('darkModeEnabled');
    if (savedMode !== null) {
        const isDarkMode = savedMode === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        toggle.checked = isDarkMode;
        label.textContent = isDarkMode ? 'Dark' : 'Light';
    }

    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);       
        label.textContent = this.checked ? 'Dark' : 'Light';
        localStorage.setItem('darkModeEnabled', this.checked); // Save the current preference
        updateScoreBarColors(); // Update colors on mode change
    });
}

/**
 * Apply system theme preference if no user preference is stored
 */
function applySystemTheme() {
    const toggle = document.getElementById('darkModeToggle');
    const label = document.getElementById('toggleLabel');

    // Apply system theme only if no saved preference
    if (localStorage.getItem('darkModeEnabled') === null) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDarkMode);
        toggle.checked = prefersDarkMode;
        label.textContent = prefersDarkMode ? 'Dark' : 'Light';
    } else {
        // If there is a saved preference, ensure it's applied correctly
        const isDarkMode = localStorage.getItem('darkModeEnabled') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        toggle.checked = isDarkMode;
        label.textContent = isDarkMode ? 'Dark' : 'Light';
    }
}

/**
 * Display encoded email to prevent spam
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
 * Update score bar colors with plasma gradient, skewable towards hot or cold colors.
 * Applies uniform transparency in light mode, slightly darker yellow in dark mode.
 *
 * @param {number} colorSkew - Skew factor (>1 colder, <1 hotter). Default is 0.5 (hot emphasis).
 */
function updateScoreBarColors(colorSkew = 0.4) {
    const scoreBars = document.querySelectorAll('.eqbench3-score-bar');
    const numBars = scoreBars.length;
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Separate plasma gradients per mode (darkened yellow in dark mode)
    const plasmaColors = isDarkMode ? [
        '#AFA30F  ', // Darker Yellow (dark mode only)
        '#f89540', // Orange
        '#cc4778', // Magenta
        '#7e03a8', // Purple
        '#0d0887'  // Dark Blue
    ] : [
        '#f0f921', // Original bright Yellow
        '#f89540',
        '#cc4778',
        '#7e03a8',
        '#0d0887'
    ];

    const interpolateHex = (startHex, endHex, fraction) => {
        const hexToRgb = hex => hex.match(/\w\w/g).map(c => parseInt(c, 16));
        const rgbToHex = rgb => '#' + rgb.map(x => x.toString(16).padStart(2, '0')).join('');
        const startRgb = hexToRgb(startHex);
        const endRgb = hexToRgb(endHex);
        const interpolatedRgb = startRgb.map((start, i) =>
            Math.round(start + fraction * (endRgb[i] - start))
        );
        return rgbToHex(interpolatedRgb);
    };

    const hexToRGBA = (hex, alpha) => {
        const [r, g, b] = hex.match(/\w\w/g).map(c => parseInt(c, 16));
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const getPlasmaColor = (t, alpha = 1) => {
        const scaledT = t * (plasmaColors.length - 1);
        const idx = Math.floor(scaledT);
        const frac = scaledT - idx;

        const interpolatedHex = interpolateHex(
            plasmaColors[idx],
            plasmaColors[Math.min(idx + 1, plasmaColors.length - 1)],
            frac
        );

        return hexToRGBA(interpolatedHex, alpha);
    };

    const alphaValue = isDarkMode ? 1 : 0.4;

    scoreBars.forEach((bar, index) => {
        let startPercent = Math.pow(index / numBars, colorSkew);
        let endPercent = Math.pow((index + 1) / numBars, colorSkew);

        bar.style.background = `linear-gradient(to bottom, ${getPlasmaColor(startPercent, alphaValue)}, ${getPlasmaColor(endPercent, alphaValue)})`;
        bar.style.display = 'block';
    });
}





/**
 * Load leaderboard data from the constant
 */
function loadLeaderboardData() {
    const rows = leaderboardDataEqbench3.split('\n').slice(0); // Include header
    
    // Find max score for scaling
    const maxScore = Math.max(...rows.slice(1).map(row => parseFloat(row.split(',')[2]) || 0));
    
    // Generate HTML for table body
    let html = rows.slice(1).map(row => {
        const [modelName, parameters, score] = row.split(',');
        
        // Calculate score percentage for bar width
        const scoreNum = parseFloat(score);
        const scorePercentage = (scoreNum / maxScore) * 100;
        
        // Extract model name without creator
        let displayModelName = modelName.split('/').pop();
        let modelNameDisplay = modelName.includes('/') 
                            ? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>` 
                            : displayModelName;
        
        // Create score bar HTML
        let scoreBar = `
        <div class="score-bar-container">
            <div class="eqbench3-score-bar" style="width: ${scorePercentage}%"></div>
            <span class="score-text">${score}</span>
        </div>
        `;
        
        // Generate sanitized model name for samples link (replacing / with __)
        let sanitizedModelName = modelName.replace(/\//g, '__');
        let samplesLink = `<a href="results/eqbench3/convos/${sanitizedModelName}.html">View</a>`;
        
        return `<tr>
            <td>${modelNameDisplay}</td>
            <td>${parameters || ''}</td>
            <td data-order="${score}">${scoreBar}</td>
            <td>${samplesLink}</td>
        </tr>`;
    }).join('');
    
    document.getElementById('leaderboardBody').innerHTML = html;
    initializeDataTable();
    updateScoreBarColors();
}



/**
 * Initialize DataTables with custom sorting and display options
 */
function initializeDataTable() {
    let table = $('#leaderboard').DataTable({
        "order": [[2, "desc"]], // Default sort by score
        "paging": false, // Disable pagination for this small table
        "searching": false, // Disable search bar
        "columnDefs": [
            { "targets": 2, "orderSequence": ["desc", "asc"] }, // For score column: sort desc first
            { "targets": 1, "type": "params" }, // Use custom sorting for params
        ],
        "drawCallback": function(settings) {
            // Hide all score bars initially
            $('.eqbench3-score-bar').hide();
      
            let api = this.api();
            let sortedColumnIndex = api.order()[0][0];
            
            // Show score bars for score column
            if (sortedColumnIndex === 2) {
                api.cells(null, sortedColumnIndex).nodes().to$().find('.eqbench3-score-bar').show();
                $(api.column(sortedColumnIndex).header()).css('width', '40%');
                lastSortedScoreColumn = sortedColumnIndex;
            } else {
                // If sorted by Model or Params, maintain the state of score bars
                if (lastSortedScoreColumn !== null) {
                    api.cells(null, lastSortedScoreColumn).nodes().to$().find('.eqbench3-score-bar').show();
                }
            }
            
            // Make sure colors are updated
            updateScoreBarColors();
        }
    });
}

// Event handlers when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    displayEncodedEmail();
    applySystemTheme();
    setupDarkModeToggle();
    
    if (document.getElementById('leaderboard')) {
        loadLeaderboardData();
    }
});
