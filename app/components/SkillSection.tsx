'use client';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

interface Skill {
  name: string;
  logo: string;
  proficiency: string;
}

interface SkillSectionProps {
  skills: Skill[];
}

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <section className="my-20" id='skills'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#2563eb] mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillBadge 
              key={index}
              skill={{
                name: skill.name,
                logo: skill.logo, // Ensure it's `logo` not `image`
                proficiency: skill.proficiency || 'Intermediate' // Set default if missing
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
