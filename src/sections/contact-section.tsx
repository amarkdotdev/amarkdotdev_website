import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-16 pb-24 sm:px-8 sm:py-20 sm:pb-28 md:px-10 md:py-24 md:pb-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={siteContent.contactStatement}
            description="If you run a platform where reliability matters, reach out."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-card-inner backdrop-blur-md transition hover:border-white/[0.12] md:p-8">
            <ContactForm />
            <p className="mt-6 text-center text-sm text-zinc-400">
              Or email me directly:{" "}
              <a
                href={`mailto:${siteContent.email}`}
                className="font-medium text-cyan-200/90 underline decoration-cyan-200/40 underline-offset-2 transition hover:text-cyan-100"
              >
                {siteContent.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
