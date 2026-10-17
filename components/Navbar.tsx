"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Send,
  Code2,
  ChevronDown
} from "lucide-react";

interface NavbarProps {
  title: string;
  lang: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setLang: (lang: string) => void;
  nav: {
    about: string;
    skills: string;
    experience: string;
    certifications?: string;
    projects: string;
    contact: string;
  };
  ctaText: string;
}

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", short: "VI" },
  { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
  { code: "ja", label: "日本語", flag: "🇯🇵", short: "JA" },
];

export default function Navbar({
  title,
  lang,
  darkMode,
  toggleDarkMode,
  setLang,
  nav,
  ctaText,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: nav.about },
    { href: "#experience", label: nav.experience },
    ...(nav.certifications ? [{ href: "#certifications", label: nav.certifications }] : []),
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-xl shadow-black/10 dark:shadow-black/30 py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-orange-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-sky-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-slate-900 text-sky-500 dark:text-sky-400 font-bold text-sm tracking-wider">
                <Code2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-800 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                {title}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 hidden xs:inline">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
                aria-label="Change Language"
              >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-semibold">{currentLangObj.short}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setLangMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-36 rounded-xl glass-panel shadow-xl shadow-black/10 py-1.5 z-50 overflow-hidden"
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => {
                            setLang(l.code);
                            setLangMenuOpen(false);
                          }}
                          className={`flex items-center w-full gap-2 px-3 py-2 text-xs font-medium transition-colors text-left ${
                            lang === l.code
                              ? "bg-sky-500/10 text-sky-500 dark:text-sky-400 font-semibold"
                              : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                          }`}
                        >
                          <span className="text-base">{l.flag}</span>
                          <span>{l.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{ctaText}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200 dark:border-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-slate-200/60 dark:border-white/10 mt-3 pt-3"
            >
              <div className="flex flex-col space-y-1 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-sky-500/10 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-md shadow-sky-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{ctaText}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
