/**
 * Scroll to a section and update the URL bar to a clean path (no #).
 * e.g. navigateToSection("#projects", "/projects")
 */
export function navigateToSection(hash: string, path: string) {
  if (typeof window === "undefined") return;
  window.history.pushState(null, "", path);
  const el = document.querySelector(hash);
  if (!el) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}
