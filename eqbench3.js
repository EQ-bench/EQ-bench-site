//
//  eqbench3.js
//  (Adapted from creative_writing.js v1.0.6 for EQ-Bench 3)
//  (Version 1.0.2 - Added Elo error bars)
//


leaderboardDataEQBench3 = `model_name,elo_norm,rubric_0_100,humanlike,safe,assertive,social_iq,warm,analytical,insightful,empathy,compliant,moral,pragmatic,ci_low_norm,ci_high_norm
claude-fable-5,2096.4,76.8,13.88,11.76,13.60,15.12,14.27,18.43,16.47,16.11,10.97,6.88,15.26,2017.7,2175.0
claude-opus-4-8,2057.8,74.2,14.56,11.20,13.32,14.94,14.15,17.82,15.76,15.60,10.73,7.06,14.94,1996.3,2119.2
claude-opus-4-7,1914.0,73.4,14.59,11.26,13.31,14.97,13.98,17.85,15.63,15.76,11.37,6.76,14.93,1864.3,1963.6
claude-opus-4-6,1712.4,70.3,13.09,11.90,13.77,13.99,13.93,17.69,15.17,15.38,10.47,8.40,14.13,1680.7,1744.1
claude-sonnet-4-6,1709.8,68.4,12.55,11.19,12.12,13.42,13.45,17.54,14.74,15.15,10.01,6.42,13.10,1673.2,1746.5
HiveLabsAI/hivemind-32b-preview,1603.5,65.1,12.96,11.35,12.21,13.20,13.93,17.03,13.85,14.92,10.73,7.58,12.97,1559.3,1647.6
zai-org/GLM-5.2,1563.2,67.3,13.33,11.05,13.46,13.49,13.11,17.33,14.51,14.76,10.50,8.53,13.42,1515.8,1610.6
deepseek-ai/DeepSeek-V4-Pro,1555.1,77.6,13.63,12.58,12.44,14.21,14.04,17.58,17.29,15.73,11.31,8.50,15.04,1522.9,1587.2
gpt-5.5,1553.9,77.4,11.71,14.57,14.63,14.53,13.78,18.36,16.43,15.91,11.57,7.28,15.62,1518.5,1589.3
gemini-3-pro-preview,1552.8,62.3,12.26,10.85,13.54,12.41,11.45,17.38,13.54,13.00,10.32,9.62,12.34,1523.5,1582.1
openrouter/horizon-alpha,1551.7,63.8,8.30,13.61,12.04,11.49,12.88,18.14,13.83,13.37,12.23,6.19,12.84,1523.3,1580.1
moonshotai/Kimi-K2.6,1548.3,63.5,11.31,11.77,14.29,11.54,11.90,17.78,14.43,13.70,10.63,12.39,11.18,1513.5,1583.0
moonshotai/Kimi-K2-Instruct,1548.1,56.3,10.70,10.95,11.69,11.12,13.05,17.10,12.77,13.74,10.36,8.43,10.86,1520.0,1576.2
gpt-5.2,1544.1,72.2,10.69,14.51,14.33,13.73,13.04,18.42,15.42,14.94,11.67,7.03,14.85,1515.7,1572.5
zai-org/GLM-5.1,1538.6,64.5,12.68,10.55,12.65,12.17,12.77,16.63,14.11,14.21,9.52,9.88,12.12,1503.5,1573.7
gpt-5.4,1536.7,75.6,11.63,13.66,14.10,14.27,13.24,18.40,16.20,15.49,11.18,7.08,15.03,1500.7,1572.8
claude-sonnet-4.5,1534.6,62.2,11.95,11.21,14.18,11.65,11.82,17.22,13.79,13.43,10.47,10.81,11.77,1503.7,1565.5
moonshotai/Kimi-K2.5,1530.2,55.2,10.06,11.69,13.96,9.98,11.25,17.51,12.64,12.42,9.69,12.26,9.80,1500.2,1560.2
gemini-3.1-pro-preview,1527.2,64.7,11.80,11.49,12.81,12.62,13.65,17.44,13.85,14.01,10.97,9.40,12.21,1500.2,1554.2
gpt-5.1-2025-11-13,1526.6,69.8,11.29,12.53,12.71,13.85,14.24,18.01,14.66,15.35,11.97,6.63,14.32,1497.7,1555.5
gemini-2.5-pro-preview-06-05,1522.9,59.8,11.75,9.44,9.85,12.54,14.15,17.11,12.62,14.28,11.71,7.46,12.08,1491.1,1554.8
claude-opus-4-5-20251101,1521.9,68.9,13.09,11.33,12.21,13.93,14.35,16.96,14.60,15.53,11.21,7.03,13.88,1490.1,1553.6
gpt-5-chat-latest-2025-08-07,1510.8,62.9,10.48,10.28,9.13,12.16,13.30,17.15,13.10,13.58,12.33,5.37,12.13,1487.7,1533.9
deepseek-ai/DeepSeek-V4-Flash,1503.6,59.5,11.88,9.36,10.98,11.76,13.71,15.97,12.68,13.77,11.35,8.37,11.25,1470.2,1536.9
o3,1500.0,63.2,9.94,12.46,10.99,12.41,13.81,17.62,13.54,14.29,12.01,6.01,12.87,1471.4,1528.6
zai-org/GLM-5,1495.0,63.4,13.04,10.29,11.82,13.03,13.72,16.45,13.61,14.56,10.38,8.38,12.62,1460.2,1529.6
google/gemma-4-31B-it,1463.5,57.5,11.28,10.40,13.15,12.01,10.95,17.06,12.18,12.38,10.15,10.10,11.71,1434.0,1493.0
zai-org/GLM-4.7,1462.6,56.3,11.43,9.87,11.98,11.06,11.85,16.46,12.29,12.33,10.15,9.63,11.07,1432.5,1492.7
google/gemma-4-26B-A4B-it,1454.6,56.3,10.18,10.31,11.61,11.65,12.54,17.24,11.97,12.96,11.60,9.49,11.36,1415.9,1493.3
Qwen/Qwen3.5-397B-A17B,1450.6,58.0,9.72,11.90,12.23,10.79,12.82,16.52,12.60,13.08,10.20,10.03,11.00,1416.7,1484.6
gpt-5.3-chat,1445.5,61.5,9.75,11.04,9.45,11.62,12.80,16.88,12.95,13.15,10.62,4.79,12.10,1413.9,1477.0
claude-opus-4,1440.0,58.7,12.21,10.65,10.99,12.08,13.64,16.44,12.57,14.05,11.96,9.26,11.63,1411.4,1468.5
gemini-2.5-pro-preview-03-25,1431.2,60.0,10.65,10.78,7.90,12.17,14.68,16.76,12.31,14.21,12.96,5.22,11.82,1406.5,1455.9
chatgpt-4o-latest-2025-04-25,1427.5,57.3,11.32,9.96,7.34,11.79,15.46,14.40,11.55,14.10,12.51,5.38,11.28,1400.2,1454.8
chatgpt-4o-latest-2025-03-27,1418.7,58.3,11.16,9.58,8.57,12.13,15.34,15.04,11.90,14.54,12.72,6.83,11.51,1396.0,1441.4
google/gemma-4-12B-it,1415.6,51.3,9.81,9.35,9.21,10.83,13.86,16.07,10.55,12.58,12.57,7.62,10.47,1382.0,1449.1
NousResearch/Hermes-4-405B,1404.5,52.8,10.58,9.56,10.56,10.92,12.96,16.21,11.04,12.55,10.44,8.93,10.74,1380.3,1428.7
zai-org/GLM-4.5,1322.0,52.9,9.13,10.08,9.61,10.34,13.34,15.87,11.04,12.59,11.25,9.12,10.22,1276.0,1368.0
claude-sonnet-4,1304.2,57.0,11.06,11.18,11.62,11.11,12.97,16.13,12.11,13.40,11.81,9.95,10.85,1274.9,1333.5
deepseek-ai/DeepSeek-R1,1292.4,52.1,9.19,9.39,9.43,10.33,11.96,16.53,11.36,12.49,10.17,7.61,10.51,1262.4,1322.4
o4-mini,1278.7,45.2,7.16,10.36,7.21,8.12,12.58,15.13,9.73,11.40,12.93,6.95,8.21,1252.7,1304.6
*google/gemma-4-E4B-it,1272.6,41.5,7.16,9.60,8.22,8.32,12.42,16.45,8.67,10.70,11.68,7.41,8.32,1237.0,1308.2
gemini-2.5-pro-preview-2025-05-07,1270.6,57.6,10.32,10.29,8.02,11.78,14.63,16.50,11.84,14.01,13.04,5.81,11.58,1243.5,1297.6
Qwen/Qwen3-235B-A22B,1267.0,46.4,9.19,8.48,8.42,9.14,13.92,13.62,9.60,12.38,11.55,9.33,8.65,1240.6,1293.4
gpt-4.1,1257.1,56.8,10.39,10.59,7.78,11.62,14.91,15.32,11.52,14.00,13.11,5.87,11.26,1229.5,1284.8
grok-4.1-fast,1202.7,49.3,8.63,8.96,8.57,9.40,13.22,15.95,10.73,11.36,12.65,7.42,9.13,1179.5,1225.9
*nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-BF16,1198.6,40.0,6.06,9.92,9.81,7.32,10.43,16.11,8.60,9.87,9.55,8.23,7.90,1167.4,1229.8
qwen/qwq-32b,1184.8,42.5,7.73,9.15,8.30,8.29,12.61,15.85,9.26,11.44,12.42,9.10,8.03,1163.3,1206.4
gemini-2.5-flash-preview,1177.5,47.9,9.30,9.37,6.96,10.07,13.53,15.16,9.47,12.53,12.50,5.55,9.56,1151.5,1203.5
grok-3-beta,1164.5,50.5,8.29,10.21,6.14,9.16,14.88,14.50,10.27,12.99,14.44,4.81,9.24,1140.2,1188.8
grok-4,1154.3,51.5,8.64,9.79,7.05,9.97,14.37,15.65,10.73,12.60,14.75,6.21,9.87,1121.8,1186.7
claude-3-7-sonnet-20250219,1128.4,53.0,8.94,11.32,9.71,11.04,13.16,16.39,11.12,13.33,12.10,8.48,11.27,1102.1,1154.7
deepseek-ai/DeepSeek-V3-0324,1123.9,49.5,9.53,8.31,9.12,9.44,11.24,15.26,10.67,11.37,9.46,7.63,9.60,1096.2,1151.5
zai-org/GLM-4.7-Flash,1118.4,32.9,8.17,7.65,11.51,6.51,8.70,14.68,7.38,8.65,9.29,11.76,6.14,1087.6,1149.1
google/gemma-3-27b-it,1105.4,44.2,9.83,9.97,10.01,9.20,12.30,14.85,9.10,11.33,11.49,9.33,8.76,1078.9,1131.9
claude-3-5-sonnet-20241022,1101.5,50.9,9.10,10.54,10.04,10.06,11.23,16.26,10.87,11.80,9.85,8.32,10.38,1067.1,1135.9
gpt-4.1-mini,1097.2,46.3,7.25,9.53,5.76,8.67,14.66,14.56,9.27,12.17,14.15,5.99,8.63,1069.1,1125.2
nvidia/llama-3.1-nemotron-ultra-253b-v1:free,1092.5,39.5,5.78,9.80,6.37,7.65,12.52,15.52,8.10,10.85,13.62,6.69,7.88,1067.5,1117.4
*Qwen/Qwen3.5-4B,1091.8,32.5,6.42,8.93,10.07,5.61,10.31,14.37,7.21,8.12,10.82,11.48,5.14,1059.1,1124.5
mistralai/Mistral-Small-3.2-24B-Instruct-2506,1090.5,41.8,8.76,9.08,10.18,8.24,11.57,14.84,8.87,10.97,10.96,10.73,8.08,1052.7,1128.4
grok-3-mini-beta,1088.2,42.5,6.85,9.67,5.98,7.80,13.57,14.37,8.64,11.27,14.02,6.34,7.65,1061.0,1115.4
openai/gpt-oss-120b,1073.0,39.6,5.41,10.39,6.88,6.32,11.53,16.18,8.91,9.91,12.48,6.80,6.78,1040.2,1105.7
gpt-4.5-preview-2025-02-27,1070.4,53.2,8.40,10.46,6.92,9.88,14.51,14.81,10.78,13.24,13.70,6.63,9.83,1040.5,1100.3
Qwen/Qwen3-32B,1069.4,38.7,8.06,8.92,7.70,7.56,12.31,12.10,7.85,10.56,11.58,8.42,7.10,1043.4,1095.3
gpt-4.1-nano,1049.9,33.8,5.59,9.63,5.93,5.94,12.84,12.28,6.53,9.44,13.06,7.48,5.92,1025.2,1074.6
google/gemma-3-4b-it,1001.2,31.1,7.68,8.49,8.07,5.84,10.85,13.71,6.69,8.62,10.94,9.38,5.61,980.5,1021.9
mistralai/Mistral-Large-Instruct-2411,997.5,32.8,6.16,8.35,6.12,6.25,11.80,11.30,6.12,9.54,11.95,7.67,6.44,959.2,1035.6
openai/gpt-oss-20b,985.0,30.9,4.87,9.27,5.94,5.04,9.57,14.43,6.73,7.98,11.79,6.62,5.32,950.1,1019.8
gemini-2.0-flash-001,958.2,42.0,9.37,10.13,8.45,8.73,11.72,13.76,8.33,11.04,10.99,7.65,8.71,937.4,979.1
Qwen/Qwen3-30B-A3B,916.8,32.2,6.00,7.33,5.71,5.51,11.22,10.13,6.33,9.11,11.71,7.06,5.42,890.1,943.4
Qwen/Qwen3-8B,908.6,32.1,5.73,7.87,7.57,5.72,10.65,13.76,6.81,8.92,11.98,9.19,5.51,878.4,938.8
qwen/qwen-2.5-72b-instruct,895.8,31.2,5.25,8.66,5.36,5.47,11.43,11.15,5.79,8.87,12.60,6.62,6.07,871.5,920.2
grok-4.20-beta,893.4,45.7,6.43,12.48,13.02,6.35,7.08,12.13,10.02,7.13,7.35,11.49,6.49,858.4,928.3
meta-llama/Llama-4-Maverick-17B-128E-Instruct,864.8,32.3,6.01,8.78,5.39,6.32,10.59,11.76,6.01,9.19,12.03,5.45,6.16,836.6,892.9
mistralai/Mistral-Small-24B-Instruct-2501,862.1,29.3,4.80,8.69,5.86,5.26,11.09,10.51,5.47,8.56,11.14,7.91,5.47,834.9,889.4
meta-llama/Llama-3.1-405B-Instruct,853.1,32.2,6.38,8.95,5.75,6.22,11.42,11.06,6.17,9.29,11.57,6.54,6.36,817.3,889.0
mistralai/Mistral-Small-3.1-24B-Instruct-2503,832.2,27.9,4.70,8.51,6.07,4.77,10.97,10.62,5.23,8.45,11.51,8.29,5.38,802.1,862.3
Nanbeige/Nanbeige4-3B-Thinking-2511,728.1,21.9,4.35,7.04,11.65,2.96,8.19,11.69,5.17,5.63,7.40,14.00,2.75,683.6,772.7
meta-llama/Llama-4-Scout-17B-16E-Instruct,670.3,28.5,5.66,8.33,5.66,5.33,10.10,10.87,5.36,8.40,11.23,6.29,5.40,639.1,701.5
gpt-4-0314,652.8,30.6,5.30,8.86,4.98,5.83,10.70,9.90,5.45,8.86,11.50,6.76,6.12,615.6,689.9
google/gemma-2-9b-it,636.2,23.9,5.73,6.10,4.04,4.04,9.43,7.50,4.55,6.61,8.48,5.42,4.03,597.0,675.5
*nvidia/NVIDIA-Nemotron-3-Nano-4B-BF16,588.3,32.2,4.83,6.31,4.38,3.58,10.19,7.81,8.20,6.58,12.15,10.31,4.38,527.5,649.1
meta-llama/llama-3.2-1b-instruct,200.0,12.0,2.35,4.69,3.55,1.74,5.02,6.98,2.37,3.44,5.44,6.59,1.82,134.6,265.4
`

