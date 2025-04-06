// longform_creative_writing.js

// --- New Leaderboard Data ---
let leaderboardDataLongformV3 = `model_name,overall_score_100,avg_chapter_length,vocab_complexity,slop_score,repetition_score,chapter1_avg,chapter2_avg,chapter3_avg,chapter4_avg,chapter5_avg,chapter6_avg,chapter7_avg,chapter8_avg,final_judgement_avg
*gemini-2.5-pro-preview-03-25,80.2,6544,46.63,40.40,7.3,16.58,16.75,16.34,16.58,16.36,16.35,16.12,15.49,15.44
*deepseek-ai/DeepSeek-V3-0324,78.1,4131,19.39,47.40,11.6,16.64,16.26,16.78,16.55,16.04,15.57,14.02,15.63,14.92
claude-3-7-sonnet-20250219,77.6,9380,47.17,22.60,6.1,16.68,16.18,16.18,15.72,15.04,14.31,14.54,15.38,15.19
*chatgpt-4o-latest-2025-03-27,76.8,5399,18.53,33.91,9.4,16.51,16.28,15.92,16.10,16.03,15.15,15.61,15.71,15.26
deepseek-ai/DeepSeek-R1,74.6,4035,23.66,55.12,8.5,15.56,16.08,15.34,15.20,16.24,15.57,15.37,16.25,15.17
*quasar-alpha,73.7,6722,21.97,46.72,10.8,16.51,15.42,16.01,16.09,15.63,15.11,15.20,14.20,14.80
qwen/qwq-32b,60.8,5320,25.21,63.54,11.1,15.44,14.29,14.56,12.05,12.84,12.28,11.68,10.85,13.61
google/gemma-3-27b-it,59.3,5367,43.52,61.49,17.8,15.23,14.10,12.67,11.89,11.70,11.81,8.97,8.58,13.89
gpt-4o-mini,55.2,7855,43.04,63.58,18.3,13.52,11.98,11.07,11.51,11.52,10.39,9.29,9.46,11.56
gemini-2.0-flash-001,55.1,4915,31.84,70.16,21.0,14.18,12.74,10.72,11.68,10.64,10.24,9.48,9.27,11.69
RekaAI/reka-flash-3,51.8,4531,24.17,61.65,10.7,13.81,14.21,11.32,11.21,9.79,8.35,8.68,9.87,11.21
google/gemma-3-4b-it,47.3,4244,59.42,75.18,21.1,13.12,10.93,10.59,9.85,8.56,8.51,7.81,8.32,11.76
*meta-llama/Llama-4-Maverick-17B-128E-Instruct,34.4,7989,58.54,36.98,103.5,9.87,8.98,7.84,7.79,3.80,5.05,5.82,2.66,7.36
*meta-llama/Llama-4-Scout-17B-16E-Instruct,32.4,5985,20.74,52.74,57.4,9.72,7.15,6.69,5.80,4.52,3.86,3.13,4.19,6.39`;


