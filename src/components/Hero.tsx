import Image from "next/image";
import { highlights, profile } from "@/content/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-coral/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pt-24 lg:pb-20">
        <div className="fade-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-navy-900/70 px-3 py-1 font-mono text-xs tracking-wide text-muted">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />
            {profile.role}
          </p>

          <h1 id="hero-heading" className="text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl text-2xl leading-snug font-medium tracking-tight text-coral-soft sm:text-[1.9rem]">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-subtle">
            <MapPinIcon />
            {profile.location}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href={profile.cv}
              download
              className="col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-coral px-5 py-3 text-sm font-semibold text-navy-950 shadow-[0_8px_30px_-12px] shadow-coral/60 transition-colors hover:bg-coral-soft"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong bg-navy-900/60 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-coral/60"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line-strong bg-navy-900/60 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-coral/60"
            >
              <LinkedInIcon />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="fade-in relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
          <div aria-hidden="true" className="absolute -inset-3 rounded-2xl border border-coral/25" />
          <div className="relative overflow-hidden rounded-xl border border-line bg-navy-850">
            <Image
              src={profile.photo}
              alt="Portrait of Kevin Gitonga"
              width={800}
              height={800}
              preload
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 280px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative border-y border-line/80 bg-navy-900">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line/80 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse justify-end bg-navy-900 px-5 py-6 sm:px-8 sm:py-7">
              <dt className="mt-1 text-sm leading-snug text-muted">{h.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
