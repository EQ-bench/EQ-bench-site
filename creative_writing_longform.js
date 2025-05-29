// longform_creative_writing.js

// --- New Leaderboard Data ---
let leaderboardDataLongformV3 = `model_name,overall_score_100,avg_chapter_length,vocab_complexity,slop_score,repetition_score,chapter1_avg,chapter2_avg,chapter3_avg,chapter4_avg,chapter5_avg,chapter6_avg,chapter7_avg,chapter8_avg,final_judgement_avg
gemini-2.5-pro-preview-03-25,80.2,6544,46.63,40.40,7.3,16.58,16.75,16.34,16.58,16.36,16.35,16.12,15.49,15.44
deepseek-ai/DeepSeek-V3-0324,78.1,4131,19.39,47.40,11.6,16.64,16.26,16.78,16.55,16.04,15.57,14.02,15.63,14.92
claude-3-7-sonnet-20250219,77.6,9380,47.17,22.60,6.1,16.68,16.18,16.18,15.72,15.04,14.31,14.54,15.38,15.19
chatgpt-4o-latest-2025-03-27,76.8,5399,18.53,33.91,9.4,16.51,16.28,15.92,16.10,16.03,15.15,15.61,15.71,15.26
deepseek-ai/DeepSeek-R1,74.6,4035,23.66,55.12,8.5,15.56,16.08,15.34,15.20,16.24,15.57,15.37,16.25,15.17
quasar-alpha,73.7,6722,21.97,46.72,10.8,16.51,15.42,16.01,16.09,15.63,15.11,15.20,14.20,14.80
qwen/qwq-32b,60.8,5320,25.21,63.54,11.1,15.44,14.29,14.56,12.05,12.84,12.28,11.68,10.85,13.61
google/gemma-3-27b-it,59.3,5367,43.52,61.49,17.8,15.23,14.10,12.67,11.89,11.70,11.81,8.97,8.58,13.89
gpt-4o-mini,55.2,7855,43.04,63.58,18.3,13.52,11.98,11.07,11.51,11.52,10.39,9.29,9.46,11.56
gemini-2.0-flash-001,55.1,4915,31.84,70.16,21.0,14.18,12.74,10.72,11.68,10.64,10.24,9.48,9.27,11.69
RekaAI/reka-flash-3,51.8,4531,24.17,61.65,10.7,13.81,14.21,11.32,11.21,9.79,8.35,8.68,9.87,11.21
google/gemma-3-4b-it,47.3,4244,59.42,75.18,21.1,13.12,10.93,10.59,9.85,8.56,8.51,7.81,8.32,11.76
meta-llama/Llama-4-Maverick-17B-128E-Instruct,39.7,4363,34.67,74.63,40.5,10.05,9.77,7.91,7.69,8.01,7.27,7.50,5.66,8.87
meta-llama/Llama-4-Scout-17B-16E-Instruct,35.9,5093,33.16,80.89,47.9,9.79,7.81,6.96,7.09,6.50,5.64,4.88,4.13,7.01
aion-labs/aion-rp-llama-3.1-8b,32.6,4110,41.85,57.26,23.3,8.84,8.08,7.20,7.03,5.49,5.92,5.38,4.95,7.16
sao10k/l3.3-euryale-70b,29.8,11632,33.84,55.67,90.3,8.76,5.50,4.68,4.20,3.49,3.27,3.41,2.66,4.96
microsoft/phi-4-multimodal-instruct,26.9,9738,41.00,86.47,84.5,7.37,6.28,4.86,4.39,4.39,4.03,3.66,3.04,5.58
mistralai/Mistral-Nemo-Instruct-2407,37.7,7388,37.95,75.35,36.4,11.80,9.06,8.21,7.80,6.58,6.44,5.56,4.03,7.61
CohereForAI/c4ai-command-a-03-2025,58.0,6892,29.39,66.02,20.4,15.20,14.92,13.71,12.86,10.55,9.98,8.83,8.00,12.09
google/gemma-3-12b-it,51.7,4344,51.88,68.89,16.6,13.51,10.64,10.34,10.14,9.16,8.96,8.61,9.25,12.21
grok-3-mini-beta,58.8,5292,38.16,48.05,10.5,14.46,13.25,13.70,12.88,12.43,12.19,11.52,10.54,12.07
grok-3-beta,74.1,6313,29.93,46.07,9.6,16.29,15.80,15.90,15.80,15.68,15.37,14.32,15.32,14.20
optimus-alpha,76.0,5721,25.33,36.52,7.6,16.16,15.63,15.99,15.53,15.28,15.71,15.12,15.99,14.78
gpt-4.1-nano,56.1,6398,34.81,63.88,13.4,14.01,13.22,13.18,11.30,12.18,11.43,10.55,8.86,11.33
gpt-4.1-mini,62.1,4608,32.39,68.87,13.8,15.44,14.97,13.78,13.84,11.37,12.58,12.00,10.92,12.35
gpt-4.1,75.7,5667,24.30,36.91,8.3,16.27,15.76,15.86,15.34,15.53,15.55,15.34,15.49,14.74
o3,77.5,7493,32.82,33.03,4.3,16.30,16.41,16.49,16.45,16.47,16.39,15.99,16.58,16.08
gemini-2.5-flash-preview,76.3,6182,39.23,43.64,9.3,16.32,15.89,15.59,15.69,14.70,15.12,14.92,14.75,15.05
qwen/qwen3-235b-a22b,71.5,4788,22.58,56.94,10.7,16.17,15.24,15.48,15.34,14.76,15.27,14.73,14.44,13.91
qwen/qwen3-32b,58.5,4646,21.06,63.65,19.9,14.47,13.77,12.60,12.28,12.51,12.50,11.50,10.57,10.92
qwen/qwen3-30b-a3b,57.0,5334,22.75,78.32,30.1,14.95,13.18,13.44,12.43,12.13,11.35,10.94,9.12,9.83
qwen/qwen3-14b,53.3,5368,24.32,83.54,38.6,14.74,12.84,12.75,10.41,11.18,9.61,9.70,8.39,9.66
qwen/qwen-2.5-72b-instruct,53.0,9320,37.53,59.00,22.5,11.91,11.49,11.26,11.02,11.00,10.11,9.23,8.35,9.33
THUDM/GLM-4-32B-0414,62.2,7288,32.07,51.89,17.4,15.06,13.43,13.12,12.90,12.39,11.65,11.73,10.38,11.89
qwen/qwen3-1.7b,28.7,4317,33.68,86.70,41.2,9.27,6.70,6.18,6.06,5.89,5.62,5.32,5.35,5.02
qwen/qwen3-4b,30.9,8956,25.92,56.84,37.4,12.19,8.00,8.28,7.20,5.86,4.96,4.84,4.30,6.41
qwen/qwen3-8b,38.2,10853,28.18,63.16,35.3,13.17,9.83,9.62,8.10,8.07,7.76,6.28,6.22,8.16
microsoft/phi-4-reasoning-plus,48.0,7119,61.36,61.48,12.7,12.09,10.79,10.77,10.44,11.30,9.85,10.59,8.04,9.89
gemini-2.5-pro-preview-2025-05-07,76.42,6361,45.94,43.71,7.6,16.50,16.18,15.79,15.81,15.55,15.19,15.00,13.95,15.15
o4-mini,71.6,6648,26.23,45.38,7.6,15.75,14.53,15.00,15.01,15.84,14.47,14.90,15.65,14.51
*mistral-medium-3,62.2,3690,10.15,50.36,23.2,16.31,14.16,14.38,13.56,12.40,10.74,9.71,10.07,11.37
*claude-opus-4,77.9,6637,24.08,9.16,7.7,16.80,16.39,16.48,16.51,15.83,16.38,15.45,15.02,14.94
*claude-sonnet-4,77.4,6696,42.64,15.00,8.9,16.37,16.37,16.27,15.33,15.78,16.14,14.56,14.06,14.56
*deepseek-ai/DeepSeek-R1-0528,78.9,8231,33.77,54.61,7.5,16.81,16.64,16.51,16.35,16.20,16.49,16.49,16.62,15.42`;


