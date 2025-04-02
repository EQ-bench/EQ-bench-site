// longform_creative_writing.js

// --- New Leaderboard Data ---
let leaderboardDataLongformV3 = `model_name,overall_score_100,avg_chapter_length,vocab_complexity,slop_score,repetition_score
claude-3-7-sonnet-20250219,77.6,9380,47.17,22.60,856
chatgpt-4o-latest-2025-03-27,76.8,5399,18.53,33.91,840
deepseek-ai/DeepSeek-R1,74.6,4035,23.66,55.12,509
qwen/qwq-32b,60.8,5320,25.21,63.54,889
google/gemma-3-27b-it,59.3,5367,43.52,61.49,1505
gpt-4o-mini,55.2,7855,43.04,63.58,2348
gemini-2.0-flash-001,55.1,4915,31.84,70.16,1706
google/gemma-3-4b-it,47.3,4244,59.42,75.18,1397`;


// --- New Slop Data ---
const slopData = `##### claude-3-7-sonnet-20250219
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>mycomorphs</span> <span class='slop-word-item'>irongate</span> <span class='slop-word-item'>tieflings</span> <span class='slop-word-item'>mycomorph</span> <span class='slop-word-item'>llynbryn</span> <span class='slop-word-item'>emberfall</span> <span class='slop-word-item'>imara</span> <span class='slop-word-item'>seren</span> <span class='slop-word-item'>ecclesall</span> <span class='slop-word-item'>thunderclaps</span> <span class='slop-word-item'>tiefling</span> <span class='slop-word-item'>unisphere</span> <span class='slop-word-item'>bragi</span> <span class='slop-word-item'>jingled</span> <span class='slop-word-item'>terranova</span> <span class='slop-word-item'>redwater</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>handholds</span> <span class='slop-word-item'>kash</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>venn</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>thornfield</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>blackmailer</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>eliza</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crawlspace</span> <span class='slop-word-item'>parveen</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>harlow</span> <span class='slop-word-item'>zoey</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>newfield</span> <span class='slop-word-item'>floorboard</span> <span class='slop-word-item'>tumbleweed</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>jess</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>gareth</span> <span class='slop-word-item'>helix</span> <span class='slop-word-item'>kroll</span>
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
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>sereya</span> <span class='slop-word-item'>elari</span> <span class='slop-word-item'>vexra</span> <span class='slop-word-item'>irongate</span> <span class='slop-word-item'>langfords</span> <span class='slop-word-item'>earthgov</span> <span class='slop-word-item'>carys</span> <span class='slop-word-item'>tarin</span> <span class='slop-word-item'>eleri</span> <span class='slop-word-item'>medbay</span> <span class='slop-word-item'>amari</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>asha</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>calliope</span> <span class='slop-word-item'>zane</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>thudding</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hestia</span> <span class='slop-word-item'>firelight</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>crouched</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hermes</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>langford</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>ridgeway</span> <span class='slop-word-item'>layla</span> <span class='slop-word-item'>sidearm</span> <span class='slop-word-item'>stared</span> <span class='slop-word-item'>rusted</span>
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
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>vexira</span> <span class='slop-word-item'>sporeling</span> <span class='slop-word-item'>grimsdon</span> <span class='slop-word-item'>holoscreen</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>eira</span> <span class='slop-word-item'>jarek</span> <span class='slop-word-item'>seraphine</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>hephaestus</span> <span class='slop-word-item'>jessa</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>vonn</span> <span class='slop-word-item'>jangled</span> <span class='slop-word-item'>dampeners</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>garrick</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>selene</span> <span class='slop-word-item'>tarr</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>addy</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>screeched</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>zephyr</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>panted</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>aether</span> <span class='slop-word-item'>writhed</span> <span class='slop-word-item'>mycelium</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count (38)</span> <span class='slop-ngram-item'>count note (23)</span> <span class='slop-ngram-item'>phone buzzed (16)</span> <span class='slop-ngram-item'>stepped closer (15)</span> <span class='slop-ngram-item'>would expand (15)</span> <span class='slop-ngram-item'>chapter would (15)</span> <span class='slop-ngram-item'>words chapter (13)</span> <span class='slop-ngram-item'>throat tightened (10)</span> <span class='slop-ngram-item'>bell jangled (10)</span> <span class='slop-ngram-item'>library window (9)</span> <span class='slop-ngram-item'>lila said (9)</span> <span class='slop-ngram-item'>reach words (9)</span> <span class='slop-ngram-item'>pressed palm (8)</span> <span class='slop-ngram-item'>glowed faintly (8)</span> <span class='slop-ngram-item'>voice cracked (8)</span> <span class='slop-ngram-item'>breath hitched (8)</span> <span class='slop-ngram-item'>six months (8)</span> <span class='slop-ngram-item'>stood doorway (8)</span> <span class='slop-ngram-item'>reach eyes (7)</span> <span class='slop-ngram-item'>arms crossed (7)</span> <span class='slop-ngram-item'>toward exit (7)</span> <span class='slop-ngram-item'>pressed forehead (7)</span> <span class='slop-ngram-item'>glowing like (7)</span> <span class='slop-ngram-item'>outside rain (7)</span> <span class='slop-ngram-item'>hands shook (7)</span> <span class='slop-ngram-item'>stepped forward (7)</span> <span class='slop-ngram-item'>kael said (7)</span> <span class='slop-ngram-item'>kael spat (7)</span> <span class='slop-ngram-item'>said quietly (7)</span> <span class='slop-ngram-item'>smelled like (6)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count note (23)</span> <span class='slop-ngram-item'>words chapter would (13)</span> <span class='slop-ngram-item'>chapter would expand (8)</span> <span class='slop-ngram-item'>smile reach eyes (6)</span> <span class='slop-ngram-item'>phone buzzed unknown (5)</span> <span class='slop-ngram-item'>buzzed unknown number (5)</span> <span class='slop-ngram-item'>laugh broken thing (3)</span> <span class='slop-ngram-item'>look like hell (3)</span> <span class='slop-ngram-item'>emergency lights bathed (3)</span> <span class='slop-ngram-item'>tears cutting grime (3)</span> <span class='slop-ngram-item'>air reeked burnt (3)</span> <span class='slop-ngram-item'>count note chapter (3)</span> <span class='slop-ngram-item'>tasted like ash (3)</span> <span class='slop-ngram-item'>snapped book shut (3)</span> <span class='slop-ngram-item'>whispered voice like (2)</span> <span class='slop-ngram-item'>jerked back heart (2)</span> <span class='slop-ngram-item'>laughed sound like (2)</span> <span class='slop-ngram-item'>casting jagged shadows (2)</span> <span class='slop-ngram-item'>smelled like burning (2)</span> <span class='slop-ngram-item'>fingers danced across (2)</span> <span class='slop-ngram-item'>name hung like (2)</span> <span class='slop-ngram-item'>go home move (2)</span> <span class='slop-ngram-item'>split like overripe (2)</span> <span class='slop-ngram-item'>like overripe fruit (2)</span> <span class='slop-ngram-item'>first time years (2)</span> <span class='slop-ngram-item'>rain lashed windows (2)</span> <span class='slop-ngram-item'>shards skittered across (2)</span> <span class='slop-ngram-item'>count note condensed (2)</span> <span class='slop-ngram-item'>count note expanded (2)</span> <span class='slop-ngram-item'>note expanded words (2)</span>
</div>

##### qwen/qwq-32b
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>kaelor</span> <span class='slop-word-item'>malachar</span> <span class='slop-word-item'>vosses</span> <span class='slop-word-item'>blackthorns</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>nexa</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>megastructure</span> <span class='slop-word-item'>overmind</span> <span class='slop-word-item'>jarek</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>medbay</span> <span class='slop-word-item'>cheroot</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>blackthorn</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>blared</span> <span class='slop-word-item'>carmela</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>nessa</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>stim</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>shuddered</span> <span class='slop-word-item'>locket</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>paled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>noddy</span> <span class='slop-word-item'>hazel</span> <span class='slop-word-item'>pocketed</span> <span class='slop-word-item'>knelt</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>voss</span>
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
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>torvin</span> <span class='slop-word-item'>aberdyfi</span> <span class='slop-word-item'>aethel</span> <span class='slop-word-item'>moonshade</span> <span class='slop-word-item'>irongate</span> <span class='slop-word-item'>kryll</span> <span class='slop-word-item'>lysandra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>bronwen</span> <span class='slop-word-item'>anglerfish</span> <span class='slop-word-item'>veridian</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>tendril</span> <span class='slop-word-item'>harrisons</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>martel</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>maisie</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>argonaut</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>oberon</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>bjorn</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>aftershocks</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>hermes</span> <span class='slop-word-item'>grimshaw</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>furrowed</span>
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
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>zarn</span> <span class='slop-word-item'>irongate</span> <span class='slop-word-item'>lysandra</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>tiefling</span> <span class='slop-word-item'>blackwoods</span> <span class='slop-word-item'>furrowing</span> <span class='slop-word-item'>garrick</span> <span class='slop-word-item'>arabella</span> <span class='slop-word-item'>juno</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>mira</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>twinkled</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>rook</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>zephyr</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>loomed</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>milo</span> <span class='slop-word-item'>busied</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>chimed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>exclaimed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>underbrush</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>lacing</span> <span class='slop-word-item'>clara</span> <span class='slop-word-item'>ares</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>athena</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>jenna</span> <span class='slop-word-item'>darted</span>
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
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>k&#x27;tharr</span> <span class='slop-word-item'>irongate</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>omnicorp</span> <span class='slop-word-item'>eira</span> <span class='slop-word-item'>megastructure</span> <span class='slop-word-item'>rostova</span> <span class='slop-word-item'>jaxx</span> <span class='slop-word-item'>grimshaw</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>persephone</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>gruffydd</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>ashworth</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>griselda</span> <span class='slop-word-item'>heckler</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>eisteddfod</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>flinched</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>asher</span> <span class='slop-word-item'>contorted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>streetlight</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>silhouetted</span> <span class='slop-word-item'>drifter</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>ellie</span> <span class='slop-word-item'>gasped</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>crevice</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>vera</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (236)</span> <span class='slop-ngram-item'>eyes filled (71)</span> <span class='slop-ngram-item'>voice barely (49)</span> <span class='slop-ngram-item'>voice trembling (49)</span> <span class='slop-ngram-item'>asked voice (48)</span> <span class='slop-ngram-item'>heart pounding (39)</span> <span class='slop-ngram-item'>voice filled (37)</span> <span class='slop-ngram-item'>voice low (37)</span> <span class='slop-ngram-item'>kai said (34)</span> <span class='slop-ngram-item'>shook head (30)</span> <span class='slop-ngram-item'>deep breath (28)</span> <span class='slop-ngram-item'>pounding chest (28)</span> <span class='slop-ngram-item'>looked eyes (27)</span> <span class='slop-ngram-item'>barely whisper (26)</span> <span class='slop-ngram-item'>closed eyes (26)</span> <span class='slop-ngram-item'>took deep (26)</span> <span class='slop-ngram-item'>barely audible (24)</span> <span class='slop-ngram-item'>eyes fixed (24)</span> <span class='slop-ngram-item'>face etched (24)</span> <span class='slop-ngram-item'>air thick (23)</span> <span class='slop-ngram-item'>eva said (23)</span> <span class='slop-ngram-item'>filled mixture (22)</span> <span class='slop-ngram-item'>something else (22)</span> <span class='slop-ngram-item'>face pale (21)</span> <span class='slop-ngram-item'>whispered voice (21)</span> <span class='slop-ngram-item'>said eyes (18)</span> <span class='slop-ngram-item'>felt surge (18)</span> <span class='slop-ngram-item'>alright said (18)</span> <span class='slop-ngram-item'>said softly (18)</span> <span class='slop-ngram-item'>felt like (17)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>heart pounding chest (27)</span> <span class='slop-ngram-item'>said voice filled (26)</span> <span class='slop-ngram-item'>took deep breath (26)</span> <span class='slop-ngram-item'>voice barely whisper (25)</span> <span class='slop-ngram-item'>said voice trembling (25)</span> <span class='slop-ngram-item'>voice barely audible (24)</span> <span class='slop-ngram-item'>said voice barely (23)</span> <span class='slop-ngram-item'>said voice low (23)</span> <span class='slop-ngram-item'>looked eyes filled (17)</span> <span class='slop-ngram-item'>eyes filled mixture (16)</span> <span class='slop-ngram-item'>kai said voice (13)</span> <span class='slop-ngram-item'>air thick smell (12)</span> <span class='slop-ngram-item'>could shake feeling (12)</span> <span class='slop-ngram-item'>senses high alert (12)</span> <span class='slop-ngram-item'>elara said voice (11)</span> <span class='slop-ngram-item'>face pale drawn (9)</span> <span class='slop-ngram-item'>whispered voice barely (9)</span> <span class='slop-ngram-item'>said voice cold (9)</span> <span class='slop-ngram-item'>eva felt surge (8)</span> <span class='slop-ngram-item'>said finally voice (8)</span> <span class='slop-ngram-item'>stared mind reeling (7)</span> <span class='slop-ngram-item'>asked voice trembling (7)</span> <span class='slop-ngram-item'>face etched concern (7)</span> <span class='slop-ngram-item'>said trying sound (7)</span> <span class='slop-ngram-item'>hesitated eyes darting (7)</span> <span class='slop-ngram-item'>filled mixture sadness (6)</span> <span class='slop-ngram-item'>said voice laced (6)</span> <span class='slop-ngram-item'>said voice firm (6)</span> <span class='slop-ngram-item'>said voice pleading (6)</span> <span class='slop-ngram-item'>eyes darting nervously (6)</span>
</div>

##### google/gemma-3-4b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>havenwood</span> <span class='slop-word-item'>aberdydd</span> <span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>blackwoods</span> <span class='slop-word-item'>eira</span> <span class='slop-word-item'>bellweather</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>megastructures</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>ashworth</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>recoiled</span> <span class='slop-word-item'>bioluminescence</span> <span class='slop-word-item'>cassian</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>krill</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>rourke</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>yellowed</span> <span class='slop-word-item'>sprig</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>purists</span> <span class='slop-word-item'>dampness</span> <span class='slop-word-item'>grimshaw</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>poring</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>drifter</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>amplifying</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>resonating</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>marius</span> <span class='slop-word-item'>spores</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice (194)</span> <span class='slop-ngram-item'>voice barely (48)</span> <span class='slop-ngram-item'>voice laced (34)</span> <span class='slop-ngram-item'>voice filled (33)</span> <span class='slop-ngram-item'>blackwood manor (33)</span> <span class='slop-ngram-item'>voice low (32)</span> <span class='slop-ngram-item'>felt strange (29)</span> <span class='slop-ngram-item'>silas blackwood (29)</span> <span class='slop-ngram-item'>barely audible (28)</span> <span class='slop-ngram-item'>sense unease (26)</span> <span class='slop-ngram-item'>growing sense (25)</span> <span class='slop-ngram-item'>asked voice (24)</span> <span class='slop-ngram-item'>replied voice (23)</span> <span class='slop-ngram-item'>rain continued (23)</span> <span class='slop-ngram-item'>barely whisper (22)</span> <span class='slop-ngram-item'>blackwood house (22)</span> <span class='slop-ngram-item'>almost imperceptible (21)</span> <span class='slop-ngram-item'>voice strained (21)</span> <span class='slop-ngram-item'>carefully constructed (20)</span> <span class='slop-ngram-item'>devoid emotion (19)</span> <span class='slop-ngram-item'>continued fall (18)</span> <span class='slop-ngram-item'>small almost (17)</span> <span class='slop-ngram-item'>noticed small (17)</span> <span class='slop-ngram-item'>silas said (16)</span> <span class='slop-ngram-item'>whispered voice (16)</span> <span class='slop-ngram-item'>noticed something (16)</span> <span class='slop-ngram-item'>geometric patterns (16)</span> <span class='slop-ngram-item'>profound sense (16)</span> <span class='slop-ngram-item'>blackwood family (16)</span> <span class='slop-ngram-item'>voice devoid (16)</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely audible (26)</span> <span class='slop-ngram-item'>said voice low (24)</span> <span class='slop-ngram-item'>said voice barely (22)</span> <span class='slop-ngram-item'>voice barely whisper (22)</span> <span class='slop-ngram-item'>said voice filled (18)</span> <span class='slop-ngram-item'>rain continued fall (18)</span> <span class='slop-ngram-item'>said voice laced (15)</span> <span class='slop-ngram-item'>silas said voice (14)</span> <span class='slop-ngram-item'>voice devoid emotion (12)</span> <span class='slop-ngram-item'>small almost imperceptible (11)</span> <span class='slop-ngram-item'>said voice strained (10)</span> <span class='slop-ngram-item'>growing sense unease (10)</span> <span class='slop-ngram-item'>small intricately carved (10)</span> <span class='slop-ngram-item'>growing sense dread (9)</span> <span class='slop-ngram-item'>felt strange sense (9)</span> <span class='slop-ngram-item'>elias said voice (8)</span> <span class='slop-ngram-item'>continued fall washing (8)</span> <span class='slop-ngram-item'>smile playing lips (8)</span> <span class='slop-ngram-item'>faint almost imperceptible (7)</span> <span class='slop-ngram-item'>chilling realization dawned (7)</span> <span class='slop-ngram-item'>voice laced hint (7)</span> <span class='slop-ngram-item'>said voice firm (7)</span> <span class='slop-ngram-item'>knew chilling certainty (7)</span> <span class='slop-ngram-item'>said voice trembling (7)</span> <span class='slop-ngram-item'>said voice devoid (7)</span> <span class='slop-ngram-item'>persistent grey drizzle (6)</span> <span class='slop-ngram-item'>noticed subtle shift (6)</span> <span class='slop-ngram-item'>voice filled chilling (6)</span> <span class='slop-ngram-item'>noticed small almost (6)</span> <span class='slop-ngram-item'>things best left (6)</span>
</div>`;


