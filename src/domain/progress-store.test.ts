import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createMemoryStorage,
  createProgressRepository,
  getNextLevelId,
} from './progress-store';
import { curriculum } from '../data/curriculum';

describe('progress repository', () => {
  beforeEach(() => {
    vi.stubGlobal('crypto', {
      randomUUID: () => 'learner-001',
    });
  });

  it('creates an anonymous learner profile and session on first boot', () => {
    const repo = createProgressRepository(createMemoryStorage());

    const learner = repo.ensureLearnerProfile('6-8');
    const session = repo.startSession();

    expect(learner.id).toBe('learner-001');
    expect(learner.deviceKey).toBe('learner-001');
    expect(learner.ageBand).toBe('6-8');
    expect(session.learnerProfileId).toBe('learner-001');
  });

  it('completes a level only when the quiz result is passed', () => {
    const repo = createProgressRepository(createMemoryStorage());
    repo.ensureLearnerProfile('6-8');
    const session = repo.startSession();
    const levelId = curriculum.courses[0].units[0].levels[0].id;

    repo.recordQuizAttempt({
      sessionId: session.id,
      hanziItemId: 'hanzi-ren',
      levelId,
      totalMistakes: 3,
      result: 'failed',
    });

    expect(repo.getSnapshot(levelId)?.status).toBe('in_progress');

    repo.recordQuizAttempt({
      sessionId: session.id,
      hanziItemId: 'hanzi-ren',
      levelId,
      totalMistakes: 1,
      result: 'passed',
    });

    expect(repo.getSnapshot(levelId)?.status).toBe('completed');
    expect(repo.getSnapshot(levelId)?.stars).toBe(3);
  });

  it('unlocks the next level after a passed quiz', () => {
    const levelId = curriculum.courses[0].units[0].levels[0].id;
    const nextLevelId = getNextLevelId(curriculum, levelId);

    expect(nextLevelId).toBe(curriculum.courses[0].units[0].levels[1].id);
  });
});
