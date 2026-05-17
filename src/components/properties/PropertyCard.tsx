import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined'
import { motion } from 'framer-motion'
import { alpha } from '@mui/material/styles'
import type { Property } from '../../types'
import { BADGE_LABELS } from '../../utils/badgeLabels'
import { GlassPanel } from '../ui/GlassPanel'

type PropertyCardProps = {
  property: Property
  onViewDetails?: (p: Property) => void
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  return (
    <GlassPanel
      sx={{
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.45s ease, box-shadow 0.45s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: (t) =>
            t.palette.mode === 'dark' ? `0 28px 90px ${alpha('#000', 0.65)}` : `0 26px 70px ${alpha('#0a0a0a', 0.12)}`,
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 3' }}>
        <motion.div style={{ width: '100%', height: '100%' }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <Box
            component="img"
            src={property.image}
            alt={`${property.title} — ${property.type} in ${property.city}`}
            loading="lazy"
            decoding="async"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 42%, rgba(0,0,0,0.78) 100%)', pointerEvents: 'none' }} />
        <Stack direction="row" spacing={1} useFlexGap sx={{ position: 'absolute', top: 12, left: 12, flexWrap: 'wrap', maxWidth: '92%' }}>
          {property.badges?.slice(0, 3).map((b) => (
            <Chip
              key={b}
              size="small"
              label={BADGE_LABELS[b]}
              sx={{
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#0a0a0a',
                backdropFilter: 'blur(6px)',
                background: (t) => `linear-gradient(120deg, ${alpha(t.palette.primary.light, 0.92)}, ${alpha(t.palette.primary.main, 0.92)})`,
              }}
            />
          ))}
          {property.featured ? (
            <Chip size="small" label="Featured" sx={{ color: '#fff', border: `1px solid ${alpha('#fff', 0.25)}`, backgroundColor: alpha('#000', 0.35) }} />
          ) : null}
        </Stack>
        <Typography variant="h6" sx={{ position: 'absolute', left: 16, right: 16, bottom: 14, color: '#fff', fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', textShadow: '0 8px 30px rgba(0,0,0,0.55)' }}>
          {property.title}
        </Typography>
      </Box>

      <Box sx={{ p: 2.25, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        <Typography variant="caption" color="primary" sx={{ letterSpacing: '0.16em', fontWeight: 700 }}>
          {property.city.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location} · {property.status}
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: '"Manrope", sans-serif', fontWeight: 800, color: 'primary.main' }}>
          {property.price}
        </Typography>
        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', color: 'text.secondary' }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
            <BedOutlinedIcon sx={{ fontSize: 18 }} />
            <Typography variant="caption">{property.bhk}</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
            <SquareFootOutlinedIcon sx={{ fontSize: 18 }} />
            <Typography variant="caption">{property.area}</Typography>
          </Stack>
          <Typography variant="caption">{property.type}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, flex: 1 }}>
          {property.description}
        </Typography>
        <Button variant="outlined" fullWidth sx={{ mt: 'auto', borderRadius: 999, fontWeight: 700 }} onClick={() => onViewDetails?.(property)}>
          View details
        </Button>
      </Box>
    </GlassPanel>
  )
}
