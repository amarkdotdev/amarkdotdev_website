export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amark.dev",
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
