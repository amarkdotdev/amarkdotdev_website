"use client";

import { useEffect } from "react";

/** Maps clean URL paths to their DOM section id */
const PATH_TO_HASH: Record<string, string> = {
  "/about": "#about",
  "/expertise": "#expertise",
  "/projects": "#projects",
  "/principles": "#principles",
  "/faq": "#faq",
  "/contact": "#contact",
};

/**
 * On mount, if the URL path matches a known section (e.g. /projects),
 * scroll to that section — so direct links like amark.dev/projects work.
 */
export function SectionRouter() {
  useEffect(() => {
    const hash = PATH_TO_HASH[window.location.pathname];
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    // Small delay so page paint completes before scroll
    const t = setTimeout(() => {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return null;
}
