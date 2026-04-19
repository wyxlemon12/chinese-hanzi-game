import type { LessonUnit } from '../../data/curriculum';
import type { ProgressSnapshot } from '../../domain/progress-store';
import { SectionCard } from '../../components/SectionCard';

interface CourseFlowScreenProps {
  units: LessonUnit[];
  snapshots: ProgressSnapshot[];
  onStartGroup: (unitId: string) => void;
}

export function CourseFlowScreen({ units, snapshots, onStartGroup }: CourseFlowScreenProps) {
  return (
    <div className="space-y-4">
      <SectionCard eyebrow="字組列表" title="全部 5 字組">
        <p className="text-sm leading-6 text-slate-600">
          這裡整理了首批 10 組繁體字練習。你可以按部首、結構、主題或常見對比來選一組開始。
        </p>
      </SectionCard>

      {units.map((unit) => {
        const completedCount = unit.levels.filter((level) =>
          snapshots.some((snapshot) => snapshot.levelId === level.id && snapshot.status === 'completed'),
        ).length;

        return (
          <SectionCard
            key={unit.id}
            eyebrow="5 字一組"
            title={unit.title}
            action={
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
                {`${completedCount}/${unit.levels.length}`}
              </span>
            }
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {unit.levels.map((level) => (
                  <span
                    key={level.id}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                  >
                    {level.title}
                  </span>
                ))}
              </div>
              <button
                className="shrink-0 rounded-[1rem] bg-slate-900 px-4 py-2 text-sm font-bold text-white"
                onClick={() => onStartGroup(unit.id)}
                type="button"
              >
                打開字組
              </button>
            </div>
          </SectionCard>
        );
      })}
    </div>
  );
}