// --- New Slop Data ---
const slopData = `##### gemini-2.5-pro-preview-03-25
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.754)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-2025-05-07 (distance=0.760)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.776)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.784)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.813)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>unlatched</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mantelpiece</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>bookshelves</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>rusty</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>terran</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>laundromat</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>liam</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sparks</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (52)</span> <span class='slop-ngram-item'>said voice (41)</span> <span class='slop-ngram-item'>looked like (21)</span> <span class='slop-ngram-item'>something else (21)</span> <span class='slop-ngram-item'>burner phone (18)</span> <span class='slop-ngram-item'>eyes wide (16)</span> <span class='slop-ngram-item'>look like (15)</span> <span class='slop-ngram-item'>living room (15)</span> <span class='slop-ngram-item'>less like (14)</span> <span class='slop-ngram-item'>back towards (14)</span> <span class='slop-ngram-item'>right said (13)</span> <span class='slop-ngram-item'>voice low (13)</span> <span class='slop-ngram-item'>like trying (12)</span> <span class='slop-ngram-item'>last night (12)</span> <span class='slop-ngram-item'>dim light (12)</span> <span class='slop-ngram-item'>heart pounding (12)</span> <span class='slop-ngram-item'>leaving behind (12)</span> <span class='slop-ngram-item'>looked back (11)</span> <span class='slop-ngram-item'>could see (11)</span> <span class='slop-ngram-item'>pry bar (11)</span> <span class='slop-ngram-item'>expression unreadable (10)</span> <span class='slop-ngram-item'>began voice (10)</span> <span class='slop-ngram-item'>turning back (10)</span> <span class='slop-ngram-item'>voice tight (10)</span> <span class='slop-ngram-item'>long moment (10)</span> <span class='slop-ngram-item'>eyes fixed (9)</span> <span class='slop-ngram-item'>dark hair (9)</span> <span class='slop-ngram-item'>flicker something (9)</span> <span class='slop-ngram-item'>maybe even (9)</span> <span class='slop-ngram-item'>face pale (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart hammered ribs (9)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>looked less like (5)</span> <span class='slop-ngram-item'>felt less like (5)</span> <span class='slop-ngram-item'>smile touched lips (5)</span> <span class='slop-ngram-item'>eyes met mine (4)</span> <span class='slop-ngram-item'>fingers flew across (4)</span> <span class='slop-ngram-item'>gave curt nod (4)</span> <span class='slop-ngram-item'>took deep breath (4)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>eyes never leaving (4)</span> <span class='slop-ngram-item'>turned head slowly (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>old man hemlock (4)</span> <span class='slop-ngram-item'>flickering neon sign (3)</span> <span class='slop-ngram-item'>felt like eternity (3)</span> <span class='slop-ngram-item'>right said voice (3)</span> <span class='slop-ngram-item'>knot tightening stomach (3)</span> <span class='slop-ngram-item'>life felt like (3)</span> <span class='slop-ngram-item'>dust motes dancing (3)</span> <span class='slop-ngram-item'>another pause longer (3)</span> <span class='slop-ngram-item'>pause longer time (3)</span> <span class='slop-ngram-item'>said breaking silence (3)</span> <span class='slop-ngram-item'>gaze flickered towards (3)</span> <span class='slop-ngram-item'>creak old house (3)</span> <span class='slop-ngram-item'>squeezed eyes shut (3)</span> <span class='slop-ngram-item'>elara eyes wide (3)</span> <span class='slop-ngram-item'>chapter static line (3)</span> <span class='slop-ngram-item'>elara said voice (3)</span> <span class='slop-ngram-item'>dim light filtering (3)</span>
</div>

##### deepseek-ai/DeepSeek-R1-0528
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.813)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.818)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-2025-05-07 (distance=0.826)</div>
<div class='slop-similar'>quasar-alpha (distance=0.830)</div>
<div class='slop-similar'>grok-3-beta (distance=0.834)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rostova</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>scritch</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>soundlessly</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>tuneless</span> <span class='slop-word-item'>anya</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>plink</span> <span class='slop-word-item'>dully</span> <span class='slop-word-item'>unseeing</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>chitinous</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>jangled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>priya</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>strobing</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>skittering</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>bloodstain</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>horrifyingly</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>murmured</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (73)</span> <span class='slop-ngram-item'>eyes wide (43)</span> <span class='slop-ngram-item'>something else (32)</span> <span class='slop-ngram-item'>said voice (32)</span> <span class='slop-ngram-item'>took step (23)</span> <span class='slop-ngram-item'>like physical (21)</span> <span class='slop-ngram-item'>voice tight (21)</span> <span class='slop-ngram-item'>looked like (20)</span> <span class='slop-ngram-item'>eyes fixed (20)</span> <span class='slop-ngram-item'>voice flat (19)</span> <span class='slop-ngram-item'>metallic tang (19)</span> <span class='slop-ngram-item'>voice low (19)</span> <span class='slop-ngram-item'>knuckles white (19)</span> <span class='slop-ngram-item'>locked onto (18)</span> <span class='slop-ngram-item'>music box (18)</span> <span class='slop-ngram-item'>sound like (17)</span> <span class='slop-ngram-item'>gestured vaguely (17)</span> <span class='slop-ngram-item'>physical blow (17)</span> <span class='slop-ngram-item'>took another (16)</span> <span class='slop-ngram-item'>dust motes (16)</span> <span class='slop-ngram-item'>face mask (16)</span> <span class='slop-ngram-item'>flicker something (16)</span> <span class='slop-ngram-item'>gone replaced (15)</span> <span class='slop-ngram-item'>expression unreadable (15)</span> <span class='slop-ngram-item'>air thick (14)</span> <span class='slop-ngram-item'>words echoed (14)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>dim light (14)</span> <span class='slop-ngram-item'>front door (14)</span> <span class='slop-ngram-item'>hung thick (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like physical blow (15)</span> <span class='slop-ngram-item'>hit like physical (9)</span> <span class='slop-ngram-item'>took step towards (9)</span> <span class='slop-ngram-item'>gestured vaguely towards (8)</span> <span class='slop-ngram-item'>heart hammering ribs (7)</span> <span class='slop-ngram-item'>air hung thick (7)</span> <span class='slop-ngram-item'>sharp intake breath (6)</span> <span class='slop-ngram-item'>felt like lead (6)</span> <span class='slop-ngram-item'>took step closer (6)</span> <span class='slop-ngram-item'>tasted like ash (5)</span> <span class='slop-ngram-item'>eyes locking onto (5)</span> <span class='slop-ngram-item'>took another step (5)</span> <span class='slop-ngram-item'>thick enough choke (5)</span> <span class='slop-ngram-item'>eyes locked onto (5)</span> <span class='slop-ngram-item'>dust motes dancing (5)</span> <span class='slop-ngram-item'>knuckles white gripped (5)</span> <span class='slop-ngram-item'>silence descended thick (5)</span> <span class='slop-ngram-item'>roared sound pure (5)</span> <span class='slop-ngram-item'>rasped voice raw (5)</span> <span class='slop-ngram-item'>gaze locked onto (5)</span> <span class='slop-ngram-item'>faint metallic tang (5)</span> <span class='slop-ngram-item'>voice flat devoid (5)</span> <span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>said voice flat (5)</span> <span class='slop-ngram-item'>hammering ribs like (4)</span> <span class='slop-ngram-item'>ribs like trapped (4)</span> <span class='slop-ngram-item'>like trapped bird (4)</span> <span class='slop-ngram-item'>felt heavier ever (4)</span> <span class='slop-ngram-item'>took step forward (4)</span> <span class='slop-ngram-item'>risked glance back (4)</span>
</div>

##### deepseek-ai/DeepSeek-V3-0324
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.755)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.772)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b (distance=0.783)</div>
<div class='slop-similar'>mistral-medium-3 (distance=0.788)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.799)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>medbay</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>gaped</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>safehouse</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>skidded</span> <span class='slop-word-item'>windbreaker</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>yanked</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>limped</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>pried</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>unknown number (46)</span> <span class='slop-ngram-item'>phone buzzed (31)</span> <span class='slop-ngram-item'>gon na (23)</span> <span class='slop-ngram-item'>alex phone (21)</span> <span class='slop-ngram-item'>hands shook (17)</span> <span class='slop-ngram-item'>word count (16)</span> <span class='slop-ngram-item'>last night (15)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>breath hitched (15)</span> <span class='slop-ngram-item'>looked like (14)</span> <span class='slop-ngram-item'>smelled like (14)</span> <span class='slop-ngram-item'>voice cracked (14)</span> <span class='slop-ngram-item'>sound like (14)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>stepped forward (13)</span> <span class='slop-ngram-item'>buzzed unknown (13)</span> <span class='slop-ngram-item'>let go (13)</span> <span class='slop-ngram-item'>said voice (12)</span> <span class='slop-ngram-item'>stomach dropped (11)</span> <span class='slop-ngram-item'>fingers brushed (10)</span> <span class='slop-ngram-item'>morning light (10)</span> <span class='slop-ngram-item'>went still (10)</span> <span class='slop-ngram-item'>fingers trembled (10)</span> <span class='slop-ngram-item'>one last (10)</span> <span class='slop-ngram-item'>door creaked (10)</span> <span class='slop-ngram-item'>basement door (10)</span> <span class='slop-ngram-item'>shut behind (10)</span> <span class='slop-ngram-item'>grabbed arm (9)</span> <span class='slop-ngram-item'>radio crackled (9)</span> <span class='slop-ngram-item'>stood doorway (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>alex phone buzzed (16)</span> <span class='slop-ngram-item'>phone buzzed unknown (13)</span> <span class='slop-ngram-item'>buzzed unknown number (13)</span> <span class='slop-ngram-item'>door clicked shut (7)</span> <span class='slop-ngram-item'>one last time (6)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>door creaked open (6)</span> <span class='slop-ngram-item'>took long enough (5)</span> <span class='slop-ngram-item'>mouth went dry (5)</span> <span class='slop-ngram-item'>reply came instantly (5)</span> <span class='slop-ngram-item'>unknown number u (5)</span> <span class='slop-ngram-item'>alex blood turned (5)</span> <span class='slop-ngram-item'>blood turned ice (5)</span> <span class='slop-ngram-item'>clicked shut behind (5)</span> <span class='slop-ngram-item'>fingers twitched toward (5)</span> <span class='slop-ngram-item'>door swung open (5)</span> <span class='slop-ngram-item'>finger tightened trigger (5)</span> <span class='slop-ngram-item'>mouth tasted like (4)</span> <span class='slop-ngram-item'>arm need move (4)</span> <span class='slop-ngram-item'>breath smelled like (4)</span> <span class='slop-ngram-item'>alex breath hitched (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>took step forward (4)</span> <span class='slop-ngram-item'>pupils blown wide (4)</span> <span class='slop-ngram-item'>pulse roared ears (4)</span> <span class='slop-ngram-item'>kept pace beside (3)</span> <span class='slop-ngram-item'>lightning split sky (3)</span> <span class='slop-ngram-item'>neon sign flickered (3)</span> <span class='slop-ngram-item'>dawn bled across (3)</span> <span class='slop-ngram-item'>exploded behind eyes (3)</span>
</div>

##### claude-opus-4
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-sonnet-4 (distance=0.804)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.891)</div>
<div class='slop-similar'>mistral-medium-3 (distance=0.896)</div>
<div class='slop-similar'>optimus-alpha (distance=0.899)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.900)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>herm</span> <span class='slop-word-item'>constance</span> <span class='slop-word-item'>priya</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>vasquez</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>shimmer</span> <span class='slop-word-item'>blinks</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>adderall</span> <span class='slop-word-item'>pauses</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>tommy</span> <span class='slop-word-item'>shrugs</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>clipboard</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>morrison</span> <span class='slop-word-item'>emojis</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>corrects</span> <span class='slop-word-item'>flask</span> <span class='slop-word-item'>seventeen</span> <span class='slop-word-item'>doorway</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>doorbell</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>stares</span> <span class='slop-word-item'>constants</span> <span class='slop-word-item'>hamster</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>whispers</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>fingernails</span> <span class='slop-word-item'>manifests</span> <span class='slop-word-item'>sarah</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>vampire</span> <span class='slop-word-item'>entropy</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>breathes</span> <span class='slop-word-item'>wrists</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzes (38)</span> <span class='slop-ngram-item'>something else (32)</span> <span class='slop-ngram-item'>smells like (31)</span> <span class='slop-ngram-item'>three days (29)</span> <span class='slop-ngram-item'>three years (24)</span> <span class='slop-ngram-item'>unknown number (22)</span> <span class='slop-ngram-item'>look like (22)</span> <span class='slop-ngram-item'>looks like (21)</span> <span class='slop-ngram-item'>like like (21)</span> <span class='slop-ngram-item'>last night (20)</span> <span class='slop-ngram-item'>sounds like (20)</span> <span class='slop-ngram-item'>like someone (19)</span> <span class='slop-ngram-item'>six months (18)</span> <span class='slop-ngram-item'>someone else (17)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>gon na (15)</span> <span class='slop-ngram-item'>let go (15)</span> <span class='slop-ngram-item'>six hours (14)</span> <span class='slop-ngram-item'>could see (14)</span> <span class='slop-ngram-item'>sound like (13)</span> <span class='slop-ngram-item'>smell like (13)</span> <span class='slop-ngram-item'>two weeks (13)</span> <span class='slop-ngram-item'>said finally (13)</span> <span class='slop-ngram-item'>says like (12)</span> <span class='slop-ngram-item'>tastes like (12)</span> <span class='slop-ngram-item'>three weeks (12)</span> <span class='slop-ngram-item'>twenty minutes (12)</span> <span class='slop-ngram-item'>years ago (12)</span> <span class='slop-ngram-item'>says quietly (11)</span> <span class='slop-ngram-item'>last week (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzes unknown (9)</span> <span class='slop-ngram-item'>buzzes unknown number (9)</span> <span class='slop-ngram-item'>something else something (8)</span> <span class='slop-ngram-item'>three years ago (8)</span> <span class='slop-ngram-item'>phone buzzes text (5)</span> <span class='slop-ngram-item'>fuck fuck fuck (4)</span> <span class='slop-ngram-item'>hands wo stop (4)</span> <span class='slop-ngram-item'>look like shit (4)</span> <span class='slop-ngram-item'>want money want (4)</span> <span class='slop-ngram-item'>hands shake slightly (4)</span> <span class='slop-ngram-item'>like like like (4)</span> <span class='slop-ngram-item'>two weeks ago (4)</span> <span class='slop-ngram-item'>phone buzzes marcus (4)</span> <span class='slop-ngram-item'>like cold water (4)</span> <span class='slop-ngram-item'>trying look casual (3)</span> <span class='slop-ngram-item'>smells like failure (3)</span> <span class='slop-ngram-item'>sound like dying (3)</span> <span class='slop-ngram-item'>looks like every (3)</span> <span class='slop-ngram-item'>six months ago (3)</span> <span class='slop-ngram-item'>phone three missed (3)</span> <span class='slop-ngram-item'>three missed calls (3)</span> <span class='slop-ngram-item'>cigarette shaking hands (3)</span> <span class='slop-ngram-item'>phone rang unknown (3)</span> <span class='slop-ngram-item'>rang unknown number (3)</span> <span class='slop-ngram-item'>like normal person (3)</span> <span class='slop-ngram-item'>makes sound like (3)</span> <span class='slop-ngram-item'>text unknown number (3)</span> <span class='slop-ngram-item'>hands move without (3)</span> <span class='slop-ngram-item'>eyes go wide (3)</span> <span class='slop-ngram-item'>looks really looks (3)</span>
</div>

##### claude-3-7-sonnet-20250219
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.851)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.856)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.865)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.868)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.868)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>jingled</span> <span class='slop-word-item'>handholds</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>eliza</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crawlspace</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>harlow</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gareth</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>harrington</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>dani</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>grimly</span> <span class='slop-word-item'>wincing</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>elijah</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>luminescent</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>keller</span> <span class='slop-word-item'>workbench</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>methodically</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could respond (32)</span> <span class='slop-ngram-item'>could see (30)</span> <span class='slop-ngram-item'>something else (26)</span> <span class='slop-ngram-item'>said voice (26)</span> <span class='slop-ngram-item'>said quietly (24)</span> <span class='slop-ngram-item'>three years (24)</span> <span class='slop-ngram-item'>eliza said (23)</span> <span class='slop-ngram-item'>said finally (23)</span> <span class='slop-ngram-item'>something like (22)</span> <span class='slop-ngram-item'>three days (21)</span> <span class='slop-ngram-item'>first time (21)</span> <span class='slop-ngram-item'>phone buzzed (19)</span> <span class='slop-ngram-item'>eyes met (19)</span> <span class='slop-ngram-item'>last night (16)</span> <span class='slop-ngram-item'>felt like (16)</span> <span class='slop-ngram-item'>turned back (16)</span> <span class='slop-ngram-item'>looked like (16)</span> <span class='slop-ngram-item'>said simply (16)</span> <span class='slop-ngram-item'>community center (16)</span> <span class='slop-ngram-item'>voice came (16)</span> <span class='slop-ngram-item'>shook head (15)</span> <span class='slop-ngram-item'>met gaze (15)</span> <span class='slop-ngram-item'>years ago (15)</span> <span class='slop-ngram-item'>without looking (14)</span> <span class='slop-ngram-item'>said without (14)</span> <span class='slop-ngram-item'>toward door (14)</span> <span class='slop-ngram-item'>moved toward (14)</span> <span class='slop-ngram-item'>leaned forward (14)</span> <span class='slop-ngram-item'>eyes widened (12)</span> <span class='slop-ngram-item'>elena said (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes met mine (10)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>smile reach eyes (8)</span> <span class='slop-ngram-item'>three days ago (7)</span> <span class='slop-ngram-item'>like physical blow (7)</span> <span class='slop-ngram-item'>said without preamble (6)</span> <span class='slop-ngram-item'>door burst open (5)</span> <span class='slop-ngram-item'>already moving toward (5)</span> <span class='slop-ngram-item'>anyone could respond (5)</span> <span class='slop-ngram-item'>first time since (5)</span> <span class='slop-ngram-item'>dropped one knee (5)</span> <span class='slop-ngram-item'>something flickered across (5)</span> <span class='slop-ngram-item'>trying kill us (5)</span> <span class='slop-ngram-item'>expression remained neutral (5)</span> <span class='slop-ngram-item'>met gaze steadily (5)</span> <span class='slop-ngram-item'>kept expression neutral (5)</span> <span class='slop-ngram-item'>phone buzzed text (4)</span> <span class='slop-ngram-item'>days passed since (4)</span> <span class='slop-ngram-item'>expression turned serious (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>hit like physical (4)</span> <span class='slop-ngram-item'>took deep breath (4)</span> <span class='slop-ngram-item'>three years ago (4)</span> <span class='slop-ngram-item'>blood went cold (4)</span> <span class='slop-ngram-item'>voice came comm (4)</span> <span class='slop-ngram-item'>three days passed (4)</span> <span class='slop-ngram-item'>closed eyes briefly (4)</span> <span class='slop-ngram-item'>window could see (3)</span> <span class='slop-ngram-item'>trying look like (3)</span> <span class='slop-ngram-item'>said without looking (3)</span>
</div>

##### o3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>o4-mini (distance=0.744)</div>
<div class='slop-similar'>quasar-alpha (distance=0.806)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.820)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.831)</div>
<div class='slop-similar'>optimus-alpha (distance=0.832)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>strobed</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>prickled</span> <span class='slop-word-item'>sluiced</span> <span class='slop-word-item'>glimmered</span> <span class='slop-word-item'>clanged</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>vane</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>marisol</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>strobes</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>klaxons</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>quivered</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>sagged</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>thumbed</span> <span class='slop-word-item'>footfalls</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>limps</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>grimaced</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>smudged</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (28)</span> <span class='slop-ngram-item'>felt like (15)</span> <span class='slop-ngram-item'>closed eyes (15)</span> <span class='slop-ngram-item'>stepped forward (14)</span> <span class='slop-ngram-item'>voice low (14)</span> <span class='slop-ngram-item'>behind eyes (13)</span> <span class='slop-ngram-item'>duct tape (13)</span> <span class='slop-ngram-item'>phone buzzed (12)</span> <span class='slop-ngram-item'>two fingers (12)</span> <span class='slop-ngram-item'>cleared throat (12)</span> <span class='slop-ngram-item'>shook head (11)</span> <span class='slop-ngram-item'>burner phone (10)</span> <span class='slop-ngram-item'>behind us (10)</span> <span class='slop-ngram-item'>folded arms (10)</span> <span class='slop-ngram-item'>rain city (10)</span> <span class='slop-ngram-item'>eyes flicked (9)</span> <span class='slop-ngram-item'>dust motes (9)</span> <span class='slop-ngram-item'>last night (9)</span> <span class='slop-ngram-item'>smells like (9)</span> <span class='slop-ngram-item'>look like (8)</span> <span class='slop-ngram-item'>like someone (8)</span> <span class='slop-ngram-item'>could see (8)</span> <span class='slop-ngram-item'>heart hammering (8)</span> <span class='slop-ngram-item'>lights flickered (8)</span> <span class='slop-ngram-item'>long enough (8)</span> <span class='slop-ngram-item'>three minutes (8)</span> <span class='slop-ngram-item'>across floor (8)</span> <span class='slop-ngram-item'>voice cracked (8)</span> <span class='slop-ngram-item'>stepped back (8)</span> <span class='slop-ngram-item'>sounded like (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>one two three (4)</span> <span class='slop-ngram-item'>door slid open (3)</span> <span class='slop-ngram-item'>like tuning fork (3)</span> <span class='slop-ngram-item'>wiped blood lip (2)</span> <span class='slop-ngram-item'>like church bells (2)</span> <span class='slop-ngram-item'>chewed inside cheek (2)</span> <span class='slop-ngram-item'>flinched hard enough (2)</span> <span class='slop-ngram-item'>wind carried faint (2)</span> <span class='slop-ngram-item'>eased door open (2)</span> <span class='slop-ngram-item'>opened mouth closed (2)</span> <span class='slop-ngram-item'>behind one ear (2)</span> <span class='slop-ngram-item'>roof like applause (2)</span> <span class='slop-ngram-item'>eyes flicked away (2)</span> <span class='slop-ngram-item'>said voice small (2)</span> <span class='slop-ngram-item'>said either way (2)</span> <span class='slop-ngram-item'>two million views (2)</span> <span class='slop-ngram-item'>two sizes big (2)</span> <span class='slop-ngram-item'>slid phone away (2)</span> <span class='slop-ngram-item'>voice rasped like (2)</span> <span class='slop-ngram-item'>felt familiar tug (2)</span> <span class='slop-ngram-item'>looped rope around (2)</span> <span class='slop-ngram-item'>enough rattle teeth (2)</span> <span class='slop-ngram-item'>find another way (2)</span> <span class='slop-ngram-item'>revolver clattering away (2)</span> <span class='slop-ngram-item'>leaving faint bioluminescent (2)</span> <span class='slop-ngram-item'>first time hours (2)</span> <span class='slop-ngram-item'>replied without looking (2)</span> <span class='slop-ngram-item'>smile reach eyes (2)</span> <span class='slop-ngram-item'>cracked one eye (2)</span>
</div>

##### claude-sonnet-4
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-opus-4 (distance=0.804)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.856)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.886)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.887)</div>
<div class='slop-similar'>mistral-medium-3 (distance=0.888)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>vasquez</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>clench</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>chloe</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>unsteady</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>paranoia</span> <span class='slop-word-item'>who&#x27;d</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>manifests</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>holographic</span> <span class='slop-word-item'>torres</span> <span class='slop-word-item'>doorway</span> <span class='slop-word-item'>pauses</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>creature</span> <span class='slop-word-item'>desperation</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>climber</span> <span class='slop-word-item'>stitching</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>hammering</span> <span class='slop-word-item'>alien</span> <span class='slop-word-item'>gripped</span> <span class='slop-word-item'>unwelcome</span> <span class='slop-word-item'>smelled</span> <span class='slop-word-item'>documenting</span> <span class='slop-word-item'>footsteps</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could see (39)</span> <span class='slop-ngram-item'>first time (33)</span> <span class='slop-ngram-item'>three days (26)</span> <span class='slop-ngram-item'>felt like (25)</span> <span class='slop-ngram-item'>looked like (25)</span> <span class='slop-ngram-item'>something else (24)</span> <span class='slop-ngram-item'>look like (23)</span> <span class='slop-ngram-item'>said finally (21)</span> <span class='slop-ngram-item'>like someone (21)</span> <span class='slop-ngram-item'>like physical (21)</span> <span class='slop-ngram-item'>long moment (21)</span> <span class='slop-ngram-item'>elena felt (20)</span> <span class='slop-ngram-item'>someone else (20)</span> <span class='slop-ngram-item'>said quietly (20)</span> <span class='slop-ngram-item'>three weeks (19)</span> <span class='slop-ngram-item'>physical blow (19)</span> <span class='slop-ngram-item'>six months (18)</span> <span class='slop-ngram-item'>said voice (18)</span> <span class='slop-ngram-item'>director voss (18)</span> <span class='slop-ngram-item'>corporate security (17)</span> <span class='slop-ngram-item'>elena said (16)</span> <span class='slop-ngram-item'>quiet long (16)</span> <span class='slop-ngram-item'>something might (16)</span> <span class='slop-ngram-item'>two weeks (15)</span> <span class='slop-ngram-item'>phone buzzed (15)</span> <span class='slop-ngram-item'>could feel (15)</span> <span class='slop-ngram-item'>looks like (15)</span> <span class='slop-ngram-item'>three times (15)</span> <span class='slop-ngram-item'>phone buzzes (15)</span> <span class='slop-ngram-item'>every time (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like physical blow (19)</span> <span class='slop-ngram-item'>quiet long moment (13)</span> <span class='slop-ngram-item'>first time since (10)</span> <span class='slop-ngram-item'>phone buzzed text (10)</span> <span class='slop-ngram-item'>hit like physical (10)</span> <span class='slop-ngram-item'>words hit like (8)</span> <span class='slop-ngram-item'>six months ago (8)</span> <span class='slop-ngram-item'>three weeks ago (7)</span> <span class='slop-ngram-item'>tears streaming face (6)</span> <span class='slop-ngram-item'>phone buzzes text (6)</span> <span class='slop-ngram-item'>voice barely whisper (5)</span> <span class='slop-ngram-item'>heart hammering ribs (5)</span> <span class='slop-ngram-item'>question hung air (4)</span> <span class='slop-ngram-item'>seen better decades (4)</span> <span class='slop-ngram-item'>elena hands shook (4)</span> <span class='slop-ngram-item'>felt something cold (4)</span> <span class='slop-ngram-item'>takes long drag (4)</span> <span class='slop-ngram-item'>spent three years (4)</span> <span class='slop-ngram-item'>dark circles eyes (4)</span> <span class='slop-ngram-item'>hung air like (4)</span> <span class='slop-ngram-item'>air like smoke (4)</span> <span class='slop-ngram-item'>something else entirely (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>spent twenty minutes (3)</span> <span class='slop-ngram-item'>two weeks ago (3)</span> <span class='slop-ngram-item'>learned read signs (3)</span> <span class='slop-ngram-item'>two months ago (3)</span> <span class='slop-ngram-item'>stared long moment (3)</span> <span class='slop-ngram-item'>elena could feel (3)</span> <span class='slop-ngram-item'>trying tell something (3)</span>
</div>

##### chatgpt-4o-latest-2025-03-27
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>optimus-alpha (distance=0.790)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.800)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.801)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.805)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.807)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>dimmed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>scrawled</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>bloomed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>spirals</span> <span class='slop-word-item'>nightstand</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>duffel</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>curled</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>looked like (39)</span> <span class='slop-ngram-item'>stepped closer (30)</span> <span class='slop-ngram-item'>long time (26)</span> <span class='slop-ngram-item'>closed eyes (26)</span> <span class='slop-ngram-item'>stepped forward (25)</span> <span class='slop-ngram-item'>smelled like (23)</span> <span class='slop-ngram-item'>look like (22)</span> <span class='slop-ngram-item'>stepped back (22)</span> <span class='slop-ngram-item'>tilted head (21)</span> <span class='slop-ngram-item'>said voice (19)</span> <span class='slop-ngram-item'>like someone (18)</span> <span class='slop-ngram-item'>leaned back (17)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>sat beside (17)</span> <span class='slop-ngram-item'>something like (17)</span> <span class='slop-ngram-item'>one hand (17)</span> <span class='slop-ngram-item'>felt like (16)</span> <span class='slop-ngram-item'>walked away (16)</span> <span class='slop-ngram-item'>said nothing (16)</span> <span class='slop-ngram-item'>turned walked (15)</span> <span class='slop-ngram-item'>something else (15)</span> <span class='slop-ngram-item'>said softly (15)</span> <span class='slop-ngram-item'>opened eyes (15)</span> <span class='slop-ngram-item'>eyes wide (15)</span> <span class='slop-ngram-item'>sat back (15)</span> <span class='slop-ngram-item'>like something (14)</span> <span class='slop-ngram-item'>come back (14)</span> <span class='slop-ngram-item'>shook head (14)</span> <span class='slop-ngram-item'>raised eyebrow (14)</span> <span class='slop-ngram-item'>know said (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stared long time (6)</span> <span class='slop-ngram-item'>answer right away (6)</span> <span class='slop-ngram-item'>sat edge bed (6)</span> <span class='slop-ngram-item'>turned walked away (5)</span> <span class='slop-ngram-item'>door creaked open (5)</span> <span class='slop-ngram-item'>looked long moment (4)</span> <span class='slop-ngram-item'>air smelled like (4)</span> <span class='slop-ngram-item'>leaned back chair (4)</span> <span class='slop-ngram-item'>smiled reach eyes (4)</span> <span class='slop-ngram-item'>reached pocket pulled (4)</span> <span class='slop-ngram-item'>reached coat pulled (4)</span> <span class='slop-ngram-item'>stepped forward slowly (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>without another word (4)</span> <span class='slop-ngram-item'>watched long moment (4)</span> <span class='slop-ngram-item'>sun dipped low (3)</span> <span class='slop-ngram-item'>think come back (3)</span> <span class='slop-ngram-item'>bell door chimed (3)</span> <span class='slop-ngram-item'>know stepped closer (3)</span> <span class='slop-ngram-item'>smelled like dust (3)</span> <span class='slop-ngram-item'>hands folded lap (3)</span> <span class='slop-ngram-item'>felt something shift (3)</span> <span class='slop-ngram-item'>could still feel (3)</span> <span class='slop-ngram-item'>remember falling asleep (3)</span> <span class='slop-ngram-item'>return address inside (3)</span> <span class='slop-ngram-item'>single sheet paper (3)</span> <span class='slop-ngram-item'>breath caught throat (3)</span> <span class='slop-ngram-item'>like held breath (3)</span> <span class='slop-ngram-item'>two days later (3)</span> <span class='slop-ngram-item'>like knew something (3)</span>
</div>

##### gemini-2.5-flash-preview
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.746)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.754)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-2025-05-07 (distance=0.759)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.761)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.784)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>handholds</span> <span class='slop-word-item'>anya</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>revulsion</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>mused</span> <span class='slop-word-item'>sketchbook</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>sketching</span> <span class='slop-word-item'>floorboards</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (95)</span> <span class='slop-ngram-item'>felt like (60)</span> <span class='slop-ngram-item'>something else (55)</span> <span class='slop-ngram-item'>voice low (36)</span> <span class='slop-ngram-item'>living room (22)</span> <span class='slop-ngram-item'>asked voice (20)</span> <span class='slop-ngram-item'>could see (20)</span> <span class='slop-ngram-item'>eyes wide (20)</span> <span class='slop-ngram-item'>could hear (20)</span> <span class='slop-ngram-item'>looked like (18)</span> <span class='slop-ngram-item'>felt different (17)</span> <span class='slop-ngram-item'>else something (16)</span> <span class='slop-ngram-item'>back towards (14)</span> <span class='slop-ngram-item'>ran hand (13)</span> <span class='slop-ngram-item'>hand hair (13)</span> <span class='slop-ngram-item'>hung air (13)</span> <span class='slop-ngram-item'>long time (12)</span> <span class='slop-ngram-item'>voice flat (12)</span> <span class='slop-ngram-item'>looked around (12)</span> <span class='slop-ngram-item'>said trying (12)</span> <span class='slop-ngram-item'>silence stretched (12)</span> <span class='slop-ngram-item'>rex said (12)</span> <span class='slop-ngram-item'>quiet life (12)</span> <span class='slop-ngram-item'>rhys said (12)</span> <span class='slop-ngram-item'>air around (11)</span> <span class='slop-ngram-item'>breath hitched (11)</span> <span class='slop-ngram-item'>shook head (11)</span> <span class='slop-ngram-item'>energy signature (11)</span> <span class='slop-ngram-item'>grey eyes (11)</span> <span class='slop-ngram-item'>almost imperceptible (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (22)</span> <span class='slop-ngram-item'>something else something (16)</span> <span class='slop-ngram-item'>ran hand hair (10)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>heart hammered ribs (8)</span> <span class='slop-ngram-item'>said voice flat (7)</span> <span class='slop-ngram-item'>choosing words carefully (6)</span> <span class='slop-ngram-item'>silence stretched thick (6)</span> <span class='slop-ngram-item'>voice barely whisper (5)</span> <span class='slop-ngram-item'>reached pocket pulled (5)</span> <span class='slop-ngram-item'>said voice quiet (5)</span> <span class='slop-ngram-item'>felt like eternity (5)</span> <span class='slop-ngram-item'>blood ran cold (5)</span> <span class='slop-ngram-item'>took deep breath (5)</span> <span class='slop-ngram-item'>rhys said voice (5)</span> <span class='slop-ngram-item'>question hung air (5)</span> <span class='slop-ngram-item'>city lights blurring (4)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>brow furrowed concentration (4)</span> <span class='slop-ngram-item'>felt less like (4)</span> <span class='slop-ngram-item'>trying sound casual (4)</span> <span class='slop-ngram-item'>hesitated fraction second (4)</span> <span class='slop-ngram-item'>spent next hours (4)</span> <span class='slop-ngram-item'>silent long moment (4)</span> <span class='slop-ngram-item'>sarah said voice (4)</span> <span class='slop-ngram-item'>eyes widened slightly (4)</span> <span class='slop-ngram-item'>heart hammering ribs (4)</span> <span class='slop-ngram-item'>knew chilling certainty (4)</span> <span class='slop-ngram-item'>said voice soft (4)</span> <span class='slop-ngram-item'>two days left (4)</span>
</div>

##### optimus-alpha
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1 (distance=0.672)</div>
<div class='slop-similar'>quasar-alpha (distance=0.780)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.790)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.793)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.816)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>busied</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crawlspace</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unkindly</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>emptier</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>shrugs</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>pritchard</span> <span class='slop-word-item'>sneaker</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>mismatched</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>motioned</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>bristled</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>barked</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>shuddered</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shook head (44)</span> <span class='slop-ngram-item'>said voice (29)</span> <span class='slop-ngram-item'>first time (27)</span> <span class='slop-ngram-item'>voice low (26)</span> <span class='slop-ngram-item'>closed eyes (20)</span> <span class='slop-ngram-item'>heart pounding (20)</span> <span class='slop-ngram-item'>shakes head (20)</span> <span class='slop-ngram-item'>eyes wide (19)</span> <span class='slop-ngram-item'>something like (18)</span> <span class='slop-ngram-item'>air thick (18)</span> <span class='slop-ngram-item'>last night (18)</span> <span class='slop-ngram-item'>let go (17)</span> <span class='slop-ngram-item'>says voice (15)</span> <span class='slop-ngram-item'>looked away (15)</span> <span class='slop-ngram-item'>something else (14)</span> <span class='slop-ngram-item'>living room (14)</span> <span class='slop-ngram-item'>close eyes (14)</span> <span class='slop-ngram-item'>felt like (13)</span> <span class='slop-ngram-item'>every time (13)</span> <span class='slop-ngram-item'>come back (13)</span> <span class='slop-ngram-item'>stepped forward (12)</span> <span class='slop-ngram-item'>feels like (12)</span> <span class='slop-ngram-item'>long time (12)</span> <span class='slop-ngram-item'>met gaze (12)</span> <span class='slop-ngram-item'>someone else (12)</span> <span class='slop-ngram-item'>hands shaking (12)</span> <span class='slop-ngram-item'>alex says (12)</span> <span class='slop-ngram-item'>feel like (11)</span> <span class='slop-ngram-item'>look like (11)</span> <span class='slop-ngram-item'>eyes narrowed (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>door creaked open (5)</span> <span class='slop-ngram-item'>first time long (4)</span> <span class='slop-ngram-item'>whatever comes next (4)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>eyes never leaving (4)</span> <span class='slop-ngram-item'>arms wrapped around (4)</span> <span class='slop-ngram-item'>pressed finger lips (4)</span> <span class='slop-ngram-item'>running hand hair (4)</span> <span class='slop-ngram-item'>closed eyes letting (4)</span> <span class='slop-ngram-item'>first time since (4)</span> <span class='slop-ngram-item'>nodded trusting speak (4)</span> <span class='slop-ngram-item'>hands jammed pockets (3)</span> <span class='slop-ngram-item'>air thick smell (3)</span> <span class='slop-ngram-item'>sits edge bed (3)</span> <span class='slop-ngram-item'>managed weak smile (3)</span> <span class='slop-ngram-item'>remember last time (3)</span> <span class='slop-ngram-item'>inside air thick (3)</span> <span class='slop-ngram-item'>voice low urgent (3)</span> <span class='slop-ngram-item'>ever get tired (3)</span> <span class='slop-ngram-item'>lips moving silently (3)</span> <span class='slop-ngram-item'>let slow breath (3)</span> <span class='slop-ngram-item'>closer lowering voice (3)</span> <span class='slop-ngram-item'>like something waiting (2)</span> <span class='slop-ngram-item'>something else like (2)</span> <span class='slop-ngram-item'>dropped onto bench (2)</span> <span class='slop-ngram-item'>leaned dropping voice (2)</span> <span class='slop-ngram-item'>world sharpened colors (2)</span> <span class='slop-ngram-item'>said voice clipped (2)</span> <span class='slop-ngram-item'>soft almost gentle (2)</span>
</div>

##### gemini-2.5-pro-preview-2025-05-07
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.735)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.759)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.760)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.785)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.806)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>varrick</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>marrows</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>petunias</span> <span class='slop-word-item'>anya</span> <span class='slop-word-item'>wilting</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>petunia</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>rourke</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>hawthorne</span> <span class='slop-word-item'>finn</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>zippo</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>dawning</span> <span class='slop-word-item'>furrowed</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (74)</span> <span class='slop-ngram-item'>felt like (33)</span> <span class='slop-ngram-item'>looked like (25)</span> <span class='slop-ngram-item'>something else (24)</span> <span class='slop-ngram-item'>eyes wide (22)</span> <span class='slop-ngram-item'>dim light (17)</span> <span class='slop-ngram-item'>voice low (17)</span> <span class='slop-ngram-item'>almost imperceptible (16)</span> <span class='slop-ngram-item'>voice tight (16)</span> <span class='slop-ngram-item'>face pale (15)</span> <span class='slop-ngram-item'>carefully constructed (15)</span> <span class='slop-ngram-item'>anya sharma (14)</span> <span class='slop-ngram-item'>could feel (14)</span> <span class='slop-ngram-item'>playing lips (13)</span> <span class='slop-ngram-item'>voice flat (13)</span> <span class='slop-ngram-item'>asked voice (13)</span> <span class='slop-ngram-item'>smile touched (13)</span> <span class='slop-ngram-item'>smile playing (12)</span> <span class='slop-ngram-item'>cold dread (12)</span> <span class='slop-ngram-item'>voice barely (12)</span> <span class='slop-ngram-item'>first time (12)</span> <span class='slop-ngram-item'>whispered voice (12)</span> <span class='slop-ngram-item'>fire escape (11)</span> <span class='slop-ngram-item'>flicker something (11)</span> <span class='slop-ngram-item'>aris thorne (11)</span> <span class='slop-ngram-item'>else something (11)</span> <span class='slop-ngram-item'>face mask (11)</span> <span class='slop-ngram-item'>sound like (10)</span> <span class='slop-ngram-item'>looks like (10)</span> <span class='slop-ngram-item'>turned back (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile playing lips (12)</span> <span class='slop-ngram-item'>something else something (11)</span> <span class='slop-ngram-item'>voice barely whisper (10)</span> <span class='slop-ngram-item'>smile touched lips (9)</span> <span class='slop-ngram-item'>said voice flat (8)</span> <span class='slop-ngram-item'>said voice quiet (6)</span> <span class='slop-ngram-item'>faint almost imperceptible (5)</span> <span class='slop-ngram-item'>felt strange sense (5)</span> <span class='slop-ngram-item'>said voice tight (5)</span> <span class='slop-ngram-item'>looked suspiciously like (4)</span> <span class='slop-ngram-item'>said voice dropping (4)</span> <span class='slop-ngram-item'>felt cold dread (4)</span> <span class='slop-ngram-item'>spreading across face (4)</span> <span class='slop-ngram-item'>tiny almost imperceptible (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>said voice barely (4)</span> <span class='slop-ngram-item'>chapter taste ash (4)</span> <span class='slop-ngram-item'>ran hand hair (4)</span> <span class='slop-ngram-item'>face pale eyes (4)</span> <span class='slop-ngram-item'>gave curt nod (3)</span> <span class='slop-ngram-item'>hand flying mouth (3)</span> <span class='slop-ngram-item'>kept voice even (3)</span> <span class='slop-ngram-item'>cold dread seeping (3)</span> <span class='slop-ngram-item'>felt less like (3)</span> <span class='slop-ngram-item'>anya asked voice (3)</span> <span class='slop-ngram-item'>something else entirely (3)</span> <span class='slop-ngram-item'>faint metallic tang (3)</span> <span class='slop-ngram-item'>tear escaping tracing (3)</span> <span class='slop-ngram-item'>escaping tracing path (3)</span> <span class='slop-ngram-item'>sounded suspiciously like (3)</span>
</div>

##### gpt-4.1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>optimus-alpha (distance=0.672)</div>
<div class='slop-similar'>quasar-alpha (distance=0.775)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.786)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.800)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.813)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>prickling</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>tingled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>busied</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>thumbed</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>rueful</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>pursed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>jamie</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>glared</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>biro</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>squinting</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>thundered</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>hovered</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shook head (65)</span> <span class='slop-ngram-item'>first time (38)</span> <span class='slop-ngram-item'>said voice (33)</span> <span class='slop-ngram-item'>heart pounding (24)</span> <span class='slop-ngram-item'>voice low (24)</span> <span class='slop-ngram-item'>eyes wide (23)</span> <span class='slop-ngram-item'>last night (19)</span> <span class='slop-ngram-item'>let go (19)</span> <span class='slop-ngram-item'>jamie looked (16)</span> <span class='slop-ngram-item'>closed eyes (15)</span> <span class='slop-ngram-item'>air thick (14)</span> <span class='slop-ngram-item'>look like (14)</span> <span class='slop-ngram-item'>felt like (14)</span> <span class='slop-ngram-item'>someone else (14)</span> <span class='slop-ngram-item'>met gaze (14)</span> <span class='slop-ngram-item'>heart hammering (13)</span> <span class='slop-ngram-item'>rolled eyes (13)</span> <span class='slop-ngram-item'>squeezed hand (13)</span> <span class='slop-ngram-item'>hands shaking (13)</span> <span class='slop-ngram-item'>mara said (13)</span> <span class='slop-ngram-item'>world outside (13)</span> <span class='slop-ngram-item'>voice steady (12)</span> <span class='slop-ngram-item'>looked like (12)</span> <span class='slop-ngram-item'>last time (12)</span> <span class='slop-ngram-item'>maybe maybe (12)</span> <span class='slop-ngram-item'>shakes head (12)</span> <span class='slop-ngram-item'>jaw clenched (11)</span> <span class='slop-ngram-item'>eyes narrowed (11)</span> <span class='slop-ngram-item'>something else (11)</span> <span class='slop-ngram-item'>face pale (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>jamie shook head (6)</span> <span class='slop-ngram-item'>one last time (5)</span> <span class='slop-ngram-item'>takes one know (5)</span> <span class='slop-ngram-item'>remember last time (5)</span> <span class='slop-ngram-item'>let shaky breath (5)</span> <span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>looked really looked (5)</span> <span class='slop-ngram-item'>ever think leaving (5)</span> <span class='slop-ngram-item'>closed eyes letting (4)</span> <span class='slop-ngram-item'>nodded swallowing hard (4)</span> <span class='slop-ngram-item'>hair wild eyes (4)</span> <span class='slop-ngram-item'>voice barely whisper (4)</span> <span class='slop-ngram-item'>uncertain first time (4)</span> <span class='slop-ngram-item'>broke silence first (4)</span> <span class='slop-ngram-item'>keep voice steady (3)</span> <span class='slop-ngram-item'>like owned place (3)</span> <span class='slop-ngram-item'>first time ages (3)</span> <span class='slop-ngram-item'>stepped forward voice (3)</span> <span class='slop-ngram-item'>face pale eyes (3)</span> <span class='slop-ngram-item'>mara shook head (3)</span> <span class='slop-ngram-item'>inside air thick (3)</span> <span class='slop-ngram-item'>hands stop shaking (3)</span> <span class='slop-ngram-item'>first time feel (3)</span> <span class='slop-ngram-item'>morning wake find (3)</span> <span class='slop-ngram-item'>shakes head think (3)</span> <span class='slop-ngram-item'>arms wrapped around (3)</span> <span class='slop-ngram-item'>hands jammed pockets (3)</span> <span class='slop-ngram-item'>one left behind (3)</span> <span class='slop-ngram-item'>ran hand hair (3)</span> <span class='slop-ngram-item'>eyes never leaving (3)</span>
</div>

##### deepseek-ai/DeepSeek-R1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.712)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b (distance=0.736)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.752)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.755)</div>
<div class='slop-similar'>quasar-alpha (distance=0.812)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>holoscreen</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>jangled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>selene</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>screeched</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>panted</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>writhed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glitching</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>detonator</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>streaked</span> <span class='slop-word-item'>palmed</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (38)</span> <span class='slop-ngram-item'>count note (23)</span> <span class='slop-ngram-item'>phone buzzed (16)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>would expand (15)</span> <span class='slop-ngram-item'>chapter would (15)</span> <span class='slop-ngram-item'>words chapter (13)</span> <span class='slop-ngram-item'>throat tightened (10)</span> <span class='slop-ngram-item'>bell jangled (10)</span> <span class='slop-ngram-item'>library window (9)</span> <span class='slop-ngram-item'>lila said (9)</span> <span class='slop-ngram-item'>reach words (9)</span> <span class='slop-ngram-item'>pressed palm (8)</span> <span class='slop-ngram-item'>glowed faintly (8)</span> <span class='slop-ngram-item'>voice cracked (8)</span> <span class='slop-ngram-item'>breath hitched (8)</span> <span class='slop-ngram-item'>six months (8)</span> <span class='slop-ngram-item'>stood doorway (8)</span> <span class='slop-ngram-item'>reach eyes (7)</span> <span class='slop-ngram-item'>arms crossed (7)</span> <span class='slop-ngram-item'>toward exit (7)</span> <span class='slop-ngram-item'>pressed forehead (7)</span> <span class='slop-ngram-item'>glowing like (7)</span> <span class='slop-ngram-item'>outside rain (7)</span> <span class='slop-ngram-item'>hands shook (7)</span> <span class='slop-ngram-item'>stepped forward (7)</span> <span class='slop-ngram-item'>kael said (7)</span> <span class='slop-ngram-item'>kael spat (7)</span> <span class='slop-ngram-item'>said quietly (7)</span> <span class='slop-ngram-item'>smelled like (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count note (23)</span> <span class='slop-ngram-item'>words chapter would (13)</span> <span class='slop-ngram-item'>chapter would expand (8)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>phone buzzed unknown (5)</span> <span class='slop-ngram-item'>buzzed unknown number (5)</span> <span class='slop-ngram-item'>laugh broken thing (3)</span> <span class='slop-ngram-item'>look like hell (3)</span> <span class='slop-ngram-item'>emergency lights bathed (3)</span> <span class='slop-ngram-item'>tears cutting grime (3)</span> <span class='slop-ngram-item'>air reeked burnt (3)</span> <span class='slop-ngram-item'>count note chapter (3)</span> <span class='slop-ngram-item'>tasted like ash (3)</span> <span class='slop-ngram-item'>snapped book shut (3)</span> <span class='slop-ngram-item'>whispered voice like (2)</span> <span class='slop-ngram-item'>jerked back heart (2)</span> <span class='slop-ngram-item'>laughed sound like (2)</span> <span class='slop-ngram-item'>casting jagged shadows (2)</span> <span class='slop-ngram-item'>smelled like burning (2)</span> <span class='slop-ngram-item'>fingers danced across (2)</span> <span class='slop-ngram-item'>name hung like (2)</span> <span class='slop-ngram-item'>go home move (2)</span> <span class='slop-ngram-item'>split like overripe (2)</span> <span class='slop-ngram-item'>like overripe fruit (2)</span> <span class='slop-ngram-item'>first time years (2)</span> <span class='slop-ngram-item'>rain lashed windows (2)</span> <span class='slop-ngram-item'>shards skittered across (2)</span> <span class='slop-ngram-item'>count note condensed (2)</span> <span class='slop-ngram-item'>count note expanded (2)</span> <span class='slop-ngram-item'>note expanded words (2)</span>
</div>

##### grok-3-beta
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>quasar-alpha (distance=0.797)</div>
<div class='slop-similar'>grok-3-mini-beta (distance=0.819)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.830)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.831)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.834)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rasped</span> <span class='slop-word-item'>fidgeted</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hunching</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>slouched</span> <span class='slop-word-item'>fidgeting</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>whimpered</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>unbidden</span> <span class='slop-word-item'>churned</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>scuffing</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>nearness</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>dented</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>rawness</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>sigil</span> <span class='slop-word-item'>unease</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>hazel eyes (63)</span> <span class='slop-ngram-item'>voice low (58)</span> <span class='slop-ngram-item'>gray eyes (40)</span> <span class='slop-ngram-item'>bad idea (35)</span> <span class='slop-ngram-item'>felt like (29)</span> <span class='slop-ngram-item'>got ta (28)</span> <span class='slop-ngram-item'>said voice (27)</span> <span class='slop-ngram-item'>last night (26)</span> <span class='slop-ngram-item'>gon na (25)</span> <span class='slop-ngram-item'>wan na (25)</span> <span class='slop-ngram-item'>barely audible (25)</span> <span class='slop-ngram-item'>jaw clenched (22)</span> <span class='slop-ngram-item'>voice rough (20)</span> <span class='slop-ngram-item'>voice cracked (19)</span> <span class='slop-ngram-item'>hands fidgeting (17)</span> <span class='slop-ngram-item'>turned away (17)</span> <span class='slop-ngram-item'>eyes wide (17)</span> <span class='slop-ngram-item'>jaw tightened (16)</span> <span class='slop-ngram-item'>eyes scanning (15)</span> <span class='slop-ngram-item'>broad frame (15)</span> <span class='slop-ngram-item'>air thick (15)</span> <span class='slop-ngram-item'>dark hair (15)</span> <span class='slop-ngram-item'>hands trembling (15)</span> <span class='slop-ngram-item'>leather jacket (15)</span> <span class='slop-ngram-item'>eyes narrowing (15)</span> <span class='slop-ngram-item'>gut twisted (15)</span> <span class='slop-ngram-item'>brown eyes (15)</span> <span class='slop-ngram-item'>split second (14)</span> <span class='slop-ngram-item'>felt weight (14)</span> <span class='slop-ngram-item'>dark eyes (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>gray eyes unblinking (9)</span> <span class='slop-ngram-item'>rubbed back neck (8)</span> <span class='slop-ngram-item'>growled voice rough (8)</span> <span class='slop-ngram-item'>voice low almost (7)</span> <span class='slop-ngram-item'>hands trembling clutched (6)</span> <span class='slop-ngram-item'>broad frame tense (6)</span> <span class='slop-ngram-item'>hand hovered near (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>heart slammed ribs (5)</span> <span class='slop-ngram-item'>voice cracked raw (5)</span> <span class='slop-ngram-item'>frame tense dark (5)</span> <span class='slop-ngram-item'>voice low raw (5)</span> <span class='slop-ngram-item'>low almost lost (5)</span> <span class='slop-ngram-item'>coin ghost cold (5)</span> <span class='slop-ngram-item'>air thick dust (4)</span> <span class='slop-ngram-item'>hands gesturing wildly (4)</span> <span class='slop-ngram-item'>door creaked open (4)</span> <span class='slop-ngram-item'>whispered voice raw (4)</span> <span class='slop-ngram-item'>words felt hollow (4)</span> <span class='slop-ngram-item'>muttered finally voice (4)</span> <span class='slop-ngram-item'>muttered voice low (4)</span> <span class='slop-ngram-item'>made skin crawl (4)</span> <span class='slop-ngram-item'>freckled face pale (4)</span> <span class='slop-ngram-item'>casting long shadows (4)</span> <span class='slop-ngram-item'>wan na see (4)</span> <span class='slop-ngram-item'>hazel eyes scanning (4)</span> <span class='slop-ngram-item'>jerked head toward (4)</span> <span class='slop-ngram-item'>chill seeping bones (4)</span> <span class='slop-ngram-item'>hazel eyes hard (4)</span> <span class='slop-ngram-item'>hazel eyes scanned (4)</span>
</div>

##### google/gemini-2.5-flash-preview-05-20
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-preview-2025-05-07 (distance=0.735)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.761)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.784)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.787)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.804)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>swiveled</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>crawler</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>chitin</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>grav</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>drumbeat</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (56)</span> <span class='slop-ngram-item'>something else (41)</span> <span class='slop-ngram-item'>voice low (40)</span> <span class='slop-ngram-item'>felt like (36)</span> <span class='slop-ngram-item'>almost imperceptible (33)</span> <span class='slop-ngram-item'>living room (31)</span> <span class='slop-ngram-item'>whispered voice (28)</span> <span class='slop-ngram-item'>eyes wide (27)</span> <span class='slop-ngram-item'>first time (22)</span> <span class='slop-ngram-item'>asked voice (21)</span> <span class='slop-ngram-item'>could feel (20)</span> <span class='slop-ngram-item'>flicker something (17)</span> <span class='slop-ngram-item'>voice flat (17)</span> <span class='slop-ngram-item'>faint almost (16)</span> <span class='slop-ngram-item'>voice barely (16)</span> <span class='slop-ngram-item'>gaze fixed (16)</span> <span class='slop-ngram-item'>voice raw (16)</span> <span class='slop-ngram-item'>clock tower (16)</span> <span class='slop-ngram-item'>grey eyes (15)</span> <span class='slop-ngram-item'>energy signature (14)</span> <span class='slop-ngram-item'>face mask (13)</span> <span class='slop-ngram-item'>eyes usually (13)</span> <span class='slop-ngram-item'>less like (13)</span> <span class='slop-ngram-item'>looked like (12)</span> <span class='slop-ngram-item'>face grim (12)</span> <span class='slop-ngram-item'>dim light (12)</span> <span class='slop-ngram-item'>metallic tang (12)</span> <span class='slop-ngram-item'>old man (11)</span> <span class='slop-ngram-item'>next days (11)</span> <span class='slop-ngram-item'>air grew (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>faint almost imperceptible (11)</span> <span class='slop-ngram-item'>something else something (11)</span> <span class='slop-ngram-item'>said voice flat (9)</span> <span class='slop-ngram-item'>took deep breath (8)</span> <span class='slop-ngram-item'>voice barely audible (8)</span> <span class='slop-ngram-item'>smile touching lips (7)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>fingers flying across (7)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>old clock tower (6)</span> <span class='slop-ngram-item'>felt less like (6)</span> <span class='slop-ngram-item'>vance said voice (6)</span> <span class='slop-ngram-item'>voice low rumble (6)</span> <span class='slop-ngram-item'>flying across console (6)</span> <span class='slop-ngram-item'>heart hammered ribs (6)</span> <span class='slop-ngram-item'>said voice firm (5)</span> <span class='slop-ngram-item'>asked voice low (5)</span> <span class='slop-ngram-item'>brow furrowed concentration (5)</span> <span class='slop-ngram-item'>felt like eternity (5)</span> <span class='slop-ngram-item'>whispered voice barely (5)</span> <span class='slop-ngram-item'>breath coming ragged (5)</span> <span class='slop-ngram-item'>spent next days (4)</span> <span class='slop-ngram-item'>asked voice barely (4)</span> <span class='slop-ngram-item'>ran hand hair (4)</span> <span class='slop-ngram-item'>said voice quiet (4)</span> <span class='slop-ngram-item'>running hand hair (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>squeezed eyes shut (4)</span> <span class='slop-ngram-item'>air grew heavier (4)</span>
</div>

##### quasar-alpha
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1 (distance=0.775)</div>
<div class='slop-similar'>optimus-alpha (distance=0.780)</div>
<div class='slop-similar'>grok-3-beta (distance=0.797)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.802)</div>
<div class='slop-similar'>o3 (distance=0.806)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>prickled</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>crookedly</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>whimpered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>sagged</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>barked</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>scowled</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>shakily</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>streaked</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>hoarse</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>battered</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>stiffly</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shook head (52)</span> <span class='slop-ngram-item'>closed eyes (51)</span> <span class='slop-ngram-item'>said quietly (48)</span> <span class='slop-ngram-item'>heart pounding (41)</span> <span class='slop-ngram-item'>looked away (41)</span> <span class='slop-ngram-item'>voice rough (41)</span> <span class='slop-ngram-item'>said softly (40)</span> <span class='slop-ngram-item'>first time (37)</span> <span class='slop-ngram-item'>jaw clenched (36)</span> <span class='slop-ngram-item'>swallowed hard (34)</span> <span class='slop-ngram-item'>unknown number (28)</span> <span class='slop-ngram-item'>felt like (24)</span> <span class='slop-ngram-item'>throat tightened (23)</span> <span class='slop-ngram-item'>eyes wide (23)</span> <span class='slop-ngram-item'>voice raw (23)</span> <span class='slop-ngram-item'>said voice (22)</span> <span class='slop-ngram-item'>voice cracked (21)</span> <span class='slop-ngram-item'>voice trembling (21)</span> <span class='slop-ngram-item'>phone buzzed (20)</span> <span class='slop-ngram-item'>face twisted (20)</span> <span class='slop-ngram-item'>gon na (20)</span> <span class='slop-ngram-item'>met gaze (20)</span> <span class='slop-ngram-item'>last night (19)</span> <span class='slop-ngram-item'>maybe maybe (18)</span> <span class='slop-ngram-item'>pressed forehead (18)</span> <span class='slop-ngram-item'>throat tight (18)</span> <span class='slop-ngram-item'>heart hammering (17)</span> <span class='slop-ngram-item'>feels like (17)</span> <span class='slop-ngram-item'>voice hoarse (17)</span> <span class='slop-ngram-item'>nodded slowly (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (10)</span> <span class='slop-ngram-item'>nodded throat tight (8)</span> <span class='slop-ngram-item'>looked away jaw (6)</span> <span class='slop-ngram-item'>barked bitter laugh (6)</span> <span class='slop-ngram-item'>closed eyes feeling (6)</span> <span class='slop-ngram-item'>one last time (6)</span> <span class='slop-ngram-item'>moment neither spoke (6)</span> <span class='slop-ngram-item'>let shaky breath (5)</span> <span class='slop-ngram-item'>every instinct screamed (5)</span> <span class='slop-ngram-item'>stepped closer voice (5)</span> <span class='slop-ngram-item'>squeezed eyes shut (5)</span> <span class='slop-ngram-item'>wrapped tight around (5)</span> <span class='slop-ngram-item'>looked away voice (5)</span> <span class='slop-ngram-item'>back heart pounding (4)</span> <span class='slop-ngram-item'>sharp broken glass (4)</span> <span class='slop-ngram-item'>managed crooked smile (4)</span> <span class='slop-ngram-item'>wiped blood lip (4)</span> <span class='slop-ngram-item'>pressed forehead cold (4)</span> <span class='slop-ngram-item'>pressed palm chest (4)</span> <span class='slop-ngram-item'>pressed palm flat (4)</span> <span class='slop-ngram-item'>said quietly maybe (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>something dangerously close (4)</span> <span class='slop-ngram-item'>jaw clenched tight (4)</span> <span class='slop-ngram-item'>nodded voice rough (4)</span> <span class='slop-ngram-item'>first time long (4)</span> <span class='slop-ngram-item'>whole body trembled (4)</span> <span class='slop-ngram-item'>arms wrapped tight (4)</span> <span class='slop-ngram-item'>shook head voice (4)</span> <span class='slop-ngram-item'>barked humorless laugh (3)</span>
</div>

##### o4-mini
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>o3 (distance=0.744)</div>
<div class='slop-similar'>quasar-alpha (distance=0.809)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.815)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.817)</div>
<div class='slop-similar'>optimus-alpha (distance=0.823)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>datapad</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>clanged</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>sputters</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>wheezed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>panted</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>lanced</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>footstep</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>satchel</span> <span class='slop-word-item'>duffel</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>crouches</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>croaked</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (66)</span> <span class='slop-ngram-item'>voice low (45)</span> <span class='slop-ngram-item'>closed eyes (39)</span> <span class='slop-ngram-item'>shook head (24)</span> <span class='slop-ngram-item'>cleared throat (23)</span> <span class='slop-ngram-item'>stepped forward (22)</span> <span class='slop-ngram-item'>one hand (22)</span> <span class='slop-ngram-item'>breath caught (20)</span> <span class='slop-ngram-item'>voice soft (20)</span> <span class='slop-ngram-item'>eyes wide (19)</span> <span class='slop-ngram-item'>felt like (19)</span> <span class='slop-ngram-item'>chest tightened (18)</span> <span class='slop-ngram-item'>pressed palm (17)</span> <span class='slop-ngram-item'>eyes flicked (17)</span> <span class='slop-ngram-item'>crouched beside (15)</span> <span class='slop-ngram-item'>leaned forward (14)</span> <span class='slop-ngram-item'>voice cracked (14)</span> <span class='slop-ngram-item'>last night (14)</span> <span class='slop-ngram-item'>squared shoulders (13)</span> <span class='slop-ngram-item'>air smelled (13)</span> <span class='slop-ngram-item'>first time (13)</span> <span class='slop-ngram-item'>jaw clenched (13)</span> <span class='slop-ngram-item'>folded arms (13)</span> <span class='slop-ngram-item'>heart hammering (13)</span> <span class='slop-ngram-item'>whispered voice (12)</span> <span class='slop-ngram-item'>voice tight (12)</span> <span class='slop-ngram-item'>night air (11)</span> <span class='slop-ngram-item'>gloved hand (11)</span> <span class='slop-ngram-item'>pressed back (11)</span> <span class='slop-ngram-item'>one arm (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (20)</span> <span class='slop-ngram-item'>could almost hear (5)</span> <span class='slop-ngram-item'>hair behind ear (4)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>like living thing (4)</span> <span class='slop-ngram-item'>wiped sweat brow (4)</span> <span class='slop-ngram-item'>pressed finger lips (4)</span> <span class='slop-ngram-item'>said voice soft (4)</span> <span class='slop-ngram-item'>inside air smelled (3)</span> <span class='slop-ngram-item'>whispered voice tight (3)</span> <span class='slop-ngram-item'>strand hair behind (3)</span> <span class='slop-ngram-item'>knuckles whitened around (3)</span> <span class='slop-ngram-item'>hung air like (3)</span> <span class='slop-ngram-item'>heart lodged throat (3)</span> <span class='slop-ngram-item'>dawn pale light (3)</span> <span class='slop-ngram-item'>read aloud voice (3)</span> <span class='slop-ngram-item'>pressed lips together (3)</span> <span class='slop-ngram-item'>whispered voice quivering (3)</span> <span class='slop-ngram-item'>drew slow breath (3)</span> <span class='slop-ngram-item'>took step closer (3)</span> <span class='slop-ngram-item'>dust motes drifting (3)</span> <span class='slop-ngram-item'>mud sucked boots (3)</span> <span class='slop-ngram-item'>sparks flew metal (3)</span> <span class='slop-ngram-item'>inside air thick (3)</span> <span class='slop-ngram-item'>said voice smooth (3)</span> <span class='slop-ngram-item'>asked voice low (2)</span> <span class='slop-ngram-item'>stared expression unreadable (2)</span> <span class='slop-ngram-item'>inside boots leaving (2)</span> <span class='slop-ngram-item'>said without looking (2)</span> <span class='slop-ngram-item'>said voice brittle (2)</span>
</div>

##### qwen/qwen3-235b-a22b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.732)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.736)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.770)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.783)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.805)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>arrhythmic</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>idled</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>blistered</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>hunched</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (56)</span> <span class='slop-ngram-item'>stepped closer (26)</span> <span class='slop-ngram-item'>smelled like (21)</span> <span class='slop-ngram-item'>jaw tightened (21)</span> <span class='slop-ngram-item'>glowed faintly (20)</span> <span class='slop-ngram-item'>knelt beside (20)</span> <span class='slop-ngram-item'>voice cracked (19)</span> <span class='slop-ngram-item'>throat tightened (18)</span> <span class='slop-ngram-item'>hands shook (18)</span> <span class='slop-ngram-item'>glowed brighter (18)</span> <span class='slop-ngram-item'>outside wind (18)</span> <span class='slop-ngram-item'>phone buzzed (17)</span> <span class='slop-ngram-item'>said voice (17)</span> <span class='slop-ngram-item'>voice low (16)</span> <span class='slop-ngram-item'>sound like (15)</span> <span class='slop-ngram-item'>stomach churned (15)</span> <span class='slop-ngram-item'>voice crackled (15)</span> <span class='slop-ngram-item'>stepped forward (14)</span> <span class='slop-ngram-item'>breath hitched (14)</span> <span class='slop-ngram-item'>glowing faintly (14)</span> <span class='slop-ngram-item'>like dying (14)</span> <span class='slop-ngram-item'>voice dropped (14)</span> <span class='slop-ngram-item'>gon na (14)</span> <span class='slop-ngram-item'>fingers brushing (13)</span> <span class='slop-ngram-item'>breath fogging (12)</span> <span class='slop-ngram-item'>gloved hand (12)</span> <span class='slop-ngram-item'>alex said (11)</span> <span class='slop-ngram-item'>grabbed wrist (11)</span> <span class='slop-ngram-item'>leaned closer (11)</span> <span class='slop-ngram-item'>hands trembled (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>alex throat tightened (7)</span> <span class='slop-ngram-item'>like live coal (6)</span> <span class='slop-ngram-item'>laugh cracked like (6)</span> <span class='slop-ngram-item'>said voice flat (6)</span> <span class='slop-ngram-item'>door creaked open (6)</span> <span class='slop-ngram-item'>cracked like dry (6)</span> <span class='slop-ngram-item'>glowing faintly dark (6)</span> <span class='slop-ngram-item'>inside air smelled (5)</span> <span class='slop-ngram-item'>gloved hands trembling (5)</span> <span class='slop-ngram-item'>head snapped toward (5)</span> <span class='slop-ngram-item'>stepped closer voice (5)</span> <span class='slop-ngram-item'>rain kept falling (5)</span> <span class='slop-ngram-item'>hand closed around (5)</span> <span class='slop-ngram-item'>arthur jaw tightened (5)</span> <span class='slop-ngram-item'>door exploded inward (4)</span> <span class='slop-ngram-item'>cigarette flame trembling (4)</span> <span class='slop-ngram-item'>voice crackled radio (4)</span> <span class='slop-ngram-item'>pupils blown wide (4)</span> <span class='slop-ngram-item'>smelled like burnt (4)</span> <span class='slop-ngram-item'>mara throat tightened (4)</span> <span class='slop-ngram-item'>grabbed wrist yanking (4)</span> <span class='slop-ngram-item'>gloved fingers brushing (4)</span> <span class='slop-ngram-item'>closer voice low (4)</span> <span class='slop-ngram-item'>silence stretched thick (4)</span> <span class='slop-ngram-item'>shimmered faintly like (3)</span> <span class='slop-ngram-item'>alex breath hitched (3)</span> <span class='slop-ngram-item'>fingers twitching like (3)</span> <span class='slop-ngram-item'>door hissed open (3)</span> <span class='slop-ngram-item'>coughed wet rattle (3)</span> <span class='slop-ngram-item'>back word count (3)</span>
</div>

##### sam-paech/gemma-3-27b-it-antislop-exp19
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.775)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.813)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.827)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.836)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.839)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>husk</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>cataloguing</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>finch</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>modulating</span> <span class='slop-word-item'>sketching</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>scalpel</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>vastness</span> <span class='slop-word-item'>predictably</span> <span class='slop-word-item'>waveform</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>barked</span> <span class='slop-word-item'>pointedly</span> <span class='slop-word-item'>vane</span> <span class='slop-word-item'>he&#x27;d</span> <span class='slop-word-item'>irrevocably</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>composure</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>chloe</span> <span class='slop-word-item'>workstation</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (169)</span> <span class='slop-ngram-item'>voice barely (27)</span> <span class='slop-ngram-item'>voice tight (24)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>something else (22)</span> <span class='slop-ngram-item'>growing sense (21)</span> <span class='slop-ngram-item'>voice low (21)</span> <span class='slop-ngram-item'>said trying (20)</span> <span class='slop-ngram-item'>could feel (18)</span> <span class='slop-ngram-item'>felt like (17)</span> <span class='slop-ngram-item'>barely whisper (17)</span> <span class='slop-ngram-item'>trying sound (15)</span> <span class='slop-ngram-item'>voice flat (15)</span> <span class='slop-ngram-item'>turned back (15)</span> <span class='slop-ngram-item'>small almost (14)</span> <span class='slop-ngram-item'>said tone (12)</span> <span class='slop-ngram-item'>could see (12)</span> <span class='slop-ngram-item'>barely audible (12)</span> <span class='slop-ngram-item'>living room (12)</span> <span class='slop-ngram-item'>expression unreadable (12)</span> <span class='slop-ngram-item'>almost imperceptible (11)</span> <span class='slop-ngram-item'>carefully constructed (11)</span> <span class='slop-ngram-item'>old man (10)</span> <span class='slop-ngram-item'>voice trembling (10)</span> <span class='slop-ngram-item'>sense dread (10)</span> <span class='slop-ngram-item'>knew growing (10)</span> <span class='slop-ngram-item'>said carefully (9)</span> <span class='slop-ngram-item'>want know (9)</span> <span class='slop-ngram-item'>need get (9)</span> <span class='slop-ngram-item'>said finally (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice barely (22)</span> <span class='slop-ngram-item'>said voice low (16)</span> <span class='slop-ngram-item'>voice barely whisper (15)</span> <span class='slop-ngram-item'>said voice tight (13)</span> <span class='slop-ngram-item'>voice barely audible (12)</span> <span class='slop-ngram-item'>said voice flat (11)</span> <span class='slop-ngram-item'>said trying sound (10)</span> <span class='slop-ngram-item'>growing sense dread (10)</span> <span class='slop-ngram-item'>said voice soft (8)</span> <span class='slop-ngram-item'>something else something (8)</span> <span class='slop-ngram-item'>small almost imperceptible (7)</span> <span class='slop-ngram-item'>old man hemlock (5)</span> <span class='slop-ngram-item'>said voice trembling (5)</span> <span class='slop-ngram-item'>felt wave nausea (5)</span> <span class='slop-ngram-item'>asked voice tight (5)</span> <span class='slop-ngram-item'>knew growing sense (5)</span> <span class='slop-ngram-item'>lord alistair finch (5)</span> <span class='slop-ngram-item'>like physical blow (4)</span> <span class='slop-ngram-item'>trying sound casual (4)</span> <span class='slop-ngram-item'>said trying keep (4)</span> <span class='slop-ngram-item'>trying keep voice (4)</span> <span class='slop-ngram-item'>said voice smooth (4)</span> <span class='slop-ngram-item'>shake feeling something (4)</span> <span class='slop-ngram-item'>knew growing certainty (4)</span> <span class='slop-ngram-item'>blood turned ice (4)</span> <span class='slop-ngram-item'>turned walked away (4)</span> <span class='slop-ngram-item'>avoiding eye contact (4)</span> <span class='slop-ngram-item'>said voice rough (4)</span> <span class='slop-ngram-item'>said tone clipped (3)</span> <span class='slop-ngram-item'>asked voice strained (3)</span>
</div>

##### mistral-medium-3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.781)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.788)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.803)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.804)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.813)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>rumpled</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>gasping</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>waver</span> <span class='slop-word-item'>skidded</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>bruise</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stepped forward (67)</span> <span class='slop-ngram-item'>voice tight (54)</span> <span class='slop-ngram-item'>like death (43)</span> <span class='slop-ngram-item'>breath caught (35)</span> <span class='slop-ngram-item'>phone buzzed (34)</span> <span class='slop-ngram-item'>breath hitched (34)</span> <span class='slop-ngram-item'>leo breath (31)</span> <span class='slop-ngram-item'>like something (31)</span> <span class='slop-ngram-item'>voice raw (30)</span> <span class='slop-ngram-item'>leo voice (30)</span> <span class='slop-ngram-item'>stepped closer (30)</span> <span class='slop-ngram-item'>breath came (28)</span> <span class='slop-ngram-item'>fingers tightened (28)</span> <span class='slop-ngram-item'>phone screen (28)</span> <span class='slop-ngram-item'>living room (28)</span> <span class='slop-ngram-item'>eyes dark (27)</span> <span class='slop-ngram-item'>sat couch (26)</span> <span class='slop-ngram-item'>smelled like (25)</span> <span class='slop-ngram-item'>movements precise (25)</span> <span class='slop-ngram-item'>alex sat (24)</span> <span class='slop-ngram-item'>took step (24)</span> <span class='slop-ngram-item'>holding phone (23)</span> <span class='slop-ngram-item'>alex alex (23)</span> <span class='slop-ngram-item'>gone air (23)</span> <span class='slop-ngram-item'>move stepped (23)</span> <span class='slop-ngram-item'>back turned (22)</span> <span class='slop-ngram-item'>forward reached (22)</span> <span class='slop-ngram-item'>look back (21)</span> <span class='slop-ngram-item'>met gaze (21)</span> <span class='slop-ngram-item'>pull away (21)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stepped forward reached (22)</span> <span class='slop-ngram-item'>move stepped closer (20)</span> <span class='slop-ngram-item'>finger tightened trigger (17)</span> <span class='slop-ngram-item'>hand went sidearm (13)</span> <span class='slop-ngram-item'>flickering like dying (11)</span> <span class='slop-ngram-item'>fingers tightened around (11)</span> <span class='slop-ngram-item'>breath came short (11)</span> <span class='slop-ngram-item'>came short gasps (11)</span> <span class='slop-ngram-item'>like dying star (10)</span> <span class='slop-ngram-item'>comm crackled voice (10)</span> <span class='slop-ngram-item'>breath came fast (9)</span> <span class='slop-ngram-item'>turned eyes dark (9)</span> <span class='slop-ngram-item'>air smelled like (9)</span> <span class='slop-ngram-item'>door slammed shut (9)</span> <span class='slop-ngram-item'>breath fogging cold (9)</span> <span class='slop-ngram-item'>leo breath hitched (8)</span> <span class='slop-ngram-item'>took long enough (7)</span> <span class='slop-ngram-item'>air thick scent (7)</span> <span class='slop-ngram-item'>sat edge bed (6)</span> <span class='slop-ngram-item'>something older something (6)</span> <span class='slop-ngram-item'>knuckles white around (6)</span> <span class='slop-ngram-item'>door creaked open (6)</span> <span class='slop-ngram-item'>yeah leo voice (6)</span> <span class='slop-ngram-item'>road stretched ahead (5)</span> <span class='slop-ngram-item'>stretched ahead empty (5)</span> <span class='slop-ngram-item'>got car drove (5)</span> <span class='slop-ngram-item'>fingers twitched toward (5)</span> <span class='slop-ngram-item'>fogging cold air (5)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>studied long moment (4)</span>
</div>

##### THUDM/GLM-4-32B-0414
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.746)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.776)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-2025-05-07 (distance=0.785)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.787)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.801)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rostova</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>mutely</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>windowsill</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>possessiveness</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>underestimating</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>streetlights</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>doorknob</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>unanswered</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>embers</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>weariness</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (204)</span> <span class='slop-ngram-item'>said voice (108)</span> <span class='slop-ngram-item'>something else (101)</span> <span class='slop-ngram-item'>would make (86)</span> <span class='slop-ngram-item'>make regret (84)</span> <span class='slop-ngram-item'>looked around (49)</span> <span class='slop-ngram-item'>needed find (48)</span> <span class='slop-ngram-item'>deep breath (48)</span> <span class='slop-ngram-item'>looked like (44)</span> <span class='slop-ngram-item'>living room (44)</span> <span class='slop-ngram-item'>took deep (42)</span> <span class='slop-ngram-item'>maybe maybe (41)</span> <span class='slop-ngram-item'>else something (36)</span> <span class='slop-ngram-item'>heart pounding (36)</span> <span class='slop-ngram-item'>voice low (36)</span> <span class='slop-ngram-item'>asked voice (34)</span> <span class='slop-ngram-item'>closed eyes (34)</span> <span class='slop-ngram-item'>could feel (34)</span> <span class='slop-ngram-item'>voice barely (32)</span> <span class='slop-ngram-item'>back towards (31)</span> <span class='slop-ngram-item'>fear uncertainty (31)</span> <span class='slop-ngram-item'>less like (30)</span> <span class='slop-ngram-item'>looked back (29)</span> <span class='slop-ngram-item'>eyes wide (29)</span> <span class='slop-ngram-item'>took another (28)</span> <span class='slop-ngram-item'>unanswered question (28)</span> <span class='slop-ngram-item'>would go (26)</span> <span class='slop-ngram-item'>could see (26)</span> <span class='slop-ngram-item'>okay okay (26)</span> <span class='slop-ngram-item'>bad idea (25)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (39)</span> <span class='slop-ngram-item'>something else something (36)</span> <span class='slop-ngram-item'>said voice low (23)</span> <span class='slop-ngram-item'>voice barely whisper (20)</span> <span class='slop-ngram-item'>felt less like (17)</span> <span class='slop-ngram-item'>took another step (17)</span> <span class='slop-ngram-item'>said voice barely (14)</span> <span class='slop-ngram-item'>needed find new (12)</span> <span class='slop-ngram-item'>heart hammered ribs (11)</span> <span class='slop-ngram-item'>voice barely audible (11)</span> <span class='slop-ngram-item'>flicker something else (10)</span> <span class='slop-ngram-item'>looked around room (10)</span> <span class='slop-ngram-item'>asked voice barely (9)</span> <span class='slop-ngram-item'>said voice flat (9)</span> <span class='slop-ngram-item'>something else entirely (8)</span> <span class='slop-ngram-item'>pushed door open (8)</span> <span class='slop-ngram-item'>deep breath trying (8)</span> <span class='slop-ngram-item'>back living room (8)</span> <span class='slop-ngram-item'>walked back towards (8)</span> <span class='slop-ngram-item'>illuminating dust motes (7)</span> <span class='slop-ngram-item'>dust motes dancing (7)</span> <span class='slop-ngram-item'>motes dancing air (7)</span> <span class='slop-ngram-item'>heart hammering ribs (7)</span> <span class='slop-ngram-item'>another step forward (7)</span> <span class='slop-ngram-item'>eyes searching face (7)</span> <span class='slop-ngram-item'>fingers closing around (7)</span> <span class='slop-ngram-item'>felt strange sense (7)</span> <span class='slop-ngram-item'>looked eyes searching (7)</span> <span class='slop-ngram-item'>felt flicker something (6)</span> <span class='slop-ngram-item'>felt cold dread (6)</span>
</div>

##### gpt-4.1-mini
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-nano (distance=0.744)</div>
<div class='slop-similar'>gpt-4.1 (distance=0.786)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.787)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.787)</div>
<div class='slop-similar'>optimus-alpha (distance=0.793)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>selene</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>streetlamp</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>gritted</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>furrowed</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (71)</span> <span class='slop-ngram-item'>said voice (60)</span> <span class='slop-ngram-item'>shook head (30)</span> <span class='slop-ngram-item'>said quietly (28)</span> <span class='slop-ngram-item'>nodded slowly (26)</span> <span class='slop-ngram-item'>felt like (24)</span> <span class='slop-ngram-item'>mind raced (23)</span> <span class='slop-ngram-item'>said softly (23)</span> <span class='slop-ngram-item'>long shadows (22)</span> <span class='slop-ngram-item'>first time (21)</span> <span class='slop-ngram-item'>eyes wide (21)</span> <span class='slop-ngram-item'>casting long (21)</span> <span class='slop-ngram-item'>met gaze (21)</span> <span class='slop-ngram-item'>heart pounding (20)</span> <span class='slop-ngram-item'>beneath surface (20)</span> <span class='slop-ngram-item'>something else (20)</span> <span class='slop-ngram-item'>phone buzzed (18)</span> <span class='slop-ngram-item'>stepped forward (18)</span> <span class='slop-ngram-item'>closed eyes (18)</span> <span class='slop-ngram-item'>asked voice (17)</span> <span class='slop-ngram-item'>voice steady (17)</span> <span class='slop-ngram-item'>breath caught (16)</span> <span class='slop-ngram-item'>swallowed hard (16)</span> <span class='slop-ngram-item'>voice rough (15)</span> <span class='slop-ngram-item'>smiled faintly (15)</span> <span class='slop-ngram-item'>eyes flicked (15)</span> <span class='slop-ngram-item'>dim light (14)</span> <span class='slop-ngram-item'>eyes narrowing (14)</span> <span class='slop-ngram-item'>eyes narrowed (14)</span> <span class='slop-ngram-item'>looked away (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (24)</span> <span class='slop-ngram-item'>casting long shadows (17)</span> <span class='slop-ngram-item'>voice steady despite (10)</span> <span class='slop-ngram-item'>smile tugging lips (9)</span> <span class='slop-ngram-item'>first time long (7)</span> <span class='slop-ngram-item'>asked voice low (7)</span> <span class='slop-ngram-item'>said voice steady (7)</span> <span class='slop-ngram-item'>said voice rough (6)</span> <span class='slop-ngram-item'>met gaze steadily (6)</span> <span class='slop-ngram-item'>arms crossed eyes (6)</span> <span class='slop-ngram-item'>door creaked open (6)</span> <span class='slop-ngram-item'>reached fingers brushing (5)</span> <span class='slop-ngram-item'>long shadows across (5)</span> <span class='slop-ngram-item'>eyes snapped open (5)</span> <span class='slop-ngram-item'>said quietly voice (5)</span> <span class='slop-ngram-item'>cast long shadows (4)</span> <span class='slop-ngram-item'>voice low steady (4)</span> <span class='slop-ngram-item'>fingers curling around (4)</span> <span class='slop-ngram-item'>mind flashed back (4)</span> <span class='slop-ngram-item'>like second skin (4)</span> <span class='slop-ngram-item'>first time since (4)</span> <span class='slop-ngram-item'>voice barely whisper (4)</span> <span class='slop-ngram-item'>eli nodded slowly (4)</span> <span class='slop-ngram-item'>silver ring finger (4)</span> <span class='slop-ngram-item'>something unspoken passing (4)</span> <span class='slop-ngram-item'>laughed softly sound (4)</span> <span class='slop-ngram-item'>cool night air (4)</span> <span class='slop-ngram-item'>whatever came next (4)</span> <span class='slop-ngram-item'>brushing stray lock (4)</span> <span class='slop-ngram-item'>stray lock hair (4)</span>
</div>

##### qwen/qwq-32b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.723)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.752)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b (distance=0.770)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.783)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.799)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>blackthorn</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>nessa</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>paled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hazel</span> <span class='slop-word-item'>pocketed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>whitened</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>dirge</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>lingered</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (61)</span> <span class='slop-ngram-item'>word count (41)</span> <span class='slop-ngram-item'>stepped forward (35)</span> <span class='slop-ngram-item'>pocket watch (29)</span> <span class='slop-ngram-item'>phone buzzed (26)</span> <span class='slop-ngram-item'>knelt beside (21)</span> <span class='slop-ngram-item'>prosthetic arm (21)</span> <span class='slop-ngram-item'>breath hitched (19)</span> <span class='slop-ngram-item'>jaw tightened (19)</span> <span class='slop-ngram-item'>kael said (19)</span> <span class='slop-ngram-item'>hands shook (18)</span> <span class='slop-ngram-item'>let go (18)</span> <span class='slop-ngram-item'>voice echoed (18)</span> <span class='slop-ngram-item'>words hung (17)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>voice raw (17)</span> <span class='slop-ngram-item'>throat tightened (17)</span> <span class='slop-ngram-item'>stepped closer (16)</span> <span class='slop-ngram-item'>eyes widened (16)</span> <span class='slop-ngram-item'>count key (16)</span> <span class='slop-ngram-item'>data chip (15)</span> <span class='slop-ngram-item'>next morning (15)</span> <span class='slop-ngram-item'>voice steady (14)</span> <span class='slop-ngram-item'>voice cracked (13)</span> <span class='slop-ngram-item'>voice broke (13)</span> <span class='slop-ngram-item'>key elements (13)</span> <span class='slop-ngram-item'>human touches (13)</span> <span class='slop-ngram-item'>chapter ends (12)</span> <span class='slop-ngram-item'>watch ticked (12)</span> <span class='slop-ngram-item'>fingers brushed (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count key (16)</span> <span class='slop-ngram-item'>pocket watch ticked (12)</span> <span class='slop-ngram-item'>count key elements (9)</span> <span class='slop-ngram-item'>said voice steady (8)</span> <span class='slop-ngram-item'>laughed sharp brittle (7)</span> <span class='slop-ngram-item'>elara throat tightened (6)</span> <span class='slop-ngram-item'>said voice raw (6)</span> <span class='slop-ngram-item'>voice crackled comms (6)</span> <span class='slop-ngram-item'>words hung air (6)</span> <span class='slop-ngram-item'>blood ran cold (5)</span> <span class='slop-ngram-item'>stepped forward voice (5)</span> <span class='slop-ngram-item'>breath came shallow (5)</span> <span class='slop-ngram-item'>door creaked open (4)</span> <span class='slop-ngram-item'>blood turned ice (4)</span> <span class='slop-ngram-item'>kai stepped forward (4)</span> <span class='slop-ngram-item'>smile reach eyes (4)</span> <span class='slop-ngram-item'>said voice hollow (4)</span> <span class='slop-ngram-item'>flickering like dying (4)</span> <span class='slop-ngram-item'>phone buzzed message (4)</span> <span class='slop-ngram-item'>word count human (4)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>door slammed shut (4)</span> <span class='slop-ngram-item'>casting jagged shadows (4)</span> <span class='slop-ngram-item'>journal last entry (4)</span> <span class='slop-ngram-item'>door burst open (4)</span> <span class='slop-ngram-item'>breath came ragged (4)</span> <span class='slop-ngram-item'>head snapped toward (3)</span> <span class='slop-ngram-item'>words hung like (3)</span> <span class='slop-ngram-item'>like dying stars (3)</span> <span class='slop-ngram-item'>elara said voice (3)</span>
</div>

##### google/gemma-3-27b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.702)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.714)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.753)</div>
<div class='slop-similar'>sam-paech/gemma-3-27b-it-antislop-exp19 (distance=0.775)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.784)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>lysandra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>veridian</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>scrolled</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>clutching</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (231)</span> <span class='slop-ngram-item'>voice barely (53)</span> <span class='slop-ngram-item'>asked voice (51)</span> <span class='slop-ngram-item'>voice trembling (44)</span> <span class='slop-ngram-item'>barely whisper (43)</span> <span class='slop-ngram-item'>felt like (43)</span> <span class='slop-ngram-item'>dust devil (37)</span> <span class='slop-ngram-item'>eyes filled (31)</span> <span class='slop-ngram-item'>growing sense (27)</span> <span class='slop-ngram-item'>something else (27)</span> <span class='slop-ngram-item'>heart pounding (24)</span> <span class='slop-ngram-item'>felt surge (22)</span> <span class='slop-ngram-item'>looked eyes (22)</span> <span class='slop-ngram-item'>voice filled (21)</span> <span class='slop-ngram-item'>pounding chest (21)</span> <span class='slop-ngram-item'>deep breath (20)</span> <span class='slop-ngram-item'>felt strange (19)</span> <span class='slop-ngram-item'>voice laced (19)</span> <span class='slop-ngram-item'>expression unreadable (18)</span> <span class='slop-ngram-item'>old man (18)</span> <span class='slop-ngram-item'>closed eyes (18)</span> <span class='slop-ngram-item'>voice tight (17)</span> <span class='slop-ngram-item'>knew chilling (17)</span> <span class='slop-ngram-item'>chilling certainty (17)</span> <span class='slop-ngram-item'>noticed something (16)</span> <span class='slop-ngram-item'>took deep (16)</span> <span class='slop-ngram-item'>raised eyebrow (15)</span> <span class='slop-ngram-item'>knew growing (15)</span> <span class='slop-ngram-item'>long time (15)</span> <span class='slop-ngram-item'>eyes wide (15)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (43)</span> <span class='slop-ngram-item'>said voice trembling (28)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>heart pounding chest (21)</span> <span class='slop-ngram-item'>knew chilling certainty (17)</span> <span class='slop-ngram-item'>took deep breath (16)</span> <span class='slop-ngram-item'>said voice firm (13)</span> <span class='slop-ngram-item'>said voice laced (13)</span> <span class='slop-ngram-item'>growing sense dread (12)</span> <span class='slop-ngram-item'>said voice filled (12)</span> <span class='slop-ngram-item'>asked voice barely (11)</span> <span class='slop-ngram-item'>knew growing sense (11)</span> <span class='slop-ngram-item'>voice barely audible (10)</span> <span class='slop-ngram-item'>eyes filled mixture (10)</span> <span class='slop-ngram-item'>growing sense unease (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>voice trembling slightly (8)</span> <span class='slop-ngram-item'>said voice tight (8)</span> <span class='slop-ngram-item'>said voice cold (8)</span> <span class='slop-ngram-item'>first time long (8)</span> <span class='slop-ngram-item'>time long time (8)</span> <span class='slop-ngram-item'>looked eyes filled (8)</span> <span class='slop-ngram-item'>said voice raspy (8)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>felt less like (7)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>felt growing sense (7)</span> <span class='slop-ngram-item'>air thick scent (6)</span> <span class='slop-ngram-item'>brow furrowed concentration (6)</span> <span class='slop-ngram-item'>stumbled upon something (6)</span>
</div>

##### grok-3-mini-beta
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.804)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.818)</div>
<div class='slop-similar'>grok-3-beta (distance=0.819)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.820)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.839)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>absentmindedly</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>impulsiveness</span> <span class='slop-word-item'>overconfidence</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>harlan</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>fiddled</span> <span class='slop-word-item'>amplifying</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>churned</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>unraveled</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>piecing</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>slumping</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>undercurrent</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>seeping</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>faltering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (71)</span> <span class='slop-ngram-item'>felt like (54)</span> <span class='slop-ngram-item'>word count (48)</span> <span class='slop-ngram-item'>air thick (31)</span> <span class='slop-ngram-item'>hit like (27)</span> <span class='slop-ngram-item'>mind raced (25)</span> <span class='slop-ngram-item'>voice steady (25)</span> <span class='slop-ngram-item'>like bad (23)</span> <span class='slop-ngram-item'>voice low (23)</span> <span class='slop-ngram-item'>looked like (21)</span> <span class='slop-ngram-item'>dim light (20)</span> <span class='slop-ngram-item'>look like (17)</span> <span class='slop-ngram-item'>first time (17)</span> <span class='slop-ngram-item'>could see (16)</span> <span class='slop-ngram-item'>last night (15)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>heart pounding (14)</span> <span class='slop-ngram-item'>felt weight (14)</span> <span class='slop-ngram-item'>mind racing (13)</span> <span class='slop-ngram-item'>could shake (13)</span> <span class='slop-ngram-item'>long shadows (13)</span> <span class='slop-ngram-item'>around like (13)</span> <span class='slop-ngram-item'>part wanted (12)</span> <span class='slop-ngram-item'>internal monologue (12)</span> <span class='slop-ngram-item'>shot back (12)</span> <span class='slop-ngram-item'>steady despite (12)</span> <span class='slop-ngram-item'>felt pull (11)</span> <span class='slop-ngram-item'>pulled back (11)</span> <span class='slop-ngram-item'>casting long (11)</span> <span class='slop-ngram-item'>feels like (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice steady (11)</span> <span class='slop-ngram-item'>casting long shadows (11)</span> <span class='slop-ngram-item'>said voice low (11)</span> <span class='slop-ngram-item'>voice steady despite (10)</span> <span class='slop-ngram-item'>like gut punch (7)</span> <span class='slop-ngram-item'>air thick scent (7)</span> <span class='slop-ngram-item'>words hit like (6)</span> <span class='slop-ngram-item'>like bad omen (6)</span> <span class='slop-ngram-item'>revelation hit like (6)</span> <span class='slop-ngram-item'>hit like gut (6)</span> <span class='slop-ngram-item'>words hung air (6)</span> <span class='slop-ngram-item'>one wrong move (5)</span> <span class='slop-ngram-item'>words felt hollow (5)</span> <span class='slop-ngram-item'>like bad dream (5)</span> <span class='slop-ngram-item'>voice barely whisper (5)</span> <span class='slop-ngram-item'>tasted like ash (5)</span> <span class='slop-ngram-item'>felt pull chest (5)</span> <span class='slop-ngram-item'>trying sound casual (4)</span> <span class='slop-ngram-item'>internal monologue churned (4)</span> <span class='slop-ngram-item'>metal warm skin (4)</span> <span class='slop-ngram-item'>words stung hitting (4)</span> <span class='slop-ngram-item'>shadows danced like (4)</span> <span class='slop-ngram-item'>air felt charged (4)</span> <span class='slop-ngram-item'>room dimly lit (4)</span> <span class='slop-ngram-item'>wrapping around like (4)</span> <span class='slop-ngram-item'>said voice cutting (4)</span> <span class='slop-ngram-item'>said finally voice (4)</span> <span class='slop-ngram-item'>hands trembled slightly (4)</span> <span class='slop-ngram-item'>quite reach eyes (3)</span> <span class='slop-ngram-item'>part wanted bolt (3)</span>
</div>

##### qwen/qwen3-32b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.694)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.718)</div>
<div class='slop-similar'>qwen/qwen3-8b (distance=0.767)</div>
<div class='slop-similar'>mistral-medium-3 (distance=0.781)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.783)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>sizzled</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>enforcers</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>unbidden</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>underbrush</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>spores</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>thundered</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>flared</span> <span class='slop-word-item'>jawline</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>syndicate</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>hunched</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (116)</span> <span class='slop-ngram-item'>stepped closer (62)</span> <span class='slop-ngram-item'>breath caught (51)</span> <span class='slop-ngram-item'>voice low (46)</span> <span class='slop-ngram-item'>stepped forward (46)</span> <span class='slop-ngram-item'>voice whisper (44)</span> <span class='slop-ngram-item'>hands trembled (38)</span> <span class='slop-ngram-item'>voice quiet (36)</span> <span class='slop-ngram-item'>phone buzzed (35)</span> <span class='slop-ngram-item'>voice sharp (34)</span> <span class='slop-ngram-item'>jaw tightened (34)</span> <span class='slop-ngram-item'>eyes narrowed (31)</span> <span class='slop-ngram-item'>felt like (31)</span> <span class='slop-ngram-item'>voice steady (30)</span> <span class='slop-ngram-item'>hand went (30)</span> <span class='slop-ngram-item'>dim light (27)</span> <span class='slop-ngram-item'>air thick (27)</span> <span class='slop-ngram-item'>kael hand (26)</span> <span class='slop-ngram-item'>like heartbeat (23)</span> <span class='slop-ngram-item'>eyes wide (23)</span> <span class='slop-ngram-item'>first time (22)</span> <span class='slop-ngram-item'>looked like (22)</span> <span class='slop-ngram-item'>mara breath (22)</span> <span class='slop-ngram-item'>lights flickered (21)</span> <span class='slop-ngram-item'>shook head (20)</span> <span class='slop-ngram-item'>hands clenched (20)</span> <span class='slop-ngram-item'>met gaze (20)</span> <span class='slop-ngram-item'>hand tightened (20)</span> <span class='slop-ngram-item'>fingers brushing (20)</span> <span class='slop-ngram-item'>something else (19)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (28)</span> <span class='slop-ngram-item'>hands clenched fists (16)</span> <span class='slop-ngram-item'>mara breath caught (16)</span> <span class='slop-ngram-item'>air thick scent (15)</span> <span class='slop-ngram-item'>said voice smooth (13)</span> <span class='slop-ngram-item'>stepped closer voice (12)</span> <span class='slop-ngram-item'>mara hand went (10)</span> <span class='slop-ngram-item'>hand closed around (9)</span> <span class='slop-ngram-item'>hand went knife (9)</span> <span class='slop-ngram-item'>flickering like heartbeat (8)</span> <span class='slop-ngram-item'>thought could fix (8)</span> <span class='slop-ngram-item'>kael stepped forward (8)</span> <span class='slop-ngram-item'>said voice tight (7)</span> <span class='slop-ngram-item'>look like seen (7)</span> <span class='slop-ngram-item'>flickering like dying (7)</span> <span class='slop-ngram-item'>something else something (7)</span> <span class='slop-ngram-item'>said voice cutting (7)</span> <span class='slop-ngram-item'>words felt hollow (7)</span> <span class='slop-ngram-item'>door burst open (7)</span> <span class='slop-ngram-item'>breath came ragged (7)</span> <span class='slop-ngram-item'>came ragged gasps (7)</span> <span class='slop-ngram-item'>said voice soft (7)</span> <span class='slop-ngram-item'>like dying star (7)</span> <span class='slop-ngram-item'>said voice steady (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>said voice quiet (6)</span> <span class='slop-ngram-item'>hum grew louder (6)</span> <span class='slop-ngram-item'>door slammed shut (6)</span> <span class='slop-ngram-item'>mara stepped closer (6)</span> <span class='slop-ngram-item'>mara breath came (6)</span>
</div>

##### CohereForAI/c4ai-command-a-03-2025
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.744)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.772)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.785)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.787)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.790)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>quirked</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>quickening</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>syndicate</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>tugged</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>unease</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (295)</span> <span class='slop-ngram-item'>voice steady (84)</span> <span class='slop-ngram-item'>asked voice (81)</span> <span class='slop-ngram-item'>expression unreadable (65)</span> <span class='slop-ngram-item'>voice low (60)</span> <span class='slop-ngram-item'>heart pounding (56)</span> <span class='slop-ngram-item'>mind racing (56)</span> <span class='slop-ngram-item'>expression grim (52)</span> <span class='slop-ngram-item'>stepped forward (51)</span> <span class='slop-ngram-item'>voice tight (47)</span> <span class='slop-ngram-item'>felt like (46)</span> <span class='slop-ngram-item'>chest tightened (46)</span> <span class='slop-ngram-item'>could respond (45)</span> <span class='slop-ngram-item'>jaw tightened (43)</span> <span class='slop-ngram-item'>first time (42)</span> <span class='slop-ngram-item'>shake feeling (37)</span> <span class='slop-ngram-item'>said though (37)</span> <span class='slop-ngram-item'>phone buzzed (36)</span> <span class='slop-ngram-item'>let go (34)</span> <span class='slop-ngram-item'>mind raced (34)</span> <span class='slop-ngram-item'>deep breath (34)</span> <span class='slop-ngram-item'>air thick (32)</span> <span class='slop-ngram-item'>alex said (32)</span> <span class='slop-ngram-item'>shook head (29)</span> <span class='slop-ngram-item'>eyes narrowed (29)</span> <span class='slop-ngram-item'>looked like (28)</span> <span class='slop-ngram-item'>eyes widened (28)</span> <span class='slop-ngram-item'>voice firm (28)</span> <span class='slop-ngram-item'>face pale (28)</span> <span class='slop-ngram-item'>nodded though (27)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice steady (46)</span> <span class='slop-ngram-item'>said voice low (34)</span> <span class='slop-ngram-item'>took deep breath (27)</span> <span class='slop-ngram-item'>said voice firm (23)</span> <span class='slop-ngram-item'>said voice tight (21)</span> <span class='slop-ngram-item'>room fell silent (18)</span> <span class='slop-ngram-item'>mara chest tightened (17)</span> <span class='slop-ngram-item'>sighed running hand (16)</span> <span class='slop-ngram-item'>running hand hair (14)</span> <span class='slop-ngram-item'>voice steady despite (14)</span> <span class='slop-ngram-item'>said voice shaking (14)</span> <span class='slop-ngram-item'>voice barely whisper (14)</span> <span class='slop-ngram-item'>nodded expression grim (13)</span> <span class='slop-ngram-item'>said though sure (12)</span> <span class='slop-ngram-item'>heart skipped beat (12)</span> <span class='slop-ngram-item'>said voice quiet (12)</span> <span class='slop-ngram-item'>voice low dangerous (11)</span> <span class='slop-ngram-item'>stepped forward voice (11)</span> <span class='slop-ngram-item'>casting long shadows (11)</span> <span class='slop-ngram-item'>said voice grim (11)</span> <span class='slop-ngram-item'>nodded mind racing (10)</span> <span class='slop-ngram-item'>studied long moment (10)</span> <span class='slop-ngram-item'>eyes met expression (10)</span> <span class='slop-ngram-item'>alex said voice (10)</span> <span class='slop-ngram-item'>said voice urgent (9)</span> <span class='slop-ngram-item'>asked voice tight (9)</span> <span class='slop-ngram-item'>fell silent weight (9)</span> <span class='slop-ngram-item'>blood ran cold (9)</span> <span class='slop-ngram-item'>alex mind raced (9)</span> <span class='slop-ngram-item'>said voice calm (8)</span>
</div>

##### qwen/qwen3-30b-a3b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.665)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.694)</div>
<div class='slop-similar'>qwen/qwen3-8b (distance=0.725)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.744)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.754)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>scuffing</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>blackthorn</span> <span class='slop-word-item'>dimming</span> <span class='slop-word-item'>intensifying</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>scrawled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>jingling</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>streetlights</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>jules</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>locket</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (262)</span> <span class='slop-ngram-item'>voice low (114)</span> <span class='slop-ngram-item'>breath caught (100)</span> <span class='slop-ngram-item'>voice barely (73)</span> <span class='slop-ngram-item'>voice steady (70)</span> <span class='slop-ngram-item'>stepped closer (69)</span> <span class='slop-ngram-item'>barely whisper (65)</span> <span class='slop-ngram-item'>voice quiet (59)</span> <span class='slop-ngram-item'>air thick (55)</span> <span class='slop-ngram-item'>hands trembled (54)</span> <span class='slop-ngram-item'>stepped forward (53)</span> <span class='slop-ngram-item'>fingers brushing (49)</span> <span class='slop-ngram-item'>jaw tightened (44)</span> <span class='slop-ngram-item'>first time (43)</span> <span class='slop-ngram-item'>spent life (41)</span> <span class='slop-ngram-item'>closer voice (40)</span> <span class='slop-ngram-item'>heart pounding (39)</span> <span class='slop-ngram-item'>mind raced (37)</span> <span class='slop-ngram-item'>expression unreadable (36)</span> <span class='slop-ngram-item'>something else (34)</span> <span class='slop-ngram-item'>felt like (34)</span> <span class='slop-ngram-item'>hands trembling (33)</span> <span class='slop-ngram-item'>voice tight (32)</span> <span class='slop-ngram-item'>eyes wide (31)</span> <span class='slop-ngram-item'>face pale (30)</span> <span class='slop-ngram-item'>one thing (29)</span> <span class='slop-ngram-item'>tilted head (29)</span> <span class='slop-ngram-item'>stepped back (29)</span> <span class='slop-ngram-item'>breath shallow (28)</span> <span class='slop-ngram-item'>mind racing (28)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (65)</span> <span class='slop-ngram-item'>said voice low (49)</span> <span class='slop-ngram-item'>said voice steady (41)</span> <span class='slop-ngram-item'>said voice barely (40)</span> <span class='slop-ngram-item'>stepped closer voice (34)</span> <span class='slop-ngram-item'>said voice quiet (31)</span> <span class='slop-ngram-item'>said voice tight (26)</span> <span class='slop-ngram-item'>air thick scent (24)</span> <span class='slop-ngram-item'>knew one thing (22)</span> <span class='slop-ngram-item'>reached fingers brushing (20)</span> <span class='slop-ngram-item'>voice low almost (17)</span> <span class='slop-ngram-item'>like living thing (17)</span> <span class='slop-ngram-item'>casting long shadows (16)</span> <span class='slop-ngram-item'>elara hands trembled (16)</span> <span class='slop-ngram-item'>breath coming short (16)</span> <span class='slop-ngram-item'>voice quiet almost (14)</span> <span class='slop-ngram-item'>stepped forward voice (14)</span> <span class='slop-ngram-item'>hands curled fists (14)</span> <span class='slop-ngram-item'>coming short uneven (14)</span> <span class='slop-ngram-item'>short uneven bursts (14)</span> <span class='slop-ngram-item'>said voice trembling (14)</span> <span class='slop-ngram-item'>fingers tightening around (14)</span> <span class='slop-ngram-item'>long shadows across (13)</span> <span class='slop-ngram-item'>voice cut silence (13)</span> <span class='slop-ngram-item'>fingers tightened around (12)</span> <span class='slop-ngram-item'>fingers brushing edge (12)</span> <span class='slop-ngram-item'>jax voice low (12)</span> <span class='slop-ngram-item'>eyes filled tears (12)</span> <span class='slop-ngram-item'>know said voice (11)</span> <span class='slop-ngram-item'>spent life chasing (11)</span>
</div>

##### gpt-4.1-nano
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4.1-mini (distance=0.744)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.794)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.802)</div>
<div class='slop-similar'>THUDM/GLM-4-32B-0414 (distance=0.810)</div>
<div class='slop-similar'>grok-3-mini-beta (distance=0.820)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>pocketknife</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>shadowed</span> <span class='slop-word-item'>softly</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>relic</span> <span class='slop-word-item'>tensed</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>streetlights</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said softly (57)</span> <span class='slop-ngram-item'>heart pounding (41)</span> <span class='slop-ngram-item'>feeling weight (39)</span> <span class='slop-ngram-item'>deep breath (39)</span> <span class='slop-ngram-item'>faint glow (38)</span> <span class='slop-ngram-item'>said voice (35)</span> <span class='slop-ngram-item'>took deep (35)</span> <span class='slop-ngram-item'>mind racing (31)</span> <span class='slop-ngram-item'>felt like (31)</span> <span class='slop-ngram-item'>mind raced (29)</span> <span class='slop-ngram-item'>voice low (29)</span> <span class='slop-ngram-item'>nodded slowly (29)</span> <span class='slop-ngram-item'>trying tell (29)</span> <span class='slop-ngram-item'>looked around (28)</span> <span class='slop-ngram-item'>voice trembling (28)</span> <span class='slop-ngram-item'>looked back (28)</span> <span class='slop-ngram-item'>eyes fixed (28)</span> <span class='slop-ngram-item'>feeling strange (26)</span> <span class='slop-ngram-item'>eyes flicked (26)</span> <span class='slop-ngram-item'>shook head (25)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>jamie looked (23)</span> <span class='slop-ngram-item'>almost like (23)</span> <span class='slop-ngram-item'>eyes darted (23)</span> <span class='slop-ngram-item'>looked away (23)</span> <span class='slop-ngram-item'>voice steady (22)</span> <span class='slop-ngram-item'>eyes flickered (22)</span> <span class='slop-ngram-item'>stomach clenched (22)</span> <span class='slop-ngram-item'>either way (22)</span> <span class='slop-ngram-item'>air thick (21)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (34)</span> <span class='slop-ngram-item'>trying tell us (20)</span> <span class='slop-ngram-item'>tell us something (11)</span> <span class='slop-ngram-item'>said softly voice (10)</span> <span class='slop-ngram-item'>reached pocket pulled (10)</span> <span class='slop-ngram-item'>deep breath feeling (9)</span> <span class='slop-ngram-item'>feeling weight words (9)</span> <span class='slop-ngram-item'>mind kept circling (8)</span> <span class='slop-ngram-item'>pocket pulled small (8)</span> <span class='slop-ngram-item'>voice barely whisper (8)</span> <span class='slop-ngram-item'>looked around room (8)</span> <span class='slop-ngram-item'>shadows stretched long (8)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>kept circling back (7)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>heart hammered chest (7)</span> <span class='slop-ngram-item'>door swung open (7)</span> <span class='slop-ngram-item'>weight words settle (7)</span> <span class='slop-ngram-item'>sam said voice (7)</span> <span class='slop-ngram-item'>small battered notebook (7)</span> <span class='slop-ngram-item'>casting long shadows (6)</span> <span class='slop-ngram-item'>breath trying steady (6)</span> <span class='slop-ngram-item'>said voice steady (6)</span> <span class='slop-ngram-item'>buried beneath layers (6)</span> <span class='slop-ngram-item'>pushed door open (6)</span> <span class='slop-ngram-item'>shook head slowly (6)</span> <span class='slop-ngram-item'>said voice rough (6)</span> <span class='slop-ngram-item'>voice low steady (5)</span> <span class='slop-ngram-item'>trying steady breathing (5)</span> <span class='slop-ngram-item'>first light dawn (5)</span>
</div>

##### gpt-4o-mini
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.803)</div>
<div class='slop-similar'>qwen/qwen-2.5-72b-instruct (distance=0.803)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=0.814)</div>
<div class='slop-similar'>microsoft/phi-4-reasoning-plus (distance=0.814)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.821)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>furrowing</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>busied</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>exclaimed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>underbrush</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>lacing</span> <span class='slop-word-item'>clara</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>coursed</span> <span class='slop-word-item'>dappled</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>igniting</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>softening</span> <span class='slop-word-item'>surged</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (136)</span> <span class='slop-ngram-item'>voice steady (106)</span> <span class='slop-ngram-item'>heart racing (95)</span> <span class='slop-ngram-item'>heart raced (75)</span> <span class='slop-ngram-item'>heart pounding (66)</span> <span class='slop-ngram-item'>deep breath (65)</span> <span class='slop-ngram-item'>felt sense (65)</span> <span class='slop-ngram-item'>stepped forward (56)</span> <span class='slop-ngram-item'>replied voice (55)</span> <span class='slop-ngram-item'>asked voice (54)</span> <span class='slop-ngram-item'>voice low (54)</span> <span class='slop-ngram-item'>felt surge (50)</span> <span class='slop-ngram-item'>took deep (49)</span> <span class='slop-ngram-item'>could see (47)</span> <span class='slop-ngram-item'>voice barely (44)</span> <span class='slop-ngram-item'>eyes wide (43)</span> <span class='slop-ngram-item'>lay ahead (41)</span> <span class='slop-ngram-item'>felt weight (40)</span> <span class='slop-ngram-item'>shake feeling (39)</span> <span class='slop-ngram-item'>felt like (38)</span> <span class='slop-ngram-item'>could feel (37)</span> <span class='slop-ngram-item'>barely whisper (36)</span> <span class='slop-ngram-item'>made way (34)</span> <span class='slop-ngram-item'>voice firm (33)</span> <span class='slop-ngram-item'>mind racing (32)</span> <span class='slop-ngram-item'>eyes sparkling (31)</span> <span class='slop-ngram-item'>voice trembling (31)</span> <span class='slop-ngram-item'>find way (30)</span> <span class='slop-ngram-item'>feeling weight (28)</span> <span class='slop-ngram-item'>voice filled (28)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (49)</span> <span class='slop-ngram-item'>voice barely whisper (36)</span> <span class='slop-ngram-item'>said voice steady (33)</span> <span class='slop-ngram-item'>voice steady despite (25)</span> <span class='slop-ngram-item'>casting warm glow (16)</span> <span class='slop-ngram-item'>said voice low (16)</span> <span class='slop-ngram-item'>heart pounding chest (16)</span> <span class='slop-ngram-item'>trying keep voice (15)</span> <span class='slop-ngram-item'>breath caught throat (15)</span> <span class='slop-ngram-item'>felt renewed sense (14)</span> <span class='slop-ngram-item'>casting long shadows (13)</span> <span class='slop-ngram-item'>keep voice steady (13)</span> <span class='slop-ngram-item'>replied voice steady (13)</span> <span class='slop-ngram-item'>challenges lay ahead (12)</span> <span class='slop-ngram-item'>felt surge hope (12)</span> <span class='slop-ngram-item'>felt flicker hope (12)</span> <span class='slop-ngram-item'>could feel weight (11)</span> <span class='slop-ngram-item'>whatever challenges lay (11)</span> <span class='slop-ngram-item'>spreading across face (11)</span> <span class='slop-ngram-item'>whatever lay ahead (11)</span> <span class='slop-ngram-item'>asked voice low (10)</span> <span class='slop-ngram-item'>renewed sense purpose (10)</span> <span class='slop-ngram-item'>ready face whatever (10)</span> <span class='slop-ngram-item'>said voice barely (10)</span> <span class='slop-ngram-item'>nodded expression serious (10)</span> <span class='slop-ngram-item'>said voice firm (10)</span> <span class='slop-ngram-item'>whatever came next (10)</span> <span class='slop-ngram-item'>ready embrace whatever (10)</span> <span class='slop-ngram-item'>expression shifting one (10)</span> <span class='slop-ngram-item'>running hand hair (9)</span>
</div>

##### gemini-2.0-flash-001
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.714)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.751)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.772)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.803)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.806)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>omnicorp</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>silhouetted</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>ellie</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>glared</span> <span class='slop-word-item'>etched</span> <span class='slop-word-item'>hoarse</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>pulsating</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>clung</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (236)</span> <span class='slop-ngram-item'>eyes filled (71)</span> <span class='slop-ngram-item'>voice barely (49)</span> <span class='slop-ngram-item'>voice trembling (49)</span> <span class='slop-ngram-item'>asked voice (48)</span> <span class='slop-ngram-item'>heart pounding (39)</span> <span class='slop-ngram-item'>voice filled (37)</span> <span class='slop-ngram-item'>voice low (37)</span> <span class='slop-ngram-item'>kai said (34)</span> <span class='slop-ngram-item'>shook head (30)</span> <span class='slop-ngram-item'>deep breath (28)</span> <span class='slop-ngram-item'>pounding chest (28)</span> <span class='slop-ngram-item'>looked eyes (27)</span> <span class='slop-ngram-item'>barely whisper (26)</span> <span class='slop-ngram-item'>closed eyes (26)</span> <span class='slop-ngram-item'>took deep (26)</span> <span class='slop-ngram-item'>barely audible (24)</span> <span class='slop-ngram-item'>eyes fixed (24)</span> <span class='slop-ngram-item'>face etched (24)</span> <span class='slop-ngram-item'>air thick (23)</span> <span class='slop-ngram-item'>eva said (23)</span> <span class='slop-ngram-item'>filled mixture (22)</span> <span class='slop-ngram-item'>something else (22)</span> <span class='slop-ngram-item'>face pale (21)</span> <span class='slop-ngram-item'>whispered voice (21)</span> <span class='slop-ngram-item'>said eyes (18)</span> <span class='slop-ngram-item'>felt surge (18)</span> <span class='slop-ngram-item'>alright said (18)</span> <span class='slop-ngram-item'>said softly (18)</span> <span class='slop-ngram-item'>felt like (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart pounding chest (27)</span> <span class='slop-ngram-item'>said voice filled (26)</span> <span class='slop-ngram-item'>took deep breath (26)</span> <span class='slop-ngram-item'>voice barely whisper (25)</span> <span class='slop-ngram-item'>said voice trembling (25)</span> <span class='slop-ngram-item'>voice barely audible (24)</span> <span class='slop-ngram-item'>said voice barely (23)</span> <span class='slop-ngram-item'>said voice low (23)</span> <span class='slop-ngram-item'>looked eyes filled (17)</span> <span class='slop-ngram-item'>eyes filled mixture (16)</span> <span class='slop-ngram-item'>kai said voice (13)</span> <span class='slop-ngram-item'>air thick smell (12)</span> <span class='slop-ngram-item'>could shake feeling (12)</span> <span class='slop-ngram-item'>senses high alert (12)</span> <span class='slop-ngram-item'>elara said voice (11)</span> <span class='slop-ngram-item'>face pale drawn (9)</span> <span class='slop-ngram-item'>whispered voice barely (9)</span> <span class='slop-ngram-item'>said voice cold (9)</span> <span class='slop-ngram-item'>eva felt surge (8)</span> <span class='slop-ngram-item'>said finally voice (8)</span> <span class='slop-ngram-item'>stared mind reeling (7)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>face etched concern (7)</span> <span class='slop-ngram-item'>said trying sound (7)</span> <span class='slop-ngram-item'>hesitated eyes darting (7)</span> <span class='slop-ngram-item'>filled mixture sadness (6)</span> <span class='slop-ngram-item'>said voice laced (6)</span> <span class='slop-ngram-item'>said voice firm (6)</span> <span class='slop-ngram-item'>said voice pleading (6)</span> <span class='slop-ngram-item'>eyes darting nervously (6)</span>
</div>

##### qwen/qwen3-14b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.665)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.718)</div>
<div class='slop-similar'>qwen/qwen3-8b (distance=0.742)</div>
<div class='slop-similar'>qwen/qwen3-1.7b (distance=0.761)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.765)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>clara</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>vane</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>convulsed</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>hilt</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>darkened</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>pounded</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>reverent</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>iridescent</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>crackle</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (204)</span> <span class='slop-ngram-item'>voice low (114)</span> <span class='slop-ngram-item'>heart pounding (101)</span> <span class='slop-ngram-item'>first time (98)</span> <span class='slop-ngram-item'>voice steady (92)</span> <span class='slop-ngram-item'>spent life (88)</span> <span class='slop-ngram-item'>stepped forward (82)</span> <span class='slop-ngram-item'>mind racing (79)</span> <span class='slop-ngram-item'>spent years (79)</span> <span class='slop-ngram-item'>breath caught (73)</span> <span class='slop-ngram-item'>looked like (65)</span> <span class='slop-ngram-item'>expression unreadable (65)</span> <span class='slop-ngram-item'>voice barely (65)</span> <span class='slop-ngram-item'>eyes wide (62)</span> <span class='slop-ngram-item'>barely whisper (62)</span> <span class='slop-ngram-item'>silence thick (62)</span> <span class='slop-ngram-item'>something else (61)</span> <span class='slop-ngram-item'>know said (60)</span> <span class='slop-ngram-item'>hands trembling (60)</span> <span class='slop-ngram-item'>stepped closer (57)</span> <span class='slop-ngram-item'>thick weight (56)</span> <span class='slop-ngram-item'>could feel (55)</span> <span class='slop-ngram-item'>filled something (55)</span> <span class='slop-ngram-item'>eyes filled (54)</span> <span class='slop-ngram-item'>turned back (53)</span> <span class='slop-ngram-item'>tightened around (52)</span> <span class='slop-ngram-item'>time sure (52)</span> <span class='slop-ngram-item'>chasing ghosts (50)</span> <span class='slop-ngram-item'>something looked (48)</span> <span class='slop-ngram-item'>fingers tightened (47)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (61)</span> <span class='slop-ngram-item'>said voice low (54)</span> <span class='slop-ngram-item'>eyes filled something (54)</span> <span class='slop-ngram-item'>first time sure (52)</span> <span class='slop-ngram-item'>fingers tightened around (47)</span> <span class='slop-ngram-item'>something looked like (47)</span> <span class='slop-ngram-item'>said voice barely (39)</span> <span class='slop-ngram-item'>filled something looked (37)</span> <span class='slop-ngram-item'>air thick scent (33)</span> <span class='slop-ngram-item'>heart pounded chest (28)</span> <span class='slop-ngram-item'>thought daughter way (24)</span> <span class='slop-ngram-item'>man spent life (22)</span> <span class='slop-ngram-item'>first time years (21)</span> <span class='slop-ngram-item'>pounded chest wanted (21)</span> <span class='slop-ngram-item'>voice quiet almost (20)</span> <span class='slop-ngram-item'>stepped closer voice (18)</span> <span class='slop-ngram-item'>stepped forward voice (18)</span> <span class='slop-ngram-item'>something else something (18)</span> <span class='slop-ngram-item'>mind racing spent (18)</span> <span class='slop-ngram-item'>door creaked open (18)</span> <span class='slop-ngram-item'>moment world seemed (16)</span> <span class='slop-ngram-item'>looked like hope (15)</span> <span class='slop-ngram-item'>said voice steady (14)</span> <span class='slop-ngram-item'>casting long shadows (14)</span> <span class='slop-ngram-item'>eyes wide something (13)</span> <span class='slop-ngram-item'>lips parted words (13)</span> <span class='slop-ngram-item'>knew one thing (12)</span> <span class='slop-ngram-item'>door slammed shut (12)</span> <span class='slop-ngram-item'>said voice trembling (12)</span> <span class='slop-ngram-item'>long shadows across (12)</span>
</div>

##### qwen/qwen-2.5-72b-instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4o-mini (distance=0.803)</div>
<div class='slop-similar'>CohereForAI/c4ai-command-a-03-2025 (distance=0.813)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.817)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.817)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.825)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>furrowing</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>jasper</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>eliza</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>rourke</span> <span class='slop-word-item'>hawthorne</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>lily</span> <span class='slop-word-item'>fidgeting</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>softened</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>sneered</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>tinged</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>swelled</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>fraught</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>whirl</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>unwavering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (193)</span> <span class='slop-ngram-item'>voice steady (148)</span> <span class='slop-ngram-item'>find way (124)</span> <span class='slop-ngram-item'>felt sense (92)</span> <span class='slop-ngram-item'>need find (88)</span> <span class='slop-ngram-item'>nodded eyes (85)</span> <span class='slop-ngram-item'>felt mix (82)</span> <span class='slop-ngram-item'>deep breath (81)</span> <span class='slop-ngram-item'>mind raced (80)</span> <span class='slop-ngram-item'>need careful (75)</span> <span class='slop-ngram-item'>made way (74)</span> <span class='slop-ngram-item'>eyes scanning (73)</span> <span class='slop-ngram-item'>expression serious (73)</span> <span class='slop-ngram-item'>mind racing (72)</span> <span class='slop-ngram-item'>nodded expression (68)</span> <span class='slop-ngram-item'>ready face (64)</span> <span class='slop-ngram-item'>air thick (62)</span> <span class='slop-ngram-item'>eyes widened (62)</span> <span class='slop-ngram-item'>took deep (59)</span> <span class='slop-ngram-item'>eyes filled (59)</span> <span class='slop-ngram-item'>eyes met (59)</span> <span class='slop-ngram-item'>voice low (56)</span> <span class='slop-ngram-item'>make sure (55)</span> <span class='slop-ngram-item'>stepped forward (54)</span> <span class='slop-ngram-item'>asked voice (51)</span> <span class='slop-ngram-item'>heart pounding (51)</span> <span class='slop-ngram-item'>could let (51)</span> <span class='slop-ngram-item'>mix excitement (50)</span> <span class='slop-ngram-item'>heart raced (49)</span> <span class='slop-ngram-item'>face whatever (49)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (58)</span> <span class='slop-ngram-item'>said voice steady (57)</span> <span class='slop-ngram-item'>nodded expression serious (29)</span> <span class='slop-ngram-item'>ready face whatever (29)</span> <span class='slop-ngram-item'>face whatever came (27)</span> <span class='slop-ngram-item'>said voice low (27)</span> <span class='slop-ngram-item'>eyes locking onto (27)</span> <span class='slop-ngram-item'>one step time (25)</span> <span class='slop-ngram-item'>heart skipped beat (25)</span> <span class='slop-ngram-item'>air thick scent (24)</span> <span class='slop-ngram-item'>whatever came next (23)</span> <span class='slop-ngram-item'>need act fast (23)</span> <span class='slop-ngram-item'>said voice firm (22)</span> <span class='slop-ngram-item'>made way back (21)</span> <span class='slop-ngram-item'>said voice filled (21)</span> <span class='slop-ngram-item'>mind racing possibilities (20)</span> <span class='slop-ngram-item'>need find way (20)</span> <span class='slop-ngram-item'>nodded mind racing (19)</span> <span class='slop-ngram-item'>could shake feeling (19)</span> <span class='slop-ngram-item'>eyes locked onto (19)</span> <span class='slop-ngram-item'>felt growing sense (18)</span> <span class='slop-ngram-item'>nodded mind already (17)</span> <span class='slop-ngram-item'>make real difference (17)</span> <span class='slop-ngram-item'>determined find way (17)</span> <span class='slop-ngram-item'>knew road ahead (16)</span> <span class='slop-ngram-item'>mind raced possibilities (16)</span> <span class='slop-ngram-item'>eyes filled mix (16)</span> <span class='slop-ngram-item'>nodded voice steady (15)</span> <span class='slop-ngram-item'>stakes higher ever (15)</span> <span class='slop-ngram-item'>mind whirl thoughts (15)</span>
</div>

##### RekaAI/reka-flash-3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.712)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.723)</div>
<div class='slop-similar'>qwen/qwen3-235b-a22b (distance=0.732)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.772)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.784)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>keycard</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>cybernetic</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>pried</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>intoned</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>scrawled</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (30)</span> <span class='slop-ngram-item'>word count (28)</span> <span class='slop-ngram-item'>phone buzzed (24)</span> <span class='slop-ngram-item'>mara said (17)</span> <span class='slop-ngram-item'>cargo bay (15)</span> <span class='slop-ngram-item'>smelled like (14)</span> <span class='slop-ngram-item'>stepped forward (14)</span> <span class='slop-ngram-item'>stood doorway (14)</span> <span class='slop-ngram-item'>coiled around (14)</span> <span class='slop-ngram-item'>voice echoed (13)</span> <span class='slop-ngram-item'>stepped closer (13)</span> <span class='slop-ngram-item'>fingers brushing (13)</span> <span class='slop-ngram-item'>said nothing (13)</span> <span class='slop-ngram-item'>creaked open (12)</span> <span class='slop-ngram-item'>let go (11)</span> <span class='slop-ngram-item'>lena said (11)</span> <span class='slop-ngram-item'>lit cigarette (11)</span> <span class='slop-ngram-item'>door creaked (11)</span> <span class='slop-ngram-item'>gon na (10)</span> <span class='slop-ngram-item'>unknown number (10)</span> <span class='slop-ngram-item'>like dying (10)</span> <span class='slop-ngram-item'>crossed arms (10)</span> <span class='slop-ngram-item'>lab coat (10)</span> <span class='slop-ngram-item'>felt like (10)</span> <span class='slop-ngram-item'>breath hitched (10)</span> <span class='slop-ngram-item'>looked like (10)</span> <span class='slop-ngram-item'>jesse said (10)</span> <span class='slop-ngram-item'>knelt beside (10)</span> <span class='slop-ngram-item'>lena whispered (9)</span> <span class='slop-ngram-item'>glowing faintly (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>door creaked open (11)</span> <span class='slop-ngram-item'>smile reach eyes (7)</span> <span class='slop-ngram-item'>blood turned ice (7)</span> <span class='slop-ngram-item'>phone buzzed text (5)</span> <span class='slop-ngram-item'>lit cigarette smoke (5)</span> <span class='slop-ngram-item'>heels clicking like (5)</span> <span class='slop-ngram-item'>cigarette smoke curling (4)</span> <span class='slop-ngram-item'>phone buzzed unknown (4)</span> <span class='slop-ngram-item'>buzzed unknown number (4)</span> <span class='slop-ngram-item'>glowing faintly blue (4)</span> <span class='slop-ngram-item'>door slammed shut (4)</span> <span class='slop-ngram-item'>syringe glinting hand (4)</span> <span class='slop-ngram-item'>stepped forward voice (4)</span> <span class='slop-ngram-item'>serpent coiled around (4)</span> <span class='slop-ngram-item'>chain coiled around (4)</span> <span class='slop-ngram-item'>stepped closer voice (4)</span> <span class='slop-ngram-item'>rain lashed windows (4)</span> <span class='slop-ngram-item'>parked two blocks (3)</span> <span class='slop-ngram-item'>blood ran cold (3)</span> <span class='slop-ngram-item'>glowing like cursed (3)</span> <span class='slop-ngram-item'>voice echoed head (3)</span> <span class='slop-ngram-item'>voice smooth oil (3)</span> <span class='slop-ngram-item'>door swung open (3)</span> <span class='slop-ngram-item'>clicking like countdown (3)</span> <span class='slop-ngram-item'>casting jagged shadows (3)</span> <span class='slop-ngram-item'>laughed hollow sound (3)</span> <span class='slop-ngram-item'>blood trickling nose (3)</span> <span class='slop-ngram-item'>front door slammed (3)</span> <span class='slop-ngram-item'>alex said voice (3)</span> <span class='slop-ngram-item'>hand twitched toward (3)</span>
</div>

##### google/gemma-3-12b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.702)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.743)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.751)</div>
<div class='slop-similar'>sam-paech/gemma-3-27b-it-antislop-exp19 (distance=0.813)</div>
<div class='slop-similar'>gemini-2.5-flash-preview (distance=0.818)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>eleanor</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>spore</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>spores</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rhiannon</span> <span class='slop-word-item'>melancholic</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>resonated</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (123)</span> <span class='slop-ngram-item'>voice low (44)</span> <span class='slop-ngram-item'>asked voice (44)</span> <span class='slop-ngram-item'>voice trembling (31)</span> <span class='slop-ngram-item'>voice barely (30)</span> <span class='slop-ngram-item'>felt surge (28)</span> <span class='slop-ngram-item'>barely whisper (24)</span> <span class='slop-ngram-item'>expression unreadable (23)</span> <span class='slop-ngram-item'>elara said (23)</span> <span class='slop-ngram-item'>eyes filled (20)</span> <span class='slop-ngram-item'>eleanor vance (20)</span> <span class='slop-ngram-item'>shook head (17)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>paused added (17)</span> <span class='slop-ngram-item'>said finally (17)</span> <span class='slop-ngram-item'>replied voice (17)</span> <span class='slop-ngram-item'>something else (17)</span> <span class='slop-ngram-item'>carefully constructed (17)</span> <span class='slop-ngram-item'>eyes fixed (17)</span> <span class='slop-ngram-item'>rhys said (16)</span> <span class='slop-ngram-item'>gaze fixed (15)</span> <span class='slop-ngram-item'>young man (15)</span> <span class='slop-ngram-item'>voice laced (15)</span> <span class='slop-ngram-item'>trembling slightly (15)</span> <span class='slop-ngram-item'>voice filled (15)</span> <span class='slop-ngram-item'>flicker something (14)</span> <span class='slop-ngram-item'>felt like (14)</span> <span class='slop-ngram-item'>smile playing (14)</span> <span class='slop-ngram-item'>playing lips (14)</span> <span class='slop-ngram-item'>face etched (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (25)</span> <span class='slop-ngram-item'>voice barely whisper (24)</span> <span class='slop-ngram-item'>smile playing lips (14)</span> <span class='slop-ngram-item'>voice trembling slightly (13)</span> <span class='slop-ngram-item'>elara said voice (12)</span> <span class='slop-ngram-item'>said voice barely (11)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>asked voice barely (9)</span> <span class='slop-ngram-item'>hung air heavy (8)</span> <span class='slop-ngram-item'>felt surge anger (8)</span> <span class='slop-ngram-item'>heart pounding chest (8)</span> <span class='slop-ngram-item'>felt chill run (7)</span> <span class='slop-ngram-item'>chill run spine (7)</span> <span class='slop-ngram-item'>asked voice filled (7)</span> <span class='slop-ngram-item'>sent shiver spine (7)</span> <span class='slop-ngram-item'>said voice laced (7)</span> <span class='slop-ngram-item'>jax said voice (6)</span> <span class='slop-ngram-item'>eyes filled mixture (6)</span> <span class='slop-ngram-item'>said voice trembling (6)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>faint smile playing (6)</span> <span class='slop-ngram-item'>turned leave paused (5)</span> <span class='slop-ngram-item'>small intricately carved (5)</span> <span class='slop-ngram-item'>said voice surprisingly (5)</span> <span class='slop-ngram-item'>asked voice trembling (5)</span> <span class='slop-ngram-item'>unlike anything ever (5)</span> <span class='slop-ngram-item'>long distorted shadows (5)</span> <span class='slop-ngram-item'>said voice strained (5)</span> <span class='slop-ngram-item'>felt profound sense (5)</span> <span class='slop-ngram-item'>could ever imagined (5)</span>
</div>

##### microsoft/phi-4-reasoning-plus
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-4o-mini (distance=0.814)</div>
<div class='slop-similar'>qwen/qwen-2.5-72b-instruct (distance=0.834)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=0.849)</div>
<div class='slop-similar'>gpt-4.1-mini (distance=0.853)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.860)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>crackled</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>simmered</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>tinged</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>mused</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>reveled</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>undercurrent</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>undercurrents</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>fraught</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>coursed</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>misstep</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>reverberated</span> <span class='slop-word-item'>pragmatist</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>deepened</span> <span class='slop-word-item'>mingled</span> <span class='slop-word-item'>resonated</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>unravel</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>rustle</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>trepidation</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice steady (59)</span> <span class='slop-ngram-item'>steady despite (37)</span> <span class='slop-ngram-item'>voice tinged (37)</span> <span class='slop-ngram-item'>air thick (32)</span> <span class='slop-ngram-item'>mind raced (28)</span> <span class='slop-ngram-item'>casting long (27)</span> <span class='slop-ngram-item'>deep breath (26)</span> <span class='slop-ngram-item'>beneath surface (26)</span> <span class='slop-ngram-item'>morning light (25)</span> <span class='slop-ngram-item'>constant reminder (25)</span> <span class='slop-ngram-item'>every step (24)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>shake feeling (24)</span> <span class='slop-ngram-item'>lay ahead (24)</span> <span class='slop-ngram-item'>mind already (24)</span> <span class='slop-ngram-item'>mind whirlwind (23)</span> <span class='slop-ngram-item'>mind racing (23)</span> <span class='slop-ngram-item'>long shadows (22)</span> <span class='slop-ngram-item'>said voice (22)</span> <span class='slop-ngram-item'>whispered secrets (21)</span> <span class='slop-ngram-item'>began voice (20)</span> <span class='slop-ngram-item'>dimly lit (20)</span> <span class='slop-ngram-item'>nodded expression (20)</span> <span class='slop-ngram-item'>eyes reflecting (20)</span> <span class='slop-ngram-item'>yet beneath (20)</span> <span class='slop-ngram-item'>made way (19)</span> <span class='slop-ngram-item'>genuine connection (19)</span> <span class='slop-ngram-item'>seemed pulse (18)</span> <span class='slop-ngram-item'>heart pounded (18)</span> <span class='slop-ngram-item'>resolve hardened (18)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice steady despite (33)</span> <span class='slop-ngram-item'>casting long shadows (19)</span> <span class='slop-ngram-item'>began voice steady (13)</span> <span class='slop-ngram-item'>air thick scent (12)</span> <span class='slop-ngram-item'>words hung air (10)</span> <span class='slop-ngram-item'>ready face whatever (10)</span> <span class='slop-ngram-item'>mind already racing (10)</span> <span class='slop-ngram-item'>first light dawn (9)</span> <span class='slop-ngram-item'>path ahead fraught (9)</span> <span class='slop-ngram-item'>asked voice tinged (9)</span> <span class='slop-ngram-item'>renewed sense purpose (9)</span> <span class='slop-ngram-item'>morning light filtered (9)</span> <span class='slop-ngram-item'>voice steady yet (9)</span> <span class='slop-ngram-item'>yet beneath surface (9)</span> <span class='slop-ngram-item'>long shadows across (9)</span> <span class='slop-ngram-item'>replied voice steady (8)</span> <span class='slop-ngram-item'>taking deep breath (7)</span> <span class='slop-ngram-item'>stakes higher ever (7)</span> <span class='slop-ngram-item'>made silent vow (7)</span> <span class='slop-ngram-item'>took deep breath (7)</span> <span class='slop-ngram-item'>felt renewed sense (7)</span> <span class='slop-ngram-item'>sun climbed higher (7)</span> <span class='slop-ngram-item'>voice barely whisper (7)</span> <span class='slop-ngram-item'>words echoed mind (6)</span> <span class='slop-ngram-item'>every shadow seemed (6)</span> <span class='slop-ngram-item'>mind whirlwind thoughts (6)</span> <span class='slop-ngram-item'>steady despite gravity (6)</span> <span class='slop-ngram-item'>challenges lay ahead (6)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>heart pounded chest (6)</span>
</div>

##### google/gemma-3-4b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.743)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.753)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.803)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.824)</div>
<div class='slop-similar'>sam-paech/gemma-3-27b-it-antislop-exp19 (distance=0.839)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>blackwoods</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>dampness</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>amplifying</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>melancholic</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>malevolent</span> <span class='slop-word-item'>fragmented</span> <span class='slop-word-item'>decaying</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>fleeting</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>streaked</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>chilling</span> <span class='slop-word-item'>insistent</span> <span class='slop-word-item'>etched</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (194)</span> <span class='slop-ngram-item'>voice barely (48)</span> <span class='slop-ngram-item'>voice laced (34)</span> <span class='slop-ngram-item'>voice filled (33)</span> <span class='slop-ngram-item'>blackwood manor (33)</span> <span class='slop-ngram-item'>voice low (32)</span> <span class='slop-ngram-item'>felt strange (29)</span> <span class='slop-ngram-item'>silas blackwood (29)</span> <span class='slop-ngram-item'>barely audible (28)</span> <span class='slop-ngram-item'>sense unease (26)</span> <span class='slop-ngram-item'>growing sense (25)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>replied voice (23)</span> <span class='slop-ngram-item'>rain continued (23)</span> <span class='slop-ngram-item'>barely whisper (22)</span> <span class='slop-ngram-item'>blackwood house (22)</span> <span class='slop-ngram-item'>almost imperceptible (21)</span> <span class='slop-ngram-item'>voice strained (21)</span> <span class='slop-ngram-item'>carefully constructed (20)</span> <span class='slop-ngram-item'>devoid emotion (19)</span> <span class='slop-ngram-item'>continued fall (18)</span> <span class='slop-ngram-item'>small almost (17)</span> <span class='slop-ngram-item'>noticed small (17)</span> <span class='slop-ngram-item'>silas said (16)</span> <span class='slop-ngram-item'>whispered voice (16)</span> <span class='slop-ngram-item'>noticed something (16)</span> <span class='slop-ngram-item'>geometric patterns (16)</span> <span class='slop-ngram-item'>profound sense (16)</span> <span class='slop-ngram-item'>blackwood family (16)</span> <span class='slop-ngram-item'>voice devoid (16)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely audible (26)</span> <span class='slop-ngram-item'>said voice low (24)</span> <span class='slop-ngram-item'>said voice barely (22)</span> <span class='slop-ngram-item'>voice barely whisper (22)</span> <span class='slop-ngram-item'>said voice filled (18)</span> <span class='slop-ngram-item'>rain continued fall (18)</span> <span class='slop-ngram-item'>said voice laced (15)</span> <span class='slop-ngram-item'>silas said voice (14)</span> <span class='slop-ngram-item'>voice devoid emotion (12)</span> <span class='slop-ngram-item'>small almost imperceptible (11)</span> <span class='slop-ngram-item'>said voice strained (10)</span> <span class='slop-ngram-item'>growing sense unease (10)</span> <span class='slop-ngram-item'>small intricately carved (10)</span> <span class='slop-ngram-item'>growing sense dread (9)</span> <span class='slop-ngram-item'>felt strange sense (9)</span> <span class='slop-ngram-item'>elias said voice (8)</span> <span class='slop-ngram-item'>continued fall washing (8)</span> <span class='slop-ngram-item'>smile playing lips (8)</span> <span class='slop-ngram-item'>faint almost imperceptible (7)</span> <span class='slop-ngram-item'>chilling realization dawned (7)</span> <span class='slop-ngram-item'>voice laced hint (7)</span> <span class='slop-ngram-item'>said voice firm (7)</span> <span class='slop-ngram-item'>knew chilling certainty (7)</span> <span class='slop-ngram-item'>said voice trembling (7)</span> <span class='slop-ngram-item'>said voice devoid (7)</span> <span class='slop-ngram-item'>persistent grey drizzle (6)</span> <span class='slop-ngram-item'>noticed subtle shift (6)</span> <span class='slop-ngram-item'>voice filled chilling (6)</span> <span class='slop-ngram-item'>noticed small almost (6)</span> <span class='slop-ngram-item'>things best left (6)</span>
</div>

##### meta-llama/Llama-4-Maverick-17B-128E-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.655)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.660)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.796)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=0.813)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.813)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>gaudy</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>windowsill</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>suffocating</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>malevolent</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>sophia</span> <span class='slop-word-item'>recede</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>cusp</span> <span class='slop-word-item'>oppressive</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>patel</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt sense (228)</span> <span class='slop-ngram-item'>said voice (182)</span> <span class='slop-ngram-item'>eyes locked (90)</span> <span class='slop-ngram-item'>voice low (89)</span> <span class='slop-ngram-item'>mind racing (74)</span> <span class='slop-ngram-item'>sense unease (72)</span> <span class='slop-ngram-item'>air thick (69)</span> <span class='slop-ngram-item'>asked voice (61)</span> <span class='slop-ngram-item'>run spine (58)</span> <span class='slop-ngram-item'>voice barely (58)</span> <span class='slop-ngram-item'>voice firm (55)</span> <span class='slop-ngram-item'>shake feeling (54)</span> <span class='slop-ngram-item'>could shake (51)</span> <span class='slop-ngram-item'>eyes fixed (50)</span> <span class='slop-ngram-item'>barely whisper (49)</span> <span class='slop-ngram-item'>eyes scanning (48)</span> <span class='slop-ngram-item'>feeling sense (47)</span> <span class='slop-ngram-item'>shiver run (46)</span> <span class='slop-ngram-item'>felt shiver (41)</span> <span class='slop-ngram-item'>could help (41)</span> <span class='slop-ngram-item'>locked onto (41)</span> <span class='slop-ngram-item'>high alert (39)</span> <span class='slop-ngram-item'>felt like (38)</span> <span class='slop-ngram-item'>could feel (38)</span> <span class='slop-ngram-item'>seemed press (35)</span> <span class='slop-ngram-item'>press around (35)</span> <span class='slop-ngram-item'>senses high (35)</span> <span class='slop-ngram-item'>knew careful (34)</span> <span class='slop-ngram-item'>darkness seemed (34)</span> <span class='slop-ngram-item'>eyes narrowed (33)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (48)</span> <span class='slop-ngram-item'>said voice low (47)</span> <span class='slop-ngram-item'>shiver run spine (46)</span> <span class='slop-ngram-item'>could shake feeling (46)</span> <span class='slop-ngram-item'>felt shiver run (41)</span> <span class='slop-ngram-item'>said voice firm (36)</span> <span class='slop-ngram-item'>senses high alert (35)</span> <span class='slop-ngram-item'>seemed press around (34)</span> <span class='slop-ngram-item'>eyes locked onto (33)</span> <span class='slop-ngram-item'>mind racing implications (30)</span> <span class='slop-ngram-item'>took deep breath (27)</span> <span class='slop-ngram-item'>heart pounding chest (26)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>felt sense unease (25)</span> <span class='slop-ngram-item'>mind racing possibilities (23)</span> <span class='slop-ngram-item'>felt sense wonder (22)</span> <span class='slop-ngram-item'>darkness seemed press (21)</span> <span class='slop-ngram-item'>air thick tension (21)</span> <span class='slop-ngram-item'>air thick smell (20)</span> <span class='slop-ngram-item'>felt sense relief (19)</span> <span class='slop-ngram-item'>said voice dripping (19)</span> <span class='slop-ngram-item'>sense relief wash (18)</span> <span class='slop-ngram-item'>darkness outside seemed (17)</span> <span class='slop-ngram-item'>smiled feeling sense (16)</span> <span class='slop-ngram-item'>press around making (16)</span> <span class='slop-ngram-item'>feel sense unease (16)</span> <span class='slop-ngram-item'>eyes never leaving (16)</span> <span class='slop-ngram-item'>could feel weight (15)</span> <span class='slop-ngram-item'>could help feel (15)</span> <span class='slop-ngram-item'>voice low husky (15)</span>
</div>

##### qwen/qwen3-8b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.725)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.730)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.742)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.767)</div>
<div class='slop-similar'>qwen/qwen3-1.7b (distance=0.770)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>outmaneuver</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>reverent</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>outmaneuvered</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>enforcers</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>ledger</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>artifact</span> <span class='slop-word-item'>clara</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>townsfolk</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>satchel</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>fogged</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like (600)</span> <span class='slop-ngram-item'>said voice (334)</span> <span class='slop-ngram-item'>voice low (246)</span> <span class='slop-ngram-item'>spent life (181)</span> <span class='slop-ngram-item'>voice steady (176)</span> <span class='slop-ngram-item'>hands trembled (166)</span> <span class='slop-ngram-item'>voice whisper (155)</span> <span class='slop-ngram-item'>could feel (155)</span> <span class='slop-ngram-item'>voice quiet (141)</span> <span class='slop-ngram-item'>eyes narrowed (141)</span> <span class='slop-ngram-item'>spent years (132)</span> <span class='slop-ngram-item'>elara voice (130)</span> <span class='slop-ngram-item'>mind storm (116)</span> <span class='slop-ngram-item'>voice soft (106)</span> <span class='slop-ngram-item'>weight words (105)</span> <span class='slop-ngram-item'>know say (98)</span> <span class='slop-ngram-item'>something else (93)</span> <span class='slop-ngram-item'>felt weight (90)</span> <span class='slop-ngram-item'>feel like (84)</span> <span class='slop-ngram-item'>long time (83)</span> <span class='slop-ngram-item'>voice sharp (83)</span> <span class='slop-ngram-item'>wind howled (81)</span> <span class='slop-ngram-item'>think one (79)</span> <span class='slop-ngram-item'>voice trembling (78)</span> <span class='slop-ngram-item'>stepped closer (76)</span> <span class='slop-ngram-item'>mind racing (75)</span> <span class='slop-ngram-item'>words felt (75)</span> <span class='slop-ngram-item'>air thick (74)</span> <span class='slop-ngram-item'>looked weight (72)</span> <span class='slop-ngram-item'>say anything (70)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (86)</span> <span class='slop-ngram-item'>looked weight words (67)</span> <span class='slop-ngram-item'>voice soft almost (66)</span> <span class='slop-ngram-item'>spent life avoiding (58)</span> <span class='slop-ngram-item'>seemed hold breath (58)</span> <span class='slop-ngram-item'>weight words settling (57)</span> <span class='slop-ngram-item'>felt like quiet (57)</span> <span class='slop-ngram-item'>said voice steady (56)</span> <span class='slop-ngram-item'>could feel weight (55)</span> <span class='slop-ngram-item'>presence felt like (55)</span> <span class='slop-ngram-item'>spent life chasing (53)</span> <span class='slop-ngram-item'>spent years pretending (51)</span> <span class='slop-ngram-item'>words felt like (50)</span> <span class='slop-ngram-item'>felt like thing (43)</span> <span class='slop-ngram-item'>stepped forward voice (40)</span> <span class='slop-ngram-item'>exhaled sound like (39)</span> <span class='slop-ngram-item'>air thick scent (38)</span> <span class='slop-ngram-item'>eli hands trembled (36)</span> <span class='slop-ngram-item'>eyes flickered something (34)</span> <span class='slop-ngram-item'>like question ready (33)</span> <span class='slop-ngram-item'>life avoiding truth (33)</span> <span class='slop-ngram-item'>knew one thing (32)</span> <span class='slop-ngram-item'>felt like lie (31)</span> <span class='slop-ngram-item'>voice quiet almost (30)</span> <span class='slop-ngram-item'>voice barely whisper (29)</span> <span class='slop-ngram-item'>voice low think (29)</span> <span class='slop-ngram-item'>felt like question (28)</span> <span class='slop-ngram-item'>felt like waiting (28)</span> <span class='slop-ngram-item'>eyes narrowed think (27)</span> <span class='slop-ngram-item'>casting long shadows (26)</span>
</div>

##### meta-llama/llama-4-scout:free
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.640)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.655)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.751)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.808)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.824)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>glinting</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>sneered</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>emily</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>alleyway</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>journeyed</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>uncover</span> <span class='slop-word-item'>patel</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>reeling</span> <span class='slop-word-item'>sparkling</span> <span class='slop-word-item'>eerie</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>pulsating</span> <span class='slop-word-item'>alex</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>scanning</span> <span class='slop-word-item'>spine</span> <span class='slop-word-item'>footsteps</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>echoing</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (189)</span> <span class='slop-ngram-item'>felt sense (133)</span> <span class='slop-ngram-item'>could help (104)</span> <span class='slop-ngram-item'>feel sense (78)</span> <span class='slop-ngram-item'>voice low (72)</span> <span class='slop-ngram-item'>help feel (69)</span> <span class='slop-ngram-item'>eyes locked (65)</span> <span class='slop-ngram-item'>asked voice (62)</span> <span class='slop-ngram-item'>sense unease (62)</span> <span class='slop-ngram-item'>shake feeling (60)</span> <span class='slop-ngram-item'>mind racing (59)</span> <span class='slop-ngram-item'>could shake (59)</span> <span class='slop-ngram-item'>run spine (53)</span> <span class='slop-ngram-item'>voice firm (53)</span> <span class='slop-ngram-item'>knew careful (50)</span> <span class='slop-ngram-item'>nodded eyes (50)</span> <span class='slop-ngram-item'>voice barely (49)</span> <span class='slop-ngram-item'>feeling sense (49)</span> <span class='slop-ngram-item'>barely whisper (45)</span> <span class='slop-ngram-item'>eyes fixed (44)</span> <span class='slop-ngram-item'>walked away (41)</span> <span class='slop-ngram-item'>eyes widened (40)</span> <span class='slop-ngram-item'>eyes narrowed (37)</span> <span class='slop-ngram-item'>knew would (36)</span> <span class='slop-ngram-item'>eyes scanning (36)</span> <span class='slop-ngram-item'>heart pounding (35)</span> <span class='slop-ngram-item'>shiver run (34)</span> <span class='slop-ngram-item'>said eyes (34)</span> <span class='slop-ngram-item'>felt surge (34)</span> <span class='slop-ngram-item'>pounding chest (34)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could help feel (69)</span> <span class='slop-ngram-item'>help feel sense (66)</span> <span class='slop-ngram-item'>could shake feeling (59)</span> <span class='slop-ngram-item'>said voice low (54)</span> <span class='slop-ngram-item'>voice barely whisper (45)</span> <span class='slop-ngram-item'>said voice firm (41)</span> <span class='slop-ngram-item'>shiver run spine (34)</span> <span class='slop-ngram-item'>heart pounding chest (34)</span> <span class='slop-ngram-item'>felt shiver run (31)</span> <span class='slop-ngram-item'>took deep breath (31)</span> <span class='slop-ngram-item'>feel sense unease (30)</span> <span class='slop-ngram-item'>eyes never leaving (30)</span> <span class='slop-ngram-item'>shake feeling watched (27)</span> <span class='slop-ngram-item'>heart skipped beat (25)</span> <span class='slop-ngram-item'>said voice barely (24)</span> <span class='slop-ngram-item'>eyes narrowed mind (22)</span> <span class='slop-ngram-item'>narrowed mind racing (22)</span> <span class='slop-ngram-item'>eyes glinting amusement (20)</span> <span class='slop-ngram-item'>knew would always (20)</span> <span class='slop-ngram-item'>ready face whatever (19)</span> <span class='slop-ngram-item'>felt sense unease (19)</span> <span class='slop-ngram-item'>felt chill run (19)</span> <span class='slop-ngram-item'>chill run spine (19)</span> <span class='slop-ngram-item'>asked voice barely (17)</span> <span class='slop-ngram-item'>could help think (16)</span> <span class='slop-ngram-item'>sense relief wash (16)</span> <span class='slop-ngram-item'>one step ahead (16)</span> <span class='slop-ngram-item'>eyes locked mine (15)</span> <span class='slop-ngram-item'>mind racing knew (15)</span> <span class='slop-ngram-item'>voice low smooth (14)</span>
</div>

##### mistralai/Mistral-Nemo-Instruct-2407
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=0.805)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.813)</div>
<div class='slop-similar'>qwen/qwen-2.5-72b-instruct (distance=0.817)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.818)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.820)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>zephyr</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>jumble</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>candlestick</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>coursed</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>pursuers</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>grudging</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>precipice</span> <span class='slop-word-item'>overactive</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>heirloom</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>heart</span> <span class='slop-word-item'>disheveled</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>muffled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>cautiously</span> <span class='slop-word-item'>softening</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (296)</span> <span class='slop-ngram-item'>also knew (176)</span> <span class='slop-ngram-item'>heart pounding (170)</span> <span class='slop-ngram-item'>deep breath (135)</span> <span class='slop-ngram-item'>voice steady (121)</span> <span class='slop-ngram-item'>eyes fixed (110)</span> <span class='slop-ngram-item'>shake feeling (108)</span> <span class='slop-ngram-item'>eyes filled (107)</span> <span class='slop-ngram-item'>pounding chest (102)</span> <span class='slop-ngram-item'>lay ahead (96)</span> <span class='slop-ngram-item'>voice barely (94)</span> <span class='slop-ngram-item'>mind racing (93)</span> <span class='slop-ngram-item'>face whatever (78)</span> <span class='slop-ngram-item'>boundaries possible (77)</span> <span class='slop-ngram-item'>matter cost (72)</span> <span class='slop-ngram-item'>knew could (72)</span> <span class='slop-ngram-item'>make way (72)</span> <span class='slop-ngram-item'>barely whisper (70)</span> <span class='slop-ngram-item'>asked voice (67)</span> <span class='slop-ngram-item'>turn back (66)</span> <span class='slop-ngram-item'>voice soft (63)</span> <span class='slop-ngram-item'>dark twisted (63)</span> <span class='slop-ngram-item'>voice filled (62)</span> <span class='slop-ngram-item'>voice low (58)</span> <span class='slop-ngram-item'>whatever came (58)</span> <span class='slop-ngram-item'>took deep (57)</span> <span class='slop-ngram-item'>could shake (56)</span> <span class='slop-ngram-item'>eyes scanning (56)</span> <span class='slop-ngram-item'>ca shake (56)</span> <span class='slop-ngram-item'>came next (55)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart pounding chest (102)</span> <span class='slop-ngram-item'>said voice steady (79)</span> <span class='slop-ngram-item'>voice barely whisper (64)</span> <span class='slop-ngram-item'>face whatever came (58)</span> <span class='slop-ngram-item'>took deep breath (57)</span> <span class='slop-ngram-item'>ca shake feeling (55)</span> <span class='slop-ngram-item'>whatever came next (55)</span> <span class='slop-ngram-item'>could shake feeling (53)</span> <span class='slop-ngram-item'>also knew could (49)</span> <span class='slop-ngram-item'>shake feeling something (43)</span> <span class='slop-ngram-item'>said voice soft (40)</span> <span class='slop-ngram-item'>said voice low (40)</span> <span class='slop-ngram-item'>said voice like (38)</span> <span class='slop-ngram-item'>ready face whatever (36)</span> <span class='slop-ngram-item'>eyes filled sudden (35)</span> <span class='slop-ngram-item'>quite put finger (34)</span> <span class='slop-ngram-item'>deep breath trying (31)</span> <span class='slop-ngram-item'>distant ticking clock (31)</span> <span class='slop-ngram-item'>voice barely audible (30)</span> <span class='slop-ngram-item'>feeling something wrong (29)</span> <span class='slop-ngram-item'>ready ready face (29)</span> <span class='slop-ngram-item'>came next ready (29)</span> <span class='slop-ngram-item'>taking deep breath (28)</span> <span class='slop-ngram-item'>push boundaries possible (28)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>said voice filled (26)</span> <span class='slop-ngram-item'>could walk away (25)</span> <span class='slop-ngram-item'>deep breath steeling (25)</span> <span class='slop-ngram-item'>together could face (25)</span> <span class='slop-ngram-item'>found way make (25)</span>
</div>

##### meta-llama/Llama-4-Scout-17B-16E-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.640)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.660)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.756)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=0.816)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.820)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kael</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>ryder</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>ethan</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>ticked</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>rumbling</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>tirelessly</span> <span class='slop-word-item'>unforgiving</span> <span class='slop-word-item'>uncover</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>journeyed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>twinkle</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>maria</span> <span class='slop-word-item'>excitement</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>menacing</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>stared</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt sense (297)</span> <span class='slop-ngram-item'>said voice (286)</span> <span class='slop-ngram-item'>could help (106)</span> <span class='slop-ngram-item'>feel sense (90)</span> <span class='slop-ngram-item'>voice low (89)</span> <span class='slop-ngram-item'>asked voice (87)</span> <span class='slop-ngram-item'>eyes locked (85)</span> <span class='slop-ngram-item'>could feel (84)</span> <span class='slop-ngram-item'>shake feeling (82)</span> <span class='slop-ngram-item'>voice firm (81)</span> <span class='slop-ngram-item'>could shake (80)</span> <span class='slop-ngram-item'>voice barely (78)</span> <span class='slop-ngram-item'>barely whisper (77)</span> <span class='slop-ngram-item'>lay ahead (64)</span> <span class='slop-ngram-item'>sense unease (63)</span> <span class='slop-ngram-item'>mind racing (62)</span> <span class='slop-ngram-item'>sense trepidation (61)</span> <span class='slop-ngram-item'>help feel (60)</span> <span class='slop-ngram-item'>eyes widened (59)</span> <span class='slop-ngram-item'>knew would (57)</span> <span class='slop-ngram-item'>took deep (55)</span> <span class='slop-ngram-item'>deep breath (55)</span> <span class='slop-ngram-item'>feeling sense (54)</span> <span class='slop-ngram-item'>locked onto (54)</span> <span class='slop-ngram-item'>sense wonder (53)</span> <span class='slop-ngram-item'>knew careful (53)</span> <span class='slop-ngram-item'>whatever lay (50)</span> <span class='slop-ngram-item'>eyes fixed (48)</span> <span class='slop-ngram-item'>face whatever (47)</span> <span class='slop-ngram-item'>sense excitement (44)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling (79)</span> <span class='slop-ngram-item'>voice barely whisper (77)</span> <span class='slop-ngram-item'>said voice low (68)</span> <span class='slop-ngram-item'>could help feel (60)</span> <span class='slop-ngram-item'>said voice firm (58)</span> <span class='slop-ngram-item'>help feel sense (57)</span> <span class='slop-ngram-item'>took deep breath (55)</span> <span class='slop-ngram-item'>eyes locked onto (54)</span> <span class='slop-ngram-item'>said voice barely (52)</span> <span class='slop-ngram-item'>whatever lay ahead (38)</span> <span class='slop-ngram-item'>felt sense peace (38)</span> <span class='slop-ngram-item'>casting golden glow (37)</span> <span class='slop-ngram-item'>sense peace wash (37)</span> <span class='slop-ngram-item'>eyes shining excitement (36)</span> <span class='slop-ngram-item'>felt sense awe (36)</span> <span class='slop-ngram-item'>sense awe wonder (34)</span> <span class='slop-ngram-item'>something much bigger (33)</span> <span class='slop-ngram-item'>felt sense wonder (31)</span> <span class='slop-ngram-item'>felt sense trepidation (30)</span> <span class='slop-ngram-item'>ready face whatever (30)</span> <span class='slop-ngram-item'>part something much (30)</span> <span class='slop-ngram-item'>sense wonder awe (29)</span> <span class='slop-ngram-item'>felt sense excitement (28)</span> <span class='slop-ngram-item'>knew would face (27)</span> <span class='slop-ngram-item'>could feel sense (26)</span> <span class='slop-ngram-item'>shake feeling watched (25)</span> <span class='slop-ngram-item'>felt sense unease (23)</span> <span class='slop-ngram-item'>asked voice barely (23)</span> <span class='slop-ngram-item'>shiver run spine (23)</span> <span class='slop-ngram-item'>ready ready face (23)</span>
</div>

##### aion-labs/aion-rp-llama-3.1-8b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.805)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.813)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.814)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.816)</div>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.827)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>glinting</span> <span class='slop-word-item'>cranny</span> <span class='slop-word-item'>steeled</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>glimpsed</span> <span class='slop-word-item'>delved</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>gazes</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>nebulae</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>foreboding</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>newfound</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>cityscape</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>tensed</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>hoarse</span> <span class='slop-word-item'>cryptic</span> <span class='slop-word-item'>labyrinth</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>undaunted</span> <span class='slop-word-item'>precipice</span> <span class='slop-word-item'>tapestry</span> <span class='slop-word-item'>fraught</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>tugging</span> <span class='slop-word-item'>uncovered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>enigmatic</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (90)</span> <span class='slop-ngram-item'>lay ahead (52)</span> <span class='slop-ngram-item'>face whatever (48)</span> <span class='slop-ngram-item'>voice low (48)</span> <span class='slop-ngram-item'>ready face (47)</span> <span class='slop-ngram-item'>matter cost (47)</span> <span class='slop-ngram-item'>whatever lay (39)</span> <span class='slop-ngram-item'>heart pounding (36)</span> <span class='slop-ngram-item'>promise secrets (35)</span> <span class='slop-ngram-item'>sense purpose (34)</span> <span class='slop-ngram-item'>could help (33)</span> <span class='slop-ngram-item'>make difference (33)</span> <span class='slop-ngram-item'>eyes scanning (31)</span> <span class='slop-ngram-item'>ahead ready (31)</span> <span class='slop-ngram-item'>world gone (30)</span> <span class='slop-ngram-item'>deep breath (29)</span> <span class='slop-ngram-item'>felt surge (27)</span> <span class='slop-ngram-item'>emerge victorious (27)</span> <span class='slop-ngram-item'>could make (26)</span> <span class='slop-ngram-item'>unknown ready (25)</span> <span class='slop-ngram-item'>voice steady (23)</span> <span class='slop-ngram-item'>air thick (22)</span> <span class='slop-ngram-item'>every corner (21)</span> <span class='slop-ngram-item'>would face (20)</span> <span class='slop-ngram-item'>help feel (19)</span> <span class='slop-ngram-item'>run spine (19)</span> <span class='slop-ngram-item'>made way (18)</span> <span class='slop-ngram-item'>find way (18)</span> <span class='slop-ngram-item'>pounding chest (18)</span> <span class='slop-ngram-item'>felt sense (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ready face whatever (43)</span> <span class='slop-ngram-item'>whatever lay ahead (39)</span> <span class='slop-ngram-item'>face whatever lay (34)</span> <span class='slop-ngram-item'>lay ahead ready (31)</span> <span class='slop-ngram-item'>could make difference (25)</span> <span class='slop-ngram-item'>said voice low (21)</span> <span class='slop-ngram-item'>could help feel (18)</span> <span class='slop-ngram-item'>heart pounding chest (18)</span> <span class='slop-ngram-item'>every nook cranny (14)</span> <span class='slop-ngram-item'>air thick scent (13)</span> <span class='slop-ngram-item'>took deep breath (12)</span> <span class='slop-ngram-item'>trying keep voice (11)</span> <span class='slop-ngram-item'>felt shiver run (10)</span> <span class='slop-ngram-item'>shiver run spine (10)</span> <span class='slop-ngram-item'>smile playing corners (9)</span> <span class='slop-ngram-item'>voice low growl (9)</span> <span class='slop-ngram-item'>first time long (9)</span> <span class='slop-ngram-item'>uncover truth matter (9)</span> <span class='slop-ngram-item'>felt surge power (8)</span> <span class='slop-ngram-item'>take deep breath (8)</span> <span class='slop-ngram-item'>felt flush creep (8)</span> <span class='slop-ngram-item'>flush creep neck (8)</span> <span class='slop-ngram-item'>voice low urgent (8)</span> <span class='slop-ngram-item'>challenges lay ahead (8)</span> <span class='slop-ngram-item'>could shake feeling (8)</span> <span class='slop-ngram-item'>voice barely whisper (8)</span> <span class='slop-ngram-item'>felt chill run (8)</span> <span class='slop-ngram-item'>chill run spine (8)</span> <span class='slop-ngram-item'>eyes twinkling mischief (8)</span> <span class='slop-ngram-item'>help feel like (8)</span>
</div>

##### qwen/qwen3-4b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-8b (distance=0.730)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.754)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.765)</div>
<div class='slop-similar'>qwen/qwen3-1.7b (distance=0.779)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.787)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>outwit</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>townspeople</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>skeptic</span> <span class='slop-word-item'>reverent</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>ethan</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>thickened</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>who&#x27;d</span> <span class='slop-word-item'>rippling</span> <span class='slop-word-item'>brushing</span> <span class='slop-word-item'>groaned</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (318)</span> <span class='slop-ngram-item'>felt like (266)</span> <span class='slop-ngram-item'>thought way (261)</span> <span class='slop-ngram-item'>voice whisper (217)</span> <span class='slop-ngram-item'>said voice (206)</span> <span class='slop-ngram-item'>way making (165)</span> <span class='slop-ngram-item'>could feel (159)</span> <span class='slop-ngram-item'>something else (147)</span> <span class='slop-ngram-item'>spent years (111)</span> <span class='slop-ngram-item'>spent life (98)</span> <span class='slop-ngram-item'>walls seemed (98)</span> <span class='slop-ngram-item'>eyes wide (94)</span> <span class='slop-ngram-item'>presence constant (93)</span> <span class='slop-ngram-item'>voice quiet (90)</span> <span class='slop-ngram-item'>carried weight (89)</span> <span class='slop-ngram-item'>woman eyes (82)</span> <span class='slop-ngram-item'>feel like (78)</span> <span class='slop-ngram-item'>stepped closer (78)</span> <span class='slop-ngram-item'>hands steady (78)</span> <span class='slop-ngram-item'>ethan way (78)</span> <span class='slop-ngram-item'>living thing (76)</span> <span class='slop-ngram-item'>fingers brushing (75)</span> <span class='slop-ngram-item'>presence felt (75)</span> <span class='slop-ngram-item'>thick scent (75)</span> <span class='slop-ngram-item'>voice calm (74)</span> <span class='slop-ngram-item'>like heartbeat (72)</span> <span class='slop-ngram-item'>let go (70)</span> <span class='slop-ngram-item'>like living (70)</span> <span class='slop-ngram-item'>elara breath (70)</span> <span class='slop-ngram-item'>lira voice (70)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (74)</span> <span class='slop-ngram-item'>like living thing (68)</span> <span class='slop-ngram-item'>air thick scent (60)</span> <span class='slop-ngram-item'>voice whisper carried (60)</span> <span class='slop-ngram-item'>whisper carried weight (60)</span> <span class='slop-ngram-item'>spent years trying (60)</span> <span class='slop-ngram-item'>air felt heavier (51)</span> <span class='slop-ngram-item'>presence felt like (51)</span> <span class='slop-ngram-item'>voice low gravelly (50)</span> <span class='slop-ngram-item'>edges shimmering like (49)</span> <span class='slop-ngram-item'>test test humanity (48)</span> <span class='slop-ngram-item'>way making feel (46)</span> <span class='slop-ngram-item'>shimmering like mirage (43)</span> <span class='slop-ngram-item'>elara breath caught (42)</span> <span class='slop-ngram-item'>presence constant unspoken (42)</span> <span class='slop-ngram-item'>stepped closer voice (40)</span> <span class='slop-ngram-item'>making feel like (36)</span> <span class='slop-ngram-item'>voice quiet firm (35)</span> <span class='slop-ngram-item'>patterns shifting like (35)</span> <span class='slop-ngram-item'>shifting like heartbeat (35)</span> <span class='slop-ngram-item'>felt like weight (34)</span> <span class='slop-ngram-item'>way making question (33)</span> <span class='slop-ngram-item'>making question everything (33)</span> <span class='slop-ngram-item'>hands steady voice (33)</span> <span class='slop-ngram-item'>steady voice whisper (33)</span> <span class='slop-ngram-item'>way moved like (32)</span> <span class='slop-ngram-item'>voice low almost (32)</span> <span class='slop-ngram-item'>turned voss voice (32)</span> <span class='slop-ngram-item'>way felt like (31)</span> <span class='slop-ngram-item'>spent life chasing (30)</span>
</div>

##### sao10k/l3.3-euryale-70b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.751)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.756)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.796)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.826)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.856)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>delved</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>foreboding</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>vigilant</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>lily</span> <span class='slop-word-item'>wrists</span> <span class='slop-word-item'>ethan</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>protagonist</span> <span class='slop-word-item'>victorious</span> <span class='slop-word-item'>uncertainty</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>alex</span> <span class='slop-word-item'>determination</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>respite</span> <span class='slop-word-item'>lurking</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>breathed</span> <span class='slop-word-item'>scanned</span> <span class='slop-word-item'>gods</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>snapped</span> <span class='slop-word-item'>nervously</span> <span class='slop-word-item'>dangers</span> <span class='slop-word-item'>dread</span> <span class='slop-word-item'>accomplishment</span> <span class='slop-word-item'>instincts</span> <span class='slop-word-item'>piercing</span> <span class='slop-word-item'>sense</span> <span class='slop-word-item'>uncovered</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>excitement</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>reminder</span> <span class='slop-word-item'>survivor</span> <span class='slop-word-item'>stood</span> <span class='slop-word-item'>treasure</span> <span class='slop-word-item'>glow</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>gratitude</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could help (1044)</span> <span class='slop-ngram-item'>help feel (846)</span> <span class='slop-ngram-item'>feel sense (821)</span> <span class='slop-ngram-item'>felt sense (738)</span> <span class='slop-ngram-item'>alex felt (700)</span> <span class='slop-ngram-item'>know could (286)</span> <span class='slop-ngram-item'>whatever took (257)</span> <span class='slop-ngram-item'>something could (245)</span> <span class='slop-ngram-item'>sense hope (241)</span> <span class='slop-ngram-item'>feeling sense (239)</span> <span class='slop-ngram-item'>could trust (239)</span> <span class='slop-ngram-item'>sense relief (236)</span> <span class='slop-ngram-item'>make decision (228)</span> <span class='slop-ngram-item'>use power (226)</span> <span class='slop-ngram-item'>willing whatever (224)</span> <span class='slop-ngram-item'>took deep (222)</span> <span class='slop-ngram-item'>deep breath (222)</span> <span class='slop-ngram-item'>sense excitement (221)</span> <span class='slop-ngram-item'>sense wonder (219)</span> <span class='slop-ngram-item'>knew would (218)</span> <span class='slop-ngram-item'>stood looking (216)</span> <span class='slop-ngram-item'>sense doubt (212)</span> <span class='slop-ngram-item'>breath trying (204)</span> <span class='slop-ngram-item'>trying calm (204)</span> <span class='slop-ngram-item'>knew make (203)</span> <span class='slop-ngram-item'>relief wash (199)</span> <span class='slop-ngram-item'>get away (198)</span> <span class='slop-ngram-item'>trust know (196)</span> <span class='slop-ngram-item'>sense unease (181)</span> <span class='slop-ngram-item'>could shake (176)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could help feel (846)</span> <span class='slop-ngram-item'>help feel sense (821)</span> <span class='slop-ngram-item'>alex felt sense (501)</span> <span class='slop-ngram-item'>willing whatever took (223)</span> <span class='slop-ngram-item'>took deep breath (222)</span> <span class='slop-ngram-item'>know could trust (217)</span> <span class='slop-ngram-item'>deep breath trying (204)</span> <span class='slop-ngram-item'>breath trying calm (204)</span> <span class='slop-ngram-item'>sense relief wash (199)</span> <span class='slop-ngram-item'>knew make decision (198)</span> <span class='slop-ngram-item'>could trust know (191)</span> <span class='slop-ngram-item'>would stop nothing (169)</span> <span class='slop-ngram-item'>time would tell (160)</span> <span class='slop-ngram-item'>get job done (157)</span> <span class='slop-ngram-item'>stop nothing get (154)</span> <span class='slop-ngram-item'>sense wonder found (153)</span> <span class='slop-ngram-item'>nothing get job (152)</span> <span class='slop-ngram-item'>feel sense excitement (149)</span> <span class='slop-ngram-item'>could shake feeling (148)</span> <span class='slop-ngram-item'>heart pounding chest (146)</span> <span class='slop-ngram-item'>going let get (146)</span> <span class='slop-ngram-item'>one step ahead (142)</span> <span class='slop-ngram-item'>feeling sense relief (131)</span> <span class='slop-ngram-item'>never felt way (130)</span> <span class='slop-ngram-item'>whatever came next (128)</span> <span class='slop-ngram-item'>going adventure lifetime (127)</span> <span class='slop-ngram-item'>grinned feeling sense (125)</span> <span class='slop-ngram-item'>feel sense fear (118)</span> <span class='slop-ngram-item'>something could change (111)</span> <span class='slop-ngram-item'>house alex felt (107)</span>
</div>

##### qwen/qwen3-1.7b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.761)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.769)</div>
<div class='slop-similar'>qwen/qwen3-8b (distance=0.770)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.779)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.809)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>brushing</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>twitching</span> <span class='slop-word-item'>unravel</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>curled</span> <span class='slop-word-item'>hilt</span> <span class='slop-word-item'>quickening</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>pounded</span> <span class='slop-word-item'>undeniable</span> <span class='slop-word-item'>glow</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>brushed</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>crackle</span> <span class='slop-word-item'>groaned</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (170)</span> <span class='slop-ngram-item'>voice low (121)</span> <span class='slop-ngram-item'>air thick (90)</span> <span class='slop-ngram-item'>fingers brushing (88)</span> <span class='slop-ngram-item'>mind racing (67)</span> <span class='slop-ngram-item'>kind man (65)</span> <span class='slop-ngram-item'>something else (62)</span> <span class='slop-ngram-item'>thick scent (61)</span> <span class='slop-ngram-item'>gaze fixed (58)</span> <span class='slop-ngram-item'>expression unreadable (58)</span> <span class='slop-ngram-item'>always believed (56)</span> <span class='slop-ngram-item'>elara fingers (54)</span> <span class='slop-ngram-item'>stood edge (51)</span> <span class='slop-ngram-item'>presence quiet (51)</span> <span class='slop-ngram-item'>heart pounding (50)</span> <span class='slop-ngram-item'>seen said (49)</span> <span class='slop-ngram-item'>voices low (48)</span> <span class='slop-ngram-item'>eyes flicked (47)</span> <span class='slop-ngram-item'>eyes widened (45)</span> <span class='slop-ngram-item'>voice steady (42)</span> <span class='slop-ngram-item'>felt weight (42)</span> <span class='slop-ngram-item'>fingers brushed (42)</span> <span class='slop-ngram-item'>seen cost (42)</span> <span class='slop-ngram-item'>turned eyes (41)</span> <span class='slop-ngram-item'>fingers hovered (40)</span> <span class='slop-ngram-item'>gaze lingered (39)</span> <span class='slop-ngram-item'>always trying (39)</span> <span class='slop-ngram-item'>eyes scanning (38)</span> <span class='slop-ngram-item'>spent life (38)</span> <span class='slop-ngram-item'>heart pounded (38)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (53)</span> <span class='slop-ngram-item'>air thick scent (50)</span> <span class='slop-ngram-item'>heart pounding chest (34)</span> <span class='slop-ngram-item'>turned eyes scanning (31)</span> <span class='slop-ngram-item'>elara fingers brushed (31)</span> <span class='slop-ngram-item'>door creaked open (31)</span> <span class='slop-ngram-item'>save faint hum (30)</span> <span class='slop-ngram-item'>voice barely whisper (28)</span> <span class='slop-ngram-item'>could yet comprehend (28)</span> <span class='slop-ngram-item'>said voice steady (27)</span> <span class='slop-ngram-item'>mind storm questions (25)</span> <span class='slop-ngram-item'>fingers curled around (24)</span> <span class='slop-ngram-item'>something else entirely (23)</span> <span class='slop-ngram-item'>fingers tightening around (23)</span> <span class='slop-ngram-item'>room silent save (23)</span> <span class='slop-ngram-item'>silent save faint (23)</span> <span class='slop-ngram-item'>thick scent smoke (22)</span> <span class='slop-ngram-item'>voice broke silence (21)</span> <span class='slop-ngram-item'>something metallic like (21)</span> <span class='slop-ngram-item'>fingers tightened around (21)</span> <span class='slop-ngram-item'>lips curved faint (20)</span> <span class='slop-ngram-item'>curved faint smile (20)</span> <span class='slop-ngram-item'>thick scent old (20)</span> <span class='slop-ngram-item'>sent shiver spine (20)</span> <span class='slop-ngram-item'>air thick unspoken (19)</span> <span class='slop-ngram-item'>thick unspoken tension (19)</span> <span class='slop-ngram-item'>creaked open sound (18)</span> <span class='slop-ngram-item'>stepped closer presence (17)</span> <span class='slop-ngram-item'>exhaled slowly fingers (17)</span> <span class='slop-ngram-item'>world holding breath (16)</span>
</div>

##### microsoft/phi-4-multimodal-instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.808)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.826)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.831)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.840)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.842)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>softened</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>adversary</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>confront</span> <span class='slop-word-item'>glittered</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>confines</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>ventured</span> <span class='slop-word-item'>vowed</span> <span class='slop-word-item'>imagined</span> <span class='slop-word-item'>encountered</span> <span class='slop-word-item'>shook</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>determination</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>darkness</span> <span class='slop-word-item'>strained</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>delved</span> <span class='slop-word-item'>ghostly</span> <span class='slop-word-item'>stranger</span> <span class='slop-word-item'>defiance</span> <span class='slop-word-item'>curiosity</span> <span class='slop-word-item'>admire</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>passageway</span> <span class='slop-word-item'>terror</span> <span class='slop-word-item'>newfound</span> <span class='slop-word-item'>alex</span> <span class='slop-word-item'>struggled</span> <span class='slop-word-item'>filled</span> <span class='slop-word-item'>thompson</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>urgency</span> <span class='slop-word-item'>listened</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>unwavering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (381)</span> <span class='slop-ngram-item'>ever imagined (351)</span> <span class='slop-ngram-item'>alex could (346)</span> <span class='slop-ngram-item'>could feel (345)</span> <span class='slop-ngram-item'>voice filled (337)</span> <span class='slop-ngram-item'>eyes filled (290)</span> <span class='slop-ngram-item'>could help (256)</span> <span class='slop-ngram-item'>filled determination (245)</span> <span class='slop-ngram-item'>eyes softened (232)</span> <span class='slop-ngram-item'>deep breath (215)</span> <span class='slop-ngram-item'>took deep (211)</span> <span class='slop-ngram-item'>looked eyes (207)</span> <span class='slop-ngram-item'>heart pounding (206)</span> <span class='slop-ngram-item'>pounding chest (203)</span> <span class='slop-ngram-item'>need help (195)</span> <span class='slop-ngram-item'>elena eyes (189)</span> <span class='slop-ngram-item'>knew beginning (187)</span> <span class='slop-ngram-item'>elena looked (186)</span> <span class='slop-ngram-item'>determination need (186)</span> <span class='slop-ngram-item'>filled concern (185)</span> <span class='slop-ngram-item'>concern curiosity (181)</span> <span class='slop-ngram-item'>containment field (175)</span> <span class='slop-ngram-item'>moved closer (166)</span> <span class='slop-ngram-item'>would face (130)</span> <span class='slop-ngram-item'>mind raced (129)</span> <span class='slop-ngram-item'>eyes met (125)</span> <span class='slop-ngram-item'>keep going (121)</span> <span class='slop-ngram-item'>hidden room (120)</span> <span class='slop-ngram-item'>heart raced (116)</span> <span class='slop-ngram-item'>lay ahead (105)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice filled (256)</span> <span class='slop-ngram-item'>voice filled determination (232)</span> <span class='slop-ngram-item'>took deep breath (210)</span> <span class='slop-ngram-item'>heart pounding chest (203)</span> <span class='slop-ngram-item'>looked eyes filled (201)</span> <span class='slop-ngram-item'>filled determination need (186)</span> <span class='slop-ngram-item'>determination need help (178)</span> <span class='slop-ngram-item'>filled mix fear (98)</span> <span class='slop-ngram-item'>mind raced tried (96)</span> <span class='slop-ngram-item'>tried make sense (92)</span> <span class='slop-ngram-item'>raced tried make (89)</span> <span class='slop-ngram-item'>heart raced realized (89)</span> <span class='slop-ngram-item'>realized gravity situation (85)</span> <span class='slop-ngram-item'>raced realized gravity (83)</span> <span class='slop-ngram-item'>challenges lay ahead (77)</span> <span class='slop-ngram-item'>face whatever challenges (69)</span> <span class='slop-ngram-item'>whatever challenges lay (69)</span> <span class='slop-ngram-item'>voice barely whisper (60)</span> <span class='slop-ngram-item'>knew battle far (60)</span> <span class='slop-ngram-item'>would face whatever (59)</span> <span class='slop-ngram-item'>said voice barely (53)</span> <span class='slop-ngram-item'>gun eyes locked (49)</span> <span class='slop-ngram-item'>piece together puzzle (41)</span> <span class='slop-ngram-item'>could help feel (37)</span> <span class='slop-ngram-item'>mind racing piece (36)</span> <span class='slop-ngram-item'>racing piece together (36)</span> <span class='slop-ngram-item'>alex said voice (35)</span> <span class='slop-ngram-item'>knew could turn (32)</span> <span class='slop-ngram-item'>eyes filled mix (31)</span> <span class='slop-ngram-item'>would face together (31)</span>
</div>

##### sam-paech/Darkest-muse-v1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>arliai/qwq-32b-arliai-rpr-v1:free (distance=0.000)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=1.000)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=1.000)</div>
<div class='slop-similar'>claude-opus-4 (distance=1.000)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=1.000)</div>
</div>

<h4>Top Repetitive Words</h4>
<p><i>No multi-prompt repetitive words found.</i></p>
<h4>Top Bigrams</h4>
<p><i>No multi-prompt bigrams found.</i></p>
<h4>Top Trigrams</h4>
<p><i>No multi-prompt trigrams found.</i></p>

##### arliai/qwq-32b-arliai-rpr-v1:free
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>sam-paech/Darkest-muse-v1 (distance=0.000)</div>
<div class='slop-similar'>aion-labs/aion-rp-llama-3.1-8b (distance=1.000)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=1.000)</div>
<div class='slop-similar'>claude-opus-4 (distance=1.000)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=1.000)</div>
</div>

<h4>Top Repetitive Words</h4>
<p><i>No multi-prompt repetitive words found.</i></p>
<h4>Top Bigrams</h4>
<p><i>No multi-prompt bigrams found.</i></p>
<h4>Top Trigrams</h4>
<p><i>No multi-prompt trigrams found.</i></p>

##### thudm/glm-4-32b:free
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp22 (distance=0.856)</div>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp20 (distance=0.859)</div>
<div class='slop-similar'>thudm/glm-4-9b:free (distance=0.867)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.884)</div>
<div class='slop-similar'>meta-llama/llama-4-scout:free (distance=0.903)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>vance</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>rhythmic</span> <span class='slop-word-item'>stalker</span> <span class='slop-word-item'>chaotic</span> <span class='slop-word-item'>drifted</span> <span class='slop-word-item'>pulse</span> <span class='slop-word-item'>scanning</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>decay</span> <span class='slop-word-item'>interference</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>staring</span> <span class='slop-word-item'>scent</span> <span class='slop-word-item'>metallic</span> <span class='slop-word-item'>shouted</span> <span class='slop-word-item'>glow</span> <span class='slop-word-item'>debris</span> <span class='slop-word-item'>shifting</span> <span class='slop-word-item'>stairs</span> <span class='slop-word-item'>shifted</span> <span class='slop-word-item'>breathing</span> <span class='slop-word-item'>silence</span> <span class='slop-word-item'>creature</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>voice</span> <span class='slop-word-item'>alright</span> <span class='slop-word-item'>they&#x27;d</span> <span class='slop-word-item'>slightly</span> <span class='slop-word-item'>tight</span> <span class='slop-word-item'>sudden</span> <span class='slop-word-item'>steady</span> <span class='slop-word-item'>distant</span> <span class='slop-word-item'>tension</span> <span class='slop-word-item'>deeper</span> <span class='slop-word-item'>calm</span> <span class='slop-word-item'>worn</span> <span class='slop-word-item'>smell</span> <span class='slop-word-item'>energy</span> <span class='slop-word-item'>quiet</span> <span class='slop-word-item'>dust</span> <span class='slop-word-item'>usual</span> <span class='slop-word-item'>eyes</span> <span class='slop-word-item'>empty</span> <span class='slop-word-item'>slowly</span> <span class='slop-word-item'>shake</span> <span class='slop-word-item'>walked</span> <span class='slop-word-item'>felt</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>vance said (13)</span> <span class='slop-ngram-item'>something else (11)</span> <span class='slop-ngram-item'>said voice (10)</span> <span class='slop-ngram-item'>voice low (9)</span> <span class='slop-ngram-item'>asked voice (9)</span> <span class='slop-ngram-item'>felt like (8)</span> <span class='slop-ngram-item'>dark shape (8)</span> <span class='slop-ngram-item'>felt sudden (7)</span> <span class='slop-ngram-item'>chair trying (7)</span> <span class='slop-ngram-item'>ben said (6)</span> <span class='slop-ngram-item'>came back (6)</span> <span class='slop-ngram-item'>looks like (6)</span> <span class='slop-ngram-item'>almost like (6)</span> <span class='slop-ngram-item'>eyes fixed (5)</span> <span class='slop-ngram-item'>back towards (5)</span> <span class='slop-ngram-item'>vance nodded (4)</span> <span class='slop-ngram-item'>vance stared (4)</span> <span class='slop-ngram-item'>mind racing (4)</span> <span class='slop-ngram-item'>else something (4)</span> <span class='slop-ngram-item'>voice barely (4)</span> <span class='slop-ngram-item'>eyes wide (4)</span> <span class='slop-ngram-item'>vance knew (3)</span> <span class='slop-ngram-item'>nodded slowly (3)</span> <span class='slop-ngram-item'>anything ben (3)</span> <span class='slop-ngram-item'>barely audible (3)</span> <span class='slop-ngram-item'>back trying (3)</span> <span class='slop-ngram-item'>turning face (3)</span> <span class='slop-ngram-item'>making hard (3)</span> <span class='slop-ngram-item'>something moved (3)</span> <span class='slop-ngram-item'>voice still (3)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>vance said voice (7)</span> <span class='slop-ngram-item'>said voice low (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>ben said voice (3)</span> <span class='slop-ngram-item'>voice barely audible (3)</span> <span class='slop-ngram-item'>shake feeling something (3)</span> <span class='slop-ngram-item'>vance nodded slowly (2)</span> <span class='slop-ngram-item'>let slow breath (2)</span> <span class='slop-ngram-item'>slowly mind racing (2)</span> <span class='slop-ngram-item'>felt chill run (2)</span> <span class='slop-ngram-item'>chill run spine (2)</span> <span class='slop-ngram-item'>run spine colder (2)</span> <span class='slop-ngram-item'>asked voice low (2)</span> <span class='slop-ngram-item'>heart pounding chest (2)</span> <span class='slop-ngram-item'>asked voice barely (2)</span>
</div>

##### thudm/glm-4-9b:free
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>thudm/glm-4-32b:free (distance=0.867)</div>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp20 (distance=0.897)</div>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp22 (distance=0.909)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.946)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.947)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>tries</span> <span class='slop-word-item'>monologue</span> <span class='slop-word-item'>dust</span> <span class='slop-word-item'>silence</span> <span class='slop-word-item'>avoids</span> <span class='slop-word-item'>static</span> <span class='slop-word-item'>hint</span> <span class='slop-word-item'>focusing</span> <span class='slop-word-item'>psychological</span> <span class='slop-word-item'>wants</span> <span class='slop-word-item'>perspective</span> <span class='slop-word-item'>journey</span> <span class='slop-word-item'>contrast</span> <span class='slop-word-item'>potentially</span> <span class='slop-word-item'>breaking</span> <span class='slop-word-item'>connection</span> <span class='slop-word-item'>setup</span> <span class='slop-word-item'>threat</span> <span class='slop-word-item'>reacting</span> <span class='slop-word-item'>atmospheric</span> <span class='slop-word-item'>trust</span> <span class='slop-word-item'>pitfalls</span> <span class='slop-word-item'>needed</span> <span class='slop-word-item'>window</span> <span class='slop-word-item'>feels</span> <span class='slop-word-item'>crew</span> <span class='slop-word-item'>background</span> <span class='slop-word-item'>character</span> <span class='slop-word-item'>internal</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>overly</span> <span class='slop-word-item'>maybe</span> <span class='slop-word-item'>needs</span> <span class='slop-word-item'>focus</span> <span class='slop-word-item'>cold</span> <span class='slop-word-item'>perhaps</span> <span class='slop-word-item'>conflict</span> <span class='slop-word-item'>seems</span> <span class='slop-word-item'>catalyst</span> <span class='slop-word-item'>planning</span> <span class='slop-word-item'>colder</span> <span class='slop-word-item'>meticulous</span> <span class='slop-word-item'>plot</span> <span class='slop-word-item'>discovery</span> <span class='slop-word-item'>tone</span> <span class='slop-word-item'>risk</span> <span class='slop-word-item'>asset</span> <span class='slop-word-item'>fragile</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>feels like (342)</span> <span class='slop-ngram-item'>internal conflict (158)</span> <span class='slop-ngram-item'>crew maybe (119)</span> <span class='slop-ngram-item'>maybe crew (116)</span> <span class='slop-ngram-item'>internal monologue (110)</span> <span class='slop-ngram-item'>trigger maybe (45)</span> <span class='slop-ngram-item'>okay let (35)</span> <span class='slop-ngram-item'>let focus (31)</span> <span class='slop-ngram-item'>maybe maybe (29)</span> <span class='slop-ngram-item'>let write (25)</span> <span class='slop-ngram-item'>write chapter (25)</span> <span class='slop-ngram-item'>reacting mystery (20)</span> <span class='slop-ngram-item'>chapter focusing (18)</span> <span class='slop-ngram-item'>llm pitfalls (15)</span> <span class='slop-ngram-item'>okay focusing (10)</span> <span class='slop-ngram-item'>perspective focusing (8)</span> <span class='slop-ngram-item'>okay chapter (7)</span> <span class='slop-ngram-item'>words chapter (7)</span> <span class='slop-ngram-item'>feel like (6)</span> <span class='slop-ngram-item'>human perspective (5)</span> <span class='slop-ngram-item'>low hum (5)</span> <span class='slop-ngram-item'>maybe breaking (5)</span> <span class='slop-ngram-item'>chapter static (5)</span> <span class='slop-ngram-item'>elara internal (5)</span> <span class='slop-ngram-item'>human feel (4)</span> <span class='slop-ngram-item'>scientific curiosity (4)</span> <span class='slop-ngram-item'>let get (4)</span> <span class='slop-ngram-item'>like living (4)</span> <span class='slop-ngram-item'>felt like (4)</span> <span class='slop-ngram-item'>subtle hints (4)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>maybe crew maybe (114)</span> <span class='slop-ngram-item'>okay let write (25)</span> <span class='slop-ngram-item'>let write chapter (25)</span> <span class='slop-ngram-item'>write chapter focusing (12)</span> <span class='slop-ngram-item'>okay chapter focusing (5)</span> <span class='slop-ngram-item'>okay let focus (5)</span> <span class='slop-ngram-item'>words chapter static (3)</span> <span class='slop-ngram-item'>chapter focusing elara (3)</span> <span class='slop-ngram-item'>focusing elara internal (3)</span> <span class='slop-ngram-item'>chapter aiming human (2)</span> <span class='slop-ngram-item'>aiming human feel (2)</span> <span class='slop-ngram-item'>chapter focusing establishing (2)</span> <span class='slop-ngram-item'>okay let lean (2)</span> <span class='slop-ngram-item'>felt like living (2)</span>
</div>

##### sam-paech/gemma-3-4b-it-antislop-exp20
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp22 (distance=0.800)</div>
<div class='slop-similar'>thudm/glm-4-32b:free (distance=0.859)</div>
<div class='slop-similar'>thudm/glm-4-9b:free (distance=0.897)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.945)</div>
<div class='slop-similar'>qwen/qwen3-1.7b (distance=0.950)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>readings</span> <span class='slop-word-item'>geometry</span> <span class='slop-word-item'>attempting</span> <span class='slop-word-item'>furniture</span> <span class='slop-word-item'>angle</span> <span class='slop-word-item'>i&#x27;d</span> <span class='slop-word-item'>noticed</span> <span class='slop-word-item'>problem</span> <span class='slop-word-item'>able</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>grey</span> <span class='slop-word-item'>ignore</span> <span class='slop-word-item'>paid</span> <span class='slop-word-item'>rectangular</span> <span class='slop-word-item'>going</span> <span class='slop-word-item'>given</span> <span class='slop-word-item'>continued</span> <span class='slop-word-item'>diagnostic</span> <span class='slop-word-item'>told</span> <span class='slop-word-item'>terrible</span> <span class='slop-word-item'>find</span> <span class='slop-word-item'>precise</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>trying</span> <span class='slop-word-item'>metallic</span> <span class='slop-word-item'>been</span> <span class='slop-word-item'>disaster</span> <span class='slop-word-item'>irritating</span> <span class='slop-word-item'>process</span> <span class='slop-word-item'>static</span> <span class='slop-word-item'>aren&#x27;t</span> <span class='slop-word-item'>done</span> <span class='slop-word-item'>tang</span> <span class='slop-word-item'>message</span> <span class='slop-word-item'>thing</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>approx</span> <span class='slop-word-item'>person</span> <span class='slop-word-item'>dark</span> <span class='slop-word-item'>mess</span> <span class='slop-word-item'>simple</span> <span class='slop-word-item'>brutal</span> <span class='slop-word-item'>i&#x27;m</span> <span class='slop-word-item'>choice</span> <span class='slop-word-item'>stated</span> <span class='slop-word-item'>move</span> <span class='slop-word-item'>things</span> <span class='slop-word-item'>massive</span> <span class='slop-word-item'>door</span> <span class='slop-word-item'>dull</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>able find (2040)</span> <span class='slop-ngram-item'>going problem (1002)</span> <span class='slop-ngram-item'>first thing (819)</span> <span class='slop-ngram-item'>going going (675)</span> <span class='slop-ngram-item'>trying get (628)</span> <span class='slop-ngram-item'>thing noticed (563)</span> <span class='slop-ngram-item'>work going (272)</span> <span class='slop-ngram-item'>trying ignore (223)</span> <span class='slop-ngram-item'>dark dark (55)</span> <span class='slop-ngram-item'>voice cut (38)</span> <span class='slop-ngram-item'>dark heavy (31)</span> <span class='slop-ngram-item'>problem first (29)</span> <span class='slop-ngram-item'>running diagnostic (18)</span> <span class='slop-ngram-item'>air thick (16)</span> <span class='slop-ngram-item'>room dark (14)</span> <span class='slop-ngram-item'>small space (13)</span> <span class='slop-ngram-item'>simple problem (12)</span> <span class='slop-ngram-item'>find way (11)</span> <span class='slop-ngram-item'>thick metallic (9)</span> <span class='slop-ngram-item'>metallic tang (9)</span> <span class='slop-ngram-item'>going get (8)</span> <span class='slop-ngram-item'>small dark (8)</span> <span class='slop-ngram-item'>found small (8)</span> <span class='slop-ngram-item'>approx words (7)</span> <span class='slop-ngram-item'>problem problem (7)</span> <span class='slop-ngram-item'>thick smell (5)</span> <span class='slop-ngram-item'>polished chrome (5)</span> <span class='slop-ngram-item'>smell ozone (5)</span> <span class='slop-ngram-item'>space dark (5)</span> <span class='slop-ngram-item'>chapter echoes (4)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>first thing noticed (563)</span> <span class='slop-ngram-item'>air thick metallic (8)</span> <span class='slop-ngram-item'>found small space (8)</span> <span class='slop-ngram-item'>air thick smell (5)</span> <span class='slop-ngram-item'>trying find way (2)</span> <span class='slop-ngram-item'>going problem get (2)</span> <span class='slop-ngram-item'>small grey box (2)</span>
</div>

##### sam-paech/gemma-3-4b-it-antislop-exp22
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>sam-paech/gemma-3-4b-it-antislop-exp20 (distance=0.800)</div>
<div class='slop-similar'>thudm/glm-4-32b:free (distance=0.856)</div>
<div class='slop-similar'>thudm/glm-4-9b:free (distance=0.909)</div>
<div class='slop-similar'>sao10k/l3.3-euryale-70b (distance=0.916)</div>
<div class='slop-similar'>qwen/qwen3-1.7b (distance=0.924)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>cataloguing</span> <span class='slop-word-item'>stain</span> <span class='slop-word-item'>noting</span> <span class='slop-word-item'>mechanism</span> <span class='slop-word-item'>angles</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>locked</span> <span class='slop-word-item'>memory</span> <span class='slop-word-item'>agitated</span> <span class='slop-word-item'>interested</span> <span class='slop-word-item'>decay</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>noticed</span> <span class='slop-word-item'>beauty</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>decaying</span> <span class='slop-word-item'>distraction</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>measured</span> <span class='slop-word-item'>measuring</span> <span class='slop-word-item'>hollow</span> <span class='slop-word-item'>tarnished</span> <span class='slop-word-item'>exterior</span> <span class='slop-word-item'>windows</span> <span class='slop-word-item'>bled</span> <span class='slop-word-item'>cavern</span> <span class='slop-word-item'>anomaly</span> <span class='slop-word-item'>brittle</span> <span class='slop-word-item'>vessel</span> <span class='slop-word-item'>schematic</span> <span class='slop-word-item'>approx</span> <span class='slop-word-item'>trying</span> <span class='slop-word-item'>sheen</span> <span class='slop-word-item'>clipped</span> <span class='slop-word-item'>getting</span> <span class='slop-word-item'>texture</span> <span class='slop-word-item'>echoes</span> <span class='slop-word-item'>details</span> <span class='slop-word-item'>muted</span> <span class='slop-word-item'>julian</span> <span class='slop-word-item'>effect</span> <span class='slop-word-item'>readings</span> <span class='slop-word-item'>crumbling</span> <span class='slop-word-item'>grey</span> <span class='slop-word-item'>isolate</span> <span class='slop-word-item'>crimson</span> <span class='slop-word-item'>stained</span> <span class='slop-word-item'>drawer</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>trying find (1083)</span> <span class='slop-ngram-item'>going going (403)</span> <span class='slop-ngram-item'>need going (272)</span> <span class='slop-ngram-item'>music box (269)</span> <span class='slop-ngram-item'>boy small (115)</span> <span class='slop-ngram-item'>spent last (62)</span> <span class='slop-ngram-item'>felt like (57)</span> <span class='slop-ngram-item'>working small (56)</span> <span class='slop-ngram-item'>rate decay (55)</span> <span class='slop-ngram-item'>last three (53)</span> <span class='slop-ngram-item'>working lock (50)</span> <span class='slop-ngram-item'>getting agitated (50)</span> <span class='slop-ngram-item'>small things (42)</span> <span class='slop-ngram-item'>decay rate (37)</span> <span class='slop-ngram-item'>grey stone (35)</span> <span class='slop-ngram-item'>small thing (34)</span> <span class='slop-ngram-item'>small dark (32)</span> <span class='slop-ngram-item'>going need (27)</span> <span class='slop-ngram-item'>collection small (25)</span> <span class='slop-ngram-item'>face mask (21)</span> <span class='slop-ngram-item'>memory going (21)</span> <span class='slop-ngram-item'>going try (21)</span> <span class='slop-ngram-item'>going find (18)</span> <span class='slop-ngram-item'>trying get (17)</span> <span class='slop-ngram-item'>structure getting (17)</span> <span class='slop-ngram-item'>going get (17)</span> <span class='slop-ngram-item'>find source (16)</span> <span class='slop-ngram-item'>space collection (15)</span> <span class='slop-ngram-item'>approx words (14)</span> <span class='slop-ngram-item'>dark blue (13)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>trying find source (12)</span> <span class='slop-ngram-item'>getting agitated getting (7)</span> <span class='slop-ngram-item'>trying find place (6)</span> <span class='slop-ngram-item'>air thick smell (5)</span> <span class='slop-ngram-item'>details small dark (5)</span> <span class='slop-ngram-item'>found small tarnished (5)</span> <span class='slop-ngram-item'>going able give (5)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>going tell anything (4)</span> <span class='slop-ngram-item'>agitated getting agitated (4)</span> <span class='slop-ngram-item'>trying find way (4)</span> <span class='slop-ngram-item'>said tone dry (3)</span> <span class='slop-ngram-item'>collection collection collection (3)</span> <span class='slop-ngram-item'>small tarnished silver (3)</span> <span class='slop-ngram-item'>going able get (3)</span> <span class='slop-ngram-item'>said tone sharp (3)</span> <span class='slop-ngram-item'>going stop going (2)</span> <span class='slop-ngram-item'>said voice low (2)</span> <span class='slop-ngram-item'>going problem going (2)</span> <span class='slop-ngram-item'>small dark space (2)</span> <span class='slop-ngram-item'>air cool dry (2)</span> <span class='slop-ngram-item'>going going going (2)</span> <span class='slop-ngram-item'>starting feel like (2)</span> <span class='slop-ngram-item'>air thick dust (2)</span> <span class='slop-ngram-item'>said voice thin (2)</span> <span class='slop-ngram-item'>wood something else (2)</span> <span class='slop-ngram-item'>something else something (2)</span> <span class='slop-ngram-item'>chapter weight dust (2)</span> <span class='slop-ngram-item'>small dark room (2)</span> <span class='slop-ngram-item'>small almost invisible (2)</span>
</div>
`;

