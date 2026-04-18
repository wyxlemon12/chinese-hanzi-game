import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
  show: boolean;
  onComplete?: () => void;
}

export function Celebration({ show, onComplete }: CelebrationProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!show || firedRef.current) return;
    firedRef.current = true;

    // 撒花特效
    const defaults = {
      spread: 360,
      ticks: 80,
      gravity: 0.8,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#FFD93D', '#6ECFFF', '#FF8FA3', '#C3F0CA', '#FDF6E3', '#FFE066'],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 1.2,
        shapes: ['circle', 'square'],
        origin: { x: 0.5, y: 0.6 },
      });

      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 0.75,
        shapes: ['circle'],
        origin: { x: 0.3, y: 0.7 },
      });

      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 0.75,
        shapes: ['square'],
        origin: { x: 0.7, y: 0.7 },
      });
    };

    shoot();
    setTimeout(shoot, 200);
    setTimeout(shoot, 450);

    const timer = setTimeout(() => {
      firedRef.current = false;
      onComplete?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [show, onComplete]);

  if (!show) return null;
  return <div className="pointer-events-none fixed inset-0 z-50" />;
}
