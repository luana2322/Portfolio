"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ExperienceCertifications from "@/components/ExperienceCertifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { content, credlyBadgeIds } from "@/data/content";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("ja");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");
    if (savedTheme === "dark") setDarkMode(true);
    if (savedLang) setLang(savedLang);

    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  if (!isClient) return null;

  const c = content[lang as keyof typeof content];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-900"} min-h-screen transition-colors duration-300`}>
      <Navbar
        title={c.title}
        lang={lang}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        changeLanguage={changeLanguage}
        nav={c.nav}
      />

      <Hero
        title={c.title}
        role={c.role}
        about={c.about}
        ageGender={c.ageGender}
        contact={c.contact}
      />

      <Skills
        skillsTitle={c.skillsTitle}
        skills={c.skills}
        darkMode={darkMode}
      />

      <Education
        educationTitle={c.educationTitle}
        education={c.education}
        darkMode={darkMode}
      />

      <ExperienceCertifications
        experienceTitle={c.experienceTitle}
        experience={c.experience}
        certifications={c.certifications}
        darkMode={darkMode}
      />

      {/* Credly Badges Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className={`text-center text-sm mb-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {lang === "ja" ? "認定バッジ" : "Verified Badges"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {credlyBadgeIds.map((badgeId) => (
              <div
                key={badgeId}
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={badgeId}
                data-share-badge-host="https://www.credly.com"
              />
            ))}
          </div>
        </div>
      </section>

      <Projects
        projectsTitle={c.projectsTitle}
        projects={c.projects}
        darkMode={darkMode}
      />

      <Footer footer={c.footer} darkMode={darkMode} />
    </div>
  );
}
