import { beforeEach, describe, expect, it, vi } from 'vitest';
import { generateAdventureMap, getLatestGeneratedAdventureMap } from './generate-adventure-map';

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'generated-map-uuid',
  });
  window.localStorage.clear();
});

describe('generateAdventureMap', () => {
  it('creates a 10-hanzi temporary map from a knowledge point', async () => {
    const map = await generateAdventureMap({
      mode: 'topic',
      knowledgePoint: '春天',
      ageBand: '6-8',
    });

    expect(map.mode).toBe('topic');
    expect(map.lessons).toHaveLength(10);
    expect(new Set(map.lessons.map((item) => item.hanzi.character)).size).toBe(10);
    expect(map.lessons.every((item) => item.poemLibraryEntry)).toBe(true);
  });

  it('creates a 10-hanzi temporary map for random mode', async () => {
    const map = await generateAdventureMap({
      mode: 'random',
      ageBand: '6-8',
    });

    expect(map.mode).toBe('random');
    expect(map.lessons).toHaveLength(10);
    expect(map.themeTitle.length).toBeGreaterThan(0);
  });

  it('persists the latest generated map locally', async () => {
    const map = await generateAdventureMap({
      mode: 'topic',
      knowledgePoint: '木字旁',
      ageBand: '6-8',
    });

    const restored = getLatestGeneratedAdventureMap();

    expect(restored?.id).toBe(map.id);
    expect(restored?.lessons).toHaveLength(10);
  });
});
