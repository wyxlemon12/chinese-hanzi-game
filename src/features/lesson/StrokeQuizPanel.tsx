import { useEffect, useRef } from 'react';
import HanziWriter from 'hanzi-writer';

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
  onMistake: (strokeData: StrokeData) => void;
  onCorrectStroke: (strokeData: StrokeData) => void;
  onComplete: (summaryData: SummaryData) => void;
}

export function StrokeQuizPanel({
  hanzi,
  onMistake,
  onCorrectStroke,
  onComplete,
}: StrokeQuizPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);

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
        showCharacter: false,
        showOutline: true,
        showHintAfterMisses: 2,
        highlightOnComplete: true,
        strokeColor: '#0f172a',
        outlineColor: '#cbd5e1',
        drawingColor: '#0ea5e9',
      });

      writerRef.current.quiz({
        onMistake,
        onCorrectStroke,
        onComplete,
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
  }, [hanzi, onComplete, onCorrectStroke, onMistake]);

  return (
    <div className="rounded-[2rem] bg-white p-4 shadow-inner">
      <div className="mx-auto h-[300px] w-[300px]">
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
