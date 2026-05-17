import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { aboutParagraphs } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-title"
      className="border-t-2 border-ink py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left — label + heading */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <h2
              id="about-title"
              className="font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-ink"
            >
              WHO
              <br />AM i
            </h2>
            <div className="mt-6 h-[3px] w-12 bg-orange" />
            <p className="mt-6 font-body text-sm leading-relaxed text-muted">
              Engineer · Researcher · Systems Thinker
            </p>
          </motion.div>
        </div>

        {/* Right — bio cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
          {aboutParagraphs.map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={
                'border-2 border-ink bg-white p-6 shadow-brutal-sm theme-transition transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#ff5c00]' +
                (i === 0 ? ' sm:col-span-2' : '')
              }
            >
              <span className="mb-3 block font-mono text-xs font-bold text-orange">
                0{i + 1}
              </span>
              <p className="font-body text-sm leading-7 text-ink">{para}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
