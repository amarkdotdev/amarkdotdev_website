"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function BackgroundEffects() {
  const [pointer, setPointer] = useState(() => ({
    x: typeof window === "undefined" ? 0 : window.innerWidth * 0.5 - 192,
    y: typeof window === "undefined" ? 0 : window.innerHeight * 0.2 - 192,
  }));
  const frameRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const updatePointer = (event: MouseEvent) => {
      const x = event.clientX - 192;
      const y = event.clientY - 192;
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        setPointer({ x, y });
      });
    };

    window.addEventListener("pointermove", updatePointer);
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#161a24_0%,#0b0b0f_50%,#09090c_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />

      <motion.div
        className="absolute left-0 top-0 h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-[90px]"
        animate={{
          x: pointer.x,
          y: pointer.y,
        }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 45, damping: 22, mass: 0.6 }
        }
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