// Total parameters (billions), including inactive MoE experts. These names
// either omit the total or advertise active parameters instead.
const MODEL_SIZE_OVERRIDES = {
  // https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct
  'meta-llama/llama-4-scout-17b-16e-instruct': 109,
  // https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct
  'meta-llama/llama-4-maverick-17b-128e-instruct': 400,
  // https://huggingface.co/zai-org/GLM-4.7-Flash (30B-A3B)
  'zai-org/glm-4.7-flash': 30,
  // Full checkpoint parameter count: https://huggingface.co/api/models/google/gemma-4-E4B-it
  'google/gemma-4-e4b-it': 8,
  'nvidia/nvidia-nemotron-3.5-bolt-e4b-4gb-bf16': 8
};

function getModelSizeBillions(modelName) {
  const name = modelName.replace(/^[!*]+/, '').replace(/\s*\[[^\]]*\]\s*$/, '').toLowerCase();
  if (Object.prototype.hasOwnProperty.call(MODEL_SIZE_OVERRIDES, name)) {
    return MODEL_SIZE_OVERRIDES[name];
  }
  // Require a separate size token: dates, BF16 and an MoE's A17B are not totals.
  const match = name.match(/(?:^|[-_/])(\d+(?:\.\d+)?)([bt])(?=$|[-_:/\s])/);
  return match ? Number(match[1]) * (match[2] === 't' ? 1000 : 1) : null;
}

