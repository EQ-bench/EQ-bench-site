let leaderboardDataBuzzbench = `model,score,avg_length,c95_lower,c95_upper
claude-3.5-sonnet,61.94,3567.21,61.07,62.8
meta-llama/llama-3.1-405b-instruct,45.94,4013.67,45.35,46.54
meta-llama/llama-3.2-1b-instruct,9.51,6087.97,8.81,10.21
meta-llama/llama-3.2-3b-instruct,26.55,4644.0,25.68,27.41
chatgpt-4o-latest,59.48,6721.0,59.04,59.93
deepseek-ai/DeepSeek-V3,51.63,6296.05,50.9,52.36
o1-mini,46.18,6829.01,45.26,47.1
o1,59.28,9898.6,58.18,60.38
meta-llama/llama-3.3-70b-instruct,45.7,7554.25,44.75,46.65
gpt-3.5-turbo-0613,39.0,4351.86,38.33,39.67
Qwen/Qwen2.5-7B-Instruct,31.42,6094.18,29.63,33.21
mistralai/Mistral-Large-Instruct-2411,47.48,5104.84,46.27,48.69
mistralai/Ministral-8B-Instruct-2410,32.3,5657.81,31.47,33.14
gemini-pro-1.5,54.9,4767.72,53.53,56.28
claude-3.5-haiku-20241022,53.34,3998.52,52.59,54.08
meta-llama/llama-3.1-8b-instruct,32.88,4354.52,31.52,34.23
Qwen/Qwen2.5-72B-Instruct,45.89,5960.26,45.08,46.7
grok-2-1212,51.76,6059.62,51.23,52.28
*deepseek-ai/deepseek-r1,62.73,5162.59,62.15,63.32
*microsoft/phi-4,38.67,5201.09,37.7,39.64`

function setupDarkModeToggle() {
    var toggle = document.getElementById('darkModeToggle');
    var label = document.getElementById('toggleLabel');

    const savedMode = localStorage.getItem('darkModeEnabled');
    if (savedMode) {
        document.body.classList.toggle('dark-mode', savedMode === 'true');
        toggle.checked = savedMode === 'true';
        label.textContent = savedMode === 'true' ? 'Dark' : 'Light';
        updateBuzzbenchScoreBarColors();
    }

    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);         
        label.textContent = this.checked ? 'Dark' : 'Light';
        localStorage.setItem('darkModeEnabled', this.checked);
        updateBuzzbenchScoreBarColors();
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
        updateBuzzbenchScoreBarColors();
    }
}

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

//             #ff1493, 
function updateBuzzbenchScoreBarColors() {
    const scoreBars = document.querySelectorAll('.buzzbench-score-bar');
    
    scoreBars.forEach((bar) => {
        const gradient = `linear-gradient(to right, 
rgba(0, 0, 0, 0.22), 
rgb(181, 58, 123),
rgb(181, 58, 123),
rgb(181, 58, 123),
rgb(181, 58, 123),
rgba(0, 0, 0, 0.22), 
        )`;
        bar.style.background = gradient;
        bar.style.display = 'block';
    });
}


function loadLeaderboardData() {
    const buzzbenchRows = leaderboardDataBuzzbench.split('\n').slice(1);

    const maxScore = Math.max(...buzzbenchRows.map(row => parseFloat(row.split(',')[1])));

    let html = buzzbenchRows.map(buzzbenchRow => {
        let [modelName, score, avgLength, ci95Low, ci95High] = buzzbenchRow.split(',');
        const scoreNum = parseFloat(score);
        const ci95LowNum = parseFloat(ci95Low);
        const ci95HighNum = parseFloat(ci95High);
        
        // Round up length to nearest whole number
        const roundedLength = Math.ceil(parseFloat(avgLength));

        const scorePercentage = (scoreNum / maxScore) * 100;
        const errorBarLeftPos = ((ci95LowNum / maxScore) * 100).toFixed(2);
        const errorBarRightPos = ((ci95HighNum / maxScore) * 100).toFixed(2);
        const errorBarWidth = (errorBarRightPos - errorBarLeftPos).toFixed(2);

        const isNewModel = modelName.startsWith('*');
        modelName = modelName.replace(/^\*/, '');

        let displayModelName = modelName.split('/').pop();
        if (isNewModel) {
            displayModelName = '🆕' + displayModelName;
        }

        let modelNameDisplay = modelName.includes('/')
            ? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>`
            : displayModelName;

        let outputsFn = 'results/buzzbench/' + modelName.replace('/','__')+'_outputs.txt';

        let scoreBar = `<div class="score-bar-container">
            <div class="buzzbench-score-bar" style="width: ${scorePercentage}%"></div>
            <div class="error-bar" style="left: ${errorBarLeftPos}%; width: ${errorBarWidth}%;"></div>
            <span class="score-text">${score}</span>
        </div>`;

        return `<tr>
            <td>${modelNameDisplay}</td>
            <td>${roundedLength}</td>
            <td data-order="${score}">${scoreBar}</td>
            <td><a href="${outputsFn}" target="_blank">Outputs</a></td>
        </tr>`;
    }).join('');

    document.getElementById('leaderboardBody').innerHTML = html;
    initializeDataTable();
    updateBuzzbenchScoreBarColors();
}

function initializeDataTable() {
    $('#leaderboard').DataTable({
        "order": [[2, "desc"]],
        "paging": false,
        "searching": false,
        "columnDefs": [
            { "targets": [2], "orderSequence": ["desc", "asc"] }
        ],
        "drawCallback": function() {
            updateBuzzbenchScoreBarColors();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayEncodedEmail();
    if (document.getElementById('leaderboard')) {
        loadLeaderboardData();
    }
    applySystemTheme();
    setupDarkModeToggle();
});
