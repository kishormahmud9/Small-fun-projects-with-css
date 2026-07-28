"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectHeaderActions({ project }: { project: Project }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareText, setShareText] = useState("Share Project");

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("css_lab_likes") || "{}");
    const savedBookmarks = JSON.parse(localStorage.getItem("css_lab_bookmarks") || "{}");
    if (savedLikes[project.slug]) setIsLiked(true);
    if (savedBookmarks[project.slug]) setIsBookmarked(true);
  }, [project.slug]);

  const toggleLike = () => {
    const saved = JSON.parse(localStorage.getItem("css_lab_likes") || "{}");
    saved[project.slug] = !isLiked;
    localStorage.setItem("css_lab_likes", JSON.stringify(saved));
    setIsLiked(!isLiked);
  };

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("css_lab_bookmarks") || "{}");
    saved[project.slug] = !isBookmarked;
    localStorage.setItem("css_lab_bookmarks", JSON.stringify(saved));
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareText("Link Copied!");
      setTimeout(() => setShareText("Share Project"), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Like / Favorite Button */}
      <button
        onClick={toggleLike}
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
          isLiked
            ? "border-pink-500 bg-pink-500/20 text-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.4)]"
            : "border-slate-700 bg-slate-800/80 text-slate-300 hover:border-pink-400"
        }`}
      >
        <span>{isLiked ? "❤️ Liked" : "♡ Favorite"}</span>
      </button>

      {/* Bookmark */}
      <button
        onClick={toggleBookmark}
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
          isBookmarked
            ? "border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(49,216,224,0.4)]"
            : "border-slate-700 bg-slate-800/80 text-slate-300 hover:border-cyan-400"
        }`}
      >
        <span>{isBookmarked ? "🔖 Bookmarked" : "🔖 Save Bookmark"}</span>
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-blue-400 transition-colors"
      >
        🔗 {shareText}
      </button>
    </div>
  );
}
