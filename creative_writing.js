// creative_writing_v3.js


let leaderboardDataCreativeWritingV3 = `model_name,elo_score,creative_writing_score,avg_length,vocab_complexity,slop_score,repetition_score
o3,1658.2,17.53,7864,36.45,17.33,4.15
claude-opus-4,1650.0,16.75,5774,35.99,17.44,6.43
chatgpt-4o-latest-2025-03-27,1517.3,16.98,5956,28.29,24.76,6.70
claude-sonnet-4,1516.1,16.61,6125,42.48,19.56,6.69
deepseek-ai/DeepSeek-V3-0324,1505.0,16.32,4414,24.28,33.02,7.86
deepseek-ai/DeepSeek-R1,1500.0,16.92,5352,29.20,31.21,5.79
claude-3-5-sonnet-20241022,1473.9,15.63,4921,39.27,19.82,5.98
deepseek-ai/DeepSeek-R1-0528,1420.7,17.25,7557,38.25,40.60,6.46
optimus-alpha,1397.2,16.75,5937,31.02,25.36,6.07
gpt-4.1,1387.9,16.80,5997,29.33,24.35,5.95
claude-3-7-sonnet-20250219,1386.9,16.60,6327,39.58,23.66,5.46
gemini-2.5-pro-exp-03-25,1370.3,17.20,7886,41.00,35.06,6.30
chatgpt-4o-latest-2025-01-29,1358.6,16.35,5622,29.04,29.09,7.30
qwen/qwen3-235b-a22b:thinking,1344.7,16.72,5530,30.07,29.03,6.26
quasar-alpha,1321.7,16.69,6671,35.15,30.02,5.74
qwen/qwq-32b,1275.0,16.48,6126,29.23,34.74,6.41
google/gemma-3-27b-it,1272.6,16.39,7049,42.62,35.73,9.19
RekaAI/reka-flash-3,1251.9,16.00,5225,29.53,37.81,7.01
gpt-4.5-preview,1178.0,16.31,6451,46.41,41.58,6.98
grok-3-beta,1134.0,16.64,7022,37.17,33.88,6.41
anthropic/claude-3.5-haiku-20241022,1122.0,12.64,4016,60.14,22.00,9.13
gpt-4.1-mini,1096.5,15.35,5606,36.33,40.02,8.17
google/gemma-3-4b-it,1089.6,15.94,6509,51.77,48.78,12.30
gemini-2.5-flash-preview,1082.8,16.28,7042,42.68,44.71,10.06
CohereForAI/c4ai-command-a-03-2025,1075.2,16.10,6691,32.24,39.86,9.20
gemini-2.0-flash-001,1068.0,15.68,6208,37.66,46.45,10.09
google/gemma-3-12b-it,1065.9,15.98,7150,45.86,44.30,8.92
sam-paech/Darkest-muse-v1,1033.6,16.04,8184,39.50,42.09,11.13
allura-org/Gemma-3-Glitter-12B,1027.1,15.74,7934,41.37,43.91,9.36
THUDM/GLM-4-32B-0414,982.1,15.21,9796,39.29,44.13,11.31
mistralai/mistral-large-2411,942.3,13.42,5641,31.55,48.78,14.93
gpt-4.1-nano,929.6,14.54,6190,41.28,44.92,8.52
ifable/gemma-2-Ifable-9B,925.6,15.26,5324,66.98,43.29,7.88
mistralai/Pixtral-Large-Instruct-2411,917.4,13.55,6244,31.19,47.09,12.81
meta-llama/llama-3.1-405b-instruct,914.1,11.53,4531,41.56,45.09,15.14
mistralai/Mistral-Nemo-Instruct-2407,858.0,12.40,7013,30.32,56.72,18.93
ToastyPigeon/Gemma-3-Starshine-12B,824.7,12.48,7973,29.74,46.09,14.24
google/gemma-2-9b-it,821.7,11.16,4120,39.98,67.68,16.78
gpt-4o-mini,815.3,14.06,5999,41.70,44.02,10.62
liquid/lfm-7b,770.7,11.99,6230,49.84,57.57,10.95
meta-llama/Llama-4-Maverick-17B-128E-Instruct,766.9,12.25,5298,38.60,49.29,15.05
meta-llama/llama-3.1-70b-instruct,724.3,10.84,4502,39.85,47.79,15.82
mistralai/mistral-small-3.1-24b-instruct-2503,708.6,10.16,7900,28.80,62.21,24.81
meta-llama/Llama-4-Scout-17B-16E-Instruct,673.9,11.00,6966,37.50,47.64,18.31
mistralai/Mistral-Small-24B-Instruct-2501,663.1,10.10,7660,32.53,62.86,27.39
openai/gpt-4-0314,660.1,12.15,5378,41.81,41.57,12.09
meta-llama/llama-3.1-8b-instruct,614.0,10.56,4709,37.45,53.28,16.56
anthropic/claude-3-haiku,607.7,11.43,5008,41.11,44.89,10.80
meta-llama/llama-3.2-3b-instruct,534.8,9.28,4759,37.38,57.45,21.90
openai/gpt-3.5-turbo-0613,373.2,8.72,3400,42.88,53.15,17.15
meta-llama/llama-3.2-1b-instruct,200.0,7.27,5290,38.32,61.12,27.21`


