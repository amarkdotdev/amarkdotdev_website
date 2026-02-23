import { Reveal } from "@/components/reveal";
import { siteContent } from "@/lib/site-data";

export function FlagshipSection() {
  return (
    <section
      id="flagship"
      className="relative border-t border-white/[0.08] bg-gradient-section-cyan px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-white/[0.1] border-l-4 border-l-cyan-400 bg-white/[0.06] p-6 shadow-card-inner backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-card-glow sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
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
                    className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-300 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                  >
                    Live site
                  </a>
                  <a
                    href={siteContent.patchpulseRepoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border-2 border-violet-400 bg-violet-500/20 px-5 py-2.5 text-sm font-medium text-violet-100 transition hover:bg-violet-500/30 hover:shadow-glow-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="shrink-0 rounded-xl border-2 border-cyan-400/60 bg-cyan-500/30 px-4 py-3 text-center">
                <p className="text-2xl font-semibold text-cyan-200">100%</p>
                <p className="text-xs uppercase tracking-wider text-zinc-400">Open Source</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
