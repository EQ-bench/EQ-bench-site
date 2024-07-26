const leaderboardDataJudgemark = `
# random-baseline

Stats:
Note -- These statistics are averaged over 10k runs where items are randomly scored.
ANOVA f-statistic 1.0257
ANOVA p-value 0.4839
Avg 95% CI 6.297
mean_score 50.00
range 5.61
std_dev 1.50
CV 0.03
std_dev_top_5 0.72
pearson_arena_elo 0.0057
kendall_arena_elo 0.0039
pearson_eq_bench 0.0056
kendall_eq_bench 0.0034
pearson_top_8_arena_elo 0.0096
kendall_top_8_arena_elo 0.0072
pearson_top_8_eq_bench 0.0073
kendall_top_8_eq_bench 0.0042
Judgemark 8.33


# claude-3-opus-20240229

Test model scores:
74.97 gpt-4-0125-preview
76.81 claude-3-opus-20240229
76.23 claude-3-sonnet-20240229
73.91 claude-3-haiku-20240307
63.99 mistral-small
69.87 mistral-medium
70.48 mistral-large-2402
50.97 gpt-3.5-turbo-0301
67.14 01-ai/Yi-34B-Chat
56.08 openchat/openchat-3.5-1210
51.19 garage-bAInd/Platypus2-70B-instruct
68.21 mistralai/Mixtral-8x7B-Instruct-v0.1
67.13 Qwen/Qwen1.5-14B-Chat
35.33 Qwen/Qwen1.5-4B-Chat
37.78 google/gemma-2b-it
50.07 google/gemma-7b-it
48.27 meta-llama/Llama-2-7b-chat-hf
55.47 meta-llama/Llama-2-13b-chat-hf
76.41 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 22.54776626305501
ANOVA p-value 1.141134274589569e-46
Self bias: 4.77
Family bias: 3.94
Avg 95% CI: 11.12
mean_score 61.6
range 41.48
std_dev 13.15
CV 0.21
std_dev_top_5 1.2
pearson_arena_elo 0.93
kendall_arena_elo 0.92
pearson_eq_bench 0.86
kendall_eq_bench 0.63
pearson_top_8_arena_elo 0.9
kendall_top_8_arena_elo 0.9
pearson_top_8_eq_bench 0.11
kendall_top_8_eq_bench 0.05
Judgemark 75.23
Cost: $40.00


# claude-3-sonnet-20240229

Test model scores:
80.09 gpt-4-0125-preview
77.1 claude-3-opus-20240229
77.21 claude-3-sonnet-20240229
75.18 claude-3-haiku-20240307
76.21 mistral-small
74.69 mistral-medium
76.46 mistral-large-2402
63.97 gpt-3.5-turbo-0301
77.37 01-ai/Yi-34B-Chat
71.34 openchat/openchat-3.5-1210
71.29 garage-bAInd/Platypus2-70B-instruct
75.34 mistralai/Mixtral-8x7B-Instruct-v0.1
74.33 Qwen/Qwen1.5-14B-Chat
48.78 Qwen/Qwen1.5-4B-Chat
66.84 google/gemma-2b-it
70.78 google/gemma-7b-it
68.4 meta-llama/Llama-2-7b-chat-hf
68.0 meta-llama/Llama-2-13b-chat-hf
77.25 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 14.63007394321016
ANOVA p-value 3.8078644425745344e-32
Self bias: 0.22
Family bias: -0.69
Avg 95% CI: 7.37
mean_score 72.14
range 31.31
std_dev 7.1
CV 0.1
std_dev_top_5 1.28
pearson_arena_elo 0.76
kendall_arena_elo 0.64
pearson_eq_bench 0.76
kendall_eq_bench 0.59
pearson_top_8_arena_elo 0.61
kendall_top_8_arena_elo 0.2
pearson_top_8_eq_bench 0.4
kendall_top_8_eq_bench 0.14
Judgemark 50.51
Cost: $15.00


# claude-3-haiku-20240307

Test model scores:
83.67 gpt-4-0125-preview
82.96 claude-3-opus-20240229
82.69 claude-3-sonnet-20240229
82.86 claude-3-haiku-20240307
81.32 mistral-small
81.08 mistral-medium
82.6 mistral-large-2402
77.27 gpt-3.5-turbo-0301
83.9 01-ai/Yi-34B-Chat
81.22 openchat/openchat-3.5-1210
78.83 garage-bAInd/Platypus2-70B-instruct
81.17 mistralai/Mixtral-8x7B-Instruct-v0.1
81.97 Qwen/Qwen1.5-14B-Chat
63.34 Qwen/Qwen1.5-4B-Chat
79.03 google/gemma-2b-it
79.28 google/gemma-7b-it
78.48 meta-llama/Llama-2-7b-chat-hf
78.1 meta-llama/Llama-2-13b-chat-hf
83.63 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 13.440598873375457
ANOVA p-value 1.0636743398714796e-29
Self bias: 0.26
Family bias: 0.1
Avg 95% CI: 4.8
mean_score 80.18
range 20.56
std_dev 4.57
CV 0.06
std_dev_top_5 0.46
pearson_arena_elo 0.67
kendall_arena_elo 0.58
pearson_eq_bench 0.68
kendall_eq_bench 0.49
pearson_top_8_arena_elo -0.2
kendall_top_8_arena_elo 0.07
pearson_top_8_eq_bench -0.02
kendall_top_8_eq_bench -0.05
Judgemark 33.39
Cost: $0.60


# mistral-medium

Test model scores:
76.88 gpt-4-0125-preview
74.3 claude-3-opus-20240229
72.77 claude-3-sonnet-20240229
73.25 claude-3-haiku-20240307
72.18 mistral-small
75.33 mistral-medium
76.32 mistral-large-2402
63.77 gpt-3.5-turbo-0301
72.99 01-ai/Yi-34B-Chat
68.51 openchat/openchat-3.5-1210
65.84 garage-bAInd/Platypus2-70B-instruct
72.46 mistralai/Mixtral-8x7B-Instruct-v0.1
75.9 Qwen/Qwen1.5-14B-Chat
39.93 Qwen/Qwen1.5-4B-Chat
62.68 google/gemma-2b-it
61.88 google/gemma-7b-it
60.78 meta-llama/Llama-2-7b-chat-hf
66.55 meta-llama/Llama-2-13b-chat-hf
77.03 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 13.733752512102223
ANOVA p-value 2.6105986190776132e-30
Self bias: 1.6
Family bias: 0.6
Avg 95% CI: 9.82
mean_score 68.91
range 37.1
std_dev 8.86
CV 0.13
std_dev_top_5 0.7
pearson_arena_elo 0.78
kendall_arena_elo 0.71
pearson_eq_bench 0.8
kendall_eq_bench 0.68
pearson_top_8_arena_elo 0.42
kendall_top_8_arena_elo 0.33
pearson_top_8_eq_bench 0.75
kendall_top_8_eq_bench 0.62
Judgemark 58.84
Cost: $6.08


# mistral-large-2402

Test model scores:
76.14 gpt-4-0125-preview
77.87 claude-3-opus-20240229
77.71 claude-3-sonnet-20240229
79.23 claude-3-haiku-20240307
77.71 mistral-small
77.75 mistral-medium
78.95 mistral-large-2402
70.69 gpt-3.5-turbo-0301
74.64 01-ai/Yi-34B-Chat
73.32 openchat/openchat-3.5-1210
69.71 garage-bAInd/Platypus2-70B-instruct
76.99 mistralai/Mixtral-8x7B-Instruct-v0.1
75.83 Qwen/Qwen1.5-14B-Chat
48.32 Qwen/Qwen1.5-4B-Chat
61.15 google/gemma-2b-it
71.06 google/gemma-7b-it
65.5 meta-llama/Llama-2-7b-chat-hf
70.49 meta-llama/Llama-2-13b-chat-hf
79.55 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 5.3312726205415055
ANOVA p-value 7.34293606897579e-11
Self bias: 1.55
Family bias: 1.44
Avg 95% CI: 14.12
mean_score 72.77
range 31.23
std_dev 7.73
CV 0.11
std_dev_top_5 0.81
pearson_arena_elo 0.79
kendall_arena_elo 0.73
pearson_eq_bench 0.87
kendall_eq_bench 0.67
pearson_top_8_arena_elo 0.18
kendall_top_8_arena_elo 0.33
pearson_top_8_eq_bench -0.24
kendall_top_8_eq_bench 0.29
Judgemark 40.32
Cost: $21.14


# mistral-small

Test model scores:
76.38 gpt-4-0125-preview
73.3 claude-3-opus-20240229
76.4 claude-3-sonnet-20240229
73.67 claude-3-haiku-20240307
67.89 mistral-small
73.46 mistral-medium
72.85 mistral-large-2402
61.32 gpt-3.5-turbo-0301
79.96 01-ai/Yi-34B-Chat
66.56 openchat/openchat-3.5-1210
64.66 garage-bAInd/Platypus2-70B-instruct
71.99 mistralai/Mixtral-8x7B-Instruct-v0.1
71.48 Qwen/Qwen1.5-14B-Chat
47.27 Qwen/Qwen1.5-4B-Chat
61.26 google/gemma-2b-it
62.2 google/gemma-7b-it
58.09 meta-llama/Llama-2-7b-chat-hf
65.53 meta-llama/Llama-2-13b-chat-hf
75.6 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 6.35514785468332
ANOVA p-value 1.9691762615862748e-13
Self bias: -3.26
Family bias: -0.7
Avg 95% CI: 12.88
mean_score 68.41
range 32.69
std_dev 8.0
CV 0.12
std_dev_top_5 2.28
pearson_arena_elo 0.79
kendall_arena_elo 0.66
pearson_eq_bench 0.78
kendall_eq_bench 0.51
pearson_top_8_arena_elo -0.34
kendall_top_8_arena_elo -0.14
pearson_top_8_eq_bench -0.25
kendall_top_8_eq_bench -0.43
Judgemark 28.88
Cost: $1.30


# gpt-3.5-turbo-0125

Test model scores:
63.98 gpt-4-0125-preview
65.57 claude-3-opus-20240229
63.56 claude-3-sonnet-20240229
64.65 claude-3-haiku-20240307
62.6 mistral-small
63.39 mistral-medium
63.47 mistral-large-2402
59.53 gpt-3.5-turbo-0301
66.71 01-ai/Yi-34B-Chat
63.18 openchat/openchat-3.5-1210
59.15 garage-bAInd/Platypus2-70B-instruct
63.87 mistralai/Mixtral-8x7B-Instruct-v0.1
65.6 Qwen/Qwen1.5-14B-Chat
55.33 Qwen/Qwen1.5-4B-Chat
61.79 google/gemma-2b-it
60.45 google/gemma-7b-it
61.47 meta-llama/Llama-2-7b-chat-hf
60.64 meta-llama/Llama-2-13b-chat-hf
66.01 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 3.027904493985067
ANOVA p-value 4.32665867613089e-05
Self bias: N/A
Self bias: N/A
Avg 95% CI: 6.54
mean_score 62.68
range 11.38
std_dev 2.8
CV 0.04
std_dev_top_5 0.75
pearson_arena_elo 0.69
kendall_arena_elo 0.56
pearson_eq_bench 0.63
kendall_eq_bench 0.32
pearson_top_8_arena_elo -0.29
kendall_top_8_arena_elo -0.07
pearson_top_8_eq_bench -0.22
kendall_top_8_eq_bench -0.24
Judgemark 16.06
Cost: $0.96


# gpt-4-0125-preview

Test model scores:
71.49 gpt-4-0125-preview
69.69 claude-3-opus-20240229
68.5 claude-3-sonnet-20240229
67.13 claude-3-haiku-20240307
62.79 mistral-small
68.29 mistral-medium
69.12 mistral-large-2402
53.08 gpt-3.5-turbo-0301
66.88 01-ai/Yi-34B-Chat
63.66 openchat/openchat-3.5-1210
55.64 garage-bAInd/Platypus2-70B-instruct
65.89 mistralai/Mixtral-8x7B-Instruct-v0.1
65.5 Qwen/Qwen1.5-14B-Chat
36.49 Qwen/Qwen1.5-4B-Chat
51.98 google/gemma-2b-it
55.01 google/gemma-7b-it
53.79 meta-llama/Llama-2-7b-chat-hf
56.52 meta-llama/Llama-2-13b-chat-hf
68.55 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 18.713951379060973
ANOVA p-value 5.438739149382401e-40
Self bias: 1.64
Family bias: -1.49
Avg 95% CI: 8.63
mean_score 61.58
range 35.0
std_dev 8.88
CV 0.14
std_dev_top_5 1.23
pearson_arena_elo 0.85
kendall_arena_elo 0.81
pearson_eq_bench 0.84
kendall_eq_bench 0.65
pearson_top_8_arena_elo 0.79
kendall_top_8_arena_elo 0.62
pearson_top_8_eq_bench 0.74
kendall_top_8_eq_bench 0.52
Judgemark 67.81
Cost: $16.00


# gemini-1.5-pro-preview-0409

Test model scores:
64.31 gpt-4-0125-preview
65.63 claude-3-opus-20240229
62.45 claude-3-sonnet-20240229
60.08 claude-3-haiku-20240307
56.89 mistral-small
58.33 mistral-medium
61.61 mistral-large-2402
44.05 gpt-3.5-turbo-0301
61.32 01-ai/Yi-34B-Chat
50.21 openchat/openchat-3.5-1210
47.49 garage-bAInd/Platypus2-70B-instruct
61.29 mistralai/Mixtral-8x7B-Instruct-v0.1
60.43 Qwen/Qwen1.5-14B-Chat
34.19 Qwen/Qwen1.5-4B-Chat
42.9 google/gemma-2b-it
48.86 google/gemma-7b-it
45.36 meta-llama/Llama-2-7b-chat-hf
45.3 meta-llama/Llama-2-13b-chat-hf
66.66 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 16.30257975739365
ANOVA p-value 8.005789693406729e-35
Self bias: N/A
Self bias: N/A
Avg 95% CI: 9.17
mean_score 54.6
range 32.47
std_dev 9.38
CV 0.17
std_dev_top_5 2.11
pearson_arena_elo 0.89
kendall_arena_elo 0.75
pearson_eq_bench 0.83
kendall_eq_bench 0.62
pearson_top_8_arena_elo 0.93
kendall_top_8_arena_elo 0.87
pearson_top_8_eq_bench 0.61
kendall_top_8_eq_bench 0.33
Judgemark 66.58


# gpt-4-turbo-2024-04-09

Test model scores:
70.78 gpt-4-0125-preview
69.86 claude-3-opus-20240229
64.2 claude-3-sonnet-20240229
63.8 claude-3-haiku-20240307
60.22 mistral-small
65.08 mistral-medium
66.3 mistral-large-2402
51.4 gpt-3.5-turbo-0301
63.61 01-ai/Yi-34B-Chat
58.92 openchat/openchat-3.5-1210
54.79 garage-bAInd/Platypus2-70B-instruct
62.59 mistralai/Mixtral-8x7B-Instruct-v0.1
63.15 Qwen/Qwen1.5-14B-Chat
38.15 Qwen/Qwen1.5-4B-Chat
47.89 google/gemma-2b-it
52.28 google/gemma-7b-it
50.27 meta-llama/Llama-2-7b-chat-hf
54.74 meta-llama/Llama-2-13b-chat-hf
67.1 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 22.258294701268724
ANOVA p-value 3.473818210081676e-46
Self bias: N/A
Self bias: N/A
Avg 95% CI: 7.25
mean_score 59.22
range 32.63
std_dev 8.46
CV 0.14
std_dev_top_5 2.41
pearson_arena_elo 0.91
kendall_arena_elo 0.81
pearson_eq_bench 0.86
kendall_eq_bench 0.71
pearson_top_8_arena_elo 0.81
kendall_top_8_arena_elo 0.52
pearson_top_8_eq_bench 0.6
kendall_top_8_eq_bench 0.62
Judgemark 70.43
Cost: $16.00


# mistralai/Mixtral-8x7B-Instruct-v0.1

Test model scores:
69.45 gpt-4-0125-preview
69.56 claude-3-opus-20240229
78.71 claude-3-sonnet-20240229
65.38 claude-3-haiku-20240307
66.42 mistral-small
68.9 mistral-medium
75.2 mistral-large-2402
61.99 gpt-3.5-turbo-0301
67.33 01-ai/Yi-34B-Chat
70.62 openchat/openchat-3.5-1210
58.68 garage-bAInd/Platypus2-70B-instruct
70.8 mistralai/Mixtral-8x7B-Instruct-v0.1
72.57 Qwen/Qwen1.5-14B-Chat
48.15 Qwen/Qwen1.5-4B-Chat
60.01 google/gemma-2b-it
64.93 google/gemma-7b-it
59.98 meta-llama/Llama-2-7b-chat-hf
64.9 meta-llama/Llama-2-13b-chat-hf
76.98 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 4.669740009188166
ANOVA p-value 3.4649715442407736e-09
Self bias: 1.0
Family bias: -0.13
Avg 95% CI: 13.8
mean_score 66.87
range 30.56
std_dev 7.22
CV 0.11
std_dev_top_5 3.21
pearson_arena_elo 0.71
kendall_arena_elo 0.58
pearson_eq_bench 0.81
kendall_eq_bench 0.63
pearson_top_8_arena_elo -0.04
kendall_top_8_arena_elo -0.07
pearson_top_8_eq_bench 0.22
kendall_top_8_eq_bench -0.05
Judgemark 33.65


# mistralai/Mixtral-8x22B-Instruct-v0.1

Test model scores:
81.87 gpt-4-0125-preview
81.62 claude-3-opus-20240229
79.97 claude-3-sonnet-20240229
78.15 claude-3-haiku-20240307
78.29 mistral-small
80.89 mistral-medium
81.85 mistral-large-2402
69.01 gpt-3.5-turbo-0301
80.05 01-ai/Yi-34B-Chat
77.96 openchat/openchat-3.5-1210
69.44 garage-bAInd/Platypus2-70B-instruct
80.51 mistralai/Mixtral-8x7B-Instruct-v0.1
78.83 Qwen/Qwen1.5-14B-Chat
57.51 Qwen/Qwen1.5-4B-Chat
68.04 google/gemma-2b-it
71.05 google/gemma-7b-it
73.85 meta-llama/Llama-2-7b-chat-hf
74.95 meta-llama/Llama-2-13b-chat-hf
83.51 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 7.780199786594963
ANOVA p-value 6.164076032010373e-17
Self bias: N/A
Self bias: N/A
Avg 95% CI: 10.02
mean_score 76.18
range 26.0
std_dev 6.59
CV 0.09
std_dev_top_5 0.96
pearson_arena_elo 0.78
kendall_arena_elo 0.7
pearson_eq_bench 0.8
kendall_eq_bench 0.72
pearson_top_8_arena_elo 0.58
kendall_top_8_arena_elo 0.43
pearson_top_8_eq_bench 0.74
kendall_top_8_eq_bench 0.62
Judgemark 51.45


# meta-llama/Meta-Llama-3-70B-Instruct

Test model scores:
71.81 gpt-4-0125-preview
63.66 claude-3-opus-20240229
57.71 claude-3-sonnet-20240229
56.9 claude-3-haiku-20240307
56.06 mistral-small
57.57 mistral-medium
65.64 mistral-large-2402
41.0 gpt-3.5-turbo-0301
66.33 01-ai/Yi-34B-Chat
47.43 openchat/openchat-3.5-1210
45.4 garage-bAInd/Platypus2-70B-instruct
58.92 mistralai/Mixtral-8x7B-Instruct-v0.1
59.03 Qwen/Qwen1.5-14B-Chat
28.07 Qwen/Qwen1.5-4B-Chat
41.82 google/gemma-2b-it
43.46 google/gemma-7b-it
39.19 meta-llama/Llama-2-7b-chat-hf
45.9 meta-llama/Llama-2-13b-chat-hf
65.57 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 12.931919411209947
ANOVA p-value 1.2497248794244755e-28
Self bias: N/A
Self bias: N/A
Avg 95% CI: 13.1
mean_score 53.24
range 43.74
std_dev 11.58
CV 0.22
std_dev_top_5 3.08
pearson_arena_elo 0.84
kendall_arena_elo 0.62
pearson_eq_bench 0.8
kendall_eq_bench 0.6
pearson_top_8_arena_elo 0.29
kendall_top_8_arena_elo -0.07
pearson_top_8_eq_bench 0.43
kendall_top_8_eq_bench 0.24
Judgemark 54.32


# databricks/dbrx-instruct

Test model scores:
72.22 gpt-4-0125-preview
68.41 claude-3-opus-20240229
72.58 claude-3-sonnet-20240229
67.9 claude-3-haiku-20240307
69.77 mistral-small
73.48 mistral-medium
75.36 mistral-large-2402
62.85 gpt-3.5-turbo-0301
75.27 01-ai/Yi-34B-Chat
65.44 openchat/openchat-3.5-1210
64.64 garage-bAInd/Platypus2-70B-instruct
69.62 mistralai/Mixtral-8x7B-Instruct-v0.1
77.71 Qwen/Qwen1.5-14B-Chat
53.08 Qwen/Qwen1.5-4B-Chat
64.29 google/gemma-2b-it
64.73 google/gemma-7b-it
62.98 meta-llama/Llama-2-7b-chat-hf
69.03 meta-llama/Llama-2-13b-chat-hf
69.51 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 4.906220048088916
ANOVA p-value 8.729849973583686e-10
Self bias: N/A
Self bias: N/A
Avg 95% CI: 10.91
mean_score 68.36
range 24.63
std_dev 5.74
CV 0.08
std_dev_top_5 1.98
pearson_arena_elo 0.65
kendall_arena_elo 0.45
pearson_eq_bench 0.72
kendall_eq_bench 0.54
pearson_top_8_arena_elo -0.14
kendall_top_8_arena_elo -0.2
pearson_top_8_eq_bench -0.05
kendall_top_8_eq_bench 0.14
Judgemark 27.17


# CohereForAI/c4ai-command-r-plus

Test model scores:
81.18 gpt-4-0125-preview
81.03 claude-3-opus-20240229
79.77 claude-3-sonnet-20240229
77.96 claude-3-haiku-20240307
76.46 mistral-small
77.29 mistral-medium
78.99 mistral-large-2402
72.36 gpt-3.5-turbo-0301
80.39 01-ai/Yi-34B-Chat
73.08 openchat/openchat-3.5-1210
71.4 garage-bAInd/Platypus2-70B-instruct
77.53 mistralai/Mixtral-8x7B-Instruct-v0.1
76.07 Qwen/Qwen1.5-14B-Chat
57.09 Qwen/Qwen1.5-4B-Chat
66.69 google/gemma-2b-it
75.43 google/gemma-7b-it
71.61 meta-llama/Llama-2-7b-chat-hf
74.64 meta-llama/Llama-2-13b-chat-hf
77.15 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 10.347631653787296
ANOVA p-value 5.814716731842061e-23
Self bias: N/A
Self bias: N/A
Avg 95% CI: 6.98
mean_score 75.06
range 24.09
std_dev 5.75
CV 0.08
std_dev_top_5 0.91
pearson_arena_elo 0.81
kendall_arena_elo 0.71
pearson_eq_bench 0.82
kendall_eq_bench 0.6
pearson_top_8_arena_elo 0.6
kendall_top_8_arena_elo 0.43
pearson_top_8_eq_bench 0.36
kendall_top_8_eq_bench 0.14
Judgemark 46.85


# gpt-4o

Test model scores:
64.15 gpt-4-0125-preview
64.15 claude-3-opus-20240229
59.98 claude-3-sonnet-20240229
56.26 claude-3-haiku-20240307
54.21 mistral-small
55.73 mistral-medium
59.26 mistral-large-2402
44.58 gpt-3.5-turbo-0301
58.22 01-ai/Yi-34B-Chat
51.64 openchat/openchat-3.5-1210
46.09 garage-bAInd/Platypus2-70B-instruct
57.52 mistralai/Mixtral-8x7B-Instruct-v0.1
54.59 Qwen/Qwen1.5-14B-Chat
33.26 Qwen/Qwen1.5-4B-Chat
44.73 google/gemma-2b-it
46.66 google/gemma-7b-it
44.65 meta-llama/Llama-2-7b-chat-hf
46.5 meta-llama/Llama-2-13b-chat-hf
65.16 sophosympatheia/Midnight-Miqu-70B-v1.5


Stats:
ANOVA f-statistic 14.376182916224403
ANOVA p-value 1.2483635880097534e-31
Self bias: N/A
Self bias: N/A
Avg 95% CI: 8.78
mean_score 53.02
range 31.9
std_dev 8.45
CV 0.16
std_dev_top_5 2.71
pearson_arena_elo 0.9
kendall_arena_elo 0.73
pearson_eq_bench 0.82
kendall_eq_bench 0.61
pearson_top_8_arena_elo 0.82
kendall_top_8_arena_elo 0.59
pearson_top_8_eq_bench 0.77
kendall_top_8_eq_bench 0.59
Judgemark 63.35
Cost: $8.00


# claude-3-5-sonnet-20240620

Test model scores:
80.87 gpt-4-0125-preview
82.17 claude-3-opus-20240229
80.82 claude-3-sonnet-20240229
77.61 claude-3-haiku-20240307
72.18 mistral-small
78.52 mistral-medium
75.41 mistral-large-2402
50.79 gpt-3.5-turbo-0301
76.18 01-ai/Yi-34B-Chat
70.89 openchat/openchat-3.5-1210
57.07 garage-bAInd/Platypus2-70B-instruct
73.54 mistralai/Mixtral-8x7B-Instruct-v0.1
72.07 Qwen/Qwen1.5-14B-Chat
30.03 Qwen/Qwen1.5-4B-Chat
46.14 google/gemma-2b-it
51.67 google/gemma-7b-it
51.86 meta-llama/Llama-2-7b-chat-hf
58.05 meta-llama/Llama-2-13b-chat-hf
81.41 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 32.161209345618964
ANOVA p-value 4.0236492223534766e-61
Self bias: N/A
Family bias: N/A
Avg 95% CI: 10.09
mean_score 66.7
range 52.14
std_dev 14.98
CV 0.22
std_dev_top_5 1.36
pearson_arena_elo 0.87
kendall_arena_elo 0.81
pearson_eq_bench 0.85
kendall_eq_bench 0.59
pearson_top_8_arena_elo 0.85
kendall_top_8_arena_elo 0.71
pearson_top_8_eq_bench 0.32
kendall_top_8_eq_bench 0.05
Judgemark 82.35
Cost: $6.50


# *gpt-4o-mini

Test model scores:
70.22 gpt-4-0125-preview
70.1 claude-3-opus-20240229
70.58 claude-3-sonnet-20240229
66.66 claude-3-haiku-20240307
60.06 mistral-small
64.88 mistral-medium
66.0 mistral-large-2402
53.62 gpt-3.5-turbo-0301
66.18 01-ai/Yi-34B-Chat
58.24 openchat/openchat-3.5-1210
54.25 garage-bAInd/Platypus2-70B-instruct
62.58 mistralai/Mixtral-8x7B-Instruct-v0.1
67.01 Qwen/Qwen1.5-14B-Chat
45.68 Qwen/Qwen1.5-4B-Chat
54.47 google/gemma-2b-it
55.46 google/gemma-7b-it
55.16 meta-llama/Llama-2-7b-chat-hf
57.47 meta-llama/Llama-2-13b-chat-hf
70.33 sophosympatheia/Midnight-Miqu-70B-v1.5


Stats:
ANOVA f-statistic 22.915044945947326
ANOVA p-value 2.808719112690766e-47
Self bias: N/A
Family bias: N/A
Avg 95% CI: 6.16
mean_score 61.52
range 24.9
std_dev 7.23
CV 0.12
std_dev_top_5 1.49
pearson_arena_elo 0.91
kendall_arena_elo 0.77
pearson_eq_bench 0.77
kendall_eq_bench 0.56
pearson_top_8_arena_elo 0.83
kendall_top_8_arena_elo 0.47
pearson_top_8_eq_bench 0.49
kendall_top_8_eq_bench 0.14
Judgemark 63.42
Cost: $0.38


# *mistralai/Mistral-Large-Instruct-2407

Test model scores:
71.18 gpt-4-0125-preview
69.01 claude-3-opus-20240229
71.33 claude-3-sonnet-20240229
69.65 claude-3-haiku-20240307
63.3 mistral-small
67.94 mistral-medium
67.28 mistral-large-2402
53.28 gpt-3.5-turbo-0301
66.54 01-ai/Yi-34B-Chat
61.34 openchat/openchat-3.5-1210
56.7 garage-bAInd/Platypus2-70B-instruct
63.64 mistralai/Mixtral-8x7B-Instruct-v0.1
62.83 Qwen/Qwen1.5-14B-Chat
37.21 Qwen/Qwen1.5-4B-Chat
47.59 google/gemma-2b-it
48.65 google/gemma-7b-it
50.37 meta-llama/Llama-2-7b-chat-hf
55.09 meta-llama/Llama-2-13b-chat-hf
70.18 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 24.966611099063776
ANOVA p-value 1.376191469893298e-50
Self bias: N/A
Self bias: N/A
Avg 95% CI: 7.95
mean_score 60.69
range 34.12
std_dev 9.69
CV 0.16
std_dev_top_5 0.99
pearson_arena_elo 0.9
kendall_arena_elo 0.81
pearson_eq_bench 0.85
kendall_eq_bench 0.59
pearson_top_8_arena_elo 0.75
kendall_top_8_arena_elo 0.52
pearson_top_8_eq_bench 0.08
kendall_top_8_eq_bench -0.14
Judgemark 65.69


# *meta-llama/Meta-Llama-3.1-405B-Instruct

Test model scores:
69.51 gpt-4-0125-preview
66.75 claude-3-opus-20240229
61.93 claude-3-sonnet-20240229
60.68 claude-3-haiku-20240307
53.28 mistral-small
55.36 mistral-medium
60.98 mistral-large-2402
43.16 gpt-3.5-turbo-0301
64.75 01-ai/Yi-34B-Chat
46.33 openchat/openchat-3.5-1210
44.14 garage-bAInd/Platypus2-70B-instruct
57.55 mistralai/Mixtral-8x7B-Instruct-v0.1
58.25 Qwen/Qwen1.5-14B-Chat
28.94 Qwen/Qwen1.5-4B-Chat
42.06 google/gemma-2b-it
45.08 google/gemma-7b-it
40.61 meta-llama/Llama-2-7b-chat-hf
40.49 meta-llama/Llama-2-13b-chat-hf
68.41 sophosympatheia/Midnight-Miqu-70B-v1.5

Stats:
ANOVA f-statistic 22.691519823912163
ANOVA p-value 6.58312241269798e-47
Self bias: N/A
Family bias: N/A
Avg 95% CI: 9.77
mean_score 53.07
range 40.57
std_dev 11.51
CV 0.22
std_dev_top_5 3.02
pearson_arena_elo 0.9
kendall_arena_elo 0.71
pearson_eq_bench 0.79
kendall_eq_bench 0.59
pearson_top_8_arena_elo 0.54
kendall_top_8_arena_elo 0.33
pearson_top_8_eq_bench 0.41
kendall_top_8_eq_bench 0.33
Judgemark 68.22
`;

