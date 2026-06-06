"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

interface EducationProps {
  educationTitle: string;
  education: string;
  darkMode: boolean;
}

export default function Education({ educationTitle, education, darkMode }: EducationProps) {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {educationTitle}
          </span>
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`${darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/50 border-gray-200/50"} p-8 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 shrink-0">
              <FaGraduationCap size={28} />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Da Nang University of Technology
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {education}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
