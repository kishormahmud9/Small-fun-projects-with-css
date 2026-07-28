"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/lib/data";
import { buildFullDoc } from "@/lib/buildPreview";

type Tab = "html" | "css" | "js";

// ── Minimal syntax highlighter ───────────────────────────────
function highlight(code: string, lang: Tab): string {
  if (lang === "css") {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, (m) => `<span class="token-comment">${esc(m)}</span>`)
      .replace(/([.#]?[\w-]+)\s*\{/g, (_, sel) => `<span class="token-selector">${esc(sel)}</span> {`)
      .replace(/([\w-]+)\s*:/g, (_, prop) => `<span class="token-property">${esc(prop)}</span>:`)
      .replace(/:\s*([^;{}\n]+)/g, (_, val) => `: <span class="token-value">${esc(val)}</span>`);
  }
  if (lang === "html") {
    return code
      .replace(/(&lt;\/?)([\w-]+)/g, (_, slash, tag) => `${slash}<span class="token-tag">${esc(tag)}</span>`)
      .replace(/([\w-]+)=/g, (_, attr) => `<span class="token-attr">${esc(attr)}</span>=`)
      .replace(/("[^"]*")/g, (m) => `<span class="token-string">${m}</span>`)
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, (m) => `<span class="token-comment">${m}</span>`);
  }
  if (lang === "js") {
    return code
      .replace(/(\/\/[^\n]*)/g, (m) => `<span class="token-comment">${esc(m)}</span>`)
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this|import|export|from|default|async|await)\b/g,
        (m) => `<span style="color:#c084fc">${m}</span>`)
      .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, (m) => `<span class="token-string">${m}</span>`)
      .replace(/\b(\d+\.?\d*)\b/g, (m) => `<span class="token-number">${m}</span>`);
  }
  return esc(code);
}

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeForAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function CodeEditorTabs({ code, project }: { code: Project["code"]; project: Project }) {
  const [activeTab, setActiveTab] = useState<Tab>("css");
  const [copied, setCopied] = useState(false);

  const currentCode =
    activeTab === "html" ? code.html :
    activeTab === "css"  ? code.css  :
    code.js || "// No JavaScript required for this project.";

  const lines = currentCode.split("\n");

  const highlightedLines = useMemo(() => {
    return lines.map((line) => highlight(line, activeTab));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, currentCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const fullHtml = buildFullDoc(code.html, code.css, code.js, project.name);
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${project.slug}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOpenCodePen = () => {
    const data = {
      title: project.name,
      description: project.description,
      html: code.html,
      css: code.css,
      js: code.js || "",
    };
    const form = document.createElement("form");
    form.action = "https://codepen.io/pen/define";
    form.method = "POST";
    form.target = "_blank";
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "data";
    input.value = JSON.stringify(data);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const tabs: { id: Tab; label: string; color: string; activeClass: string }[] = [
    { id: "html", label: "HTML", color: "text-orange-400", activeClass: "bg-orange-500/15 text-orange-400 border border-orange-500/40" },
    { id: "css",  label: "CSS",  color: "text-sky-400",    activeClass: "bg-sky-500/15 text-sky-400 border border-sky-500/40" },
    ...(code.js ? [{ id: "js" as Tab, label: "JS", color: "text-yellow-400", activeClass: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/40" }] : []),
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col h-[560px]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#0a0e1a] px-4 py-2.5 gap-2">
        {/* macOS-style dots */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          {/* Language Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                  activeTab === tab.id ? tab.activeClass : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
              copied
                ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-400"
                : "border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500 hover:text-white"
            }`}
          >
            {copied ? "✓ Copied!" : `Copy ${activeTab.toUpperCase()}`}
          </button>
          <button
            onClick={handleOpenCodePen}
            className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-purple-400 hover:text-purple-300 transition-all"
          >
            CodePen ↗
          </button>
          <button
            onClick={handleDownload}
            className="rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-400 hover:bg-sky-500 hover:text-slate-950 transition-all"
          >
            ↓ Download
          </button>
        </div>
      </div>

      {/* Code Area — with line numbers and syntax colors */}
      <div className="flex-1 overflow-auto bg-[#080d1a] font-mono text-xs leading-6">
        <table className="min-w-full border-collapse">
          <tbody>
            {highlightedLines.map((line, idx) => (
              <tr key={idx} className="group hover:bg-sky-400/5 transition-colors">
                <td className="w-12 select-none pr-4 text-right text-slate-700 group-hover:text-slate-500 border-r border-slate-800/50 py-0 pl-3 font-mono tabular-nums">
                  {idx + 1}
                </td>
                <td
                  className="pl-5 pr-4 whitespace-pre text-slate-300 py-0"
                  dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#0a0e1a] px-4 py-1.5 font-mono text-[11px] text-slate-600">
        <span>{lines.length} lines &nbsp;·&nbsp; {currentCode.length} chars</span>
        <span className="text-slate-700">{activeTab.toUpperCase()} · CSS Playground</span>
      </div>
    </div>
  );
}
