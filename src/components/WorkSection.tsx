"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section, SectionTitle, DemoGrid } from "@/components";
import { enabledDemos } from "@/content/demos";

export function WorkSection() {
  const { t } = useLanguage();

  return (
    <Section id="work" bg="white">
      <SectionTitle>{t.projects.title}</SectionTitle>
      <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
        {t.projects.subtitle}
      </p>
      <DemoGrid demos={enabledDemos} />
    </Section>
  );
}
