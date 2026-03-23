"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TerminalPreview } from "@/components/terminal-preview";
import { navigateToSection } from "@/lib/navigate";
import { siteContent } from "@/lib/site-data";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const base = prefersReducedMotion
    ? { duration: 0 }
    : { ease, duration: 0.5 };

  return (
    <section className="relative flex min-h-[80dvh] min-h-screen items-center overflow-x-hidden px-6 pb-20 pt-32 sm:px-8 md:px-10">

<div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_460px]">

          {/* ── Left: text content ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={base}
              className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/85"
            >
              {siteContent.name} · {siteContent.role}
            </motion.p>

            {/* h1 is NOT animated so browser can register LCP immediately */}
            <h1 className="max-w-2xl break-words text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl sm:leading-[1.15] md:text-5xl md:leading-tight lg:text-6xl">
              <span className="bg-gradient-to-b from-zinc-50 to-zinc-300/90 bg-clip-text text-transparent">
                I build infrastructure{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-200 bg-clip-text text-transparent">
                that doesn&apos;t break.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { ...base, delay: 0.1 }}
              className="mt-7 max-w-xl break-words text-pretty text-base leading-7 text-zinc-300 sm:text-lg sm:leading-[1.65]"
            >
              {siteContent.subheadline}
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { ...base, duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {siteContent.heroTrustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs tracking-[0.1em] text-zinc-300"
                >
                  {signal}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { ...base, duration: 0.45, delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigateToSection("#contact", "/contact"); }}
                className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-300/95 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-200 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-cyan-200 active:shadow-glow-soft"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                onClick={(e) => { e.preventDefault(); navigateToSection("#projects", "/projects"); }}
                className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-cyan-100/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/12 active:border-cyan-100/30"
              >
                View Projects
              </a>
              <a
                href={siteContent.linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-cyan-100/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/12 active:border-cyan-100/30"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── Right: terminal (desktop only) ── */}
          <div className="hidden lg:block">
            <TerminalPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
