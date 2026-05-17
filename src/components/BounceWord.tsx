import { useRef } from 'react'
import { useAnimate, stagger } from 'framer-motion'

interface Props {
  text: string
}

export function BounceWord({ text }: Props) {
  const [scope, animate] = useAnimate()
  const busy = useRef(false)

  const triggerWave = async () => {
    if (busy.current) return
    busy.current = true

    // Phase 1: letters leap up in a wave with orange flash
    await animate(
      '.char',
      { y: [0, -32, 8, 0] },
      {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: stagger(0.04),
      },
    )

    busy.current = false
  }

  return (
    <span
      ref={scope}
      onMouseEnter={triggerWave}
      style={{ display: 'inherit', cursor: 'default' }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char"
          style={{ display: 'inline-block' }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
