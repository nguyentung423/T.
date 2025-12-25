export interface DemoPageContent {
  intro: {
    name: string;
    role: string;
    location: string;
  };
  summary: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    role: string;
    outcomes: string[];
    link?: string;
  }[];
  notes?: string[];
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
  };
}

export const baContent: DemoPageContent = {
  intro: {
    name: "Alex Chen",
    role: "Business Analyst",
    location: "San Francisco, CA",
  },
  summary: [
    "Business analyst with 2 years of experience in fintech, specializing in process optimization and stakeholder management.",
    "I bridge the gap between business needs and technical solutions, ensuring projects deliver measurable value.",
  ],
  skills: [
    {
      category: "Analysis",
      items: [
        "Requirements Gathering",
        "Process Mapping",
        "Data Analysis",
        "User Research",
      ],
    },
    {
      category: "Tools",
      items: ["SQL", "Tableau", "Jira", "Confluence", "Excel/Sheets"],
    },
    {
      category: "Soft Skills",
      items: [
        "Stakeholder Communication",
        "Documentation",
        "Cross-functional Collaboration",
      ],
    },
  ],
  projects: [
    {
      title: "Payment Flow Optimization",
      description:
        "Led analysis and redesign of the payment processing workflow for a B2B payments platform.",
      role: "Lead Business Analyst",
      outcomes: [
        "Reduced payment processing time by 40%",
        "Decreased support tickets related to payments by 25%",
        "Documented 15+ process improvements",
      ],
    },
    {
      title: "Customer Onboarding Audit",
      description:
        "Conducted comprehensive audit of customer onboarding process, identifying bottlenecks and proposing solutions.",
      role: "Business Analyst",
      outcomes: [
        "Identified 8 friction points in onboarding",
        "Proposed solutions adopted by product team",
        "Onboarding completion rate improved by 18%",
      ],
    },
    {
      title: "Reporting Dashboard Requirements",
      description:
        "Gathered requirements and designed specifications for executive reporting dashboard.",
      role: "Business Analyst",
      outcomes: [
        "Interviewed 12 stakeholders across 4 departments",
        "Created detailed functional specifications",
        "Dashboard launched on schedule with positive feedback",
      ],
    },
  ],
  contact: {
    email: "alex@example.com",
    linkedin: "https://linkedin.com/in/alexchen",
  },
};
