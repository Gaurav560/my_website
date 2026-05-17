import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { writingPosts } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function WritingSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="writing"
      ref={ref}
      aria-labelledby="writing-title"
      className="border-t-2 border-ink py-20 lg:py-28"
    >
      {/* Section header */}
      <div className="mb-0 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-8">
        <div>
          <motion.h2
            id="writing-title"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-ink"
          >
            THOUGHTS
            <br />&amp; NOTES
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="max-w-xs font-body text-sm leading-relaxed text-muted"
        >
          Engineering notes, system design observations,
          and security patterns from the field.
        </motion.p>
      </div>

      {/* Posts — editorial list */}
      <div>
        {writingPosts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.href}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
            className="group flex items-start gap-4 border-b-2 border-ink py-6 transition-colors duration-300 hover:bg-cream sm:gap-5 sm:py-8"
            aria-label={`Read: ${post.title}`}
          >
            {/* Number */}
            <span className="mt-1 shrink-0 font-mono text-xs font-bold text-smoke">
              0{i + 1}
            </span>

            {/* Label */}
            <span className="mt-1 hidden shrink-0 border border-orange px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-orange sm:block">
              {post.label}
            </span>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-orange sm:text-xl lg:text-2xl">
                {post.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {post.summary}
              </p>
            </div>

            {/* Arrow */}
            <span
              aria-hidden="true"
              className="mt-1 hidden shrink-0 font-display text-xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-2 group-hover:text-orange sm:block"
            >
              →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
