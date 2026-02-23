import { siteContent } from "@/lib/site-data";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.name,
    jobTitle: siteContent.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteContent.location,
      addressCountry: "IL",
    },
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
