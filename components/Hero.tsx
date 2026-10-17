"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Send,
  MessageCircle,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Terminal from "./Terminal";
import type { LangContent } from "@/data/content";

interface HeroProps {
  content: LangContent;
}

export default function Hero({ content }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const roles = content.roles;
    const currentRole = roles[currentRoleIndex % roles.length];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, content.roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-sky-500/15 dark:bg-sky-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[560px] h-[560px] rounded-full bg-orange-500/15 dark:bg-orange-500/10 blur-[130px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[100px] animate-pulse-glow" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />

        {/* Massive Outlined Watermark Text */}
        <div
          aria-hidden="true"
          className="watermark-text select-none absolute inset-x-0 -bottom-4 sm:-bottom-8 text-center text-[18vw] font-black uppercase tracking-tighter opacity-30 dark:opacity-15 transition-all pointer-events-none"
        >
          BAO LUAN
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel shadow-sm text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-5 border border-emerald-500/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{content.availableStatus}</span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase mb-1"
            >
              {content.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-3"
            >
              <span className="gradient-text">{content.title}</span>
            </motion.h1>

            {/* Animated Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 sm:h-12 flex items-center mb-5"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 font-mono">
                {displayedText}
                <span className="inline-block w-2.5 h-6 sm:h-7 bg-sky-500 ml-1 translate-y-1 animate-cursor-blink" />
              </span>
            </motion.div>

            {/* Lead Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              {content.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 mb-9"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{content.ctaWork}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                <span>{content.ctaContact}</span>
              </a>
            </motion.div>

            {/* Credibility / Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full pt-4 border-t border-slate-200/60 dark:border-white/10"
            >
              <p className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Key Highlights
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-200 border-amber-500/30">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Tetote Hackathon 2024 (Rank #4)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-200 border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>HackerRank Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-slate-700 dark:text-slate-200 border-sky-500/30">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  <span>GTM MEDIA AI Developer</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2 sm:gap-3 mt-6"
            >
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/50 hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-[#0A66C2] hover:border-[#0A66C2]/50 hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={content.contact.zalo}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-blue-500 hover:border-blue-500/50 hover:scale-105 transition-all duration-200 font-bold text-xs"
                aria-label="Zalo"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={content.contact.telegram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-[#229ED9] hover:border-[#229ED9]/50 hover:scale-105 transition-all duration-200"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${content.contact.email}`}
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-rose-500 hover:border-rose-500/50 hover:scale-105 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${content.contact.phone}`}
                className="p-2.5 sm:p-3 rounded-xl glass-panel text-emerald-500 hover:border-emerald-500/50 hover:scale-105 transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 w-full flex flex-col justify-center"
          >
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-cyan-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-75" />
              <Terminal content={content} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-400/50 dark:border-white/20 flex justify-center p-1">
          <div className="w-1.5 h-2.5 rounded-full bg-sky-500 animate-scroll-mouse" />
        </div>
      </div>
    </section>
  );
}
