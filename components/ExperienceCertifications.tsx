"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { LangContent } from "@/data/content";
import { credlyBadgeIds } from "@/data/content";

interface ExperienceProps {
  content: LangContent;
}

export default function ExperienceCertifications({ content }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "certifications" | "education">(
    "experience"
  );

  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-28 relative overflow-hidden bg-slate-500/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-sky-500 dark:text-sky-400 mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">{content.experienceTitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            {content.experienceSubtitle}
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel shadow-md shadow-black/5 gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Kinh Nghiệm</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Chứng Chỉ & Giải Thưởng</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Học Vấn</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="exp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 dark:border-sky-500/20 space-y-10 sm:space-y-12 max-w-4xl mx-auto"
            >
              {content.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-sky-500 ring-4 ring-white dark:ring-slate-900 group-hover:scale-125 transition-transform shadow-md shadow-sky-500/50" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 rounded-3xl glass-panel shadow-lg shadow-black/5 hover:border-sky-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs uppercase font-extrabold tracking-wider text-sky-500 dark:text-sky-400 block mb-0.5">
                          {exp.company}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 dark:text-sky-400 text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.desc}
                    </p>

                    {/* Achievements List */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skills pills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="cert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl glass-panel relative overflow-hidden group hover:border-amber-500/40 shadow-lg shadow-black/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 font-bold">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {cert.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                      {cert.title}
                    </h3>

                    {cert.issuer && (
                      <p className="text-xs font-semibold text-amber-500 mb-2">
                        {cert.issuer}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {cert.desc}
                    </p>

                    {cert.badge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{cert.badge}</span>
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Credly Verified Badges Section */}
              <div className="pt-8 border-t border-slate-200/60 dark:border-white/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Official Digital Credentials
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    Credly Verified Badges
                  </h4>
                </div>

                <div className="flex flex-wrap gap-4 justify-center items-center">
                  {credlyBadgeIds.map((badgeId) => (
                    <div
                      key={badgeId}
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id={badgeId}
                      data-share-badge-host="https://www.credly.com"
                      className="rounded-xl overflow-hidden shadow-md shadow-black/5"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="edu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="p-8 rounded-3xl glass-panel relative overflow-hidden shadow-xl shadow-black/10 border border-slate-200/80 dark:border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-sky-500/10 text-sky-500">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-sky-500">
                      Bachelor of Engineering
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mt-0.5">
                      {content.education.school}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                      {content.education.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{content.education.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{content.education.location}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {content.education.details}
                </p>

                <div className="pt-5 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-500">
                    Data Structures & Algorithms
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-500">
                    Distributed Systems
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-violet-500/10 text-violet-500">
                    Object-Oriented Programming (OOP)
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-500">
                    Software Architecture
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
