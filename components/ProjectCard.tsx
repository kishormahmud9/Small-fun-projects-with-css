import Link from "next/link";
import Thumb from "./Thumb";
import type { Project } from "@/lib/data";

const diffStyles: Record<string, string> = {
  beginner: "bg-cyan/15 text-cyan",
  intermediate: "bg-blue/15 text-blue",
  advanced: "bg-pink/15 text-pink",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group glass relative block overflow-hidden rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:border-border-hi"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute left-3 top-3 z-10 flex gap-1.5">
          {project.isNew && (
            <span className="rounded-full border border-cyan/30 bg-cyan/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan">
              New
            </span>
          )}
          {project.trending && (
            <span className="rounded-full border border-pink/30 bg-pink/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-pink">
              Trending
            </span>
          )}
          {project.featured && (
            <span className="rounded-full border border-purple/30 bg-purple/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-purple">
              Featured
            </span>
          )}
        </div>
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.06]">
          <Thumb variant={project.thumbClass} />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[11.5px] text-cyan">{project.category}</span>
          <span className={`rounded-full px-2 py-1 text-[10.5px] font-semibold ${diffStyles[project.difficulty]}`}>
            {project.difficulty}
          </span>
        </div>
        <h3 className="mb-1.5 text-[17px] font-semibold">{project.name}</h3>
        <p className="mb-3.5 min-h-[40px] text-[13.5px] leading-relaxed text-text-dim">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-text-faint">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="pill-btn pill-btn-solid">Live Demo</span>
          <span className="pill-btn">Source</span>
        </div>
      </div>
    </Link>
  );
}
