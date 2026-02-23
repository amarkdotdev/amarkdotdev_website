import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1.25fr]">
        <Reveal>
          <SectionHeading eyebrow="About" title="Calm systems thinking." />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 text-pretty text-lg leading-8 text-zinc-200 shadow-card-inner backdrop-blur-md transition hover:border-white/[0.12] hover:bg-white/[0.06]">
            {siteContent.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