const SMALL_MODEL_LIMIT = 120;

function modelSizeFilter(settings, data, dataIndex) {
  if (settings.nTable.id !== 'leaderboard') return true;
  if (!document.getElementById('modelSizeFilter').checked) return true;
  const name = settings.aoData[dataIndex].nTr.dataset.modelNameFull;
  const size = getModelSizeBillions(name);
  return size !== null && size <= SMALL_MODEL_LIMIT;
}

function setupModelSizeFilter() {
  const toggle = document.getElementById('modelSizeFilter');
  const value = new URL(window.location.href).searchParams.get('modelsize');
  toggle.checked = value === 'small' || value === 'medium';
  if (!$.fn.dataTable.ext.search.includes(modelSizeFilter)) {
    $.fn.dataTable.ext.search.push(modelSizeFilter);
  }
  toggle.onchange = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('modelsize', toggle.checked ? 'small' : 'all');
    window.history.replaceState(null, '', url);
    $('#leaderboard').DataTable().draw();
  };
  window.addEventListener('popstate', () => {
    const value = new URL(window.location.href).searchParams.get('modelsize');
    toggle.checked = value === 'small' || value === 'medium';
    $('#leaderboard').DataTable().draw();
  });
}

// --- Global Scope Variables ---
const MOBILE_BREAKPOINT = 1050;
// let eloScores = []; // No longer needed, parse directly
// let rubricScores = []; // No longer needed, parse directly
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 13; // Default sort is Elo, which is now column index 13

const FEATURE_COL_START     = 2;   // first feature column index (Table index)
const FEATURE_COL_END       = 12;  // last  feature column index (Table index)
const ELO_COL_INDEX         = 13;  // Table index for Elo Score column
const SAMPLE_COL_INDEX      = 14;  // Table index for Sample Link column
const TOTAL_COLS            = 15;  // used for colspan messages

// Chart.js references:
let abilitiesAbsoluteRadarChart = null;
let abilitiesRelativeRadarChart = null;
let abilitiesStrengthsChart = null;
let abilitiesWeaknessesChart = null;

/* ---- Heat‑map scaling anchors ----
   Each pair is [input_t , output_t].
   Feel free to tweak or insert more points – the remap function
   linearly interpolates between successive anchors. */
const HEATMAP_SCALE_MAP = [
  [0.00, 0.00],
  //[0.30, 0.2],
  [0.30, 0.05],
  [0.85, 0.60],   // new knee: expand 0.80-0.95 to 0.50-0.80
  [1.00, 1.00]
];

const LINEAR_HEATMAP_FEATURES = [
  "compliant", "moral"
];

// Style chart instance (word cloud handled differently)

const FEATURE_DESCRIPTIONS = {
  "humanlike" : "Humanlike in behaviour & writing style",
  "safety"   : "Safety conscious",
  "assertive" : "Assertive, sets boundaries, pushes back",
  "compliant" : "Compliant -- does what it's told",
  "social_iq" : "Social dexterity & message tailoring",
  "warm": "Warm & validating",
  "empathy": "Demonstrated empathy",
  "analytic": "Reason-first analytical approach",
  "insight": "Depth of insight",
  "moralising": "Moralising: concerned with moral behaviour, possibly preachy.",
  "pragmatic": "Practical problem solving"
};

const featureNames = [
  'humanlike',   // index 3 in data
  'safe',        // index 4
  'assertive',   // index 5
  'social_iq',   // index 6
  'warm',        // index 7
  'analytical',  // index 8
  'insightful',  // index 9
  'empathy',     // index 10
  'compliant',   // index 11
  'moral',       // index 12
  'pragmatic'    // index 13
];

const RUBRIC_GROUPS = {
  humanlike : ["conversational","humanlike"],
  safe      : ["safety_conscious"],
  assertive : ["boundary_setting","challenging"],
  social_iq : ["social_dexterity","message_tailoring"],
  warm      : ["warmth","validating"],
  analytical: ["analytical"],
  insightful: ["depth_of_insight"],
  empathy   : ["demonstrated_empathy"],
  compliant : ["compliant"],
  moral     : ["moralising"],
  pragmatic : ["pragmatic_ei"]
};

const RELATIVE_SCALE_FACTOR = 0.15;   // 0 = off, 0.5 ≈ fairly strong

/* 0-20  ➜  0-10,  rounded to 1 dp – uses integer math to avoid FP quirks */
const s = v => Math.round((v / 2) * 10) / 10;
// --- End Global Scope Variables ---



// --- Dark Mode / Theme / Email Functions ---
function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');
  const savedMode = localStorage.getItem('darkModeEnabled');
  if (savedMode) {
    document.body.classList.toggle('dark-mode', savedMode === 'true');
    toggle.checked = (savedMode === 'true');
    label.textContent = (savedMode === 'true') ? 'Dark' : 'Light';
  } else {
    applySystemTheme();
  }
  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    label.textContent = this.checked ? 'Dark' : 'Light';
    localStorage.setItem('darkModeEnabled', this.checked);
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Redraw needed to update heatmap colors and score bar gradients
      $('#leaderboard').DataTable().rows().invalidate('data').draw(false);
      updateFeatureHeatmapColors();
      refreshHeatmapLegend();
    }
    // Update open modal chart colors if needed (complex, might require chart recreation)
  });
}

