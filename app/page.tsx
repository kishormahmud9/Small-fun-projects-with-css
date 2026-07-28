import Link from "next/link";
import Nav from "@/components/Nav";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import CollectionsSection from "@/components/platform/CollectionsSection";
import LearningJourney from "@/components/platform/LearningJourney";
import DeveloperProfile from "@/components/platform/DeveloperProfile";
import CommandPalette from "@/components/platform/CommandPalette";
import BackgroundFX from "@/components/platform/BackgroundFX";
import { categories, projects } from "@/lib/data";

const stats = [
  { num: `${projects.length}`, label: "CSS Experiments", icon: "⚡" },
  { num: "11",   label: "UI Categories",       icon: "🃏" },
  { num: "5",    label: "Learning Phases",      icon: "🎓" },
  { num: "100%", label: "Open Source Code",     icon: "🔓" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <CommandPalette />
      <BackgroundFX />

      {/* ════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-6 pb-24 pt-32">
        <div className="relative z-10 mx-auto max-w-[960px] text-center space-y-7">

          {/* Eyebrow badge */}
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/40 bg-sky-400/8 px-5 py-2 font-mono text-xs font-bold text-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
              </span>
              {projects.length} Live Experiments · Code Inspection · Built in the Browser
            </span>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
            <h1 className="font-display text-[clamp(3.2rem,8vw,6rem)] font-black leading-[1.02] tracking-[-0.03em] text-white">
              CSS{" "}
              <span className="gradient-text">Playground</span>
            </h1>
          </div>

          {/* Sub-heading */}
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <p className="mx-auto max-w-[680px] text-slate-300 text-lg sm:text-xl font-medium leading-relaxed">
              A{" "}
              <span className="text-white font-semibold">premium developer platform</span>{" "}
              showcasing every CSS experiment, animation, layout, component and interactive
              effect built throughout my frontend learning journey.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up flex flex-wrap items-center justify-center gap-4 pt-2" style={{ animationDelay: "240ms" }}>
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-400 px-8 py-4 font-black text-sm text-zinc-950 shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:bg-sky-300 hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
              Explore All {projects.length} Experiments →
            </Link>
            <Link
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-700 bg-zinc-900/80 px-8 py-4 font-bold text-sm text-white hover:border-sky-400/60 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Learning Journey
            </Link>
          </div>

          {/* Terminal-style code snippet */}
          <div className="animate-fade-up mx-auto max-w-sm" style={{ animationDelay: "320ms" }}>
            <div className="rounded-2xl border border-white/10 bg-[#0a0d15]/90 backdrop-blur-xl p-4 font-mono text-left shadow-2xl">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-zinc-600">css-playground.dev</span>
              </div>
              <p className="text-[12px] text-zinc-500"><span className="text-sky-400">$</span> explore --category=all</p>
              <p className="text-[12px] text-emerald-400 mt-1">✓ {projects.length} experiments ready to launch</p>
              <p className="text-[12px] text-zinc-500 mt-1"><span className="text-purple-400">→</span> Press <kbd className="rounded bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 text-sky-300 text-[10px]">Ctrl K</kbd> for spotlight</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════════════ */}
      <section className="py-6 border-y border-zinc-800/60">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="animate-fade-up group rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_8px_30px_-10px_rgba(56,189,248,0.2)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{s.icon}</span>
                  <div className="font-display text-3xl font-black text-sky-300">{s.num}</div>
                </div>
                <div className="font-mono text-[11px] font-bold text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          EXPERIMENTS EXPLORER
      ════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-10 max-w-[640px]">
            <span className="mb-2 block font-mono text-xs font-bold text-sky-400 tracking-widest uppercase">
              // All_Experiments.css
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive CSS Lab
            </h2>
            <p className="mt-2 text-zinc-400 text-base font-medium">
              Filter by category, search CSS properties, or open any card for the live playground and full code breakdown.
            </p>
          </div>
          <ProjectsExplorer />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CURATED COLLECTIONS
      ════════════════════════════════════════════════════════ */}
      <CollectionsSection />

      {/* ════════════════════════════════════════════════════════
          CATEGORIES GRID
      ════════════════════════════════════════════════════════ */}
      <section id="categories" className="py-20 border-t border-zinc-800/60">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mb-12 max-w-[640px]">
            <span className="mb-2 block font-mono text-xs font-bold text-sky-400 tracking-widest uppercase">
              // Categories_Overview.css
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
              Browse by Category
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Jump straight into the type of UI component you want to explore.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.filter((c) => c.name !== "All").map((c, i) => (
              <Link
                key={c.name}
                href={`/#projects`}
                className="animate-fade-up group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1.5 hover:border-sky-400/50 hover:bg-zinc-800/60 hover:shadow-[0_8px_25px_-10px_rgba(56,189,248,0.2)] text-center"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{c.icon}</span>
                <h4 className="text-xs font-bold text-white font-display mb-1 leading-tight">{c.name}</h4>
                <div className="font-mono text-[10px] font-semibold text-zinc-500">{c.count} exp.</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <LearningJourney />

      {/* Developer Profile */}
      <DeveloperProfile />

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-10">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-purple-600 font-mono text-xs text-zinc-950 font-black">
                {"</>"}
              </span>
              <span className="font-display text-sm font-bold text-white">
                CSS <span className="text-sky-400">Playground</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 font-mono text-xs text-zinc-600">
              <span>© 2026 CSS Playground · All experiments open source</span>
              <span className="hidden sm:block text-zinc-800">·</span>
              <span>Built with Next.js · Tailwind CSS · Modern CSS3</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
