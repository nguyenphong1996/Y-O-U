'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export const TICKET_TYPES = [
  {
    id: 'summit',
    label: 'Summit Pass',
    price: 299,
    badge: 'Most Popular',
    badgeColor: 'bg-primary text-white',
    description: 'Full conference access for self-funded delegates',
    features: [
      'All plenary & breakout sessions',
      'Networking dinners & receptions',
      'Digital delegate package',
      'Certificate of participation',
      'Y.O.U community access (1 year)',
    ],
    highlight: true,
  },
  {
    id: 'self-funded',
    label: 'Self-Funded',
    price: 440,
    badge: 'All-Inclusive',
    badgeColor: 'bg-secondary text-foreground',
    description: 'Complete package including accommodation & meals',
    features: [
      'Everything in Summit Pass',
      '3 nights accommodation',
      'All meals included',
      'Airport transfers',
      'Cultural excursion day',
    ],
    highlight: false,
  },
  {
    id: 'fully-funded',
    label: 'Fully Funded',
    price: 21.99,
    badge: 'Scholarship',
    badgeColor: 'bg-green-100 text-green-800',
    description: 'Admin fee only — travel & stay covered',
    features: [
      'Full conference access',
      'Flight + accommodation funded',
      'Meals & transfers included',
      'Requires application & approval',
      'Limited spots available',
    ],
    highlight: false,
  },
  {
    id: 'partially-funded',
    label: 'Partially Funded',
    price: 21.99,
    badge: 'Partial Scholarship',
    badgeColor: 'bg-amber-100 text-amber-800',
    description: 'Admin fee only — partial funding provided',
    features: [
      'Full conference access',
      'Accommodation funded',
      'Meals funded',
      'Self-arranged travel',
      'Requires application & approval',
    ],
    highlight: false,
  },
]

interface PricingSectionProps {
  onSelectTicket?: (ticketId: string) => void
}

export function PricingSection({ onSelectTicket }: PricingSectionProps) {
  return (
    <section id="pricing" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Ticket Options</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Path</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We believe every young leader deserves a seat at the table. Our funding options ensure cost is never a barrier to participation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TICKET_TYPES.map((ticket) => (
            <Card
              key={ticket.id}
              className={`relative border flex flex-col transition-all ${
                ticket.highlight
                  ? 'border-primary shadow-lg shadow-primary/10 scale-105'
                  : 'border-border hover:shadow-md'
              }`}
            >
              {ticket.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${ticket.badgeColor}`}>
                    {ticket.badge}
                  </span>
                </div>
              )}

              <CardHeader className="pt-8">
                <CardTitle className="text-lg text-foreground">{ticket.label}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">${ticket.price}</span>
                  {ticket.price === 21.99 && (
                    <span className="ml-1 text-sm text-foreground/60">admin fee</span>
                  )}
                </div>
                <p className="text-sm text-foreground/60 mt-1">{ticket.description}</p>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col gap-6">
                <ul className="space-y-2 flex-grow">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${ticket.highlight ? 'bg-primary hover:bg-primary/90 text-white' : ''}`}
                  variant={ticket.highlight ? 'default' : 'outline'}
                  onClick={() => onSelectTicket?.(ticket.id)}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground/50">
          Funded ticket applications are reviewed within 5 business days. We&apos;ll notify you via email.
        </p>
      </div>
    </section>
  )
}
