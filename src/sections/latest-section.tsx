import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { latestUpdates } from "@/lib/site-data";

export function LatestSection() {
  return (
    <section
      id="latest"
      className="relative border-t border-white/[0.08] bg-gradient-section-teal px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Latest"
            title="What I'm shipping and following."
            accent="teal"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap gap-3">
            {latestUpdates.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border-2 border-teal-400/60 bg-teal-500/25 px-4 py-2.5 text-sm font-medium text-teal-100 transition hover:bg-teal-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-teal-500/40"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
