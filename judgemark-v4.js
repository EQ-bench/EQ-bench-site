/* judgemark-v4.js */

const leaderboardDataJudgemarkV4 = `
model,score,ci_low,ci_high,cost,chart
claude-opus-4-6,0.907256,0.867410,0.967750,$39.37,results/judgemark-v4/charts/multichart_claude-opus-4-6_seed_temp0_prompt_reasoning_trial_01__claude-opus-4-6.png
gpt-5.5,0.878134,0.853332,0.924747,$30.44,results/judgemark-v4/charts/multichart_openai__gpt-5_5_seed_temp0_prompt_reasoning_trial_01__openai_gpt-5_5.png
claude-opus-4-7,0.839612,0.804731,0.894923,$48.75,results/judgemark-v4/charts/multichart_claude-opus-4-7_seed_temp0_prompt_reasoning_trial_01__claude-opus-4-7.png
claude-sonnet-4-6,0.821468,0.782343,0.882974,$23.36,results/judgemark-v4/charts/multichart_claude-sonnet-4-6_seed_temp0_prompt_reasoning_trial_01__claude-sonnet-4-6.png
gemini-3.1-pro-preview,0.786853,0.738905,0.851353,$23.07,results/judgemark-v4/charts/multichart_google__gemini-3_1-pro-preview_seed_temp0_prompt_reasoning_trial_01__google_gemini-3_1-pro-preview.png
claude-opus-4-8,0.779576,0.743971,0.838340,$50.42,results/judgemark-v4/charts/multichart_claude-opus-4-8_seed_temp0_prompt_reasoning_trial_01__claude-opus-4-8.png
google/gemma-4-31B-it,0.723051,0.680818,0.793728,$0.82,results/judgemark-v4/charts/multichart_google__gemma-4-31b-it_seed_temp0_prompt_reasoning_trial_01__google_gemma-4-31b-it.png
gpt-5.4,0.720762,0.684801,0.781918,$15.24,results/judgemark-v4/charts/multichart_gpt-5_4_seed_temp0_prompt_reasoning_trial_01__openai_gpt-5_4.png
zai-org/GLM-5.1,0.672081,0.623536,0.740827,$8.06,results/judgemark-v4/charts/multichart_z-ai__glm-5_1_seed_temp0_prompt_reasoning_trial_01__z-ai_glm-5_1.png
Qwen/Qwen3.5-27B,0.605331,0.567596,0.680937,$1.76,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-27B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-27b.png
gemini-3.1-flash-lite-preview,0.588214,0.550091,0.658023,$1.54,results/judgemark-v4/charts/multichart_gemini-3_1-flash-lite-preview_seed_temp0_prompt_reasoning_trial_01__google_gemini-3_1-flash-lite-preview.png
XiaomiMiMo/MiMo-V2.5-Pro,0.579018,0.539689,0.650709,$5.79,results/judgemark-v4/charts/multichart_xiaomi__mimo-v2_5-pro_seed_temp0_prompt_reasoning_trial_01__xiaomi_mimo-v2_5-pro.png
moonshotai/Kimi-K2.6,0.572626,0.547558,0.633247,$6.51,results/judgemark-v4/charts/multichart_kimi-k2_6_seed_temp0_prompt_reasoning_trial_01__kimi-k2_6.png
Qwen/Qwen3.5-397B-A17B,0.542445,0.485310,0.620456,$3.20,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-397B-A17B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-397b-a17b.png
Qwen/Qwen3.6-27B,0.533686,0.512794,0.593391,$3.56,results/judgemark-v4/charts/multichart_qwen__qwen3_6-27b_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-27b.png
google/gemma-4-26B-A4B-it,0.530234,0.484937,0.608299,$0.61,results/judgemark-v4/charts/multichart_google__gemma-4-26b-a4b-it_seed_temp0_prompt_reasoning_trial_01__google_gemma-4-26b-a4b-it.png
grok-4.3,0.495693,0.457153,0.573230,$9.71,results/judgemark-v4/charts/multichart_x-ai__grok-4_3_seed_temp0_prompt_reasoning_trial_01__x-ai_grok-4_3.png
deepseek-ai/DeepSeek-V4-Pro,0.471182,0.416774,0.563053,$2.94,results/judgemark-v4/charts/multichart_deepseek__deepseek-v4-pro_seed_temp0_prompt_reasoning_trial_01__deepseek_deepseek-v4-pro.png
gemini-3-flash-preview,0.461171,0.424996,0.536712,$3.14,results/judgemark-v4/charts/multichart_gemini-3-flash-preview_seed_temp0_prompt_reasoning_trial_01__google_gemini-3-flash-preview.png
qwen3.6-max-preview,0.450786,0.403048,0.542877,$7.36,results/judgemark-v4/charts/multichart_qwen__qwen3_6-max-preview_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-max-preview.png
Qwen/Qwen3.5-35B-A3B,0.405004,0.370493,0.477875,$1.38,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-35B-A3B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-35b-a3b.png
deepseek-ai/DeepSeek-V4-Flash,0.367862,0.340758,0.450511,$0.78,results/judgemark-v4/charts/multichart_deepseek__deepseek-v4-flash_seed_temp0_prompt_reasoning_trial_01__deepseek_deepseek-v4-flash.png
Qwen/Qwen3.6-35B-A3B,0.326547,0.305251,0.403566,$1.89,results/judgemark-v4/charts/multichart_qwen__qwen3_6-35b-a3b_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-35b-a3b.png
Qwen/Qwen3.5-9B,0.324392,0.288405,0.415527,$0.56,results/judgemark-v4/charts/multichart_Qwen__Qwen3_5-9B_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_5-9b.png
qwen3.6-flash,0.311761,0.276205,0.400733,$1.74,results/judgemark-v4/charts/multichart_qwen__qwen3_6-flash_seed_temp0_prompt_reasoning_trial_01__qwen_qwen3_6-flash.png
stepfun-ai/Step-3.7-Flash,0.280475,0.262261,0.365120,$3.03,results/judgemark-v4/charts/multichart_stepfun__step-3_7-flash_seed_temp0_prompt_reasoning_trial_01__stepfun_step-3_7-flash.png
gpt-5.4-nano,0.275388,0.247464,0.363286,$1.25,results/judgemark-v4/charts/multichart_gpt-5_4-nano_seed_temp0_prompt_reasoning_trial_01__openai_gpt-5_4-nano.png
gpt-5.4-mini,0.273221,0.248656,0.357704,$4.56,results/judgemark-v4/charts/multichart_gpt-5_4-mini_seed_temp0_prompt_reasoning_trial_01__openai_gpt-5_4-mini.png
mistralai/Mistral-Small-4-119B-2603,0.164969,0.150587,0.255205,$0.92,results/judgemark-v4/charts/multichart_mistralai__Mistral-Small-4-119B-2603_seed_temp0_prompt_reasoning_trial_01__mistralai_mistral-small-2603.png
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
    if (jm4ParetoRendered) renderJm4ParetoPlot();
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

let jm4Rows = [];
let jm4ParetoRendered = false;
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

function parseJm4Rows() {
  const lines = leaderboardDataJudgemarkV4.trim().split('\n').filter(Boolean);
  if (lines.length <= 1) return [];

  return lines.slice(1).map(line => {
    const [model, score, ciLow, ciHigh, cost, chart] = parseCsvLine(line);
    const parsedCost = parseFloat(String(cost || '').replace(/[^0-9.]/g, ''));
    return {
      model,
      score: parseFloat(score),
      scoreText: score,
      ciLow,
      ciHigh,
      cost,
      costValue: parsedCost,
      chart
    };
  }).filter(row => !Number.isNaN(row.score));
}

function computeJm4ParetoRows(rows) {
  const candidates = rows.filter(row => Number.isFinite(row.costValue) && row.costValue > 0);
  return candidates.map(row => {
    const dominated = candidates.some(other =>
      other !== row &&
      other.score >= row.score &&
      other.costValue <= row.costValue &&
      (other.score > row.score || other.costValue < row.costValue)
    );
    return { ...row, isFrontier: !dominated };
  });
}

function formatJm4Cost(value) {
  if (!Number.isFinite(value)) return '';
  return `$${value.toFixed(value < 1 ? 2 : 2)}`;
}

function plotTheme() {
  const dark = document.body.classList.contains('dark-mode');
  return {
    dark,
    paper: dark ? '#191919' : '#f8f4ee',
    plot: dark ? '#141414' : '#fffaf3',
    text: dark ? '#f3eee8' : '#332b25',
    grid: dark ? 'rgba(255,255,255,0.13)' : 'rgba(80,70,60,0.16)',
    other: dark ? 'rgba(129, 184, 210, 0.76)' : 'rgba(72, 132, 158, 0.72)',
    otherText: dark ? 'rgba(243, 238, 232, 0.48)' : 'rgba(51, 43, 37, 0.50)',
    frontier: dark ? 'rgba(240, 143, 101, 1)' : 'rgba(188, 83, 51, 1)',
    frontierLine: dark ? 'rgba(240, 143, 101, 0.78)' : 'rgba(188, 83, 51, 0.72)'
  };
}

function renderJm4ParetoPlot() {
  const plot = document.getElementById('jm4ParetoPlot');
  if (!plot || typeof Plotly === 'undefined') return;

  const rows = computeJm4ParetoRows(jm4Rows);
  const frontier = rows.filter(row => row.isFrontier).sort((a, b) => a.costValue - b.costValue);
  const others = rows.filter(row => !row.isFrontier);
  const theme = plotTheme();

  if (!rows.length) {
    plot.innerHTML = '<div class="text-center p-4">No cost-bearing Judgemark v4 results yet.</div>';
    return;
  }

  const costs = rows.map(row => row.costValue);
  const minCost = Math.min(...costs);
  const maxCost = Math.max(...costs);
  const mobile = window.innerWidth < 700;
  const frontierTextPositions = frontier.map((row, index) => {
    if (row.costValue <= minCost * 1.8) return 'middle right';
    if (row.costValue >= maxCost / 2.5) return index % 2 ? 'bottom left' : 'top left';
    return 'top center';
  });
  const otherTextPositions = others.map(row => {
    if (row.costValue <= minCost * 1.8) return 'middle right';
    if (row.costValue >= maxCost / 2.5) return 'middle left';
    return 'top center';
  });
  const hoverTemplate = '<b>%{text}</b><br>Cost: $%{x:.2f}<br>Score: %{y:.2f}<extra></extra>';
  const traces = [
    {
      x: others.map(row => row.costValue),
      y: others.map(row => row.score * 100),
      text: others.map(row => row.model),
      customdata: others.map(row => row.chart),
      type: 'scatter',
      mode: 'markers',
      name: 'Other Models',
      marker: {
        color: theme.other,
        size: 9,
        line: { color: theme.dark ? '#283442' : '#ffffff', width: 1 }
      },
      hovertemplate: hoverTemplate
    },
    {
      x: frontier.map(row => row.costValue),
      y: frontier.map(row => row.score * 100),
      type: 'scatter',
      mode: 'lines',
      name: 'Frontier Line',
      line: { color: theme.frontierLine, width: 2, dash: 'dash' },
      hoverinfo: 'skip'
    },
    {
      x: frontier.map(row => row.costValue),
      y: frontier.map(row => row.score * 100),
      text: frontier.map(row => row.model),
      customdata: frontier.map(row => row.chart),
      type: 'scatter',
      mode: 'markers+text',
      name: 'Pareto Frontier',
      textposition: frontierTextPositions,
      textfont: { color: theme.text, size: 11 },
      marker: {
        symbol: 'diamond',
        size: 13,
        color: theme.frontier,
        line: { color: theme.dark ? '#f5eadf' : '#fff8ef', width: 1 }
      },
      hovertemplate: hoverTemplate
    }
  ];
  if (!mobile) {
    traces.push({
      x: others.map(row => row.costValue),
      y: others.map(row => row.score * 100),
      text: others.map(row => row.model),
      type: 'scatter',
      mode: 'text',
      name: 'Other Model Labels',
      showlegend: false,
      textposition: otherTextPositions,
      textfont: { color: theme.otherText, size: 10 },
      hoverinfo: 'skip'
    });
  }

  const tickVals = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100]
    .filter(value => value >= minCost * 0.75 && value <= maxCost * 1.35);

  const layout = {
    title: {
      text: mobile ? '' : 'Judgemark v4 Score vs Cost',
      font: { color: theme.text, size: mobile ? 17 : 22 }
    },
    paper_bgcolor: theme.paper,
    plot_bgcolor: theme.plot,
    font: { color: theme.text },
    hovermode: 'closest',
    legend: {
      orientation: 'h',
      yanchor: 'bottom',
      y: 1.02,
      xanchor: 'right',
      x: 1
    },
    margin: mobile ? { l: 48, r: 18, t: 48, b: 58 } : { l: 62, r: 30, t: 82, b: 66 },
    xaxis: {
      title: { text: 'Benchmark Cost (USD)' },
      type: 'log',
      gridcolor: theme.grid,
      zerolinecolor: theme.grid,
      showexponent: 'none',
      tickvals: tickVals,
      ticktext: tickVals.map(formatJm4Cost)
    },
    yaxis: {
      title: { text: 'Judgemark Score' },
      gridcolor: theme.grid,
      zerolinecolor: theme.grid,
      rangemode: 'tozero',
      ticksuffix: ''
    }
  };

  Plotly.react(plot, traces, layout, {
    responsive: true,
    displaylogo: false,
    modeBarButtonsToRemove: ['lasso2d', 'select2d']
  });
  jm4ParetoRendered = true;
}

function setupJm4ViewSwitch() {
  const leaderboardLink = document.getElementById('jm4LeaderboardLink');
  const paretoLink = document.getElementById('jm4ParetoLink');
  const leaderboardView = document.getElementById('jm4LeaderboardView');
  const paretoView = document.getElementById('jm4ParetoView');
  if (!leaderboardLink || !paretoLink || !leaderboardView || !paretoView) return;

  function showView(view) {
    const showPareto = view === 'pareto';
    leaderboardView.hidden = showPareto;
    paretoView.hidden = !showPareto;
    leaderboardLink.classList.toggle('active', !showPareto);
    paretoLink.classList.toggle('active', showPareto);
    if (showPareto) {
      window.requestAnimationFrame(renderJm4ParetoPlot);
    }
  }

  leaderboardLink.addEventListener('click', event => {
    event.preventDefault();
    history.replaceState(null, '', '#leaderboard');
    showView('leaderboard');
  });
  paretoLink.addEventListener('click', event => {
    event.preventDefault();
    history.replaceState(null, '', '#pareto');
    showView('pareto');
  });

  window.addEventListener('hashchange', () => {
    showView(location.hash === '#pareto' ? 'pareto' : 'leaderboard');
  });
  showView(location.hash === '#pareto' ? 'pareto' : 'leaderboard');
}

function loadJudgemarkV4() {
  jm4Rows = parseJm4Rows();
  if (jm4Rows.length === 0) {
    document.getElementById('leaderboardBodyV4').innerHTML =
      '<tr><td colspan="4" class="text-center">No Judgemark v4 results yet.</td></tr>';
    return;
  }

  const axisMax = Math.max(
    ...jm4Rows.flatMap(row => [
      row.score,
      parseFloat(row.ciHigh),
      parseFloat(row.ciLow)
    ]).filter(Number.isFinite),
    1
  );
  const html = jm4Rows.map(row => {
    const ciLow = parseFloat(row.ciLow);
    const ciHigh = parseFloat(row.ciHigh);
    const pct = Math.max(4, Math.min(100, (row.score / axisMax) * 100));
    const score100 = (row.score * 100).toFixed(2);
    const hasCi = Number.isFinite(ciLow) && Number.isFinite(ciHigh);
    const ciWidthPct = hasCi ? Math.max(0, ((ciHigh - ciLow) / axisMax) * 100) : 0;
    const scorePct = Math.max(0, Math.min(100, (row.score / axisMax) * 100));
    const ciLeftPct = hasCi ? Math.max(0, Math.min(100 - ciWidthPct, scorePct - (ciWidthPct / 2))) : 0;
    const ciTitle = hasCi
      ? `Judgemark score ${score100}; 95% CI ${(ciLow * 100).toFixed(2)} - ${(ciHigh * 100).toFixed(2)}`
      : `Judgemark score ${score100}`;
    const chartLink = row.chart
      ? `<button type="button" class="btn btn-link chart-link p-0" data-chart="${row.chart}" data-chart-title="${row.model}">Chart</button>`
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
  setupJm4ViewSwitch();
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
