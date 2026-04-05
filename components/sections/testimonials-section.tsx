'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Amara Osei',
    role: 'Founder, Youth Innovators Ghana',
    country: '🇬🇭 Ghana',
    quote:
      'Y.O.U. completely changed my perspective on what a local organization can achieve globally. The connections I made at the African Leadership Conference led to a joint project that now serves 12,000 young people across West Africa.',
  },
  {
    name: 'Priya Sharma',
    role: 'Executive Director, YouthBridge India',
    country: '🇮🇳 India',
    quote:
      'The Global Citizen Passport gave our delegates a credential recognized beyond borders. For first-generation students in our program, that stamp of international validation opened doors we never imagined possible.',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Co-Founder, Juventud Activa México',
    country: '🇲🇽 Mexico',
    quote:
      'I was skeptical about paying to attend an international conference. But the Y.O.U. Summit Pass paid for itself in the first month — through partnerships, funding introductions, and skills I immediately applied at home.',
  },
  {
    name: 'Fatimah Al-Rashid',
    role: 'Program Lead, MENA Youth Council',
    country: '🇦🇪 UAE',
    quote:
      'The Y.O.U. alliance is rare because it genuinely values our regional context. They didn\'t try to impose a Western model of youth leadership — instead, they built a space where diverse approaches are celebrated and learned from.',
  },
  {
    name: 'Linh Nguyen',
    role: 'Director, Vietnam Youth Leadership Hub',
    country: '🇻🇳 Vietnam',
    quote:
      'Attending the Asia-Pacific Youth Forum in Bangkok as a Y.O.U. delegate was a turning point. I came back with 3 potential partners, a clearer theory of change, and the confidence that our local work matters on a global stage.',
  },
  {
    name: 'Johann Müller',
    role: 'Founder, EuroYouth Network',
    country: '🇩🇪 Germany',
    quote:
      'What sets Y.O.U. apart is the quality of curation. Every session, speaker, and delegate brought something genuine. It\'s the only conference I\'ve attended where every conversation felt like it could become a real collaboration.',
  },
  {
    name: 'Amani Kibira',
    role: 'National Coordinator, Youth Alliance Kenya',
    country: '🇰🇪 Kenya',
    quote:
      'The fully funded scholarship track is a game-changer. It meant our organization — still in early stages — could participate at the same table as established players. Y.O.U. walks the talk on inclusion.',
  },
  {
    name: 'Sasha Petrov',
    role: 'Youth Advocate, Eastern European Coalition',
    country: '🇺🇦 Ukraine',
    quote:
      'In a time when our region faces enormous challenges, connecting with 200+ youth leaders from around the world reminded us that we are not alone. Y.O.U. creates solidarity, not just networking.',
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const visibleCount = 3
  const total = testimonials.length

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 4000)
  }

  useEffect(() => {
    if (isAutoPlaying) startAuto()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const go = (dir: number) => {
    setIsAutoPlaying(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrent((prev) => (prev + dir + total) % total)
  }

  const getVisible = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % total])
    }
    return result
  }

  return (
    <section id="testimonials" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Delegates Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real voices from youth leaders across 6 continents who have experienced Y.O.U.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {getVisible().map((t, idx) => (
            <TestimonialCard key={`${t.name}-${idx}`} testimonial={t} />
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={() => go(-1)} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setIsAutoPlaying(false); setCurrent(idx) }}
                className={`h-2 rounded-full transition-all ${idx === current ? 'w-6 bg-primary' : 'w-2 bg-primary/20'}`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={() => go(1)} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow">
      <CardContent className="pt-6 space-y-4">
        <Quote className="h-8 w-8 text-primary/20" />
        <p className="text-foreground/80 leading-relaxed italic text-sm">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
            <p className="text-xs text-foreground/60">{testimonial.role}</p>
            <p className="text-xs text-foreground/60">{testimonial.country}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
