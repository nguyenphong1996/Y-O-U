'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarClock, CreditCard, MapPin, Ticket } from 'lucide-react'

const EVENT_DATE = new Date('2026-10-15T00:00:00+07:00').getTime()

const TICKET_PLANS = [
  {
    name: 'Summit Pass',
    price: '$299',
    description: '3-day summit access, networking sessions, and participation certificate.',
  },
  {
    name: 'Self-Funded',
    price: '$440',
    description: 'Summit pass plus accommodation support and priority check-in.',
  },
  {
    name: 'Fully Funded',
    price: '$21.99',
    description: 'Admin fee only. Flight and accommodation covered after approval.',
  },
]

const TIMELINE = [
  { title: 'Registration Window', period: 'April - August 2026' },
  { title: 'Selection & Confirmation', period: 'May - September 2026' },
  { title: 'Pre-event Orientation', period: 'October 2026 (Week 1)' },
  { title: 'Global Youth Summit', period: 'October 15-17, 2026' },
]

function useCountdown(target: number) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}

export default function EventsPage() {
  const timer = useCountdown(EVENT_DATE)

  return (
    <div className="bg-[linear-gradient(180deg,#08152f_0%,#0f1f3d_28%,#f7fbff_28%,#ffffff_100%)] pb-20">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4b400]">Events</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
          Y.O.U Global Youth Summit 2026
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-white/80">
          This page is the dedicated event channel for timeline updates, ticket flow, and checkout guidance.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
          <MapPin className="h-4 w-4 text-[#34a853]" /> Hanoi, Vietnam • October 15-17, 2026
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-[#18325f] bg-[#102142] p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4b400]">Live Countdown</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Days', value: timer.days },
              { label: 'Hours', value: timer.hours },
              { label: 'Minutes', value: timer.minutes },
              { label: 'Seconds', value: timer.seconds },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center">
                <div className="text-3xl font-black tabular-nums">{String(item.value).padStart(2, '0')}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Event Timeline</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {TIMELINE.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#dce6f6] bg-white p-6">
              <div className="flex items-center gap-2 text-[#0057b8]">
                <CalendarClock className="h-4 w-4" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">{item.period}</p>
              </div>
              <h3 className="mt-3 text-xl font-extrabold text-[#08152f]">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="tickets" className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Ticket Options</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TICKET_PLANS.map((plan) => (
            <article key={plan.name} className="rounded-[1.5rem] border border-[#dce6f6] bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-full bg-[#edf4ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0057b8]">
                <Ticket className="mr-1 h-3.5 w-3.5" /> {plan.name}
              </div>
              <p className="mt-4 text-3xl font-extrabold text-[#08152f]">{plan.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">{plan.description}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-[#0057b8] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#004a9b]"
              >
                Request Registration Support
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#dce6f6] bg-[#f8fbff] p-5 text-sm text-[#425272]">
          <p className="font-semibold text-[#08152f]">Checkout Providers</p>
          <p className="mt-2 flex items-center gap-2"><CreditCard className="h-4 w-4 text-[#0057b8]" /> Stripe and PayPal integration is prepared for dedicated checkout flow.</p>
        </div>
      </section>
    </div>
  )
}
