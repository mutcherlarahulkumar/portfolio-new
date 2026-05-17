"use client";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const stats = [
  {
    value: "9.22",
    unit: "/ 10",
    label: "Academic CGPA",
    accent: "from-blue-500 to-cyan-400",
    valueColor: "text-blue-300",
  },
  {
    value: "5+",
    unit: "",
    label: "Projects Shipped",
    accent: "from-violet-500 to-purple-400",
    valueColor: "text-violet-300",
  },
  {
    value: "15+",
    unit: "",
    label: "Technologies",
    accent: "from-emerald-500 to-teal-400",
    valueColor: "text-emerald-300",
  },
  {
    value: "1+",
    unit: "yr",
    label: "Work Experience",
    accent: "from-amber-500 to-orange-400",
    valueColor: "text-amber-300",
  },
];

const focuses = [
  "Backend Engineering",
  "Microservices",
  "gRPC / REST APIs",
  "Full-Stack Dev",
  "AI Integration",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3">Get to know me</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* ── Left: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-400 text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="text-blue-400 font-semibold">
                Rahul Kumar Mutcherla
              </span>
              , currently pursuing a B.Tech in Computer Science at{" "}
              <span className="text-violet-400">
                Anil Neerukonda Institute of Technology and Sciences
              </span>{" "}
              with a CGPA of 9.22.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in{" "}
              <span className="text-emerald-400 font-semibold">
                backend development
              </span>{" "}
              with Go, building scalable microservices and high-performance gRPC
              APIs. Currently a Trainee Software Engineer at{" "}
              <span className="text-blue-400 font-semibold">
                Afford Medical Technologies
              </span>
              , designing and shipping production backend systems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              On the full-stack side, I build React frontends, design REST APIs,
              and integrate AI-powered features — always with a focus on clean
              architecture and scalability.
            </p>

            {/* Focus area chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {focuses.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-400"
                  style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
                >
                  {f}
                </motion.span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="/RahulKumarMutcherlaResume.pdf"
                download="RahulKumarMutcherla_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm"
              >
                <HiDownload className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/mutcherlarahulkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-lg font-medium transition-all text-sm"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-mutcherla-91022524b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 rounded-lg font-medium transition-all text-sm"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right: Stats + Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="glass-card rounded-xl overflow-hidden"
                >
                  {/* Colored accent bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${stat.accent}`} />
                  <div className="p-5">
                    <div className={`text-2xl font-bold leading-none ${stat.valueColor}`}>
                      {stat.value}
                      {stat.unit && (
                        <span className="text-base font-semibold ml-1 opacity-70">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div
                      className="text-xs text-slate-500 mt-2 uppercase tracking-[0.15em]"
                      style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LeetCode card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-yellow-500 to-orange-400" />
              <div className="p-5 flex items-center gap-4">
                <div className="p-2.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg shrink-0 text-xl leading-none">
                  🧩
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-200 font-medium text-sm">
                    300+ Problems Solved
                  </p>
                  <p
                    className="text-xs text-yellow-500/80 mt-0.5"
                    style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
                  >
                    LeetCode · Data Structures & Algorithms
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certification card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <div className="p-5 flex items-center gap-4">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 rounded-lg shrink-0 text-xl leading-none">
                  🎖️
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm">
                    Postman API Fundamentals Student Expert
                  </p>
                  <p
                    className="text-xs text-slate-500 mt-0.5"
                    style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
                  >
                    Postman · March 2024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current role card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
              <div className="p-5 flex items-center gap-4">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg shrink-0 text-xl leading-none">
                  💼
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm">
                    Trainee Software Engineer
                  </p>
                  <p
                    className="text-xs text-emerald-400 mt-0.5"
                    style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
                  >
                    Afford Medical Technologies · May 2025 – Present
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
