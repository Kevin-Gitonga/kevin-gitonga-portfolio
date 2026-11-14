import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="reveal mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-coral uppercase">
            {eyebrow}
          </p>
          <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {intro ? <div className="mt-4 text-lg leading-relaxed text-muted">{intro}</div> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-navy-900/60 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}
