"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const filtered = query.trim()
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.cssConcepts.some((c) => c.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : projects.slice(0, 6);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0d1220] shadow-2xl shadow-blue-500/10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <svg className="h-5 w-5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a project, category, or CSS property (e.g. Flexbox, Keyframes)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-slate-400 border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 divide-y divide-slate-800/50">
          <div className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
            {query ? `Search Results (${filtered.length})` : "Quick Navigation / Featured"}
          </div>
          {filtered.map((p) => (
            <div
              key={p.slug}
              onClick={() => {
                setIsOpen(false);
                router.push(`/projects/${p.slug}`);
              }}
              className="flex items-center justify-between group rounded-xl p-3 hover:bg-slate-800/70 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                  ⚡
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{p.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 border border-slate-700">
                  {p.category}
                </span>
                <span className="text-slate-500 group-hover:text-cyan-400 text-xs">→</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-slate-400">
              No matching CSS experiments found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-white/10 bg-slate-900/60 px-5 py-2.5 text-xs text-slate-400 font-mono">
          <span>
            Press <kbd className="text-cyan-400">↑</kbd> <kbd className="text-cyan-400">↓</kbd> to navigate
          </span>
          <span>CSS Playground Cmd+K</span>
        </div>
      </div>
    </div>
  );
}
