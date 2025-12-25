import type { Metadata } from "next";
import { Header, Footer, Section, SectionTitle, DemoGrid } from "@/components";
import { enabledDemos } from "@/content/demos";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse example portfolio websites. Each demo showcases the quality and style you can expect.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section className="py-24 md:py-32">
          <SectionTitle>Example portfolios</SectionTitle>
          <p className="text-gray-600 mb-12 max-w-xl">
            Click to explore each demo. These represent the style and quality
            you can expect for your own portfolio.
          </p>
          <DemoGrid demos={enabledDemos} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
