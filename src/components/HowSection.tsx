"use client";

import { useLanguage } from "@/context/LanguageContext";

// Bold icons with heavier stroke (2px) for high contrast
function ZapIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1D1D1F]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1D1D1F]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1D1D1F]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-emerald-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

const stepIcons = [ZapIcon, CpuIcon, RocketIcon];

export function HowSection() {
  const { t } = useLanguage();

  const processSteps = [
    {
      label: t.process.step1_label,
      title: t.process.step1_title,
      description: t.process.step1_desc,
      benefit: t.process.step1_note,
      Icon: stepIcons[0],
    },
    {
      label: t.process.step2_label,
      title: t.process.step2_title,
      description: t.process.step2_desc,
      benefit: t.process.step2_note,
      Icon: stepIcons[1],
    },
    {
      label: t.process.step3_label,
      title: t.process.step3_title,
      description: t.process.step3_desc,
      benefit: t.process.step3_note,
      Icon: stepIcons[2],
    },
  ];

  return (
    <div
      id="how"
      className="min-h-screen flex flex-col justify-center py-24"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header - Left aligned, technical */}
        <div className="mb-12">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-3">
            {t.process.tag}
          </span>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]"
            style={{ color: "#1D1D1F" }}
          >
            {t.process.title}
          </h2>
        </div>

        {/* Bento Grid - Process Cards with integrated Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {/* Process Steps with Benefits */}
          {processSteps.map((step) => {
            const IconComponent = step.Icon;
            return (
              <div key={step.label} className="bg-white p-8">
                {/* Technical Step Label Tag */}
                <span className="inline-block font-mono text-[10px] text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">
                  {step.label}
                </span>

                {/* Bold Icon */}
                <div className="mt-5 mb-5">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-[1.6] mt-2">
                  {step.description}
                </p>

                {/* Benefit with separator */}
                <div className="border-t border-gray-100 mt-6 pt-4 flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {step.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Post-handover note - Outside grid, subtle */}
        <p className="text-xs text-gray-400 mt-6">{t.process.disclaimer}</p>
      </div>
    </div>
  );
}
