import { useState } from 'react';
import { CampAdventureMap } from '../../components/CampAdventureMap';
import { SectionCard } from '../../components/SectionCard';
import type { ProjectClueMapItem } from '../../data/camp-map';
import type { LessonLevel } from '../../data/curriculum';

interface HomeScreenProps {
  activeProjectLevelId: string | null;
  completedCount: number;
  completedProjectLevelIds: string[];
  currentLevel: (LessonLevel & { unitTitle: string }) | null;
  currentUnitTitle: string;
  totalStars: number;
  projectClues: ProjectClueMapItem[];
  onContinue: () => void;
  onOpenCourse: () => void;
  onOpenProjectLesson: (levelId: string) => void;
  onStartCustomHanzi: (character: string) => Promise<void> | void;
  onGenerateAdventureMap: (options: { mode: 'topic' | 'random'; knowledgePoint?: string }) => Promise<void> | void;
  customError?: string | null;
  generatedMapError?: string | null;
  generatedMapLoading?: boolean;
}

export function HomeScreen({
  activeProjectLevelId,
  completedCount,
  completedProjectLevelIds,
  currentLevel,
  currentUnitTitle,
  totalStars,
  projectClues,
  onOpenCourse,
  onOpenProjectLesson,
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

  const nextClueLabel = currentLevel ? currentLevel.title : '准备领取第一条线索';

  return (
    <div className="space-y-4" data-testid="home-screen">
      <section className="space-y-3">
        <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#14532d,_#166534_55%,_#38bdf8)] p-6 text-white shadow-[0_18px_50px_rgba(22,101,52,0.32)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">项目冒险</p>
          <h1 className="mt-3 text-3xl font-black">营地探险地图</h1>
          <p className="mt-3 text-sm leading-6 text-white/85">
            点开四周散落的线索卡，直接进入今天的写字任务。单字会在学习页里揭晓。
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-3 py-1">{`已收集 ${completedCount} 条线索`}</span>
            <span className="rounded-full bg-white/15 px-3 py-1">{`累计 ${totalStars} 颗星`}</span>
          </div>
        </div>

        <CampAdventureMap
          activeClueId={activeProjectLevelId}
          clues={projectClues}
          completedClueIds={completedProjectLevelIds}
          onOpenClue={onOpenProjectLesson}
        />

        <div className="rounded-[1.6rem] bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <span className="font-bold">当前推荐：</span>
          {` ${nextClueLabel}`}
          <button
            className="ml-2 font-semibold underline-offset-4 hover:underline"
            onClick={onOpenCourse}
            type="button"
          >
            打开完整营地地图
          </button>
        </div>
      </section>

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
              正在整理 10 条新线索，也在补齐它们的古诗卡，请稍等…
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
    </div>
  );
}
