import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { latestUpdates } from "@/lib/site-data";

export function LatestSection() {
  return (
    <section
      id="latest"
      className="relative border-t border-white/[0.06] px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Latest"
            title="What I'm shipping and following."
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
                  className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-200 transition hover:border-cyan-100/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
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
