import { siteContent } from "@/lib/site-data";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://amark.dev/#person",
    name: siteContent.name,
    alternateName: ["Aharon Mark", "Aaron Mark DevOps", "amarkdotdev"],
    jobTitle: "DevOps & Platform Engineer",
    url: "https://amark.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteContent.location,
      addressCountry: "IL",
    },
    sameAs: [
      siteContent.githubUrl,
      siteContent.linkedInUrl,
      siteContent.patchpulseUrl,
    ],
    knowsAbout: [
      "Python",
      "DevOps",
      "Kubernetes",
      "HashiCorp Vault",
      "OpenSearch",
      "Jenkins",
      "GitLab CI/CD",
      "OpenTelemetry",
      "OpenTofu",
      "AI Infrastructure",
      "Infrastructure Automation",
      "Platform Reliability",
      "Open Source",
    ],
    description: siteContent.subheadline,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteContent.name,
    url: "https://amark.dev",
    description: siteContent.subheadline,
    publisher: { "@type": "Person", "name": siteContent.name },
    potentialAction: {
      "@type": "ContactAction",
      target: { "@type": "EntryPoint", urlTemplate: `mailto:${siteContent.email}` },
      "http://schema.org/description": "Contact Aaron Mark",
    },
  };
}
