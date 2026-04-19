import { useMemo, useState } from 'react';
import { HanziGrid } from '../../components/HanziGrid';
import { HanziKnowledgePanel } from '../../components/HanziKnowledgePanel';
import { PoemDeepDiveCard } from '../../components/PoemDeepDiveCard';
import { SectionCard } from '../../components/SectionCard';
import {
  curriculum,
  type HanziItem,
  type HanziPoemLink,
  type LessonLevel,
  type PoemLibraryEntry,
} from '../../data/curriculum';
import { getLinkedPoemForHanzi } from '../../data/poem-matching';
import { advanceLessonFlow, createLessonFlow, getQuizProgressLabel } from '../../domain/lesson-flow';
import { StrokeQuizPanel } from './StrokeQuizPanel';

interface LessonExperienceProps {
  e2eMode?: boolean;
  mode?: 'project' | 'custom';
  level: LessonLevel;
  hanzi: HanziItem;
  onOpenRelatedHanzi?: (hanziId: string) => void;
  poemLinkOverride?: HanziPoemLink | null;
  poemLibraryEntryOverride?: PoemLibraryEntry | null;
  onBack: () => void;
  onComplete: (totalMistakes: number) => void;
  onCloseSummary: () => void;
}

export function LessonExperience({
  e2eMode = false,
  mode = 'project',
  level,
  hanzi,
  onOpenRelatedHanzi,
  poemLinkOverride,
  poemLibraryEntryOverride,
  onBack,
  onComplete,
  onCloseSummary,
}: LessonExperienceProps) {
  const [flow, setFlow] = useState(() => createLessonFlow(level.id));
  const [readyForQuiz, setReadyForQuiz] = useState(false);

  const defaultPoem = getLinkedPoemForHanzi(curriculum, hanzi.id);
  const poemLink = poemLinkOverride ?? defaultPoem.poemLink;
  const poemLibraryEntry = poemLibraryEntryOverride ?? defaultPoem.poemLibraryEntry;

  const stars = useMemo(() => {
    if (!flow.summary) {
      return '';
    }

    return '★'.repeat(flow.summary.stars);
  }, [flow.summary]);

  const contextTitle = mode === 'custom' ? `單字練習：${hanzi.character}` : `字組練習：${hanzi.character}`;
  const practiceTitle = flow.quiz.round === 1 ? '第一輪：描紅練習' : '第二輪：空白默寫';
  const practiceHint =
    flow.quiz.round === 1
      ? '這一輪會看到底稿，先把筆順和方向寫穩。'
      : '這一輪只看田字格，自己把字寫出來。';
  const missionCopy =
    mode === 'custom'
      ? `這是你主動選擇學習的「${hanzi.character}」，先看動畫，再自己練習。`
      : `這個字屬於目前的 5 字組，先看清楚，再完成兩輪練習。`;

  return (
    <div className="min-h-screen bg-oat px-4 py-6" data-testid="lesson-screen">
      <div className="mx-auto max-w-md space-y-4 sm:max-w-2xl">
        <header className="flex items-center justify-between">
          <button
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            onClick={onBack}
            type="button"
          >
            返回
          </button>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            {contextTitle}
          </div>
        </header>

        <SectionCard eyebrow="字形觀察" title={`先認識「${hanzi.character}」`}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{hanzi.pinyin}</p>
                <p className="mt-2 text-base text-slate-600">{hanzi.meaning}</p>
              </div>
              <div className="rounded-[1.5rem] bg-sky-50 px-4 py-3 text-right">
                <p className="text-xs font-semibold text-sky-600">觀察提示</p>
                <p className="mt-1 text-sm font-bold text-slate-900">{hanzi.observationHint}</p>
              </div>
            </div>

            <p className="text-base font-bold text-slate-900">{missionCopy}</p>
            <p className="text-sm leading-6 text-slate-600">{hanzi.introText}</p>

            <HanziGrid
              hanzi={hanzi.character}
              isAnimating
              onAnimationComplete={() => {
                setReadyForQuiz(true);
              }}
            />

            <HanziKnowledgePanel hanzi={hanzi} onOpenRelatedHanzi={onOpenRelatedHanzi} />

            <button
              className="w-full rounded-[1.4rem] bg-slate-900 px-4 py-3 text-base font-bold text-white disabled:bg-slate-300"
              data-testid="start-quiz"
              disabled={!readyForQuiz}
              onClick={() => {
                setFlow((current) => advanceLessonFlow(current, { type: 'ANIMATION_FINISHED' }));
              }}
              type="button"
            >
              開始兩輪練習
            </button>
          </div>
        </SectionCard>

        <SectionCard eyebrow="練習區" title="輪到你來寫">
          {flow.stage === 'demo' && (
            <div className="rounded-[1.5rem] bg-slate-50 p-4 text-sm leading-6 text-slate-500">
              先完成上面的動畫，再點「開始兩輪練習」。
            </div>
          )}

          {flow.stage === 'quiz' && (
            <div className="space-y-4">
              <div className="rounded-[1.5rem] bg-amber-50 px-4 py-3" data-testid="practice-round-banner">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {practiceTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{practiceHint}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">目前進度</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{getQuizProgressLabel(flow)}</p>
                </div>
                <div className="rounded-[1.5rem] bg-rose-50 p-4">
                  <p className="text-xs font-semibold text-rose-500">累計錯誤</p>
                  <p className="mt-2 text-lg font-bold text-rose-700">{flow.quiz.totalMistakes}</p>
                </div>
              </div>

              <p className="rounded-[1.5rem] bg-sky-50 px-4 py-3 text-sm font-medium leading-6 text-sky-700">
                {flow.quiz.lastFeedback}
              </p>

              <StrokeQuizPanel
                hanzi={hanzi.character}
                mistakeOffset={flow.quiz.totalMistakes}
                practiceMode={flow.quiz.practiceMode}
                onCorrectStroke={(strokeData) => {
                  setFlow((current) =>
                    advanceLessonFlow(current, {
                      type: 'QUIZ_CORRECT_STROKE',
                      strokeNum: strokeData.strokeNum,
                      mistakesOnStroke: strokeData.mistakesOnStroke,
                      totalMistakes: strokeData.totalMistakes,
                      strokesRemaining: strokeData.strokesRemaining,
                    }),
                  );
                }}
                onMistake={(strokeData) => {
                  setFlow((current) =>
                    advanceLessonFlow(current, {
                      type: 'QUIZ_MISTAKE',
                      strokeNum: strokeData.strokeNum,
                      mistakesOnStroke: strokeData.mistakesOnStroke,
                      totalMistakes: strokeData.totalMistakes,
                      strokesRemaining: strokeData.strokesRemaining,
                    }),
                  );
                }}
                onComplete={(summaryData) => {
                  const nextFlow = advanceLessonFlow(flow, {
                    type: 'QUIZ_COMPLETED',
                    totalMistakes: summaryData.totalMistakes,
                  });
                  setFlow(nextFlow);
                  if (nextFlow.stage === 'complete') {
                    onComplete(summaryData.totalMistakes);
                  }
                }}
              />

              {e2eMode && (
                <button
                  className="w-full rounded-[1.2rem] border border-dashed border-sky-300 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700"
                  data-testid="e2e-complete-quiz"
                  onClick={() => {
                    const nextFlow = advanceLessonFlow(flow, {
                      type: 'QUIZ_COMPLETED',
                      totalMistakes: flow.quiz.totalMistakes,
                    });
                    setFlow(nextFlow);
                    if (nextFlow.stage === 'complete') {
                      onComplete(flow.quiz.totalMistakes);
                    }
                  }}
                  type="button"
                >
                  完成目前輪次（E2E）
                </button>
              )}
            </div>
          )}

          {flow.stage === 'complete' && flow.summary && (
            <div className="space-y-4" data-testid="lesson-summary">
              <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,_#fef3c7,_#bfdbfe)] p-5 text-center">
                <p className="text-sm font-semibold text-slate-600">練習完成</p>
                <p className="mt-2 text-3xl font-black text-slate-900">{stars}</p>
                <p className="mt-3 text-lg font-bold text-slate-900">{`你已完成「${hanzi.character}」`}</p>
                <p className="mt-2 text-sm text-slate-600">{`總錯誤次數：${flow.summary.totalMistakes}`}</p>
              </div>

              <PoemDeepDiveCard
                hanziId={hanzi.id}
                poemLink={poemLink}
                poemLibraryEntry={poemLibraryEntry}
              />

              <button
                className="w-full rounded-[1.4rem] bg-slate-900 px-4 py-3 text-base font-bold text-white"
                data-testid="close-summary"
                onClick={onCloseSummary}
                type="button"
              >
                返回
              </button>
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
