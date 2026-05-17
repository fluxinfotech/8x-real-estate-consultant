import { Box, IconButton, Stack, Typography } from '@mui/material'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Testimonial } from '../../types'
import { GlassPanel } from '../ui/GlassPanel'

type TestimonialsCarouselProps = {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  useEffect(() => {
    const id = window.setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6500)
    return () => clearInterval(id)
  }, [testimonials.length])

  if (!t) return null

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <GlassPanel sx={{ p: { xs: 3, md: 4 }, position: 'relative', overflow: 'hidden', minHeight: 280 }}>
      <Stack direction="row" sx={{ justifyContent: 'flex-end', gap: 0.5, mb: 2 }}>
        <IconButton aria-label="Previous testimonial" onClick={prev} size="small">
          <ChevronLeftRoundedIcon />
        </IconButton>
        <IconButton aria-label="Next testimonial" onClick={next} size="small">
          <ChevronRightRoundedIcon />
        </IconButton>
      </Stack>
      <AnimatePresence mode="wait">
        <Box key={idx} component={motion.div} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.45 }}>
          <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 2, fontSize: { xs: '1.45rem', md: '1.75rem' }, lineHeight: 1.45 }}>
            “{t.quote}”
          </Typography>
          <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
            {Array.from({ length: 5 }).map((_, starI) => (
              <StarRoundedIcon key={starI} sx={{ color: starI < t.rating ? 'primary.main' : 'action.disabledBackground', fontSize: 28 }} />
            ))}
          </Stack>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {t.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t.role}
            {t.location ? ` · ${t.location}` : ''}
          </Typography>
        </Box>
      </AnimatePresence>
    </GlassPanel>
  )
}
