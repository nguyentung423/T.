import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Performance Optimization: Single font strategy
 * - Be Vietnam Pro: Optimized for Vietnamese text
 * - Logo "T." uses system serif (Georgia)
 * - ~50% fewer font requests vs 2 fonts
 */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.brand.name} — ${siteContent.brand.tagline}`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.hero.subheadline,
  keywords: [
    "portfolio website",
    "personal website",
    "web design",
    "minimal portfolio",
    "professional portfolio",
    "student portfolio",
  ],
  authors: [{ name: siteContent.brand.name }],
  creator: siteContent.brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteContent.brand.name,
    title: `${siteContent.brand.name} — ${siteContent.brand.tagline}`,
    description: siteContent.hero.subheadline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.brand.name} — ${siteContent.brand.tagline}`,
    description: siteContent.hero.subheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable} suppressHydrationWarning>
      <head>
        {/* DNS prefetch for faster font loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect with crossorigin for font files */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
