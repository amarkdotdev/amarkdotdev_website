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
      className="relative border-t border-white/[0.08] bg-gradient-section-teal px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Depth where reliability matters."
          description="Depth in platform reliability, security, and Python automation."
          accent="teal"
        />

        <div className="space-y-4">
          {expertise.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`relative overflow-hidden rounded-3xl border-l-4 border-l-teal-400 shadow-card-inner backdrop-blur-md transition ${
                  isOpen
                    ? "border border-teal-400/40 bg-white/[0.06] shadow-card-glow-teal"
                    : "border border-white/[0.1] bg-white/[0.05] hover:border-teal-400/35 hover:shadow-card-glow-teal"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-11 w-full min-w-0 items-center justify-between gap-6 px-6 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/[0.04] md:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`expertise-panel-${index}`}
                >
                  <div className="min-w-0 flex-1 break-words">
                    <p className="text-balance text-lg font-semibold leading-snug text-zinc-100 sm:text-xl">
                      {item.title}
                    </p>
                    <p className="mt-2 text-pretty text-sm leading-[1.6] text-zinc-300">{item.summary}</p>
                  </div>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition ${
                      isOpen
                        ? "border-teal-400 bg-teal-500/40 text-teal-200"
                        : "border-teal-400/40 bg-teal-500/20 text-zinc-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`expertise-panel-${index}`}
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
                            className="flex items-start gap-3 break-words text-pretty text-sm leading-[1.6] text-zinc-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
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
