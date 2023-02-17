"use client";

import { useMemo, useState } from "react";
import { buildPreviewDoc } from "@/lib/buildPreview";
import type { Project } from "@/lib/data";

export default function LivePreview({ code }: { code: Project["code"] }) {
  const [key, setKey] = useState(0);
  const doc = useMemo(
    () => buildPreviewDoc(code.html, code.css, code.js),
    [code, key]
  );

  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-[12.5px] text-text-faint">Live preview</span>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="rounded-lg border border-border-hi px-3 py-1.5 text-[12px] text-text-dim transition-colors hover:border-cyan hover:text-text"
        >
          Replay
        </button>
      </div>
      <iframe
        key={key}
        title="Live preview"
        srcDoc={doc}
        sandbox="allow-scripts"
        className="h-[340px] w-full bg-bg-soft"
      />
    </div>
  );
}
