"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { expertise } from "@/lib/site-data";

export function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="expertise"
      className="relative border-t border-white/[0.06] px-6 py-24 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Depth where reliability matters."
          description="Depth in platform reliability, security, and Python automation."
        />

        <div className="space-y-4">
          {expertise.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`relative overflow-hidden rounded-3xl border shadow-card-inner backdrop-blur-md transition ${
                  isOpen
                    ? "border-cyan-100/20 bg-white/[0.06]"
                    : "border-white/[0.08] bg-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.05]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg md:px-8"
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-xl font-semibold text-zinc-100">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
                  </div>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm transition ${
                      isOpen
                        ? "border-cyan-200/30 bg-cyan-500/15 text-cyan-200"
                        : "border-white/15 bg-white/5 text-zinc-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 border-t border-white/[0.06] px-6 pb-6 pt-1 md:px-8">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/50" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
