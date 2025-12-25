"use client";

import { useLanguage } from "@/context/LanguageContext";

function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function CTA() {
  const { t, language } = useLanguage();

  // Pre-filled mailto link - Vietnamese version
  const mailtoLinkVI = `mailto:tungnh.vspace@gmail.com?subject=Đặt lịch khởi tạo Portfolio - [Tên bạn]&body=Chào Tùng,%0D%0A%0D%0AMình quan tâm đến dịch vụ thiết kế Portfolio (Gói The Signature).%0D%0ADưới đây là thông tin sơ bộ của mình:%0D%0A%0D%0A- Vị trí/Ngành học: (Ví dụ: Sinh viên, BA, Dev...)%0D%0A- Mục tiêu chính: (Ví dụ: Apply việc, Xây thương hiệu...)%0D%0A- Số điện thoại/Zalo của mình: [Nhập số của bạn vào đây]%0D%0A%0D%0AMong sớm nhận được tư vấn từ Tùng.`;

  // Pre-filled mailto link - English version
  const mailtoLinkEN = `mailto:tungnh.vspace@gmail.com?subject=Portfolio Inquiry - [Your Name]&body=Hi Tùng,%0D%0A%0D%0AI'm interested in your Portfolio design service (The Signature Package).%0D%0AHere's my basic info:%0D%0A%0D%0A- Position/Field: (e.g., Student, BA, Dev...)%0D%0A- Main goal: (e.g., Job application, Personal branding...)%0D%0A- Phone/Zalo: [Enter your number here]%0D%0A%0D%0ALooking forward to hearing from you.`;

  const mailtoLink = language === "vi" ? mailtoLinkVI : mailtoLinkEN;

  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ backgroundColor: "#1D1D1F" }}
    >
      {/* Spotlight Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gray-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-sm mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-400">
            {t.footer.badge}
          </span>
        </div>

        {/* Headline - Massive Impact */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter">
          {t.footer.headline}
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          {t.footer.subtext}
        </p>

        {/* CTA Button - Magnetic */}
        <a
          href={mailtoLink}
          className="group inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1D1D1F]"
        >
          {t.footer.cta}
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