const slopData = `##### o3
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/o3__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/o3__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for o3' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/o3__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/o3__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for o3' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.795)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b:thinking (distance=0.813)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.817)</div>
<div class='slop-similar'>optimus-alpha (distance=0.817)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.824)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>clanged</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glimmered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flagstones</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>lacquered</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>yawned</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>trembles</span> <span class='slop-word-item'>dripped</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>smudged</span> <span class='slop-word-item'>unravels</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>metronome</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>sternum</span> <span class='slop-word-item'>pivoted</span> <span class='slop-word-item'>shelving</span> <span class='slop-word-item'>inhales</span> <span class='slop-word-item'>plinth</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>blinks</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>feels like (22)</span> <span class='slop-ngram-item'>first time (18)</span> <span class='slop-ngram-item'>felt like (18)</span> <span class='slop-ngram-item'>five minutes (15)</span> <span class='slop-ngram-item'>last night (14)</span> <span class='slop-ngram-item'>right arm (13)</span> <span class='slop-ngram-item'>sound like (12)</span> <span class='slop-ngram-item'>tilts head (12)</span> <span class='slop-ngram-item'>looked like (12)</span> <span class='slop-ngram-item'>feel like (11)</span> <span class='slop-ngram-item'>left foot (11)</span> <span class='slop-ngram-item'>red light (11)</span> <span class='slop-ngram-item'>someone else (11)</span> <span class='slop-ngram-item'>says voice (11)</span> <span class='slop-ngram-item'>like distant (11)</span> <span class='slop-ngram-item'>long enough (10)</span> <span class='slop-ngram-item'>right foot (10)</span> <span class='slop-ngram-item'>right heel (9)</span> <span class='slop-ngram-item'>left hand (9)</span> <span class='slop-ngram-item'>cleared throat (9)</span> <span class='slop-ngram-item'>next time (9)</span> <span class='slop-ngram-item'>eye contact (8)</span> <span class='slop-ngram-item'>thirty seconds (8)</span> <span class='slop-ngram-item'>opened mouth (8)</span> <span class='slop-ngram-item'>voice low (8)</span> <span class='slop-ngram-item'>said voice (8)</span> <span class='slop-ngram-item'>look like (8)</span> <span class='slop-ngram-item'>one hand (8)</span> <span class='slop-ngram-item'>even though (8)</span> <span class='slop-ngram-item'>eyes flick (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>first time since (4)</span> <span class='slop-ngram-item'>hair behind ear (3)</span> <span class='slop-ngram-item'>eyes flick toward (3)</span> <span class='slop-ngram-item'>five minutes ago (3)</span> <span class='slop-ngram-item'>like distant thunder (3)</span> <span class='slop-ngram-item'>asks wan na (2)</span> <span class='slop-ngram-item'>one final time (2)</span> <span class='slop-ngram-item'>smiled though greeting (2)</span> <span class='slop-ngram-item'>opened mouth closed (2)</span> <span class='slop-ngram-item'>strand hair behind (2)</span> <span class='slop-ngram-item'>sharp could slice (2)</span> <span class='slop-ngram-item'>six months ago (2)</span> <span class='slop-ngram-item'>said last licking (2)</span> <span class='slop-ngram-item'>whatever comes next (2)</span> <span class='slop-ngram-item'>beneath striped awning (2)</span> <span class='slop-ngram-item'>knuckles whiten around (2)</span> <span class='slop-ngram-item'>five minutes drag (2)</span> <span class='slop-ngram-item'>like wind across (2)</span> <span class='slop-ngram-item'>freedom tastes like (2)</span> <span class='slop-ngram-item'>like heat asphalt (2)</span> <span class='slop-ngram-item'>says voice smooth (2)</span> <span class='slop-ngram-item'>breaking eye contact (2)</span> <span class='slop-ngram-item'>curl behind ear (2)</span> <span class='slop-ngram-item'>every six hours (2)</span> <span class='slop-ngram-item'>stairs two time (2)</span> <span class='slop-ngram-item'>feel like malfunctioning (2)</span> <span class='slop-ngram-item'>like malfunctioning robot (2)</span> <span class='slop-ngram-item'>silence feels like (2)</span>
</div>

##### claude-opus-4
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-opus-4__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-opus-4__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for claude-opus-4' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-opus-4__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-opus-4__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for claude-opus-4' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-sonnet-4 (distance=0.769)</div>
<div class='slop-similar'>claude-3-5-sonnet-20241022 (distance=0.788)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.799)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.854)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.857)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>writhe</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>sprawled</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>kira</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>materialized</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>whitmore</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>euclid</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>ducked</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>scarred</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>circling</span> <span class='slop-word-item'>kepler</span> <span class='slop-word-item'>gleam</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>tentacles</span> <span class='slop-word-item'>yanked</span> <span class='slop-word-item'>anomalies</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>stench</span> <span class='slop-word-item'>shuffling</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>temporal</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>diagonal</span> <span class='slop-word-item'>stared</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>chen wei (25)</span> <span class='slop-ngram-item'>look like (21)</span> <span class='slop-ngram-item'>last week (20)</span> <span class='slop-ngram-item'>first time (19)</span> <span class='slop-ngram-item'>something else (17)</span> <span class='slop-ngram-item'>feels like (17)</span> <span class='slop-ngram-item'>close enough (14)</span> <span class='slop-ngram-item'>marcus chen (12)</span> <span class='slop-ngram-item'>morning sun (12)</span> <span class='slop-ngram-item'>three days (12)</span> <span class='slop-ngram-item'>feel like (11)</span> <span class='slop-ngram-item'>sound like (11)</span> <span class='slop-ngram-item'>six months (11)</span> <span class='slop-ngram-item'>months ago (11)</span> <span class='slop-ngram-item'>last month (10)</span> <span class='slop-ngram-item'>could see (10)</span> <span class='slop-ngram-item'>shadows across (10)</span> <span class='slop-ngram-item'>like smoke (10)</span> <span class='slop-ngram-item'>next time (10)</span> <span class='slop-ngram-item'>sounds like (9)</span> <span class='slop-ngram-item'>could hear (9)</span> <span class='slop-ngram-item'>go back (9)</span> <span class='slop-ngram-item'>looked like (9)</span> <span class='slop-ngram-item'>leaned forward (9)</span> <span class='slop-ngram-item'>practiced ease (9)</span> <span class='slop-ngram-item'>could help (9)</span> <span class='slop-ngram-item'>leather jacket (9)</span> <span class='slop-ngram-item'>like dying (8)</span> <span class='slop-ngram-item'>say something (8)</span> <span class='slop-ngram-item'>us like (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>cast long shadows (7)</span> <span class='slop-ngram-item'>morning sun cast (6)</span> <span class='slop-ngram-item'>sun cast long (6)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span> <span class='slop-ngram-item'>class euclid special (6)</span> <span class='slop-ngram-item'>euclid special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>six months ago (5)</span> <span class='slop-ngram-item'>long shadows across (5)</span> <span class='slop-ngram-item'>like normal human (4)</span> <span class='slop-ngram-item'>like water finding (4)</span> <span class='slop-ngram-item'>place around corner (4)</span> <span class='slop-ngram-item'>sometimes feel like (4)</span> <span class='slop-ngram-item'>closer close enough (4)</span> <span class='slop-ngram-item'>twenty minutes later (4)</span> <span class='slop-ngram-item'>laughed sound like (3)</span> <span class='slop-ngram-item'>like everything else (3)</span> <span class='slop-ngram-item'>mirror behind bar (3)</span> <span class='slop-ngram-item'>something else entirely (3)</span> <span class='slop-ngram-item'>seen better decades (3)</span> <span class='slop-ngram-item'>said without looking (3)</span> <span class='slop-ngram-item'>like breaking glass (3)</span> <span class='slop-ngram-item'>sounds like dying (2)</span> <span class='slop-ngram-item'>hair pulled back (2)</span> <span class='slop-ngram-item'>like advanced calculus (2)</span> <span class='slop-ngram-item'>spent three hours (2)</span> <span class='slop-ngram-item'>watching youtube videos (2)</span> <span class='slop-ngram-item'>time moves differently (2)</span> <span class='slop-ngram-item'>morning air carried (2)</span>
</div>

##### chatgpt-4o-latest-2025-03-27
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-03-27__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-03-27__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for chatgpt-4o-latest-2025-03-27' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-03-27__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-03-27__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for chatgpt-4o-latest-2025-03-27' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.726)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.726)</div>
<div class='slop-similar'>optimus-alpha (distance=0.734)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-01-29 (distance=0.754)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.758)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>smudged</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>squinting</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>kessler</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>grinning</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>spiraling</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>rusted</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>look like (26)</span> <span class='slop-ngram-item'>voice low (25)</span> <span class='slop-ngram-item'>feel like (23)</span> <span class='slop-ngram-item'>said voice (22)</span> <span class='slop-ngram-item'>smells like (21)</span> <span class='slop-ngram-item'>felt like (17)</span> <span class='slop-ngram-item'>looked like (17)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>sound like (17)</span> <span class='slop-ngram-item'>one hand (17)</span> <span class='slop-ngram-item'>like someone (16)</span> <span class='slop-ngram-item'>sounds like (16)</span> <span class='slop-ngram-item'>say something (16)</span> <span class='slop-ngram-item'>feels like (15)</span> <span class='slop-ngram-item'>says voice (14)</span> <span class='slop-ngram-item'>someone else (14)</span> <span class='slop-ngram-item'>something else (13)</span> <span class='slop-ngram-item'>last week (13)</span> <span class='slop-ngram-item'>like trying (12)</span> <span class='slop-ngram-item'>say anything (11)</span> <span class='slop-ngram-item'>air thick (11)</span> <span class='slop-ngram-item'>looks like (11)</span> <span class='slop-ngram-item'>next time (10)</span> <span class='slop-ngram-item'>slow deliberate (10)</span> <span class='slop-ngram-item'>air like (10)</span> <span class='slop-ngram-item'>leaned back (10)</span> <span class='slop-ngram-item'>stepped forward (10)</span> <span class='slop-ngram-item'>tilts head (9)</span> <span class='slop-ngram-item'>maybe maybe (9)</span> <span class='slop-ngram-item'>feel something (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>said voice smooth (4)</span> <span class='slop-ngram-item'>hung air like (4)</span> <span class='slop-ngram-item'>says voice low (4)</span> <span class='slop-ngram-item'>close enough smell (4)</span> <span class='slop-ngram-item'>description refers series (4)</span> <span class='slop-ngram-item'>says stepping closer (3)</span> <span class='slop-ngram-item'>let silence stretch (3)</span> <span class='slop-ngram-item'>like second skin (3)</span> <span class='slop-ngram-item'>far end bar (3)</span> <span class='slop-ngram-item'>slides onto stool (3)</span> <span class='slop-ngram-item'>two days ago (3)</span> <span class='slop-ngram-item'>say something else (3)</span> <span class='slop-ngram-item'>way looked last (3)</span> <span class='slop-ngram-item'>reflection hallway mirror (3)</span> <span class='slop-ngram-item'>asked voice low (3)</span> <span class='slop-ngram-item'>like nothing like (3)</span> <span class='slop-ngram-item'>leans back chair (3)</span> <span class='slop-ngram-item'>bite inside cheek (3)</span> <span class='slop-ngram-item'>asks voice low (3)</span> <span class='slop-ngram-item'>air thick scent (3)</span> <span class='slop-ngram-item'>look like got (3)</span> <span class='slop-ngram-item'>looked like someone (3)</span> <span class='slop-ngram-item'>heart pounding know (2)</span> <span class='slop-ngram-item'>stained glass windows (2)</span> <span class='slop-ngram-item'>eyes never leaving (2)</span> <span class='slop-ngram-item'>shadows across damp (2)</span> <span class='slop-ngram-item'>says voice soft (2)</span>
</div>

##### claude-sonnet-4
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-sonnet-4__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-sonnet-4__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for claude-sonnet-4' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-sonnet-4__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-sonnet-4__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for claude-sonnet-4' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-opus-4 (distance=0.769)</div>
<div class='slop-similar'>claude-3-5-sonnet-20241022 (distance=0.792)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.824)</div>
<div class='slop-similar'>optimus-alpha (distance=0.857)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.860)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kenji</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>yuki</span> <span class='slop-word-item'>hartwell</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>dreads</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>crystallized</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>synthesizer</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>pemberton</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>predatory</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>methodical</span> <span class='slop-word-item'>weathered</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>martinez</span> <span class='slop-word-item'>drifts</span> <span class='slop-word-item'>cheerfully</span> <span class='slop-word-item'>circled</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>knuckles</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>circling</span> <span class='slop-word-item'>swaying</span> <span class='slop-word-item'>clutching</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>close enough (27)</span> <span class='slop-ngram-item'>something else (26)</span> <span class='slop-ngram-item'>first time (21)</span> <span class='slop-ngram-item'>three years (19)</span> <span class='slop-ngram-item'>look like (17)</span> <span class='slop-ngram-item'>sound like (17)</span> <span class='slop-ngram-item'>looked like (17)</span> <span class='slop-ngram-item'>say something (16)</span> <span class='slop-ngram-item'>dark eyes (15)</span> <span class='slop-ngram-item'>could see (15)</span> <span class='slop-ngram-item'>voice carried (14)</span> <span class='slop-ngram-item'>felt like (14)</span> <span class='slop-ngram-item'>three days (13)</span> <span class='slop-ngram-item'>voice carrying (13)</span> <span class='slop-ngram-item'>feel like (13)</span> <span class='slop-ngram-item'>like someone (12)</span> <span class='slop-ngram-item'>looks like (12)</span> <span class='slop-ngram-item'>closer close (10)</span> <span class='slop-ngram-item'>else entirely (10)</span> <span class='slop-ngram-item'>feels like (10)</span> <span class='slop-ngram-item'>every instinct (10)</span> <span class='slop-ngram-item'>years ago (10)</span> <span class='slop-ngram-item'>sounds like (10)</span> <span class='slop-ngram-item'>three months (10)</span> <span class='slop-ngram-item'>last week (10)</span> <span class='slop-ngram-item'>right hand (10)</span> <span class='slop-ngram-item'>last time (9)</span> <span class='slop-ngram-item'>voice carries (9)</span> <span class='slop-ngram-item'>three hours (9)</span> <span class='slop-ngram-item'>muscle memory (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>closer close enough (10)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>close enough smell (6)</span> <span class='slop-ngram-item'>close enough see (5)</span> <span class='slop-ngram-item'>close enough could (5)</span> <span class='slop-ngram-item'>could cut glass (4)</span> <span class='slop-ngram-item'>despite every instinct (4)</span> <span class='slop-ngram-item'>heavy oak door (4)</span> <span class='slop-ngram-item'>felt chill nothing (4)</span> <span class='slop-ngram-item'>three years ago (4)</span> <span class='slop-ngram-item'>words hit like (4)</span> <span class='slop-ngram-item'>heart hammered ribs (4)</span> <span class='slop-ngram-item'>first time since (4)</span> <span class='slop-ngram-item'>gestured toward door (3)</span> <span class='slop-ngram-item'>look like could (3)</span> <span class='slop-ngram-item'>look like someone (3)</span> <span class='slop-ngram-item'>one fluid motion (3)</span> <span class='slop-ngram-item'>hangs air like (3)</span> <span class='slop-ngram-item'>front close enough (3)</span> <span class='slop-ngram-item'>closer voice dropping (3)</span> <span class='slop-ngram-item'>something else something (3)</span> <span class='slop-ngram-item'>already moving toward (3)</span> <span class='slop-ngram-item'>moved closer close (3)</span> <span class='slop-ngram-item'>quiet long moment (3)</span> <span class='slop-ngram-item'>voice barely whisper (3)</span> <span class='slop-ngram-item'>every instinct telling (3)</span> <span class='slop-ngram-item'>last time someone (3)</span> <span class='slop-ngram-item'>first time months (3)</span> <span class='slop-ngram-item'>actually listens people (3)</span> <span class='slop-ngram-item'>like broken teeth (3)</span>
</div>

##### deepseek-ai/DeepSeek-V3-0324
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-V3-0324__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-V3-0324__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for deepseek-ai/DeepSeek-V3-0324' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-V3-0324__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-V3-0324__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for deepseek-ai/DeepSeek-V3-0324' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>chatgpt-4o-latest-2025-01-29 (distance=0.701)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.726)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.762)</div>
<div class='slop-similar'>optimus-alpha (distance=0.765)</div>
<div class='slop-similar'>grok-3-beta (distance=0.765)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>tugged</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>mutter</span> <span class='slop-word-item'>leans</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>tilts head (22)</span> <span class='slop-ngram-item'>next time (18)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>look like (15)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>air thick (14)</span> <span class='slop-ngram-item'>something else (13)</span> <span class='slop-ngram-item'>voice low (13)</span> <span class='slop-ngram-item'>rolled eyes (13)</span> <span class='slop-ngram-item'>sound like (13)</span> <span class='slop-ngram-item'>say something (12)</span> <span class='slop-ngram-item'>leaned back (11)</span> <span class='slop-ngram-item'>thick scent (11)</span> <span class='slop-ngram-item'>fingers twitch (11)</span> <span class='slop-ngram-item'>slow deliberate (10)</span> <span class='slop-ngram-item'>arms crossed (10)</span> <span class='slop-ngram-item'>said voice (10)</span> <span class='slop-ngram-item'>leaned forward (10)</span> <span class='slop-ngram-item'>feel like (10)</span> <span class='slop-ngram-item'>stepped closer (9)</span> <span class='slop-ngram-item'>fingers brushing (9)</span> <span class='slop-ngram-item'>long moment (9)</span> <span class='slop-ngram-item'>exhaled nose (9)</span> <span class='slop-ngram-item'>looked like (8)</span> <span class='slop-ngram-item'>last week (8)</span> <span class='slop-ngram-item'>says voice (8)</span> <span class='slop-ngram-item'>pulse hammered (8)</span> <span class='slop-ngram-item'>air smelled (8)</span> <span class='slop-ngram-item'>dim light (8)</span> <span class='slop-ngram-item'>close enough (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>air thick scent (8)</span> <span class='slop-ngram-item'>thick scent damp (6)</span> <span class='slop-ngram-item'>something else something (5)</span> <span class='slop-ngram-item'>scent damp earth (5)</span> <span class='slop-ngram-item'>pinched bridge nose (4)</span> <span class='slop-ngram-item'>say something else (4)</span> <span class='slop-ngram-item'>special containment procedures (4)</span> <span class='slop-ngram-item'>pulse hammered throat (4)</span> <span class='slop-ngram-item'>smile reach eyes (4)</span> <span class='slop-ngram-item'>neither us moves (3)</span> <span class='slop-ngram-item'>lingered second long (3)</span> <span class='slop-ngram-item'>tilted head studying (3)</span> <span class='slop-ngram-item'>gaze dropped mouth (3)</span> <span class='slop-ngram-item'>fingers tightened around (3)</span> <span class='slop-ngram-item'>casting long shadows (3)</span> <span class='slop-ngram-item'>damp earth something (3)</span> <span class='slop-ngram-item'>opened mouth closed (3)</span> <span class='slop-ngram-item'>faint metallic tang (3)</span> <span class='slop-ngram-item'>like everything else (3)</span> <span class='slop-ngram-item'>item object class (3)</span> <span class='slop-ngram-item'>say something anything (3)</span> <span class='slop-ngram-item'>casting jagged shadows (3)</span> <span class='slop-ngram-item'>jagged shadows across (3)</span> <span class='slop-ngram-item'>mouth back hand (3)</span> <span class='slop-ngram-item'>fingers tighten around (3)</span> <span class='slop-ngram-item'>half one go (3)</span> <span class='slop-ngram-item'>breath coming fast (3)</span> <span class='slop-ngram-item'>dark hair pulled (3)</span> <span class='slop-ngram-item'>thought first time (2)</span> <span class='slop-ngram-item'>says voice low (2)</span>
</div>

##### deepseek-ai/DeepSeek-R1
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for deepseek-ai/DeepSeek-R1' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for deepseek-ai/DeepSeek-R1' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.701)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.722)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b:thinking (distance=0.746)</div>
<div class='slop-similar'>grok-3-beta (distance=0.780)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.784)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>talis</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>guttered</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>glints</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>grazes</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>liang</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>frayed</span> <span class='slop-word-item'>bergamot</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>jabbed</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>clattering</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>threadbare</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>murmured</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (19)</span> <span class='slop-ngram-item'>sound like (18)</span> <span class='slop-ngram-item'>last week (16)</span> <span class='slop-ngram-item'>next time (15)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>tilts head (13)</span> <span class='slop-ngram-item'>look like (13)</span> <span class='slop-ngram-item'>say something (12)</span> <span class='slop-ngram-item'>red light (11)</span> <span class='slop-ngram-item'>old man (10)</span> <span class='slop-ngram-item'>leaned forward (9)</span> <span class='slop-ngram-item'>voice cracks (9)</span> <span class='slop-ngram-item'>gloved hand (8)</span> <span class='slop-ngram-item'>steps closer (8)</span> <span class='slop-ngram-item'>nail polish (8)</span> <span class='slop-ngram-item'>air smelled (8)</span> <span class='slop-ngram-item'>reach eyes (8)</span> <span class='slop-ngram-item'>wan na (8)</span> <span class='slop-ngram-item'>jagged shadows (7)</span> <span class='slop-ngram-item'>like old (7)</span> <span class='slop-ngram-item'>last month (7)</span> <span class='slop-ngram-item'>solar panel (7)</span> <span class='slop-ngram-item'>three days (7)</span> <span class='slop-ngram-item'>like dying (7)</span> <span class='slop-ngram-item'>gaze flicks (7)</span> <span class='slop-ngram-item'>smile reach (7)</span> <span class='slop-ngram-item'>feels like (7)</span> <span class='slop-ngram-item'>phone buzzes (7)</span> <span class='slop-ngram-item'>gon na (7)</span> <span class='slop-ngram-item'>casting jagged (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile reach eyes (7)</span> <span class='slop-ngram-item'>casting jagged shadows (6)</span> <span class='slop-ngram-item'>jagged shadows across (5)</span> <span class='slop-ngram-item'>word count condensed (5)</span> <span class='slop-ngram-item'>pinched bridge nose (4)</span> <span class='slop-ngram-item'>object class keter (4)</span> <span class='slop-ngram-item'>special containment procedures (4)</span> <span class='slop-ngram-item'>chipped nail polish (4)</span> <span class='slop-ngram-item'>count condensed meet (4)</span> <span class='slop-ngram-item'>door slams open (4)</span> <span class='slop-ngram-item'>looked less like (3)</span> <span class='slop-ngram-item'>air smelled ozone (3)</span> <span class='slop-ngram-item'>note site director (3)</span> <span class='slop-ngram-item'>arms loose fingers (3)</span> <span class='slop-ngram-item'>chipped black nail (3)</span> <span class='slop-ngram-item'>black nail polish (3)</span> <span class='slop-ngram-item'>words hang us (3)</span> <span class='slop-ngram-item'>air clung thick (3)</span> <span class='slop-ngram-item'>night last week (2)</span> <span class='slop-ngram-item'>leaned closer breath (2)</span> <span class='slop-ngram-item'>closer breath sour (2)</span> <span class='slop-ngram-item'>breath stirs hair (2)</span> <span class='slop-ngram-item'>pupils blown wide (2)</span> <span class='slop-ngram-item'>pressed forehead cold (2)</span> <span class='slop-ngram-item'>veyra leaned forward (2)</span> <span class='slop-ngram-item'>eye swollen shut (2)</span> <span class='slop-ngram-item'>thumb brushed wrist (2)</span> <span class='slop-ngram-item'>like feral thing (2)</span> <span class='slop-ngram-item'>like question mark (2)</span> <span class='slop-ngram-item'>feels smaller suddenly (2)</span>
</div>

##### claude-3-5-sonnet-20241022
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-5-sonnet-20241022__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-5-sonnet-20241022__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for claude-3-5-sonnet-20241022' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-5-sonnet-20241022__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-5-sonnet-20241022__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for claude-3-5-sonnet-20241022' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-opus-4 (distance=0.788)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.792)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.824)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.860)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.864)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>absently</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mari</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>dreads</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>materialized</span> <span class='slop-word-item'>salvaged</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>whispers</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>ripples</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>nodding</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>weathered</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>pauses</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>perched</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>wiping</span> <span class='slop-word-item'>practiced</span> <span class='slop-word-item'>strings</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>temporal</span> <span class='slop-word-item'>crimson</span> <span class='slop-word-item'>grin</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else (19)</span> <span class='slop-ngram-item'>first time (18)</span> <span class='slop-ngram-item'>last week (15)</span> <span class='slop-ngram-item'>tomorrow would (15)</span> <span class='slop-ngram-item'>next week (12)</span> <span class='slop-ngram-item'>look like (12)</span> <span class='slop-ngram-item'>say something (12)</span> <span class='slop-ngram-item'>maybe could (11)</span> <span class='slop-ngram-item'>one last (10)</span> <span class='slop-ngram-item'>could feel (10)</span> <span class='slop-ngram-item'>next time (10)</span> <span class='slop-ngram-item'>years ago (10)</span> <span class='slop-ngram-item'>feels like (10)</span> <span class='slop-ngram-item'>could see (9)</span> <span class='slop-ngram-item'>last night (9)</span> <span class='slop-ngram-item'>something like (9)</span> <span class='slop-ngram-item'>morning sun (8)</span> <span class='slop-ngram-item'>would make (8)</span> <span class='slop-ngram-item'>last time (8)</span> <span class='slop-ngram-item'>one final (8)</span> <span class='slop-ngram-item'>three months (8)</span> <span class='slop-ngram-item'>nothing like (8)</span> <span class='slop-ngram-item'>says voice (7)</span> <span class='slop-ngram-item'>feel like (7)</span> <span class='slop-ngram-item'>better left (7)</span> <span class='slop-ngram-item'>said voice (7)</span> <span class='slop-ngram-item'>deep breath (7)</span> <span class='slop-ngram-item'>muscle memory (7)</span> <span class='slop-ngram-item'>would say (7)</span> <span class='slop-ngram-item'>something new (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something (6)</span> <span class='slop-ngram-item'>security footage shows (5)</span> <span class='slop-ngram-item'>one final time (5)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>could change everything (4)</span> <span class='slop-ngram-item'>slides onto stool (3)</span> <span class='slop-ngram-item'>smile reach eyes (3)</span> <span class='slop-ngram-item'>close enough could (3)</span> <span class='slop-ngram-item'>three years ago (3)</span> <span class='slop-ngram-item'>though must admit (3)</span> <span class='slop-ngram-item'>knock door interrupted (3)</span> <span class='slop-ngram-item'>something else entirely (3)</span> <span class='slop-ngram-item'>laughed sound like (3)</span> <span class='slop-ngram-item'>fingers trembling slightly (3)</span> <span class='slop-ngram-item'>time next week (3)</span> <span class='slop-ngram-item'>looked really looked (3)</span> <span class='slop-ngram-item'>could shake feeling (3)</span> <span class='slop-ngram-item'>avoiding copyrighted material (2)</span> <span class='slop-ngram-item'>whole room seems (2)</span> <span class='slop-ngram-item'>going get us (2)</span> <span class='slop-ngram-item'>quite reaching eyes (2)</span> <span class='slop-ngram-item'>phone number words (2)</span> <span class='slop-ngram-item'>walking back toward (2)</span> <span class='slop-ngram-item'>enough could smell (2)</span> <span class='slop-ngram-item'>like puppet strings (2)</span> <span class='slop-ngram-item'>ready strike oh (2)</span> <span class='slop-ngram-item'>getting real tired (2)</span> <span class='slop-ngram-item'>smile quite reach (2)</span> <span class='slop-ngram-item'>sporting goods store (2)</span> <span class='slop-ngram-item'>looked suspiciously like (2)</span>
</div>

##### deepseek-ai/DeepSeek-R1-0528
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1-0528__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1-0528__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for deepseek-ai/DeepSeek-R1-0528' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1-0528__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/deepseek-ai__DeepSeek-R1-0528__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for deepseek-ai/DeepSeek-R1-0528' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-exp-03-25 (distance=0.734)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.765)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.773)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.795)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.810)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>chroniton</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>steepled</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>dully</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>holstered</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>terran</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>stapler</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>fractionally</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>rumpled</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>hitches</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>flickers</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (65)</span> <span class='slop-ngram-item'>something else (27)</span> <span class='slop-ngram-item'>feels like (27)</span> <span class='slop-ngram-item'>voice low (24)</span> <span class='slop-ngram-item'>dark eyes (21)</span> <span class='slop-ngram-item'>sound like (20)</span> <span class='slop-ngram-item'>said voice (18)</span> <span class='slop-ngram-item'>leaned forward (16)</span> <span class='slop-ngram-item'>voice dropping (16)</span> <span class='slop-ngram-item'>look like (15)</span> <span class='slop-ngram-item'>looks like (14)</span> <span class='slop-ngram-item'>red light (13)</span> <span class='slop-ngram-item'>gestured vaguely (12)</span> <span class='slop-ngram-item'>feel like (12)</span> <span class='slop-ngram-item'>knuckles white (12)</span> <span class='slop-ngram-item'>like physical (12)</span> <span class='slop-ngram-item'>old man (12)</span> <span class='slop-ngram-item'>eyes held (12)</span> <span class='slop-ngram-item'>tilted head (12)</span> <span class='slop-ngram-item'>almost imperceptibly (11)</span> <span class='slop-ngram-item'>silence stretched (11)</span> <span class='slop-ngram-item'>sounds like (11)</span> <span class='slop-ngram-item'>across face (11)</span> <span class='slop-ngram-item'>hung thick (11)</span> <span class='slop-ngram-item'>eyes like (11)</span> <span class='slop-ngram-item'>heart hammered (11)</span> <span class='slop-ngram-item'>last week (10)</span> <span class='slop-ngram-item'>dark hair (10)</span> <span class='slop-ngram-item'>flicker something (10)</span> <span class='slop-ngram-item'>eyes fixed (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile playing lips (9)</span> <span class='slop-ngram-item'>heart hammered ribs (7)</span> <span class='slop-ngram-item'>smile touched lips (7)</span> <span class='slop-ngram-item'>smile touching lips (6)</span> <span class='slop-ngram-item'>heart hammering ribs (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>smile spread across (5)</span> <span class='slop-ngram-item'>silence stretched thick (5)</span> <span class='slop-ngram-item'>smile touches lips (5)</span> <span class='slop-ngram-item'>casting long dancing (5)</span> <span class='slop-ngram-item'>long dancing shadows (5)</span> <span class='slop-ngram-item'>felt less like (5)</span> <span class='slop-ngram-item'>paused letting implication (5)</span> <span class='slop-ngram-item'>voice carefully neutral (5)</span> <span class='slop-ngram-item'>leaned forward slightly (5)</span> <span class='slop-ngram-item'>felt like physical (4)</span> <span class='slop-ngram-item'>like physical touch (4)</span> <span class='slop-ngram-item'>ribs like trapped (4)</span> <span class='slop-ngram-item'>like trapped bird (4)</span> <span class='slop-ngram-item'>panic cold sharp (4)</span> <span class='slop-ngram-item'>cold sharp sliced (4)</span> <span class='slop-ngram-item'>tilted head studying (4)</span> <span class='slop-ngram-item'>spread across face (4)</span> <span class='slop-ngram-item'>letting implication hang (4)</span> <span class='slop-ngram-item'>voice dropping conspiratorial (4)</span> <span class='slop-ngram-item'>voice low steady (4)</span> <span class='slop-ngram-item'>eyes meet mine (4)</span> <span class='slop-ngram-item'>air hung thick (4)</span> <span class='slop-ngram-item'>tasted like ash (4)</span> <span class='slop-ngram-item'>smile reach eyes (4)</span>
</div>

##### optimus-alpha
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/optimus-alpha__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/optimus-alpha__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for optimus-alpha' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/optimus-alpha__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/optimus-alpha__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for optimus-alpha' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1 (distance=0.625)</div>
<div class='slop-similar'>quasar-alpha (distance=0.710)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.730)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.734)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.754)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>prickling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>intoned</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>splayed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>stutters</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>ducked</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>shrugs</span> <span class='slop-word-item'>faintly</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>look like (34)</span> <span class='slop-ngram-item'>say something (18)</span> <span class='slop-ngram-item'>voice low (17)</span> <span class='slop-ngram-item'>air thick (16)</span> <span class='slop-ngram-item'>first time (16)</span> <span class='slop-ngram-item'>last time (16)</span> <span class='slop-ngram-item'>feel like (16)</span> <span class='slop-ngram-item'>says voice (15)</span> <span class='slop-ngram-item'>want say (14)</span> <span class='slop-ngram-item'>something else (13)</span> <span class='slop-ngram-item'>heart pounding (13)</span> <span class='slop-ngram-item'>last week (13)</span> <span class='slop-ngram-item'>said voice (13)</span> <span class='slop-ngram-item'>wish could (13)</span> <span class='slop-ngram-item'>someone else (12)</span> <span class='slop-ngram-item'>feels like (12)</span> <span class='slop-ngram-item'>like someone (12)</span> <span class='slop-ngram-item'>sound like (12)</span> <span class='slop-ngram-item'>wan na (11)</span> <span class='slop-ngram-item'>voice barely (11)</span> <span class='slop-ngram-item'>every time (11)</span> <span class='slop-ngram-item'>could say (11)</span> <span class='slop-ngram-item'>voice soft (10)</span> <span class='slop-ngram-item'>felt like (10)</span> <span class='slop-ngram-item'>right arm (10)</span> <span class='slop-ngram-item'>next time (10)</span> <span class='slop-ngram-item'>want see (10)</span> <span class='slop-ngram-item'>want ask (10)</span> <span class='slop-ngram-item'>close enough (9)</span> <span class='slop-ngram-item'>eyes sharp (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>says voice low (5)</span> <span class='slop-ngram-item'>item object class (5)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>close enough smell (4)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>lips pressed tight (3)</span> <span class='slop-ngram-item'>close enough see (3)</span> <span class='slop-ngram-item'>air thick scent (3)</span> <span class='slop-ngram-item'>always feel like (3)</span> <span class='slop-ngram-item'>sweat beading brow (3)</span> <span class='slop-ngram-item'>door slides open (3)</span> <span class='slop-ngram-item'>hair behind ear (3)</span> <span class='slop-ngram-item'>wish could say (3)</span> <span class='slop-ngram-item'>say something clever (3)</span> <span class='slop-ngram-item'>want say something (3)</span> <span class='slop-ngram-item'>even though know (3)</span> <span class='slop-ngram-item'>hands shook badly (3)</span> <span class='slop-ngram-item'>sliding onto stool (2)</span> <span class='slop-ngram-item'>laughter softer time (2)</span> <span class='slop-ngram-item'>asks voice low (2)</span> <span class='slop-ngram-item'>says voice edged (2)</span> <span class='slop-ngram-item'>leans close enough (2)</span> <span class='slop-ngram-item'>eyes never leaving (2)</span> <span class='slop-ngram-item'>eyes narrow voice (2)</span> <span class='slop-ngram-item'>says voice barely (2)</span> <span class='slop-ngram-item'>air thick stink (2)</span> <span class='slop-ngram-item'>words tangle throat (2)</span> <span class='slop-ngram-item'>say voice barely (2)</span> <span class='slop-ngram-item'>one gloved hand (2)</span>
</div>

##### gpt-4.1
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gpt-4.1' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gpt-4.1' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>optimus-alpha (distance=0.625)</div>
<div class='slop-similar'>quasar-alpha (distance=0.730)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.738)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.758)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.780)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>callused</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>pipette</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>falters</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>hourglass</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>shrugs</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>barked</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>ducked</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>faintest</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>addendum</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (29)</span> <span class='slop-ngram-item'>first time (27)</span> <span class='slop-ngram-item'>look like (20)</span> <span class='slop-ngram-item'>feel like (17)</span> <span class='slop-ngram-item'>feels like (17)</span> <span class='slop-ngram-item'>said voice (17)</span> <span class='slop-ngram-item'>air thick (16)</span> <span class='slop-ngram-item'>say something (15)</span> <span class='slop-ngram-item'>heart pounding (15)</span> <span class='slop-ngram-item'>looks like (15)</span> <span class='slop-ngram-item'>let go (14)</span> <span class='slop-ngram-item'>says voice (14)</span> <span class='slop-ngram-item'>every time (14)</span> <span class='slop-ngram-item'>something else (13)</span> <span class='slop-ngram-item'>voice soft (12)</span> <span class='slop-ngram-item'>say voice (11)</span> <span class='slop-ngram-item'>like someone (11)</span> <span class='slop-ngram-item'>wish could (10)</span> <span class='slop-ngram-item'>want say (10)</span> <span class='slop-ngram-item'>last night (10)</span> <span class='slop-ngram-item'>hands shook (10)</span> <span class='slop-ngram-item'>shook head (10)</span> <span class='slop-ngram-item'>someone else (9)</span> <span class='slop-ngram-item'>looked like (9)</span> <span class='slop-ngram-item'>sound like (8)</span> <span class='slop-ngram-item'>old blood (8)</span> <span class='slop-ngram-item'>eyes narrow (8)</span> <span class='slop-ngram-item'>steps closer (8)</span> <span class='slop-ngram-item'>split second (8)</span> <span class='slop-ngram-item'>eyes wide (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>eyes never leaving (5)</span> <span class='slop-ngram-item'>voice barely whisper (4)</span> <span class='slop-ngram-item'>hair behind ear (4)</span> <span class='slop-ngram-item'>object class keter (4)</span> <span class='slop-ngram-item'>class keter special (4)</span> <span class='slop-ngram-item'>keter special containment (4)</span> <span class='slop-ngram-item'>smell gun oil (4)</span> <span class='slop-ngram-item'>asks voice low (4)</span> <span class='slop-ngram-item'>keeping tone light (3)</span> <span class='slop-ngram-item'>looks really looks (3)</span> <span class='slop-ngram-item'>air thick scent (3)</span> <span class='slop-ngram-item'>look like someone (3)</span> <span class='slop-ngram-item'>trying look like (3)</span> <span class='slop-ngram-item'>sweat prickling brow (3)</span> <span class='slop-ngram-item'>make eye contact (3)</span> <span class='slop-ngram-item'>something else entirely (2)</span> <span class='slop-ngram-item'>watch way fingers (2)</span> <span class='slop-ngram-item'>becoming something new (2)</span> <span class='slop-ngram-item'>laughs real laugh (2)</span> <span class='slop-ngram-item'>back ever get (2)</span> <span class='slop-ngram-item'>want say yes (2)</span> <span class='slop-ngram-item'>way people look (2)</span> <span class='slop-ngram-item'>tucking strand hair (2)</span> <span class='slop-ngram-item'>strand hair behind (2)</span> <span class='slop-ngram-item'>hand closes around (2)</span> <span class='slop-ngram-item'>takes step forward (2)</span> <span class='slop-ngram-item'>eyes flicker something (2)</span>
</div>

##### claude-3-7-sonnet-20250219
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-7-sonnet-20250219__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-7-sonnet-20250219__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for claude-3-7-sonnet-20250219' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-7-sonnet-20250219__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/claude-3-7-sonnet-20250219__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for claude-3-7-sonnet-20250219' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-opus-4 (distance=0.799)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.817)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.820)</div>
<div class='slop-similar'>claude-3-5-sonnet-20241022 (distance=0.824)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.824)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>thornfield</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>dismissively</span> <span class='slop-word-item'>zora</span> <span class='slop-word-item'>materializes</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>callum</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>harlow</span> <span class='slop-word-item'>northside</span> <span class='slop-word-item'>mendez</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>heartbeats</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>mutter</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>forearms</span> <span class='slop-word-item'>materialized</span> <span class='slop-word-item'>rimmed</span> <span class='slop-word-item'>methodically</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gleam</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>overthinking</span> <span class='slop-word-item'>gasps</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>first time (21)</span> <span class='slop-ngram-item'>something else (21)</span> <span class='slop-ngram-item'>says voice (17)</span> <span class='slop-ngram-item'>three days (14)</span> <span class='slop-ngram-item'>something like (13)</span> <span class='slop-ngram-item'>shadows across (11)</span> <span class='slop-ngram-item'>sound like (11)</span> <span class='slop-ngram-item'>said voice (11)</span> <span class='slop-ngram-item'>stone floor (11)</span> <span class='slop-ngram-item'>shook head (11)</span> <span class='slop-ngram-item'>could help (10)</span> <span class='slop-ngram-item'>next time (10)</span> <span class='slop-ngram-item'>looks like (10)</span> <span class='slop-ngram-item'>look like (10)</span> <span class='slop-ngram-item'>close enough (10)</span> <span class='slop-ngram-item'>leaned forward (10)</span> <span class='slop-ngram-item'>could see (10)</span> <span class='slop-ngram-item'>around us (10)</span> <span class='slop-ngram-item'>eyes narrow (9)</span> <span class='slop-ngram-item'>eyes narrowed (9)</span> <span class='slop-ngram-item'>last night (9)</span> <span class='slop-ngram-item'>feels like (9)</span> <span class='slop-ngram-item'>tomorrow would (9)</span> <span class='slop-ngram-item'>say something (9)</span> <span class='slop-ngram-item'>special containment (8)</span> <span class='slop-ngram-item'>like something (8)</span> <span class='slop-ngram-item'>days ago (8)</span> <span class='slop-ngram-item'>last year (8)</span> <span class='slop-ngram-item'>last week (8)</span> <span class='slop-ngram-item'>stepped forward (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span> <span class='slop-ngram-item'>class euclid special (6)</span> <span class='slop-ngram-item'>euclid special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>across stone floor (5)</span> <span class='slop-ngram-item'>something else entirely (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>smile playing lips (4)</span> <span class='slop-ngram-item'>laughed sound like (4)</span> <span class='slop-ngram-item'>voice barely audible (4)</span> <span class='slop-ngram-item'>like physical blow (4)</span> <span class='slop-ngram-item'>three days ago (4)</span> <span class='slop-ngram-item'>despite early hour (4)</span> <span class='slop-ngram-item'>tomorrow would bring (4)</span> <span class='slop-ngram-item'>eyes widen slightly (3)</span> <span class='slop-ngram-item'>slides onto stool (3)</span> <span class='slop-ngram-item'>seen better days (3)</span> <span class='slop-ngram-item'>expression remained neutral (3)</span> <span class='slop-ngram-item'>gasps echoed chamber (3)</span> <span class='slop-ngram-item'>expression remained impassive (3)</span> <span class='slop-ngram-item'>lines around eyes (3)</span> <span class='slop-ngram-item'>two days ago (3)</span> <span class='slop-ngram-item'>said extending hand (3)</span> <span class='slop-ngram-item'>hair behind ear (3)</span> <span class='slop-ngram-item'>eyes meet mine (3)</span> <span class='slop-ngram-item'>said voice carrying (3)</span> <span class='slop-ngram-item'>quite meeting eyes (3)</span> <span class='slop-ngram-item'>says voice soft (2)</span> <span class='slop-ngram-item'>faintly dim light (2)</span>
</div>

##### gemini-2.5-pro-exp-03-25
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-pro-exp-03-25__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-pro-exp-03-25__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gemini-2.5-pro-exp-03-25' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-pro-exp-03-25__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-pro-exp-03-25__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gemini-2.5-pro-exp-03-25' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.706)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.734)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.750)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.754)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.762)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>conspiratorially</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>griz</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>fractionally</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>infuriatingly</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>fizzing</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>silhouetted</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>hitches</span> <span class='slop-word-item'>unspoken</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (52)</span> <span class='slop-ngram-item'>voice low (31)</span> <span class='slop-ngram-item'>said voice (29)</span> <span class='slop-ngram-item'>something else (27)</span> <span class='slop-ngram-item'>feels like (26)</span> <span class='slop-ngram-item'>look like (25)</span> <span class='slop-ngram-item'>less like (19)</span> <span class='slop-ngram-item'>sound like (18)</span> <span class='slop-ngram-item'>looks like (14)</span> <span class='slop-ngram-item'>flicker something (14)</span> <span class='slop-ngram-item'>maybe maybe (14)</span> <span class='slop-ngram-item'>feel like (13)</span> <span class='slop-ngram-item'>around eyes (13)</span> <span class='slop-ngram-item'>almost imperceptibly (13)</span> <span class='slop-ngram-item'>back home (13)</span> <span class='slop-ngram-item'>gestured vaguely (13)</span> <span class='slop-ngram-item'>says voice (13)</span> <span class='slop-ngram-item'>air thick (12)</span> <span class='slop-ngram-item'>eye contact (12)</span> <span class='slop-ngram-item'>right arm (12)</span> <span class='slop-ngram-item'>hung thick (11)</span> <span class='slop-ngram-item'>leaned back (11)</span> <span class='slop-ngram-item'>years ago (11)</span> <span class='slop-ngram-item'>trying keep (11)</span> <span class='slop-ngram-item'>back towards (11)</span> <span class='slop-ngram-item'>forward slightly (11)</span> <span class='slop-ngram-item'>tap tap (11)</span> <span class='slop-ngram-item'>hand instinctively (11)</span> <span class='slop-ngram-item'>deep breath (10)</span> <span class='slop-ngram-item'>turning back (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt less like (8)</span> <span class='slop-ngram-item'>trying keep voice (7)</span> <span class='slop-ngram-item'>heart hammered ribs (7)</span> <span class='slop-ngram-item'>air hung thick (6)</span> <span class='slop-ngram-item'>dust motes dancing (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>something else something (6)</span> <span class='slop-ngram-item'>leaned forward slightly (6)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>keep voice steady (5)</span> <span class='slop-ngram-item'>smile playing lips (5)</span> <span class='slop-ngram-item'>waved dismissive hand (5)</span> <span class='slop-ngram-item'>okay deep breaths (5)</span> <span class='slop-ngram-item'>okay breathe breathe (5)</span> <span class='slop-ngram-item'>squeezed eyes shut (4)</span> <span class='slop-ngram-item'>long dancing shadows (4)</span> <span class='slop-ngram-item'>quite reach eyes (4)</span> <span class='slop-ngram-item'>year two older (4)</span> <span class='slop-ngram-item'>murmured voice low (4)</span> <span class='slop-ngram-item'>cleared throat sound (4)</span> <span class='slop-ngram-item'>throat sound like (4)</span> <span class='slop-ngram-item'>object class euclid (4)</span> <span class='slop-ngram-item'>felt cold knot (4)</span> <span class='slop-ngram-item'>cold knot tighten (4)</span> <span class='slop-ngram-item'>knot tighten stomach (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>one last time (3)</span> <span class='slop-ngram-item'>another day another (3)</span> <span class='slop-ngram-item'>hung thick heavy (3)</span>
</div>

##### chatgpt-4o-latest-2025-01-29
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-01-29__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-01-29__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for chatgpt-4o-latest-2025-01-29' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-01-29__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/chatgpt-4o-latest-2025-01-29__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for chatgpt-4o-latest-2025-01-29' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.701)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.754)</div>
<div class='slop-similar'>quasar-alpha (distance=0.762)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.765)</div>
<div class='slop-similar'>optimus-alpha (distance=0.773)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>exhales</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>clenches</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>stiffly</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>dryly</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>exhaling</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>calliope</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>blinks</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>henshaw</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>darrow</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>chuckles</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else (37)</span> <span class='slop-ngram-item'>say something (25)</span> <span class='slop-ngram-item'>tilts head (21)</span> <span class='slop-ngram-item'>first time (19)</span> <span class='slop-ngram-item'>look like (18)</span> <span class='slop-ngram-item'>stepped forward (17)</span> <span class='slop-ngram-item'>shaking head (16)</span> <span class='slop-ngram-item'>something like (16)</span> <span class='slop-ngram-item'>tilted head (16)</span> <span class='slop-ngram-item'>air thick (15)</span> <span class='slop-ngram-item'>felt like (15)</span> <span class='slop-ngram-item'>long moment (14)</span> <span class='slop-ngram-item'>shake head (13)</span> <span class='slop-ngram-item'>feel like (13)</span> <span class='slop-ngram-item'>leaned back (13)</span> <span class='slop-ngram-item'>arms crossed (12)</span> <span class='slop-ngram-item'>exhaled slowly (12)</span> <span class='slop-ngram-item'>close enough (12)</span> <span class='slop-ngram-item'>something unreadable (12)</span> <span class='slop-ngram-item'>last time (11)</span> <span class='slop-ngram-item'>voice low (11)</span> <span class='slop-ngram-item'>stepping back (11)</span> <span class='slop-ngram-item'>long enough (11)</span> <span class='slop-ngram-item'>like something (11)</span> <span class='slop-ngram-item'>says voice (11)</span> <span class='slop-ngram-item'>said voice (10)</span> <span class='slop-ngram-item'>something wrong (10)</span> <span class='slop-ngram-item'>swallowed hard (10)</span> <span class='slop-ngram-item'>said nothing (9)</span> <span class='slop-ngram-item'>last night (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something (7)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>air thick scent (6)</span> <span class='slop-ngram-item'>chuckled shaking head (4)</span> <span class='slop-ngram-item'>hands clasped behind (4)</span> <span class='slop-ngram-item'>clasped behind back (4)</span> <span class='slop-ngram-item'>something unreadable expression (4)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>say something else (4)</span> <span class='slop-ngram-item'>door swings open (4)</span> <span class='slop-ngram-item'>without another word (3)</span> <span class='slop-ngram-item'>look like belong (3)</span> <span class='slop-ngram-item'>like everyone else (3)</span> <span class='slop-ngram-item'>leaned back chair (3)</span> <span class='slop-ngram-item'>like something else (3)</span> <span class='slop-ngram-item'>squeezed eyes shut (3)</span> <span class='slop-ngram-item'>rubbing hand face (3)</span> <span class='slop-ngram-item'>answer right away (3)</span> <span class='slop-ngram-item'>something like amusement (3)</span> <span class='slop-ngram-item'>cigarette dangling lips (3)</span> <span class='slop-ngram-item'>close enough could (3)</span> <span class='slop-ngram-item'>says voice calm (3)</span> <span class='slop-ngram-item'>chest rising falling (3)</span> <span class='slop-ngram-item'>eyes locked onto (3)</span> <span class='slop-ngram-item'>grin spread across (3)</span> <span class='slop-ngram-item'>says voice even (3)</span> <span class='slop-ngram-item'>fingers tighten around (3)</span> <span class='slop-ngram-item'>tilted head studying (3)</span> <span class='slop-ngram-item'>opened mouth closed (3)</span> <span class='slop-ngram-item'>resting chin hand (3)</span>
</div>

##### qwen/qwen3-235b-a22b:thinking
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwen3-235b-a22b-thinking__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwen3-235b-a22b-thinking__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for qwen/qwen3-235b-a22b:thinking' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwen3-235b-a22b-thinking__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwen3-235b-a22b-thinking__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for qwen/qwen3-235b-a22b:thinking' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwq-32b (distance=0.701)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.722)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.746)</div>
<div class='slop-similar'>grok-3-beta (distance=0.769)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.795)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>feinted</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flinches</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>stiffens</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>slouched</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>materializes</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>smudged</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>blurt</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>trembles</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>reeking</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>sneered</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>coiled</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (46)</span> <span class='slop-ngram-item'>next time (24)</span> <span class='slop-ngram-item'>last week (16)</span> <span class='slop-ngram-item'>sound like (14)</span> <span class='slop-ngram-item'>felt like (13)</span> <span class='slop-ngram-item'>wan na (13)</span> <span class='slop-ngram-item'>smells like (12)</span> <span class='slop-ngram-item'>tilts head (12)</span> <span class='slop-ngram-item'>tilted head (11)</span> <span class='slop-ngram-item'>voice low (10)</span> <span class='slop-ngram-item'>said voice (10)</span> <span class='slop-ngram-item'>gon na (10)</span> <span class='slop-ngram-item'>looks like (9)</span> <span class='slop-ngram-item'>look like (9)</span> <span class='slop-ngram-item'>let see (9)</span> <span class='slop-ngram-item'>stepped closer (9)</span> <span class='slop-ngram-item'>gloved fingers (9)</span> <span class='slop-ngram-item'>let go (9)</span> <span class='slop-ngram-item'>first time (8)</span> <span class='slop-ngram-item'>air smells (8)</span> <span class='slop-ngram-item'>eyes narrow (8)</span> <span class='slop-ngram-item'>crescent moon (8)</span> <span class='slop-ngram-item'>leaned forward (8)</span> <span class='slop-ngram-item'>air thick (7)</span> <span class='slop-ngram-item'>hung like (7)</span> <span class='slop-ngram-item'>count note (7)</span> <span class='slop-ngram-item'>throat tightened (7)</span> <span class='slop-ngram-item'>count key (7)</span> <span class='slop-ngram-item'>key elements (7)</span> <span class='slop-ngram-item'>feels like (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count note (7)</span> <span class='slop-ngram-item'>word count key (7)</span> <span class='slop-ngram-item'>count key elements (7)</span> <span class='slop-ngram-item'>next time bring (6)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>word count style (5)</span> <span class='slop-ngram-item'>like second skin (4)</span> <span class='slop-ngram-item'>item object class (4)</span> <span class='slop-ngram-item'>object class euclid (4)</span> <span class='slop-ngram-item'>class euclid special (4)</span> <span class='slop-ngram-item'>euclid special containment (4)</span> <span class='slop-ngram-item'>containment procedures instances (4)</span> <span class='slop-ngram-item'>smile touch eyes (4)</span> <span class='slop-ngram-item'>word count tone (4)</span> <span class='slop-ngram-item'>sleeve rides revealing (4)</span> <span class='slop-ngram-item'>somewhere beyond walls (3)</span> <span class='slop-ngram-item'>breath warm ear (3)</span> <span class='slop-ngram-item'>moon hung low (3)</span> <span class='slop-ngram-item'>sleeves rolled elbows (3)</span> <span class='slop-ngram-item'>mtf text nerds (3)</span> <span class='slop-ngram-item'>count style notes (3)</span> <span class='slop-ngram-item'>voice blade sheathed (3)</span> <span class='slop-ngram-item'>tilted head studying (3)</span> <span class='slop-ngram-item'>boots crunching gravel (3)</span> <span class='slop-ngram-item'>one last time (3)</span> <span class='slop-ngram-item'>leans closer breath (3)</span> <span class='slop-ngram-item'>hit ground hard (3)</span> <span class='slop-ngram-item'>dark word count (2)</span> <span class='slop-ngram-item'>breath fogged front (2)</span> <span class='slop-ngram-item'>leaned close breath (2)</span>
</div>

##### quasar-alpha
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/quasar-alpha__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/quasar-alpha__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for quasar-alpha' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/quasar-alpha__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/quasar-alpha__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for quasar-alpha' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.710)</div>
<div class='slop-similar'>optimus-alpha (distance=0.710)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.730)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.738)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.746)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>prickled</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unbothered</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lounged</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>shyly</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>shakily</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>sharpens</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>softens</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>crusted</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>gloved</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart pounding (23)</span> <span class='slop-ngram-item'>feels like (19)</span> <span class='slop-ngram-item'>said voice (18)</span> <span class='slop-ngram-item'>said quietly (18)</span> <span class='slop-ngram-item'>next time (18)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>said softly (16)</span> <span class='slop-ngram-item'>felt like (16)</span> <span class='slop-ngram-item'>say something (15)</span> <span class='slop-ngram-item'>something else (15)</span> <span class='slop-ngram-item'>look like (14)</span> <span class='slop-ngram-item'>says voice (14)</span> <span class='slop-ngram-item'>voice low (13)</span> <span class='slop-ngram-item'>steps closer (13)</span> <span class='slop-ngram-item'>last night (12)</span> <span class='slop-ngram-item'>split second (12)</span> <span class='slop-ngram-item'>got ta (12)</span> <span class='slop-ngram-item'>feel like (12)</span> <span class='slop-ngram-item'>last time (11)</span> <span class='slop-ngram-item'>closed eyes (11)</span> <span class='slop-ngram-item'>something new (11)</span> <span class='slop-ngram-item'>turned back (10)</span> <span class='slop-ngram-item'>someone else (10)</span> <span class='slop-ngram-item'>voice softer (10)</span> <span class='slop-ngram-item'>shook head (10)</span> <span class='slop-ngram-item'>right arm (10)</span> <span class='slop-ngram-item'>another day (10)</span> <span class='slop-ngram-item'>says quietly (10)</span> <span class='slop-ngram-item'>say quietly (10)</span> <span class='slop-ngram-item'>looks like (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (7)</span> <span class='slop-ngram-item'>maybe next time (6)</span> <span class='slop-ngram-item'>casting long shadows (6)</span> <span class='slop-ngram-item'>wiped sweat brow (6)</span> <span class='slop-ngram-item'>item object class (5)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>turned back toward (3)</span> <span class='slop-ngram-item'>tilted head studying (3)</span> <span class='slop-ngram-item'>voice rough gravel (3)</span> <span class='slop-ngram-item'>maybe one day (3)</span> <span class='slop-ngram-item'>cigarette dangling lips (3)</span> <span class='slop-ngram-item'>eyes sharp appraising (3)</span> <span class='slop-ngram-item'>said voice smooth (3)</span> <span class='slop-ngram-item'>tall man skin (3)</span> <span class='slop-ngram-item'>trying sound casual (3)</span> <span class='slop-ngram-item'>stray lock hair (3)</span> <span class='slop-ngram-item'>shining something fierce (3)</span> <span class='slop-ngram-item'>sweat beading brow (3)</span> <span class='slop-ngram-item'>somewhere deep inside (3)</span> <span class='slop-ngram-item'>last time tried (2)</span> <span class='slop-ngram-item'>pinched bridge nose (2)</span> <span class='slop-ngram-item'>office cavernous hall (2)</span> <span class='slop-ngram-item'>something ancient dangerous (2)</span> <span class='slop-ngram-item'>close enough could (2)</span> <span class='slop-ngram-item'>something else entirely (2)</span> <span class='slop-ngram-item'>spark inside refused (2)</span> <span class='slop-ngram-item'>stubble along jaw (2)</span> <span class='slop-ngram-item'>shadows across face (2)</span> <span class='slop-ngram-item'>said voice trembling (2)</span> <span class='slop-ngram-item'>finally spoke voice (2)</span>
</div>

##### qwen/qwq-32b
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwq-32b__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwq-32b__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for qwen/qwq-32b' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwq-32b__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/qwen__qwq-32b__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for qwen/qwq-32b' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.675)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b:thinking (distance=0.701)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.722)</div>
<div class='slop-similar'>grok-3-beta (distance=0.742)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.773)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>kestrel</span> <span class='slop-word-item'>flinches</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>blares</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>hitches</span> <span class='slop-word-item'>pivoted</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>why&#x27;re</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>glyphs</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>dimmed</span> <span class='slop-word-item'>snorts</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (49)</span> <span class='slop-ngram-item'>sound like (23)</span> <span class='slop-ngram-item'>look like (19)</span> <span class='slop-ngram-item'>red light (16)</span> <span class='slop-ngram-item'>gon na (16)</span> <span class='slop-ngram-item'>tilts head (15)</span> <span class='slop-ngram-item'>let go (14)</span> <span class='slop-ngram-item'>said voice (14)</span> <span class='slop-ngram-item'>first time (14)</span> <span class='slop-ngram-item'>next morning (12)</span> <span class='slop-ngram-item'>throat tightened (12)</span> <span class='slop-ngram-item'>smells like (12)</span> <span class='slop-ngram-item'>says voice (12)</span> <span class='slop-ngram-item'>steps closer (11)</span> <span class='slop-ngram-item'>jagged shadows (11)</span> <span class='slop-ngram-item'>felt like (11)</span> <span class='slop-ngram-item'>arms crossed (10)</span> <span class='slop-ngram-item'>eyes narrowed (10)</span> <span class='slop-ngram-item'>air thick (10)</span> <span class='slop-ngram-item'>leather jacket (10)</span> <span class='slop-ngram-item'>years ago (10)</span> <span class='slop-ngram-item'>words hang (9)</span> <span class='slop-ngram-item'>breath hitches (9)</span> <span class='slop-ngram-item'>face pale (9)</span> <span class='slop-ngram-item'>let see (9)</span> <span class='slop-ngram-item'>leaned forward (9)</span> <span class='slop-ngram-item'>eyes sharp (9)</span> <span class='slop-ngram-item'>casting jagged (9)</span> <span class='slop-ngram-item'>feels like (9)</span> <span class='slop-ngram-item'>tilted head (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>casting jagged shadows (8)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>back arms crossed (5)</span> <span class='slop-ngram-item'>tilts head studying (5)</span> <span class='slop-ngram-item'>air hung thick (5)</span> <span class='slop-ngram-item'>object class euclid (5)</span> <span class='slop-ngram-item'>class euclid special (5)</span> <span class='slop-ngram-item'>euclid special containment (5)</span> <span class='slop-ngram-item'>smile reach eyes (4)</span> <span class='slop-ngram-item'>word count note (4)</span> <span class='slop-ngram-item'>ever feel like (3)</span> <span class='slop-ngram-item'>laughed sound like (3)</span> <span class='slop-ngram-item'>low resonant hum (3)</span> <span class='slop-ngram-item'>sound like wind (3)</span> <span class='slop-ngram-item'>air like blade (3)</span> <span class='slop-ngram-item'>gon na need (3)</span> <span class='slop-ngram-item'>air smells like (3)</span> <span class='slop-ngram-item'>coiling like serpents (3)</span> <span class='slop-ngram-item'>like second skin (3)</span> <span class='slop-ngram-item'>air thick scent (3)</span> <span class='slop-ngram-item'>see flecks gold (3)</span> <span class='slop-ngram-item'>door creaked open (3)</span> <span class='slop-ngram-item'>eyes meet mine (3)</span> <span class='slop-ngram-item'>said voice steady (3)</span> <span class='slop-ngram-item'>sound like grinding (3)</span> <span class='slop-ngram-item'>thick scent damp (3)</span> <span class='slop-ngram-item'>door burst open (3)</span> <span class='slop-ngram-item'>leans back arms (3)</span> <span class='slop-ngram-item'>way hands tremble (2)</span>
</div>

##### google/gemma-3-27b-it
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-27b-it__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-27b-it__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for google/gemma-3-27b-it' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-27b-it__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-27b-it__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for google/gemma-3-27b-it' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.653)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.653)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.697)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.697)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.710)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>sunstone</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>hellhound</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>hemmings</span> <span class='slop-word-item'>wildflowers</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>impeccably</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>cataloging</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (76)</span> <span class='slop-ngram-item'>felt like (43)</span> <span class='slop-ngram-item'>old man (40)</span> <span class='slop-ngram-item'>voice low (38)</span> <span class='slop-ngram-item'>voice barely (32)</span> <span class='slop-ngram-item'>says voice (32)</span> <span class='slop-ngram-item'>something else (31)</span> <span class='slop-ngram-item'>barely whisper (31)</span> <span class='slop-ngram-item'>flicker something (22)</span> <span class='slop-ngram-item'>look like (20)</span> <span class='slop-ngram-item'>maybe maybe (19)</span> <span class='slop-ngram-item'>carefully constructed (19)</span> <span class='slop-ngram-item'>asked voice (19)</span> <span class='slop-ngram-item'>feels like (19)</span> <span class='slop-ngram-item'>could feel (18)</span> <span class='slop-ngram-item'>man hemlock (16)</span> <span class='slop-ngram-item'>sound like (16)</span> <span class='slop-ngram-item'>deep breath (15)</span> <span class='slop-ngram-item'>rhys said (15)</span> <span class='slop-ngram-item'>first time (13)</span> <span class='slop-ngram-item'>playing lips (13)</span> <span class='slop-ngram-item'>feel like (13)</span> <span class='slop-ngram-item'>okay okay (13)</span> <span class='slop-ngram-item'>eye contact (12)</span> <span class='slop-ngram-item'>fleeting moment (12)</span> <span class='slop-ngram-item'>tasted like (12)</span> <span class='slop-ngram-item'>looks like (12)</span> <span class='slop-ngram-item'>felt strange (12)</span> <span class='slop-ngram-item'>long time (11)</span> <span class='slop-ngram-item'>voice laced (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (28)</span> <span class='slop-ngram-item'>old man hemlock (16)</span> <span class='slop-ngram-item'>said voice low (14)</span> <span class='slop-ngram-item'>said voice barely (12)</span> <span class='slop-ngram-item'>smile playing lips (11)</span> <span class='slop-ngram-item'>something else entirely (8)</span> <span class='slop-ngram-item'>took deep breath (8)</span> <span class='slop-ngram-item'>avoiding eye contact (7)</span> <span class='slop-ngram-item'>old man tiber (7)</span> <span class='slop-ngram-item'>something else something (6)</span> <span class='slop-ngram-item'>squeezed eyes shut (6)</span> <span class='slop-ngram-item'>flash white teeth (5)</span> <span class='slop-ngram-item'>first time long (5)</span> <span class='slop-ngram-item'>time long time (5)</span> <span class='slop-ngram-item'>felt flush creep (5)</span> <span class='slop-ngram-item'>flush creep neck (5)</span> <span class='slop-ngram-item'>things best left (5)</span> <span class='slop-ngram-item'>takes step closer (5)</span> <span class='slop-ngram-item'>small intricately carved (5)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>trying make feel (5)</span> <span class='slop-ngram-item'>eyes searching mine (5)</span> <span class='slop-ngram-item'>old man hemmings (5)</span> <span class='slop-ngram-item'>sent shiver spine (4)</span> <span class='slop-ngram-item'>long distorted shadows (4)</span> <span class='slop-ngram-item'>raised skeptical eyebrow (4)</span> <span class='slop-ngram-item'>noticed something else (4)</span> <span class='slop-ngram-item'>already knowing answer (4)</span> <span class='slop-ngram-item'>carefully choosing words (4)</span> <span class='slop-ngram-item'>perfectly sculpted eyebrow (4)</span>
</div>

##### RekaAI/reka-flash-3
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/RekaAI__reka-flash-3__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/RekaAI__reka-flash-3__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for RekaAI/reka-flash-3' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/RekaAI__reka-flash-3__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/RekaAI__reka-flash-3__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for RekaAI/reka-flash-3' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwq-32b (distance=0.675)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.701)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b:thinking (distance=0.722)</div>
<div class='slop-similar'>grok-3-beta (distance=0.784)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.788)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>vorne</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>krell</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>clattering</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>falters</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>dais</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>reeking</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>crumpled</span> <span class='slop-word-item'>sigil</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (33)</span> <span class='slop-ngram-item'>sound like (19)</span> <span class='slop-ngram-item'>felt like (17)</span> <span class='slop-ngram-item'>voice low (14)</span> <span class='slop-ngram-item'>said voice (14)</span> <span class='slop-ngram-item'>smells like (13)</span> <span class='slop-ngram-item'>leather jacket (12)</span> <span class='slop-ngram-item'>air thick (12)</span> <span class='slop-ngram-item'>first time (12)</span> <span class='slop-ngram-item'>feel like (12)</span> <span class='slop-ngram-item'>stepped closer (11)</span> <span class='slop-ngram-item'>neon sign (11)</span> <span class='slop-ngram-item'>leaned forward (11)</span> <span class='slop-ngram-item'>voice cracks (11)</span> <span class='slop-ngram-item'>researcher voss (11)</span> <span class='slop-ngram-item'>scene setting (10)</span> <span class='slop-ngram-item'>fluorescent lights (10)</span> <span class='slop-ngram-item'>last week (9)</span> <span class='slop-ngram-item'>breath hitched (9)</span> <span class='slop-ngram-item'>look like (9)</span> <span class='slop-ngram-item'>like smoke (9)</span> <span class='slop-ngram-item'>internal monologue (9)</span> <span class='slop-ngram-item'>reach eyes (9)</span> <span class='slop-ngram-item'>gon na (9)</span> <span class='slop-ngram-item'>feels like (8)</span> <span class='slop-ngram-item'>fingers brushing (8)</span> <span class='slop-ngram-item'>breath fogging (8)</span> <span class='slop-ngram-item'>looked like (8)</span> <span class='slop-ngram-item'>closer breath (8)</span> <span class='slop-ngram-item'>laughed sound (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>laughed sound like (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>pulse roared ears (5)</span> <span class='slop-ngram-item'>fluorescent lights hum (5)</span> <span class='slop-ngram-item'>breath fogging air (4)</span> <span class='slop-ngram-item'>like live wire (4)</span> <span class='slop-ngram-item'>phone buzzes text (4)</span> <span class='slop-ngram-item'>door clicks shut (4)</span> <span class='slop-ngram-item'>pinched bridge nose (4)</span> <span class='slop-ngram-item'>door creaks open (4)</span> <span class='slop-ngram-item'>object class euclid (4)</span> <span class='slop-ngram-item'>class euclid special (4)</span> <span class='slop-ngram-item'>euclid special containment (4)</span> <span class='slop-ngram-item'>item object class (4)</span> <span class='slop-ngram-item'>another day another (3)</span> <span class='slop-ngram-item'>coiled like serpent (3)</span> <span class='slop-ngram-item'>eyes darting like (3)</span> <span class='slop-ngram-item'>end scene word (3)</span> <span class='slop-ngram-item'>scene word count (3)</span> <span class='slop-ngram-item'>door creaked open (3)</span> <span class='slop-ngram-item'>like spilled ink (3)</span> <span class='slop-ngram-item'>word count tone (3)</span> <span class='slop-ngram-item'>casting jagged shadows (3)</span> <span class='slop-ngram-item'>forward voice dropping (3)</span> <span class='slop-ngram-item'>stumbled back clutching (3)</span> <span class='slop-ngram-item'>leaned closer breath (3)</span> <span class='slop-ngram-item'>closer breath warm (3)</span> <span class='slop-ngram-item'>first time years (3)</span> <span class='slop-ngram-item'>time years feel (3)</span>
</div>

##### gpt-4.5-preview
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.5-preview__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.5-preview__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gpt-4.5-preview' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.5-preview__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.5-preview__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gpt-4.5-preview' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.777)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.788)</div>
<div class='slop-similar'>quasar-alpha (distance=0.810)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.827)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.827)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rasped</span> <span class='slop-word-item'>conspiratorially</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>appreciatively</span> <span class='slop-word-item'>uncertainly</span> <span class='slop-word-item'>shyly</span> <span class='slop-word-item'>skeptically</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>dryly</span> <span class='slop-word-item'>quickens</span> <span class='slop-word-item'>mischievously</span> <span class='slop-word-item'>dismissively</span> <span class='slop-word-item'>stiffly</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>uneasily</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>quickening</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>restlessly</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>softly</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>thoughtfully</span> <span class='slop-word-item'>wearily</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>snarls</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>theatrically</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitantly</span> <span class='slop-word-item'>lazily</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sheepishly</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>tinny</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes narrowed (24)</span> <span class='slop-ngram-item'>shook head (21)</span> <span class='slop-ngram-item'>shaking head (19)</span> <span class='slop-ngram-item'>heart pounding (18)</span> <span class='slop-ngram-item'>raised eyebrow (18)</span> <span class='slop-ngram-item'>said softly (18)</span> <span class='slop-ngram-item'>tilted head (17)</span> <span class='slop-ngram-item'>leaned forward (16)</span> <span class='slop-ngram-item'>eyes narrowing (16)</span> <span class='slop-ngram-item'>eyes wide (15)</span> <span class='slop-ngram-item'>softly voice (15)</span> <span class='slop-ngram-item'>head slightly (15)</span> <span class='slop-ngram-item'>stepped forward (15)</span> <span class='slop-ngram-item'>dark eyes (14)</span> <span class='slop-ngram-item'>voice barely (14)</span> <span class='slop-ngram-item'>eyes fixed (13)</span> <span class='slop-ngram-item'>heart hammering (13)</span> <span class='slop-ngram-item'>feels like (13)</span> <span class='slop-ngram-item'>next time (13)</span> <span class='slop-ngram-item'>cleared throat (13)</span> <span class='slop-ngram-item'>stepping closer (13)</span> <span class='slop-ngram-item'>heart racing (12)</span> <span class='slop-ngram-item'>softly eyes (12)</span> <span class='slop-ngram-item'>eyes glittering (12)</span> <span class='slop-ngram-item'>slowly eyes (11)</span> <span class='slop-ngram-item'>around us (11)</span> <span class='slop-ngram-item'>steps closer (11)</span> <span class='slop-ngram-item'>across face (10)</span> <span class='slop-ngram-item'>voice low (10)</span> <span class='slop-ngram-item'>eyes briefly (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (7)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>shook head slowly (5)</span> <span class='slop-ngram-item'>tilts head slightly (5)</span> <span class='slop-ngram-item'>pinched bridge nose (5)</span> <span class='slop-ngram-item'>raised eyebrow skeptically (5)</span> <span class='slop-ngram-item'>item object class (5)</span> <span class='slop-ngram-item'>object class euclid (5)</span> <span class='slop-ngram-item'>closed eyes briefly (4)</span> <span class='slop-ngram-item'>took deep breath (4)</span> <span class='slop-ngram-item'>flickering briefly across (4)</span> <span class='slop-ngram-item'>eyes narrowing slightly (4)</span> <span class='slop-ngram-item'>softly shaking head (4)</span> <span class='slop-ngram-item'>class euclid special (4)</span> <span class='slop-ngram-item'>euclid special containment (4)</span> <span class='slop-ngram-item'>eyes never leaving (4)</span> <span class='slop-ngram-item'>eyes locked onto (4)</span> <span class='slop-ngram-item'>leaned forward voice (3)</span> <span class='slop-ngram-item'>lay awake listening (3)</span> <span class='slop-ngram-item'>door swung open (3)</span> <span class='slop-ngram-item'>heart hammering chest (3)</span> <span class='slop-ngram-item'>warmth spreading chest (3)</span> <span class='slop-ngram-item'>leaned forward eyes (3)</span> <span class='slop-ngram-item'>eyes narrow slightly (3)</span> <span class='slop-ngram-item'>stood breathing heavily (3)</span> <span class='slop-ngram-item'>got ta eat (3)</span> <span class='slop-ngram-item'>fingers trembling slightly (3)</span> <span class='slop-ngram-item'>every word every (3)</span> <span class='slop-ngram-item'>voice trembling slightly (3)</span>
</div>

##### grok-3-beta
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/grok-3-beta__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/grok-3-beta__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for grok-3-beta' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/grok-3-beta__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/grok-3-beta__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for grok-3-beta' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwq-32b (distance=0.742)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.746)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.754)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.765)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b:thinking (distance=0.769)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>vorn</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>scuffing</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>craggy</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>concordance</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>visors</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>snorts</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (38)</span> <span class='slop-ngram-item'>look like (28)</span> <span class='slop-ngram-item'>feels like (23)</span> <span class='slop-ngram-item'>felt like (23)</span> <span class='slop-ngram-item'>air thick (19)</span> <span class='slop-ngram-item'>said voice (19)</span> <span class='slop-ngram-item'>heart pounding (19)</span> <span class='slop-ngram-item'>first time (18)</span> <span class='slop-ngram-item'>voice steady (17)</span> <span class='slop-ngram-item'>gon na (17)</span> <span class='slop-ngram-item'>shadows across (16)</span> <span class='slop-ngram-item'>say something (16)</span> <span class='slop-ngram-item'>mind racing (15)</span> <span class='slop-ngram-item'>says voice (15)</span> <span class='slop-ngram-item'>even know (15)</span> <span class='slop-ngram-item'>sound like (14)</span> <span class='slop-ngram-item'>every time (14)</span> <span class='slop-ngram-item'>last week (14)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>let see (13)</span> <span class='slop-ngram-item'>something else (13)</span> <span class='slop-ngram-item'>dim light (13)</span> <span class='slop-ngram-item'>last night (13)</span> <span class='slop-ngram-item'>stepped closer (12)</span> <span class='slop-ngram-item'>got ta (12)</span> <span class='slop-ngram-item'>eyes glinting (11)</span> <span class='slop-ngram-item'>wiry man (11)</span> <span class='slop-ngram-item'>red light (11)</span> <span class='slop-ngram-item'>wan na (11)</span> <span class='slop-ngram-item'>eyes narrowed (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice steady despite (8)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span> <span class='slop-ngram-item'>class euclid special (6)</span> <span class='slop-ngram-item'>euclid special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>air thick scent (5)</span> <span class='slop-ngram-item'>says voice low (5)</span> <span class='slop-ngram-item'>eyes flicker something (4)</span> <span class='slop-ngram-item'>voice low dangerous (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>said voice low (4)</span> <span class='slop-ngram-item'>voice low almost (4)</span> <span class='slop-ngram-item'>every possible way (4)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>fingers tightened around (4)</span> <span class='slop-ngram-item'>tilted head studying (4)</span> <span class='slop-ngram-item'>cigarette dangling lips (4)</span> <span class='slop-ngram-item'>gon na shoot (4)</span> <span class='slop-ngram-item'>jagged shadows across (4)</span> <span class='slop-ngram-item'>casting long shadows (4)</span> <span class='slop-ngram-item'>hair behind ear (4)</span> <span class='slop-ngram-item'>got soft spot (4)</span> <span class='slop-ngram-item'>said voice steady (4)</span> <span class='slop-ngram-item'>personnel level clearance (4)</span> <span class='slop-ngram-item'>level clearance higher (4)</span> <span class='slop-ngram-item'>stepping closer boots (3)</span> <span class='slop-ngram-item'>boots clicking stone (3)</span> <span class='slop-ngram-item'>shiver spine despite (3)</span> <span class='slop-ngram-item'>every word every (3)</span>
</div>

##### anthropic/claude-3.5-haiku-20241022
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3.5-haiku-20241022__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3.5-haiku-20241022__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for anthropic/claude-3.5-haiku-20241022' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3.5-haiku-20241022__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3.5-haiku-20241022__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for anthropic/claude-3.5-haiku-20241022' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-3-5-sonnet-20241022 (distance=0.883)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.886)</div>
<div class='slop-similar'>claude-opus-4 (distance=0.889)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.895)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.898)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>memetic</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>millisecond</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>recursive</span> <span class='slop-word-item'>subtext</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>holographic</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>reshape</span> <span class='slop-word-item'>entanglement</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>crackling</span> <span class='slop-word-item'>nuanced</span> <span class='slop-word-item'>weathered</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>unconsciously</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>archival</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>dissonance</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>translucent</span> <span class='slop-word-item'>kira</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>microscopic</span> <span class='slop-word-item'>temporal</span> <span class='slop-word-item'>subtly</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>drifted</span> <span class='slop-word-item'>synchronized</span> <span class='slop-word-item'>abort</span> <span class='slop-word-item'>predatory</span> <span class='slop-word-item'>intricate</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>feels like (21)</span> <span class='slop-ngram-item'>another day (17)</span> <span class='slop-ngram-item'>content warning (17)</span> <span class='slop-ngram-item'>would like (15)</span> <span class='slop-ngram-item'>looked like (12)</span> <span class='slop-ngram-item'>something else (11)</span> <span class='slop-ngram-item'>first time (10)</span> <span class='slop-ngram-item'>reach eyes (10)</span> <span class='slop-ngram-item'>something beyond (10)</span> <span class='slop-ngram-item'>draft capturing (10)</span> <span class='slop-ngram-item'>like something (9)</span> <span class='slop-ngram-item'>something wrong (9)</span> <span class='slop-ngram-item'>look like (9)</span> <span class='slop-ngram-item'>raised eyebrow (9)</span> <span class='slop-ngram-item'>psychological evaluation (9)</span> <span class='slop-ngram-item'>threat assessment (9)</span> <span class='slop-ngram-item'>feels different (8)</span> <span class='slop-ngram-item'>carefully constructed (8)</span> <span class='slop-ngram-item'>shadows across (8)</span> <span class='slop-ngram-item'>stone walls (8)</span> <span class='slop-ngram-item'>warning narrative (8)</span> <span class='slop-ngram-item'>draft chapter (7)</span> <span class='slop-ngram-item'>looking like (7)</span> <span class='slop-ngram-item'>seemed breathe (7)</span> <span class='slop-ngram-item'>felt like (7)</span> <span class='slop-ngram-item'>hung air (7)</span> <span class='slop-ngram-item'>says voice (7)</span> <span class='slop-ngram-item'>sound like (7)</span> <span class='slop-ngram-item'>said voice (7)</span> <span class='slop-ngram-item'>smile reach (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>content warning narrative (8)</span> <span class='slop-ngram-item'>smile reach eyes (7)</span> <span class='slop-ngram-item'>warning narrative contains (5)</span> <span class='slop-ngram-item'>seemed breathe around (4)</span> <span class='slop-ngram-item'>would like modify (4)</span> <span class='slop-ngram-item'>content warning passage (4)</span> <span class='slop-ngram-item'>warning passage contains (4)</span> <span class='slop-ngram-item'>passage contains references (4)</span> <span class='slop-ngram-item'>trying sound casual (3)</span> <span class='slop-ngram-item'>casting long shadows (3)</span> <span class='slop-ngram-item'>statement hung air (3)</span> <span class='slop-ngram-item'>scene capturing requested (3)</span> <span class='slop-ngram-item'>would like refine (3)</span> <span class='slop-ngram-item'>refine aspects draft (3)</span> <span class='slop-ngram-item'>conversation feels like (3)</span> <span class='slop-ngram-item'>like chess match (3)</span> <span class='slop-ngram-item'>like distant thunder (3)</span> <span class='slop-ngram-item'>says question statement (3)</span> <span class='slop-ngram-item'>heart rate spikes (3)</span> <span class='slop-ngram-item'>laugh soft almost (3)</span> <span class='slop-ngram-item'>fingers danced across (3)</span> <span class='slop-ngram-item'>psychological impact assessment (3)</span> <span class='slop-ngram-item'>hand moves almost (2)</span> <span class='slop-ngram-item'>moves almost gesture (2)</span> <span class='slop-ngram-item'>almost gesture suggests (2)</span> <span class='slop-ngram-item'>might something else (2)</span> <span class='slop-ngram-item'>something else entirely (2)</span> <span class='slop-ngram-item'>something older something (2)</span> <span class='slop-ngram-item'>moved like ghost (2)</span> <span class='slop-ngram-item'>quite reach eyes (2)</span>
</div>

##### gpt-4.1-mini
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-mini__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-mini__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gpt-4.1-mini' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-mini__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-mini__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gpt-4.1-mini' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.693)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.706)</div>
<div class='slop-similar'>quasar-alpha (distance=0.710)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.726)</div>
<div class='slop-similar'>optimus-alpha (distance=0.730)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>addendum</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (42)</span> <span class='slop-ngram-item'>said voice (41)</span> <span class='slop-ngram-item'>look like (18)</span> <span class='slop-ngram-item'>sounds like (18)</span> <span class='slop-ngram-item'>maybe maybe (17)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>feel like (17)</span> <span class='slop-ngram-item'>said softly (16)</span> <span class='slop-ngram-item'>looks like (16)</span> <span class='slop-ngram-item'>something else (16)</span> <span class='slop-ngram-item'>sound like (16)</span> <span class='slop-ngram-item'>felt like (15)</span> <span class='slop-ngram-item'>voice dropping (15)</span> <span class='slop-ngram-item'>feels like (15)</span> <span class='slop-ngram-item'>something like (14)</span> <span class='slop-ngram-item'>eyes sharp (14)</span> <span class='slop-ngram-item'>eyes gleaming (14)</span> <span class='slop-ngram-item'>eyes flickered (14)</span> <span class='slop-ngram-item'>stepping closer (13)</span> <span class='slop-ngram-item'>casting long (13)</span> <span class='slop-ngram-item'>say something (12)</span> <span class='slop-ngram-item'>shook head (12)</span> <span class='slop-ngram-item'>long shadows (12)</span> <span class='slop-ngram-item'>want say (12)</span> <span class='slop-ngram-item'>swallowed hard (11)</span> <span class='slop-ngram-item'>voice steady (11)</span> <span class='slop-ngram-item'>eyes wide (11)</span> <span class='slop-ngram-item'>heart pounding (11)</span> <span class='slop-ngram-item'>leaned forward (11)</span> <span class='slop-ngram-item'>eyes narrowed (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (11)</span> <span class='slop-ngram-item'>casting long shadows (11)</span> <span class='slop-ngram-item'>voice barely whisper (7)</span> <span class='slop-ngram-item'>air thick scent (6)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>object class euclid (5)</span> <span class='slop-ngram-item'>class euclid special (5)</span> <span class='slop-ngram-item'>euclid special containment (5)</span> <span class='slop-ngram-item'>closer voice dropping (5)</span> <span class='slop-ngram-item'>said stepping closer (5)</span> <span class='slop-ngram-item'>know real anymore (4)</span> <span class='slop-ngram-item'>said voice steady (4)</span> <span class='slop-ngram-item'>every time try (4)</span> <span class='slop-ngram-item'>something dangerously close (4)</span> <span class='slop-ngram-item'>said voice smooth (4)</span> <span class='slop-ngram-item'>laughed sound like (4)</span> <span class='slop-ngram-item'>words caught throat (3)</span> <span class='slop-ngram-item'>scent damp earth (3)</span> <span class='slop-ngram-item'>said breaking silence (3)</span> <span class='slop-ngram-item'>felt like hours (3)</span> <span class='slop-ngram-item'>like living thing (3)</span> <span class='slop-ngram-item'>voice low rough (3)</span> <span class='slop-ngram-item'>said finally voice (3)</span> <span class='slop-ngram-item'>one last time (3)</span> <span class='slop-ngram-item'>smile tugging lips (3)</span> <span class='slop-ngram-item'>smile playing lips (3)</span> <span class='slop-ngram-item'>somewhere deep inside (3)</span> <span class='slop-ngram-item'>wiping sweat brow (3)</span> <span class='slop-ngram-item'>want sound like (3)</span>
</div>

##### google/gemma-3-4b-it
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-4b-it__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-4b-it__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for google/gemma-3-4b-it' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-4b-it__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-4b-it__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for google/gemma-3-4b-it' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.596)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.675)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.697)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.722)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.726)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>xylos</span> <span class='slop-word-item'>veridia</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>slicking</span> <span class='slop-word-item'>veridian</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>silvanus</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>disconcertingly</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>insistent</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>disconcerting</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>glint</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (111)</span> <span class='slop-ngram-item'>felt like (56)</span> <span class='slop-ngram-item'>voice low (52)</span> <span class='slop-ngram-item'>says voice (45)</span> <span class='slop-ngram-item'>flicker something (43)</span> <span class='slop-ngram-item'>voice barely (34)</span> <span class='slop-ngram-item'>something vaguely (29)</span> <span class='slop-ngram-item'>carefully constructed (28)</span> <span class='slop-ngram-item'>almost imperceptible (27)</span> <span class='slop-ngram-item'>playing lips (24)</span> <span class='slop-ngram-item'>voice laced (22)</span> <span class='slop-ngram-item'>smile playing (22)</span> <span class='slop-ngram-item'>something else (21)</span> <span class='slop-ngram-item'>look like (20)</span> <span class='slop-ngram-item'>air thick (18)</span> <span class='slop-ngram-item'>barely whisper (18)</span> <span class='slop-ngram-item'>barely audible (17)</span> <span class='slop-ngram-item'>chilling certainty (17)</span> <span class='slop-ngram-item'>maybe maybe (16)</span> <span class='slop-ngram-item'>asked voice (16)</span> <span class='slop-ngram-item'>small almost (16)</span> <span class='slop-ngram-item'>first time (16)</span> <span class='slop-ngram-item'>said eyes (15)</span> <span class='slop-ngram-item'>slow deliberate (15)</span> <span class='slop-ngram-item'>gaze unwavering (15)</span> <span class='slop-ngram-item'>let say (15)</span> <span class='slop-ngram-item'>something akin (15)</span> <span class='slop-ngram-item'>desperately trying (15)</span> <span class='slop-ngram-item'>intricately carved (15)</span> <span class='slop-ngram-item'>devoid emotion (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile playing lips (22)</span> <span class='slop-ngram-item'>said voice low (19)</span> <span class='slop-ngram-item'>voice barely whisper (17)</span> <span class='slop-ngram-item'>voice barely audible (16)</span> <span class='slop-ngram-item'>voice low rumble (11)</span> <span class='slop-ngram-item'>said voice barely (11)</span> <span class='slop-ngram-item'>voice devoid emotion (11)</span> <span class='slop-ngram-item'>something vaguely metallic (10)</span> <span class='slop-ngram-item'>rain continued fall (10)</span> <span class='slop-ngram-item'>something vaguely floral (10)</span> <span class='slop-ngram-item'>says voice low (10)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>hair pulled back (9)</span> <span class='slop-ngram-item'>flicker something akin (9)</span> <span class='slop-ngram-item'>flicker something unreadable (8)</span> <span class='slop-ngram-item'>took deep breath (8)</span> <span class='slop-ngram-item'>said voice softer (8)</span> <span class='slop-ngram-item'>small intricately carved (8)</span> <span class='slop-ngram-item'>words tumbling could (7)</span> <span class='slop-ngram-item'>rain continues fall (7)</span> <span class='slop-ngram-item'>air thick smell (6)</span> <span class='slop-ngram-item'>tumbling could stop (6)</span> <span class='slop-ngram-item'>something unreadable eyes (6)</span> <span class='slop-ngram-item'>continued fall washing (6)</span> <span class='slop-ngram-item'>felt less like (6)</span> <span class='slop-ngram-item'>air thick scent (6)</span> <span class='slop-ngram-item'>said voice devoid (6)</span> <span class='slop-ngram-item'>subtle almost imperceptible (6)</span> <span class='slop-ngram-item'>voice carefully neutral (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span>
</div>

##### gemini-2.5-flash-preview
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-flash-preview__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-flash-preview__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gemini-2.5-flash-preview' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-flash-preview__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.5-flash-preview__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gemini-2.5-flash-preview' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.653)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.667)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.684)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.684)</div>
<div class='slop-similar'>gemini-2.5-pro-exp-03-25 (distance=0.706)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>tinny</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>chrono</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>wildflowers</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>coiled</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (68)</span> <span class='slop-ngram-item'>felt like (62)</span> <span class='slop-ngram-item'>voice low (57)</span> <span class='slop-ngram-item'>something else (44)</span> <span class='slop-ngram-item'>says voice (37)</span> <span class='slop-ngram-item'>flicker something (36)</span> <span class='slop-ngram-item'>air thick (27)</span> <span class='slop-ngram-item'>gaze fixed (23)</span> <span class='slop-ngram-item'>almost imperceptible (23)</span> <span class='slop-ngram-item'>voice barely (22)</span> <span class='slop-ngram-item'>asked voice (21)</span> <span class='slop-ngram-item'>voice little (21)</span> <span class='slop-ngram-item'>barely whisper (19)</span> <span class='slop-ngram-item'>maybe maybe (19)</span> <span class='slop-ngram-item'>carefully constructed (19)</span> <span class='slop-ngram-item'>low murmur (18)</span> <span class='slop-ngram-item'>air around (17)</span> <span class='slop-ngram-item'>looks like (17)</span> <span class='slop-ngram-item'>sound like (17)</span> <span class='slop-ngram-item'>hung air (16)</span> <span class='slop-ngram-item'>eyes narrowed (16)</span> <span class='slop-ngram-item'>stark contrast (16)</span> <span class='slop-ngram-item'>thick scent (16)</span> <span class='slop-ngram-item'>internal monologue (16)</span> <span class='slop-ngram-item'>different kind (15)</span> <span class='slop-ngram-item'>else something (15)</span> <span class='slop-ngram-item'>voice dropping (14)</span> <span class='slop-ngram-item'>could feel (14)</span> <span class='slop-ngram-item'>less like (14)</span> <span class='slop-ngram-item'>sounded like (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (18)</span> <span class='slop-ngram-item'>voice barely whisper (18)</span> <span class='slop-ngram-item'>something else something (15)</span> <span class='slop-ngram-item'>sent shiver spine (10)</span> <span class='slop-ngram-item'>says voice low (10)</span> <span class='slop-ngram-item'>smile playing lips (9)</span> <span class='slop-ngram-item'>took deep breath (9)</span> <span class='slop-ngram-item'>flicker something akin (9)</span> <span class='slop-ngram-item'>heart hammered ribs (8)</span> <span class='slop-ngram-item'>flicker something unreadable (8)</span> <span class='slop-ngram-item'>air thick scent (8)</span> <span class='slop-ngram-item'>trying sound casual (7)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>asked voice barely (7)</span> <span class='slop-ngram-item'>almost imperceptible smile (7)</span> <span class='slop-ngram-item'>question hung air (6)</span> <span class='slop-ngram-item'>takes step closer (6)</span> <span class='slop-ngram-item'>something vaguely metallic (6)</span> <span class='slop-ngram-item'>voice low rumble (6)</span> <span class='slop-ngram-item'>small almost imperceptible (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>scent damp earth (6)</span> <span class='slop-ngram-item'>heart hammering ribs (6)</span> <span class='slop-ngram-item'>smile touching lips (5)</span> <span class='slop-ngram-item'>like physical blow (5)</span> <span class='slop-ngram-item'>voice dropping slightly (5)</span> <span class='slop-ngram-item'>long dancing shadows (5)</span> <span class='slop-ngram-item'>said voice little (5)</span> <span class='slop-ngram-item'>air thick unspoken (5)</span> <span class='slop-ngram-item'>spreading across face (5)</span>
</div>

##### CohereForAI/c4ai-command-a-03-2025
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/CohereForAI__c4ai-command-a-03-2025__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/CohereForAI__c4ai-command-a-03-2025__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for CohereForAI/c4ai-command-a-03-2025' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/CohereForAI__c4ai-command-a-03-2025__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/CohereForAI__c4ai-command-a-03-2025__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for CohereForAI/c4ai-command-a-03-2025' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.693)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.701)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.730)</div>
<div class='slop-similar'>quasar-alpha (distance=0.738)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.750)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaira</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>slung</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>shrugging</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>clench</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>overthinking</span> <span class='slop-word-item'>replaying</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>softens</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>mingling</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (50)</span> <span class='slop-ngram-item'>voice low (37)</span> <span class='slop-ngram-item'>says voice (36)</span> <span class='slop-ngram-item'>air thick (36)</span> <span class='slop-ngram-item'>voice steady (31)</span> <span class='slop-ngram-item'>felt like (29)</span> <span class='slop-ngram-item'>voice barely (29)</span> <span class='slop-ngram-item'>something else (28)</span> <span class='slop-ngram-item'>heart pounding (26)</span> <span class='slop-ngram-item'>first time (25)</span> <span class='slop-ngram-item'>gon na (24)</span> <span class='slop-ngram-item'>feels like (22)</span> <span class='slop-ngram-item'>expression unreadable (21)</span> <span class='slop-ngram-item'>closed eyes (19)</span> <span class='slop-ngram-item'>next time (18)</span> <span class='slop-ngram-item'>look like (18)</span> <span class='slop-ngram-item'>casting long (18)</span> <span class='slop-ngram-item'>let go (16)</span> <span class='slop-ngram-item'>barely whisper (16)</span> <span class='slop-ngram-item'>long shadows (15)</span> <span class='slop-ngram-item'>last night (15)</span> <span class='slop-ngram-item'>dim light (14)</span> <span class='slop-ngram-item'>feel like (14)</span> <span class='slop-ngram-item'>asked voice (14)</span> <span class='slop-ngram-item'>one thing (13)</span> <span class='slop-ngram-item'>barely audible (13)</span> <span class='slop-ngram-item'>fingers brushing (13)</span> <span class='slop-ngram-item'>mind racing (13)</span> <span class='slop-ngram-item'>steady despite (13)</span> <span class='slop-ngram-item'>thick scent (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (16)</span> <span class='slop-ngram-item'>casting long shadows (13)</span> <span class='slop-ngram-item'>voice barely audible (12)</span> <span class='slop-ngram-item'>take deep breath (10)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>voice steady despite (10)</span> <span class='slop-ngram-item'>said voice low (9)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>one thing certain (7)</span> <span class='slop-ngram-item'>long shadows across (7)</span> <span class='slop-ngram-item'>said voice barely (7)</span> <span class='slop-ngram-item'>said voice steady (7)</span> <span class='slop-ngram-item'>says voice low (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>seen better days (6)</span> <span class='slop-ngram-item'>first time long (6)</span> <span class='slop-ngram-item'>something else something (5)</span> <span class='slop-ngram-item'>euclid special containment (5)</span> <span class='slop-ngram-item'>voice dropping whisper (5)</span> <span class='slop-ngram-item'>steady despite tremor (5)</span> <span class='slop-ngram-item'>smile playing lips (5)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>knew one thing (4)</span> <span class='slop-ngram-item'>air thick unspoken (4)</span> <span class='slop-ngram-item'>door slams open (4)</span> <span class='slop-ngram-item'>containment procedures due (4)</span> <span class='slop-ngram-item'>mobile task force (4)</span> <span class='slop-ngram-item'>low rumbling sound (4)</span> <span class='slop-ngram-item'>closed eyes letting (4)</span> <span class='slop-ngram-item'>got ta eat (4)</span>
</div>

##### gemini-2.0-flash-001
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.0-flash-001__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.0-flash-001__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gemini-2.0-flash-001' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.0-flash-001__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gemini-2.0-flash-001__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gemini-2.0-flash-001' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.625)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.658)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.684)</div>
<div class='slop-similar'>google/gemma-2-9b-it (distance=0.689)</div>
<div class='slop-similar'>ToastyPigeon/Gemma-3-Starshine-12B (distance=0.697)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>hydroponics</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>elysium</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (78)</span> <span class='slop-ngram-item'>voice barely (40)</span> <span class='slop-ngram-item'>voice low (32)</span> <span class='slop-ngram-item'>barely whisper (30)</span> <span class='slop-ngram-item'>something else (29)</span> <span class='slop-ngram-item'>says voice (27)</span> <span class='slop-ngram-item'>felt like (25)</span> <span class='slop-ngram-item'>maybe maybe (21)</span> <span class='slop-ngram-item'>air thick (20)</span> <span class='slop-ngram-item'>deep breath (19)</span> <span class='slop-ngram-item'>playing lips (19)</span> <span class='slop-ngram-item'>voice laced (18)</span> <span class='slop-ngram-item'>flicker something (18)</span> <span class='slop-ngram-item'>sound like (18)</span> <span class='slop-ngram-item'>trying sound (17)</span> <span class='slop-ngram-item'>smile playing (17)</span> <span class='slop-ngram-item'>could feel (16)</span> <span class='slop-ngram-item'>let say (15)</span> <span class='slop-ngram-item'>feel like (15)</span> <span class='slop-ngram-item'>asked voice (14)</span> <span class='slop-ngram-item'>look like (14)</span> <span class='slop-ngram-item'>eyes wide (14)</span> <span class='slop-ngram-item'>say voice (13)</span> <span class='slop-ngram-item'>raises eyebrow (13)</span> <span class='slop-ngram-item'>looks like (13)</span> <span class='slop-ngram-item'>deep breaths (13)</span> <span class='slop-ngram-item'>oh god (13)</span> <span class='slop-ngram-item'>barely audible (12)</span> <span class='slop-ngram-item'>raised eyebrow (12)</span> <span class='slop-ngram-item'>said eyes (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (29)</span> <span class='slop-ngram-item'>smile playing lips (17)</span> <span class='slop-ngram-item'>said voice low (12)</span> <span class='slop-ngram-item'>voice barely audible (11)</span> <span class='slop-ngram-item'>took deep breath (9)</span> <span class='slop-ngram-item'>heart pounding chest (9)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>said voice barely (8)</span> <span class='slop-ngram-item'>said voice laced (7)</span> <span class='slop-ngram-item'>voice dangerously low (7)</span> <span class='slop-ngram-item'>okay deep breaths (7)</span> <span class='slop-ngram-item'>say trying sound (7)</span> <span class='slop-ngram-item'>something else something (6)</span> <span class='slop-ngram-item'>asked voice barely (6)</span> <span class='slop-ngram-item'>flash white teeth (6)</span> <span class='slop-ngram-item'>felt like eternity (6)</span> <span class='slop-ngram-item'>air hung thick (6)</span> <span class='slop-ngram-item'>air thick smell (5)</span> <span class='slop-ngram-item'>hung air heavy (5)</span> <span class='slop-ngram-item'>say voice barely (5)</span> <span class='slop-ngram-item'>says voice dripping (5)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>like ash mouth (5)</span> <span class='slop-ngram-item'>casting long shadows (5)</span> <span class='slop-ngram-item'>said voice smooth (5)</span> <span class='slop-ngram-item'>leaned back chair (5)</span> <span class='slop-ngram-item'>trying keep voice (5)</span> <span class='slop-ngram-item'>smiled genuine smile (4)</span> <span class='slop-ngram-item'>casting long distorted (4)</span> <span class='slop-ngram-item'>long distorted shadows (4)</span>
</div>

##### google/gemma-3-12b-it
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-12b-it__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-12b-it__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for google/gemma-3-12b-it' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-12b-it__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-3-12b-it__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for google/gemma-3-12b-it' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.540)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.596)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.653)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.653)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.658)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>oakhaven</span> <span class='slop-word-item'>xylosian</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>kenji</span> <span class='slop-word-item'>thimbles</span> <span class='slop-word-item'>humorless</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>impeccably</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>grumbles</span> <span class='slop-word-item'>wildflowers</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>flickering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (68)</span> <span class='slop-ngram-item'>voice low (46)</span> <span class='slop-ngram-item'>felt like (42)</span> <span class='slop-ngram-item'>says voice (38)</span> <span class='slop-ngram-item'>flicker something (28)</span> <span class='slop-ngram-item'>voice barely (28)</span> <span class='slop-ngram-item'>something else (23)</span> <span class='slop-ngram-item'>almost imperceptible (22)</span> <span class='slop-ngram-item'>barely whisper (19)</span> <span class='slop-ngram-item'>could feel (18)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>expression unreadable (17)</span> <span class='slop-ngram-item'>gaze fixed (17)</span> <span class='slop-ngram-item'>look like (17)</span> <span class='slop-ngram-item'>voice laced (16)</span> <span class='slop-ngram-item'>playing lips (15)</span> <span class='slop-ngram-item'>eye contact (15)</span> <span class='slop-ngram-item'>eyes fixed (14)</span> <span class='slop-ngram-item'>maybe maybe (14)</span> <span class='slop-ngram-item'>hung air (14)</span> <span class='slop-ngram-item'>carefully constructed (14)</span> <span class='slop-ngram-item'>smile playing (14)</span> <span class='slop-ngram-item'>deep breath (14)</span> <span class='slop-ngram-item'>barely audible (13)</span> <span class='slop-ngram-item'>first time (13)</span> <span class='slop-ngram-item'>trying keep (13)</span> <span class='slop-ngram-item'>asked voice (13)</span> <span class='slop-ngram-item'>stark contrast (13)</span> <span class='slop-ngram-item'>low rumble (12)</span> <span class='slop-ngram-item'>let say (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (18)</span> <span class='slop-ngram-item'>smile playing lips (14)</span> <span class='slop-ngram-item'>said voice low (12)</span> <span class='slop-ngram-item'>took deep breath (10)</span> <span class='slop-ngram-item'>voice low rumble (10)</span> <span class='slop-ngram-item'>voice barely audible (9)</span> <span class='slop-ngram-item'>said voice barely (9)</span> <span class='slop-ngram-item'>trying keep voice (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>says voice low (9)</span> <span class='slop-ngram-item'>hung air heavy (8)</span> <span class='slop-ngram-item'>let know like (8)</span> <span class='slop-ngram-item'>flicker something unreadable (7)</span> <span class='slop-ngram-item'>carefully constructed facade (7)</span> <span class='slop-ngram-item'>long distorted shadows (7)</span> <span class='slop-ngram-item'>small intricately carved (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span> <span class='slop-ngram-item'>class euclid special (6)</span> <span class='slop-ngram-item'>euclid special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>flash white teeth (5)</span> <span class='slop-ngram-item'>aiming requested tone (5)</span> <span class='slop-ngram-item'>included notes end (5)</span> <span class='slop-ngram-item'>potential story directions (5)</span> <span class='slop-ngram-item'>something unreadable eyes (5)</span> <span class='slop-ngram-item'>takes step closer (5)</span> <span class='slop-ngram-item'>know like adjustments (5)</span> <span class='slop-ngram-item'>keep voice steady (5)</span> <span class='slop-ngram-item'>voice low resonant (5)</span> <span class='slop-ngram-item'>voice surprisingly steady (5)</span>
</div>

##### sam-paech/Darkest-muse-v1
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/sam-paech__Darkest-muse-v1__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/sam-paech__Darkest-muse-v1__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for sam-paech/Darkest-muse-v1' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/sam-paech__Darkest-muse-v1__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/sam-paech__Darkest-muse-v1__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for sam-paech/Darkest-muse-v1' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.827)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.830)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.834)</div>
<div class='slop-similar'>ifable/gemma-2-Ifable-9B (distance=0.841)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.844)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rasped</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>woodsmoke</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>rasping</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>rasps</span> <span class='slop-word-item'>skittering</span> <span class='slop-word-item'>flagstones</span> <span class='slop-word-item'>spiderweb</span> <span class='slop-word-item'>wheezed</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>sibilant</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>acheron</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>snaked</span> <span class='slop-word-item'>overripe</span> <span class='slop-word-item'>gnarled</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>sickly</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>phosphorescent</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>chipped</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>tinny</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>scavenged</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else (86)</span> <span class='slop-ngram-item'>felt like (73)</span> <span class='slop-ngram-item'>said voice (67)</span> <span class='slop-ngram-item'>sound like (51)</span> <span class='slop-ngram-item'>else something (49)</span> <span class='slop-ngram-item'>looked like (48)</span> <span class='slop-ngram-item'>like goddamn (40)</span> <span class='slop-ngram-item'>metallic tang (36)</span> <span class='slop-ngram-item'>look like (36)</span> <span class='slop-ngram-item'>like trying (34)</span> <span class='slop-ngram-item'>could feel (31)</span> <span class='slop-ngram-item'>like shroud (29)</span> <span class='slop-ngram-item'>flicker something (29)</span> <span class='slop-ngram-item'>voice low (28)</span> <span class='slop-ngram-item'>looks like (27)</span> <span class='slop-ngram-item'>gon na (27)</span> <span class='slop-ngram-item'>suspiciously like (26)</span> <span class='slop-ngram-item'>air thick (24)</span> <span class='slop-ngram-item'>like rusty (24)</span> <span class='slop-ngram-item'>say something (24)</span> <span class='slop-ngram-item'>eyes like (23)</span> <span class='slop-ngram-item'>back neck (23)</span> <span class='slop-ngram-item'>polished obsidian (22)</span> <span class='slop-ngram-item'>something like (22)</span> <span class='slop-ngram-item'>second skin (21)</span> <span class='slop-ngram-item'>voice like (21)</span> <span class='slop-ngram-item'>back throat (21)</span> <span class='slop-ngram-item'>like second (20)</span> <span class='slop-ngram-item'>first time (20)</span> <span class='slop-ngram-item'>like bad (20)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something (49)</span> <span class='slop-ngram-item'>like second skin (19)</span> <span class='slop-ngram-item'>air hung thick (13)</span> <span class='slop-ngram-item'>looked suspiciously like (13)</span> <span class='slop-ngram-item'>like polished obsidian (11)</span> <span class='slop-ngram-item'>hairs back neck (11)</span> <span class='slop-ngram-item'>like rusty hinge (11)</span> <span class='slop-ngram-item'>said voice low (9)</span> <span class='slop-ngram-item'>sounded suspiciously like (8)</span> <span class='slop-ngram-item'>back neck prickle (8)</span> <span class='slop-ngram-item'>clung back throat (8)</span> <span class='slop-ngram-item'>metallic tang blood (8)</span> <span class='slop-ngram-item'>voice like gravel (8)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>words tasting like (7)</span> <span class='slop-ngram-item'>tasting like ash (7)</span> <span class='slop-ngram-item'>damp earth something (7)</span> <span class='slop-ngram-item'>else something metallic (7)</span> <span class='slop-ngram-item'>voice dry rasp (7)</span> <span class='slop-ngram-item'>like ash mouth (7)</span> <span class='slop-ngram-item'>look like could (7)</span> <span class='slop-ngram-item'>saw flicker something (6)</span> <span class='slop-ngram-item'>dry rasping sound (6)</span> <span class='slop-ngram-item'>else something sharp (6)</span> <span class='slop-ngram-item'>low guttural growl (6)</span> <span class='slop-ngram-item'>back throat like (6)</span> <span class='slop-ngram-item'>could feel heat (6)</span> <span class='slop-ngram-item'>flicker something like (6)</span> <span class='slop-ngram-item'>wanted say something (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span>
</div>

##### allura-org/Gemma-3-Glitter-12B
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/allura-org__Gemma-3-Glitter-12B__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/allura-org__Gemma-3-Glitter-12B__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for allura-org/Gemma-3-Glitter-12B' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/allura-org__Gemma-3-Glitter-12B__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/allura-org__Gemma-3-Glitter-12B__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for allura-org/Gemma-3-Glitter-12B' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.540)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.625)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.653)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.667)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.675)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>chronal</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>wren</span> <span class='slop-word-item'>hydroponics</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (98)</span> <span class='slop-ngram-item'>voice low (45)</span> <span class='slop-ngram-item'>voice barely (38)</span> <span class='slop-ngram-item'>felt like (37)</span> <span class='slop-ngram-item'>says voice (37)</span> <span class='slop-ngram-item'>something else (29)</span> <span class='slop-ngram-item'>barely whisper (26)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>could feel (24)</span> <span class='slop-ngram-item'>look like (23)</span> <span class='slop-ngram-item'>air thick (22)</span> <span class='slop-ngram-item'>expression unreadable (22)</span> <span class='slop-ngram-item'>let say (21)</span> <span class='slop-ngram-item'>maybe maybe (21)</span> <span class='slop-ngram-item'>flicker something (19)</span> <span class='slop-ngram-item'>voice surprisingly (18)</span> <span class='slop-ngram-item'>say voice (18)</span> <span class='slop-ngram-item'>deep breath (17)</span> <span class='slop-ngram-item'>voice laced (17)</span> <span class='slop-ngram-item'>looked eyes (16)</span> <span class='slop-ngram-item'>barely audible (16)</span> <span class='slop-ngram-item'>took deep (15)</span> <span class='slop-ngram-item'>eyes narrowed (15)</span> <span class='slop-ngram-item'>first time (15)</span> <span class='slop-ngram-item'>intricately carved (14)</span> <span class='slop-ngram-item'>gaze fixed (14)</span> <span class='slop-ngram-item'>long time (14)</span> <span class='slop-ngram-item'>asks voice (14)</span> <span class='slop-ngram-item'>voice dangerously (14)</span> <span class='slop-ngram-item'>pulled back (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (25)</span> <span class='slop-ngram-item'>said voice low (19)</span> <span class='slop-ngram-item'>took deep breath (15)</span> <span class='slop-ngram-item'>said voice surprisingly (15)</span> <span class='slop-ngram-item'>small intricately carved (12)</span> <span class='slop-ngram-item'>voice barely audible (12)</span> <span class='slop-ngram-item'>hair pulled back (11)</span> <span class='slop-ngram-item'>smile playing lips (11)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>intricately carved wooden (9)</span> <span class='slop-ngram-item'>voice surprisingly steady (9)</span> <span class='slop-ngram-item'>said voice barely (9)</span> <span class='slop-ngram-item'>included notes end (8)</span> <span class='slop-ngram-item'>hung air heavy (8)</span> <span class='slop-ngram-item'>could feel heat (8)</span> <span class='slop-ngram-item'>notes end potential (7)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>something else something (7)</span> <span class='slop-ngram-item'>predatory curve lips (7)</span> <span class='slop-ngram-item'>first time long (7)</span> <span class='slop-ngram-item'>time long time (7)</span> <span class='slop-ngram-item'>air thick smell (6)</span> <span class='slop-ngram-item'>takes step closer (6)</span> <span class='slop-ngram-item'>potential story directions (6)</span> <span class='slop-ngram-item'>let know like (6)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>smiled slow predatory (6)</span> <span class='slop-ngram-item'>slow predatory curve (6)</span> <span class='slop-ngram-item'>flash white teeth (6)</span> <span class='slop-ngram-item'>voice dangerously low (6)</span>
</div>

##### THUDM/GLM-4-32B-0414
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/THUDM__GLM-4-32B-0414__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/THUDM__GLM-4-32B-0414__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for THUDM/GLM-4-32B-0414' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/THUDM__GLM-4-32B-0414__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/THUDM__GLM-4-32B-0414__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for THUDM/GLM-4-32B-0414' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.684)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.730)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.738)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.742)</div>
<div class='slop-similar'>gemini-2.5-pro-exp-03-25 (distance=0.754)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>conspiratorially</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>borin</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>chirped</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>dismissively</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>tinny</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>clutched</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (141)</span> <span class='slop-ngram-item'>felt like (121)</span> <span class='slop-ngram-item'>could feel (93)</span> <span class='slop-ngram-item'>voice low (61)</span> <span class='slop-ngram-item'>something else (60)</span> <span class='slop-ngram-item'>deep breath (51)</span> <span class='slop-ngram-item'>feels like (48)</span> <span class='slop-ngram-item'>look away (38)</span> <span class='slop-ngram-item'>eyes fixed (37)</span> <span class='slop-ngram-item'>took deep (36)</span> <span class='slop-ngram-item'>looked like (35)</span> <span class='slop-ngram-item'>voice dropping (33)</span> <span class='slop-ngram-item'>gaze fixed (31)</span> <span class='slop-ngram-item'>air thick (30)</span> <span class='slop-ngram-item'>feel like (29)</span> <span class='slop-ngram-item'>took step (25)</span> <span class='slop-ngram-item'>sound like (25)</span> <span class='slop-ngram-item'>expression unreadable (24)</span> <span class='slop-ngram-item'>eyes searching (23)</span> <span class='slop-ngram-item'>voice barely (23)</span> <span class='slop-ngram-item'>maybe maybe (22)</span> <span class='slop-ngram-item'>filled mixture (22)</span> <span class='slop-ngram-item'>felt strange (22)</span> <span class='slop-ngram-item'>took another (22)</span> <span class='slop-ngram-item'>heart pounding (22)</span> <span class='slop-ngram-item'>held back (22)</span> <span class='slop-ngram-item'>vaguely towards (21)</span> <span class='slop-ngram-item'>eyes filled (21)</span> <span class='slop-ngram-item'>dim light (21)</span> <span class='slop-ngram-item'>eyes narrowed (21)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (34)</span> <span class='slop-ngram-item'>said voice low (29)</span> <span class='slop-ngram-item'>eyes filled mixture (19)</span> <span class='slop-ngram-item'>something else something (17)</span> <span class='slop-ngram-item'>fixed could feel (17)</span> <span class='slop-ngram-item'>smile playing lips (15)</span> <span class='slop-ngram-item'>said voice dropping (14)</span> <span class='slop-ngram-item'>gestured vaguely towards (12)</span> <span class='slop-ngram-item'>voice barely whisper (12)</span> <span class='slop-ngram-item'>faint almost imperceptible (12)</span> <span class='slop-ngram-item'>could feel tension (12)</span> <span class='slop-ngram-item'>voice dropping conspiratorial (10)</span> <span class='slop-ngram-item'>dropping conspiratorial whisper (10)</span> <span class='slop-ngram-item'>took step closer (10)</span> <span class='slop-ngram-item'>voice barely audible (10)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>took step back (8)</span> <span class='slop-ngram-item'>felt less like (7)</span> <span class='slop-ngram-item'>heart hammered ribs (7)</span> <span class='slop-ngram-item'>long distorted shadows (7)</span> <span class='slop-ngram-item'>could feel eyes (7)</span> <span class='slop-ngram-item'>could feel heat (7)</span> <span class='slop-ngram-item'>chill run spine (7)</span> <span class='slop-ngram-item'>trying sound casual (7)</span> <span class='slop-ngram-item'>deep breath trying (7)</span> <span class='slop-ngram-item'>right said voice (6)</span> <span class='slop-ngram-item'>something deeper something (6)</span> <span class='slop-ngram-item'>said voice soft (6)</span> <span class='slop-ngram-item'>slight tremor hands (6)</span> <span class='slop-ngram-item'>flash white teeth (6)</span>
</div>

##### mistralai/mistral-large-2411
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-large-2411__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-large-2411__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for mistralai/mistral-large-2411' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-large-2411__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-large-2411__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for mistralai/mistral-large-2411' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.545)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.625)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.662)</div>
<div class='slop-similar'>mistralai/mistral-small-3.1-24b-instruct-2503 (distance=0.680)</div>
<div class='slop-similar'>mistralai/Mistral-Small-24B-Instruct-2501 (distance=0.701)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>vespera</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>misting</span> <span class='slop-word-item'>astrid</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>inscrutable</span> <span class='slop-word-item'>growls</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>disheveled</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>evelyn</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>scribbling</span> <span class='slop-word-item'>clink</span> <span class='slop-word-item'>figurine</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>leaned</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>li wei (80)</span> <span class='slop-ngram-item'>said voice (57)</span> <span class='slop-ngram-item'>heart pounding (45)</span> <span class='slop-ngram-item'>voice low (40)</span> <span class='slop-ngram-item'>deep breath (40)</span> <span class='slop-ngram-item'>says voice (40)</span> <span class='slop-ngram-item'>air thick (38)</span> <span class='slop-ngram-item'>voice barely (38)</span> <span class='slop-ngram-item'>eyes wide (32)</span> <span class='slop-ngram-item'>ca help (31)</span> <span class='slop-ngram-item'>playing lips (29)</span> <span class='slop-ngram-item'>barely whisper (27)</span> <span class='slop-ngram-item'>smile playing (26)</span> <span class='slop-ngram-item'>shake feeling (25)</span> <span class='slop-ngram-item'>small smile (24)</span> <span class='slop-ngram-item'>mind racing (23)</span> <span class='slop-ngram-item'>voice soft (23)</span> <span class='slop-ngram-item'>eyes gleaming (22)</span> <span class='slop-ngram-item'>voice steady (22)</span> <span class='slop-ngram-item'>stark contrast (22)</span> <span class='slop-ngram-item'>maybe maybe (22)</span> <span class='slop-ngram-item'>never leaving (21)</span> <span class='slop-ngram-item'>shook head (21)</span> <span class='slop-ngram-item'>could shake (21)</span> <span class='slop-ngram-item'>asked voice (20)</span> <span class='slop-ngram-item'>eyes never (20)</span> <span class='slop-ngram-item'>could help (19)</span> <span class='slop-ngram-item'>pounding chest (18)</span> <span class='slop-ngram-item'>eyes filled (18)</span> <span class='slop-ngram-item'>looks eyes (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (27)</span> <span class='slop-ngram-item'>smile playing lips (23)</span> <span class='slop-ngram-item'>eyes never leaving (20)</span> <span class='slop-ngram-item'>could shake feeling (19)</span> <span class='slop-ngram-item'>heart pounding chest (18)</span> <span class='slop-ngram-item'>small smile playing (15)</span> <span class='slop-ngram-item'>took deep breath (15)</span> <span class='slop-ngram-item'>take deep breath (15)</span> <span class='slop-ngram-item'>said voice barely (13)</span> <span class='slop-ngram-item'>says voice soft (10)</span> <span class='slop-ngram-item'>voice barely audible (10)</span> <span class='slop-ngram-item'>coming ragged gasps (9)</span> <span class='slop-ngram-item'>said voice steady (8)</span> <span class='slop-ngram-item'>one last time (8)</span> <span class='slop-ngram-item'>air thick scent (8)</span> <span class='slop-ngram-item'>asked voice barely (8)</span> <span class='slop-ngram-item'>special containment procedures (8)</span> <span class='slop-ngram-item'>made way back (7)</span> <span class='slop-ngram-item'>voice low growl (7)</span> <span class='slop-ngram-item'>ca help feel (7)</span> <span class='slop-ngram-item'>takes deep breath (7)</span> <span class='slop-ngram-item'>help feel sense (7)</span> <span class='slop-ngram-item'>felt chill run (7)</span> <span class='slop-ngram-item'>chill run spine (7)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>voice low rumble (6)</span> <span class='slop-ngram-item'>ready face whatever (6)</span> <span class='slop-ngram-item'>could help feel (6)</span> <span class='slop-ngram-item'>distant hoot owl (6)</span> <span class='slop-ngram-item'>like distant thunder (6)</span>
</div>

##### gpt-4.1-nano
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-nano__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-nano__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gpt-4.1-nano' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-nano__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4.1-nano__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gpt-4.1-nano' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.706)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.730)</div>
<div class='slop-similar'>quasar-alpha (distance=0.746)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.762)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.780)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>prickled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>lidded</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>pallor</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>alleyways</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>shyly</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>softly</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>shadowed</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>look like (29)</span> <span class='slop-ngram-item'>air thick (27)</span> <span class='slop-ngram-item'>feel like (23)</span> <span class='slop-ngram-item'>maybe maybe (21)</span> <span class='slop-ngram-item'>voice low (21)</span> <span class='slop-ngram-item'>said voice (21)</span> <span class='slop-ngram-item'>heart pounding (21)</span> <span class='slop-ngram-item'>voice trembling (20)</span> <span class='slop-ngram-item'>feeling weight (19)</span> <span class='slop-ngram-item'>leaned back (19)</span> <span class='slop-ngram-item'>voice smooth (18)</span> <span class='slop-ngram-item'>eyes flickering (17)</span> <span class='slop-ngram-item'>find way (17)</span> <span class='slop-ngram-item'>eyes narrowing (16)</span> <span class='slop-ngram-item'>chuckled softly (16)</span> <span class='slop-ngram-item'>eyes flicked (16)</span> <span class='slop-ngram-item'>something else (15)</span> <span class='slop-ngram-item'>deep breath (15)</span> <span class='slop-ngram-item'>say something (14)</span> <span class='slop-ngram-item'>eyes flickered (14)</span> <span class='slop-ngram-item'>faint scent (13)</span> <span class='slop-ngram-item'>trying keep (13)</span> <span class='slop-ngram-item'>curling lips (13)</span> <span class='slop-ngram-item'>felt strange (13)</span> <span class='slop-ngram-item'>like trying (13)</span> <span class='slop-ngram-item'>long shadows (13)</span> <span class='slop-ngram-item'>flicker something (12)</span> <span class='slop-ngram-item'>eyes flicker (12)</span> <span class='slop-ngram-item'>got ta (12)</span> <span class='slop-ngram-item'>looked like (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>air thick scent (9)</span> <span class='slop-ngram-item'>smile curling lips (8)</span> <span class='slop-ngram-item'>voice barely whisper (7)</span> <span class='slop-ngram-item'>take deep breath (7)</span> <span class='slop-ngram-item'>casting long shadows (7)</span> <span class='slop-ngram-item'>seen better days (6)</span> <span class='slop-ngram-item'>cast long shadows (6)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>smile playing lips (5)</span> <span class='slop-ngram-item'>says softly voice (5)</span> <span class='slop-ngram-item'>door swings open (5)</span> <span class='slop-ngram-item'>look like seen (5)</span> <span class='slop-ngram-item'>took deep breath (5)</span> <span class='slop-ngram-item'>one last time (5)</span> <span class='slop-ngram-item'>steps closer voice (5)</span> <span class='slop-ngram-item'>thick scent damp (5)</span> <span class='slop-ngram-item'>object class euclid (5)</span> <span class='slop-ngram-item'>class euclid special (5)</span> <span class='slop-ngram-item'>euclid special containment (5)</span> <span class='slop-ngram-item'>voice trembling slightly (4)</span> <span class='slop-ngram-item'>tilts head eyes (4)</span> <span class='slop-ngram-item'>chuckles softly sound (4)</span> <span class='slop-ngram-item'>said voice smooth (4)</span> <span class='slop-ngram-item'>swung legs side (4)</span> <span class='slop-ngram-item'>head eyes gleaming (4)</span> <span class='slop-ngram-item'>smirk curling lips (4)</span> <span class='slop-ngram-item'>said voice low (4)</span> <span class='slop-ngram-item'>somewhere deep inside (4)</span> <span class='slop-ngram-item'>said softly voice (4)</span>
</div>

##### ifable/gemma-2-Ifable-9B
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/ifable__gemma-2-Ifable-9B__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/ifable__gemma-2-Ifable-9B__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for ifable/gemma-2-Ifable-9B' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/ifable__gemma-2-Ifable-9B__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/ifable__gemma-2-Ifable-9B__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for ifable/gemma-2-Ifable-9B' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.802)</div>
<div class='slop-similar'>google/gemma-2-9b-it (distance=0.817)</div>
<div class='slop-similar'>liquid/lfm-7b (distance=0.824)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.834)</div>
<div class='slop-similar'>gemini-2.5-pro-exp-03-25 (distance=0.837)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>aethelred</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>fathomless</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>wizened</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>discordant</span> <span class='slop-word-item'>honeyed</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>hushed</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>lilt</span> <span class='slop-word-item'>nonchalance</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>grudging</span> <span class='slop-word-item'>mirroring</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>sliver</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>terran</span> <span class='slop-word-item'>theatricality</span> <span class='slop-word-item'>languid</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>meticulously</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>carefully constructed (27)</span> <span class='slop-ngram-item'>something akin (25)</span> <span class='slop-ngram-item'>felt like (24)</span> <span class='slop-ngram-item'>stark contrast (22)</span> <span class='slop-ngram-item'>voice low (20)</span> <span class='slop-ngram-item'>flicker something (17)</span> <span class='slop-ngram-item'>eyes like (15)</span> <span class='slop-ngram-item'>metallic tang (13)</span> <span class='slop-ngram-item'>ghost smile (13)</span> <span class='slop-ngram-item'>touching lips (13)</span> <span class='slop-ngram-item'>subtle shift (12)</span> <span class='slop-ngram-item'>said voice (12)</span> <span class='slop-ngram-item'>sound like (12)</span> <span class='slop-ngram-item'>got ta (12)</span> <span class='slop-ngram-item'>would agree (11)</span> <span class='slop-ngram-item'>playing lips (11)</span> <span class='slop-ngram-item'>maybe maybe (11)</span> <span class='slop-ngram-item'>less like (10)</span> <span class='slop-ngram-item'>air thick (9)</span> <span class='slop-ngram-item'>smile touching (9)</span> <span class='slop-ngram-item'>back home (9)</span> <span class='slop-ngram-item'>damp earth (9)</span> <span class='slop-ngram-item'>feels like (9)</span> <span class='slop-ngram-item'>gilded cage (8)</span> <span class='slop-ngram-item'>chuckled sound (8)</span> <span class='slop-ngram-item'>carefully cultivated (8)</span> <span class='slop-ngram-item'>like polished (8)</span> <span class='slop-ngram-item'>internal monologue (8)</span> <span class='slop-ngram-item'>ever pragmatist (8)</span> <span class='slop-ngram-item'>existential dread (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>flicker something akin (13)</span> <span class='slop-ngram-item'>smile touching lips (9)</span> <span class='slop-ngram-item'>eyes like polished (7)</span> <span class='slop-ngram-item'>chuckled sound like (7)</span> <span class='slop-ngram-item'>smile playing lips (6)</span> <span class='slop-ngram-item'>ghost smile touching (6)</span> <span class='slop-ngram-item'>voice low murmur (6)</span> <span class='slop-ngram-item'>felt less like (5)</span> <span class='slop-ngram-item'>like polished obsidian (5)</span> <span class='slop-ngram-item'>like second skin (4)</span> <span class='slop-ngram-item'>scent damp earth (4)</span> <span class='slop-ngram-item'>like dry leaves (4)</span> <span class='slop-ngram-item'>dry leaves skittering (4)</span> <span class='slop-ngram-item'>sent shiver spine (4)</span> <span class='slop-ngram-item'>smirk playing lips (4)</span> <span class='slop-ngram-item'>voice silken rasp (4)</span> <span class='slop-ngram-item'>clung like second (3)</span> <span class='slop-ngram-item'>smile spreading across (3)</span> <span class='slop-ngram-item'>spreading across face (3)</span> <span class='slop-ngram-item'>smile touched lips (3)</span> <span class='slop-ngram-item'>paused ghost smile (3)</span> <span class='slop-ngram-item'>feels less like (3)</span> <span class='slop-ngram-item'>ghost smile playing (3)</span> <span class='slop-ngram-item'>predator assessing prey (3)</span> <span class='slop-ngram-item'>maybe year two (3)</span> <span class='slop-ngram-item'>sound like wind (3)</span> <span class='slop-ngram-item'>carefully constructed facade (3)</span> <span class='slop-ngram-item'>elongated dancing shadows (3)</span> <span class='slop-ngram-item'>metronome marking time (3)</span> <span class='slop-ngram-item'>voice low rumble (3)</span>
</div>

##### mistralai/Pixtral-Large-Instruct-2411
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Pixtral-Large-Instruct-2411__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Pixtral-Large-Instruct-2411__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for mistralai/Pixtral-Large-Instruct-2411' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Pixtral-Large-Instruct-2411__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Pixtral-Large-Instruct-2411__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for mistralai/Pixtral-Large-Instruct-2411' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.545)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.616)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.644)</div>
<div class='slop-similar'>mistralai/mistral-small-3.1-24b-instruct-2503 (distance=0.684)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.701)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>tensing</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>doodling</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>darting</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (60)</span> <span class='slop-ngram-item'>deep breath (52)</span> <span class='slop-ngram-item'>heart pounding (50)</span> <span class='slop-ngram-item'>says voice (40)</span> <span class='slop-ngram-item'>air thick (39)</span> <span class='slop-ngram-item'>voice low (39)</span> <span class='slop-ngram-item'>voice steady (35)</span> <span class='slop-ngram-item'>li wei (31)</span> <span class='slop-ngram-item'>voice barely (29)</span> <span class='slop-ngram-item'>raised eyebrow (25)</span> <span class='slop-ngram-item'>barely whisper (24)</span> <span class='slop-ngram-item'>eyes narrow (24)</span> <span class='slop-ngram-item'>pounding chest (23)</span> <span class='slop-ngram-item'>ca help (23)</span> <span class='slop-ngram-item'>mind racing (21)</span> <span class='slop-ngram-item'>small smile (21)</span> <span class='slop-ngram-item'>run spine (21)</span> <span class='slop-ngram-item'>sound like (20)</span> <span class='slop-ngram-item'>take deep (20)</span> <span class='slop-ngram-item'>eyes narrowing (19)</span> <span class='slop-ngram-item'>eyes wide (19)</span> <span class='slop-ngram-item'>stark contrast (18)</span> <span class='slop-ngram-item'>could help (18)</span> <span class='slop-ngram-item'>made way (18)</span> <span class='slop-ngram-item'>maybe maybe (18)</span> <span class='slop-ngram-item'>took deep (18)</span> <span class='slop-ngram-item'>eyes filled (18)</span> <span class='slop-ngram-item'>trying keep (17)</span> <span class='slop-ngram-item'>could feel (17)</span> <span class='slop-ngram-item'>voice soft (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (24)</span> <span class='slop-ngram-item'>heart pounding chest (22)</span> <span class='slop-ngram-item'>take deep breath (20)</span> <span class='slop-ngram-item'>took deep breath (18)</span> <span class='slop-ngram-item'>chill run spine (16)</span> <span class='slop-ngram-item'>felt chill run (15)</span> <span class='slop-ngram-item'>air thick scent (14)</span> <span class='slop-ngram-item'>deep breath trying (12)</span> <span class='slop-ngram-item'>made way back (11)</span> <span class='slop-ngram-item'>voice steady despite (11)</span> <span class='slop-ngram-item'>could shake feeling (11)</span> <span class='slop-ngram-item'>eyes never leaving (10)</span> <span class='slop-ngram-item'>coming ragged gasps (10)</span> <span class='slop-ngram-item'>help feel sense (9)</span> <span class='slop-ngram-item'>said voice steady (9)</span> <span class='slop-ngram-item'>smile playing lips (9)</span> <span class='slop-ngram-item'>leaned back chair (8)</span> <span class='slop-ngram-item'>casting long shadows (8)</span> <span class='slop-ngram-item'>leaned forward eyes (8)</span> <span class='slop-ngram-item'>trying keep voice (8)</span> <span class='slop-ngram-item'>breath coming ragged (8)</span> <span class='slop-ngram-item'>steady despite turmoil (7)</span> <span class='slop-ngram-item'>small smile playing (7)</span> <span class='slop-ngram-item'>eyes filled mix (7)</span> <span class='slop-ngram-item'>takes deep breath (7)</span> <span class='slop-ngram-item'>said voice barely (7)</span> <span class='slop-ngram-item'>shake feeling unease (7)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>felt shiver run (7)</span> <span class='slop-ngram-item'>could feel weight (6)</span>
</div>

##### meta-llama/llama-3.1-405b-instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-405b-instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-405b-instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/llama-3.1-405b-instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-405b-instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-405b-instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/llama-3.1-405b-instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.529)</div>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.561)</div>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.566)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.587)</div>
<div class='slop-similar'>meta-llama/llama-3.2-1b-instruct (distance=0.621)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>mirthless</span> <span class='slop-word-item'>kaelin</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>amnesiac</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>elyria</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>erebus</span> <span class='slop-word-item'>frazzled</span> <span class='slop-word-item'>newhaven</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>eerie</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>glassy</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>flicking</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>incident report (57)</span> <span class='slop-ngram-item'>said voice (51)</span> <span class='slop-ngram-item'>voice low (28)</span> <span class='slop-ngram-item'>shake feeling (28)</span> <span class='slop-ngram-item'>raised eyebrow (27)</span> <span class='slop-ngram-item'>could shake (27)</span> <span class='slop-ngram-item'>made way (26)</span> <span class='slop-ngram-item'>eyes glinting (26)</span> <span class='slop-ngram-item'>voice barely (25)</span> <span class='slop-ngram-item'>deep breath (25)</span> <span class='slop-ngram-item'>feel like (25)</span> <span class='slop-ngram-item'>could help (25)</span> <span class='slop-ngram-item'>eyes fixed (20)</span> <span class='slop-ngram-item'>eyes sparkling (20)</span> <span class='slop-ngram-item'>run spine (20)</span> <span class='slop-ngram-item'>says voice (20)</span> <span class='slop-ngram-item'>shiver run (19)</span> <span class='slop-ngram-item'>barely whisper (17)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>eyes locked (17)</span> <span class='slop-ngram-item'>voice dripping (17)</span> <span class='slop-ngram-item'>felt shiver (16)</span> <span class='slop-ngram-item'>hesitated unsure (15)</span> <span class='slop-ngram-item'>find way (14)</span> <span class='slop-ngram-item'>eyes never (14)</span> <span class='slop-ngram-item'>eyes narrowed (14)</span> <span class='slop-ngram-item'>eyes widened (13)</span> <span class='slop-ngram-item'>heart skipped (13)</span> <span class='slop-ngram-item'>skipped beat (13)</span> <span class='slop-ngram-item'>true nature (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling (24)</span> <span class='slop-ngram-item'>shiver run spine (19)</span> <span class='slop-ngram-item'>voice barely whisper (17)</span> <span class='slop-ngram-item'>felt shiver run (16)</span> <span class='slop-ngram-item'>heart skipped beat (13)</span> <span class='slop-ngram-item'>said voice low (12)</span> <span class='slop-ngram-item'>made way back (12)</span> <span class='slop-ngram-item'>sun began set (11)</span> <span class='slop-ngram-item'>began set casting (11)</span> <span class='slop-ngram-item'>took deep breath (11)</span> <span class='slop-ngram-item'>eyes never leaving (10)</span> <span class='slop-ngram-item'>casting golden glow (10)</span> <span class='slop-ngram-item'>voice low husky (9)</span> <span class='slop-ngram-item'>voice barely audible (8)</span> <span class='slop-ngram-item'>eyes glinting amusement (8)</span> <span class='slop-ngram-item'>eyes locked onto (8)</span> <span class='slop-ngram-item'>casting eerie shadows (7)</span> <span class='slop-ngram-item'>said voice barely (7)</span> <span class='slop-ngram-item'>set casting golden (7)</span> <span class='slop-ngram-item'>says voice dripping (7)</span> <span class='slop-ngram-item'>flush rise cheeks (6)</span> <span class='slop-ngram-item'>take deep breath (6)</span> <span class='slop-ngram-item'>could help feel (6)</span> <span class='slop-ngram-item'>air thick smell (6)</span> <span class='slop-ngram-item'>smile playing lips (6)</span> <span class='slop-ngram-item'>heart pounding chest (6)</span> <span class='slop-ngram-item'>said voice dripping (6)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>takes step closer (6)</span> <span class='slop-ngram-item'>smile grew wider (6)</span>
</div>

##### mistralai/Mistral-Nemo-Instruct-2407
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Nemo-Instruct-2407__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Nemo-Instruct-2407__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for mistralai/Mistral-Nemo-Instruct-2407' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Nemo-Instruct-2407__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Nemo-Instruct-2407__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for mistralai/Mistral-Nemo-Instruct-2407' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.616)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.625)</div>
<div class='slop-similar'>mistralai/mistral-small-3.1-24b-instruct-2503 (distance=0.714)</div>
<div class='slop-similar'>ToastyPigeon/Gemma-3-Starshine-12B (distance=0.722)</div>
<div class='slop-similar'>mistralai/Mistral-Small-24B-Instruct-2501 (distance=0.730)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rustle</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>flicker</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (135)</span> <span class='slop-ngram-item'>voice barely (88)</span> <span class='slop-ngram-item'>heart pounding (86)</span> <span class='slop-ngram-item'>deep breath (77)</span> <span class='slop-ngram-item'>li wei (73)</span> <span class='slop-ngram-item'>barely whisper (66)</span> <span class='slop-ngram-item'>pounding chest (60)</span> <span class='slop-ngram-item'>voice steady (52)</span> <span class='slop-ngram-item'>take deep (48)</span> <span class='slop-ngram-item'>says voice (47)</span> <span class='slop-ngram-item'>find way (46)</span> <span class='slop-ngram-item'>voice low (45)</span> <span class='slop-ngram-item'>voice soft (35)</span> <span class='slop-ngram-item'>asked voice (34)</span> <span class='slop-ngram-item'>eyes meeting (34)</span> <span class='slop-ngram-item'>something else (30)</span> <span class='slop-ngram-item'>smile playing (29)</span> <span class='slop-ngram-item'>playing lips (28)</span> <span class='slop-ngram-item'>mind racing (28)</span> <span class='slop-ngram-item'>small smile (27)</span> <span class='slop-ngram-item'>could feel (27)</span> <span class='slop-ngram-item'>run spine (27)</span> <span class='slop-ngram-item'>eyes gleaming (27)</span> <span class='slop-ngram-item'>breath trying (26)</span> <span class='slop-ngram-item'>always going (26)</span> <span class='slop-ngram-item'>shook head (25)</span> <span class='slop-ngram-item'>say voice (25)</span> <span class='slop-ngram-item'>eyes wide (24)</span> <span class='slop-ngram-item'>sound like (24)</span> <span class='slop-ngram-item'>let go (23)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (66)</span> <span class='slop-ngram-item'>heart pounding chest (60)</span> <span class='slop-ngram-item'>take deep breath (48)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>deep breath trying (26)</span> <span class='slop-ngram-item'>smile playing lips (25)</span> <span class='slop-ngram-item'>said voice steady (25)</span> <span class='slop-ngram-item'>eyes meeting mine (22)</span> <span class='slop-ngram-item'>small smile playing (21)</span> <span class='slop-ngram-item'>voice steady despite (21)</span> <span class='slop-ngram-item'>took deep breath (21)</span> <span class='slop-ngram-item'>breath trying calm (20)</span> <span class='slop-ngram-item'>voice barely audible (19)</span> <span class='slop-ngram-item'>chill run spine (19)</span> <span class='slop-ngram-item'>one step time (18)</span> <span class='slop-ngram-item'>eyes never leaving (17)</span> <span class='slop-ngram-item'>felt chill run (17)</span> <span class='slop-ngram-item'>take one step (16)</span> <span class='slop-ngram-item'>step time one (16)</span> <span class='slop-ngram-item'>said voice low (15)</span> <span class='slop-ngram-item'>air thick scent (14)</span> <span class='slop-ngram-item'>leaned back chair (11)</span> <span class='slop-ngram-item'>says voice soft (11)</span> <span class='slop-ngram-item'>laughed sound like (11)</span> <span class='slop-ngram-item'>asked voice barely (11)</span> <span class='slop-ngram-item'>looks eyes meeting (11)</span> <span class='slop-ngram-item'>spreading across face (10)</span> <span class='slop-ngram-item'>find way make (10)</span> <span class='slop-ngram-item'>elara said voice (10)</span> <span class='slop-ngram-item'>like distant thunder (9)</span>
</div>

##### ToastyPigeon/Gemma-3-Starshine-12B
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/ToastyPigeon__Gemma-3-Starshine-12B__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/ToastyPigeon__Gemma-3-Starshine-12B__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for ToastyPigeon/Gemma-3-Starshine-12B' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/ToastyPigeon__Gemma-3-Starshine-12B__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/ToastyPigeon__Gemma-3-Starshine-12B__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for ToastyPigeon/Gemma-3-Starshine-12B' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.697)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.710)</div>
<div class='slop-similar'>google/gemma-2-9b-it (distance=0.722)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.722)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.722)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>evangeline</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>dictating</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>aurelia</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>scavengers</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>clasped</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>kaleidoscope</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>glared</span> <span class='slop-word-item'>hoarse</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (220)</span> <span class='slop-ngram-item'>voice barely (63)</span> <span class='slop-ngram-item'>voice low (62)</span> <span class='slop-ngram-item'>asked voice (60)</span> <span class='slop-ngram-item'>could feel (47)</span> <span class='slop-ngram-item'>felt like (46)</span> <span class='slop-ngram-item'>voice trembling (45)</span> <span class='slop-ngram-item'>shook head (44)</span> <span class='slop-ngram-item'>deep breath (43)</span> <span class='slop-ngram-item'>heart pounding (37)</span> <span class='slop-ngram-item'>barely whisper (37)</span> <span class='slop-ngram-item'>closed eyes (36)</span> <span class='slop-ngram-item'>eyes wide (33)</span> <span class='slop-ngram-item'>looked eyes (32)</span> <span class='slop-ngram-item'>feel like (32)</span> <span class='slop-ngram-item'>long time (31)</span> <span class='slop-ngram-item'>says voice (31)</span> <span class='slop-ngram-item'>eyes filled (29)</span> <span class='slop-ngram-item'>find way (28)</span> <span class='slop-ngram-item'>barely audible (27)</span> <span class='slop-ngram-item'>something else (26)</span> <span class='slop-ngram-item'>eyes widened (25)</span> <span class='slop-ngram-item'>voice dripping (24)</span> <span class='slop-ngram-item'>said eyes (23)</span> <span class='slop-ngram-item'>opened eyes (23)</span> <span class='slop-ngram-item'>air thick (22)</span> <span class='slop-ngram-item'>felt surge (22)</span> <span class='slop-ngram-item'>eyes gleaming (22)</span> <span class='slop-ngram-item'>long moment (22)</span> <span class='slop-ngram-item'>pounding chest (21)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (37)</span> <span class='slop-ngram-item'>said voice low (33)</span> <span class='slop-ngram-item'>said voice barely (30)</span> <span class='slop-ngram-item'>voice barely audible (26)</span> <span class='slop-ngram-item'>took deep breath (20)</span> <span class='slop-ngram-item'>heart pounding chest (19)</span> <span class='slop-ngram-item'>said voice trembling (17)</span> <span class='slop-ngram-item'>take deep breath (16)</span> <span class='slop-ngram-item'>asked voice trembling (14)</span> <span class='slop-ngram-item'>said voice soft (13)</span> <span class='slop-ngram-item'>said voice dripping (13)</span> <span class='slop-ngram-item'>smile playing lips (12)</span> <span class='slop-ngram-item'>asked voice barely (11)</span> <span class='slop-ngram-item'>said voice flat (11)</span> <span class='slop-ngram-item'>hair pulled back (10)</span> <span class='slop-ngram-item'>air thick smell (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>turned walked away (9)</span> <span class='slop-ngram-item'>looked eyes filled (9)</span> <span class='slop-ngram-item'>voice dripping sarcasm (9)</span> <span class='slop-ngram-item'>opened eyes looked (9)</span> <span class='slop-ngram-item'>chill run spine (9)</span> <span class='slop-ngram-item'>leaned forward eyes (9)</span> <span class='slop-ngram-item'>trying keep voice (9)</span> <span class='slop-ngram-item'>said trying sound (9)</span> <span class='slop-ngram-item'>voice trembling slightly (9)</span> <span class='slop-ngram-item'>says voice low (9)</span> <span class='slop-ngram-item'>said shaking head (8)</span> <span class='slop-ngram-item'>could feel heat (8)</span> <span class='slop-ngram-item'>deep breath trying (8)</span>
</div>

##### google/gemma-2-9b-it
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-2-9b-it__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-2-9b-it__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for google/gemma-2-9b-it' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-2-9b-it__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/google__gemma-2-9b-it__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for google/gemma-2-9b-it' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.689)</div>
<div class='slop-similar'>liquid/lfm-7b (distance=0.701)</div>
<div class='slop-similar'>ToastyPigeon/Gemma-3-Starshine-12B (distance=0.722)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.726)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.742)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>aethel</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>purrs</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>throaty</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>saccharine</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>throngs</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>hoarse</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>hushed</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>whirlwind</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (101)</span> <span class='slop-ngram-item'>voice barely (48)</span> <span class='slop-ngram-item'>voice low (48)</span> <span class='slop-ngram-item'>barely whisper (39)</span> <span class='slop-ngram-item'>heart pounding (30)</span> <span class='slop-ngram-item'>air thick (24)</span> <span class='slop-ngram-item'>voice laced (22)</span> <span class='slop-ngram-item'>playing lips (22)</span> <span class='slop-ngram-item'>thick scent (21)</span> <span class='slop-ngram-item'>says voice (21)</span> <span class='slop-ngram-item'>say voice (21)</span> <span class='slop-ngram-item'>asked voice (20)</span> <span class='slop-ngram-item'>felt like (18)</span> <span class='slop-ngram-item'>smile playing (18)</span> <span class='slop-ngram-item'>gaze fixed (17)</span> <span class='slop-ngram-item'>voice trembling (17)</span> <span class='slop-ngram-item'>something else (16)</span> <span class='slop-ngram-item'>voice soft (16)</span> <span class='slop-ngram-item'>pounding chest (16)</span> <span class='slop-ngram-item'>shadows across (16)</span> <span class='slop-ngram-item'>maybe maybe (15)</span> <span class='slop-ngram-item'>dim light (14)</span> <span class='slop-ngram-item'>eyes filled (14)</span> <span class='slop-ngram-item'>around us (14)</span> <span class='slop-ngram-item'>deep breath (13)</span> <span class='slop-ngram-item'>asks voice (13)</span> <span class='slop-ngram-item'>whispered voice (13)</span> <span class='slop-ngram-item'>constant reminder (12)</span> <span class='slop-ngram-item'>eyes wide (12)</span> <span class='slop-ngram-item'>voice dropping (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (39)</span> <span class='slop-ngram-item'>said voice low (19)</span> <span class='slop-ngram-item'>smile playing lips (18)</span> <span class='slop-ngram-item'>heart pounding chest (16)</span> <span class='slop-ngram-item'>said voice barely (11)</span> <span class='slop-ngram-item'>voice dropping conspiratorial (9)</span> <span class='slop-ngram-item'>dropping conspiratorial whisper (9)</span> <span class='slop-ngram-item'>voice barely audible (9)</span> <span class='slop-ngram-item'>air thick scent (9)</span> <span class='slop-ngram-item'>asked voice barely (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>voice low murmur (9)</span> <span class='slop-ngram-item'>long shadows across (9)</span> <span class='slop-ngram-item'>said voice soft (9)</span> <span class='slop-ngram-item'>casting long shadows (8)</span> <span class='slop-ngram-item'>said voice dropping (7)</span> <span class='slop-ngram-item'>hand instinctively reaching (7)</span> <span class='slop-ngram-item'>take deep breath (7)</span> <span class='slop-ngram-item'>voice low rumble (7)</span> <span class='slop-ngram-item'>sent shiver spine (7)</span> <span class='slop-ngram-item'>said voice laced (7)</span> <span class='slop-ngram-item'>sent shivers spine (7)</span> <span class='slop-ngram-item'>air thick smell (6)</span> <span class='slop-ngram-item'>says voice low (6)</span> <span class='slop-ngram-item'>closer breath warm (6)</span> <span class='slop-ngram-item'>could shake feeling (6)</span> <span class='slop-ngram-item'>air hung heavy (6)</span> <span class='slop-ngram-item'>thick scent sweat (5)</span> <span class='slop-ngram-item'>casting dancing shadows (5)</span> <span class='slop-ngram-item'>air hung thick (5)</span>
</div>

##### gpt-4o-mini
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4o-mini__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4o-mini__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for gpt-4o-mini' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4o-mini__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/gpt-4o-mini__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for gpt-4o-mini' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>liquid/lfm-7b (distance=0.754)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.754)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.762)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.769)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.780)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>hargrove</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>igniting</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>falters</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>intoxicating</span> <span class='slop-word-item'>mischief</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>lacing</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>air thick (41)</span> <span class='slop-ngram-item'>said voice (39)</span> <span class='slop-ngram-item'>heart racing (38)</span> <span class='slop-ngram-item'>felt like (35)</span> <span class='slop-ngram-item'>heart raced (34)</span> <span class='slop-ngram-item'>shake feeling (30)</span> <span class='slop-ngram-item'>deep breath (29)</span> <span class='slop-ngram-item'>feel like (29)</span> <span class='slop-ngram-item'>replied voice (27)</span> <span class='slop-ngram-item'>feels like (27)</span> <span class='slop-ngram-item'>voice barely (26)</span> <span class='slop-ngram-item'>voice low (25)</span> <span class='slop-ngram-item'>voice steady (20)</span> <span class='slop-ngram-item'>could feel (20)</span> <span class='slop-ngram-item'>barely whisper (20)</span> <span class='slop-ngram-item'>felt weight (18)</span> <span class='slop-ngram-item'>eyes glinting (18)</span> <span class='slop-ngram-item'>around us (17)</span> <span class='slop-ngram-item'>around like (17)</span> <span class='slop-ngram-item'>let see (17)</span> <span class='slop-ngram-item'>voice smooth (17)</span> <span class='slop-ngram-item'>asked voice (16)</span> <span class='slop-ngram-item'>could see (16)</span> <span class='slop-ngram-item'>let go (16)</span> <span class='slop-ngram-item'>look like (16)</span> <span class='slop-ngram-item'>thick scent (16)</span> <span class='slop-ngram-item'>help feel (15)</span> <span class='slop-ngram-item'>heart races (15)</span> <span class='slop-ngram-item'>air like (15)</span> <span class='slop-ngram-item'>stark contrast (15)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (19)</span> <span class='slop-ngram-item'>air thick scent (13)</span> <span class='slop-ngram-item'>take deep breath (12)</span> <span class='slop-ngram-item'>took deep breath (11)</span> <span class='slop-ngram-item'>eyes glinting mischief (9)</span> <span class='slop-ngram-item'>replied voice barely (8)</span> <span class='slop-ngram-item'>long shadows across (7)</span> <span class='slop-ngram-item'>casting long shadows (7)</span> <span class='slop-ngram-item'>takes step closer (7)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>object class keter (6)</span> <span class='slop-ngram-item'>class keter special (6)</span> <span class='slop-ngram-item'>keter special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>sent shiver spine (5)</span> <span class='slop-ngram-item'>closer voice dropping (5)</span> <span class='slop-ngram-item'>wrapping around like (5)</span> <span class='slop-ngram-item'>low sky casting (5)</span> <span class='slop-ngram-item'>said voice smooth (5)</span> <span class='slop-ngram-item'>voice smooth silk (5)</span> <span class='slop-ngram-item'>could almost hear (4)</span> <span class='slop-ngram-item'>casting warm glow (4)</span> <span class='slop-ngram-item'>chill run spine (4)</span> <span class='slop-ngram-item'>shake feeling something (4)</span> <span class='slop-ngram-item'>door swings open (4)</span> <span class='slop-ngram-item'>voice dropping whisper (4)</span> <span class='slop-ngram-item'>voice barely rising (4)</span> <span class='slop-ngram-item'>voice trembling slightly (4)</span>
</div>

##### liquid/lfm-7b
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/liquid__lfm-7b__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/liquid__lfm-7b__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for liquid/lfm-7b' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/liquid__lfm-7b__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/liquid__lfm-7b__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for liquid/lfm-7b' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-2-9b-it (distance=0.701)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.738)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.746)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.750)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.754)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>nonchalance</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>undercurrent</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>fleeting</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>fidgeting</span> <span class='slop-word-item'>pragmatist</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>elysium</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>infernal</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>bustling</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>gravelly</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (56)</span> <span class='slop-ngram-item'>felt like (45)</span> <span class='slop-ngram-item'>voice low (40)</span> <span class='slop-ngram-item'>air thick (38)</span> <span class='slop-ngram-item'>deep breath (29)</span> <span class='slop-ngram-item'>thick scent (26)</span> <span class='slop-ngram-item'>mind racing (26)</span> <span class='slop-ngram-item'>stark contrast (25)</span> <span class='slop-ngram-item'>maybe maybe (24)</span> <span class='slop-ngram-item'>casting long (24)</span> <span class='slop-ngram-item'>long shadows (23)</span> <span class='slop-ngram-item'>shadows across (22)</span> <span class='slop-ngram-item'>voice laced (21)</span> <span class='slop-ngram-item'>let say (20)</span> <span class='slop-ngram-item'>dim light (19)</span> <span class='slop-ngram-item'>let make (19)</span> <span class='slop-ngram-item'>shake feeling (18)</span> <span class='slop-ngram-item'>took deep (18)</span> <span class='slop-ngram-item'>first time (18)</span> <span class='slop-ngram-item'>made way (17)</span> <span class='slop-ngram-item'>flicker something (16)</span> <span class='slop-ngram-item'>began voice (16)</span> <span class='slop-ngram-item'>asked voice (15)</span> <span class='slop-ngram-item'>voice barely (15)</span> <span class='slop-ngram-item'>voice steady (15)</span> <span class='slop-ngram-item'>raised eyebrow (14)</span> <span class='slop-ngram-item'>eyes narrowed (14)</span> <span class='slop-ngram-item'>leaned forward (14)</span> <span class='slop-ngram-item'>feels like (13)</span> <span class='slop-ngram-item'>movements fluid (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (17)</span> <span class='slop-ngram-item'>air thick scent (17)</span> <span class='slop-ngram-item'>casting long shadows (16)</span> <span class='slop-ngram-item'>said voice low (14)</span> <span class='slop-ngram-item'>long shadows across (14)</span> <span class='slop-ngram-item'>smile playing lips (12)</span> <span class='slop-ngram-item'>voice barely whisper (11)</span> <span class='slop-ngram-item'>heart skipped beat (9)</span> <span class='slop-ngram-item'>take deep breath (8)</span> <span class='slop-ngram-item'>something else something (8)</span> <span class='slop-ngram-item'>flicker something akin (8)</span> <span class='slop-ngram-item'>choosing words carefully (8)</span> <span class='slop-ngram-item'>cast long shadows (7)</span> <span class='slop-ngram-item'>voice steady despite (7)</span> <span class='slop-ngram-item'>shiver run spine (7)</span> <span class='slop-ngram-item'>piercing blue eyes (7)</span> <span class='slop-ngram-item'>hung heavy air (6)</span> <span class='slop-ngram-item'>breath warm ear (6)</span> <span class='slop-ngram-item'>eyes never leaving (6)</span> <span class='slop-ngram-item'>eyes locking onto (6)</span> <span class='slop-ngram-item'>said finally voice (6)</span> <span class='slop-ngram-item'>mind already racing (6)</span> <span class='slop-ngram-item'>made way back (6)</span> <span class='slop-ngram-item'>could shake feeling (6)</span> <span class='slop-ngram-item'>voice low husky (6)</span> <span class='slop-ngram-item'>felt shiver run (6)</span> <span class='slop-ngram-item'>eyebrow intrigued despite (6)</span> <span class='slop-ngram-item'>special containment procedures (5)</span> <span class='slop-ngram-item'>eyes crinkling corners (5)</span> <span class='slop-ngram-item'>every word every (5)</span>
</div>

##### meta-llama/Llama-4-Maverick-17B-128E-Instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Maverick-17B-128E-Instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Maverick-17B-128E-Instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/Llama-4-Maverick-17B-128E-Instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Maverick-17B-128E-Instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Maverick-17B-128E-Instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/Llama-4-Maverick-17B-128E-Instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.545)</div>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.566)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.587)</div>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.592)</div>
<div class='slop-similar'>meta-llama/llama-3.2-1b-instruct (distance=0.630)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>steepling</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>beeped</span> <span class='slop-word-item'>throaty</span> <span class='slop-word-item'>wavers</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>wryly</span> <span class='slop-word-item'>wafting</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>burly</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>beeps</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>lingers</span> <span class='slop-word-item'>heaving</span> <span class='slop-word-item'>otherworldly</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (58)</span> <span class='slop-ngram-item'>voice low (51)</span> <span class='slop-ngram-item'>air thick (44)</span> <span class='slop-ngram-item'>could help (36)</span> <span class='slop-ngram-item'>eyes locked (35)</span> <span class='slop-ngram-item'>deep breath (31)</span> <span class='slop-ngram-item'>feel like (30)</span> <span class='slop-ngram-item'>made way (27)</span> <span class='slop-ngram-item'>says voice (26)</span> <span class='slop-ngram-item'>run spine (25)</span> <span class='slop-ngram-item'>feeling sense (25)</span> <span class='slop-ngram-item'>raised eyebrow (24)</span> <span class='slop-ngram-item'>mind racing (24)</span> <span class='slop-ngram-item'>shake feeling (24)</span> <span class='slop-ngram-item'>eyes scanning (24)</span> <span class='slop-ngram-item'>shiver run (23)</span> <span class='slop-ngram-item'>eyes glinting (21)</span> <span class='slop-ngram-item'>felt sense (21)</span> <span class='slop-ngram-item'>felt like (20)</span> <span class='slop-ngram-item'>hesitated unsure (20)</span> <span class='slop-ngram-item'>could shake (20)</span> <span class='slop-ngram-item'>eyes fixed (19)</span> <span class='slop-ngram-item'>eyes widened (19)</span> <span class='slop-ngram-item'>voice barely (18)</span> <span class='slop-ngram-item'>dim light (18)</span> <span class='slop-ngram-item'>felt shiver (18)</span> <span class='slop-ngram-item'>smiled feeling (17)</span> <span class='slop-ngram-item'>take deep (17)</span> <span class='slop-ngram-item'>voice dripping (17)</span> <span class='slop-ngram-item'>barely whisper (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shiver run spine (23)</span> <span class='slop-ngram-item'>said voice low (21)</span> <span class='slop-ngram-item'>could shake feeling (20)</span> <span class='slop-ngram-item'>felt shiver run (18)</span> <span class='slop-ngram-item'>take deep breath (16)</span> <span class='slop-ngram-item'>voice barely whisper (15)</span> <span class='slop-ngram-item'>eyes never leaving (14)</span> <span class='slop-ngram-item'>took deep breath (13)</span> <span class='slop-ngram-item'>made way back (13)</span> <span class='slop-ngram-item'>spreading across face (12)</span> <span class='slop-ngram-item'>smiled feeling sense (12)</span> <span class='slop-ngram-item'>voice low smooth (11)</span> <span class='slop-ngram-item'>air thick smell (11)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>leaned back chair (10)</span> <span class='slop-ngram-item'>smile playing lips (10)</span> <span class='slop-ngram-item'>says voice low (10)</span> <span class='slop-ngram-item'>eyes locked onto (10)</span> <span class='slop-ngram-item'>eyes locking onto (10)</span> <span class='slop-ngram-item'>could help wonder (9)</span> <span class='slop-ngram-item'>sent shiver spine (9)</span> <span class='slop-ngram-item'>heart skipped beat (9)</span> <span class='slop-ngram-item'>mischievous glint eye (8)</span> <span class='slop-ngram-item'>deep breath try (8)</span> <span class='slop-ngram-item'>smile spreading across (8)</span> <span class='slop-ngram-item'>mind racing possibilities (8)</span> <span class='slop-ngram-item'>voice taking conspiratorial (7)</span> <span class='slop-ngram-item'>taking conspiratorial tone (7)</span> <span class='slop-ngram-item'>growing sense unease (7)</span> <span class='slop-ngram-item'>piercing green eyes (7)</span>
</div>

##### meta-llama/llama-3.1-70b-instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-70b-instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-70b-instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/llama-3.1-70b-instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-70b-instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-70b-instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/llama-3.1-70b-instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.524)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.529)</div>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.545)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.545)</div>
<div class='slop-similar'>meta-llama/llama-3.2-1b-instruct (distance=0.571)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>newhaven</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>dripping</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>exertion</span> <span class='slop-word-item'>crackling</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>rustling</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (44)</span> <span class='slop-ngram-item'>voice low (36)</span> <span class='slop-ngram-item'>deep breath (34)</span> <span class='slop-ngram-item'>raised eyebrow (30)</span> <span class='slop-ngram-item'>feel like (27)</span> <span class='slop-ngram-item'>eyes locked (26)</span> <span class='slop-ngram-item'>run spine (26)</span> <span class='slop-ngram-item'>eyes glinting (26)</span> <span class='slop-ngram-item'>shiver run (25)</span> <span class='slop-ngram-item'>could help (24)</span> <span class='slop-ngram-item'>shake feeling (23)</span> <span class='slop-ngram-item'>feeling sense (23)</span> <span class='slop-ngram-item'>could shake (22)</span> <span class='slop-ngram-item'>trying sound (22)</span> <span class='slop-ngram-item'>felt like (21)</span> <span class='slop-ngram-item'>voice barely (21)</span> <span class='slop-ngram-item'>felt shiver (20)</span> <span class='slop-ngram-item'>eyes fixed (19)</span> <span class='slop-ngram-item'>says voice (19)</span> <span class='slop-ngram-item'>voice dripping (19)</span> <span class='slop-ngram-item'>air thick (18)</span> <span class='slop-ngram-item'>eyes scanning (18)</span> <span class='slop-ngram-item'>barely whisper (18)</span> <span class='slop-ngram-item'>take deep (18)</span> <span class='slop-ngram-item'>eyes sparkled (18)</span> <span class='slop-ngram-item'>made way (18)</span> <span class='slop-ngram-item'>mind racing (17)</span> <span class='slop-ngram-item'>dimly lit (17)</span> <span class='slop-ngram-item'>locked onto (16)</span> <span class='slop-ngram-item'>across face (16)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shiver run spine (25)</span> <span class='slop-ngram-item'>could shake feeling (21)</span> <span class='slop-ngram-item'>felt shiver run (20)</span> <span class='slop-ngram-item'>voice barely whisper (18)</span> <span class='slop-ngram-item'>take deep breath (17)</span> <span class='slop-ngram-item'>said voice low (15)</span> <span class='slop-ngram-item'>eyes locked onto (13)</span> <span class='slop-ngram-item'>spreading across face (13)</span> <span class='slop-ngram-item'>deep breath try (12)</span> <span class='slop-ngram-item'>took deep breath (12)</span> <span class='slop-ngram-item'>sun began set (10)</span> <span class='slop-ngram-item'>said voice dripping (10)</span> <span class='slop-ngram-item'>heart skipped beat (10)</span> <span class='slop-ngram-item'>eyes never leaving (9)</span> <span class='slop-ngram-item'>eyes glinting amusement (9)</span> <span class='slop-ngram-item'>said voice barely (9)</span> <span class='slop-ngram-item'>smile spreading across (9)</span> <span class='slop-ngram-item'>air thick smell (8)</span> <span class='slop-ngram-item'>voice low husky (8)</span> <span class='slop-ngram-item'>voice low smooth (7)</span> <span class='slop-ngram-item'>said trying sound (7)</span> <span class='slop-ngram-item'>began set casting (7)</span> <span class='slop-ngram-item'>eyes scanning room (7)</span> <span class='slop-ngram-item'>casting long shadows (7)</span> <span class='slop-ngram-item'>mind racing implications (7)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>started feel like (6)</span> <span class='slop-ngram-item'>trying sound nonchalant (6)</span> <span class='slop-ngram-item'>eyes sparkled amusement (6)</span> <span class='slop-ngram-item'>casting eerie glow (6)</span>
</div>

##### mistralai/mistral-small-3.1-24b-instruct-2503
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-small-3.1-24b-instruct-2503__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-small-3.1-24b-instruct-2503__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for mistralai/mistral-small-3.1-24b-instruct-2503' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-small-3.1-24b-instruct-2503__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__mistral-small-3.1-24b-instruct-2503__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for mistralai/mistral-small-3.1-24b-instruct-2503' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.680)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.684)</div>
<div class='slop-similar'>mistralai/Mistral-Small-24B-Instruct-2501 (distance=0.689)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.714)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.746)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>sneer</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>untamed</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>clanging</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>burly</span> <span class='slop-word-item'>curled</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>downcast</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>coldness</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>disheveled</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>wavering</span> <span class='slop-word-item'>arcane</span> <span class='slop-word-item'>inscrutable</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gleaming</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>find way (138)</span> <span class='slop-ngram-item'>deep breath (123)</span> <span class='slop-ngram-item'>eyes never (107)</span> <span class='slop-ngram-item'>said voice (107)</span> <span class='slop-ngram-item'>heart pounding (104)</span> <span class='slop-ngram-item'>never leaving (102)</span> <span class='slop-ngram-item'>must say (94)</span> <span class='slop-ngram-item'>voice barely (70)</span> <span class='slop-ngram-item'>ca help (68)</span> <span class='slop-ngram-item'>says voice (67)</span> <span class='slop-ngram-item'>could feel (65)</span> <span class='slop-ngram-item'>air thick (62)</span> <span class='slop-ngram-item'>barely whisper (62)</span> <span class='slop-ngram-item'>voice low (60)</span> <span class='slop-ngram-item'>voice steady (59)</span> <span class='slop-ngram-item'>leaving face (56)</span> <span class='slop-ngram-item'>take deep (55)</span> <span class='slop-ngram-item'>lips curled (55)</span> <span class='slop-ngram-item'>say quite (55)</span> <span class='slop-ngram-item'>eyes narrowed (54)</span> <span class='slop-ngram-item'>pounding chest (52)</span> <span class='slop-ngram-item'>mind racing (48)</span> <span class='slop-ngram-item'>voice soft (45)</span> <span class='slop-ngram-item'>asked voice (45)</span> <span class='slop-ngram-item'>step closer (40)</span> <span class='slop-ngram-item'>paying price (40)</span> <span class='slop-ngram-item'>breath trying (39)</span> <span class='slop-ngram-item'>say voice (38)</span> <span class='slop-ngram-item'>took deep (37)</span> <span class='slop-ngram-item'>damage done (37)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes never leaving (102)</span> <span class='slop-ngram-item'>voice barely whisper (62)</span> <span class='slop-ngram-item'>never leaving face (56)</span> <span class='slop-ngram-item'>take deep breath (55)</span> <span class='slop-ngram-item'>must say quite (55)</span> <span class='slop-ngram-item'>heart pounding chest (51)</span> <span class='slop-ngram-item'>deep breath trying (39)</span> <span class='slop-ngram-item'>took deep breath (37)</span> <span class='slop-ngram-item'>heart sank realized (30)</span> <span class='slop-ngram-item'>air thick scent (29)</span> <span class='slop-ngram-item'>voice steady despite (26)</span> <span class='slop-ngram-item'>elara smile widened (26)</span> <span class='slop-ngram-item'>help feel sense (25)</span> <span class='slop-ngram-item'>says voice soft (25)</span> <span class='slop-ngram-item'>takes deep breath (24)</span> <span class='slop-ngram-item'>say voice barely (23)</span> <span class='slop-ngram-item'>make sound like (22)</span> <span class='slop-ngram-item'>asked voice steady (21)</span> <span class='slop-ngram-item'>said voice low (19)</span> <span class='slop-ngram-item'>barely whisper like (19)</span> <span class='slop-ngram-item'>tears streaming face (19)</span> <span class='slop-ngram-item'>sank realized truth (19)</span> <span class='slop-ngram-item'>lips curled sneer (19)</span> <span class='slop-ngram-item'>deep breath steeling (18)</span> <span class='slop-ngram-item'>ca help feel (17)</span> <span class='slop-ngram-item'>eyes sparkling amusement (17)</span> <span class='slop-ngram-item'>feel tears streaming (17)</span> <span class='slop-ngram-item'>took another step (17)</span> <span class='slop-ngram-item'>another step closer (17)</span> <span class='slop-ngram-item'>lips curled smirk (16)</span>
</div>

##### meta-llama/Llama-4-Scout-17B-16E-Instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Scout-17B-16E-Instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Scout-17B-16E-Instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/Llama-4-Scout-17B-16E-Instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Scout-17B-16E-Instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__Llama-4-Scout-17B-16E-Instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/Llama-4-Scout-17B-16E-Instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.630)</div>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.639)</div>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.649)</div>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.653)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.675)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>glinting</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>fidgeted</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>wryly</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>throaty</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>afoot</span> <span class='slop-word-item'>clanging</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>vipers</span> <span class='slop-word-item'>newfound</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>manipulator</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>flickering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ready take (77)</span> <span class='slop-ngram-item'>said voice (74)</span> <span class='slop-ngram-item'>felt like (68)</span> <span class='slop-ngram-item'>voice low (67)</span> <span class='slop-ngram-item'>feel like (62)</span> <span class='slop-ngram-item'>deep breath (58)</span> <span class='slop-ngram-item'>maybe maybe (56)</span> <span class='slop-ngram-item'>could help (52)</span> <span class='slop-ngram-item'>shake feeling (48)</span> <span class='slop-ngram-item'>could shake (43)</span> <span class='slop-ngram-item'>raised eyebrow (42)</span> <span class='slop-ngram-item'>eyes locked (41)</span> <span class='slop-ngram-item'>ready ready (40)</span> <span class='slop-ngram-item'>find way (38)</span> <span class='slop-ngram-item'>knew would (36)</span> <span class='slop-ngram-item'>felt sense (36)</span> <span class='slop-ngram-item'>take chance (35)</span> <span class='slop-ngram-item'>emerge victorious (34)</span> <span class='slop-ngram-item'>eyes glinting (33)</span> <span class='slop-ngram-item'>feeling sense (33)</span> <span class='slop-ngram-item'>air thick (33)</span> <span class='slop-ngram-item'>one thing (30)</span> <span class='slop-ngram-item'>time tell (30)</span> <span class='slop-ngram-item'>made way (30)</span> <span class='slop-ngram-item'>stakes higher (29)</span> <span class='slop-ngram-item'>took deep (28)</span> <span class='slop-ngram-item'>eyes scanning (28)</span> <span class='slop-ngram-item'>says voice (28)</span> <span class='slop-ngram-item'>felt shiver (28)</span> <span class='slop-ngram-item'>shiver run (28)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling (40)</span> <span class='slop-ngram-item'>said voice low (33)</span> <span class='slop-ngram-item'>ready ready take (29)</span> <span class='slop-ngram-item'>took deep breath (28)</span> <span class='slop-ngram-item'>felt shiver run (28)</span> <span class='slop-ngram-item'>shiver run spine (28)</span> <span class='slop-ngram-item'>take deep breath (23)</span> <span class='slop-ngram-item'>voice barely whisper (22)</span> <span class='slop-ngram-item'>voice low husky (20)</span> <span class='slop-ngram-item'>living breathing thing (20)</span> <span class='slop-ngram-item'>air seems vibrate (17)</span> <span class='slop-ngram-item'>seems vibrate tension (17)</span> <span class='slop-ngram-item'>could help wonder (15)</span> <span class='slop-ngram-item'>eyes locked onto (15)</span> <span class='slop-ngram-item'>hope maybe maybe (14)</span> <span class='slop-ngram-item'>trying sound casual (14)</span> <span class='slop-ngram-item'>eyes crinkling corners (14)</span> <span class='slop-ngram-item'>eyes never leaving (14)</span> <span class='slop-ngram-item'>heart skipped beat (13)</span> <span class='slop-ngram-item'>sun began set (13)</span> <span class='slop-ngram-item'>one thing certain (13)</span> <span class='slop-ngram-item'>eyes glinting amusement (13)</span> <span class='slop-ngram-item'>one walk away (13)</span> <span class='slop-ngram-item'>ready face whatever (13)</span> <span class='slop-ngram-item'>said voice barely (12)</span> <span class='slop-ngram-item'>eyes scanning room (12)</span> <span class='slop-ngram-item'>one thing clear (12)</span> <span class='slop-ngram-item'>deep breath try (11)</span> <span class='slop-ngram-item'>smiled feeling sense (11)</span> <span class='slop-ngram-item'>could help feel (11)</span>
</div>

##### mistralai/Mistral-Small-24B-Instruct-2501
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Small-24B-Instruct-2501__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Small-24B-Instruct-2501__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for mistralai/Mistral-Small-24B-Instruct-2501' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Small-24B-Instruct-2501__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/mistralai__Mistral-Small-24B-Instruct-2501__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for mistralai/Mistral-Small-24B-Instruct-2501' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/mistral-small-3.1-24b-instruct-2503 (distance=0.689)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.701)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.706)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.730)</div>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.758)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>trickling</span> <span class='slop-word-item'>tensing</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>intoxicating</span> <span class='slop-word-item'>whirlwind</span> <span class='slop-word-item'>sneer</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>allure</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>carvings</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gripped</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>bounty</span> <span class='slop-word-item'>haze</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>grimy</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>deep breath (158)</span> <span class='slop-ngram-item'>voice steady (124)</span> <span class='slop-ngram-item'>said voice (109)</span> <span class='slop-ngram-item'>eyes never (94)</span> <span class='slop-ngram-item'>never leaving (93)</span> <span class='slop-ngram-item'>think might (89)</span> <span class='slop-ngram-item'>mind raced (86)</span> <span class='slop-ngram-item'>eyes narrowed (77)</span> <span class='slop-ngram-item'>air thick (72)</span> <span class='slop-ngram-item'>find way (66)</span> <span class='slop-ngram-item'>stark contrast (64)</span> <span class='slop-ngram-item'>eyes scanning (64)</span> <span class='slop-ngram-item'>take deep (64)</span> <span class='slop-ngram-item'>say something (61)</span> <span class='slop-ngram-item'>took step (59)</span> <span class='slop-ngram-item'>could feel (58)</span> <span class='slop-ngram-item'>voice barely (55)</span> <span class='slop-ngram-item'>took deep (55)</span> <span class='slop-ngram-item'>voice low (54)</span> <span class='slop-ngram-item'>let see (54)</span> <span class='slop-ngram-item'>makes think (53)</span> <span class='slop-ngram-item'>breath trying (49)</span> <span class='slop-ngram-item'>heart pounding (48)</span> <span class='slop-ngram-item'>danger could (47)</span> <span class='slop-ngram-item'>steady despite (47)</span> <span class='slop-ngram-item'>steady need (47)</span> <span class='slop-ngram-item'>stark reminder (46)</span> <span class='slop-ngram-item'>eyes locked (46)</span> <span class='slop-ngram-item'>think wo (46)</span> <span class='slop-ngram-item'>need someone (45)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes never leaving (93)</span> <span class='slop-ngram-item'>said voice steady (67)</span> <span class='slop-ngram-item'>take deep breath (64)</span> <span class='slop-ngram-item'>took deep breath (55)</span> <span class='slop-ngram-item'>deep breath trying (49)</span> <span class='slop-ngram-item'>voice steady despite (47)</span> <span class='slop-ngram-item'>makes think wo (46)</span> <span class='slop-ngram-item'>voice steady need (46)</span> <span class='slop-ngram-item'>voice barely whisper (38)</span> <span class='slop-ngram-item'>took step back (37)</span> <span class='slop-ngram-item'>could feel presence (36)</span> <span class='slop-ngram-item'>step back eyes (36)</span> <span class='slop-ngram-item'>deep breath steeling (34)</span> <span class='slop-ngram-item'>breath trying steady (32)</span> <span class='slop-ngram-item'>air thick scent (31)</span> <span class='slop-ngram-item'>thoughts whirlwind possibilities (30)</span> <span class='slop-ngram-item'>deep breath try (29)</span> <span class='slop-ngram-item'>heart pounding chest (28)</span> <span class='slop-ngram-item'>breath try steady (28)</span> <span class='slop-ngram-item'>sent shiver spine (25)</span> <span class='slop-ngram-item'>streets slick rain (24)</span> <span class='slop-ngram-item'>could shake feeling (22)</span> <span class='slop-ngram-item'>took step closer (22)</span> <span class='slop-ngram-item'>step closer eyes (20)</span> <span class='slop-ngram-item'>made way back (20)</span> <span class='slop-ngram-item'>voice low growl (19)</span> <span class='slop-ngram-item'>ca help feel (18)</span> <span class='slop-ngram-item'>help feel sense (17)</span> <span class='slop-ngram-item'>chill run spine (17)</span> <span class='slop-ngram-item'>voice barely audible (16)</span>
</div>

##### openai/gpt-4-0314
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-4-0314__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-4-0314__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for openai/gpt-4-0314' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-4-0314__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-4-0314__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for openai/gpt-4-0314' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.644)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.662)</div>
<div class='slop-similar'>openai/gpt-3.5-turbo-0613 (distance=0.689)</div>
<div class='slop-similar'>anthropic/claude-3-haiku (distance=0.718)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.730)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>renn</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>grudging</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>aback</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>euclid</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>heaving</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>audible</span> <span class='slop-word-item'>narrowing</span> <span class='slop-word-item'>camaraderie</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>eerie</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ca help (68)</span> <span class='slop-ngram-item'>could help (43)</span> <span class='slop-ngram-item'>said voice (43)</span> <span class='slop-ngram-item'>voice barely (39)</span> <span class='slop-ngram-item'>help feel (37)</span> <span class='slop-ngram-item'>voice low (32)</span> <span class='slop-ngram-item'>heart pounding (26)</span> <span class='slop-ngram-item'>deep breath (26)</span> <span class='slop-ngram-item'>barely audible (24)</span> <span class='slop-ngram-item'>could feel (23)</span> <span class='slop-ngram-item'>says voice (21)</span> <span class='slop-ngram-item'>could see (20)</span> <span class='slop-ngram-item'>pounding chest (18)</span> <span class='slop-ngram-item'>find way (17)</span> <span class='slop-ngram-item'>asked voice (17)</span> <span class='slop-ngram-item'>dark eyes (17)</span> <span class='slop-ngram-item'>could shake (17)</span> <span class='slop-ngram-item'>shake feeling (16)</span> <span class='slop-ngram-item'>eyes wide (15)</span> <span class='slop-ngram-item'>made way (15)</span> <span class='slop-ngram-item'>eyes narrowing (15)</span> <span class='slop-ngram-item'>barely whisper (15)</span> <span class='slop-ngram-item'>air thick (14)</span> <span class='slop-ngram-item'>help wonder (14)</span> <span class='slop-ngram-item'>maybe maybe (14)</span> <span class='slop-ngram-item'>containment breach (13)</span> <span class='slop-ngram-item'>voice steady (13)</span> <span class='slop-ngram-item'>knew would (13)</span> <span class='slop-ngram-item'>whispered voice (13)</span> <span class='slop-ngram-item'>voice cold (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely audible (22)</span> <span class='slop-ngram-item'>ca help feel (20)</span> <span class='slop-ngram-item'>could help feel (17)</span> <span class='slop-ngram-item'>heart pounding chest (17)</span> <span class='slop-ngram-item'>voice barely whisper (15)</span> <span class='slop-ngram-item'>could shake feeling (15)</span> <span class='slop-ngram-item'>take deep breath (12)</span> <span class='slop-ngram-item'>took deep breath (10)</span> <span class='slop-ngram-item'>ca help wonder (9)</span> <span class='slop-ngram-item'>ca help notice (9)</span> <span class='slop-ngram-item'>whispered voice barely (9)</span> <span class='slop-ngram-item'>said voice barely (8)</span> <span class='slop-ngram-item'>eyes never leaving (8)</span> <span class='slop-ngram-item'>heart pounded chest (8)</span> <span class='slop-ngram-item'>said voice low (8)</span> <span class='slop-ngram-item'>help feel sense (7)</span> <span class='slop-ngram-item'>said voice cold (7)</span> <span class='slop-ngram-item'>leaned back chair (7)</span> <span class='slop-ngram-item'>item object class (6)</span> <span class='slop-ngram-item'>object class euclid (6)</span> <span class='slop-ngram-item'>class euclid special (6)</span> <span class='slop-ngram-item'>euclid special containment (6)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>made way back (6)</span> <span class='slop-ngram-item'>casting long shadows (6)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>voice low dangerous (5)</span> <span class='slop-ngram-item'>something else something (5)</span> <span class='slop-ngram-item'>ca help think (5)</span> <span class='slop-ngram-item'>focus task hand (5)</span>
</div>

##### meta-llama/llama-3.1-8b-instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-8b-instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-8b-instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/llama-3.1-8b-instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-8b-instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.1-8b-instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/llama-3.1-8b-instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.519)</div>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.545)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.566)</div>
<div class='slop-similar'>meta-llama/llama-3.2-1b-instruct (distance=0.571)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.592)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>beeped</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>alleyway</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>strode</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>jolt</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (53)</span> <span class='slop-ngram-item'>eyes locked (39)</span> <span class='slop-ngram-item'>voice barely (36)</span> <span class='slop-ngram-item'>feel like (36)</span> <span class='slop-ngram-item'>mind racing (32)</span> <span class='slop-ngram-item'>voice low (30)</span> <span class='slop-ngram-item'>could help (29)</span> <span class='slop-ngram-item'>deep breath (29)</span> <span class='slop-ngram-item'>raised eyebrow (29)</span> <span class='slop-ngram-item'>eyes fixed (27)</span> <span class='slop-ngram-item'>eyes scanning (27)</span> <span class='slop-ngram-item'>barely whisper (26)</span> <span class='slop-ngram-item'>eyes glinting (25)</span> <span class='slop-ngram-item'>locked onto (24)</span> <span class='slop-ngram-item'>felt like (24)</span> <span class='slop-ngram-item'>air thick (24)</span> <span class='slop-ngram-item'>felt sense (23)</span> <span class='slop-ngram-item'>run spine (23)</span> <span class='slop-ngram-item'>voice dripping (23)</span> <span class='slop-ngram-item'>shiver run (22)</span> <span class='slop-ngram-item'>trying sound (22)</span> <span class='slop-ngram-item'>eyes never (22)</span> <span class='slop-ngram-item'>never leaving (22)</span> <span class='slop-ngram-item'>shake feeling (22)</span> <span class='slop-ngram-item'>eyes narrowed (19)</span> <span class='slop-ngram-item'>could shake (19)</span> <span class='slop-ngram-item'>sense unease (18)</span> <span class='slop-ngram-item'>made way (18)</span> <span class='slop-ngram-item'>felt shiver (17)</span> <span class='slop-ngram-item'>find way (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (26)</span> <span class='slop-ngram-item'>shiver run spine (22)</span> <span class='slop-ngram-item'>eyes never leaving (21)</span> <span class='slop-ngram-item'>eyes locked onto (19)</span> <span class='slop-ngram-item'>could shake feeling (18)</span> <span class='slop-ngram-item'>felt shiver run (17)</span> <span class='slop-ngram-item'>said voice dripping (14)</span> <span class='slop-ngram-item'>sun began set (13)</span> <span class='slop-ngram-item'>said voice low (13)</span> <span class='slop-ngram-item'>take deep breath (12)</span> <span class='slop-ngram-item'>heart skipped beat (11)</span> <span class='slop-ngram-item'>voice low husky (11)</span> <span class='slop-ngram-item'>eyes scanning room (10)</span> <span class='slop-ngram-item'>voice barely audible (10)</span> <span class='slop-ngram-item'>said voice barely (9)</span> <span class='slop-ngram-item'>began set casting (9)</span> <span class='slop-ngram-item'>took deep breath (9)</span> <span class='slop-ngram-item'>trying sound nonchalant (9)</span> <span class='slop-ngram-item'>made way back (8)</span> <span class='slop-ngram-item'>eyes darting around (8)</span> <span class='slop-ngram-item'>say trying sound (8)</span> <span class='slop-ngram-item'>casting eerie glow (7)</span> <span class='slop-ngram-item'>casting golden glow (7)</span> <span class='slop-ngram-item'>thought aside focusing (7)</span> <span class='slop-ngram-item'>asked voice low (7)</span> <span class='slop-ngram-item'>air thick scent (7)</span> <span class='slop-ngram-item'>eyes crinkling corners (6)</span> <span class='slop-ngram-item'>make mental note (6)</span> <span class='slop-ngram-item'>smile grew wider (6)</span> <span class='slop-ngram-item'>mind racing possibilities (6)</span>
</div>

##### anthropic/claude-3-haiku
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3-haiku__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3-haiku__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for anthropic/claude-3-haiku' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3-haiku__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/anthropic__claude-3-haiku__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for anthropic/claude-3-haiku' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.718)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.750)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.758)</div>
<div class='slop-similar'>mistralai/Mistral-Small-24B-Instruct-2501 (distance=0.784)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.795)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>whirred</span> <span class='slop-word-item'>furrowing</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>placating</span> <span class='slop-word-item'>amara</span> <span class='slop-word-item'>transfixed</span> <span class='slop-word-item'>kiran</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sheepish</span> <span class='slop-word-item'>stammer</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>bustling</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>cavernous</span> <span class='slop-word-item'>scavengers</span> <span class='slop-word-item'>brow</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>hurried</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>blinked</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ca help (35)</span> <span class='slop-ngram-item'>heart pounding (34)</span> <span class='slop-ngram-item'>could help (28)</span> <span class='slop-ngram-item'>made way (27)</span> <span class='slop-ngram-item'>shook head (26)</span> <span class='slop-ngram-item'>voice low (25)</span> <span class='slop-ngram-item'>brow furrowed (25)</span> <span class='slop-ngram-item'>deep breath (22)</span> <span class='slop-ngram-item'>air thick (21)</span> <span class='slop-ngram-item'>mind racing (21)</span> <span class='slop-ngram-item'>voice barely (19)</span> <span class='slop-ngram-item'>said voice (18)</span> <span class='slop-ngram-item'>small smile (17)</span> <span class='slop-ngram-item'>narrative perspective (16)</span> <span class='slop-ngram-item'>eyes widened (15)</span> <span class='slop-ngram-item'>let see (14)</span> <span class='slop-ngram-item'>barely whisper (14)</span> <span class='slop-ngram-item'>help notice (14)</span> <span class='slop-ngram-item'>eyes narrowed (14)</span> <span class='slop-ngram-item'>heart racing (14)</span> <span class='slop-ngram-item'>opened mouth (14)</span> <span class='slop-ngram-item'>must say (13)</span> <span class='slop-ngram-item'>eyes narrow (12)</span> <span class='slop-ngram-item'>leaned forward (12)</span> <span class='slop-ngram-item'>run spine (12)</span> <span class='slop-ngram-item'>raised hand (12)</span> <span class='slop-ngram-item'>could shake (12)</span> <span class='slop-ngram-item'>could say (11)</span> <span class='slop-ngram-item'>took deep (11)</span> <span class='slop-ngram-item'>lips curled (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (13)</span> <span class='slop-ngram-item'>took deep breath (10)</span> <span class='slop-ngram-item'>chill run spine (10)</span> <span class='slop-ngram-item'>said voice low (9)</span> <span class='slop-ngram-item'>brow furrowed concentration (9)</span> <span class='slop-ngram-item'>ca help notice (8)</span> <span class='slop-ngram-item'>felt chill run (8)</span> <span class='slop-ngram-item'>breath caught throat (8)</span> <span class='slop-ngram-item'>air thick scent (7)</span> <span class='slop-ngram-item'>opened mouth protest (7)</span> <span class='slop-ngram-item'>raised hand silencing (7)</span> <span class='slop-ngram-item'>could shake feeling (7)</span> <span class='slop-ngram-item'>special containment procedures (6)</span> <span class='slop-ngram-item'>ca help feel (6)</span> <span class='slop-ngram-item'>help feel sense (6)</span> <span class='slop-ngram-item'>could help notice (6)</span> <span class='slop-ngram-item'>word narrative perspective (6)</span> <span class='slop-ngram-item'>made way back (6)</span> <span class='slop-ngram-item'>leaned forward eyes (6)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>could help wonder (6)</span> <span class='slop-ngram-item'>casting eerie glow (6)</span> <span class='slop-ngram-item'>takes step closer (6)</span> <span class='slop-ngram-item'>trying sound casual (6)</span> <span class='slop-ngram-item'>turned attention back (6)</span> <span class='slop-ngram-item'>panic rising chest (5)</span> <span class='slop-ngram-item'>object class euclid (5)</span> <span class='slop-ngram-item'>class euclid special (5)</span> <span class='slop-ngram-item'>euclid special containment (5)</span> <span class='slop-ngram-item'>description refers series (5)</span>
</div>

##### meta-llama/llama-3.2-3b-instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-3b-instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-3b-instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/llama-3.2-3b-instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-3b-instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-3b-instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/llama-3.2-3b-instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.519)</div>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.524)</div>
<div class='slop-similar'>meta-llama/llama-3.2-1b-instruct (distance=0.535)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.561)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.566)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>weaved</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>jumbled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>shivers</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>dripping</span> <span class='slop-word-item'>jolt</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (102)</span> <span class='slop-ngram-item'>feel like (60)</span> <span class='slop-ngram-item'>voice low (59)</span> <span class='slop-ngram-item'>could help (51)</span> <span class='slop-ngram-item'>voice barely (50)</span> <span class='slop-ngram-item'>felt like (43)</span> <span class='slop-ngram-item'>eyes locked (42)</span> <span class='slop-ngram-item'>barely whisper (42)</span> <span class='slop-ngram-item'>raised eyebrow (42)</span> <span class='slop-ngram-item'>deep breath (37)</span> <span class='slop-ngram-item'>eyes scanning (35)</span> <span class='slop-ngram-item'>eyes glinting (34)</span> <span class='slop-ngram-item'>eyes narrowed (31)</span> <span class='slop-ngram-item'>felt sense (30)</span> <span class='slop-ngram-item'>voice dripping (29)</span> <span class='slop-ngram-item'>run spine (29)</span> <span class='slop-ngram-item'>shiver run (28)</span> <span class='slop-ngram-item'>feeling sense (28)</span> <span class='slop-ngram-item'>shake feeling (28)</span> <span class='slop-ngram-item'>mind racing (27)</span> <span class='slop-ngram-item'>eyes never (26)</span> <span class='slop-ngram-item'>locked onto (26)</span> <span class='slop-ngram-item'>felt shiver (24)</span> <span class='slop-ngram-item'>could shake (24)</span> <span class='slop-ngram-item'>air thick (23)</span> <span class='slop-ngram-item'>eyes fixed (23)</span> <span class='slop-ngram-item'>eyes widened (21)</span> <span class='slop-ngram-item'>never leaving (20)</span> <span class='slop-ngram-item'>trying sound (19)</span> <span class='slop-ngram-item'>grew wider (19)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (42)</span> <span class='slop-ngram-item'>said voice low (29)</span> <span class='slop-ngram-item'>shiver run spine (28)</span> <span class='slop-ngram-item'>felt shiver run (24)</span> <span class='slop-ngram-item'>could shake feeling (22)</span> <span class='slop-ngram-item'>said voice barely (20)</span> <span class='slop-ngram-item'>eyes never leaving (19)</span> <span class='slop-ngram-item'>voice low husky (19)</span> <span class='slop-ngram-item'>eyes locked onto (18)</span> <span class='slop-ngram-item'>took deep breath (18)</span> <span class='slop-ngram-item'>said voice dripping (18)</span> <span class='slop-ngram-item'>take deep breath (16)</span> <span class='slop-ngram-item'>eyes glinting amusement (15)</span> <span class='slop-ngram-item'>smile grew wider (15)</span> <span class='slop-ngram-item'>heart skipped beat (14)</span> <span class='slop-ngram-item'>could help wonder (12)</span> <span class='slop-ngram-item'>mind racing possibilities (11)</span> <span class='slop-ngram-item'>heart pounding chest (11)</span> <span class='slop-ngram-item'>deep breath trying (11)</span> <span class='slop-ngram-item'>voice dripping sarcasm (10)</span> <span class='slop-ngram-item'>locked onto mine (10)</span> <span class='slop-ngram-item'>raised eyebrow intrigued (9)</span> <span class='slop-ngram-item'>trying sound nonchalant (9)</span> <span class='slop-ngram-item'>could help feel (9)</span> <span class='slop-ngram-item'>eyes locked mine (9)</span> <span class='slop-ngram-item'>starting feel like (8)</span> <span class='slop-ngram-item'>eyes seemed bore (8)</span> <span class='slop-ngram-item'>spreading across face (8)</span> <span class='slop-ngram-item'>voice barely audible (8)</span> <span class='slop-ngram-item'>nodded feeling sense (8)</span>
</div>

##### openai/gpt-3.5-turbo-0613
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-3.5-turbo-0613__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-3.5-turbo-0613__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for openai/gpt-3.5-turbo-0613' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-3.5-turbo-0613__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/openai__gpt-3.5-turbo-0613__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for openai/gpt-3.5-turbo-0613' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>openai/gpt-4-0314 (distance=0.689)</div>
<div class='slop-similar'>mistralai/Pixtral-Large-Instruct-2411 (distance=0.754)</div>
<div class='slop-similar'>mistralai/mistral-large-2411 (distance=0.758)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.784)</div>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.784)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>unfazed</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>foreboding</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>bustling</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>crackling</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>desolate</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>nervously</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>eerie</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>suffocating</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>evelyn</span> <span class='slop-word-item'>solace</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>whirlwind</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>newfound</span> <span class='slop-word-item'>mischief</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>crumbling</span> <span class='slop-word-item'>sleek</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>intrigued</span> <span class='slop-word-item'>outpost</span> <span class='slop-word-item'>glanced</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could help (49)</span> <span class='slop-ngram-item'>shake feeling (34)</span> <span class='slop-ngram-item'>made way (32)</span> <span class='slop-ngram-item'>could shake (29)</span> <span class='slop-ngram-item'>help feel (28)</span> <span class='slop-ngram-item'>said voice (24)</span> <span class='slop-ngram-item'>could feel (23)</span> <span class='slop-ngram-item'>voice barely (20)</span> <span class='slop-ngram-item'>ca help (19)</span> <span class='slop-ngram-item'>heart pounding (17)</span> <span class='slop-ngram-item'>deep breath (17)</span> <span class='slop-ngram-item'>pounding chest (16)</span> <span class='slop-ngram-item'>maybe maybe (16)</span> <span class='slop-ngram-item'>let go (16)</span> <span class='slop-ngram-item'>dimly lit (15)</span> <span class='slop-ngram-item'>looks like (14)</span> <span class='slop-ngram-item'>felt sense (14)</span> <span class='slop-ngram-item'>felt like (14)</span> <span class='slop-ngram-item'>run spine (14)</span> <span class='slop-ngram-item'>barely whisper (14)</span> <span class='slop-ngram-item'>feel sense (14)</span> <span class='slop-ngram-item'>could see (13)</span> <span class='slop-ngram-item'>find way (13)</span> <span class='slop-ngram-item'>dim light (12)</span> <span class='slop-ngram-item'>voice low (12)</span> <span class='slop-ngram-item'>smile playing (12)</span> <span class='slop-ngram-item'>around us (12)</span> <span class='slop-ngram-item'>way back (12)</span> <span class='slop-ngram-item'>raised eyebrow (12)</span> <span class='slop-ngram-item'>playing lips (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling (28)</span> <span class='slop-ngram-item'>could help feel (19)</span> <span class='slop-ngram-item'>heart pounding chest (14)</span> <span class='slop-ngram-item'>voice barely whisper (14)</span> <span class='slop-ngram-item'>chill run spine (11)</span> <span class='slop-ngram-item'>made way back (11)</span> <span class='slop-ngram-item'>help feel sense (11)</span> <span class='slop-ngram-item'>dimly lit room (9)</span> <span class='slop-ngram-item'>shake feeling something (9)</span> <span class='slop-ngram-item'>took deep breath (9)</span> <span class='slop-ngram-item'>smile playing lips (8)</span> <span class='slop-ngram-item'>ca help feel (8)</span> <span class='slop-ngram-item'>face whatever challenges (8)</span> <span class='slop-ngram-item'>ready face whatever (7)</span> <span class='slop-ngram-item'>challenges lay ahead (6)</span> <span class='slop-ngram-item'>felt chill run (6)</span> <span class='slop-ngram-item'>shake feeling unease (6)</span> <span class='slop-ngram-item'>could feel weight (6)</span> <span class='slop-ngram-item'>could help wonder (6)</span> <span class='slop-ngram-item'>sense unease creeping (6)</span> <span class='slop-ngram-item'>take deep breath (6)</span> <span class='slop-ngram-item'>ca shake feeling (5)</span> <span class='slop-ngram-item'>maybe find way (5)</span> <span class='slop-ngram-item'>heart pounded chest (5)</span> <span class='slop-ngram-item'>voice barely audible (5)</span> <span class='slop-ngram-item'>casting long shadows (5)</span> <span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>made decision would (5)</span> <span class='slop-ngram-item'>feel sense unease (5)</span> <span class='slop-ngram-item'>mind already racing (5)</span>
</div>

##### meta-llama/llama-3.2-1b-instruct
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-1b-instruct__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-1b-instruct__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for meta-llama/llama-3.2-1b-instruct' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-1b-instruct__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/meta-llama__llama-3.2-1b-instruct__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for meta-llama/llama-3.2-1b-instruct' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-3.2-3b-instruct (distance=0.535)</div>
<div class='slop-similar'>meta-llama/llama-3.1-70b-instruct (distance=0.571)</div>
<div class='slop-similar'>meta-llama/llama-3.1-8b-instruct (distance=0.571)</div>
<div class='slop-similar'>meta-llama/llama-3.1-405b-instruct (distance=0.621)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.630)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>arachne</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>erebus</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>defensiveness</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>writhe</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flashed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>agonizing</span> <span class='slop-word-item'>takashi</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>illuminating</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (127)</span> <span class='slop-ngram-item'>mind racing (77)</span> <span class='slop-ngram-item'>feel like (74)</span> <span class='slop-ngram-item'>eyes narrowed (72)</span> <span class='slop-ngram-item'>voice low (62)</span> <span class='slop-ngram-item'>deep breath (57)</span> <span class='slop-ngram-item'>eyes widened (55)</span> <span class='slop-ngram-item'>voice barely (52)</span> <span class='slop-ngram-item'>felt like (50)</span> <span class='slop-ngram-item'>help us (49)</span> <span class='slop-ngram-item'>eyes seemed (47)</span> <span class='slop-ngram-item'>barely whisper (46)</span> <span class='slop-ngram-item'>eyes scanning (45)</span> <span class='slop-ngram-item'>shake feeling (44)</span> <span class='slop-ngram-item'>could help (44)</span> <span class='slop-ngram-item'>feel sense (43)</span> <span class='slop-ngram-item'>eyes locked (43)</span> <span class='slop-ngram-item'>felt sense (42)</span> <span class='slop-ngram-item'>narrowed mind (37)</span> <span class='slop-ngram-item'>felt surge (37)</span> <span class='slop-ngram-item'>could shake (35)</span> <span class='slop-ngram-item'>feel surge (34)</span> <span class='slop-ngram-item'>raised eyebrow (32)</span> <span class='slop-ngram-item'>make feel (32)</span> <span class='slop-ngram-item'>made way (31)</span> <span class='slop-ngram-item'>took deep (30)</span> <span class='slop-ngram-item'>eyes glinting (30)</span> <span class='slop-ngram-item'>voice dripping (29)</span> <span class='slop-ngram-item'>trying sound (29)</span> <span class='slop-ngram-item'>locked onto (29)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (46)</span> <span class='slop-ngram-item'>narrowed mind racing (37)</span> <span class='slop-ngram-item'>eyes narrowed mind (35)</span> <span class='slop-ngram-item'>said voice low (34)</span> <span class='slop-ngram-item'>could shake feeling (34)</span> <span class='slop-ngram-item'>took deep breath (29)</span> <span class='slop-ngram-item'>shiver run spine (27)</span> <span class='slop-ngram-item'>felt shiver run (26)</span> <span class='slop-ngram-item'>take deep breath (25)</span> <span class='slop-ngram-item'>mind racing possibilities (24)</span> <span class='slop-ngram-item'>eyes locked onto (23)</span> <span class='slop-ngram-item'>eyes never leaving (23)</span> <span class='slop-ngram-item'>said voice barely (23)</span> <span class='slop-ngram-item'>eyes widened face (22)</span> <span class='slop-ngram-item'>make feel like (20)</span> <span class='slop-ngram-item'>heart pounding chest (20)</span> <span class='slop-ngram-item'>voice low husky (19)</span> <span class='slop-ngram-item'>said voice dripping (18)</span> <span class='slop-ngram-item'>smile grew wider (17)</span> <span class='slop-ngram-item'>eyes glinting amusement (17)</span> <span class='slop-ngram-item'>smile faltered moment (16)</span> <span class='slop-ngram-item'>eyes seemed bore (15)</span> <span class='slop-ngram-item'>grew wider eyes (15)</span> <span class='slop-ngram-item'>starting feel like (14)</span> <span class='slop-ngram-item'>try push thought (14)</span> <span class='slop-ngram-item'>trying sound casual (14)</span> <span class='slop-ngram-item'>could help feel (14)</span> <span class='slop-ngram-item'>casting eerie glow (13)</span> <span class='slop-ngram-item'>lurking beneath surface (12)</span> <span class='slop-ngram-item'>much longer keep (12)</span>
</div>

##### __metadata__
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/__metadata____phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/__metadata____phylo_tree_parsimony_circular.png' alt='Circular dendrogram for __metadata__' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/__metadata____phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/__metadata____phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for __metadata__' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>ToastyPigeon/Gemma-3-Starshine-12B (distance=1.000)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=1.000)</div>
<div class='slop-similar'>anthropic/claude-3-haiku (distance=1.000)</div>
<div class='slop-similar'>anthropic/claude-3.5-haiku-20241022 (distance=1.000)</div>
<div class='slop-similar'>claude-3-5-sonnet-20241022 (distance=1.000)</div>
</div>

<h4>Top Repetitive Words</h4>
<p><i>No multi-prompt repetitive words found.</i></p>
<h4>Top Bigrams</h4>
<p><i>No multi-prompt bigrams found.</i></p>
<h4>Top Trigrams</h4>
<p><i>No multi-prompt trigrams found.</i></p>

##### unsloth/gemma-3-12b-it
<div class='dendrogram-thumbnails'>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/unsloth__gemma-3-12b-it__phylo_tree_parsimony_circular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/unsloth__gemma-3-12b-it__phylo_tree_parsimony_circular.png' alt='Circular dendrogram for unsloth/gemma-3-12b-it' class='dendrogram-thumb circular-thumb' />
    <span class='dendrogram-caption'>Circular View</span>
  </a>
  <a href='results/creative-writing-v3/hybrid_parsimony/charts/unsloth__gemma-3-12b-it__phylo_tree_parsimony_rectangular.png' target='_blank' class='dendrogram-link'>
    <img src='results/creative-writing-v3/hybrid_parsimony/charts/unsloth__gemma-3-12b-it__phylo_tree_parsimony_rectangular.png' alt='Rectangular dendrogram for unsloth/gemma-3-12b-it' class='dendrogram-thumb rect-thumb' />
    <span class='dendrogram-caption'>Rectangular View</span>
  </a>
</div>

<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.936)</div>
<div class='slop-similar'>allura-org/Gemma-3-Glitter-12B (distance=0.939)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.942)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.942)</div>
<div class='slop-similar'>openai/gpt-3.5-turbo-0613 (distance=0.942)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>squeak</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>relentless</span> <span class='slop-word-item'>crumbling</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>defiance</span> <span class='slop-word-item'>damp</span> <span class='slop-word-item'>adapting</span> <span class='slop-word-item'>scent</span> <span class='slop-word-item'>vulnerability</span> <span class='slop-word-item'>eleanor</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>brutal</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>aimed</span> <span class='slop-word-item'>entities</span> <span class='slop-word-item'>civilization</span> <span class='slop-word-item'>surprisingly</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>judging</span> <span class='slop-word-item'>barely</span> <span class='slop-word-item'>habit</span> <span class='slop-word-item'>sweat</span> <span class='slop-word-item'>subtle</span> <span class='slop-word-item'>desperate</span> <span class='slop-word-item'>hung</span> <span class='slop-word-item'>forcing</span> <span class='slop-word-item'>smile</span> <span class='slop-word-item'>recovered</span> <span class='slop-word-item'>designated</span> <span class='slop-word-item'>arena</span> <span class='slop-word-item'>movements</span> <span class='slop-word-item'>sharp</span> <span class='slop-word-item'>rapid</span> <span class='slop-word-item'>expression</span> <span class='slop-word-item'>silence</span> <span class='slop-word-item'>dust</span> <span class='slop-word-item'>familiar</span> <span class='slop-word-item'>lips</span> <span class='slop-word-item'>stomach</span> <span class='slop-word-item'>voice</span> <span class='slop-word-item'>strike</span> <span class='slop-word-item'>landscape</span> <span class='slop-word-item'>seed</span> <span class='slop-word-item'>silent</span> <span class='slop-word-item'>pattern</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (6)</span> <span class='slop-ngram-item'>said voice (6)</span> <span class='slop-ngram-item'>something else (5)</span> <span class='slop-ngram-item'>years since (5)</span> <span class='slop-ngram-item'>felt like (4)</span> <span class='slop-ngram-item'>voice barely (4)</span> <span class='slop-ngram-item'>hung air (4)</span> <span class='slop-ngram-item'>leaving behind (3)</span> <span class='slop-ngram-item'>managed voice (3)</span> <span class='slop-ngram-item'>fleeting moment (3)</span> <span class='slop-ngram-item'>closed eyes (3)</span> <span class='slop-ngram-item'>caught glimpse (3)</span> <span class='slop-ngram-item'>hair pulled (3)</span> <span class='slop-ngram-item'>pulled back (3)</span> <span class='slop-ngram-item'>say something (3)</span> <span class='slop-ngram-item'>barely whisper (3)</span> <span class='slop-ngram-item'>extended hand (3)</span> <span class='slop-ngram-item'>hesitated moment (3)</span> <span class='slop-ngram-item'>small smile (3)</span> <span class='slop-ngram-item'>asks voice (3)</span> <span class='slop-ngram-item'>long distorted (3)</span> <span class='slop-ngram-item'>distorted shadows (3)</span> <span class='slop-ngram-item'>little bit (3)</span> <span class='slop-ngram-item'>barely perceptible (3)</span> <span class='slop-ngram-item'>eyes fixed (2)</span> <span class='slop-ngram-item'>ah yes (2)</span> <span class='slop-ngram-item'>like wind (2)</span> <span class='slop-ngram-item'>burst laughing (2)</span> <span class='slop-ngram-item'>slightly less (2)</span> <span class='slop-ngram-item'>carefully constructed (2)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>hair pulled back (3)</span> <span class='slop-ngram-item'>voice barely whisper (3)</span> <span class='slop-ngram-item'>long distorted shadows (3)</span> <span class='slop-ngram-item'>eyes like chips (2)</span> <span class='slop-ngram-item'>dark hair pulled (2)</span> <span class='slop-ngram-item'>said voice low (2)</span> <span class='slop-ngram-item'>something else something (2)</span>
</div>
`
//
//  creative_writing.js
//  (Version 1.0.6 - Includes Style Profile column and chart)
//