// --- Global Scope Variables ---
let lastSortedScoreColumn = 4; // Default Score (column index 4)
// --- End Global Scope Variables ---

// --- Dark Mode / Theme / Email Functions (Keep as is) ---
function setupDarkModeToggle() {
  var toggle = document.getElementById('darkModeToggle');
  var label = document.getElementById('toggleLabel');
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
     if ($.fn.DataTable.isDataTable('#leaderboard')) {
        $('#leaderboard').DataTable().draw(false); // Use draw(false) to prevent reset page
     }
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

// --- Slop Profile Parsing (Keep as is) ---
function parseSlopData(modelName) {
  if (!slopData || !modelName) {
      return "<p><i>Slop profile data not available.</i></p>";
  }
  // Escape modelName for regex safety, especially for names with special chars
  const escapedModelName = modelName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^#####\\s*${escapedModelName}\\s*$`, 'm'); // Match start of line, model name, end of line
  const match = slopData.split(regex); // Split by the delimiter line

  if (match.length > 1) {
      const contentAfterDelimiter = match[1];
      if (contentAfterDelimiter) {
          const nextDelimiterMatch = contentAfterDelimiter.search(/^#####\s/m);
          if (nextDelimiterMatch !== -1) {
              return contentAfterDelimiter.substring(0, nextDelimiterMatch).trim();
          } else {
              return contentAfterDelimiter.trim();
          }
      }
  }
  console.warn(`Slop profile not found for model: ${modelName}`);
  return `<p><i>Slop profile not found for model: ${modelName}</i></p>`;
}

// --- NEW Score Bar Color Gradient Logic ---
function updateScoreBarColors() {
  const scoreBars = document.querySelectorAll('#leaderboard .score-bar'); // Use a generic class like 'score-bar'
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    if ($(bar).is(':visible')) { // Check visibility
        const overallIndex = $(bar).closest('tr').index();
        const totalRows = $('#leaderboard tbody tr').length;
        if (totalRows === 0) return; // Avoid division by zero

        // Blue (200) to Green (120) Gradient
        const startHue = 200;
        const endHue = 120;
        const hueRange = startHue - endHue;

        const startPercent = (overallIndex / totalRows);
        const endPercent = ((overallIndex + 1) / totalRows);

        const currentStartHue = startHue - (startPercent * hueRange);
        const currentEndHue = startHue - (endPercent * hueRange);

        const lightness = isDarkMode ? '50%' : '65%'; // Adjust lightness for readability
        const saturation = isDarkMode ? '55%' : '50%'; // Adjust saturation

        const startColor = `hsl(${currentStartHue}, ${saturation}, ${lightness})`;
        const endColor = `hsl(${currentEndHue}, ${saturation}, ${lightness})`;

        bar.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    }
  });
}

