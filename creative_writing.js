// creative_writing_v3.js

let leaderboardDataCreativeWritingV3 = `model_name,elo_score,creative_writing_score,avg_length,vocab_complexity,slop_score,repetition_score
deepseek-ai/DeepSeek-R1,1500.0,17.17,5352,29.20,26.65,296.00
chatgpt-4o-latest-2025-03-27,1388.3,17.15,5956,28.29,23.38,416.00
deepseek-ai/DeepSeek-V3-0324,1382.1,16.44,4414,24.28,29.10,333.00
gemini-2.5-pro-exp-03-25,1315.3,17.27,7886,41.00,34.70,492.00
claude-3-5-sonnet-20241022,1294.0,16.04,4921,39.27,19.25,289.00
chatgpt-4o-latest-2025-01-29,1287.7,16.57,5622,29.04,27.66,405.00
RekaAI/reka-flash-3,1275.7,16.26,5225,29.53,32.60,343.00
qwen/qwq-32b,1271.2,16.67,6126,29.23,30.43,386.00
claude-3-7-sonnet-20250219,1265.2,16.73,6327,39.58,22.99,325.00
google/gemma-3-27b-it,1191.0,16.59,7049,42.62,36.62,702.00
gpt-4.5-preview,1147.1,16.32,6451,46.41,41.45,411.00
CohereForAI/c4ai-command-a-03-2025,1097.9,16.12,6691,32.24,39.09,673.00
anthropic/claude-3.5-haiku-20241022,1092.6,12.90,4016,60.14,22.12,295.00
google/gemma-3-12b-it,1081.3,16.15,7150,45.86,45.74,664.00
sam-paech/Darkest-muse-v1,1071.3,16.15,8184,39.50,40.01,1014.00
gemini-2.0-flash-001,1064.8,15.83,6208,37.66,46.83,665.00
allura-org/Gemma-3-Glitter-12B,1040.9,15.83,7934,41.37,44.43,788.00
google/gemma-3-4b-it,1013.4,15.97,6509,51.77,49.97,856.00
ifable/gemma-2-Ifable-9B,985.0,15.56,5324,66.98,45.43,402.00
ToastyPigeon/Gemma-3-Starshine-12B,826.5,12.82,7973,29.74,46.79,1310.00
mistralai/Mistral-Nemo-Instruct-2407,817.9,12.73,7013,30.32,58.15,1586.00
gpt-4o-mini,812.0,14.28,5999,41.70,46.52,682.00
meta-llama/llama-3.1-405b-instruct,794.6,11.66,4531,41.56,48.46,747.00
google/gemma-2-9b-it,790.2,11.33,4120,39.98,69.92,778.00
liquid/lfm-7b,719.7,12.04,6230,49.84,61.03,722.00
meta-llama/llama-3.1-70b-instruct,701.1,10.70,4502,39.85,50.78,762.00
mistralai/mistral-small-3.1-24b-instruct-2503,680.0,10.49,7900,28.80,64.16,2309.00
meta-llama/llama-3.1-8b-instruct,644.5,10.81,4709,37.45,55.49,850.00
mistralai/Mistral-Small-24B-Instruct-2501,637.6,10.24,7660,32.53,65.72,2407.00
anthropic/claude-3-haiku,621.9,11.66,5008,41.11,46.18,570.00
meta-llama/llama-3.2-3b-instruct,534.4,9.38,4759,37.38,60.34,1199.00
meta-llama/llama-3.2-1b-instruct,200.0,7.44,5290,38.32,64.41,1622.00`;



