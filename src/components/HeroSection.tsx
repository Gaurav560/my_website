import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { BounceWord } from './BounceWord'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const up = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative flex min-h-[92vh] flex-col justify-between pb-12 pt-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {/* Top bar — badge only */}
        <motion.div
          variants={fadeIn}
          className="mb-8 flex items-center justify-end border-b-2 border-ink pb-5"
        >
          <motion.span
            className="cursor-default border-2 border-orange bg-orange px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-paper"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Open to work ↗
          </motion.span>
        </motion.div>

        {/* Name line 1 */}
        <motion.h1
          id="hero-name"
          variants={up}
          className="select-none font-display text-[clamp(4.5rem,13vw,14rem)] font-black uppercase leading-none tracking-tighter text-ink"
        >
          <BounceWord text="GAURAV" />
        </motion.h1>

        {/* Name line 2 + floating tagline */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.span
            variants={up}
            aria-hidden="true"
            className="select-none font-display text-[clamp(4.5rem,13vw,14rem)] font-black uppercase leading-none tracking-tighter text-ink"
          >
            <BounceWord text="SHARMA" />
          </motion.span>

          <motion.div
            variants={up}
            className="mb-2 max-w-[22rem] border-2 border-ink bg-white p-5 shadow-brutal theme-transition"
          >
            <p className="font-display text-sm font-semibold uppercase leading-loose tracking-wide text-ink">
              Backend Engineer
              <span className="mx-2 text-orange">/</span>
              AI Systems
              <span className="mx-2 text-orange">/</span>
              Real-time
            </p>
            <p className="mt-2 font-body text-xs leading-relaxed text-muted">
              Building production AI platforms, real-time infrastructure,
              and backend systems that scale under load.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={fadeIn} className="mt-8 h-[2px] w-full bg-ink" />

        {/* Social links */}
        <motion.nav
          variants={up}
          aria-label="Social links"
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          {profile.social.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="border-2 border-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {s.label}
            </motion.a>
          ))}
          <span className="ml-auto hidden font-mono text-xs text-smoke sm:block">
            Scroll ↓
          </span>
        </motion.nav>
      </motion.div>

      {/* Decorative background block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 -z-10 h-56 w-56 border-2 border-cream bg-orange/10"
      />
    </section>
  )
}
