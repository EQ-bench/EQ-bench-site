const leaderboardDataJudgemark = `
# claude-3-opus-20240229

Test model scores:
74.97 gpt-4-0125-preview
76.81 claude-3-opus-20240229
76.23 claude-3-sonnet-20240229
73.91 claude-3-haiku-20240307
63.99 mistral-small
69.87 mistral-medium
70.48 mistral-large-2402
50.97 gpt-3.5-turbo-0301
67.14 01-ai/Yi-34B-Chat
56.08 openchat/openchat-3.5-1210
51.19 garage-bAInd/Platypus2-70B-instruct
68.21 mistralai/Mixtral-8x7B-Instruct-v0.1
67.13 Qwen/Qwen1.5-14B-Chat
35.33 Qwen/Qwen1.5-4B-Chat
37.78 google/gemma-2b-it
50.07 google/gemma-7b-it
48.27 meta-llama/Llama-2-7b-chat-hf
55.47 meta-llama/Llama-2-13b-chat-hf
76.41 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 4.77
Family bias: 3.94
mean_score 61.6
range 41.48
std_dev 13.15
CV 0.21
std_dev_top_5 1.2
pearson_arena_elo 0.93
kendall_arena_elo 0.92
pearson_eq_bench 0.86
kendall_eq_bench 0.63
pearson_top_8_arena_elo 0.9
kendall_top_8_arena_elo 0.9
pearson_top_8_eq_bench 0.11
kendall_top_8_eq_bench 0.05
Judgemark 73.47
Cost: $40.00


# claude-3-sonnet-20240229

Test model scores:
80.09 gpt-4-0125-preview
77.1 claude-3-opus-20240229
77.21 claude-3-sonnet-20240229
75.18 claude-3-haiku-20240307
76.21 mistral-small
74.69 mistral-medium
76.46 mistral-large-2402
63.97 gpt-3.5-turbo-0301
77.37 01-ai/Yi-34B-Chat
71.34 openchat/openchat-3.5-1210
71.29 garage-bAInd/Platypus2-70B-instruct
75.34 mistralai/Mixtral-8x7B-Instruct-v0.1
74.33 Qwen/Qwen1.5-14B-Chat
48.78 Qwen/Qwen1.5-4B-Chat
66.84 google/gemma-2b-it
70.78 google/gemma-7b-it
68.4 meta-llama/Llama-2-7b-chat-hf
68.0 meta-llama/Llama-2-13b-chat-hf
77.25 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 0.22
Family bias: -0.69
mean_score 72.14
range 31.31
std_dev 7.1
CV 0.1
std_dev_top_5 1.28
pearson_arena_elo 0.76
kendall_arena_elo 0.64
pearson_eq_bench 0.76
kendall_eq_bench 0.59
pearson_top_8_arena_elo 0.61
kendall_top_8_arena_elo 0.2
pearson_top_8_eq_bench 0.4
kendall_top_8_eq_bench 0.14
Judgemark 49.93
Cost: $15.00


# claude-3-haiku-20240307

Test model scores:
83.67 gpt-4-0125-preview
82.96 claude-3-opus-20240229
82.69 claude-3-sonnet-20240229
82.86 claude-3-haiku-20240307
81.32 mistral-small
81.08 mistral-medium
82.6 mistral-large-2402
77.27 gpt-3.5-turbo-0301
83.9 01-ai/Yi-34B-Chat
81.22 openchat/openchat-3.5-1210
78.83 garage-bAInd/Platypus2-70B-instruct
81.17 mistralai/Mixtral-8x7B-Instruct-v0.1
81.97 Qwen/Qwen1.5-14B-Chat
63.34 Qwen/Qwen1.5-4B-Chat
79.03 google/gemma-2b-it
79.28 google/gemma-7b-it
78.48 meta-llama/Llama-2-7b-chat-hf
78.1 meta-llama/Llama-2-13b-chat-hf
83.63 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 0.26
Family bias: 0.1
mean_score 80.18
range 20.56
std_dev 4.57
CV 0.06
std_dev_top_5 0.46
pearson_arena_elo 0.67
kendall_arena_elo 0.58
pearson_eq_bench 0.68
kendall_eq_bench 0.49
pearson_top_8_arena_elo -0.2
kendall_top_8_arena_elo 0.07
pearson_top_8_eq_bench -0.02
kendall_top_8_eq_bench -0.05
Judgemark 28.52
Cost: $0.60


# mistral-medium

Test model scores:
76.88 gpt-4-0125-preview
74.3 claude-3-opus-20240229
72.77 claude-3-sonnet-20240229
73.25 claude-3-haiku-20240307
72.18 mistral-small
75.33 mistral-medium
76.32 mistral-large-2402
63.77 gpt-3.5-turbo-0301
72.99 01-ai/Yi-34B-Chat
68.51 openchat/openchat-3.5-1210
65.84 garage-bAInd/Platypus2-70B-instruct
72.46 mistralai/Mixtral-8x7B-Instruct-v0.1
75.9 Qwen/Qwen1.5-14B-Chat
39.93 Qwen/Qwen1.5-4B-Chat
62.68 google/gemma-2b-it
61.88 google/gemma-7b-it
60.78 meta-llama/Llama-2-7b-chat-hf
66.55 meta-llama/Llama-2-13b-chat-hf
77.03 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 1.6
Family bias: 0.6
mean_score 68.91
range 37.1
std_dev 8.86
CV 0.13
std_dev_top_5 0.7
pearson_arena_elo 0.78
kendall_arena_elo 0.71
pearson_eq_bench 0.8
kendall_eq_bench 0.68
pearson_top_8_arena_elo 0.42
kendall_top_8_arena_elo 0.33
pearson_top_8_eq_bench 0.75
kendall_top_8_eq_bench 0.62
Judgemark 62.1
Cost: $6.08


# mistral-large-2402

Test model scores:
76.14 gpt-4-0125-preview
77.87 claude-3-opus-20240229
77.71 claude-3-sonnet-20240229
79.23 claude-3-haiku-20240307
77.71 mistral-small
77.75 mistral-medium
78.95 mistral-large-2402
70.69 gpt-3.5-turbo-0301
74.64 01-ai/Yi-34B-Chat
73.32 openchat/openchat-3.5-1210
69.71 garage-bAInd/Platypus2-70B-instruct
76.99 mistralai/Mixtral-8x7B-Instruct-v0.1
75.83 Qwen/Qwen1.5-14B-Chat
48.32 Qwen/Qwen1.5-4B-Chat
61.15 google/gemma-2b-it
71.06 google/gemma-7b-it
65.5 meta-llama/Llama-2-7b-chat-hf
70.49 meta-llama/Llama-2-13b-chat-hf
79.55 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 1.55
Family bias: 1.44
mean_score 72.77
range 31.23
std_dev 7.73
CV 0.11
std_dev_top_5 0.81
pearson_arena_elo 0.79
kendall_arena_elo 0.73
pearson_eq_bench 0.87
kendall_eq_bench 0.67
pearson_top_8_arena_elo 0.18
kendall_top_8_arena_elo 0.33
pearson_top_8_eq_bench -0.24
kendall_top_8_eq_bench 0.29
Judgemark 47.41
Cost: $21.14


# mistral-small

Test model scores:
76.38 gpt-4-0125-preview
73.3 claude-3-opus-20240229
76.4 claude-3-sonnet-20240229
73.67 claude-3-haiku-20240307
67.89 mistral-small
73.46 mistral-medium
72.85 mistral-large-2402
61.32 gpt-3.5-turbo-0301
79.96 01-ai/Yi-34B-Chat
66.56 openchat/openchat-3.5-1210
64.66 garage-bAInd/Platypus2-70B-instruct
71.99 mistralai/Mixtral-8x7B-Instruct-v0.1
71.48 Qwen/Qwen1.5-14B-Chat
47.27 Qwen/Qwen1.5-4B-Chat
61.26 google/gemma-2b-it
62.2 google/gemma-7b-it
58.09 meta-llama/Llama-2-7b-chat-hf
65.53 meta-llama/Llama-2-13b-chat-hf
75.6 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: -3.26
Family bias: -0.7
mean_score 68.41
range 32.69
std_dev 8.0
CV 0.12
std_dev_top_5 2.28
pearson_arena_elo 0.79
kendall_arena_elo 0.66
pearson_eq_bench 0.78
kendall_eq_bench 0.51
pearson_top_8_arena_elo -0.34
kendall_top_8_arena_elo -0.14
pearson_top_8_eq_bench -0.25
kendall_top_8_eq_bench -0.43
Judgemark 30.94
Cost: $1.30


# gpt-3.5-turbo-0125

Test model scores:
63.98 gpt-4-0125-preview
65.57 claude-3-opus-20240229
63.56 claude-3-sonnet-20240229
64.65 claude-3-haiku-20240307
62.6 mistral-small
63.39 mistral-medium
63.47 mistral-large-2402
59.53 gpt-3.5-turbo-0301
66.71 01-ai/Yi-34B-Chat
63.18 openchat/openchat-3.5-1210
59.15 garage-bAInd/Platypus2-70B-instruct
63.87 mistralai/Mixtral-8x7B-Instruct-v0.1
65.6 Qwen/Qwen1.5-14B-Chat
55.33 Qwen/Qwen1.5-4B-Chat
61.79 google/gemma-2b-it
60.45 google/gemma-7b-it
61.47 meta-llama/Llama-2-7b-chat-hf
60.64 meta-llama/Llama-2-13b-chat-hf
66.01 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: N/A
Self bias: N/A
mean_score 62.68
range 11.38
std_dev 2.8
CV 0.04
std_dev_top_5 0.75
pearson_arena_elo 0.69
kendall_arena_elo 0.56
pearson_eq_bench 0.63
kendall_eq_bench 0.32
pearson_top_8_arena_elo -0.29
kendall_top_8_arena_elo -0.07
pearson_top_8_eq_bench -0.22
kendall_top_8_eq_bench -0.24
Judgemark 17.8
Cost: $0.96


# gpt-4-0125-preview

Test model scores:
71.49 gpt-4-0125-preview
69.69 claude-3-opus-20240229
68.5 claude-3-sonnet-20240229
67.13 claude-3-haiku-20240307
62.79 mistral-small
68.29 mistral-medium
69.12 mistral-large-2402
53.08 gpt-3.5-turbo-0301
66.88 01-ai/Yi-34B-Chat
63.66 openchat/openchat-3.5-1210
55.64 garage-bAInd/Platypus2-70B-instruct
65.89 mistralai/Mixtral-8x7B-Instruct-v0.1
65.5 Qwen/Qwen1.5-14B-Chat
36.49 Qwen/Qwen1.5-4B-Chat
51.98 google/gemma-2b-it
55.01 google/gemma-7b-it
53.79 meta-llama/Llama-2-7b-chat-hf
56.52 meta-llama/Llama-2-13b-chat-hf
68.55 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
Self bias: 1.64
Family bias: -1.49
mean_score 61.58
range 35.0
std_dev 8.88
CV 0.14
std_dev_top_5 1.23
pearson_arena_elo 0.85
kendall_arena_elo 0.81
pearson_eq_bench 0.84
kendall_eq_bench 0.65
pearson_top_8_arena_elo 0.79
kendall_top_8_arena_elo 0.62
pearson_top_8_eq_bench 0.74
kendall_top_8_eq_bench 0.52
Judgemark 68.14
Cost: $16.00`;

