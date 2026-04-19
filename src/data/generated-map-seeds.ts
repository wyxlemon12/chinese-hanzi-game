import type { AgeBand, HanziItem, HanziPoemLink, LessonLevel, PoemLibraryEntry } from './curriculum';
import { curriculum, getHanziItemByCharacter } from './curriculum';
import {
  getAllCharacterGroups,
  getCharacterGroupByCharacter,
  getRandomCharacterGroup,
  normalizeToTraditional,
  type CharacterGroup,
} from './character-groups';

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
  themeRuleType: 'same-radical' | 'same-structure' | 'same-theme' | 'same-sound';
  knowledgePoint: string | null;
  lessons: GeneratedAdventureLesson[];
  focusCharacter: string | null;
}

export function resolveAdventureMapSeed(
  knowledgePoint: string | undefined,
  _ageBand: AgeBand,
  mode: 'topic' | 'random',
): GeneratedAdventureMap {
  const normalizedPoint = normalizeToTraditional(knowledgePoint?.trim() ?? '');
  const group = resolveGroup(mode, normalizedPoint);

  return {
    id: `group-${group.id}-${Date.now()}`,
    mode,
    themeTitle: group.title,
    themeDescription: group.subtitle,
    themeRuleType: group.rule,
    knowledgePoint: normalizedPoint || null,
    focusCharacter:
      normalizedPoint && group.characters.includes(normalizedPoint) ? normalizedPoint : null,
    lessons: group.characters.map((character: string, index: number) =>
      createLessonFromCharacter(group, character, index + 1),
    ),
  };
}

function resolveGroup(mode: 'topic' | 'random', normalizedPoint: string): CharacterGroup {
  if (mode === 'random') {
    return getRandomCharacterGroup();
  }

  const directCharacterMatch = normalizedPoint ? getCharacterGroupByCharacter(normalizedPoint) : null;
  if (directCharacterMatch) {
    return directCharacterMatch;
  }

  const keywordMatch = getAllCharacterGroups().find((group) =>
    group.keywords.some((keyword) => normalizedPoint.includes(keyword)),
  );

  return keywordMatch ?? getAllCharacterGroups()[0];
}

function createLessonFromCharacter(group: CharacterGroup, character: string, order: number): GeneratedAdventureLesson {
  const hanzi = getHanziItemByCharacter(character);
  if (!hanzi) {
    throw new Error(`Missing curriculum item for ${character} in ${group.id}`);
  }

  const poemLink = curriculum.hanziPoemLinks.find((item) => item.hanziId === hanzi.id) ?? null;
  const poemLibraryEntry =
    curriculum.poemLibrary.find((item) => item.id === poemLink?.poemLibraryEntryId) ?? null;

  return {
    hanzi,
    level: createGeneratedLevel(group, hanzi.id, character, order),
    poemLink,
    poemLibraryEntry,
  };
}

function createGeneratedLevel(
  group: CharacterGroup,
  hanziItemId: string,
  character: string,
  order: number,
): LessonLevel {
  return {
    id: `group-level-${group.id}-${hanziItemId}`,
    title: character,
    levelType: 'hanzi',
    passRule: 'quiz-pass',
    sortOrder: order,
    hanziItemId,
    rewardTitle: `${group.title} 完成`,
  };
}
