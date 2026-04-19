import { createClient } from 'jsr:@supabase/supabase-js@2';
import { generateAdventureMapPromptRegistry } from './prompt-registry.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const payload = await request.json();
  const { mode, knowledgePoint, ageBand } = payload as {
    mode: 'topic' | 'random';
    knowledgePoint?: string;
    ageBand: '4-6' | '6-8' | '8-10';
  };

  const openAiKey = Deno.env.get('OPENAI_API_KEY');
  if (!openAiKey) {
    return json(
      {
        error: 'OPENAI_API_KEY is not configured for generate-adventure-map.',
        promptSet: generateAdventureMapPromptRegistry,
      },
      501,
    );
  }

  const prompt = `${generateAdventureMapPromptRegistry.mapGenerationSystem}\n\n${generateAdventureMapPromptRegistry.mapGenerationUser(
    knowledgePoint ?? '',
    ageBand,
  )}\n\n${generateAdventureMapPromptRegistry.completionCheck}`;

  const aiResponse = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openAiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-5-mini',
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'generated_adventure_map',
          schema: {
            type: 'object',
            additionalProperties: false,
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
                  additionalProperties: true,
                },
              },
            },
            required: ['themeTitle', 'themeDescription', 'themeRuleType', 'lessons'],
          },
        },
      },
    }),
  });

  if (!aiResponse.ok) {
    return json({ error: 'AI generation failed.' }, 502);
  }

  const aiJson = await aiResponse.json();
  const content = aiJson.output?.[0]?.content?.[0]?.text ?? '{}';
  const generatedMap = JSON.parse(content);

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

  return json({
    id: mapId,
    mode,
    knowledgePoint: knowledgePoint ?? null,
    ...generatedMap,
  });
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
