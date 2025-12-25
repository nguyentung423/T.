"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function QuoteIcon() {
  return (
    <svg
      className="absolute top-6 left-6 w-12 h-12 text-gray-100"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <div id="about" className="py-24" style={{ backgroundColor: "#F5F5F7" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column: The Maker */}
          <div>
            {/* Profile Image */}
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/demos/u.jpg"
                alt="Tung - Portfolio Builder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            </div>
            {/* Caption */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900">
                Hi, I&apos;m {t.about.profile_name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mt-1">
                {t.about.profile_role}
              </p>
            </div>
          </div>

          {/* Right Column: The "Why" & Social Proof */}
          <div className="flex flex-col justify-center">
            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t.about.headline}
            </h2>

            {/* Body Text */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {t.about.description}
            </p>

            {/* Testimonial Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <QuoteIcon />
              <p className="text-gray-800 font-medium text-lg italic relative z-10 pl-2">
                &ldquo;{t.about.testimonial_quote}&rdquo;
              </p>
              <div className="mt-6">
                <span className="text-sm font-bold text-gray-900 block">
                  {t.about.testimonial_author}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {t.about.testimonial_role}
                </span>
                <div className="flex items-center gap-0.5 mt-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
