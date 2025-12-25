import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
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
    <html lang="vi" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
