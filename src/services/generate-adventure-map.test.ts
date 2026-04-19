import { beforeEach, describe, expect, it, vi } from 'vitest';
import { generateAdventureMap, getLatestGeneratedAdventureMap } from './generate-adventure-map';

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'generated-group-uuid',
  });
  window.localStorage.clear();
});

describe('generateAdventureMap', () => {
  it('returns a 5-character group when the knowledge point matches a grouped character', async () => {
    const group = await generateAdventureMap({
      mode: 'topic',
      knowledgePoint: '樹',
      ageBand: '6-8',
    });

    expect(group.mode).toBe('topic');
    expect(group.lessons).toHaveLength(5);
    expect(group.themeRuleType).toBe('same-radical');
    expect(group.focusCharacter).toBe('樹');
  });

  it('supports keyword-driven groups', async () => {
    const group = await generateAdventureMap({
      mode: 'topic',
      knowledgePoint: '動物',
      ageBand: '6-8',
    });

    expect(group.themeTitle).toContain('動物');
    expect(group.lessons).toHaveLength(5);
  });

  it('creates a random 5-character group', async () => {
    const group = await generateAdventureMap({
      mode: 'random',
      ageBand: '6-8',
    });

    expect(group.mode).toBe('random');
    expect(group.lessons).toHaveLength(5);
    expect(group.themeTitle.length).toBeGreaterThan(0);
  });

  it('persists the latest selected group locally', async () => {
    const group = await generateAdventureMap({
      mode: 'topic',
      knowledgePoint: '木字旁',
      ageBand: '6-8',
    });

    const restored = getLatestGeneratedAdventureMap();

    expect(restored?.id).toBe(group.id);
    expect(restored?.lessons).toHaveLength(5);
  });
});
