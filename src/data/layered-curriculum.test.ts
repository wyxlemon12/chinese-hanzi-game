import { describe, expect, it } from 'vitest';
import { curriculum, getHanziItemByCharacter } from './curriculum';
import { getLayeredCharacterCount } from './layered-curriculum';

describe('layered curriculum integration', () => {
  it('provides a 500-character layered resource set', () => {
    expect(getLayeredCharacterCount()).toBe(500);
  });

  it('extends runtime hanzi lookup beyond the core 50-character set', () => {
    expect(curriculum.hanziItems.length).toBeGreaterThan(300);
    expect(getHanziItemByCharacter('學')).not.toBeNull();
    expect(getHanziItemByCharacter('關')).not.toBeNull();
  });
});
