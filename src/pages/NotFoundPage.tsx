import { Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be found." path="/404" />
      <Container maxWidth="sm" sx={{ py: { xs: 10, md: 14 }, textAlign: 'center' }}>
        <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.28em' }}>
          404
        </Typography>
        <Typography variant="h3" sx={{ mt: 2, mb: 2, fontFamily: '"Cormorant Garamond", serif' }}>
          This address is not on our books.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page may have moved. Return home to continue exploring premium listings and services.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" size="large" sx={{ borderRadius: 999, px: 4 }}>
          Back to home
        </Button>
      </Container>
    </>
  )
}
