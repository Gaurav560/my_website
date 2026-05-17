import { useState, useRef, useCallback, useEffect } from 'react'

const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&?!'

interface Props {
  text: string
}

export function ScrambleText({ text }: Props) {
  const [display, setDisplay] = useState(text)
  const rafRef = useRef<number | null>(null)
  const busy = useRef(false)

  const run = useCallback(() => {
    if (busy.current) return
    busy.current = true
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    let frame = 0
    // 6 frames per character → each letter locks in ~100ms apart at 60fps
    const total = text.length * 6

    const tick = () => {
      frame++
      const locked = Math.floor((frame / total) * text.length)

      const next = text
        .split('')
        .map((c, i) => {
          if (c === ' ') return ' '
          if (i < locked) return text[i]
          return POOL[Math.floor(Math.random() * POOL.length)]
        })
        .join('')

      setDisplay(next)

      if (frame < total) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
        busy.current = false
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    [],
  )

  return (
    <span onMouseEnter={run} style={{ display: 'inherit', fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  )
}
