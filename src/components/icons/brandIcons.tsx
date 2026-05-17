/* Icon registry helpers (non-React components). */
/* eslint-disable react-refresh/only-export-components */

import type { SvgIconComponent } from '@mui/icons-material'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined'
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined'
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'

const FALLBACK = ApartmentOutlinedIcon

const serviceIcons: Record<string, SvgIconComponent> = {
  consult: AssignmentTurnedInOutlinedIcon,
  planning: AccountTreeOutlinedIcon,
  resale: SyncAltOutlinedIcon,
  rental: VpnKeyOutlinedIcon,
  loan: SavingsOutlinedIcon,
  legal: BalanceOutlinedIcon,
}

const whyIcons: Record<string, SvgIconComponent> = {
  trending: TrendingUpOutlinedIcon,
  gavel: BalanceOutlinedIcon,
  verified: VerifiedOutlinedIcon,
  account_balance: AccountBalanceOutlinedIcon,
  person: PersonOutlineOutlinedIcon,
}

const oppIcons: Record<string, SvgIconComponent> = {
  apartment: ApartmentOutlinedIcon,
  domain: DomainOutlinedIcon,
  villa: HolidayVillageOutlinedIcon,
  landscape: LandscapeOutlinedIcon,
  payments: PaidOutlinedIcon,
}

export function getServiceIcon(key: string): SvgIconComponent {
  return serviceIcons[key] ?? FALLBACK
}

export function getWhyChooseIcon(key: string): SvgIconComponent {
  return whyIcons[key] ?? VerifiedOutlinedIcon
}

export function getOpportunityIcon(key: string): SvgIconComponent {
  return oppIcons[key] ?? ApartmentOutlinedIcon
}
