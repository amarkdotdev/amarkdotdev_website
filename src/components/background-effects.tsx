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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#14161f_0%,#0b0b0f_45%,#08080b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]" />

      {/* Bigger, more saturated orbs */}
      <motion.div
        className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/22 blur-[100px]"
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
        className="absolute right-[15%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-violet-500/18 blur-[90px]"
        aria-hidden
      />
      <div
        className="absolute bottom-[20%] left-[10%] h-[20rem] w-[20rem] rounded-full bg-amber-400/14 blur-[80px]"
        aria-hidden
      />
      <div
        className="absolute right-[30%] bottom-[30%] h-[16rem] w-[16rem] rounded-full bg-teal-400/15 blur-[70px]"
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(0, 229, 255, 0.7), transparent), radial-gradient(2px 2px at 80% 40%, rgba(0, 229, 255, 0.55), transparent), radial-gradient(2px 2px at 40% 70%, rgba(168, 85, 247, 0.5), transparent), radial-gradient(2px 2px at 70% 75%, rgba(20, 240, 208, 0.45), transparent)",
        }}
      />
    </div>
  );
}
