import { alpha, AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useColorMode } from '../context/ColorModeContext'
import logoMark from '../assets/logo-mark.svg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const linkSx = (active: boolean) => ({
  px: 1.25,
  py: 0.75,
  borderRadius: 999,
  color: active ? 'primary.contrastText' : 'text.secondary',
  background: active
    ? (t: import('@mui/material').Theme) =>
        `linear-gradient(120deg, ${t.palette.primary.light}, ${t.palette.primary.main})`
    : 'transparent',
  boxShadow: active ? (t: import('@mui/material').Theme) => `0 12px 40px ${alpha(t.palette.primary.main, 0.35)}` : 'none',
  transition: 'color 0.3s ease, background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
  '&:hover': {
    color: active ? 'primary.contrastText' : 'text.primary',
    transform: 'translateY(-1px)',
  },
})

export function Navbar() {
  const { mode, toggleColorMode } = useColorMode()
  const [elevated, setElevated] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (t) => t.zIndex.drawer + 1,
        borderBottom: (t) => `1px solid ${elevated ? alpha(t.palette.primary.main, 0.18) : 'transparent'}`,
        background: (t) =>
          elevated
            ? t.palette.mode === 'dark'
              ? alpha('#0a0a0a', 0.72)
              : alpha('#f7f6f3', 0.78)
            : 'transparent',
        backdropFilter: elevated ? 'blur(16px) saturate(140%)' : 'none',
        WebkitBackdropFilter: elevated ? 'blur(16px) saturate(140%)' : 'none',
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 2 }}>
          <Box component={NavLink} to="/" onClick={() => setMobileOpen(false)} sx={{ textDecoration: 'none', color: 'inherit', mr: 'auto', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box component="img" src={logoMark} alt="" sx={{ width: 40, height: 40, borderRadius: 2, boxShadow: (t) => `0 8px 28px ${alpha(t.palette.primary.main, 0.25)}` }} />
            <motion.div whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 380, damping: 24 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  fontSize: { xs: '1.15rem', md: '1.35rem' },
                }}
              >
                8x{' '}
                <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Real Estate
                </Box>
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', color: 'primary.main', letterSpacing: '0.18em', mt: 0.25 }}>
                CONSULTANT
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                  <Button sx={linkSx(isActive)}>{item.label}</Button>
                )}
              </NavLink>
            ))}
          </Box>

          <IconButton
            onClick={toggleColorMode}
            aria-label={mode === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
            sx={{
              border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.25)}`,
              borderRadius: 2,
            }}
          >
            {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>

          <IconButton
            sx={{ display: { xs: 'inline-flex', md: 'none' }, borderRadius: 2 }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>

        {mobileOpen ? (
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 1, pb: 2 }}>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} style={{ textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
                {({ isActive }) => (
                  <Button fullWidth sx={{ justifyContent: 'flex-start', ...linkSx(isActive) }}>
                    {item.label}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
        ) : null}
      </Container>
    </AppBar>
  )
}
