import type { PropertyBadgeKey } from '../types'

export const BADGE_LABELS: Record<PropertyBadgeKey, string> = {
  new_launch: 'New Launch',
  ready_to_move: 'Ready to Move',
  luxury: 'Luxury',
  investment_hotspot: 'Investment Hotspot',
}

export const BUDGET_OPTIONS: { value: string; label: string }[] = [
  { value: 'all', label: 'All budgets' },
  { value: 'under_50_lakh', label: 'Under 50 Lac' },
  { value: '50_lakh_to_1_cr', label: '50 Lac - 1 Cr' },
  { value: '1_to_2_cr', label: '1 Cr - 2 Cr' },
  { value: '2_to_4_cr', label: '2 Cr - 4 Cr' },
  { value: 'above_5_cr', label: 'Above 5 Cr' },
]
