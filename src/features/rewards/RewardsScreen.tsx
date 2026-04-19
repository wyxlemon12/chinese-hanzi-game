import type { QuizAttemptRecord } from '../../domain/progress-store';
import { SectionCard } from '../../components/SectionCard';

interface RewardsScreenProps {
  attempts: QuizAttemptRecord[];
  completedCount: number;
  totalMistakes: number;
}

export function RewardsScreen({ attempts, completedCount, totalMistakes }: RewardsScreenProps) {
  const recentAttempts = [...attempts].slice(-5).reverse();

  return (
    <div className="space-y-4">
      <SectionCard eyebrow="練習紀錄" title="本機統計">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.5rem] bg-sky-50 p-4">
            <p className="text-sm text-sky-700">已完成字數</p>
            <p className="mt-2 text-3xl font-black text-sky-500">{completedCount}</p>
          </div>
          <div className="rounded-[1.5rem] bg-rose-50 p-4">
            <p className="text-sm text-rose-700">累計錯誤</p>
            <p className="mt-2 text-3xl font-black text-rose-500">{totalMistakes}</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard eyebrow="最近練習" title="最近 5 次">
        <div className="space-y-3">
          {recentAttempts.length === 0 && (
            <p className="text-sm text-slate-500">還沒有練習紀錄，先開始第一個字吧。</p>
          )}
          {recentAttempts.map((attempt) => (
            <div key={attempt.id} className="rounded-[1.5rem] bg-slate-50 p-4">
              <p className="font-bold text-slate-900">{attempt.hanziItemId}</p>
              <p className="mt-1 text-sm text-slate-500">{`錯誤 ${attempt.totalMistakes} 次`}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
