"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";

/**
 * Hero Section - Performance Optimized
 *
 * LCP Optimization Strategy:
 * 1. Headline (h1) renders IMMEDIATELY with no animation delay
 * 2. Secondary elements use minimal CSS-only animations
 * 3. No JavaScript animation orchestration
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Container className="py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow - Availability Badge */}
          <div className="mb-6 animate-fade-in">
            <AvailabilityBadge />
          </div>

          {/* 
            Headline - LCP CRITICAL ELEMENT
            NO animation delay - renders immediately for fastest LCP
          */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-display"
            style={{
              color: "#1D1D1F",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {t.hero.headline}
          </h1>

          {/* Sub-headline - Slight fade for visual polish */}
          <p
            className="text-xl md:text-[21px] leading-relaxed mb-10 animate-fade-in-delayed"
            style={{ color: "#86868B" }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-delayed">
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
