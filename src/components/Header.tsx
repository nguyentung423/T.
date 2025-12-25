"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.header.menu_projects, href: "/#work" },
    { label: t.header.menu_process, href: "/#how" },
    { label: t.header.menu_contact, href: "/#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <Container>
        <nav
          className="py-4 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-black tracking-tight"
          >
            T.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  {isHomePage ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:opacity-60"
                      style={{ color: "#1D1D1F" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:opacity-60"
                      style={{ color: "#1D1D1F" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switcher - Desktop */}
            <button
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="relative flex items-center h-8 w-[72px] rounded-full bg-gray-100 p-1 cursor-pointer transition-colors hover:bg-gray-200"
              aria-label={`Switch to ${
                language === "vi" ? "English" : "Vietnamese"
              }`}
            >
              {/* Sliding Indicator */}
              <span
                className="absolute h-6 w-8 rounded-full bg-[#1D1D1F] shadow-sm transition-transform duration-300 ease-out"
                style={{
                  transform:
                    language === "vi" ? "translateX(0)" : "translateX(32px)",
                }}
              />
              {/* Text Labels */}
              <span
                className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-300 ${
                  language === "vi" ? "text-white" : "text-gray-500"
                }`}
              >
                VI
              </span>
              <span
                className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-300 ${
                  language === "en" ? "text-white" : "text-gray-500"
                }`}
              >
                EN
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher - Mobile */}
            <button
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="relative flex items-center h-8 w-[72px] rounded-full bg-gray-100 p-1 cursor-pointer transition-colors hover:bg-gray-200"
              aria-label={`Switch to ${
                language === "vi" ? "English" : "Vietnamese"
              }`}
            >
              {/* Sliding Indicator */}
              <span
                className="absolute h-6 w-8 rounded-full bg-[#1D1D1F] shadow-sm transition-transform duration-300 ease-out"
                style={{
                  transform:
                    language === "vi" ? "translateX(0)" : "translateX(32px)",
                }}
              />
              {/* Text Labels */}
              <span
                className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-300 ${
                  language === "vi" ? "text-white" : "text-gray-500"
                }`}
              >
                VI
              </span>
              <span
                className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-300 ${
                  language === "en" ? "text-white" : "text-gray-500"
                }`}
              >
                EN
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-200">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  {isHomePage ? (
                    <a
                      href={item.href}
                      className="block text-lg font-medium transition-colors hover:opacity-60 py-2"
                      style={{ color: "#1D1D1F" }}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-lg font-medium transition-colors hover:opacity-60 py-2"
                      style={{ color: "#1D1D1F" }}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
