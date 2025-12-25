"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Container className="py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow - Availability - CSS Animation Only */}
          <div
            className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{ animationDelay: "0ms" }}
          >
            <AvailabilityBadge />
          </div>

          {/* Headline - LCP Element - NO DELAY */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-display animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{
              color: "#1D1D1F",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              animationDelay: "100ms",
            }}
          >
            {t.hero.headline}
          </h1>

          {/* Sub-headline - CSS Animation Only */}
          <p
            className="text-xl md:text-[21px] leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{
              color: "#86868B",
              animationDelay: "200ms",
            }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTA Button - CSS Animation Only */}
          <div
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-white transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#1D1D1F" }}
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
