/* judgemark-v4.js */

const leaderboardDataJudgemarkV4 = `
model,score,ci_low,ci_high,cost,chart
claude-opus-4-7,0.839612,0.804731,0.894923,$48.75,results/judgemark-v4/charts/multichart_claude-opus-4-7_seed_temp0_prompt_reasoning_trial_01__claude-opus-4-7.png
claude-sonnet-4-6,0.821468,0.782343,0.882974,$23.36,results/judgemark-v4/charts/multichart_claude-sonnet-4-6_seed_temp0_prompt_reasoning_trial_01__claude-sonnet-4-6.png
gemini-3.1-pro-preview,0.786853,0.738905,0.851353,$23.07,results/judgemark-v4/charts/multichart_google__gemini-3_1-pro-preview_seed_temp0_prompt_reasoning_trial_01__google_gemini-3_1-pro-preview.png
gpt-5.4,0.720762,0.684801,0.781918,$15.24,results/judgemark-v4/charts/multichart_gpt-5_4_seed_temp0_prompt_reasoning_trial_01__openai_gpt-5_4.png
Qwen/Qwen3.5-27B,0.605331,0.567596,0.680937,$1.76,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-27B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-27b.png
moonshotai/Kimi-K2.6,0.572626,0.547558,0.633247,$6.51,results/judgemark-v4/charts/multichart_kimi-k2_6_seed_temp0_prompt_reasoning_trial_01__kimi-k2_6.png
Qwen/Qwen3.5-397B-A17B,0.542445,0.485310,0.620456,$3.20,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-397B-A17B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-397b-a17b.png
Qwen/Qwen3.6-27B,0.533686,0.512794,0.593391,$3.56,results/judgemark-v4/charts/multichart_qwen__qwen3_6-27b_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-27b.png
deepseek-ai/DeepSeek-V4-Pro,0.471182,0.416774,0.563053,$2.94,results/judgemark-v4/charts/multichart_deepseek__deepseek-v4-pro_seed_temp0_prompt_reasoning_trial_01__deepseek_deepseek-v4-pro.png
gemini-3-flash-preview,0.461171,0.424996,0.536712,$3.14,results/judgemark-v4/charts/multichart_gemini-3-flash-preview_seed_temp0_prompt_reasoning_trial_01__google_gemini-3-flash-preview.png
qwen3.6-max-preview,0.450786,0.403048,0.542877,$7.36,results/judgemark-v4/charts/multichart_qwen__qwen3_6-max-preview_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-max-preview.png
Qwen/Qwen3.6-35B-A3B,0.326547,0.305251,0.403566,$1.89,results/judgemark-v4/charts/multichart_qwen__qwen3_6-35b-a3b_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-35b-a3b.png
Qwen/Qwen3.5-9B,0.324392,0.288405,0.415527,$0.56,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-9B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-9b.png
qwen3.6-flash,0.311761,0.276205,0.400733,$1.74,results/judgemark-v4/charts/multichart_qwen__qwen3_6-flash_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-flash.png
gpt-oss-120b,0.154748,0.145411,0.232810,$0.62,results/judgemark-v4/charts/multichart_openai__gpt-oss-120b_seed_temp0_prompt_reasoning_trial_01__openai_gpt-oss-120b.png
`

function setupDarkModeToggle() {
  const toggle = document.getElementById('darkModeToggle');
  const label = document.getElementById('toggleLabel');
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
  const encodedUser = '&#99;&#111;&#110;&#116;&#97;&#99;&#116;';
  const encodedDomain = '&#101;&#113;&#98;&#101;&#110;&#99;&#104;&#46;&#99;&#111;&#109;';
  const emailElement = document.getElementById('email');
  emailElement.innerHTML = decodeHtmlEntities(encodedUser + '&#64;' + encodedDomain);
  const emailAddress = emailElement.innerText;
  emailElement.innerHTML = `<a href="mailto:${emailAddress}">Contact</a>`;
}

function decodeHtmlEntities(encodedString) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

function parseCsvLine(line) {
  const cells = [];
  let cell = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === '"' && inQuotes && next === '"') {
      cell += '"';
      i++;
    } else if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      cells.push(cell);
      cell = '';
    } else {
      cell += ch;
    }
  }
  cells.push(cell);
  return cells;
}

function modelLink(model) {
  if (model.includes('/') && !model.startsWith('openrouter/')) {
    const repo = model.split(':')[0];
    return `<a href="https://huggingface.co/${repo}" target="_blank" rel="noopener noreferrer">${model}</a>`;
  }
  return model;
}

let jm4Zoom = 1;

function setJm4Zoom(nextZoom) {
  jm4Zoom = Math.max(0.35, Math.min(3, nextZoom));
  const image = document.getElementById('jm4ModalImage');
  const reset = document.getElementById('jm4ZoomReset');
  if (image) {
    image.style.transform = `scale(${jm4Zoom})`;
    image.style.marginBottom = `${(jm4Zoom - 1) * image.offsetHeight}px`;
  }
  if (reset) {
    reset.textContent = `${Math.round(jm4Zoom * 100)}%`;
  }
}

function openJm4Chart(src, title) {
  const modal = document.getElementById('jm4ChartModal');
  const image = document.getElementById('jm4ModalImage');
  const titleEl = document.getElementById('jm4ModalTitle');
  const viewport = document.getElementById('jm4ModalViewport');
  image.src = src;
  image.alt = `${title} Judgemark v4 multichart`;
  titleEl.textContent = title;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  viewport.scrollTop = 0;
  viewport.scrollLeft = 0;
  setJm4Zoom(window.innerWidth < 700 ? 0.85 : 1);
}

