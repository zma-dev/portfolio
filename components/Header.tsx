"use client";

import { useState } from "react";

const navItems = [
  { name: "ホーム", href: "#hero", color: "bg-[#FFE500]" },
  { name: "強み", href: "#strengths", color: "bg-[#E60012]" },
  { name: "スキル", href: "#skills", color: "bg-[#00A0E9]" },
  { name: "経歴", href: "#career", color: "bg-[#00A73C]" },
  { name: "コンタクト", href: "#contact", color: "bg-[#E85298]" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#1A1A1A]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            className="text-2xl font-black text-[#1A1A1A] tracking-tight hover:text-[#E60012] transition-colors"
          >
            <span className="bg-[#FFE500] px-2 py-1 border-2 border-[#1A1A1A] rounded">
              K.IWASAKI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${item.color} px-4 py-2 text-sm font-bold text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full hover:scale-105 transition-transform shadow-[2px_2px_0_#1A1A1A] hover:shadow-[3px_3px_0_#1A1A1A]`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-[#FFE500] border-2 border-[#1A1A1A] rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6 text-[#1A1A1A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#1A1A1A]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${item.color} px-4 py-3 font-bold text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-lg text-center shadow-[3px_3px_0_#1A1A1A]`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
