import type { PropsWithChildren, ReactNode } from 'react';

interface SectionCardProps extends PropsWithChildren {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionCard({ title, eyebrow, action, children, className = '' }: SectionCardProps) {
  return (
    <section className={`rounded-[2rem] bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)] ${className}`}>
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          {eyebrow && <p className="text-sm font-semibold text-sky-600">{eyebrow}</p>}
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}
