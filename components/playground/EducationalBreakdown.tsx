import type { Project } from "@/lib/data";

export default function EducationalBreakdown({ project }: { project: Project }) {
  return (
    <div className="mt-12 space-y-10 border-t border-slate-800/80 pt-10">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-sm">
          📚
        </span>
        <h2 className="text-2xl font-bold font-display text-white">
          Learning Section &amp; Engineering Breakdown
        </h2>
      </div>

      {/* 4 Cards Grid for Learning Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What You'll Learn */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-3">
          <h3 className="text-base font-bold text-cyan-300 font-display flex items-center gap-2">
            <span>💡</span> What You&apos;ll Learn
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.whatYoullLearn.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best Practices */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-3">
          <h3 className="text-base font-bold text-blue-300 font-display flex items-center gap-2">
            <span>🛡️</span> CSS Best Practices
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.bestPractices.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 font-mono">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Performance & A11y */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-3">
          <h3 className="text-base font-bold text-purple-300 font-display flex items-center gap-2">
            <span>⚡</span> Performance &amp; Accessibility Tips
          </h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p><strong className="text-white">Performance:</strong> {project.performanceTips}</p>
            <p><strong className="text-white">Accessibility:</strong> {project.accessibilityTips}</p>
            <p><strong className="text-white">Responsive:</strong> {project.responsiveTips}</p>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl space-y-3">
          <h3 className="text-base font-bold text-rose-300 font-display flex items-center gap-2">
            <span>⚠️</span> Common Pitfalls to Avoid
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.commonMistakes.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-400 font-mono">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Metadata Panel: Specs, Swatches & MDN Links */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold font-display text-white">
          Project Metadata &amp; Browser Compatibility
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-slate-400 block mb-1">Estimated Build Time</span>
            <span className="text-cyan-400 font-semibold text-sm">{project.buildTime}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Difficulty Level</span>
            <span className="text-blue-400 font-semibold text-sm capitalize">{project.difficulty}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Created Date</span>
            <span className="text-slate-200 text-sm">{project.date}</span>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Supported Browsers</span>
            <span className="text-slate-200 text-sm">{project.browserSupport.join(", ")}</span>
          </div>
        </div>

        {/* Color Palette Swatches */}
        <div>
          <span className="text-xs font-mono text-slate-400 block mb-2">Color Palette Swatches</span>
          <div className="flex flex-wrap items-center gap-3">
            {project.colorPalette.map((color) => (
              <div key={color} className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 p-2 pr-3">
                <span className="h-6 w-6 rounded-lg border border-white/20 shadow" style={{ backgroundColor: color }} />
                <span className="font-mono text-xs text-slate-300">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MDN External Reference Links */}
        <div>
          <span className="text-xs font-mono text-slate-400 block mb-2">Official Documentation &amp; MDN Links</span>
          <div className="flex flex-wrap gap-3">
            {project.mdnLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                🔗 {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
