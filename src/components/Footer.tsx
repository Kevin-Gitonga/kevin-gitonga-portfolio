import { profile } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-subtle sm:flex-row sm:items-center sm:px-8">
        <p>
          © 2026 {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="GitHub profile (opens in a new tab)">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="LinkedIn profile (opens in a new tab)">
            <LinkedInIcon />
          </a>
          <a href="#top" className="hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
