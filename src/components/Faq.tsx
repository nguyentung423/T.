"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-3xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-3">
            {t.faq.tag}
          </span>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]"
            style={{ color: "#1D1D1F" }}
          >
            {t.faq.title}
          </h2>
        </div>

        {/* Clean Line FAQ */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {t.faq.items.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex items-start justify-between gap-4 group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {item.question}
                </span>
                <span
                  className="text-gray-400 text-xl leading-none flex-shrink-0 transition-transform duration-300 ease-out mt-0.5"
                  style={{
                    transform: openIndex === index ? "rotate(45deg)" : "none",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-500 leading-relaxed mt-3 pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
