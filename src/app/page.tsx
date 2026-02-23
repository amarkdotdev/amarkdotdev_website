import { BackgroundEffects } from "@/components/background-effects";
import { SiteLoader } from "@/components/site-loader";
import { TopNav } from "@/components/top-nav";
import { siteContent } from "@/lib/site-data";
import { AboutSection } from "@/sections/about-section";
import { BeforeYouGoSection } from "@/sections/before-you-go-section";
import { ContactSection } from "@/sections/contact-section";
import { CurrentRadarSection } from "@/sections/current-radar-section";
import { ExpertiseSection } from "@/sections/expertise-section";
import { FaqSection } from "@/sections/faq-section";
import { FlagshipSection } from "@/sections/flagship-section";
import { HeroSection } from "@/sections/hero-section";
import { LatestSection } from "@/sections/latest-section";
import { PrinciplesSection } from "@/sections/principles-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ProofSection } from "@/sections/proof-section";
import { TestimonialSection } from "@/sections/testimonial-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:right-4 focus:top-[var(--header-height,5rem)] focus:z-[70] focus:block focus:min-h-11 focus:rounded-md focus:bg-cyan-400 focus:px-4 focus:py-3 focus:text-center focus:text-sm focus:font-medium focus:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to main content
      </a>
      <SiteLoader />
      <BackgroundEffects />
      <TopNav />
      <main id="main-content" className="relative">
        <HeroSection />
        <FlagshipSection />
        <AboutSection />
        <ProofSection />
        <TestimonialSection />
        <ExpertiseSection />
        <CurrentRadarSection />
        <ProjectsSection />
        <PrinciplesSection />
        <LatestSection />
        <FaqSection />
        <ContactSection />
        <BeforeYouGoSection />
      </main>
      <footer className="footer-safe border-t border-cyan-500/15 bg-gradient-to-b from-transparent to-cyan-950/15 px-6 pb-10 sm:px-8 md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 pt-8 text-xs leading-relaxed tracking-[0.14em] text-zinc-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="shrink-0 space-y-1">
            <span className="block">{siteContent.name}</span>
            <span className="block text-zinc-400">Site updated {siteContent.lastUpdated}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={siteContent.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 min-w-[44px] items-center py-3 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:opacity-80"
            >
              GitHub
            </a>
            <a
              href={siteContent.linkedInUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 min-w-[44px] items-center py-3 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:opacity-80"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteContent.email}`}
              className="inline-flex min-h-11 min-w-[44px] items-center py-3 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:opacity-80"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
