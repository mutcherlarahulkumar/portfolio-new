'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="l-main">
      <section className="my-5 px-6 md:px-20" id='about'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-[#2563eb] mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am Rahul Kumar Mutcherla, currently pursuing a Bachelor of Technology in Computer Science and Engineering at 
            Anil Neerukonda Institute of Technology and Sciences. I am a passionate web developer and artificial intelligence enthusiast, 
            constantly exploring new technologies to build innovative solutions.
          </p>
        </motion.div>
        <div className="about__container flex flex-col md:flex-row items-center justify-center mt-10">
          {/* About Image */}

          {/* Resume Section */}
          <motion.div
            className="mt-6 md:mt-0 md:ml-10 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="https://drive.google.com/file/d/1vMjoAJIBWiHzkjDrehN4uRsu8F4uIrlB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 bg-[#2563eb] text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              View My Resume
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
