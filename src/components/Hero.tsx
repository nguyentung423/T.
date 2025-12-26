"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { Container } from "./Container";

/**
 * Hero Section - Cinematic Typography with Framer Motion
 *
 * Visual Hierarchy:
 * 1. "tài năng" = Hero (bold, emphasized, scale animation)
 * 2. "bị giới hạn trong khổ giấy A4" = Fading constraint (blur-in)
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
            Headline - Cinematic Typography
            "Talent" is the hero, "A4 paper" fades as the breaking constraint
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
                <motion.span
                  className="inline-block text-black font-bold"
                  initial={{ opacity: 0.7, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  tài năng
                </motion.span>
                <span className="text-black"> của bạn bị giới hạn trong </span>
                <motion.span
                  className="headline-fade-out"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  khổ giấy A4.
                </motion.span>
              </>
            ) : (
              <>
                <span className="text-black">Don&apos;t let your </span>
                <motion.span
                  className="inline-block text-black font-bold"
                  initial={{ opacity: 0.7, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  talent
                </motion.span>
                <span className="text-black"> be limited to </span>
                <motion.span
                  className="headline-fade-out"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  a sheet of A4 paper.
                </motion.span>
              </>
            )}
          </h1>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-[21px] leading-relaxed mb-10"
            style={{ color: "#86868B" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            {t.hero.subheadline}
          </motion.p>

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
