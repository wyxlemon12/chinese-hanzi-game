export type LessonStage = 'demo' | 'quiz' | 'complete';
export type PracticeMode = 'guided' | 'blank';

export interface QuizState {
  round: 1 | 2;
  practiceMode: PracticeMode;
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
      round: 1,
      practiceMode: 'guided',
      totalMistakes: 0,
      completedStrokes: 0,
      strokesRemaining: 0,
      lastFeedback: '先看老师写一遍，等会儿你会先描红，再在空白格子里默写一遍。',
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
        round: 1,
        practiceMode: 'guided',
        totalMistakes: 0,
        completedStrokes: 0,
        strokesRemaining: 0,
        lastFeedback: '第一轮先描红，跟着半透明底稿把这个字写稳。',
      },
    };
  }

  if (event.type === 'QUIZ_MISTAKE') {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        ...flow.quiz,
        totalMistakes: event.totalMistakes,
        strokesRemaining: event.strokesRemaining,
        lastFeedback:
          flow.quiz.round === 1
            ? `第 ${event.strokeNum + 1} 笔再试一次，先把描红轮写稳。`
            : `第 ${event.strokeNum + 1} 笔再试一次，这一轮要在空白格子里默写出来。`,
      },
    };
  }

  if (event.type === 'QUIZ_CORRECT_STROKE') {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        ...flow.quiz,
        totalMistakes: event.totalMistakes,
        completedStrokes: flow.quiz.completedStrokes + 1,
        strokesRemaining: event.strokesRemaining,
        lastFeedback:
          flow.quiz.round === 1
            ? `很好，描红轮已经写对第 ${event.strokeNum + 1} 笔。`
            : `很好，空白默写轮已经写对第 ${event.strokeNum + 1} 笔。`,
      },
    };
  }

  if (flow.quiz.round === 1) {
    return {
      ...flow,
      stage: 'quiz',
      quiz: {
        round: 2,
        practiceMode: 'blank',
        totalMistakes: event.totalMistakes,
        completedStrokes: 0,
        strokesRemaining: 0,
        lastFeedback: '第一轮完成了。第二轮开始，在空白格子里自己写出来。',
      },
      summary: null,
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
    return '线索收集完成';
  }

  if (flow.stage === 'quiz') {
    return `第 ${flow.quiz.round} 轮 · 还剩 ${flow.quiz.strokesRemaining} 笔`;
  }

  return '准备开始练习';
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
