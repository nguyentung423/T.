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
    role: "Business Analyst",
    tags: ["Strategy", "Data", "Process"],
    thumbnail: "/demos/ba-thumbnail.svg",
    description:
      "Giao diện tối giản, chuyên nghiệp dành cho khối kinh tế/văn phòng.",
    route: "/demo/ba",
    enabled: true,
    livePreviewUrl: "https://pr5-phi.vercel.app/",
  },
  {
    slug: "dev",
    title: "Jordan Park",
    role: "Software Developer",
    tags: ["Full-Stack", "React", "Node.js"],
    thumbnail: "/demos/dev-thumbnail.svg",
    description:
      "Giao diện Dark Mode, đậm chất công nghệ dành cho dân kỹ thuật/IT.",
    route: "/demo/dev",
    enabled: true,
    livePreviewUrl: "https://pr5-phi.vercel.app/",
  },
  {
    slug: "creative",
    title: "Sam Rivera",
    role: "UX Designer",
    tags: ["UX", "Visual Design", "Research"],
    thumbnail: "/demos/creative-thumbnail.svg",
    description:
      "Visual-forward portfolio for designers who want their work to speak first.",
    route: "/demo/creative",
    enabled: false, // Set to true to enable this demo
  },
];

export const enabledDemos = demos.filter((demo) => demo.enabled);