// --- Global Scope Variables ---
let eloScores = [];
let rubricScores = [];
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 7; // Default sort is Elo, which is now column index 7

// Chart.js references:
let abilitiesAbsoluteRadarChart = null;
let abilitiesRelativeRadarChart = null;
let abilitiesStrengthsChart = null;
let abilitiesWeaknessesChart = null;
let styleChart = null; // Style chart instance
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
    // Apply system theme only if no preference is saved
    applySystemTheme();
  }
  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    label.textContent = this.checked ? 'Dark' : 'Light';
    localStorage.setItem('darkModeEnabled', this.checked);
    // Redraw table to apply potential dark mode styles within cells/charts
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      $('#leaderboard').DataTable().draw(false);
    }
    // If modals are open, potentially update chart colors (more complex, might skip for now)
  });
}

function applySystemTheme() {
  // This function is now primarily called initially if no setting exists
  if (localStorage.getItem('darkModeEnabled') === null) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.getElementById('darkModeToggle');
    const label = document.getElementById('toggleLabel');
    document.body.classList.toggle('dark-mode', prefersDarkMode);
    toggle.checked = prefersDarkMode;
    label.textContent = prefersDarkMode ? 'Dark' : 'Light';
    // Don't save to localStorage here, let user toggle explicitly save it
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

// --- Slop Profile Functions ---
function parseSlopData(modelName) {
  if (typeof slopData === 'undefined' || !slopData || !modelName) {
    return "<p><i>Slop profile data not available.</i></p>";
  }
  // Escape special regex characters in model name
  const escapedModelName = modelName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Regex to find the start of the model's section (case-insensitive matching for robustness)
  const regex = new RegExp(`^#####\\s*${escapedModelName}\\s*$`, 'im');
  const match = slopData.split(regex);

  if (match.length > 1) {
    // Content is the part after the first match
    const contentAfterDelimiter = match[1];
    if (contentAfterDelimiter) {
      // Find the start of the *next* model's section
      const nextDelimiterMatch = contentAfterDelimiter.search(/^#####\s/m);
      if (nextDelimiterMatch !== -1) {
        // Return content up to the next delimiter
        return contentAfterDelimiter.substring(0, nextDelimiterMatch).trim();
      } else {
        // This is the last model in the file
        return contentAfterDelimiter.trim();
      }
    }
  }
  // Fallback if model not found
  console.warn(`Slop profile not found for model: ${modelName}`);
  return `<p><i>Slop profile not found for model: ${modelName}</i></p>`;
}
// --- End Slop Profile Functions ---

// --- Abilities Modal Function (UPDATED) ---
function showAbilitiesModal(modelName) {
  if (typeof chartData === 'undefined' || !chartData[modelName]) {
    console.warn("No chart data found for: ", modelName);
    document.getElementById('abilitiesProfileContent').innerHTML =
      `<p><i>No abilities data for ${modelName}</i></p>`;
    const abilitiesModal = new bootstrap.Modal(document.getElementById('abilitiesProfileModal'));
    abilitiesModal.show();
    return;
  }
  const data = chartData[modelName];

  // Destroy existing charts if any
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.destroy();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.destroy();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.destroy();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.destroy();

  // Re-inject canvas elements to ensure clean state
  // UPDATED: Add responsive classes and better container structure
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
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 0 },
      scales: {
        r: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 20, // Or dynamically calculate based on data max
          ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false },
          pointLabels: { color: pointLabelColor, font: { size: 11 } },
          grid: { color: gridColor },
          angleLines: { color: gridColor }
        }
      },
      plugins: {
        title: { display: true, text: 'Absolute Scores', color: titleColor, font: { size: 16 } },
        legend: { display: false }
      }
    }
  });

  // (2) Relative Radar Chart - keeping same setup as before
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
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 0 },
      scales: {
        r: {
          min: -0.6,
          max: 0.4,
          ticks: { color: axisColor, backdropColor: 'transparent', showLabelBackdrop: false },
          pointLabels: { color: pointLabelColor, font: { size: 11 } },
          grid: { color: gridColor },
          angleLines: { color: gridColor }
        }
      },
      plugins: {
        title: { display: true, text: 'Relative Scores', color: titleColor, font: { size: 16 } },
        legend: { display: false }
      }
    }
  });

  // (3) Strengths Bar Chart
  const strengthsLabels = data.strengths.map(x => x.criterion);
  const strengthsValues = data.strengths.map(x => x.relativeScore);
  abilitiesStrengthsChart = new Chart(ctxStr, {
    type: 'bar',
    data: {
      labels: strengthsLabels,
      datasets: [{
        label: 'Relative Strength',
        data: strengthsValues,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false, // Allow height to be set by container
      animation: { duration: 0 },
      plugins: {
        title: { display: true, text: 'Strengths', color: titleColor, font: { size: 16 } },
        legend: { display: false }
      },
      scales: {
        x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } },
        y: { ticks: { color: axisColor }, grid: { display: false } }
      }
    }
  });

  // (4) Weaknesses Bar Chart
  const weaknessesLabels = data.weaknesses.map(x => x.criterion);
  const weaknessesValues = data.weaknesses.map(x => x.relativeScore);
  // Reverse for display order (weakest at top)
  const weaknessesReversedLabels = [...weaknessesLabels].reverse();
  const weaknessesReversedValues = [...weaknessesValues].reverse();
  abilitiesWeaknessesChart = new Chart(ctxWeak, {
    type: 'bar',
    data: {
      labels: weaknessesReversedLabels,
      datasets: [{
        label: 'Relative Weakness',
        data: weaknessesReversedValues,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false, // Allow height to be set by container
      animation: { duration: 0 },
      plugins: {
        title: { display: true, text: 'Weaknesses', color: titleColor, font: { size: 16 } },
        legend: { display: false }
      },
      scales: {
        x: { beginAtZero: true, ticks: { color: axisColor }, grid: { color: gridColor } },
        y: { ticks: { color: axisColor }, grid: { display: false } }
      }
    }
  });

  // Add resize event listener to handle responsive behavior
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

// Add a new function to handle chart resize when window size changes
function resizeModalCharts() {
  if (abilitiesAbsoluteRadarChart) abilitiesAbsoluteRadarChart.resize();
  if (abilitiesRelativeRadarChart) abilitiesRelativeRadarChart.resize();
  if (abilitiesStrengthsChart) abilitiesStrengthsChart.resize();
  if (abilitiesWeaknessesChart) abilitiesWeaknessesChart.resize();
}




// --- Style Modal Function ---
// --- Style Modal Function (REWRITTEN for Word Cloud - with Modal Event Fix) ---
function showStyleModal(modelName) {
  const contentElement = document.getElementById('styleProfileContent');
  const modalTitleElement = document.getElementById('styleProfileModalLabel');
  const styleModalElement = document.getElementById('styleProfileModal'); // Get modal element

  // Ensure elements exist
  if (!contentElement || !modalTitleElement || !styleModalElement) {
      console.error("Style modal elements not found!");
      return;
  }

  // Get the Bootstrap Modal instance
  const styleModal = bootstrap.Modal.getOrCreateInstance(styleModalElement);

  // --- Prepare Content Area ---
  // Set loading message initially
  contentElement.innerHTML = `
      <div id="styleCloudContainer" style="width: 100%; height: 500px; min-height: 300px; max-height: 60vh; border: 1px solid var(--border-color, #ccc); border-radius: 4px; position: relative; margin-bottom: 1rem;">
          <p class="text-center p-3"><i>Loading style data...</i></p>
      </div>
      <p> </p>`;
  const containerElement = document.getElementById('styleCloudContainer'); // Get container AFTER setting innerHTML

  // --- Check Data Availability ---
  if (typeof styleAssociationData === 'undefined' || !styleAssociationData[modelName] || !styleAssociationData[modelName].mostFavored || styleAssociationData[modelName].mostFavored.length === 0) {
      console.warn("No style data found or empty for: ", modelName);
      if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No style profile data available for ${modelName}.</i></p>`;
      }
      modalTitleElement.textContent = `Style Profile: ${modelName}`;
      styleModal.show(); // Show modal even if no data
      return;
  }

  // --- Prepare Data (outside the event listener) ---
  const data = styleAssociationData[modelName].mostFavored;
  const filteredData = data.filter(item => item.word.toLowerCase() !== "crisp");

  const topTraits = filteredData
      .sort((a, b) => b.strength - a.strength)
      .slice(0, 40);

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
      // Filter out empty words just in case
      const word = typeof item.word === 'string' ? item.word.trim() : '';
      return word ? [word, Math.round(size)] : null;
  }).filter(item => item !== null); // Remove null entries from filtered words

  if (listData.length === 0) {
       console.warn("No valid words left after filtering for: ", modelName);
       if (containerElement) {
          containerElement.innerHTML = `<p class="text-center p-3"><i>No valid style traits found for ${modelName}.</i></p>`;
       }
       modalTitleElement.textContent = `Style Profile: ${modelName}`;
       styleModal.show();
       return;
  }


  // --- Prepare Options (outside the event listener) ---
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
              const originalStrength = styleAssociationData[modelName].mostFavored.find(t => t.word === item[0])?.strength;
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

  // --- Event Listener to Generate Cloud AFTER Modal is Shown ---
  // Remove previous listener if any (important!)
  styleModalElement.removeEventListener('shown.bs.modal', generateCloud);

  // Define the function to be called by the listener
  function generateCloud() {
      // Need to get container again inside listener scope? Maybe not needed if containerElement is accessible.
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
      // IMPORTANT: Remove the listener after it runs once to prevent duplicates
      styleModalElement.removeEventListener('shown.bs.modal', generateCloud);
  }

  // Add the event listener
  styleModalElement.addEventListener('shown.bs.modal', generateCloud, { once: true }); // Use { once: true } for cleaner removal

  // --- Show the Modal ---
  modalTitleElement.textContent = `Style Profile: ${modelName}`;
  styleModal.show();
}
// --- End Style Modal Function ---
// --- End Style Modal Function ---

// --- Gradient logic for visible bars ---
function updateScoreBarColorsV3() {
  const scoreBars = document.querySelectorAll('#leaderboard .creative-writing-score-bar');
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    // Check if the bar itself is visible (display: block or inline-block etc., not none)
    if (bar.offsetParent !== null) { // A common way to check visibility
      const row = bar.closest('tr');
      if (!row) return;

      // Get the current displayed index (might change with filtering/paging if enabled)
      // For non-paged tables, index() is usually reliable for visual order
      const overallIndex = $(row).index();
      const totalRows = $('#leaderboard tbody tr:visible').length; // Count only visible rows
      if (totalRows === 0) return;

      // Calculate gradient based on visual position
      const startPercent = (overallIndex / totalRows);
      const endPercent = ((overallIndex + 1) / totalRows);

      // Adjust lightness based on dark mode
      const lightness = isDarkMode ? '50%' : '80%'; // Example lightness values
      const saturation = isDarkMode ? '50%' : '60%'; // Example saturation

      // Generate HSL colors for a smooth rainbow effect
      const startColor = `hsl(${startPercent * 360}, ${saturation}, ${lightness})`;
      const endColor = `hsl(${endPercent * 360}, ${saturation}, ${lightness})`;

      // Apply gradient
      bar.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    }
  });
}
// --- End Gradient logic ---

function loadLeaderboardData() {
  // Ensure the data variable exists
  if (typeof leaderboardDataCreativeWritingV3 === 'undefined') {
      console.error("leaderboardDataCreativeWritingV3 is not defined. Make sure the data file is loaded.");
      document.getElementById('leaderboardBody').innerHTML = '<tr><td colspan="9">Error loading leaderboard data.</td></tr>';
      return;
  }

  const creativeWritingRows = leaderboardDataCreativeWritingV3
    .split('\n')
    .slice(1) // Skip header row
    .filter(l => l.trim() !== ''); // Remove empty lines

  if (creativeWritingRows.length === 0) {
      document.getElementById('leaderboardBody').innerHTML = '<tr><td colspan="9">No leaderboard data available.</td></tr>';
      return; // No data to process
  }

  // --- Elo/Rubric Scaling ---
  const originalEloScores = creativeWritingRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
  const originalRubricScores = creativeWritingRows.map(row => parseFloat(row.split(',')[2])).filter(s => !isNaN(s)); // Get original rubric for scaling

  // Handle cases with no valid scores
  const originalMaxElo = originalEloScores.length > 0 ? Math.max(...originalEloScores) : 1200; // Default max if empty
  const originalMinElo = originalEloScores.length > 0 ? Math.min(...originalEloScores) : 800; // Default min if empty
  const originalMaxRubric = originalRubricScores.length > 0 ? Math.max(...originalRubricScores) : 20; // Use original scale max
  const originalMinRubric = originalRubricScores.length > 0 ? Math.min(...originalRubricScores) : 0; // Use original scale min

  // Avoid division by zero if all scores are the same
  const eloRange = (originalMaxElo - originalMinElo) || 1;
  const rubricRange = (originalMaxRubric - originalMinRubric) || 1;

  // Calculate scaled scores globally for consistency
  eloScores = creativeWritingRows.map(row => {
    const score = parseFloat(row.split(',')[1]);
    if (isNaN(score)) return 800; // Default score for missing data (adjust as needed)
    return score; // Return the original score without scaling
  });

  rubricScores = creativeWritingRows.map(row => {
      const score = parseFloat(row.split(',')[2]);
      if (isNaN(score)) return 0; // Default low score
      // Scale rubric by * 5 AFTER getting min/max on original scale
      return score * 5;
  });

  // Determine global max/min for bars based on SCALED scores
  maxEloScore = eloScores.length > 0 ? Math.max(...eloScores) : 1500;
  maxRubricScore = rubricScores.length > 0 ? Math.max(...rubricScores) : 100; // Max is 20 * 5 = 100
  // Set baselines relative to scaled scores
  baselineEloScore = eloScores.length > 0 ? Math.max(150, Math.min(...eloScores) - 50) : 150; // Ensure baseline isn't negative
  baselineRubricScore = rubricScores.length > 0 ? Math.max(0, Math.min(...rubricScores) - 5) : 0; // Baseline for 0-100 scale

  // --- End Scaling ---

  let html = creativeWritingRows.map((row, index) => { // Use index to access pre-calculated scaled scores
    let [
      modelNameRaw,
      _originalElo, // We use the scaled version now
      _originalRubric, // We use the scaled version now
      avgLength,
      vocabComplexity,
      slopScore,
      repetitionScore
    ] = row.split(',');

    // --- Use pre-calculated scaled scores ---
    const eloScoreNum = eloScores[index];
    const rubricScoreNum = rubricScores[index];
    // --- End Score Calculation ---

    // --- Other Metric Calculations ---
    let vocabNum = parseFloat(vocabComplexity) / 10; // Assuming vocab is 0-100 scale? Adjust if needed.
    vocabNum = isNaN(vocabNum) ? 0 : Math.min((vocabNum / 7.0) * 10, 10); // Normalize example

    const slopNumRaw = parseFloat(slopScore);
    const slopNum = isNaN(slopNumRaw) ? 0 : (slopNumRaw / 10.0) / 7.2 * 10; // Normalize example

    const lengthNum = parseInt(avgLength, 10);
    const repetitionScoreNum = parseFloat(repetitionScore);
    // --- End Other Metric Calculations ---

    // --- Calculate Percentages for Bars (using scaled scores and baselines) ---
    const eloScoreRangeForBar = (maxEloScore - baselineEloScore) || 1; // Avoid division by zero
    const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
    const eloScorePercentage = Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRangeForBar) * 100));

    const rubricScoreRangeForBar = (maxRubricScore - baselineRubricScore) || 1; // Avoid division by zero
    const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
    const rubricScorePercentage = Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRangeForBar) * 100));
    // --- End Percentage Calculation ---

    // --- Model Name Handling ---
    let currentModelName = modelNameRaw.trim(); // Trim whitespace
    const isNsfwModel = currentModelName.startsWith('!');
    currentModelName = currentModelName.replace(/^!/, '');
    const isNewModel = currentModelName.startsWith('*');
    currentModelName = currentModelName.replace(/^\*/, '');

    let displayModelName = currentModelName.split('/').pop(); // Get last part if path
    if (isNsfwModel) displayModelName = '🔞 ' + displayModelName;
    if (isNewModel) displayModelName = '🆕 ' + displayModelName;

    let modelNameDisplayHTML = displayModelName; // Default to plain text
    if (currentModelName.includes('/')) {
      // Strip “:…” so the link points to the base repo
      const hfRepoPath = currentModelName.split(':')[0]; // keep text before first colon
      modelNameDisplayHTML = `<a href="https://huggingface.co/${hfRepoPath}" target="_blank" rel="noopener noreferrer">${displayModelName}</a>`;
    }

    // Generate results link (ensure model name is filesystem-safe)
    let safeModelName = currentModelName.replace(/\//g, '__').replace(/[^a-zA-Z0-9_.-]/g, '_');
    let modelResultsFn = `results/creative-writing-v3/${safeModelName}.html`;
    // --- End Model Name Handling ---

    // --- Score Bar HTML ---
    let scoreBarEloHTML = `
      <div class="score-bar-container">
        <div class="creative-writing-score-bar" style="width: ${eloScorePercentage.toFixed(1)}%; display: none;"></div>
        <span class="score-text">${eloScoreNum.toFixed(1)}</span>
      </div>`;

    let scoreBarRubricHTML = `
      <div class="score-bar-container">
        <div class="creative-writing-score-bar" style="width: ${rubricScorePercentage.toFixed(1)}%; display: none;"></div>
        <span class="score-text">${rubricScoreNum.toFixed(2)}</span>
      </div>`;
    // --- End Score Bar HTML ---

    // --- Icon Definitions ---
    const slopInfoIconUnicode = `
      <span class="slop-info-icon custom-info-icon" data-model-name="${currentModelName}" title="View Slop Profile">i</span>`;
    const abilitiesInfoIcon = `
      <span class="abilities-info-icon chart-icon" data-model-name="${currentModelName}" title="View Abilities Charts"><span></span></span>`;
    const styleInfoIcon = `
      <span class="style-info-icon chart-icon" data-model-name="${currentModelName}" title="View Style Profile"><span></span></span>`;
    // --- End Icon Definitions ---

    // --- Row HTML Generation (Updated Structure) ---
    return `
      <tr data-model-name-full="${currentModelName}"
          data-original-elo-score="${eloScoreNum}"
          data-original-rubric-score="${rubricScoreNum}"
          data-vocab="${vocabNum}"
          data-gpt-slop="${slopNum}"
          data-repetition="${repetitionScoreNum}">

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

        <td class="mobile-collapsible"> <!-- Col 2: Style -->
          <div class="cell-content">
            ${styleInfoIcon}
          </div>
        </td>

        <td class="mobile-collapsible" data-order="${slopNum.toFixed(1)}"> <!-- Col 3: Slop -->
          <div class="cell-content">
            ${slopNum.toFixed(1)}
            ${slopInfoIconUnicode}
          </div>
        </td>

        <td class="mobile-collapsible" data-order="${isNaN(repetitionScoreNum) ? -1 : repetitionScoreNum.toFixed(1)}"> <!-- Col 4: Repetition -->
          <div class="cell-content">
            ${isNaN(repetitionScoreNum) ? '-' : repetitionScoreNum.toFixed(1)}
          </div>
        </td>

        <td class="mobile-collapsible" data-order="${isNaN(lengthNum) ? -1 : lengthNum}"> <!-- Col 5: Length -->
          <div class="cell-content">
            ${isNaN(lengthNum) ? '-' : lengthNum}
          </div>
        </td>

        <td class="mobile-collapsible" data-order="${rubricScoreNum.toFixed(2)}"> <!-- Col 6: Rubric Score -->
          <div class="cell-content">
            ${scoreBarRubricHTML}
          </div>
        </td>

        <td data-order="${eloScoreNum.toFixed(1)}"> <!-- Col 7: Elo Score -->
          <div class="cell-content">
            ${scoreBarEloHTML}
          </div>
        </td>

        <td> <!-- Col 8: Sample Link -->
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

// --- DataTable config (Updated Indices) ---
let dataTableConfig = {
  autoWidth: false, 
  order: [[7, "desc"]], // Default sort by Elo (now index 7)
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    // New column index order: 
    // 0: Model Name, 1: Abilities, 2: Style, 3: Slop, 4: Repetition, 5: Length, 6: Rubric, 7: Elo, 8: Sample
    { targets: [0], type: 'string' }, // Model Name
    { targets: [1, 2], orderable: false }, // Abilities, Style (icons, not sortable)
    { targets: [3], type: 'num' }, // Slop
    { targets: [4], type: 'num' }, // Repetition
    { targets: [5], type: 'num' }, // Length
    { targets: [6], type: 'num' }, // Rubric Score
    { targets: [7], type: 'num' }, // Elo Score
    { targets: [8], orderable: false }, // Sample Link (not sortable)

    // Define sorting directions
    { targets: [6, 7], orderSequence: ["desc", "asc"] }, // Rubric, Elo (desc first)
    { targets: [3, 5], orderSequence: ["desc", "asc"] }, // Slop, Length (desc first)
    { targets: [4], orderSequence: ["asc", "desc"] }     // Repetition (asc first - less is better)
  ],
  // Custom DOM layout unchanged
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

  // Callback after table draw
  drawCallback: function(settings) {
    let api = this.api();
    if (!api || api.rows().count() === 0) return;

    let order = api.order();
    if (!order || order.length === 0) {
      order = [[7, 'desc']]; // Default to Elo (index 7 in new order)
      api.order(order).draw(false);
      return;
    }

    let sortedColumnIndex = order[0][0];

    // Updated indices for score columns
    const SCORE_COLUMNS = [6, 7]; // Rubric, Elo (new indices)
    const NON_SCORE_COLUMNS = [0, 1, 2, 3, 4, 5, 8]; // All other columns

    const tableNode = $(api.table().node());
    tableNode.find('.creative-writing-score-bar').hide();
    tableNode.find('thead th').css('width', '');

    let columnToShowBar = -1;
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
      columnToShowBar = sortedColumnIndex;
      lastSortedScoreColumn = sortedColumnIndex;
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) && lastSortedScoreColumn !== null) {
      columnToShowBar = lastSortedScoreColumn;
    } else {
      columnToShowBar = 7; // Elo index in new order
      lastSortedScoreColumn = 7;
    }

    if (columnToShowBar !== -1) {
      try {
        api.rows({ page: 'current' })
           .nodes()
           .to$()
           .find(`td:eq(${columnToShowBar}) .creative-writing-score-bar`)
           .show();

        let header = api.column(columnToShowBar).header();
        if (header) {
          $(header).css('width', '30%');
        }
      } catch (e) {
        console.error("Error showing score bar or adjusting header width:", e);
      }
    }
    updateScoreBarColorsV3();
  }
};
// --- End DataTable config ---

// --- Mobile Collapse Logic ---
let middleStatsExpanded = false; // Track state for mobile toggle

function collapseMiddleColumns() {
  const isMobile = window.innerWidth < 768; // Define mobile breakpoint
  const toggleButton = $('#toggleMiddleStats');

  if (isMobile) {
      // Show the toggle button only on mobile
      toggleButton.removeClass('d-none').addClass('show-details-toggle-button');
      if (!middleStatsExpanded) {
          // If mobile and not expanded, hide collapsible columns
          $('#leaderboard .mobile-collapsible').hide();
          toggleButton.text('Expand Details');
      } else {
          // If mobile and expanded, show collapsible columns
          $('#leaderboard .mobile-collapsible').show();
          toggleButton.text('Hide Details');
      }
  } else {
      // On desktop, hide the toggle button and always show columns
      toggleButton.addClass('d-none').removeClass('show-details-toggle-button');
      $('#leaderboard .mobile-collapsible').show();
  }
  // Ensure DataTable adjusts layout if columns shown/hidden
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
      $('#leaderboard').DataTable().columns.adjust();
  }
}

