import type { LessonLevel } from '../../data/curriculum';
import { SectionCard } from '../../components/SectionCard';

interface HomeScreenProps {
  currentLevel: (LessonLevel & { unitTitle: string }) | null;
  currentUnitTitle: string;
  completedCount: number;
  totalStars: number;
  onContinue: () => void;
  onOpenCourse: () => void;
}

export function HomeScreen({
  currentLevel,
  currentUnitTitle,
  completedCount,
  totalStars,
  onContinue,
  onOpenCourse,
}: HomeScreenProps) {
  return (
    <div className="space-y-4">
      <section className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#0f172a,_#1d4ed8_60%,_#38bdf8)] p-6 text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">首页</p>
        <h1 className="mt-3 text-3xl font-black">继续今天的汉字冒险</h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
          先看演示，再完成描写 quiz。每通过一关，就能收集新的奖励称号。
        </p>
      </section>

      <SectionCard
        eyebrow="当前进度"
        title={currentUnitTitle}
        action={<span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">{totalStars} 星</span>}
      >
        <div className="space-y-3">
          <p className="text-sm text-slate-600">已经完成 {completedCount} 关，下一关继续巩固笔顺和字义。</p>
          {currentLevel && (
            <button
              className="w-full rounded-[1.4rem] bg-slate-900 px-4 py-3 text-base font-bold text-white transition hover:bg-slate-800"
              onClick={onContinue}
              type="button"
            >
              {`开始${currentLevel.title}`}
            </button>
          )}
        </div>
      </SectionCard>

      <SectionCard eyebrow="学习节奏" title="今天的目标">
        <div className="grid grid-cols-3 gap-3">
          {[
            ['看演示', '先观察字形'],
            ['做 quiz', '动手描写'],
            ['收奖励', '完成就点亮'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] bg-slate-50 p-4">
              <p className="font-bold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-4 text-sm font-semibold text-sky-600 underline-offset-4 hover:underline"
          onClick={onOpenCourse}
          type="button"
        >
          去看全部闯关路线
        </button>
      </SectionCard>
    </div>
  );
}
