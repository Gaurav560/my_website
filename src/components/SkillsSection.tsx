import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-title"
      className="border-t-2 border-ink bg-ink py-20 text-paper lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header row */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-paper/20 pb-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-smoke"
            >
              03 / SKILLS
            </motion.span>
            <motion.h2
              id="skills-title"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-paper"
            >
              TECH &amp;
              <br />
              CRAFT
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="max-w-xs font-body text-sm leading-relaxed text-smoke"
          >
            A map of the technologies, patterns, and disciplines
            I work with daily and continue to deepen.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.heading}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease }}
              className="group border-2 border-paper/20 p-5 transition-all duration-300 hover:border-orange hover:bg-dark"
            >
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-orange">
                {group.heading}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-paper/20 px-3 py-1 font-body text-xs font-medium text-smoke transition-colors duration-200 group-hover:border-paper/40 group-hover:text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
