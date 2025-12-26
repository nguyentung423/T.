"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function StoriesPage() {
  const { language } = useLanguage();

  const content = {
    vi: {
      headline: "Những câu chuyện chuyển mình.",
      subtext:
        "Những Portfolio độc bản đang trong quá trình chế tác. Hãy quay lại sau để chứng kiến sự thay đổi.",
      wip: "Đang hoàn thiện",
    },
    en: {
      headline: "Stories of Transformation.",
      subtext:
        "Unique portfolios are being crafted. Come back soon to witness the change.",
      wip: "Work in Progress",
    },
  };

  const t = content[language];

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pulsing dot indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-gray-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm text-gray-500 tracking-wide uppercase">
              {t.wip}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {t.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-10"
            style={{ color: "#86868B" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {t.subtext}
          </motion.p>

          {/* Thin progress line */}
          <motion.div
            className="w-32 h-[2px] bg-gray-200 mx-auto rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              className="h-full bg-gray-400 rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: "40%" }}
            />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
