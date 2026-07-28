"use client";

import { useMemo, useState, useEffect } from "react";
import { buildPreviewDoc } from "@/lib/buildPreview";
import type { Project } from "@/lib/data";

interface CardPreviewFrameProps {
  code: Project["code"];
  project: Project;
}

export default function CardPreviewFrame({ code, project }: CardPreviewFrameProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded]     = useState(false);
  const doc = useMemo(() => buildPreviewDoc(code.html, code.css, code.js), [code]);

  // Reset states when code changes
  useEffect(() => {
    setHasError(false);
    setLoaded(false);
  }, [code]);

  if (hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-950 text-center p-4">
        <span className="text-3xl">⚠️</span>
        <span className="font-mono text-[11px] font-bold text-rose-400">Preview Error</span>
        <button
          onClick={() => setHasError(false)}
          className="rounded-lg bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 font-mono text-[10px] text-zinc-300 hover:text-white transition-colors mt-1"
        >
          ↺ Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      {/* Skeleton shimmer while loading */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-950">
          <div className="h-16 w-28 rounded-lg bg-zinc-800 animate-pulse" />
          <div className="h-2.5 w-20 rounded-full bg-zinc-800 animate-pulse" style={{ animationDelay: "100ms" }} />
          <div className="h-2 w-14 rounded-full bg-zinc-800/60 animate-pulse" style={{ animationDelay: "200ms" }} />
        </div>
      )}

      <iframe
        title={`Preview – ${project.name}`}
        srcDoc={doc}
        sandbox="allow-scripts"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full border-0 pointer-events-none select-none bg-zinc-950 transition-opacity duration-400 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
