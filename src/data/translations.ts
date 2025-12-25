// src/data/translations.ts
// Bilingual content for Vietnamese (default) and English

export type Language = "vi" | "en";

export const translations = {
  vi: {
    header: {
      menu_projects: "Dự án",
      menu_process: "Quy trình",
      menu_contact: "Liên hệ",
    },
    hero: {
      eyebrow: "Dành cho những người không chấp nhận sự nhạt nhòa.",
      headline: "Đừng để tài năng của bạn bị giới hạn trong khổ giấy A4.",
      subheadline:
        "Kỷ nguyên số đòi hỏi nhiều hơn một chiếc CV. Bạn cần một không gian riêng xứng tầm để kể câu chuyện sự nghiệp của mình—chuyên nghiệp, duy mỹ và độc bản.",
      cta: "Khám phá Phiên bản Số của bạn",
    },
    projects: {
      title: "Tuyển tập Tác phẩm",
      subtitle:
        "Không chỉ là giao diện. Đây là cách họ định vị bản thân trước thế giới. Hãy xem qua để hình dung cách bạn sẽ xuất hiện.",
    },
    philosophy: {
      top: "Bạn đã thức trắng đêm để hoàn thành dự án. Đừng để nó chìm nghỉm trong những template mẫu vô hồn.",
      headline:
        "Tâm huyết của bạn xứng đáng với một độc bản. Tỉ mỉ đến từng điểm ảnh.",
      highlight1: "độc bản",
      highlight2: "từng điểm ảnh",
      bottom:
        "Đừng để năng lực của bạn bị đánh giá thấp bởi những giao diện đại trà.",
    },
    process: {
      tag: "Quy trình",
      title: "Hành trình kiến tạo.",
      step1_label: "BƯỚC 01",
      step1_title: "Định hình Phong cách",
      step1_desc:
        "Tôi không bắt đầu bằng giao diện. Tôi bắt đầu bằng câu chuyện của bạn. Cùng nhau, chúng ta tìm ra ngôn ngữ hình ảnh phản chiếu đúng nhất con người bạn.",
      step1_note: "Trao đổi 1:1, thấu hiểu sâu sắc.",
      step2_label: "BƯỚC 02",
      step2_title: "Chế tác Thủ công",
      step2_desc:
        "Từng điểm ảnh được tôi tinh chỉnh thủ công để đạt sự hoàn mỹ nhất. Không chỉ là hiển thị, tôi kiến tạo trải nghiệm thị giác đẳng cấp cuốn hút người xem ngay lập tức.",
      step2_note: "Trau chuốt tỉ mỉ đến từng chi tiết.",
      step3_label: "BƯỚC 03",
      step3_title: "Sẵn sàng Tỏa sáng",
      step3_desc:
        "Bàn giao đường link định danh riêng biệt hoạt động ổn định tuyệt đối. Bạn chỉ cần tập trung tỏa sáng, mọi vấn đề kỹ thuật vận hành đã có tôi quản lý trọn gói.",
      step3_note: "Vận hành trơn tru, không lo lỗi.",
      disclaimer:
        "Bảo trợ kỹ thuật toàn diện trong 30 ngày đầu tiên. Về sau, tôi vẫn luôn ở đây để đồng hành nâng cấp phiên bản mới với mức phí hỗ trợ đặc biệt.",
    },
    pricing: {
      tag: "ĐẦU TƯ",
      title: "Một lần cho mãi mãi.",
      package_name: "The Signature.",
      price: "1.500.000\u00A0đ",
      description:
        "Tương đương giá trị một đôi giày, nhưng đưa sự nghiệp của bạn đi xa hơn vạn dặm.",
      description2: "Sở hữu vĩnh viễn. Không phí ẩn.",
      cta: "Đặt lịch kiến tạo ngay",
      cta_secondary: "chat với tôi trước",
      benefits_title: "Bạn nhận được gì",
      benefits: [
        "Vị thế khác biệt. Tạm biệt CV giấy, gửi đi một đường link mang tên bạn.",
        "Trải nghiệm không giới hạn. Mượt mà hoàn hảo trên mọi thiết bị.",
        "Ấn tượng tức thì. Không để HR phải chờ đợi.",
        "Định danh trên Google. Để thế giới tìm thấy bạn.",
        "Quyền kiểm soát tuyệt đối. Bạn làm chủ nội dung, tôi lo phần kỹ thuật.",
      ],
      footer_note: "Xây dựng dựa trên cá tính thật của bạn. 100% thuộc về bạn.",
    },
    faq: {
      tag: "FAQ",
      title: "Câu hỏi thường gặp",
      items: [
        {
          question: "Đây có phải là template mẫu không?",
          answer:
            "Hoàn toàn không. Đây là sản phẩm được 'may đo' riêng (Bespoke) dựa trên cá tính và dữ liệu của bạn. Tôi sử dụng công nghệ Next.js hiện đại nhất để đảm bảo hiệu năng và tính độc bản, không dùng các giao diện đại trà.",
        },
        {
          question: "Nếu tôi chưa có nội dung/CV sẵn thì sao?",
          answer:
            "Đừng lo lắng. Tôi sẽ gửi bạn bộ khung nội dung chuẩn (Framework) để bạn dễ dàng điền thông tin. Chúng ta sẽ cùng thảo luận để chắt lọc những điểm sáng giá nhất trong hành trình sự nghiệp của bạn.",
        },
        {
          question: "Thời gian hoàn thiện Portfolio mất bao lâu?",
          answer:
            "Để đảm bảo sự chỉn chu đến từng điểm ảnh, quy trình thường kéo dài dưới 1 tuần. Nếu bạn cần gấp cho lịch phỏng vấn quan trọng, hãy báo trước để tôi sắp xếp lộ trình ưu tiên.",
        },
        {
          question: "Tôi có phải trả tiền hosting hàng tháng không?",
          answer:
            "Không. Website của bạn được lưu trữ trên hạ tầng đám mây quốc tế (Global Edge Network) với chi phí 0đ trọn đời. Bạn hoàn toàn không phải lo lắng về việc gia hạn server hàng tháng.",
        },
        {
          question: "Tôi có cần mua tên miền không?",
          answer:
            "Bạn được tặng miễn phí tên miền định danh (dạng tenban.vercel.app). Nếu bạn muốn nâng tầm thương hiệu với tên miền riêng (.com, .vn), tôi sẽ hỗ trợ kỹ thuật kết nối hoàn toàn miễn phí.",
        },
        {
          question: "Tôi có cần thanh toán hết một lần không?",
          answer:
            "Không. Để đảm bảo sự tin tưởng song phương, bạn chỉ cần tạm ứng 50% phí trách nhiệm để giữ lịch triển khai. 50% còn lại chỉ thanh toán khi website đã hoàn thiện và bạn hoàn toàn hài lòng.",
        },
        {
          question: "Sau này tôi muốn cập nhật nội dung thì làm thế nào?",
          answer:
            "Trong 30 ngày đầu, tôi hỗ trợ cập nhật miễn phí. Về sau, khi bạn có thành tựu mới cần bổ sung, tôi luôn ở đây đồng hành hỗ trợ nâng cấp phiên bản mới với mức phí tri ân dành riêng cho khách hàng cũ.",
        },
      ],
    },
    about: {
      headline: "Không chỉ là Code. Là câu chuyện của bạn.",
      description:
        "Tôi hiểu cảm giác tài năng bị lu mờ giữa hàng ngàn file PDF giống hệt nhau. Tôi ở đây để chuyển hóa kinh nghiệm và cá tính của bạn thành một giao diện số sắc sảo.",
      testimonial_quote:
        "Đầu tư vào Portfolio này là quyết định đúng đắn nhất của mình. Thay vì gửi một file PDF nhàm chán, mình gửi một đường link. HR bên FPT rất ấn tượng với sự chỉn chu này.",
      testimonial_author: "Minh H.",
      testimonial_role: "Junior Developer @ FPT",
      profile_name: "Tùng.",
      profile_role: "Creator & Tech Partner.",
    },
    footer: {
      badge: "Cánh cửa đang mở",
      headline: "Thế giới đang chờ câu chuyện của bạn.",
      subtext: "Đừng để cơ hội vụt mất chỉ vì sự nhạt nhòa.",
      cta: "Khởi tạo dấu ấn",
      copyright: "© 2025 Studio. All rights reserved.",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        zalo: "Zalo",
      },
    },
  },
  en: {
    header: {
      menu_projects: "Projects",
      menu_process: "Process",
      menu_contact: "Contact",
    },
    hero: {
      eyebrow: "For those who refuse to be invisible.",
      headline: "Don't let A4 paper limit your potential.",
      subheadline:
        "The digital era demands more than a standard CV. You need a professional, aesthetic, and unique space to tell your career story properly.",
      cta: "Discover Your Digital Version",
    },
    projects: {
      title: "Selected Works",
      subtitle:
        "More than just interfaces. This is how they define themselves to the world. Take a look to envision your own presence.",
    },
    philosophy: {
      top: "You stayed up all night finishing that project. Don't let it drown in soulless templates.",
      headline:
        "Your dedication deserves a masterpiece. Meticulous down to every pixel.",
      highlight1: "masterpiece",
      highlight2: "every pixel",
      bottom: "Don't let your capability be undervalued by generic interfaces.",
    },
    process: {
      tag: "Process",
      title: "The Creation Journey.",
      step1_label: "STEP 01",
      step1_title: "Defining Style",
      step1_desc:
        "I don't start with the interface. I start with your story. Together, we find the visual language that best reflects who you are.",
      step1_note: "1:1 discussion, deep understanding.",
      step2_label: "STEP 02",
      step2_title: "Crafted Precision",
      step2_desc:
        "Every pixel is manually refined for ultimate perfection. It's not just display; I create a premium visual experience that captivates viewers immediately.",
      step2_note: "Meticulously polished details.",
      step3_label: "STEP 03",
      step3_title: "Ready to Shine",
      step3_desc:
        "Handing over a distinct, absolutely stable identity link. You just focus on shining; I handle all technical operations entirely.",
      step3_note: "Smooth operation, zero worries.",
      disclaimer:
        "Full technical support for the first 30 days. Afterward, I'm always here to assist with upgrades for a special support fee.",
    },
    pricing: {
      tag: "INVESTMENT",
      title: "Once and Forever.",
      package_name: "The Signature.",
      price: "$59",
      description:
        "Less than a pair of sneakers, but takes your career miles further.",
      description2: "Lifetime ownership. No hidden fees.",
      cta: "Book Your Creation Now",
      cta_secondary: "chat with me first",
      benefits_title: "What you get",
      benefits: [
        "Distinct Position. Goodbye paper CVs, send a link bearing your name.",
        "Unlimited Experience. Perfectly smooth on all devices.",
        "Instant Impression. Don't keep HR waiting.",
        "Google Identity. Let the world find you easily.",
        "Absolute Control. You own the content, I manage the tech.",
      ],
      footer_note: "Built upon your true personality. 100% yours.",
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is this a pre-made template?",
          answer:
            "Absolutely not. This is a 'Bespoke' product tailored to your personality and data. I use modern Next.js technology to ensure performance and uniqueness, avoiding generic interfaces.",
        },
        {
          question: "What if I don't have my content/CV ready yet?",
          answer:
            "Don't worry. I'll send you a standard content framework to easily fill in your information. We'll discuss together to highlight the best parts of your career journey.",
        },
        {
          question: "How long does the Portfolio take to complete?",
          answer:
            "To ensure pixel-perfect polish, the process typically takes under 1 week. If you need it urgently for an important interview, let me know in advance so I can arrange a priority timeline.",
        },
        {
          question: "Do I need to pay for monthly hosting?",
          answer:
            "No. Your website is hosted on a global edge network at $0/month for life. You don't have to worry about monthly server renewals.",
        },
        {
          question: "Do I need to buy a domain name?",
          answer:
            "You get a free identity domain (yourname.vercel.app). If you want to elevate your brand with a custom domain (.com, .vn), I'll provide free technical support for the connection.",
        },
        {
          question: "Do I need to pay fully upfront?",
          answer:
            "No. To ensure mutual trust, you only need to deposit 50% as a commitment fee to secure the deployment schedule. The remaining 50% is paid only when the website is complete and you're fully satisfied.",
        },
        {
          question: "How do I update content later?",
          answer:
            "In the first 30 days, I support updates for free. Afterward, whenever you have new achievements to add, I'm always here to assist with upgrades at a special loyalty rate for returning clients.",
        },
      ],
    },
    about: {
      headline: "Not just Code. It's your story.",
      description:
        "I understand the feeling of talent being overshadowed by thousands of identical PDF files. I'm here to translate your experience and personality into a sharp digital interface.",
      testimonial_quote:
        "Investing in this Portfolio was my best decision. Instead of a boring PDF, I sent a link. HR at FPT was very impressed with the polish.",
      testimonial_author: "Minh H.",
      testimonial_role: "Junior Developer @ FPT",
      profile_name: "Tùng.",
      profile_role: "Creator & Tech Partner.",
    },
    footer: {
      badge: "The door is open",
      headline: "The world is waiting for your story.",
      subtext: "Don't let opportunity slip away due to being indistinct.",
      cta: "Start Your Mark",
      copyright: "© 2025 Studio. All rights reserved.",
      links: {
        email: "Email",
        linkedin: "LinkedIn",
        zalo: "Zalo",
      },
    },
  },
};

export type TranslationType = typeof translations.vi;
