import { Box, Grid, Typography } from '@mui/material'
import type { WhyChooseItem } from '../../types'
import { GlassPanel } from '../ui/GlassPanel'
import { Reveal } from '../../animations/Reveal'
import { getWhyChooseIcon } from '../icons/brandIcons'
import { motion } from 'framer-motion'

type WhyChooseStripProps = {
  items: WhyChooseItem[]
}

export function WhyChooseStrip({ items }: WhyChooseStripProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item, i) => {
        const Icon = getWhyChooseIcon(item.icon)
        return (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delay={i * 0.07}>
              <GlassPanel sx={{ p: 3, height: '100%', transition: 'transform 0.4s ease, border-color 0.4s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: (t) => `${t.palette.primary.main}77` } }}>
                <motion.div initial={false} whileHover={{ rotate: [-1, 1, 0], scale: 1.06 }} transition={{ duration: 0.45 }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: 2, mb: 2, display: 'grid', placeItems: 'center', background: (t) => `linear-gradient(140deg, ${t.palette.primary.light}, ${t.palette.primary.main})` }}>
                    <Icon sx={{ color: '#0a0a0a' }} />
                  </Box>
                </motion.div>
                <Typography variant="h6" sx={{ mb: 1, fontFamily: '"Cormorant Garamond", serif' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {item.body}
                </Typography>
              </GlassPanel>
            </Reveal>
          </Grid>
        )
      })}
    </Grid>
  )
}
