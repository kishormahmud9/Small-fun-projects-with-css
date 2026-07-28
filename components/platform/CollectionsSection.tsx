import { collections } from "@/lib/collections";
import Link from "next/link";

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-12 max-w-2xl">
          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 text-xs font-mono text-blue-400 mb-3">
            // CURATED_COLLECTIONS.css
          </span>
          <h2 className="text-3xl font-bold tracking-tight font-display text-white">
            Project Collections
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Structured packs grouped by UI component type, micro-interactions, and design concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <div
              key={col.id}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${col.gradient} p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{col.icon}</span>
                <span className="rounded-full bg-slate-900/80 border border-white/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
                  {col.count}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                {col.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {col.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400">{col.category}</span>
                <Link
                  href={`/#projects`}
                  className="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                >
                  Explore Pack →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
