import type { HanziItem } from '../data/curriculum';
import { getSiblingHanziByRadical, getStructureMeta } from '../data/hanzi-knowledge';

interface HanziKnowledgePanelProps {
  hanzi: HanziItem;
  onOpenRelatedHanzi?: (hanziId: string) => void;
}

function getStructureLabel(type: NonNullable<HanziItem['structureType']>) {
  switch (type) {
    case 'left-right':
      return '左右结构';
    case 'top-bottom':
      return '上下结构';
    case 'surround':
      return '包围结构';
    case 'compound':
      return '组合结构';
    default:
      return '独体字';
  }
}

export function HanziKnowledgePanel({ hanzi, onOpenRelatedHanzi }: HanziKnowledgePanelProps) {
  const structure = getStructureMeta(hanzi);
  const related = getSiblingHanziByRadical(hanzi.id, hanzi.radical);

  return (
    <section className="space-y-3" data-testid="hanzi-knowledge-panel">
      <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5" data-testid="structure-analysis-card">
        <p className="text-sm font-semibold text-sky-600">结构分析</p>
        <h3 className="mt-2 text-lg font-bold text-slate-900">{getStructureLabel(structure.structureType)}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{structure.structureHint}</p>
        {structure.parts.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {structure.parts.map((part, index) => (
              <span
                key={`${hanzi.id}-${part}-${index}`}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
              >
                {part}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5" data-testid="vocabulary-examples-card">
        <p className="text-sm font-semibold text-emerald-600">常用词语</p>
        {hanzi.vocabExamples.length > 0 ? (
          <div className="mt-3 space-y-3">
            {hanzi.vocabExamples.slice(0, 3).map((example) => (
              <div key={example.id} className="rounded-[1.2rem] bg-slate-50 p-3">
                <p className="font-bold text-slate-900">{example.word}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{example.gloss}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-500" data-testid="vocabulary-examples-empty">
            这个字的常用词语正在补充中。
          </p>
        )}
      </div>

      <div className="rounded-[1.8rem] border border-slate-200 bg-white p-5" data-testid="related-radical-card">
        <p className="text-sm font-semibold text-amber-600">同部首字推荐</p>
        <h3 className="mt-2 text-lg font-bold text-slate-900">{hanzi.radical}</h3>
        {related.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((item) => (
              <button
                key={item.id}
                className="rounded-[1rem] bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
                data-testid={`related-radical-item-${item.id}`}
                onClick={() => onOpenRelatedHanzi?.(item.id)}
                type="button"
              >
                <span data-testid="related-radical-item">{item.character}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-500" data-testid="related-radical-empty">
            这个部首的伙伴正在整理中。
          </p>
        )}
      </div>
    </section>
  );
}
