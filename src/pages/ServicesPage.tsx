import { Box, Container, Grid, Typography } from '@mui/material'
import { Seo } from '../components/seo/Seo'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Reveal } from '../animations/Reveal'
import { getServiceIcon } from '../components/icons/brandIcons'
import { useSiteConfig } from '../hooks/useSiteConfig'

export function ServicesPage() {
  const { config } = useSiteConfig()

  return (
    <>
      <Seo
        title="Services"
        description="Property consulting, investment planning, resale, rental desk, mortgages, and legal documentation through 8x Real Estate Consultant."
        path="/services"
        ogImage={config.seo?.ogImage}
      />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Practice areas"
            title="Disciplined service lines calibrated for owners, investors, and institutions."
            subtitle="Compose any combination—we choreograph introductions, dossiers, and execution partners under one stewardship agreement."
            align="center"
          />
          <Grid container spacing={3}>
            {config.services.map((s, i) => {
              const Icon = getServiceIcon(s.icon)
              return (
                <Grid key={s.title} size={{ xs: 12, md: 6 }}>
                  <Reveal delay={i * 0.05}>
                    <GlassPanel
                      sx={{
                        p: 3,
                        height: '100%',
                        transition: 'transform 0.4s ease, border-color 0.4s ease',
                        '&:hover': { transform: 'translateY(-4px)', borderColor: (t) => `${t.palette.primary.main}66` },
                      }}
                    >
                      <Box sx={{ width: 56, height: 56, mb: 2, borderRadius: 2, display: 'grid', placeItems: 'center', background: (t) => `linear-gradient(130deg, ${t.palette.primary.light}, ${t.palette.primary.main})` }}>
                        <Icon sx={{ fontSize: 30, color: '#0a0a0a' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1.5 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {s.description}
                      </Typography>
                    </GlassPanel>
                  </Reveal>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
