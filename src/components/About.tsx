import { about } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From founding engineer to Head of Data">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <ul className="space-y-4" aria-label="What I bring">
          {about.pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="reveal rounded-xl border border-line bg-navy-900/70 p-5 transition-colors hover:border-line-strong"
            >
              <p className="flex items-baseline gap-3 font-semibold text-ink">
                <span className="font-mono text-xs text-coral" aria-hidden="true">
                  0{i + 1}
                </span>
                {pillar.title}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
