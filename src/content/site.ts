export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  why: {
    headline: string;
    story: string;
    closing: string;
  };
  how: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    commitments: string[];
    postHandover: string;
  };
  pricingSignal: {
    headline: string;
    valueAnchor: string;
    subline: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    email: string;
  };
  footer: {
    copyright: string;
    links: {
      label: string;
      href: string;
    }[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "Studio",
    tagline: "Portfolio websites for early-career professionals",
  },
  hero: {
    headline: "Đừng để tài năng của bạn bị giới hạn trong khổ giấy A4.",
    subheadline:
      "Kỷ nguyên số đòi hỏi nhiều hơn một chiếc CV. Bạn cần một không gian riêng xứng tầm để kể câu chuyện sự nghiệp của mình—chuyên nghiệp, duy mỹ và độc bản.",
  },
  why: {
    headline:
      "Tâm huyết của bạn xứng đáng với một độc bản. Tỉ mỉ đến từng điểm ảnh.",
    story:
      "Bạn đã thức trắng đêm để hoàn thành dự án. Đừng để nó chìm nghỉm trong những template mẫu vô hồn.",
    closing:
      "Đừng để năng lực của bạn bị đánh giá thấp bởi những giao diện đại trà.",
  },
  how: {
    title: "How I work",
    steps: [
      {
        number: "01",
        title: "Brief",
        description:
          "We discuss your role, goals, and the impression you want to leave. No lengthy questionnaires.",
      },
      {
        number: "02",
        title: "Design & Build",
        description:
          "I design and develop your site. You review, suggest changes, and approve before launch.",
      },
      {
        number: "03",
        title: "Handover",
        description:
          "You receive your live site, clean codebase, and documentation. Simple hosting guidance included.",
      },
    ],
    commitments: [
      "Direct communication, no middlemen",
      "Fast turnaround (typically 1–2 weeks)",
      "One month of content updates included after delivery",
    ],
    postHandover:
      "After the included month, small updates are available on request for a modest fee.",
  },
  pricingSignal: {
    headline: "A complete portfolio site, from $800.",
    valueAnchor:
      "Designed around your work. Built with the same care you put into it.",
    subline: "Most projects fall between $800–$1,500, depending on scope.",
  },
  faq: {
    title: "Common questions",
    items: [
      {
        question: "What's included in the one-month post-handover support?",
        answer:
          "Content updates—text changes, adding a new project, swapping images. No structural redesigns or new features. After the first month, updates are available for a small fee per request.",
      },
      {
        question: "Can I update the site myself after handover?",
        answer:
          "Yes. You'll receive a clean codebase with documentation. If you're comfortable with basic code or Markdown, you can make changes yourself. Otherwise, I'm happy to help.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Most projects are completed in 1–2 weeks from kickoff. Complex requests may take slightly longer. I'll give you a clear timeline before we start.",
      },
    ],
  },
  cta: {
    headline: "Bạn đã sẵn sàng nổi bật?",
    subheadline:
      "Đừng để cơ hội vụt mất. Một khoản đầu tư nhỏ cho sự nghiệp lớn.",
    buttonText: "Khám phá Phiên bản Số của bạn",
    email: "tungnh.vspace@gmail.com",
  },
  footer: {
    copyright: "© 2025 Studio. All rights reserved.",
    links: [],
  },
};
