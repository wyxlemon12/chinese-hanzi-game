import type { AgeBand } from '../../data/curriculum';

interface OnboardingScreenProps {
  onStart: (ageBand: AgeBand) => void;
}

export function OnboardingScreen({ onStart }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff5cf,_#fff7ea_40%,_#e0f2fe_100%)] px-5 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-between rounded-[2.5rem] bg-white/75 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Shuyuan MVP</p>
          <h1 className="text-4xl font-black text-slate-900">书院汉字小勇士</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            今天我们先看老师写，再轮到你来描。学完一个字，就点亮一颗新的小星星。
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-[2rem] bg-slate-900 p-5 text-white">
            <p className="text-sm text-white/70">今天的任务</p>
            <p className="mt-2 text-2xl font-bold">先学 3 个字，再完成描写测验</p>
          </div>

          <button
            className="w-full rounded-[2rem] bg-sky-500 px-5 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-600"
            onClick={() => onStart('6-8')}
            type="button"
          >
            开始今天的冒险
          </button>
        </div>
      </div>
    </div>
  );
}
