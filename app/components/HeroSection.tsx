"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiDownload } from "react-icons/hi";
import Tagline from "./Tagline";

const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "→ Rahul Kumar Mutcherla", color: "#60a5fa" },
  { type: "cmd", text: "cat role.txt" },
  {
    type: "out",
    text: "→ Backend Dev  |  Go  |  Microservices",
    color: "#a78bfa",
  },
  { type: "cmd", text: "ls ./projects" },
  { type: "out", text: "→ sync-fission   muzix   alumnex", color: "#34d399" },
  { type: "cmd", text: "git status" },
  { type: "out", text: "● Open to new opportunities", color: "#10b981" },
];

const stats = [
  { label: "CGPA", value: "9.22" },
  { label: "Projects", value: "5+" },
  { label: "Experience", value: "1+ yr" },
  { label: "Tech Stack", value: "12+" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left column ── */}
          <div className="space-y-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-badge">
                <span className="pulse-dot" />
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="section-label mb-3">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="gradient-text">Rahul Kumar</span>
                <br />
                <span className="text-slate-100">Mutcherla</span>
              </h1>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-violet-400 font-medium h-8"
            >
              <Tagline />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed max-w-md"
            >
              Motivated full-stack developer specializing in backend systems, Go
              microservices, and gRPC APIs - building scalable solutions that
              make a real impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="mailto:rahulkumarmutcherla@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <HiMail className="h-5 w-5" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
              >
                View Projects
              </a>
              <a
                href="/RahulKumarMutcherlaResume.pdf"
                download="RahulKumarMutcherla_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-blue-500/60 text-slate-300 hover:text-blue-400 rounded-lg font-medium transition-all duration-200 hover:bg-blue-500/8"
              >
                <HiDownload className="h-5 w-5" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-5"
            >
              <a
                href="https://github.com/mutcherlarahulkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-mutcherla-91022524b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rahulkumarmutcherla@gmail.com"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <HiMail className="h-6 w-6" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-4 gap-4 pt-5 border-t border-slate-800/60"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column - Terminal window ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="terminal-window w-full max-w-md float">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-blue-500/10 bg-slate-900/40">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span
                  className="ml-3 text-xs text-slate-500"
                  style={{
                    fontFamily: "var(--font-mono, ui-monospace, monospace)",
                  }}
                >
                  rahul@dev ~ portfolio
                </span>
              </div>

              {/* Terminal body */}
              <div
                className="p-6 space-y-2 text-sm"
                style={{
                  fontFamily: "var(--font-mono, ui-monospace, monospace)",
                }}
              >
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.22, duration: 0.3 }}
                  >
                    {line.type === "cmd" ? (
                      <p>
                        <span className="text-blue-400">$</span>
                        <span className="text-emerald-400"> {line.text}</span>
                      </p>
                    ) : (
                      <p style={{ color: line.color }}>{line.text}</p>
                    )}
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                  className="text-blue-400"
                >
                  <span>$</span>
                  <span className="blink-cursor text-emerald-400"> _</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-xs text-slate-600"
          style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
        >
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
