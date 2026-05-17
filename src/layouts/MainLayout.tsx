import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { BrandIntro } from '../animations/BrandIntro'
import { ScrollProgress } from '../animations/ScrollProgress'
import { SITE_CONFIG_STATIC } from '../hooks/useSiteConfig'
import { Footer } from './Footer'
import { InquiryFab } from './InquiryFab'
import { Navbar } from './Navbar'
import { StickyMobileCta } from './StickyMobileCta'
import { WhatsAppFab } from './WhatsAppFab'

const pageMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export function MainLayout() {
  const location = useLocation()
  const c = SITE_CONFIG_STATIC.contact

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pb: { xs: 'calc(64px + env(safe-area-inset-bottom))', md: 0 } }}>
      <BrandIntro />
      <ScrollProgress />
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Box
            component={motion.div}
            key={location.pathname}
            initial={pageMotion.initial}
            animate={pageMotion.animate}
            exit={pageMotion.exit}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </Box>
        </AnimatePresence>
      </Box>
      <Footer config={SITE_CONFIG_STATIC} />
      <WhatsAppFab whatsappDigits={c.whatsappDigits} />
      <InquiryFab />
      <StickyMobileCta phoneTel={c.phoneTel} whatsappDigits={c.whatsappDigits} />
    </Box>
  )
}
