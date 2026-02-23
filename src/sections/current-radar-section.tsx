import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { currentRadar } from "@/lib/site-data";

export function CurrentRadarSection() {
  return (
    <section id="radar" className="relative border-t border-white/[0.08] bg-gradient-section-amber px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Current Tech Radar"
            title="Up to date on where DevOps and AI are going."
            description="I continuously track and test emerging tooling so platform decisions stay modern, practical, and production-safe."
            accent="amber"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {currentRadar.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="rounded-3xl border border-white/[0.1] border-l-4 border-l-amber-400 bg-white/[0.06] p-6 shadow-card-inner backdrop-blur-md transition hover:border-amber-400/40 hover:shadow-card-glow-amber">
                <h3 className="break-words text-balance text-lg font-semibold leading-snug text-zinc-100">{item.name}</h3>
                <p className="mt-2 max-w-[var(--max-line-length)] break-words text-pretty text-sm leading-[1.6] text-zinc-300">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
