import {
  AlarmClock, BadgePercent, BarChart3, FileSpreadsheet, IndianRupee, LayoutDashboard, Layers, Receipt, Settings, Smartphone, Wallet,
} from 'lucide-react'

export const app = {
  name: 'FeeDesk',
  tagline: 'School Fee Management',
  logo: Wallet,
  user: { name: 'Mr. Harish Bhatt', role: 'Accounts Officer' },
  searchPlaceholder: 'Search student, admission no., receipt…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Fees',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Collect Fee', to: '/collect', icon: IndianRupee },
      { label: 'Defaulters', to: '/defaulters', icon: AlarmClock, badge: '86' },
    ],
  },
  {
    title: 'Setup',
    items: [
      { label: 'Fee Structure', icon: Layers },
      { label: 'Concessions & Scholarships', icon: BadgePercent },
      { label: 'Receipts', icon: Receipt },
      { label: 'Online Payment Gateway', icon: Smartphone },
    ],
  },
  {
    title: 'Reports',
    items: [
      { label: 'Collection Reports', icon: BarChart3 },
      { label: 'Tally / Excel Export', icon: FileSpreadsheet },
      { label: 'Settings', icon: Settings },
    ],
  },
]
