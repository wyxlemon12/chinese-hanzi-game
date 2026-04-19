import type { AgeBand } from '../data/curriculum';
import {
  resolveAdventureMapSeed,
  type GeneratedAdventureMap,
} from '../data/generated-map-seeds';

const GENERATED_MAPS_KEY = 'shuyuan-generated-maps';

interface GenerateAdventureMapInput {
  mode: 'topic' | 'random';
  knowledgePoint?: string;
  ageBand: AgeBand;
}

export async function generateAdventureMap(
  input: GenerateAdventureMapInput,
): Promise<GeneratedAdventureMap> {
  await artificialDelay();

  const generatedMap = resolveAdventureMapSeed(input.knowledgePoint, input.ageBand, input.mode);
  persistGeneratedMap(generatedMap);
  return generatedMap;
}

export function getLatestGeneratedAdventureMap(): GeneratedAdventureMap | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const maps = readGeneratedMaps();
  return maps[0] ?? null;
}

export function clearGeneratedAdventureMaps() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(GENERATED_MAPS_KEY);
}

function persistGeneratedMap(map: GeneratedAdventureMap) {
  if (typeof window === 'undefined') {
    return;
  }

  const current = readGeneratedMaps();
  const next = [map, ...current.filter((item) => item.id !== map.id)].slice(0, 5);
  window.localStorage.setItem(GENERATED_MAPS_KEY, JSON.stringify(next));
}

function readGeneratedMaps(): GeneratedAdventureMap[] {
  if (typeof window === 'undefined') {
    return [];
  }

  const raw = window.localStorage.getItem(GENERATED_MAPS_KEY);
  return raw ? (JSON.parse(raw) as GeneratedAdventureMap[]) : [];
}

function artificialDelay() {
  return new Promise((resolve) => setTimeout(resolve, 300));
}
