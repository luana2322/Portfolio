"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageCircle,
  Clock,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { LangContent } from "@/data/content";

interface ContactProps {
  content: LangContent;
}

export default function Contact({ content }: ContactProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSending(true);

    // Simulate sending & trigger confetti celebration
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#06b6d4", "#fb923c", "#34d399"],
      });

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSentSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs font-semibold text-sky-500 dark:text-sky-400 mb-3"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="gradient-text">{content.contactTitle}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400"
          >
            {content.contactSubtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-xl shadow-black/5 border border-slate-200/80 dark:border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {content.contactCardTitle}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Phản hồi trong vòng 24 giờ</span>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Email</span>
                      <a
                        href={`mailto:${content.contact.email}`}
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-colors"
                      >
                        {content.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(content.contact.email, "email")}
                    className="p-2 rounded-xl text-slate-400 hover:text-sky-500 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === "email" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Số điện thoại / Zalo</span>
                      <a
                        href={`tel:${content.contact.phone}`}
                        className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition-colors"
                      >
                        {content.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(content.contact.phone, "phone")}
                    className="p-2 rounded-xl text-slate-400 hover:text-emerald-500 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/50 dark:border-white/5">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Địa chỉ</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {content.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                  Kênh trao đổi trực tiếp
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <a
                    href={content.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500/40 transition-all duration-200 text-xs font-semibold"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={content.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl glass-panel text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200 text-xs font-semibold"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={content.contact.zalo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl glass-panel text-blue-500 hover:border-blue-500/40 transition-all duration-200 text-xs font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Zalo</span>
                  </a>

                  <a
                    href={content.contact.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl glass-panel text-[#229ED9] hover:border-[#229ED9]/40 transition-all duration-200 text-xs font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-xl shadow-black/5 border border-slate-200/80 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {content.contactForm.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder={content.contactForm.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {content.contactForm.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder={content.contactForm.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {content.contactForm.subject}
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder={content.contactForm.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {content.contactForm.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder={content.contactForm.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                  />
                </div>

                {/* Success alert message */}
                {sentSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2"
                  >
                    <Check className="w-5 h-5 shrink-0" />
                    <span>{content.contactForm.sentSuccess}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {sending ? content.contactForm.sending : content.contactForm.send}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
