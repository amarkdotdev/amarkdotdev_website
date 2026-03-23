import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { personJsonLd, websiteJsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aaron Mark — DevOps & Platform Engineer",
  description:
    "Aaron Mark (Aharon Mark) — DevOps and Platform Engineer specialising in Kubernetes, Vault secrets management, Python automation, and resilient CI/CD pipelines.",
  metadataBase: new URL("https://amark.dev"),
  alternates: {
    canonical: "https://amark.dev",
  },
  keywords: [
    "Aaron Mark",
    "Aharon Mark",
    "DevOps engineer",
    "Platform engineer",
    "Kubernetes engineer",
    "infrastructure engineer",
    "Python automation",
    "Vault secrets management",
    "CI/CD",
    "amark.dev",
  ],
  authors: [{ name: "Aaron Mark", url: "https://amark.dev" }],
  openGraph: {
    title: "Aaron Mark — DevOps & Platform Engineer",
    description:
      "Kubernetes, Vault, Python automation, and CI/CD. I build infrastructure that doesn't break.",
    url: "https://amark.dev",
    siteName: "amark.dev",
    locale: "en_US",
    type: "profile",
    firstName: "Aaron",
    lastName: "Mark",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Mark — DevOps & Platform Engineer",
    description:
      "Kubernetes, Vault, Python automation, and CI/CD. I build infrastructure that doesn't break.",
    creator: "@amarkdotdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = personJsonLd();
  const websiteStructuredData = websiteJsonLd();

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
