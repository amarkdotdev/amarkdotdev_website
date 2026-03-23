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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#161a24_0%,#0b0b0f_50%,#09090c_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />

      <motion.div
        className="absolute left-0 top-0 h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-[60px]"
        style={prefersReducedMotion ? undefined : { x, y }}
      />

      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(139, 244, 255, 0.7), transparent), radial-gradient(2px 2px at 80% 40%, rgba(139, 244, 255, 0.55), transparent), radial-gradient(2px 2px at 40% 70%, rgba(139, 244, 255, 0.5), transparent)",
        }}
      />
    </div>
  );
}
