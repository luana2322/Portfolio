"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";
import type { LangContent } from "@/data/content";

interface TerminalProps {
  content: LangContent;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function Terminal({ content }: TerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "luan --version",
      output: (
        <div className="text-slate-300">
          <p className="text-sky-400 font-semibold">Thai Nguyen Bao Luan v2026.1</p>
          <p className="text-xs text-slate-400">Software Engineer · Backend & Mobile Specialist</p>
        </div>
      ),
    },
    {
      command: "cat intro.txt",
      output: (
        <div className="text-slate-300 space-y-1 text-xs sm:text-[13px]">
          <p className="text-emerald-400 font-mono">✓ Status: Ready to build high-scale, resilient software.</p>
          <p className="text-slate-300">Stack: Spring Boot, FastAPI, React Native, Docker, Microservices & AI.</p>
          <p className="text-slate-400">Location: Da Nang, Vietnam</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs sm:text-[13px] text-slate-300 font-mono">
            <p className="text-sky-400 font-bold">Available commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1">
              <span className="text-yellow-400">about</span> <span className="text-slate-400">- Short bio & background</span>
              <span className="text-yellow-400">skills</span> <span className="text-slate-400">- Tech stack breakdown</span>
              <span className="text-yellow-400">projects</span> <span className="text-slate-400">- Featured works</span>
              <span className="text-yellow-400">experience</span> <span className="text-slate-400">- Work history</span>
              <span className="text-yellow-400">contact</span> <span className="text-slate-400">- Reach out details</span>
              <span className="text-yellow-400">clear</span> <span className="text-slate-400">- Clear terminal</span>
            </div>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="text-xs sm:text-[13px] text-slate-300 space-y-1">
            <p className="text-sky-400 font-semibold">{content.title}</p>
            <p className="text-slate-300">{content.about}</p>
            <p className="text-slate-400">🎓 {content.education.school}</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs sm:text-[13px] space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold">Core Proficiencies:</p>
            <p><span className="text-orange-400 font-medium">Backend:</span> Spring Boot, FastAPI, RESTful API, Microservices</p>
            <p><span className="text-cyan-400 font-medium">Frontend & Mobile:</span> React Native, React/Next.js, Vue.js, Flutter</p>
            <p><span className="text-emerald-400 font-medium">Data & Cloud:</span> MySQL, MongoDB, PostgreSQL, MinIO, Docker</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-xs sm:text-[13px] space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold">Highlighted Projects:</p>
            {content.projects.slice(0, 4).map((p) => (
              <p key={p.id}>
                <span className="text-yellow-400 font-medium">▸ {p.name}:</span>{" "}
                <span className="text-slate-300">{p.tech.slice(0, 3).join(", ")}</span>
              </p>
            ))}
            <p className="text-xs text-sky-400/80 pt-1">Scroll down to the Projects section to explore details!</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="text-xs sm:text-[13px] space-y-1.5 text-slate-300">
            {content.experience.map((exp, i) => (
              <p key={i}>
                <span className="text-orange-400 font-medium">[{exp.period}]</span>{" "}
                <span className="text-white font-semibold">{exp.company}</span> - {exp.role}
              </p>
            ))}
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs sm:text-[13px] space-y-1 text-slate-300">
            <p>📧 Email: <a href={`mailto:${content.contact.email}`} className="text-sky-400 underline">{content.contact.email}</a></p>
            <p>📱 Phone: <a href={`tel:${content.contact.phone}`} className="text-sky-400">{content.contact.phone}</a></p>
            <p>🐙 GitHub: <a href={content.contact.github} target="_blank" rel="noreferrer" className="text-sky-400 underline">github.com/luana2322</a></p>
            <p>💬 Zalo: <a href={content.contact.zalo} target="_blank" rel="noreferrer" className="text-sky-400 underline">{content.contact.phone}</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      case "sudo":
        response = (
          <p className="text-red-400 font-mono text-xs sm:text-[13px]">
            Nice try! You already have full visitor privileges 🎉
          </p>
        );
        break;

      default:
        response = (
          <p className="text-rose-400 font-mono text-xs sm:text-[13px]">
            zsh: command not found: {trimmed}. Type <span className="text-yellow-400 font-bold">help</span> to list commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  const quickCommands = ["help", "about", "skills", "projects", "contact", "clear"];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0b1325] shadow-2xl shadow-black/40 overflow-hidden font-mono text-left transition-all duration-300 hover:border-sky-500/30">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block shadow-sm"></span>
          <span className="ml-2 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
            zsh — luan@macbook
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Interactive</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="h-72 sm:h-80 overflow-y-auto p-4 sm:p-5 space-y-3 font-mono text-[13px] leading-relaxed scrollbar-thin"
        onClick={() => inputRef.current?.focus()}
      >
        {logs.map((log, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-sky-400 font-bold">~ $</span>
              <span className="text-yellow-300 font-medium">{log.command}</span>
            </div>
            <div className="pl-4 sm:pl-5">{log.output}</div>
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2 pt-1 text-slate-300">
          <span className="text-sky-400 font-bold">~ $</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-slate-200 outline-none text-xs sm:text-[13px] font-mono"
            placeholder="Type command..."
            autoComplete="off"
            spellCheck="false"
          />
          <span className="w-2 h-4 bg-slate-300 animate-cursor-blink"></span>
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Suggestion Chips */}
      <div className="px-4 py-2.5 bg-black/30 border-t border-white/5 flex items-center flex-wrap gap-1.5 text-xs">
        <span className="text-slate-500 text-[11px] font-sans mr-1">Quick run:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-sky-500/20 text-slate-400 hover:text-sky-300 font-mono text-[11px] border border-white/5 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
