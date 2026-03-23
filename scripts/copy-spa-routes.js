#!/usr/bin/env node
// After Next.js static export, copy index.html to each section path
// so nginx can serve /about, /projects, etc. directly (HTTP 200)
// and the SectionRouter client component handles scrolling.
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const src = path.join(outDir, "index.html");

const routes = ["about", "expertise", "projects", "principles", "faq", "contact"];

for (const route of routes) {
  // Copy as both /route.html and /route/index.html for nginx compatibility
  const destFile = path.join(outDir, `${route}.html`);
  const destDir = path.join(outDir, route);
  const destDirIndex = path.join(destDir, "index.html");

  fs.copyFileSync(src, destFile);

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, destDirIndex);

  console.log(`Created ${route}.html and ${route}/index.html`);
}
