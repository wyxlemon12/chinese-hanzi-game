import type { HanziPoemLink, PoemLibraryEntry } from '../data/curriculum';

interface PoemDeepDiveCardProps {
  hanziId: string;
  poemLink: HanziPoemLink | null;
  poemLibraryEntry: PoemLibraryEntry | null;
}

export function PoemDeepDiveCard({
  hanziId,
  poemLink,
  poemLibraryEntry,
}: PoemDeepDiveCardProps) {
  const fallbackCharacter = hanziId.replace('hanzi-', '');

  if (!poemLink || poemLink.matchStatus !== 'linked' || !poemLibraryEntry) {
    return (
      <section
        className="rounded-[1.8rem] border border-dashed border-slate-300 bg-slate-50 p-5"
        data-testid="poem-card-missing"
      >
        <p className="text-sm font-semibold text-slate-500">古诗深度卡</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">这个字的古诗卡正在整理中</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {`“${fallbackCharacter}” 的文化延伸内容还在审核中，先完成今天的主学习任务吧。`}
        </p>
      </section>
    );
  }

  return (
    <section
      className="rounded-[1.8rem] bg-[linear-gradient(135deg,_#f8fafc,_#dbeafe)] p-5"
      data-testid="poem-card"
    >
      <p className="text-sm font-semibold text-sky-600">古诗深度卡</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{`古诗里的“${poemLibraryEntry.focusCharacter}”`}</h3>
      <p className="mt-4 text-lg font-semibold leading-8 text-slate-900" data-testid="poem-line">
        {poemLibraryEntry.lineText}
      </p>
      <p className="mt-2 text-sm text-slate-500" data-testid="poem-source">
        {`${poemLibraryEntry.poemTitle} · ${poemLibraryEntry.author} · ${poemLibraryEntry.dynasty}`}
      </p>
      <p className="mt-4 text-sm font-semibold text-slate-700">{poemLibraryEntry.meaningInLine}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{poemLibraryEntry.kidExplanation}</p>
    </section>
  );
}
