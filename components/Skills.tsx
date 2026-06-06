"use client";

import { motion } from "framer-motion";
import { FaJava, FaPython, FaJs, FaReact, FaVuejs, FaGitAlt, FaDocker, FaDatabase, FaHtml5, FaPhp, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiFastapi, SiPostman, SiIntellijidea, SiPycharm, SiMongodb, SiWebrtc } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface SkillsProps {
  skillsTitle: string;
  skills: {
    lang: string;
    tools: string;
    other: string;
    items: string[][];
  };
  darkMode: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Java: <FaJava className="text-orange-500" />,
  Python: <FaPython className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  "React Native": <FaReact className="text-cyan-400" />,
  "Vue.js": <FaVuejs className="text-green-500" />,
  "Spring Boot": <SiSpringboot className="text-green-600" />,
  FastAPI: <SiFastapi className="text-teal-500" />,
  "Git/GitHub": <FaGitAlt className="text-orange-600" />,
  Postman: <SiPostman className="text-orange-500" />,
  "Visual Studio Code": <VscVscode className="text-blue-500" />,
  IntelliJ: <SiIntellijidea className="text-purple-500" />,
  "Spring Tool Suite": <SiSpringboot className="text-green-600" />,
  Docker: <FaDocker className="text-blue-600" />,
  PyCharm: <SiPycharm className="text-green-500" />,
  "MongoDB/MySQL": <SiMongodb className="text-green-500" />,
  "HTML/CSS/JavaScript": <FaHtml5 className="text-orange-500" />,
  "PHP/MySQL": <FaPhp className="text-purple-500" />,
  "MVCパターン": <FaDatabase className="text-blue-500" />,
  "MVC Pattern": <FaDatabase className="text-blue-500" />,
  "Agile/Scrum": <FaDatabase className="text-purple-500" />,
  OOP: <FaDatabase className="text-yellow-500" />,
  "RESTful API": <FaNodeJs className="text-green-600" />,
  WebRTC: <SiWebrtc className="text-red-500" />,
};

const getIcon = (skill: string) => {
  for (const [key, icon] of Object.entries(iconMap)) {
    if (skill.includes(key) || key.includes(skill)) return icon;
  }
  return null;
};

const categoryIcons = [<FaJava key="lang" />, <FaDocker key="tools" />, <FaDatabase key="other" />];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills({ skillsTitle, skills, darkMode }: SkillsProps) {
  const categories = [
    { title: skills.lang, icon: categoryIcons[0], items: skills.items[0] },
    { title: skills.tools, icon: categoryIcons[1], items: skills.items[1] },
    { title: skills.other, icon: categoryIcons[2], items: skills.items[2] },
  ];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {skillsTitle}
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${darkMode ? "bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50" : "bg-white/50 border-gray-200/50 hover:border-purple-400/50"} p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-purple-700 dark:text-purple-300">
                <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-lg">
                  {cat.icon}
                </span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, index) => (
                  <span
                    key={index}
                    className={`${darkMode ? "bg-gray-700/50 text-gray-200 hover:bg-purple-900/30 hover:text-purple-300" : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"} px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5`}
                  >
                    {getIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
