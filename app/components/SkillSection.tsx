'use client'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  logo: string
  proficiency: string
  category: string
}

interface SkillSectionProps {
  skills: Skill[]
}

const categories = [
  {
    id: 'Languages',
    label: 'Languages',
    color: 'text-blue-400',
    badgeColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/8 border-blue-500/25',
  },
  {
    id: 'Frameworks',
    label: 'Frameworks & Libraries',
    color: 'text-violet-400',
    badgeColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/8 border-violet-500/25',
  },
  {
    id: 'Tools',
    label: 'Tools & Databases',
    color: 'text-emerald-400',
    badgeColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/8 border-emerald-500/25',
  },
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

        <div className="space-y-12">
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
                {/* Category label */}
                <h3
                  className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${cat.color}`}
                  style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                >
                  / {cat.label}
                </h3>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-3">
                  {catSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.12 + i * 0.045 }}
                      className="skill-pill"
                    >
                      {/* Icon */}
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain flex-shrink-0"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />

                      {/* Name */}
                      <span className="text-sm text-slate-300 font-medium">{skill.name}</span>

                      {/* Proficiency chip */}
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${cat.badgeBg} ${cat.badgeColor}`}
                        style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                      >
                        {skill.proficiency}
                      </span>
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
