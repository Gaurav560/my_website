import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { testimonials } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-labelledby="testimonials-title"
      className="border-t-2 border-ink py-20 lg:py-28"
    >
      {/* Section header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-8">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            07 / TESTIMONIALS
          </motion.span>
          <motion.h2
            id="testimonials-title"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-ink"
          >
            KIND
            <br />
            WORDS
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="max-w-xs"
        >
          <p className="font-body text-sm leading-relaxed text-muted">
            What colleagues, managers, and the community say about working with me.
          </p>
          <p className="mt-2 font-mono text-xs italic text-smoke">
            * Placeholder testimonials — real ones coming soon.
          </p>
        </motion.div>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease }}
            className={
              'flex flex-col justify-between border-2 border-ink bg-white p-7 shadow-[5px_5px_0px_#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#ff5c00]' +
              (i === 0 ? ' md:col-span-2 lg:col-span-1' : '')
            }
          >
            {/* Large decorative quote */}
            <span
              aria-hidden="true"
              className="-mb-3 block font-display text-8xl font-black leading-none text-orange/20 select-none"
            >
              "
            </span>

            {/* Quote text */}
            <blockquote className="flex-1">
              <p className="font-body text-sm leading-7 text-ink">{t.quote}</p>
            </blockquote>

            {/* Author */}
            <figcaption className="mt-6 border-t-2 border-ink/10 pt-5">
              <p className="font-display text-sm font-bold leading-snug text-ink">
                {t.author}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {t.role}
                <span className="mx-1.5 text-orange">·</span>
                {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
