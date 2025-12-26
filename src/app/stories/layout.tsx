import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories | T. Portfolio Architect",
  description:
    "Tuyển tập các Case Study chuyển hóa CV thành Digital Portfolio.",
  openGraph: {
    title: "Stories | T. Portfolio Architect",
    description:
      "Tuyển tập các Case Study chuyển hóa CV thành Digital Portfolio.",
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
