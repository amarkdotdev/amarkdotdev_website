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
  title: "amark.dev | DevOps / Python Engineer",
  description:
    "DevOps and Python engineering focused on secure automation, Kubernetes operations, and resilient platform systems.",
  metadataBase: new URL("https://aaron-mark.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "amark.dev | DevOps / Python Engineer",
    description:
      "Python automation, Kubernetes, Vault, and CI/CD for production infrastructure.",
    url: "https://aaron-mark.dev",
    siteName: "amark.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "amark.dev | DevOps / Python Engineer",
    description:
      "Infrastructure reliability, security automation, and production delivery.",
  },
  icons: { icon: "/favicon.ico" },
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