// creative_writing_longform.js

///////////////////////
// CSV / SLOP DATA   //
///////////////////////
//
// You can leave these empty or fill them in later. 
// Just ensure the CSV has these columns (in order):
//
//  model_name,
//  overall_score_100,
//  avg_chapter_length,
//  vocab_complexity,
//  slop_score,
//  repetition_score,
//  chapter1_avg,
//  chapter2_avg,
//  chapter3_avg,
//  chapter4_avg,
//  chapter5_avg,
//  chapter6_avg,
//  chapter7_avg,
//  chapter8_avg,
//  final_judgement_avg
//


/////////////////////////////
// SPARKLINE FUNCTION      //
/////////////////////////////

/**
 * Ordinary-least-squares slope for exactly the first 8 chapter scores.
 * Expects an array of ≥ 8 numbers.
 */
function regressionSlope(values) {
  const data = values.slice(0, 8);          // enforce 8-point set
  const n = data.length;                    // = 8 by construction
  if (n < 2) return 0;

  const meanX = (n - 1) / 2;                // 0…7 → 3.5
  const meanY = data.reduce((a, b) => a + b) / n;

  let num = 0, den = 0;
  for (let i = 0; i < n; i++) {
    const dx = i - meanX;
    num += dx * (data[i] - meanY);
    den += dx * dx;
  }
  return den === 0 ? 0 : num / den;
}


