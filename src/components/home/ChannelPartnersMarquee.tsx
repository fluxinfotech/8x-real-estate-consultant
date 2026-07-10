import { Box, Container, Typography, alpha } from '@mui/material'
import PiramalLogo from '../../assets/piramal-realty-logo.png'
import KalpataruLogo from '../../assets/Kalpataru-Ltd.png'
import LodhaLogo from '../../assets/Lodha.png'
import RustomjeeLogo from '../../assets/rustomjee-logo.jpg'
import HiranandaniLogo from '../../assets/Hiranandani-logo.png'
import { Reveal } from '../../animations/Reveal'

const PARTNERS = [
  { name: 'Piramal Realty', logo: PiramalLogo },
  { name: 'Kalpataru', logo: KalpataruLogo },
  { name: 'Lodha', logo: LodhaLogo },
  { name: 'Rustomjee', logo: RustomjeeLogo },
  { name: 'Hiranandani', logo: HiranandaniLogo },
]

// Double the partners list to create a seamless loop
const MARQUEE_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS]

export function ChannelPartnersMarquee() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Reveal>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.28em',
              display: 'block',
              mb: 1.5,
            }}
          >
            AFFILIATION
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.1rem', md: '2.75rem' },
              lineHeight: 1.12,
              mb: 1,
            }}
          >
            Channel Partnered With
          </Typography>
        </Reveal>
      </Container>

      {/* Marquee Wrapper */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          py: 3,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: { xs: 80, md: 200 },
            zIndex: 2,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: (t) =>
              `linear-gradient(to right, ${t.palette.background.default} 20%, ${alpha(t.palette.background.default, 0)} 100%)`,
          },
          '&::after': {
            right: 0,
            background: (t) =>
              `linear-gradient(to left, ${t.palette.background.default} 20%, ${alpha(t.palette.background.default, 0)} 100%)`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee-scroll 35s linear infinite',
            '@keyframes marquee-scroll': {
              '0%': {
                transform: 'translateX(0)',
              },
              '100%': {
                transform: 'translateX(-50%)',
              },
            },
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {MARQUEE_ITEMS.map((partner, idx) => (
            <Box
              key={`${partner.name}-${idx}`}
              sx={{
                mx: { xs: 2, md: 3 },
                px: { xs: 3, md: 4 },
                py: 2,
                height: { xs: 70, md: 90 },
                width: { xs: 160, md: 220 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                backgroundColor: '#ffffff',
                border: (t) => `1px solid ${alpha(t.palette.divider, 0.1)}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                },
              }}
            >
              <Box
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(10%) contrast(95%)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%) contrast(100%)',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
