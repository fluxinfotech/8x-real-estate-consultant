import propertiesJson from '../data/properties.json'
import type { Property } from '../types'

const propertiesData = propertiesJson as unknown as Property[]

export function useProperties() {
  return { properties: propertiesData, loading: false as const, error: null as string | null }
}
