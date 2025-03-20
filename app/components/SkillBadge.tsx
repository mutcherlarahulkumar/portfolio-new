'use client';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  logo: string;
  proficiency: string;
}

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <img src={skill.logo} alt={skill.name}  className='w-10 h-10 p-2'/>
      <div className="ml-3">
        <h3 className="font-bold text-gray-800">{skill.name}</h3>
        <p className="text-sm text-gray-500">{skill.proficiency}</p>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
