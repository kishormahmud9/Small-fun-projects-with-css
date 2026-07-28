"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/data";
import CardPreviewFrame from "./CardPreviewFrame";

const DIFF_COLORS: Record<string, string> = {
  beginner:     "bg-emerald-500/15 text-emerald-300 border-emerald-500/35",
  intermediate: "bg-blue-500/15 text-blue-300 border-blue-500/35",
  advanced:     "bg-purple-500/15 text-purple-300 border-purple-500/35",
};

const STATUS_DOT: Record<string, string> = {
  "Ready":          "bg-emerald-400",
  "Needs Repair":   "bg-amber-400",
  "Missing Assets": "bg-rose-400",
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card-appear group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.25)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Top meta row */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-5 pb-0">
        <div className="flex items-center gap-2">
          {/* Category chip */}
          <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 font-mono text-[11px] font-bold text-zinc-300">
            {project.category}
          </span>
          {/* Live status dot */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[10px] text-zinc-400">
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status] ?? "bg-emerald-400"}`} />
            {project.status}
          </span>
        </div>
        {/* Difficulty badge */}
        <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-extrabold capitalize ${DIFF_COLORS[project.difficulty] ?? DIFF_COLORS.beginner}`}>
          {project.difficulty}
        </span>
      </div>

      {/* Live Preview Thumbnail */}
      <div className="relative mx-5 mt-4 h-[196px] overflow-hidden rounded-xl border border-zinc-700/70 bg-zinc-950 shadow-inner">
        <CardPreviewFrame code={project.code} project={project} />

        {/* Hover launch overlay */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-zinc-950/82 backdrop-blur-[2px] transition-all duration-250 ${
            hovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-sky-400 px-6 py-2.5 text-xs font-black text-zinc-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:bg-sky-300 hover:scale-105 transition-all duration-150"
          >
            ▶ Launch Playground
          </Link>
          <span className="font-mono text-[10px] text-zinc-400">Full preview + code inspector</span>
        </div>

        {/* Featured ribbon */}
        {project.featured && (
          <span className="absolute top-2.5 right-2.5 z-10 rounded-full bg-amber-400/20 border border-amber-400/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-amber-300">
            ★ Featured
          </span>
        )}
        {project.isNew && (
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-emerald-400/20 border border-emerald-400/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300 animate-pulse-slow">
            NEW
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-[15px] font-extrabold font-display text-white group-hover:text-sky-300 transition-colors duration-200 leading-snug mb-1">
            {project.name}
          </h3>
          <p className="text-xs font-medium text-zinc-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* CSS concept tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.cssConcepts.slice(0, 4).map((concept) => (
            <span
              key={concept}
              className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300/80"
            >
              #{concept}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3 text-[11px] font-mono font-bold text-zinc-500 mt-auto">
          <span>⏱ {project.buildTime}</span>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sky-400 hover:text-sky-300 hover:underline inline-flex items-center gap-1 transition-colors"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}
