'use client'

import { Button } from '@/components/ui/button'
import { Calendar, MapPin } from 'lucide-react'

interface EventRoadmapItem {
  title: string
  location: string
  date: string
  isoDate: string
  isNext?: boolean
}

interface EventsRoadmapSectionProps {
  events: EventRoadmapItem[]
  onRegister: (eventTitle: string) => void
}

const COLOR_SCHEMES = [
  {
    card: 'border-primary/30 bg-gradient-to-br from-blue-50 to-slate-100',
    point: 'bg-primary',
    text: 'text-primary',
  },
  {
    card: 'border-amber-300/60 bg-gradient-to-br from-amber-50 to-orange-50',
    point: 'bg-amber-500',
    text: 'text-amber-600',
  },
  {
    card: 'border-lime-300/70 bg-gradient-to-br from-lime-50 to-stone-50',
    point: 'bg-lime-600',
    text: 'text-lime-700',
  },
]

function getQuarter(isoDate: string) {
  const month = new Date(isoDate).getUTCMonth() + 1
  const quarter = Math.ceil(month / 3)
  return `Q${quarter} 2026`
}

function getMonthYear(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(isoDate))
}

export function EventsRoadmapSection({ events, onRegister }: EventsRoadmapSectionProps) {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Global Events Roadmap</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-foreground/70">
            Join us at key moments throughout 2026.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-primary via-amber-500 to-lime-600 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {events.map((event, idx) => {
              const scheme = COLOR_SCHEMES[idx % COLOR_SCHEMES.length]
              const isLeft = idx % 2 === 0

              return (
                <div key={event.title} className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
                  <div className={`${isLeft ? 'sm:col-start-1' : 'sm:col-start-2'} pl-12 sm:pl-0`}>
                    <article className={`rounded-2xl border p-6 sm:p-7 shadow-sm ${scheme.card}`}>
                      <p className={`text-sm font-semibold uppercase tracking-wider ${scheme.text}`}>
                        {getQuarter(event.isoDate)}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-foreground">{event.title}</h3>
                      <p className="mt-3 flex items-center gap-2 text-foreground/75">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-foreground/75">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </p>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <p className="text-sm text-foreground/60">{getMonthYear(event.isoDate)}</p>
                        <Button
                          size="sm"
                          className="bg-primary text-white hover:bg-primary/90"
                          onClick={() => onRegister(event.title)}
                        >
                          Register
                        </Button>
                      </div>
                    </article>
                  </div>

                  <div className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-1/2">
                    <div className={`h-6 w-6 rounded-full ring-4 ring-white ${scheme.point}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}