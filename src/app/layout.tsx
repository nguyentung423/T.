import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Performance Optimization: Only 2 fonts (eliminated Playfair for logo)
 * - Inter: Body text (~20KB gzipped)
 * - Be Vietnam Pro: Headlines (~15KB gzipped)
 * - Logo "T." now uses system serif (saves ~30KB)
 */
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  // Only load weights actually used
  weight: ["400", "500", "600"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
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
    <html
      lang="vi"
      className={`${inter.variable} ${beVietnamPro.variable}`}
      suppressHydrationWarning
    >
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
