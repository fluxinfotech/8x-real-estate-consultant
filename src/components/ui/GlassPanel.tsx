import { alpha, Box, type BoxProps } from '@mui/material'

export function GlassPanel({ sx, children, ...rest }: BoxProps) {
  return (
    <Box
      {...rest}
      sx={{
        position: 'relative',
        borderRadius: 3,
        border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.22)}`,
        background: (t) =>
          t.palette.mode === 'dark'
            ? alpha('#ffffff', 0.06)
            : alpha('#ffffff', 0.62),
        backdropFilter: 'blur(18px) saturate(140%)',
        WebkitBackdropFilter: 'blur(18px) saturate(140%)',
        boxShadow: (t) =>
          t.palette.mode === 'dark'
            ? `0 24px 80px ${alpha('#000000', 0.55)}`
            : `0 18px 60px ${alpha('#0a0a0a', 0.08)}`,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
