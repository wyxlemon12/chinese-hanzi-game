import { describe, expect, it } from 'vitest';
import {
  getAllCharacterGroups,
  getCharacterGroupByCharacter,
  getRecommendedCharacterGroup,
  normalizeToTraditional,
} from './character-groups';

describe('character groups', () => {
  it('defines 10 groups with 5 characters each', () => {
    const groups = getAllCharacterGroups();

    expect(groups).toHaveLength(10);
    expect(groups.every((group) => group.characters.length === 5)).toBe(true);
  });

  it('normalizes simplified input to traditional before group lookup', () => {
    expect(normalizeToTraditional('树')).toBe('樹');
    expect(getCharacterGroupByCharacter(normalizeToTraditional('树'))?.id).toBe('group-wood-radical');
    expect(getCharacterGroupByCharacter(normalizeToTraditional('猫'))?.id).toBe('group-animals');
  });

  it('returns a fallback recommendation when a character is outside the 50-character set', () => {
    expect(getRecommendedCharacterGroup('學')?.id).toBe('group-wood-radical');
  });
});
