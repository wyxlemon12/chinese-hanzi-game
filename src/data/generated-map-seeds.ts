import type { AgeBand, HanziItem, HanziPoemLink, LessonLevel, PoemLibraryEntry } from './curriculum';
import { curriculum, getHanziItemByCharacter } from './curriculum';

export interface GeneratedAdventureLesson {
  hanzi: HanziItem;
  level: LessonLevel;
  poemLink: HanziPoemLink | null;
  poemLibraryEntry: PoemLibraryEntry | null;
}

export interface GeneratedAdventureMap {
  id: string;
  mode: 'topic' | 'random';
  themeTitle: string;
  themeDescription: string;
  themeRuleType: 'same-theme' | 'shared-radical';
  knowledgePoint: string | null;
  lessons: GeneratedAdventureLesson[];
}

interface PackDefinition {
  id: string;
  themeTitle: string;
  themeDescription: string;
  themeRuleType: 'same-theme' | 'shared-radical';
  keywords: string[];
  characters: string[];
}

const extraCharacterSeeds = {
  春: {
    pinyin: 'chun',
    meaning: '春天，万物醒来的季节。',
    radical: '日字头',
    observationHint: '上面像太阳升起，下面像草木醒来。',
    missionPrompt: '帮春天地图点亮第一张季节线索卡。',
    introText: '“春”像太阳照着草木，让春天慢慢醒来。',
    prompt: '跟着顺序把“春”描出来，让春天开始发芽。',
    encouragement: '春天的第一张线索卡已经亮了。',
    vocabExamples: [
      { id: 'seed-spring-1', word: '春天', gloss: '春天来了，花和树都开始醒来。' },
      { id: 'seed-spring-2', word: '春风', gloss: '春风吹过的时候很轻很暖。' },
    ],
  },
  花: {
    pinyin: 'hua',
    meaning: '花，春天里盛开的花朵。',
    radical: '草字头',
    observationHint: '上面像草叶，下面像花慢慢绽开。',
    missionPrompt: '帮春天地图收集第一朵花的线索。',
    introText: '“花”像一朵带着叶子的花慢慢开出来。',
    prompt: '把花的轮廓稳稳描好，让花朵盛开。',
    encouragement: '花开了，春天的颜色也更亮了。',
    vocabExamples: [
      { id: 'seed-flower-1', word: '花朵', gloss: '花朵在春天里最容易被看到。' },
      { id: 'seed-flower-2', word: '开花', gloss: '天气暖和以后，很多树都会开花。' },
    ],
  },
  雨: {
    pinyin: 'yu',
    meaning: '雨，从云里落下来的雨点。',
    radical: '雨字头',
    observationHint: '上面像天空，下面像雨点落下来。',
    missionPrompt: '帮天气地图记录一场春雨。',
    introText: '“雨”像天空里落下来的小雨点。',
    prompt: '把雨点和外框一起描出来，让天气变完整。',
    encouragement: '春雨到了，地面和花草都醒来啦。',
    vocabExamples: [
      { id: 'seed-rain-1', word: '下雨', gloss: '下雨时，地面会变得湿湿的。' },
      { id: 'seed-rain-2', word: '雨点', gloss: '雨点会一颗颗落下来。' },
    ],
  },
} as const;

const extraPoemSeeds = {
  春: {
    lineText: '春眠不觉晓，处处闻啼鸟。',
    poemTitle: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    meaningInLine: '这里的“春”写的是春天到来的早晨。',
    kidExplanation: '春天早晨醒来时，到处都能听见鸟叫声。',
  },
  花: {
    lineText: '人闲桂花落，夜静春山空。',
    poemTitle: '鸟鸣涧',
    author: '王维',
    dynasty: '唐',
    meaningInLine: '这里的“花”写的是桂花静静落下。',
    kidExplanation: '花落下来的时候很安静，说明夜晚的山里特别静。',
  },
  雨: {
    lineText: '夜来风雨声，花落知多少。',
    poemTitle: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    meaningInLine: '这里的“雨”写的是夜里落下来的雨。',
    kidExplanation: '夜里的风雨会把花吹落，所以早上会想知道掉了多少花。',
  },
} as const;

function hasGeneratedCharacterSeed(character: string): character is keyof typeof extraCharacterSeeds {
  return character in extraCharacterSeeds;
}

function hasGeneratedPoemSeed(character: string): character is keyof typeof extraPoemSeeds {
  return character in extraPoemSeeds;
}

const packs: PackDefinition[] = [
  {
    id: 'forest-camp',
    themeTitle: '森林营地',
    themeDescription: '围绕森林、天气和自然线索展开的探险地图。',
    themeRuleType: 'same-theme',
    keywords: ['森林', '自然', '营地', '山水', '木字旁'],
    characters: ['木', '林', '森', '山', '日', '月', '云', '风', '水', '人'],
  },
  {
    id: 'spring-observer',
    themeTitle: '春天观察站',
    themeDescription: '观察春天里天气、花草和自然变化的探险地图。',
    themeRuleType: 'same-theme',
    keywords: ['春天', '花', '天气', '春风', '春雨'],
    characters: ['春', '花', '风', '雨', '云', '山', '水', '日', '月', '人'],
  },
  {
    id: 'wood-radical',
    themeTitle: '木字旁工作坊',
    themeDescription: '围绕木字旁和树木主题认识一组相关汉字。',
    themeRuleType: 'shared-radical',
    keywords: ['木字旁', '树木', '木', '林'],
    characters: ['木', '林', '森', '人', '山', '日', '月', '云', '风', '水'],
  },
];

