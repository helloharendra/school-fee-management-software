import { Link } from 'react-router-dom'
import { AlarmClock, IndianRupee, Percent, Smartphone } from 'lucide-react'
import { Card, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { BarsChart, DonutChart } from '../components/Charts'
import { modes, monthly } from '../data'

const classWise = [
  { cls: 'Pre-primary', pct: 94 }, { cls: 'Classes 1–5', pct: 89 }, { cls: 'Classes 6–8', pct: 84 }, { cls: 'Classes 9–10', pct: 79 }, { cls: 'Classes 11–12', pct: 73 },
]

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Session 2026–27 · Q3"
        title="₹2.29 Cr collected — 84% of target 💰"
        subtitle="86 students have overdue fees. Automatic reminders go out to parents every Monday."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Today" value="₹3.86L" /><HeroStat label="Receipts" value="64" /></div>}
      >
        <Link to="/collect" className="btn bg-white text-brand-700 hover:bg-brand-50"><IndianRupee className="h-4 w-4" /> Collect fee</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Collected (session)" value="₹2.29 Cr" delta="7.6%" icon={IndianRupee} />
        <StatCard label="Outstanding" value="₹43.8L" delta="-11.2%" icon={AlarmClock} tone="rose" />
        <StatCard label="Collection rate" value="84%" delta="3.1%" icon={Percent} tone="sky" />
        <StatCard label="Paid online" value="73%" delta="9.0%" icon={Smartphone} tone="violet" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Monthly collection" subtitle="₹ lakh" className="xl:col-span-2">
          <BarsChart data={monthly} stacked series={[{ key: 'collected', name: 'Collected' }, { key: 'due', name: 'Pending' }]} />
        </Card>
        <Card title="Payment modes"><DonutChart data={modes} centerValue="3,912" centerLabel="Receipts" /></Card>
      </div>
      <Card title="Class-wise collection" className="mt-6">
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {classWise.map((c) => (
            <div key={c.cls}>
              <div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700">{c.cls}</span><b className="text-slate-800">{c.pct}%</b></div>
              <Progress value={c.pct} tone={c.pct < 80 ? 'amber' : 'green'} />
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