// --- Leaderboard Data Loading & Parsing ---
function loadLeaderboardData() {
  const longformRows = leaderboardDataLongformV3.split('\n').slice(1).filter(l => l.trim() !== '');

  // Calculate score range for percentages (0-100)
  const maxScore = 100.0;
  const baselineScore = 0.0; // Simple 0-100 scale
  const scoreRange = maxScore - baselineScore;

  let html = longformRows.map(row => {
      // Parse the new CSV columns
      let [modelNameRaw, overallScore100, avgChapterLength, vocabComplexity, slopScore, repetitionScore] = row.split(',');

      const scoreNum = parseFloat(overallScore100);
      const lengthNum = parseInt(avgChapterLength, 10);
      const vocabNumRaw = parseFloat(vocabComplexity); // Keep for potential future use
      const slopNum = (parseFloat(slopScore) / 10.0) / 7.2 * 10; // Keep slop calc consistent
      const repetitionScoreNum = parseInt(repetitionScore, 10);

      // Calculate percentage for the score bar
      const scoreRelativeToBaseline = scoreNum - baselineScore;
      const scorePercentage = scoreRange > 0 ? Math.max(0, Math.min(100, (scoreRelativeToBaseline / scoreRange) * 100)) : 0;

      // --- Model Name Processing (Keep as is) ---
      let currentModelName = modelNameRaw;
      const isNsfwModel = currentModelName.startsWith('!');
      currentModelName = currentModelName.replace(/^\!/, '');
      const isNewModel = currentModelName.startsWith('*');
      currentModelName = currentModelName.replace(/^\*/, '');
      let displayModelName = currentModelName.split('/').pop();
      if (isNsfwModel) displayModelName = '🔞' + displayModelName;
      if (isNewModel) displayModelName = '🆕' + displayModelName;
      let modelNameDisplayHTML = currentModelName.includes('/')
          ? `<a href="https://huggingface.co/${currentModelName}" target="_blank">${displayModelName}</a>`
          : displayModelName;

      // --- Update Sample Link Path ---
      let modelResultsFn = `results/creative-writing-longform/${currentModelName.replace(/\//g,'__')}_longform_report.html`; // Adjusted path

      // --- Generate Score Bar HTML ---
      let scoreBarHTML = `<div class="score-bar-container">
          <div class="score-bar" style="width: ${scorePercentage}%; display: none;"></div>
          <span class="score-text">${scoreNum.toFixed(1)}</span>
      </div>`;

      const slopInfoIconUnicode = `
       <span class="slop-info-icon custom-info-icon" data-model-name="${currentModelName}" title="View Slop Profile">i</span>`;

      // --- Create TR with data-order on TD for new columns ---
      return `
  <tr data-original-score="${scoreNum}"
      data-vocab="${vocabNumRaw}"
      data-gpt-slop="${slopNum}"
      data-repetition="${repetitionScoreNum}">

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
        ${slopInfoIconUnicode}
      </div>
    </td>

    <td class="mobile-collapsible" data-order="${repetitionScoreNum}">
      <div class="cell-content">
        ${isNaN(repetitionScoreNum) ? '-' : repetitionScoreNum}
      </div>
    </td>

    <td data-order="${scoreNum}">
      <div class="cell-content">
        ${scoreBarHTML}
      </div>
    </td>

    <td>
      <div class="cell-content">
        <a href="${modelResultsFn}">Samples</a>
      </div>
    </td>
  </tr>
`;

  }).join(''); // End of map loop

  document.getElementById('leaderboardBody').innerHTML = html;
  initializeDataTable(); // This now includes setting up the event listener
}

