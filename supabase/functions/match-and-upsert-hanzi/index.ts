import { createClient } from 'jsr:@supabase/supabase-js@2';

type AgeBand = '4-6' | '6-8' | '8-10';

interface PoemSeedEntry {
  id: string;
  lineText: string;
  poemTitle: string;
  author: string;
  dynasty: string;
  focusCharacter: string;
  difficultyLevel: 'starter' | 'core' | 'advanced';
  themeTags: string[];
}

const POEM_SEED: PoemSeedEntry[] = [
  {
    id: 'seed-flower',
    lineText: '人闲桂花落，夜静春山空。',
    poemTitle: '鸟鸣涧',
    author: '王维',
    dynasty: '唐',
    focusCharacter: '花',
    difficultyLevel: 'starter',
    themeTags: ['自由单字', '自然'],
  },
  {
    id: 'seed-rain',
    lineText: '夜来风雨声，花落知多少。',
    poemTitle: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    focusCharacter: '雨',
    difficultyLevel: 'starter',
    themeTags: ['自由单字', '自然'],
  },
  {
    id: 'seed-cloud',
    lineText: '白云生处有人家。',
    poemTitle: '山行',
    author: '杜牧',
    dynasty: '唐',
    focusCharacter: '云',
    difficultyLevel: 'starter',
    themeTags: ['自由单字', '自然'],
  },
];

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const { character, ageBand, contextTheme } = (await request.json()) as {
    character: string;
    ageBand: AgeBand;
    contextTheme?: string;
  };

  if (!character || [...character].length !== 1) {
    return json({ error: '请输入一个汉字' }, 400);
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const existing = await supabase
    .from('hanzi_items')
    .select('*')
    .eq('character', character)
    .maybeSingle();

  if (existing.data) {
    const poemLink = await supabase
      .from('hanzi_poem_links')
      .select('*')
      .eq('hanzi_id', existing.data.id)
      .maybeSingle();

    const poemEntry = poemLink.data?.poem_library_entry_id
      ? (
          await supabase
            .from('poem_library_entries')
            .select('*')
            .eq('id', poemLink.data.poem_library_entry_id)
            .maybeSingle()
        ).data
      : null;

    return json({
      hanzi: normalizeHanzi(existing.data),
      level: createCustomLevel(existing.data.id, character),
      poemLink: poemLink.data,
      poemLibraryEntry: poemEntry,
    });
  }

  const candidate = chooseCandidate(character, ageBand, contextTheme ?? '自由单字');
  const hanziId = `custom-${character.codePointAt(0)?.toString(16) ?? character}`;
  const hanzi = {
    id: hanziId,
    character,
    pinyin: '待补',
    meaning: `这是你主动输入想学习的“${character}”。`,
    radical: '自由单字',
    stroke_count: 0,
    animation_ref: character,
    source: 'auto-generated',
    project_theme: contextTheme ?? '自由单字',
    observation_hint: '先观察这个字的轮廓，再试着描出来。',
    mission_prompt: `先认识“${character}”，再看看它在古诗里怎么出现。`,
  };

  await supabase.from('hanzi_items').upsert(hanzi);

  let poemEntry: Record<string, unknown> | null = null;
  let poemLink: Record<string, unknown>;

  if (candidate) {
    poemEntry = {
      id: `generated-${character}-${candidate.id}`,
      line_text: candidate.lineText,
      poem_title: candidate.poemTitle,
      author: candidate.author,
      dynasty: candidate.dynasty,
      focus_character: character,
      characters_included: [...new Set(candidate.lineText.replace(/[，。！？、；：]/g, '').split(''))],
      difficulty_level: candidate.difficultyLevel,
      theme_tags: candidate.themeTags,
      is_approved: true,
      meaning_in_line: `这句古诗里也出现了“${character}”。`,
      kid_explanation: `学会“${character}”以后，你就能在古诗里把它认出来。`,
      source_note: `${candidate.poemTitle} 真实古诗原句（自动匹配）`,
    };
    await supabase.from('poem_library_entries').upsert(poemEntry);

    poemLink = {
      hanzi_id: hanziId,
      poem_library_entry_id: poemEntry.id,
      match_status: 'linked',
      source: 'auto-generated',
      review_note: '系统自动匹配并立即启用。',
      reviewed_by: 'system',
    };
  } else {
    poemLink = {
      hanzi_id: hanziId,
      poem_library_entry_id: null,
      match_status: 'missing',
      source: 'auto-generated',
      review_note: '未在精选诗库中找到合适诗句。',
      reviewed_by: null,
    };
  }

  await supabase.from('hanzi_poem_links').upsert(poemLink);
  await supabase.from('custom_hanzi_requests').insert({
    id: crypto.randomUUID(),
    character,
    age_band: ageBand,
    context_theme: contextTheme ?? '自由单字',
    was_created: true,
    match_status: poemLink.match_status,
  });

  return json({
    wasCreated: true,
    hanzi: normalizeHanzi(hanzi),
    level: createCustomLevel(hanziId, character),
    poemLink,
    poemLibraryEntry: poemEntry,
  });
});

function chooseCandidate(character: string, ageBand: AgeBand, contextTheme: string) {
  return [...POEM_SEED]
    .filter((entry) => entry.lineText.includes(character))
    .sort((left, right) => score(right, ageBand, contextTheme, character) - score(left, ageBand, contextTheme, character))[0] ?? null;
}

function score(entry: PoemSeedEntry, ageBand: AgeBand, contextTheme: string, character: string) {
  let points = 0;
  if (entry.focusCharacter === character) points += 5;
  if (entry.themeTags.includes(contextTheme)) points += 3;
  if (entry.difficultyLevel === 'starter') points += 2;
  if (ageBand === '6-8') points += 1;
  return points;
}

function createCustomLevel(hanziId: string, character: string) {
  return {
    id: `custom-level-${hanziId}`,
    title: `自由探索：${character}`,
    levelType: 'hanzi',
    passRule: 'quiz-pass',
    sortOrder: 999,
    hanziItemId: hanziId,
    rewardTitle: '自由探索徽章',
  };
}

function normalizeHanzi(item: Record<string, unknown>) {
  return {
    id: String(item.id),
    character: String(item.character),
    pinyin: String(item.pinyin ?? '待补'),
    meaning: String(item.meaning ?? ''),
    radical: String(item.radical ?? '自由单字'),
    strokeCount: Number(item.stroke_count ?? 0),
    animationLabel: `先观察“${String(item.character)}”的样子，再跟着描一描。`,
    introText: String(item.meaning ?? ''),
    prompt: `试着把“${String(item.character)}”稳稳地描出来。`,
    encouragement: `很好，你已经开始认识“${String(item.character)}”了。`,
    projectTheme: String(item.project_theme ?? '自由单字'),
    observationHint: String(item.observation_hint ?? '先观察整体轮廓，再看笔画怎么走。'),
    missionPrompt: String(item.mission_prompt ?? `先认识“${String(item.character)}”，再看看它在古诗里怎么出现。`),
    vocabExamples: [],
  };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  });
}
