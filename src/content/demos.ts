export interface Demo {
  slug: string;
  title: string;
  role: string;
  tags: string[];
  thumbnail: string;
  description: string;
  route: string;
  enabled: boolean;
  livePreviewUrl?: string;
}

export const demos: Demo[] = [
  {
    slug: "ba",
    title: "Alex Chen",
    role: "Product Designer",
    tags: ["UX Research", "Prototyping", "Design Systems"],
    thumbnail: "/demos/ba-thumbnail.svg",
    description:
      "Giao diện tối giản, chuyên nghiệp dành cho khối kinh tế/văn phòng.",
    route: "/demo/ba",
    enabled: true,
    livePreviewUrl: "https://p5des-8h3e.vercel.app/",
  },
  {
    slug: "dev",
    title: "Robin Ng",
    role: "Backend Developer",
    tags: ["Node.js", "Database", "API Design"],
    thumbnail: "/demos/dev-thumbnail.svg",
    description:
      "Giao diện Dark Mode, đậm chất công nghệ dành cho dân kỹ thuật/IT.",
    route: "/demo/dev",
    enabled: true,
    livePreviewUrl: "https://dev-two-flame.vercel.app/",
  },
  {
    slug: "creative",
    title: "Tung Nguyen",
    role: "Business Analyst",
    tags: ["Data", "Strategy", "Process"],
    thumbnail: "/demos/creative-thumbnail.svg",
    description:
      "Visual-forward portfolio for designers who want their work to speak first.",
    route: "/demo/creative",
    enabled: true, // Now enabled for tripod layout
    livePreviewUrl: "https://pr5-phi.vercel.app/",
  },
];

export const enabledDemos = demos.filter((demo) => demo.enabled);