const slopData = `##### deepseek-ai/DeepSeek-R1
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>talis</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>guttered</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>glints</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>grazes</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>liang</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>frayed</span> <span class='slop-word-item'>bergamot</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>jabbed</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>clattering</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>threadbare</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>murmured</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>tilted head</span> <span class='slop-ngram-item'>tilts head</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>red light</span> <span class='slop-ngram-item'>old man</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>voice cracks</span> <span class='slop-ngram-item'>gloved hand</span> <span class='slop-ngram-item'>steps closer</span> <span class='slop-ngram-item'>nail polish</span> <span class='slop-ngram-item'>air smelled</span> <span class='slop-ngram-item'>reach eyes</span> <span class='slop-ngram-item'>wan na</span> <span class='slop-ngram-item'>jagged shadows</span> <span class='slop-ngram-item'>like old</span> <span class='slop-ngram-item'>last month</span> <span class='slop-ngram-item'>solar panel</span> <span class='slop-ngram-item'>three days</span> <span class='slop-ngram-item'>like dying</span> <span class='slop-ngram-item'>gaze flicks</span> <span class='slop-ngram-item'>smile reach</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>phone buzzes</span> <span class='slop-ngram-item'>gon na</span> <span class='slop-ngram-item'>casting jagged</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>casting jagged shadows</span> <span class='slop-ngram-item'>jagged shadows across</span> <span class='slop-ngram-item'>word count condensed</span> <span class='slop-ngram-item'>pinched bridge nose</span> <span class='slop-ngram-item'>object class keter</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>chipped nail polish</span> <span class='slop-ngram-item'>count condensed meet</span> <span class='slop-ngram-item'>door slams open</span> <span class='slop-ngram-item'>looked less like</span> <span class='slop-ngram-item'>air smelled ozone</span> <span class='slop-ngram-item'>note site director</span> <span class='slop-ngram-item'>arms loose fingers</span> <span class='slop-ngram-item'>chipped black nail</span> <span class='slop-ngram-item'>black nail polish</span> <span class='slop-ngram-item'>words hang us</span> <span class='slop-ngram-item'>air clung thick</span> <span class='slop-ngram-item'>night last week</span> <span class='slop-ngram-item'>leaned closer breath</span> <span class='slop-ngram-item'>closer breath sour</span> <span class='slop-ngram-item'>breath stirs hair</span> <span class='slop-ngram-item'>pupils blown wide</span> <span class='slop-ngram-item'>pressed forehead cold</span> <span class='slop-ngram-item'>veyra leaned forward</span> <span class='slop-ngram-item'>eye swollen shut</span> <span class='slop-ngram-item'>thumb brushed wrist</span> <span class='slop-ngram-item'>like feral thing</span> <span class='slop-ngram-item'>like question mark</span> <span class='slop-ngram-item'>feels smaller suddenly</span>
</div>

##### chatgpt-4o-latest-2025-03-27
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>smudged</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>squinting</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>kessler</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>grinning</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>spiraling</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>rusted</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>smells like</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>looked like</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>one hand</span> <span class='slop-ngram-item'>like someone</span> <span class='slop-ngram-item'>sounds like</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>someone else</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>like trying</span> <span class='slop-ngram-item'>say anything</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>slow deliberate</span> <span class='slop-ngram-item'>air like</span> <span class='slop-ngram-item'>leaned back</span> <span class='slop-ngram-item'>stepped forward</span> <span class='slop-ngram-item'>tilts head</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>feel something</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>said voice smooth</span> <span class='slop-ngram-item'>hung air like</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>close enough smell</span> <span class='slop-ngram-item'>description refers series</span> <span class='slop-ngram-item'>says stepping closer</span> <span class='slop-ngram-item'>let silence stretch</span> <span class='slop-ngram-item'>like second skin</span> <span class='slop-ngram-item'>far end bar</span> <span class='slop-ngram-item'>slides onto stool</span> <span class='slop-ngram-item'>two days ago</span> <span class='slop-ngram-item'>say something else</span> <span class='slop-ngram-item'>way looked last</span> <span class='slop-ngram-item'>reflection hallway mirror</span> <span class='slop-ngram-item'>asked voice low</span> <span class='slop-ngram-item'>like nothing like</span> <span class='slop-ngram-item'>leans back chair</span> <span class='slop-ngram-item'>bite inside cheek</span> <span class='slop-ngram-item'>asks voice low</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>look like got</span> <span class='slop-ngram-item'>looked like someone</span> <span class='slop-ngram-item'>heart pounding know</span> <span class='slop-ngram-item'>stained glass windows</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>shadows across damp</span> <span class='slop-ngram-item'>says voice soft</span>
</div>

##### deepseek-ai/DeepSeek-V3-0324
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>exhales</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>flicked</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>tugged</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>rusted</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>mutter</span> <span class='slop-word-item'>leans</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>tilts head</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>tilted head</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>rolled eyes</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>leaned back</span> <span class='slop-ngram-item'>thick scent</span> <span class='slop-ngram-item'>fingers twitch</span> <span class='slop-ngram-item'>slow deliberate</span> <span class='slop-ngram-item'>arms crossed</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>stepped closer</span> <span class='slop-ngram-item'>fingers brushing</span> <span class='slop-ngram-item'>long moment</span> <span class='slop-ngram-item'>exhaled nose</span> <span class='slop-ngram-item'>looked like</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>pulse hammered</span> <span class='slop-ngram-item'>air smelled</span> <span class='slop-ngram-item'>dim light</span> <span class='slop-ngram-item'>close enough</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>thick scent damp</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>scent damp earth</span> <span class='slop-ngram-item'>pinched bridge nose</span> <span class='slop-ngram-item'>say something else</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>pulse hammered throat</span> <span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>neither us moves</span> <span class='slop-ngram-item'>lingered second long</span> <span class='slop-ngram-item'>tilted head studying</span> <span class='slop-ngram-item'>gaze dropped mouth</span> <span class='slop-ngram-item'>fingers tightened around</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>damp earth something</span> <span class='slop-ngram-item'>opened mouth closed</span> <span class='slop-ngram-item'>faint metallic tang</span> <span class='slop-ngram-item'>like everything else</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>say something anything</span> <span class='slop-ngram-item'>casting jagged shadows</span> <span class='slop-ngram-item'>jagged shadows across</span> <span class='slop-ngram-item'>mouth back hand</span> <span class='slop-ngram-item'>fingers tighten around</span> <span class='slop-ngram-item'>half one go</span> <span class='slop-ngram-item'>breath coming fast</span> <span class='slop-ngram-item'>dark hair pulled</span> <span class='slop-ngram-item'>thought first time</span> <span class='slop-ngram-item'>says voice low</span>
</div>

##### gemini-2.5-pro-exp-03-25
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>memetic</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>conspiratorially</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>griz</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>fractionally</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>warred</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>infuriatingly</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>fizzing</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>motes</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>aris</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>silhouetted</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>hitches</span> <span class='slop-word-item'>unspoken</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>less like</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>around eyes</span> <span class='slop-ngram-item'>almost imperceptibly</span> <span class='slop-ngram-item'>back home</span> <span class='slop-ngram-item'>gestured vaguely</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>eye contact</span> <span class='slop-ngram-item'>right arm</span> <span class='slop-ngram-item'>hung thick</span> <span class='slop-ngram-item'>leaned back</span> <span class='slop-ngram-item'>years ago</span> <span class='slop-ngram-item'>trying keep</span> <span class='slop-ngram-item'>back towards</span> <span class='slop-ngram-item'>forward slightly</span> <span class='slop-ngram-item'>tap tap</span> <span class='slop-ngram-item'>hand instinctively</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>turning back</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>felt less like</span> <span class='slop-ngram-item'>trying keep voice</span> <span class='slop-ngram-item'>heart hammered ribs</span> <span class='slop-ngram-item'>air hung thick</span> <span class='slop-ngram-item'>dust motes dancing</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>leaned forward slightly</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>keep voice steady</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>waved dismissive hand</span> <span class='slop-ngram-item'>okay deep breaths</span> <span class='slop-ngram-item'>okay breathe breathe</span> <span class='slop-ngram-item'>squeezed eyes shut</span> <span class='slop-ngram-item'>long dancing shadows</span> <span class='slop-ngram-item'>quite reach eyes</span> <span class='slop-ngram-item'>year two older</span> <span class='slop-ngram-item'>murmured voice low</span> <span class='slop-ngram-item'>cleared throat sound</span> <span class='slop-ngram-item'>throat sound like</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>felt cold knot</span> <span class='slop-ngram-item'>cold knot tighten</span> <span class='slop-ngram-item'>knot tighten stomach</span> <span class='slop-ngram-item'>blood ran cold</span> <span class='slop-ngram-item'>one last time</span> <span class='slop-ngram-item'>another day another</span> <span class='slop-ngram-item'>hung thick heavy</span>
</div>

##### claude-3-5-sonnet-20241022
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>flickered</span> <span class='slop-word-item'>absently</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mari</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>ached</span> <span class='slop-word-item'>dreads</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>materialized</span> <span class='slop-word-item'>salvaged</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>whispers</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>ripples</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>chen</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>nodding</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>weathered</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>humming</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>pauses</span> <span class='slop-word-item'>leans</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>perched</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>wiping</span> <span class='slop-word-item'>practiced</span> <span class='slop-word-item'>strings</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>temporal</span> <span class='slop-word-item'>crimson</span> <span class='slop-word-item'>grin</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>tomorrow would</span> <span class='slop-ngram-item'>next week</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>maybe could</span> <span class='slop-ngram-item'>one last</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>years ago</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>could see</span> <span class='slop-ngram-item'>last night</span> <span class='slop-ngram-item'>something like</span> <span class='slop-ngram-item'>morning sun</span> <span class='slop-ngram-item'>would make</span> <span class='slop-ngram-item'>last time</span> <span class='slop-ngram-item'>one final</span> <span class='slop-ngram-item'>three months</span> <span class='slop-ngram-item'>nothing like</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>better left</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>muscle memory</span> <span class='slop-ngram-item'>would say</span> <span class='slop-ngram-item'>something new</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>security footage shows</span> <span class='slop-ngram-item'>one final time</span> <span class='slop-ngram-item'>one last time</span> <span class='slop-ngram-item'>could change everything</span> <span class='slop-ngram-item'>slides onto stool</span> <span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>close enough could</span> <span class='slop-ngram-item'>three years ago</span> <span class='slop-ngram-item'>though must admit</span> <span class='slop-ngram-item'>knock door interrupted</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>laughed sound like</span> <span class='slop-ngram-item'>fingers trembling slightly</span> <span class='slop-ngram-item'>time next week</span> <span class='slop-ngram-item'>looked really looked</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>avoiding copyrighted material</span> <span class='slop-ngram-item'>whole room seems</span> <span class='slop-ngram-item'>going get us</span> <span class='slop-ngram-item'>quite reaching eyes</span> <span class='slop-ngram-item'>phone number words</span> <span class='slop-ngram-item'>walking back toward</span> <span class='slop-ngram-item'>enough could smell</span> <span class='slop-ngram-item'>like puppet strings</span> <span class='slop-ngram-item'>ready strike oh</span> <span class='slop-ngram-item'>getting real tired</span> <span class='slop-ngram-item'>smile quite reach</span> <span class='slop-ngram-item'>sporting goods store</span> <span class='slop-ngram-item'>looked suspiciously like</span>
</div>

##### chatgpt-4o-latest-2025-01-29
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>exhales</span> <span class='slop-word-item'>exhaled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>clenches</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>stiffly</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>dryly</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>exhaling</span> <span class='slop-word-item'>lurched</span> <span class='slop-word-item'>calliope</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>blinks</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>henshaw</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>clenched</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>darrow</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>chuckles</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>tilts head</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>stepped forward</span> <span class='slop-ngram-item'>shaking head</span> <span class='slop-ngram-item'>something like</span> <span class='slop-ngram-item'>tilted head</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>long moment</span> <span class='slop-ngram-item'>shake head</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>leaned back</span> <span class='slop-ngram-item'>arms crossed</span> <span class='slop-ngram-item'>exhaled slowly</span> <span class='slop-ngram-item'>close enough</span> <span class='slop-ngram-item'>something unreadable</span> <span class='slop-ngram-item'>last time</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>stepping back</span> <span class='slop-ngram-item'>long enough</span> <span class='slop-ngram-item'>like something</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>something wrong</span> <span class='slop-ngram-item'>swallowed hard</span> <span class='slop-ngram-item'>said nothing</span> <span class='slop-ngram-item'>last night</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>chuckled shaking head</span> <span class='slop-ngram-item'>hands clasped behind</span> <span class='slop-ngram-item'>clasped behind back</span> <span class='slop-ngram-item'>something unreadable expression</span> <span class='slop-ngram-item'>one last time</span> <span class='slop-ngram-item'>say something else</span> <span class='slop-ngram-item'>door swings open</span> <span class='slop-ngram-item'>without another word</span> <span class='slop-ngram-item'>look like belong</span> <span class='slop-ngram-item'>like everyone else</span> <span class='slop-ngram-item'>leaned back chair</span> <span class='slop-ngram-item'>like something else</span> <span class='slop-ngram-item'>squeezed eyes shut</span> <span class='slop-ngram-item'>rubbing hand face</span> <span class='slop-ngram-item'>answer right away</span> <span class='slop-ngram-item'>something like amusement</span> <span class='slop-ngram-item'>cigarette dangling lips</span> <span class='slop-ngram-item'>close enough could</span> <span class='slop-ngram-item'>says voice calm</span> <span class='slop-ngram-item'>chest rising falling</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>grin spread across</span> <span class='slop-ngram-item'>says voice even</span> <span class='slop-ngram-item'>fingers tighten around</span> <span class='slop-ngram-item'>tilted head studying</span> <span class='slop-ngram-item'>opened mouth closed</span> <span class='slop-ngram-item'>resting chin hand</span>
</div>

##### RekaAI/reka-flash-3
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>vorne</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>krell</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>fogging</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>slithered</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>clattered</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>clattering</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>falters</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>dais</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>reeking</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>crumpled</span> <span class='slop-word-item'>sigil</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>smells like</span> <span class='slop-ngram-item'>leather jacket</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>stepped closer</span> <span class='slop-ngram-item'>neon sign</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>voice cracks</span> <span class='slop-ngram-item'>researcher voss</span> <span class='slop-ngram-item'>scene setting</span> <span class='slop-ngram-item'>fluorescent lights</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>breath hitched</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>like smoke</span> <span class='slop-ngram-item'>internal monologue</span> <span class='slop-ngram-item'>reach eyes</span> <span class='slop-ngram-item'>gon na</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>fingers brushing</span> <span class='slop-ngram-item'>breath fogging</span> <span class='slop-ngram-item'>looked like</span> <span class='slop-ngram-item'>closer breath</span> <span class='slop-ngram-item'>laughed sound</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>laughed sound like</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>pulse roared ears</span> <span class='slop-ngram-item'>fluorescent lights hum</span> <span class='slop-ngram-item'>breath fogging air</span> <span class='slop-ngram-item'>like live wire</span> <span class='slop-ngram-item'>phone buzzes text</span> <span class='slop-ngram-item'>door clicks shut</span> <span class='slop-ngram-item'>pinched bridge nose</span> <span class='slop-ngram-item'>door creaks open</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>another day another</span> <span class='slop-ngram-item'>coiled like serpent</span> <span class='slop-ngram-item'>eyes darting like</span> <span class='slop-ngram-item'>end scene word</span> <span class='slop-ngram-item'>scene word count</span> <span class='slop-ngram-item'>door creaked open</span> <span class='slop-ngram-item'>like spilled ink</span> <span class='slop-ngram-item'>word count tone</span> <span class='slop-ngram-item'>casting jagged shadows</span> <span class='slop-ngram-item'>forward voice dropping</span> <span class='slop-ngram-item'>stumbled back clutching</span> <span class='slop-ngram-item'>leaned closer breath</span> <span class='slop-ngram-item'>closer breath warm</span> <span class='slop-ngram-item'>first time years</span> <span class='slop-ngram-item'>time years feel</span>
</div>

##### qwen/qwq-32b
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>veyra</span> <span class='slop-word-item'>thrums</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>kestrel</span> <span class='slop-word-item'>flinches</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>blares</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>stilled</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>creaks</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>hisses</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>hitches</span> <span class='slop-word-item'>pivoted</span> <span class='slop-word-item'>fraying</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>tilts</span> <span class='slop-word-item'>why&#x27;re</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>grins</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>glyphs</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>stiffened</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>glowed</span> <span class='slop-word-item'>dimmed</span> <span class='slop-word-item'>snorts</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>word count</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>red light</span> <span class='slop-ngram-item'>gon na</span> <span class='slop-ngram-item'>tilts head</span> <span class='slop-ngram-item'>let go</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>next morning</span> <span class='slop-ngram-item'>throat tightened</span> <span class='slop-ngram-item'>smells like</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>steps closer</span> <span class='slop-ngram-item'>jagged shadows</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>arms crossed</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>leather jacket</span> <span class='slop-ngram-item'>years ago</span> <span class='slop-ngram-item'>words hang</span> <span class='slop-ngram-item'>breath hitches</span> <span class='slop-ngram-item'>face pale</span> <span class='slop-ngram-item'>let see</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>eyes sharp</span> <span class='slop-ngram-item'>casting jagged</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>tilted head</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>casting jagged shadows</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>back arms crossed</span> <span class='slop-ngram-item'>tilts head studying</span> <span class='slop-ngram-item'>air hung thick</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>word count note</span> <span class='slop-ngram-item'>ever feel like</span> <span class='slop-ngram-item'>laughed sound like</span> <span class='slop-ngram-item'>low resonant hum</span> <span class='slop-ngram-item'>sound like wind</span> <span class='slop-ngram-item'>air like blade</span> <span class='slop-ngram-item'>gon na need</span> <span class='slop-ngram-item'>air smells like</span> <span class='slop-ngram-item'>coiling like serpents</span> <span class='slop-ngram-item'>like second skin</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>see flecks gold</span> <span class='slop-ngram-item'>door creaked open</span> <span class='slop-ngram-item'>eyes meet mine</span> <span class='slop-ngram-item'>said voice steady</span> <span class='slop-ngram-item'>sound like grinding</span> <span class='slop-ngram-item'>thick scent damp</span> <span class='slop-ngram-item'>door burst open</span> <span class='slop-ngram-item'>leans back arms</span> <span class='slop-ngram-item'>way hands tremble</span>
</div>

##### claude-3-7-sonnet-20250219
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>thornfield</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>dismissively</span> <span class='slop-word-item'>zora</span> <span class='slop-word-item'>materializes</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mutters</span> <span class='slop-word-item'>unnaturally</span> <span class='slop-word-item'>callum</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>blinked</span> <span class='slop-word-item'>harlow</span> <span class='slop-word-item'>northside</span> <span class='slop-word-item'>mendez</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>heartbeats</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>sipped</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>mutter</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>forearms</span> <span class='slop-word-item'>materialized</span> <span class='slop-word-item'>rimmed</span> <span class='slop-word-item'>methodically</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>gleam</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>overthinking</span> <span class='slop-word-item'>gasps</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>three days</span> <span class='slop-ngram-item'>something like</span> <span class='slop-ngram-item'>shadows across</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>stone floor</span> <span class='slop-ngram-item'>shook head</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>close enough</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>could see</span> <span class='slop-ngram-item'>around us</span> <span class='slop-ngram-item'>eyes narrow</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>last night</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>tomorrow would</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>special containment</span> <span class='slop-ngram-item'>like something</span> <span class='slop-ngram-item'>days ago</span> <span class='slop-ngram-item'>last year</span> <span class='slop-ngram-item'>last week</span> <span class='slop-ngram-item'>stepped forward</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>across stone floor</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>laughed sound like</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>like physical blow</span> <span class='slop-ngram-item'>three days ago</span> <span class='slop-ngram-item'>despite early hour</span> <span class='slop-ngram-item'>tomorrow would bring</span> <span class='slop-ngram-item'>eyes widen slightly</span> <span class='slop-ngram-item'>slides onto stool</span> <span class='slop-ngram-item'>seen better days</span> <span class='slop-ngram-item'>expression remained neutral</span> <span class='slop-ngram-item'>gasps echoed chamber</span> <span class='slop-ngram-item'>expression remained impassive</span> <span class='slop-ngram-item'>lines around eyes</span> <span class='slop-ngram-item'>two days ago</span> <span class='slop-ngram-item'>said extending hand</span> <span class='slop-ngram-item'>hair behind ear</span> <span class='slop-ngram-item'>eyes meet mine</span> <span class='slop-ngram-item'>said voice carrying</span> <span class='slop-ngram-item'>quite meeting eyes</span> <span class='slop-ngram-item'>says voice soft</span> <span class='slop-ngram-item'>faintly dim light</span>
</div>

##### google/gemma-3-27b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>sunstone</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>hellhound</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>hemlock</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>alistair</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>tiber</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>hemmings</span> <span class='slop-word-item'>wildflowers</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>impeccably</span> <span class='slop-word-item'>weariness</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>flinch</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>cataloging</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>old man</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>man hemlock</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>rhys said</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>okay okay</span> <span class='slop-ngram-item'>eye contact</span> <span class='slop-ngram-item'>fleeting moment</span> <span class='slop-ngram-item'>tasted like</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>felt strange</span> <span class='slop-ngram-item'>long time</span> <span class='slop-ngram-item'>voice laced</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>old man hemlock</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>avoiding eye contact</span> <span class='slop-ngram-item'>old man tiber</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>squeezed eyes shut</span> <span class='slop-ngram-item'>flash white teeth</span> <span class='slop-ngram-item'>first time long</span> <span class='slop-ngram-item'>time long time</span> <span class='slop-ngram-item'>felt flush creep</span> <span class='slop-ngram-item'>flush creep neck</span> <span class='slop-ngram-item'>things best left</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>small intricately carved</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>trying make feel</span> <span class='slop-ngram-item'>eyes searching mine</span> <span class='slop-ngram-item'>old man hemmings</span> <span class='slop-ngram-item'>sent shiver spine</span> <span class='slop-ngram-item'>long distorted shadows</span> <span class='slop-ngram-item'>raised skeptical eyebrow</span> <span class='slop-ngram-item'>noticed something else</span> <span class='slop-ngram-item'>already knowing answer</span> <span class='slop-ngram-item'>carefully choosing words</span> <span class='slop-ngram-item'>perfectly sculpted eyebrow</span>
</div>

##### gpt-4.5-preview
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rasped</span> <span class='slop-word-item'>conspiratorially</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>appreciatively</span> <span class='slop-word-item'>uncertainly</span> <span class='slop-word-item'>shyly</span> <span class='slop-word-item'>skeptically</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>dryly</span> <span class='slop-word-item'>quickens</span> <span class='slop-word-item'>mischievously</span> <span class='slop-word-item'>dismissively</span> <span class='slop-word-item'>stiffly</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>uneasily</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>quickening</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>restlessly</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>softly</span> <span class='slop-word-item'>gloved</span> <span class='slop-word-item'>thoughtfully</span> <span class='slop-word-item'>wearily</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>snarls</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>theatrically</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>hesitantly</span> <span class='slop-word-item'>lazily</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>sheepishly</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>tinny</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>shook head</span> <span class='slop-ngram-item'>shaking head</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>said softly</span> <span class='slop-ngram-item'>tilted head</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>eyes narrowing</span> <span class='slop-ngram-item'>eyes wide</span> <span class='slop-ngram-item'>softly voice</span> <span class='slop-ngram-item'>head slightly</span> <span class='slop-ngram-item'>stepped forward</span> <span class='slop-ngram-item'>dark eyes</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>heart hammering</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>cleared throat</span> <span class='slop-ngram-item'>stepping closer</span> <span class='slop-ngram-item'>heart racing</span> <span class='slop-ngram-item'>softly eyes</span> <span class='slop-ngram-item'>eyes glittering</span> <span class='slop-ngram-item'>slowly eyes</span> <span class='slop-ngram-item'>around us</span> <span class='slop-ngram-item'>steps closer</span> <span class='slop-ngram-item'>across face</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>eyes briefly</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>shook head slowly</span> <span class='slop-ngram-item'>tilts head slightly</span> <span class='slop-ngram-item'>pinched bridge nose</span> <span class='slop-ngram-item'>raised eyebrow skeptically</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>closed eyes briefly</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>flickering briefly across</span> <span class='slop-ngram-item'>eyes narrowing slightly</span> <span class='slop-ngram-item'>softly shaking head</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>leaned forward voice</span> <span class='slop-ngram-item'>lay awake listening</span> <span class='slop-ngram-item'>door swung open</span> <span class='slop-ngram-item'>heart hammering chest</span> <span class='slop-ngram-item'>warmth spreading chest</span> <span class='slop-ngram-item'>leaned forward eyes</span> <span class='slop-ngram-item'>eyes narrow slightly</span> <span class='slop-ngram-item'>stood breathing heavily</span> <span class='slop-ngram-item'>got ta eat</span> <span class='slop-ngram-item'>fingers trembling slightly</span> <span class='slop-ngram-item'>every word every</span> <span class='slop-ngram-item'>voice trembling slightly</span>
</div>

##### CohereForAI/c4ai-command-a-03-2025
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaira</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>smirks</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>lila</span> <span class='slop-word-item'>twitched</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>faintly</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>snorts</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>torchlight</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>tightens</span> <span class='slop-word-item'>slung</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>shrugging</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>elias</span> <span class='slop-word-item'>mara</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>clench</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>overthinking</span> <span class='slop-word-item'>replaying</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>softens</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>mingling</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>gon na</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>expression unreadable</span> <span class='slop-ngram-item'>closed eyes</span> <span class='slop-ngram-item'>next time</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>casting long</span> <span class='slop-ngram-item'>let go</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>long shadows</span> <span class='slop-ngram-item'>last night</span> <span class='slop-ngram-item'>dim light</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>one thing</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>fingers brushing</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>steady despite</span> <span class='slop-ngram-item'>thick scent</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>voice steady despite</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>one thing certain</span> <span class='slop-ngram-item'>long shadows across</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>said voice steady</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>seen better days</span> <span class='slop-ngram-item'>first time long</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>voice dropping whisper</span> <span class='slop-ngram-item'>steady despite tremor</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>one last time</span> <span class='slop-ngram-item'>knew one thing</span> <span class='slop-ngram-item'>air thick unspoken</span> <span class='slop-ngram-item'>door slams open</span> <span class='slop-ngram-item'>containment procedures due</span> <span class='slop-ngram-item'>mobile task force</span> <span class='slop-ngram-item'>low rumbling sound</span> <span class='slop-ngram-item'>closed eyes letting</span> <span class='slop-ngram-item'>got ta eat</span>
</div>

##### anthropic/claude-3.5-haiku-20241022
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>memetic</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>imperceptibly</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>millisecond</span> <span class='slop-word-item'>tendrils</span> <span class='slop-word-item'>voss</span> <span class='slop-word-item'>recursive</span> <span class='slop-word-item'>subtext</span> <span class='slop-word-item'>momentarily</span> <span class='slop-word-item'>impossibly</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>holographic</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>reshape</span> <span class='slop-word-item'>entanglement</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>crackling</span> <span class='slop-word-item'>nuanced</span> <span class='slop-word-item'>weathered</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>unconsciously</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>archival</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>dissonance</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>translucent</span> <span class='slop-word-item'>kira</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clutching</span> <span class='slop-word-item'>microscopic</span> <span class='slop-word-item'>temporal</span> <span class='slop-word-item'>subtly</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>drifted</span> <span class='slop-word-item'>synchronized</span> <span class='slop-word-item'>abort</span> <span class='slop-word-item'>predatory</span> <span class='slop-word-item'>intricate</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>another day</span> <span class='slop-ngram-item'>content warning</span> <span class='slop-ngram-item'>would like</span> <span class='slop-ngram-item'>looked like</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>reach eyes</span> <span class='slop-ngram-item'>something beyond</span> <span class='slop-ngram-item'>draft capturing</span> <span class='slop-ngram-item'>like something</span> <span class='slop-ngram-item'>something wrong</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>psychological evaluation</span> <span class='slop-ngram-item'>threat assessment</span> <span class='slop-ngram-item'>feels different</span> <span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>shadows across</span> <span class='slop-ngram-item'>stone walls</span> <span class='slop-ngram-item'>warning narrative</span> <span class='slop-ngram-item'>draft chapter</span> <span class='slop-ngram-item'>looking like</span> <span class='slop-ngram-item'>seemed breathe</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>hung air</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>smile reach</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>content warning narrative</span> <span class='slop-ngram-item'>smile reach eyes</span> <span class='slop-ngram-item'>warning narrative contains</span> <span class='slop-ngram-item'>seemed breathe around</span> <span class='slop-ngram-item'>would like modify</span> <span class='slop-ngram-item'>content warning passage</span> <span class='slop-ngram-item'>warning passage contains</span> <span class='slop-ngram-item'>passage contains references</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>statement hung air</span> <span class='slop-ngram-item'>scene capturing requested</span> <span class='slop-ngram-item'>would like refine</span> <span class='slop-ngram-item'>refine aspects draft</span> <span class='slop-ngram-item'>conversation feels like</span> <span class='slop-ngram-item'>like chess match</span> <span class='slop-ngram-item'>like distant thunder</span> <span class='slop-ngram-item'>says question statement</span> <span class='slop-ngram-item'>heart rate spikes</span> <span class='slop-ngram-item'>laugh soft almost</span> <span class='slop-ngram-item'>fingers danced across</span> <span class='slop-ngram-item'>psychological impact assessment</span> <span class='slop-ngram-item'>hand moves almost</span> <span class='slop-ngram-item'>moves almost gesture</span> <span class='slop-ngram-item'>almost gesture suggests</span> <span class='slop-ngram-item'>might something else</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>something older something</span> <span class='slop-ngram-item'>moved like ghost</span> <span class='slop-ngram-item'>quite reach eyes</span>
</div>

##### google/gemma-3-12b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>oakhaven</span> <span class='slop-word-item'>xylosian</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>kenji</span> <span class='slop-word-item'>thimbles</span> <span class='slop-word-item'>humorless</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>impeccably</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>rippled</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>grumbles</span> <span class='slop-word-item'>wildflowers</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stillness</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>flickering</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>almost imperceptible</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>expression unreadable</span> <span class='slop-ngram-item'>gaze fixed</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>eye contact</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>hung air</span> <span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>trying keep</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>stark contrast</span> <span class='slop-ngram-item'>low rumble</span> <span class='slop-ngram-item'>let say</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>voice low rumble</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>trying keep voice</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>hung air heavy</span> <span class='slop-ngram-item'>let know like</span> <span class='slop-ngram-item'>flicker something unreadable</span> <span class='slop-ngram-item'>carefully constructed facade</span> <span class='slop-ngram-item'>long distorted shadows</span> <span class='slop-ngram-item'>small intricately carved</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>flash white teeth</span> <span class='slop-ngram-item'>aiming requested tone</span> <span class='slop-ngram-item'>included notes end</span> <span class='slop-ngram-item'>potential story directions</span> <span class='slop-ngram-item'>something unreadable eyes</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>know like adjustments</span> <span class='slop-ngram-item'>keep voice steady</span> <span class='slop-ngram-item'>voice low resonant</span> <span class='slop-ngram-item'>voice surprisingly steady</span>
</div>

##### sam-paech/Darkest-muse-v1
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>rasped</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>woodsmoke</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>prickling</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>lamplight</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>rasping</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>rasps</span> <span class='slop-word-item'>skittering</span> <span class='slop-word-item'>flagstones</span> <span class='slop-word-item'>spiderweb</span> <span class='slop-word-item'>wheezed</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>sibilant</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>acheron</span> <span class='slop-word-item'>croaked</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>snaked</span> <span class='slop-word-item'>overripe</span> <span class='slop-word-item'>gnarled</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>sickly</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>phosphorescent</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>chipped</span> <span class='slop-word-item'>reeked</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>squinted</span> <span class='slop-word-item'>coppery</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>tinny</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>scavenged</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>else something</span> <span class='slop-ngram-item'>looked like</span> <span class='slop-ngram-item'>like goddamn</span> <span class='slop-ngram-item'>metallic tang</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>like trying</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>like shroud</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>gon na</span> <span class='slop-ngram-item'>suspiciously like</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>like rusty</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>eyes like</span> <span class='slop-ngram-item'>back neck</span> <span class='slop-ngram-item'>polished obsidian</span> <span class='slop-ngram-item'>something like</span> <span class='slop-ngram-item'>second skin</span> <span class='slop-ngram-item'>voice like</span> <span class='slop-ngram-item'>back throat</span> <span class='slop-ngram-item'>like second</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>like bad</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>like second skin</span> <span class='slop-ngram-item'>air hung thick</span> <span class='slop-ngram-item'>looked suspiciously like</span> <span class='slop-ngram-item'>like polished obsidian</span> <span class='slop-ngram-item'>hairs back neck</span> <span class='slop-ngram-item'>like rusty hinge</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>sounded suspiciously like</span> <span class='slop-ngram-item'>back neck prickle</span> <span class='slop-ngram-item'>clung back throat</span> <span class='slop-ngram-item'>metallic tang blood</span> <span class='slop-ngram-item'>voice like gravel</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>words tasting like</span> <span class='slop-ngram-item'>tasting like ash</span> <span class='slop-ngram-item'>damp earth something</span> <span class='slop-ngram-item'>else something metallic</span> <span class='slop-ngram-item'>voice dry rasp</span> <span class='slop-ngram-item'>like ash mouth</span> <span class='slop-ngram-item'>look like could</span> <span class='slop-ngram-item'>saw flicker something</span> <span class='slop-ngram-item'>dry rasping sound</span> <span class='slop-ngram-item'>else something sharp</span> <span class='slop-ngram-item'>low guttural growl</span> <span class='slop-ngram-item'>back throat like</span> <span class='slop-ngram-item'>could feel heat</span> <span class='slop-ngram-item'>flicker something like</span> <span class='slop-ngram-item'>wanted say something</span> <span class='slop-ngram-item'>voice barely whisper</span>
</div>

##### gemini-2.0-flash-001
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>datapad</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>hydroponics</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>raspy</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>elysium</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>trying sound</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>let say</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>eyes wide</span> <span class='slop-ngram-item'>say voice</span> <span class='slop-ngram-item'>raises eyebrow</span> <span class='slop-ngram-item'>looks like</span> <span class='slop-ngram-item'>deep breaths</span> <span class='slop-ngram-item'>oh god</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>said eyes</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>said voice laced</span> <span class='slop-ngram-item'>voice dangerously low</span> <span class='slop-ngram-item'>okay deep breaths</span> <span class='slop-ngram-item'>say trying sound</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>asked voice barely</span> <span class='slop-ngram-item'>flash white teeth</span> <span class='slop-ngram-item'>felt like eternity</span> <span class='slop-ngram-item'>air hung thick</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>hung air heavy</span> <span class='slop-ngram-item'>say voice barely</span> <span class='slop-ngram-item'>says voice dripping</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>like ash mouth</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>said voice smooth</span> <span class='slop-ngram-item'>leaned back chair</span> <span class='slop-ngram-item'>trying keep voice</span> <span class='slop-ngram-item'>smiled genuine smile</span> <span class='slop-ngram-item'>casting long distorted</span> <span class='slop-ngram-item'>long distorted shadows</span>
</div>

##### allura-org/Gemma-3-Glitter-12B
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>chronal</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>wren</span> <span class='slop-word-item'>hydroponics</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>clang</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>expression unreadable</span> <span class='slop-ngram-item'>let say</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>voice surprisingly</span> <span class='slop-ngram-item'>say voice</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>looked eyes</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>intricately carved</span> <span class='slop-ngram-item'>gaze fixed</span> <span class='slop-ngram-item'>long time</span> <span class='slop-ngram-item'>asks voice</span> <span class='slop-ngram-item'>voice dangerously</span> <span class='slop-ngram-item'>pulled back</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>said voice surprisingly</span> <span class='slop-ngram-item'>small intricately carved</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>hair pulled back</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>intricately carved wooden</span> <span class='slop-ngram-item'>voice surprisingly steady</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>included notes end</span> <span class='slop-ngram-item'>hung air heavy</span> <span class='slop-ngram-item'>could feel heat</span> <span class='slop-ngram-item'>notes end potential</span> <span class='slop-ngram-item'>something else entirely</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>predatory curve lips</span> <span class='slop-ngram-item'>first time long</span> <span class='slop-ngram-item'>time long time</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>potential story directions</span> <span class='slop-ngram-item'>let know like</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>smiled slow predatory</span> <span class='slop-ngram-item'>slow predatory curve</span> <span class='slop-ngram-item'>flash white teeth</span> <span class='slop-ngram-item'>voice dangerously low</span>
</div>

##### google/gemma-3-4b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>xylos</span> <span class='slop-word-item'>veridia</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>seraphina</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>slicking</span> <span class='slop-word-item'>veridian</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>silvanus</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>disconcertingly</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>viewport</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>insistent</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>hana</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>disconcerting</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>unwavering</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>glint</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>something vaguely</span> <span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>almost imperceptible</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>chilling certainty</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>small almost</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>said eyes</span> <span class='slop-ngram-item'>slow deliberate</span> <span class='slop-ngram-item'>gaze unwavering</span> <span class='slop-ngram-item'>let say</span> <span class='slop-ngram-item'>something akin</span> <span class='slop-ngram-item'>desperately trying</span> <span class='slop-ngram-item'>intricately carved</span> <span class='slop-ngram-item'>devoid emotion</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>voice low rumble</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>voice devoid emotion</span> <span class='slop-ngram-item'>something vaguely metallic</span> <span class='slop-ngram-item'>rain continued fall</span> <span class='slop-ngram-item'>something vaguely floral</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>hair pulled back</span> <span class='slop-ngram-item'>flicker something akin</span> <span class='slop-ngram-item'>flicker something unreadable</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>said voice softer</span> <span class='slop-ngram-item'>small intricately carved</span> <span class='slop-ngram-item'>words tumbling could</span> <span class='slop-ngram-item'>rain continues fall</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>tumbling could stop</span> <span class='slop-ngram-item'>something unreadable eyes</span> <span class='slop-ngram-item'>continued fall washing</span> <span class='slop-ngram-item'>felt less like</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>said voice devoid</span> <span class='slop-ngram-item'>subtle almost imperceptible</span> <span class='slop-ngram-item'>voice carefully neutral</span> <span class='slop-ngram-item'>object class euclid</span>
</div>

##### ifable/gemma-2-Ifable-9B
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>kaelen</span> <span class='slop-word-item'>xylos</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>aethelred</span> <span class='slop-word-item'>thrummed</span> <span class='slop-word-item'>fathomless</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>rasped</span> <span class='slop-word-item'>thrum</span> <span class='slop-word-item'>throbbed</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>bioluminescent</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>calloused</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>wizened</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>discordant</span> <span class='slop-word-item'>honeyed</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>hushed</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>vibrated</span> <span class='slop-word-item'>lilt</span> <span class='slop-word-item'>nonchalance</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>grudging</span> <span class='slop-word-item'>mirroring</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>luminescence</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>sliver</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>terran</span> <span class='slop-word-item'>theatricality</span> <span class='slop-word-item'>languid</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>meticulously</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>something akin</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>stark contrast</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>eyes like</span> <span class='slop-ngram-item'>metallic tang</span> <span class='slop-ngram-item'>ghost smile</span> <span class='slop-ngram-item'>touching lips</span> <span class='slop-ngram-item'>subtle shift</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>got ta</span> <span class='slop-ngram-item'>would agree</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>less like</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>smile touching</span> <span class='slop-ngram-item'>back home</span> <span class='slop-ngram-item'>damp earth</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>gilded cage</span> <span class='slop-ngram-item'>chuckled sound</span> <span class='slop-ngram-item'>carefully cultivated</span> <span class='slop-ngram-item'>like polished</span> <span class='slop-ngram-item'>internal monologue</span> <span class='slop-ngram-item'>ever pragmatist</span> <span class='slop-ngram-item'>existential dread</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>flicker something akin</span> <span class='slop-ngram-item'>smile touching lips</span> <span class='slop-ngram-item'>eyes like polished</span> <span class='slop-ngram-item'>chuckled sound like</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>ghost smile touching</span> <span class='slop-ngram-item'>voice low murmur</span> <span class='slop-ngram-item'>felt less like</span> <span class='slop-ngram-item'>like polished obsidian</span> <span class='slop-ngram-item'>like second skin</span> <span class='slop-ngram-item'>scent damp earth</span> <span class='slop-ngram-item'>like dry leaves</span> <span class='slop-ngram-item'>dry leaves skittering</span> <span class='slop-ngram-item'>sent shiver spine</span> <span class='slop-ngram-item'>smirk playing lips</span> <span class='slop-ngram-item'>voice silken rasp</span> <span class='slop-ngram-item'>clung like second</span> <span class='slop-ngram-item'>smile spreading across</span> <span class='slop-ngram-item'>spreading across face</span> <span class='slop-ngram-item'>smile touched lips</span> <span class='slop-ngram-item'>paused ghost smile</span> <span class='slop-ngram-item'>feels less like</span> <span class='slop-ngram-item'>ghost smile playing</span> <span class='slop-ngram-item'>predator assessing prey</span> <span class='slop-ngram-item'>maybe year two</span> <span class='slop-ngram-item'>sound like wind</span> <span class='slop-ngram-item'>carefully constructed facade</span> <span class='slop-ngram-item'>elongated dancing shadows</span> <span class='slop-ngram-item'>metronome marking time</span> <span class='slop-ngram-item'>voice low rumble</span>
</div>

##### ToastyPigeon/Gemma-3-Starshine-12B
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>evangeline</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>rhys</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>dictating</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>aurelia</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>savoring</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>scavengers</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>clasped</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>kaleidoscope</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>shrugged</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>thorne</span> <span class='slop-word-item'>glared</span> <span class='slop-word-item'>hoarse</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice trembling</span> <span class='slop-ngram-item'>shook head</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>closed eyes</span> <span class='slop-ngram-item'>eyes wide</span> <span class='slop-ngram-item'>looked eyes</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>long time</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>eyes filled</span> <span class='slop-ngram-item'>find way</span> <span class='slop-ngram-item'>barely audible</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>eyes widened</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>said eyes</span> <span class='slop-ngram-item'>opened eyes</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>felt surge</span> <span class='slop-ngram-item'>eyes gleaming</span> <span class='slop-ngram-item'>long moment</span> <span class='slop-ngram-item'>pounding chest</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>said voice trembling</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>asked voice trembling</span> <span class='slop-ngram-item'>said voice soft</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>asked voice barely</span> <span class='slop-ngram-item'>said voice flat</span> <span class='slop-ngram-item'>hair pulled back</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>turned walked away</span> <span class='slop-ngram-item'>looked eyes filled</span> <span class='slop-ngram-item'>voice dripping sarcasm</span> <span class='slop-ngram-item'>opened eyes looked</span> <span class='slop-ngram-item'>chill run spine</span> <span class='slop-ngram-item'>leaned forward eyes</span> <span class='slop-ngram-item'>trying keep voice</span> <span class='slop-ngram-item'>said trying sound</span> <span class='slop-ngram-item'>voice trembling slightly</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>said shaking head</span> <span class='slop-ngram-item'>could feel heat</span> <span class='slop-ngram-item'>deep breath trying</span>
</div>

##### mistralai/Mistral-Nemo-Instruct-2407
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>drawled</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>coiling</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>writhing</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>hums</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>grimy</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>echoing</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>lunged</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>gasps</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>scoffed</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>hissed</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>smirked</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>rustle</span> <span class='slop-word-item'>sighed</span> <span class='slop-word-item'>trembled</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>flicker</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>li wei</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>pounding chest</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>take deep</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>find way</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>voice soft</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>eyes meeting</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>small smile</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>eyes gleaming</span> <span class='slop-ngram-item'>breath trying</span> <span class='slop-ngram-item'>always going</span> <span class='slop-ngram-item'>shook head</span> <span class='slop-ngram-item'>say voice</span> <span class='slop-ngram-item'>eyes wide</span> <span class='slop-ngram-item'>sound like</span> <span class='slop-ngram-item'>let go</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>deep breath trying</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>said voice steady</span> <span class='slop-ngram-item'>eyes meeting mine</span> <span class='slop-ngram-item'>small smile playing</span> <span class='slop-ngram-item'>voice steady despite</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>breath trying calm</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>chill run spine</span> <span class='slop-ngram-item'>one step time</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>felt chill run</span> <span class='slop-ngram-item'>take one step</span> <span class='slop-ngram-item'>step time one</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>leaned back chair</span> <span class='slop-ngram-item'>says voice soft</span> <span class='slop-ngram-item'>laughed sound like</span> <span class='slop-ngram-item'>asked voice barely</span> <span class='slop-ngram-item'>looks eyes meeting</span> <span class='slop-ngram-item'>spreading across face</span> <span class='slop-ngram-item'>find way make</span> <span class='slop-ngram-item'>elara said voice</span> <span class='slop-ngram-item'>like distant thunder</span>
</div>

##### gpt-4o-mini
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>thrumming</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>keter</span> <span class='slop-word-item'>hargrove</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>tousled</span> <span class='slop-word-item'>steadier</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>steadying</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>igniting</span> <span class='slop-word-item'>mingling</span> <span class='slop-word-item'>ominously</span> <span class='slop-word-item'>gnawed</span> <span class='slop-word-item'>interjected</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>flickers</span> <span class='slop-word-item'>falters</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>hesitates</span> <span class='slop-word-item'>smirking</span> <span class='slop-word-item'>intoxicating</span> <span class='slop-word-item'>mischief</span> <span class='slop-word-item'>echoed</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>lacing</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>seeped</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>heart racing</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>heart raced</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>replied voice</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>felt weight</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>around us</span> <span class='slop-ngram-item'>around like</span> <span class='slop-ngram-item'>let see</span> <span class='slop-ngram-item'>voice smooth</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>could see</span> <span class='slop-ngram-item'>let go</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>thick scent</span> <span class='slop-ngram-item'>help feel</span> <span class='slop-ngram-item'>heart races</span> <span class='slop-ngram-item'>air like</span> <span class='slop-ngram-item'>stark contrast</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>eyes glinting mischief</span> <span class='slop-ngram-item'>replied voice barely</span> <span class='slop-ngram-item'>long shadows across</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>item object class</span> <span class='slop-ngram-item'>object class keter</span> <span class='slop-ngram-item'>class keter special</span> <span class='slop-ngram-item'>keter special containment</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>sent shiver spine</span> <span class='slop-ngram-item'>closer voice dropping</span> <span class='slop-ngram-item'>wrapping around like</span> <span class='slop-ngram-item'>low sky casting</span> <span class='slop-ngram-item'>said voice smooth</span> <span class='slop-ngram-item'>voice smooth silk</span> <span class='slop-ngram-item'>could almost hear</span> <span class='slop-ngram-item'>casting warm glow</span> <span class='slop-ngram-item'>chill run spine</span> <span class='slop-ngram-item'>shake feeling something</span> <span class='slop-ngram-item'>door swings open</span> <span class='slop-ngram-item'>voice dropping whisper</span> <span class='slop-ngram-item'>voice barely rising</span> <span class='slop-ngram-item'>voice trembling slightly</span>
</div>

##### meta-llama/llama-3.1-405b-instruct
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>mirthless</span> <span class='slop-word-item'>kaelin</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>amnesiac</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>elyria</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>erebus</span> <span class='slop-word-item'>frazzled</span> <span class='slop-word-item'>newhaven</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>eerie</span> <span class='slop-word-item'>clutched</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>glassy</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>whispered</span> <span class='slop-word-item'>flicking</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>incident report</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>eyes sparkling</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>shiver run</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>felt shiver</span> <span class='slop-ngram-item'>hesitated unsure</span> <span class='slop-ngram-item'>find way</span> <span class='slop-ngram-item'>eyes never</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>eyes widened</span> <span class='slop-ngram-item'>heart skipped</span> <span class='slop-ngram-item'>skipped beat</span> <span class='slop-ngram-item'>true nature</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>heart skipped beat</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>made way back</span> <span class='slop-ngram-item'>sun began set</span> <span class='slop-ngram-item'>began set casting</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>casting golden glow</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>eyes glinting amusement</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>casting eerie shadows</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>set casting golden</span> <span class='slop-ngram-item'>says voice dripping</span> <span class='slop-ngram-item'>flush rise cheeks</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>could help feel</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>smile grew wider</span>
</div>

##### google/gemma-2-9b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>aethel</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>kaito</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>hulking</span> <span class='slop-word-item'>purrs</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>throaty</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>silken</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>scoffs</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>saccharine</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>throngs</span> <span class='slop-word-item'>wiry</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>swirling</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>guttural</span> <span class='slop-word-item'>hoarse</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>hushed</span> <span class='slop-word-item'>twinkling</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>clung</span> <span class='slop-word-item'>whirlwind</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>thick scent</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>say voice</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>gaze fixed</span> <span class='slop-ngram-item'>voice trembling</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>voice soft</span> <span class='slop-ngram-item'>pounding chest</span> <span class='slop-ngram-item'>shadows across</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>dim light</span> <span class='slop-ngram-item'>eyes filled</span> <span class='slop-ngram-item'>around us</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>asks voice</span> <span class='slop-ngram-item'>whispered voice</span> <span class='slop-ngram-item'>constant reminder</span> <span class='slop-ngram-item'>eyes wide</span> <span class='slop-ngram-item'>voice dropping</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>voice dropping conspiratorial</span> <span class='slop-ngram-item'>dropping conspiratorial whisper</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>asked voice barely</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>voice low murmur</span> <span class='slop-ngram-item'>long shadows across</span> <span class='slop-ngram-item'>said voice soft</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>said voice dropping</span> <span class='slop-ngram-item'>hand instinctively reaching</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>voice low rumble</span> <span class='slop-ngram-item'>sent shiver spine</span> <span class='slop-ngram-item'>said voice laced</span> <span class='slop-ngram-item'>sent shivers spine</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>says voice low</span> <span class='slop-ngram-item'>closer breath warm</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>air hung heavy</span> <span class='slop-ngram-item'>thick scent sweat</span> <span class='slop-ngram-item'>casting dancing shadows</span> <span class='slop-ngram-item'>air hung thick</span>
</div>

##### liquid/lfm-7b
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>glinted</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>clinking</span> <span class='slop-word-item'>nonchalance</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>scavenged</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>undercurrent</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>laced</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>fleeting</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>fidgeting</span> <span class='slop-word-item'>pragmatist</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>elysium</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>infernal</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>bustling</span> <span class='slop-word-item'>coiled</span> <span class='slop-word-item'>precariously</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>gravelly</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>thick scent</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>stark contrast</span> <span class='slop-ngram-item'>maybe maybe</span> <span class='slop-ngram-item'>casting long</span> <span class='slop-ngram-item'>long shadows</span> <span class='slop-ngram-item'>shadows across</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>let say</span> <span class='slop-ngram-item'>dim light</span> <span class='slop-ngram-item'>let make</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>began voice</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>feels like</span> <span class='slop-ngram-item'>movements fluid</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>long shadows across</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>heart skipped beat</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>flicker something akin</span> <span class='slop-ngram-item'>choosing words carefully</span> <span class='slop-ngram-item'>cast long shadows</span> <span class='slop-ngram-item'>voice steady despite</span> <span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>piercing blue eyes</span> <span class='slop-ngram-item'>hung heavy air</span> <span class='slop-ngram-item'>breath warm ear</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>eyes locking onto</span> <span class='slop-ngram-item'>said finally voice</span> <span class='slop-ngram-item'>mind already racing</span> <span class='slop-ngram-item'>made way back</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>eyebrow intrigued despite</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>eyes crinkling corners</span> <span class='slop-ngram-item'>every word every</span>
</div>

##### meta-llama/llama-3.1-70b-instruct
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>newhaven</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>swirled</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>unnerving</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>unspoken</span> <span class='slop-word-item'>comms</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>dripping</span> <span class='slop-word-item'>glances</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>exertion</span> <span class='slop-word-item'>crackling</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>rustling</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>shiver run</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>feeling sense</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>trying sound</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>felt shiver</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>eyes scanning</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>take deep</span> <span class='slop-ngram-item'>eyes sparkled</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>dimly lit</span> <span class='slop-ngram-item'>locked onto</span> <span class='slop-ngram-item'>across face</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>spreading across face</span> <span class='slop-ngram-item'>deep breath try</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>sun began set</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>heart skipped beat</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>eyes glinting amusement</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>smile spreading across</span> <span class='slop-ngram-item'>air thick smell</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>voice low smooth</span> <span class='slop-ngram-item'>said trying sound</span> <span class='slop-ngram-item'>began set casting</span> <span class='slop-ngram-item'>eyes scanning room</span> <span class='slop-ngram-item'>casting long shadows</span> <span class='slop-ngram-item'>mind racing implications</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>started feel like</span> <span class='slop-ngram-item'>trying sound nonchalant</span> <span class='slop-ngram-item'>eyes sparkled amusement</span> <span class='slop-ngram-item'>casting eerie glow</span>
</div>

##### mistralai/mistral-small-3.1-24b-instruct-2503
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>foghorn</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>blackwood</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>sneer</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>fluttered</span> <span class='slop-word-item'>untamed</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>gruff</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>clanging</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>burly</span> <span class='slop-word-item'>curled</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>belied</span> <span class='slop-word-item'>downcast</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>coldness</span> <span class='slop-word-item'>buzzes</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>disheveled</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>wavering</span> <span class='slop-word-item'>arcane</span> <span class='slop-word-item'>inscrutable</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>gleaming</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>find way</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>eyes never</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>never leaving</span> <span class='slop-ngram-item'>must say</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>ca help</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>leaving face</span> <span class='slop-ngram-item'>take deep</span> <span class='slop-ngram-item'>lips curled</span> <span class='slop-ngram-item'>say quite</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>pounding chest</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>voice soft</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>step closer</span> <span class='slop-ngram-item'>paying price</span> <span class='slop-ngram-item'>breath trying</span> <span class='slop-ngram-item'>say voice</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>damage done</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>never leaving face</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>must say quite</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>deep breath trying</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>heart sank realized</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>voice steady despite</span> <span class='slop-ngram-item'>elara smile widened</span> <span class='slop-ngram-item'>help feel sense</span> <span class='slop-ngram-item'>says voice soft</span> <span class='slop-ngram-item'>takes deep breath</span> <span class='slop-ngram-item'>say voice barely</span> <span class='slop-ngram-item'>make sound like</span> <span class='slop-ngram-item'>asked voice steady</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>barely whisper like</span> <span class='slop-ngram-item'>tears streaming face</span> <span class='slop-ngram-item'>sank realized truth</span> <span class='slop-ngram-item'>lips curled sneer</span> <span class='slop-ngram-item'>deep breath steeling</span> <span class='slop-ngram-item'>ca help feel</span> <span class='slop-ngram-item'>eyes sparkling amusement</span> <span class='slop-ngram-item'>feel tears streaming</span> <span class='slop-ngram-item'>took another step</span> <span class='slop-ngram-item'>another step closer</span> <span class='slop-ngram-item'>lips curled smirk</span>
</div>

##### meta-llama/llama-3.1-8b-instruct
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>beeped</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>coaxing</span> <span class='slop-word-item'>quickened</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>alleyway</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>flicking</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>makeshift</span> <span class='slop-word-item'>scribbled</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>strode</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>jolt</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>eyes scanning</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>locked onto</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>felt sense</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>shiver run</span> <span class='slop-ngram-item'>trying sound</span> <span class='slop-ngram-item'>eyes never</span> <span class='slop-ngram-item'>never leaving</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>sense unease</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>felt shiver</span> <span class='slop-ngram-item'>find way</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>sun began set</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>heart skipped beat</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>eyes scanning room</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>began set casting</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>trying sound nonchalant</span> <span class='slop-ngram-item'>made way back</span> <span class='slop-ngram-item'>eyes darting around</span> <span class='slop-ngram-item'>say trying sound</span> <span class='slop-ngram-item'>casting eerie glow</span> <span class='slop-ngram-item'>casting golden glow</span> <span class='slop-ngram-item'>thought aside focusing</span> <span class='slop-ngram-item'>asked voice low</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>eyes crinkling corners</span> <span class='slop-ngram-item'>make mental note</span> <span class='slop-ngram-item'>smile grew wider</span> <span class='slop-ngram-item'>mind racing possibilities</span>
</div>

##### mistralai/Mistral-Small-24B-Instruct-2501
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>steeling</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>crackles</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>trickling</span> <span class='slop-word-item'>tensing</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>hummed</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crackled</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>intoxicating</span> <span class='slop-word-item'>whirlwind</span> <span class='slop-word-item'>sneer</span> <span class='slop-word-item'>palpable</span> <span class='slop-word-item'>allure</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>unyielding</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>raced</span> <span class='slop-word-item'>grizzled</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>carvings</span> <span class='slop-word-item'>growl</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>gripped</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>coursing</span> <span class='slop-word-item'>rustling</span> <span class='slop-word-item'>gnawing</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>bounty</span> <span class='slop-word-item'>haze</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>trembling</span> <span class='slop-word-item'>smirk</span> <span class='slop-word-item'>clatter</span> <span class='slop-word-item'>grimy</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>voice steady</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>eyes never</span> <span class='slop-ngram-item'>never leaving</span> <span class='slop-ngram-item'>think might</span> <span class='slop-ngram-item'>mind raced</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>find way</span> <span class='slop-ngram-item'>stark contrast</span> <span class='slop-ngram-item'>eyes scanning</span> <span class='slop-ngram-item'>take deep</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>took step</span> <span class='slop-ngram-item'>could feel</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>let see</span> <span class='slop-ngram-item'>makes think</span> <span class='slop-ngram-item'>breath trying</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>danger could</span> <span class='slop-ngram-item'>steady despite</span> <span class='slop-ngram-item'>steady need</span> <span class='slop-ngram-item'>stark reminder</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>think wo</span> <span class='slop-ngram-item'>need someone</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>said voice steady</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>deep breath trying</span> <span class='slop-ngram-item'>voice steady despite</span> <span class='slop-ngram-item'>makes think wo</span> <span class='slop-ngram-item'>voice steady need</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>took step back</span> <span class='slop-ngram-item'>could feel presence</span> <span class='slop-ngram-item'>step back eyes</span> <span class='slop-ngram-item'>deep breath steeling</span> <span class='slop-ngram-item'>breath trying steady</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>thoughts whirlwind possibilities</span> <span class='slop-ngram-item'>deep breath try</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>breath try steady</span> <span class='slop-ngram-item'>sent shiver spine</span> <span class='slop-ngram-item'>streets slick rain</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>took step closer</span> <span class='slop-ngram-item'>step closer eyes</span> <span class='slop-ngram-item'>made way back</span> <span class='slop-ngram-item'>voice low growl</span> <span class='slop-ngram-item'>ca help feel</span> <span class='slop-ngram-item'>help feel sense</span> <span class='slop-ngram-item'>chill run spine</span> <span class='slop-ngram-item'>voice barely audible</span>
</div>

##### anthropic/claude-3-haiku
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>whirred</span> <span class='slop-word-item'>furrowing</span> <span class='slop-word-item'>furrowed</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>purred</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>placating</span> <span class='slop-word-item'>amara</span> <span class='slop-word-item'>transfixed</span> <span class='slop-word-item'>kiran</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>acrid</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>warily</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>shivered</span> <span class='slop-word-item'>glanced</span> <span class='slop-word-item'>sheepish</span> <span class='slop-word-item'>stammer</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>flickering</span> <span class='slop-word-item'>bustling</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>murmurs</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>nods</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>exhilaration</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>glancing</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>cavernous</span> <span class='slop-word-item'>scavengers</span> <span class='slop-word-item'>brow</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>murmur</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>intently</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>leaned</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>hurried</span> <span class='slop-word-item'>pounding</span> <span class='slop-word-item'>blinked</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>ca help</span> <span class='slop-ngram-item'>heart pounding</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>shook head</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>brow furrowed</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>small smile</span> <span class='slop-ngram-item'>narrative perspective</span> <span class='slop-ngram-item'>eyes widened</span> <span class='slop-ngram-item'>let see</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>help notice</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>heart racing</span> <span class='slop-ngram-item'>opened mouth</span> <span class='slop-ngram-item'>must say</span> <span class='slop-ngram-item'>eyes narrow</span> <span class='slop-ngram-item'>leaned forward</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>raised hand</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>could say</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>lips curled</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>chill run spine</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>brow furrowed concentration</span> <span class='slop-ngram-item'>ca help notice</span> <span class='slop-ngram-item'>felt chill run</span> <span class='slop-ngram-item'>breath caught throat</span> <span class='slop-ngram-item'>air thick scent</span> <span class='slop-ngram-item'>opened mouth protest</span> <span class='slop-ngram-item'>raised hand silencing</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>ca help feel</span> <span class='slop-ngram-item'>help feel sense</span> <span class='slop-ngram-item'>could help notice</span> <span class='slop-ngram-item'>word narrative perspective</span> <span class='slop-ngram-item'>made way back</span> <span class='slop-ngram-item'>leaned forward eyes</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>could help wonder</span> <span class='slop-ngram-item'>casting eerie glow</span> <span class='slop-ngram-item'>takes step closer</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>turned attention back</span> <span class='slop-ngram-item'>panic rising chest</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>description refers series</span>
</div>

##### meta-llama/llama-3.2-3b-instruct
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>wafted</span> <span class='slop-word-item'>gleamed</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>wavered</span> <span class='slop-word-item'>reeled</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>weaved</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>cacophony</span> <span class='slop-word-item'>lingered</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>redacted</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>anomalous</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>jumbled</span> <span class='slop-word-item'>muttered</span> <span class='slop-word-item'>glimmer</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>addendum</span> <span class='slop-word-item'>groaned</span> <span class='slop-word-item'>gazed</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>shivers</span> <span class='slop-word-item'>piqued</span> <span class='slop-word-item'>gleaming</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>dripping</span> <span class='slop-word-item'>jolt</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>eyes scanning</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>felt sense</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>run spine</span> <span class='slop-ngram-item'>shiver run</span> <span class='slop-ngram-item'>feeling sense</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>eyes never</span> <span class='slop-ngram-item'>locked onto</span> <span class='slop-ngram-item'>felt shiver</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>air thick</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>eyes widened</span> <span class='slop-ngram-item'>never leaving</span> <span class='slop-ngram-item'>trying sound</span> <span class='slop-ngram-item'>grew wider</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>eyes glinting amusement</span> <span class='slop-ngram-item'>smile grew wider</span> <span class='slop-ngram-item'>heart skipped beat</span> <span class='slop-ngram-item'>could help wonder</span> <span class='slop-ngram-item'>mind racing possibilities</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>deep breath trying</span> <span class='slop-ngram-item'>voice dripping sarcasm</span> <span class='slop-ngram-item'>locked onto mine</span> <span class='slop-ngram-item'>raised eyebrow intrigued</span> <span class='slop-ngram-item'>trying sound nonchalant</span> <span class='slop-ngram-item'>could help feel</span> <span class='slop-ngram-item'>eyes locked mine</span> <span class='slop-ngram-item'>starting feel like</span> <span class='slop-ngram-item'>eyes seemed bore</span> <span class='slop-ngram-item'>spreading across face</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>nodded feeling sense</span>
</div>

##### meta-llama/llama-3.2-1b-instruct
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>elara</span> <span class='slop-word-item'>glinting</span> <span class='slop-word-item'>arachne</span> <span class='slop-word-item'>crinkling</span> <span class='slop-word-item'>kael</span> <span class='slop-word-item'>erebus</span> <span class='slop-word-item'>creaked</span> <span class='slop-word-item'>twinge</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>wariness</span> <span class='slop-word-item'>sparkled</span> <span class='slop-word-item'>trepidation</span> <span class='slop-word-item'>defensiveness</span> <span class='slop-word-item'>faltered</span> <span class='slop-word-item'>writhe</span> <span class='slop-word-item'>containment</span> <span class='slop-word-item'>shiver</span> <span class='slop-word-item'>nodded</span> <span class='slop-word-item'>otherworldly</span> <span class='slop-word-item'>narrowed</span> <span class='slop-word-item'>flashed</span> <span class='slop-word-item'>chuckled</span> <span class='slop-word-item'>dimly</span> <span class='slop-word-item'>hesitated</span> <span class='slop-word-item'>trudged</span> <span class='slop-word-item'>gravelly</span> <span class='slop-word-item'>glint</span> <span class='slop-word-item'>widened</span> <span class='slop-word-item'>grinned</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>jolt</span> <span class='slop-word-item'>agonizing</span> <span class='slop-word-item'>takashi</span> <span class='slop-word-item'>pang</span> <span class='slop-word-item'>akira</span> <span class='slop-word-item'>darting</span> <span class='slop-word-item'>growled</span> <span class='slop-word-item'>nonchalant</span> <span class='slop-word-item'>husky</span> <span class='slop-word-item'>creaking</span> <span class='slop-word-item'>illuminating</span> <span class='slop-word-item'>snorted</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>conspiratorial</span> <span class='slop-word-item'>eyebrow</span> <span class='slop-word-item'>navigated</span> <span class='slop-word-item'>darted</span> <span class='slop-word-item'>gaze</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>mind racing</span> <span class='slop-ngram-item'>feel like</span> <span class='slop-ngram-item'>eyes narrowed</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>deep breath</span> <span class='slop-ngram-item'>eyes widened</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>help us</span> <span class='slop-ngram-item'>eyes seemed</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>eyes scanning</span> <span class='slop-ngram-item'>shake feeling</span> <span class='slop-ngram-item'>could help</span> <span class='slop-ngram-item'>feel sense</span> <span class='slop-ngram-item'>eyes locked</span> <span class='slop-ngram-item'>felt sense</span> <span class='slop-ngram-item'>narrowed mind</span> <span class='slop-ngram-item'>felt surge</span> <span class='slop-ngram-item'>could shake</span> <span class='slop-ngram-item'>feel surge</span> <span class='slop-ngram-item'>raised eyebrow</span> <span class='slop-ngram-item'>make feel</span> <span class='slop-ngram-item'>made way</span> <span class='slop-ngram-item'>took deep</span> <span class='slop-ngram-item'>eyes glinting</span> <span class='slop-ngram-item'>voice dripping</span> <span class='slop-ngram-item'>trying sound</span> <span class='slop-ngram-item'>locked onto</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>narrowed mind racing</span> <span class='slop-ngram-item'>eyes narrowed mind</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>could shake feeling</span> <span class='slop-ngram-item'>took deep breath</span> <span class='slop-ngram-item'>shiver run spine</span> <span class='slop-ngram-item'>felt shiver run</span> <span class='slop-ngram-item'>take deep breath</span> <span class='slop-ngram-item'>mind racing possibilities</span> <span class='slop-ngram-item'>eyes locked onto</span> <span class='slop-ngram-item'>eyes never leaving</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>eyes widened face</span> <span class='slop-ngram-item'>make feel like</span> <span class='slop-ngram-item'>heart pounding chest</span> <span class='slop-ngram-item'>voice low husky</span> <span class='slop-ngram-item'>said voice dripping</span> <span class='slop-ngram-item'>smile grew wider</span> <span class='slop-ngram-item'>eyes glinting amusement</span> <span class='slop-ngram-item'>smile faltered moment</span> <span class='slop-ngram-item'>eyes seemed bore</span> <span class='slop-ngram-item'>grew wider eyes</span> <span class='slop-ngram-item'>starting feel like</span> <span class='slop-ngram-item'>try push thought</span> <span class='slop-ngram-item'>trying sound casual</span> <span class='slop-ngram-item'>could help feel</span> <span class='slop-ngram-item'>casting eerie glow</span> <span class='slop-ngram-item'>lurking beneath surface</span> <span class='slop-ngram-item'>much longer keep</span>
</div>

##### google/gemma-3-4b-it:free
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>xylos</span> <span class='slop-word-item'>elara</span> <span class='slop-word-item'>unsettlingly</span> <span class='slop-word-item'>unnervingly</span> <span class='slop-word-item'>shimmered</span> <span class='slop-word-item'>prickle</span> <span class='slop-word-item'>disconcertingly</span> <span class='slop-word-item'>chronos</span> <span class='slop-word-item'>imperceptible</span> <span class='slop-word-item'>kenji</span> <span class='slop-word-item'>grunted</span> <span class='slop-word-item'>unreadable</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>valerius</span> <span class='slop-word-item'>impassive</span> <span class='slop-word-item'>chillingly</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>stammered</span> <span class='slop-word-item'>sputtered</span> <span class='slop-word-item'>insistent</span> <span class='slop-word-item'>gestured</span> <span class='slop-word-item'>flickered</span> <span class='slop-word-item'>mumbled</span> <span class='slop-word-item'>cloying</span> <span class='slop-word-item'>rasp</span> <span class='slop-word-item'>meticulously</span> <span class='slop-word-item'>obsidian</span> <span class='slop-word-item'>disconcerting</span> <span class='slop-word-item'>slicked</span> <span class='slop-word-item'>shimmering</span> <span class='slop-word-item'>silas</span> <span class='slop-word-item'>perceptible</span> <span class='slop-word-item'>retorts</span> <span class='slop-word-item'>murmured</span> <span class='slop-word-item'>cobblestones</span> <span class='slop-word-item'>lyra</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>mournful</span> <span class='slop-word-item'>intricately</span> <span class='slop-word-item'>unease</span> <span class='slop-word-item'>gesturing</span> <span class='slop-word-item'>labyrinthine</span> <span class='slop-word-item'>pulsed</span> <span class='slop-word-item'>iridescent</span> <span class='slop-word-item'>subtly</span> <span class='slop-word-item'>dampness</span> <span class='slop-word-item'>instinctively</span> <span class='slop-word-item'>dissecting</span> <span class='slop-word-item'>sandalwood</span> <span class='slop-word-item'>impeccably</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>flicker something</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>carefully constructed</span> <span class='slop-ngram-item'>says voice</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>almost imperceptible</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>playing lips</span> <span class='slop-ngram-item'>smile playing</span> <span class='slop-ngram-item'>something akin</span> <span class='slop-ngram-item'>something vaguely</span> <span class='slop-ngram-item'>voice softer</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>voice laced</span> <span class='slop-ngram-item'>like trying</span> <span class='slop-ngram-item'>asked voice</span> <span class='slop-ngram-item'>look like</span> <span class='slop-ngram-item'>low rumble</span> <span class='slop-ngram-item'>know said</span> <span class='slop-ngram-item'>chilling certainty</span> <span class='slop-ngram-item'>long time</span> <span class='slop-ngram-item'>first time</span> <span class='slop-ngram-item'>something unreadable</span> <span class='slop-ngram-item'>stark contrast</span> <span class='slop-ngram-item'>subtle shift</span> <span class='slop-ngram-item'>metallic tang</span> <span class='slop-ngram-item'>rain continued</span> <span class='slop-ngram-item'>continued fall</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>smile playing lips</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>voice low rumble</span> <span class='slop-ngram-item'>rain continued fall</span> <span class='slop-ngram-item'>said voice barely</span> <span class='slop-ngram-item'>flicker something unreadable</span> <span class='slop-ngram-item'>voice barely audible</span> <span class='slop-ngram-item'>something unreadable eyes</span> <span class='slop-ngram-item'>small intricately carved</span> <span class='slop-ngram-item'>voice devoid emotion</span> <span class='slop-ngram-item'>flicker something akin</span> <span class='slop-ngram-item'>something vaguely metallic</span> <span class='slop-ngram-item'>knew chilling certainty</span> <span class='slop-ngram-item'>something else something</span> <span class='slop-ngram-item'>said voice softer</span> <span class='slop-ngram-item'>carefully constructed facade</span> <span class='slop-ngram-item'>hand instinctively moving</span> <span class='slop-ngram-item'>tasting like ash</span> <span class='slop-ngram-item'>continued fall washing</span> <span class='slop-ngram-item'>small almost imperceptible</span> <span class='slop-ngram-item'>air hung thick</span> <span class='slop-ngram-item'>tiny almost imperceptible</span> <span class='slop-ngram-item'>object class euclid</span> <span class='slop-ngram-item'>class euclid special</span> <span class='slop-ngram-item'>euclid special containment</span> <span class='slop-ngram-item'>special containment procedures</span> <span class='slop-ngram-item'>first time day</span> <span class='slop-ngram-item'>small smile playing</span> <span class='slop-ngram-item'>said voice little</span>
</div>

##### unsloth/gemma-3-12b-it
<h4>Top Repetitive Words</h4>
<div class='slop-section-items'>
<span class='slop-word-item'>squeak</span> <span class='slop-word-item'>unsettling</span> <span class='slop-word-item'>radiating</span> <span class='slop-word-item'>flicker</span> <span class='slop-word-item'>tremor</span> <span class='slop-word-item'>relentless</span> <span class='slop-word-item'>crumbling</span> <span class='slop-word-item'>paused</span> <span class='slop-word-item'>gaze</span> <span class='slop-word-item'>defiance</span> <span class='slop-word-item'>damp</span> <span class='slop-word-item'>adapting</span> <span class='slop-word-item'>scent</span> <span class='slop-word-item'>vulnerability</span> <span class='slop-word-item'>eleanor</span> <span class='slop-word-item'>smiled</span> <span class='slop-word-item'>brutal</span> <span class='slop-word-item'>shadows</span> <span class='slop-word-item'>aimed</span> <span class='slop-word-item'>entities</span> <span class='slop-word-item'>civilization</span> <span class='slop-word-item'>surprisingly</span> <span class='slop-word-item'>marcus</span> <span class='slop-word-item'>judging</span> <span class='slop-word-item'>barely</span> <span class='slop-word-item'>habit</span> <span class='slop-word-item'>sweat</span> <span class='slop-word-item'>subtle</span> <span class='slop-word-item'>desperate</span> <span class='slop-word-item'>hung</span> <span class='slop-word-item'>forcing</span> <span class='slop-word-item'>smile</span> <span class='slop-word-item'>recovered</span> <span class='slop-word-item'>designated</span> <span class='slop-word-item'>arena</span> <span class='slop-word-item'>movements</span> <span class='slop-word-item'>sharp</span> <span class='slop-word-item'>rapid</span> <span class='slop-word-item'>expression</span> <span class='slop-word-item'>silence</span> <span class='slop-word-item'>dust</span> <span class='slop-word-item'>familiar</span> <span class='slop-word-item'>lips</span> <span class='slop-word-item'>stomach</span> <span class='slop-word-item'>voice</span> <span class='slop-word-item'>strike</span> <span class='slop-word-item'>landscape</span> <span class='slop-word-item'>seed</span> <span class='slop-word-item'>silent</span> <span class='slop-word-item'>pattern</span>
</div>
<h4>Top Bigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>voice low</span> <span class='slop-ngram-item'>said voice</span> <span class='slop-ngram-item'>something else</span> <span class='slop-ngram-item'>years since</span> <span class='slop-ngram-item'>felt like</span> <span class='slop-ngram-item'>voice barely</span> <span class='slop-ngram-item'>hung air</span> <span class='slop-ngram-item'>leaving behind</span> <span class='slop-ngram-item'>managed voice</span> <span class='slop-ngram-item'>fleeting moment</span> <span class='slop-ngram-item'>closed eyes</span> <span class='slop-ngram-item'>caught glimpse</span> <span class='slop-ngram-item'>hair pulled</span> <span class='slop-ngram-item'>pulled back</span> <span class='slop-ngram-item'>say something</span> <span class='slop-ngram-item'>barely whisper</span> <span class='slop-ngram-item'>extended hand</span> <span class='slop-ngram-item'>hesitated moment</span> <span class='slop-ngram-item'>small smile</span> <span class='slop-ngram-item'>asks voice</span> <span class='slop-ngram-item'>long distorted</span> <span class='slop-ngram-item'>distorted shadows</span> <span class='slop-ngram-item'>little bit</span> <span class='slop-ngram-item'>barely perceptible</span> <span class='slop-ngram-item'>eyes fixed</span> <span class='slop-ngram-item'>ah yes</span> <span class='slop-ngram-item'>like wind</span> <span class='slop-ngram-item'>burst laughing</span> <span class='slop-ngram-item'>slightly less</span> <span class='slop-ngram-item'>carefully constructed</span>
</div>
<h4>Top Trigrams</h4>
<div class='slop-section-items'>
<span class='slop-ngram-item'>hair pulled back</span> <span class='slop-ngram-item'>voice barely whisper</span> <span class='slop-ngram-item'>long distorted shadows</span> <span class='slop-ngram-item'>eyes like chips</span> <span class='slop-ngram-item'>dark hair pulled</span> <span class='slop-ngram-item'>said voice low</span> <span class='slop-ngram-item'>something else something</span>
</div>`