export function resolveAdventureMapSeed(
  knowledgePoint: string | undefined,
  ageBand: AgeBand,
  mode: 'topic' | 'random',
): GeneratedAdventureMap {
  const normalizedPoint = knowledgePoint?.trim() ?? '';
  const pack =
    mode === 'random'
      ? packs[Math.floor(Math.random() * packs.length)]
      : packs.find((item) => item.keywords.some((keyword) => normalizedPoint.includes(keyword))) ?? packs[0];

  return {
    id: `generated-map-${pack.id}-${Date.now()}`,
    mode,
    themeTitle: pack.themeTitle,
    themeDescription: pack.themeDescription,
    themeRuleType: pack.themeRuleType,
    knowledgePoint: normalizedPoint || null,
    lessons: pack.characters.map((character, index) => createLessonFromCharacter(character, ageBand, pack, index + 1)),
  };
}

function createLessonFromCharacter(
  character: string,
  _ageBand: AgeBand,
  pack: PackDefinition,
  order: number,
): GeneratedAdventureLesson {
  const existing = getHanziItemByCharacter(character);

  if (existing) {
    const poemLink = curriculum.hanziPoemLinks.find((item) => item.hanziId === existing.id) ?? null;
    const poemLibraryEntry =
      curriculum.poemLibrary.find((item) => item.id === poemLink?.poemLibraryEntryId) ?? null;

    return {
      hanzi: existing,
      level: createGeneratedLevel(existing.id, character, order),
      poemLink,
      poemLibraryEntry,
    };
  }

  if (!hasGeneratedCharacterSeed(character)) {
    throw new Error(`Missing generated character seed for ${character}`);
  }

  const generatedHanzi = createGeneratedSeedHanzi(character, pack.themeTitle);
  const generatedPoem = createGeneratedSeedPoem(character, pack.themeTitle);

  return {
    hanzi: generatedHanzi,
    level: createGeneratedLevel(generatedHanzi.id, character, order),
    poemLink: {
      hanziId: generatedHanzi.id,
      poemLibraryEntryId: generatedPoem?.id ?? null,
      matchStatus: generatedPoem ? 'linked' : 'missing',
      reviewNote: generatedPoem ? '临时地图自动生成并补齐。' : '临时地图未找到古诗卡。',
      reviewedBy: generatedPoem ? 'system' : null,
    },
    poemLibraryEntry: generatedPoem,
  };
}

function createGeneratedLevel(hanziItemId: string, character: string, order: number): LessonLevel {
  return {
    id: `generated-level-${hanziItemId}`,
    title: `第 ${order} 个线索：${character}`,
    levelType: 'hanzi',
    passRule: 'quiz-pass',
    sortOrder: order,
    hanziItemId,
    rewardTitle: '临时地图徽章',
  };
}

function createGeneratedSeedHanzi(character: keyof typeof extraCharacterSeeds, themeTitle: string): HanziItem {
  const seed = extraCharacterSeeds[character];
  return {
    id: `generated-${character.codePointAt(0)?.toString(16) ?? character}`,
    character,
    pinyin: seed.pinyin,
    meaning: seed.meaning,
    radical: seed.radical,
    strokeCount: 0,
    animationLabel: seed.observationHint,
    introText: seed.introText,
    prompt: seed.prompt,
    encouragement: seed.encouragement,
    projectTheme: themeTitle,
    observationHint: seed.observationHint,
    missionPrompt: seed.missionPrompt,
    vocabExamples: [...seed.vocabExamples],
  };
}

function createGeneratedSeedPoem(character: string, themeTitle: string): PoemLibraryEntry | null {
  if (!hasGeneratedPoemSeed(character)) {
    return null;
  }

  const seed = extraPoemSeeds[character];
  if (!seed) {
    return null;
  }

  return {
    id: `generated-poem-${character.codePointAt(0)?.toString(16) ?? character}`,
    lineText: seed.lineText,
    poemTitle: seed.poemTitle,
    author: seed.author,
    dynasty: seed.dynasty,
    focusCharacter: character,
    charactersIncluded: [...new Set(seed.lineText.replace(/[，。！？、；：]/g, '').split(''))],
    difficultyLevel: 'starter',
    themeTags: [themeTitle, 'AI生成地图'],
    isApproved: true,
    meaningInLine: seed.meaningInLine,
    kidExplanation: seed.kidExplanation,
    sourceNote: `${seed.poemTitle} 真实古诗原句（临时地图）`,
  };
}
