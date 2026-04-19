import type { AgeBand } from '../data/curriculum';
import {
  resolveAdventureMapSeed,
  type GeneratedAdventureMap,
} from '../data/generated-map-seeds';
import { adventureMapPromptRegistry } from '../prompts/adventure-map-prompts';

interface GenerateAdventureMapInput {
  mode: 'topic' | 'random';
  knowledgePoint?: string;
  ageBand: AgeBand;
}

export async function generateAdventureMap(
  input: GenerateAdventureMapInput,
): Promise<GeneratedAdventureMap> {
  const remoteMap = await tryGenerateAdventureMapRemotely(input);
  if (remoteMap) {
    return remoteMap;
  }

  await artificialDelay();
  return resolveAdventureMapSeed(input.knowledgePoint, input.ageBand, input.mode);
}

async function tryGenerateAdventureMapRemotely(
  input: GenerateAdventureMapInput,
): Promise<GeneratedAdventureMap | null> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey || typeof fetch === 'undefined') {
    return null;
  }

  try {
    const response = await fetch(`${url}/functions/v1/generate-adventure-map`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({
        ...input,
        promptSet: {
          mapGenerationSystem: adventureMapPromptRegistry.mapGenerationSystem,
          mapGenerationUser: adventureMapPromptRegistry.mapGenerationUser(
            input.knowledgePoint ?? '',
            input.ageBand,
          ),
          singleHanziEnrichment: adventureMapPromptRegistry.singleHanziEnrichment('木', '森林营地'),
          poemCardEnrichment: adventureMapPromptRegistry.poemCardEnrichment('木'),
          validationAndRetry: adventureMapPromptRegistry.validationAndRetry,
        },
      }),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as GeneratedAdventureMap;
  } catch {
    return null;
  }
}

function artificialDelay() {
  return new Promise((resolve) => setTimeout(resolve, 800));
}