/**
 * Degradation = % drop between the inferred score at x=2
 * (avg of chapters 1-5) and the extrapolated score at x=7,
 * using the regression slope computed from the same 8 points.
 */
function calcGradientDegradation(chapterScores) {
  const data = chapterScores.slice(0, 8).map(v => parseFloat(v) || 0);
  if (data.length < 8) return 0;

  const initial = data.slice(0, 5).reduce((a, b) => a + b, 0) / 5;  // x=2 point
  if (initial === 0) return 0;

  const slope = regressionSlope(data);
  const final = initial + slope * 5;                                // x=7 point

  const d = 2.0 * (initial - final) / initial;
  return d < 0 ? 0 : d;                 // cap at 0 if the trend is upward
}





function createDegradationSparkline(scores) {
  const isDark   = document.body.classList.contains('dark-mode');
  const stroke   = isDark ? 'white' : 'black';
  const data     = scores.slice(0, 8).map(s => parseFloat(s) || 0);   // exact 8

  // SVG dimensions
  const w = 60, h = 20, maxVal = Math.max(...data, 1);
  const step = w / 7;                                                 // 7 gaps

  // Build the line path
  let path = '';
  data.forEach((v, i) => {
    const x = i * step, y = h - (v / maxVal) * h;
    path += (i ? ' L' : 'M') + x + ',' + y;
  });

  const degradation = calcGradientDegradation(data).toFixed(3);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"
         viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="sparkline-svg">
      <path d="${path}" fill="none" stroke="${stroke}" stroke-width="1"
            class="sparkline-path"/>
    </svg>`;

  return `<div class="sparkline-container" style="display:inline-flex;align-items:center;">
            ${svg}<span class="sparkline-slope" style="margin-left:16px;">${degradation}</span>
          </div>`;
}





// Add this function to update sparkline colors when the theme changes
function updateSparklineColors() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const strokeColor = isDarkMode ? "white" : "black";
  
  document.querySelectorAll('.sparkline-path').forEach(path => {
    path.setAttribute('stroke', strokeColor);
  });
}




///////////////////////
// SLOP PROFILE PARSE //
///////////////////////

function parseSlopData(modelName) {
  if (!slopData || !modelName) {
      return "<p><i>Slop profile data not available.</i></p>";
  }
  const escapedModelName = modelName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^#####\\s*${escapedModelName}\\s*$`, 'm');
  const match = slopData.split(regex); 
  if (match.length > 1) {
      const contentAfter = match[1];
      if (contentAfter) {
          const nextDelimiterMatch = contentAfter.search(/^#####\s/m);
          if (nextDelimiterMatch !== -1) {
              return contentAfter.substring(0, nextDelimiterMatch).trim();
          } else {
              return contentAfter.trim();
          }
      }
  }
  console.warn(`Slop profile not found for model: ${modelName}`);
  return `<p><i>Slop profile not found for model: ${modelName}</i></p>`;
}


