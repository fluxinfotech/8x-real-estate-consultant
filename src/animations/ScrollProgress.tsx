import { Box } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.15 })

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: (t) => t.zIndex.tooltip + 2,
        transformOrigin: '0%',
        background: (t) => `linear-gradient(90deg, ${alpha(t.palette.primary.light, 0.2)}, ${t.palette.primary.main})`,
      }}
      style={{ scaleX }}
    />
  )
}
