let leaderboardDataCreativeWriting = `model,score,ci95_low,ci95_high,params,avgLength
Qwen/Qwen1.5-4B-Chat,27.01,26.48,27.54,4,3219
*claude-3-5-sonnet-20240620,78.77,78.41,79.13,,5875
claude-3-haiku-20240307,68.97,68.14,69.81,,4907
claude-3-opus-20240229,73.58,72.51,74.65,,4846
gpt-4o,75.61,74.87,76.34,,5401
*gemini-1.5-pro-001,80.27,79.76,80.77,,4312
*microsoft/WizardLM-2-8x22B,78.91,78.17,79.65,8x22,5856
meta-llama/Llama-3-70b-chat-hf,71.28,70.07,72.48,70,4439
01-ai/Yi-34B-Chat,71.1,69.75,72.44,34,4496
Qwen/Qwen1.5-14B-Chat,65.23,64.22,66.25,14,3736
mistralai/Mixtral-8x7B-Instruct-v0.1,59.32,58.16,60.47,8x7,4775
meta-llama/Llama-3-8b-chat-hf,61.7,60.38,63.02,8,4112
meta-llama/Llama-2-13b-chat-hf,49.14,47.87,50.4,13,3809
google/gemma-7b-it,46.19,44.94,47.44,7,2671
Qwen/Qwen1.5-110B-Chat,75.33,74.55,76.12,110,4269
google/gemma-2b-it,41.13,40.23,42.03,2,2890
meta-llama/Llama-2-7b-chat-hf,46.67,45.32,48.01,7,3874
garage-bAInd/Platypus2-70B-instruct,47.45,45.8,49.09,70,3561
openchat/openchat-3.5-1210,57.28,56.38,58.17,7,4914
mistralai/Mixtral-8x22B-Instruct-v0.1,63.64,62.49,64.8,8x22,4390
*gemini-1.5-flash-001,71.96,71.08,72.84,,4933
!sophosympatheia/Midnight-Miqu-70B-v1.5,77.15,76.62,77.68,70,7787
CohereForAI/c4ai-command-r-plus,64.75,63.95,65.55,104,5961
gpt-4-0125-preview,77.43,76.84,78.01,,5047
gpt-3.5-turbo-0301,42.33,41.2,43.47,,3443
!*Sao10K/L3-70B-Euryale-v2.1,67.32,66.35,68.28,70,4473
OmnicromsBrain/NeuralStar_AlphaWriter_4x7b,74.21,73.61,74.82,4x7,5461
!*Sao10K/L3-8B-Stheno-v3.2,69.21,68.62,69.8,8,4321
*google/gemma-2-9b-it,76.15,75.13,77.17,9,4010
*google/gemma-2-27b-it,77.22,76.18,78.24,27,4010
!*TheDrummer/Llama-3SOME-8B-v2,70.59,69.54,71.65,8,4466
!*sophosympatheia/New-Dawn-Llama-3-70B-32K-v1.0,58.48,54.75,62.22,70,6811
N8Programs/Coxcomb,71.4,70.62,72.17,7,5474`

function setupDarkModeToggle() {
	var toggle = document.getElementById('darkModeToggle');
	var label = document.getElementById('toggleLabel');

	// Check if a preference is saved in localStorage
	const savedMode = localStorage.getItem('darkModeEnabled');
	if (savedMode) {
		 document.body.classList.toggle('dark-mode', savedMode === 'true');
		 toggle.checked = savedMode === 'true';
		 label.textContent = savedMode === 'true' ? 'Dark' : 'Light';
		 updateCreativeWritingScoreBarColors(); // Ensure score bars match the theme
	}

	toggle.addEventListener('change', function() {
		 document.body.classList.toggle('dark-mode', this.checked);         
		 label.textContent = this.checked ? 'Dark' : 'Light';
		 localStorage.setItem('darkModeEnabled', this.checked); // Save preference
		 updateCreativeWritingScoreBarColors(); // Update score bars on toggle
	});
}

