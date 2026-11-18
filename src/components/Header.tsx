"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/site";
import { DownloadIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-navy-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-md bg-coral text-[13px] font-bold text-navy-950"
          >
            KG
          </span>
          <span className="text-ink transition-colors group-hover:text-coral-soft">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-md border border-coral/60 px-3.5 py-2 text-sm font-medium text-coral-soft transition-colors hover:bg-coral hover:text-navy-950"
              >
                <DownloadIcon width={16} height={16} />
                CV
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line/70 bg-navy-950 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base text-muted hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a
              href={profile.cv}
              download
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-md bg-coral px-4 py-2.5 text-sm font-semibold text-navy-950"
            >
              <DownloadIcon width={16} height={16} />
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
