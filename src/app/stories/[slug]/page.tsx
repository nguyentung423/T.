import CaseStudyDetailClient from "./CaseStudyDetailClient";

// Generate static params for static export
export function generateStaticParams() {
  return [
    { slug: "minh-hoang" },
    { slug: "thuy-dang" },
    { slug: "thanh-truc" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetailClient slug={slug} />;
}