function applySystemTheme() {
	// Only apply system theme if there's no saved preference
	if (localStorage.getItem('darkModeEnabled') === null) {
		 const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		 const toggle = document.getElementById('darkModeToggle');
		 const label = document.getElementById('toggleLabel');

		 document.body.classList.toggle('dark-mode', prefersDarkMode);
		 toggle.checked = prefersDarkMode;
		 label.textContent = prefersDarkMode ? 'Dark' : 'Light';
		 updateCreativeWritingScoreBarColors(); // Ensure score bars match the theme
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

function updateCreativeWritingScoreBarColors() {
	const scoreBars = document.querySelectorAll('.creative-writing-score-bar');
	const isDarkMode = document.body.classList.contains('dark-mode'); // Check if dark mode is active
	const numBars = scoreBars.length;
	scoreBars.forEach((bar, index) => {
		 const startPercent = (index / numBars);
		 const endPercent = ((index + 1) / numBars);
		 // Adjust the lightness value based on the mode; darker for dark mode, lighter for light mode
		 const lightness = isDarkMode ? '50%' : '80%'; // Lighter in light mode
		 const startColor = `hsl(${startPercent * 360}, 30%, ${lightness})`;
		 const endColor = `hsl(${endPercent * 360}, 30%, ${lightness})`;
		 bar.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
		 bar.style.display = 'block'; // Make sure to display the bar
	});
}

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

function loadLeaderboardData() {
	const creativeWritingRows = leaderboardDataCreativeWriting.split('\n').slice(1); // Skip header for Creative Writing data

	// Calculate max score for Creative Writing
	maxScoreCreativeWriting = Math.max(...creativeWritingRows.map(row => parseFloat(row.split(',')[1])));

	const maxScore = Math.max(...creativeWritingRows.map(row => parseFloat(row.split(',')[1])));

	let html = creativeWritingRows.map(creativeWritingRow => {
		let [modelName, score, ci95_low, ci95_high, params, avgLength] = creativeWritingRow.split(',');
		const scoreNum = parseFloat(score);
		const ci95LowNum = parseFloat(ci95_low);
		const ci95HighNum = parseFloat(ci95_high);

		// Calculate score percentage
		const scorePercentage = (scoreNum / maxScore) * 100;
		const errorBarLeftPos = ((ci95LowNum / maxScore) * 100).toFixed(2);
		const errorBarRightPos = ((ci95HighNum / maxScore) * 100).toFixed(2);
		const errorBarWidth = (errorBarRightPos - errorBarLeftPos).toFixed(2);

		console.log(maxScore, ci95HighNum)
		console.log(errorBarLeftPos, errorBarRightPos, errorBarWidth)


		const isNsfwModel = modelName.startsWith('!');
		modelName = modelName.replace(/^\!/, '');

		const isNewModel = modelName.startsWith('*');
		modelName = modelName.replace(/^\*/, '');

		// Extract model name without creator
		let displayModelName = modelName.split('/').pop();
		
		if (isNsfwModel) {
			displayModelName = '🔞' + displayModelName
		}
		if (isNewModel) {
			displayModelName = '🆕' + displayModelName
		}
		let modelNameDisplay = modelName.includes('/')
			? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>`
			: displayModelName;

		let modelResultsFn = 'results/creative-writing-v2/' + modelName.replace('/','__')+'.txt'

		let scoreBarCreativeWriting = `<div class="score-bar-container">
            <div class="creative-writing-score-bar" style="width: ${scorePercentage}%"></div>
            <div class="error-bar" style="left: ${errorBarLeftPos}%; width: ${errorBarWidth}%;"></div>
            <span class="score-text">${score}</span>
        </div>`;

        return `<tr data-original-score="${scoreNum}" data-original-ci-low="${ci95LowNum}" data-original-ci-high="${ci95HighNum}">
            <td>${modelNameDisplay}</td>
            <td>${params}</td>
            <td>${avgLength}</td>
            <td data-order="${score}">
                ${scoreBarCreativeWriting}
            </td>
            <td><a href="${modelResultsFn}" target="_blank">Sample</a></td>
        </tr>`;
		}).join('');

	document.getElementById('leaderboardBody').innerHTML = html;
	initializeDataTable();
	updateCreativeWritingScoreBarColors();
}

let currentOrder = [[3, "desc"]]; // Default sorting
let dataTableConfig = {
	"order": currentOrder,
	"paging": false, // Disable pagination
	"searching": false, // Disable search bar
	"lengthMenu": [50, 100, 200, 1000],
	"language": {
	  "lengthMenu": "Show _MENU_"
	},
	"columnDefs": [
	  { "targets": [3], "orderSequence": ["desc", "asc"] },
	  { "targets": [2], "orderSequence": ["desc", "asc"] },
	  { "targets": [1], "type": "params", "orderSequence": ["asc", "desc"] },
	],
	"dom": "<'d-flex flex-column flex-md-row justify-content-between'<'dataTables_length'l><'dataTables_filter'f>>" +
	  "<'row'<'col-12'tr>>" +
	  "<'row'<'col-md-5'i><'col-md-7'p>>",
	"drawCallback": function() {
	  updateCreativeWritingScoreBarColors();
	}
 }

function initializeDataTable() {
	let table = $('#leaderboard').DataTable(dataTableConfig);
}

let lastSortedScoreColumn = null;

document.addEventListener('DOMContentLoaded', function() {
	// Always execute
	displayEncodedEmail();
	//setupDarkModeToggle();
	//applySystemTheme();

	// Conditional execution based on the presence of elements
	if (document.getElementById('leaderboard')) {
		loadLeaderboardData(); // Only load leaderboard data if the leaderboard element exists
		setupLengthControl();
	}

	// This checks if the system theme preference should be applied, which is common functionality
	applySystemTheme();
	setupDarkModeToggle();
});

function setupLengthControl() {
	const slider = document.getElementById('lengthControlSlider');
	const sliderValueLabel = document.getElementById('lengthControlValue');
 
	// Set the initial value of the slider value label
	sliderValueLabel.textContent = `${slider.value}%`;
 
	// Update scores based on the initial slider value
	updateScoresBasedOnLengthControl(slider.value);
 
	slider.oninput = function() {
	  sliderValueLabel.textContent = `${this.value}%`;
	  updateScoresBasedOnLengthControl(this.value);
	};
 }

 function updateScoresBasedOnLengthControl(percentage) {
	const adjustmentFactor = 0.1 * parseFloat(percentage) / 100;
	const avgLength = calculateAverageLength();
	const table = $('#leaderboard').DataTable();

	// Get the current page and sorting information
	const currentPage = table.page.info().page;
	const currentOrder = table.order();

	// Clear the existing table
	table.destroy();

	// Update the scores and error bars
	$('#leaderboardBody tr').each(function() {
		 const row = $(this);
		 const avgModelLength = parseFloat(row.find('td:eq(2)').text());
		 const originalScore = parseFloat(row.attr('data-original-score'));
		 const originalCILow = parseFloat(row.attr('data-original-ci-low'));
		 const originalCIHigh = parseFloat(row.attr('data-original-ci-high'));

		 let lengthAdjustmentFactor = avgLength / avgModelLength * adjustmentFactor + 1 - adjustmentFactor;
		 if (lengthAdjustmentFactor > 1.15) { lengthAdjustmentFactor = 1.15 }
		 if (lengthAdjustmentFactor < 0.85) { lengthAdjustmentFactor = 0.85 }

		 const adjustedScore = originalScore * lengthAdjustmentFactor;
		 const adjustedCILow = adjustedScore - (originalScore - originalCILow) //originalCILow * lengthAdjustmentFactor;
		 const adjustedCIHigh = adjustedScore + (originalCIHigh - originalScore) //originalCIHigh * lengthAdjustmentFactor;

		 const scoreText = adjustedScore.toFixed(2);

		 // Update the score
		 row.find('td:eq(3)').attr('data-order', scoreText).find('.score-text').text(scoreText);

		 // Update error bar position and width
		 const errorBarLeftPos = ((adjustedCILow / maxScoreCreativeWriting) * 98).toFixed(2);
		 const errorBarRightPos = ((adjustedCIHigh / maxScoreCreativeWriting) * 98).toFixed(2);
		 const errorBarWidth = (errorBarRightPos - errorBarLeftPos).toFixed(2);

		 row.find('.error-bar').css({
			  'left': `${errorBarLeftPos}%`,
			  'width': `${errorBarWidth}%`
		 });
	});

	// Reinitialize the DataTable
	const newTable = $('#leaderboard').DataTable(dataTableConfig);

	// Restore the previous page
	newTable.page(currentPage).draw('page');

	// Update the score bar widths
	$('#leaderboardBody tr').each(function() {
		 const row = $(this);
		 const scoreText = row.find('td:eq(3)').attr('data-order');
		 const percentageWidth = Math.max(0, Math.min(100, (parseFloat(scoreText) / maxScoreCreativeWriting) * 98));
		 row.find('.creative-writing-score-bar').css('width', `${percentageWidth}%`);
	});
}




function calculateAverageLength() {
	const lengths = Array.from(document.querySelectorAll('#leaderboardBody tr'))
		 .map(row => parseFloat(row.cells[2].textContent));
	return lengths.reduce((a, b) => a + b, 0) / lengths.length;
}