"use client";

import { useState, useMemo, useEffect } from "react";
import { buildPreviewDoc } from "@/lib/buildPreview";
import type { Project } from "@/lib/data";

type Viewport = "desktop" | "tablet" | "mobile";

const VIEWPORTS: { id: Viewport; label: string; icon: string; width: string; dim: string }[] = [
  { id: "desktop",  label: "Desktop",  icon: "🖥",  width: "w-full",       dim: "1280×720" },
  { id: "tablet",   label: "Tablet",   icon: "⬛",  width: "max-w-[768px]", dim: "768×1024" },
  { id: "mobile",   label: "Mobile",   icon: "📱",  width: "max-w-[390px]", dim: "390×844" },
];

export default function ResponsiveSimulator({ code }: { code: Project["code"] }) {
  const [viewport, setViewport]       = useState<Viewport>("desktop");
  const [key, setKey]                 = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading]         = useState(true);

  const doc = useMemo(() => buildPreviewDoc(code.html, code.css, code.js), [code, key]);

  // ESC key closes fullscreen
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isFullscreen]);

  // Reset loading state when preview changes
  useEffect(() => { setLoading(true); }, [key, viewport]);

  const currentVP = VIEWPORTS.find((v) => v.id === viewport)!;

  return (
    <>
      {/* ── Main Preview Panel ───────────────────────────────── */}
      <div className="flex flex-col rounded-2xl border border-zinc-700/80 bg-zinc-900/80 backdrop-blur-xl overflow-hidden shadow-2xl h-[560px]">

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-4 py-2.5 gap-2">
          {/* macOS dots + label */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="hidden sm:block font-mono text-[11px] text-zinc-600">
              live-preview · {currentVP.dim}
            </span>
          </div>

          {/* Viewport selector pills */}
          <div className="flex items-center gap-1 rounded-xl bg-zinc-900 p-1 border border-zinc-800">
            {VIEWPORTS.map((vp) => (
              <button
                key={vp.id}
                onClick={() => setViewport(vp.id)}
                title={`${vp.label} (${vp.dim})`}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-all duration-150 ${
                  viewport === vp.id
                    ? "bg-sky-400 text-zinc-950 shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>{vp.icon}</span>
                <span className="hidden sm:inline">{vp.label}</span>
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setKey((k) => k + 1); }}
              title="Replay animation"
              className="rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-bold text-zinc-300 hover:border-sky-400/50 hover:text-white transition-all duration-150"
            >
              ↺ Replay
            </button>
            <button
              onClick={() => setIsFullscreen(true)}
              title="Open fullscreen"
              className="rounded-lg border border-sky-400/35 bg-sky-400/8 px-3 py-1.5 text-xs font-bold text-sky-300 hover:bg-sky-400 hover:text-zinc-950 hover:border-sky-400 transition-all duration-150"
            >
              ⛶ Fullscreen
            </button>
          </div>
        </div>

        {/* Viewport canvas */}
        <div className="relative flex-1 bg-[#060a10] p-4 flex items-center justify-center overflow-auto">
          {/* Loading shimmer */}
          {loading && (
            <div className="absolute inset-4 rounded-xl bg-zinc-800/40 animate-pulse z-10 pointer-events-none" />
          )}

          <div
            className={`h-full ${currentVP.width} transition-all duration-300 w-full rounded-xl overflow-hidden border border-zinc-700/60 shadow-[0_0_40px_rgba(0,0,0,0.6)]`}
          >
            <iframe
              key={key}
              title="Live Project Preview"
              srcDoc={doc}
              sandbox="allow-scripts"
              className="h-full w-full bg-zinc-950"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between border-t border-zinc-800/60 bg-zinc-950/60 px-4 py-1.5 font-mono text-[11px] text-zinc-600">
          <span>sandbox: allow-scripts</span>
          <span className={loading ? "text-amber-400" : "text-emerald-400"}>
            {loading ? "⟳ Loading…" : "● Live"}
          </span>
        </div>
      </div>

      {/* ── Fullscreen Modal ─────────────────────────────────── */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex flex-col p-4 sm:p-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-xl bg-zinc-900 p-1 border border-zinc-800">
                {VIEWPORTS.map((vp) => (
                  <button
                    key={vp.id}
                    onClick={() => setViewport(vp.id)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                      viewport === vp.id
                        ? "bg-sky-400 text-zinc-950"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {vp.icon} {vp.label}
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs text-zinc-600">// Fullscreen Live Preview</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setKey((k) => k + 1)}
                className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
              >
                ↺ Replay
              </button>
              <button
                onClick={() => setIsFullscreen(false)}
                className="rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-1.5 text-xs font-bold text-white hover:bg-rose-500/80 hover:border-rose-500 transition-all"
              >
                ✕ Close (ESC)
              </button>
            </div>
          </div>

          {/* Full iframe */}
          <div
            className={`flex-1 mx-auto w-full ${currentVP.width} rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl transition-all duration-300`}
          >
            <iframe
              key={`fs-${key}-${viewport}`}
              title="Fullscreen Live Preview"
              srcDoc={doc}
              sandbox="allow-scripts"
              className="h-full w-full bg-zinc-950"
            />
          </div>
        </div>
      )}
    </>
  );
}
