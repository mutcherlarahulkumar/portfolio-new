'use client';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill }: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <img className='w-10 h-10 p-2' src={skill.logo} alt="" />
      <div>
        <h3 className="font-bold text-gray-800">{skill.name}</h3>
        <p className="text-sm text-gray-500">{skill.proficiency}</p>
      </div>
    </motion.div>
  );
};

export default SkillBadge;