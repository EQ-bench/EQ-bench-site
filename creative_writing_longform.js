// longform_creative_writing.js

// --- New Leaderboard Data ---
let leaderboardDataLongformV3 = `model_name,overall_score_100,avg_chapter_length,vocab_complexity,slop_score,repetition_score,chapter1_avg,chapter2_avg,chapter3_avg,chapter4_avg,chapter5_avg,chapter6_avg,chapter7_avg,chapter8_avg,final_judgement_avg
*claude-opus-4.1,74.1,6190,21.49,10.45,4.7,15.91,16.10,15.54,15.93,15.98,15.66,15.08,15.15,15.07
claude-sonnet-4,73.5,6696,42.64,15.00,5.7,15.50,16.03,15.61,15.10,15.60,14.92,13.97,13.78,15.08
gemini-2.5-pro-preview-03-25,72.0,6544,46.63,40.40,4.4,14.89,15.50,15.38,15.29,15.48,15.18,15.39,13.98,15.39
claude-3-7-sonnet-20250219,71.6,9380,47.17,22.60,3.9,15.67,15.48,14.85,14.78,14.50,13.87,12.66,13.71,15.90
claude-3.5-sonnet,70.9,5388,27.83,18.79,8.4,15.53,16.05,15.55,15.43,15.45,13.73,13.81,12.32,15.08
deepseek-ai/DeepSeek-R1-0528,70.7,8686,33.42,53.07,4.5,15.02,15.96,16.09,15.30,15.56,15.50,15.08,14.95,14.73
gemini-2.5-pro-preview-06-05,70.6,6361,45.94,43.71,5.9,14.73,15.22,15.58,15.27,15.30,14.37,14.97,13.70,14.86
*horizon-alpha,70.0,14072,27.48,13.21,2.0,15.88,15.98,15.35,15.48,15.42,15.75,15.21,15.10,15.37
*zai-org/GLM-4.5,69.5,7884,32.29,54.42,5.4,14.82,15.25,15.29,15.34,15.55,14.60,15.23,15.40,14.30
chatgpt-4o-latest-2025-03-27,67.5,5399,18.53,33.91,5.3,15.17,14.37,15.18,14.66,14.46,13.46,13.23,13.26,15.54
google/gemini-2.5-flash-preview-05-20,66.6,6284,42.95,58.40,6.9,14.69,13.58,14.93,14.80,14.15,13.66,14.10,13.67,14.27
o3,65.7,7493,32.82,33.03,2.9,15.52,15.03,14.60,14.16,14.36,14.06,14.40,14.23,14.76
moonshotai/Kimi-K2-Instruct,65.7,5124,21.98,15.21,4.7,15.34,14.86,15.07,14.98,14.75,13.61,13.05,13.99,14.04
deepseek-ai/DeepSeek-V3-0324,65.5,4131,19.39,47.40,8.0,15.02,14.69,14.03,14.78,13.39,11.55,12.16,12.85,14.64
deepseek-ai/DeepSeek-R1,64.4,4035,23.66,55.12,6.4,14.86,14.23,14.09,14.85,14.97,14.86,13.75,13.79,13.47
Qwen/Qwen3-235B-A22B-Instruct-2507,62.4,5114,11.89,26.44,5.2,14.63,14.40,14.26,13.67,13.57,12.47,12.02,11.12,13.99
grok-4,57.6,5848,30.44,48.79,5.9,13.85,13.43,13.24,12.91,12.19,12.76,12.01,12.48,12.14
google/gemma-3-27b-it,54.7,5367,43.52,61.49,15.2,12.50,13.15,12.06,11.68,11.38,11.18,10.21,9.42,11.73
mistralai/Mistral-Small-3.2-24B-Instruct-2506,54.4,4267,15.42,64.69,16.0,13.86,13.77,10.77,11.31,10.81,9.54,9.35,8.22,12.22
google/gemma-3-12b-it,50.1,4344,51.88,68.89,13.6,11.34,10.65,11.05,10.39,9.82,9.62,9.18,9.06,11.55
qwen/qwen3-32b,49.2,4646,21.06,63.65,17.1,12.57,12.52,10.64,11.89,11.01,11.54,9.48,9.45,10.06
openai/gpt-oss-120b,47.9,12795,43.58,52.90,5.4,12.56,10.54,10.85,10.75,11.09,11.35,10.02,9.56,12.32
qwen/qwq-32b,45.1,5320,25.21,63.54,8.4,11.73,11.56,11.76,9.82,10.43,9.56,8.78,8.56,10.81
qwen/qwen3-30b-a3b,44.3,5334,22.75,78.32,17.1,11.70,12.17,9.96,10.70,9.24,9.77,9.23,8.21,7.99
gpt-4.1-nano,43.4,6398,34.81,63.88,6.2,10.36,10.10,10.21,9.53,10.44,8.76,8.43,7.86,9.34
qwen/qwen3-14b,43.2,5368,24.32,83.54,30.9,12.14,10.96,10.93,9.96,9.54,8.56,8.26,7.03,7.29
RekaAI/reka-flash-3,43.0,4531,24.17,61.65,8.2,11.01,12.15,11.36,9.11,8.68,10.88,7.78,8.40,7.82
google/gemma-3-4b-it,42.9,4244,59.42,75.18,12.1,10.77,11.08,10.45,9.46,9.17,8.06,7.41,7.23,9.83
meta-llama/Llama-4-Maverick-17B-128E-Instruct,37.3,4363,34.67,74.63,28.5,8.70,9.35,8.88,8.73,8.18,7.67,7.31,6.08,7.69
meta-llama/Llama-4-Scout-17B-16E-Instruct,35.5,5093,33.16,80.89,37.9,8.76,8.87,7.90,7.22,6.66,6.20,5.73,5.00,6.82
mistralai/Mistral-Nemo-Instruct-2407,34.4,7388,37.95,75.35,27.7,8.71,9.10,8.14,7.56,7.06,6.68,6.66,3.99,6.76
microsoft/phi-4-multimodal-instruct,27.4,9738,41.00,86.47,69.0,6.04,6.08,5.44,5.53,4.92,4.98,4.54,3.51,4.67
openai/gpt-oss-20b,27.0,7639,26.45,58.25,21.7,8.12,7.22,6.21,6.75,5.75,4.80,4.33,4.64,5.66
qwen/qwen3-4b,24.1,8956,25.92,56.84,28.0,7.84,6.64,6.60,6.03,5.38,4.39,3.96,3.73,5.08
*gpt-5-2025-08-07,71.4,13497,25.12,13.44,4.7,16.27,15.31,15.30,14.98,15.58,16.05,15.62,15.51,16.26
*gpt-5-chat-latest,70.6,6322,29.19,24.25,3.3,15.32,14.88,15.27,14.91,14.99,14.81,14.82,14.20,15.70
*gpt-5-mini-2025-08-07,61.9,8516,36.28,17.05,3.1,14.62,14.51,13.31,14.67,13.38,13.81,14.09,14.11,13.89
*gpt-5-nano-2025-08-07,35.1,11588,60.85,17.75,3.7,10.07,8.94,8.06,7.81,8.76,7.99,8.32,7.64,8.71
*mistral-medium-3.1,52.9,6631,12.89,45.40,13.8,14.24,13.82,12.49,12.07,10.26,8.91,9.01,8.01,12.80`;


