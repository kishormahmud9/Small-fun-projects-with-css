"use client";

import { useEffect, useState, useRef } from "react";

export default function BackgroundFX() {
  const [mousePos, setMousePos]     = useState({ x: -9999, y: -9999 });
  const [scrollPct, setScrollPct]   = useState(0);
  const rafRef                      = useRef<number | null>(null);
  const targetRef                   = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    // Smooth-follow mouse position via rAF
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0) setScrollPct((window.scrollY / total) * 100);
    };

    let animating = true;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!animating) return;
      setMousePos((prev) => {
        const nx = lerp(prev.x, targetRef.current.x, 0.08);
        const ny = lerp(prev.y, targetRef.current.y, 0.08);
        if (Math.abs(nx - prev.x) < 0.1 && Math.abs(ny - prev.y) < 0.1) return prev;
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      animating = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* ── Scroll progress bar ─────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-[110] h-[2px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 shadow-[0_0_8px_#38bdf8] transition-all duration-100 ease-out"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* ── Mouse glow beam (smooth lerp) ───────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-20 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56,189,248,0.04), transparent 75%)`,
          transition: "background 0ms linear",
        }}
      />

      {/* ── Static background layer ─────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        {/* Grid mesh */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 85%)",
          }}
        />

        {/* Ambient blob — cyan top-left */}
        <div className="absolute -top-48 -left-24 h-[600px] w-[600px] rounded-full bg-sky-600/8 blur-[150px]" />

        {/* Ambient blob — purple mid-right */}
        <div className="absolute top-[35%] right-[-8%] h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[160px]" />

        {/* Ambient blob — blue bottom-center */}
        <div className="absolute bottom-[10%] left-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/6 blur-[180px]" />
      </div>
    </>
  );
}
