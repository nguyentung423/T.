"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
import {
  Image as ImageIcon,
  BarChart3,
  Smartphone,
  ArrowRight,
  Quote,
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// Animated Section Component
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Feature Card Component - Static version (no animations)
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Case Study Data for different clients
const caseStudiesData = {
  "thuy-dang": {
    vi: {
      heroHeadline:
        "Khi một CV PDF 2 trang không thể chứa nổi sức sáng tạo của một Marketer.",
      heroSubheadline: "Case Study: Thuỳ Đặng - Trade Marketing Professional.",
      originalPdf: "Original PDF",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "Nỗi đau",
      chapter1Content:
        "Thuỳ có 2 năm kinh nghiệm làm POSM và Event. Nhưng file PDF tĩnh không thể hiển thị được quy mô của các booth sự kiện hay các video chiến dịch. Nhà tuyển dụng thường bỏ qua vì hồ sơ trông quá 'nặng nề' về chữ.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "Giải pháp",
      feature1Title: "Visual Gallery",
      feature1Desc:
        "Thư viện hình ảnh dạng lưới (Grid), cho phép HR xem ảnh thực tế các dự án một cách trực quan và sinh động.",
      feature2Title: "Data Visualization",
      feature2Desc:
        "Biến số liệu tăng trưởng thành các con số biết nói. ROI, conversion rate, foot traffic - tất cả được trình bày đẹp mắt.",
      feature3Title: "Mobile First",
      feature3Desc:
        "Giao diện tối ưu cho điện thoại để HR có thể xem mọi lúc mọi nơi, ngay cả khi đang di chuyển.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "Kết quả",
      chapter3Headline: "Một diện mạo mới xứng tầm chuyên gia.",
      testimonial:
        "Từ lúc có web này, mình tự tin gửi hồ sơ hơn hẳn. HR khen web rất chuyên nghiệp và mình đã nhận được offer chỉ sau 1 tuần.",
      testimonialAuthor: "Thuỳ Đặng",
      testimonialRole: "Trade Marketing Professional",
      testimonialInitials: "TĐ",
      ctaHeadline: "Bạn cũng có nhiều dự án nhưng chưa biết cách tỏa sáng?",
      ctaSubheadline: "Đừng để cái CV cũ kìm hãm sự nghiệp của bạn.",
      ctaButton: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ",
      backToStories: "← Quay lại Stories",
    },
    en: {
      heroHeadline:
        "When a 2-page PDF CV can't contain a Marketer's creativity.",
      heroSubheadline: "Case Study: Thuy Dang - Trade Marketing Professional.",
      originalPdf: "Original PDF",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "The Problem",
      chapter1Content:
        "Thuy has 2 years of experience in POSM and Events. But a static PDF file couldn't showcase the scale of event booths or campaign videos. Recruiters often skipped because the resume looked too 'text-heavy'.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "The Solution",
      feature1Title: "Visual Gallery",
      feature1Desc:
        "A grid-based image gallery that allows HR to view actual project photos in a visual and vivid way.",
      feature2Title: "Data Visualization",
      feature2Desc:
        "Transform growth metrics into speaking numbers. ROI, conversion rate, foot traffic - all beautifully presented.",
      feature3Title: "Mobile First",
      feature3Desc:
        "Interface optimized for mobile so HR can view anytime, anywhere, even on the go.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "The Result",
      chapter3Headline: "A new look worthy of an expert.",
      testimonial:
        "Since having this website, I feel much more confident sending my resume. HR praised the website for being very professional and I received an offer after just 1 week.",
      testimonialAuthor: "Thuy Dang",
      testimonialRole: "Trade Marketing Professional",
      testimonialInitials: "TD",
      ctaHeadline:
        "You have many projects but don't know how to let them shine?",
      ctaSubheadline: "Don't let your old CV hold back your career.",
      ctaButton: "BOOK FREE CONSULTATION",
      backToStories: "← Back to Stories",
    },
    portfolioUrl: "https://thuydang.vercel.app/",
    portfolioDomain: "thuydang.work",
  },
  "minh-hoang": {
    vi: {
      heroHeadline:
        "Khi một CV PDF 2 trang không thể chứa nổi sức sáng tạo của một Marketer.",
      heroSubheadline: "Case Study: Thuỳ Đặng - Trade Marketing Professional.",
      originalPdf: "Original PDF",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "Nỗi đau",
      chapter1Content:
        "Thuỳ có 2 năm kinh nghiệm làm POSM và Event. Nhưng file PDF tĩnh không thể hiển thị được quy mô của các booth sự kiện hay các video chiến dịch. Nhà tuyển dụng thường bỏ qua vì hồ sơ trông quá 'nặng nề' về chữ.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "Giải pháp",
      feature1Title: "Visual Gallery",
      feature1Desc:
        "Thư viện hình ảnh dạng lưới (Grid), cho phép HR xem ảnh thực tế các dự án một cách trực quan và sinh động.",
      feature2Title: "Data Visualization",
      feature2Desc:
        "Biến số liệu tăng trưởng thành các con số biết nói. ROI, conversion rate, foot traffic - tất cả được trình bày đẹp mắt.",
      feature3Title: "Mobile First",
      feature3Desc:
        "Giao diện tối ưu cho điện thoại để HR có thể xem mọi lúc mọi nơi, ngay cả khi đang di chuyển.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "Kết quả",
      chapter3Headline: "Một diện mạo mới xứng tầm chuyên gia.",
      testimonial:
        "Từ lúc có web này, mình tự tin gửi hồ sơ hơn hẳn. HR khen web rất chuyên nghiệp và mình đã nhận được offer chỉ sau 1 tuần.",
      testimonialAuthor: "Thuỳ Đặng",
      testimonialRole: "Trade Marketing Professional",
      testimonialInitials: "TĐ",
      ctaHeadline: "Bạn cũng có nhiều dự án nhưng chưa biết cách tỏa sáng?",
      ctaSubheadline: "Đừng để cái CV cũ kìm hãm sự nghiệp của bạn.",
      ctaButton: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ",
      backToStories: "← Quay lại Stories",
    },
    en: {
      heroHeadline:
        "When a 2-page PDF CV can't contain a Marketer's creativity.",
      heroSubheadline: "Case Study: Thuy Dang - Trade Marketing Professional.",
      originalPdf: "Original PDF",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "The Problem",
      chapter1Content:
        "Thuy has 2 years of experience in POSM and Events. But a static PDF file couldn't showcase the scale of event booths or campaign videos. Recruiters often skipped because the resume looked too 'text-heavy'.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "The Solution",
      feature1Title: "Visual Gallery",
      feature1Desc:
        "A grid-based image gallery that allows HR to view actual project photos in a visual and vivid way.",
      feature2Title: "Data Visualization",
      feature2Desc:
        "Transform growth metrics into speaking numbers. ROI, conversion rate, foot traffic - all beautifully presented.",
      feature3Title: "Mobile First",
      feature3Desc:
        "Interface optimized for mobile so HR can view anytime, anywhere, even on the go.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "The Result",
      chapter3Headline: "A new look worthy of an expert.",
      testimonial:
        "Since having this website, I feel much more confident sending my resume. HR praised the website for being very professional and I received an offer after just 1 week.",
      testimonialAuthor: "Thuy Dang",
      testimonialRole: "Trade Marketing Professional",
      testimonialInitials: "TD",
      ctaHeadline:
        "You have many projects but don't know how to let them shine?",
      ctaSubheadline: "Don't let your old CV hold back your career.",
      ctaButton: "BOOK FREE CONSULTATION",
      backToStories: "← Back to Stories",
    },
    portfolioUrl: "https://thuydang.vercel.app/",
    portfolioDomain: "thuydang.work",
  },
  "thanh-truc": {
    vi: {
      heroHeadline: "Khi portfolio Behance lẫn trong hàng triệu designer khác.",
      heroSubheadline: "Case Study: Thanh Trúc - UX/UI Designer.",
      originalPdf: "Behance Profile",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "Nỗi đau",
      chapter1Content:
        "Thanh Trúc có 3 năm kinh nghiệm UX/UI Design với nhiều dự án ấn tượng. Nhưng portfolio trên Behance của cô bị chìm trong hàng triệu designer khác. Không có cá tính riêng, không thể hiện được quy trình design thinking.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "Giải pháp",
      feature1Title: "Case Study Chi Tiết",
      feature1Desc:
        "Mỗi dự án được trình bày như một câu chuyện: Problem → Research → Solution → Impact. HR hiểu ngay tư duy của designer.",
      feature2Title: "Interactive Prototype",
      feature2Desc:
        "Nhúng Figma prototype trực tiếp vào web, cho phép HR trải nghiệm sản phẩm thực tế mà không cần rời trang.",
      feature3Title: "Personal Branding",
      feature3Desc:
        "Màu sắc, typography, và tone of voice nhất quán, tạo nên một brand cá nhân độc đáo và đáng nhớ.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "Kết quả",
      chapter3Headline: "Một portfolio xứng tầm với đam mê thiết kế.",
      testimonial:
        "Website mới giúp mình nổi bật hơn hẳn. Recruiter từ các công ty lớn chủ động liên hệ vì ấn tượng với cách trình bày case study.",
      testimonialAuthor: "Thanh Trúc",
      testimonialRole: "UX/UI Designer",
      testimonialInitials: "TT",
      ctaHeadline: "Bạn cũng có nhiều dự án nhưng chưa biết cách tỏa sáng?",
      ctaSubheadline: "Đừng để portfolio cũ kìm hãm sự nghiệp của bạn.",
      ctaButton: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ",
      backToStories: "← Quay lại Stories",
    },
    en: {
      heroHeadline:
        "When a Behance portfolio gets lost among millions of designers.",
      heroSubheadline: "Case Study: Thanh Truc - UX/UI Designer.",
      originalPdf: "Behance Profile",
      chapter1Title: "Chapter 1",
      chapter1Subtitle: "The Problem",
      chapter1Content:
        "Thanh Truc has 3 years of UX/UI Design experience with many impressive projects. But her Behance portfolio was drowning among millions of other designers. No unique personality, couldn't showcase her design thinking process.",
      chapter2Title: "Chapter 2",
      chapter2Subtitle: "The Solution",
      feature1Title: "Detailed Case Studies",
      feature1Desc:
        "Each project is presented as a story: Problem → Research → Solution → Impact. HR immediately understands the designer's mindset.",
      feature2Title: "Interactive Prototype",
      feature2Desc:
        "Embed Figma prototypes directly into the web, allowing HR to experience the actual product without leaving the page.",
      feature3Title: "Personal Branding",
      feature3Desc:
        "Consistent colors, typography, and tone of voice create a unique and memorable personal brand.",
      chapter3Title: "Chapter 3",
      chapter3Subtitle: "The Result",
      chapter3Headline: "A portfolio worthy of a design passion.",
      testimonial:
        "The new website helps me stand out significantly. Recruiters from big companies proactively reached out, impressed by my case study presentation.",
      testimonialAuthor: "Thanh Truc",
      testimonialRole: "UX/UI Designer",
      testimonialInitials: "TT",
      ctaHeadline:
        "You have many projects but don't know how to let them shine?",
      ctaSubheadline: "Don't let your old portfolio hold back your career.",
      ctaButton: "BOOK FREE CONSULTATION",
      backToStories: "← Back to Stories",
    },
    portfolioUrl: null, // Chưa có URL - sẽ hiển thị placeholder
    portfolioDomain: "thanhtruc.design",
  },
};

interface CaseStudyDetailClientProps {
  slug: string;
}

export default function CaseStudyDetailClient({
  slug,
}: CaseStudyDetailClientProps) {
  const { language } = useLanguage();

  // Get case study data based on slug, fallback to thuy-dang if not found
  const caseStudy =
    caseStudiesData[slug as keyof typeof caseStudiesData] ||
    caseStudiesData["thuy-dang"];
  const t = caseStudy[language as "vi" | "en"];
  const portfolioUrl = caseStudy.portfolioUrl;
  const portfolioDomain = caseStudy.portfolioDomain;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Back Navigation */}
        <div className="pt-24 pb-4">
          <Container>
            <Link
              href="/stories"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
            >
              {t.backToStories}
            </Link>
          </Container>
        </div>

        {/* ==================== HERO SECTION ==================== */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <AnimatedSection>
                <div className="space-y-6">
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight"
                    style={{ textWrap: "balance" }}
                  >
                    {t.heroHeadline}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-500">
                    {t.heroSubheadline}
                  </p>
                </div>
              </AnimatedSection>

              {/* Right: Original CV Visual (Blurred A4) - 3D Floating Document */}
              <AnimatedSection>
                <div className="relative flex items-center justify-center py-8">
                  {/* A4 Document - 3D Floating Effect */}
                  <div className="relative mx-auto w-full max-w-[280px] aspect-[210/297] bg-gray-100 rounded-lg shadow-2xl overflow-hidden transform -rotate-3 hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-default">
                    {/* Paper texture overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-gray-200/30" />

                    {/* Fake CV content lines */}
                    <div className="absolute inset-0 p-6 space-y-3">
                      {/* Header area */}
                      <div className="w-1/3 h-3 bg-gray-300/60 rounded" />
                      <div className="w-2/3 h-5 bg-gray-400/50 rounded mt-2" />
                      <div className="w-1/2 h-2 bg-gray-300/40 rounded" />

                      {/* Divider */}
                      <div className="w-full h-px bg-gray-300/40 my-4" />

                      {/* Content blocks */}
                      <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={`block1-${i}`}
                            className="w-full h-2 bg-gray-300/40 rounded"
                            style={{ width: `${85 - i * 10}%` }}
                          />
                        ))}
                      </div>

                      <div className="pt-3 space-y-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={`block2-${i}`}
                            className="w-full h-2 bg-gray-300/35 rounded"
                            style={{ width: `${90 - i * 8}%` }}
                          />
                        ))}
                      </div>

                      <div className="pt-3 space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={`block3-${i}`}
                            className="w-full h-2 bg-gray-300/30 rounded"
                            style={{ width: `${80 - i * 12}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Subtle fold line effect */}
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-gray-300/20 via-gray-400/10 to-transparent" />
                  </div>

                  {/* Second page peeking behind - depth effect */}
                  <div className="absolute mx-auto w-full max-w-[280px] aspect-[210/297] bg-gray-200/80 rounded-lg shadow-xl -z-10 transform -rotate-6 translate-x-3 translate-y-2" />

                  {/* Third page for more depth */}
                  <div className="absolute mx-auto w-full max-w-[280px] aspect-[210/297] bg-gray-300/60 rounded-lg shadow-lg -z-20 transform -rotate-9 translate-x-5 translate-y-4" />

                  {/* Decorative ambient shadow */}
                  <div className="absolute -inset-8 -z-30 bg-gradient-to-b from-gray-200/30 via-gray-300/20 to-transparent rounded-3xl blur-3xl" />
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ==================== CHAPTER 1: THE PROBLEM ==================== */}
        <section className="py-20 md:py-28 bg-gray-50">
          <Container>
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="space-y-8">
                {/* Chapter Label */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                    {t.chapter1Title}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-black">
                    {t.chapter1Subtitle}
                  </h2>
                </div>

                {/* Content - Optimized for readability */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    {t.chapter1Content}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* ==================== CHAPTER 2: THE SOLUTION ==================== */}
        <section className="py-20 md:py-28">
          <Container>
            {/* Section Header */}
            <AnimatedSection className="text-center mb-16">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                  {t.chapter2Title}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {t.chapter2Subtitle}
                </h2>
              </div>
            </AnimatedSection>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={ImageIcon}
                title={t.feature1Title}
                description={t.feature1Desc}
                index={0}
              />
              <FeatureCard
                icon={BarChart3}
                title={t.feature2Title}
                description={t.feature2Desc}
                index={1}
              />
              <FeatureCard
                icon={Smartphone}
                title={t.feature3Title}
                description={t.feature3Desc}
                index={2}
              />
            </div>
          </Container>
        </section>

        {/* ==================== CHAPTER 3: THE RESULT ==================== */}
        <section className="py-20 md:py-28 bg-gray-50">
          <Container>
            {/* Section Header */}
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <div className="space-y-2 mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                  {t.chapter3Title}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                  {t.chapter3Subtitle}
                </h2>
              </div>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight max-w-3xl mx-auto"
                style={{ textWrap: "balance" }}
              >
                {t.chapter3Headline}
              </h3>
            </AnimatedSection>

            {/* Macbook Mockup with Website - Wide Container for Immersive Experience */}
            <AnimatedSection className="mb-16 md:mb-20 -mx-4 md:mx-0">
              {/* Wide container - Full width on mobile, 90% on desktop with max-width */}
              <div className="w-full max-w-[1440px] mx-auto px-2 md:px-8 lg:px-12 overflow-hidden">
                <div className="relative w-full">
                  {/* Macbook Frame */}
                  <div className="bg-gray-800 rounded-t-xl md:rounded-t-2xl pt-3 md:pt-4 pb-1.5 md:pb-2 px-2 md:px-4">
                    {/* Screen bezel top */}
                    <div className="flex items-center justify-center mb-1.5 md:mb-2">
                      <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-gray-600" />
                    </div>

                    {/* Screen */}
                    <div className="bg-white rounded-md md:rounded-lg overflow-hidden shadow-inner">
                      {/* Browser bar */}
                      <div className="bg-gray-100 px-2 md:px-4 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2 border-b border-gray-200">
                        <div className="flex items-center gap-1 md:gap-1.5">
                          <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400" />
                          <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400" />
                          <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 ml-2 md:ml-4">
                          <div className="bg-white rounded px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs text-gray-500 font-mono max-w-[120px] md:max-w-xs border border-gray-200 truncate">
                            {portfolioDomain}
                          </div>
                        </div>
                      </div>

                      {/* Website iframe container - Responsive scaling */}
                      <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          {portfolioUrl ? (
                            <>
                              <iframe
                                src={portfolioUrl}
                                className="border-none w-[1440px] h-[900px]"
                                style={{
                                  pointerEvents: "none",
                                  overflow: "hidden",
                                  transform: "scale(var(--iframe-scale, 0.5))",
                                  transformOrigin: "0 0",
                                }}
                                title={`${t.testimonialAuthor} Portfolio Preview`}
                              />

                              {/* CSS Variable for responsive scaling */}
                              <style>{`
                                @media (max-width: 640px) {
                                  :root { --iframe-scale: 0.26; }
                                }
                                @media (min-width: 641px) and (max-width: 1024px) {
                                  :root { --iframe-scale: 0.46; }
                                }
                                @media (min-width: 1025px) {
                                  :root { --iframe-scale: 0.66; }
                                }
                              `}</style>

                              {/* Overlay link for click handling */}
                              <a
                                href={portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer group"
                              >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                                  <div className="bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    🔗 Xem website thực tế
                                  </div>
                                </div>
                              </a>
                            </>
                          ) : (
                            /* Placeholder when no portfolio URL */
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                              <div className="text-6xl mb-4">🎨</div>
                              <p className="text-gray-500 text-sm md:text-base font-medium">
                                Coming Soon
                              </p>
                              <p className="text-gray-400 text-xs md:text-sm mt-1">
                                Portfolio đang được xây dựng
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Macbook bottom */}
                  <div className="bg-gray-700 h-2 md:h-4 rounded-b-lg md:rounded-b-xl" />
                  <div className="bg-gray-600 h-1 md:h-2 mx-auto w-1/4 rounded-b-md md:rounded-b-lg" />

                  {/* Reflection shadow - Glass table effect */}
                  <div className="mt-3 md:mt-4 w-[80%] h-3 md:h-4 mx-auto bg-black/15 blur-xl rounded-full" />
                  <div className="mt-0.5 md:mt-1 w-[60%] h-1.5 md:h-2 mx-auto bg-black/10 blur-lg rounded-full" />

                  {/* Decorative shadow */}
                  <div className="absolute -inset-4 md:-inset-8 -z-10 bg-gradient-radial from-gray-200/50 to-transparent rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl" />
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonial */}
            <AnimatedSection>
              <div className="max-w-3xl mx-auto px-4 md:px-0">
                <div className="relative bg-white p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-200/60 ring-1 ring-gray-100">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 md:top-6 left-4 md:left-6 w-8 md:w-10 h-8 md:h-10 text-gray-200" />

                  {/* Quote content */}
                  <div className="relative z-10 space-y-6">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed italic pl-6 md:pl-8">
                      &ldquo;{t.testimonial}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 md:gap-4 pl-6 md:pl-8">
                      {/* Avatar - Ready for real image */}
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-gray-200 ring-offset-2 flex-shrink-0">
                        {/* Placeholder - Replace src with real image URL */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-base md:text-lg font-semibold text-gray-500">
                            {t.testimonialInitials}
                          </span>
                        </div>
                        {/* Uncomment and add real image URL:
                        <Image
                          src="/images/testimonials/thuy-dang.jpg"
                          alt={t.testimonialAuthor}
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm md:text-base">
                          {t.testimonialAuthor}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {t.testimonialRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-14 md:py-20 lg:py-28 bg-black">
          <Container>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 px-2 md:px-0">
                {/* Headlines */}
                <div className="space-y-3 md:space-y-4">
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
                    style={{ textWrap: "balance" }}
                  >
                    {t.ctaHeadline}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-400">
                    {t.ctaSubheadline}
                  </p>
                </div>

                {/* CTA Button - Enhanced with hover effects */}
                <div className="pt-2 md:pt-4">
                  <a
                    href={`mailto:tungnh.vspace@gmail.com?subject=${encodeURIComponent(
                      "[Tư vấn Portfolio] Đặt lịch tư vấn miễn phí"
                    )}&body=${encodeURIComponent(
                      `Xin chào,\n\nTôi đã xem Case Study của ${t.testimonialAuthor} và rất ấn tượng!\n\nTôi muốn đặt lịch tư vấn miễn phí để tìm hiểu thêm về dịch vụ làm Portfolio Website.\n\n--- Thông tin của tôi ---\n• Họ tên: \n• Nghề nghiệp/Vị trí: \n• Số điện thoại (nếu có): \n\nXin cảm ơn!`
                    )}`}
                    className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-400 hover:text-black hover:scale-105 active:scale-100 transition-all duration-300 ease-out group shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
                  >
                    {t.ctaButton}
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
