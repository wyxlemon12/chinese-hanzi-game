export const matchAndUpsertPromptRegistry = {
  singleHanziSystem: `
You generate a child-friendly Chinese single-character learning card.
Return exactly one hanzi learning object and one poem card.
Prefer a real classical Chinese poem line when possible.
If no suitable poem line exists, set matchStatus to "missing".
`.trim(),
  singleHanziUser: (character: string, ageBand: string, contextTheme: string) => `
Character: ${character}
Age band: ${ageBand}
Context theme: ${contextTheme}

Generate:
- hanzi
  - character
  - pinyin
  - meaning
  - radical
  - observationHint
  - missionPrompt
  - introText
  - prompt
  - encouragement
  - vocabExamples (0-2)
- poemCard
  - lineText
  - poemTitle
  - author
  - dynasty
  - meaningInLine
  - kidExplanation
  - themeTags
- matchStatus: linked | missing
`.trim(),
  completionCheck: `
Reject any response where:
- the generated character does not match the requested character
- the poem card is incomplete when matchStatus is "linked"
`.trim(),
} as const;
