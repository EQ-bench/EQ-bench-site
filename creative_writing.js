const leaderboardDataCreativeWriting = `model,score,params,avgLength
gpt-4-0125-preview,74.67,,4283
claude-3-opus-20240229,76.55,,4338
claude-3-sonnet-20240229,75.06,,4061
claude-3-haiku-20240307,74.58,,4095
mistral-small,62.91,,3887
mistral-medium,69.97,,4639
mistral-large-2402,71.18,,4554
gpt-3.5-turbo-0301,49.08,,3566
01-ai/Yi-34B-Chat,67.81,34,4381
openchat/openchat-3.5-1210,51.76,7,4515
garage-bAInd/Platypus2-70B-instruct,53.18,70,3673
mistralai/Mixtral-8x7B-Instruct-v0.1,65.32,8x7,4077
Qwen/Qwen1.5-14B-Chat,67.39,14,3421
Qwen/Qwen1.5-4B-Chat,34.58,4,3080
google/gemma-2b-it,40.12,2,2806
google/gemma-7b-it,47.34,7,2811
meta-llama/Llama-2-7b-chat-hf,47.85,7,4196
meta-llama/Llama-2-13b-chat-hf,54.6,13,3957
alpindale/goliath-120b,68.33,120,3947
sophosympatheia/Midnight-Miqu-70B-v1.5,75.22,70,8770`;

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
	const maxScoreCreativeWriting = Math.max(...creativeWritingRows.map(row => parseFloat(row.split(',')[1])));

	let html = creativeWritingRows.map(creativeWritingRow => {
		const [modelName, score, params, avgLength] = creativeWritingRow.split(',');
		const scoreNum = parseFloat(score);

		// Calculate score percentage based on max score
		let scorePercentageCreativeWriting = (scoreNum / maxScoreCreativeWriting) * 100;

		// Extract model name without creator
		let displayModelName = modelName.split('/').pop();
		let modelNameDisplay = modelName.includes('/')
			? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>`
			: displayModelName;

		let modelResultsFn = 'results/creative-writing/' + modelName.replace('/','__')+'.txt'

		let scoreBarCreativeWriting = `
		<div class="score-bar-container">
				<div class="creative-writing-score-bar" style="width: ${scorePercentageCreativeWriting}%"></div>
				<span class="score-text">${score}</span>
		</div>
		`;

		return `<tr>
			<td>${modelNameDisplay}</td>
			<td>${params}</td>
			<td>${avgLength}</td>
			<td data-order="${score}">${scoreBarCreativeWriting}</td>
			<td><a href="${modelResultsFn}">Sample</a></td>
			</tr>`;
	}).join('');

	document.getElementById('leaderboardBody').innerHTML = html;
	initializeDataTable();
	updateCreativeWritingScoreBarColors();
}

function initializeDataTable() {
	let table = $('#leaderboard').DataTable({
		"order": [[3, "desc"]], // Default sorting
		"pageLength": 100,
		"lengthMenu": [50, 100, 200, 1000],
		"language": {
			"lengthMenu": "Show _MENU_"
		},
		"columnDefs": [
			{ "targets": [3], "orderSequence": ["desc", "asc"] }, // For score column: sort desc first
			{ "targets": [2], "orderSequence": ["desc", "asc"] }, // For avgLength column: sort desc first
			{ "targets": [1], "type": "params", "orderSequence": ["asc", "desc"] }, // For params column: sort asc first
		],
		"dom": "<'d-flex flex-column flex-md-row justify-content-between'<'dataTables_length'l><'dataTables_filter'f>>" +
			"<'row'<'col-12'tr>>" +
			"<'row'<'col-md-5'i><'col-md-7'p>>",
		"drawCallback": function(settings) {
			
		}
	});
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
	}

	// This checks if the system theme preference should be applied, which is common functionality
	applySystemTheme();
	setupDarkModeToggle();
});