function cloneHeaderToFooter() {
  const theadRow = document.querySelector('#leaderboard thead tr');
  if (!theadRow) return;

  const tfoot = document.querySelector('#leaderboard tfoot') || document.createElement('tfoot');
  // wipe any previous clone
  tfoot.innerHTML = '';

  // deep-clone to preserve classes & data- attributes
  const footerRow = theadRow.cloneNode(true);
  tfoot.appendChild(footerRow);

  // append only if we just created the tfoot
  if (!tfoot.parentElement) {
    document.getElementById('leaderboard').appendChild(tfoot);
  }
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

function updateFeatureHeatmapColors() {
  const dark = document.body.classList.contains('dark-mode');
  document.querySelectorAll('#leaderboard td.feature-cell').forEach(td => {
    const t = parseFloat(td.dataset.heat);
    if (isNaN(t)) return;
    const col = dark
      ? pastelPlasma(t, { wash:0.35, alpha:0.7 })
      : pastelPlasma(t, { wash:0.35, alpha:0.55 });
    td.style.setProperty('background-color', col, 'important');  // 👈
  });
}

function getRelativeScale(modelKey, featureKey){
  if (typeof chartData === 'undefined' || !chartData[modelKey]) return 1;

  // prefer the log variant, fall back if needed
  const rel = chartData[modelKey].relativeRadarLog
           || chartData[modelKey].relativeRadar;
  if (!rel || !rel.labels || !rel.values) return 1;

  const wanted = RUBRIC_GROUPS[featureKey] || [];
  let total = 0, n = 0;

  wanted.forEach(lbl=>{
    const i = rel.labels.indexOf(lbl);
    if (i !== -1){
      total += rel.values[i];
      n++;
    }
  });
  if (n === 0) return 1;

  /* log scores are ≈ -0.6 … 0.4 → normalise to 0-1 */
  const mean   = total / n;
  const norm01 = Math.min(1, Math.max(0, (mean + 0.6)));   // width ≈ 1.0

  /* centre on 1.0 and apply a gentle scale */
  return 1 + (norm01 - 0.5) * RELATIVE_SCALE_FACTOR;
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

// --- Abilities Modal Function (Adapted for chartData) ---
function showAbilitiesModal(modelName) {
  // Use the correct data variable name
  if (typeof chartData === 'undefined' || !chartData[modelName]) {
    console.warn("No chart data found for: ", modelName);
    document.getElementById('abilitiesProfileContent').innerHTML =
      `<p><i>No abilities data for ${modelName}</i></p>`;
    const abilitiesModal = new bootstrap.Modal(document.getElementById('abilitiesProfileModal'));
    abilitiesModal.show();
    return;
  }
  const data = chartData[modelName]; // Use correct data source

  // Destroy existing charts if any
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.destroy();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.destroy();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.destroy();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.destroy();

  // Re-inject canvas elements (structure remains the same)
  document.getElementById('abilitiesProfileContent').innerHTML = `
  <div class="row mb-4">
    <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="chart-container" style="position: relative; height: auto; aspect-ratio: 1.6/1;">
        <canvas id="abilitiesAbsoluteRadar"></canvas>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="chart-container" style="position: relative; height: auto; aspect-ratio: 1.6/1;">
        <canvas id="abilitiesRelativeRadar"></canvas>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-lg-6 mb-4">
      <div class="chart-container" style="position: relative; height: 200px;">
        <canvas id="abilitiesStrengthsChart"></canvas>
      </div>
    </div>
    <div class="col-md-12 col-lg-6 mb-4">
      <div class="chart-container" style="position: relative; height: 200px;">
        <canvas id="abilitiesWeaknessesChart"></canvas>
      </div>
    </div>
  </div>
  `;

  // Check dark mode for colors
  const isDarkMode = document.body.classList.contains('dark-mode');
  const axisColor = isDarkMode ? '#eee' : '#333';
  const gridColor = isDarkMode ? '#666' : '#ccc';
  const titleColor = isDarkMode ? '#eee' : '#333';
  const pointLabelColor = isDarkMode ? '#ddd' : '#444';

  // Get contexts after re-injecting canvas
  const ctxAbs = document.getElementById('abilitiesAbsoluteRadar').getContext('2d');
  const ctxRel = document.getElementById('abilitiesRelativeRadar').getContext('2d');
  const ctxStr = document.getElementById('abilitiesStrengthsChart').getContext('2d');
  const ctxWeak = document.getElementById('abilitiesWeaknessesChart').getContext('2d');

  // Chart generation logic remains the same, assuming data structure is consistent
  // (1) Absolute Radar Chart
  abilitiesAbsoluteRadarChart = new Chart(ctxAbs, {
    type: 'radar',
    data: {
      labels: data.absoluteRadar.labels,
      datasets: [{
        label: 'Absolute Score',
        data: data.absoluteRadar.values,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 0 },
      scales: { r: { beginAtZero: true, suggestedMin: 0, suggestedMax: 20, ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false }, pointLabels: { color: pointLabelColor, font: { size: 11 } }, grid: { color: gridColor }, angleLines: { color: gridColor } } },
      plugins: { title: { display: true, text: 'Absolute Scores', color: titleColor, font: { size: 16 } }, legend: { display: false } }
    }
  });

  // (2) Relative Radar Chart
  abilitiesRelativeRadarChart = new Chart(ctxRel, {
    type: 'radar',
    data: {
      labels: data.relativeRadarLog.labels,
      datasets: [{
        label: 'Relative Score (Log Scale)',
        data: data.relativeRadarLog.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 0 },
      scales: { r: { min: -0.6, max: 0.4, ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false }, pointLabels: { color: pointLabelColor, font: { size: 11 } }, grid: { color: gridColor }, angleLines: { color: gridColor } } },
      plugins: { title: { display: true, text: 'Relative Scores', color: titleColor, font: { size: 16 } }, legend: { display: false } }
    }
  });

  // (3) Strengths Bar Chart
  const strengthsLabels = data.strengths.map(x => x.criterion);
  const strengthsValues = data.strengths.map(x => x.relativeScore);
  abilitiesStrengthsChart = new Chart(ctxStr, {
    type: 'bar',
    data: { labels: strengthsLabels, datasets: [{ label: 'Relative Strength', data: strengthsValues, backgroundColor: 'rgba(54, 162, 235, 0.8)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, animation: { duration: 0 }, plugins: { title: { display: true, text: 'High Scoring Traits', color: titleColor, font: { size: 16 } }, legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } }, y: { ticks: { color: axisColor }, grid: { display: false } } } }
  });

  // (4) Weaknesses Bar Chart
  const weaknessesLabels = data.weaknesses.map(x => x.criterion);
  const weaknessesValues = data.weaknesses.map(x => x.relativeScore);
  const weaknessesReversedLabels = [...weaknessesLabels].reverse();
  const weaknessesReversedValues = [...weaknessesValues].reverse();
  abilitiesWeaknessesChart = new Chart(ctxWeak, {
    type: 'bar',
    data: { labels: weaknessesReversedLabels, datasets: [{ label: 'Relative Weakness', data: weaknessesReversedValues, backgroundColor: 'rgba(255, 99, 132, 0.8)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, animation: { duration: 0 }, plugins: { title: { display: true, text: 'Low Scoring Traits', color: titleColor, font: { size: 16 } }, legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } }, y: { ticks: { color: axisColor }, grid: { display: false } } } }
  });

  // Add resize event listener
  window.removeEventListener('resize', resizeModalCharts);
  window.addEventListener('resize', resizeModalCharts);

  // Show the modal
  const abilitiesModal = new bootstrap.Modal(document.getElementById('abilitiesProfileModal'));
  document.getElementById('abilitiesProfileModalLabel').textContent = `Abilities Overview: ${modelName}`;
  abilitiesModal.show();

  // Modal shown event to force chart resize
  document.getElementById('abilitiesProfileModal').addEventListener('shown.bs.modal', function() {
    resizeModalCharts();
  });
}

// Resize handler remains the same
function resizeModalCharts() {
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.resize();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.resize();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.resize();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.resize();
}
// --- End Abilities Modal Function ---

// --- Style Modal Function (Adapted for eqbench3StyleAssociationData) ---
function showStyleModal(modelName) {
  const contentElement = document.getElementById('styleProfileContent');
  const modalTitleElement = document.getElementById('styleProfileModalLabel');
  const styleModalElement = document.getElementById('styleProfileModal');

  if (!contentElement || !modalTitleElement || !styleModalElement) {
      console.error("Style modal elements not found!");
      return;
  }

  const styleModal = bootstrap.Modal.getOrCreateInstance(styleModalElement);

  // Prepare Content Area
  contentElement.innerHTML = `
      <div id="styleCloudContainer" style="width: 100%; height: 500px; min-height: 300px; max-height: 60vh; border: 1px solid var(--border-color, #ccc); border-radius: 4px; position: relative; margin-bottom: 1rem;">
          <p class="text-center p-3"><i>Loading style data...</i></p>
      </div>
      <p> </p>`;
  const containerElement = document.getElementById('styleCloudContainer');

  // Check Data Availability (Use correct data variable name)
  if (typeof eqbench3StyleAssociationData === 'undefined' || !eqbench3StyleAssociationData[modelName] || !eqbench3StyleAssociationData[modelName].mostFavored || eqbench3StyleAssociationData[modelName].mostFavored.length === 0) {
      console.warn("No style data found or empty for: ", modelName);
      if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No style profile data available for ${modelName}.</i></p>`;
      }
      modalTitleElement.textContent = `Style Profile: ${modelName}`;
      styleModal.show();
      return;
  }

  // Prepare Data (Use correct data variable name)
  const data = eqbench3StyleAssociationData[modelName].mostFavored;
  const filteredData = data.filter(item => item.word.toLowerCase() !== "crisp"); // Keep filter? Adjust if needed

  const topTraits = filteredData
      .sort((a, b) => b.strength - a.strength)
      .slice(0, 40); // Limit number of words

  const strengths = topTraits.map(item => item.strength);
  const minStrength = Math.min(...strengths);
  const maxStrength = Math.max(...strengths);
  const minFontSize = 10;
  const maxFontSize = 65;

  const listData = topTraits.map(item => {
      let size;
      if (maxStrength === minStrength) {
          size = (minFontSize + maxFontSize) / 2;
      } else {
          const scale = (item.strength - minStrength) / (maxStrength - minStrength);
          size = minFontSize + scale * (maxFontSize - minFontSize);
      }
      size = Math.max(size, minFontSize);
      const word = typeof item.word === 'string' ? item.word.trim() : '';
      return word ? [word, Math.round(size)] : null;
  }).filter(item => item !== null);

  if (listData.length === 0) {
       console.warn("No valid words left after filtering for: ", modelName);
       if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No valid style traits found for ${modelName}.</i></p>`;
       }
       modalTitleElement.textContent = `Style Profile: ${modelName}`;
       styleModal.show();
       return;
  }

  // Prepare Options
  const isDarkMode = document.body.classList.contains('dark-mode');
  const cloudBgColor = isDarkMode ? '#333' : '#fff';
  const cloudColor = isDarkMode ? 'random-light' : 'random-dark';

  const options = {
      list: listData,
      gridSize: Math.round(16 * maxFontSize / 60),
      weightFactor: 1,
      fontFamily: 'sans-serif',
      color: cloudColor,
      backgroundColor: cloudBgColor,
      rotateRatio: 0.0,
      minSize: 5,
      drawOutOfBound: false,
      hover: (item, dimension, event) => {
          if (item) {
              // Use correct data source for hover lookup
              const originalStrength = eqbench3StyleAssociationData[modelName].mostFavored.find(t => t.word === item[0])?.strength;
              if (originalStrength !== undefined) {
                  event.target.title = `${item[0]}: ${originalStrength.toFixed(5)}`;
              }
          } else {
               event.target.title = '';
          }
      },
      click: (item, dimension, event) => {
          if (item) console.log(item[0] + ': ' + item[1]);
      }
  };

  // Event Listener to Generate Cloud AFTER Modal is Shown
  styleModalElement.removeEventListener('shown.bs.modal', generateCloud); // Remove previous listener

  function generateCloud() {
      const currentContainer = document.getElementById('styleCloudContainer');
      if (!currentContainer) {
          console.error("Container element not found inside shown.bs.modal listener");
          return;
      }
      try {
          if (typeof WordCloud !== 'undefined') {
              currentContainer.innerHTML = ''; // Clear loading message
              WordCloud(currentContainer, options);
          } else {
              console.error("WordCloud library is not loaded.");
              currentContainer.innerHTML = '<p class="text-danger text-center p-3">Error: WordCloud library not loaded.</p>';
          }
      } catch (error) {
          console.error("Error generating word cloud:", error);
          currentContainer.innerHTML = '<p class="text-danger text-center p-3">Error generating word cloud.</p>';
      }
      styleModalElement.removeEventListener('shown.bs.modal', generateCloud); // Remove listener after execution
  }

  styleModalElement.addEventListener('shown.bs.modal', generateCloud, { once: true }); // Add listener

  // Show the Modal
  modalTitleElement.textContent = `Style Profile: ${modelName}`;
  styleModal.show();
}
// --- End Style Modal Function ---

/* ── Build the linear‑gradient for the legend bar ─────────────── */
function refreshHeatmapLegend() {
  const bar = document.querySelector('#heatmapLegend .legend-bar');
  if (!bar) return;

  const dark = document.body.classList.contains('dark-mode');
  const steps = 20;                   // resolution of the gradient
  const colours = [];

  for (let i = 0; i <= steps; i++){
      const t0 = i / steps;           // 0‑1 raw range
      const t  = t0;   // respect the custom ramp
      const col = dark
          ? pastelPlasma(t, {wash:0.2, alpha:0.8})
          : pastelPlasma(t, {wash:0.2, alpha:0.5});
      colours.push(col);
  }
  bar.style.background = `linear-gradient(to right, ${colours.join(',')})`;
}

// --- Heatmap Color Interpolation ---
function interpolateColor(value, min, max, color1, color2) {
  // Ensure value is within bounds
  const clampedValue = Math.max(min, Math.min(max, value));
  // Calculate the mix ratio (0 = color1, 1 = color2)
  const ratio = (clampedValue - min) / (max - min);

  // Simple linear interpolation for RGB
  const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
  const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
  const b = Math.round(color1.b + (color2.b - color1.b) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
}

/* ===== Plasma colormap =====
  key‑frames taken from matplotlib – five stops are plenty */
/* Plasma palette – slight shift away from pure yellow */
const plasmaStops = [
  { t: 0.00, rgb:[ 13,   8, 135] },  // indigo
  { t: 0.25, rgb:[ 75,   3, 161] },  // violet
  { t: 0.50, rgb:[125,   0, 140] },  // magenta
  { t: 0.75, rgb:[182,  52,  97] },  // pink‑red
  { t: 1.00, rgb:[255, 187,  60] }   // amber (was neon yellow)
];


  /* linear interpolation between the two neighbouring stops */
function plasmaColor(t){               // t ∈ [0,1]
  t = Math.min(1, Math.max(0, t));     // clamp
  const hi = plasmaStops.findIndex(s => t <= s.t);
  if (hi === 0)          return `rgb(${plasmaStops[0].rgb})`;
  if (hi === -1)         return `rgb(${plasmaStops.at(-1).rgb})`;
  const lo = plasmaStops[hi-1];
  const hiStop = plasmaStops[hi];
  const f = (t - lo.t) / (hiStop.t - lo.t);
  const rgb = lo.rgb.map((c,i) => Math.round(c + f*(hiStop.rgb[i]-c)));
  return `rgb(${rgb})`;
}

function pastelPlasma(
  t,
  { wash = 0.4, alpha = 1, popCutoff = 0.99, popBoost = 0.02 } = {}
) {
  // If the value is in the top band, make the colour pop by reducing wash
  const effectiveWash = t >= popCutoff
    ? Math.max(0, wash - popBoost)  // never let wash go negative
    : wash;

  const rgb   = plasmaColor(t).match(/\d+/g).map(Number);
  const mixed = rgb.map(c => Math.round((1 - effectiveWash) * c + effectiveWash * 255));

  return `rgba(${mixed[0]},${mixed[1]},${mixed[2]},${alpha})`;
}


/* Clamp t∈[0,1], locate the segment, then linear‑interpolate. */
function remapHeatValue(t) {
  t = Math.min(1, Math.max(0, t));                 // clamp 0-1

  /* piece-wise linear ramp */
  for (let i = 1; i < HEATMAP_SCALE_MAP.length; i++) {
    const [x0, y0] = HEATMAP_SCALE_MAP[i - 1];
    const [x1, y1] = HEATMAP_SCALE_MAP[i];
    if (t <= x1) {
      const f = (t - x0) / (x1 - x0);
      t = y0 + f * (y1 - y0);
      break;
    }
  }

  /* >>> snap to 0.01 so microscopic FP noise can’t matter <<< */
  return Math.round(t * 100) / 100;                // 0.00 … 1.00
}
// --- End Heatmap Color Interpolation ---


// --- Gradient logic for visible bars (Blue gradient) ---
// ─── Heat‑map midpoint ─────────────────────────────────────


function updateScoreBarColorsEQ3() {
  const scoreBars = document.querySelectorAll('#leaderboard .eqbench3-score-bar'); // Use specific class
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    // Check visibility using offsetParent
    if (bar.offsetParent !== null) {
      const row = bar.closest('tr');
      if (!row) return;

      const overallIndex = $(row).index(); // Get visual index
      const totalRows = $('#leaderboard tbody tr:visible').length; // Count only visible rows
      if (totalRows === 0) return;

      // Calculate gradient based on visual position - Blue gradient
      const startPercent = (overallIndex / totalRows);
      const endPercent = ((overallIndex + 1) / totalRows);

      const colorFn = isDarkMode
            ? (t) => pastelPlasma(t,{wash:0.1,alpha:0.9})                             // full strength
            : (t) => pastelPlasma(t,{wash:0.6,alpha:1}); // 60 % white mix

      const startColor = colorFn(1 - startPercent);   // remember: reversed
      const endColor   = colorFn(1 - endPercent);

      bar.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    }
  });
}
// --- End Gradient logic ---

// --- Load Leaderboard Data (ADAPTED FOR EQ-BENCH 3 CSV + Heatmap + Error Bars) ---
function loadLeaderboardData() {
  // Ensure the correct data variable exists
  if (typeof leaderboardDataEQBench3 === 'undefined') {
      console.error("leaderboardDataEQBench3 is not defined. Make sure the data file is loaded.");
      document.getElementById('leaderboardBody').innerHTML =
        `<tr><td colspan="${TOTAL_COLS}">Error loading leaderboard data.</td></tr>`;
      return;
  }

  const eqBenchRows = leaderboardDataEQBench3
    .split('\n')
    .slice(1) // Skip header row
    .filter(l => l.trim() !== ''); // Remove empty lines

  if (eqBenchRows.length === 0) {
    document.getElementById('leaderboardBody').innerHTML =
      `<tr><td colspan="${TOTAL_COLS}">No leaderboard data available.</td></tr>`;
    return; // No data to process
  }

  const featureRange = Object.fromEntries(
    featureNames.map(f => [f, {min: Infinity, max: -Infinity, focusMin: null}]));



  /* --- gather min & max for each feature column (scaled) ----------- */
  eqBenchRows.forEach(r => {
    const parts          = r.split(',');
    const modelNameRaw   = parts[0].trim();
    const modelKey       = modelNameRaw.replace(/^!|\*/g, '');   // strip flags

    featureNames.forEach((f, idx) => {
      const rawAbs  = parseFloat(parts[3 + idx]);   // absolute csv value
      const scaled  = s(rawAbs * getRelativeScale(modelKey, f));

      if (!isNaN(scaled)) {
        featureRange[f].min = Math.min(featureRange[f].min, scaled);
        featureRange[f].max = Math.max(featureRange[f].max, scaled);
      }
    });
  });
  /* ---------------------------------------------------------------- */


  // --- Elo/Rubric Scaling (Adjusted for Error Bars) ---
  const originalEloScores = eqBenchRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
  const originalRubricScores = eqBenchRows.map(row => parseFloat(row.split(',')[2])).filter(s => !isNaN(s)); // Rubric is already 0-100
  const ciHighScores = eqBenchRows.map(row => parseFloat(row.split(',')[15])).filter(s => !isNaN(s)); // Index 15 for ci_high_norm

  const originalMaxElo = originalEloScores.length > 0 ? Math.max(...originalEloScores) : 1500;
  const maxCiHighNorm = ciHighScores.length > 0 ? Math.max(...ciHighScores) : originalMaxElo; // Use originalMaxElo as fallback

  // Use the maximum CI high value to set the scale range for Elo bars
  maxEloScore = Math.max(originalMaxElo, maxCiHighNorm);
  maxRubricScore = 100; // Rubric is fixed 0-100 scale
  baselineEloScore = 0; // Keep baseline at 0 for simplicity with error bars
  baselineRubricScore = 0; // Rubric baseline is 0
  // --- End Scaling ---

  const isDarkMode = document.body.classList.contains('dark-mode'); // Check dark mode once

  let html = eqBenchRows.map((row, index) => {
    let [
      modelNameRaw, // 0
      _elo_norm, // 1
      _rubric_0_100, // 2
      humanlike, // 3
      safe, // 4
      assertive, // 5
      social_iq, // 6
      warm, // 7
      analytical, // 8
      insightful, // 9
      empathy, // 10
      compliant, // 11
      moral, // 12
      pragmatic, // 13
      ci_low_norm, // 14
      ci_high_norm // 15
    ] = row.split(',');

    const eloScoreNum = parseFloat(_elo_norm);
    const rubricScoreNum = parseFloat(_rubric_0_100); // Not displayed in table
    const ciLowNum = parseFloat(ci_low_norm);
    const ciHighNum = parseFloat(ci_high_norm);
    let currentModelName = modelNameRaw.trim();

    // Strip flags early so getRelativeScale can find the model in chartData
    const isNsfwModel = currentModelName.startsWith('!');
    currentModelName = currentModelName.replace(/^!/, '');
    const isNewModel = currentModelName.startsWith('*');
    currentModelName = currentModelName.replace(/^\*/, '');

    // --- Feature Metric Parsing & Heatmap Color ---
    const featuresRaw = {
      humanlike,
      safe,
      assertive,
      social_iq,
      warm,
      analytical,
      insightful,
      empathy,
      compliant,
      moral,
      pragmatic
    };

    const features = Object.entries(featuresRaw).map(([key, raw]) => {
      const scaled = s(parseFloat(raw) * getRelativeScale(currentModelName, key));
      return { value: scaled, name: key };
    });



    const featureCellsHTML = features.map(feature => {
      const {min,max} = featureRange[feature.name];
      let t = Number.isFinite(feature.value) && max !== min
        ? (feature.value - min) / (max - min)
        : 0;

      t = Math.min(1, Math.max(0, t));      // clamp

      if (!LINEAR_HEATMAP_FEATURES.includes(feature.name)) {
        t = remapHeatValue(t);        // nonlinear ramp
      }


      // One‑line colour lookup
      const bgColor = isDarkMode
        ? pastelPlasma(t, { wash: 0.35, alpha: 0.7})
        : pastelPlasma(t, { wash: 0.35, alpha: 0.55 });
      const displayValue = isNaN(feature.value) ? '-' : feature.value.toFixed(1);
      const orderValue = isNaN(feature.value) ? -1 : feature.value.toFixed(1);
      return `
  <td class="mobile-collapsible feature-cell"
      data-order="${orderValue}"
      data-heat="${t}"
      style="background-color: ${bgColor} !important;">   <!-- ← space added -->
    <div class="cell-content">${displayValue}</div>
  </td>`;

    }).join('');
    // --- End Feature Metric Parsing & Heatmap Color ---

    // --- Calculate Percentages for Bars (Elo with Error Bar) ---
    const eloScoreRangeForBar = (maxEloScore - baselineEloScore) || 1; // Use updated maxEloScore
    const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
    const eloScorePercentage = isNaN(eloScoreNum) ? 0 : Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRangeForBar) * 100));

    // Calculate error bar positions based on the same scale
    const errorBarLeftPercent = isNaN(ciLowNum) ? 0 : Math.max(0, Math.min(100, ((ciLowNum - baselineEloScore) / eloScoreRangeForBar) * 100));
    const errorBarRightPercent = isNaN(ciHighNum) ? 0 : Math.max(0, Math.min(100, ((ciHighNum - baselineEloScore) / eloScoreRangeForBar) * 100));
    const errorBarWidthPercent = Math.max(0, errorBarRightPercent - errorBarLeftPercent); // Ensure width is not negative

    // Rubric score percentage (not displayed, but kept for potential future use)
    const rubricScoreRangeForBar = (maxRubricScore - baselineRubricScore) || 1; // Range is 100
    const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
    const rubricScorePercentage = isNaN(rubricScoreNum) ? 0 : Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRangeForBar) * 100));
    // --- End Percentage Calculation ---

    // --- Model Name Handling ---

    let displayModelName = currentModelName.split('/').pop();
    if (isNsfwModel) displayModelName = '🔞 ' + displayModelName;
    if (isNewModel) displayModelName = '🆕 ' + displayModelName;

    let modelNameDisplayHTML = displayModelName;
    if (currentModelName.includes('/')) {
        modelNameDisplayHTML = `<a href="https://huggingface.co/${currentModelName}" target="_blank" rel="noopener noreferrer">${displayModelName}</a>`;
    }

    let safeModelName = currentModelName.replace(/\//g, '__').replace(/[^a-zA-Z0-9_-]/g, '-');
    let modelResultsFn = `results/eqbench3_reports/${safeModelName}.html`.toLowerCase();
    // --- End Model Name Handling ---

    // --- Score Bar HTML (Elo with Error Bar) ---
    let scoreBarEloHTML = `
      <div class="score-bar-container">
        <div class="eqbench3-score-bar" style="width: ${eloScorePercentage.toFixed(1)}%; display:none;"></div>
        ${!isNaN(ciLowNum) && !isNaN(ciHighNum) ? `<div class="error-bar" style="left: ${errorBarLeftPercent.toFixed(2)}%; width: ${errorBarWidthPercent.toFixed(2)}%; display:none;"></div>` : ''}
        <span class="score-text">${isNaN(eloScoreNum) ? '-' : eloScoreNum.toFixed(1)}</span>
      </div>`;

    // Rubric score bar (not displayed)
    // let scoreBarRubricHTML = `
    //   <div class="score-bar-container">
    //     <div class="eqbench3-score-bar" style="width: ${rubricScorePercentage.toFixed(1)}%; display:none;"></div>
    //     <span class="score-text">${isNaN(rubricScoreNum) ? '-' : rubricScoreNum.toFixed(1)}</span>
    //   </div>`;
    // --- End Score Bar HTML ---

    // --- Icon Definitions ---
    const abilitiesInfoIcon = `
      <span class="abilities-info-icon chart-icon" data-model-name="${currentModelName}" title="View Abilities Charts"><span></span></span>`;
    // const styleInfoIcon = `
    //   <span class="style-info-icon chart-icon" data-model-name="${currentModelName}" title="View Style Profile"><span></span></span>`;
    // --- End Icon Definitions ---

    // --- Row HTML Generation (Updated Structure for EQ-Bench 3) ---
    return `
      <tr data-model-name-full="${currentModelName}"
          data-original-elo-score="${eloScoreNum}"
          data-original-rubric-score="${rubricScoreNum}">

        <td> <!-- Col 0: Model -->
          <div class="cell-content">
            ${modelNameDisplayHTML}
          </div>
        </td>

        <td> <!-- Col 1: Abilities -->
          <div class="cell-content">
            ${abilitiesInfoIcon}
          </div>
        </td>

        ${featureCellsHTML} <!-- Inject feature cells (Cols 2-12) -->

        <td data-order="${isNaN(eloScoreNum) ? -Infinity : eloScoreNum.toFixed(1)}"> <!-- Col 13: Elo Score -->
          <div class="cell-content">
            ${scoreBarEloHTML}
          </div>
        </td>

        <td> <!-- Col 14: Sample Link -->
          <div class="cell-content">
            <a href="${modelResultsFn}">Sample</a>
          </div>
        </td>
      </tr>
    `;
    // --- End Row HTML Generation ---
  }).join('');

  document.getElementById('leaderboardBody').innerHTML = html;
  initializeDataTable(); // Initialize DataTable after adding rows
}
// --- End Load Leaderboard Data ---

// --- DataTable config (Updated Indices for EQ-Bench 3) ---
/* indices of the feature columns, calculated once */
const FEATURE_COLUMN_INDICES =
  Array.from({length: featureNames.length},
             (_, i) => FEATURE_COL_START + i);   // e.g. [2,3,4,…,12]

function setScoreHeaderWidth(api, idx) {
  const vw = window.innerWidth;
  let width;
  if (vw < 580) width = '30%';
  else if (vw < MOBILE_BREAKPOINT) width = '50%';
  else if (vw >= MOBILE_BREAKPOINT && vw < 1300) width = '12%';
  else width = '20%';
  // Ensure the header exists before trying to style it
  const header = api.column(idx).header();
  if (header) {
      header.style.width = width;
  }
}


let dataTableConfig = {
  autoWidth: false,
  order      : [[ELO_COL_INDEX, 'desc']],        // default sort by Elo (Table index 13)
  paging: false,
  searching: true, // Required for the model-size predicate; no text search UI.
  info: true,
  lengthChange: false,
  columnDefs : [
    {targets:[0]                              , type:'string'   }, // model
    {targets:[1,SAMPLE_COL_INDEX]             , orderable:false }, // icons/link
    { targets: FEATURE_COLUMN_INDICES         , orderable:true }, // Features (Table indices 2-12)
    {targets:[ELO_COL_INDEX]                  , type:'num'      }, // Elo (Table index 13)
    {targets:[ELO_COL_INDEX]                  , orderSequence:['desc','asc']},
    {targets:FEATURE_COLUMN_INDICES           , orderSequence:['desc','asc']}
  ],
  // Custom DOM layout unchanged
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

  // Callback after table draw (Updated Indices & Score Bar/Error Bar Fix)
  drawCallback: function (settings) {



    const api = this.api();
    /* wipe any inline header + selection created by the previous draw */
    $('#leaderboard .floating-header-row').remove();
    api.rows().nodes().to$().removeClass('selected-row');


    if (!api || api.rows().count() === 0) return;

    /* ---------- Handle score bar and error bar visibility ---------- */
    let order = api.order();
    if (!order || order.length === 0) {
        order = [[ELO_COL_INDEX, 'desc']]; // Default to Elo sort if no order set
        api.order(order).draw(false); // Apply default order and redraw
        return; // Exit early, redraw will call drawCallback again
    }
    let sortedColumnIndex = order[0][0];

    const SCORE_COLUMNS = [ELO_COL_INDEX]; // Only Elo has bars now
    const NON_SCORE_COLUMNS = [...Array(TOTAL_COLS).keys()]
        .filter(i => !SCORE_COLUMNS.includes(i));

    const tableNode = $(api.table().node());
    // Hide ALL score bars and error bars initially on each draw
    tableNode.find('.eqbench3-score-bar, .error-bar').hide();
    tableNode.find('thead th').css('width', ''); // Reset header widths

    let columnToShowBar = -1;
    // Determine which score column's bars (and error bars) should be visible
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
        // If sorted by a score column, show its bars
        columnToShowBar = sortedColumnIndex;
        lastSortedScoreColumn = sortedColumnIndex; // Remember this score column
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) &&
               lastSortedScoreColumn !== null && SCORE_COLUMNS.includes(lastSortedScoreColumn)) {
        // If sorted by a non-score column, show bars for the *last sorted* score column
        columnToShowBar = lastSortedScoreColumn;
    } else {
        // Fallback: If no relevant sort or last sort, default to showing Elo bars
        columnToShowBar = ELO_COL_INDEX;
        lastSortedScoreColumn = ELO_COL_INDEX;
    }

    // Show the bars and error bars for the determined column
    if (columnToShowBar !== -1) {
        api.rows({ page: 'current' })
           .nodes()
           .to$()
           .find(`td:eq(${columnToShowBar}) .score-bar-container`) // Target the container
           .children('.eqbench3-score-bar, .error-bar') // Select both bar and error bar
           .show(); // Show them

        setScoreHeaderWidth(api, columnToShowBar); // Set the width for the header of the visible score column
    }

    
    /* ---------- End bar visibility logic ---------- */

    updateScoreBarColorsEQ3(); // Apply gradient colors to visible score bars
    collapseMiddleColumns(); // Handle mobile column collapsing
    updateFeatureHeatmapColors(); // Apply heatmap colors
  }


};
// --- End DataTable config ---

