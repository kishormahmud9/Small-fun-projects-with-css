"use client";

import { useMemo, useState, useRef } from "react";
import { projects, filterTags } from "@/lib/data";
import ProjectCard from "./ProjectCard";

type Sort = "popular" | "newest" | "oldest";
const DIFFICULTY_OPTIONS = ["All", "Beginner", "Intermediate", "Advanced"];
const PAGE_SIZE = 9;

export default function ProjectsExplorer() {
  const [query, setQuery]                   = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [sort, setSort]                     = useState<Sort>("popular");
  const [visible, setVisible]               = useState(PAGE_SIZE);
  const inputRef                            = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    let list = projects.slice();

    if (activeCategory !== "All")
      list = list.filter((p) => p.category === activeCategory);

    if (activeDifficulty !== "All")
      list = list.filter((p) => p.difficulty === activeDifficulty.toLowerCase());

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.cssConcepts.some((c) => c.toLowerCase().includes(q))
      );
    }

    if (sort === "newest")  list.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === "oldest")  list.sort((a, b) => a.date.localeCompare(b.date));
    if (sort === "popular") list.sort((a, b) => b.popularity - a.popularity);

    return list;
  }, [query, activeCategory, activeDifficulty, sort]);

  const hasFilters = query || activeCategory !== "All" || activeDifficulty !== "All";

  const clearAll = () => {
    setQuery("");
    setActiveCategory("All");
    setActiveDifficulty("All");
    setSort("popular");
    setVisible(PAGE_SIZE);
    inputRef.current?.focus();
  };

  return (
    <div>
      {/* ── Filter Control Panel ─────────────────────────────── */}
      <div className="sticky top-[72px] z-40 mb-8 rounded-2xl border border-white/10 bg-[#0d1117]/95 p-4 backdrop-blur-2xl shadow-2xl">
        {/* Search row */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search input */}
          <div className="flex flex-1 w-full items-center gap-3 rounded-xl border border-zinc-700/80 bg-zinc-950 px-4 py-2.5 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20 transition-all">
            <svg className="h-4 w-4 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_SIZE); }}
              placeholder="Search by name, category, or CSS property…"
              className="w-full bg-transparent text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none"
              aria-label="Search experiments"
            />
            {query && (
              <button
                onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                className="text-xs text-zinc-400 hover:text-white transition-colors font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort & difficulty controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={activeDifficulty}
              onChange={(e) => { setActiveDifficulty(e.target.value); setVisible(PAGE_SIZE); }}
              className="flex-1 sm:flex-none rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs font-bold text-zinc-200 focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
            >
              {DIFFICULTY_OPTIONS.map((d) => (
                <option key={d} value={d}>
                  {d === "All" ? "All Difficulties" : d}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="flex-1 sm:flex-none rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs font-bold text-zinc-200 focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => { setActiveCategory(tag); setVisible(PAGE_SIZE); }}
              className={`rounded-full px-4 py-1.5 font-mono text-[11px] font-bold transition-all duration-150 ${
                activeCategory === tag
                  ? "bg-sky-400 text-zinc-950 shadow-[0_0_15px_rgba(56,189,248,0.45)]"
                  : "border border-zinc-700 bg-zinc-950/80 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
          {/* Clear all filters */}
          {hasFilters && (
            <button
              onClick={clearAll}
              className="rounded-full border border-rose-500/50 bg-rose-500/10 px-3.5 py-1.5 font-mono text-[11px] font-bold text-rose-400 hover:bg-rose-500/20 transition-all duration-150"
            >
              ✕ Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ── Result count row ─────────────────────────────────── */}
      <div className="mb-6 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>
          Showing{" "}
          <strong className="text-sky-400 font-bold">{Math.min(visible, filtered.length)}</strong>
          {" "}of{" "}
          <strong className="text-white font-bold">{filtered.length}</strong>
          {" "}experiments
          {hasFilters && <span className="text-zinc-600"> (filtered)</span>}
        </span>
        <span className="hidden sm:block text-zinc-600">Press Ctrl+K for spotlight search</span>
      </div>

      {/* ── Projects Grid ─────────────────────────────────────── */}
      <div
        key={`${activeCategory}-${activeDifficulty}-${sort}-${query}`}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children"
      >
        {filtered.slice(0, visible).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* ── Empty state ───────────────────────────────────────── */}
      {filtered.length === 0 && (
        <div className="animate-fade-up py-20 text-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 space-y-4">
          <span className="text-5xl block">🔍</span>
          <h3 className="text-lg font-bold text-white">No experiments found</h3>
          <p className="text-xs text-zinc-500 max-w-xs mx-auto">
            Try a different search term, or{" "}
            <button onClick={clearAll} className="text-sky-400 underline">clear all filters</button>.
          </p>
        </div>
      )}

      {/* ── Load More ─────────────────────────────────────────── */}
      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="group rounded-full border-2 border-sky-400/60 bg-sky-400/8 px-8 py-3.5 font-bold text-sm text-sky-300 hover:bg-sky-400 hover:text-zinc-950 hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          >
            Load {Math.min(PAGE_SIZE, filtered.length - visible)} More Experiments
            <span className="ml-1.5 text-zinc-400 group-hover:text-zinc-800 transition-colors">
              ({filtered.length - visible} remaining)
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
