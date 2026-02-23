# Aaron Mark — Digital Flagship

A dark-mode-only, cinematic personal site for a senior DevOps / Python engineer.

The tone, layout, and interactions are intentionally restrained: high signal, low noise, and reliability-first positioning.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- SEO metadata + JSON-LD structured data

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    background-effects.tsx
    contact-form.tsx
    reveal.tsx
    section-heading.tsx
    site-loader.tsx
  lib/
    schema.ts
    site-data.ts
  sections/
    about-section.tsx
    contact-section.tsx
    expertise-section.tsx
    hero-section.tsx
    principles-section.tsx
    projects-section.tsx
  styles/
    theme.css
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: `Next.js` (auto-detected).
4. Build command: `npm run build`.
5. Output directory: leave default.
6. Deploy.

## CI/CD (GitHub Actions -> Vercel)

This repo includes a pipeline at `.github/workflows/ci-cd.yml`.

- On every push/PR to `main` or `master`, it runs:
  - `npm ci`
  - `npm run lint`
  - `npm run test --if-present`
  - `npm run build`
- On push to `main`/`master`, if all checks pass, it deploys to **production** on Vercel.

### Required GitHub Secrets

Add these in GitHub -> Repository -> Settings -> Secrets and variables -> Actions:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### How to get Vercel values

1. `VERCEL_TOKEN`: Vercel dashboard -> Settings -> Tokens -> Create token
2. `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`:
   - Run `vercel link` locally in the project
   - Open `.vercel/project.json`
   - Copy `orgId` and `projectId` into GitHub secrets

## Lighthouse 95+ Checklist

- Keep images optimized and sized explicitly (`next/image` when real assets are added)
- Avoid client-side JavaScript in static sections unless animation is required
- Keep animation transforms to `opacity` and `transform` for smooth 60fps rendering
- Avoid layout shifts with fixed spacing and predictable section heights
- Preconnect only to required third-party origins
- Keep web fonts to one family and use `display: swap`
- Run `npm run build` before deployment and inspect bundle size

## Content and Positioning

Copy and visual style are tuned for technical authority:

- Infrastructure reliability over buzzwords
- Security-first language
- Python + platform depth
- Calm, precise communication
