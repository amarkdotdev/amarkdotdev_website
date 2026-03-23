"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigateToSection } from "@/lib/navigate";

const navLinks = [
  { hash: "#about",      path: "/about",      label: "About" },
  { hash: "#expertise",  path: "/expertise",  label: "Expertise" },
  { hash: "#projects",   path: "/projects",   label: "Projects" },
  { hash: "#principles", path: "/principles", label: "Principles" },
  { hash: "#faq",        path: "/faq",        label: "FAQ" },
  { hash: "#contact",    path: "/contact",    label: "Contact" },
];

/** Circle with right-pointing triangle — mirrors the favicon, in the site's cyan */
function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle
        cx="14"
        cy="14"
        r="13"
        className="fill-cyan-400/[0.12] stroke-cyan-400/50"
        strokeWidth="1.5"
      />
      <polygon points="14,7 21,20.5 7,20.5" className="fill-cyan-400" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="inline-flex size-6 shrink-0 items-center justify-center" aria-hidden>
      {open ? (
        <svg className="size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      ) : (
        <svg className="size-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </span>
  );
}

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const pendingNavRef = useRef<{ hash: string; path: string } | null>(null);

  // When mobile menu closes, scroll to pending section after scroll-lock releases
  useEffect(() => {
    if (isMenuOpen) return;
    const pending = pendingNavRef.current;
    if (!pending) return;
    pendingNavRef.current = null;
    if (typeof window === "undefined") return;
    const el = document.querySelector(pending.hash);
    if (el) {
      window.history.pushState(null, "", pending.path);
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isMenuOpen]);

  // Close on Escape, trap focus, return focus on close
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = menuPanelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === first) { event.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };

    const t = setTimeout(() => {
      menuPanelRef.current?.querySelector<HTMLElement>("a")?.focus();
    }, 0);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMenuOpen && isMobile) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40" style={{ height: "var(--header-height, 5rem)" }}>
      <div className="absolute inset-0 border-b border-white/[0.08] bg-site-bg/80 backdrop-blur-xl" />
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 md:px-10"
      >
        {/* Logo — navigates to / (top of page) */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, "", "/");
            window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
          }}
          className="inline-flex min-h-11 min-w-[44px] items-center gap-2.5 text-sm font-medium tracking-tight text-zinc-100 transition hover:text-cyan-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:opacity-80"
        >
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => { e.preventDefault(); navigateToSection(link.hash, link.path); }}
              className="flex min-h-11 min-w-[44px] items-center rounded-lg px-4 py-3 text-xs tracking-[0.12em] text-zinc-300 transition hover:bg-white/5 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/8 active:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button + panel */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-3 text-zinc-200 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/[0.08]"
          >
            <MenuIcon open={isMenuOpen} />
            <span className="sr-only">{isMenuOpen ? "Close" : "Menu"}</span>
          </button>
          <div
            id="mobile-menu"
            ref={menuPanelRef}
            role="dialog"
            aria-label="Site navigation menu"
            hidden={!isMenuOpen}
            className="absolute right-0 top-full z-50 mt-2 flex max-h-[min(70vh,400px)] w-52 max-w-[calc(100vw-3rem)] min-w-0 flex-col gap-2 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-site-bg/95 p-2 shadow-lg backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  pendingNavRef.current = { hash: link.hash, path: link.path };
                  setIsMenuOpen(false);
                }}
                className="flex min-h-11 min-w-0 items-center break-words rounded-lg px-4 py-3 text-sm leading-snug text-zinc-200 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
