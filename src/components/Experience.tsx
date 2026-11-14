import { earlierExperience, experience } from "@/content/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Career timeline"
      className="border-t border-line/60 bg-navy-900/40"
    >
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-line md:before:left-[calc(16rem+7px)]">
        {experience.map((role) => (
          <li key={role.company} className="reveal relative grid gap-4 pl-9 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0">
            <div className="md:pr-10 md:text-right">
              <p className="font-mono text-sm text-coral-soft">{role.period}</p>
              <p className="mt-1 text-xs tracking-wide text-subtle uppercase">{role.focus}</p>
            </div>

            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-coral bg-navy-950 md:left-[16rem]"
            />

            <article
              aria-label={`${role.company}, ${role.title}`}
              className="rounded-xl border border-line bg-navy-900/80 p-6 md:ml-10 sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink">{role.company}</h3>
              {role.titles ? (
                <ul className="mt-2 flex flex-col gap-1">
                  {role.titles.map((t) => (
                    <li key={t.title} className="text-[15px] font-medium text-ink/90">
                      {t.title} <span className="font-mono text-xs text-subtle">{t.period}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1.5 text-[15px] font-medium text-ink/90">{role.title}</p>
              )}
              <ul className="mt-4 space-y-2.5">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-coral/80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}

        <li className="reveal relative grid gap-4 pl-9 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0">
          <div className="md:pr-10 md:text-right">
            <p className="font-mono text-sm text-coral-soft">2017 – 2019</p>
            <p className="mt-1 text-xs tracking-wide text-subtle uppercase">Foundations in BI</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-line-strong bg-navy-950 md:left-[16rem]"
          />
          <div className="rounded-xl border border-dashed border-line px-6 py-5 md:ml-10 sm:px-7">
            <h3 className="text-base font-semibold text-ink">Earlier experience</h3>
            <ul className="mt-2 space-y-1.5">
              {earlierExperience.map((e) => (
                <li key={e.company} className="text-[15px] text-muted">
                  <span className="text-ink/90">{e.title}</span> · {e.company}{" "}
                  <span className="font-mono text-xs text-subtle">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ol>
    </Section>
  );
}
