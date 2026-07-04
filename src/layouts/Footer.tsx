import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { NavLink } from 'react-router-dom'
import type { SiteConfig } from '../types'

type FooterProps = {
  config: SiteConfig
}

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Footer({ config }: FooterProps) {
  const year = new Date().getFullYear()
  const brand = config.brand.name
  const c = config.contact

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: { xs: 6, md: 10 },
        pb: 4,
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        background: (t) => (t.palette.mode === 'dark' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.45)'),
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1 }}>
              {brand}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380, lineHeight: 1.75 }}>
              {config.brand.tagline}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton aria-label="Instagram" size="small" component="a" href="https://www.instagram.com/8x_realestate?igsh=dTM3amlnNmQzNm96" target="_blank" rel="noreferrer">
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ minWidth: 200 }}>
            <Typography variant="overline" sx={{ letterSpacing: '0.22em', color: 'primary.main', mb: 1.5, display: 'block' }}>
              Quick links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((l) => (
                <Link key={l.to} component={NavLink} to={l.to} color="inherit" variant="body2" sx={{ opacity: 0.88, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box sx={{ minWidth: 220 }}>
            <Typography variant="overline" sx={{ letterSpacing: '0.22em', color: 'primary.main', mb: 1.5, display: 'block' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <Box component="a" href={`tel:${c.phoneTel}`} sx={{ color: 'inherit', textDecoration: 'none' }}>
                {c.phoneDisplay}
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <Box component="a" href={`mailto:${c.email}`} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                {c.email}
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
              {c.addressLine}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
          <Typography variant="caption" color="text.secondary">
            © {year} {brand}. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Thane West · Kolshet · Balkum · Manpada · Confidential by default.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
