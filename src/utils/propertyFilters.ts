import type { BudgetTierKey, Property } from '../types'

export type PropertySortKey = 'featured' | 'price_asc' | 'price_desc' | 'default'

export type PropertyFilterState = {
  search: string
  budget: BudgetTierKey
  city: string
  propertyType: string
  sort: PropertySortKey
}

export function defaultPropertyFilters(): PropertyFilterState {
  return {
    search: '',
    budget: 'all',
    city: 'all',
    propertyType: 'all',
    sort: 'featured',
  }
}

export function uniqueCities(properties: Property[]) {
  return [...new Set(properties.map((p) => p.city))].sort((a, b) => a.localeCompare(b))
}

export function uniqueTypes(properties: Property[]) {
  return [...new Set(properties.map((p) => p.type))].sort((a, b) => a.localeCompare(b))
}

export function filterProperties(properties: Property[], f: PropertyFilterState) {
  const q = f.search.trim().toLowerCase()
  return properties.filter((p) => {
    if (f.budget !== 'all') {
      const price = p.priceSort
      if (f.budget === 'under_50_lakh' && price >= 5000) return false
      if (f.budget === '50_lakh_to_1_cr' && (price < 5000 || price >= 10000)) return false
      if (f.budget === '1_to_2_cr' && (price < 10000 || price >= 20000)) return false
      if (f.budget === '2_to_4_cr' && (price < 20000 || price >= 40000)) return false
      if (f.budget === 'above_5_cr' && price < 40000) return false
    }
    if (f.city !== 'all' && p.city !== f.city) return false
    if (f.propertyType !== 'all' && p.type !== f.propertyType) return false
    if (!q) return true
    const hay = `${p.title} ${p.city} ${p.location} ${p.type} ${p.bhk} ${p.status}`.toLowerCase()
    return hay.includes(q)
  })
}

export function sortProperties(properties: Property[], sort: PropertySortKey) {
  const list = [...properties]
  if (sort === 'price_asc') list.sort((a, b) => a.priceSort - b.priceSort)
  else if (sort === 'price_desc') list.sort((a, b) => b.priceSort - a.priceSort)
  else if (sort === 'featured') list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  else list.sort((a, b) => a.id.localeCompare(b.id))
  return list
}
