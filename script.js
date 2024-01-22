document.addEventListener('DOMContentLoaded', function() {
	loadLeaderboardData();
	displayEncodedEmail();
	setupDarkModeToggle();
	applySystemTheme();
});

function setupDarkModeToggle() {
	var toggle = document.getElementById('darkModeToggle');
	var label = document.getElementById('toggleLabel');
	
	toggle.addEventListener('change', function() {
		 document.body.classList.toggle('dark-mode', this.checked);
		 label.textContent = this.checked ? 'Dark' : 'Light';
	});
}

function applySystemTheme() {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const toggle = document.getElementById('darkModeToggle');
	const label = document.getElementById('toggleLabel');

	if (prefersDarkMode) {
		 document.body.classList.add('dark-mode');
		 toggle.checked = true;
		 label.textContent = 'Dark';
	} else {
		 label.textContent = 'Light';
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


function loadLeaderboardData() {
	fetch('leaderboard.csv?time=' + new Date().getTime())
		.then(response => response.text())
		.then(text => {
			let rows = text.split('\n').filter(row => row.trim() !== '').slice(1);
			let maxScore = Math.max(...rows.map(row => parseFloat(row.split(',')[1]))); // Get the highest score for reference
			let html = rows.map(row => {
				let [modelName, score, parameters] = row.split(',');
				let scorePercentage = (parseFloat(score) / maxScore) * 100; // Calculate score as a percentage of maxScore
				let modelNameDisplay = modelName.includes('/') 
								? `<a href="https://huggingface.co/${modelName}" target="_blank">${modelName}</a>` 
								: modelName;
				let scoreBar = `<div class="score-bar-container">
								<div class="score-bar" style="width: ${scorePercentage}%"></div>
								<div class="score-text">${score}</div>
							 </div>`;
							 return `<tr><td>${modelNameDisplay}</td><td>${parameters}</td><td>${scoreBar}</td></tr>`;
			}).join('');
			document.getElementById('leaderboardBody').innerHTML = html;
			initializeDataTable();              
		});
}

function initializeDataTable() {
	$('#leaderboard').DataTable({
		 "order": [[2, "desc"]],
		 "pageLength": 100,
		 "lengthMenu": [50, 100, 200, 1000],
		 "language": {
			  "lengthMenu": "Show _MENU_"
		 },
		 "dom":
			  "<'d-flex flex-column flex-md-row justify-content-between'<'dataTables_length'l><'dataTables_filter'f>>" +
			  "<'row'<'col-12'tr>>" +
			  "<'row'<'col-md-5'i><'col-md-7'p>>",
	});
}