"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-16 pb-24 sm:px-8 sm:py-20 sm:pb-28 md:px-10 md:py-24 md:pb-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={siteContent.contactStatement}
            description="If you're building a platform team or hiring for DevOps and want someone who can own infra, automation, and security end-to-end — reach out."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md transition hover:border-white/[0.12] md:p-8">
            <p className="text-sm leading-7 text-zinc-300">
              I respond quickly. Email me or connect on LinkedIn — happy to jump on a call.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${siteContent.email}`}
                className="inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-full bg-cyan-300/95 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-200 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-cyan-200"
              >
                Email me
              </a>
              <a
                href={siteContent.linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-cyan-100/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/12"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-zinc-500">{siteContent.email}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
