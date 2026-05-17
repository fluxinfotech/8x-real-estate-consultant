import { alpha, Box, Grid, Typography } from '@mui/material'
import type { OpportunityCategory } from '../../types'
import { Reveal } from '../../animations/Reveal'
import { getOpportunityIcon } from '../icons/brandIcons'

type Props = {
  categories: OpportunityCategory[]
}

export function InvestmentOpportunityGrid({ categories }: Props) {
  return (
    <Grid container spacing={3}>
      {categories.map((c, i) => {
        const Icon = getOpportunityIcon(c.icon)
        return (
          <Grid key={c.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delay={i * 0.06}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.2)}`,
                  background: (t) => (t.palette.mode === 'dark' ? alpha('#ffffff', 0.04) : alpha('#ffffff', 0.55)),
                  backdropFilter: 'blur(14px)',
                  transition: 'box-shadow 0.45s ease, transform 0.45s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: (t) => `0 26px 60px ${alpha(t.palette.primary.main, 0.18)}`,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Icon sx={{ fontSize: 38, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif', mb: 1 }}>
                  {c.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {c.body}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
        )
      })}
    </Grid>
  )
}
