import { useMemo, useState } from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import EastRoundedIcon from '@mui/icons-material/EastRounded'
import { Link as RouterLink } from 'react-router-dom'
import { AnimatedStat } from '../animations/AnimatedStat'
import { Reveal } from '../animations/Reveal'
import { ConsultationConversionBand } from '../components/home/ConsultationConversionBand'
import { HeroFullscreen } from '../components/home/HeroFullscreen'
import { InvestmentOpportunityGrid } from '../components/home/InvestmentOpportunityGrid'
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel'
import { WhyChooseStrip } from '../components/home/WhyChooseStrip'
import { PropertyCard } from '../components/properties/PropertyCard'
import { PropertyFiltersToolbar } from '../components/properties/PropertyFiltersToolbar'
import { PropertyQuickView } from '../components/properties/PropertyQuickView'
import { Seo } from '../components/seo/Seo'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SITE_CONFIG_STATIC, useSiteConfig } from '../hooks/useSiteConfig'
import { useProperties } from '../hooks/useProperties'
import type { Property } from '../types'
import { defaultPropertyFilters, filterProperties, sortProperties, type PropertyFilterState } from '../utils/propertyFilters'

export function HomePage() {
  const { config } = useSiteConfig()
  const { properties } = useProperties()
  const brand = config.brand.name
  const tagline = config.brand.tagline

  const [featuredFilters, setFeaturedFilters] = useState<PropertyFilterState>(() => ({ ...defaultPropertyFilters(), sort: 'featured' }))
  const [detail, setDetail] = useState<Property | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const openDetail = (p: Property) => {
    setDetail(p)
    setDetailOpen(true)
  }

  const featuredPool = useMemo(() => {
    const pref = properties.filter((p) => p.featured)
    return pref.length ? pref : properties.slice(0, 8)
  }, [properties])

  const featuredDisplay = useMemo(() => {
    const filtered = filterProperties(featuredPool, { ...featuredFilters, sort: 'featured' })
    return sortProperties(filtered, 'featured').slice(0, 6)
  }, [featuredPool, featuredFilters])

  const desc = config.seo?.defaultDescription ?? `${brand} delivers premium acquisitions and verified inventory across corridors we know intimately.`

  return (
    <>
      <Seo title={brand} description={desc} path="/" ogImage={config.seo?.ogImage} />
      <HeroFullscreen brandName={brand} tagline={tagline} />

      <Box sx={{ py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
                lg: 'repeat(5, minmax(0, 1fr))',
              },
            }}
          >
            {config.stats.map((s) => (
              <Reveal key={s.label}>
                <GlassPanel sx={{ p: 3, height: '100%' }}>
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.2em' }}>
                    {s.label}
                  </Typography>
                  <AnimatedStat
                    variant="h3"
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    sx={{ mt: 1.5, display: 'block', fontFamily: '"Cormorant Garamond", serif' }}
                  />
                </GlassPanel>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Featured inventory"
            title="Architectural scarcity, dossier-checked before it reaches your inbox."
            subtitle="Use quick filters—or open the Properties desk for search, sorting, and deep catalog review. Listing data sits in bundled JSON under src/data/properties.json."
          />
          <PropertyFiltersToolbar properties={featuredPool} value={featuredFilters} onChange={setFeaturedFilters} showSort={false} />
          <Grid container spacing={3}>
            {featuredDisplay.map((p, i) => (
              <Grid key={p.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <Reveal delay={i * 0.06}>
                  <PropertyCard property={p} onViewDetails={() => openDetail(p)} />
                </Reveal>
              </Grid>
            ))}
          </Grid>
          {!featuredDisplay.length ? (
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              No listings match these filters yet—relax budget or geography to widen the aperture.
            </Typography>
          ) : null}
          <Stack direction="row" sx={{ justifyContent: 'center', mt: 5 }}>
            <Button component={RouterLink} to="/properties" variant="outlined" size="large" endIcon={<EastRoundedIcon />} sx={{ px: 4, borderRadius: 999 }}>
              Open full catalogue
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Why principals choose us"
            title="We deploy investment rigor—not brochure photography."
            subtitle="One desk for underwriting, statutory hygiene, negotiated pricing, capital introduction, and handover choreography."
            align="center"
          />
          <WhyChooseStrip items={config.whyChooseUs} />
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Investment opportunities"
            title="Liquidity ladders across every trophy format."
            subtitle="Each lane has its underwriting ritual—tell us where you anchor risk and horizon; we assemble the dossier accordingly."
          />
          <InvestmentOpportunityGrid categories={config.investmentOpportunities} />
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeader kicker="Testimonials" title="Reputation built on disciplined outcomes." subtitle="Families, founders, and funds—each mandated with written clarity." />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <TestimonialsCarousel testimonials={config.testimonials} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ConsultationConversionBand phoneTel={config.contact.phoneTel} whatsappDigits={config.contact.whatsappDigits} />

      <PropertyQuickView property={detail} open={detailOpen} onClose={() => setDetailOpen(false)} whatsappDigits={SITE_CONFIG_STATIC.contact.whatsappDigits} />
    </>
  )
}
