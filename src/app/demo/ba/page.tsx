import type { Metadata } from "next";
import { DemoLayout } from "@/components/DemoLayout";
import { baContent } from "@/content/demoContent";
import { demos } from "@/content/demos";

const demo = demos.find((d) => d.slug === "ba")!;

export const metadata: Metadata = {
  title: `${baContent.intro.name} — ${baContent.intro.role}`,
  description: demo.description,
};

export default function BADemoPage() {
  return <DemoLayout content={baContent} />;
}
