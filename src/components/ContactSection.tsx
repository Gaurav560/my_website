import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const email = profile.social.find((s) => s.label === 'Email')?.href ?? 'mailto:hello@example.com'

  return (
    <footer
      id="contact"
      ref={ref}
      aria-labelledby="contact-title"
      className="border-t-2 border-ink bg-ink py-20 text-paper lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.h2
          id="contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-none tracking-tighter text-paper"
        >
          LET'S
          <br />
          TALK
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{ transformOrigin: 'left' }}
          className="my-8 h-[2px] w-full bg-paper/20"
        />

        {/* Email + Phone CTAs */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <motion.a
            href={email}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            whileHover={{ x: 8 }}
            className="group inline-flex w-fit items-center gap-4 font-script italic text-[clamp(1.8rem,4.5vw,4rem)] font-bold leading-none text-paper transition-colors duration-200 hover:text-orange"
            aria-label="Send an email"
          >
            {email.replace('mailto:', '')}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.38, ease }}
            whileHover={{ x: 8 }}
            className="group inline-flex w-fit items-center gap-4 font-display text-[clamp(1.1rem,3vw,2.5rem)] font-black uppercase leading-none tracking-tight text-paper transition-colors duration-200 hover:text-orange"
            aria-label="Call phone number"
          >
            {profile.phone}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </motion.a>
        </div>

        {/* Social links row */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          aria-label="Footer social links"
          className="mt-12 flex flex-wrap gap-4"
        >
          {profile.social.filter((s) => s.label !== 'Email').map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-paper/30 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-smoke transition-all duration-200 hover:border-paper hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </motion.nav>

        {/* Footer tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="mt-16 border-t border-paper/10 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-smoke/60"
        >
          Gaurav Sharma · Software Engineer · {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  )
}