//////////////////////////////
// DATATABLE + RENDER LOGIC //
//////////////////////////////

// Keep track of the last column used to display the bar
let lastSortedScoreColumn = 5; // Where 'Score' lives now (0-based)

function updateScoreBarColors() {
  const scoreBars = document.querySelectorAll('#leaderboard .score-bar');
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach(bar => {
    if ($(bar).is(':visible')) {
      const overallIndex = $(bar).closest('tr').index();
      const totalRows = $('#leaderboard tbody tr').length;
      if (totalRows === 0) return;

      // Hue gradient from 200 (blue) to 120 (green)
      const startHue = 200;
      const endHue = 120;
      const hueRange = startHue - endHue;

      const startPercent = overallIndex / totalRows;
      const endPercent = (overallIndex + 1) / totalRows;

      const currentStartHue = startHue - (startPercent * hueRange);
      const currentEndHue = startHue - (endPercent * hueRange);

      const lightness = isDarkMode ? '50%' : '65%';
      const saturation = isDarkMode ? '55%' : '50%';

      const startColor = `hsl(${currentStartHue}, ${saturation}, ${lightness})`;
      const endColor = `hsl(${currentEndHue}, ${saturation}, ${lightness})`;

      bar.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    }
  });
}


function loadLeaderboardData() {
  // skip header row, parse lines
  const lines = leaderboardDataLongformV3.split('\n').slice(1).filter(l => l.trim() !== '');

  // We assume overall_score_100 is on a 0..100 scale
  const maxScore = 100.0;
  const baselineScore = 0.0;
  const scoreRange = maxScore - baselineScore;

  let html = lines.map(row => {
    // We expect 15 CSV columns:
    // [0] model_name
    // [1] overall_score_100
    // [2] avg_chapter_length
    // [3] vocab_complexity
    // [4] slop_score
    // [5] repetition_score
    // [6..13] chapter scores
    // [14] final_judgement_avg
    let cols = row.split(',');
    let [
      modelNameRaw,
      overallScore100,
      avgChapterLength,
      vocabComplexity,
      slopScore,
      repetitionScore,
      ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8,
      finalJudge
    ] = cols;

    // Convert to numeric values
    const scoreNum = parseFloat(overallScore100) || 0;
    const lengthNum = parseInt(avgChapterLength, 10) || 0;
    const slopNum = parseFloat(slopScore) || 0;
    const repNum = parseFloat(repetitionScore) || 0;

    // Gather chapter scores for the sparkline and degradation calculation
    const chapterScores = cols.slice(6, 14).map(x => parseFloat(x) || 0);  // 8 cols only

    // Compute degradation as absolute slope from first to last chapter, divided by number of intervals (7)
    let degradationVal = calcGradientDegradation(chapterScores);





    const scoreRelative = scoreNum - baselineScore;
    const scorePct = scoreRange > 0 ? Math.max(0, Math.min(100, (scoreRelative / scoreRange) * 100)) : 0;

    // Minimal formatting for model name
    let isNsfwModel = modelNameRaw.startsWith('!');
    let isNewModel  = modelNameRaw.startsWith('*');
    let currentModelName = modelNameRaw.replace(/^(!|\*)/, '');
    let displayModelName = currentModelName.split('/').pop();
    if (isNsfwModel) displayModelName = '🔞' + displayModelName;
    if (isNewModel)  displayModelName = '🆕' + displayModelName;
    let modelNameDisplayHTML = currentModelName.includes('/')
      ? `<a href="https://huggingface.co/${currentModelName}" target="_blank">${displayModelName}</a>`
      : displayModelName;

    let resultsFn = `results/creative-writing-longform/${currentModelName.replace(/\//g,'__')}_longform_report.html`;

    let scoreBarHTML = `
      <div class="score-bar-container">
        <div class="score-bar" style="width: ${scorePct}%; display: none;"></div>
        <span class="score-text">${scoreNum.toFixed(1)}</span>
      </div>
    `;

    let slopInfoIcon = `
      <span class="slop-info-icon custom-info-icon"
            data-model-name="${currentModelName}" title="View Slop Profile">i</span>
    `;

    // Create the degradation sparkline (the function call returns both the SVG and the slope text)
    let degradationHTML = createDegradationSparkline(chapterScores);

    // Build the row.
    // Note: We include the computed degradationVal in a data-order attribute
    return `
      <tr data-original-score="${scoreNum}"
          data-vocab="${vocabComplexity}"
          data-gpt-slop="${slopNum}"
          data-repetition="${repNum}">
        <td>
          <div class="cell-content">
            ${modelNameDisplayHTML}
          </div>
        </td>
        <td class="mobile-collapsible" data-order="${lengthNum}">
          <div class="cell-content">
            ${isNaN(lengthNum) ? '-' : lengthNum.toLocaleString()}
          </div>
        </td>
        <td data-order="${slopNum}">
          <div class="cell-content">
            ${slopNum.toFixed(1)}
            ${slopInfoIcon}
          </div>
        </td>
        <td class="mobile-collapsible" data-order="${repNum}">
          <div class="cell-content">
            ${repNum.toFixed(1)}
          </div>
        </td>
        <!-- NEW DEGRADATION column, with data-order for sorting -->
        <td class="mobile-collapsible" data-order="${degradationVal}">
          <div class="cell-content">
            ${degradationHTML}
          </div>
        </td>
        <td data-order="${scoreNum}">
          <div class="cell-content">
            ${scoreBarHTML}
          </div>
        </td>
        <td>
          <div class="cell-content">
            <a href="${resultsFn}">Samples</a>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById('leaderboardBody').innerHTML = html;
  initializeDataTable();
}

//////////////////////
// DATATABLE CONFIG //
//////////////////////

let dataTableConfig = {
  autoWidth: false,
  order: [[5, "desc"]], // Default sort by Score (column index 5, descending)
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    { targets: [1], type: 'num' }, // Length
    { targets: [2], type: 'num' }, // Slop
    { targets: [3], type: 'num' }, // Repetition
    { targets: [4], type: 'num', orderSequence: ["asc", "desc"] }, // Degradation, default asc when sorted
    { targets: [5], type: 'num', orderSequence: ["desc", "asc"] }, // Score
    { targets: [6], orderable: false }  // Samples
  ],
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  drawCallback: function(settings) {
    let api = this.api();
    if (!api) return;

    let order = api.order();
    if (!order || order.length === 0) {
      order = [[5, 'desc']];
    }
    let sortedColIndex = order[0][0];
    const SCORE_COLUMNS = [5]; 
    const NON_SCORE_COLUMNS = [0,1,2,3,4,6];

    const tableNode = $(api.table().node());
    tableNode.find('.score-bar').hide();
    tableNode.find('th').css('width', '');

    let columnToShowBar = -1;
    if (SCORE_COLUMNS.includes(sortedColIndex)) {
      columnToShowBar = sortedColIndex;
      lastSortedScoreColumn = sortedColIndex;
    } else if (NON_SCORE_COLUMNS.includes(sortedColIndex) && lastSortedScoreColumn !== null) {
      columnToShowBar = lastSortedScoreColumn;
    } else {
      columnToShowBar = 5;
      lastSortedScoreColumn = 5;
    }
    if (columnToShowBar !== -1) {
      try {
        api.rows({ page: 'current' })
           .nodes()
           .to$()
           .find(`td:eq(${columnToShowBar}) .score-bar`)
           .show();
        let header = api.column(columnToShowBar).header();
        if (header) {
          $(header).css('width', '30%');
        }
      } catch (e) {
        console.error("Error showing score bar or adjusting width:", e);
      }
    }
    updateScoreBarColors();
  }
};


////////////////////////////
// MOBILE COLUMN TOGGLING //
////////////////////////////

let middleStatsExpanded = false;
function collapseMiddleColumns() {
  const isMobile = window.innerWidth < 768;
  // columns 1,3,4 are marked "mobile-collapsible"
  if (isMobile && !middleStatsExpanded) {
    $('#leaderboard .mobile-collapsible').hide();
    $('#toggleMiddleStats').text('Expand Details');
  } else {
    $('#leaderboard .mobile-collapsible').show();
    $('#toggleMiddleStats').text('Hide Details');
  }
}

function toggleMiddleStats() {
  middleStatsExpanded = !middleStatsExpanded;
  collapseMiddleColumns();
}


/////////////////////
// INIT / BOOTSTRAP //
/////////////////////

document.addEventListener('DOMContentLoaded', function() {
  displayEncodedEmail();
  applySystemTheme();
  setupDarkModeToggle();

  if (document.getElementById('leaderboard')) {
    loadLeaderboardData();

    $(window).on('resize', collapseMiddleColumns);
    $('#toggleMiddleStats').on('click', toggleMiddleStats);

    $(window).on('resize', function () {
      collapseMiddleColumns();                 // what you already call
      if ($.fn.DataTable.isDataTable('#leaderboard')) {
        const tbl = $('#leaderboard').DataTable();
        tbl.columns.adjust().draw(false);      // recalculates widths + triggers drawCallback
      }
    });

    setTimeout(collapseMiddleColumns, 50);
  }
});


function initializeDataTable() {
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    $('#leaderboardBody').off('click', '.slop-info-icon');
  }

  let table = $('#leaderboard').DataTable(dataTableConfig);

  // Slop icon event
  $('#leaderboardBody').on('click', '.slop-info-icon', function() {
    const modelName = $(this).data('model-name');
    const profileHtml = parseSlopData(modelName);
    const modalTitle = `Slop Profile: ${modelName.split('/').pop()}`;
    $('#slopProfileContent').html(profileHtml);
    $('#slopProfileModalLabel').text(modalTitle);

    const slopModal = new bootstrap.Modal(document.getElementById('slopProfileModal'));
    slopModal.show();
  });

  table.one('init.dt', function() {
    collapseMiddleColumns();
  });
}


//////////////////////////////
// THEME / EMAIL HELPERS    //
//////////////////////////////

function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');
  const savedMode = localStorage.getItem('darkModeEnabled');

  if (savedMode) {
     document.body.classList.toggle('dark-mode', savedMode === 'true');
     toggle.checked = (savedMode === 'true');
     label.textContent = (savedMode === 'true') ? 'Dark' : 'Light';
  }

  toggle.addEventListener('change', function() {
     document.body.classList.toggle('dark-mode', this.checked);
     label.textContent = this.checked ? 'Dark' : 'Light';
     localStorage.setItem('darkModeEnabled', this.checked);

     // Update sparkline colors when theme changes
     updateSparklineColors();

     if ($.fn.DataTable.isDataTable('#leaderboard')) {
       $('#leaderboard').DataTable().draw(false);
     }
  });
}

// Also update the applySystemTheme function
function applySystemTheme() {
  if (localStorage.getItem('darkModeEnabled') === null) {
     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     const toggle = document.getElementById('darkModeToggle');
     const label = document.getElementById('toggleLabel');
     document.body.classList.toggle('dark-mode', prefersDark);
     toggle.checked = prefersDark;
     label.textContent = prefersDark ? 'Dark' : 'Light';
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
