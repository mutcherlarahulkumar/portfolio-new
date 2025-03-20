'use client'
import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { FaGithub } from 'react-icons/fa'

export default function ProjectSection({ projects }: any) {
  return (
    <section className="my-20 px-6" id='projects'>
      <h2 className="text-4xl font-bold text-[#2563eb] mb-12 text-center">Top Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="p-2 bg-[#7c3aed]/10 rounded-lg">
                  <CodeBracketIcon className="h-8 w-8 text-[#7c3aed]" />
                </span>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                  <FaGithub className="h-6 w-6" />
                </a>
              )}
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-[#2563eb]/20 text-[#2563eb] rounded-full text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 text-gray-400 text-xs italic">#{index + 1}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
