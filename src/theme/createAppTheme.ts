import { alpha, createTheme, type PaletteMode } from '@mui/material/styles'
import { gold, surfaces } from './tokens'

const fontDisplay = '"Cormorant Garamond", "Times New Roman", serif'
const fontBody = '"Manrope", system-ui, -apple-system, sans-serif'

export function createAppTheme(mode: PaletteMode) {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: gold.main,
        light: gold.light,
        dark: gold.dark,
        contrastText: isDark ? surfaces.matteBlack : '#111',
      },
      secondary: {
        main: isDark ? '#cfcfcf' : '#2a2a2a',
      },
      background: {
        default: isDark ? surfaces.matteBlack : surfaces.mist,
        paper: isDark ? surfaces.deepGray : '#ffffff',
      },
      text: {
        primary: isDark ? '#f3f2ef' : '#121212',
        secondary: isDark ? alpha('#f3f2ef', 0.68) : alpha('#121212', 0.62),
      },
      divider: isDark ? alpha('#ffffff', 0.1) : alpha('#000000', 0.08),
    },
    typography: {
      fontFamily: fontBody,
      h1: { fontFamily: fontDisplay, fontWeight: 500, letterSpacing: '-0.02em' },
      h2: { fontFamily: fontDisplay, fontWeight: 500, letterSpacing: '-0.02em' },
      h3: { fontFamily: fontDisplay, fontWeight: 500 },
      h4: { fontFamily: fontDisplay, fontWeight: 500 },
      h5: { fontFamily: fontDisplay, fontWeight: 600 },
      h6: { fontFamily: fontDisplay, fontWeight: 600 },
      button: { fontWeight: 600, letterSpacing: '0.06em', textTransform: 'none' as const },
      overline: { letterSpacing: '0.22em', fontWeight: 600 },
    },
    shape: { borderRadius: 14 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isDark
              ? `radial-gradient(1200px 800px at 10% -10%, ${alpha(gold.main, 0.12)}, transparent 55%),
                 radial-gradient(900px 600px at 90% 0%, ${alpha('#6b8cff', 0.08)}, transparent 50%)`
              : `radial-gradient(1000px 700px at 8% -8%, ${alpha(gold.main, 0.14)}, transparent 55%),
                 radial-gradient(800px 500px at 92% 4%, ${alpha('#1a1a1a', 0.06)}, transparent 55%)`,
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 999, transition: 'transform 0.35s ease, box-shadow 0.35s ease' },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'hover' },
      },
    },
  })
}
