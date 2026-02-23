import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { latestUpdates } from "@/lib/site-data";

export function LatestSection() {
  return (
    <section
      id="latest"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-site-teal/[0.03] to-transparent px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
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
                  className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-200 transition hover:border-site-teal/30 hover:bg-site-teal/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-teal/50 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:border-site-teal/25 active:bg-site-teal/[0.1]"
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
