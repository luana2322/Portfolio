"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceCertifications from "@/components/ExperienceCertifications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { content } from "@/data/content";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Read stored theme preference (default to dark for modern high-tech look)
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme ? savedTheme === "dark" : true;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Read stored language preference
    const savedLang = localStorage.getItem("lang");
    if (savedLang && content[savedLang]) {
      setLang(savedLang);
    }

    // Load Credly badge script if not present
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSetLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0b1329] text-sky-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-sky-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Loading Portfolio...</span>
        </div>
      </div>
    );
  }

  const currentContent = content[lang] || content.vi;

  return (
    <div className="min-h-screen relative bg-background text-foreground transition-colors duration-300">
      {/* Floating Navbar */}
      <Navbar
        title={currentContent.title}
        lang={lang}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        setLang={handleSetLang}
        nav={currentContent.nav}
        ctaText={currentContent.ctaContact}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Interactive Terminal */}
        <Hero content={currentContent} />

        {/* About & Quick Stats Section */}
        <About content={currentContent} />

        {/* Career & Experience Timeline + Certifications + Education */}
        <ExperienceCertifications content={currentContent} />

        {/* Featured Projects Showcase with Interactive Filters */}
        <Projects content={currentContent} />

        {/* Tech Stack & Skills Matrix */}
        <Skills content={currentContent} />

        {/* Interactive Contact & Message Form */}
        <Contact content={currentContent} />
      </main>

      {/* Modern Footer */}
      <Footer content={currentContent} />
    </div>
  );
}
