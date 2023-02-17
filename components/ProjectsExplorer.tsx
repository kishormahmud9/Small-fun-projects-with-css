"use client";

import { useMemo, useState } from "react";
import { projects, filterTags } from "@/lib/data";
import ProjectCard from "./ProjectCard";

type Sort = "newest" | "oldest" | "popular";

export default function ProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<Sort>("newest");
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    let list = projects.slice();
    if (filter !== "All") {
      list = list.filter(
        (p) =>
          p.category === filter ||
          (filter === "Hover Effects" && p.name.toLowerCase().includes("hover"))
      );
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (sort === "newest") list.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === "oldest") list.sort((a, b) => a.date.localeCompare(b.date));
    if (sort === "popular") list.sort((a, b) => b.popularity - a.popularity);
    return list;
  }, [query, filter, sort]);

  return (
    <div>
      <div className="glass sticky top-[86px] z-40 mb-11 rounded-lg p-5">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2.5 rounded-full border border-border bg-bg-soft px-4 py-2.5 focus-within:border-blue focus-within:shadow-[0_0_0_4px_rgba(91,140,255,0.15)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-text-faint">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search experiments — glassmorphism, buttons, loaders…"
              className="w-full bg-transparent text-[14.5px] text-text placeholder:text-text-faint focus:outline-none"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-border bg-bg-soft px-3.5 py-2.5 text-[13px] text-text-dim"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`chip ${filter === tag ? "chip-active" : ""}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-[14px] text-text-dim">
        Showing {Math.min(visible, filtered.length)} of {filtered.length} projects
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, visible).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-11 flex justify-center">
          <button onClick={() => setVisible((v) => v + 6)} className="btn btn-secondary glass">
            Load more experiments
          </button>
        </div>
      )}
    </div>
  );
}
