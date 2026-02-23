import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudy } from "@/lib/site-data";

export function ProofSection() {
  return (
    <section
      id="proof"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-cyan-500/[0.03] to-transparent px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title="One outcome, real impact."
            description="Representative example of how I approach platform reliability."
            accent="teal"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md transition hover:border-site-teal/20 hover:shadow-card-glow sm:p-8">
            <h3 className="text-lg font-semibold text-zinc-100">{caseStudy.title}</h3>
            <dl className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-site-teal/85">Problem</dt>
                <dd className="mt-2 text-pretty text-sm leading-7 text-zinc-300">{caseStudy.problem}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-site-teal/85">Solution</dt>
                <dd className="mt-2 text-pretty text-sm leading-7 text-zinc-300">{caseStudy.solution}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-site-teal/85">Outcome</dt>
                <dd className="mt-2 text-pretty text-sm leading-7 text-zinc-300">{caseStudy.outcome}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
