import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { LanguageProvider } from "@/context/LanguageContext";

// Consolidated font loading - eliminates render-blocking external requests
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
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
      className={`${inter.variable} ${beVietnamPro.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Critical performance: Preconnect to Google Fonts */}
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
