"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setIsVisible(false),
      prefersReducedMotion ? 250 : 950,
    );
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-site-bg"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" },
          }}
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-cyan-100/75">
            <motion.span
              className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-300"
              animate={
                prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.12, 0.8] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { repeat: Number.POSITIVE_INFINITY, duration: 1.2 }
              }
            />
            Initializing platform signal
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
