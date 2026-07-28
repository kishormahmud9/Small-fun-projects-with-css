import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import ResponsiveSimulator from "@/components/playground/ResponsiveSimulator";
import CodeEditorTabs from "@/components/playground/CodeEditorTabs";
import EducationalBreakdown from "@/components/playground/EducationalBreakdown";
import ProjectHeaderActions from "@/components/playground/ProjectHeaderActions";
import ProjectCard from "@/components/ProjectCard";
import BackgroundFX from "@/components/platform/BackgroundFX";
import { projects, getProject } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — CSS Playground`,
    description: project.description,
    openGraph: {
      title: `${project.name} — CSS Playground`,
      description: project.description,
    },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const DIFF_COLORS: Record<string, string> = {
    beginner:     "bg-emerald-500/15 text-emerald-300 border-emerald-500/35",
    intermediate: "bg-blue-500/15 text-blue-300 border-blue-500/35",
    advanced:     "bg-purple-500/15 text-purple-300 border-purple-500/35",
  };

  return (
    <>
      <Nav />
      <BackgroundFX />

      <main className="mx-auto max-w-[1240px] px-6 pb-32 pt-28">

        {/* ── Breadcrumb ──────────────────────────────────────── */}
        <nav className="mb-8 flex items-center gap-2 font-mono text-xs text-zinc-500">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-sky-400 transition-colors">Experiments</Link>
          <span>/</span>
          <span className="text-zinc-300 truncate max-w-[200px]">{project.name}</span>
        </nav>

        {/* ── Project Header ──────────────────────────────────── */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="space-y-4 flex-1">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs font-semibold text-zinc-300">
                {project.category}
              </span>
              <span className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold capitalize ${DIFF_COLORS[project.difficulty] ?? DIFF_COLORS.beginner}`}>
                {project.difficulty}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                ⏱ Build Time: {project.buildTime}
              </span>
              {project.featured && (
                <span className="rounded-full bg-amber-400/15 border border-amber-400/35 px-3 py-1 font-mono text-xs font-bold text-amber-300">
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {project.name}
            </h1>

            <p className="max-w-3xl text-zinc-300 text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <ProjectHeaderActions project={project} />
        </div>

        {/* ── CSS Concepts Bar ────────────────────────────────── */}
        <div className="mb-10 flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800/60 bg-zinc-900/40 px-4 py-3">
          <span className="font-mono text-xs text-zinc-500 mr-1">// CSS Concepts:</span>
          {project.cssConcepts.map((concept) => (
            <span
              key={concept}
              className="rounded-lg bg-sky-500/8 border border-sky-500/25 px-3 py-1 font-mono text-xs text-sky-300"
            >
              #{concept}
            </span>
          ))}
        </div>

        {/* ── Main Playground: Dual-panel ─────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
              // Live Preview
            </h2>
            <ResponsiveSimulator code={project.code} />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
              // Source Code
            </h2>
            <CodeEditorTabs code={project.code} project={project} />
          </div>
        </div>

        {/* ── Learning Section ────────────────────────────────── */}
        <EducationalBreakdown project={project} />

        {/* ── Related Experiments ─────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-zinc-800/60 pt-14">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="block font-mono text-xs font-bold text-sky-400 mb-1 uppercase tracking-widest">
                  // Related
                </span>
                <h2 className="font-display text-2xl font-bold text-white">
                  More in {project.category}
                </h2>
              </div>
              <Link
                href="/#projects"
                className="text-xs font-semibold text-sky-400 hover:underline font-mono"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Back link ───────────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-zinc-800/40 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 font-semibold text-sm text-zinc-300 hover:border-sky-400/60 hover:text-white transition-all"
          >
            ← Back to all {projects.length} experiments
          </Link>
        </div>
      </main>
    </>
  );
}