function setupDarkModeToggle() {
	var toggle = document.getElementById('darkModeToggle');
	var label = document.getElementById('toggleLabel');

	// Check if a preference is saved in localStorage
	const savedMode = localStorage.getItem('darkModeEnabled');
	if (savedMode) {
		 document.body.classList.toggle('dark-mode', savedMode === 'true');
		 toggle.checked = savedMode === 'true';
		 label.textContent = savedMode === 'true' ? 'Dark' : 'Light';
	}

	toggle.addEventListener('change', function() {
		 document.body.classList.toggle('dark-mode', this.checked);         
		 label.textContent = this.checked ? 'Dark' : 'Light';
		 localStorage.setItem('darkModeEnabled', this.checked); // Save preference
	});
}

function applySystemTheme() {
	// Only apply system theme if there's no saved preference
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

$.fn.dataTable.ext.type.order['params-pre'] = function (data) {
	if (!data || data === '-') {
		return 9999; // Sort missing or null values last
  }
  if (data.includes('x')) {
		const parts = data.split('x').map(Number);
		return parts.reduce((acc, val) => acc * val, 1); // Multiply if in 'x' format
  }
  return parseFloat(data) || 0; // Default to float conversion
};

function loadLeaderboardData() {
	const judgemarkRuns = leaderboardDataJudgemark.split('\n# ').filter(run => run.trim() !== '');

	const maxJudgemarkScore = Math.max(...judgemarkRuns.map(run => {
		const lines = run.split('\n');
		const judgemarkScoreMatch = lines.find(stat => stat.includes('Judgemark'));
		return judgemarkScoreMatch ? parseFloat(judgemarkScoreMatch.split(/\s+/)[1]) : 0;
	}));

	let html = judgemarkRuns.map(judgemarkRun => {
		const lines = judgemarkRun.split('\n');
		let modelName = lines[0].trim();

		const statsStartIndex = lines.findIndex(line => line.includes('Stats:'));
		const statsLines = lines.slice(statsStartIndex + 1);

		const eqbCorrMatches = statsLines.filter(stat => stat.includes('pearson_eq_bench'));
		const eqbCorr = eqbCorrMatches.length > 0 ? (eqbCorrMatches.map(match => parseFloat(match.split(/\s+/)[1])).reduce((sum, val) => sum + val, 0) / eqbCorrMatches.length).toFixed(2) : '-';

		const arenaCorrMatches = statsLines.filter(stat => stat.includes('pearson_arena_elo'));
		const arenaCorr = arenaCorrMatches.length > 0 ? (arenaCorrMatches.map(match => parseFloat(match.split(/\s+/)[1])).reduce((sum, val) => sum + val, 0) / arenaCorrMatches.length).toFixed(2) : '-';

		const costMatch = statsLines.find(stat => stat.includes('Cost:'));
		const cost = costMatch ? '$' + costMatch.split('$')[1].trim() : '-';

		const stdDevMatch = statsLines.find(stat => stat.includes('std_dev'));
		const stdDev = stdDevMatch ? stdDevMatch.split(/\s+/)[1] : '-';

		const judgemarkScoreMatch = statsLines.find(stat => stat.includes('Judgemark'));
		const judgemarkScore = judgemarkScoreMatch ? judgemarkScoreMatch.split(/\s+/)[1] : '-';

		const selfBiasMatch = statsLines.find(stat => stat.includes('Self bias:'));
		const selfBias = selfBiasMatch ? selfBiasMatch.split(':')[1].trim() : 'N/A';

		const familyBiasMatch = statsLines.find(stat => stat.includes('Family bias:'));
		const familyBias = familyBiasMatch ? familyBiasMatch.split(':')[1].trim() : 'N/A';

		// Extract model name without creator		
		const isNewModel = modelName.startsWith('*');
		modelName = modelName.replace(/^\*/, '');
		let displayModelName = modelName.split('/').pop();
		if (isNewModel) {
			displayModelName = '🆕' + displayModelName
		}
		let modelNameDisplay = modelName.includes('/')
			? `<a href="https://huggingface.co/${modelName}" target="_blank">${displayModelName}</a>`
			: displayModelName;

		let modelStatsFn = 'results/judgemark/' + modelName.replace('/', '__') + '.txt';
		let testModelScoresChartFn = 'results/judgemark_test_model_scores/judgemark_score_ci_' + modelName.replace('/', '__') + '.png';

		const judgemarkScorePercentage = (parseFloat(judgemarkScore) / maxJudgemarkScore) * 100;

		const judgemarkScoreBar = `
			<div class="score-bar-container">
				<div class="judgemark-score-bar" style="width: ${judgemarkScorePercentage}%"></div>
				<span class="score-text">${judgemarkScore}</span>
			</div>
		`;

		const selfBiasLink = selfBias !== 'N/A' ? `<a href="./results/judgemark_bias/judgemark_scatter_${displayModelName}.png">${selfBias}</a>` : selfBias;
		const familyBiasLink = familyBias !== 'N/A' ? `<a href="./results/judgemark_bias/judgemark_scatter_${displayModelName}.png">${familyBias}</a>` : familyBias;

		return `<tr>
			<td>${modelNameDisplay}</td>
			<td>${eqbCorr}</td>
			<td>${arenaCorr}</td>
			<td>${cost}</td>
			<td>${stdDev}</td>
			<td>${selfBiasLink}</td>
			<td>${familyBiasLink}</td>
			<td data-order="${judgemarkScore}">${judgemarkScoreBar}</td>
			<td><a href="${modelStatsFn}">Stats</a></td>
			<td><a href="${testModelScoresChartFn}">📊</a></td>
			</tr>`;
	}).join('');

	document.getElementById('leaderboardBody').innerHTML = html;
	initializeDataTable();
}

function initializeDataTable() {
	let table = $('#judgemark-leaderboard').DataTable({
		"order": [[7, "desc"]], // Default sorting
		"paging": false, // Disable pagination
		"searching": false, // Disable search bar
		"lengthMenu": [50, 100, 200, 1000],
		"language": {
			"lengthMenu": "Show _MENU_"
		},
		"columnDefs": [
			{
					targets: [1, 2, 3, 4, 5, 6],
					className: 'middle-stats'
			},
			{ "targets": [7], "orderSequence": ["desc", "asc"] }, // For Judgemark score column: sort desc first
			{ "targets": [6,5,4, 3], "orderSequence": ["asc", "desc"] }, // For Std. Dev. and Cost columns: sort asc first
		],
		"dom": "<'d-flex flex-column flex-md-row justify-content-between'<'#toggleMiddleStats.d-block.d-sm-none'><'dataTables_length'l><'dataTables_filter'f>>" +
            "<'row'<'col-12'tr>>" +
            "<'row'<'col-md-5'i><'col-md-7'p>>",
		"drawCallback": function(settings) {
			const api = this.api();
			const rows = api.rows({ page: 'current' }).nodes();
			const sortedColumnIndex = api.order()[0][0];

			rows.to$().find('.judgemark-score-bar').css('display', 'block');
		}
	});

	let middleStatsExpanded = false;

    function collapseMiddleColumns() {
        if (window.innerWidth < 575 && !middleStatsExpanded) {
            $('#judgemark-leaderboard tr').each(function () {
                $(this).find('th, td').slice(1, -3).wrapAll('<div class="collapsed-columns"></div>');
            });
            $('#toggleMiddleStats').text('Expand Details');
        } else {
            $('#judgemark-leaderboard tr').each(function () {
                $(this).find('.collapsed-columns').children().unwrap();
            });
            $('#toggleMiddleStats').text('Hide Details');
        }
    }

    function toggleMiddleStats() {
        middleStatsExpanded = !middleStatsExpanded;
        collapseMiddleColumns();
    }

    $(window).on('resize', collapseMiddleColumns);
    $('#toggleMiddleStats').on('click', toggleMiddleStats);
    collapseMiddleColumns();
}

document.addEventListener('DOMContentLoaded', function() {
	// Always execute
	displayEncodedEmail();

	// Conditional execution based on the presence of elements
	if (document.getElementById('judgemark-leaderboard')) {
		loadLeaderboardData(); // Only load leaderboard data if the leaderboard element exists
	}

	// This checks if the system theme preference should be applied, which is common functionality
	applySystemTheme();
	setupDarkModeToggle();
	
});
