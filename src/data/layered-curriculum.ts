import type { HanziItem } from './curriculum';
import { layeredCharacterResources, type LayeredCharacterResource } from './layered-character-resources.generated';
import { toolHanziItems } from './tool-curriculum';

function toHanziItem(resource: LayeredCharacterResource): HanziItem {
  return {
    id: resource.id,
    character: resource.character,
    pinyin: resource.pinyin[0] ?? '待補',
    meaning: resource.definition ?? `${resource.character} 是首批分層字庫中的常用繁體字。`,
    radical: resource.radical,
    strokeCount: resource.strokeCount,
    animationLabel: `先看清楚「${resource.character}」的筆順，再跟著描一描。`,
    introText:
      resource.layer === 1
        ? `「${resource.character}」已經在第一層字庫中配好基礎練習資料，可以直接開始。`
        : `「${resource.character}」已經納入第二層字庫，目前可做基礎筆畫練習。`,
    prompt: `試著把「${resource.character}」穩穩地寫出來。`,
    encouragement: `很好，你已經完成「${resource.character}」的練習。`,
    projectTheme: '繁體字筆畫輔助工具',
    observationHint: resource.observationHint,
    missionPrompt: `今天先把「${resource.character}」寫穩。`,
    vocabExamples: resource.vocabExamples.map((example, index) => ({
      id: `${resource.id}-vocab-${index + 1}`,
      word: example.word,
      gloss: example.gloss,
    })),
    structureType: resource.structureType,
    structureHint: resource.structureHint,
    parts: resource.parts,
  };
}

const coreCharacters = new Set(toolHanziItems.map((item) => item.character));

export const layeredHanziItems: HanziItem[] = layeredCharacterResources
  .filter((resource) => !coreCharacters.has(resource.character))
  .map(toHanziItem);

export const extendedHanziItems: HanziItem[] = [...toolHanziItems, ...layeredHanziItems];

export function getLayeredCharacterCount() {
  return layeredCharacterResources.length;
}

export function getLayeredResourceByCharacter(character: string) {
  return layeredCharacterResources.find((resource) => resource.character === character) ?? null;
}
