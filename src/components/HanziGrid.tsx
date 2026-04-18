import { useEffect, useRef } from 'react';
import HanziWriter from 'hanzi-writer';

interface HanziGridProps {
  hanzi: string;
  isAnimating: boolean;
  onAnimationComplete: () => void;
}

export function HanziGrid({ hanzi, isAnimating, onAnimationComplete }: HanziGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !hanzi) {
      return;
    }

    containerRef.current.innerHTML = '';
    writerRef.current = null;
    completedRef.current = false;

    writerRef.current = HanziWriter.create(containerRef.current, hanzi, {
      width: 280,
      height: 280,
      padding: 20,
      showOutline: true,
      outlineColor: '#e9d2a4',
      strokeColor: '#0f172a',
      radicalColor: '#0284c7',
      strokeAnimationSpeed: 0.7,
      delayBetweenStrokes: 500,
      renderer: 'svg',
    });
  }, [hanzi]);

  useEffect(() => {
    if (!isAnimating || !writerRef.current || completedRef.current) {
      return;
    }

    const writer = writerRef.current;
    writer.hideCharacter();
    writer.showOutline();

    const timer = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        onAnimationComplete();
      }
    }, 7000);

    writer.animateCharacter({
      onComplete: () => {
        if (!completedRef.current) {
          completedRef.current = true;
          clearTimeout(timer);
          onAnimationComplete();
        }
      },
    });

    return () => clearTimeout(timer);
  }, [isAnimating, onAnimationComplete]);

  const handleReplay = () => {
    completedRef.current = false;
    if (writerRef.current) {
      writerRef.current.hideCharacter();
      writerRef.current.showOutline();
      writerRef.current.animateCharacter({
        onComplete: () => {
          if (!completedRef.current) {
            completedRef.current = true;
            onAnimationComplete();
          }
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="tianzige relative flex h-[300px] w-[300px] items-center justify-center">
        <div ref={containerRef} className="absolute inset-0 flex items-center justify-center" />
        <div className="absolute bottom-2 right-3 text-sm font-medium text-amber-700 opacity-70">{hanzi}</div>
      </div>
      <button
        className="text-sm font-semibold text-amber-700 underline underline-offset-4 transition-colors hover:text-amber-900"
        onClick={handleReplay}
        type="button"
      >
        再看一遍
      </button>
    </div>
  );
}
