import { alpha, Box, Button, Container, Stack, Typography } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  phoneTel: string
  whatsappDigits: string
}

export function ConsultationConversionBand({ phoneTel, whatsappDigits }: Props) {
  const wa = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent('I would like an 8x portfolio consultation.')}`

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background: (t) =>
          t.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${alpha(t.palette.primary.main, 0.16)} 0%, rgba(10,10,10,1) 45%, rgba(8,8,12,1) 100%)`
            : `linear-gradient(135deg, ${alpha(t.palette.primary.main, 0.12)} 0%, rgba(255,253,246,1) 50%, rgba(241,239,231,1) 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em', display: 'block', mb: 2 }}>
            Private consultation desk
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 2.5, maxWidth: 720, lineHeight: 1.12 }}>
            One conversation to align capital allocation, timelines, and the next acquisition.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 4, lineHeight: 1.8 }}>
            We respond within one business cycle with dossier summaries—never templates. Confidentiality-first protocol applies to both individuals and institutional desks.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}>
            <Button
              variant="contained"
              component="a"
              href={`tel:${phoneTel}`}
              size="large"
              sx={{ px: 3.5, borderRadius: 999, color: '#0a0a0a', background: (t) => `linear-gradient(120deg, ${t.palette.primary.light}, ${t.palette.primary.main})` }}
              startIcon={<PhoneInTalkOutlinedIcon />}
            >
              Speak with a principal
            </Button>
            <Button variant="outlined" component="a" href={wa} target="_blank" rel="noreferrer" size="large" sx={{ px: 3.5, borderRadius: 999 }} startIcon={<WhatsAppIcon />}>
              WhatsApp line
            </Button>
            <Button component={RouterLink} variant="text" size="large" sx={{ px: 2 }} to="/contact" startIcon={<CalendarMonthRoundedIcon />}>
              Request calendar hold
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}
