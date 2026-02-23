import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.08] bg-gradient-section-teal px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Operational architecture, built to endure."
            accent="teal"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="group relative h-full min-w-0 overflow-hidden rounded-3xl border border-white/[0.1] border-l-4 border-l-teal-400 bg-white/[0.06] p-6 shadow-card-inner backdrop-blur-md transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:shadow-card-glow-teal">
                <div className="flex min-w-0 flex-wrap items-center gap-2 break-words">
                  <h3 className="text-balance text-lg font-semibold leading-snug text-zinc-100 sm:text-xl">
                    {project.title}
                  </h3>
                  {project.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md border-2 border-teal-400/60 bg-teal-500/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="mt-3 max-w-[var(--max-line-length)] break-words text-pretty text-sm leading-[1.6] text-zinc-300">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-teal-400/30 bg-teal-500/15 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex min-h-11 min-w-[44px] items-center gap-1.5 rounded-md px-3 py-2.5 text-sm font-medium text-teal-200 transition hover:text-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:opacity-80"
                  >
                    View project
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </a>
                ) : (
                  <p className="mt-6 text-sm font-medium text-zinc-400">Internal project</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
