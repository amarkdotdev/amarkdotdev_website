"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function BackgroundEffects() {
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(
    typeof window === "undefined" ? 0 : window.innerWidth * 0.5 - 192
  );
  const rawY = useMotionValue(
    typeof window === "undefined" ? 0 : window.innerHeight * 0.2 - 192
  );

  const x = useSpring(rawX, { stiffness: 45, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 45, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const updatePointer = (event: MouseEvent) => {
      rawX.set(event.clientX - 192);
      rawY.set(event.clientY - 192);
    };

    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, [prefersReducedMotion, rawX, rawY]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#161a24_0%,#0b0b0f_50%,#09090c_100%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_20%,transparent_80%)]" />

      {/* Mouse-tracking cyan blob */}
      <motion.div
        className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.13] blur-[70px]"
        style={prefersReducedMotion ? undefined : { x, y }}
      />

      {/* Static ambient top-right glow */}
      <div className="absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-cyan-500/[0.05] blur-[90px]" />

      {/* Static ambient bottom-left accent */}
      <div className="absolute -bottom-24 -left-24 h-[30rem] w-[30rem] rounded-full bg-indigo-500/[0.04] blur-[80px]" />

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
