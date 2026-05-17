import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-title"
      className="border-t-2 border-ink py-20 lg:py-28"
    >
      {/* Section header */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-8">
        <div>
          <motion.h2
            id="projects-title"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="font-display text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-none tracking-tighter text-ink"
          >
            SELECTED
            <br />
            WORK
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="max-w-xs font-body text-sm leading-relaxed text-muted"
        >
          Focused builds in backend systems, security infrastructure,
          and engineering tooling.
        </motion.p>
      </div>

      {/* Projects layout — first two side by side, third full-width */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease }}
            className={
              'group flex flex-col justify-between border-2 border-ink bg-white p-7 shadow-brutal theme-transition transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#ff5c00]' +
              (i === projects.length - 1 && projects.length % 2 !== 0
                ? ' md:col-span-2'
                : '')
            }
          >
            <div>
              <div className="mb-5 flex items-start justify-between">
                <span className="font-mono text-xs font-bold text-orange">
                  0{i + 1}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-ink opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-ink hover:text-paper"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    GitHub ↗
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-orange px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-orange opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-orange hover:text-paper"
                      aria-label={`Demo for ${project.title}`}
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-3 font-display text-xl font-bold leading-tight tracking-tight text-ink transition-colors duration-200 group-hover:text-orange lg:text-2xl">
                {project.title}
              </h3>

              <p className="font-body text-sm leading-7 text-muted">
                {project.description}
              </p>
            </div>

            {/* Stack tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-ink px-3 py-1 font-mono text-xs text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