function toggleMiddleStats() {
  middleStatsExpanded = !middleStatsExpanded; // Flip the state
  collapseMiddleColumns(); // Re-apply visibility based on new state
}
// --- End Mobile Collapse Logic ---

// --- Initial Score Bar Fix ---
function fixInitialScoreBars() {
  // Delay slightly to ensure DataTable has finished its initial draw
  setTimeout(() => {
    if ($.fn.DataTable.isDataTable('#leaderboard')) {
      // Trigger a redraw which will call drawCallback and show the correct bars
      $('#leaderboard').DataTable().draw(false);
    }
  }, 50); // Short delay
}
// --- End Initial Score Bar Fix ---

// --- DataTable Initialization ---
function initializeDataTable() {
  // Destroy existing table if it exists to prevent conflicts
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    // IMPORTANT: Unbind previous listeners to avoid duplicates
    $('#leaderboardBody').off('click', '.slop-info-icon');
    $('#leaderboardBody').off('click', '.abilities-info-icon');
    $('#leaderboardBody').off('click', '.style-info-icon');
  }

  // Initialize the DataTable with the configuration
  let table = $('#leaderboard').DataTable(dataTableConfig);

  // --- Event Listeners for Icons ---
  // Slop icon listener
  $('#leaderboardBody').on('click', '.slop-info-icon', function() {
    const modelName = $(this).data('model-name');
    const profileHtml = parseSlopData(modelName); // Get the parsed slop text
    const modalTitle = `Slop Profile: ${modelName.split('/').pop()}`; // Use short name for title
    $('#slopProfileContent').html(profileHtml); // Set modal content
    $('#slopProfileModalLabel').text(modalTitle); // Set modal title
    // Use Bootstrap's JS to get the modal instance and show it
    const slopModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('slopProfileModal'));
    slopModal.show();
  });

  // Abilities icon listener
  $('#leaderboardBody').on('click', '.abilities-info-icon', function() {
    const modelName = $(this).data('model-name');
    showAbilitiesModal(modelName); // Call the function to create charts and show modal
  });

  // Style icon listener
  $('#leaderboardBody').on('click', '.style-info-icon', function() {
    const modelName = $(this).data('model-name');
    showStyleModal(modelName); // Call the function to create chart and show modal
  });
  // --- End Event Listeners ---

  // Perform actions once the table is fully initialized
  table.one('init.dt', function() {
    collapseMiddleColumns(); // Set initial mobile column visibility
    setupControls(); // Setup sliders (if any were active)
    fixInitialScoreBars(); // Ensure default score bars are shown correctly
  });
}
// --- End DataTable Initialization ---