// --- Mobile Collapse Logic (Unchanged logic, relies on class) ---
let middleStatsExpanded = false;

function collapseMiddleColumns() {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const toggleButton = $('#toggleMiddleStats');
  const legend = $('#heatmapLegend');   // ← NEW

  if (isMobile) {
      toggleButton.removeClass('d-none').addClass('show-details-toggle-button');
      if (!middleStatsExpanded) {
          $('#leaderboard .mobile-collapsible').hide();
          toggleButton.text('Expand Details');
          legend.addClass('d-none');
      } else {
          $('#leaderboard .mobile-collapsible').show();
          toggleButton.text('Hide Details');
          legend.removeClass('d-none');
      }
  } else {
      // On desktop (and wider than mobile breakpoint), always show columns
      toggleButton.addClass('d-none').removeClass('show-details-toggle-button');
      legend.removeClass('d-none');
      $('#leaderboard .mobile-collapsible').show();
  }
  // Adjust DataTable layout AFTER showing/hiding columns
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Use a small delay to allow DOM updates before adjusting columns
      setTimeout(() => {
          $('#leaderboard').DataTable().columns.adjust();
      }, 10);
  }
}

/* ------------------------------------------------------------------
   Give every <th class="feature-header"> a tooltip link
   ------------------------------------------------------------------ */
