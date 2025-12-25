import type { Metadata } from "next";
import { DemoLayout } from "@/components/DemoLayout";
import { devContent } from "@/content/demoContent";
import { demos } from "@/content/demos";

const demo = demos.find((d) => d.slug === "dev")!;

export const metadata: Metadata = {
  title: `${devContent.intro.name} — ${devContent.intro.role}`,
  description: demo.description,
};

export default function DevDemoPage() {
  return <DemoLayout content={devContent} />;
}
