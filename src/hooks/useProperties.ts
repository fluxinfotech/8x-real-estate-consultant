import { useEffect, useState } from 'react'
import type { Property } from '../types'

// Module-level cache to share data across all calls to useProperties()
let cachedProperties: Property[] | null = null
let cachedLoading = false
let cachedError: string | null = null
const listeners = new Set<() => void>()

function parsePriceToSort(priceStr: string): number {
  const clean = priceStr.replace(/[₹,]/g, '').toLowerCase()
  const num = parseFloat(clean)
  if (isNaN(num)) return 0
  return num / 1000
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>(cachedProperties || [])
  const [loading, setLoading] = useState(cachedProperties === null)
  const [error, setError] = useState<string | null>(cachedError)

  useEffect(() => {
    let active = true

    const onChange = () => {
      if (active) {
        setProperties(cachedProperties || [])
        setLoading(cachedLoading)
        setError(cachedError)
      }
    }
    listeners.add(onChange)

    if (cachedProperties === null && !cachedLoading) {
      cachedLoading = true
      // Trigger onChange for listeners to update loading state
      onChange()

      fetch('https://script.google.com/macros/s/AKfycbzm1bJduftEgZm0H8NbOFLgz5-mmDrBrEqBn23qzwMYlVu3Cpt8IfI-GxFmAWY5Z7qv/exec')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch properties')
          return res.json()
        })
        .then((data: any[]) => {
          const mapped: Property[] = data.map((item) => ({
            id: String(item.ID),
            title: item.Title,
            city: 'Thane',
            location: item.Locality,
            price: item.Price,
            priceSort: parsePriceToSort(item.Price),
            type: item['Listing Type'],
            bhk: item.BHK,
            area: `${item.Area} sq.ft`,
            status: item.Status,
            featured: item.Status === 'Available',
            image: item.Image1,
            description: item.Description,
            badges: item['Listing Type'] === 'Rent' ? ['ready_to_move'] : ['new_launch'],
            budgetTier: '',
          }))
          cachedProperties = mapped
          cachedLoading = false
          cachedError = null
          listeners.forEach((l) => l())
        })
        .catch((err) => {
          console.error(err)
          cachedLoading = false
          cachedError = err instanceof Error ? err.message : 'Unknown error occurred'
          listeners.forEach((l) => l())
        })
    }

    return () => {
      active = false
      listeners.delete(onChange)
    }
  }, [])

  return { properties, loading, error }
}
