import { useMemo, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Reveal } from '../animations/Reveal'
import { PropertyCard } from '../components/properties/PropertyCard'
import { PropertyFiltersToolbar } from '../components/properties/PropertyFiltersToolbar'
import { PropertyQuickView } from '../components/properties/PropertyQuickView'
import { Seo } from '../components/seo/Seo'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SITE_CONFIG_STATIC, useSiteConfig } from '../hooks/useSiteConfig'
import { useProperties } from '../hooks/useProperties'
import type { Property } from '../types'
import { defaultPropertyFilters, filterProperties, sortProperties, type PropertyFilterState } from '../utils/propertyFilters'
export function PropertiesPage() {
  const { config } = useSiteConfig()
  const { properties } = useProperties()
  const [filters, setFilters] = useState<PropertyFilterState>(() => defaultPropertyFilters())
  const [detail, setDetail] = useState<Property | null>(null)
  const [open, setOpen] = useState(false)

  const rows = useMemo(() => sortProperties(filterProperties(properties, filters), filters.sort), [properties, filters])

  return (
    <>
      <Seo title="Properties" description="Search premium apartments, villas, commercial floors, plots, and yield stacks represented by 8x Real Estate Consultant." path="/properties" ogImage={config.seo?.ogImage} />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            kicker="Portfolio grid"
            title="Signals-grade inventory with uncompromising documentation."
            subtitle="Search, tier budgets, reshape geography, reorder by economics—everything runs client-side via static JSON bundles."
          />
          <PropertyFiltersToolbar properties={properties} value={filters} onChange={setFilters} showSort />

          {!rows.length ? (
            <Typography color="text.secondary" sx={{ my: 3 }}>
              No matches for this permutation. Reset filters or broaden budget bands.
            </Typography>
          ) : null}

          <Grid container spacing={3}>
            {rows.map((p, i) => (
              <Grid key={p.id} size={{ xs: 12, md: 6 }}>
                <Reveal delay={Math.min(i * 0.04, 0.35)}>
                  <PropertyCard
                    property={p}
                    onViewDetails={() => {
                      setDetail(p)
                      setOpen(true)
                    }}
                  />
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <PropertyQuickView property={detail} open={open} onClose={() => setOpen(false)} whatsappDigits={SITE_CONFIG_STATIC.contact.whatsappDigits} />
    </>
  )
}
