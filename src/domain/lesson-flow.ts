export type LessonStage = 'demo' | 'quiz' | 'complete';

export interface QuizState {
  totalMistakes: number;
  completedStrokes: number;
  strokesRemaining: number;
  lastFeedback: string;
}

export interface LessonSummary {
  passed: boolean;
  totalMistakes: number;
  stars: number;
}

export interface LessonFlow {
  lessonId: string;
  stage: LessonStage;
  quiz: QuizState;
  summary: LessonSummary | null;
}

export type LessonFlowEvent =
  | { type: 'ANIMATION_FINISHED' }
  | {
      type: 'QUIZ_MISTAKE';
      strokeNum: number;
      mistakesOnStroke: number;
      totalMistakes: number;
      strokesRemaining: number;
    }
  | {
      type: 'QUIZ_CORRECT_STROKE';
      strokeNum: number;
      mistakesOnStroke: number;
      totalMistakes: number;
      strokesRemaining: number;
    }
  | {
      type: 'QUIZ_COMPLETED';
      totalMistakes: number;
    };

export function createLessonFlow(lessonId: string): LessonFlow {
  return {
    lessonId,
    stage: 'demo',
    quiz: {
      totalMistakes: 0,
      completedStrokes: 0,
      strokesRemaining: 0,
      lastFeedback: '先看老师演示，再开始描写。',
    },
    summary: null,
  };
}

export function advanceLessonFlow(flow: LessonFlow, event: LessonFlowEvent): LessonFlow {
  if (event.type === 'ANIMATION_FINISHED') {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        totalMistakes: 0,
        completedStrokes: 0,
        strokesRemaining: 0,
        lastFeedback: '轮到你来描写啦。',
      },
    };
  }

  if (event.type === 'QUIZ_MISTAKE') {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        totalMistakes: event.totalMistakes,
        completedStrokes: flow.quiz.completedStrokes,
        strokesRemaining: event.strokesRemaining,
        lastFeedback: `第 ${event.strokeNum + 1} 笔再试一次，我们慢慢来。`,
      },
    };
  }

  if (event.type === 'QUIZ_CORRECT_STROKE') {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        totalMistakes: event.totalMistakes,
        completedStrokes: flow.quiz.completedStrokes + 1,
        strokesRemaining: event.strokesRemaining,
        lastFeedback: `太棒了，第 ${event.strokeNum + 1} 笔写对了。`,
      },
    };
  }

  return {
    ...flow,
    stage: 'complete',
    summary: {
      passed: true,
      totalMistakes: event.totalMistakes,
      stars: getStarCount(event.totalMistakes),
    },
  };
}

export function getQuizProgressLabel(flow: LessonFlow): string {
  if (flow.stage === 'complete') {
    return '描写完成';
  }

  return `还剩 ${flow.quiz.strokesRemaining} 笔`;
}

function getStarCount(totalMistakes: number) {
  if (totalMistakes <= 1) {
    return 3;
  }

  if (totalMistakes <= 3) {
    return 2;
  }

  return 1;
}
