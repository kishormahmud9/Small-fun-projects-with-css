import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Thumb from "@/components/Thumb";
import CodeTabs from "@/components/CodeTabs";
import LivePreview from "@/components/LivePreview";
import { projects, getProject } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — CSS Lab`,
    description: project.description,
  };
}

const diffStyles: Record<string, string> = {
  beginner: "bg-cyan/15 text-cyan",
  intermediate: "bg-blue/15 text-blue",
  advanced: "bg-pink/15 text-pink",
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[980px] px-6 pb-28 pt-32">
        <Link href="/#projects" className="mb-6 inline-flex items-center gap-2 text-[13.5px] text-text-dim hover:text-text">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
          Back to all projects
        </Link>

        <div className="glass mb-8 aspect-[16/7] overflow-hidden rounded-lg">
          <Thumb variant={project.thumbClass} />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[11.5px] text-text-faint">
            {project.category}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${diffStyles[project.difficulty]}`}>
            {project.difficulty}
          </span>
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-border px-2.5 py-1 font-mono text-[11.5px] text-text-faint">
              {t}
            </span>
          ))}
        </div>

        <h1 className="mb-4 font-display text-[2.2rem] font-bold">{project.name}</h1>
        <p className="mb-10 max-w-[640px] text-[15px] leading-relaxed text-text-dim">
          {project.longDescription}
        </p>

        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LivePreview code={project.code} />
          <CodeTabs code={project.code} />
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="mb-5 font-display text-xl font-bold">More in {project.category}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="glass block overflow-hidden rounded-md transition-transform hover:-translate-y-1"
                >
                  <div className="aspect-[16/10]">
                    <Thumb variant={p.thumbClass} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[14.5px] font-semibold">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
