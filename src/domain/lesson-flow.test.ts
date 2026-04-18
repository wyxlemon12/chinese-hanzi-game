import { describe, expect, it } from 'vitest';
import {
  advanceLessonFlow,
  createLessonFlow,
  getQuizProgressLabel,
} from './lesson-flow';

describe('lesson flow', () => {
  it('starts on the demo stage and moves into quiz after animation completes', () => {
    const flow = createLessonFlow('hanzi-ren');

    expect(flow.stage).toBe('demo');

    const afterAnimation = advanceLessonFlow(flow, {
      type: 'ANIMATION_FINISHED',
    });

    expect(afterAnimation.stage).toBe('quiz');
    expect(afterAnimation.quiz.totalMistakes).toBe(0);
    expect(afterAnimation.quiz.completedStrokes).toBe(0);
  });

  it('tracks quiz progress and finishes only after completion', () => {
    const flow = advanceLessonFlow(createLessonFlow('hanzi-ren'), {
      type: 'ANIMATION_FINISHED',
    });

    const afterCorrect = advanceLessonFlow(flow, {
      type: 'QUIZ_CORRECT_STROKE',
      strokeNum: 0,
      mistakesOnStroke: 1,
      totalMistakes: 1,
      strokesRemaining: 1,
    });

    expect(afterCorrect.stage).toBe('quiz');
    expect(afterCorrect.quiz.completedStrokes).toBe(1);
    expect(getQuizProgressLabel(afterCorrect)).toBe('还剩 1 笔');

    const afterComplete = advanceLessonFlow(afterCorrect, {
      type: 'QUIZ_COMPLETED',
      totalMistakes: 1,
    });

    expect(afterComplete.stage).toBe('complete');
    expect(afterComplete.summary?.stars).toBe(3);
    expect(afterComplete.summary?.passed).toBe(true);
  });

  it('records mistakes without leaving the quiz stage', () => {
    const flow = advanceLessonFlow(createLessonFlow('hanzi-ren'), {
      type: 'ANIMATION_FINISHED',
    });

    const afterMistake = advanceLessonFlow(flow, {
      type: 'QUIZ_MISTAKE',
      strokeNum: 1,
      mistakesOnStroke: 2,
      totalMistakes: 2,
      strokesRemaining: 2,
    });

    expect(afterMistake.stage).toBe('quiz');
    expect(afterMistake.quiz.totalMistakes).toBe(2);
    expect(afterMistake.quiz.lastFeedback).toContain('第 2 笔');
  });
});
