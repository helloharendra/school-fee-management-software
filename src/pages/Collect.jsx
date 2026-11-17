import { useMemo, useState } from 'react'
import { Banknote, CheckCircle2, CreditCard, Landmark, Printer, Smartphone } from 'lucide-react'
import { Avatar, Badge, Card, PageHeader, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { LATE_FINE_PER_HEAD, feeHeads, students } from '../data'

const payModes = [
  { k: 'UPI', icon: Smartphone }, { k: 'Cash', icon: Banknote }, { k: 'Card', icon: CreditCard }, { k: 'Cheque', icon: Landmark },
]

export default function Collect() {
  const { openContact } = useContact()
  const [student, setStudent] = useState(students[0])
  const [selected, setSelected] = useState(feeHeads.filter((f) => f.overdue).map((f) => f.id))
  const [mode, setMode] = useState('UPI')
  const [paid, setPaid] = useState(false)

  const t = useMemo(() => {
    const heads = feeHeads.filter((f) => selected.includes(f.id))
    const gross = heads.reduce((s, f) => s + f.amount, 0)
    const fine = heads.filter((f) => f.overdue).length * LATE_FINE_PER_HEAD
    const tuition = heads.filter((f) => f.head.startsWith('Tuition')).reduce((s, f) => s + f.amount, 0)
    const concession = Math.round((tuition * student.concession) / 100)
    return { heads, gross, fine, concession, net: gross + fine - concession }
  }, [selected, student])

  const toggle = (id) => { setPaid(false); setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id])) }

  return (
    <>
      <PageHeader title="Collect fee" subtitle="Select a student and pick the fee heads to pay. The receipt updates as you go." />
      <div className="mb-6 grid gap-3 md:grid-cols-3">
        {students.map((s) => (
          <button key={s.adm} onClick={() => { setStudent(s); setPaid(false) }} className={`card flex items-center gap-3 p-4 text-left transition hover:-translate-y-0.5 ${student.adm === s.adm ? 'ring-2 ring-brand-500' : ''}`}>
            <Avatar name={s.name} />
            <div className="min-w-0 flex-1"><p className="font-semibold text-slate-800">{s.name}</p><p className="text-xs text-slate-400">{s.adm} · {s.cls}</p></div>
            {s.concession > 0 && <Badge tone="violet" dot={false}>{s.concession}% off</Badge>}
          </button>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_400px]">
        <Card title="Fee heads" subtitle={`Father: ${student.father}`}>
          <div className="space-y-2">
            {feeHeads.map((f) => {
              const on = selected.includes(f.id)
              return (
                <label key={f.id} className={`flex cursor-pointer items-center gap-4 rounded-xl p-4 ring-1 transition ${on ? 'bg-brand-50/60 ring-brand-300' : 'ring-slate-200 hover:ring-slate-300'}`}>
                  <input type="checkbox" checked={on} onChange={() => toggle(f.id)} className="h-5 w-5 rounded accent-emerald-600" />
                  <div className="flex-1"><p className="font-semibold text-slate-800">{f.head}</p><p className="text-xs text-slate-400">Due {f.due}</p></div>
                  {f.overdue && <Badge tone="red">Overdue</Badge>}
                  <span className="w-24 text-right font-bold text-slate-900">{inr(f.amount)}</span>
                </label>
              )
            })}
          </div>
          <p className="mt-4 text-xs text-slate-400">Late fine: ₹{LATE_FINE_PER_HEAD} for each overdue head. Concessions apply to tuition fee only.</p>
        </Card>

        {/* Receipt */}
        <div className="h-fit animate-fade-up xl:sticky xl:top-24">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="bg-gradient-to-br from-brand-600 to-brand-500 px-6 py-5 text-white">
              <p className="text-xs uppercase tracking-widest opacity-80">Fee receipt · preview</p>
              <p className="mt-1 text-lg font-bold">Sunrise Public School</p>
              <p className="text-xs opacity-80">{student.name} · {student.cls}</p>
            </div>
            <div className="space-y-2 px-6 py-5 text-sm">
              {t.heads.map((f) => <div key={f.id} className="flex justify-between text-slate-600"><span className="truncate pr-4">{f.head}</span><span>{inr(f.amount)}</span></div>)}
              {!t.heads.length && <p className="py-4 text-center text-slate-400">No fee heads selected</p>}
              {t.fine > 0 && <div className="flex justify-between text-rose-600"><span>Late fine</span><span>+{inr(t.fine)}</span></div>}
              {t.concession > 0 && <div className="flex justify-between text-emerald-600"><span>Concession ({student.concession}%)</span><span>−{inr(t.concession)}</span></div>}
              <div className="flex items-end justify-between border-t border-dashed border-slate-200 pt-3"><span className="font-semibold text-slate-700">Total payable</span><span className="text-3xl font-extrabold text-slate-900">{inr(t.net)}</span></div>
            </div>
            <div className="space-y-3 px-6 pb-6">
              <div className="grid grid-cols-4 gap-2">
                {payModes.map(({ k, icon: Icon }) => (
                  <button key={k} onClick={() => setMode(k)} className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-semibold transition ${mode === k ? 'bg-brand-50 text-brand-700 ring-2 ring-brand-500' : 'text-slate-500 ring-1 ring-slate-200'}`}><Icon className="h-4 w-4" />{k}</button>
                ))}
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <button onClick={() => openContact('Receipt Printing & WhatsApp Receipt')} className="btn-ghost px-3"><Printer className="h-4 w-4" /></button>
                <button disabled={!t.net} onClick={() => setPaid(true)} className="btn-primary py-3 disabled:opacity-50">{paid ? <><CheckCircle2 className="h-4 w-4" /> Receipt #FD-24581 created</> : `Collect ${inr(t.net)}`}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
