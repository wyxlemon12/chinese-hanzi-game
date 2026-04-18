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
    <div className="space-y-4" data-testid="home-screen">
      <section className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#14532d,_#166534_55%,_#38bdf8)] p-6 text-white shadow-[0_18px_50px_rgba(22,101,52,0.32)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">森林营地</p>
        <h1 className="mt-3 text-3xl font-black">继续今天的营地冒险</h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
          每收集一个字的线索，就能点亮一张古诗卡，把自然发现装进你的营地手账。
        </p>
      </section>

      <SectionCard
        eyebrow="当前任务"
        title={currentUnitTitle}
        action={<span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">{totalStars} 星</span>}
      >
        <div className="space-y-3">
          <p className="text-sm text-slate-600">{`你已经收集了 ${completedCount} 条线索，下一条线索就在前面。`}</p>
          {currentLevel && (
            <button
              className="w-full rounded-[1.4rem] bg-slate-900 px-4 py-3 text-base font-bold text-white transition hover:bg-slate-800"
              onClick={onContinue}
              data-testid="continue-lesson"
              type="button"
            >
              {`去完成${currentLevel.title}`}
            </button>
          )}
        </div>
      </SectionCard>

      <SectionCard eyebrow="冒险节奏" title="今天怎么玩">
        <div className="grid grid-cols-3 gap-3">
          {[
            ['先观察', '看老师写一遍'],
            ['再动手', '把线索描出来'],
            ['收古诗卡', '把发现装进手账'],
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
          打开营地任务地图
        </button>
      </SectionCard>
    </div>
  );
}
