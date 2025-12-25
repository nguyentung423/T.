"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Container className="py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow - Availability */}
          <div
            className={`mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <AvailabilityBadge />
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "#1D1D1F",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              transitionDelay: "100ms",
            }}
          >
            {t.hero.headline}
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-xl md:text-[21px] leading-relaxed mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "#86868B",
              transitionDelay: "200ms",
            }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
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
