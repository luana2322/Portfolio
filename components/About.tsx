"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  User,
  MapPin,
  Calendar,
  GraduationCap,
  Globe2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import type { LangContent } from "@/data/content";

interface AboutProps {
  content: LangContent;
}

export default function About({ content }: AboutProps) {
  const statsList = [
    {
      value: content.stats.experience,
      label: content.stats.experienceLabel,
      color: "from-sky-500 to-cyan-500",
    },
    {
      value: content.stats.projects,
      label: content.stats.projectsLabel,
      color: "from-cyan-500 to-teal-500",
    },
    {
      value: content.stats.awards,
      label: content.stats.awardsLabel,
      color: "from-amber-500 to-orange-500",
    },
    {
      value: content.stats.dedication,
      label: content.stats.dedicationLabel,
      color: "from-violet-500 to-sky-500",
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-sky-500 dark:text-sky-400 mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>Overview & Profile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">{content.nav.about}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            Kỹ sư phần mềm hướng đến hiệu năng, giải pháp kiến trúc tối ưu và trải nghiệm số hoàn mỹ.
          </motion.p>
        </div>

        {/* 4 Key Metrics / Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-panel relative overflow-hidden group shadow-lg shadow-black/5 hover:border-sky-500/40 transition-all duration-300"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`}
              />
              <span
                className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent block mb-1`}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl glass-panel p-6 sm:p-8 shadow-xl shadow-black/10 border border-slate-200/80 dark:border-white/10 overflow-hidden group">
              {/* Card Ambient Glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity" />

              {/* Avatar with glowing ring */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-orange-400 opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 bg-slate-900">
                  <Image
                    src="/images/profile.png"
                    alt={content.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {content.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-500 dark:text-sky-400">
                  {content.roles[0]}
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>VKU Software Engineer</span>
                </div>
              </div>

              {/* Bio Details List */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200/60 dark:border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Location</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{content.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Age & Birthday</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{content.ageGender}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Education</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{content.education.school}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Languages</span>
                    <span className="font-medium text-slate-700 dark:text-slate-200">Vietnamese, English, Japanese</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex gap-2">
                <a
                  href={content.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-colors"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                Đam mê biến bài toán phức tạp thành hệ thống phần mềm tối ưu & đáng tin cậy
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {content.about}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Với nền tảng vững chắc về khoa học máy tính và kinh nghiệm thực chiến từ các doanh nghiệp công nghệ, tôi tập trung vào việc viết mã nguồn sạch (Clean Code), áp dụng mô hình phân tán Microservices, chuẩn hóa RESTful APIs và tối ưu hóa hệ cơ sở dữ liệu lớn.
              </p>
            </div>

            {/* Core Competencies Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-slate-200/70 dark:border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  Backend & Microservices
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Thiết kế API an toàn, xử lý bất đồng bộ, phân tán dữ liệu với Spring Boot, FastAPI, MySQL, MongoDB và Docker.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-200/70 dark:border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  Cross-Platform Apps
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Xây dựng ứng dụng di động bản địa mượt mà trên iOS & Android bằng React Native và Flutter với UI/UX hiện đại.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-200/70 dark:border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  AI Integration & Automation
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Tích hợp các mô hình học máy (Machine Learning / XGBoost) và API AI tạo sinh (GenAI) vào quy trình thực tế.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-200/70 dark:border-white/5 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                  Clean Architecture
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Tuân thủ các nguyên lý SOLID, mẫu thiết kế phần mềm (Design Patterns), CI/CD tự động và tiêu chuẩn kiểm thử kỹ lưỡng.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 shadow-md shadow-sky-500/20 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                <span>Xem Kinh Nghiệm Chi Tiết</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${content.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 text-sm"
              >
                <Download className="w-4 h-4 text-sky-500" />
                <span>Trao đổi CV qua Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
