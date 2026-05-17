import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="certifications"
      ref={ref}
      aria-labelledby="certs-title"
      className="border-t-2 border-ink py-20 lg:py-28"
    >
      {/* Section header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-8">
        <div>
          <motion.h2
            id="certs-title"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-ink"
          >
            CLOUD
            <br />
            CREDS
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="max-w-xs font-body text-sm leading-relaxed text-muted"
        >
          AWS certifications validating expertise in cloud architecture,
          security, and production deployment patterns.
        </motion.p>
      </div>

      {/* Cert cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-3xl">
        {certifications.map((cert, i) => {
          const earned = cert.status === 'earned'
          return (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease }}
              className={
                'flex flex-col justify-between p-7 transition-all duration-300' +
                (earned
                  ? ' border-2 border-ink bg-white shadow-brutal hover:-translate-y-1 hover:shadow-[5px_5px_0px_#ff5c00]'
                  : ' border-2 border-dashed border-smoke bg-cream')
              }
            >
              {/* Top row — issuer + badge */}
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-muted">{cert.issuer}</span>
                <span
                  className={
                    'shrink-0 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest' +
                    (earned
                      ? ' bg-orange text-paper'
                      : ' border border-smoke text-smoke')
                  }
                >
                  {earned ? 'CERTIFIED ✓' : 'IN PREP →'}
                </span>
              </div>

              {/* Cert code — big */}
              <div>
                <p className="font-display text-4xl font-black leading-none tracking-tighter text-ink">
                  {cert.code}
                </p>
                <p className="mt-2 font-body text-sm leading-snug text-muted">
                  {cert.name}
                </p>
              </div>

              {/* Link / status */}
              <div className="mt-6">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-b-2 border-ink font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:border-orange hover:text-orange"
                  >
                    Verify Credential ↗
                  </a>
                ) : earned ? null : (
                  <p className="font-mono text-xs text-smoke">
                    Credential URL coming soon
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
