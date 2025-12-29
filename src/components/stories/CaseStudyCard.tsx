"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CaseStudyCardProps {
  clientName: string;
  tagline: string;
  beforeImageSrc: string; // The old CV screenshot
  afterImageSrc: string; // The new website mockup
  portfolioUrl?: string; // Optional link to the actual portfolio
  storySummary: string;
  slug: string; // Link to full story
}

/**
 * CaseStudyCard - Before/After Transformation Display
 *
 * Design Philosophy:
 * - "Architect" vibe: Minimalist, strong typography, B&W palette
 * - "After" = Hero (large, sharp, dominant)
 * - "Before" = Context (small, faded, blurred memory)
 */
export function CaseStudyCard({
  clientName,
  tagline,
  beforeImageSrc,
  afterImageSrc,
  portfolioUrl,
  storySummary,
  slug,
}: CaseStudyCardProps) {
  const { language } = useLanguage();

  const labels = {
    vi: {
      original: "Nguyên bản (Original PDF)",
      viewJourney: "Xem hành trình",
      visitWebsite: "Xem website thực tế",
    },
    en: {
      original: "Original (PDF Resume)",
      viewJourney: "View journey",
      visitWebsite: "Visit live website",
    },
  };

  const t = labels[language];

  return (
    <section className="py-8 md:py-12 border-b border-gray-100 last:border-b-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end px-0">
        {/* Left Column - Narrative & Before (40%) - Tight grouping */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Client Info */}
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-semibold">
              {tagline}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              {clientName}
            </h3>
          </div>

          {/* Story Summary */}
          <p className="text-base leading-relaxed text-gray-600">
            {storySummary}
          </p>

          {/* The "Before" Visual - A4 Document Shape */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              {t.original}
            </p>
            {/* A4 Paper Aspect Ratio - styled like a physical document */}
            <div
              className="relative w-40 overflow-hidden bg-white select-none"
              style={{
                aspectRatio: "210 / 297", // A4 aspect ratio
                borderRadius: "8px",
                boxShadow:
                  "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.06)",
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={beforeImageSrc}
                alt={`${clientName} - Original CV`}
                fill
                className="object-cover object-top blur-[0.5px] opacity-90 pointer-events-none"
                draggable={false}
              />
              {/* Overlay to prevent interaction and add fade effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/15 pointer-events-none" />
            </div>
          </div>

          {/* CTA Link - No extra padding */}
          <Link
            href={`/stories/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-black group w-fit"
          >
            <span className="border-b border-transparent group-hover:border-black transition-colors duration-300">
              {t.viewJourney}
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Right Column - After Hero Shot (60%) */}
        <div className="lg:col-span-7 w-full max-w-full px-4 md:px-0">
          {/* Browser Frame Mockup - Monochrome, Sharp */}
          <div className="relative w-full max-w-full">
            {/* Browser Window - Conditionally wrapped with link */}
            {portfolioUrl ? (
              <BrowserFrame
                clientName={clientName}
                afterImageSrc={afterImageSrc}
                portfolioUrl={portfolioUrl}
                isInteractive={true}
              />
            ) : (
              <BrowserFrame
                clientName={clientName}
                afterImageSrc={afterImageSrc}
                isInteractive={false}
              />
            )}

            {/* Subtle decorative shadow underneath */}
            <div
              className="absolute -inset-3 -z-10 bg-gradient-to-b from-gray-100/40 to-transparent rounded-xl blur-xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Browser Frame Component
interface BrowserFrameProps {
  clientName: string;
  afterImageSrc: string;
  isInteractive: boolean;
  portfolioUrl?: string;
}

function BrowserFrame({
  clientName,
  afterImageSrc,
  isInteractive,
  portfolioUrl,
}: BrowserFrameProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 ${
        isInteractive
          ? "transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] hover:border-gray-300"
          : ""
      }`}
    >
      {/* Browser Top Bar - Monochrome */}
      <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
        {/* Traffic Lights - Monochrome */}
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isInteractive ? "bg-red-400" : "bg-neutral-300"
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isInteractive ? "bg-yellow-400" : "bg-neutral-300"
            }`}
          />
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isInteractive ? "bg-green-400" : "bg-neutral-300"
            }`}
          />
        </div>
        {/* URL Bar */}
        <div className="flex-1 ml-3">
          <div
            className={`bg-white rounded px-3 py-1 text-[11px] text-gray-400 font-mono max-w-xs border border-gray-100 ${
              isInteractive
                ? "group-hover:border-blue-200 group-hover:bg-blue-50/30"
                : ""
            }`}
          >
            {portfolioUrl
              ? "thuydang.work"
              : `${clientName.toLowerCase().replace(/\s+/g, "")}.portfolio.dev`}
          </div>
        </div>
      </div>

      {/* Website Content - Iframe or Image based on portfolioUrl */}
      <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden w-full">
        {portfolioUrl && isInteractive ? (
          /* Iframe Preview Mode */
          <div className="relative w-full h-full overflow-hidden">
            {/* Iframe for live preview - Desktop view scaled down */}
            <iframe
              src={portfolioUrl}
              className="border-none w-[1440px] h-[900px]"
              style={{
                pointerEvents: "none",
                overflow: "hidden",
                transform: "scale(var(--iframe-scale-card, 0.35))",
                transformOrigin: "0 0",
              }}
              title={`${clientName} Portfolio Preview`}
            />
            {/* CSS Variable for responsive scaling on card */}
            <style>{`
              @media (max-width: 640px) {
                :root { --iframe-scale-card: 0.22; }
              }
              @media (min-width: 641px) and (max-width: 1023px) {
                :root { --iframe-scale-card: 0.35; }
              }
              @media (min-width: 1024px) {
                :root { --iframe-scale-card: 0.35; }
              }
            `}</style>

            {/* Overlay link for click handling */}
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer group"
              title="Truy cập website"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  🔗 Truy cập website
                </div>
              </div>
            </a>
          </div>
        ) : (
          /* Fallback Image Mode */
          <Image
            src={afterImageSrc}
            alt={`${clientName} - New Portfolio Website`}
            fill
            className={`object-cover object-top ${
              isInteractive
                ? "transition-transform duration-300 group-hover:scale-105"
                : ""
            }`}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        )}
      </div>
    </div>
  );
}
