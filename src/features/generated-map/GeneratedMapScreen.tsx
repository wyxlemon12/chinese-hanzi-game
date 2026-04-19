import { SectionCard } from '../../components/SectionCard';
import type { GeneratedAdventureMap } from '../../data/generated-map-seeds';

interface GeneratedMapScreenProps {
  map: GeneratedAdventureMap;
  onBack: () => void;
  onOpenLesson: (index: number) => void;
}

export function GeneratedMapScreen({ map, onBack, onOpenLesson }: GeneratedMapScreenProps) {
  return (
    <div className="space-y-4" data-testid="generated-map-screen">
      <SectionCard
        eyebrow="新探险地图"
        title={map.themeTitle}
        action={
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
            {map.mode === 'topic' ? '知识点生成' : '随机生成'}
          </span>
        }
      >
        <p className="text-sm leading-6 text-slate-600">{map.themeDescription}</p>
        {map.knowledgePoint && (
          <p className="mt-3 text-xs font-medium text-slate-500">{`知识点：${map.knowledgePoint}`}</p>
        )}
      </SectionCard>

      {map.lessons.map((lesson, index) => (
        <SectionCard
          key={lesson.level.id}
          eyebrow="临时任务"
          title={lesson.level.title}
          action={
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              {lesson.poemLibraryEntry ? '古诗卡已补齐' : '待补古诗卡'}
            </span>
          }
        >
          <div className="space-y-3" data-testid="generated-map-level">
            <p className="text-sm text-slate-600">{lesson.hanzi.missionPrompt}</p>
            <button
              className="rounded-[1rem] bg-slate-900 px-4 py-2 text-sm font-bold text-white"
              onClick={() => onOpenLesson(index)}
              type="button"
            >
              去完成这一条线索
            </button>
          </div>
        </SectionCard>
      ))}

      <button
        className="w-full rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
        onClick={onBack}
        type="button"
      >
        返回首页
      </button>
    </div>
  );
}