// --- Control Setup (Sliders - currently hidden but logic remains) ---
function setupControls() {
  const vocabSlider = document.getElementById('vocabControlSlider');
  const vocabSliderValueLabel = document.getElementById('vocabControlValue');
  const gptSlopSlider = document.getElementById('gptSlopControlSlider');
  const gptSlopSliderValueLabel = document.getElementById('gptSlopControlValue');

  // Check if sliders exist before adding listeners
  if (vocabSlider && vocabSliderValueLabel) {
      vocabSliderValueLabel.textContent = `${vocabSlider.value}%`; // Set initial value display
      if (!vocabSlider.hasListeners) { // Prevent adding multiple listeners
          vocabSlider.oninput = function() {
              vocabSliderValueLabel.textContent = `${this.value}%`;
              updateScores(); // Recalculate scores when slider changes
          };
          vocabSlider.hasListeners = true;
      }
  }

  if (gptSlopSlider && gptSlopSliderValueLabel) {
      gptSlopSliderValueLabel.textContent = `${gptSlopSlider.value}%`; // Set initial value display
      if (!gptSlopSlider.hasListeners) { // Prevent adding multiple listeners
          gptSlopSlider.oninput = function() {
              gptSlopSliderValueLabel.textContent = `${this.value}%`;
              updateScores(); // Recalculate scores when slider changes
          };
          gptSlopSlider.hasListeners = true;
      }
  }
  // Initial score calculation based on default slider values (if sliders are used)
  // updateScores(); // Call this if sliders affect the initial view
}
// --- End Control Setup ---

