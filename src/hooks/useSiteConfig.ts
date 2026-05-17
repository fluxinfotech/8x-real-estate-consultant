import siteJson from '../data/site.json'
import type { SiteConfig } from '../types'

export const SITE_CONFIG_STATIC = siteJson as unknown as SiteConfig

export function useSiteConfig() {
  return { config: SITE_CONFIG_STATIC, error: null as string | null }
}
