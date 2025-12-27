"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";
import { AnimatedSection } from "./AnimatedSection";

/**
 * Hero Section - With scroll animation
 */
export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Container className="py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow - Availability Badge */}
          <AnimatedSection>
            <div className="mb-6">
              <AvailabilityBadge />
            </div>
          </AnimatedSection>

          {/* Headline - With animation */}
          <AnimatedSection delay={0.1}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-display"
              style={{
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              {language === "vi" ? (
                <>
                  <span className="text-black">Đừng để </span>
                  <span className="text-black font-bold">tài năng</span>
                  <span className="text-black">
                    {" "}
                    của bạn bị giới hạn trong{" "}
                  </span>
                  <span className="text-gray-400">khổ giấy A4.</span>
                </>
              ) : (
                <>
                  <span className="text-black">Don&apos;t let your </span>
                  <span className="text-black font-bold">talent</span>
                  <span className="text-black"> be limited to </span>
                  <span className="text-gray-400">a sheet of A4 paper.</span>
                </>
              )}
            </h1>
          </AnimatedSection>

          {/* Sub-headline - With animation */}
          <AnimatedSection delay={0.2}>
            <p
              className="text-xl md:text-[21px] leading-relaxed mb-10"
              style={{ color: "#86868B" }}
            >
              {t.hero.subheadline}
            </p>
          </AnimatedSection>

          {/* CTA Button - With animation */}
          <AnimatedSection delay={0.3}>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-white hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#1D1D1F" }}
              >
                {t.hero.cta}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
