"use client";

import { useLanguage } from "@/context/LanguageContext";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-emerald-600 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingSignal() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen flex flex-col justify-center py-24"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-3">
            {t.pricing.tag}
          </span>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]"
            style={{ color: "#1D1D1F" }}
          >
            {t.pricing.title}
          </h2>
        </div>

        {/* The Offer Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Left: Value Proposition */}
            <div className="flex-1 mb-8 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {t.pricing.package_name}
              </h3>
              <div className="mb-4">
                <span
                  className="text-5xl md:text-6xl font-bold tracking-tight"
                  style={{ color: "#1D1D1F", whiteSpace: "nowrap" }}
                >
                  {t.pricing.price}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {t.pricing.description}
                <br />
                <span className="text-gray-500">{t.pricing.description2}</span>
              </p>

              {/* CTA Button */}
              <a
                href="mailto:tungnh.vspace@gmail.com?subject=Portfolio%20Inquiry"
                className="inline-flex items-center justify-center w-full lg:w-auto bg-[#1D1D1F] text-white rounded-full px-8 py-4 font-medium hover:scale-[1.02] transition-transform duration-200"
              >
                {t.pricing.cta}
              </a>
              <p className="text-xs text-gray-400 mt-3 text-center lg:text-left">
                Hoặc{" "}
                <a
                  href="mailto:tungnh.vspace@gmail.com?subject=Custom%20Portfolio%20Scope"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  {t.pricing.cta_secondary}
                </a>
              </p>
            </div>

            {/* Right: What's Included */}
            <div className="flex-1 lg:border-l lg:border-gray-100 lg:pl-12">
              <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-6">
                {t.pricing.benefits_title}
              </h4>
              <ul className="space-y-4">
                {t.pricing.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm font-medium text-gray-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Trust Signal */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.pricing.footer_note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
