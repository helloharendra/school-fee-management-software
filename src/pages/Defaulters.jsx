import { useState } from 'react'
import { BellRing, CheckCircle2, MessageCircle } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { defaulters } from '../data'

export default function Defaulters() {
  const { openContact } = useContact()
  const [sent, setSent] = useState([])
  const total = defaulters.reduce((s, d) => s + d.due, 0)
  return (
    <>
      <PageHeader title="Defaulters" subtitle={`${defaulters.length} students · ${inr(total)} outstanding`}
        actions={<button onClick={() => setSent(defaulters.map((d) => d.id))} className="btn-primary"><BellRing className="h-4 w-4" /> Remind all</button>} />
      <Card bodyClass="">
        <DataTable
          rows={defaulters}
          columns={[
            { key: 'name', label: 'Student', render: (d) => <Person name={d.name} sub={d.cls} /> },
            { key: 'father', label: 'Parent', render: (d) => <div><p className="text-slate-700">{d.father}</p><p className="text-xs text-slate-400">{d.phone}</p></div> },
            { key: 'days', label: 'Overdue by', render: (d) => <Badge tone={d.days > 45 ? 'red' : d.days > 20 ? 'amber' : 'blue'}>{d.days} days</Badge> },
            { key: 'reminders', label: 'Reminders sent' },
            { key: 'due', label: 'Amount due', align: 'right', render: (d) => <b className="text-slate-900">{inr(d.due)}</b> },
            {
              key: 'a', label: '', align: 'right', render: (d) => sent.includes(d.id)
                ? <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600"><CheckCircle2 className="h-4 w-4" /> Sent</span>
                : <button onClick={() => { setSent((s) => [...s, d.id]); openContact('WhatsApp Fee Reminders with Payment Link') }} className="btn-ghost px-3 py-1.5 text-xs"><MessageCircle className="h-3.5 w-3.5" /> Remind</button>,
            },
          ]}
        />
      </Card>
    </>
  )
}