// --- DataTable Configuration ---
let dataTableConfig = {
  order: [[4, "desc"]], // Default sort Score (index 4)
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    // Define explicit numeric type for sorting
    { targets: [1], type: 'num' }, // Avg Ch. Len
    { targets: [2], type: 'num' }, // Slop
    { targets: [3], type: 'num' }, // Repetition
    { targets: [4], type: 'num' }, // Score (0-100)
    // Define sorting sequences
    { targets: [4], orderSequence: ["desc", "asc"] }, // Score
    { targets: [1], orderSequence: ["desc", "asc"] }, // Length
    { targets: [2, 3], orderSequence: ["asc", "desc"] }, // Slop, Repetition (Lower is better)
    { targets: [5], orderable: false } // Samples column not sortable
  ],
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  // drawCallback to manage score bar visibility
  drawCallback: function(settings) {
    let api = this.api();
    if (!api) return;
    let order = api.order();
    if (!order || order.length === 0) {
        order = [[4, 'desc']]; // Fallback to default sort (Score column)
    }

    let sortedColumnIndex = order[0][0];
    const SCORE_COLUMNS = [4]; // Index for Score (0-100)
    const NON_SCORE_COLUMNS = [0, 1, 2, 3, 5]; // Indices for other columns

    const tableNode = $(api.table().node());

    // Hide all score bars initially within this table
    tableNode.find('.score-bar').hide();
    // Reset header widths
    tableNode.find('th').css('width', '');

    let columnToShowBar = -1;

    // Determine which score column's bar to show
    if (SCORE_COLUMNS.includes(sortedColumnIndex)) {
        columnToShowBar = sortedColumnIndex;
        lastSortedScoreColumn = sortedColumnIndex;
    } else if (NON_SCORE_COLUMNS.includes(sortedColumnIndex) && lastSortedScoreColumn !== null) {
        columnToShowBar = lastSortedScoreColumn;
    } else { // Fallback
        columnToShowBar = 4; // Default to Score column
        lastSortedScoreColumn = 4;
    }

    // Show the selected column's score bar and adjust width
    if (columnToShowBar !== -1) {
        try {
            // Show the bar in the target column for all visible rows
            api.rows({ page: 'current' }).nodes().to$().find(`td:eq(${columnToShowBar}) .score-bar`).show();

            let header = api.column(columnToShowBar).header();
            if (header) {
                $(header).css('width', '30%'); // Adjust width as needed
            }
        } catch (e) {
            console.error("Error showing score bar or adjusting width:", e);
        }
    }

    // Apply the gradient colors to the *now visible* bars
    updateScoreBarColors(); // Use the updated color function
  }
};