/* ------------------------------------------------------------------
   Give every <th class="feature-header"> a tooltip link
   ------------------------------------------------------------------ */
function decorateFeatureHeaders(tableApi) {
  // 1) loop over all headers (thead AND tfoot) that are flagged as feature columns
  const tableNode = tableApi.table().node(); // Get the main table element
  tableNode.querySelectorAll('thead th.feature-header, tfoot th.feature-header') // <--- SELECT FROM BOTH THEAD AND TFOOT
            .forEach(th => {
    const label = th.textContent.trim();                   // e.g. "Empathy"

    // Check if it's already decorated (important to avoid infinite loops if called multiple times)
    if (th.querySelector('a[data-bs-toggle="tooltip"]')) return;

    const key   = label.toLowerCase().replace(/\s+/g, '_');  // "social_iq"
    const desc  = FEATURE_DESCRIPTIONS[key] || '';

    th.innerHTML = `
    <span class="feature-tooltip"
          tabindex="-1"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="${desc}">${label}</span>`;
  });

  // 2) (re)‑initialise Bootstrap 5 tooltips
  // Ensure Bootstrap is loaded before trying to initialize tooltips
    if (typeof bootstrap !== 'undefined' && typeof bootstrap.Tooltip !== 'undefined') {
        // Destroy existing tooltips first to prevent duplicates if re-run
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach(el => {
                    const existingTooltip = bootstrap.Tooltip.getInstance(el);
                    if (existingTooltip) {
                        existingTooltip.dispose();
                    }
                });
        // Initialize new tooltips
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach(el => new bootstrap.Tooltip(el));
    } else {
        console.warn("Bootstrap Tooltip component not found. Skipping initialization.");
    }
}


