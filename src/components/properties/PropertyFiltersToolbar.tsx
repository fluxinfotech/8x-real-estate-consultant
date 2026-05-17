import { MenuItem, Stack, TextField } from '@mui/material'
import type { BudgetTierKey } from '../../types'
import type { PropertySortKey, PropertyFilterState } from '../../utils/propertyFilters'
import type { Property } from '../../types'
import { BUDGET_OPTIONS } from '../../utils/badgeLabels'
import { uniqueCities, uniqueTypes } from '../../utils/propertyFilters'

type PropertyFiltersToolbarProps = {
  properties: Property[]
  value: PropertyFilterState
  onChange: (next: PropertyFilterState) => void
  showSort?: boolean
}

export function PropertyFiltersToolbar({ properties, value, onChange, showSort = true }: PropertyFiltersToolbarProps) {
  const cities = ['all', ...uniqueCities(properties)]
  const types = ['all', ...uniqueTypes(properties)]

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{ mb: 3, alignItems: { lg: 'flex-end' }, flexWrap: 'wrap' }}>
      <TextField
        label="Search"
        placeholder="Keyword, locality, type…"
        value={value.search}
        onChange={(e) => onChange({ ...value, search: e.target.value })}
        size="small"
        sx={{ flex: '1 1 240px', minWidth: 200 }}
      />
      <TextField select label="Budget" value={value.budget} onChange={(e) => onChange({ ...value, budget: e.target.value as BudgetTierKey })} size="small" sx={{ flex: '1 1 160px', minWidth: 150 }}>
        {BUDGET_OPTIONS.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField select label="City" value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })} size="small" sx={{ flex: '1 1 150px', minWidth: 130 }}>
        {cities.map((c) => (
          <MenuItem key={c} value={c}>
            {c === 'all' ? 'All cities' : c}
          </MenuItem>
        ))}
      </TextField>
      <TextField select label="Property type" value={value.propertyType} onChange={(e) => onChange({ ...value, propertyType: e.target.value })} size="small" sx={{ flex: '1 1 160px', minWidth: 150 }}>
        {types.map((t) => (
          <MenuItem key={t} value={t}>
            {t === 'all' ? 'All types' : t}
          </MenuItem>
        ))}
      </TextField>
      {showSort ? (
        <TextField select label="Sort" value={value.sort} onChange={(e) => onChange({ ...value, sort: e.target.value as PropertySortKey })} size="small" sx={{ flex: '1 1 180px', minWidth: 160 }}>
          <MenuItem value="featured">Featured first</MenuItem>
          <MenuItem value="price_asc">Price ascending</MenuItem>
          <MenuItem value="price_desc">Price descending</MenuItem>
          <MenuItem value="default">Default</MenuItem>
        </TextField>
      ) : null}
    </Stack>
  )
}
