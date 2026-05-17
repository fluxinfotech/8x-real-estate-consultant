export type PropertyBadgeKey = 'new_launch' | 'ready_to_move' | 'luxury' | 'investment_hotspot'

export type BudgetTierKey = 'all' | 'under_10' | '10_to_30' | '30_to_75' | '75_plus'

export type PropertyBudgetTier = Exclude<BudgetTierKey, 'all'>

export type Property = {
  id: string
  title: string
  city: string
  location: string
  price: string
  /** Normalized ascending sort weight (lakhs INR equivalent or internal scale). */
  priceSort: number
  type: string
  bhk: string
  area: string
  status: string
  featured?: boolean
  image: string
  description: string
  badges?: PropertyBadgeKey[]
  budgetTier: PropertyBudgetTier
}

export type SiteStat = {
  label: string
  value: number
  prefix: string
  suffix: string
}

export type SiteService = {
  title: string
  description: string
  icon: string
}

export type SitePillar = {
  title: string
  body: string
}

export type WhyChooseItem = {
  title: string
  body: string
  icon: string
}

export type OpportunityCategory = {
  title: string
  body: string
  icon: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  rating: number
  location?: string
}

export type TimelineItem = {
  year: string
  title: string
  body: string
}

export type BusinessHoursSlot = {
  days: string
  hours: string
}

export type SiteConfig = {
  brand: {
    name: string
    tagline: string
    taglines: string[]
  }
  contact: {
    email: string
    phoneDisplay: string
    phoneTel: string
    whatsappDigits: string
    addressLine: string
    /** Google Maps embed src URL */
    mapEmbedSrc: string
  }
  stats: SiteStat[]
  seo?: {
    defaultDescription: string
    ogImage: string
  }
  /** Mission, vision, story, founder (About page). */
  about: {
    headline: string
    companyStory: string[]
    mission: string
    vision: string
    founderQuote: string
    founderTitle: string
    marketExpertise: string
    pillars: SitePillar[]
    timeline?: TimelineItem[]
  }
  services: SiteService[]
  whyChooseUs: WhyChooseItem[]
  investmentOpportunities: OpportunityCategory[]
  testimonials: Testimonial[]
  businessHours: BusinessHoursSlot[]
}
