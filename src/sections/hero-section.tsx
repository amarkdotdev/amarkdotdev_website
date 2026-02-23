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
    <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-10">
      {/* Hero-specific layered radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[100px]" />
        <div className="absolute -top-20 left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[80px]" />
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
          className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/85"
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
          className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-zinc-50 to-zinc-300/90 bg-clip-text text-transparent">
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
          className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
        >
          {siteContent.subheadline}
        </motion.p>

        {/* Trust signals */}
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
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs tracking-[0.1em] text-zinc-300"
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
            href="#projects"
            className="rounded-full bg-cyan-300/95 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-200 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-cyan-100/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
