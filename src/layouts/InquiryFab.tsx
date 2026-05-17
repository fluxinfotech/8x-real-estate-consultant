import { Fab, Tooltip, Zoom } from '@mui/material'
import { alpha } from '@mui/material/styles'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import { Link as RouterLink } from 'react-router-dom'

export function InquiryFab() {
  return (
    <Tooltip title="Private inquiry desk" placement="right">
      <Zoom in style={{ transitionDelay: '160ms' }}>
        <Fab
          component={RouterLink}
          to="/contact"
          aria-label="Start an inquiry"
          sx={{
            position: 'fixed',
            left: { xs: 16, md: 28 },
            bottom: { xs: 92, md: 28 },
            zIndex: (t) => t.zIndex.tooltip - 1,
            width: 52,
            height: 52,
            color: (t) => t.palette.text.primary,
            border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.35)}`,
            background: (t) => (t.palette.mode === 'dark' ? alpha('#111', 0.65) : alpha('#fff', 0.78)),
            backdropFilter: 'blur(14px)',
            boxShadow: (t) => `0 12px 40px ${alpha('#000000', t.palette.mode === 'dark' ? 0.5 : 0.12)}`,
            transition: 'transform 0.35s ease',
            '&:hover': { transform: 'translateY(-3px)' },
          }}
        >
          <ChatBubbleOutlineRoundedIcon />
        </Fab>
      </Zoom>
    </Tooltip>
  )
}
