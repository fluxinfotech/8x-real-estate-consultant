import { Box, Container, Grid, Typography } from '@mui/material'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import { motion } from 'framer-motion'
import { Seo } from '../components/seo/Seo'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Reveal } from '../animations/Reveal'
import { useSiteConfig } from '../hooks/useSiteConfig'
import founderImg from '../assets/atul-jadhav-founder.jpg'

export function AboutPage() {
  const { config } = useSiteConfig()
  const a = config.about

  return (
    <>
      <Seo title="About Us" description="Company story, mandate, timeline, and market expertise behind 8x Real Estate Consultant." path="/about" ogImage={config.seo?.ogImage} />

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <SectionHeader kicker="Firm dossier" title={a.headline} subtitle={a.marketExpertise} />

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <GlassPanel sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="overline" color="primary">
                    Founder
                  </Typography>
                  <Box
                    component="img"
                    src={founderImg}
                    alt="Mr. Atul Arjun Jadhav"
                    sx={{
                      width: '100%',
                      height: 260,
                      objectFit: 'cover',
                      borderRadius: 2,
                      mt: 1.5,
                      mb: 2,
                      border: (t) => `1px solid ${t.palette.divider}`
                    }}
                  />
                  <FormatQuoteRoundedIcon sx={{ color: 'primary.main', fontSize: 32, display: 'block', mb: 0.5 }} />
                  <Typography variant="body1" sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.25rem', lineHeight: 1.5, mb: 2, fontStyle: 'italic' }}>
                    {a.founderQuote}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                    Mr. Atul Arjun Jadhav.
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.05em', display: 'block', mt: 0.5 }}>
                    {a.founderTitle}
                  </Typography>
                </Box>
              </GlassPanel>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              {a.companyStory.map((paragraph, idx) => (
                <Reveal key={idx}>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.85, fontSize: '1.06rem' }}>
                    {paragraph}
                  </Typography>
                </Reveal>
              ))}
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <GlassPanel sx={{ p: 3, height: '100%' }}>
                <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.22em' }}>
                  Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.82 }}>
                  {a.mission}
                </Typography>
              </GlassPanel>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <GlassPanel sx={{ p: 3, height: '100%' }}>
                <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.22em' }}>
                  Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.82 }}>
                  {a.vision}
                </Typography>
              </GlassPanel>
            </Grid>
          </Grid>

          <SectionHeader kicker="Pillars" title="Operational principles that survived every liquidity cycle we've traded." />

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {a.pillars.map((pillar, idx) => (
              <Grid key={pillar.title} size={{ xs: 12, md: 4 }}>
                <Reveal delay={idx * 0.06}>
                  <GlassPanel sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1.5 }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {pillar.body}
                    </Typography>
                  </GlassPanel>
                </Reveal>
              </Grid>
            ))}
          </Grid>

          {a.timeline?.length ? (
            <>
              <SectionHeader kicker="Timeline" title="Institutional pacing. Boutique soul." />

              <Box sx={{ position: 'relative', pl: { xs: 2, md: 4 }, borderLeft: (t) => `2px solid ${t.palette.divider}` }}>
                {a.timeline.map((step, idx) => (
                  <Reveal key={step.year}>
                    <Box sx={{ pb: idx === (a.timeline?.length ?? 0) - 1 ? 1 : 4, position: 'relative' }}>
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }}>
                        <Typography variant="overline" color="primary">
                          {step.year}
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 520, lineHeight: 1.75 }}>
                          {step.body}
                        </Typography>
                      </motion.div>
                    </Box>
                  </Reveal>
                ))}
              </Box>
            </>
          ) : null}
        </Container>
      </Box>
    </>
  )
}
