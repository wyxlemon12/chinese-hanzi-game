import type { LessonLevel } from '../../data/curriculum';
import type { ProgressSnapshot } from '../../domain/progress-store';
import { SectionCard } from '../../components/SectionCard';

interface RewardsScreenProps {
  levels: Array<LessonLevel & { unitTitle: string }>;
  snapshots: ProgressSnapshot[];
  totalStars: number;
  completedLevels: number;
}

export function RewardsScreen({ levels, snapshots, totalStars, completedLevels }: RewardsScreenProps) {
  const snapshotMap = new Map(snapshots.map((snapshot) => [snapshot.levelId, snapshot]));
  const earnedRewards = levels.filter((level) => snapshotMap.get(level.id)?.status === 'completed');

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="奖励" title="你的收集册">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.5rem] bg-amber-50 p-4">
            <p className="text-sm text-amber-700">总星星</p>
            <p className="mt-2 text-3xl font-black text-amber-500">{totalStars}</p>
          </div>
          <div className="rounded-[1.5rem] bg-emerald-50 p-4">
            <p className="text-sm text-emerald-700">已完成关卡</p>
            <p className="mt-2 text-3xl font-black text-emerald-500">{completedLevels}</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard eyebrow="徽章" title="本周获得">
        <div className="space-y-3">
          {earnedRewards.length === 0 && <p className="text-sm text-slate-500">先完成一关，你的第一枚徽章就会出现在这里。</p>}
          {earnedRewards.map((level) => (
            <div key={level.id} className="rounded-[1.5rem] bg-slate-50 p-4">
              <p className="font-bold text-slate-900">{level.rewardTitle}</p>
              <p className="mt-1 text-sm text-slate-500">{level.title}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
