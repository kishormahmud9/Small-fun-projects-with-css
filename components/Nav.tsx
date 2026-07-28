"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Experiments", href: "/#projects" },
  { label: "Collections", href: "/#collections" },
  { label: "Journey", href: "/#journey" },
  { label: "Developer", href: "/#developer" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("keydown", (e) => e.key === "Escape" && close());
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-3 left-0 right-0 z-[100] flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <nav
          className={`flex w-full max-w-[1140px] items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-[#0a0d15]/95 shadow-black/50"
              : "border-white/12 bg-[#121215]/88"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 font-mono text-sm text-slate-950 font-black shadow-[0_0_18px_rgba(56,189,248,0.5)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] group-hover:scale-105 transition-all duration-200">
              {"</>"}
            </span>
            <span className="font-display text-base font-bold text-white tracking-tight">
              CSS{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-black">
                Playground
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-xl px-3.5 py-2 text-xs font-semibold text-zinc-400 hover:bg-zinc-800/70 hover:text-white transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Spotlight / Cmd+K trigger */}
            <button
              id="cmd-k-trigger"
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  ctrlKey: true,
                  metaKey: true,
                  bubbles: true,
                });
                window.dispatchEvent(event);
              }}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 font-mono text-xs font-semibold text-zinc-300 hover:border-sky-400/60 hover:text-white hover:bg-zinc-700/80 transition-all duration-150 shadow"
              aria-label="Open command palette"
            >
              <span className="text-sky-400 text-sm">⌘</span>
              <span>Search</span>
              <kbd className="bg-zinc-900 border border-zinc-700 text-sky-300 px-1.5 py-0.5 rounded text-[10px] font-bold">K</kbd>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/kishormahmud9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl bg-sky-400 px-4 py-2 text-xs font-black text-zinc-950 hover:bg-sky-300 hover:-translate-y-0.5 transition-all duration-150 shadow-[0_0_15px_rgba(56,189,248,0.35)]"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub
            </a>

            {/* Mobile menu toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/80 text-zinc-300 hover:text-white hover:border-sky-400/50 transition-all md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-[calc(100%+8px)] left-4 right-4 z-[99] animate-scale-in overflow-hidden rounded-2xl border border-white/15 bg-[#0d1220]/96 shadow-2xl backdrop-blur-2xl md:hidden">
            <div className="divide-y divide-white/8 p-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800/70 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
              {/* Mobile search shortcut */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true, metaKey: true, bubbles: true });
                  window.dispatchEvent(event);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-sky-400 hover:bg-sky-500/10 transition-colors"
              >
                🔍 Search Experiments
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