function toggleMiddleStats() {
  middleStatsExpanded = !middleStatsExpanded;
  collapseMiddleColumns();
}
// --- End Mobile Collapse Logic ---

// --- Initial Score Bar Fix (Ensures drawCallback runs) ---
function fixInitialScoreBars() {
  setTimeout(() => {
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Trigger a redraw which calls drawCallback to show default bars
      $('#leaderboard').DataTable().draw(false);
    }
  }, 50); // Short delay
}
// --- End Initial Score Bar Fix ---

// --- DataTable Initialization (Removed Slop Listener) ---
function initializeDataTable() {
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    // Unbind previous listeners
    $('#leaderboardBody').off('click', '.abilities-info-icon');
    $('#leaderboardBody').off('click', '.style-info-icon');
  }

  cloneHeaderToFooter();

  setupModelSizeFilter();
  let table = $('#leaderboard').DataTable(dataTableConfig);
  decorateFeatureHeaders(table);          // make headers pretty


  // --- Event Listeners for Icons ---
  // Abilities icon listener
  $('#leaderboardBody').on('click', '.abilities-info-icon', function() {
    const modelName = $(this).data('model-name');
    showAbilitiesModal(modelName);
  });

  // Style icon listener (If re-enabled later)
  // $('#leaderboardBody').on('click', '.style-info-icon', function() {
  //   const modelName = $(this).data('model-name');
  //   showStyleModal(modelName);
  // });
  // --- End Event Listeners ---

  table.one('init.dt', function() {
    collapseMiddleColumns(); // Set initial mobile column visibility
    fixInitialScoreBars(); // Ensure default score bars are shown correctly
    updateFeatureHeatmapColors();
  });

  table.on('draw.dt', function() {
      updateFeatureHeatmapColors(); // Ensure heatmap colors update on redraw
      // Note: Score bar colors and visibility are handled within drawCallback now
  });

  /* Row-select ➜ highlight + inline header   (only when a feature-cell is clicked) */
  $('#leaderboard tbody').on('click','tr',function (e){
    const $cell = $(e.target).closest('td');
    /* proceed only if the clicked cell is one of the feature columns */
    if (!$cell.hasClass('feature-cell')) return;

    const $table = $('#leaderboard');
    const api    = $table.DataTable();
    const $row   = $(this);

    /* ignore clicks on the synthetic header row itself */
    if ($row.hasClass('floating-header-row')) return;

    const alreadySelected = $row.hasClass('selected-row');

    /* clear any previous selection & inline header */
    $table.find('.floating-header-row, .stripe-buffer-row').remove();
    api.rows().nodes().to$().removeClass('selected-row');

    if (alreadySelected) return;          /* toggle off on second click */

    /* mark new selection */
    $row.addClass('selected-row');

    /* Only add an inline header when there’s at least one visible row above.
      (Prevents a duplicate header when the very first row is selected.) */
    // 1) clone the header
    const $headerClone = $table.find('thead tr')
                                .first()
                                .clone()
                                .addClass('floating-header-row');
    
    // 2) build a zero-height buffer row to restore stripe parity
    const $buffer = $('<tr class="stripe-buffer-row">')
                      .html(`<td colspan="${TOTAL_COLS}"></td>`);
    
    // 3) insert buffer + header before the selected row
    $row.before($buffer).before($headerClone);

  });


}
// --- End DataTable Initialization ---

