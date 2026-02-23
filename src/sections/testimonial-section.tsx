import { Reveal } from "@/components/reveal";
import { testimonial } from "@/lib/site-data";

export function TestimonialSection() {
  return (
    <section
      aria-label="Testimonial"
      className="relative border-t border-white/[0.06] px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <blockquote className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md sm:p-8">
            <p className="text-lg font-medium italic leading-relaxed text-zinc-200 sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-zinc-400">— {testimonial.attribution}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
