import {
  curriculum,
  getHanziItemByCharacter,
  type AgeBand,
  type HanziItem,
  type HanziPoemLink,
  type LessonLevel,
  type PoemLibraryEntry,
} from '../data/curriculum';
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
  const character = request.character.trim();
  if (!isSingleHanzi(character)) {
    throw new Error('请输入一个汉字');
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

  const supabaseResolved = await trySupabaseEdgeFunction(request);
  if (supabaseResolved) {
    writeCustomStore(character, supabaseResolved);
    return {
      mode: 'custom',
      wasCreated: true,
      ...supabaseResolved,
    };
  }

  const generated = createLocalGeneratedLesson(request);
  writeCustomStore(character, generated);

  return {
    mode: 'custom',
    wasCreated: true,
    ...generated,
  };
}

function createLocalGeneratedLesson(request: MatchAndUpsertRequest): PersistedCustomLesson {
  const character = request.character.trim();
  const bestCandidate =
    findPoemCandidatesForCharacter(curriculum, {
      character,
      ageBand: request.ageBand,
      projectTheme: request.contextTheme ?? '自由单字',
    })[0] ?? null;

  const hanzi = createGeneratedHanziItem(character, request.contextTheme ?? '自由单字');
  const level = createCustomLevel(hanzi);

  if (!bestCandidate) {
    return {
      hanzi,
      level,
      poemLink: {
        hanziId: hanzi.id,
        poemLibraryEntryId: null,
        matchStatus: 'missing',
        reviewNote: '未在精选诗库中找到合适诗句。',
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
      reviewNote: '系统自动匹配并立即启用。',
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
    pinyin: '待补',
    meaning: `这是你主动输入想学习的“${character}”。`,
    radical: '自由单字',
    strokeCount: 0,
    animationLabel: `先观察“${character}”的样子，再跟着描一描。`,
    introText: `这是你主动选择学习的“${character}”，先看老师演示，再自己试试。`,
    prompt: `试着把“${character}”稳稳地描出来。`,
    encouragement: `很好，你已经开始认识“${character}”了。`,
    projectTheme,
    observationHint: '先观察整体轮廓，再看笔画怎么走。',
    missionPrompt: `这是你自己发起的探索任务：认识“${character}”。`,
    vocabExamples: [],
  };
}

function createCustomLevel(hanzi: HanziItem): LessonLevel {
  return {
    id: `custom-level-${hanzi.id}`,
    title: `自由探索：${hanzi.character}`,
    levelType: 'hanzi',
    passRule: 'quiz-pass',
    sortOrder: 999,
    hanziItemId: hanzi.id,
    rewardTitle: '自由探索徽章',
  };
}

function createDerivedPoemCard(character: string, entry: PoemLibraryEntry): PoemLibraryEntry {
  return {
    ...entry,
    id: `derived-${character}-${entry.id}`,
    focusCharacter: character,
    meaningInLine: `这句古诗里也出现了“${character}”。`,
    kidExplanation: `学会“${character}”以后，你就能在古诗里把它认出来。`,
    sourceNote: `${entry.sourceNote}（自动匹配）`,
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

async function trySupabaseEdgeFunction(
  request: MatchAndUpsertRequest,
): Promise<PersistedCustomLesson | null> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey || typeof fetch === 'undefined') {
    return null;
  }

  try {
    const response = await fetch(`${url}/functions/v1/match-and-upsert-hanzi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as PersistedCustomLesson;
  } catch {
    return null;
  }
}

function isSingleHanzi(value: string) {
  return value.length === 1 && /\p{Script=Han}/u.test(value);
}
