import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { personJsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaron Mark | DevOps / Python Engineer",
  description:
    "DevOps and Python engineering focused on secure automation, Kubernetes operations, and resilient platform systems.",
  metadataBase: new URL("https://aaron-mark.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aaron Mark | DevOps / Python Engineer",
    description:
      "Python automation, Kubernetes, Vault, and CI/CD for production infrastructure.",
    url: "https://aaron-mark.dev",
    siteName: "Aaron Mark",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aaron Mark | DevOps / Python Engineer",
    description:
      "Infrastructure reliability, security automation, and production delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = personJsonLd();

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
