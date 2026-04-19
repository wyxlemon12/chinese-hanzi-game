import type { ProjectClueMapItem } from '../data/camp-map';

type ClueStatus = 'idle' | 'active' | 'completed';

interface ClueMapCardProps {
  clue: ProjectClueMapItem;
  icon: string;
  status: ClueStatus;
  onOpen: (levelId: string) => void;
}

export function ClueMapCard({ clue, icon, status, onOpen }: ClueMapCardProps) {
  const stateClass =
    status === 'active'
      ? 'ring-2 ring-sky-500 shadow-lg'
      : status === 'completed'
        ? 'opacity-80 saturate-75'
        : 'shadow-md';

  return (
    <div
      className="absolute"
      data-testid="clue-map-card"
      style={{
        top: clue.position.top,
        left: clue.position.left,
        transform: `rotate(${clue.position.rotate ?? '0deg'})`,
      }}
    >
      <button
        className={`w-24 rounded-2xl border border-white/80 bg-white/95 p-2 text-left transition hover:-translate-y-0.5 sm:w-28 ${stateClass}`}
        data-testid={`clue-map-card-${clue.levelId}`}
        onClick={() => onOpen(clue.levelId)}
        type="button"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {`线索 ${String(clue.clueIndex).padStart(2, '0')}`}
        </p>
        <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xl">
          <span aria-hidden="true">{icon}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm font-bold text-slate-900">{clue.clueTitle}</p>
      </button>
    </div>
  );
}
