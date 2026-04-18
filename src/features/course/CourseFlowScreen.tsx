import type { LessonLevel } from '../../data/curriculum';
import type { ProgressSnapshot } from '../../domain/progress-store';
import { SectionCard } from '../../components/SectionCard';

interface CourseFlowScreenProps {
  levels: Array<LessonLevel & { unitTitle: string }>;
  snapshots: ProgressSnapshot[];
  onStartLevel: (levelId: string) => void;
}

export function CourseFlowScreen({ levels, snapshots, onStartLevel }: CourseFlowScreenProps) {
  const snapshotMap = new Map(snapshots.map((snapshot) => [snapshot.levelId, snapshot]));

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="闯关" title="线性学习路线">
        <p className="text-sm leading-6 text-slate-600">
          每关都先看汉字演示，再完成描写 quiz。通过后才会点亮下一关。
        </p>
      </SectionCard>

      {levels.map((level, index) => {
        const snapshot = snapshotMap.get(level.id);
        const isCompleted = snapshot?.status === 'completed';
        const isUnlocked = index === 0 || snapshotMap.get(levels[index - 1].id)?.status === 'completed';

        return (
          <SectionCard
            key={level.id}
            eyebrow={level.unitTitle}
            title={level.title}
            action={
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${isCompleted ? 'bg-emerald-100 text-emerald-700' : isUnlocked ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-400'}`}>
                {isCompleted ? '已完成' : isUnlocked ? '已解锁' : '未解锁'}
              </span>
            }
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-slate-600">规则：看演示 + 完成描写 quiz 才算通关。</p>
              <button
                className="rounded-[1rem] bg-slate-900 px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                disabled={!isUnlocked}
                onClick={() => onStartLevel(level.id)}
                type="button"
              >
                {isCompleted ? '再次练习' : '开始本关'}
              </button>
            </div>
          </SectionCard>
        );
      })}
    </div>
  );
}
