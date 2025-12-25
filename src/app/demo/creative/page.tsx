import type { Metadata } from "next";
import { DemoLayout } from "@/components/DemoLayout";
import { creativeContent } from "@/content/demoContent";
import { demos } from "@/content/demos";

const demo = demos.find((d) => d.slug === "creative")!;

export const metadata: Metadata = {
  title: `${creativeContent.intro.name} — ${creativeContent.intro.role}`,
  description: demo.description,
};

export default function CreativeDemoPage() {
  return <DemoLayout content={creativeContent} />;
}
