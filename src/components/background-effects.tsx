"use client";

// No JS animation — all motion is pure CSS keyframes (zero RAF/JS overhead).
// The drifting blob uses a CSS @keyframes animation defined in globals.css.
export function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#161a24_0%,#0b0b0f_50%,#09090c_100%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_20%,transparent_80%)]" />

      {/* Slow-drifting cyan blob — CSS-only, no JS */}
      <div
        className="absolute h-[22rem] w-[22rem] rounded-full bg-cyan-400/[0.10] blur-[56px]"
        style={{ animation: "blob-drift 18s ease-in-out infinite alternate", top: "10%", left: "20%" }}
      />

      {/* Static ambient top-right glow — reduced size */}
      <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.05] blur-[72px]" />

      {/* Accent sparkle dots */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(139, 244, 255, 0.7), transparent), radial-gradient(2px 2px at 80% 40%, rgba(139, 244, 255, 0.55), transparent), radial-gradient(2px 2px at 40% 70%, rgba(139, 244, 255, 0.5), transparent), radial-gradient(1.5px 1.5px at 65% 20%, rgba(139, 244, 255, 0.4), transparent)",
        }}
      />
    </div>
  );
}
