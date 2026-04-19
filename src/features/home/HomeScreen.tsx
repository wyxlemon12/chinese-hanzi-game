import { useState } from 'react';
import { SectionCard } from '../../components/SectionCard';

interface HomeScreenProps {
  completedCount: number;
  totalMistakes: number;
  lastGroupTitle?: string | null;
  onResumeGroup: () => void;
  onStartSingleCharacter: (character: string) => Promise<void> | void;
  onRandomGroup: () => Promise<void> | void;
  customError?: string | null;
  groupError?: string | null;
  groupLoading?: boolean;
}

export function HomeScreen({
  completedCount,
  totalMistakes,
  lastGroupTitle = null,
  onResumeGroup,
  onStartSingleCharacter,
  onRandomGroup,
  customError,
  groupError,
  groupLoading = false,
}: HomeScreenProps) {
  const [characterValue, setCharacterValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  return (
    <div className="space-y-4" data-testid="home-screen">
      <section className="rounded-[2.5rem] bg-[linear-gradient(135deg,_#0f172a,_#1d4ed8_60%,_#38bdf8)] p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">繁體字筆畫輔助工具</p>
        <h1 className="mt-3 text-3xl font-black">快速選字，直接開始練習</h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
          輸入想學的字，或直接抽一組 5 個字。每個字都會先看動畫，再描紅一輪、空白默寫一輪。
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <span className="rounded-full bg-white/15 px-3 py-1">{`已完成 ${completedCount} 個字`}</span>
          <span className="rounded-full bg-white/15 px-3 py-1">{`累計錯誤 ${totalMistakes} 次`}</span>
        </div>
      </section>

      <SectionCard eyebrow="輸入單字" title="我想學這個字">
        <div className="space-y-3">
          <p className="text-sm leading-6 text-slate-600">
            直接輸入一個字。系統會先自動轉成對應繁體，再判斷要進入 5 字組還是單字模式。
          </p>
          <div className="flex items-center gap-3">
            <input
              className="flex-1 rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 text-center text-2xl font-bold text-slate-900 outline-none focus:border-sky-400"
              data-testid="character-input"
              placeholder="字"
              value={characterValue}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={(event) => {
                setIsComposing(false);
                setCharacterValue(event.currentTarget.value.trim());
              }}
              onChange={(event) => {
                const nextValue = event.target.value;
                setCharacterValue(isComposing ? nextValue : nextValue.trim());
              }}
            />
            <button
              className="rounded-[1.2rem] bg-sky-500 px-4 py-3 text-sm font-bold text-white"
              data-testid="character-start"
              onClick={() => onStartSingleCharacter(characterValue)}
              type="button"
            >
              開始練習
            </button>
          </div>
          {customError && (
            <p className="text-sm font-medium text-rose-600" data-testid="character-error">
              {customError}
            </p>
          )}
        </div>
      </SectionCard>

      <SectionCard eyebrow="字組練習" title="隨機來一組">
        <div className="space-y-3">
          <p className="text-sm leading-6 text-slate-600">
            系統會從預先整理好的 10 組裡隨機抽出一組，每組 5 個字，規則包含同部首、同結構、同主題或同音對比。
          </p>
          <button
            className="w-full rounded-[1.2rem] bg-emerald-600 px-4 py-3 text-sm font-bold text-white"
            data-testid="random-group-start"
            disabled={groupLoading}
            onClick={onRandomGroup}
            type="button"
          >
            隨機抽一組
          </button>
          {groupError && (
            <p className="text-sm font-medium text-rose-600" data-testid="group-error">
              {groupError}
            </p>
          )}
        </div>
      </SectionCard>

      <SectionCard eyebrow="繼續進度" title="回到上一組">
        <div className="space-y-3">
          <p className="text-sm leading-6 text-slate-600">
            {lastGroupTitle
              ? `你上次停在「${lastGroupTitle}」，可以直接回去接著練。`
              : '目前還沒有最近練習的字組，先輸入一個字或抽一組開始。'}
          </p>
          <button
            className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:text-slate-400"
            data-testid="resume-group"
            disabled={!lastGroupTitle}
            onClick={onResumeGroup}
            type="button"
          >
            繼續上一組
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
