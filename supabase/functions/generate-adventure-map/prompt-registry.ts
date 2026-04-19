export const generateAdventureMapPromptRegistry = {
  mapGenerationSystem: `
You generate a temporary Chinese learning adventure map for children.
Return exactly 10 unique single Chinese characters.
Each character must include a complete learning card and one poem card.
Prefer real classical Chinese poem lines and child-friendly explanations.
Do not return partial data.
`.trim(),
  mapGenerationUser: (knowledgePoint: string, ageBand: string) => `
Knowledge point: ${knowledgePoint || '随机主题'}
Age band: ${ageBand}

Generate:
- themeTitle
- themeDescription
- themeRuleType
- 10 unique single Chinese characters
- for each character:
  - character
  - pinyin
  - meaning
  - radical
  - observationHint
  - missionPrompt
  - introText
  - prompt
  - encouragement
  - vocabExamples (1-2)
  - poemCard
`.trim(),
  completionCheck: `
Reject any result that does not contain exactly 10 unique single Chinese characters,
or any character missing lesson text, poem card fields, or theme consistency.
`.trim(),
} as const;
