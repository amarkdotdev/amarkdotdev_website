import { BackgroundEffects } from "@/components/background-effects";
import { SiteLoader } from "@/components/site-loader";
import { TopNav } from "@/components/top-nav";
import { siteContent } from "@/lib/site-data";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { CurrentRadarSection } from "@/sections/current-radar-section";
import { ExpertiseSection } from "@/sections/expertise-section";
import { HeroSection } from "@/sections/hero-section";
import { PrinciplesSection } from "@/sections/principles-section";
import { ProjectsSection } from "@/sections/projects-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-950 focus:outline-none"
      >
        Skip to main content
      </a>
      <SiteLoader />
      <BackgroundEffects />
      <TopNav />
      <main id="main-content" className="relative">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <CurrentRadarSection />
        <ProjectsSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <footer className="px-6 pb-10 md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs tracking-[0.14em] text-zinc-400">
          <span>{siteContent.name}</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amarkdotdev"
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
            >
              GitHub
            </a>
            <a
              href="mailto:amarkdotdev@gmail.com"
              className="transition hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
            >
              Email
            </a>
            <span>{siteContent.location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
