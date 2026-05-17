'use client'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiTerminal } from 'react-icons/hi'

interface Project {
  title: string
  date: string
  description: string
  tech: string[]
  github?: string
}

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3">What I&apos;ve built</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 flex flex-col group"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/18 transition-colors">
                  <HiTerminal className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs text-slate-700 font-bold"
                    style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-300 transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p
                  className="text-xs text-slate-700 mb-3"
                  style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                >
                  {project.date}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-800/70">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-blue-500/8 text-blue-400 border border-blue-500/20 rounded-md"
                    style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
