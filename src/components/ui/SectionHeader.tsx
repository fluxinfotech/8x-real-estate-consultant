import { alpha, Box, Typography } from '@mui/material'
import { Reveal } from '../../animations/Reveal'

type SectionHeaderProps = {
  kicker: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ kicker, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const ta = align === 'center' ? 'center' : 'left'

  return (
    <Box sx={{ textAlign: ta, mb: { xs: 4, md: 6 }, maxWidth: align === 'center' ? 820 : 720, mx: align === 'center' ? 'auto' : 0 }}>
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
          {kicker}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2.1rem', md: '2.75rem' },
            lineHeight: 1.12,
            mb: subtitle ? 2 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 640,
              mx: align === 'center' ? 'auto' : 0,
              borderLeft: align === 'left' ? (t) => `3px solid ${alpha(t.palette.primary.main, 0.55)}` : 'none',
              pl: align === 'left' ? 2.5 : 0,
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Reveal>
    </Box>
  )
}
