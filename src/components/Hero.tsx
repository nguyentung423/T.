"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";

/**
 * Hero Section - Static Typography for Performance
 *
 * Visual Hierarchy:
 * 1. "tài năng" = Hero (bold, emphasized)
 * 2. "khổ giấy A4" = Fading constraint (gradient text effect)
 *
 * LCP Optimized: No JS animations on headline
 */
export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Container className="py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow - Availability Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AvailabilityBadge />
          </motion.div>

          {/* 
            Headline - Static for LCP Performance
            Pure CSS styling, Zero JS animation
          */}
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
                <span className="text-black"> của bạn bị giới hạn trong </span>
                <span className="headline-fade-out">khổ giấy A4.</span>
              </>
            ) : (
              <>
                <span className="text-black">Don&apos;t let your </span>
                <span className="text-black font-bold">talent</span>
                <span className="text-black"> be limited to </span>
                <span className="headline-fade-out">a sheet of A4 paper.</span>
              </>
            )}
          </h1>

          {/* Sub-headline - Static for LCP optimization (no animation delay) */}
          <p
            className="text-xl md:text-[21px] leading-relaxed mb-10"
            style={{ color: "#86868B" }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-white transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#1D1D1F" }}
            >
              {t.hero.cta}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