// --- Global Scope Variables ---
let eloScores = [];
let rubricScores = [];
let maxEloScore;
let maxRubricScore;
let baselineEloScore;
let baselineRubricScore;
let lastSortedScoreColumn = 5; // Default Elo (column index 5)
// --- End Global Scope Variables ---

// --- Dark Mode / Theme / Email Functions ---
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


function parseSlopData(modelName) {
  if (!slopData || !modelName) {
      return "<p><i>Slop profile data not available.</i></p>";
  }
  // Escape modelName for regex safety, especially for names with special chars
  const escapedModelName = modelName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^#####\\s*${escapedModelName}\\s*$`, 'm'); // Match start of line, model name, end of line
  const match = slopData.split(regex); // Split by the delimiter line

  if (match.length > 1) {
      // The content we want is after the matched delimiter line
      const contentAfterDelimiter = match[1];
      if (contentAfterDelimiter) {
          // Find the next delimiter or end of string
          const nextDelimiterMatch = contentAfterDelimiter.search(/^#####\s/m);
          if (nextDelimiterMatch !== -1) {
              return contentAfterDelimiter.substring(0, nextDelimiterMatch).trim();
          } else {
              // It's the last model in the string
              return contentAfterDelimiter.trim();
          }
      }
  }
  console.warn(`Slop profile not found for model: ${modelName}`);
  return `<p><i>Slop profile not found for model: ${modelName}</i></p>`;
}


// Gradient logic (applies to visible bars)
function updateScoreBarColorsV3() {
  const scoreBars = document.querySelectorAll('#leaderboard .creative-writing-score-bar');
  const isDarkMode = document.body.classList.contains('dark-mode');

  scoreBars.forEach((bar) => {
    if ($(bar).is(':visible')) { // Check visibility
        const overallIndex = $(bar).closest('tr').index();
        const totalRows = $('#leaderboard tbody tr').length;
        if (totalRows === 0) return; // Avoid division by zero

        const startPercent = (overallIndex / totalRows);
        const endPercent = ((overallIndex + 1) / totalRows);
        const lightness = isDarkMode ? '50%' : '80%';
        const startColor = `hsl(${startPercent * 360}, 40%, ${lightness})`;
        const endColor = `hsl(${endPercent * 360}, 40%, ${lightness})`;
        bar.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    }
  });
}

function loadLeaderboardData() {
  const creativeWritingRows = leaderboardDataCreativeWritingV3.split('\n').slice(1).filter(l => l.trim() !== '');

  // Find original min/max Elo scores for rescaling
  const originalEloScores = creativeWritingRows.map(row => parseFloat(row.split(',')[1])).filter(s => !isNaN(s));
  const originalMaxElo = Math.max(...originalEloScores);
  const originalMinElo = Math.min(...originalEloScores);

  // Populate global score arrays with scaled values
  eloScores = originalEloScores.map(score => {
      const scaleFactor = (1500 - 200) / (originalMaxElo - originalMinElo);
      return 200 + (score - originalMinElo) * scaleFactor;
  });

  // Scale rubric scores by multiplying by 5
  rubricScores = creativeWritingRows.map(row => parseFloat(row.split(',')[2]) * 5).filter(s => !isNaN(s));

  // Calculate global max/baseline values
  maxEloScore = eloScores.length > 0 ? Math.max(...eloScores) : 1500;
  maxRubricScore = rubricScores.length > 0 ? Math.max(...rubricScores) : 100;
  baselineEloScore = eloScores.length > 0 ? Math.min(400, Math.min(...eloScores) - 50) : 150;
  baselineRubricScore = rubricScores.length > 0 ? Math.max(0, Math.min(...rubricScores) - 1) : 30;

  let html = creativeWritingRows.map(row => {
      // Destructure including the new repetition_score
      let [modelNameRaw, eloScore, creativeWritingScore, avgLength, vocabComplexity, slopScore, repetitionScore] = row.split(',');

      // Get model scores and scale them
      const originalEloScoreNum = parseFloat(eloScore);
      const originalRubricScoreNum = parseFloat(creativeWritingScore);

      // Scale Elo score to new range (1500 to 200)
      const eloScaleFactor = (1500 - 200) / (originalMaxElo - originalMinElo);
      const eloScoreNum = 200 + (originalEloScoreNum - originalMinElo) * eloScaleFactor;

      // Scale rubric score by multiplying by 5
      const rubricScoreNum = originalRubricScoreNum * 5;

      // Keep vocab processing logic even though column is hidden
      let vocabNum = parseFloat(vocabComplexity) / 10; // Divide by 10
      vocabNum = Math.min((vocabNum / 7.0) * 10, 10)

      const slopNum = (parseFloat(slopScore) / 10.0) / 7.2 * 10;
      const lengthNum = parseInt(avgLength, 10);
      const repetitionScoreNum = parseInt(repetitionScore, 10); // Parse repetition score

      // Initial percentages for width (will be updated by updateScores if needed)
      const eloScoreRange = maxEloScore - baselineEloScore;
      const eloScoreRelativeToBaseline = eloScoreNum - baselineEloScore;
      const eloScorePercentage = eloScoreRange > 0 ? Math.max(0, Math.min(100, (eloScoreRelativeToBaseline / eloScoreRange) * 100)) : 0;

      // Use scaled rubric score for percentage calculation
      const rubricScoreRange = maxRubricScore - baselineRubricScore; // These are already scaled in the global variables
      const rubricScoreRelativeToBaseline = rubricScoreNum - baselineRubricScore;
      const rubricScorePercentage = rubricScoreRange > 0 ? Math.max(0, Math.min(100, (rubricScoreRelativeToBaseline / rubricScoreRange) * 100)) : 0;

      // --- Model Name Processing ---
      let currentModelName = modelNameRaw; // Keep original for data lookup
      const isNsfwModel = currentModelName.startsWith('!');
      currentModelName = currentModelName.replace(/^\!/, '');
      const isNewModel = currentModelName.startsWith('*');
      currentModelName = currentModelName.replace(/^\*/, '');

      let displayModelName = currentModelName.split('/').pop();
      if (isNsfwModel) displayModelName = '🔞' + displayModelName;
      if (isNewModel) displayModelName = '🆕' + displayModelName;

      let modelNameDisplayHTML = currentModelName.includes('/')
          ? `<a href="https://huggingface.co/${currentModelName}" target="_blank">${displayModelName}</a>`
          : displayModelName; // Use displayModelName here

      let modelResultsFn = `results/creative-writing-v3/${currentModelName.replace(/\//g,'__')}.html`;

      // --- Generate Bar Structure for BOTH score columns directly in TD ---
      let scoreBarEloHTML = `<div class="score-bar-container">
          <div class="creative-writing-score-bar" style="width: ${eloScorePercentage}%; display: none;"></div>
          <span class="score-text">${eloScoreNum.toFixed(1)}</span>
      </div>`;
      let scoreBarRubricHTML = `<div class="score-bar-container">
           <div class="creative-writing-score-bar" style="width: ${rubricScorePercentage}%; display: none;"></div>
           <span class="score-text">${rubricScoreNum.toFixed(2)}</span>
       </div>`;
      
       const slopInfoIconUnicode = `
       <span class="slop-info-icon custom-info-icon" data-model-name="${currentModelName}" title="View Slop Profile">i</span>`;

      // --- Create TR with data-order on TD and necessary data attributes ---
      return `
  <tr data-original-elo-score="${eloScoreNum}"
      data-original-rubric-score="${rubricScoreNum}"
      data-vocab="${vocabNum}"
      data-gpt-slop="${slopNum}"
      data-repetition="${repetitionScoreNum}">

    <td>
      <div class="cell-content">
        ${modelNameDisplayHTML} <!-- Use HTML version -->
      </div>
    </td>

    <td class="mobile-collapsible" data-order="${lengthNum}">
      <div class="cell-content">
        ${isNaN(lengthNum) ? '-' : lengthNum}
      </div>
    </td>

    <td data-order="${slopNum}">
      <div class="cell-content"> <!-- Content wrapper for flex -->
        ${slopNum.toFixed(1)}
        ${slopInfoIconUnicode} <!-- Use the Unicode icon span -->
      </div>
    </td>

    <td class="mobile-collapsible" data-order="${repetitionScoreNum}">
      <div class="cell-content">
        ${isNaN(repetitionScoreNum) ? '-' : repetitionScoreNum}
      </div>
    </td>

    <td class="mobile-collapsible" data-order="${rubricScoreNum}">
      <div class="cell-content">
        ${scoreBarRubricHTML}
      </div>
    </td>

    <td data-order="${eloScoreNum}">
      <div class="cell-content">
        ${scoreBarEloHTML}
      </div>
    </td>

    <td>
      <div class="cell-content">
        <a href="${modelResultsFn}">Sample</a>
      </div>
    </td>
  </tr>
`;

  }).join(''); // End of map loop

  document.getElementById('leaderboardBody').innerHTML = html;
  initializeDataTable(); // This now includes setting up the event listener
}

// DataTable configuration
let dataTableConfig = {
  order: [[5, "desc"]], // Default sort Elo
  paging: false,
  searching: false,
  info: true,
  lengthChange: false,
  columnDefs: [
    // Define explicit numeric type for sorting
    { targets: [1], type: 'num' }, // Length
    { targets: [2], type: 'num' }, // Slop
    { targets: [3], type: 'num' }, // Repetition (was Vocab)
    { targets: [4], type: 'num' }, // Rubric Score
    { targets: [5], type: 'num' }, // Elo Score
    // Define sorting sequences
    { targets: [4, 5], orderSequence: ["desc", "asc"] }, // Rubric, Elo
    { targets: [1, 2], orderSequence: ["desc", "asc"] }, // Length, Slop
    { targets: [3], orderSequence: ["asc", "desc"] }, // Repetition (Lower is better, sort ASC first)
  ],
  dom: "<'d-flex flex-column flex-md-row justify-content-between align-items-center mb-2'<'#toggleMobilePlaceholder'><'ms-md-auto'f>>" +
       "<'row'<'col-12'tr>>" +
       "<'row mt-2'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  // drawCallback aligned with eqbench.js logic
  drawCallback: function(settings) {
    let api = this.api();
    if (!api) return;
    let order = api.order();
    if (!order || order.length === 0) {
        order = [[5, 'desc']]; // Fallback to default sort
    }

    let sortedColumnIndex = order[0][0];
    const SCORE_COLUMNS = [4, 5]; // Indices for Rubric Score, Elo Score
    const NON_SCORE_COLUMNS = [0, 1, 2, 3, 6]; // Indices for other columns (incl. Repetition at index 3)

    const tableNode = $(api.table().node());

    // Hide all score bars initially within this table
    tableNode.find('.creative-writing-score-bar').hide();
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
        columnToShowBar = 5;
        lastSortedScoreColumn = 5;
    }

    // Show the selected column's score bar and adjust width
    if (columnToShowBar !== -1) {
        try {
            // Show the bar in the target column for all visible rows
            // Use api().rows() to get nodes for current page/view
            api.rows({ page: 'current' }).nodes().to$().find(`td:eq(${columnToShowBar}) .creative-writing-score-bar`).show();

            let header = api.column(columnToShowBar).header();
            if (header) {
                $(header).css('width', '30%');
            }
        } catch (e) {
            console.error("Error showing score bar or adjusting width:", e);
        }
    }

    // Apply the gradient colors to the *now visible* bars
    updateScoreBarColorsV3();
  }
};

