import { useMemo, useState } from 'react';
import { HanziGrid } from '../../components/HanziGrid';
import { PoemDeepDiveCard } from '../../components/PoemDeepDiveCard';
import { SectionCard } from '../../components/SectionCard';
import { curriculum, type HanziItem, type LessonLevel } from '../../data/curriculum';
import { getLinkedPoemForHanzi } from '../../data/poem-matching';
import { advanceLessonFlow, createLessonFlow, getQuizProgressLabel } from '../../domain/lesson-flow';
import { StrokeQuizPanel } from './StrokeQuizPanel';

interface LessonExperienceProps {
  e2eMode?: boolean;
  level: LessonLevel;
  hanzi: HanziItem;
  onBack: () => void;
  onComplete: (totalMistakes: number) => void;
  onCloseSummary: () => void;
}

export function LessonExperience({
  e2eMode = false,
  level,
  hanzi,
  onBack,
  onComplete,
  onCloseSummary,
}: LessonExperienceProps) {
  const [flow, setFlow] = useState(() => createLessonFlow(level.id));
  const [readyForQuiz, setReadyForQuiz] = useState(false);
  const { poemLink, poemLibraryEntry } = getLinkedPoemForHanzi(curriculum, hanzi.id);

  const stars = useMemo(() => {
    if (!flow.summary) {
      return '';
    }

    return '⭐'.repeat(flow.summary.stars);
  }, [flow.summary]);

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
            {level.title}
          </div>
        </header>

        <SectionCard eyebrow="演示段" title={hanzi.character}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{hanzi.pinyin}</p>
                <p className="mt-2 text-base text-slate-600">{hanzi.meaning}</p>
              </div>
              <div className="rounded-[1.5rem] bg-sky-50 px-4 py-3 text-right">
                <p className="text-xs font-semibold text-sky-600">结构提示</p>
                <p className="mt-1 text-sm font-bold text-slate-900">{hanzi.radical}</p>
              </div>
            </div>

            <p className="text-base font-bold text-slate-900">{`先看老师把“${hanzi.character}”写一遍`}</p>
            <p className="text-sm leading-6 text-slate-600">{hanzi.introText}</p>

            <HanziGrid
              hanzi={hanzi.character}
              isAnimating
              onAnimationComplete={() => {
                setReadyForQuiz(true);
              }}
            />

            <button
              className="w-full rounded-[1.4rem] bg-slate-900 px-4 py-3 text-base font-bold text-white disabled:bg-slate-300"
              data-testid="start-quiz"
              disabled={!readyForQuiz}
              onClick={() => {
                setFlow((current) => advanceLessonFlow(current, { type: 'ANIMATION_FINISHED' }));
              }}
              type="button"
            >
              开始描写测验
            </button>
          </div>
        </SectionCard>

        <SectionCard eyebrow="练习段" title="描写 Quiz">
          {flow.stage === 'demo' && (
            <div className="rounded-[1.5rem] bg-slate-50 p-4 text-sm leading-6 text-slate-500">
              先完成上面的演示，然后点击“开始描写测验”。
            </div>
          )}

          {flow.stage === 'quiz' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">当前进度</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{getQuizProgressLabel(flow)}</p>
                </div>
                <div className="rounded-[1.5rem] bg-rose-50 p-4">
                  <p className="text-xs font-semibold text-rose-500">累计错误</p>
                  <p className="mt-2 text-lg font-bold text-rose-700">{flow.quiz.totalMistakes}</p>
                </div>
              </div>

              <p className="rounded-[1.5rem] bg-sky-50 px-4 py-3 text-sm font-medium leading-6 text-sky-700">
                {flow.quiz.lastFeedback}
              </p>

              <StrokeQuizPanel
                hanzi={hanzi.character}
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
                  onComplete(summaryData.totalMistakes);
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
                    onComplete(flow.quiz.totalMistakes);
                  }}
                  type="button"
                >
                  Complete Quiz (E2E)
                </button>
              )}
            </div>
          )}

          {flow.stage === 'complete' && flow.summary && (
            <div className="space-y-4" data-testid="lesson-summary">
              <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,_#fef3c7,_#bfdbfe)] p-5 text-center">
                <p className="text-sm font-semibold text-slate-600">结算段</p>
                <p className="mt-2 text-3xl font-black text-slate-900">{stars}</p>
                <p className="mt-3 text-lg font-bold text-slate-900">
                  {`你完成了 ${hanzi.character} 的描写挑战`}
                </p>
                <p className="mt-2 text-sm text-slate-600">{`总错误次数：${flow.summary.totalMistakes}`}</p>
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
                继续下一关
              </button>
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
