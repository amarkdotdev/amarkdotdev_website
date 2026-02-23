import { Reveal } from "@/components/reveal";

export function BeforeYouGoSection() {
  return (
    <section
      aria-label="Before you go"
      className="relative border-t border-white/[0.08] bg-gradient-section-cyan px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-lg font-medium text-zinc-200">
            Building a platform team? Let’s talk.
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Recruiters and hiring managers: drop a line below.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#contact"
              className="inline-flex min-h-11 min-w-[44px] items-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-glow transition hover:bg-cyan-300 hover:shadow-glow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-cyan-300"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
