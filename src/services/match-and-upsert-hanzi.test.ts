import { beforeEach, describe, expect, it, vi } from 'vitest';
import { matchAndUpsertHanzi } from './match-and-upsert-hanzi';

beforeEach(() => {
  vi.stubGlobal('crypto', {
    randomUUID: () => 'custom-uuid',
  });
  window.localStorage.clear();
});

describe('matchAndUpsertHanzi', () => {
  it('returns full content for an existing hanzi', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '木',
      ageBand: '6-8',
    });

    expect(lesson.wasCreated).toBe(false);
    expect(lesson.hanzi.character).toBe('木');
    expect(lesson.poemLink?.matchStatus).toBe('linked');
  });

  it('creates a new custom lesson for an unseen hanzi and attaches a poem when matched', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '花',
      ageBand: '6-8',
      contextTheme: '自由单字',
    });

    expect(lesson.wasCreated).toBe(true);
    expect(lesson.hanzi.character).toBe('花');
    expect(lesson.poemLink?.matchStatus).toBe('linked');
    expect(lesson.poemLibraryEntry?.lineText).toContain('花');
  });

  it('falls back to a missing poem state when the character is not in the curated poem library', async () => {
    const lesson = await matchAndUpsertHanzi({
      character: '火',
      ageBand: '6-8',
      contextTheme: '自由单字',
    });

    expect(lesson.wasCreated).toBe(true);
    expect(lesson.hanzi.character).toBe('火');
    expect(lesson.poemLink?.matchStatus).toBe('missing');
    expect(lesson.poemLibraryEntry).toBeNull();
  });
});
