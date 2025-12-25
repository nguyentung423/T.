import { DemoPageContent } from "./ba";

export const devContent: DemoPageContent = {
  intro: {
    name: "Jordan Park",
    role: "Software Developer",
    location: "Austin, TX",
  },
  summary: [
    "Full-stack developer passionate about building clean, performant web applications.",
    "I focus on React and Node.js, with a strong emphasis on code quality and user experience.",
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Vercel", "Docker"],
    },
  ],
  projects: [
    {
      title: "Task Management App",
      description:
        "Built a full-stack task management application with real-time updates and team collaboration features.",
      role: "Solo Developer",
      outcomes: [
        "Implemented drag-and-drop Kanban board",
        "Built real-time sync with WebSockets",
        "Deployed to production with 99.9% uptime",
      ],
      link: "https://github.com/jordanpark/taskapp",
    },
    {
      title: "E-commerce Product Page",
      description:
        "Developed a high-performance product page template with optimized images and fast load times.",
      role: "Frontend Developer",
      outcomes: [
        "Achieved 98 Lighthouse performance score",
        "Reduced page load time by 60%",
        "Implemented accessible components",
      ],
    },
    {
      title: "API Integration Library",
      description:
        "Created an open-source library for integrating with payment APIs, used by 50+ developers.",
      role: "Open Source Contributor",
      outcomes: [
        "Published to npm with full documentation",
        "200+ weekly downloads",
        "Maintained 100% test coverage",
      ],
      link: "https://github.com/jordanpark/pay-sdk",
    },
  ],
  notes: [
    "Open to full-time opportunities and interesting freelance projects.",
    "Currently learning Rust and exploring systems programming.",
  ],
  contact: {
    email: "jordan@example.com",
    linkedin: "https://linkedin.com/in/jordanpark",
    github: "https://github.com/jordanpark",
  },
};
