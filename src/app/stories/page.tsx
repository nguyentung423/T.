"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/stories/CaseStudyCard";

// Sample case studies data - replace with real data later
const caseStudies = [
  {
    id: 1,
    clientName: "Thuỳ Đặng",
    tagline: "TRADE MARKETING",
    beforeImageSrc: "/demos/t.svg",
    afterImageSrc: "/images/stories/minh-hoang-after.jpg",
    portfolioUrl: "https://thuydang.vercel.app/",
    storySummary: {
      vi: "Từ một hồ sơ giấy khó hình dung, Thuỳ đã sở hữu một không gian số sống động, nơi trưng bày trọn vẹn các chiến dịch tiếp thị tại điểm bán (POSM) và số liệu tăng trưởng thực tế một cách trực quan nhất.",
      en: "From a hard-to-visualize paper profile, Thuy now owns a vibrant digital space that showcases complete point-of-sale marketing campaigns (POSM) and real growth data in the most visual way.",
    },
    slug: "minh-hoang",
  },
  {
    id: 2,
    clientName: "Thanh Trúc",
    tagline: "UX/UI DESIGNER",
    beforeImageSrc: "/images/stories/thanh-truc-before.jpg",
    afterImageSrc: "/images/stories/thanh-truc-after.jpg",
    storySummary: {
      vi: "Portfolio cũ của Trúc là một file Behance lẫn trong hàng triệu designer khác. Giờ đây, cô ấy có một website riêng với case study chuyên sâu và personality độc đáo.",
      en: "Trúc's old portfolio was a Behance file lost among millions of designers. Now, she has her own website with in-depth case studies and unique personality.",
    },
    slug: "thanh-truc",
  },
];

export default function StoriesPage() {
  const { language } = useLanguage();

  const content = {
    vi: {
      headline: "Hành Trình",
      subtitle:
        "Mỗi portfolio là một hành trình. Đây là những bước chuyển đổi từ CV truyền thống sang không gian số đẳng cấp.",
    },
    en: {
      headline: "Stories of Transformation.",
      subtitle:
        "Every portfolio is a journey. Here are the transformations from traditional CVs to premium digital spaces.",
    },
  };

  const t = content[language];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <Container>
          {/* Page Header - Left aligned, balanced text */}
          <div className="max-w-3xl mb-6 md:mb-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 tracking-tight text-left"
              style={{ textWrap: "balance" }}
            >
              {t.headline}
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed text-left"
              style={{ color: "#86868B" }}
            >
              {t.subtitle}
            </p>
          </div>

          {/* Case Studies List */}
          <div>
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                clientName={study.clientName}
                tagline={study.tagline}
                beforeImageSrc={study.beforeImageSrc}
                afterImageSrc={study.afterImageSrc}
                portfolioUrl={study.portfolioUrl}
                storySummary={study.storySummary[language]}
                slug={study.slug}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
