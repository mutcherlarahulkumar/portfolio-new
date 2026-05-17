'use client'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  logo: string
  category?: string
}

export default function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="skill-pill">
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-5 h-5 object-contain flex-shrink-0"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = 'none'
        }}
      />
      <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
    </motion.div>
  )
}
