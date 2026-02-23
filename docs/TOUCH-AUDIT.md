# Mobile touch & interaction audit

**Date:** 2025-02-23  
**Scope:** WCAG 2.5.5 (Target Size 44×44px), padding, spacing, focus/active states, hover fallbacks, form tap areas.

---

## Summary

- **Touch targets:** Most controls already use `min-h-11` / `min-w-[44px]` (44px). A few CTAs lacked explicit min-width.
- **Spacing:** Mobile nav links had no gap between adjacent targets; 8px+ between targets is recommended.
- **Focus/active:** Focus-visible rings and active states are present; form inputs got explicit active states for touch feedback.
- **Hover fallbacks:** No hover-only activation; interactive elements use click/tap and have active states.
- **Forms:** Inputs/textarea already 44px min-height; submit button compliant. Tap highlight and touch-action set globally.

---

## Issues found and fixes applied

### 1. Hero CTA links – min-width for 44px target (WCAG)

**File:** `src/sections/hero-section.tsx`  
**Lines:** 101–112  

**Issue:** "View Projects" and "Get in Touch" had `min-h-11` but no `min-w-[44px]`, so narrow viewports could yield a target under 44px wide.

**Fix:** Added `min-w-[44px]` to both CTA `<a>` elements.

---

### 2. Mobile nav panel – spacing between tappable links

**File:** `src/components/top-nav.tsx`  
**Lines:** 158–169  

**Issue:** Mobile menu links were stacked with no gap; adjacent 44px targets had 0px between them, increasing mis-tap risk (WCAG recommends ≥8px).

**Fix:** Wrapped nav links in a flex container with `flex flex-col gap-2` (8px) between links.

---

### 3. Contact form inputs – active state for touch feedback

**File:** `src/components/contact-form.tsx`  
**Lines:** 36–61  

**Issue:** Inputs and textarea had focus-visible styles but no `active:` state, so no clear touch feedback on tap.

**Fix:** Added `active:border-cyan-200/50 active:bg-white/[0.07]` to input and textarea classes.

---

### 4. Projects “View project” link – tap area padding

**File:** `src/sections/projects-section.tsx`  
**Line:** 55  

**Issue:** Link used `pl-0` with only `pr-2 py-2`, making the left side of the tap area tight.

**Fix:** Replaced `pl-0` with `pl-3` and set `py-2.5` for a more balanced ≥44px tap area.

---

### 5. Textarea minimum height

**File:** `src/components/contact-form.tsx`  
**Line:** 59  

**Issue:** Textarea had `min-h-11`; with `rows={5}` it’s already tall, but `min-h-11` could conflict. Kept for consistency; no code change (already adequate).

---

## Already compliant (no change)

| Location | Detail |
|----------|--------|
| `top-nav.tsx` | Logo link, nav links, menu button use `min-h-11` / `min-w-11` or `min-w-[44px]` and have focus-visible + active states. |
| `page.tsx` | Skip link has focus-only styles with min-h-11 when visible. Footer links have min-h-11, min-w-[44px], py-3, gap-4, active states. |
| `expertise-section.tsx` | Accordion trigger is full-width with min-h-11; tap target is the whole row. Plus/minus icon is decorative inside that target. |
| `globals.css` | `touch-action: manipulation` and `-webkit-tap-highlight-color` on a, button, input, textarea, select. |
| `contact-form.tsx` | Submit button has min-h-11, min-w-48, focus-visible and active styles. |
| All sections | No hover-only activation; links/buttons use click/tap with visible focus and active states. |

---

## Recommendations

- Keep using `min-h-11` (44px) and `min-w-[44px]` (or `min-w-11`) for all primary controls and links.
- Maintain at least 8px spacing between adjacent tappable elements (e.g. `gap-2` or `space-y-2` in nav/list).
- Test on real devices (iOS Safari, Android Chrome) for tap highlight and scroll behavior.
