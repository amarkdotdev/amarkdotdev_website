import { Reveal } from "@/components/reveal";
import { siteContent } from "@/lib/site-data";

export function BeforeYouGoSection() {
  return (
    <section
      aria-label="Before you go"
      className="relative border-t border-white/[0.06] px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-lg font-medium text-zinc-200">
            Before you go — need a reliability-minded engineer?
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            One line on what you’re looking for is enough.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-300/95 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
            >
              Get in touch
            </a>
            {siteContent.calendlyUrl && (
              <a
                href={siteContent.calendlyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 min-w-[44px] items-center rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
              >
                Book a 15-min call
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