// --- New Slop Data ---
const slopData = `##### claude-opus-4.1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-3.5-sonnet (distance=0.844)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.845)</div>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.872)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.892)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.899)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>recycler</span> <span class='slop-word-item'>wrongness</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>wheeze</span> <span class='slop-word-item'>fibonacci</span> <span class='slop-word-item'>tenderloin</span> <span class='slop-word-item'>hungrier</span> <span class='slop-word-item'>rosa</span> <span class='slop-word-item'>pudding</span> <span class='slop-word-item'>spirals</span> <span class='slop-word-item'>heartbeats</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>seventeen</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>bins</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>posh</span> <span class='slop-word-item'>corrects</span> <span class='slop-word-item'>ventilator</span> <span class='slop-word-item'>fingernails</span> <span class='slop-word-item'>tesco</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>twitching</span> <span class='slop-word-item'>smelled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>morphine</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>freezer</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>forty</span> <span class='slop-word-item'>footprints</span> <span class='slop-word-item'>breathes</span> <span class='slop-word-item'>pennies</span> <span class='slop-word-item'>ants</span> <span class='slop-word-item'>bile</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>breathed</span> <span class='slop-word-item'>brick</span> <span class='slop-word-item'>notebook</span> <span class='slop-word-item'>tuesdays</span> <span class='slop-word-item'>typed</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>swallows</span> <span class='slop-word-item'>hers</span> <span class='slop-word-item'>tilted</span> <span class='slop-word-item'>calculating</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>three weeks ago (6)</span> <span class='slop-word-item'>look like shit (4)</span> <span class='slop-word-item'>looks exactly like (4)</span> <span class='slop-word-item'>Nothing makes sense (4)</span> <span class='slop-word-item'>sharp enough to cut (2)</span> <span class='slop-word-item'>three days ago (2)</span> <span class='slop-word-item'>something else, something (2)</span> <span class='slop-word-item'>Makes a sound like (2)</span> <span class='slop-word-item'>Three days ago (1)</span> <span class='slop-word-item'>Sharp enough to cut (1)</span> <span class='slop-word-item'>makes a sound like (1)</span> <span class='slop-word-item'>sense&quot;

&quot;Nothing makes (1)</span> <span class='slop-word-item'>looks EXACTLY like (1)</span> <span class='slop-word-item'>makes this sound like (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>three days (35)</span> <span class='slop-ngram-item'>like someone (27)</span> <span class='slop-ngram-item'>tastes like (23)</span> <span class='slop-ngram-item'>smells like (19)</span> <span class='slop-ngram-item'>ca stop (16)</span> <span class='slop-ngram-item'>phone buzzes (14)</span> <span class='slop-ngram-item'>wrong like (14)</span> <span class='slop-ngram-item'>trying hard (12)</span> <span class='slop-ngram-item'>goes back (12)</span> <span class='slop-ngram-item'>smell like (11)</span> <span class='slop-ngram-item'>smelled like (11)</span> <span class='slop-ngram-item'>else something (10)</span> <span class='slop-ngram-item'>seventeen minutes (9)</span> <span class='slop-ngram-item'>sleep ca (9)</span> <span class='slop-ngram-item'>unknown number (9)</span> <span class='slop-ngram-item'>still warm (9)</span> <span class='slop-ngram-item'>says voice (9)</span> <span class='slop-ngram-item'>phone rings (9)</span> <span class='slop-ngram-item'>toward door (9)</span> <span class='slop-ngram-item'>tuesday tuesday (8)</span> <span class='slop-ngram-item'>tell anymore (8)</span> <span class='slop-ngram-item'>question mark (8)</span> <span class='slop-ngram-item'>makes sound (8)</span> <span class='slop-ngram-item'>nothing everything (8)</span> <span class='slop-ngram-item'>eyes water (8)</span> <span class='slop-ngram-item'>something might (8)</span> <span class='slop-ngram-item'>ca sleep (8)</span> <span class='slop-ngram-item'>wrong wrong (8)</span> <span class='slop-ngram-item'>like copper (7)</span> <span class='slop-ngram-item'>another line (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>three weeks ago (6)</span> <span class='slop-ngram-item'>looks exactly like (5)</span> <span class='slop-ngram-item'>nothing makes sense (4)</span> <span class='slop-ngram-item'>makes sound like (4)</span> <span class='slop-ngram-item'>look like shit (4)</span> <span class='slop-ngram-item'>sense nothing makes (3)</span> <span class='slop-ngram-item'>three days four (3)</span> <span class='slop-ngram-item'>sharp enough cut (3)</span> <span class='slop-ngram-item'>three days ago (3)</span>
</div>

##### claude-sonnet-4
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-3.5-sonnet (distance=0.825)</div>
<div class='slop-similar'>claude-opus-4.1 (distance=0.845)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.867)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.880)</div>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.883)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>vasquez</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>clench</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>chloe</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>unsteady</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>paranoia</span> <span class='slop-word-item'>who&#x27;d</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>manifests</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>holographic</span> <span class='slop-word-item'>torres</span> <span class='slop-word-item'>doorway</span> <span class='slop-word-item'>pauses</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>creature</span> <span class='slop-word-item'>desperation</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>climber</span> <span class='slop-word-item'>stitching</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>hammering</span> <span class='slop-word-item'>alien</span> <span class='slop-word-item'>gripped</span> <span class='slop-word-item'>unwelcome</span> <span class='slop-word-item'>smelled</span> <span class='slop-word-item'>documenting</span> <span class='slop-word-item'>footsteps</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>like a physical blow (19)</span> <span class='slop-word-item'>quiet for a long moment (13)</span> <span class='slop-word-item'>first time since (10)</span> <span class='slop-word-item'>phone buzzed with a text (7)</span> <span class='slop-word-item'>three weeks ago (6)</span> <span class='slop-word-item'>six months ago (6)</span> <span class='slop-word-item'>phone buzzes with a text (5)</span> <span class='slop-word-item'>tears streaming down her face (5)</span> <span class='slop-word-item'>something else entirely (4)</span> <span class='slop-word-item'>hit him like a physical (4)</span> <span class='slop-word-item'>question hung in the air (4)</span> <span class='slop-word-item'>hung in the air like (4)</span> <span class='slop-word-item'>air like smoke (4)</span> <span class='slop-word-item'>words hit like (4)</span> <span class='slop-word-item'>felt something cold (4)</span> <span class='slop-word-item'>words hit me like (3)</span> <span class='slop-word-item'>like it might bite (3)</span> <span class='slop-word-item'>can&#x27;t stop thinking (3)</span> <span class='slop-word-item'>voice seemed to come (3)</span> <span class='slop-word-item'>Twenty minutes later (3)</span> <span class='slop-word-item'>Six months ago (2)</span> <span class='slop-word-item'>two months ago (2)</span> <span class='slop-word-item'>hit me like a physical (2)</span> <span class='slop-word-item'>stared at her for a long moment (2)</span> <span class='slop-word-item'>heart hammering against his ribs (2)</span> <span class='slop-word-item'>dark circles under her eyes (2)</span> <span class='slop-word-item'>voice was barely a whisper (2)</span> <span class='slop-word-item'>hit like a physical (2)</span> <span class='slop-word-item'>heart hammering against her ribs (2)</span> <span class='slop-word-item'>said, his voice tight (2)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like physical (21)</span> <span class='slop-ngram-item'>said finally (21)</span> <span class='slop-ngram-item'>long moment (21)</span> <span class='slop-ngram-item'>said quietly (20)</span> <span class='slop-ngram-item'>physical blow (19)</span> <span class='slop-ngram-item'>quiet long (16)</span> <span class='slop-ngram-item'>something might (16)</span> <span class='slop-ngram-item'>phone buzzes (15)</span> <span class='slop-ngram-item'>phone buzzed (15)</span> <span class='slop-ngram-item'>words hit (13)</span> <span class='slop-ngram-item'>hit like (13)</span> <span class='slop-ngram-item'>says finally (12)</span> <span class='slop-ngram-item'>voice steady (12)</span> <span class='slop-ngram-item'>voice carried (11)</span> <span class='slop-ngram-item'>unknown number (11)</span> <span class='slop-ngram-item'>buzzed text (10)</span> <span class='slop-ngram-item'>second floor (10)</span> <span class='slop-ngram-item'>stomach clench (9)</span> <span class='slop-ngram-item'>kind place (9)</span> <span class='slop-ngram-item'>someone knows (9)</span> <span class='slop-ngram-item'>tastes like (9)</span> <span class='slop-ngram-item'>hands shook (9)</span> <span class='slop-ngram-item'>says quietly (8)</span> <span class='slop-ngram-item'>already moving (8)</span> <span class='slop-ngram-item'>question whether (8)</span> <span class='slop-ngram-item'>like smoke (8)</span> <span class='slop-ngram-item'>trying understand (8)</span> <span class='slop-ngram-item'>jacket pocket (8)</span> <span class='slop-ngram-item'>normal people (8)</span> <span class='slop-ngram-item'>question hung (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like physical blow (19)</span> <span class='slop-ngram-item'>quiet long moment (13)</span> <span class='slop-ngram-item'>hit like physical (10)</span> <span class='slop-ngram-item'>phone buzzed text (10)</span> <span class='slop-ngram-item'>first time since (10)</span> <span class='slop-ngram-item'>words hit like (8)</span> <span class='slop-ngram-item'>six months ago (8)</span> <span class='slop-ngram-item'>three weeks ago (7)</span> <span class='slop-ngram-item'>phone buzzes text (6)</span> <span class='slop-ngram-item'>tears streaming face (6)</span> <span class='slop-ngram-item'>heart hammering ribs (5)</span> <span class='slop-ngram-item'>voice barely whisper (5)</span> <span class='slop-ngram-item'>air like smoke (4)</span> <span class='slop-ngram-item'>question hung air (4)</span> <span class='slop-ngram-item'>felt something cold (4)</span> <span class='slop-ngram-item'>hung air like (4)</span> <span class='slop-ngram-item'>dark circles eyes (4)</span> <span class='slop-ngram-item'>something else entirely (4)</span> <span class='slop-ngram-item'>looking older years (3)</span> <span class='slop-ngram-item'>like might bite (3)</span> <span class='slop-ngram-item'>kept voice level (3)</span> <span class='slop-ngram-item'>said voice tight (3)</span> <span class='slop-ngram-item'>stared long moment (3)</span> <span class='slop-ngram-item'>trying tell something (3)</span> <span class='slop-ngram-item'>voice seemed come (3)</span> <span class='slop-ngram-item'>ca stop thinking (3)</span> <span class='slop-ngram-item'>twenty minutes later (3)</span> <span class='slop-ngram-item'>two months ago (3)</span>
</div>

##### gemini-2.5-pro-preview-03-25
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.736)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.764)</div>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.814)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.828)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.832)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>unlatched</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mantelpiece</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>bookshelves</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>rusty</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>terran</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>laundromat</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>liam</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sparks</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>looked less like (5)</span> <span class='slop-word-item'>felt less like (5)</span> <span class='slop-word-item'>heart hammered against my ribs (5)</span> <span class='slop-word-item'>eyes never leaving (4)</span> <span class='slop-word-item'>blood ran cold (4)</span> <span class='slop-word-item'>eyes met mine (3)</span> <span class='slop-word-item'>gave a curt nod (3)</span> <span class='slop-word-item'>heart hammered against his ribs (3)</span> <span class='slop-word-item'>dust motes dancing (3)</span> <span class='slop-word-item'>Another pause, longer (3)</span> <span class='slop-word-item'>pause, longer this time (3)</span> <span class='slop-word-item'>gaze flickered towards (3)</span> <span class='slop-word-item'>said, her voice tight (3)</span> <span class='slop-word-item'>smile touched her lips (3)</span> <span class='slop-word-item'>Every instinct screamed (3)</span> <span class='slop-word-item'>voice carefully neutral (3)</span> <span class='slop-word-item'>said, his voice low (3)</span> <span class='slop-word-item'>felt like an eternity (2)</span> <span class='slop-word-item'>knot tightening in his stomach (2)</span> <span class='slop-word-item'>took a deep breath (2)</span> <span class='slop-word-item'>said, her voice low (2)</span> <span class='slop-word-item'>life felt like (2)</span> <span class='slop-word-item'>faint smile touched (2)</span> <span class='slop-word-item'>Took a deep breath (2)</span> <span class='slop-word-item'>leaned her forehead against the cool (2)</span> <span class='slop-word-item'>smile touched his lips (2)</span> <span class='slop-word-item'>heart hammered against her ribs (1)</span> <span class='slop-word-item'>squeezed my eyes shut (1)</span> <span class='slop-word-item'>Chapter 3: Static on the Line (1)</span> <span class='slop-word-item'>eyes, when they met mine (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>less like (14)</span> <span class='slop-ngram-item'>voice low (13)</span> <span class='slop-ngram-item'>pry bar (11)</span> <span class='slop-ngram-item'>expression unreadable (10)</span> <span class='slop-ngram-item'>voice tight (10)</span> <span class='slop-ngram-item'>began voice (10)</span> <span class='slop-ngram-item'>flicker something (9)</span> <span class='slop-ngram-item'>hammered ribs (9)</span> <span class='slop-ngram-item'>liam said (9)</span> <span class='slop-ngram-item'>study door (9)</span> <span class='slop-ngram-item'>heart hammered (9)</span> <span class='slop-ngram-item'>felt less (9)</span> <span class='slop-ngram-item'>face pale (9)</span> <span class='slop-ngram-item'>energy signatures (8)</span> <span class='slop-ngram-item'>data stream (8)</span> <span class='slop-ngram-item'>energy signature (8)</span> <span class='slop-ngram-item'>cold sharp (8)</span> <span class='slop-ngram-item'>gaze fixed (8)</span> <span class='slop-ngram-item'>running hand (8)</span> <span class='slop-ngram-item'>cold dread (7)</span> <span class='slop-ngram-item'>fresh wave (7)</span> <span class='slop-ngram-item'>light filtering (7)</span> <span class='slop-ngram-item'>voice flat (7)</span> <span class='slop-ngram-item'>felt heavier (7)</span> <span class='slop-ngram-item'>dark wood (7)</span> <span class='slop-ngram-item'>back slightly (7)</span> <span class='slop-ngram-item'>small space (7)</span> <span class='slop-ngram-item'>calculated risk (6)</span> <span class='slop-ngram-item'>cold knot (6)</span> <span class='slop-ngram-item'>physical blow (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart hammered ribs (9)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>looked less like (5)</span> <span class='slop-ngram-item'>smile touched lips (5)</span> <span class='slop-ngram-item'>felt less like (5)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>gave curt nod (4)</span> <span class='slop-ngram-item'>eyes never leaving (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>eyes met mine (4)</span> <span class='slop-ngram-item'>took deep breath (4)</span> <span class='slop-ngram-item'>knot tightening stomach (3)</span> <span class='slop-ngram-item'>dust motes dancing (3)</span> <span class='slop-ngram-item'>another pause longer (3)</span> <span class='slop-ngram-item'>pause longer time (3)</span> <span class='slop-ngram-item'>gaze flickered towards (3)</span> <span class='slop-ngram-item'>chapter static line (3)</span> <span class='slop-ngram-item'>faint smile touched (3)</span> <span class='slop-ngram-item'>every instinct screamed (3)</span> <span class='slop-ngram-item'>voice carefully neutral (3)</span> <span class='slop-ngram-item'>leaned forehead cool (3)</span> <span class='slop-ngram-item'>said voice flat (3)</span> <span class='slop-ngram-item'>life felt like (3)</span> <span class='slop-ngram-item'>squeezed eyes shut (3)</span> <span class='slop-ngram-item'>felt like eternity (3)</span>
</div>

##### claude-3-7-sonnet-20250219
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.856)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.863)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.865)</div>
<div class='slop-similar'>claude-sonnet-4 (distance=0.867)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.868)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>jingled</span> <span class='slop-word-item'>handholds</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>eliza</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crawlspace</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>harlow</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gareth</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>harrington</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>dani</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>grimly</span> <span class='slop-word-item'>wincing</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>elijah</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>luminescent</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>keller</span> <span class='slop-word-item'>workbench</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>methodically</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>eyes met mine (10)</span> <span class='slop-word-item'>something else entirely (8)</span> <span class='slop-word-item'>like a physical blow (7)</span> <span class='slop-word-item'>said without preamble (6)</span> <span class='slop-word-item'>Something flickered across (5)</span> <span class='slop-word-item'>already moving toward (5)</span> <span class='slop-word-item'>first time since (5)</span> <span class='slop-word-item'>door burst open (5)</span> <span class='slop-word-item'>expression remained neutral (5)</span> <span class='slop-word-item'>anyone could respond (5)</span> <span class='slop-word-item'>three years ago (4)</span> <span class='slop-word-item'>expression turned serious (4)</span> <span class='slop-word-item'>days had passed since (4)</span> <span class='slop-word-item'>took a deep breath (4)</span> <span class='slop-word-item'>Three days ago (4)</span> <span class='slop-word-item'>blood went cold (4)</span> <span class='slop-word-item'>dropped to one knee (4)</span> <span class='slop-word-item'>blood ran cold (4)</span> <span class='slop-word-item'>phone buzzed with a text (3)</span> <span class='slop-word-item'>eyes held mine (3)</span> <span class='slop-word-item'>fingers tightened around (3)</span> <span class='slop-word-item'>late afternoon light (3)</span> <span class='slop-word-item'>three days ago (3)</span> <span class='slop-word-item'>smile didn&#x27;t reach her eyes (3)</span> <span class='slop-word-item'>Three days had passed (3)</span> <span class='slop-word-item'>replied without looking (3)</span> <span class='slop-word-item'>soft knock interrupted (3)</span> <span class='slop-word-item'>door closed behind (3)</span> <span class='slop-word-item'>met her gaze steadily (3)</span> <span class='slop-word-item'>hit me like a physical (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could respond (32)</span> <span class='slop-ngram-item'>phone buzzed (19)</span> <span class='slop-ngram-item'>community center (16)</span> <span class='slop-ngram-item'>met gaze (15)</span> <span class='slop-ngram-item'>moved toward (14)</span> <span class='slop-ngram-item'>beneath skin (12)</span> <span class='slop-ngram-item'>lowered voice (12)</span> <span class='slop-ngram-item'>scientific curiosity (10)</span> <span class='slop-ngram-item'>expression hardened (10)</span> <span class='slop-ngram-item'>east wing (10)</span> <span class='slop-ngram-item'>moving toward (10)</span> <span class='slop-ngram-item'>gestured toward (10)</span> <span class='slop-ngram-item'>expression darkened (9)</span> <span class='slop-ngram-item'>expression remained (9)</span> <span class='slop-ngram-item'>expression shifted (9)</span> <span class='slop-ngram-item'>nodded toward (9)</span> <span class='slop-ngram-item'>like physical (9)</span> <span class='slop-ngram-item'>reach eyes (9)</span> <span class='slop-ngram-item'>said carefully (9)</span> <span class='slop-ngram-item'>monitoring equipment (8)</span> <span class='slop-ngram-item'>without preamble (8)</span> <span class='slop-ngram-item'>smile reach (8)</span> <span class='slop-ngram-item'>neural pathways (8)</span> <span class='slop-ngram-item'>flickered across (8)</span> <span class='slop-ngram-item'>physical blow (7)</span> <span class='slop-ngram-item'>expression neutral (7)</span> <span class='slop-ngram-item'>practiced efficiency (7)</span> <span class='slop-ngram-item'>already moving (7)</span> <span class='slop-ngram-item'>voice steady (7)</span> <span class='slop-ngram-item'>screen showed (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes met mine (10)</span> <span class='slop-ngram-item'>something else entirely (9)</span> <span class='slop-ngram-item'>smile reach eyes (8)</span> <span class='slop-ngram-item'>like physical blow (7)</span> <span class='slop-ngram-item'>three days ago (7)</span> <span class='slop-ngram-item'>said without preamble (6)</span> <span class='slop-ngram-item'>already moving toward (5)</span> <span class='slop-ngram-item'>something flickered across (5)</span> <span class='slop-ngram-item'>expression remained neutral (5)</span> <span class='slop-ngram-item'>met gaze steadily (5)</span> <span class='slop-ngram-item'>anyone could respond (5)</span> <span class='slop-ngram-item'>dropped one knee (5)</span> <span class='slop-ngram-item'>door burst open (5)</span> <span class='slop-ngram-item'>first time since (5)</span> <span class='slop-ngram-item'>expression turned serious (4)</span> <span class='slop-ngram-item'>hit like physical (4)</span> <span class='slop-ngram-item'>phone buzzed text (4)</span> <span class='slop-ngram-item'>blood went cold (4)</span> <span class='slop-ngram-item'>closed eyes briefly (4)</span> <span class='slop-ngram-item'>three days passed (4)</span> <span class='slop-ngram-item'>days passed since (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>three years ago (4)</span> <span class='slop-ngram-item'>took deep breath (4)</span> <span class='slop-ngram-item'>soft knock interrupted (3)</span> <span class='slop-ngram-item'>something tone made (3)</span> <span class='slop-ngram-item'>tone made look (3)</span> <span class='slop-ngram-item'>late afternoon light (3)</span> <span class='slop-ngram-item'>could respond phone (3)</span> <span class='slop-ngram-item'>eyes held mine (3)</span>
</div>

##### gpt-5-2025-08-07
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>horizon-alpha (distance=0.707)</div>
<div class='slop-similar'>gpt-5-mini-2025-08-07 (distance=0.846)</div>
<div class='slop-similar'>moonshotai/Kimi-K2-Instruct (distance=0.847)</div>
<div class='slop-similar'>o3 (distance=0.853)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.881)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>hiccuped</span> <span class='slop-word-item'>tamsin</span> <span class='slop-word-item'>skittered</span> <span class='slop-word-item'>cufflink</span> <span class='slop-word-item'>auditable</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>ladled</span> <span class='slop-word-item'>plink</span> <span class='slop-word-item'>windbreakers</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>rowan</span> <span class='slop-word-item'>doorjamb</span> <span class='slop-word-item'>winces</span> <span class='slop-word-item'>peephole</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>lina</span> <span class='slop-word-item'>metronome</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>brazier</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>unkindly</span> <span class='slop-word-item'>dented</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>sloshed</span> <span class='slop-word-item'>scuffed</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>saskia</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>transom</span> <span class='slop-word-item'>ladle</span> <span class='slop-word-item'>wheezes</span> <span class='slop-word-item'>streetlight</span> <span class='slop-word-item'>wobbled</span> <span class='slop-word-item'>soot</span> <span class='slop-word-item'>chirped</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>made a sound like (10)</span> <span class='slop-word-item'>said without looking (9)</span> <span class='slop-word-item'>looked like a man (6)</span> <span class='slop-word-item'>smells like wet (5)</span> <span class='slop-word-item'>made a face like (5)</span> <span class='slop-word-item'>hard enough to make (5)</span> <span class='slop-word-item'>mouth open like (5)</span> <span class='slop-word-item'>neat block letters (4)</span> <span class='slop-word-item'>two fingers like (4)</span> <span class='slop-word-item'>like a held breath (4)</span> <span class='slop-word-item'>feels like air (4)</span> <span class='slop-word-item'>look like someone (4)</span> <span class='slop-word-item'>felt less like (4)</span> <span class='slop-word-item'>like a hand on the back (4)</span> <span class='slop-word-item'>smelled like wet (4)</span> <span class='slop-word-item'>made a small sound (4)</span> <span class='slop-word-item'>said, without looking (4)</span> <span class='slop-word-item'>makes a sound like (3)</span> <span class='slop-word-item'>like someone put (3)</span> <span class='slop-word-item'>always smells like (3)</span> <span class='slop-word-item'>make it look like (3)</span> <span class='slop-word-item'>hall smelled like (3)</span> <span class='slop-word-item'>made a new sound (3)</span> <span class='slop-word-item'>without looking like (3)</span> <span class='slop-word-item'>two weeks ago (3)</span> <span class='slop-word-item'>put the phone away (3)</span> <span class='slop-word-item'>said, already moving (3)</span> <span class='slop-word-item'>took two steps (3)</span> <span class='slop-word-item'>put his hand flat (3)</span> <span class='slop-word-item'>took one step (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like dare (11)</span> <span class='slop-ngram-item'>said unkind (11)</span> <span class='slop-ngram-item'>caution tape (11)</span> <span class='slop-ngram-item'>like metronome (10)</span> <span class='slop-ngram-item'>dish towel (10)</span> <span class='slop-ngram-item'>heel hand (10)</span> <span class='slop-ngram-item'>pocket like (9)</span> <span class='slop-ngram-item'>service door (9)</span> <span class='slop-ngram-item'>like apology (9)</span> <span class='slop-ngram-item'>like talisman (9)</span> <span class='slop-ngram-item'>nods like (8)</span> <span class='slop-ngram-item'>tapped twice (8)</span> <span class='slop-ngram-item'>smiled without (8)</span> <span class='slop-ngram-item'>like bruise (8)</span> <span class='slop-ngram-item'>wet wool (7)</span> <span class='slop-ngram-item'>weight like (7)</span> <span class='slop-ngram-item'>like pennies (7)</span> <span class='slop-ngram-item'>zip tie (7)</span> <span class='slop-ngram-item'>said softer (7)</span> <span class='slop-ngram-item'>without drama (7)</span> <span class='slop-ngram-item'>quiet made (7)</span> <span class='slop-ngram-item'>palms flat (7)</span> <span class='slop-ngram-item'>found rhythm (6)</span> <span class='slop-ngram-item'>like sentence (6)</span> <span class='slop-ngram-item'>thumb along (6)</span> <span class='slop-ngram-item'>hair damp (6)</span> <span class='slop-ngram-item'>someone drawn (6)</span> <span class='slop-ngram-item'>freezer bag (6)</span> <span class='slop-ngram-item'>small said (6)</span> <span class='slop-ngram-item'>four hold (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>made sound like (14)</span> <span class='slop-ngram-item'>said without looking (13)</span> <span class='slop-ngram-item'>looked like man (6)</span> <span class='slop-ngram-item'>smells like wet (5)</span> <span class='slop-ngram-item'>said corner mouth (5)</span> <span class='slop-ngram-item'>put hand flat (5)</span> <span class='slop-ngram-item'>tea tasted like (5)</span> <span class='slop-ngram-item'>mouth open like (5)</span> <span class='slop-ngram-item'>made face like (5)</span> <span class='slop-ngram-item'>room smelled like (5)</span> <span class='slop-ngram-item'>hard enough make (5)</span> <span class='slop-ngram-item'>makes sound like (5)</span> <span class='slop-ngram-item'>look like someone (5)</span> <span class='slop-ngram-item'>makes feel like (5)</span> <span class='slop-ngram-item'>make look like (5)</span> <span class='slop-ngram-item'>neat block letters (4)</span> <span class='slop-ngram-item'>two fingers like (4)</span> <span class='slop-ngram-item'>like held breath (4)</span> <span class='slop-ngram-item'>feels like air (4)</span> <span class='slop-ngram-item'>said without heat (4)</span> <span class='slop-ngram-item'>said already moving (4)</span> <span class='slop-ngram-item'>made small sound (4)</span> <span class='slop-ngram-item'>like hand back (4)</span> <span class='slop-ngram-item'>said good said (4)</span> <span class='slop-ngram-item'>smelled like wet (4)</span> <span class='slop-ngram-item'>like could hold (4)</span> <span class='slop-ngram-item'>felt less like (4)</span> <span class='slop-ngram-item'>hand back neck (4)</span> <span class='slop-ngram-item'>said put hand (4)</span> <span class='slop-ngram-item'>looked like might (4)</span>
</div>

##### claude-3.5-sonnet
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>claude-sonnet-4 (distance=0.825)</div>
<div class='slop-similar'>claude-opus-4.1 (distance=0.844)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.861)</div>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.865)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.867)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>patel</span> <span class='slop-word-item'>tiktok</span> <span class='slop-word-item'>maya</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>sophie</span> <span class='slop-word-item'>dumplings</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>straightened</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>doorway</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>she&#x27;d</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>sarah</span> <span class='slop-word-item'>ducked</span> <span class='slop-word-item'>candlelight</span> <span class='slop-word-item'>rattled</span> <span class='slop-word-item'>trailed</span> <span class='slop-word-item'>jamie</span> <span class='slop-word-item'>static</span> <span class='slop-word-item'>alphabetical</span> <span class='slop-word-item'>comm</span> <span class='slop-word-item'>stitching</span> <span class='slop-word-item'>martinez</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>pantry</span> <span class='slop-word-item'>tightened</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>one last time (20)</span> <span class='slop-word-item'>phone buzzed one (17)</span> <span class='slop-word-item'>buzzed one last (11)</span> <span class='slop-word-item'>looked exactly like (5)</span> <span class='slop-word-item'>something else entirely (4)</span> <span class='slop-word-item'>Three days since (3)</span> <span class='slop-word-item'>said to no one in particular (3)</span> <span class='slop-word-item'>One last time (3)</span> <span class='slop-word-item'>came out sharper than intended (2)</span> <span class='slop-word-item'>came out sharper than she intended (1)</span> <span class='slop-word-item'>something new from something (1)</span> <span class='slop-word-item'>something else - something (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzed (74)</span> <span class='slop-ngram-item'>last time (32)</span> <span class='slop-ngram-item'>something else (30)</span> <span class='slop-ngram-item'>one last (26)</span> <span class='slop-ngram-item'>said quietly (24)</span> <span class='slop-ngram-item'>chen said (22)</span> <span class='slop-ngram-item'>want know (22)</span> <span class='slop-ngram-item'>ice cream (20)</span> <span class='slop-ngram-item'>unknown number (18)</span> <span class='slop-ngram-item'>buzzed one (17)</span> <span class='slop-ngram-item'>said finally (17)</span> <span class='slop-ngram-item'>behind us (15)</span> <span class='slop-ngram-item'>want see (14)</span> <span class='slop-ngram-item'>last week (11)</span> <span class='slop-ngram-item'>long enough (11)</span> <span class='slop-ngram-item'>hands moved (10)</span> <span class='slop-ngram-item'>said softly (10)</span> <span class='slop-ngram-item'>without looking (10)</span> <span class='slop-ngram-item'>exactly like (10)</span> <span class='slop-ngram-item'>come home (10)</span> <span class='slop-ngram-item'>voice came (10)</span> <span class='slop-ngram-item'>hands steady (9)</span> <span class='slop-ngram-item'>said carefully (9)</span> <span class='slop-ngram-item'>smiled slightly (9)</span> <span class='slop-ngram-item'>sarah said (9)</span> <span class='slop-ngram-item'>something new (9)</span> <span class='slop-ngram-item'>marcus voice (8)</span> <span class='slop-ngram-item'>kept voice (8)</span> <span class='slop-ngram-item'>stepped closer (8)</span> <span class='slop-ngram-item'>hands shaking (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>one last time (23)</span> <span class='slop-ngram-item'>phone buzzed one (17)</span> <span class='slop-ngram-item'>buzzed one last (11)</span> <span class='slop-ngram-item'>something else something (6)</span> <span class='slop-ngram-item'>looked exactly like (5)</span> <span class='slop-ngram-item'>time unknown number (4)</span> <span class='slop-ngram-item'>something else entirely (4)</span> <span class='slop-ngram-item'>came sharper intended (3)</span> <span class='slop-ngram-item'>three days since (3)</span> <span class='slop-ngram-item'>something new something (3)</span> <span class='slop-ngram-item'>said one particular (3)</span>
</div>

##### deepseek-ai/DeepSeek-R1-0528
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.682)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.812)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.832)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.835)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.856)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>uncurled</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>strobing</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>dully</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>rictus</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>whimpered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>lanced</span> <span class='slop-word-item'>stiffly</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>skittering</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>deadbolt</span> <span class='slop-word-item'>stockroom</span> <span class='slop-word-item'>scrabbling</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>horrifyingly</span> <span class='slop-word-item'>wincing</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>yelped</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>like a physical blow (13)</span> <span class='slop-word-item'>fingers closed around (9)</span> <span class='slop-word-item'>took a step closer (8)</span> <span class='slop-word-item'>took a step forward (7)</span> <span class='slop-word-item'>took another step (7)</span> <span class='slop-word-item'>dust motes dancing (6)</span> <span class='slop-word-item'>voice barely audible (6)</span> <span class='slop-word-item'>felt less like (5)</span> <span class='slop-word-item'>pointed a trembling finger (5)</span> <span class='slop-word-item'>word tasting like (5)</span> <span class='slop-word-item'>flat, devoid of inflection (5)</span> <span class='slop-word-item'>took a step towards (5)</span> <span class='slop-word-item'>blood ran cold (5)</span> <span class='slop-word-item'>long, distorted shadows (5)</span> <span class='slop-word-item'>gaze locked onto (4)</span> <span class='slop-word-item'>voice tight with pain (4)</span> <span class='slop-word-item'>coppery tang of blood (4)</span> <span class='slop-word-item'>tasting like ash (4)</span> <span class='slop-word-item'>one last time (4)</span> <span class='slop-word-item'>like a trapped bird (4)</span> <span class='slop-word-item'>something else, something (4)</span> <span class='slop-word-item'>head snapped around (4)</span> <span class='slop-word-item'>breath came in ragged (4)</span> <span class='slop-word-item'>voice was flat, devoid (4)</span> <span class='slop-word-item'>dam holding back (4)</span> <span class='slop-word-item'>chest like a shield (4)</span> <span class='slop-word-item'>smile spread across (4)</span> <span class='slop-word-item'>like dry leaves (4)</span> <span class='slop-word-item'>gestured vaguely towards (4)</span> <span class='slop-word-item'>gonna kill (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice tight (22)</span> <span class='slop-ngram-item'>elara stared (18)</span> <span class='slop-ngram-item'>physical blow (17)</span> <span class='slop-ngram-item'>voice raw (17)</span> <span class='slop-ngram-item'>flicker something (16)</span> <span class='slop-ngram-item'>rasped voice (15)</span> <span class='slop-ngram-item'>raw terror (13)</span> <span class='slop-ngram-item'>leo stared (12)</span> <span class='slop-ngram-item'>leo face (11)</span> <span class='slop-ngram-item'>elara said (11)</span> <span class='slop-ngram-item'>sound pure (11)</span> <span class='slop-ngram-item'>silence pressed (11)</span> <span class='slop-ngram-item'>devoid inflection (11)</span> <span class='slop-ngram-item'>expression unreadable (10)</span> <span class='slop-ngram-item'>metallic tang (10)</span> <span class='slop-ngram-item'>hung thick (9)</span> <span class='slop-ngram-item'>elara could (9)</span> <span class='slop-ngram-item'>voice dropping (9)</span> <span class='slop-ngram-item'>elara felt (9)</span> <span class='slop-ngram-item'>flat devoid (9)</span> <span class='slop-ngram-item'>murmured voice (8)</span> <span class='slop-ngram-item'>silence thick (8)</span> <span class='slop-ngram-item'>hammered ribs (8)</span> <span class='slop-ngram-item'>stood rigid (8)</span> <span class='slop-ngram-item'>tasting like (8)</span> <span class='slop-ngram-item'>pocket fingers (8)</span> <span class='slop-ngram-item'>cold knot (8)</span> <span class='slop-ngram-item'>scraped raw (8)</span> <span class='slop-ngram-item'>leo watched (8)</span> <span class='slop-ngram-item'>looked leo (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like physical blow (13)</span> <span class='slop-ngram-item'>fingers closed around (9)</span> <span class='slop-ngram-item'>heart hammered ribs (8)</span> <span class='slop-ngram-item'>took step closer (8)</span> <span class='slop-ngram-item'>heart hammering ribs (7)</span> <span class='slop-ngram-item'>took another step (7)</span> <span class='slop-ngram-item'>took step forward (7)</span> <span class='slop-ngram-item'>dust motes dancing (6)</span> <span class='slop-ngram-item'>flat devoid inflection (6)</span> <span class='slop-ngram-item'>said voice flat (6)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>word tasting like (5)</span> <span class='slop-ngram-item'>silence pressed heavier (5)</span> <span class='slop-ngram-item'>long distorted shadows (5)</span> <span class='slop-ngram-item'>voice flat devoid (5)</span> <span class='slop-ngram-item'>pointed trembling finger (5)</span> <span class='slop-ngram-item'>felt less like (5)</span> <span class='slop-ngram-item'>blood ran cold (5)</span> <span class='slop-ngram-item'>took step towards (5)</span> <span class='slop-ngram-item'>something else something (5)</span> <span class='slop-ngram-item'>one last time (5)</span> <span class='slop-ngram-item'>voice dry rasp (4)</span> <span class='slop-ngram-item'>like trapped bird (4)</span> <span class='slop-ngram-item'>frantic hammering heart (4)</span> <span class='slop-ngram-item'>tasting like ash (4)</span> <span class='slop-ngram-item'>rasped voice raw (4)</span> <span class='slop-ngram-item'>frantic drumming heart (4)</span> <span class='slop-ngram-item'>voice tight pain (4)</span> <span class='slop-ngram-item'>felt like physical (4)</span> <span class='slop-ngram-item'>chest like shield (4)</span>
</div>

##### gemini-2.5-pro-preview-06-05
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.728)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.736)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.808)</div>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.809)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.829)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>varrick</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>marrows</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>petunias</span> <span class='slop-word-item'>anya</span> <span class='slop-word-item'>wilting</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>petunia</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>rourke</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>peered</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>hawthorne</span> <span class='slop-word-item'>finn</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>zippo</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>dawning</span> <span class='slop-word-item'>furrowed</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely a whisper (8)</span> <span class='slop-word-item'>something else, something (6)</span> <span class='slop-word-item'>smile playing on her lips (6)</span> <span class='slop-word-item'>smile touched his lips (5)</span> <span class='slop-word-item'>said, her voice flat (5)</span> <span class='slop-word-item'>felt a strange sense (5)</span> <span class='slop-word-item'>blood ran cold (4)</span> <span class='slop-word-item'>smile touched her lips (4)</span> <span class='slop-word-item'>felt a cold dread (4)</span> <span class='slop-word-item'>faint, almost imperceptible (4)</span> <span class='slop-word-item'>smile playing on his lips (4)</span> <span class='slop-word-item'>tiny, almost imperceptible (4)</span> <span class='slop-word-item'>already moving towards (3)</span> <span class='slop-word-item'>fresh wave of anxiety (3)</span> <span class='slop-word-item'>carefully constructed walls (3)</span> <span class='slop-word-item'>faint smile touched (3)</span> <span class='slop-word-item'>long, long time (3)</span> <span class='slop-word-item'>smile spread across (3)</span> <span class='slop-word-item'>said, his voice flat (3)</span> <span class='slop-word-item'>felt less like (3)</span> <span class='slop-word-item'>sun casting long (3)</span> <span class='slop-word-item'>smile spreading across (3)</span> <span class='slop-word-item'>said, her voice quiet (3)</span> <span class='slop-word-item'>spreading across his face (3)</span> <span class='slop-word-item'>dusk began to settle (3)</span> <span class='slop-word-item'>sound of pure agony (3)</span> <span class='slop-word-item'>Silence descended, thick (3)</span> <span class='slop-word-item'>tear escaping and tracing (3)</span> <span class='slop-word-item'>escaping and tracing a path (3)</span> <span class='slop-word-item'>said, his voice barely (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (17)</span> <span class='slop-ngram-item'>voice tight (16)</span> <span class='slop-ngram-item'>almost imperceptible (16)</span> <span class='slop-ngram-item'>carefully constructed (15)</span> <span class='slop-ngram-item'>face pale (15)</span> <span class='slop-ngram-item'>anya sharma (14)</span> <span class='slop-ngram-item'>smile touched (13)</span> <span class='slop-ngram-item'>playing lips (13)</span> <span class='slop-ngram-item'>voice flat (13)</span> <span class='slop-ngram-item'>cold dread (12)</span> <span class='slop-ngram-item'>smile playing (12)</span> <span class='slop-ngram-item'>whispered voice (12)</span> <span class='slop-ngram-item'>voice barely (12)</span> <span class='slop-ngram-item'>flicker something (11)</span> <span class='slop-ngram-item'>aris thorne (11)</span> <span class='slop-ngram-item'>face mask (11)</span> <span class='slop-ngram-item'>fire escape (11)</span> <span class='slop-ngram-item'>else something (11)</span> <span class='slop-ngram-item'>barely whisper (10)</span> <span class='slop-ngram-item'>air thick (10)</span> <span class='slop-ngram-item'>one evening (10)</span> <span class='slop-ngram-item'>expression unreadable (9)</span> <span class='slop-ngram-item'>subtle shift (9)</span> <span class='slop-ngram-item'>touched lips (9)</span> <span class='slop-ngram-item'>suspiciously like (9)</span> <span class='slop-ngram-item'>voice quiet (9)</span> <span class='slop-ngram-item'>less like (9)</span> <span class='slop-ngram-item'>faint almost (8)</span> <span class='slop-ngram-item'>voice dropping (8)</span> <span class='slop-ngram-item'>taste ash (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile playing lips (12)</span> <span class='slop-ngram-item'>something else something (11)</span> <span class='slop-ngram-item'>voice barely whisper (10)</span> <span class='slop-ngram-item'>smile touched lips (9)</span> <span class='slop-ngram-item'>said voice flat (8)</span> <span class='slop-ngram-item'>said voice quiet (6)</span> <span class='slop-ngram-item'>faint almost imperceptible (5)</span> <span class='slop-ngram-item'>said voice tight (5)</span> <span class='slop-ngram-item'>felt strange sense (5)</span> <span class='slop-ngram-item'>felt cold dread (4)</span> <span class='slop-ngram-item'>tiny almost imperceptible (4)</span> <span class='slop-ngram-item'>chapter taste ash (4)</span> <span class='slop-ngram-item'>said voice dropping (4)</span> <span class='slop-ngram-item'>face pale eyes (4)</span> <span class='slop-ngram-item'>said voice barely (4)</span> <span class='slop-ngram-item'>spreading across face (4)</span> <span class='slop-ngram-item'>blood ran cold (4)</span> <span class='slop-ngram-item'>hand flying mouth (3)</span> <span class='slop-ngram-item'>kept voice even (3)</span> <span class='slop-ngram-item'>cold dread seeping (3)</span> <span class='slop-ngram-item'>faint metallic tang (3)</span> <span class='slop-ngram-item'>tear escaping tracing (3)</span> <span class='slop-ngram-item'>escaping tracing path (3)</span> <span class='slop-ngram-item'>dusk began settle (3)</span> <span class='slop-ngram-item'>silence descended thick (3)</span> <span class='slop-ngram-item'>silence descended broken (3)</span> <span class='slop-ngram-item'>sun casting long (3)</span> <span class='slop-ngram-item'>voice quiet firm (3)</span> <span class='slop-ngram-item'>fresh wave anxiety (3)</span> <span class='slop-ngram-item'>sound pure agony (3)</span>
</div>

##### gpt-5-chat-latest-2025-08-07
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.762)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.798)</div>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.803)</div>
<div class='slop-similar'>mistral-medium-3.1 (distance=0.817)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.821)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>sidelong</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>flexed</span> <span class='slop-word-item'>mismatched</span> <span class='slop-word-item'>clattering</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>sill</span> <span class='slop-word-item'>muffled</span> <span class='slop-word-item'>barked</span> <span class='slop-word-item'>tugged</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>kindling</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>slid</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>crate</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>said without looking (8)</span> <span class='slop-word-item'>said, voice low (5)</span> <span class='slop-word-item'>without looking back (3)</span> <span class='slop-word-item'>one hand still (3)</span> <span class='slop-word-item'>stepped forward anyway (3)</span> <span class='slop-word-item'>sound came again: a low (2)</span> <span class='slop-word-item'>leaned back in his chair (2)</span> <span class='slop-word-item'>leaned back, chair (1)</span> <span class='slop-word-item'>sound came again—closer, from the low (1)</span> <span class='slop-word-item'>like he knew exactly (1)</span> <span class='slop-word-item'>like it knew exactly (1)</span> <span class='slop-word-item'>leaned back in my chair (1)</span> <span class='slop-word-item'>like they knew exactly (1)</span> <span class='slop-word-item'>said, without looking (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>without looking (22)</span> <span class='slop-ngram-item'>said without (17)</span> <span class='slop-ngram-item'>voice low (15)</span> <span class='slop-ngram-item'>said quietly (14)</span> <span class='slop-ngram-item'>smelled faintly (11)</span> <span class='slop-ngram-item'>cold air (11)</span> <span class='slop-ngram-item'>said softly (11)</span> <span class='slop-ngram-item'>said finally (10)</span> <span class='slop-ngram-item'>long moment (10)</span> <span class='slop-ngram-item'>back toward (10)</span> <span class='slop-ngram-item'>far end (9)</span> <span class='slop-ngram-item'>smiled faintly (8)</span> <span class='slop-ngram-item'>without asking (8)</span> <span class='slop-ngram-item'>stepped closer (8)</span> <span class='slop-ngram-item'>somewhere outside (7)</span> <span class='slop-ngram-item'>eyes flicking (7)</span> <span class='slop-ngram-item'>air smelled (7)</span> <span class='slop-ngram-item'>somewhere behind (7)</span> <span class='slop-ngram-item'>eyes flicked (7)</span> <span class='slop-ngram-item'>head tilted (7)</span> <span class='slop-ngram-item'>said flatly (7)</span> <span class='slop-ngram-item'>like might (7)</span> <span class='slop-ngram-item'>said lightly (6)</span> <span class='slop-ngram-item'>like waiting (6)</span> <span class='slop-ngram-item'>late afternoon (6)</span> <span class='slop-ngram-item'>three steps (6)</span> <span class='slop-ngram-item'>air felt (6)</span> <span class='slop-ngram-item'>drew back (6)</span> <span class='slop-ngram-item'>morning light (6)</span> <span class='slop-ngram-item'>beat long (5)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said without looking (9)</span> <span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>leaned back chair (4)</span> <span class='slop-ngram-item'>stepped forward anyway (3)</span> <span class='slop-ngram-item'>sound came low (3)</span> <span class='slop-ngram-item'>like knew exactly (3)</span> <span class='slop-ngram-item'>one hand still (3)</span> <span class='slop-ngram-item'>without looking back (3)</span>
</div>

##### horizon-alpha
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-5-2025-08-07 (distance=0.707)</div>
<div class='slop-similar'>gpt-5-mini-2025-08-07 (distance=0.831)</div>
<div class='slop-similar'>o3 (distance=0.845)</div>
<div class='slop-similar'>moonshotai/Kimi-K2-Instruct (distance=0.846)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.853)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>hiccuped</span> <span class='slop-word-item'>prickled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>skittered</span> <span class='slop-word-item'>kade</span> <span class='slop-word-item'>sera</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>handprint</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>rowan</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>thumped</span> <span class='slop-word-item'>unkindly</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>recycler</span> <span class='slop-word-item'>stuttered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>peephole</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>squeaks</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>slid</span> <span class='slop-word-item'>culvert</span> <span class='slop-word-item'>grimaced</span> <span class='slop-word-item'>tugged</span> <span class='slop-word-item'>wrongness</span> <span class='slop-word-item'>ledger</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>breathed</span> <span class='slop-word-item'>squeaked</span> <span class='slop-word-item'>chalkboard</span> <span class='slop-word-item'>sagged</span> <span class='slop-word-item'>palmed</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>soot</span> <span class='slop-word-item'>slivers</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>neatness</span> <span class='slop-word-item'>thumbed</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>wobbled</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>made a sound like (9)</span> <span class='slop-word-item'>like someone else (6)</span> <span class='slop-word-item'>made a noise like (6)</span> <span class='slop-word-item'>looked like someone (5)</span> <span class='slop-word-item'>said without looking (5)</span> <span class='slop-word-item'>phone buzzed with a text (5)</span> <span class='slop-word-item'>air smelled like (5)</span> <span class='slop-word-item'>made me feel like (5)</span> <span class='slop-word-item'>one last time (5)</span> <span class='slop-word-item'>smiled without teeth (4)</span> <span class='slop-word-item'>like a living thing (4)</span> <span class='slop-word-item'>hard enough to make (4)</span> <span class='slop-word-item'>smiled without humor (4)</span> <span class='slop-word-item'>said, without looking (4)</span> <span class='slop-word-item'>like a held breath (4)</span> <span class='slop-word-item'>like a question mark (4)</span> <span class='slop-word-item'>sound like someone (4)</span> <span class='slop-word-item'>said, voice flat (3)</span> <span class='slop-word-item'>smelled like wet (3)</span> <span class='slop-word-item'>something like respect (3)</span> <span class='slop-word-item'>made it sound like (3)</span> <span class='slop-word-item'>like a punctuation mark (3)</span> <span class='slop-word-item'>said, apropos of nothing (3)</span> <span class='slop-word-item'>sound like a sigh (3)</span> <span class='slop-word-item'>something like relief (3)</span> <span class='slop-word-item'>said, almost smiling (3)</span> <span class='slop-word-item'>made it look like (3)</span> <span class='slop-word-item'>always smelled like (3)</span> <span class='slop-word-item'>long enough to feel (3)</span> <span class='slop-word-item'>mouth went dry (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>mara said (42)</span> <span class='slop-ngram-item'>smiled without (13)</span> <span class='slop-ngram-item'>like magician (10)</span> <span class='slop-ngram-item'>like dare (10)</span> <span class='slop-ngram-item'>sent photo (9)</span> <span class='slop-ngram-item'>heel hand (9)</span> <span class='slop-ngram-item'>pocket like (8)</span> <span class='slop-ngram-item'>said softer (8)</span> <span class='slop-ngram-item'>like punctuation (8)</span> <span class='slop-ngram-item'>said meaning (8)</span> <span class='slop-ngram-item'>like pennies (7)</span> <span class='slop-ngram-item'>weight like (7)</span> <span class='slop-ngram-item'>like metronome (7)</span> <span class='slop-ngram-item'>like apology (7)</span> <span class='slop-ngram-item'>buzzed text (7)</span> <span class='slop-ngram-item'>like bruise (7)</span> <span class='slop-ngram-item'>said unkind (6)</span> <span class='slop-ngram-item'>without humor (6)</span> <span class='slop-ngram-item'>said beat (6)</span> <span class='slop-ngram-item'>like relief (6)</span> <span class='slop-ngram-item'>gaze flicked (6)</span> <span class='slop-ngram-item'>like respect (6)</span> <span class='slop-ngram-item'>jaw tightened (6)</span> <span class='slop-ngram-item'>like note (6)</span> <span class='slop-ngram-item'>said unkindly (6)</span> <span class='slop-ngram-item'>like talisman (6)</span> <span class='slop-ngram-item'>pry bar (6)</span> <span class='slop-ngram-item'>chin toward (6)</span> <span class='slop-ngram-item'>breathed like (6)</span> <span class='slop-ngram-item'>mouth tightened (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>made sound like (12)</span> <span class='slop-ngram-item'>said without looking (9)</span> <span class='slop-ngram-item'>phone buzzed text (7)</span> <span class='slop-ngram-item'>made feel like (7)</span> <span class='slop-ngram-item'>put phone face (6)</span> <span class='slop-ngram-item'>made noise like (6)</span> <span class='slop-ngram-item'>like someone else (6)</span> <span class='slop-ngram-item'>like held breath (5)</span> <span class='slop-ngram-item'>said almost smiled (5)</span> <span class='slop-ngram-item'>air smelled like (5)</span> <span class='slop-ngram-item'>said something like (5)</span> <span class='slop-ngram-item'>looked like someone (5)</span> <span class='slop-ngram-item'>made look like (5)</span> <span class='slop-ngram-item'>one last time (5)</span> <span class='slop-ngram-item'>said made face (4)</span> <span class='slop-ngram-item'>smiled without teeth (4)</span> <span class='slop-ngram-item'>smiled without humor (4)</span> <span class='slop-ngram-item'>something like respect (4)</span> <span class='slop-ngram-item'>like question mark (4)</span> <span class='slop-ngram-item'>said voice small (4)</span> <span class='slop-ngram-item'>like living thing (4)</span> <span class='slop-ngram-item'>sound like someone (4)</span> <span class='slop-ngram-item'>closed eyes saw (4)</span> <span class='slop-ngram-item'>hard enough make (4)</span> <span class='slop-ngram-item'>said sounded like (4)</span> <span class='slop-ngram-item'>make sound like (4)</span> <span class='slop-ngram-item'>said like someone (3)</span> <span class='slop-ngram-item'>said honest could (3)</span> <span class='slop-ngram-item'>typed deleted typed (3)</span> <span class='slop-ngram-item'>something like relief (3)</span>
</div>

##### zai-org/GLM-4.5
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.682)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.789)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.809)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.814)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.859)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>hadn</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>wasn</span> <span class='slop-word-item'>tendril</span> <span class='slop-word-item'>monoliths</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>strobing</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>lanced</span> <span class='slop-word-item'>weren</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>didn</span> <span class='slop-word-item'>skittering</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>whimpered</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>holstered</span> <span class='slop-word-item'>retching</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>workbench</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>couldn</span> <span class='slop-word-item'>silhouetted</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>silence stretched, thick (9)</span> <span class='slop-word-item'>like a physical blow (9)</span> <span class='slop-word-item'>turned and walked away (8)</span> <span class='slop-word-item'>took a step closer (7)</span> <span class='slop-word-item'>like a lead weight (7)</span> <span class='slop-word-item'>long, dancing shadows (7)</span> <span class='slop-word-item'>took a step forward (7)</span> <span class='slop-word-item'>smile touched his lips (7)</span> <span class='slop-word-item'>door creaked open (7)</span> <span class='slop-word-item'>heart hammering against my ribs (6)</span> <span class='slop-word-item'>felt like a lead (6)</span> <span class='slop-word-item'>smile spread across (6)</span> <span class='slop-word-item'>spread across his face (6)</span> <span class='slop-word-item'>metallic tang of blood (6)</span> <span class='slop-word-item'>said, her voice low (6)</span> <span class='slop-word-item'>heart hammered against her ribs (6)</span> <span class='slop-word-item'>said, his voice low (6)</span> <span class='slop-word-item'>took a step towards (5)</span> <span class='slop-word-item'>one last time (5)</span> <span class='slop-word-item'>casting long, dancing (5)</span> <span class='slop-word-item'>gestured vaguely towards (5)</span> <span class='slop-word-item'>scent of damp earth (5)</span> <span class='slop-word-item'>said, her voice tight (5)</span> <span class='slop-word-item'>took a shuddering breath (5)</span> <span class='slop-word-item'>heart hammering against her ribs (5)</span> <span class='slop-word-item'>looked less like (5)</span> <span class='slop-word-item'>ribs like a trapped (5)</span> <span class='slop-word-item'>like a trapped bird (5)</span> <span class='slop-word-item'>sighed, the sound heavy (5)</span> <span class='slop-word-item'>fingers flew across (5)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice tight (28)</span> <span class='slop-ngram-item'>flicker something (18)</span> <span class='slop-ngram-item'>damp earth (14)</span> <span class='slop-ngram-item'>sighed sound (14)</span> <span class='slop-ngram-item'>hammering ribs (14)</span> <span class='slop-ngram-item'>voice raw (13)</span> <span class='slop-ngram-item'>physical weight (13)</span> <span class='slop-ngram-item'>hammered ribs (12)</span> <span class='slop-ngram-item'>metallic tang (12)</span> <span class='slop-ngram-item'>lead weight (11)</span> <span class='slop-ngram-item'>physical blow (11)</span> <span class='slop-ngram-item'>cold knot (11)</span> <span class='slop-ngram-item'>stated voice (10)</span> <span class='slop-ngram-item'>grimy window (10)</span> <span class='slop-ngram-item'>grabbed heavy (10)</span> <span class='slop-ngram-item'>expression unreadable (10)</span> <span class='slop-ngram-item'>stretched thick (10)</span> <span class='slop-ngram-item'>silas stood (10)</span> <span class='slop-ngram-item'>paused letting (9)</span> <span class='slop-ngram-item'>white gripped (9)</span> <span class='slop-ngram-item'>flat devoid (9)</span> <span class='slop-ngram-item'>ribs like (8)</span> <span class='slop-ngram-item'>devoid warmth (8)</span> <span class='slop-ngram-item'>tremor hands (8)</span> <span class='slop-ngram-item'>voice dropping (8)</span> <span class='slop-ngram-item'>silas watched (8)</span> <span class='slop-ngram-item'>knot gut (8)</span> <span class='slop-ngram-item'>like shroud (8)</span> <span class='slop-ngram-item'>fingers brushing (8)</span> <span class='slop-ngram-item'>tasting like (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart hammering ribs (14)</span> <span class='slop-ngram-item'>said voice low (14)</span> <span class='slop-ngram-item'>heart hammered ribs (12)</span> <span class='slop-ngram-item'>smile touched lips (12)</span> <span class='slop-ngram-item'>said voice tight (11)</span> <span class='slop-ngram-item'>silence stretched thick (10)</span> <span class='slop-ngram-item'>like physical blow (9)</span> <span class='slop-ngram-item'>knuckles white gripped (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>turned walked away (8)</span> <span class='slop-ngram-item'>sighed sound heavy (7)</span> <span class='slop-ngram-item'>long dancing shadows (7)</span> <span class='slop-ngram-item'>like lead weight (7)</span> <span class='slop-ngram-item'>felt like lead (7)</span> <span class='slop-ngram-item'>took step closer (7)</span> <span class='slop-ngram-item'>door creaked open (7)</span> <span class='slop-ngram-item'>took step forward (7)</span> <span class='slop-ngram-item'>hammered ribs frantic (6)</span> <span class='slop-ngram-item'>voice low rough (6)</span> <span class='slop-ngram-item'>eyes wide terrified (6)</span> <span class='slop-ngram-item'>metallic tang blood (6)</span> <span class='slop-ngram-item'>eyes locked onto (6)</span> <span class='slop-ngram-item'>smile spread across (6)</span> <span class='slop-ngram-item'>spread across face (6)</span> <span class='slop-ngram-item'>one last time (6)</span> <span class='slop-ngram-item'>tasted like ash (5)</span> <span class='slop-ngram-item'>scent damp earth (5)</span> <span class='slop-ngram-item'>ribs like trapped (5)</span> <span class='slop-ngram-item'>like trapped bird (5)</span> <span class='slop-ngram-item'>face mask cold (5)</span>
</div>

##### chatgpt-4o-latest-2025-03-27
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.715)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.762)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.771)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.787)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.792)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>dimmed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>scrawled</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>bloomed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>spirals</span> <span class='slop-word-item'>nightstand</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>duffel</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>hunched</span> <span class='slop-word-item'>curled</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>answer right away (6)</span> <span class='slop-word-item'>sat on the edge of the bed (5)</span> <span class='slop-word-item'>stared at it for a long time (5)</span> <span class='slop-word-item'>turned and walked away (5)</span> <span class='slop-word-item'>door creaked open (5)</span> <span class='slop-word-item'>without another word (4)</span> <span class='slop-word-item'>turned toward the door (3)</span> <span class='slop-word-item'>remember falling asleep (3)</span> <span class='slop-word-item'>reached into his coat and pulled (3)</span> <span class='slop-word-item'>leaned forward, elbows (3)</span> <span class='slop-word-item'>sun dipped low (3)</span> <span class='slop-word-item'>felt something shift (3)</span> <span class='slop-word-item'>single sheet of paper (3)</span> <span class='slop-word-item'>looked at him for a long moment (3)</span> <span class='slop-word-item'>could still feel (3)</span> <span class='slop-word-item'>said, voice low (2)</span> <span class='slop-word-item'>smiled, but it didn’t reach his eyes (2)</span> <span class='slop-word-item'>leaned back in the chair (2)</span> <span class='slop-word-item'>watched her for a long moment (2)</span> <span class='slop-word-item'>sat back on her heels (2)</span> <span class='slop-word-item'>Two days later (2)</span> <span class='slop-word-item'>hands folded in his lap (2)</span> <span class='slop-word-item'>think they’ll come back (2)</span> <span class='slop-word-item'>Outside, the wind picked (2)</span> <span class='slop-word-item'>looked at me then, really looked (1)</span> <span class='slop-word-item'>sat back on my heels (1)</span> <span class='slop-word-item'>like they owed him something (1)</span> <span class='slop-word-item'>like she knew something (1)</span> <span class='slop-word-item'>watched it for a long moment (1)</span> <span class='slop-word-item'>looked at him, really looked (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stepped closer (30)</span> <span class='slop-ngram-item'>sat beside (17)</span> <span class='slop-ngram-item'>smiled faintly (14)</span> <span class='slop-ngram-item'>mara said (13)</span> <span class='slop-ngram-item'>nodded slowly (13)</span> <span class='slop-ngram-item'>sat edge (12)</span> <span class='slop-ngram-item'>stood edge (11)</span> <span class='slop-ngram-item'>voice low (11)</span> <span class='slop-ngram-item'>silence stretched (10)</span> <span class='slop-ngram-item'>air smelled (10)</span> <span class='slop-ngram-item'>breath caught (10)</span> <span class='slop-ngram-item'>reach eyes (9)</span> <span class='slop-ngram-item'>reached touched (9)</span> <span class='slop-ngram-item'>stood slowly (9)</span> <span class='slop-ngram-item'>glowed faintly (8)</span> <span class='slop-ngram-item'>voice quiet (8)</span> <span class='slop-ngram-item'>stared long (8)</span> <span class='slop-ngram-item'>said nodded (8)</span> <span class='slop-ngram-item'>like breath (7)</span> <span class='slop-ngram-item'>crouched beside (7)</span> <span class='slop-ngram-item'>tucked behind (7)</span> <span class='slop-ngram-item'>jaw clenched (7)</span> <span class='slop-ngram-item'>reached coat (7)</span> <span class='slop-ngram-item'>kind place (7)</span> <span class='slop-ngram-item'>gestured toward (7)</span> <span class='slop-ngram-item'>low hum (7)</span> <span class='slop-ngram-item'>like waiting (7)</span> <span class='slop-ngram-item'>nodded turned (7)</span> <span class='slop-ngram-item'>heart thudding (6)</span> <span class='slop-ngram-item'>mara looked (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>answer right away (6)</span> <span class='slop-ngram-item'>stared long time (6)</span> <span class='slop-ngram-item'>sat edge bed (6)</span> <span class='slop-ngram-item'>turned walked away (5)</span> <span class='slop-ngram-item'>door creaked open (5)</span> <span class='slop-ngram-item'>smiled reach eyes (4)</span> <span class='slop-ngram-item'>watched long moment (4)</span> <span class='slop-ngram-item'>looked long moment (4)</span> <span class='slop-ngram-item'>reached coat pulled (4)</span> <span class='slop-ngram-item'>something else something (4)</span> <span class='slop-ngram-item'>without another word (4)</span> <span class='slop-ngram-item'>leaned back chair (4)</span> <span class='slop-ngram-item'>sun dipped low (3)</span> <span class='slop-ngram-item'>know stepped closer (3)</span> <span class='slop-ngram-item'>return address inside (3)</span> <span class='slop-ngram-item'>said sat slowly (3)</span> <span class='slop-ngram-item'>outside wind picked (3)</span> <span class='slop-ngram-item'>felt something shift (3)</span> <span class='slop-ngram-item'>like owed something (3)</span> <span class='slop-ngram-item'>leaned forward elbows (3)</span> <span class='slop-ngram-item'>looked really looked (3)</span> <span class='slop-ngram-item'>sat back heels (3)</span> <span class='slop-ngram-item'>hands folded lap (3)</span> <span class='slop-ngram-item'>think come back (3)</span> <span class='slop-ngram-item'>turned toward door (3)</span> <span class='slop-ngram-item'>like knew something (3)</span> <span class='slop-ngram-item'>remember falling asleep (3)</span> <span class='slop-ngram-item'>said voice low (3)</span> <span class='slop-ngram-item'>single sheet paper (3)</span> <span class='slop-ngram-item'>looked like wanted (3)</span>
</div>

##### google/gemini-2.5-flash-preview-05-20
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.728)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.764)</div>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.789)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.803)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.812)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>swiveled</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>crawler</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>chitin</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>grav</span> <span class='slop-word-item'>terrifyingly</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>drumbeat</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>faint, almost imperceptible (11)</span> <span class='slop-word-item'>said, his voice flat (8)</span> <span class='slop-word-item'>voice barely audible (8)</span> <span class='slop-word-item'>took a deep breath (8)</span> <span class='slop-word-item'>something else entirely (7)</span> <span class='slop-word-item'>fingers flying across (7)</span> <span class='slop-word-item'>voice barely a whisper (6)</span> <span class='slop-word-item'>felt less like (6)</span> <span class='slop-word-item'>something else, something (5)</span> <span class='slop-word-item'>smile touching his lips (5)</span> <span class='slop-word-item'>felt like an eternity (5)</span> <span class='slop-word-item'>asked, his voice low (4)</span> <span class='slop-word-item'>breath coming in ragged (4)</span> <span class='slop-word-item'>coming in ragged gasps (4)</span> <span class='slop-word-item'>said, his voice a low (4)</span> <span class='slop-word-item'>said, his voice firm (4)</span> <span class='slop-word-item'>voice a low rumble (4)</span> <span class='slop-word-item'>air grew heavier (4)</span> <span class='slop-word-item'>moved with impossible speed (4)</span> <span class='slop-word-item'>one last time (4)</span> <span class='slop-word-item'>casting long, dancing (4)</span> <span class='slop-word-item'>long, dancing shadows (4)</span> <span class='slop-word-item'>spent the next few days (4)</span> <span class='slop-word-item'>brow furrowed in concentration (4)</span> <span class='slop-word-item'>blood ran cold (4)</span> <span class='slop-word-item'>Every shadow seemed (3)</span> <span class='slop-word-item'>smile spread across (3)</span> <span class='slop-word-item'>smile playing on his lips (3)</span> <span class='slop-word-item'>hand instinctively went (3)</span> <span class='slop-word-item'>cold dread seeped (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (40)</span> <span class='slop-ngram-item'>almost imperceptible (33)</span> <span class='slop-ngram-item'>whispered voice (28)</span> <span class='slop-ngram-item'>flicker something (17)</span> <span class='slop-ngram-item'>voice flat (17)</span> <span class='slop-ngram-item'>faint almost (16)</span> <span class='slop-ngram-item'>voice raw (16)</span> <span class='slop-ngram-item'>clock tower (16)</span> <span class='slop-ngram-item'>gaze fixed (16)</span> <span class='slop-ngram-item'>energy signature (14)</span> <span class='slop-ngram-item'>eyes usually (13)</span> <span class='slop-ngram-item'>metallic tang (12)</span> <span class='slop-ngram-item'>face grim (12)</span> <span class='slop-ngram-item'>voice tight (11)</span> <span class='slop-ngram-item'>jaw tight (11)</span> <span class='slop-ngram-item'>cold dread (11)</span> <span class='slop-ngram-item'>voice strained (11)</span> <span class='slop-ngram-item'>air grew (11)</span> <span class='slop-ngram-item'>breath hitched (10)</span> <span class='slop-ngram-item'>heart hammered (10)</span> <span class='slop-ngram-item'>low resonant (9)</span> <span class='slop-ngram-item'>casting long (9)</span> <span class='slop-ngram-item'>hand instinctively (9)</span> <span class='slop-ngram-item'>felt less (9)</span> <span class='slop-ngram-item'>touching lips (8)</span> <span class='slop-ngram-item'>fingers flying (8)</span> <span class='slop-ngram-item'>voice laced (8)</span> <span class='slop-ngram-item'>voice firm (8)</span> <span class='slop-ngram-item'>small almost (8)</span> <span class='slop-ngram-item'>soft almost (8)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>faint almost imperceptible (11)</span> <span class='slop-ngram-item'>something else something (11)</span> <span class='slop-ngram-item'>said voice flat (9)</span> <span class='slop-ngram-item'>voice barely audible (8)</span> <span class='slop-ngram-item'>took deep breath (8)</span> <span class='slop-ngram-item'>smile touching lips (7)</span> <span class='slop-ngram-item'>fingers flying across (7)</span> <span class='slop-ngram-item'>something else entirely (7)</span> <span class='slop-ngram-item'>voice low rumble (6)</span> <span class='slop-ngram-item'>flying across console (6)</span> <span class='slop-ngram-item'>heart hammered ribs (6)</span> <span class='slop-ngram-item'>felt less like (6)</span> <span class='slop-ngram-item'>said voice low (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>said voice firm (5)</span> <span class='slop-ngram-item'>whispered voice barely (5)</span> <span class='slop-ngram-item'>asked voice low (5)</span> <span class='slop-ngram-item'>breath coming ragged (5)</span> <span class='slop-ngram-item'>brow furrowed concentration (5)</span> <span class='slop-ngram-item'>felt like eternity (5)</span> <span class='slop-ngram-item'>asked voice barely (4)</span> <span class='slop-ngram-item'>air grew heavier (4)</span> <span class='slop-ngram-item'>casting long dancing (4)</span> <span class='slop-ngram-item'>long dancing shadows (4)</span> <span class='slop-ngram-item'>moved impossible speed (4)</span> <span class='slop-ngram-item'>coming ragged gasps (4)</span> <span class='slop-ngram-item'>said voice quiet (4)</span> <span class='slop-ngram-item'>smile playing lips (4)</span> <span class='slop-ngram-item'>spent next days (4)</span> <span class='slop-ngram-item'>running hand hair (4)</span>
</div>

##### o3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.819)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.836)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.840)</div>
<div class='slop-similar'>horizon-alpha (distance=0.845)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.847)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>strobed</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>prickled</span> <span class='slop-word-item'>sluiced</span> <span class='slop-word-item'>glimmered</span> <span class='slop-word-item'>clanged</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>vane</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>marisol</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>strobes</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>klaxons</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>quivered</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>sagged</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>winced</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>thumbed</span> <span class='slop-word-item'>footfalls</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>limps</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>grimaced</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>smudged</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>said, voice low (5)</span> <span class='slop-word-item'>like a tuning fork (3)</span> <span class='slop-word-item'>door slid open (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (28)</span> <span class='slop-ngram-item'>voice low (14)</span> <span class='slop-ngram-item'>duct tape (13)</span> <span class='slop-ngram-item'>behind eyes (13)</span> <span class='slop-ngram-item'>phone buzzed (12)</span> <span class='slop-ngram-item'>two fingers (12)</span> <span class='slop-ngram-item'>folded arms (10)</span> <span class='slop-ngram-item'>behind us (10)</span> <span class='slop-ngram-item'>dust motes (9)</span> <span class='slop-ngram-item'>eyes flicked (9)</span> <span class='slop-ngram-item'>smells like (9)</span> <span class='slop-ngram-item'>heart hammering (8)</span> <span class='slop-ngram-item'>lights flickered (8)</span> <span class='slop-ngram-item'>voice cracked (8)</span> <span class='slop-ngram-item'>three minutes (8)</span> <span class='slop-ngram-item'>breath fogging (7)</span> <span class='slop-ngram-item'>crouched beside (7)</span> <span class='slop-ngram-item'>unknown number (7)</span> <span class='slop-ngram-item'>asked voice (7)</span> <span class='slop-ngram-item'>eyes narrowed (7)</span> <span class='slop-ngram-item'>roof like (6)</span> <span class='slop-ngram-item'>gaze flicked (6)</span> <span class='slop-ngram-item'>rain hammered (6)</span> <span class='slop-ngram-item'>smoke curled (6)</span> <span class='slop-ngram-item'>outside rain (6)</span> <span class='slop-ngram-item'>wind carried (6)</span> <span class='slop-ngram-item'>fingers brushed (6)</span> <span class='slop-ngram-item'>arms folded (6)</span> <span class='slop-ngram-item'>voice hoarse (6)</span> <span class='slop-ngram-item'>met gaze (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (5)</span> <span class='slop-ngram-item'>like tuning fork (3)</span> <span class='slop-ngram-item'>door slid open (3)</span>
</div>

##### moonshotai/Kimi-K2-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.827)</div>
<div class='slop-similar'>horizon-alpha (distance=0.846)</div>
<div class='slop-similar'>gpt-5-2025-08-07 (distance=0.847)</div>
<div class='slop-similar'>Qwen/Qwen3-235B-A22B-Instruct-2507 (distance=0.854)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.854)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>marisol</span> <span class='slop-word-item'>clinks</span> <span class='slop-word-item'>steadies</span> <span class='slop-word-item'>flinches</span> <span class='slop-word-item'>nightshirt</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>windbreaker</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>limps</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>blinks</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flutters</span> <span class='slop-word-item'>topside</span> <span class='slop-word-item'>banister</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>heartbeats</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>trembles</span> <span class='slop-word-item'>drips</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>twitches</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>metronome</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>skylight</span> <span class='slop-word-item'>shard</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>groaned</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>short, one long (7)</span> <span class='slop-word-item'>like someone else (4)</span> <span class='slop-word-item'>one last time (4)</span> <span class='slop-word-item'>like spilled ink (3)</span> <span class='slop-word-item'>took one step (3)</span> <span class='slop-word-item'>like a second heart (3)</span> <span class='slop-word-item'>says, nodding toward (3)</span> <span class='slop-word-item'>warm, almost feverish (2)</span> <span class='slop-word-item'>close enough to see (2)</span> <span class='slop-word-item'>One Mississippi, two (2)</span> <span class='slop-word-item'>Mississippi, two Mississippi (2)</span> <span class='slop-word-item'>close enough I see (1)</span> <span class='slop-word-item'>One Mississippi two (1)</span> <span class='slop-word-item'>Mississippi two Mississippi (1)</span> <span class='slop-word-item'>Warm now, almost feverish (1)</span> <span class='slop-word-item'>warm now, almost feverish (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smells like (38)</span> <span class='slop-ngram-item'>tastes like (20)</span> <span class='slop-ngram-item'>voice cracks (13)</span> <span class='slop-ngram-item'>like wet (13)</span> <span class='slop-ngram-item'>short one (13)</span> <span class='slop-ngram-item'>says voice (13)</span> <span class='slop-ngram-item'>shaped like (13)</span> <span class='slop-ngram-item'>like tiny (12)</span> <span class='slop-ngram-item'>duct tape (11)</span> <span class='slop-ngram-item'>still warm (10)</span> <span class='slop-ngram-item'>vending machine (10)</span> <span class='slop-ngram-item'>phone buzzes (9)</span> <span class='slop-ngram-item'>empty except (9)</span> <span class='slop-ngram-item'>like dying (9)</span> <span class='slop-ngram-item'>like mouth (8)</span> <span class='slop-ngram-item'>somewhere behind (8)</span> <span class='slop-ngram-item'>left long (8)</span> <span class='slop-ngram-item'>water runs (7)</span> <span class='slop-ngram-item'>something metallic (7)</span> <span class='slop-ngram-item'>inside single (7)</span> <span class='slop-ngram-item'>quiet except (7)</span> <span class='slop-ngram-item'>like heartbeat (7)</span> <span class='slop-ngram-item'>glowing like (7)</span> <span class='slop-ngram-item'>already moving (7)</span> <span class='slop-ngram-item'>like broken (7)</span> <span class='slop-ngram-item'>boots still (6)</span> <span class='slop-ngram-item'>count two (6)</span> <span class='slop-ngram-item'>like burnt (6)</span> <span class='slop-ngram-item'>spreading like (6)</span> <span class='slop-ngram-item'>like inside (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>short one long (7)</span> <span class='slop-ngram-item'>warm almost feverish (4)</span> <span class='slop-ngram-item'>like someone else (4)</span> <span class='slop-ngram-item'>one last time (4)</span> <span class='slop-ngram-item'>says nodding toward (3)</span> <span class='slop-ngram-item'>like second heart (3)</span> <span class='slop-ngram-item'>like spilled ink (3)</span> <span class='slop-ngram-item'>one mississippi two (3)</span> <span class='slop-ngram-item'>mississippi two mississippi (3)</span> <span class='slop-ngram-item'>close enough see (3)</span> <span class='slop-ngram-item'>took one step (3)</span>
</div>

##### deepseek-ai/DeepSeek-V3-0324
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.720)</div>
<div class='slop-similar'>mistral-medium-3.1 (distance=0.720)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.728)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.744)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.781)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>medbay</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>doorframe</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>gaped</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>safehouse</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>skidded</span> <span class='slop-word-item'>windbreaker</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>yanked</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>limped</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>pried</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>door clicked shut (7)</span> <span class='slop-word-item'>door creaked open (6)</span> <span class='slop-word-item'>one last time (6)</span> <span class='slop-word-item'>clicked shut behind (5)</span> <span class='slop-word-item'>finger tightened on the trigger (5)</span> <span class='slop-word-item'>fingers twitched toward (5)</span> <span class='slop-word-item'>door swung open (5)</span> <span class='slop-word-item'>mouth went dry (5)</span> <span class='slop-word-item'>Took you long enough (5)</span> <span class='slop-word-item'>took a step forward (4)</span> <span class='slop-word-item'>mouth tasted like (4)</span> <span class='slop-word-item'>breath smelled like (4)</span> <span class='slop-word-item'>like a wounded animal (3)</span> <span class='slop-word-item'>slamming the door behind (3)</span> <span class='slop-word-item'>casting jagged shadows (3)</span> <span class='slop-word-item'>pulse roared in her ears (3)</span> <span class='slop-word-item'>made a noise like (3)</span> <span class='slop-word-item'>hung in the air like (3)</span> <span class='slop-word-item'>door locked behind (3)</span> <span class='slop-word-item'>made a choked noise (3)</span> <span class='slop-word-item'>kept pace beside (3)</span> <span class='slop-word-item'>fingers tightened around (3)</span> <span class='slop-word-item'>smile didn&#x27;t reach his eyes (2)</span> <span class='slop-word-item'>pupils were blown wide (2)</span> <span class='slop-word-item'>Dawn bled across (2)</span> <span class='slop-word-item'>Blood seeped between his fingers (2)</span> <span class='slop-word-item'>voice was barely audible (2)</span> <span class='slop-word-item'>smile didn’t reach her eyes (2)</span> <span class='slop-word-item'>mouth with the back of their hand (1)</span> <span class='slop-word-item'>Blood seeped between their fingers (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzed (31)</span> <span class='slop-ngram-item'>hands shook (17)</span> <span class='slop-ngram-item'>breath hitched (15)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>voice cracked (14)</span> <span class='slop-ngram-item'>smelled like (14)</span> <span class='slop-ngram-item'>tilted head (14)</span> <span class='slop-ngram-item'>stomach dropped (11)</span> <span class='slop-ngram-item'>fingers trembled (10)</span> <span class='slop-ngram-item'>fingers brushed (10)</span> <span class='slop-ngram-item'>went still (10)</span> <span class='slop-ngram-item'>door creaked (10)</span> <span class='slop-ngram-item'>morning light (10)</span> <span class='slop-ngram-item'>shut behind (10)</span> <span class='slop-ngram-item'>jaw tightened (9)</span> <span class='slop-ngram-item'>radio crackled (9)</span> <span class='slop-ngram-item'>head snapped (9)</span> <span class='slop-ngram-item'>stood doorway (9)</span> <span class='slop-ngram-item'>grabbed arm (9)</span> <span class='slop-ngram-item'>throat tightened (8)</span> <span class='slop-ngram-item'>reach eyes (8)</span> <span class='slop-ngram-item'>exhaled nose (7)</span> <span class='slop-ngram-item'>bullet grazed (7)</span> <span class='slop-ngram-item'>okay new (7)</span> <span class='slop-ngram-item'>smile reach (7)</span> <span class='slop-ngram-item'>sirens wailed (7)</span> <span class='slop-ngram-item'>clicked shut (7)</span> <span class='slop-ngram-item'>fingers twitched (7)</span> <span class='slop-ngram-item'>went dry (7)</span> <span class='slop-ngram-item'>door clicked (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>door clicked shut (7)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>door creaked open (6)</span> <span class='slop-ngram-item'>one last time (6)</span> <span class='slop-ngram-item'>fingers twitched toward (5)</span> <span class='slop-ngram-item'>finger tightened trigger (5)</span> <span class='slop-ngram-item'>clicked shut behind (5)</span> <span class='slop-ngram-item'>mouth went dry (5)</span> <span class='slop-ngram-item'>took long enough (5)</span> <span class='slop-ngram-item'>door swung open (5)</span> <span class='slop-ngram-item'>arm need move (4)</span> <span class='slop-ngram-item'>pupils blown wide (4)</span> <span class='slop-ngram-item'>pulse roared ears (4)</span> <span class='slop-ngram-item'>breath smelled like (4)</span> <span class='slop-ngram-item'>mouth tasted like (4)</span> <span class='slop-ngram-item'>took step forward (4)</span> <span class='slop-ngram-item'>kept pace beside (3)</span> <span class='slop-ngram-item'>dawn bled across (3)</span> <span class='slop-ngram-item'>made choked noise (3)</span> <span class='slop-ngram-item'>casting jagged shadows (3)</span> <span class='slop-ngram-item'>blood seeped fingers (3)</span> <span class='slop-ngram-item'>fingers tightened around (3)</span> <span class='slop-ngram-item'>door locked behind (3)</span> <span class='slop-ngram-item'>made noise like (3)</span> <span class='slop-ngram-item'>mouth back hand (3)</span> <span class='slop-ngram-item'>like wounded animal (3)</span> <span class='slop-ngram-item'>hung air like (3)</span> <span class='slop-ngram-item'>voice barely audible (3)</span> <span class='slop-ngram-item'>slamming door behind (3)</span>
</div>

##### deepseek-ai/DeepSeek-R1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.690)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.728)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.731)</div>
<div class='slop-similar'>mistral-medium-3.1 (distance=0.779)</div>
<div class='slop-similar'>o3 (distance=0.819)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>holoscreen</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>jangled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>selene</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>screeched</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>panted</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>writhed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glitching</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>wailed</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>detonator</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>streaked</span> <span class='slop-word-item'>palmed</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>Word count**: 500  

*[Note (6)</span> <span class='slop-word-item'>Word Count**: 798  

*(Note (6)</span> <span class='slop-word-item'>smile didn’t reach his eyes (4)</span> <span class='slop-word-item'>tasted like ash (3)</span> <span class='slop-word-item'>look like hell (3)</span> <span class='slop-word-item'>laugh was a broken thing (3)</span> <span class='slop-word-item'>smile didn’t reach her eyes (2)</span> <span class='slop-word-item'>Word Count:** 498  

*(Note (2)</span> <span class='slop-word-item'>emergency lights bathed (2)</span> <span class='slop-word-item'>air reeked of burnt (2)</span> <span class='slop-word-item'>Word Count:** 598  

*(Note (2)</span> <span class='slop-word-item'>Word count**: 498  

*[Note (1)</span> <span class='slop-word-item'>count**: 498  

*[Note: The chapter (1)</span> <span class='slop-word-item'>Count:** 498  

*(Note: The chapter (1)</span> <span class='slop-word-item'>Word Count:** 597  

*(Note (1)</span> <span class='slop-word-item'>air that reeked of burnt (1)</span> <span class='slop-word-item'>Word Count:** 798  

*(Note (1)</span> <span class='slop-word-item'>Word Count**: 599  

*(Note (1)</span> <span class='slop-word-item'>Word Count**: 598  

*(Note (1)</span> <span class='slop-word-item'>Word count**: 598  

*(Note (1)</span> <span class='slop-word-item'>Word count**: 847  

*(Note (1)</span> <span class='slop-word-item'>Count:** 598  

*(Note: This chapter (1)</span> <span class='slop-word-item'>Emergency lights bathed (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (38)</span> <span class='slop-ngram-item'>count note (23)</span> <span class='slop-ngram-item'>phone buzzed (16)</span> <span class='slop-ngram-item'>would expand (15)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>throat tightened (10)</span> <span class='slop-ngram-item'>glowed faintly (8)</span> <span class='slop-ngram-item'>breath hitched (8)</span> <span class='slop-ngram-item'>pressed palm (8)</span> <span class='slop-ngram-item'>stood doorway (8)</span> <span class='slop-ngram-item'>voice cracked (8)</span> <span class='slop-ngram-item'>six months (8)</span> <span class='slop-ngram-item'>outside rain (7)</span> <span class='slop-ngram-item'>pressed forehead (7)</span> <span class='slop-ngram-item'>glowing like (7)</span> <span class='slop-ngram-item'>reach eyes (7)</span> <span class='slop-ngram-item'>toward exit (7)</span> <span class='slop-ngram-item'>hands shook (7)</span> <span class='slop-ngram-item'>arms crossed (7)</span> <span class='slop-ngram-item'>said quietly (7)</span> <span class='slop-ngram-item'>stepped forward (7)</span> <span class='slop-ngram-item'>thumb brushed (6)</span> <span class='slop-ngram-item'>hologram flickered (6)</span> <span class='slop-ngram-item'>reeked burnt (6)</span> <span class='slop-ngram-item'>laugh cracked (6)</span> <span class='slop-ngram-item'>smile reach (6)</span> <span class='slop-ngram-item'>stood abruptly (6)</span> <span class='slop-ngram-item'>sleeves rolled (6)</span> <span class='slop-ngram-item'>fingers brushed (6)</span> <span class='slop-ngram-item'>air thick (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count note (23)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>laugh broken thing (3)</span> <span class='slop-ngram-item'>emergency lights bathed (3)</span> <span class='slop-ngram-item'>air reeked burnt (3)</span> <span class='slop-ngram-item'>count note chapter (3)</span> <span class='slop-ngram-item'>tasted like ash (3)</span> <span class='slop-ngram-item'>look like hell (3)</span>
</div>

##### Qwen/Qwen3-235B-A22B-Instruct-2507
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.715)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.788)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.797)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.798)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.803)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>tendril</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>veined</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>streetlight</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>pried</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>thermos</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>teacup</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>chamomile</span> <span class='slop-word-item'>thump</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>raincoat</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>curled</span> <span class='slop-word-item'>grinned</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>first time in years (11)</span> <span class='slop-word-item'>first time since (9)</span> <span class='slop-word-item'>said, voice low (5)</span> <span class='slop-word-item'>took a step forward (5)</span> <span class='slop-word-item'>Outside, the wind moved (4)</span> <span class='slop-word-item'>Outside, the wind howled (3)</span> <span class='slop-word-item'>air was warm, thick (3)</span> <span class='slop-word-item'>peeled back like (3)</span> <span class='slop-word-item'>left without another (3)</span> <span class='slop-word-item'>without another word (3)</span> <span class='slop-word-item'>smelled like wet (3)</span> <span class='slop-word-item'>still smelled like (2)</span> <span class='slop-word-item'>three weeks ago (2)</span> <span class='slop-word-item'>dark hair pulled (2)</span> <span class='slop-word-item'>looked at her, really looked (2)</span> <span class='slop-word-item'>like they’d been holding their breath (1)</span> <span class='slop-word-item'>stood, walked back (1)</span> <span class='slop-word-item'>turned and walked back (1)</span> <span class='slop-word-item'>like someone who had finally (1)</span> <span class='slop-word-item'>Dark hair pulled (1)</span> <span class='slop-word-item'>like he’d been holding his breath (1)</span> <span class='slop-word-item'>stepped inside, closed (1)</span> <span class='slop-word-item'>Three weeks ago (1)</span> <span class='slop-word-item'>Still smelled like (1)</span> <span class='slop-word-item'>turned and walked away (1)</span> <span class='slop-word-item'>Like someone finally (1)</span> <span class='slop-word-item'>Like someone has finally (1)</span> <span class='slop-word-item'>Like she’d been holding her breath (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stood walked (18)</span> <span class='slop-ngram-item'>stepped inside (13)</span> <span class='slop-ngram-item'>pull away (12)</span> <span class='slop-ngram-item'>turned walked (12)</span> <span class='slop-ngram-item'>outside wind (11)</span> <span class='slop-ngram-item'>looked really (11)</span> <span class='slop-ngram-item'>breath caught (11)</span> <span class='slop-ngram-item'>voice low (11)</span> <span class='slop-ngram-item'>looked hands (11)</span> <span class='slop-ngram-item'>like breath (10)</span> <span class='slop-ngram-item'>house quiet (9)</span> <span class='slop-ngram-item'>sipped tea (9)</span> <span class='slop-ngram-item'>hands folded (9)</span> <span class='slop-ngram-item'>closed book (9)</span> <span class='slop-ngram-item'>really looked (9)</span> <span class='slop-ngram-item'>stepped closer (9)</span> <span class='slop-ngram-item'>back straight (8)</span> <span class='slop-ngram-item'>went still (8)</span> <span class='slop-ngram-item'>air thick (8)</span> <span class='slop-ngram-item'>like waiting (7)</span> <span class='slop-ngram-item'>met eyes (7)</span> <span class='slop-ngram-item'>voice cracked (7)</span> <span class='slop-ngram-item'>rain tapped (6)</span> <span class='slop-ngram-item'>steady like (6)</span> <span class='slop-ngram-item'>woke gasp (6)</span> <span class='slop-ngram-item'>sat fire (6)</span> <span class='slop-ngram-item'>night dreamed (6)</span> <span class='slop-ngram-item'>eyes fire (6)</span> <span class='slop-ngram-item'>move speak (6)</span> <span class='slop-ngram-item'>dog barking (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>first time years (11)</span> <span class='slop-ngram-item'>looked really looked (9)</span> <span class='slop-ngram-item'>first time since (9)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>closed eyes opened (6)</span> <span class='slop-ngram-item'>something else something (5)</span> <span class='slop-ngram-item'>took step forward (5)</span> <span class='slop-ngram-item'>air warm thick (4)</span> <span class='slop-ngram-item'>outside wind moved (4)</span> <span class='slop-ngram-item'>stepped inside closed (4)</span> <span class='slop-ngram-item'>peeled back like (3)</span> <span class='slop-ngram-item'>outside wind howled (3)</span> <span class='slop-ngram-item'>dark hair pulled (3)</span> <span class='slop-ngram-item'>closed eyes dreamed (3)</span> <span class='slop-ngram-item'>like someone finally (3)</span> <span class='slop-ngram-item'>like holding breath (3)</span> <span class='slop-ngram-item'>smelled like wet (3)</span> <span class='slop-ngram-item'>still smelled like (3)</span> <span class='slop-ngram-item'>stood walked back (3)</span> <span class='slop-ngram-item'>left without another (3)</span> <span class='slop-ngram-item'>turned walked back (3)</span> <span class='slop-ngram-item'>back closed eyes (3)</span> <span class='slop-ngram-item'>turned walked away (3)</span> <span class='slop-ngram-item'>three weeks ago (3)</span> <span class='slop-ngram-item'>without another word (3)</span>
</div>

##### gpt-5-mini-2025-08-07
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>horizon-alpha (distance=0.831)</div>
<div class='slop-similar'>gpt-5-2025-08-07 (distance=0.846)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.850)</div>
<div class='slop-similar'>gpt-5-nano-2025-08-07 (distance=0.864)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.864)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>maeve</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>ledger</span> <span class='slop-word-item'>steadiness</span> <span class='slop-word-item'>thumbed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>harrow</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>ledgers</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>thermos</span> <span class='slop-word-item'>smelled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>bluntness</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>cataloguing</span> <span class='slop-word-item'>performative</span> <span class='slop-word-item'>accusatory</span> <span class='slop-word-item'>sanitize</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>thinned</span> <span class='slop-word-item'>mended</span> <span class='slop-word-item'>jonah</span> <span class='slop-word-item'>benediction</span> <span class='slop-word-item'>stuttered</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>teacup</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>smoothed</span> <span class='slop-word-item'>folded</span> <span class='slop-word-item'>seam</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>tomas</span> <span class='slop-word-item'>who&#x27;d</span> <span class='slop-word-item'>cupped</span> <span class='slop-word-item'>mercies</span> <span class='slop-word-item'>cadence</span> <span class='slop-word-item'>theatrics</span> <span class='slop-word-item'>bruise</span> <span class='slop-word-item'>scuffed</span> <span class='slop-word-item'>scrawled</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>felt less like (10)</span> <span class='slop-word-item'>said, voice low (7)</span> <span class='slop-word-item'>look like someone (6)</span> <span class='slop-word-item'>said without looking (6)</span> <span class='slop-word-item'>like a man trying (5)</span> <span class='slop-word-item'>felt like a small (4)</span> <span class='slop-word-item'>looked like someone (4)</span> <span class='slop-word-item'>looked like a man (4)</span> <span class='slop-word-item'>moved like a man (4)</span> <span class='slop-word-item'>like a small confession (4)</span> <span class='slop-word-item'>moved like someone (4)</span> <span class='slop-word-item'>felt like a place (4)</span> <span class='slop-word-item'>like a promise and a threat (3)</span> <span class='slop-word-item'>like a small animal (3)</span> <span class='slop-word-item'>make it sound like (3)</span> <span class='slop-word-item'>said, voice flat (3)</span> <span class='slop-word-item'>keep our hands clean (2)</span> <span class='slop-word-item'>felt like a promise (2)</span> <span class='slop-word-item'>words sounded like (2)</span> <span class='slop-word-item'>paper cup of coffee (2)</span> <span class='slop-word-item'>like someone who had been given (2)</span> <span class='slop-word-item'>looked at me like someone (1)</span> <span class='slop-word-item'>words that sounded like (1)</span> <span class='slop-word-item'>like a man who’d learned (1)</span> <span class='slop-word-item'>felt like small (1)</span> <span class='slop-word-item'>like any man who had learned (1)</span> <span class='slop-word-item'>said, without looking (1)</span> <span class='slop-word-item'>looked younger—less like a man (1)</span> <span class='slop-word-item'>like a man who&#x27;d learned (1)</span> <span class='slop-word-item'>like a man who had learned (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>like promise (24)</span> <span class='slop-ngram-item'>mara said (20)</span> <span class='slop-ngram-item'>smelled faintly (18)</span> <span class='slop-ngram-item'>jaw tightened (15)</span> <span class='slop-ngram-item'>voice small (14)</span> <span class='slop-ngram-item'>felt less (12)</span> <span class='slop-ngram-item'>like tide (11)</span> <span class='slop-ngram-item'>pocket like (10)</span> <span class='slop-ngram-item'>hands steady (10)</span> <span class='slop-ngram-item'>felt old (10)</span> <span class='slop-ngram-item'>like map (9)</span> <span class='slop-ngram-item'>made mara (9)</span> <span class='slop-ngram-item'>room smelled (9)</span> <span class='slop-ngram-item'>without ceremony (8)</span> <span class='slop-ngram-item'>mara could (8)</span> <span class='slop-ngram-item'>like patient (8)</span> <span class='slop-ngram-item'>folded like (8)</span> <span class='slop-ngram-item'>rosa said (7)</span> <span class='slop-ngram-item'>scrap cloth (7)</span> <span class='slop-ngram-item'>like talisman (7)</span> <span class='slop-ngram-item'>small mercies (7)</span> <span class='slop-ngram-item'>small dangerous (7)</span> <span class='slop-ngram-item'>like armor (7)</span> <span class='slop-ngram-item'>like prayer (7)</span> <span class='slop-ngram-item'>small stubborn (6)</span> <span class='slop-ngram-item'>small acts (6)</span> <span class='slop-ngram-item'>like bruise (6)</span> <span class='slop-ngram-item'>mara set (6)</span> <span class='slop-ngram-item'>like accusation (6)</span> <span class='slop-ngram-item'>like net (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt less like (10)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>said without looking (7)</span> <span class='slop-ngram-item'>looked like someone (7)</span> <span class='slop-ngram-item'>look like someone (6)</span> <span class='slop-ngram-item'>said voice flat (5)</span> <span class='slop-ngram-item'>like man trying (5)</span> <span class='slop-ngram-item'>felt like small (5)</span> <span class='slop-ngram-item'>looked like man (5)</span> <span class='slop-ngram-item'>like someone given (4)</span> <span class='slop-ngram-item'>moved like someone (4)</span> <span class='slop-ngram-item'>like small confession (4)</span> <span class='slop-ngram-item'>moved like man (4)</span> <span class='slop-ngram-item'>like man learned (4)</span> <span class='slop-ngram-item'>felt like place (4)</span> <span class='slop-ngram-item'>make sound like (4)</span> <span class='slop-ngram-item'>paper cup coffee (3)</span> <span class='slop-ngram-item'>said voice steady (3)</span> <span class='slop-ngram-item'>felt like promise (3)</span> <span class='slop-ngram-item'>like small animal (3)</span> <span class='slop-ngram-item'>like promise threat (3)</span> <span class='slop-ngram-item'>keep hands clean (3)</span> <span class='slop-ngram-item'>words sounded like (3)</span>
</div>

##### grok-4
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.859)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.871)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1-0528 (distance=0.872)</div>
<div class='slop-similar'>o3 (distance=0.873)</div>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.874)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>slouched</span> <span class='slop-word-item'>fidgeted</span> <span class='slop-word-item'>messily</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>singeing</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>tendril</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unhealed</span> <span class='slop-word-item'>itched</span> <span class='slop-word-item'>festered</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>protectiveness</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>whittling</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>innit</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rambled</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>whirled</span> <span class='slop-word-item'>absently</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>absentmindedly</span> <span class='slop-word-item'>squelching</span> <span class='slop-word-item'>unevenly</span> <span class='slop-word-item'>glitched</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>glitchy</span> <span class='slop-word-item'>glitching</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>unbidden</span> <span class='slop-word-item'>subtext</span> <span class='slop-word-item'>fiddled</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>fogged</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>pilfered</span> <span class='slop-word-item'>frayed</span> <span class='slop-word-item'>whimpered</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>simmered</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>one last time (5)</span> <span class='slop-word-item'>casting long shadows (4)</span> <span class='slop-word-item'>twisted her wedding ring (4)</span> <span class='slop-word-item'>hit like a gut (4)</span> <span class='slop-word-item'>like a gut punch (4)</span> <span class='slop-word-item'>like a bad decision (3)</span> <span class='slop-word-item'>casting shadows that danced (3)</span> <span class='slop-word-item'>slipped out the back door (2)</span> <span class='slop-word-item'>slipped in through a back door (1)</span> <span class='slop-word-item'>twisted his wedding ring (1)</span> <span class='slop-word-item'>hit me like a gut (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (89)</span> <span class='slop-ngram-item'>green eyes (34)</span> <span class='slop-ngram-item'>like bad (27)</span> <span class='slop-ngram-item'>heart pounding (23)</span> <span class='slop-ngram-item'>hit like (19)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>voice cracked (16)</span> <span class='slop-ngram-item'>hazel eyes (15)</span> <span class='slop-ngram-item'>big one (12)</span> <span class='slop-ngram-item'>eyes shadowed (11)</span> <span class='slop-ngram-item'>amid chaos (11)</span> <span class='slop-ngram-item'>like forgotten (10)</span> <span class='slop-ngram-item'>biting lip (10)</span> <span class='slop-ngram-item'>chaos erupted (9)</span> <span class='slop-ngram-item'>eyes flashing (9)</span> <span class='slop-ngram-item'>eyes scanning (9)</span> <span class='slop-ngram-item'>like smoke (9)</span> <span class='slop-ngram-item'>eyes darting (9)</span> <span class='slop-ngram-item'>like accusations (8)</span> <span class='slop-ngram-item'>lingered like (8)</span> <span class='slop-ngram-item'>breathing ragged (8)</span> <span class='slop-ngram-item'>gesturing wildly (8)</span> <span class='slop-ngram-item'>like storm (8)</span> <span class='slop-ngram-item'>breaths ragged (7)</span> <span class='slop-ngram-item'>lingering like (7)</span> <span class='slop-ngram-item'>wiry frame (7)</span> <span class='slop-ngram-item'>dark humor (7)</span> <span class='slop-ngram-item'>alex like (7)</span> <span class='slop-ngram-item'>loomed like (7)</span> <span class='slop-ngram-item'>loose ends (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>hit like gut (5)</span> <span class='slop-ngram-item'>twisted wedding ring (5)</span> <span class='slop-ngram-item'>one last time (5)</span> <span class='slop-ngram-item'>like gut punch (4)</span> <span class='slop-ngram-item'>casting long shadows (4)</span> <span class='slop-ngram-item'>casting shadows danced (3)</span> <span class='slop-ngram-item'>like bad decision (3)</span> <span class='slop-ngram-item'>slipped back door (3)</span>
</div>

##### google/gemma-3-27b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.702)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.773)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.803)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.808)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.828)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>lysandra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>veridian</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>scrolled</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>clutching</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely a whisper (41)</span> <span class='slop-word-item'>knew, with a chilling certainty (17)</span> <span class='slop-word-item'>took a deep breath (16)</span> <span class='slop-word-item'>growing sense of dread (12)</span> <span class='slop-word-item'>heart pounding in her chest (12)</span> <span class='slop-word-item'>said, her voice trembling (12)</span> <span class='slop-word-item'>said, her voice barely (11)</span> <span class='slop-word-item'>knew, with a growing sense (11)</span> <span class='slop-word-item'>voice barely audible (10)</span> <span class='slop-word-item'>eyes filled with a mixture (10)</span> <span class='slop-word-item'>said, her voice laced (10)</span> <span class='slop-word-item'>growing sense of unease (9)</span> <span class='slop-word-item'>said, her voice firm (9)</span> <span class='slop-word-item'>first time in a long (8)</span> <span class='slop-word-item'>time in a long time (8)</span> <span class='slop-word-item'>said, his voice trembling (8)</span> <span class='slop-word-item'>said, his voice barely (8)</span> <span class='slop-word-item'>voice trembling slightly (8)</span> <span class='slop-word-item'>said, her voice cold (7)</span> <span class='slop-word-item'>felt less like (7)</span> <span class='slop-word-item'>felt a growing sense (7)</span> <span class='slop-word-item'>brow furrowed in concentration (6)</span> <span class='slop-word-item'>said, his voice raspy (6)</span> <span class='slop-word-item'>turned and walked away (6)</span> <span class='slop-word-item'>stumbled upon something (6)</span> <span class='slop-word-item'>air was thick with the scent (6)</span> <span class='slop-word-item'>said, my voice trembling (6)</span> <span class='slop-word-item'>voice trembling with anger (5)</span> <span class='slop-word-item'>said, her voice filled (5)</span> <span class='slop-word-item'>felt a strange sense (5)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (231)</span> <span class='slop-ngram-item'>voice barely (53)</span> <span class='slop-ngram-item'>asked voice (51)</span> <span class='slop-ngram-item'>voice trembling (44)</span> <span class='slop-ngram-item'>barely whisper (43)</span> <span class='slop-ngram-item'>growing sense (27)</span> <span class='slop-ngram-item'>felt surge (22)</span> <span class='slop-ngram-item'>pounding chest (21)</span> <span class='slop-ngram-item'>voice filled (21)</span> <span class='slop-ngram-item'>voice laced (19)</span> <span class='slop-ngram-item'>expression unreadable (18)</span> <span class='slop-ngram-item'>voice tight (17)</span> <span class='slop-ngram-item'>knew chilling (17)</span> <span class='slop-ngram-item'>chilling certainty (17)</span> <span class='slop-ngram-item'>knew growing (15)</span> <span class='slop-ngram-item'>voice firm (13)</span> <span class='slop-ngram-item'>gaze fixed (13)</span> <span class='slop-ngram-item'>carefully constructed (12)</span> <span class='slop-ngram-item'>sense unease (12)</span> <span class='slop-ngram-item'>almost imperceptible (12)</span> <span class='slop-ngram-item'>voice raspy (12)</span> <span class='slop-ngram-item'>paused added (11)</span> <span class='slop-ngram-item'>filled mixture (11)</span> <span class='slop-ngram-item'>leo said (11)</span> <span class='slop-ngram-item'>trembling slightly (11)</span> <span class='slop-ngram-item'>eyes scanning (11)</span> <span class='slop-ngram-item'>face etched (10)</span> <span class='slop-ngram-item'>desolate landscape (10)</span> <span class='slop-ngram-item'>voice sharp (10)</span> <span class='slop-ngram-item'>wave nausea (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (43)</span> <span class='slop-ngram-item'>said voice trembling (28)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>heart pounding chest (21)</span> <span class='slop-ngram-item'>knew chilling certainty (17)</span> <span class='slop-ngram-item'>took deep breath (16)</span> <span class='slop-ngram-item'>said voice firm (13)</span> <span class='slop-ngram-item'>said voice laced (13)</span> <span class='slop-ngram-item'>growing sense dread (12)</span> <span class='slop-ngram-item'>said voice filled (12)</span> <span class='slop-ngram-item'>asked voice barely (11)</span> <span class='slop-ngram-item'>knew growing sense (11)</span> <span class='slop-ngram-item'>eyes filled mixture (10)</span> <span class='slop-ngram-item'>voice barely audible (10)</span> <span class='slop-ngram-item'>growing sense unease (9)</span> <span class='slop-ngram-item'>something else something (9)</span> <span class='slop-ngram-item'>voice trembling slightly (8)</span> <span class='slop-ngram-item'>said voice tight (8)</span> <span class='slop-ngram-item'>said voice cold (8)</span> <span class='slop-ngram-item'>looked eyes filled (8)</span> <span class='slop-ngram-item'>said voice raspy (8)</span> <span class='slop-ngram-item'>time long time (8)</span> <span class='slop-ngram-item'>first time long (8)</span> <span class='slop-ngram-item'>felt growing sense (7)</span> <span class='slop-ngram-item'>felt less like (7)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>air thick scent (6)</span> <span class='slop-ngram-item'>leo said voice (6)</span> <span class='slop-ngram-item'>brow furrowed concentration (6)</span>
</div>

##### mistralai/Mistral-Small-3.2-24B-Instruct-2506
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.709)</div>
<div class='slop-similar'>mistral-medium-3.1 (distance=0.712)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.720)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.767)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.769)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>datapad</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>rennick</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>scowled</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>paled</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>rourke</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>waver</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>frowned</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>blinked</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>fingers tightened around (16)</span> <span class='slop-word-item'>breath came fast (14)</span> <span class='slop-word-item'>fingers curled into fists (11)</span> <span class='slop-word-item'>door creaked open (11)</span> <span class='slop-word-item'>blood ran cold (9)</span> <span class='slop-word-item'>eyes locked onto (8)</span> <span class='slop-word-item'>first time in a long (8)</span> <span class='slop-word-item'>time in a long time (8)</span> <span class='slop-word-item'>air smelled like (8)</span> <span class='slop-word-item'>air thick with the scent (7)</span> <span class='slop-word-item'>studied him for a long moment (7)</span> <span class='slop-word-item'>took a deep breath (7)</span> <span class='slop-word-item'>fingers twitched toward (7)</span> <span class='slop-word-item'>took a step forward (7)</span> <span class='slop-word-item'>door slammed shut (7)</span> <span class='slop-word-item'>door clicked shut (6)</span> <span class='slop-word-item'>casting jagged shadows (5)</span> <span class='slop-word-item'>blood turned to ice (5)</span> <span class='slop-word-item'>fingers curled around (5)</span> <span class='slop-word-item'>pulse pounded in his ears (5)</span> <span class='slop-word-item'>hands curled into fists (5)</span> <span class='slop-word-item'>door burst open (5)</span> <span class='slop-word-item'>studied me for a long moment (5)</span> <span class='slop-word-item'>reached into his pocket and pulled (5)</span> <span class='slop-word-item'>door swung open (5)</span> <span class='slop-word-item'>Took you long enough (5)</span> <span class='slop-word-item'>shadows across their face (4)</span> <span class='slop-word-item'>like a dying star (4)</span> <span class='slop-word-item'>casting long shadows (4)</span> <span class='slop-word-item'>took another bite (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>exhaled sharply (61)</span> <span class='slop-ngram-item'>phone buzzed (41)</span> <span class='slop-ngram-item'>breath hitched (40)</span> <span class='slop-ngram-item'>voice low (36)</span> <span class='slop-ngram-item'>stomach twisted (31)</span> <span class='slop-ngram-item'>expression unreadable (29)</span> <span class='slop-ngram-item'>met gaze (29)</span> <span class='slop-ngram-item'>jaw tightened (28)</span> <span class='slop-ngram-item'>eyes flicked (26)</span> <span class='slop-ngram-item'>stood doorway (26)</span> <span class='slop-ngram-item'>breath caught (23)</span> <span class='slop-ngram-item'>fingers brushed (22)</span> <span class='slop-ngram-item'>breath came (22)</span> <span class='slop-ngram-item'>stepped closer (22)</span> <span class='slop-ngram-item'>stomach dropped (19)</span> <span class='slop-ngram-item'>fingers curled (18)</span> <span class='slop-ngram-item'>tightened around (18)</span> <span class='slop-ngram-item'>expression darkened (17)</span> <span class='slop-ngram-item'>fingers tightened (17)</span> <span class='slop-ngram-item'>fingers twitched (17)</span> <span class='slop-ngram-item'>voice whisper (17)</span> <span class='slop-ngram-item'>studied long (16)</span> <span class='slop-ngram-item'>curled fists (16)</span> <span class='slop-ngram-item'>air smelled (16)</span> <span class='slop-ngram-item'>air thick (16)</span> <span class='slop-ngram-item'>fingers brushing (15)</span> <span class='slop-ngram-item'>came fast (15)</span> <span class='slop-ngram-item'>alex said (14)</span> <span class='slop-ngram-item'>clenched jaw (13)</span> <span class='slop-ngram-item'>end chapter (12)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>studied long moment (16)</span> <span class='slop-ngram-item'>fingers tightened around (16)</span> <span class='slop-ngram-item'>breath came fast (15)</span> <span class='slop-ngram-item'>fingers curled fists (11)</span> <span class='slop-ngram-item'>door creaked open (11)</span> <span class='slop-ngram-item'>air thick scent (9)</span> <span class='slop-ngram-item'>blood ran cold (9)</span> <span class='slop-ngram-item'>reached pocket pulled (9)</span> <span class='slop-ngram-item'>stepped closer voice (8)</span> <span class='slop-ngram-item'>air smelled like (8)</span> <span class='slop-ngram-item'>eyes locked onto (8)</span> <span class='slop-ngram-item'>time long time (8)</span> <span class='slop-ngram-item'>first time long (8)</span> <span class='slop-ngram-item'>pulse hammered throat (7)</span> <span class='slop-ngram-item'>fingers twitched toward (7)</span> <span class='slop-ngram-item'>shadows across face (7)</span> <span class='slop-ngram-item'>door slammed shut (7)</span> <span class='slop-ngram-item'>took step forward (7)</span> <span class='slop-ngram-item'>took deep breath (7)</span> <span class='slop-ngram-item'>pulse pounded ears (6)</span> <span class='slop-ngram-item'>gaze expression unreadable (6)</span> <span class='slop-ngram-item'>eyes flicked back (6)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>door clicked shut (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>casting jagged shadows (5)</span> <span class='slop-ngram-item'>voice low dangerous (5)</span> <span class='slop-ngram-item'>met gaze expression (5)</span> <span class='slop-ngram-item'>blood turned ice (5)</span> <span class='slop-ngram-item'>hands curled fists (5)</span>
</div>

##### mistral-medium-3.1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.712)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.720)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.775)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.777)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.779)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>prickled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>mierda</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>glitched</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>humorless</span> <span class='slop-word-item'>itched</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>waver</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>yelped</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>airlock</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>lurched</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>fingers tightened around (19)</span> <span class='slop-word-item'>air smelled like (19)</span> <span class='slop-word-item'>face went pale (15)</span> <span class='slop-word-item'>breath came fast (13)</span> <span class='slop-word-item'>casting long shadows (13)</span> <span class='slop-word-item'>something older, something (13)</span> <span class='slop-word-item'>fingers curled into fists (12)</span> <span class='slop-word-item'>fingers twitched toward (11)</span> <span class='slop-word-item'>breath coming in ragged (9)</span> <span class='slop-word-item'>Took you long enough (8)</span> <span class='slop-word-item'>text from an unknown number (7)</span> <span class='slop-word-item'>fingers came away (6)</span> <span class='slop-word-item'>turned and walked away (6)</span> <span class='slop-word-item'>Mira stepped forward (6)</span> <span class='slop-word-item'>coming in ragged gasps (6)</span> <span class='slop-word-item'>long shadows across (6)</span> <span class='slop-word-item'>line went dead (6)</span> <span class='slop-word-item'>smelled like stale (6)</span> <span class='slop-word-item'>breath coming fast (5)</span> <span class='slop-word-item'>fluorescent lights buzzed (5)</span> <span class='slop-word-item'>look like hell (5)</span> <span class='slop-word-item'>hand twitched toward (5)</span> <span class='slop-word-item'>knees pulled to his chest (5)</span> <span class='slop-word-item'>breath came in ragged (5)</span> <span class='slop-word-item'>door swung open (5)</span> <span class='slop-word-item'>air thick with the scent (5)</span> <span class='slop-word-item'>smile didn’t reach her eyes (5)</span> <span class='slop-word-item'>air tasted like (5)</span> <span class='slop-word-item'>skin* peeling back (5)</span> <span class='slop-word-item'>smile didn’t reach their eyes (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzed (79)</span> <span class='slop-ngram-item'>breath hitched (65)</span> <span class='slop-ngram-item'>voice quiet (62)</span> <span class='slop-ngram-item'>unknown number (50)</span> <span class='slop-ngram-item'>fingers twitched (47)</span> <span class='slop-ngram-item'>stomach twisted (42)</span> <span class='slop-ngram-item'>stomach dropped (39)</span> <span class='slop-ngram-item'>mira voice (33)</span> <span class='slop-ngram-item'>voice sharp (33)</span> <span class='slop-ngram-item'>grip tightened (33)</span> <span class='slop-ngram-item'>breath came (29)</span> <span class='slop-ngram-item'>gaze flicked (27)</span> <span class='slop-ngram-item'>breath coming (25)</span> <span class='slop-ngram-item'>buzzed unknown (24)</span> <span class='slop-ngram-item'>fingers tightened (24)</span> <span class='slop-ngram-item'>voice raw (23)</span> <span class='slop-ngram-item'>expression unreadable (22)</span> <span class='slop-ngram-item'>fingers curled (22)</span> <span class='slop-ngram-item'>crouched beside (21)</span> <span class='slop-ngram-item'>voice rough (21)</span> <span class='slop-ngram-item'>laughed low (19)</span> <span class='slop-ngram-item'>something older (19)</span> <span class='slop-ngram-item'>chest ached (19)</span> <span class='slop-ngram-item'>jaw tightened (18)</span> <span class='slop-ngram-item'>smile wide (18)</span> <span class='slop-ngram-item'>wait grabbed (17)</span> <span class='slop-ngram-item'>fingers brushing (17)</span> <span class='slop-ngram-item'>smile waver (17)</span> <span class='slop-ngram-item'>flexed fingers (17)</span> <span class='slop-ngram-item'>older something (16)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>phone buzzed unknown (24)</span> <span class='slop-ngram-item'>buzzed unknown number (24)</span> <span class='slop-ngram-item'>fingers tightened around (19)</span> <span class='slop-ngram-item'>air smelled like (19)</span> <span class='slop-ngram-item'>something older something (16)</span> <span class='slop-ngram-item'>breath came fast (15)</span> <span class='slop-ngram-item'>breath hitched know (15)</span> <span class='slop-ngram-item'>face went pale (15)</span> <span class='slop-ngram-item'>casting long shadows (13)</span> <span class='slop-ngram-item'>reached pocket pulled (13)</span> <span class='slop-ngram-item'>fingers curled fists (12)</span> <span class='slop-ngram-item'>phone buzzed text (12)</span> <span class='slop-ngram-item'>smile reach eyes (12)</span> <span class='slop-ngram-item'>answer already knew (11)</span> <span class='slop-ngram-item'>fingers twitched toward (11)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>breath coming ragged (9)</span> <span class='slop-ngram-item'>took long enough (9)</span> <span class='slop-ngram-item'>breath coming fast (8)</span> <span class='slop-ngram-item'>air tasted like (8)</span> <span class='slop-ngram-item'>watched long moment (8)</span> <span class='slop-ngram-item'>knees pulled chest (8)</span> <span class='slop-ngram-item'>skin peeling back (7)</span> <span class='slop-ngram-item'>way fingers twitched (7)</span> <span class='slop-ngram-item'>twitched toward knife (7)</span> <span class='slop-ngram-item'>watched expression unreadable (7)</span> <span class='slop-ngram-item'>text unknown number (7)</span> <span class='slop-ngram-item'>phone buzzed pocket (7)</span> <span class='slop-ngram-item'>turned walked away (7)</span> <span class='slop-ngram-item'>pulse hammered throat (6)</span>
</div>

##### google/gemma-3-12b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.702)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.765)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.827)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.829)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.838)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>vance</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>retorted</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>eleanor</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>spore</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>spores</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rhiannon</span> <span class='slop-word-item'>melancholic</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>resonated</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely a whisper (23)</span> <span class='slop-word-item'>said, his voice low (13)</span> <span class='slop-word-item'>voice trembling slightly (13)</span> <span class='slop-word-item'>hung in the air, heavy (8)</span> <span class='slop-word-item'>smile playing on her lips (8)</span> <span class='slop-word-item'>felt a surge of anger (8)</span> <span class='slop-word-item'>air was thick with the scent (7)</span> <span class='slop-word-item'>felt a chill run (7)</span> <span class='slop-word-item'>said, his voice barely (6)</span> <span class='slop-word-item'>said, his voice laced (6)</span> <span class='slop-word-item'>said, his voice a low (6)</span> <span class='slop-word-item'>voice barely audible (6)</span> <span class='slop-word-item'>eyes filled with a mixture (6)</span> <span class='slop-word-item'>rain continued to fall (5)</span> <span class='slop-word-item'>could have ever imagined (5)</span> <span class='slop-word-item'>carefully constructed facade (5)</span> <span class='slop-word-item'>small, intricately carved (5)</span> <span class='slop-word-item'>smile playing on his lips (5)</span> <span class='slop-word-item'>Elara said, her voice (5)</span> <span class='slop-word-item'>said, her voice barely (5)</span> <span class='slop-word-item'>long, distorted shadows (5)</span> <span class='slop-word-item'>said, her voice low (4)</span> <span class='slop-word-item'>hung heavy in the air (4)</span> <span class='slop-word-item'>testament to the enduring power (4)</span> <span class='slop-word-item'>words hung in the air (4)</span> <span class='slop-word-item'>air, heavy with unspoken (4)</span> <span class='slop-word-item'>took a deep breath (4)</span> <span class='slop-word-item'>movements slow and deliberate (4)</span> <span class='slop-word-item'>growing sense of unease (4)</span> <span class='slop-word-item'>chill run down her spine (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (44)</span> <span class='slop-ngram-item'>asked voice (44)</span> <span class='slop-ngram-item'>voice trembling (31)</span> <span class='slop-ngram-item'>voice barely (30)</span> <span class='slop-ngram-item'>felt surge (28)</span> <span class='slop-ngram-item'>barely whisper (24)</span> <span class='slop-ngram-item'>expression unreadable (23)</span> <span class='slop-ngram-item'>elara said (23)</span> <span class='slop-ngram-item'>paused added (17)</span> <span class='slop-ngram-item'>carefully constructed (17)</span> <span class='slop-ngram-item'>replied voice (17)</span> <span class='slop-ngram-item'>air thick (17)</span> <span class='slop-ngram-item'>rhys said (16)</span> <span class='slop-ngram-item'>voice laced (15)</span> <span class='slop-ngram-item'>trembling slightly (15)</span> <span class='slop-ngram-item'>gaze fixed (15)</span> <span class='slop-ngram-item'>flicker something (14)</span> <span class='slop-ngram-item'>face etched (14)</span> <span class='slop-ngram-item'>playing lips (14)</span> <span class='slop-ngram-item'>smile playing (14)</span> <span class='slop-ngram-item'>growing sense (13)</span> <span class='slop-ngram-item'>beneath surface (13)</span> <span class='slop-ngram-item'>voice tight (12)</span> <span class='slop-ngram-item'>slow deliberate (12)</span> <span class='slop-ngram-item'>sense unease (12)</span> <span class='slop-ngram-item'>thick scent (11)</span> <span class='slop-ngram-item'>voice strained (11)</span> <span class='slop-ngram-item'>strange sense (11)</span> <span class='slop-ngram-item'>profound sense (10)</span> <span class='slop-ngram-item'>eyes gleaming (10)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (25)</span> <span class='slop-ngram-item'>voice barely whisper (24)</span> <span class='slop-ngram-item'>smile playing lips (14)</span> <span class='slop-ngram-item'>voice trembling slightly (13)</span> <span class='slop-ngram-item'>elara said voice (12)</span> <span class='slop-ngram-item'>said voice barely (11)</span> <span class='slop-ngram-item'>air thick scent (10)</span> <span class='slop-ngram-item'>asked voice barely (9)</span> <span class='slop-ngram-item'>hung air heavy (8)</span> <span class='slop-ngram-item'>felt surge anger (8)</span> <span class='slop-ngram-item'>heart pounding chest (8)</span> <span class='slop-ngram-item'>sent shiver spine (7)</span> <span class='slop-ngram-item'>said voice laced (7)</span> <span class='slop-ngram-item'>asked voice filled (7)</span> <span class='slop-ngram-item'>felt chill run (7)</span> <span class='slop-ngram-item'>chill run spine (7)</span> <span class='slop-ngram-item'>eyes filled mixture (6)</span> <span class='slop-ngram-item'>said voice trembling (6)</span> <span class='slop-ngram-item'>voice barely audible (6)</span> <span class='slop-ngram-item'>small intricately carved (5)</span> <span class='slop-ngram-item'>said voice surprisingly (5)</span> <span class='slop-ngram-item'>long distorted shadows (5)</span> <span class='slop-ngram-item'>carefully constructed facade (5)</span> <span class='slop-ngram-item'>said voice strained (5)</span> <span class='slop-ngram-item'>asked voice low (5)</span> <span class='slop-ngram-item'>turned leave paused (5)</span> <span class='slop-ngram-item'>rain continued fall (5)</span> <span class='slop-ngram-item'>asked voice trembling (5)</span> <span class='slop-ngram-item'>could ever imagined (5)</span> <span class='slop-ngram-item'>unlike anything ever (5)</span>
</div>

##### qwen/qwen3-32b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.705)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.709)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.710)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.760)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.765)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>sizzled</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>enforcers</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>unbidden</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>underbrush</span> <span class='slop-word-item'>shrieked</span> <span class='slop-word-item'>spores</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>thundered</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>flared</span> <span class='slop-word-item'>jawline</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>syndicate</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>hunched</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>hands clenched into fists (15)</span> <span class='slop-word-item'>said, his voice low (15)</span> <span class='slop-word-item'>air thick with the scent (11)</span> <span class='slop-word-item'>said, her voice low (9)</span> <span class='slop-word-item'>hand closed around (9)</span> <span class='slop-word-item'>Kael stepped forward (8)</span> <span class='slop-word-item'>door burst open (7)</span> <span class='slop-word-item'>like a dying star (7)</span> <span class='slop-word-item'>flickering like a dying (7)</span> <span class='slop-word-item'>look like you’ve seen (7)</span> <span class='slop-word-item'>breath came in ragged (7)</span> <span class='slop-word-item'>came in ragged gasps (7)</span> <span class='slop-word-item'>words felt hollow (7)</span> <span class='slop-word-item'>door slammed shut (6)</span> <span class='slop-word-item'>Mara stepped closer (6)</span> <span class='slop-word-item'>stepped closer, his voice (6)</span> <span class='slop-word-item'>hum grew louder (6)</span> <span class='slop-word-item'>room fell silent (5)</span> <span class='slop-word-item'>said, his voice steady (5)</span> <span class='slop-word-item'>casting jagged shadows (5)</span> <span class='slop-word-item'>said, his voice smooth (5)</span> <span class='slop-word-item'>face a mask of fury (5)</span> <span class='slop-word-item'>metallic, like blood (5)</span> <span class='slop-word-item'>hand went to the knife (5)</span> <span class='slop-word-item'>said, her voice tight (5)</span> <span class='slop-word-item'>voice was barely a whisper (5)</span> <span class='slop-word-item'>stepped closer, her voice (5)</span> <span class='slop-word-item'>door slammed open (4)</span> <span class='slop-word-item'>air was thick with the scent (4)</span> <span class='slop-word-item'>said, her voice smooth (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (116)</span> <span class='slop-ngram-item'>stepped closer (62)</span> <span class='slop-ngram-item'>breath caught (51)</span> <span class='slop-ngram-item'>voice low (46)</span> <span class='slop-ngram-item'>voice whisper (44)</span> <span class='slop-ngram-item'>hands trembled (38)</span> <span class='slop-ngram-item'>voice quiet (36)</span> <span class='slop-ngram-item'>jaw tightened (34)</span> <span class='slop-ngram-item'>voice sharp (34)</span> <span class='slop-ngram-item'>voice steady (30)</span> <span class='slop-ngram-item'>hand went (30)</span> <span class='slop-ngram-item'>air thick (27)</span> <span class='slop-ngram-item'>like heartbeat (23)</span> <span class='slop-ngram-item'>lights flickered (21)</span> <span class='slop-ngram-item'>fingers brushing (20)</span> <span class='slop-ngram-item'>hand tightened (20)</span> <span class='slop-ngram-item'>hands clenched (20)</span> <span class='slop-ngram-item'>met gaze (20)</span> <span class='slop-ngram-item'>hands trembling (19)</span> <span class='slop-ngram-item'>boots crunching (18)</span> <span class='slop-ngram-item'>mara stepped (18)</span> <span class='slop-ngram-item'>flickering like (17)</span> <span class='slop-ngram-item'>voice smooth (17)</span> <span class='slop-ngram-item'>pulsed faintly (16)</span> <span class='slop-ngram-item'>voice cold (16)</span> <span class='slop-ngram-item'>like dying (16)</span> <span class='slop-ngram-item'>stood doorway (16)</span> <span class='slop-ngram-item'>clenched fists (16)</span> <span class='slop-ngram-item'>thick scent (15)</span> <span class='slop-ngram-item'>fingers brushed (15)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (28)</span> <span class='slop-ngram-item'>hands clenched fists (16)</span> <span class='slop-ngram-item'>air thick scent (15)</span> <span class='slop-ngram-item'>said voice smooth (13)</span> <span class='slop-ngram-item'>stepped closer voice (12)</span> <span class='slop-ngram-item'>hand went knife (9)</span> <span class='slop-ngram-item'>hand closed around (9)</span> <span class='slop-ngram-item'>kael stepped forward (8)</span> <span class='slop-ngram-item'>flickering like dying (7)</span> <span class='slop-ngram-item'>words felt hollow (7)</span> <span class='slop-ngram-item'>came ragged gasps (7)</span> <span class='slop-ngram-item'>said voice tight (7)</span> <span class='slop-ngram-item'>like dying star (7)</span> <span class='slop-ngram-item'>breath came ragged (7)</span> <span class='slop-ngram-item'>said voice soft (7)</span> <span class='slop-ngram-item'>look like seen (7)</span> <span class='slop-ngram-item'>door burst open (7)</span> <span class='slop-ngram-item'>something else something (7)</span> <span class='slop-ngram-item'>said voice steady (6)</span> <span class='slop-ngram-item'>mara stepped closer (6)</span> <span class='slop-ngram-item'>hum grew louder (6)</span> <span class='slop-ngram-item'>said voice quiet (6)</span> <span class='slop-ngram-item'>voice barely whisper (6)</span> <span class='slop-ngram-item'>door slammed shut (6)</span> <span class='slop-ngram-item'>metallic like blood (5)</span> <span class='slop-ngram-item'>face mask fury (5)</span> <span class='slop-ngram-item'>casting jagged shadows (5)</span> <span class='slop-ngram-item'>stepped forward voice (5)</span> <span class='slop-ngram-item'>words hit like (5)</span> <span class='slop-ngram-item'>room fell silent (5)</span>
</div>

##### openai/gpt-oss-120b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>openai/gpt-oss-20b (distance=0.840)</div>
<div class='slop-similar'>o3 (distance=0.860)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.878)</div>
<div class='slop-similar'>gpt-4.1-nano (distance=0.879)</div>
<div class='slop-similar'>zai-org/GLM-4.5 (distance=0.880)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>clinked</span> <span class='slop-word-item'>glimmered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>clanged</span> <span class='slop-word-item'>glistened</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>satchel</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>holo</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>whitby</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>quivered</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>drumbeat</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>clanking</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>reverberated</span> <span class='slop-word-item'>clink</span> <span class='slop-word-item'>rune</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glittered</span> <span class='slop-word-item'>reverberating</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>ink still wet (12)</span> <span class='slop-word-item'>said, his voice steady (11)</span> <span class='slop-word-item'>seemed to pulse in time (11)</span> <span class='slop-word-item'>voice steady despite (11)</span> <span class='slop-word-item'>sound that seemed to echo (10)</span> <span class='slop-word-item'>felt like a promise (10)</span> <span class='slop-word-item'>faint metallic tang (10)</span> <span class='slop-word-item'>soft amber glow (9)</span> <span class='slop-word-item'>chuckled, the sound low (9)</span> <span class='slop-word-item'>faint smile playing (8)</span> <span class='slop-word-item'>feeling the faint vibration (8)</span> <span class='slop-word-item'>said, voice steady (8)</span> <span class='slop-word-item'>voice low, the words (7)</span> <span class='slop-word-item'>nodded, feeling the weight (7)</span> <span class='slop-word-item'>asked, voice barely (7)</span> <span class='slop-word-item'>voice low but firm (7)</span> <span class='slop-word-item'>hanging in the air like (7)</span> <span class='slop-word-item'>said, voice steadier (7)</span> <span class='slop-word-item'>mingling with the faint perfume (7)</span> <span class='slop-word-item'>soft chime sounded (7)</span> <span class='slop-word-item'>hallway lights flickered (7)</span> <span class='slop-word-item'>night stretched ahead (6)</span> <span class='slop-word-item'>felt a cold knot (6)</span> <span class='slop-word-item'>said, my voice steadier (6)</span> <span class='slop-word-item'>voice steadier than I felt (6)</span> <span class='slop-word-item'>air thick with the scent (6)</span> <span class='slop-word-item'>hand resting lightly (6)</span> <span class='slop-word-item'>voice low and steady (6)</span> <span class='slop-word-item'>felt a shiver run (6)</span> <span class='slop-word-item'>faint, sweet perfume (6)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>metallic scent (37)</span> <span class='slop-ngram-item'>low steady (35)</span> <span class='slop-ngram-item'>low resonant (31)</span> <span class='slop-ngram-item'>metallic tang (30)</span> <span class='slop-ngram-item'>reminder even (29)</span> <span class='slop-ngram-item'>fingers brushing (28)</span> <span class='slop-ngram-item'>feeling faint (27)</span> <span class='slop-ngram-item'>chuckled sound (25)</span> <span class='slop-ngram-item'>seemed vibrate (24)</span> <span class='slop-ngram-item'>marginal note (24)</span> <span class='slop-ngram-item'>voice steadier (23)</span> <span class='slop-ngram-item'>fresh page (23)</span> <span class='slop-ngram-item'>leaving faint (21)</span> <span class='slop-ngram-item'>still humming (20)</span> <span class='slop-ngram-item'>soft amber (20)</span> <span class='slop-ngram-item'>faint metallic (19)</span> <span class='slop-ngram-item'>soft chime (19)</span> <span class='slop-ngram-item'>rain finally (19)</span> <span class='slop-ngram-item'>ink still (19)</span> <span class='slop-ngram-item'>faint sweet (18)</span> <span class='slop-ngram-item'>night stretched (18)</span> <span class='slop-ngram-item'>hum seemed (17)</span> <span class='slop-ngram-item'>reminder night (17)</span> <span class='slop-ngram-item'>mixture curiosity (16)</span> <span class='slop-ngram-item'>weight brass (15)</span> <span class='slop-ngram-item'>echoing like (14)</span> <span class='slop-ngram-item'>smile breaking (14)</span> <span class='slop-ngram-item'>lifted mug (14)</span> <span class='slop-ngram-item'>stretched ahead (14)</span> <span class='slop-ngram-item'>jax eyes (14)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice steady (23)</span> <span class='slop-ngram-item'>said voice steadier (18)</span> <span class='slop-ngram-item'>faint metallic tang (15)</span> <span class='slop-ngram-item'>asked voice barely (14)</span> <span class='slop-ngram-item'>said voice firm (14)</span> <span class='slop-ngram-item'>felt like promise (12)</span> <span class='slop-ngram-item'>ink still wet (12)</span> <span class='slop-ngram-item'>voice steadier felt (11)</span> <span class='slop-ngram-item'>voice steady despite (11)</span> <span class='slop-ngram-item'>seemed pulse time (11)</span> <span class='slop-ngram-item'>voice low steady (11)</span> <span class='slop-ngram-item'>whispered anyone else (10)</span> <span class='slop-ngram-item'>soft amber glow (10)</span> <span class='slop-ngram-item'>sound seemed echo (10)</span> <span class='slop-ngram-item'>feeling faint vibration (9)</span> <span class='slop-ngram-item'>chuckled sound low (9)</span> <span class='slop-ngram-item'>scar cheek catching (9)</span> <span class='slop-ngram-item'>feeling familiar weight (8)</span> <span class='slop-ngram-item'>seemed come walls (8)</span> <span class='slop-ngram-item'>faint smile playing (8)</span> <span class='slop-ngram-item'>air thick scent (7)</span> <span class='slop-ngram-item'>voice low edged (7)</span> <span class='slop-ngram-item'>mingling faint perfume (7)</span> <span class='slop-ngram-item'>voice low firm (7)</span> <span class='slop-ngram-item'>nodded feeling weight (7)</span> <span class='slop-ngram-item'>soft chime sounded (7)</span> <span class='slop-ngram-item'>tugging corner mouth (7)</span> <span class='slop-ngram-item'>hanging air like (7)</span> <span class='slop-ngram-item'>forward eyes bright (7)</span> <span class='slop-ngram-item'>voice low words (7)</span>
</div>

##### qwen/qwq-32b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.686)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.731)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.760)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.779)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.781)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>blackthorn</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>nessa</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>paled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hazel</span> <span class='slop-word-item'>pocketed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>whitened</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>dirge</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>lingered</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>pocket watch ticked (12)</span> <span class='slop-word-item'>laughed, sharp and brittle (7)</span> <span class='slop-word-item'>said, her voice steady (7)</span> <span class='slop-word-item'>Word count:** ~1000  

---  
**Key (6)</span> <span class='slop-word-item'>words hung in the air (6)</span> <span class='slop-word-item'>blood ran cold (5)</span> <span class='slop-word-item'>breath came in ragged (4)</span> <span class='slop-word-item'>Word count: 998)  

---  

**Key (4)</span> <span class='slop-word-item'>door slammed shut (4)</span> <span class='slop-word-item'>door creaked open (4)</span> <span class='slop-word-item'>said, voice tight (4)</span> <span class='slop-word-item'>door burst open (4)</span> <span class='slop-word-item'>smile didn’t reach her eyes (4)</span> <span class='slop-word-item'>blood turned to ice (4)</span> <span class='slop-word-item'>said, voice raw (4)</span> <span class='slop-word-item'>said, her voice hollow (4)</span> <span class='slop-word-item'>words hung like (3)</span> <span class='slop-word-item'>breath came in shallow (3)</span> <span class='slop-word-item'>came in shallow gasps (3)</span> <span class='slop-word-item'>door swung open (3)</span> <span class='slop-word-item'>flicker of something like (3)</span> <span class='slop-word-item'>head snapped toward (3)</span> <span class='slop-word-item'>body lay still (3)</span> <span class='slop-word-item'>stumbled back, clutching (3)</span> <span class='slop-word-item'>said, her voice a blade (3)</span> <span class='slop-word-item'>stepped forward, her voice (3)</span> <span class='slop-word-item'>breath came shallow (2)</span> <span class='slop-word-item'>said, her voice raw (2)</span> <span class='slop-word-item'>breath warm against her ear (2)</span> <span class='slop-word-item'>stepped forward, his voice (2)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (41)</span> <span class='slop-ngram-item'>pocket watch (29)</span> <span class='slop-ngram-item'>phone buzzed (26)</span> <span class='slop-ngram-item'>knelt beside (21)</span> <span class='slop-ngram-item'>jaw tightened (19)</span> <span class='slop-ngram-item'>breath hitched (19)</span> <span class='slop-ngram-item'>hands shook (18)</span> <span class='slop-ngram-item'>voice raw (17)</span> <span class='slop-ngram-item'>throat tightened (17)</span> <span class='slop-ngram-item'>words hung (17)</span> <span class='slop-ngram-item'>count key (16)</span> <span class='slop-ngram-item'>stepped closer (16)</span> <span class='slop-ngram-item'>data chip (15)</span> <span class='slop-ngram-item'>voice steady (14)</span> <span class='slop-ngram-item'>key elements (13)</span> <span class='slop-ngram-item'>human touches (13)</span> <span class='slop-ngram-item'>voice broke (13)</span> <span class='slop-ngram-item'>watch ticked (12)</span> <span class='slop-ngram-item'>fingers brushed (12)</span> <span class='slop-ngram-item'>elara said (11)</span> <span class='slop-ngram-item'>hands steady (11)</span> <span class='slop-ngram-item'>voice crackled (11)</span> <span class='slop-ngram-item'>air tasted (10)</span> <span class='slop-ngram-item'>like heartbeat (10)</span> <span class='slop-ngram-item'>breath came (10)</span> <span class='slop-ngram-item'>breath ragged (9)</span> <span class='slop-ngram-item'>beneath skin (9)</span> <span class='slop-ngram-item'>hands trembled (9)</span> <span class='slop-ngram-item'>open inside (9)</span> <span class='slop-ngram-item'>like dying (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count key (16)</span> <span class='slop-ngram-item'>pocket watch ticked (12)</span> <span class='slop-ngram-item'>said voice steady (8)</span> <span class='slop-ngram-item'>laughed sharp brittle (7)</span> <span class='slop-ngram-item'>said voice raw (6)</span> <span class='slop-ngram-item'>words hung air (6)</span> <span class='slop-ngram-item'>breath came shallow (5)</span> <span class='slop-ngram-item'>stepped forward voice (5)</span> <span class='slop-ngram-item'>blood ran cold (5)</span> <span class='slop-ngram-item'>said voice tight (4)</span> <span class='slop-ngram-item'>said voice hollow (4)</span> <span class='slop-ngram-item'>breath came ragged (4)</span> <span class='slop-ngram-item'>blood turned ice (4)</span> <span class='slop-ngram-item'>smile reach eyes (4)</span> <span class='slop-ngram-item'>door burst open (4)</span> <span class='slop-ngram-item'>door creaked open (4)</span> <span class='slop-ngram-item'>door slammed shut (4)</span> <span class='slop-ngram-item'>head snapped toward (3)</span> <span class='slop-ngram-item'>words hung like (3)</span> <span class='slop-ngram-item'>said voice blade (3)</span> <span class='slop-ngram-item'>clicked open inside (3)</span> <span class='slop-ngram-item'>stumbled back clutching (3)</span> <span class='slop-ngram-item'>came shallow gasps (3)</span> <span class='slop-ngram-item'>flicker something like (3)</span> <span class='slop-ngram-item'>breath warm ear (3)</span> <span class='slop-ngram-item'>go said voice (3)</span> <span class='slop-ngram-item'>body lay still (3)</span> <span class='slop-ngram-item'>door swung open (3)</span>
</div>

##### qwen/qwen3-30b-a3b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.689)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.710)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.754)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.769)</div>
<div class='slop-similar'>mistral-medium-3.1 (distance=0.810)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>scuffing</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>blackthorn</span> <span class='slop-word-item'>dimming</span> <span class='slop-word-item'>intensifying</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>scrawled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>jingling</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>streetlights</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>jules</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>locket</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely above a whisper (39)</span> <span class='slop-word-item'>said, his voice low (30)</span> <span class='slop-word-item'>said, her voice barely (30)</span> <span class='slop-word-item'>knew one thing (22)</span> <span class='slop-word-item'>said, her voice steady (22)</span> <span class='slop-word-item'>said, his voice tight (21)</span> <span class='slop-word-item'>stepped closer, her voice (17)</span> <span class='slop-word-item'>said, her voice low (17)</span> <span class='slop-word-item'>voice was barely a whisper (17)</span> <span class='slop-word-item'>stepped closer, his voice (17)</span> <span class='slop-word-item'>like a living thing (17)</span> <span class='slop-word-item'>air was thick with the scent (16)</span> <span class='slop-word-item'>casting long shadows (16)</span> <span class='slop-word-item'>said, his voice steady (16)</span> <span class='slop-word-item'>breath coming in short (16)</span> <span class='slop-word-item'>said, his voice quiet (15)</span> <span class='slop-word-item'>reached out, her fingers brushing (15)</span> <span class='slop-word-item'>hands curled into fists (14)</span> <span class='slop-word-item'>fingers tightening around (14)</span> <span class='slop-word-item'>said, her voice quiet (14)</span> <span class='slop-word-item'>voice cut through the silence (13)</span> <span class='slop-word-item'>long shadows across (13)</span> <span class='slop-word-item'>fingers tightened around (12)</span> <span class='slop-word-item'>eyes filled with tears (12)</span> <span class='slop-word-item'>said, her voice trembling (12)</span> <span class='slop-word-item'>fingers brushing the edge (11)</span> <span class='slop-word-item'>voice steady despite (11)</span> <span class='slop-word-item'>breath came in shallow (10)</span> <span class='slop-word-item'>shadows across the floor (10)</span> <span class='slop-word-item'>voice low, almost (9)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice steady (70)</span> <span class='slop-ngram-item'>fingers brushing (49)</span> <span class='slop-ngram-item'>jaw tightened (44)</span> <span class='slop-ngram-item'>closer voice (40)</span> <span class='slop-ngram-item'>expression unreadable (36)</span> <span class='slop-ngram-item'>voice tight (32)</span> <span class='slop-ngram-item'>breath shallow (28)</span> <span class='slop-ngram-item'>glow intensifying (28)</span> <span class='slop-ngram-item'>something name (27)</span> <span class='slop-ngram-item'>boots crunching (25)</span> <span class='slop-ngram-item'>thick scent (24)</span> <span class='slop-ngram-item'>reached fingers (21)</span> <span class='slop-ngram-item'>pulsing time (20)</span> <span class='slop-ngram-item'>breath catching (19)</span> <span class='slop-ngram-item'>glowing faintly (19)</span> <span class='slop-ngram-item'>weight words (18)</span> <span class='slop-ngram-item'>silence thick (17)</span> <span class='slop-ngram-item'>fingers tracing (17)</span> <span class='slop-ngram-item'>low almost (17)</span> <span class='slop-ngram-item'>curled fists (17)</span> <span class='slop-ngram-item'>forward voice (15)</span> <span class='slop-ngram-item'>fingers tightening (15)</span> <span class='slop-ngram-item'>thick unspoken (14)</span> <span class='slop-ngram-item'>inside air (13)</span> <span class='slop-ngram-item'>expression darkened (13)</span> <span class='slop-ngram-item'>shallow gasps (12)</span> <span class='slop-ngram-item'>steady despite (12)</span> <span class='slop-ngram-item'>brushing edge (12)</span> <span class='slop-ngram-item'>life chasing (11)</span> <span class='slop-ngram-item'>trembled reached (11)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (65)</span> <span class='slop-ngram-item'>said voice low (49)</span> <span class='slop-ngram-item'>said voice steady (41)</span> <span class='slop-ngram-item'>said voice barely (40)</span> <span class='slop-ngram-item'>stepped closer voice (34)</span> <span class='slop-ngram-item'>said voice quiet (31)</span> <span class='slop-ngram-item'>said voice tight (26)</span> <span class='slop-ngram-item'>air thick scent (24)</span> <span class='slop-ngram-item'>knew one thing (22)</span> <span class='slop-ngram-item'>reached fingers brushing (20)</span> <span class='slop-ngram-item'>voice low almost (17)</span> <span class='slop-ngram-item'>like living thing (17)</span> <span class='slop-ngram-item'>breath coming short (16)</span> <span class='slop-ngram-item'>casting long shadows (16)</span> <span class='slop-ngram-item'>fingers tightening around (14)</span> <span class='slop-ngram-item'>voice quiet almost (14)</span> <span class='slop-ngram-item'>stepped forward voice (14)</span> <span class='slop-ngram-item'>said voice trembling (14)</span> <span class='slop-ngram-item'>hands curled fists (14)</span> <span class='slop-ngram-item'>long shadows across (13)</span> <span class='slop-ngram-item'>voice cut silence (13)</span> <span class='slop-ngram-item'>fingers brushing edge (12)</span> <span class='slop-ngram-item'>fingers tightened around (12)</span> <span class='slop-ngram-item'>eyes filled tears (12)</span> <span class='slop-ngram-item'>spent life chasing (11)</span> <span class='slop-ngram-item'>closer voice low (11)</span> <span class='slop-ngram-item'>quiet almost whisper (11)</span> <span class='slop-ngram-item'>voice steady despite (11)</span> <span class='slop-ngram-item'>know said voice (11)</span> <span class='slop-ngram-item'>shadows across floor (10)</span>
</div>

##### gpt-4.1-nano
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.816)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.840)</div>
<div class='slop-similar'>openai/gpt-oss-20b (distance=0.845)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.846)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.849)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>pocketknife</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>ajar</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>shadowed</span> <span class='slop-word-item'>softly</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>relic</span> <span class='slop-word-item'>tensed</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>streetlights</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>took a deep breath (34)</span> <span class='slop-word-item'>said softly, voice (10)</span> <span class='slop-word-item'>deep breath, feeling (9)</span> <span class='slop-word-item'>mind kept circling (8)</span> <span class='slop-word-item'>voice barely above a whisper (7)</span> <span class='slop-word-item'>kept circling back (7)</span> <span class='slop-word-item'>said, voice low (7)</span> <span class='slop-word-item'>shadows stretched long (7)</span> <span class='slop-word-item'>asked, voice trembling (7)</span> <span class='slop-word-item'>casting long shadows (6)</span> <span class='slop-word-item'>door swung open (6)</span> <span class='slop-word-item'>said, voice steady (6)</span> <span class='slop-word-item'>pocket and pulled out a small (6)</span> <span class='slop-word-item'>pushed the door open (6)</span> <span class='slop-word-item'>breath, trying to steady (6)</span> <span class='slop-word-item'>looked around the room (6)</span> <span class='slop-word-item'>kept drifting back (5)</span> <span class='slop-word-item'>fingers trembled slightly (5)</span> <span class='slop-word-item'>took a slow step (5)</span> <span class='slop-word-item'>finally broke the silence (5)</span> <span class='slop-word-item'>could see the faint (5)</span> <span class='slop-word-item'>eyes darted around (5)</span> <span class='slop-word-item'>first light of dawn (5)</span> <span class='slop-word-item'>feeling a strange mixture (5)</span> <span class='slop-word-item'>looked away, eyes (5)</span> <span class='slop-word-item'>buried beneath layers (5)</span> <span class='slop-word-item'>heart hammered in her chest (5)</span> <span class='slop-word-item'>one last time (5)</span> <span class='slop-word-item'>waiting for the right moment (5)</span> <span class='slop-word-item'>trying to piece together (4)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>stomach clenched (22)</span> <span class='slop-ngram-item'>jamie nodded (18)</span> <span class='slop-ngram-item'>distant hum (13)</span> <span class='slop-ngram-item'>small battered (13)</span> <span class='slop-ngram-item'>felt flicker (12)</span> <span class='slop-ngram-item'>hesitated nodded (11)</span> <span class='slop-ngram-item'>shadows stretched (11)</span> <span class='slop-ngram-item'>flicker something (11)</span> <span class='slop-ngram-item'>beneath layers (10)</span> <span class='slop-ngram-item'>faint almost (9)</span> <span class='slop-ngram-item'>muttered voice (9)</span> <span class='slop-ngram-item'>flickering shadows (9)</span> <span class='slop-ngram-item'>looked jamie (9)</span> <span class='slop-ngram-item'>gaze lingered (9)</span> <span class='slop-ngram-item'>closer voice (9)</span> <span class='slop-ngram-item'>fingers brushing (9)</span> <span class='slop-ngram-item'>kept circling (8)</span> <span class='slop-ngram-item'>beneath fingertips (8)</span> <span class='slop-ngram-item'>flicker hope (8)</span> <span class='slop-ngram-item'>faint creak (8)</span> <span class='slop-ngram-item'>words settle (8)</span> <span class='slop-ngram-item'>expression unreadable (8)</span> <span class='slop-ngram-item'>jamie eyes (7)</span> <span class='slop-ngram-item'>jamie asked (7)</span> <span class='slop-ngram-item'>secrets buried (7)</span> <span class='slop-ngram-item'>jamie face (7)</span> <span class='slop-ngram-item'>circling back (7)</span> <span class='slop-ngram-item'>faint flicker (7)</span> <span class='slop-ngram-item'>vast indifferent (7)</span> <span class='slop-ngram-item'>moved cautiously (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath (34)</span> <span class='slop-ngram-item'>said softly voice (10)</span> <span class='slop-ngram-item'>reached pocket pulled (10)</span> <span class='slop-ngram-item'>feeling weight words (9)</span> <span class='slop-ngram-item'>deep breath feeling (9)</span> <span class='slop-ngram-item'>mind kept circling (8)</span> <span class='slop-ngram-item'>shadows stretched long (8)</span> <span class='slop-ngram-item'>pocket pulled small (8)</span> <span class='slop-ngram-item'>voice barely whisper (8)</span> <span class='slop-ngram-item'>looked around room (8)</span> <span class='slop-ngram-item'>kept circling back (7)</span> <span class='slop-ngram-item'>weight words settle (7)</span> <span class='slop-ngram-item'>heart hammered chest (7)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>said voice low (7)</span> <span class='slop-ngram-item'>door swung open (7)</span> <span class='slop-ngram-item'>breath trying steady (6)</span> <span class='slop-ngram-item'>said voice steady (6)</span> <span class='slop-ngram-item'>buried beneath layers (6)</span> <span class='slop-ngram-item'>casting long shadows (6)</span> <span class='slop-ngram-item'>shook head slowly (6)</span> <span class='slop-ngram-item'>pushed door open (6)</span> <span class='slop-ngram-item'>voice low steady (5)</span> <span class='slop-ngram-item'>trying steady breathing (5)</span> <span class='slop-ngram-item'>whispered voice trembling (5)</span> <span class='slop-ngram-item'>feeling strange mixture (5)</span> <span class='slop-ngram-item'>took slow step (5)</span> <span class='slop-ngram-item'>fingers trembling slightly (5)</span> <span class='slop-ngram-item'>fingers trembled slightly (5)</span> <span class='slop-ngram-item'>pulled small battered (5)</span>
</div>

##### qwen/qwen3-14b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.689)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.705)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.755)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.767)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.809)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>clara</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>vane</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>convulsed</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>hilt</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>darkened</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>pounded</span> <span class='slop-word-item'>hitched</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>reverent</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>iridescent</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>crackle</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>fingers tightened around (47)</span> <span class='slop-word-item'>something that looked like (47)</span> <span class='slop-word-item'>voice barely above a whisper (46)</span> <span class='slop-word-item'>first time, she wasn’t sure (45)</span> <span class='slop-word-item'>eyes were filled with something (28)</span> <span class='slop-word-item'>said, his voice low (28)</span> <span class='slop-word-item'>eyes filled with something (26)</span> <span class='slop-word-item'>said, her voice barely (24)</span> <span class='slop-word-item'>first time in years (21)</span> <span class='slop-word-item'>voice was quiet, almost (20)</span> <span class='slop-word-item'>door creaked open (18)</span> <span class='slop-word-item'>said, her voice low (18)</span> <span class='slop-word-item'>air was thick with the scent (18)</span> <span class='slop-word-item'>air thick with the scent (15)</span> <span class='slop-word-item'>casting long shadows (14)</span> <span class='slop-word-item'>said, her voice steady (13)</span> <span class='slop-word-item'>long shadows across (12)</span> <span class='slop-word-item'>knew one thing (12)</span> <span class='slop-word-item'>door slammed shut (12)</span> <span class='slop-word-item'>moment, she thought she saw (12)</span> <span class='slop-word-item'>stepped forward, her voice (12)</span> <span class='slop-word-item'>eyes wide with something (12)</span> <span class='slop-word-item'>voice was low, almost (10)</span> <span class='slop-word-item'>like a second skin (10)</span> <span class='slop-word-item'>knelt beside him, her hands (10)</span> <span class='slop-word-item'>voice was steady, but there was something (9)</span> <span class='slop-word-item'>hands clenched into fists (9)</span> <span class='slop-word-item'>voice barely a whisper (9)</span> <span class='slop-word-item'>lips parted, but no words (9)</span> <span class='slop-word-item'>eyes dark with something (8)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (114)</span> <span class='slop-ngram-item'>heart pounding (101)</span> <span class='slop-ngram-item'>voice steady (92)</span> <span class='slop-ngram-item'>spent life (88)</span> <span class='slop-ngram-item'>mind racing (79)</span> <span class='slop-ngram-item'>spent years (79)</span> <span class='slop-ngram-item'>breath caught (73)</span> <span class='slop-ngram-item'>expression unreadable (65)</span> <span class='slop-ngram-item'>voice barely (65)</span> <span class='slop-ngram-item'>silence thick (62)</span> <span class='slop-ngram-item'>barely whisper (62)</span> <span class='slop-ngram-item'>hands trembling (60)</span> <span class='slop-ngram-item'>stepped closer (57)</span> <span class='slop-ngram-item'>thick weight (56)</span> <span class='slop-ngram-item'>filled something (55)</span> <span class='slop-ngram-item'>eyes filled (54)</span> <span class='slop-ngram-item'>tightened around (52)</span> <span class='slop-ngram-item'>time sure (52)</span> <span class='slop-ngram-item'>something looked (48)</span> <span class='slop-ngram-item'>fingers tightened (47)</span> <span class='slop-ngram-item'>air thick (47)</span> <span class='slop-ngram-item'>heart pounded (47)</span> <span class='slop-ngram-item'>jaw tightened (44)</span> <span class='slop-ngram-item'>thick scent (41)</span> <span class='slop-ngram-item'>voice quiet (37)</span> <span class='slop-ngram-item'>eyes cold (36)</span> <span class='slop-ngram-item'>face pale (36)</span> <span class='slop-ngram-item'>almost whisper (35)</span> <span class='slop-ngram-item'>lila eyes (33)</span> <span class='slop-ngram-item'>fingers brushing (29)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (61)</span> <span class='slop-ngram-item'>eyes filled something (54)</span> <span class='slop-ngram-item'>said voice low (54)</span> <span class='slop-ngram-item'>first time sure (52)</span> <span class='slop-ngram-item'>fingers tightened around (47)</span> <span class='slop-ngram-item'>something looked like (47)</span> <span class='slop-ngram-item'>said voice barely (39)</span> <span class='slop-ngram-item'>air thick scent (33)</span> <span class='slop-ngram-item'>first time years (21)</span> <span class='slop-ngram-item'>voice quiet almost (20)</span> <span class='slop-ngram-item'>stepped closer voice (18)</span> <span class='slop-ngram-item'>mind racing spent (18)</span> <span class='slop-ngram-item'>stepped forward voice (18)</span> <span class='slop-ngram-item'>door creaked open (18)</span> <span class='slop-ngram-item'>something else something (18)</span> <span class='slop-ngram-item'>said voice steady (14)</span> <span class='slop-ngram-item'>casting long shadows (14)</span> <span class='slop-ngram-item'>eyes wide something (13)</span> <span class='slop-ngram-item'>lips parted words (13)</span> <span class='slop-ngram-item'>long shadows across (12)</span> <span class='slop-ngram-item'>moment thought saw (12)</span> <span class='slop-ngram-item'>knew one thing (12)</span> <span class='slop-ngram-item'>door slammed shut (12)</span> <span class='slop-ngram-item'>knelt beside hands (11)</span> <span class='slop-ngram-item'>said voice softer (10)</span> <span class='slop-ngram-item'>voice low almost (10)</span> <span class='slop-ngram-item'>face pale eyes (10)</span> <span class='slop-ngram-item'>like second skin (10)</span> <span class='slop-ngram-item'>know said voice (10)</span> <span class='slop-ngram-item'>hands clenched fists (10)</span>
</div>

##### RekaAI/reka-flash-3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwq-32b (distance=0.686)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.690)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.744)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.765)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.775)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>keycard</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>lena</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>cybernetic</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>pried</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>howled</span> <span class='slop-word-item'>intoned</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>snarled</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>buzzed</span> <span class='slop-word-item'>scrawled</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>door creaked open (11)</span> <span class='slop-word-item'>blood turned to ice (7)</span> <span class='slop-word-item'>lit a cigarette, the smoke (5)</span> <span class='slop-word-item'>heels clicking like (5)</span> <span class='slop-word-item'>serpent coiled around (4)</span> <span class='slop-word-item'>glowing faintly blue (4)</span> <span class='slop-word-item'>door slammed shut (4)</span> <span class='slop-word-item'>Rain lashed the windows (4)</span> <span class='slop-word-item'>cigarette, the smoke curling (4)</span> <span class='slop-word-item'>smile didn’t reach his eyes (3)</span> <span class='slop-word-item'>door swung open (3)</span> <span class='slop-word-item'>smile didn’t reach her eyes (3)</span> <span class='slop-word-item'>laughed, a hollow sound (3)</span> <span class='slop-word-item'>parked two blocks (3)</span> <span class='slop-word-item'>blood ran cold (3)</span> <span class='slop-word-item'>casting jagged shadows (3)</span> <span class='slop-word-item'>stepped closer, her voice (3)</span> <span class='slop-word-item'>glowing like cursed (2)</span> <span class='slop-word-item'>stepped forward, her voice (2)</span> <span class='slop-word-item'>voice smooth as oil (2)</span> <span class='slop-word-item'>voice, smooth as oil (1)</span> <span class='slop-word-item'>stepped forward, his voice (1)</span> <span class='slop-word-item'>stepped closer, his voice (1)</span> <span class='slop-word-item'>stepped forward, voice (1)</span> <span class='slop-word-item'>glowing like a cursed (1)</span> <span class='slop-word-item'>smile that didn’t reach her eyes (1)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (28)</span> <span class='slop-ngram-item'>phone buzzed (24)</span> <span class='slop-ngram-item'>coiled around (14)</span> <span class='slop-ngram-item'>stood doorway (14)</span> <span class='slop-ngram-item'>smelled like (14)</span> <span class='slop-ngram-item'>fingers brushing (13)</span> <span class='slop-ngram-item'>stepped closer (13)</span> <span class='slop-ngram-item'>voice echoed (13)</span> <span class='slop-ngram-item'>creaked open (12)</span> <span class='slop-ngram-item'>door creaked (11)</span> <span class='slop-ngram-item'>lit cigarette (11)</span> <span class='slop-ngram-item'>breath hitched (10)</span> <span class='slop-ngram-item'>unknown number (10)</span> <span class='slop-ngram-item'>knelt beside (10)</span> <span class='slop-ngram-item'>like dying (10)</span> <span class='slop-ngram-item'>lab coat (10)</span> <span class='slop-ngram-item'>lena whispered (9)</span> <span class='slop-ngram-item'>glowing faintly (9)</span> <span class='slop-ngram-item'>throat tightened (9)</span> <span class='slop-ngram-item'>smile reach (8)</span> <span class='slop-ngram-item'>usb drive (8)</span> <span class='slop-ngram-item'>reach eyes (8)</span> <span class='slop-ngram-item'>face pale (8)</span> <span class='slop-ngram-item'>hands shook (8)</span> <span class='slop-ngram-item'>floorboard creaked (7)</span> <span class='slop-ngram-item'>rain lashed (7)</span> <span class='slop-ngram-item'>jaw tightened (7)</span> <span class='slop-ngram-item'>turned ice (7)</span> <span class='slop-ngram-item'>glowing like (7)</span> <span class='slop-ngram-item'>voice steady (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>door creaked open (11)</span> <span class='slop-ngram-item'>blood turned ice (7)</span> <span class='slop-ngram-item'>smile reach eyes (7)</span> <span class='slop-ngram-item'>heels clicking like (5)</span> <span class='slop-ngram-item'>lit cigarette smoke (5)</span> <span class='slop-ngram-item'>phone buzzed text (5)</span> <span class='slop-ngram-item'>cigarette smoke curling (4)</span> <span class='slop-ngram-item'>glowing faintly blue (4)</span> <span class='slop-ngram-item'>serpent coiled around (4)</span> <span class='slop-ngram-item'>stepped closer voice (4)</span> <span class='slop-ngram-item'>rain lashed windows (4)</span> <span class='slop-ngram-item'>stepped forward voice (4)</span> <span class='slop-ngram-item'>door slammed shut (4)</span> <span class='slop-ngram-item'>parked two blocks (3)</span> <span class='slop-ngram-item'>glowing like cursed (3)</span> <span class='slop-ngram-item'>voice smooth oil (3)</span> <span class='slop-ngram-item'>casting jagged shadows (3)</span> <span class='slop-ngram-item'>laughed hollow sound (3)</span> <span class='slop-ngram-item'>blood ran cold (3)</span> <span class='slop-ngram-item'>door swung open (3)</span>
</div>

##### google/gemma-3-4b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.765)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.773)</div>
<div class='slop-similar'>google/gemini-2.5-flash-preview-05-20 (distance=0.829)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-06-05 (distance=0.854)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.860)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>blackwoods</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>dampness</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>amplifying</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>melancholic</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>malevolent</span> <span class='slop-word-item'>fragmented</span> <span class='slop-word-item'>decaying</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>fleeting</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>streaked</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>chilling</span> <span class='slop-word-item'>insistent</span> <span class='slop-word-item'>etched</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely audible (26)</span> <span class='slop-word-item'>voice barely a whisper (21)</span> <span class='slop-word-item'>rain continued to fall (18)</span> <span class='slop-word-item'>voice devoid of emotion (11)</span> <span class='slop-word-item'>Silas said, his voice (11)</span> <span class='slop-word-item'>said, his voice barely (11)</span> <span class='slop-word-item'>small, intricately carved (10)</span> <span class='slop-word-item'>growing sense of unease (10)</span> <span class='slop-word-item'>small, almost imperceptible (10)</span> <span class='slop-word-item'>felt a strange sense (9)</span> <span class='slop-word-item'>said, his voice filled (9)</span> <span class='slop-word-item'>growing sense of dread (9)</span> <span class='slop-word-item'>said, his voice laced (8)</span> <span class='slop-word-item'>continued to fall, washing (8)</span> <span class='slop-word-item'>said, her voice low (8)</span> <span class='slop-word-item'>voice laced with a hint (7)</span> <span class='slop-word-item'>said, his voice low (7)</span> <span class='slop-word-item'>smile playing on her lips (7)</span> <span class='slop-word-item'>faint, almost imperceptible (7)</span> <span class='slop-word-item'>said, her voice laced (7)</span> <span class='slop-word-item'>chilling realization dawned (7)</span> <span class='slop-word-item'>persistent, grey drizzle (6)</span> <span class='slop-word-item'>things are best left (6)</span> <span class='slop-word-item'>noticed a small, almost (6)</span> <span class='slop-word-item'>noticed a subtle shift (6)</span> <span class='slop-word-item'>said, her voice barely (6)</span> <span class='slop-word-item'>said, his voice strained (6)</span> <span class='slop-word-item'>knew, with a chilling certainty (6)</span> <span class='slop-word-item'>rain continued its relentless (5)</span> <span class='slop-word-item'>said, my voice barely (5)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>silas blackwood (29)</span> <span class='slop-ngram-item'>blackwood house (22)</span> <span class='slop-ngram-item'>silas said (16)</span> <span class='slop-ngram-item'>profound sense (16)</span> <span class='slop-ngram-item'>blackwood family (16)</span> <span class='slop-ngram-item'>voice devoid (16)</span> <span class='slop-ngram-item'>fleeting glimpse (14)</span> <span class='slop-ngram-item'>chilling certainty (12)</span> <span class='slop-ngram-item'>scent lavender (12)</span> <span class='slop-ngram-item'>replied gaze (12)</span> <span class='slop-ngram-item'>gaze unwavering (12)</span> <span class='slop-ngram-item'>subtle shift (11)</span> <span class='slop-ngram-item'>noticed subtle (11)</span> <span class='slop-ngram-item'>faint almost (10)</span> <span class='slop-ngram-item'>silas replied (10)</span> <span class='slop-ngram-item'>palpable sense (10)</span> <span class='slop-ngram-item'>chapter echoes (10)</span> <span class='slop-ngram-item'>fragmented memories (10)</span> <span class='slop-ngram-item'>small intricately (10)</span> <span class='slop-ngram-item'>relentless drumming (9)</span> <span class='slop-ngram-item'>voice tight (9)</span> <span class='slop-ngram-item'>stated voice (9)</span> <span class='slop-ngram-item'>reminder darkness (9)</span> <span class='slop-ngram-item'>observed voice (9)</span> <span class='slop-ngram-item'>chilling realization (8)</span> <span class='slop-ngram-item'>persistent grey (8)</span> <span class='slop-ngram-item'>fall washing (8)</span> <span class='slop-ngram-item'>discovered hidden (8)</span> <span class='slop-ngram-item'>seemed seep (7)</span> <span class='slop-ngram-item'>laced hint (7)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely audible (26)</span> <span class='slop-ngram-item'>said voice low (24)</span> <span class='slop-ngram-item'>said voice barely (22)</span> <span class='slop-ngram-item'>voice barely whisper (22)</span> <span class='slop-ngram-item'>rain continued fall (18)</span> <span class='slop-ngram-item'>said voice filled (18)</span> <span class='slop-ngram-item'>said voice laced (15)</span> <span class='slop-ngram-item'>silas said voice (14)</span> <span class='slop-ngram-item'>voice devoid emotion (12)</span> <span class='slop-ngram-item'>small almost imperceptible (11)</span> <span class='slop-ngram-item'>small intricately carved (10)</span> <span class='slop-ngram-item'>growing sense unease (10)</span> <span class='slop-ngram-item'>said voice strained (10)</span> <span class='slop-ngram-item'>growing sense dread (9)</span> <span class='slop-ngram-item'>felt strange sense (9)</span> <span class='slop-ngram-item'>continued fall washing (8)</span> <span class='slop-ngram-item'>smile playing lips (8)</span> <span class='slop-ngram-item'>faint almost imperceptible (7)</span> <span class='slop-ngram-item'>chilling realization dawned (7)</span> <span class='slop-ngram-item'>voice laced hint (7)</span> <span class='slop-ngram-item'>said voice firm (7)</span> <span class='slop-ngram-item'>knew chilling certainty (7)</span> <span class='slop-ngram-item'>said voice devoid (7)</span> <span class='slop-ngram-item'>said voice trembling (7)</span> <span class='slop-ngram-item'>persistent grey drizzle (6)</span> <span class='slop-ngram-item'>noticed subtle shift (6)</span> <span class='slop-ngram-item'>voice filled chilling (6)</span> <span class='slop-ngram-item'>noticed small almost (6)</span> <span class='slop-ngram-item'>things best left (6)</span> <span class='slop-ngram-item'>felt strange connection (5)</span>
</div>

##### meta-llama/Llama-4-Maverick-17B-128E-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.695)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.841)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.862)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.868)</div>
<div class='slop-similar'>openai/gpt-oss-20b (distance=0.875)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>gaudy</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>windowsill</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>suffocating</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>malevolent</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>sophia</span> <span class='slop-word-item'>recede</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>cusp</span> <span class='slop-word-item'>oppressive</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>patel</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely above a whisper (46)</span> <span class='slop-word-item'>felt a shiver run (41)</span> <span class='slop-word-item'>seemed to press in around (34)</span> <span class='slop-word-item'>mind racing with the implications (26)</span> <span class='slop-word-item'>felt a sense of unease (25)</span> <span class='slop-word-item'>said, his voice low (25)</span> <span class='slop-word-item'>said, his voice firm (24)</span> <span class='slop-word-item'>felt a sense of wonder (22)</span> <span class='slop-word-item'>senses on high alert (21)</span> <span class='slop-word-item'>said, her voice barely (21)</span> <span class='slop-word-item'>darkness seemed to press (21)</span> <span class='slop-word-item'>mind racing with possibilities (20)</span> <span class='slop-word-item'>air was thick with tension (20)</span> <span class='slop-word-item'>felt a sense of relief (19)</span> <span class='slop-word-item'>sense of relief wash (18)</span> <span class='slop-word-item'>shiver run down my spine (18)</span> <span class='slop-word-item'>said, her voice low (17)</span> <span class='slop-word-item'>air was thick with the smell (16)</span> <span class='slop-word-item'>darkness outside seemed (16)</span> <span class='slop-word-item'>feel a sense of unease (16)</span> <span class='slop-word-item'>said, his voice dripping (16)</span> <span class='slop-word-item'>voice low and husky (15)</span> <span class='slop-word-item'>senses were on high alert (14)</span> <span class='slop-word-item'>felt a sense of excitement (14)</span> <span class='slop-word-item'>whatever came next (14)</span> <span class='slop-word-item'>eyes glinting with amusement (14)</span> <span class='slop-word-item'>felt a sense of connection (14)</span> <span class='slop-word-item'>smiled, feeling a sense (14)</span> <span class='slop-word-item'>outside seemed to press (13)</span> <span class='slop-word-item'>ready to face whatever (13)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt sense (228)</span> <span class='slop-ngram-item'>sense unease (72)</span> <span class='slop-ngram-item'>air thick (69)</span> <span class='slop-ngram-item'>run spine (58)</span> <span class='slop-ngram-item'>voice firm (55)</span> <span class='slop-ngram-item'>feeling sense (47)</span> <span class='slop-ngram-item'>shiver run (46)</span> <span class='slop-ngram-item'>felt shiver (41)</span> <span class='slop-ngram-item'>seemed press (35)</span> <span class='slop-ngram-item'>press around (35)</span> <span class='slop-ngram-item'>senses high (35)</span> <span class='slop-ngram-item'>knew careful (34)</span> <span class='slop-ngram-item'>darkness seemed (34)</span> <span class='slop-ngram-item'>racing implications (31)</span> <span class='slop-ngram-item'>sense wonder (27)</span> <span class='slop-ngram-item'>racing possibilities (26)</span> <span class='slop-ngram-item'>nodded eyes (26)</span> <span class='slop-ngram-item'>uncover truth (24)</span> <span class='slop-ngram-item'>eyes glinting (24)</span> <span class='slop-ngram-item'>thick tension (21)</span> <span class='slop-ngram-item'>thick smell (21)</span> <span class='slop-ngram-item'>outside seemed (21)</span> <span class='slop-ngram-item'>sense trepidation (20)</span> <span class='slop-ngram-item'>darkness outside (20)</span> <span class='slop-ngram-item'>sense excitement (18)</span> <span class='slop-ngram-item'>rising within (18)</span> <span class='slop-ngram-item'>relief wash (18)</span> <span class='slop-ngram-item'>silence oppressive (17)</span> <span class='slop-ngram-item'>sense determination (17)</span> <span class='slop-ngram-item'>voice laced (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper (48)</span> <span class='slop-ngram-item'>said voice low (47)</span> <span class='slop-ngram-item'>shiver run spine (46)</span> <span class='slop-ngram-item'>felt shiver run (41)</span> <span class='slop-ngram-item'>said voice firm (36)</span> <span class='slop-ngram-item'>senses high alert (35)</span> <span class='slop-ngram-item'>seemed press around (34)</span> <span class='slop-ngram-item'>mind racing implications (30)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>felt sense unease (25)</span> <span class='slop-ngram-item'>mind racing possibilities (23)</span> <span class='slop-ngram-item'>felt sense wonder (22)</span> <span class='slop-ngram-item'>darkness seemed press (21)</span> <span class='slop-ngram-item'>air thick tension (21)</span> <span class='slop-ngram-item'>air thick smell (20)</span> <span class='slop-ngram-item'>said voice dripping (19)</span> <span class='slop-ngram-item'>felt sense relief (19)</span> <span class='slop-ngram-item'>sense relief wash (18)</span> <span class='slop-ngram-item'>darkness outside seemed (17)</span> <span class='slop-ngram-item'>smiled feeling sense (16)</span> <span class='slop-ngram-item'>press around making (16)</span> <span class='slop-ngram-item'>feel sense unease (16)</span> <span class='slop-ngram-item'>voice low husky (15)</span> <span class='slop-ngram-item'>eyes glinting amusement (14)</span> <span class='slop-ngram-item'>felt sense excitement (14)</span> <span class='slop-ngram-item'>run spine realized (14)</span> <span class='slop-ngram-item'>felt sense connection (14)</span> <span class='slop-ngram-item'>alex said voice (14)</span> <span class='slop-ngram-item'>whatever came next (14)</span> <span class='slop-ngram-item'>outside seemed press (13)</span>
</div>

##### meta-llama/Llama-4-Scout-17B-16E-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.695)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.826)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.845)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.889)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.891)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kael</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>ryder</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>ethan</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>ticked</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>rumbling</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>vibrate</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>tirelessly</span> <span class='slop-word-item'>unforgiving</span> <span class='slop-word-item'>uncover</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>journeyed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>twinkle</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>maria</span> <span class='slop-word-item'>excitement</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>menacing</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>stared</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>couldn&#x27;t shake the feeling (76)</span> <span class='slop-word-item'>voice barely above a whisper (76)</span> <span class='slop-word-item'>help but feel a sense (57)</span> <span class='slop-word-item'>eyes locked onto (54)</span> <span class='slop-word-item'>said, his voice low (52)</span> <span class='slop-word-item'>said, her voice barely (41)</span> <span class='slop-word-item'>felt a sense of peace (38)</span> <span class='slop-word-item'>whatever lay ahead (38)</span> <span class='slop-word-item'>casting a golden glow (37)</span> <span class='slop-word-item'>sense of peace wash (37)</span> <span class='slop-word-item'>eyes shining with excitement (36)</span> <span class='slop-word-item'>something much bigger (33)</span> <span class='slop-word-item'>said, his voice firm (31)</span> <span class='slop-word-item'>felt a sense of wonder (31)</span> <span class='slop-word-item'>felt a sense of trepidation (30)</span> <span class='slop-word-item'>ready to face whatever (30)</span> <span class='slop-word-item'>sense of wonder and awe (29)</span> <span class='slop-word-item'>felt a sense of excitement (28)</span> <span class='slop-word-item'>felt a sense of unease (23)</span> <span class='slop-word-item'>felt a shiver run (22)</span> <span class='slop-word-item'>sun began to set (22)</span> <span class='slop-word-item'>feel a sense of trepidation (21)</span> <span class='slop-word-item'>feel a sense of unease (21)</span> <span class='slop-word-item'>felt a sense of determination (21)</span> <span class='slop-word-item'>whatever came next (19)</span> <span class='slop-word-item'>mind racing with possibilities (19)</span> <span class='slop-word-item'>face whatever lay (19)</span> <span class='slop-word-item'>shiver run down my spine (19)</span> <span class='slop-word-item'>smiled, feeling a sense (19)</span> <span class='slop-word-item'>felt a chill run (19)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt sense (297)</span> <span class='slop-ngram-item'>feel sense (90)</span> <span class='slop-ngram-item'>voice low (89)</span> <span class='slop-ngram-item'>shake feeling (82)</span> <span class='slop-ngram-item'>voice firm (81)</span> <span class='slop-ngram-item'>voice barely (78)</span> <span class='slop-ngram-item'>barely whisper (77)</span> <span class='slop-ngram-item'>lay ahead (64)</span> <span class='slop-ngram-item'>sense unease (63)</span> <span class='slop-ngram-item'>sense trepidation (61)</span> <span class='slop-ngram-item'>feeling sense (54)</span> <span class='slop-ngram-item'>locked onto (54)</span> <span class='slop-ngram-item'>knew careful (53)</span> <span class='slop-ngram-item'>sense wonder (53)</span> <span class='slop-ngram-item'>whatever lay (50)</span> <span class='slop-ngram-item'>face whatever (47)</span> <span class='slop-ngram-item'>sense excitement (44)</span> <span class='slop-ngram-item'>run spine (43)</span> <span class='slop-ngram-item'>nodded eyes (41)</span> <span class='slop-ngram-item'>ready face (40)</span> <span class='slop-ngram-item'>night wore (39)</span> <span class='slop-ngram-item'>sense awe (39)</span> <span class='slop-ngram-item'>ready whatever (39)</span> <span class='slop-ngram-item'>sense peace (39)</span> <span class='slop-ngram-item'>casting golden (37)</span> <span class='slop-ngram-item'>peace wash (37)</span> <span class='slop-ngram-item'>golden glow (37)</span> <span class='slop-ngram-item'>eyes scanning (37)</span> <span class='slop-ngram-item'>shining excitement (36)</span> <span class='slop-ngram-item'>matter took (36)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling (79)</span> <span class='slop-ngram-item'>voice barely whisper (77)</span> <span class='slop-ngram-item'>said voice low (68)</span> <span class='slop-ngram-item'>said voice firm (58)</span> <span class='slop-ngram-item'>help feel sense (57)</span> <span class='slop-ngram-item'>eyes locked onto (54)</span> <span class='slop-ngram-item'>said voice barely (52)</span> <span class='slop-ngram-item'>whatever lay ahead (38)</span> <span class='slop-ngram-item'>felt sense peace (38)</span> <span class='slop-ngram-item'>casting golden glow (37)</span> <span class='slop-ngram-item'>sense peace wash (37)</span> <span class='slop-ngram-item'>eyes shining excitement (36)</span> <span class='slop-ngram-item'>something much bigger (33)</span> <span class='slop-ngram-item'>felt sense wonder (31)</span> <span class='slop-ngram-item'>felt sense trepidation (30)</span> <span class='slop-ngram-item'>ready face whatever (30)</span> <span class='slop-ngram-item'>sense wonder awe (29)</span> <span class='slop-ngram-item'>felt sense excitement (28)</span> <span class='slop-ngram-item'>knew would face (27)</span> <span class='slop-ngram-item'>shake feeling watched (25)</span> <span class='slop-ngram-item'>asked voice barely (23)</span> <span class='slop-ngram-item'>shiver run spine (23)</span> <span class='slop-ngram-item'>ready ready face (23)</span> <span class='slop-ngram-item'>felt sense unease (23)</span> <span class='slop-ngram-item'>felt shiver run (22)</span> <span class='slop-ngram-item'>sun began set (22)</span> <span class='slop-ngram-item'>feel sense unease (21)</span> <span class='slop-ngram-item'>felt sense determination (21)</span> <span class='slop-ngram-item'>feel sense trepidation (21)</span> <span class='slop-ngram-item'>smiled feeling sense (20)</span>
</div>

##### gpt-5-nano-2025-08-07
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gpt-5-mini-2025-08-07 (distance=0.864)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.905)</div>
<div class='slop-similar'>openai/gpt-oss-20b (distance=0.907)</div>
<div class='slop-similar'>horizon-alpha (distance=0.908)</div>
<div class='slop-similar'>gpt-5-chat-latest-2025-08-07 (distance=0.908)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kael</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>steadies</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>unglamorous</span> <span class='slop-word-item'>archivist</span> <span class='slop-word-item'>weaponize</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>unhurried</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>ledger</span> <span class='slop-word-item'>coaxed</span> <span class='slop-word-item'>glimmering</span> <span class='slop-word-item'>cadence</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>recalibration</span> <span class='slop-word-item'>steadiness</span> <span class='slop-word-item'>footstep</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>bravado</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>stubborn</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>gentlest</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>aftertaste</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>fogs</span> <span class='slop-word-item'>rustle</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>streetlight</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>gentleness</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>nourishment</span> <span class='slop-word-item'>coax</span> <span class='slop-word-item'>pulsed</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>felt almost ceremonial (15)</span> <span class='slop-word-item'>felt less like (11)</span> <span class='slop-word-item'>paused, letting the weight (8)</span> <span class='slop-word-item'>felt almost like (7)</span> <span class='slop-word-item'>learned long ago (7)</span> <span class='slop-word-item'>feel less like (6)</span> <span class='slop-word-item'>said softly, almost (6)</span> <span class='slop-word-item'>looked almost like (6)</span> <span class='slop-word-item'>small, almost shy (6)</span> <span class='slop-word-item'>seemed to lean closer (5)</span> <span class='slop-word-item'>careful, almost ceremonial (5)</span> <span class='slop-word-item'>took a slow breath (5)</span> <span class='slop-word-item'>door closed behind (4)</span> <span class='slop-word-item'>like a second skin (4)</span> <span class='slop-word-item'>pressed into a thin line (4)</span> <span class='slop-word-item'>first time since (4)</span> <span class='slop-word-item'>voice low, almost (4)</span> <span class='slop-word-item'>offered a small, almost (4)</span> <span class='slop-word-item'>like a held breath (4)</span> <span class='slop-word-item'>one last time (4)</span> <span class='slop-word-item'>said, his voice low (4)</span> <span class='slop-word-item'>would come next (4)</span> <span class='slop-word-item'>learned to hold their breath (3)</span> <span class='slop-word-item'>inclined his head toward (3)</span> <span class='slop-word-item'>made the room feel (3)</span> <span class='slop-word-item'>hand, palm open (3)</span> <span class='slop-word-item'>Let us begin (3)</span> <span class='slop-word-item'>bend without breaking (3)</span> <span class='slop-word-item'>soft, almost apologetic (3)</span> <span class='slop-word-item'>felt almost intimate (3)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>almost ceremonial (53)</span> <span class='slop-ngram-item'>learned listen (26)</span> <span class='slop-ngram-item'>like patient (21)</span> <span class='slop-ngram-item'>someone learned (20)</span> <span class='slop-ngram-item'>careful almost (19)</span> <span class='slop-ngram-item'>paused letting (18)</span> <span class='slop-ngram-item'>toward future (15)</span> <span class='slop-ngram-item'>quiet stubborn (15)</span> <span class='slop-ngram-item'>city breath (14)</span> <span class='slop-ngram-item'>learned trust (13)</span> <span class='slop-ngram-item'>almost clinical (13)</span> <span class='slop-ngram-item'>almost affectionate (12)</span> <span class='slop-ngram-item'>steady patient (12)</span> <span class='slop-ngram-item'>shared responsibility (11)</span> <span class='slop-ngram-item'>shared risk (11)</span> <span class='slop-ngram-item'>quiet certainty (11)</span> <span class='slop-ngram-item'>become shared (11)</span> <span class='slop-ngram-item'>softly almost (11)</span> <span class='slop-ngram-item'>could coax (11)</span> <span class='slop-ngram-item'>reminder even (10)</span> <span class='slop-ngram-item'>city memory (10)</span> <span class='slop-ngram-item'>patient light (10)</span> <span class='slop-ngram-item'>small stubborn (10)</span> <span class='slop-ngram-item'>stubborn hope (10)</span> <span class='slop-ngram-item'>shared breath (10)</span> <span class='slop-ngram-item'>letting weight (10)</span> <span class='slop-ngram-item'>glowed faintly (9)</span> <span class='slop-ngram-item'>test whether (9)</span> <span class='slop-ngram-item'>pale patient (9)</span> <span class='slop-ngram-item'>drift toward (9)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt almost ceremonial (15)</span> <span class='slop-ngram-item'>felt less like (11)</span> <span class='slop-ngram-item'>said voice low (9)</span> <span class='slop-ngram-item'>paused letting weight (8)</span> <span class='slop-ngram-item'>lean closer listening (7)</span> <span class='slop-ngram-item'>voice low almost (7)</span> <span class='slop-ngram-item'>felt almost like (7)</span> <span class='slop-ngram-item'>learned long ago (7)</span> <span class='slop-ngram-item'>said softly almost (6)</span> <span class='slop-ngram-item'>small almost shy (6)</span> <span class='slop-ngram-item'>feel less like (6)</span> <span class='slop-ngram-item'>looked almost like (6)</span> <span class='slop-ngram-item'>seemed lean closer (5)</span> <span class='slop-ngram-item'>careful almost ceremonial (5)</span> <span class='slop-ngram-item'>keep listening keep (5)</span> <span class='slop-ngram-item'>makes room feel (5)</span> <span class='slop-ngram-item'>took slow breath (5)</span> <span class='slop-ngram-item'>bend without breaking (4)</span> <span class='slop-ngram-item'>notebook tucked arm (4)</span> <span class='slop-ngram-item'>allowed small almost (4)</span> <span class='slop-ngram-item'>almost shy smile (4)</span> <span class='slop-ngram-item'>offered small almost (4)</span> <span class='slop-ngram-item'>breath held long (4)</span> <span class='slop-ngram-item'>like held breath (4)</span> <span class='slop-ngram-item'>said letting words (4)</span> <span class='slop-ngram-item'>choosing words care (4)</span> <span class='slop-ngram-item'>inclined head slightly (4)</span> <span class='slop-ngram-item'>pressed thin line (4)</span> <span class='slop-ngram-item'>kind thing could (4)</span> <span class='slop-ngram-item'>said voice quiet (4)</span>
</div>

##### mistralai/Mistral-Nemo-Instruct-2407
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.826)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.841)</div>
<div class='slop-similar'>microsoft/phi-4-multimodal-instruct (distance=0.847)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.855)</div>
<div class='slop-similar'>google/gemma-3-12b-it (distance=0.863)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>zephyr</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>jumble</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>candlestick</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>coursed</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>pursuers</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>grudging</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>precipice</span> <span class='slop-word-item'>overactive</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>heirloom</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>heart</span> <span class='slop-word-item'>disheveled</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>muffled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>cautiously</span> <span class='slop-word-item'>softening</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice barely above a whisper (62)</span> <span class='slop-word-item'>face whatever came (58)</span> <span class='slop-word-item'>took a deep breath (57)</span> <span class='slop-word-item'>whatever came next (55)</span> <span class='slop-word-item'>heart pounding in her chest (54)</span> <span class='slop-word-item'>couldn&#x27;t shake the feeling (53)</span> <span class='slop-word-item'>shake the feeling that something (43)</span> <span class='slop-word-item'>said, her voice steady (36)</span> <span class='slop-word-item'>ready to face whatever (36)</span> <span class='slop-word-item'>said, his voice steady (32)</span> <span class='slop-word-item'>ready, ready to face (29)</span> <span class='slop-word-item'>voice barely audible (29)</span> <span class='slop-word-item'>said, his voice like (28)</span> <span class='slop-word-item'>taking a deep breath (28)</span> <span class='slop-word-item'>heart pounding in my chest (28)</span> <span class='slop-word-item'>deep breath, steeling (24)</span> <span class='slop-word-item'>couldn&#x27;t walk away (24)</span> <span class='slop-word-item'>together, they could face (24)</span> <span class='slop-word-item'>said, his voice low (23)</span> <span class='slop-word-item'>shake the feeling of unease (23)</span> <span class='slop-word-item'>knew that, together, they could (23)</span> <span class='slop-word-item'>could face whatever (23)</span> <span class='slop-word-item'>said, her voice soft (22)</span> <span class='slop-word-item'>eyes wide with shock (21)</span> <span class='slop-word-item'>said, her voice barely (19)</span> <span class='slop-word-item'>voice steady despite (19)</span> <span class='slop-word-item'>also knew that she could (19)</span> <span class='slop-word-item'>hearts pounding in their chests (18)</span> <span class='slop-word-item'>heart pounding in his chest (17)</span> <span class='slop-word-item'>said, her voice filled (17)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>also knew (176)</span> <span class='slop-ngram-item'>heart pounding (170)</span> <span class='slop-ngram-item'>voice steady (121)</span> <span class='slop-ngram-item'>eyes fixed (110)</span> <span class='slop-ngram-item'>shake feeling (108)</span> <span class='slop-ngram-item'>eyes filled (107)</span> <span class='slop-ngram-item'>pounding chest (102)</span> <span class='slop-ngram-item'>lay ahead (96)</span> <span class='slop-ngram-item'>voice barely (94)</span> <span class='slop-ngram-item'>mind racing (93)</span> <span class='slop-ngram-item'>face whatever (78)</span> <span class='slop-ngram-item'>matter cost (72)</span> <span class='slop-ngram-item'>barely whisper (70)</span> <span class='slop-ngram-item'>dark twisted (63)</span> <span class='slop-ngram-item'>voice filled (62)</span> <span class='slop-ngram-item'>whatever came (58)</span> <span class='slop-ngram-item'>eyes scanning (56)</span> <span class='slop-ngram-item'>ready face (47)</span> <span class='slop-ngram-item'>filled sudden (39)</span> <span class='slop-ngram-item'>hearts pounding (38)</span> <span class='slop-ngram-item'>racing heart (35)</span> <span class='slop-ngram-item'>heart swelling (34)</span> <span class='slop-ngram-item'>uncover truth (30)</span> <span class='slop-ngram-item'>ready ready (30)</span> <span class='slop-ngram-item'>push boundaries (29)</span> <span class='slop-ngram-item'>nodded expression (27)</span> <span class='slop-ngram-item'>breath steeling (25)</span> <span class='slop-ngram-item'>knew together (25)</span> <span class='slop-ngram-item'>truth behind (25)</span> <span class='slop-ngram-item'>expression serious (24)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart pounding chest (102)</span> <span class='slop-ngram-item'>said voice steady (79)</span> <span class='slop-ngram-item'>voice barely whisper (64)</span> <span class='slop-ngram-item'>face whatever came (58)</span> <span class='slop-ngram-item'>took deep breath (57)</span> <span class='slop-ngram-item'>whatever came next (55)</span> <span class='slop-ngram-item'>could shake feeling (53)</span> <span class='slop-ngram-item'>also knew could (49)</span> <span class='slop-ngram-item'>shake feeling something (43)</span> <span class='slop-ngram-item'>said voice soft (40)</span> <span class='slop-ngram-item'>said voice low (40)</span> <span class='slop-ngram-item'>said voice like (38)</span> <span class='slop-ngram-item'>ready face whatever (36)</span> <span class='slop-ngram-item'>voice barely audible (30)</span> <span class='slop-ngram-item'>ready ready face (29)</span> <span class='slop-ngram-item'>taking deep breath (28)</span> <span class='slop-ngram-item'>said voice filled (26)</span> <span class='slop-ngram-item'>said voice barely (26)</span> <span class='slop-ngram-item'>deep breath steeling (25)</span> <span class='slop-ngram-item'>together could face (25)</span> <span class='slop-ngram-item'>could walk away (25)</span> <span class='slop-ngram-item'>uncertainty also knew (23)</span> <span class='slop-ngram-item'>knew together could (23)</span> <span class='slop-ngram-item'>could face whatever (23)</span> <span class='slop-ngram-item'>shake feeling unease (23)</span> <span class='slop-ngram-item'>hearts pounding chests (21)</span> <span class='slop-ngram-item'>eyes wide shock (21)</span> <span class='slop-ngram-item'>voice steady despite (19)</span> <span class='slop-ngram-item'>lay ahead knew (19)</span> <span class='slop-ngram-item'>everything power make (18)</span>
</div>

##### microsoft/phi-4-multimodal-instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.845)</div>
<div class='slop-similar'>mistralai/Mistral-Nemo-Instruct-2407 (distance=0.847)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.862)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.888)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.899)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lurked</span> <span class='slop-word-item'>softened</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>elena</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>adversary</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>confront</span> <span class='slop-word-item'>glittered</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>confines</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>ventured</span> <span class='slop-word-item'>vowed</span> <span class='slop-word-item'>imagined</span> <span class='slop-word-item'>encountered</span> <span class='slop-word-item'>shook</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>determination</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>darkness</span> <span class='slop-word-item'>strained</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>delved</span> <span class='slop-word-item'>ghostly</span> <span class='slop-word-item'>stranger</span> <span class='slop-word-item'>defiance</span> <span class='slop-word-item'>curiosity</span> <span class='slop-word-item'>admire</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>passageway</span> <span class='slop-word-item'>terror</span> <span class='slop-word-item'>newfound</span> <span class='slop-word-item'>alex</span> <span class='slop-word-item'>struggled</span> <span class='slop-word-item'>filled</span> <span class='slop-word-item'>thompson</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>urgency</span> <span class='slop-word-item'>listened</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>unwavering</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>voice filled with determination (232)</span> <span class='slop-word-item'>said, his voice filled (230)</span> <span class='slop-word-item'>took a deep breath (210)</span> <span class='slop-word-item'>heart pounding in his chest (196)</span> <span class='slop-word-item'>looked at him, her eyes filled (184)</span> <span class='slop-word-item'>filled with a mix of fear (98)</span> <span class='slop-word-item'>tried to make sense (92)</span> <span class='slop-word-item'>mind raced as he tried (87)</span> <span class='slop-word-item'>heart raced as he realized (87)</span> <span class='slop-word-item'>raced as he tried to make (86)</span> <span class='slop-word-item'>realized the gravity of their situation (82)</span> <span class='slop-word-item'>challenges lay ahead (75)</span> <span class='slop-word-item'>face whatever challenges (69)</span> <span class='slop-word-item'>whatever challenges lay (69)</span> <span class='slop-word-item'>voice barely above a whisper (59)</span> <span class='slop-word-item'>would face whatever (59)</span> <span class='slop-word-item'>piece together the puzzle (41)</span> <span class='slop-word-item'>said, her voice barely (38)</span> <span class='slop-word-item'>couldn&#x27;t help but feel (37)</span> <span class='slop-word-item'>Alex said, his voice (32)</span> <span class='slop-word-item'>help but feel a sense (26)</span> <span class='slop-word-item'>said, her voice filled (24)</span> <span class='slop-word-item'>ready to face whatever (22)</span> <span class='slop-word-item'>would change everything (20)</span> <span class='slop-word-item'>newfound sense of purpose (18)</span> <span class='slop-word-item'>said, her voice trembling (17)</span> <span class='slop-word-item'>eyes never leaving (13)</span> <span class='slop-word-item'>felt a sense of hope (13)</span> <span class='slop-word-item'>said, his voice barely (13)</span> <span class='slop-word-item'>make things right (11)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (381)</span> <span class='slop-ngram-item'>could feel (345)</span> <span class='slop-ngram-item'>voice filled (337)</span> <span class='slop-ngram-item'>eyes filled (290)</span> <span class='slop-ngram-item'>could help (256)</span> <span class='slop-ngram-item'>filled determination (245)</span> <span class='slop-ngram-item'>eyes softened (232)</span> <span class='slop-ngram-item'>deep breath (215)</span> <span class='slop-ngram-item'>took deep (211)</span> <span class='slop-ngram-item'>looked eyes (207)</span> <span class='slop-ngram-item'>heart pounding (206)</span> <span class='slop-ngram-item'>pounding chest (203)</span> <span class='slop-ngram-item'>need help (195)</span> <span class='slop-ngram-item'>knew beginning (187)</span> <span class='slop-ngram-item'>filled concern (185)</span> <span class='slop-ngram-item'>would face (130)</span> <span class='slop-ngram-item'>mind raced (129)</span> <span class='slop-ngram-item'>eyes met (125)</span> <span class='slop-ngram-item'>heart raced (116)</span> <span class='slop-ngram-item'>lay ahead (105)</span> <span class='slop-ngram-item'>find way (99)</span> <span class='slop-ngram-item'>filled mix (98)</span> <span class='slop-ngram-item'>mix fear (98)</span> <span class='slop-ngram-item'>fear determination (97)</span> <span class='slop-ngram-item'>make sense (97)</span> <span class='slop-ngram-item'>raced tried (96)</span> <span class='slop-ngram-item'>tried make (92)</span> <span class='slop-ngram-item'>knew would (91)</span> <span class='slop-ngram-item'>mind racing (90)</span> <span class='slop-ngram-item'>raced realized (89)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice filled (256)</span> <span class='slop-ngram-item'>voice filled determination (232)</span> <span class='slop-ngram-item'>took deep breath (210)</span> <span class='slop-ngram-item'>heart pounding chest (203)</span> <span class='slop-ngram-item'>looked eyes filled (201)</span> <span class='slop-ngram-item'>filled mix fear (98)</span> <span class='slop-ngram-item'>mind raced tried (96)</span> <span class='slop-ngram-item'>tried make sense (92)</span> <span class='slop-ngram-item'>raced tried make (89)</span> <span class='slop-ngram-item'>heart raced realized (89)</span> <span class='slop-ngram-item'>realized gravity situation (85)</span> <span class='slop-ngram-item'>challenges lay ahead (77)</span> <span class='slop-ngram-item'>face whatever challenges (69)</span> <span class='slop-ngram-item'>whatever challenges lay (69)</span> <span class='slop-ngram-item'>voice barely whisper (60)</span> <span class='slop-ngram-item'>would face whatever (59)</span> <span class='slop-ngram-item'>said voice barely (53)</span> <span class='slop-ngram-item'>piece together puzzle (41)</span> <span class='slop-ngram-item'>could help feel (37)</span> <span class='slop-ngram-item'>alex said voice (35)</span> <span class='slop-ngram-item'>help feel sense (26)</span> <span class='slop-ngram-item'>ready face whatever (22)</span> <span class='slop-ngram-item'>would change everything (20)</span> <span class='slop-ngram-item'>newfound sense purpose (18)</span> <span class='slop-ngram-item'>said voice trembling (17)</span> <span class='slop-ngram-item'>nodded eyes filled (16)</span> <span class='slop-ngram-item'>also knew could (16)</span> <span class='slop-ngram-item'>felt sense hope (13)</span> <span class='slop-ngram-item'>eyes never leaving (13)</span> <span class='slop-ngram-item'>eyes wide fear (13)</span>
</div>

##### openai/gpt-oss-20b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.814)</div>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.823)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.830)</div>
<div class='slop-similar'>openai/gpt-oss-120b (distance=0.840)</div>
<div class='slop-similar'>qwen/qwen3-4b (distance=0.840)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thudded</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>ember</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glimmered</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>quickening</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>drumbeat</span> <span class='slop-word-item'>steadied</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>reverberated</span> <span class='slop-word-item'>marlowe</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hargreaves</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>thickened</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>crate</span> <span class='slop-word-item'>faint</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>hallway</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>roared</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>exhaling</span> <span class='slop-word-item'>neon</span> <span class='slop-word-item'>lullaby</span> <span class='slop-word-item'>holographic</span> <span class='slop-word-item'>pulse</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>heartbeat</span> <span class='slop-word-item'>glow</span> <span class='slop-word-item'>bracelet</span> <span class='slop-word-item'>stared</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>could feel the weight (116)</span> <span class='slop-word-item'>could feel my pulse (45)</span> <span class='slop-word-item'>seemed to pulse in time (35)</span> <span class='slop-word-item'>said, her voice steady (24)</span> <span class='slop-word-item'>seemed to hold its breath (22)</span> <span class='slop-word-item'>faint, almost imperceptible (22)</span> <span class='slop-word-item'>said, his voice low (20)</span> <span class='slop-word-item'>said, her voice low (18)</span> <span class='slop-word-item'>air thick with the scent (16)</span> <span class='slop-word-item'>took a deep breath (15)</span> <span class='slop-word-item'>fingers tightened around (14)</span> <span class='slop-word-item'>said, voice low (13)</span> <span class='slop-word-item'>voice low and steady (13)</span> <span class='slop-word-item'>small, almost imperceptible (13)</span> <span class='slop-word-item'>said, his voice steady (12)</span> <span class='slop-word-item'>could hear the faint (12)</span> <span class='slop-word-item'>voice barely above a whisper (11)</span> <span class='slop-word-item'>hair pulled back (10)</span> <span class='slop-word-item'>scent of old paper (10)</span> <span class='slop-word-item'>voice barely audible (9)</span> <span class='slop-word-item'>took a step forward (8)</span> <span class='slop-word-item'>sound that seemed to echo (8)</span> <span class='slop-word-item'>felt a chill run (8)</span> <span class='slop-word-item'>chill run down her spine (8)</span> <span class='slop-word-item'>feel the weight of her own decision (7)</span> <span class='slop-word-item'>asked, her voice low (7)</span> <span class='slop-word-item'>matched the rhythm of her heart (7)</span> <span class='slop-word-item'>felt a strange sense (6)</span> <span class='slop-word-item'>mind already racing (6)</span> <span class='slop-word-item'>felt a shiver run (6)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>living thing (188)</span> <span class='slop-ngram-item'>feel weight (116)</span> <span class='slop-ngram-item'>let breath (111)</span> <span class='slop-ngram-item'>rhythm seemed (110)</span> <span class='slop-ngram-item'>voice low (95)</span> <span class='slop-ngram-item'>seemed pulse (94)</span> <span class='slop-ngram-item'>felt sense (85)</span> <span class='slop-ngram-item'>faint glow (76)</span> <span class='slop-ngram-item'>pulse living (72)</span> <span class='slop-ngram-item'>living rhythm (70)</span> <span class='slop-ngram-item'>steady rhythm (69)</span> <span class='slop-ngram-item'>voice steady (59)</span> <span class='slop-ngram-item'>felt weight (59)</span> <span class='slop-ngram-item'>low steady (55)</span> <span class='slop-ngram-item'>almost imperceptible (52)</span> <span class='slop-ngram-item'>eyes flickered (52)</span> <span class='slop-ngram-item'>eyes flicked (51)</span> <span class='slop-ngram-item'>key pocket (50)</span> <span class='slop-ngram-item'>seemed echo (50)</span> <span class='slop-ngram-item'>chest could (50)</span> <span class='slop-ngram-item'>feel pulse (49)</span> <span class='slop-ngram-item'>alive breathing (46)</span> <span class='slop-ngram-item'>holographic display (40)</span> <span class='slop-ngram-item'>steady pulse (36)</span> <span class='slop-ngram-item'>matched heartbeat (36)</span> <span class='slop-ngram-item'>pulse time (35)</span> <span class='slop-ngram-item'>house seemed (34)</span> <span class='slop-ngram-item'>heartbeat could (33)</span> <span class='slop-ngram-item'>low resonant (31)</span> <span class='slop-ngram-item'>matched rhythm (30)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could feel weight (116)</span> <span class='slop-ngram-item'>said voice low (57)</span> <span class='slop-ngram-item'>could feel pulse (48)</span> <span class='slop-ngram-item'>said voice steady (41)</span> <span class='slop-ngram-item'>seemed pulse time (35)</span> <span class='slop-ngram-item'>seemed hold breath (24)</span> <span class='slop-ngram-item'>chest could feel (24)</span> <span class='slop-ngram-item'>glow could feel (23)</span> <span class='slop-ngram-item'>faint almost imperceptible (22)</span> <span class='slop-ngram-item'>voice low steady (20)</span> <span class='slop-ngram-item'>heartbeat could feel (20)</span> <span class='slop-ngram-item'>air thick scent (19)</span> <span class='slop-ngram-item'>took deep breath (15)</span> <span class='slop-ngram-item'>asked voice low (14)</span> <span class='slop-ngram-item'>fingers tightened around (14)</span> <span class='slop-ngram-item'>small almost imperceptible (13)</span> <span class='slop-ngram-item'>hair pulled back (13)</span> <span class='slop-ngram-item'>could hear faint (13)</span> <span class='slop-ngram-item'>made stomach tighten (11)</span> <span class='slop-ngram-item'>closed eyes moment (11)</span> <span class='slop-ngram-item'>chill run spine (11)</span> <span class='slop-ngram-item'>voice barely whisper (11)</span> <span class='slop-ngram-item'>feel weight decision (10)</span> <span class='slop-ngram-item'>asked voice barely (10)</span> <span class='slop-ngram-item'>scent old paper (10)</span> <span class='slop-ngram-item'>rhythm matched heartbeat (9)</span> <span class='slop-ngram-item'>matched rhythm heart (9)</span> <span class='slop-ngram-item'>voice barely audible (9)</span> <span class='slop-ngram-item'>sound seemed echo (8)</span> <span class='slop-ngram-item'>palm could feel (8)</span>
</div>

##### qwen/qwen3-4b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>qwen/qwen3-30b-a3b (distance=0.754)</div>
<div class='slop-similar'>qwen/qwen3-14b (distance=0.755)</div>
<div class='slop-similar'>qwen/qwen3-32b (distance=0.781)</div>
<div class='slop-similar'>mistralai/Mistral-Small-3.2-24B-Instruct-2506 (distance=0.839)</div>
<div class='slop-similar'>openai/gpt-oss-20b (distance=0.840)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>outwit</span> <span class='slop-word-item'>unblinking</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>lira</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>townspeople</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>sneakers</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>skeptic</span> <span class='slop-word-item'>reverent</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>ethan</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>tightened</span> <span class='slop-word-item'>creak</span> <span class='slop-word-item'>hovered</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>thickened</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>floorboards</span> <span class='slop-word-item'>who&#x27;d</span> <span class='slop-word-item'>rippling</span> <span class='slop-word-item'>brushing</span> <span class='slop-word-item'>groaned</span>
</div>
<h4>Top Repetitive Phrases</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>like a living thing (68)</span> <span class='slop-word-item'>spent years trying (60)</span> <span class='slop-word-item'>voice was a whisper, but it carried (59)</span> <span class='slop-word-item'>whisper, but it carried the weight (56)</span> <span class='slop-word-item'>air felt heavier (51)</span> <span class='slop-word-item'>said, his voice low (45)</span> <span class='slop-word-item'>voice was a low, gravelly (43)</span> <span class='slop-word-item'>Elara’s breath caught (42)</span> <span class='slop-word-item'>air was thick with the scent (41)</span> <span class='slop-word-item'>making you feel like (33)</span> <span class='slop-word-item'>way it felt like (29)</span> <span class='slop-word-item'>spent her life chasing (29)</span> <span class='slop-word-item'>way it had *moved* like (29)</span> <span class='slop-word-item'>always been a place of secrets (28)</span> <span class='slop-word-item'>Elara’s heart pounded (28)</span> <span class='slop-word-item'>fingers tightened around (25)</span> <span class='slop-word-item'>presence was a constant, unspoken (24)</span> <span class='slop-word-item'>stepped closer, his voice (22)</span> <span class='slop-word-item'>like a second skin (21)</span> <span class='slop-word-item'>eyes flickered with something (21)</span> <span class='slop-word-item'>hands were clenched into fists (21)</span> <span class='slop-word-item'>air thick with the scent (19)</span> <span class='slop-word-item'>stepped closer, her voice (18)</span> <span class='slop-word-item'>casting long shadows (17)</span> <span class='slop-word-item'>could feel the *weight (17)</span> <span class='slop-word-item'>said, his voice trembling (17)</span> <span class='slop-word-item'>voice was quiet but firm (17)</span> <span class='slop-word-item'>place of secrets, of things (16)</span> <span class='slop-word-item'>said, her voice low (16)</span> <span class='slop-word-item'>voice cut through the tension (15)</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low (318)</span> <span class='slop-ngram-item'>thought way (261)</span> <span class='slop-ngram-item'>voice whisper (217)</span> <span class='slop-ngram-item'>way making (165)</span> <span class='slop-ngram-item'>presence constant (93)</span> <span class='slop-ngram-item'>voice quiet (90)</span> <span class='slop-ngram-item'>carried weight (89)</span> <span class='slop-ngram-item'>hands steady (78)</span> <span class='slop-ngram-item'>fingers brushing (75)</span> <span class='slop-ngram-item'>thick scent (75)</span> <span class='slop-ngram-item'>presence felt (75)</span> <span class='slop-ngram-item'>like heartbeat (72)</span> <span class='slop-ngram-item'>elara breath (70)</span> <span class='slop-ngram-item'>way seemed (69)</span> <span class='slop-ngram-item'>man spent (68)</span> <span class='slop-ngram-item'>felt heavier (66)</span> <span class='slop-ngram-item'>breath shallow (62)</span> <span class='slop-ngram-item'>test test (62)</span> <span class='slop-ngram-item'>whisper carried (60)</span> <span class='slop-ngram-item'>elara fingers (59)</span> <span class='slop-ngram-item'>place secrets (57)</span> <span class='slop-ngram-item'>presence way (54)</span> <span class='slop-ngram-item'>constant unspoken (54)</span> <span class='slop-ngram-item'>voice mix (53)</span> <span class='slop-ngram-item'>low gravelly (52)</span> <span class='slop-ngram-item'>way air (51)</span> <span class='slop-ngram-item'>voice sharp (51)</span> <span class='slop-ngram-item'>shimmering like (50)</span> <span class='slop-ngram-item'>jaw tightened (49)</span> <span class='slop-ngram-item'>like mirage (46)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low (74)</span> <span class='slop-ngram-item'>like living thing (68)</span> <span class='slop-ngram-item'>air thick scent (60)</span> <span class='slop-ngram-item'>voice whisper carried (60)</span> <span class='slop-ngram-item'>whisper carried weight (60)</span> <span class='slop-ngram-item'>spent years trying (60)</span> <span class='slop-ngram-item'>air felt heavier (51)</span> <span class='slop-ngram-item'>voice low gravelly (50)</span> <span class='slop-ngram-item'>elara breath caught (42)</span> <span class='slop-ngram-item'>presence constant unspoken (42)</span> <span class='slop-ngram-item'>stepped closer voice (40)</span> <span class='slop-ngram-item'>making feel like (36)</span> <span class='slop-ngram-item'>voice quiet firm (35)</span> <span class='slop-ngram-item'>way moved like (32)</span> <span class='slop-ngram-item'>voice low almost (32)</span> <span class='slop-ngram-item'>way felt like (31)</span> <span class='slop-ngram-item'>spent life chasing (30)</span> <span class='slop-ngram-item'>elara heart pounded (28)</span> <span class='slop-ngram-item'>always place secrets (28)</span> <span class='slop-ngram-item'>hands clenched fists (28)</span> <span class='slop-ngram-item'>voice low measured (26)</span> <span class='slop-ngram-item'>fingers tightened around (25)</span> <span class='slop-ngram-item'>could feel weight (24)</span> <span class='slop-ngram-item'>said voice trembling (23)</span> <span class='slop-ngram-item'>eyes flickered something (21)</span> <span class='slop-ngram-item'>said voice quieter (21)</span> <span class='slop-ngram-item'>like second skin (21)</span> <span class='slop-ngram-item'>shadows seemed stretch (20)</span> <span class='slop-ngram-item'>stepped forward voice (18)</span> <span class='slop-ngram-item'>place secrets things (17)</span>
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