// --- Control Setup (Sliders - Kept for structure, but inactive) ---
function setupControls() {
  // This function remains but won't find active sliders to attach listeners to
  const vocabSlider = document.getElementById('vocabControlSlider');
  const vocabSliderValueLabel = document.getElementById('vocabControlValue');
  const gptSlopSlider = document.getElementById('gptSlopControlSlider');
  const gptSlopSliderValueLabel = document.getElementById('gptSlopControlValue');

  if (vocabSlider && vocabSliderValueLabel) {
      vocabSliderValueLabel.textContent = `${vocabSlider.value}%`;
  }
  if (gptSlopSlider && gptSlopSliderValueLabel) {
      gptSlopSliderValueLabel.textContent = `${gptSlopSlider.value}%`;
  }
}
// --- End Control Setup ---

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
  displayEncodedEmail();
  setupDarkModeToggle();
  refreshHeatmapLegend();     // draw legend once everything is ready


  if (document.getElementById('leaderboard')) {
    loadLeaderboardData(); // Load data and build table

    // Setup responsive behavior
    $(window).on('resize', collapseMiddleColumns);
    $('#toggleMiddleStats').on('click', toggleMiddleStats);
    // Initial check needed after table init, handled by init.dt callback now
    // setTimeout(collapseMiddleColumns, 50); // No longer needed here
  } else {
      console.error("Leaderboard container not found in the DOM.");
  }
});

/* one‑time hook after initialisation */
$(window).on('resize.scoreHeader', () => {
  if (lastSortedScoreColumn != null && $.fn.DataTable.isDataTable('#leaderboard')) {
      const api = $('#leaderboard').DataTable();
      // Check if the column index is valid before setting width
      if (api.column(lastSortedScoreColumn).header()) {
          setScoreHeaderWidth(api, lastSortedScoreColumn);
      }
  }
});
// --- End DOMContentLoaded ---