import { describe, expect, it } from 'vitest';
import { curriculum } from './curriculum';
import {
  findPoemCandidatesForCharacter,
  getPoemLinkForHanzi,
  validatePoemLibrary,
} from './poem-matching';

describe('poem matching', () => {
  it('returns a validation result object for the current poem library', () => {
    const result = validatePoemLibrary(curriculum);

    expect(Array.isArray(result.errors)).toBe(true);
    expect(typeof result.valid).toBe('boolean');
  });

  it('returns an array of poem candidates for a bundled hanzi lookup', () => {
    const candidates = findPoemCandidatesForCharacter(curriculum, {
      character: '木',
      ageBand: '6-8',
      projectTheme: '繁體字筆畫輔助工具',
    });

    expect(Array.isArray(candidates)).toBe(true);
  });

  it('returns the linked poem entry id when a hanzi has a bundled poem card', () => {
    const link = getPoemLinkForHanzi(curriculum, 'hanzi-mu');

    expect(link?.poemLibraryEntryId).toBe('poem-hanzi-mu');
  });
});