// --- Mobile Column Collapse Logic ---
let middleStatsExpanded = false;
function collapseMiddleColumns() {
    const isMobile = window.innerWidth < 768;

    // If on mobile AND not expanded, hide them
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

  // --- End Mobile Column Collapse Logic ---

// Add this function to ensure initial score bars use scaled values
function fixInitialScoreBars() {
    // Wait until the table is fully initialized
    setTimeout(() => {
      // Apply updateScores to set initial bar widths and values based on slider settings
      if ($.fn.DataTable.isDataTable('#leaderboard')) {
        updateScores();
      }
    }, 200); // Small delay to ensure DOM is ready
  }



function initializeDataTable() {
  // Check if DataTable already exists and destroy it
  if ($.fn.DataTable.isDataTable('#leaderboard')) {
    $('#leaderboard').DataTable().destroy();
    // IMPORTANT: Remove previous event listener to avoid duplicates
    $('#leaderboardBody').off('click', '.slop-info-icon');
  }

  let table = $('#leaderboard').DataTable(dataTableConfig);

  // --- Add Event Listener for Slop Icons (using delegation) ---
  $('#leaderboardBody').on('click', '.slop-info-icon', function() {
      const modelName = $(this).data('model-name');
      const profileHtml = parseSlopData(modelName);
      const modalTitle = `Slop Profile: ${modelName.split('/').pop()}`; // Use shorter name for title

      // Update modal content and title
      $('#slopProfileContent').html(profileHtml);
      $('#slopProfileModalLabel').text(modalTitle);

      // Show the modal using Bootstrap 5 API
      const slopModal = new bootstrap.Modal(document.getElementById('slopProfileModal'));
      slopModal.show();
  });

  // Still call collapseMiddleColumns after table initialization
  table.one('init.dt', function () {
    collapseMiddleColumns();
    setupControls(); // Setup sliders
    fixInitialScoreBars(); // Apply initial slider values visually
  });
}



function setupControls() {
    // Keep references even if hidden, in case logic is reused
    const vocabSlider = document.getElementById('vocabControlSlider');
    const vocabSliderValueLabel = document.getElementById('vocabControlValue');
    const gptSlopSlider = document.getElementById('gptSlopControlSlider');
    const gptSlopSliderValueLabel = document.getElementById('gptSlopControlValue');

    // Check if elements exist before proceeding
    if (!gptSlopSlider) {
      console.error("Required control sliders not found");
      return;
    }

    // Set initial label values (only for visible sliders)
    if (gptSlopSliderValueLabel) {
        gptSlopSliderValueLabel.textContent = `${gptSlopSlider.value}%`;
    }
    // Don't set label for hidden vocab slider

    // Add event listeners for sliders (only if they don't already have listeners)
    // Keep vocab listener logic, it just won't fire if slider is hidden
    if (vocabSlider && !vocabSlider.hasListeners) {
      vocabSlider.oninput = function() {
        if (vocabSliderValueLabel) vocabSliderValueLabel.textContent = `${this.value}%`;
        updateScores();
      };
      vocabSlider.hasListeners = true;
    }


    if (gptSlopSlider && !gptSlopSlider.hasListeners) {
      gptSlopSlider.oninput = function() {
        if (gptSlopSliderValueLabel) gptSlopSliderValueLabel.textContent = `${this.value}%`;
        updateScores();
      };
      gptSlopSlider.hasListeners = true;
    }

    // Initial call to apply slider values
    updateScores();
  }


function normalizeVocabComplexity(value) {
    // Use same range values as original code
    const minVocab = 4.5;
    const maxVocab = 10.0;

    // Clamp the value to the min-max range
    const clampedValue = Math.max(minVocab, Math.min(maxVocab, value));

    // Normalize to 0-1 range (1 is high complexity, 0 is low)
    return Math.pow((clampedValue - minVocab) / (maxVocab - minVocab), 2);
}

function calculateAverageGptSlop() {
    const gptSlops = Array.from(document.querySelectorAll('#leaderboardBody tr'))
        .map(row => parseFloat(row.getAttribute('data-gpt-slop')))
        .filter(val => !isNaN(val));

    return gptSlops.length > 0 ?
        gptSlops.reduce((a, b) => a + b, 0) / gptSlops.length :
        1;
}

document.addEventListener('DOMContentLoaded', function() {
    displayEncodedEmail();
    applySystemTheme();
    setupDarkModeToggle();

    if (document.getElementById('leaderboard')) {
      loadLeaderboardData(); // Calls initializeDataTable
      // setupControls() is called within initializeDataTable's init.dt event

      // Directly bind the event handlers here, outside of any other function
      $(window).on('resize', collapseMiddleColumns);
      $('#toggleMiddleStats').on('click', toggleMiddleStats);

      // Initial call to collapse columns
      setTimeout(collapseMiddleColumns, 50); // Give time for DataTable to initialize
    }
  });



  function updateScores() {
    // 1) Read slider values (Read vocab even if hidden)
    const vocabPercentage = document.getElementById('vocabControlSlider') ? document.getElementById('vocabControlSlider').value : 0; // Default to 0 if slider removed
    const gptSlopPercentage = document.getElementById('gptSlopControlSlider').value;

    // 2) Calculate adjustment factors (Keep vocab factor calculation)
    const vocabAdjustmentFactor = parseFloat(vocabPercentage) / 100;
    const gptSlopAdjustmentFactor = 0.30 * parseFloat(gptSlopPercentage) / 100;

    const avgGptSlop = calculateAverageGptSlop();

    // 3) Get the *existing* DataTable instance
    const table = $('#leaderboard').DataTable();

    // 4) Loop over each row in the tbody
    $('#leaderboardBody tr').each(function() {
        const row = $(this);
        const modelGptSlop = parseFloat(row.attr('data-gpt-slop'));
        const vocabComplexity = parseFloat(row.attr('data-vocab')); // Still read vocab data
        const originalEloScore = parseFloat(row.attr('data-original-elo-score'));
        const originalRubricScore = parseFloat(row.attr('data-original-rubric-score'));
        // Repetition score is not used in adjustments yet, but could be read here if needed:
        // const repetitionScore = parseFloat(row.attr('data-repetition'));

        // --- (A) Compute your adjustments (Keep vocab adjustment logic) ---
        let vocabAdjustment = 0;
        if (!isNaN(vocabComplexity)) {
            const normalizedVocab = normalizeVocabComplexity(vocabComplexity);
            // Multiply by -12 and scale by vocabAdjustmentFactor
            vocabAdjustment = -12.0 * normalizedVocab * vocabAdjustmentFactor;
        }

        let gptSlopRatio = !isNaN(modelGptSlop) ? (modelGptSlop / avgGptSlop) : 1;
        if (gptSlopRatio < 0.34) {
            gptSlopRatio = 0.34;
        }
        let gptSlopMultiplier = 1.0;
        if (gptSlopRatio > 1) {
            // Penalize higher GPT-slop
            gptSlopMultiplier = 1 - (Math.log(gptSlopRatio) * gptSlopAdjustmentFactor);
            gptSlopMultiplier = Math.max(gptSlopMultiplier, 0.85);
        } else {
            // Reward lower GPT-slop
            gptSlopMultiplier = 1 + (Math.log(1.5 / (gptSlopRatio + 0.5)) * gptSlopAdjustmentFactor);
            gptSlopMultiplier = Math.min(gptSlopMultiplier, 1.02);
        }

        // --- (B) Apply them to get new scores (Still includes vocabAdjustment) ---
        const adjustedEloScore = originalEloScore * gptSlopMultiplier + 15 * vocabAdjustment;
        const adjustedRubricScore = originalRubricScore * gptSlopMultiplier + vocabAdjustment;

        // --- (C) Update each cell's `data-order` and displayed text ---
        // Elo Score (index 5)
        row.find('td:eq(5)')
           .attr('data-order', adjustedEloScore.toFixed(1))
           .find('.score-text').text(adjustedEloScore.toFixed(1));

        // Rubric Score (index 4)
        row.find('td:eq(4)')
           .attr('data-order', adjustedRubricScore.toFixed(2))
           .find('.score-text').text(adjustedRubricScore.toFixed(2));

        // Repetition score (index 3) and others are not adjusted by sliders, so no update needed here

        // --- (D) Update the bar widths based on your global maxEloScore / maxRubricScore ---
        // Use adjusted scores for bar width calculation
        const eloPercentage = Math.max(0, Math.min(100, ((adjustedEloScore - baselineEloScore) / (maxEloScore - baselineEloScore)) * 100));
        const rubricPercentage = Math.max(0, Math.min(100, ((adjustedRubricScore - baselineRubricScore) / (maxRubricScore - baselineRubricScore)) * 100));


        row.find('td:eq(5) .creative-writing-score-bar').css('width', `${eloPercentage}%`);
        row.find('td:eq(4) .creative-writing-score-bar').css('width', `${rubricPercentage}%`);
    });

    // 5) Tell DataTables “we changed row data—recheck sorting”
    table.rows().invalidate();

    // 6) Redraw the table (false = stay on the same page)
    table.draw(false);

    // 7) Finally, refresh your color gradients or any final styling
    updateScoreBarColorsV3();
}