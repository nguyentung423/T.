import { DemoPageContent } from "./ba";

export const creativeContent: DemoPageContent = {
  intro: {
    name: "Sam Rivera",
    role: "UX Designer",
    location: "New York, NY",
  },
  summary: [
    "UX designer focused on creating intuitive, accessible digital experiences.",
    "I combine user research with visual design to build products people genuinely enjoy using.",
  ],
  skills: [
    {
      category: "Design",
      items: [
        "UI Design",
        "Interaction Design",
        "Design Systems",
        "Prototyping",
      ],
    },
    {
      category: "Research",
      items: [
        "User Interviews",
        "Usability Testing",
        "Journey Mapping",
        "A/B Testing",
      ],
    },
    {
      category: "Tools",
      items: ["Figma", "Framer", "Notion", "Miro", "Principle"],
    },
  ],
  projects: [
    {
      title: "Banking App Redesign",
      description:
        "Led the UX redesign of a mobile banking app, improving usability for 500K+ users.",
      role: "Lead UX Designer",
      outcomes: [
        "Increased task completion rate by 35%",
        "Reduced customer support calls by 20%",
        "Launched to positive App Store reviews",
      ],
    },
    {
      title: "Design System Creation",
      description:
        "Built a comprehensive design system for a growing startup, enabling faster product development.",
      role: "UX Designer",
      outcomes: [
        "Created 100+ reusable components",
        "Reduced design-to-dev handoff time by 50%",
        "Documented accessibility guidelines",
      ],
    },
    {
      title: "E-learning Platform",
      description:
        "Designed the user experience for an online learning platform serving adult learners.",
      role: "UX Designer",
      outcomes: [
        "Conducted 20+ user interviews",
        "Designed mobile-first responsive experience",
        "Course completion rate improved by 28%",
      ],
    },
  ],
  contact: {
    email: "sam@example.com",
    linkedin: "https://linkedin.com/in/samrivera",
  },
};
