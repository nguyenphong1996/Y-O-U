'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface EventsCountdownBannerProps {
  title: string
  dateLabel: string
  targetDate: string
  onRegister: () => void
}

function parseTargetTime(targetDate: string) {
  const normalizedTarget = /^\d{4}-\d{2}-\d{2}$/.test(targetDate)
    ? `${targetDate}T00:00:00Z`
    : targetDate

  return new Date(normalizedTarget).getTime()
}

export function EventsCountdownBanner({
  title,
  dateLabel,
  targetDate,
  onRegister,
}: EventsCountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let intervalId: ReturnType<typeof setInterval> | null = null

    const calculate = () => {
      const target = parseTargetTime(targetDate)
      if (Number.isNaN(target)) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        if (intervalId) {
          clearInterval(intervalId)
          intervalId = null
        }
        return
      }

      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        if (intervalId) {
          clearInterval(intervalId)
          intervalId = null
        }
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    calculate()
    intervalId = setInterval(calculate, 1000)

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [targetDate])

  if (!mounted) return null

  const units = [
    { value: timeLeft.days, label: 'Days', cardClass: 'bg-slate-200 text-primary' },
    { value: timeLeft.hours, label: 'Hours', cardClass: 'bg-amber-100 text-orange-500' },
    { value: timeLeft.minutes, label: 'Minutes', cardClass: 'bg-lime-100 text-lime-700' },
    { value: timeLeft.seconds, label: 'Seconds', cardClass: 'bg-slate-300 text-primary' },
  ]

  return (
    <div className="mb-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-slate-100 via-stone-50 to-lime-50 p-6 sm:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Coming Soon</p>
        <h3 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h3>
        <p className="mt-2 text-base text-foreground/70 sm:text-lg">{dateLabel}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {units.map(({ value, label, cardClass }) => (
            <div
              key={label}
              className={`rounded-xl px-4 py-4 sm:px-6 sm:py-5 ${cardClass}`}
            >
              <p className="text-4xl font-bold leading-none tabular-nums sm:text-5xl">{String(value).padStart(2, '0')}</p>
              <p className="mt-2 text-sm">{label}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="mt-8 bg-primary px-8 text-white hover:bg-primary/90"
          onClick={onRegister}
        >
          Register Now
        </Button>
      </div>
    </div>
  )
}