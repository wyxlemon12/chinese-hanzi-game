interface BottomNavProps {
  current: 'home' | 'course' | 'rewards' | 'profile';
  onChange: (next: 'home' | 'course' | 'rewards' | 'profile') => void;
}

const items = [
  { key: 'home', label: '首頁', icon: '字' },
  { key: 'course', label: '字組', icon: '組' },
  { key: 'rewards', label: '紀錄', icon: '記' },
  { key: 'profile', label: '我的', icon: '我' },
] as const;

export function BottomNav({ current, onChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-white/70 bg-white/90 px-3 pb-4 pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:max-w-2xl">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <button
            key={item.key}
            className={`rounded-3xl px-3 py-2 text-sm font-semibold transition ${
              current === item.key ? 'bg-sky-500 text-white shadow-lg' : 'bg-slate-100 text-slate-600'
            }`}
            onClick={() => onChange(item.key)}
            type="button"
          >
            <span className="mb-1 block text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
