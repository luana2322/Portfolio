"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";
import type { Certification, Experience } from "@/data/content";

interface ExperienceCertificationsProps {
  experienceTitle: string;
  experience: Experience[];
  certifications: Certification[];
  darkMode: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ExperienceCertifications({
  experienceTitle,
  experience,
  certifications,
  darkMode,
}: ExperienceCertificationsProps) {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {experienceTitle}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-700 dark:text-purple-300">
              <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <FaBriefcase />
              </span>
              Experience
            </h3>
            <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800 space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-white dark:border-gray-900" />
                  <div className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/50 border-gray-200/50"} p-5 rounded-xl backdrop-blur-sm border hover:shadow-lg transition-all duration-300`}>
                    <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">{exp.period}</p>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{exp.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-700 dark:text-purple-300">
              <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <FaCertificate />
              </span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/50 border-gray-200/50"} p-5 rounded-xl backdrop-blur-sm border hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <FaCertificate className="text-purple-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">{cert.title}</h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-0.5">{cert.period}</p>
                      {cert.desc && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.desc}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
