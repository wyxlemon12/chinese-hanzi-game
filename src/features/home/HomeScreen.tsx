import { useState } from 'react';
import type { LessonLevel } from '../../data/curriculum';
import { SectionCard } from '../../components/SectionCard';

interface HomeScreenProps {
  currentLevel: (LessonLevel & { unitTitle: string }) | null;
  currentUnitTitle: string;
  completedCount: number;
  totalStars: number;
  onContinue: () => void;
  onOpenCourse: () => void;
  onStartCustomHanzi: (character: string) => Promise<void> | void;
  onGenerateAdventureMap: (options: { mode: 'topic' | 'random'; knowledgePoint?: string }) => Promise<void> | void;
  customError?: string | null;
  generatedMapError?: string | null;
  generatedMapLoading?: boolean;
}

export function HomeScreen({
  currentLevel,
  currentUnitTitle,
  completedCount,
  totalStars,
  onContinue,
  onOpenCourse,
  onStartCustomHanzi,
  onGenerateAdventureMap,
  customError,
  generatedMapError,
  generatedMapLoading = false,
}: HomeScreenProps) {
  const [customValue, setCustomValue] = useState('');
  const [mapValue, setMapValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const normalizeSingleCharacter = (value: string) => {
    return [...value.trim()].slice(-1).join('');
  };

  return (
    <div className="space-y-4" data-testid="home-screen">
      <section className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#14532d,_#166534_55%,_#38bdf8)] p-6 text-white shadow-[0_18px_50px_rgba(22,101,52,0.32)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">项目冒险</p>
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

      <SectionCard eyebrow="新探险地图" title="让我生成一张新的冒险地图">
        <div className="space-y-3">
          <p className="text-sm leading-6 text-slate-600">
            输入一个知识点，比如“春天”“木字旁”“和水有关”，系统会一次生成 10 个字的新地图。
          </p>
          <div className="flex items-center gap-3">
            <input
              className="flex-1 rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 text-lg font-semibold text-slate-900 outline-none focus:border-sky-400"
              data-testid="generated-map-input"
              placeholder="输入知识点"
              value={mapValue}
              onChange={(event) => {
                setMapValue(event.target.value);
              }}
            />
            <button
              className="rounded-[1.2rem] bg-emerald-600 px-4 py-3 text-sm font-bold text-white"
              data-testid="generate-map-start"
              disabled={generatedMapLoading}
              onClick={() => onGenerateAdventureMap({ mode: 'topic', knowledgePoint: mapValue })}
              type="button"
            >
              生成地图
            </button>
          </div>
          <button
            className="w-full rounded-[1.2rem] border border-dashed border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700"
            data-testid="generate-map-random"
            disabled={generatedMapLoading}
            onClick={() => onGenerateAdventureMap({ mode: 'random' })}
            type="button"
          >
            随机来一张新地图
          </button>
          {generatedMapLoading && (
            <p className="text-sm font-medium text-sky-700" data-testid="generated-map-loading">
              正在整理 10 条新线索，也在补齐它们的古诗卡，请稍等……
            </p>
          )}
          {generatedMapError && (
            <p className="text-sm font-medium text-rose-600" data-testid="generated-map-error">
              {generatedMapError}
            </p>
          )}
        </div>
      </SectionCard>

      <SectionCard eyebrow="自由单字" title="我想马上学一个字">
        <div className="space-y-3">
          <p className="text-sm leading-6 text-slate-600">
            输入一个你现在就想认识的单字。系统会马上帮你找到可学习的内容和对应古诗卡。
          </p>
          <div className="flex items-center gap-3">
            <input
              className="flex-1 rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 text-center text-2xl font-bold text-slate-900 outline-none focus:border-sky-400"
              data-testid="custom-hanzi-input"
              placeholder="字"
              value={customValue}
              onCompositionStart={() => {
                setIsComposing(true);
              }}
              onCompositionEnd={(event) => {
                setIsComposing(false);
                setCustomValue(normalizeSingleCharacter(event.currentTarget.value));
              }}
              onChange={(event) => {
                const nextValue = event.target.value;
                setCustomValue(isComposing ? nextValue : normalizeSingleCharacter(nextValue));
              }}
            />
            <button
              className="rounded-[1.2rem] bg-sky-500 px-4 py-3 text-sm font-bold text-white"
              data-testid="custom-hanzi-start"
              onClick={() => onStartCustomHanzi(customValue)}
              type="button"
            >
              开始学习
            </button>
          </div>
          {customError && (
            <p className="text-sm font-medium text-rose-600" data-testid="custom-hanzi-error">
              {customError}
            </p>
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
