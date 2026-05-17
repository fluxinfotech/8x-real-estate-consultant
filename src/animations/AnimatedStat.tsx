import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Typography, type TypographyProps } from '@mui/material'

type AnimatedStatProps = TypographyProps & {
  value: number
  prefix?: string
  suffix?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function AnimatedStat({ value, prefix = '', suffix = '', ...typoProps }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let raf = 0
    const start = performance.now()
    const duration = 1800

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setDisplay(Math.round(value * easeOutCubic(t)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value])

  return (
    <Typography ref={ref} component="span" {...typoProps}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </Typography>
  )
}
