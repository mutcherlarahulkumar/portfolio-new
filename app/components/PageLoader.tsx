'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const letters = ['R', 'a', 'h', 'u', 'l']

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#080c16] flex flex-col items-center justify-center gap-6"
          >
            {/* Grid bg so it matches the site */}
            <div className="absolute inset-0 grid-bg pointer-events-none" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Name */}
            <div className="relative flex items-end gap-1 md:gap-2">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: 'easeOut' }}
                  className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text leading-none select-none"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="relative text-slate-500 text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
            >
              Full-Stack Developer · AI Enthusiast
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="relative w-28 h-px bg-slate-800 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, delay: 0.7, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}
