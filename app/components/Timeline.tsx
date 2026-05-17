'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TimelineItem {
  title: string
  institution: string
  date: string
  description: string
  fullDesc: string
  type?: string
}

const Card = ({ item }: { item: TimelineItem }) => (
  <div className="glass-card rounded-xl p-6">
    <div className="flex items-start justify-between gap-3 mb-3">
      <h3 className="text-base font-bold text-slate-100 leading-snug">{item.title}</h3>
      <span
        className="text-xs text-slate-600 whitespace-nowrap shrink-0 mt-0.5"
        style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
      >
        {item.date}
      </span>
    </div>
    <p className="text-blue-400 text-sm font-medium mb-3">{item.institution}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
    {item.fullDesc && (
      <p className="text-slate-600 text-xs mt-2 leading-relaxed">{item.fullDesc}</p>
    )}
  </div>
)

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative mb-10 last:mb-0">

      {/* ── Mobile layout (single column, left-aligned) ── */}
      <div className="md:hidden pl-10 relative">
        <div className="absolute left-0 top-5 timeline-dot" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Card item={item} />
        </motion.div>
      </div>

      {/* ── Desktop layout (alternating) ── */}
      <div className="hidden md:flex items-center min-h-[110px]">
        {/* Left slot */}
        <div className="w-1/2 pr-10 flex justify-end">
          {isEven && (
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card item={item} />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="relative z-10 flex-shrink-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="timeline-dot"
          />
        </div>

        {/* Right slot */}
        <div className="w-1/2 pl-10 flex justify-start">
          {!isEven && (
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card item={item} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Mobile left line */}
      <div className="md:hidden absolute left-[6px] top-0 bottom-0 w-px timeline-line opacity-40" />
      {/* Desktop center line */}
      <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px timeline-line opacity-50" />

      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  )
}