// --- Vocab/Slop Normalization/Calculation (Used by updateScores if sliders active) ---
function normalizeVocabComplexity(value) {
  // Example normalization: scale 0-10 vocab score non-linearly
  const minVocab = 4.5; // Assumed minimum meaningful vocab score
  const maxVocab = 10.0; // Assumed maximum
  if (isNaN(value)) return 0;
  const clampedValue = Math.max(minVocab, Math.min(maxVocab, value));
  // Apply power scaling (e.g., ^2) to emphasize differences at higher end
  return Math.pow((clampedValue - minVocab) / (maxVocab - minVocab), 2);
}

function calculateAverageGptSlop() {
  // Calculate average slop across all models currently in the table
  const gptSlops = Array.from(document.querySelectorAll('#leaderboardBody tr'))
    .map(row => parseFloat(row.getAttribute('data-gpt-slop')))
    .filter(val => !isNaN(val)); // Filter out NaN values

  if (gptSlops.length === 0) return 1; // Avoid division by zero, return neutral value

  const average = gptSlops.reduce((a, b) => a + b, 0) / gptSlops.length;
  return average === 0 ? 1 : average; // Avoid returning 0 if all slops are 0
}
// --- End Vocab/Slop Normalization/Calculation ---

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
  displayEncodedEmail(); // Decode and display contact email
  setupDarkModeToggle(); // Setup dark mode toggle and apply initial theme

  // Check if the leaderboard container exists before trying to load data
  if (document.getElementById('leaderboard')) {
    loadLeaderboardData(); // Load data and build the table HTML

    // Setup responsive behavior for mobile columns
    $(window).on('resize', collapseMiddleColumns);
    $('#toggleMiddleStats').on('click', toggleMiddleStats);

    // Initial check for mobile columns after a short delay
    setTimeout(collapseMiddleColumns, 50);
  } else {
      console.error("Leaderboard container not found in the DOM.");
  }
});
// --- End DOMContentLoaded ---

