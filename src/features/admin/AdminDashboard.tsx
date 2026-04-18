import type { LearnerProfile, ProgressSnapshot, QuizAttemptRecord } from '../../domain/progress-store';
import type { LessonLevel } from '../../data/curriculum';
import { SectionCard } from '../../components/SectionCard';

interface AdminDashboardProps {
  learner: LearnerProfile;
  levels: Array<LessonLevel & { unitTitle: string }>;
  snapshots: ProgressSnapshot[];
  attempts: QuizAttemptRecord[];
  onClose: () => void;
}

export function AdminDashboard({ learner, levels, snapshots, attempts, onClose }: AdminDashboardProps) {
  const averageMistakes =
    attempts.length > 0
      ? (attempts.reduce((sum, attempt) => sum + attempt.totalMistakes, 0) / attempts.length).toFixed(1)
      : '0.0';

  const toughestLevel = [...levels]
    .map((level) => ({
      level,
      mistakes: attempts
        .filter((attempt) => attempt.levelId === level.id)
        .reduce((sum, attempt) => sum + attempt.totalMistakes, 0),
    }))
    .sort((left, right) => right.mistakes - left.mistakes)[0];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900">
      <div className="mx-auto max-w-5xl space-y-4">
        <header className="flex items-center justify-between rounded-[2rem] bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Admin</p>
            <h1 className="mt-2 text-3xl font-black">轻量内容后台</h1>
            <p className="mt-2 text-sm text-slate-500">当前匿名学习者：{learner.deviceKey}</p>
          </div>
          <button
            className="rounded-[1rem] bg-slate-900 px-4 py-2 text-sm font-bold text-white"
            onClick={onClose}
            type="button"
          >
            返回学习端
          </button>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <SectionCard eyebrow="Content Library" title="汉字内容">
            <div className="space-y-3">
              {levels.map((level) => (
                <div key={level.id} className="rounded-[1.25rem] bg-slate-50 p-4">
                  <p className="font-bold text-slate-900">{level.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{level.unitTitle}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard eyebrow="Curriculum Builder" title="发布编排">
            <div className="space-y-3 text-sm text-slate-600">
              <p>已发布课程：1</p>
              <p>单元数：1</p>
              <p>关卡数：{levels.length}</p>
              <p>当前策略：线性闯关 + quiz 通过后解锁下一关。</p>
            </div>
          </SectionCard>

          <SectionCard eyebrow="Publish Control" title="上线状态">
            <div className="space-y-3 text-sm text-slate-600">
              <p>状态：Published</p>
              <p>最后活跃时间：{new Date(learner.lastActiveAt).toLocaleString()}</p>
              <p>学习快照数：{snapshots.length}</p>
            </div>
          </SectionCard>

          <SectionCard eyebrow="Basic Analytics" title="学习表现">
            <div className="space-y-3 text-sm text-slate-600">
              <p>平均错误次数：{averageMistakes}</p>
              <p>已完成关卡：{snapshots.filter((snapshot) => snapshot.status === 'completed').length}</p>
              <p>
                最容易卡住的关卡：
                <strong className="ml-2 text-slate-900">
                  {toughestLevel?.level.title ?? '暂无数据'}
                </strong>
              </p>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
