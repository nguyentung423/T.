import {
  Header,
  Footer,
  WhySection,
  HowSection,
  PricingSignal,
  Faq,
  CTA,
  Hero,
  TrustSection,
  WorkSection,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* Hero Section — Apple-style with animations */}
        <Hero />

        {/* Work Section — same white surface as hero (promise → proof) */}
        <WorkSection />

        {/* Why Section — Dark Mode Breaker (self-contained) */}
        <WhySection />

        {/* How Section — Process Cards (self-contained) */}
        <HowSection />

        {/* Pricing Section — Final Offer Card (self-contained) */}
        <PricingSignal />

        {/* FAQ Section — Full viewport (self-contained) */}
        <Faq />

        {/* Trust Section — Bio & Social Proof */}
        <TrustSection />

        {/* CTA Section — Dark Mode finale (self-contained) */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
