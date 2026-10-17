import {
  Code2,
  ArrowUp,
  Mail,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { LangContent } from "@/data/content";

interface FooterProps {
  content: LangContent;
}

export default function Footer({ content }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#about", label: content.nav.about },
    { href: "#experience", label: content.nav.experience },
    { href: "#projects", label: content.nav.projects },
    { href: "#skills", label: content.nav.skills },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <footer className="relative pt-16 pb-12 border-t border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200/60 dark:border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-2 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-orange-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white dark:bg-slate-900 text-sky-500 dark:text-sky-400 font-bold text-sm">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-800 dark:text-white">
                {content.title}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Software Engineer specializing in Java, Spring Boot, React Native, Microservices & AI Integrations.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={content.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel text-[#0A66C2] hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={content.contact.telegram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel text-[#229ED9] hover:opacity-80 transition-opacity"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${content.contact.email}`}
              className="p-2.5 rounded-xl glass-panel text-rose-500 hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 hover:scale-110 transition-transform cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>{content.footer}</p>
          <p className="flex items-center gap-1">
            Built with modern Next.js 15, React 19, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
