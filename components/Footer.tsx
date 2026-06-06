"use client";

import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

interface FooterProps {
  footer: string;
  darkMode: boolean;
}

export default function Footer({ footer, darkMode }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`border-t ${darkMode ? "border-gray-800" : "border-gray-200"} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/luana2322"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-purple-400" : "hover:bg-gray-100 text-gray-500 hover:text-purple-600"} transition-all`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:luan23112004@gmail.com"
              className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-purple-400" : "hover:bg-gray-100 text-gray-500 hover:text-purple-600"} transition-all`}
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="tel:+84905449281"
              className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-purple-400" : "hover:bg-gray-100 text-gray-500 hover:text-purple-600"} transition-all`}
            >
              <FaPhone size={20} />
            </a>
          </div>

          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            {footer}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
