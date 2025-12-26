import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
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
    default: "T. | Chế tác Portfolio — Nâng tầm sự nghiệp của bạn",
    template: "%s | T.",
  },
  description:
    "Kỷ nguyên mới đòi hỏi nhiều hơn một chiếc CV. Tôi giúp bạn xây dựng không gian riêng chuyên nghiệp, duy mỹ và độc bản để kể câu chuyện sự nghiệp của mình.",
  keywords: [
    "portfolio cá nhân",
    "website portfolio",
    "thiết kế portfolio",
    "portfolio sinh viên",
    "portfolio chuyên nghiệp",
    "xây dựng thương hiệu cá nhân",
  ],
  authors: [{ name: "T." }],
  creator: "T.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "T.",
    title: "T. | Chế tác Portfolio",
    description:
      "Đừng để tài năng của bạn bị giới hạn trong khổ giấy A4. Khám phá không gian độc bản dành riêng cho bạn.",
  },
  twitter: {
    card: "summary_large_image",
    title: "T. | Chế tác Portfolio",
    description:
      "Đừng để tài năng của bạn bị giới hạn trong khổ giấy A4. Khám phá không gian độc bản dành riêng cho bạn.",
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
