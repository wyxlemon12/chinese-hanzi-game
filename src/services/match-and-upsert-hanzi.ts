import {
  curriculum,
  getHanziItemByCharacter,
  type AgeBand,
  type HanziItem,
  type HanziPoemLink,
  type LessonLevel,
  type PoemLibraryEntry,
} from '../data/curriculum';
import { normalizeToTraditional } from '../data/character-groups';
import { findPoemCandidatesForCharacter } from '../data/poem-matching';

const CUSTOM_STORE_KEY = 'shuyuan-custom-hanzi-store';

export interface ResolvedCustomHanziLesson {
  mode: 'custom';
  wasCreated: boolean;
  hanzi: HanziItem;
  level: LessonLevel;
  poemLink: HanziPoemLink | null;
  poemLibraryEntry: PoemLibraryEntry | null;
}

interface PersistedCustomLesson {
  hanzi: HanziItem;
  level: LessonLevel;
  poemLink: HanziPoemLink | null;
  poemLibraryEntry: PoemLibraryEntry | null;
}

interface MatchAndUpsertRequest {
  character: string;
  ageBand: AgeBand;
  contextTheme?: string;
}

export async function matchAndUpsertHanzi(
  request: MatchAndUpsertRequest,
): Promise<ResolvedCustomHanziLesson> {
  const character = normalizeToTraditional(request.character.trim());
  if (!isSingleHanzi(character)) {
    throw new Error('請輸入一個單字。');
  }

  const existing = getHanziItemByCharacter(character);
  if (existing) {
    return {
      mode: 'custom',
      wasCreated: false,
      hanzi: existing,
      level: createCustomLevel(existing),
      poemLink: curriculum.hanziPoemLinks.find((item) => item.hanziId === existing.id) ?? null,
      poemLibraryEntry:
        curriculum.poemLibrary.find(
          (item) =>
            item.id ===
            (curriculum.hanziPoemLinks.find((link) => link.hanziId === existing.id)?.poemLibraryEntryId ?? ''),
        ) ?? null,
    };
  }

  const cached = readCustomStore()[character];
  if (cached) {
    return {
      mode: 'custom',
      wasCreated: false,
      ...cached,
    };
  }

  const generated = createLocalGeneratedLesson(request, character);
  writeCustomStore(character, generated);

  return {
    mode: 'custom',
    wasCreated: true,
    ...generated,
  };
}

function createLocalGeneratedLesson(request: MatchAndUpsertRequest, character: string): PersistedCustomLesson {
  const bestCandidate =
    findPoemCandidatesForCharacter(curriculum, {
      character,
      ageBand: request.ageBand,
      projectTheme: request.contextTheme ?? '自由單字',
    })[0] ?? null;

  const hanzi = createGeneratedHanziItem(character, request.contextTheme ?? '自由單字');
  const level = createCustomLevel(hanzi);

  if (!bestCandidate) {
    return {
      hanzi,
      level,
      poemLink: {
        hanziId: hanzi.id,
        poemLibraryEntryId: null,
        matchStatus: 'missing',
        reviewNote: '未在首批字庫中找到對應古詩卡。',
        reviewedBy: null,
      },
      poemLibraryEntry: null,
    };
  }

  const poemLibraryEntry = createDerivedPoemCard(character, bestCandidate);
  return {
    hanzi,
    level,
    poemLink: {
      hanziId: hanzi.id,
      poemLibraryEntryId: poemLibraryEntry.id,
      matchStatus: 'linked',
      reviewNote: '系統自動匹配並啟用。',
      reviewedBy: 'system',
    },
    poemLibraryEntry,
  };
}

function createGeneratedHanziItem(character: string, projectTheme: string): HanziItem {
  const id = `custom-${character.codePointAt(0)?.toString(16) ?? character}`;

  return {
    id,
    character,
    pinyin: '待補',
    meaning: `這是你主動輸入想練習的「${character}」。`,
    radical: '自由單字',
    strokeCount: 0,
    animationLabel: `先觀察「${character}」的樣子，再跟著描一描。`,
    introText: `這是你主動選擇學習的「${character}」，先看動畫，再自己試試看。`,
    prompt: `試著把「${character}」穩穩地描出來。`,
    encouragement: `很好，你已經開始認識「${character}」了。`,
    projectTheme,
    observationHint: '先觀察整體輪廓，再看筆畫怎麼走。',
    missionPrompt: `今天先把「${character}」寫穩。`,
    vocabExamples: [],
    structureType: 'single',
    structureHint: '先觀察整體輪廓，再看筆畫走向。',
    parts: [],
  };
}

function createCustomLevel(hanzi: HanziItem): LessonLevel {
  return {
    id: `custom-level-${hanzi.id}`,
    title: hanzi.character,
    levelType: 'hanzi',
    passRule: 'quiz-pass',
    sortOrder: 999,
    hanziItemId: hanzi.id,
    rewardTitle: '自由練習完成',
  };
}

function createDerivedPoemCard(character: string, entry: PoemLibraryEntry): PoemLibraryEntry {
  return {
    ...entry,
    id: `derived-${character}-${entry.id}`,
    focusCharacter: character,
    meaningInLine: `這句古詩裡也出現了「${character}」。`,
    kidExplanation: `學會「${character}」以後，你就能在古詩裡把它認出來。`,
    sourceNote: `${entry.sourceNote}（自動匹配）`,
  };
}

function readCustomStore(): Record<string, PersistedCustomLesson> {
  if (typeof window === 'undefined') {
    return {};
  }

  const raw = window.localStorage.getItem(CUSTOM_STORE_KEY);
  return raw ? (JSON.parse(raw) as Record<string, PersistedCustomLesson>) : {};
}

function writeCustomStore(character: string, lesson: PersistedCustomLesson) {
  if (typeof window === 'undefined') {
    return;
  }

  const current = readCustomStore();
  current[character] = lesson;
  window.localStorage.setItem(CUSTOM_STORE_KEY, JSON.stringify(current));
}

function isSingleHanzi(value: string) {
  return value.length === 1 && /\p{Script=Han}/u.test(value);
}