// --- Score Update Logic (For Sliders - currently inactive but functional) ---
function updateScores() {
  const vocabPercentage = document.getElementById('vocabControlSlider')?.value ?? 0;
  const gptSlopPercentage = document.getElementById('gptSlopControlSlider')?.value ?? 0;

  const vocabAdjustmentFactor = parseFloat(vocabPercentage) / 100;
  const gptSlopAdjustmentFactor = 0.30 * parseFloat(gptSlopPercentage) / 100;

  const avgGptSlop = calculateAverageGptSlop();
  const table = $('#leaderboard').DataTable();

  $('#leaderboardBody tr').each(function() {
    const row = $(this);
    const modelGptSlop = parseFloat(row.attr('data-gpt-slop'));
    const vocabComplexity = parseFloat(row.attr('data-vocab'));
    const originalEloScore = parseFloat(row.attr('data-original-elo-score'));
    const originalRubricScore = parseFloat(row.attr('data-original-rubric-score'));

    let vocabAdjustment = 0;
    if (!isNaN(vocabComplexity) && vocabAdjustmentFactor > 0) {
      const normalizedVocab = normalizeVocabComplexity(vocabComplexity);
      vocabAdjustment = -12.0 * (1 - normalizedVocab) * vocabAdjustmentFactor;
    }

    let gptSlopMultiplier = 1.0;
    if (!isNaN(modelGptSlop) && gptSlopAdjustmentFactor > 0 && avgGptSlop !== 0) {
        let gptSlopRatio = modelGptSlop / avgGptSlop;
        if (gptSlopRatio > 1) {
            gptSlopMultiplier = 1 - (Math.log(gptSlopRatio) * gptSlopAdjustmentFactor);
            gptSlopMultiplier = Math.max(gptSlopMultiplier, 0.85);
        }
    }

    const adjustedEloScore = originalEloScore * gptSlopMultiplier + vocabAdjustment * 15;
    const adjustedRubricScore = originalRubricScore * gptSlopMultiplier + vocabAdjustment;

    // Update Elo Score cell (now index 7)
    const eloCell = row.find('td:eq(7)');
    eloCell.attr('data-order', adjustedEloScore.toFixed(1));
    eloCell.find('.score-text').text(adjustedEloScore.toFixed(1));

    // Update Rubric Score cell (now index 6)
    const rubricCell = row.find('td:eq(6)');
    rubricCell.attr('data-order', adjustedRubricScore.toFixed(2));
    rubricCell.find('.score-text').text(adjustedRubricScore.toFixed(2));

    const eloScoreRangeForBar = (maxEloScore - baselineEloScore) || 1;
    const eloPercentage = Math.max(0, Math.min(100,
      ((adjustedEloScore - baselineEloScore) / eloScoreRangeForBar) * 100
    ));
    const rubricScoreRangeForBar = (maxRubricScore - baselineRubricScore) || 1;
    const rubricPercentage = Math.max(0, Math.min(100,
      ((adjustedRubricScore - baselineRubricScore) / rubricScoreRangeForBar) * 100
    ));

    eloCell.find('.creative-writing-score-bar').css('width', `${eloPercentage.toFixed(1)}%`);
    rubricCell.find('.creative-writing-score-bar').css('width', `${rubricPercentage.toFixed(1)}%`);
  });

  table.rows().invalidate('data').draw(false);
}
// --- End Score Update Logic ---