function setupDarkModeToggle() {
	var toggle = document.getElementById('darkModeToggle');
	var label = document.getElementById('toggleLabel');

	// Check if a preference is saved in localStorage
	const savedMode = localStorage.getItem('darkModeEnabled');
	if (savedMode) {
		 document.body.classList.toggle('dark-mode', savedMode === 'true');
		 toggle.checked = savedMode === 'true';
		 label.textContent = savedMode === 'true' ? 'Dark' : 'Light';
	}

	toggle.addEventListener('change', function() {
		 document.body.classList.toggle('dark-mode', this.checked);         
		 label.textContent = this.checked ? 'Dark' : 'Light';
		 localStorage.setItem('darkModeEnabled', this.checked); // Save preference
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
	const judgemarkRuns = leaderboardDataJudgemark.split('\n# ').filter(run => run.trim() !== '');

	const maxJudgemarkScore = Math.max(...judgemarkRuns.map(run => {
		const lines = run.split('\n');
		const judgemarkScoreMatch = lines.find(stat => stat.includes('Judgemark'));
		return judgemarkScoreMatch ? parseFloat(judgemarkScoreMatch.split(/\s+/)[1]) : 0;
	}));

	let html = judgemarkRuns.map(judgemarkRun => {
		const lines = judgemarkRun.split('\n');
		const modelName = lines[0].trim();

		const statsStartIndex = lines.findIndex(line => line.includes('Stats:'));
		const statsLines = lines.slice(statsStartIndex + 1);

		const eqbCorrMatches = statsLines.filter(stat => stat.includes('pearson_eq_bench'));
		const eqbCorr = eqbCorrMatches.length > 0 ? (eqbCorrMatches.map(match => parseFloat(match.split(/\s+/)[1])).reduce((sum, val) => sum + val, 0) / eqbCorrMatches.length).toFixed(2) : '-';

		const arenaCorrMatches = statsLines.filter(stat => stat.includes('pearson_arena_elo'));
		const arenaCorr = arenaCorrMatches.length > 0 ? (arenaCorrMatches.map(match => parseFloat(match.split(/\s+/)[1])).reduce((sum, val) => sum + val, 0) / arenaCorrMatches.length).toFixed(2) : '-';

		const costMatch = statsLines.find(stat => stat.includes('Cost:'));
		const cost = costMatch ? '$' + costMatch.split('$')[1].trim() : '-';

		const stdDevMatch = statsLines.find(stat => stat.includes('std_dev'));
		const stdDev = stdDevMatch ? stdDevMatch.split(/\s+/)[1] : '-';

		const judgemarkScoreMatch = statsLines.find(stat => stat.includes('Judgemark'));
		const judgemarkScore = judgemarkScoreMatch ? judgemarkScoreMatch.split(/\s+/)[1] : '-';

		const selfBiasMatch = statsLines.find(stat => stat.includes('Self bias:'));
		const selfBias = selfBiasMatch ? selfBiasMatch.split(':')[1].trim() : 'N/A';

		const familyBiasMatch = statsLines.find(stat => stat.includes('Family bias:'));
		const familyBias = familyBiasMatch ? familyBiasMatch.split(':')[1].trim() : 'N/A';

		// Extract model name without creator
		let displayModelName = modelName;
		let modelNameDisplay = displayModelName.includes('/')
			? `<a href="https://huggingface.co/${displayModelName}" target="_blank">${displayModelName.split('/').pop()}</a>`
			: displayModelName;

		let modelStatsFn = 'results/judgemark/' + displayModelName.replace('/', '__') + '.txt';

		const judgemarkScorePercentage = (parseFloat(judgemarkScore) / maxJudgemarkScore) * 100;

		const judgemarkScoreBar = `
			<div class="score-bar-container">
				<div class="judgemark-score-bar" style="width: ${judgemarkScorePercentage}%"></div>
				<span class="score-text">${judgemarkScore}</span>
			</div>
		`;

		const selfBiasLink = selfBias !== 'N/A' ? `<a href="./results/judgemark_bias/judgemark_scatter_${displayModelName}.png">${selfBias}</a>` : selfBias;
		const familyBiasLink = familyBias !== 'N/A' ? `<a href="./results/judgemark_bias/judgemark_scatter_${displayModelName}.png">${familyBias}</a>` : familyBias;

		return `<tr>
			<td>${modelNameDisplay}</td>
			<td>${eqbCorr}</td>
			<td>${arenaCorr}</td>
			<td>${cost}</td>
			<td>${stdDev}</td>
			<td>${selfBiasLink}</td>
			<td>${familyBiasLink}</td>
			<td data-order="${judgemarkScore}">${judgemarkScoreBar}</td>
			<td><a href="${modelStatsFn}">Stats</a></td>
			</tr>`;
	}).join('');

	document.getElementById('leaderboardBody').innerHTML = html;
	initializeDataTable();
}

function initializeDataTable() {
	let table = $('#judgemark-leaderboard').DataTable({
		"order": [[7, "desc"]], // Default sorting
		"pageLength": 100,
		"lengthMenu": [50, 100, 200, 1000],
		"language": {
			"lengthMenu": "Show _MENU_"
		},
		"columnDefs": [
			{
					targets: [1, 2, 3, 4, 5, 6],
					className: 'middle-stats'
			},
			{ "targets": [7], "orderSequence": ["desc", "asc"] }, // For Judgemark score column: sort desc first
			{ "targets": [6,5,4, 3], "orderSequence": ["asc", "desc"] }, // For Std. Dev. and Cost columns: sort asc first
		],
		"dom": "<'d-flex flex-column flex-md-row justify-content-between'<'#toggleMiddleStats.d-block.d-sm-none'><'dataTables_length'l><'dataTables_filter'f>>" +
            "<'row'<'col-12'tr>>" +
            "<'row'<'col-md-5'i><'col-md-7'p>>",
		"drawCallback": function(settings) {
			const api = this.api();
			const rows = api.rows({ page: 'current' }).nodes();
			const sortedColumnIndex = api.order()[0][0];

			rows.to$().find('.judgemark-score-bar').css('display', 'block');
		}
	});

	let middleStatsExpanded = false;

    function collapseMiddleColumns() {
        if (window.innerWidth < 575 && !middleStatsExpanded) {
            $('#judgemark-leaderboard tr').each(function () {
                $(this).find('th, td').slice(1, -2).wrapAll('<div class="collapsed-columns"></div>');
            });
            $('#toggleMiddleStats').text('Expand Details');
        } else {
            $('#judgemark-leaderboard tr').each(function () {
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

document.addEventListener('DOMContentLoaded', function() {
	// Always execute
	displayEncodedEmail();

	// Conditional execution based on the presence of elements
	if (document.getElementById('judgemark-leaderboard')) {
		loadLeaderboardData(); // Only load leaderboard data if the leaderboard element exists
	}

	// This checks if the system theme preference should be applied, which is common functionality
	applySystemTheme();
	setupDarkModeToggle();
	
});
