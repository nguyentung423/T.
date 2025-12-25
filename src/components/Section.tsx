import { ReactNode } from "react";
import { Container } from "./Container";

type SectionBg = "white" | "muted";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
  fullScreen?: boolean;
}

const bgClasses: Record<SectionBg, string> = {
  white: "bg-white",
  muted: "bg-gray-50",
};

export function Section({
  id,
  children,
  className = "",
  bg = "white",
  fullScreen = false,
}: SectionProps) {
  const baseClasses = "scroll-mt-16";
  const bgClass = bgClasses[bg];
  const heightClass = fullScreen
    ? "min-h-screen flex flex-col justify-center py-20 md:py-24"
    : "py-20 md:py-28";

  return (
    <section
      id={id}
      className={`${baseClasses} ${bgClass} ${heightClass} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
      {children}
    </h2>
  );
}
