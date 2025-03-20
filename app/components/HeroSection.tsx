'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, ComputerDesktopIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import Tagline from './Tagline'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#2563eb] mb-4">
            Rahul Kumar Mutcherla
          </h1>
          <Tagline />
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center gap-4 mt-6"
        >
          <a
            href="mailto:mutcherlarahulkumar@gmail.com"
            className="flex items-center justify-center bg-[#2563eb] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contact Me
          </a>
          <a
            href="https://github.com/mutcherlarahulkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#7c3aed] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            <ComputerDesktopIcon className="h-5 w-5 mr-2" />
            View Portfolio
          </a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex space-x-6 mt-6 md:mt-0 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/rahul-kumar-mutcherla-91022524b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a
            href="https://github.com/mutcherlarahulkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-gray-800 hover:text-gray-600 transition" />
          </a>
          <a
            href="https://www.youtube.com/@codeNoob-vo1ox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-3xl text-red-600 hover:text-red-800 transition" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Button with Animation */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex items-center justify-center w-14 h-14 bg-[#2563eb] rounded-full shadow-lg animate-bounce hover:bg-blue-700 transition">
          <ChevronDoubleDownIcon className="h-8 w-8 text-white" />
        </div>
      </motion.div>
    </section>
  )
}
