"use client";

import { useLanguage } from "@/context/LanguageContext";

export function WhySection() {
  const { t } = useLanguage();

  // Parse headline to highlight key phrases dynamically
  const renderHeadline = () => {
    const text = t.philosophy.headline;
    const highlightPhrases = [t.philosophy.highlight1, t.philosophy.highlight2];

    let result = text;
    highlightPhrases.forEach((phrase) => {
      result = result.replace(
        phrase,
        `<span class="bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">${phrase}</span>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#161617" }}
    >
      {/* Ambient Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
        {/* Story - Receding text (constrained width) */}
        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto text-gray-400">
          {t.philosophy.top}
        </p>

        {/* Headline - The Hero */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-8"
          style={{
            color: "#F5F5F7",
            fontWeight: 500,
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {renderHeadline()}
        </h2>

        {/* Closing - Punchline (more visible) */}
        <p className="text-base md:text-lg font-medium text-gray-400">
          {t.philosophy.bottom}
        </p>
      </div>
    </div>
  );
}
