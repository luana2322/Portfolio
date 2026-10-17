"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaDatabase,
  FaNodeJs,
  FaServer,
  FaReact,
  FaVuejs,
  FaDocker,
  FaGitAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiFastapi,
  SiWebrtc,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiMinio,
  SiPostman,
  SiIntellijidea,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { LangContent } from "@/data/content";

interface SkillsProps {
  content: LangContent;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  FaJava: <FaJava className="w-6 h-6 text-[#f89820]" />,
  FaPython: <FaPython className="w-6 h-6 text-[#3776ab]" />,
  SiTypescript: <SiTypescript className="w-6 h-6 text-[#3178c6]" />,
  FaJs: <FaJs className="w-6 h-6 text-[#f7df1e]" />,
  FaHtml5: <FaHtml5 className="w-6 h-6 text-[#e34f26]" />,
  FaDatabase: <FaDatabase className="w-6 h-6 text-[#4479a1]" />,
  SiSpringboot: <SiSpringboot className="w-6 h-6 text-[#6db33f]" />,
  SiFastapi: <SiFastapi className="w-6 h-6 text-[#009688]" />,
  FaNodeJs: <FaNodeJs className="w-6 h-6 text-[#68a063]" />,
  SiWebrtc: <SiWebrtc className="w-6 h-6 text-[#333333] dark:text-slate-200" />,
  FaServer: <FaServer className="w-6 h-6 text-[#0284c7]" />,
  FaReact: <FaReact className="w-6 h-6 text-[#61dafb]" />,
  SiNextdotjs: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  FaVuejs: <FaVuejs className="w-6 h-6 text-[#4fc08d]" />,
  SiFlutter: <SiFlutter className="w-6 h-6 text-[#02569b]" />,
  SiTailwindcss: <SiTailwindcss className="w-6 h-6 text-[#06b6d4]" />,
  SiMysql: <SiMysql className="w-6 h-6 text-[#4479a1]" />,
  SiMongodb: <SiMongodb className="w-6 h-6 text-[#47a248]" />,
  SiPostgresql: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
  SiMinio: <SiMinio className="w-6 h-6 text-[#c72c48]" />,
  FaDocker: <FaDocker className="w-6 h-6 text-[#2496ed]" />,
  FaGitAlt: <FaGitAlt className="w-6 h-6 text-[#f05032]" />,
  SiPostman: <SiPostman className="w-6 h-6 text-[#ff6c37]" />,
  SiIntellijidea: <SiIntellijidea className="w-6 h-6 text-black dark:text-white" />,
  VscVscode: <VscVscode className="w-6 h-6 text-[#007acc]" />,
  FaProjectDiagram: <FaProjectDiagram className="w-6 h-6 text-[#8b5cf6]" />,
};

const categoryIconMap = [
  <Code2 key="lang" className="w-5 h-5 text-sky-500" />,
  <Server key="backend" className="w-5 h-5 text-emerald-500" />,
  <Smartphone key="frontend" className="w-5 h-5 text-cyan-500" />,
  <Database key="db" className="w-5 h-5 text-amber-500" />,
  <Wrench key="tools" className="w-5 h-5 text-violet-500" />,
];

export default function Skills({ content }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | "all">("all");

  const categories = content.skillCategories;

  const displayedCategories =
    selectedCategory === "all"
      ? categories
      : [categories[selectedCategory]];

  return (
    <section id="skills" className="scroll-mt-28 py-20 sm:py-28 relative overflow-hidden bg-slate-500/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-sky-500 dark:text-sky-400 mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">{content.skillsTitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            {content.skillsSubtitle}
          </motion.p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25 scale-105"
                : "glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Tất cả danh mục
          </button>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === idx
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25 scale-105"
                  : "glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((catGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div className="p-2 rounded-xl glass-panel">
                  {categoryIconMap[groupIdx % categoryIconMap.length]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                  {catGroup.category}
                </h3>
                <span className="text-xs text-slate-400 font-semibold ml-auto">
                  {catGroup.items.length} công nghệ
                </span>
              </div>

              {/* Grid of Skills in this Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {catGroup.items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 rounded-2xl glass-panel flex flex-col items-center text-center group hover:border-sky-500/40 shadow-sm hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {iconComponentMap[skill.icon] || (
                        <Code2 className="w-6 h-6 text-sky-500" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white mb-1">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
