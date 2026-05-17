"use client";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const stats = [
  { emoji: "📊", label: "CGPA", value: "9.22 / 10" },
  { emoji: "🚀", label: "Projects Built", value: "5+" },
  { emoji: "⚡", label: "Technologies", value: "12+" },
  { emoji: "🏆", label: "Certifications", value: "1" },
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

        <div className="grid lg:grid-cols-2 gap-14 items-start">
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
              <span className="text-blue-400 font-medium">
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
              <span className="text-emerald-400 font-medium">
                backend development
              </span>{" "}
              with Go, building scalable microservices and high-performance gRPC
              APIs. Currently a Trainee Software Engineer at{" "}
              <span className="text-blue-400 font-medium">
                Afford Medical Technologies
              </span>
              , designing and shipping production backend systems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              On the full-stack side, I build React frontends, design REST APIs,
              and integrate AI-powered features into web applications - always
              with a focus on clean architecture and scalability.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/RahulKumarMutcherlaResume.pdf"
                download="RahulKumarMutcherla_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <HiDownload className="h-5 w-5" />
                Download Resume
              </a>
              <a
                href="https://github.com/mutcherlarahulkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-lg font-medium transition-all"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-mutcherla-91022524b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 rounded-lg font-medium transition-all"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right: Stats + Certification ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="text-2xl mb-2">{stat.emoji}</div>
                  <div className="text-xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-xl p-5 border-l-2 border-l-blue-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg text-2xl leading-none">
                  🎖️
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm">
                    Postman API Fundamentals Student Expert
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Postman • March 2024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current company card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-xl p-5 border-l-2 border-l-emerald-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-2xl leading-none">
                  💼
                </div>
                <div>
                  <p className="text-slate-200 font-medium text-sm">
                    Trainee Software Engineer
                  </p>
                  <p className="text-xs text-emerald-400 mt-0.5">
                    Afford Medical Technologies • May 2025 – Present
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