// --- Mobile Column Collapse Logic (Keep as is, check indices) ---
let middleStatsExpanded = false;
function collapseMiddleColumns() {
    const isMobile = window.innerWidth < 768;

    // If on mobile AND not expanded, hide them
    if (isMobile && !middleStatsExpanded) {
      $('#leaderboard .mobile-collapsible').hide(); // Targets columns 1 (Length) and 3 (Repetition)
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
// --- End Mobile Column Collapse Logic ---

// --- DataTable Initialization ---
function initializeDataTable() {
  // Check if DataTable already exists and destroy it
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    $('#leaderboardBody').off('click', '.slop-info-icon'); // Remove previous listener
  }

  let table = $('#leaderboard').DataTable(dataTableConfig);

  // Add Event Listener for Slop Icons
  $('#leaderboardBody').on('click', '.slop-info-icon', function() {
      const modelName = $(this).data('model-name');
      const profileHtml = parseSlopData(modelName);
      const modalTitle = `Slop Profile: ${modelName.split('/').pop()}`;

      $('#slopProfileContent').html(profileHtml);
      $('#slopProfileModalLabel').text(modalTitle);

      const slopModal = new bootstrap.Modal(document.getElementById('slopProfileModal'));
      slopModal.show();
  });

  // Initial collapse after table init
  table.one('init.dt', function () {
    collapseMiddleColumns();
    // No setupControls or fixInitialScoreBars needed anymore
  });
}

// --- Controls Setup (Simplified - No sliders) ---
function setupControls() {
    // Placeholder for future controls if needed
    // console.log("Controls setup (no sliders active).");
}

// --- Document Ready ---
document.addEventListener('DOMContentLoaded', function() {
    displayEncodedEmail();
    applySystemTheme();
    setupDarkModeToggle();

    if (document.getElementById('leaderboard')) {
      loadLeaderboardData(); // This now calls initializeDataTable internally

      // Bind resize and toggle events directly
      $(window).on('resize', collapseMiddleColumns);
      $('#toggleMiddleStats').on('click', toggleMiddleStats);

      // Initial call to collapse columns after a short delay
      setTimeout(collapseMiddleColumns, 50);
    }
});

// --- Removed updateScores function as it's no longer needed ---