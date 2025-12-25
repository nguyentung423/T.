"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { label: t.footer.links.email, href: "mailto:tungnh.vspace@gmail.com" },
    {
      label: t.footer.links.linkedin,
      href: "https://www.linkedin.com/in/tungnguyenhoang/",
    },
    { label: t.footer.links.zalo, href: "https://zalo.me/0374918396" },
  ];

  return (
    <footer
      className="border-t border-white/10 py-8"
      style={{ backgroundColor: "#1D1D1F" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>

          {/* Social Links */}
          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
