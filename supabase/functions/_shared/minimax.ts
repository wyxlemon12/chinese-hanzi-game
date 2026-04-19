const DEFAULT_MINIMAX_BASE_URL = 'https://api.minimax.io/v1';
const DEFAULT_MINIMAX_MODEL = 'MiniMax-M2.7';

export interface MiniMaxMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function createMiniMaxJsonCompletion<T>({
  messages,
  schema,
  schemaName,
}: {
  messages: MiniMaxMessage[];
  schema: Record<string, unknown>;
  schemaName: string;
}): Promise<T> {
  const apiKey = Deno.env.get('MINIMAX_API_KEY');
  if (!apiKey) {
    throw new Error('MINIMAX_API_KEY is not configured.');
  }

  const model = Deno.env.get('MINIMAX_MODEL') ?? DEFAULT_MINIMAX_MODEL;
  const baseUrl = Deno.env.get('MINIMAX_BASE_URL') ?? DEFAULT_MINIMAX_BASE_URL;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.2,
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: schemaName,
          schema,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`MiniMax API request failed: ${response.status} ${errorText}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content || typeof content !== 'string') {
    throw new Error('MiniMax API returned no content.');
  }

  return JSON.parse(stripThinkTags(content)) as T;
}

function stripThinkTags(content: string) {
  return content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
}
