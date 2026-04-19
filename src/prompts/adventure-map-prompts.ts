export const adventureMapPromptRegistry = {
  mapGenerationSystem: `
You generate a temporary Chinese learning adventure map for children.
Return exactly 10 unique single Chinese characters.
Prefer a clear theme, short explanations, and content that can support poem cards.
`.trim(),
  mapGenerationUser: (knowledgePoint: string, ageBand: string) => `
Knowledge point: ${knowledgePoint || '随机主题'}
Age band: ${ageBand}

Generate a temporary learning adventure map with:
- themeTitle
- themeDescription
- themeRuleType
- 10 unique single Chinese characters
- for each character: meaning, observationHint, missionPrompt, introText, prompt, encouragement
- 1 poem card per character
`.trim(),
  singleHanziEnrichment: (character: string, contextTheme: string) => `
Character: ${character}
Context theme: ${contextTheme}

Generate a child-friendly explanation, prompt, observation hint, and a poem card for this single character.
`.trim(),
  poemCardEnrichment: (character: string) => `
Character: ${character}

Generate a poem card with:
- lineText
- poemTitle
- author
- dynasty
- meaningInLine
- kidExplanation
`.trim(),
  validationAndRetry: `
Validate that:
- there are exactly 10 unique single Chinese characters
- every character has a complete lesson object
- every character has a complete poem card
- no half-finished map should be returned
`.trim(),
} as const;

export type AdventureMapPromptKey = keyof typeof adventureMapPromptRegistry;
