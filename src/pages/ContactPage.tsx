import { useState } from 'react'
import { Box, Button, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import { Seo } from '../components/seo/Seo'
import { GlassPanel } from '../components/ui/GlassPanel'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Reveal } from '../animations/Reveal'
import { useSiteConfig } from '../hooks/useSiteConfig'

export function ContactPage() {
  const { config } = useSiteConfig()
  const c = config.contact
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`8x Inquiry — ${name || 'Prospect'}`)
    const body = encodeURIComponent(`${message}\n\nPhone: ${phone}\nEmail: ${email}\n`)
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo title="Contact" description="Speak with the 8x concierge desk for acquisitions, valuations, resale, mortgages, or legal dossiers." path="/contact" ogImage={config.seo?.ogImage} />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Concierge"
            title="Direct lines to principals who steward your file—not rotating interns."
            subtitle="Submit the form below to launch a structured diligence thread via your mail client instantly."
          />

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>
                <Stack spacing={3}>
                  <GlassPanel sx={{ p: 3 }}>
                    <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.22em' }}>
                      Phones & WhatsApp
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1.5, fontFamily: 'serif', fontWeight: 300 }}>
                      <Box component="a" href={`tel:${c.phoneTel}`} sx={{ color: 'inherit', textDecoration: 'none' }}>
                        {c.phoneDisplay}
                      </Box>
                    </Typography>
                    <Button component="a" href={`https://wa.me/${c.whatsappDigits}?text=${encodeURIComponent('Hello 8x — concierge inquiry.')}`} target="_blank" rel="noreferrer" sx={{ mt: 1 }}>
                      Open WhatsApp thread
                    </Button>
                  </GlassPanel>

                  <GlassPanel sx={{ p: 3 }}>
                    <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.22em', display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeRoundedIcon fontSize="small" />
                      Hours
                    </Typography>
                    <Stack sx={{ mt: 2 }} spacing={1.5}>
                      {config.businessHours.map((bh) => (
                        <Stack key={bh.days} direction="row" sx={{ justifyContent: 'space-between', gap: 2 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {bh.days}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {bh.hours}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </GlassPanel>
                </Stack>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal delay={0.05}>
                <GlassPanel sx={{ p: { xs: 2.75, md: 3 } }} component="form" onSubmit={submit}>
                  <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Cormorant Garamond", serif' }}>
                    Advisory request
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField label="How can we help?" value={message} onChange={(e) => setMessage(e.target.value)} fullWidth required multiline minRows={6} />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button type="submit" variant="contained" size="large" sx={{ borderRadius: 999, px: 5 }}>
                        Send via email
                      </Button>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="caption" color="text.secondary">
                        No backend latency—submission opens your default mail composer with context blocks prefilled for our desk.
                      </Typography>
                    </Grid>
                  </Grid>
                </GlassPanel>
              </Reveal>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5, borderRadius: 3, overflow: 'hidden', border: (t) => `1px solid ${t.palette.divider}` }}>
            <Box
              component="iframe"
              title="Office location map"
              src={c.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{ width: '100%', border: 'none', height: { xs: 220, md: 280 }, display: 'block' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}
