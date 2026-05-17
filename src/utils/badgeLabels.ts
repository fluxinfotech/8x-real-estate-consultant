import type { PropertyBadgeKey } from '../types'

export const BADGE_LABELS: Record<PropertyBadgeKey, string> = {
  new_launch: 'New Launch',
  ready_to_move: 'Ready to Move',
  luxury: 'Luxury',
  investment_hotspot: 'Investment Hotspot',
}

export const BUDGET_OPTIONS: { value: string; label: string }[] = [
  { value: 'all', label: 'All budgets' },
  { value: 'under_10', label: 'Under ₹10 Cr scale' },
  { value: '10_to_30', label: '₹10 – ₹30 Cr' },
  { value: '30_to_75', label: '₹30 – ₹75 Cr / Premium' },
  { value: '75_plus', label: 'Ultra-luxury & landmark' },
]
