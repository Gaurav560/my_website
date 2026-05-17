import { motion } from 'framer-motion'

const ITEMS = [
  'BACKEND ENGINEERING',
  'SYSTEM DESIGN',
  'API ARCHITECTURE',
  'CYBERSECURITY',
  'DISTRIBUTED SYSTEMS',
  'CLOUD INFRASTRUCTURE',
  'SECURITY HARDENING',
  'OBSERVABILITY',
]

const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

export function Ticker() {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-orange py-3">
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="px-8 font-mono text-xs font-bold uppercase tracking-widest text-paper"
          >
            {item} ✦
          </span>
        ))}
      </motion.div>
    </div>
  )
}
