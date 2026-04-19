import { describe, expect, it } from 'vitest';
import { advanceLessonFlow, createLessonFlow } from './lesson-flow';

describe('lesson-flow double practice', () => {
  it('moves from demo to the guided tracing round first', () => {
    const flow = createLessonFlow('lesson-1');
    const next = advanceLessonFlow(flow, { type: 'ANIMATION_FINISHED' });

    expect(next.stage).toBe('quiz');
    expect(next.quiz.round).toBe(1);
    expect(next.quiz.practiceMode).toBe('guided');
  });

  it('moves to the blank round after finishing the guided round', () => {
    const guided = advanceLessonFlow(createLessonFlow('lesson-1'), { type: 'ANIMATION_FINISHED' });
    const blank = advanceLessonFlow(guided, { type: 'QUIZ_COMPLETED', totalMistakes: 2 });

    expect(blank.stage).toBe('quiz');
    expect(blank.quiz.round).toBe(2);
    expect(blank.quiz.practiceMode).toBe('blank');
    expect(blank.summary).toBeNull();
  });

  it('finishes the lesson only after the second round completes', () => {
    const guided = advanceLessonFlow(createLessonFlow('lesson-1'), { type: 'ANIMATION_FINISHED' });
    const blank = advanceLessonFlow(guided, { type: 'QUIZ_COMPLETED', totalMistakes: 2 });
    const complete = advanceLessonFlow(blank, { type: 'QUIZ_COMPLETED', totalMistakes: 3 });

    expect(complete.stage).toBe('complete');
    expect(complete.summary?.totalMistakes).toBe(3);
  });
});
