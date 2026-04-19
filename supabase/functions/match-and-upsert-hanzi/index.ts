import { createClient } from 'jsr:@supabase/supabase-js@2';
import { createMiniMaxJsonCompletion } from '../_shared/minimax.ts';
import { matchAndUpsertPromptRegistry } from './prompt-registry.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type AgeBand = '4-6' | '6-8' | '8-10';

interface SingleHanziPayload {
  hanzi: {
    character: string;
    pinyin: string;
    meaning: string;
    radical: string;
    observationHint: string;
    missionPrompt: string;
    introText: string;
    prompt: string;
    encouragement: string;
    vocabExamples: Array<{ word: string; gloss: string }>;
  };
  poemCard: {
    lineText: string;
    poemTitle: string;
    author: string;
    dynasty: string;
    meaningInLine: string;
    kidExplanation: string;
    themeTags: string[];
  } | null;
  matchStatus: 'linked' | 'missing';
}

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
      wasCreated: false,
      hanzi: normalizeHanzi(existing.data),
      level: createCustomLevel(existing.data.id, character),
      poemLink: poemLink.data,
      poemLibraryEntry: poemEntry,
    });
  }

  try {
    const payload = await createMiniMaxJsonCompletion<SingleHanziPayload>({
      messages: [
        { role: 'system', content: matchAndUpsertPromptRegistry.singleHanziSystem },
        {
          role: 'user',
          content: `${matchAndUpsertPromptRegistry.singleHanziUser(
            character,
            ageBand,
            contextTheme ?? '自由单字',
          )}\n\n${matchAndUpsertPromptRegistry.completionCheck}`,
        },
      ],
      schemaName: 'generated_single_hanzi',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['hanzi', 'poemCard', 'matchStatus'],
        properties: {
          matchStatus: { type: 'string', enum: ['linked', 'missing'] },
          hanzi: {
            type: 'object',
            additionalProperties: false,
            required: [
              'character',
              'pinyin',
              'meaning',
              'radical',
              'observationHint',
              'missionPrompt',
              'introText',
              'prompt',
              'encouragement',
              'vocabExamples',
            ],
            properties: {
              character: { type: 'string' },
              pinyin: { type: 'string' },
              meaning: { type: 'string' },
              radical: { type: 'string' },
              observationHint: { type: 'string' },
              missionPrompt: { type: 'string' },
              introText: { type: 'string' },
              prompt: { type: 'string' },
              encouragement: { type: 'string' },
              vocabExamples: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['word', 'gloss'],
                  properties: {
                    word: { type: 'string' },
                    gloss: { type: 'string' },
                  },
                },
              },
            },
          },
          poemCard: {
            anyOf: [
              { type: 'null' },
              {
                type: 'object',
                additionalProperties: false,
                required: ['lineText', 'poemTitle', 'author', 'dynasty', 'meaningInLine', 'kidExplanation', 'themeTags'],
                properties: {
                  lineText: { type: 'string' },
                  poemTitle: { type: 'string' },
                  author: { type: 'string' },
                  dynasty: { type: 'string' },
                  meaningInLine: { type: 'string' },
                  kidExplanation: { type: 'string' },
                  themeTags: {
                    type: 'array',
                    items: { type: 'string' },
                  },
                },
              },
            ],
          },
        },
      },
    });

    const hanziId = `custom-${character.codePointAt(0)?.toString(16) ?? character}`;

    await supabase.from('hanzi_items').upsert({
      id: hanziId,
      character: payload.hanzi.character,
      pinyin: payload.hanzi.pinyin,
      meaning: payload.hanzi.meaning,
      radical: payload.hanzi.radical,
      stroke_count: 0,
      animation_ref: character,
      source: 'ai-generated',
      project_theme: contextTheme ?? '自由单字',
      observation_hint: payload.hanzi.observationHint,
      mission_prompt: payload.hanzi.missionPrompt,
    });

    let poemEntry: Record<string, unknown> | null = null;
    let poemLink: Record<string, unknown>;

    if (payload.matchStatus === 'linked' && payload.poemCard) {
      poemEntry = {
        id: `generated-${character}-${Date.now()}`,
        line_text: payload.poemCard.lineText,
        poem_title: payload.poemCard.poemTitle,
        author: payload.poemCard.author,
        dynasty: payload.poemCard.dynasty,
        focus_character: character,
        characters_included: [...new Set(payload.poemCard.lineText.replace(/[，。！？、；：]/g, '').split(''))],
        difficulty_level: 'starter',
        theme_tags: payload.poemCard.themeTags,
        is_approved: true,
        meaning_in_line: payload.poemCard.meaningInLine,
        kid_explanation: payload.poemCard.kidExplanation,
        source_note: `${payload.poemCard.poemTitle} 真实古诗原句（MiniMax 自动匹配）`,
      };
      await supabase.from('poem_library_entries').upsert(poemEntry);

      poemLink = {
        hanzi_id: hanziId,
        poem_library_entry_id: poemEntry.id,
        match_status: 'linked',
        source: 'ai-generated',
        review_note: 'MiniMax 自动匹配并立即启用。',
        reviewed_by: 'system',
      };
    } else {
      poemLink = {
        hanzi_id: hanziId,
        poem_library_entry_id: null,
        match_status: 'missing',
        source: 'ai-generated',
        review_note: 'MiniMax 未找到合适诗句。',
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
      hanzi: normalizeHanzi(hanziId, payload.hanzi, contextTheme ?? '自由单字'),
      level: createCustomLevel(hanziId, character),
      poemLink,
      poemLibraryEntry: poemEntry,
    });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'MiniMax generation failed.' }, 502);
  }
});

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

function normalizeHanzi(
  hanziId: string,
  item: SingleHanziPayload['hanzi'],
  projectTheme: string,
) {
  return {
    id: hanziId,
    character: item.character,
    pinyin: item.pinyin,
    meaning: item.meaning,
    radical: item.radical,
    strokeCount: 0,
    animationLabel: `先观察“${item.character}”的样子，再跟着描一描。`,
    introText: item.introText,
    prompt: item.prompt,
    encouragement: item.encouragement,
    projectTheme,
    observationHint: item.observationHint,
    missionPrompt: item.missionPrompt,
    vocabExamples: item.vocabExamples.map((entry, index) => ({
      id: `${hanziId}-vocab-${index}`,
      word: entry.word,
      gloss: entry.gloss,
    })),
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
