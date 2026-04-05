'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string // ISO date string e.g. "2026-06-15"
  label?: string
}

export function CountdownTimer({ targetDate, label = 'Event starts in' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculate = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (!mounted) return null

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ]

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider">{label}</p>
      <div className="flex gap-2">
        {units.map(({ value, label: unitLabel }) => (
          <div key={unitLabel} className="flex flex-col items-center bg-primary/10 rounded-lg px-3 py-2 min-w-[52px]">
            <span className="text-xl font-bold text-primary tabular-nums">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs text-foreground/60">{unitLabel}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
