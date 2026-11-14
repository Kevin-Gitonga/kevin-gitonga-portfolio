import Image from "next/image";
import { caseStudies, finflow, type CaseStudy } from "@/content/site";
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon } from "./icons";
import { Section, Tag } from "./Section";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-coral-soft underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRightIcon />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function ArchitectureFlow() {
  return (
    <figure className="mt-10">
      <figcaption className="mb-4 font-mono text-xs tracking-[0.14em] text-subtle uppercase">
        Architecture · data flow
      </figcaption>
      <ol className="grid gap-3 lg:grid-cols-6 lg:gap-4">
        {finflow.architecture.map((node, i) => {
          const last = i === finflow.architecture.length - 1;
          return (
            <li key={node.label} className="relative">
              <div className="flex h-full gap-4 rounded-lg border border-line bg-navy-950/70 p-4 lg:flex-col lg:gap-2">
                <span className="font-mono text-xs text-coral" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-mono text-sm font-medium text-ink">{node.label}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{node.detail}</p>
                </div>
              </div>
              {!last ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-8 z-10 grid size-5 rotate-90 place-items-center rounded-full border border-line bg-navy-850 text-coral lg:top-1/2 lg:-right-[13px] lg:bottom-auto lg:left-auto lg:-translate-y-1/2 lg:rotate-0"
                >
                  <ArrowRightIcon width={12} height={12} />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function FinFlowFeature() {
  return (
    <article
      aria-labelledby="finflow-title"
      className="reveal overflow-hidden rounded-2xl border border-line bg-navy-900/80"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-coral/15 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-coral-soft uppercase">
              Project A · Open source
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted uppercase">
              MIT licence
            </span>
          </div>
          <h3 id="finflow-title" className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {finflow.title}
          </h3>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{finflow.tagline}</p>
          <p className="mt-4 border-l-2 border-coral/60 pl-3 text-sm leading-relaxed text-subtle">
            {finflow.disclaimer}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={finflow.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-coral px-4 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-coral-soft"
            >
              <GitHubIcon width={16} height={16} />
              View repository
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <ExternalLink href={finflow.architectureDoc}>Architecture</ExternalLink>
            <ExternalLink href={finflow.adrs}>Decision records</ExternalLink>
          </div>
        </div>

        <div className="relative border-t border-line bg-navy-950/60 p-6 sm:p-10 lg:border-t-0 lg:border-l">
          <div className="overflow-hidden rounded-lg border border-line-strong shadow-2xl shadow-black/40">
            <Image
              src={finflow.image}
              alt="FinFlow Metabase dashboard showing 1,000 transactions, 857 settlement lines, 739 matched, an 87% match rate and 125 open exceptions, with charts of open exceptions by category and age."
              width={1366}
              height={543}
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-xs text-subtle">Metabase dashboard over the reporting schema (synthetic data).</p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {finflow.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end rounded-lg border border-line bg-navy-900/80 p-3.5">
                <dt className="mt-1 text-xs leading-snug text-muted">{m.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-line p-6 sm:p-10">
        <h4 className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">Implemented capabilities</h4>
        <ul className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {finflow.capabilities.map((c) => (
            <li key={c.title}>
              <p className="font-semibold text-ink">{c.title}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{c.body}</p>
            </li>
          ))}
        </ul>

        <ArchitectureFlow />

        <div className="mt-10">
          <h4 className="mb-3 font-mono text-xs tracking-[0.14em] text-subtle uppercase">Technical stack</h4>
          <ul className="flex flex-wrap gap-2" aria-label="FinFlow technical stack">
            {finflow.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function CaseStudyCard({ study, letter }: { study: CaseStudy; letter: string }) {
  const titleId = `${study.id}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className="reveal flex flex-col rounded-2xl border border-line bg-navy-900/80 p-6 transition-colors hover:border-line-strong sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-coral/15 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-coral-soft uppercase">
          Project {letter} · Professional case study
        </span>
      </div>
      <h3 id={titleId} className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {study.title}
      </h3>
      <p className="mt-1.5 font-mono text-xs text-subtle">{study.context}</p>
      <p className="mt-4 leading-relaxed text-muted">{study.summary}</p>

      <ul className="mt-5 space-y-3">
        {study.points.map((p) => (
          <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-coral/80" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-coral/30 bg-coral/[0.06] p-4">
        <p className="text-lg font-semibold tracking-tight text-coral-soft">{study.outcome.value}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{study.outcome.label}</p>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${study.title} technologies`}>
        {study.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>

      <p className="mt-auto pt-6 text-xs leading-relaxed text-subtle">
        Anonymised summary of professional work. No public repository; confidential details and proprietary
        designs are omitted.
      </p>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Platforms built for correctness, scale and auditability"
      intro="One open-source project you can inspect line by line, and two anonymised case studies from production work."
      className="border-t border-line/60"
    >
      <FinFlowFeature />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} letter={String.fromCharCode(66 + i)} />
        ))}
      </div>
    </Section>
  );
}
