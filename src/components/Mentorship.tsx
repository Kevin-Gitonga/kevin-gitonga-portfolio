import { mentorship } from "@/content/site";
import { Section, Tag } from "./Section";

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-coral/80" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export function Mentorship() {
  const { analystLab, greenwich } = mentorship;
  return (
    <Section
      id="mentorship"
      eyebrow="Mentorship & Community"
      title="Mentorship & Community"
      intro="Developing the next generation of data professionals, through practical engineering exercises and one-to-one career mentoring."
      className="border-t border-line/60"
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <article
          aria-labelledby="analyst-lab-title"
          className="reveal flex flex-col rounded-2xl border border-line bg-navy-900/80 p-6 transition-colors hover:border-line-strong sm:p-8"
        >
          <span className="self-start rounded-full bg-coral/15 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-coral-soft uppercase">
            {analystLab.context}
          </span>
          <h3 id="analyst-lab-title" className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {analystLab.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{analystLab.summary}</p>
          <Bullets items={analystLab.points} />

          <div className="mt-6">
            <h4 className="mb-3 font-mono text-xs tracking-[0.14em] text-subtle uppercase">Exercise path</h4>
            <ol className="flex flex-wrap gap-2">
              {analystLab.curriculum.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-1.5 rounded-md border border-line bg-navy-950/60 px-2.5 py-1 text-xs text-muted"
                >
                  <span className="font-mono text-coral" aria-hidden="true">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Analyst Lab technologies">
            {analystLab.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
          <p className="mt-auto pt-6 text-xs leading-relaxed text-subtle">{analystLab.note}</p>
        </article>

        <article
          aria-labelledby="greenwich-title"
          className="reveal flex flex-col rounded-2xl border border-line bg-navy-900/80 p-6 transition-colors hover:border-line-strong sm:p-8"
        >
          <span className="self-start rounded-full bg-coral/15 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-coral-soft uppercase">
            Volunteer mentoring
          </span>
          <h3 id="greenwich-title" className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {greenwich.title}
          </h3>
          <p className="mt-1.5 font-mono text-xs text-subtle">{greenwich.context}</p>
          <p className="mt-4 leading-relaxed text-muted">{greenwich.summary}</p>
          <Bullets items={greenwich.points} />
          <p className="mt-auto pt-6 text-xs leading-relaxed text-subtle">{greenwich.note}</p>
        </article>
      </div>
    </Section>
  );
}
