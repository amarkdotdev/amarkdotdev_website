import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { currentRadar } from "@/lib/site-data";

export function CurrentRadarSection() {
  return (
    <section id="radar" className="relative border-t border-white/[0.06] px-6 py-24 md:px-10">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Current Tech Radar"
            title="Up to date on where DevOps and AI are going."
            description="I continuously track and test emerging tooling so platform decisions stay modern, practical, and production-safe."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {currentRadar.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md">
                <h3 className="text-lg font-semibold text-zinc-100">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
