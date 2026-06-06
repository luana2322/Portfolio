"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

interface NavbarProps {
  title: string;
  lang: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
  changeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  nav: { about: string; skills: string; education: string; experience: string; projects: string };
}

const navItems = ["about", "skills", "education", "experience", "projects"] as const;

export default function Navbar({ title, lang, darkMode, toggleDarkMode, changeLanguage, nav }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? "bg-gray-900/80 text-gray-100" : "bg-white/80 text-gray-800"} backdrop-blur-lg border-b ${darkMode ? "border-gray-800" : "border-gray-200/50"} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
              >
                {nav[item]}
              </a>
            ))}
            <select
              value={lang}
              onChange={changeLanguage}
              className={`${darkMode ? "bg-gray-800 text-gray-100 border-gray-700" : "bg-gray-100 text-gray-800 border-gray-300"} text-sm px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer`}
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <button
              onClick={toggleDarkMode}
              className={`${darkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} px-4 py-2 rounded-lg text-sm font-medium transition-all`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200/50 bg-white"} overflow-hidden`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                >
                  {nav[item]}
                </a>
              ))}
              <div className="flex items-center space-x-3 pt-2 border-t dark:border-gray-800 border-gray-200">
                <select
                  value={lang}
                  onChange={changeLanguage}
                  className={`${darkMode ? "bg-gray-800 text-gray-100 border-gray-700" : "bg-gray-100 text-gray-800 border-gray-300"} text-sm px-3 py-1.5 rounded-lg border flex-1`}
                >
                  <option value="ja">日本語</option>
                  <option value="en">English</option>
                </select>
                <button
                  onClick={toggleDarkMode}
                  className={`${darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-700"} px-4 py-2 rounded-lg text-sm flex-1`}
                >
                  {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
