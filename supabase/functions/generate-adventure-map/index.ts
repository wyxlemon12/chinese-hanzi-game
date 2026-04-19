import { createClient } from 'jsr:@supabase/supabase-js@2';
import { createMiniMaxJsonCompletion } from '../_shared/minimax.ts';
import { generateAdventureMapPromptRegistry } from './prompt-registry.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type AgeBand = '4-6' | '6-8' | '8-10';

interface GeneratedAdventureMapPayload {
  themeTitle: string;
  themeDescription: string;
  themeRuleType: string;
  lessons: Array<{
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
    poemCard: {
      lineText: string;
      poemTitle: string;
      author: string;
      dynasty: string;
      meaningInLine: string;
      kidExplanation: string;
      themeTags: string[];
    };
  }>;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const payload = await request.json();
  const { mode, knowledgePoint, ageBand } = payload as {
    mode: 'topic' | 'random';
    knowledgePoint?: string;
    ageBand: AgeBand;
  };

  try {
    const generatedMap = await createMiniMaxJsonCompletion<GeneratedAdventureMapPayload>({
      messages: [
        { role: 'system', content: generateAdventureMapPromptRegistry.mapGenerationSystem },
        {
          role: 'user',
          content: `${generateAdventureMapPromptRegistry.mapGenerationUser(
            knowledgePoint ?? '',
            ageBand,
          )}\n\n${generateAdventureMapPromptRegistry.completionCheck}`,
        },
      ],
      schemaName: 'generated_adventure_map',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['themeTitle', 'themeDescription', 'themeRuleType', 'lessons'],
        properties: {
          themeTitle: { type: 'string' },
          themeDescription: { type: 'string' },
          themeRuleType: { type: 'string' },
          lessons: {
            type: 'array',
            minItems: 10,
            maxItems: 10,
            items: {
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
                'poemCard',
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
                poemCard: {
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
              },
            },
          },
        },
      },
    });

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const mapId = crypto.randomUUID();
    await supabase.from('generated_maps').insert({
      id: mapId,
      theme_title: generatedMap.themeTitle,
      theme_description: generatedMap.themeDescription,
      theme_rule_type: generatedMap.themeRuleType,
      knowledge_point: knowledgePoint ?? null,
      generation_mode: mode,
    });

    const lessons = await Promise.all(
      generatedMap.lessons.map(async (lesson, index) => {
        const hanziId = `generated-${mapId}-${lesson.character.codePointAt(0)?.toString(16) ?? index}`;
        const poemId = `generated-poem-${mapId}-${index}`;
        const levelId = `generated-level-${mapId}-${index}`;

        await supabase.from('hanzi_items').upsert({
          id: hanziId,
          character: lesson.character,
          pinyin: lesson.pinyin,
          meaning: lesson.meaning,
          radical: lesson.radical,
          stroke_count: 0,
          animation_ref: lesson.character,
          source: 'ai-generated',
          project_theme: generatedMap.themeTitle,
          observation_hint: lesson.observationHint,
          mission_prompt: lesson.missionPrompt,
        });

        await supabase.from('poem_library_entries').upsert({
          id: poemId,
          line_text: lesson.poemCard.lineText,
          poem_title: lesson.poemCard.poemTitle,
          author: lesson.poemCard.author,
          dynasty: lesson.poemCard.dynasty,
          focus_character: lesson.character,
          characters_included: [...new Set(lesson.poemCard.lineText.replace(/[，。！？、；：]/g, '').split(''))],
          difficulty_level: 'starter',
          theme_tags: lesson.poemCard.themeTags,
          is_approved: true,
          meaning_in_line: lesson.poemCard.meaningInLine,
          kid_explanation: lesson.poemCard.kidExplanation,
          source_note: `${lesson.poemCard.poemTitle} 真实古诗原句（AI 生成地图）`,
        });

        await supabase.from('hanzi_poem_links').upsert({
          hanzi_id: hanziId,
          poem_library_entry_id: poemId,
          match_status: 'linked',
          source: 'ai-generated',
          review_note: 'MiniMax 自动生成并补齐。',
          reviewed_by: 'system',
        });

        await supabase.from('generated_map_items').insert({
          id: crypto.randomUUID(),
          generated_map_id: mapId,
          hanzi_id: hanziId,
          level_id: levelId,
          sort_order: index + 1,
          poem_library_entry_id: poemId,
        });

        return {
          hanzi: {
            id: hanziId,
            character: lesson.character,
            pinyin: lesson.pinyin,
            meaning: lesson.meaning,
            radical: lesson.radical,
            strokeCount: 0,
            animationLabel: `先观察“${lesson.character}”的样子，再跟着描一描。`,
            introText: lesson.introText,
            prompt: lesson.prompt,
            encouragement: lesson.encouragement,
            projectTheme: generatedMap.themeTitle,
            observationHint: lesson.observationHint,
            missionPrompt: lesson.missionPrompt,
            vocabExamples: lesson.vocabExamples.map((item, vocabIndex) => ({
              id: `generated-vocab-${mapId}-${index}-${vocabIndex}`,
              word: item.word,
              gloss: item.gloss,
            })),
          },
          level: {
            id: levelId,
            title: `第 ${index + 1} 个线索：${lesson.character}`,
            levelType: 'hanzi',
            passRule: 'quiz-pass',
            sortOrder: index + 1,
            hanziItemId: hanziId,
            rewardTitle: '临时地图徽章',
          },
          poemLink: {
            hanziId: hanziId,
            poemLibraryEntryId: poemId,
            matchStatus: 'linked',
            reviewNote: 'MiniMax 自动生成并补齐。',
            reviewedBy: 'system',
          },
          poemLibraryEntry: {
            id: poemId,
            lineText: lesson.poemCard.lineText,
            poemTitle: lesson.poemCard.poemTitle,
            author: lesson.poemCard.author,
            dynasty: lesson.poemCard.dynasty,
            focusCharacter: lesson.character,
            charactersIncluded: [...new Set(lesson.poemCard.lineText.replace(/[，。！？、；：]/g, '').split(''))],
            difficultyLevel: 'starter',
            themeTags: lesson.poemCard.themeTags,
            isApproved: true,
            meaningInLine: lesson.poemCard.meaningInLine,
            kidExplanation: lesson.poemCard.kidExplanation,
            sourceNote: `${lesson.poemCard.poemTitle} 真实古诗原句（AI 生成地图）`,
          },
        };
      }),
    );

    return json({
      id: mapId,
      mode,
      knowledgePoint: knowledgePoint ?? null,
      themeTitle: generatedMap.themeTitle,
      themeDescription: generatedMap.themeDescription,
      themeRuleType: generatedMap.themeRuleType,
      lessons,
    });
  } catch (error) {
    return json(
      {
        error: error instanceof Error ? error.message : 'MiniMax generation failed.',
      },
      502,
    );
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  });
}
