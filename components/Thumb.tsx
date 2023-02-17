export default function Thumb({ variant }: { variant: string }) {
  const base =
    "relative flex h-full w-full items-center justify-center overflow-hidden";

  switch (variant) {
    case "thumb-glass":
      return (
        <div
          className={base}
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #5b8cff 0%, transparent 60%), radial-gradient(circle at 70% 70%, #b06bff 0%, transparent 60%), #0d1220",
          }}
        >
          <div className="h-[60%] w-[70%] rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur" />
        </div>
      );
    case "thumb-neon":
      return (
        <div className={base} style={{ background: "#0d1220" }}>
          <div className="animate-pulse rounded-full bg-grad-1 px-6 py-3 text-xs font-semibold text-white shadow-[0_0_30px_-4px_#5b8cff]">
            Get Started
          </div>
        </div>
      );
    case "thumb-ring":
      return (
        <div
          className={base}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(91,140,255,.35), transparent 70%), #0d1220",
          }}
        >
          <div className="h-14 w-14 animate-spin rounded-full border-[3px] border-transparent border-t-cyan border-r-purple" />
        </div>
      );
    case "thumb-tilt":
      return (
        <div className={base} style={{ background: "#0d1220" }}>
          <div
            className="h-[55%] w-[65%] rounded-2xl bg-grad-3"
            style={{
              transform: "perspective(600px) rotateX(18deg) rotateY(-16deg)",
              boxShadow: "0 30px 40px -20px rgba(0,0,0,.6)",
            }}
          />
        </div>
      );
    case "thumb-flip":
      return (
        <div className={base} style={{ background: "#0d1220" }}>
          <div className="flex h-[50%] w-[60%] items-center justify-center rounded-2xl bg-grad-2 text-xs font-semibold text-white">
            Flip
          </div>
        </div>
      );
    case "thumb-toggle":
      return (
        <div
          className={base}
          style={{ background: "#0d1220", gap: 8 }}
        >
          <div className="relative h-[30px] w-[52px] rounded-full bg-grad-1">
            <div className="absolute right-[3px] top-[3px] h-6 w-6 rounded-full bg-white" />
          </div>
        </div>
      );
    case "thumb-shimmer":
      return (
        <div
          className={base}
          style={{
            background:
              "linear-gradient(120deg,#0d1220 30%,#1a2036 50%,#0d1220 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmerBg 2.2s linear infinite",
          }}
        />
      );
    case "thumb-ripple":
      return (
        <div className={base} style={{ background: "#0d1220" }}>
          <div className="relative flex h-11 w-32 items-center justify-center rounded-xl bg-[#1a2140] text-xs font-semibold text-white">
            Click me
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-blue/60" />
          </div>
        </div>
      );
    case "thumb-border":
      return (
        <div className={base} style={{ background: "#0d1220" }}>
          <div className="h-[55%] w-[65%] rounded-2xl border-2 border-transparent bg-[#121729] bg-clip-padding p-4 [border-image:linear-gradient(135deg,#5b8cff,#b06bff,#ff5da2)_1]">
            <div className="text-[11px] text-text-dim">Glow Border</div>
          </div>
        </div>
      );
    default:
      return (
        <div
          className={base}
          style={{
            background:
              "conic-gradient(from 180deg, #5b8cff, #b06bff, #ff5da2, #31d8e0, #5b8cff)",
          }}
        />
      );
  }
}
