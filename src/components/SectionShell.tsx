import type { ReactNode } from 'react'

type SectionShellProps = {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function SectionShell({
  id,
  title,
  children,
  className = '',
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`fade-in border-t border-line/70 py-16 sm:py-20 ${className}`}
    >
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {children}
    </section>
  )
}