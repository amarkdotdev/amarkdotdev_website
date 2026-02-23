"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/lib/site-data";

const trustSignals = [
  "Open Source",
  "Platform Reliability",
  "Self-Hosted Tooling",
  "AI + DevOps Current",
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[80dvh] min-h-screen items-center overflow-x-hidden px-6 pb-20 pt-32 sm:min-h-[90dvh] sm:px-8 md:px-10">
      {/* Hero: strong cyan glow + violet/amber orbs – clearly visible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[56rem] -translate-x-1/2 rounded-full bg-cyan-400/25 blur-[120px]" />
        <div className="absolute -top-20 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan-300/18 blur-[100px]" />
        <div className="absolute right-[10%] top-[20%] h-[24rem] w-[32rem] rounded-full bg-violet-500/22 blur-[100px]" />
        <div className="absolute bottom-[15%] left-[15%] h-[20rem] w-[28rem] rounded-full bg-amber-400/15 blur-[90px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }
          className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-amber-300"
        >
          {siteContent.name} · {siteContent.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }
          }
          className="max-w-5xl break-words text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl md:leading-tight lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-teal-300 bg-clip-text text-transparent">
            {siteContent.headline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
          }
          className="mt-7 max-w-2xl break-words text-pretty text-base leading-7 text-zinc-300 sm:text-lg sm:leading-[1.65] md:text-xl md:leading-8"
        >
          {siteContent.subheadline}
        </motion.p>

        {/* Trust signals: solid accent fills / strong borders */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
          }
          className="mt-8 flex flex-wrap gap-3"
        >
          {trustSignals.map((signal, i) => (
            <span
              key={signal}
              className={`rounded-full border-2 px-4 py-1.5 text-xs font-medium tracking-[0.1em] transition ${
                i % 3 === 0
                  ? "border-cyan-400 bg-cyan-500/25 text-cyan-100 hover:bg-cyan-500/35"
                  : i % 3 === 1
                    ? "border-violet-400 bg-violet-500/25 text-violet-100 hover:bg-violet-500/35"
                    : "border-teal-400 bg-teal-500/25 text-teal-100 hover:bg-teal-500/35"
              }`}
            >
              {signal}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }
          }
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-300 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-cyan-300 active:shadow-glow-soft"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border-2 border-violet-400 bg-violet-500/20 px-6 py-3 text-sm font-medium text-violet-100 transition hover:border-violet-300 hover:bg-violet-500/30 hover:shadow-glow-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-violet-500/35"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
