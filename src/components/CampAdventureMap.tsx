import type { ClueIcon, ProjectClueMapItem } from '../data/camp-map';
import { ClueMapCard } from './ClueMapCard';

interface CampAdventureMapProps {
  clues: ProjectClueMapItem[];
  activeClueId: string | null;
  completedClueIds?: string[];
  onOpenClue: (levelId: string) => void;
}

const iconMap: Record<ClueIcon, string> = {
  tree: '🌲',
  forest: '🌳',
  mountain: '⛰',
  sun: '☀',
  moon: '☾',
  water: '💧',
  cloud: '☁',
  wind: '✦',
  trail: '👣',
  person: '🧭',
};

export function CampAdventureMap({
  clues,
  activeClueId,
  completedClueIds = [],
  onOpenClue,
}: CampAdventureMapProps) {
  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-[#d9d0ba] bg-[#f5eedc] p-4"
      data-testid="camp-adventure-map"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
      >
        <path
          d="M12 67 C22 52, 30 39, 46 32 C60 26, 69 19, 84 12"
          fill="none"
          stroke="#b89462"
          strokeLinecap="round"
          strokeWidth="2.8"
        />
        <path
          d="M33 48 C43 54, 52 60, 65 71"
          fill="none"
          stroke="#b89462"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <ellipse cx="20" cy="18" fill="#ddebd5" rx="14" ry="10" />
        <ellipse cx="78" cy="22" fill="#eedfc0" rx="14" ry="10" />
        <ellipse cx="52" cy="78" fill="#e0e9f4" rx="19" ry="12" />
      </svg>

      <div className="relative h-[28rem] sm:h-[32rem]">
        {clues.map((clue) => {
          const status = completedClueIds.includes(clue.levelId)
            ? 'completed'
            : activeClueId === clue.levelId
              ? 'active'
              : 'idle';

          return (
            <ClueMapCard
              key={clue.levelId}
              clue={clue}
              icon={iconMap[clue.clueIcon]}
              onOpen={onOpenClue}
              status={status}
            />
          );
        })}
      </div>
    </section>
  );
}