// --- New Slop Data ---
const slopData = `##### gemini-2.5-pro-preview-03-25
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.835)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.842)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.864)</div>
<div class='slop-similar'>quasar-alpha (distance=0.865)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.868)</div>
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

##### deepseek-ai/DeepSeek-V3-0324
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.755)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.772)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.799)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.805)</div>
<div class='slop-similar'>quasar-alpha (distance=0.823)</div>
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

##### claude-3-7-sonnet-20250219
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.865)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.868)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.868)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.876)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.883)</div>
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

##### chatgpt-4o-latest-2025-03-27
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.805)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.838)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.848)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.850)</div>
<div class='slop-similar'>quasar-alpha (distance=0.855)</div>
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

##### deepseek-ai/DeepSeek-R1
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.712)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.752)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.755)</div>
<div class='slop-similar'>quasar-alpha (distance=0.812)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.850)</div>
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

##### quasar-alpha
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.812)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.823)</div>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.824)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.833)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.855)</div>
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

##### qwen/qwq-32b
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>RekaAI/reka-flash-3 (distance=0.723)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.752)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.799)</div>
<div class='slop-similar'>quasar-alpha (distance=0.833)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.848)</div>
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
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.714)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.753)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.835)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.845)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.876)</div>
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

##### gpt-4o-mini
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.826)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.845)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.851)</div>
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.876)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.881)</div>
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
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.803)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.826)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.842)</div>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.851)</div>
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

##### RekaAI/reka-flash-3
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>deepseek-ai/DeepSeek-R1 (distance=0.712)</div>
<div class='slop-similar'>qwen/qwq-32b (distance=0.723)</div>
<div class='slop-similar'>deepseek-ai/DeepSeek-V3-0324 (distance=0.772)</div>
<div class='slop-similar'>quasar-alpha (distance=0.824)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.838)</div>
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

##### google/gemma-3-4b-it
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.753)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.803)</div>
<div class='slop-similar'>gemini-2.5-pro-preview-03-25 (distance=0.864)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.891)</div>
<div class='slop-similar'>claude-3-7-sonnet-20250219 (distance=0.909)</div>
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
<div class='slop-similar'>meta-llama/Llama-4-Scout-17B-16E-Instruct (distance=0.698)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.851)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.851)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.881)</div>
<div class='slop-similar'>google/gemma-3-4b-it (distance=0.915)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>explorethe</span> <span class='slop-word-item'>theto</span> <span class='slop-word-item'>thelthe</span> <span class='slop-word-item'>thetthe</span> <span class='slop-word-item'>exploreing</span> <span class='slop-word-item'>somethe</span> <span class='slop-word-item'>thethethe</span> <span class='slop-word-item'>tothe</span> <span class='slop-word-item'>thethe</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>andthe</span> <span class='slop-word-item'>uncovering</span> <span class='slop-word-item'>complexities</span> <span class='slop-word-item'>uncover</span> <span class='slop-word-item'>bethe</span> <span class='slop-word-item'>explore</span> <span class='slop-word-item'>implications</span> <span class='slop-word-item'>athe</span> <span class='slop-word-item'>unfolding</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>intricate</span> <span class='slop-word-item'>protagonist</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>mysterious</span> <span class='slop-word-item'>exploring</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>compelling</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>brainstorming</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>nuanced</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>ideas</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>emily</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>prompt</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>intently</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>explore explore (3460)</span> <span class='slop-ngram-item'>tothe tothe (1237)</span> <span class='slop-ngram-item'>explore create (772)</span> <span class='slop-ngram-item'>create explore (735)</span> <span class='slop-ngram-item'>exploring exploring (566)</span> <span class='slop-ngram-item'>protagonist protagonist (255)</span> <span class='slop-ngram-item'>uncover uncovering (219)</span> <span class='slop-ngram-item'>felt sense (142)</span> <span class='slop-ngram-item'>said voice (118)</span> <span class='slop-ngram-item'>compelling compelling (84)</span> <span class='slop-ngram-item'>create compelling (77)</span> <span class='slop-ngram-item'>mind racing (64)</span> <span class='slop-ngram-item'>eyes fixed (64)</span> <span class='slop-ngram-item'>feeling sense (62)</span> <span class='slop-ngram-item'>story story (56)</span> <span class='slop-ngram-item'>sense unease (55)</span> <span class='slop-ngram-item'>emily felt (53)</span> <span class='slop-ngram-item'>tothe explore (52)</span> <span class='slop-ngram-item'>explore tothe (51)</span> <span class='slop-ngram-item'>voice low (49)</span> <span class='slop-ngram-item'>compelling world (48)</span> <span class='slop-ngram-item'>shake feeling (45)</span> <span class='slop-ngram-item'>run spine (44)</span> <span class='slop-ngram-item'>compelling explore (43)</span> <span class='slop-ngram-item'>could shake (42)</span> <span class='slop-ngram-item'>could help (40)</span> <span class='slop-ngram-item'>felt like (38)</span> <span class='slop-ngram-item'>protagonist exploring (36)</span> <span class='slop-ngram-item'>shiver run (35)</span> <span class='slop-ngram-item'>voice barely (34)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>explore explore explore (3017)</span> <span class='slop-ngram-item'>explore explore create (357)</span> <span class='slop-ngram-item'>could shake feeling (38)</span> <span class='slop-ngram-item'>emily felt sense (38)</span> <span class='slop-ngram-item'>compelling compelling compelling (37)</span> <span class='slop-ngram-item'>create compelling explore (36)</span> <span class='slop-ngram-item'>shiver run spine (35)</span> <span class='slop-ngram-item'>felt shiver run (33)</span> <span class='slop-ngram-item'>voice barely whisper (31)</span> <span class='slop-ngram-item'>mind racing possibilities (28)</span> <span class='slop-ngram-item'>took deep breath (26)</span> <span class='slop-ngram-item'>said voice low (26)</span> <span class='slop-ngram-item'>felt sense unease (23)</span> <span class='slop-ngram-item'>explore create compelling (23)</span> <span class='slop-ngram-item'>nodded feeling sense (22)</span> <span class='slop-ngram-item'>could help feel (18)</span> <span class='slop-ngram-item'>said voice barely (18)</span> <span class='slop-ngram-item'>said voice firm (17)</span> <span class='slop-ngram-item'>smile grew wider (16)</span> <span class='slop-ngram-item'>days turned weeks (15)</span> <span class='slop-ngram-item'>scent blooming flowers (15)</span> <span class='slop-ngram-item'>felt sense connection (15)</span> <span class='slop-ngram-item'>heart skipped beat (14)</span> <span class='slop-ngram-item'>growing sense unease (14)</span> <span class='slop-ngram-item'>help feel sense (13)</span> <span class='slop-ngram-item'>mind racing implications (13)</span> <span class='slop-ngram-item'>ready face whatever (13)</span> <span class='slop-ngram-item'>smiled feeling sense (13)</span> <span class='slop-ngram-item'>eyes locked onto (13)</span> <span class='slop-ngram-item'>said voice filled (12)</span>
</div>

##### meta-llama/Llama-4-Scout-17B-16E-Instruct
<h4>Most Similar To:</h4>
<div class='slop-similar-section'>
<div class='slop-similar'>meta-llama/Llama-4-Maverick-17B-128E-Instruct (distance=0.698)</div>
<div class='slop-similar'>gemini-2.0-flash-001 (distance=0.851)</div>
<div class='slop-similar'>gpt-4o-mini (distance=0.876)</div>
<div class='slop-similar'>google/gemma-3-27b-it (distance=0.890)</div>
<div class='slop-similar'>chatgpt-4o-latest-2025-03-27 (distance=0.916)</div>
</div>

<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>unease</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>steeled</span> <span class='slop-word-item'>sneered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>menacing</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>threat</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>reassured</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>uncover</span> <span class='slop-word-item'>lurking</span> <span class='slop-word-item'>twisting</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>ticked</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>louder</span> <span class='slop-word-item'>darkness</span> <span class='slop-word-item'>indecision</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>nightstand</span> <span class='slop-word-item'>alex</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>emma</span> <span class='slop-word-item'>pulsing</span> <span class='slop-word-item'>stumbled</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>cusp</span> <span class='slop-word-item'>oppressive</span> <span class='slop-word-item'>seemed</span> <span class='slop-word-item'>emanating</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>olivia</span> <span class='slop-word-item'>whisper</span> <span class='slop-word-item'>snorted</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>gun sound (587)</span> <span class='slop-ngram-item'>felt sense (367)</span> <span class='slop-ngram-item'>ready see (209)</span> <span class='slop-ngram-item'>see ready (181)</span> <span class='slop-ngram-item'>seemed grow (178)</span> <span class='slop-ngram-item'>said voice (166)</span> <span class='slop-ngram-item'>ready ready (142)</span> <span class='slop-ngram-item'>sense unease (141)</span> <span class='slop-ngram-item'>voice low (120)</span> <span class='slop-ngram-item'>could shake (116)</span> <span class='slop-ngram-item'>shake feeling (115)</span> <span class='slop-ngram-item'>act fast (90)</span> <span class='slop-ngram-item'>knew act (87)</span> <span class='slop-ngram-item'>darkness seemed (86)</span> <span class='slop-ngram-item'>eyes locked (78)</span> <span class='slop-ngram-item'>alex felt (74)</span> <span class='slop-ngram-item'>sense determination (74)</span> <span class='slop-ngram-item'>asked voice (74)</span> <span class='slop-ngram-item'>feel sense (73)</span> <span class='slop-ngram-item'>feeling watched (71)</span> <span class='slop-ngram-item'>seemed sense (71)</span> <span class='slop-ngram-item'>lot things (70)</span> <span class='slop-ngram-item'>get bottom (70)</span> <span class='slop-ngram-item'>lay ahead (63)</span> <span class='slop-ngram-item'>life change (63)</span> <span class='slop-ngram-item'>end line (61)</span> <span class='slop-ngram-item'>sense trepidation (59)</span> <span class='slop-ngram-item'>sense wonder (56)</span> <span class='slop-ngram-item'>eyes fixed (56)</span> <span class='slop-ngram-item'>eyes seemed (55)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ready see ready (171)</span> <span class='slop-ngram-item'>see ready see (118)</span> <span class='slop-ngram-item'>could shake feeling (110)</span> <span class='slop-ngram-item'>ready ready ready (84)</span> <span class='slop-ngram-item'>knew act fast (81)</span> <span class='slop-ngram-item'>said voice low (77)</span> <span class='slop-ngram-item'>felt sense unease (77)</span> <span class='slop-ngram-item'>shake feeling watched (70)</span> <span class='slop-ngram-item'>felt sense determination (69)</span> <span class='slop-ngram-item'>alex felt sense (59)</span> <span class='slop-ngram-item'>voice end line (55)</span> <span class='slop-ngram-item'>mind kept wandering (50)</span> <span class='slop-ngram-item'>kept wandering back (49)</span> <span class='slop-ngram-item'>silence seemed grow (49)</span> <span class='slop-ngram-item'>seemed grow louder (48)</span> <span class='slop-ngram-item'>took deep breath (47)</span> <span class='slop-ngram-item'>sense unease sense (45)</span> <span class='slop-ngram-item'>voice barely whisper (44)</span> <span class='slop-ngram-item'>felt sense trepidation (42)</span> <span class='slop-ngram-item'>darkness seemed close (40)</span> <span class='slop-ngram-item'>seemed close around (40)</span> <span class='slop-ngram-item'>shiver run spine (37)</span> <span class='slop-ngram-item'>going get bottom (37)</span> <span class='slop-ngram-item'>could help feel (36)</span> <span class='slop-ngram-item'>felt shiver run (35)</span> <span class='slop-ngram-item'>help feel sense (33)</span> <span class='slop-ngram-item'>said voice firm (33)</span> <span class='slop-ngram-item'>see ready ready (33)</span> <span class='slop-ngram-item'>ready ready see (33)</span> <span class='slop-ngram-item'>seemed sense unease (33)</span>
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
 * Creates a minimal inline sparkline (tiny line chart) for the 8 chapter scores.
 * The x-axis is evenly spaced, and the y-axis scales from 0 (bottom) to the highest chapter score (top).
 * It also computes the absolute slope (rounded to 3 decimals) between the first and last chapter.
 * In dark mode, the line is white; otherwise, it is black.
 *
 * @param {number[]} scores Array of 8 numeric chapter scores
 * @returns {string} Inline HTML markup with the SVG sparkline and the slope value
 */
function createDegradationSparkline(scores) {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const strokeColor = isDarkMode ? "white" : "black";

  // Use only the first 8 scores
  const data = scores.slice(0, 8).map(s => parseFloat(s) || 0);
  
  // Define dimensions
  const w = 60, h = 20;
  
  // Determine the maximum value among the chapter scores (for y scaling)
  const maxVal = Math.max(...data) || 1; // prevent division by zero
  
  // Calculate x-axis step (evenly spaced for 8 points)
  const stepX = (data.length > 1) ? (w / (data.length - 1)) : w;
  
  // Build the SVG path (x is evenly spaced; y scales from h (0 value) to 0 (maxVal))
  let path = "";
  data.forEach((val, i) => {
    const x = i * stepX;
    const y = h - ((val / maxVal) * h);
    path += (i === 0) ? `M${x},${y}` : ` L${x},${y}`;
  });
  
  // Compute slope as (last - first) divided by (number of intervals), then take absolute value
  let slope = (data[data.length - 1] - data[0]) / (data.length - 1);
  slope = Math.abs(slope).toFixed(3);
  
  // Construct the SVG and append the slope value after it, with a bit of spacing
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"
         viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="sparkline-svg">
      <path d="${path}" fill="none" stroke="${strokeColor}" stroke-width="1" class="sparkline-path" />
    </svg>
  `;
  
  return `<div class="sparkline-container" style="display: inline-flex; align-items: center;">
    ${svg}
    <span class="sparkline-slope" style="margin-left: 16px;">${slope}</span>
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
    const chapterScores = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8].map(x => parseFloat(x) || 0);
    // Compute degradation as absolute slope from first to last chapter, divided by number of intervals (7)
    let degradationVal = Math.abs((chapterScores[chapterScores.length - 1] - chapterScores[0]) / (chapterScores.length - 1));

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
