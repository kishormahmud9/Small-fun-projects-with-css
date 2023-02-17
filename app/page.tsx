import Link from "next/link";
import Nav from "@/components/Nav";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { categories } from "@/lib/data";

const stats = [
  { num: "128", label: "Projects built" },
  { num: "14", label: "Categories covered" },
  { num: "3", label: "Years learning" },
  { num: "840", label: "GitHub stars" },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-36">
        <div className="pointer-events-none absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black 10%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black 10%, transparent 75%)",
            }}
          />
          <div className="absolute -top-32 left-[8%] h-[420px] w-[420px] animate-float-blob rounded-full bg-blue opacity-50 blur-[90px]" />
          <div className="absolute right-[6%] top-5 h-[380px] w-[380px] animate-float-blob rounded-full bg-purple opacity-50 blur-[90px] [animation-delay:-5s]" />
          <div className="absolute -bottom-24 left-[38%] h-80 w-80 animate-float-blob rounded-full bg-pink opacity-50 blur-[90px] [animation-delay:-10s]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[820px] text-center">
          <span className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_#31d8e0]" />
            128 experiments &middot; 14 categories &middot; built in the browser
          </span>
          <h1 className="mb-6 font-display text-[clamp(2.6rem,6.5vw,5rem)] font-bold leading-[1.04]">
            Creative <span className="grad-text">CSS</span> Experiments
          </h1>
          <p className="mx-auto mb-10 max-w-[600px] text-lg leading-relaxed text-text-dim">
            A curated collection of frontend practice projects, UI components,
            animations, and creative CSS experiments — click into any project
            for the full source and a live preview.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link href="#projects" className="btn btn-primary">
              Explore Projects
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-md p-6 transition-transform hover:-translate-y-1">
                <div className="font-display text-4xl font-bold">
                  <span className="grad-text">{s.num}</span>
                </div>
                <div className="mt-1.5 text-[13.5px] text-text-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-10">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[640px]">
            <span className="mb-3.5 block font-mono text-[12.5px] text-cyan">// all_projects.css</span>
            <h2 className="mb-3.5 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">
              Every experiment
            </h2>
            <p className="text-base text-text-dim">
              Search, filter, or sort — then open any card for full source
              code and a live, editable-in-spirit preview.
            </p>
          </div>
          <ProjectsExplorer />
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[640px]">
            <span className="mb-3.5 block font-mono text-[12.5px] text-cyan">// categories</span>
            <h2 className="mb-3.5 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">
              Browse by category
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((c) => (
              <div key={c.name} className="glass flex flex-col gap-3.5 rounded-md p-6 transition-transform hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-grad-1 text-xl">
                  {c.icon}
                </div>
                <h4 className="text-[15.5px] font-semibold">{c.name}</h4>
                <div className="text-[12.5px] text-text-faint">{c.count} projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="glass relative overflow-hidden rounded-[32px] px-10 py-20 text-center">
            <div className="absolute inset-0 bg-grad-1 opacity-[0.15]" />
            <h2 className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold">
              Explore all CSS experiments
            </h2>
            <p className="relative mb-8 text-text-dim">128 builds, all open source, all yours to take apart.</p>
            <div className="relative flex flex-wrap justify-center gap-3.5">
              <Link href="#projects" className="btn btn-primary">Browse Projects</Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-14">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 text-[13px] text-text-faint">
          <span>© 2026 CSS Lab. All rights reserved.</span>
          <span>Built with Next.js, Tailwind CSS &amp; real CSS.</span>
        </div>
      </footer>
    </>
  );
}
