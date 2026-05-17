'use client'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  logo: string
  category: string
}

interface SkillSectionProps {
  skills: Skill[]
}

const categories = [
  { id: 'Languages', label: 'Languages', color: 'text-blue-400' },
  { id: 'Frameworks', label: 'Frameworks & Libraries', color: 'text-violet-400' },
  { id: 'Tools', label: 'Tools & Databases', color: 'text-emerald-400' },
  { id: 'Patterns', label: 'Patterns & Architecture', color: 'text-amber-400' },
]

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3">What I work with</span>
          <h2 className="text-4xl font-bold text-slate-100 mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {categories.map((cat, catIndex) => {
            const catSkills = skills.filter((s) => s.category === cat.id)
            if (catSkills.length === 0) return null

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.12 }}
              >
                {/* Category label with rule */}
                <div className="flex items-center gap-4 mb-6">
                  <h3
                    className={`text-xs font-bold uppercase tracking-[0.2em] shrink-0 ${cat.color}`}
                    style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                  >
                    / {cat.label}
                  </h3>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {catSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.12 + i * 0.04 }}
                      className="skill-pill"
                    >
                      {skill.logo && (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-4 h-4 md:w-5 md:h-5 object-contain flex-shrink-0"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      )}
                      <span className="text-xs md:text-sm font-medium text-slate-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
