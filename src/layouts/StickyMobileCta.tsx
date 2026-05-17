import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { alpha, Box, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

type StickyMobileCtaProps = {
  phoneTel: string
  whatsappDigits: string
}

export function StickyMobileCta({ phoneTel, whatsappDigits }: StickyMobileCtaProps) {
  const wa = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Hello 8x — I’d like portfolio options.')}`
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: (t) => t.zIndex.appBar + 2,
        px: 1.5,
        pb: `max(12px, env(safe-area-inset-bottom))`,
        pt: 1,
        background: (t) => (t.palette.mode === 'dark' ? alpha('#0a0a0a', 0.88) : alpha('#f7f6f3', 0.92)),
        backdropFilter: 'blur(16px)',
        borderTop: (t) => `1px solid ${alpha(t.palette.primary.main, 0.22)}`,
        justifyContent: 'center',
      }}
      aria-hidden={false}
    >
      <Stack direction="row" spacing={1} sx={{ width: 1, maxWidth: 480 }}>
        <Button fullWidth variant="contained" size="medium" component="a" href={`tel:${phoneTel}`} sx={{ borderRadius: 999, px: 0.5 }}>
          <PhoneOutlinedIcon sx={{ mr: 0.75 }} aria-hidden />
          Call
        </Button>
        <Button fullWidth variant="outlined" size="medium" component="a" href={wa} target="_blank" rel="noreferrer" sx={{ borderRadius: 999 }}>
          WhatsApp
        </Button>
        <Button component={RouterLink} to="/properties" fullWidth variant="outlined" size="medium" sx={{ borderRadius: 999, px: 0.5 }}>
          <ExploreOutlinedIcon sx={{ mr: 0.5 }} aria-hidden />
          Explore
        </Button>
      </Stack>
    </Box>
  )
}
