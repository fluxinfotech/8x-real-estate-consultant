import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const KEY = '8x-intro-seen'

function hasSeenIntro() {
  try {
    return typeof sessionStorage !== 'undefined' && sessionStorage.getItem(KEY) === '1'
  } catch {
    return true
  }
}

export function BrandIntro() {
  const [visible, setVisible] = useState(() => !hasSeenIntro())

  useEffect(() => {
    if (!visible) return
    const dismiss = () => {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        /* ignore */
      }
      setVisible(false)
    }
    const id = window.setTimeout(dismiss, 1900)
    return () => clearTimeout(id)
  }, [visible])

  return (
    <AnimatePresence>
      {visible ? (
        <Box
          component={motion.div}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: (t) => t.zIndex.modal + 20,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: alpha('#070707', 0.94),
            backdropFilter: 'blur(22px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                letterSpacing: '0.06em',
                background: (t) => `linear-gradient(120deg, ${t.palette.primary.light}, ${t.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              8x
            </Typography>
            <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: alpha('#e8e4dc', 0.55), letterSpacing: '0.35em', mt: 1 }}>
              Real Estate Consultant
            </Typography>
          </motion.div>
        </Box>
      ) : null}
    </AnimatePresence>
  )
}
