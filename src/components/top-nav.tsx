"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/lib/site-data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#principles", label: "Principles" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="absolute inset-0 border-b border-white/[0.08] bg-site-bg/80 backdrop-blur-xl" />
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="#main-content"
          className="text-sm font-medium tracking-tight text-zinc-100 transition hover:text-cyan-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
        >
          {siteContent.name}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-lg px-4 py-3 text-xs tracking-[0.12em] text-zinc-300 transition hover:bg-white/5 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <details
          ref={menuRef}
          className="group md:hidden"
          open={isMenuOpen}
          onToggle={(event) =>
            setIsMenuOpen((event.currentTarget as HTMLDetailsElement).open)
          }
        >
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] px-3 text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg">
            Menu
          </summary>
          <div className="absolute right-6 mt-2 w-52 rounded-2xl border border-white/10 bg-site-bg/95 p-2 shadow-lg backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
