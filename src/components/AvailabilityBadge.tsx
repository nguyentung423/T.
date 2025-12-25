"use client";

import { useLanguage } from "@/context/LanguageContext";

export function AvailabilityBadge() {
  const { t } = useLanguage();

  return (
    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
      {t.hero.eyebrow}
    </p>
  );
}
