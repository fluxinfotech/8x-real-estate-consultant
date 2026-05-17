import { alpha, Box, Button, Typography, useTheme } from '@mui/material'
import { motion, type Transition } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

type HeroFullscreenProps = {
  brandName: string
  tagline: string
}

const orbTransition: Transition = { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }

export function HeroFullscreen({ brandName, tagline }: HeroFullscreenProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: { xs: 12, md: 14 },
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: theme.palette.mode === 'dark' ? '#050505' : '#f5f4f0' }} />
        <motion.div
          style={{
            position: 'absolute',
            width: '150%',
            height: '120%',
            top: '-20%',
            left: '-28%',
            background: `linear-gradient(125deg, ${alpha(theme.palette.primary.main, 0.42)} 0%, transparent 52%, ${alpha('#4a63d9', theme.palette.mode === 'dark' ? 0.12 : 0.08)} 100%)`,
            filter: 'blur(4px)',
          }}
          animate={{ rotate: [0, 8, 0], x: [0, -24, 0] }}
          transition={orbTransition}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            bottom: '-20%',
            right: '-10%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.28)} 0%, transparent 70%)`,
          }}
          animate={{ y: [0, -36, 0], scale: [1, 1.05, 1] }}
          transition={{ ...orbTransition, duration: 24 }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '140%',
            top: '-36%',
            right: '-40%',
            background:
              theme.palette.mode === 'dark'
                ? 'radial-gradient(ellipse at 65% 30%, rgba(255,245,215,0.07), transparent 45%)'
                : 'radial-gradient(ellipse at 65% 30%, rgba(201,162,39,0.16), transparent 45%)',
          }}
          animate={{ opacity: [0.45, 0.72, 0.45], rotate: [0, -3, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.34em', display: 'block', mb: 2 }}>
            {brandName}
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
          <Typography sx={{ fontSize: { xs: '2.9rem', sm: '4.1rem', md: '4.85rem' }, lineHeight: 1.03, mb: 1.75, fontWeight: 500, fontFamily: '"Cormorant Garamond", serif' }}>
            Portfolio-grade corridors.
          </Typography>
          <Typography sx={{ fontSize: { xs: '2.05rem', sm: '3rem', md: '3.4rem' }, lineHeight: 1.07, mb: 0, fontWeight: 500, fontFamily: '"Cormorant Garamond", serif', color: 'text.secondary' }}>
            Curated exclusively for principals.
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38, duration: 0.8 }}>
          <Typography variant="h5" sx={{ color: 'text.secondary', fontFamily: '"Manrope", sans-serif', fontWeight: 500, maxWidth: 600, lineHeight: 1.55, mt: 3 }}>
            {tagline}
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.75 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 4, alignItems: { xs: 'stretch', sm: 'center' } }}>
            <Button
              component={RouterLink}
              to="/properties"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.75,
                borderRadius: 999,
                fontSize: '1rem',
                color: '#0a0a0a',
                background: (t) => `linear-gradient(120deg, ${t.palette.primary.light}, ${t.palette.primary.main})`,
                boxShadow: (t) => `0 20px 60px ${alpha(t.palette.primary.main, 0.38)}`,
                '&:hover': { transform: 'translateY(-2px)' },
                transition: 'transform 0.35s ease',
              }}
            >
              Explore Properties
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" size="large" sx={{ px: 4, py: 1.75, borderRadius: 999, borderWidth: 1.25 }}>
              Book Consultation
            </Button>
          </Box>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.8 }}>
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.38em', textTransform: 'uppercase', display: 'block', mt: 4 }}>
            Private desk · Institutional discipline
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 1, opacity: 0.5, display: { xs: 'none', md: 'block' } }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
          <Box sx={{ width: 56, height: 80, border: (t) => `2px solid ${alpha(t.palette.primary.main, 0.45)}`, borderRadius: 4, mx: 'auto' }} />
        </motion.div>
      </Box>
    </Box>
  )
}
