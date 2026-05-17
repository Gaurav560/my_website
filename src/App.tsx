import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AboutSection } from './components/AboutSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { Ticker } from './components/Ticker'
import { WritingSection } from './components/WritingSection'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 border-b-2 border-ink transition-all duration-300' +
        (scrolled ? ' bg-paper/96 backdrop-blur-md' : ' bg-paper')
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors duration-200 hover:text-orange"
          aria-label="Home"
        >
          GS
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-bold uppercase tracking-widest text-ink transition-colors duration-200 hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire button */}
        <a
          href="#contact"
          className="hidden border-2 border-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-ink hover:text-paper lg:block"
        >
          Hire me
        </a>

        {/* Mobile menu toggle */}
        <button
          className="flex flex-col gap-1.5 p-1 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={
              'block h-0.5 w-6 bg-ink transition-all duration-300' +
              (menuOpen ? ' translate-y-2 rotate-45' : '')
            }
          />
          <span
            className={
              'block h-0.5 w-6 bg-ink transition-all duration-300' +
              (menuOpen ? ' opacity-0' : '')
            }
          />
          <span
            className={
              'block h-0.5 w-6 bg-ink transition-all duration-300' +
              (menuOpen ? ' -translate-y-2 -rotate-45' : '')
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
            className="overflow-hidden border-t-2 border-ink bg-paper"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink/20 py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-colors duration-200 hover:text-orange"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 border-2 border-ink px-5 py-3 text-center font-mono text-sm font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
              >
                Hire me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-10">
        <HeroSection />
      </div>

      <Ticker />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AboutSection />
      </div>

      {/* Skills — full bleed dark */}
      <SkillsSection />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ProjectsSection />
        <WritingSection />
        <CertificationsSection />
        <TestimonialsSection />
      </div>

      {/* Contact — full bleed dark footer */}
      <ContactSection />
    </div>
  )
}

export default App
