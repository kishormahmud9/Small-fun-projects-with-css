import { journeyMilestones } from "@/lib/journey";
import Link from "next/link";

export default function LearningJourney() {
  return (
    <section id="journey" className="py-20 border-t border-slate-800/60 relative">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 text-xs font-mono text-cyan-400 mb-3">
            // LEARNING_TIMELINE.css
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Frontend Learning Journey &amp; Milestones
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From basic HTML elements to advanced 3D transforms &amp; commercial SaaS grade micro-interactions.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {journeyMilestones.map((m, idx) => (
            <div key={m.id} className="relative pl-8 sm:pl-12 group">
              {/* Timeline marker node */}
              <div className="absolute -left-3.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0d1220] border-2 border-cyan-400 text-cyan-400 font-mono text-xs shadow-[0_0_15px_#31d8e0] group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              {/* Date / Phase badge desktop offset */}
              <div className="sm:absolute sm:-left-36 sm:top-1.5 font-mono text-xs text-cyan-400/90 mb-2 sm:mb-0 sm:w-28 sm:text-right">
                {m.period}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-1 font-mono text-xs font-semibold text-blue-400">
                    {m.level}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {m.projectsCount} Projects Completed
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {m.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {m.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {m.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      #{skill}
                    </span>
                  ))}
                  {m.highlightSlug && (
                    <Link
                      href={`/projects/${m.highlightSlug}`}
                      className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
                    >
                      View Milestone Project →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
