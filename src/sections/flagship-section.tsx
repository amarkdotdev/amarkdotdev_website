import { Reveal } from "@/components/reveal";
import { siteContent } from "@/lib/site-data";

export function FlagshipSection() {
  return (
    <section
      id="flagship"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-cyan-500/[0.07] via-site-teal/[0.03] to-transparent px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-cyan-200/20 bg-white/[0.05] p-6 shadow-card-inner backdrop-blur-md transition hover:border-cyan-200/30 hover:shadow-card-glow sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/90">
                  Flagship project
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">
                  PatchPulse
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-zinc-300 sm:text-base">
                  Open-source, self-hosted AI-powered pre-flight risk analysis for Kubernetes.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={siteContent.patchpulseUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-300/95 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                  >
                    Live site
                  </a>
                  <a
                    href={siteContent.patchpulseRepoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border border-site-violet/30 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-site-violet/45 hover:bg-site-violet/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-violet/50 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="shrink-0 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.08] px-4 py-3 text-center">
                <p className="text-2xl font-semibold text-cyan-200/90">100%</p>
                <p className="text-xs uppercase tracking-wider text-zinc-400">Open Source</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