function closeJm4Chart() {
  const modal = document.getElementById('jm4ChartModal');
  const image = document.getElementById('jm4ModalImage');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  image.removeAttribute('src');
}

function setupJm4Modal() {
  const modal = document.getElementById('jm4ChartModal');
  const viewport = document.getElementById('jm4ModalViewport');
  document.getElementById('jm4ModalClose').addEventListener('click', closeJm4Chart);
  document.getElementById('jm4ZoomIn').addEventListener('click', () => setJm4Zoom(jm4Zoom + 0.2));
  document.getElementById('jm4ZoomOut').addEventListener('click', () => setJm4Zoom(jm4Zoom - 0.2));
  document.getElementById('jm4ZoomReset').addEventListener('click', () => setJm4Zoom(1));
  modal.addEventListener('click', event => {
    if (event.target === modal) closeJm4Chart();
  });
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeJm4Chart();
    if (event.key === '+' || event.key === '=') setJm4Zoom(jm4Zoom + 0.2);
    if (event.key === '-') setJm4Zoom(jm4Zoom - 0.2);
  });

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let scrollTop = 0;
  viewport.addEventListener('pointerdown', event => {
    dragging = true;
    viewport.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    scrollLeft = viewport.scrollLeft;
    scrollTop = viewport.scrollTop;
  });
  viewport.addEventListener('pointermove', event => {
    if (!dragging) return;
    viewport.scrollLeft = scrollLeft - (event.clientX - startX);
    viewport.scrollTop = scrollTop - (event.clientY - startY);
  });
  viewport.addEventListener('pointerup', () => {
    dragging = false;
  });
  viewport.addEventListener('pointercancel', () => {
    dragging = false;
  });
}

function loadJudgemarkV4() {
  const lines = leaderboardDataJudgemarkV4.trim().split('\n').filter(Boolean);
  if (lines.length <= 1) {
    document.getElementById('leaderboardBodyV4').innerHTML =
      '<tr><td colspan="4" class="text-center">No Judgemark v4 results yet.</td></tr>';
    return;
  }

  const rows = lines.slice(1).map(line => {
    const [model, score, ciLow, ciHigh, cost, chart] = parseCsvLine(line);
    return {
      model,
      score: parseFloat(score),
      scoreText: score,
      ciLow,
      ciHigh,
      cost,
      chart
    };
  }).filter(row => !Number.isNaN(row.score));

  const axisMax = Math.max(
    ...rows.flatMap(row => [
      row.score,
      parseFloat(row.ciHigh),
      parseFloat(row.ciLow)
    ]).filter(Number.isFinite),
    1
  );
  const html = rows.map(row => {
    const ciLow = parseFloat(row.ciLow);
    const ciHigh = parseFloat(row.ciHigh);
    const pct = Math.max(4, Math.min(100, (row.score / axisMax) * 100));
    const score100 = (row.score * 100).toFixed(2);
    const hasCi = Number.isFinite(ciLow) && Number.isFinite(ciHigh);
    const ciLeftPct = hasCi ? Math.max(0, Math.min(100, (ciLow / axisMax) * 100)) : 0;
    const ciRightPct = hasCi ? Math.max(0, Math.min(100, (ciHigh / axisMax) * 100)) : 0;
    const ciWidthPct = Math.max(0, ciRightPct - ciLeftPct);
    const ciTitle = hasCi
      ? `Judgemark score ${score100}; 95% CI ${(ciLow * 100).toFixed(2)} - ${(ciHigh * 100).toFixed(2)}`
      : `Judgemark score ${score100}`;
    const chartLink = row.chart
      ? `<button type="button" class="btn btn-link chart-link p-0" data-chart="${row.chart}" data-chart-title="${row.model}">Multichart</button>`
      : '-';
    return `
      <tr>
        <td>${modelLink(row.model)}</td>
        <td data-order="${row.score}">
          <div class="score-bar-container jm4-score-cell" title="${ciTitle}" aria-label="${ciTitle}">
            <span class="jm4-score-text">${score100}</span>
            <div class="jm4-score-track">
              <div class="judgemark-score-bar" style="width: ${pct}%; display:block;"></div>
              ${hasCi ? `<div class="error-bar" style="left: ${ciLeftPct.toFixed(2)}%; width: ${ciWidthPct.toFixed(2)}%;"></div>` : ''}
            </div>
          </div>
        </td>
        <td>${row.cost || '-'}</td>
        <td>${chartLink}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('leaderboardBodyV4').innerHTML = html;
  document.querySelectorAll('.chart-link[data-chart]').forEach(button => {
    button.addEventListener('click', () => openJm4Chart(button.dataset.chart, button.dataset.chartTitle));
  });
  $('#judgemark-leaderboard-v4').DataTable({
    order: [[1, 'desc']],
    paging: false,
    searching: false,
    info: false,
    columnDefs: [
      { targets: [1], orderSequence: ['desc', 'asc'] },
      { targets: [3], orderable: false }
    ]
  });
}

document.addEventListener('DOMContentLoaded', function() {
  displayEncodedEmail();
  applySystemTheme();
  setupDarkModeToggle();
  setupJm4Modal();
  if (document.getElementById('judgemark-leaderboard-v4')) {
    loadJudgemarkV4();
  }
});
