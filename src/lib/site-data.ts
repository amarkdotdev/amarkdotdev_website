export type ExpertiseCategory = {
  title: string;
  summary: string;
  points: string[];
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  badges?: string[];
  visibility?: "public" | "internal";
};

export type RadarItem = {
  name: string;
  note: string;
};

export const siteContent = {
  name: "Aaron Mark",
  role: "DevOps / Python Engineer · Open-Source Contributor",
  location: "Near Jerusalem, Israel",
  headline: "I build infrastructure that doesn’t break.",
  subheadline: "Python-first DevOps. Secure systems, operational clarity.",
  about:
    "I design platform foundations with failure modes in mind. My work focuses on Python automation, Kubernetes operations, Vault-driven security, and observability patterns that keep production stable under pressure. I also contribute to open source, including building PatchPulse, an AI-powered Kubernetes risk analysis platform.",
  contactStatement: "Let’s build resilient systems.",
  email: "amarkdotdev@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/amarkdotdev",
  githubUrl: "https://github.com/amarkdotdev",
  calendlyUrl: "https://calendly.com/amarkdotdev",
  patchpulseUrl: "https://patchpulse.dev",
  patchpulseRepoUrl: "https://github.com/amarkdotdev/patchpulse",
  lastUpdated: "February 2026",
};

export const caseStudy = {
  title: "PatchPulse: From idea to production",
  problem: "Production incidents from risky Kubernetes changes were frequent and hard to catch before deploy.",
  solution: "Built an open-source, self-hosted platform that runs AI-powered pre-flight risk analysis on every PR/MR, with policy gates and guardrails so teams can block or review before merge.",
  outcome: "Teams can ship with confidence; risky changes are caught early with explainable evidence instead of post-incident firefighting.",
};

export const testimonial = {
  quote: "Aaron’s the person we call when the platform has to stay up.",
  attribution: "Engineering lead, platform team",
};

export const faq: { q: string; a: string }[] = [
  { q: "Do you do contract or full-time?", a: "Both. I’m open to full-time roles and to contract/consulting for platform reliability, DevOps, and Python tooling." },
  { q: "Remote or on-site?", a: "Remote-first. I’m based near Jerusalem and work with teams across time zones." },
  { q: "What’s your availability?", a: "Reach out via the form or email and I’ll respond with current availability." },
];

export const latestUpdates: { label: string; href: string }[] = [
  { label: "PatchPulse — AI-powered K8s risk analysis", href: "https://patchpulse.dev" },
  { label: "GitHub: amarkdotdev/patchpulse", href: "https://github.com/amarkdotdev/patchpulse" },
  { label: "OpenClaw / agent workflows evaluation", href: "#radar" },
];

export const currentRadar: RadarItem[] = [
  {
    name: "OpenClaw-style agent workflows",
    note: "Evaluating AI agent orchestration patterns for operational automation with guardrails.",
  },
  {
    name: "OpenTelemetry",
    note: "Staying current on unified traces, metrics, and logs for faster incident diagnosis.",
  },
  {
    name: "OpenTofu",
    note: "Tracking modern IaC workflows and ecosystem evolution for secure, auditable provisioning.",
  },
  {
    name: "AI-augmented CI/CD",
    note: "Applying AI-assisted risk checks and policy gates to reduce deployment regressions.",
  },
];

export const expertise: ExpertiseCategory[] = [
  {
    title: "DevOps & Cloud",
    summary: "Reliable platform operations built for sustained delivery.",
    points: [
      "Kubernetes cluster operations and workload hardening",
      "Production runbooks, SLO-oriented maintenance, and release confidence",
      "Infrastructure patterns that prioritize uptime and blast-radius control",
    ],
  },
  {
    title: "Python Engineering",
    summary: "Internal tooling that turns operations into repeatable systems.",
    points: [
      "Automation scripts for daily infrastructure workflows",
      "CLI and service utilities for platform teams",
      "Typed Python codebases with testable operational logic",
    ],
  },
  {
    title: "Infrastructure as Code",
    summary: "Versioned, reviewable, and auditable infrastructure workflows.",
    points: [
      "Declarative infrastructure with change traceability",
      "Environment parity and drift reduction through automation",
      "Git-based change control for safer rollouts",
    ],
  },
  {
    title: "Security & Secrets Management",
    summary: "Security controls integrated into delivery, not bolted on later.",
    points: [
      "Vault integration for short-lived, dynamic credentials",
      "Policy-driven access boundaries across environments",
      "Secret rotation and least-privilege enforcement patterns",
    ],
  },
  {
    title: "Observability",
    summary: "Operational clarity before incidents become outages.",
    points: [
      "OpenSearch-backed log visibility and diagnostic workflows",
      "Actionable telemetry with low-noise alerting principles",
      "Incident-friendly dashboards and rapid root-cause workflows",
    ],
  },
  {
    title: "CI/CD",
    summary: "Pipelines that ship quickly without weakening reliability.",
    points: [
      "Jenkins and GitLab CI pipelines with hardened gates",
      "Reusable pipeline templates for team-wide consistency",
      "Automated checks that reduce manual error in releases",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "PatchPulse.dev",
    summary:
      "Open-source, self-hosted AI-powered pre-flight risk analysis for Kubernetes that blocks risky changes before they reach production.",
    stack: [
      "FastAPI",
      "Kubernetes",
      "PostgreSQL",
      "GitHub/GitLab",
      "Policy Engine",
    ],
    href: "https://github.com/amarkdotdev/patchpulse",
    badges: ["Open Source", "Self-Hosted"],
    visibility: "public",
  },
  {
    title: "Kubernetes Automation Framework",
    summary:
      "A Python-driven orchestration layer for safe cluster operations, policy enforcement, and repeatable rollout workflows.",
    stack: ["Python", "Kubernetes", "GitLab CI", "Helm"],
    visibility: "internal",
  },
  {
    title: "Vault Dynamic Secret Orchestration",
    summary:
      "An automation service that provisions short-lived credentials per workload and enforces role-based access boundaries.",
    stack: ["Vault", "Python", "Kubernetes", "Security"],
    visibility: "internal",
  },
  {
    title: "DevOps CLI Toolkit",
    summary:
      "A composable Python CLI that standardizes incident tasks, deployment workflows, and environment diagnostics.",
    stack: ["Python", "Typer", "Automation", "Platform Ops"],
    visibility: "internal",
  },
  {
    title: "OpenSearch Deployment Architecture",
    summary:
      "A resilient observability deployment blueprint focused on log ingestion integrity, query performance, and retention strategy.",
    stack: ["OpenSearch", "Kubernetes", "Observability", "IaC"],
    visibility: "internal",
  },
];

export const principles = [
  "Automate everything.",
  "Reduce human error.",
  "Design for failure.",
  "Observability first.",
  "Security is not optional.",
  "Simplicity scales.",
];
