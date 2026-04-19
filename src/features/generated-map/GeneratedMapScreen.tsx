import { SectionCard } from '../../components/SectionCard';
import type { GeneratedAdventureMap } from '../../data/generated-map-seeds';

interface GeneratedMapScreenProps {
  map: GeneratedAdventureMap;
  completedLevelIds?: string[];
  onBack: () => void;
  onOpenLesson: (index: number) => void;
}

export function GeneratedMapScreen({
  map,
  completedLevelIds = [],
  onBack,
  onOpenLesson,
}: GeneratedMapScreenProps) {
  return (
    <div className="space-y-4" data-testid="generated-map-screen">
      <SectionCard
        eyebrow="字組資訊"
        title={map.themeTitle}
        action={
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
            {map.themeRuleType}
          </span>
        }
      >
        <p className="text-sm leading-6 text-slate-600">{map.themeDescription}</p>
        {map.knowledgePoint && (
          <p className="mt-3 text-xs font-medium text-slate-500">{`輸入來源：${map.knowledgePoint}`}</p>
        )}
      </SectionCard>

      <div className="grid grid-cols-2 gap-3">
        {map.lessons.map((lesson, index) => {
          const completed = completedLevelIds.includes(lesson.level.id);
          const focused = map.focusCharacter === lesson.hanzi.character;

          return (
            <button
              key={lesson.level.id}
              className={`rounded-[1.6rem] border p-4 text-left transition ${
                focused
                  ? 'border-sky-400 bg-sky-50'
                  : completed
                    ? 'border-emerald-200 bg-emerald-50'
                    : 'border-slate-200 bg-white'
              }`}
              data-testid="generated-map-level"
              onClick={() => onOpenLesson(index)}
              type="button"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {`第 ${index + 1} 字`}
              </p>
              <p className="mt-2 text-3xl font-black text-slate-900">{lesson.hanzi.character}</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">{lesson.hanzi.radical}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{lesson.hanzi.meaning}</p>
            </button>
          );
        })}
      </div>

      <button
        className="w-full rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
        onClick={onBack}
        type="button"
      >
        返回首頁
      </button>
    </div>
  );
}
