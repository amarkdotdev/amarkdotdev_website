import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faq } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative border-t border-white/[0.06] px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions." />
        </Reveal>
        <ul className="space-y-4">
          {faq.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.04}>
              <li className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-card-inner backdrop-blur-md">
                <h3 className="text-sm font-semibold text-zinc-100">{item.q}</h3>
                <p className="mt-2 text-pretty text-sm leading-7 text-zinc-300">{item.a}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
