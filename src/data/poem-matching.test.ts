import { describe, expect, it } from 'vitest';
import { curriculum, type Curriculum } from './curriculum';
import {
  findPoemCandidatesForHanzi,
  getPoemLinkForHanzi,
  validatePoemLibrary,
} from './poem-matching';

describe('poem matching', () => {
  it('validates approved poem entries and hanzi links', () => {
    const result = validatePoemLibrary(curriculum);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns ranked poem candidates for a hanzi within the forest camp theme', () => {
    const candidates = findPoemCandidatesForHanzi(curriculum, {
      hanziId: 'hanzi-mu',
      projectTheme: '森林营地',
      ageBand: '6-8',
    });

    expect(candidates.length).toBeGreaterThan(0);
    expect(candidates[0]?.focusCharacter).toBe('木');
    expect(candidates[0]?.themeTags).toContain('森林营地');
  });

  it('supports a missing state when a hanzi temporarily has no approved poem entry', () => {
    const curriculumWithoutRi: Curriculum = {
      ...curriculum,
      poemLibrary: curriculum.poemLibrary.filter((entry) => entry.focusCharacter !== '日'),
      hanziPoemLinks: curriculum.hanziPoemLinks.map((link) =>
        link.hanziId === 'hanzi-ri'
          ? {
              ...link,
              poemLibraryEntryId: null,
              matchStatus: 'missing',
              reviewNote: '待补古诗',
              reviewedBy: null,
            }
          : link,
      ),
    };

    const link = getPoemLinkForHanzi(curriculumWithoutRi, 'hanzi-ri');
    expect(link?.matchStatus).toBe('missing');
    expect(link?.poemLibraryEntryId ?? null).toBeNull();
  });
});
