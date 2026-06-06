"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  role: string;
  about: string;
  ageGender: string;
  contact: { email: string; phone: string; github: string };
}

export default function Hero({ title, role, about, ageGender, contact }: HeroProps) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-pulse opacity-50 blur-xl" />
            <Image
              src="/images/profile.png"
              alt={title}
              width={160}
              height={160}
              className="rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
            {title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl mb-2 text-gray-600 dark:text-gray-400"
        >
          {ageGender}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl mb-8 font-medium text-gray-800 dark:text-gray-200"
        >
          {role}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <a
            href="mailto:luan23112004@gmail.com"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            {contact.email}
          </a>
          <a
            href="tel:+84905449281"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all"
          >
            {contact.phone}
          </a>
          <a
            href="https://github.com/luana2322"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium hover:shadow-lg hover:shadow-gray-700/30 hover:scale-105 transition-all"
          >
            {contact.github}
          </a>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {about}
        </motion.p>
      </div>
    </motion.section>
  );
}
