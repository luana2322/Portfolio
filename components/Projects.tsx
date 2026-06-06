"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/content";

interface ProjectsProps {
  projectsTitle: string;
  projects: Project[];
  darkMode: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects({ projectsTitle, projects, darkMode }: ProjectsProps) {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={cardVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {projectsTitle}
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50" : "bg-white/50 border-gray-200/50 hover:border-purple-400/50"} rounded-2xl shadow-lg backdrop-blur-sm border overflow-hidden group transition-all duration-300 flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.split(", ").slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.split(", ").length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      +{project.tech.split(", ").length - 4}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
