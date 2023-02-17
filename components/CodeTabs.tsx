"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";

type Tab = "html" | "css" | "js";

export default function CodeTabs({ code }: { code: Project["code"] }) {
  const available: Tab[] = ["html", "css", ...(code.js ? (["js"] as Tab[]) : [])];
  const [active, setActive] = useState<Tab>("html");
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code[active] ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1">
          {available.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-lg px-3.5 py-1.5 font-mono text-[12.5px] transition-colors ${
                active === tab ? "bg-bg-soft text-cyan" : "text-text-faint hover:text-text-dim"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-lg border border-border-hi px-3 py-1.5 text-[12px] text-text-dim transition-colors hover:border-cyan hover:text-text"
        >
          {copied ? "Copied!" : "Copy code"}
        </button>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-text-dim">
        <code>{code[active]}</code>
      </pre>
    </div>
  );
}
