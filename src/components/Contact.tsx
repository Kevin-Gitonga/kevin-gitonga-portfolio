import { profile } from "@/content/site";
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const links = [
  { href: `mailto:${profile.email}`, label: "Email", value: profile.email, Icon: MailIcon, external: false },
  { href: profile.linkedin, label: "LinkedIn", value: "in/kevin-gitonga-960418b7", Icon: LinkedInIcon, external: true },
  { href: profile.github, label: "GitHub", value: "github.com/Kevin-Gitonga", Icon: GitHubIcon, external: true },
] as const;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl border border-line bg-navy-900 p-7 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-coral/10 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-coral uppercase">Contact</p>
              <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Let&rsquo;s talk about your data platform
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                I&rsquo;m open to Head of Data, Data Engineering Manager, and Lead or Principal Data Engineer roles.
                The quickest way to reach me is by email or LinkedIn.
              </p>
              <a
                href={profile.cv}
                download
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-coral px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-coral-soft"
              >
                <DownloadIcon />
                Download CV (PDF)
              </a>
            </div>

            <ul className="space-y-3">
              {links.map(({ href, label, value, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-xl border border-line bg-navy-950/60 p-4 transition-colors hover:border-coral/60"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy-800 text-coral-soft">
                      <Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink">{label}</span>
                      <span className="block truncate font-mono text-[13px] text-muted">{value}</span>
                    </span>
                    <ArrowUpRightIcon className="text-subtle transition-colors group-hover:text-coral" />
                    {external ? <span className="sr-only">(opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
