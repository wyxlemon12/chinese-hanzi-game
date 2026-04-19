import { useEffect, useEffectEvent, useRef } from 'react';
import HanziWriter from 'hanzi-writer';
import type { PracticeMode } from '../../domain/lesson-flow';

interface StrokeData {
  strokeNum: number;
  mistakesOnStroke: number;
  totalMistakes: number;
  strokesRemaining: number;
}

interface SummaryData {
  character: string;
  totalMistakes: number;
}

interface StrokeQuizPanelProps {
  hanzi: string;
  mistakeOffset: number;
  practiceMode: PracticeMode;
  onMistake: (strokeData: StrokeData) => void;
  onCorrectStroke: (strokeData: StrokeData) => void;
  onComplete: (summaryData: SummaryData) => void;
}

export function StrokeQuizPanel({
  hanzi,
  mistakeOffset,
  practiceMode,
  onMistake,
  onCorrectStroke,
  onComplete,
}: StrokeQuizPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const handleMistake = useEffectEvent((strokeData: StrokeData) => {
    onMistake({
      ...strokeData,
      totalMistakes: strokeData.totalMistakes + mistakeOffset,
    });
  });
  const handleCorrectStroke = useEffectEvent((strokeData: StrokeData) => {
    onCorrectStroke({
      ...strokeData,
      totalMistakes: strokeData.totalMistakes + mistakeOffset,
    });
  });
  const handleComplete = useEffectEvent((summary: SummaryData) => {
    onComplete({
      ...summary,
      totalMistakes: summary.totalMistakes + mistakeOffset,
    });
  });

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.innerHTML = '';

    try {
      writerRef.current = HanziWriter.create(containerRef.current, hanzi, {
        width: 280,
        height: 280,
        padding: 18,
        showCharacter: practiceMode === 'guided',
        showOutline: practiceMode === 'guided',
        showHintAfterMisses: 2,
        highlightOnComplete: true,
        strokeColor: practiceMode === 'guided' ? '#94a3b8' : '#0f172a',
        outlineColor: practiceMode === 'guided' ? '#cbd5e1' : '#ffffff',
        drawingColor: '#0ea5e9',
      });

      writerRef.current.quiz({
        onMistake: handleMistake,
        onCorrectStroke: handleCorrectStroke,
        onComplete: handleComplete,
      });
    } catch (error) {
      console.error(error);
    }

    return () => {
      try {
        writerRef.current?.cancelQuiz();
      } catch {
        // Ignore cleanup errors from HanziWriter.
      }
    };
  }, [hanzi, practiceMode]);

  return (
    <div className="rounded-[2rem] bg-white p-4 shadow-inner" data-testid="quiz-panel">
      <div className="mx-auto h-[300px] w-[300px]">
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
