import { beforeEach, describe, expect, it, vi } from 'vitest';
import { matchAndUpsertHanzi } from './match-and-upsert-hanzi';

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'custom-uuid',
  });
  window.localStorage.clear();
});

describe('matchAndUpsertHanzi', () => {
  it('returns existing content for a character already in the 50-character library', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '树',
      ageBand: '6-8',
    });

    expect(lesson.wasCreated).toBe(false);
    expect(lesson.hanzi.character).toBe('樹');
  });

  it('creates a new custom lesson for a character outside the 50-character library', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '龘',
      ageBand: '6-8',
      contextTheme: '自由單字',
    });

    expect(lesson.wasCreated).toBe(true);
    expect(lesson.hanzi.character).toBe('龘');
  });

  it('reuses an existing bundled poem when the normalized character already has one', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '樹',
      ageBand: '6-8',
      contextTheme: '自由單字',
    });

    expect(lesson.poemLink?.matchStatus).toBe('linked');
  });
});
