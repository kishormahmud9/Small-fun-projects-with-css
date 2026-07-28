export default function DeveloperProfile() {
  return (
    <section id="developer" className="py-20 border-t border-slate-800/60 relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-slate-900/90 via-[#0d1220] to-slate-950/90 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl font-mono select-none text-cyan-400">
            {"</>"}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                Frontend Developer &amp; CSS Specialist
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Passionate about Modern UI &amp; Micro-Interactions
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Welcome to my personal CSS Experiments Laboratory. I build commercial-grade UI components, smooth keyframe animations, 3D layouts, and layout algorithms completely from scratch to master modern web standards.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-cyan-400 font-display">62+</div>
                  <div className="text-xs text-slate-400 mt-1">Live Projects</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-blue-400 font-display">11</div>
                  <div className="text-xs text-slate-400 mt-1">UI Categories</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-purple-400 font-display">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Interactive Code</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-pink-400 font-display">CSS3</div>
                  <div className="text-xs text-slate-400 mt-1">Master Standard</div>
                </div>
              </div>

              {/* Action Social Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-500 text-slate-950 px-6 py-3 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(49,216,224,0.4)]"
                >
                  Follow on GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3 font-semibold text-sm text-white hover:border-slate-500 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right Tech Stack Box */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-3">
                // Current Tech Stack &amp; Skills
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Modern CSS3 &amp; Glassmorphism</span>
                    <span className="text-cyan-400">98%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Flexbox, Grid &amp; Container Queries</span>
                    <span className="text-blue-400">95%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>Keyframe Animations &amp; 3D Transforms</span>
                    <span className="text-purple-400">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-purple-400 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>TypeScript / React / Next.js</span>
                    <span className="text-pink-400">90%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-pink-400 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
