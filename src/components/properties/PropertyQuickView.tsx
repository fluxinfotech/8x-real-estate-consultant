import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { alpha, Box, Button, Chip, Dialog, DialogContent, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import type { Property } from '../../types'
import { BADGE_LABELS } from '../../utils/badgeLabels'

type PropertyQuickViewProps = {
  property: Property | null
  open: boolean
  onClose: () => void
  whatsappDigits: string
}

export function PropertyQuickView({ property, open, onClose, whatsappDigits }: PropertyQuickViewProps) {
  const waHref = property
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(`Inquiry: ${property.title} — ${property.location}`)}`
    : '#'

  return (
    <Dialog open={open && Boolean(property)} onClose={onClose} maxWidth="md" fullWidth scroll="body" slotProps={{ paper: { sx: { borderRadius: 3, overflow: 'hidden' } } }}>
      <DialogContent sx={{ p: 0 }}>
        {property ? (
          <>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={property.image}
                alt={`${property.title} in ${property.city}`}
                loading="lazy"
                sx={{ width: '100%', maxHeight: { xs: 240, sm: 340 }, objectFit: 'cover', display: 'block' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.75) 100%)' }} />
              <IconButton
                aria-label="Close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  color: '#fff',
                  backgroundColor: alpha('#000', 0.35),
                  '&:hover': { backgroundColor: alpha('#000', 0.55) },
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
              <Box sx={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 1 }}>
                  {property.badges?.map((b) => (
                    <Chip
                      key={b}
                      label={BADGE_LABELS[b]}
                      size="small"
                      sx={{
                        color: '#0a0a0a',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        background: (t) => `linear-gradient(120deg, ${t.palette.primary.light}, ${t.palette.primary.main})`,
                      }}
                    />
                  ))}
                </Stack>
                <Typography variant="h5" sx={{ color: '#fff', fontFamily: '"Cormorant Garamond", serif' }}>
                  {property.title}
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#fff', 0.82) }}>
                  {property.city} · {property.location}
                </Typography>
              </Box>
            </Box>
            <Stack spacing={2} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography variant="h5" sx={{ color: 'primary.main', fontFamily: '"Manrope", sans-serif', fontWeight: 800 }}>
                  {property.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.status}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: 'wrap' }}>
                <Typography variant="body2" color="text.secondary">
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    {property.bhk}
                  </Box>{' '}
                  · {property.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Area{' '}
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    {property.area}
                  </Box>
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                {property.description}
              </Typography>
              <Divider />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ borderRadius: 999, flex: 1 }}
                  endIcon={<OpenInNewRoundedIcon />}
                >
                  WhatsApp brief
                </Button>
                <Button variant="outlined" component={RouterLink} to="/contact" size="large" sx={{ borderRadius: 999, flex: 1 }} onClick={onClose}>
                  Book consultation
                </Button>
              </Stack>
            </Stack>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
