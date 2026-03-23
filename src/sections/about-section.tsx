import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent, techStack } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <SectionHeading eyebrow="About" title="Calm systems thinking." />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="relative max-w-[var(--max-line-length-mobile)] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 break-words text-pretty text-base leading-[1.65] text-zinc-200 shadow-card-inner backdrop-blur-md transition hover:border-white/[0.12] hover:bg-white/[0.06] sm:text-lg md:max-w-[var(--max-line-length)] md:p-8 md:leading-8">
              {siteContent.about}
            </p>
          </Reveal>
        </div>

        {/* Tech stack skills grid */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md md:p-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/85">
              Tech Stack
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {techStack.map((group) => (
                <div key={group.category}>
                  <p className="mb-2.5 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
