import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { principles } from "@/lib/site-data";

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="relative border-t border-white/[0.08] bg-gradient-section-amber px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading eyebrow="Philosophy" title="Engineering Principles" accent="amber" />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.04}>
              <p className="relative overflow-hidden rounded-3xl border border-white/[0.1] border-l-4 border-l-amber-400 bg-white/[0.06] px-5 py-4 break-words text-pretty text-base leading-[1.6] text-zinc-200 shadow-card-inner backdrop-blur-md transition hover:border-amber-400/40 hover:shadow-card-glow-amber">
                {principle}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
