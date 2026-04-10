'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Mail, MapPin, Phone, Menu } from 'lucide-react'
import Image from 'next/image'

import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { BenefitsSection } from '@/components/sections/benefits-section'
import { PricingSection, TICKET_TYPES } from '@/components/sections/pricing-section'
import { FAQSection } from '@/components/sections/faq-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { EventsCountdownBanner } from '@/components/sections/events-countdown-banner'
import { EventsRoadmapSection } from '@/components/sections/events-roadmap-section'
import { EventRegistrationDialog } from '@/components/forms/event-registration-dialog'
import type { RegistrationPrefillData } from '@/components/forms/event-registration.types'
import { FounderApplicationForm } from '@/components/forms/founder-application-form'
import { CountdownTimer } from '@/components/countdown-timer'

// ─── Events data ─────────────────────────────────────────────────────────────

const EVENTS = [
  {
    title: 'Global Youth Summit 2026',
    location: 'Singapore',
    date: 'June 15–17, 2026',
    isoDate: '2026-06-15',
    spots: 42,
    isNext: true,
  },
  {
    title: 'African Leadership Conference',
    location: 'Nairobi, Kenya',
    date: 'July 20–22, 2026',
    isoDate: '2026-07-20',
    spots: 60,
    isNext: false,
  },
  {
    title: 'Asia-Pacific Youth Forum',
    location: 'Bangkok, Thailand',
    date: 'August 10–12, 2026',
    isoDate: '2026-08-10',
    spots: 55,
    isNext: false,
  },
  {
    title: 'European Youth Congress',
    location: 'Berlin, Germany',
    date: 'September 5–7, 2026',
    isoDate: '2026-09-05',
    spots: 70,
    isNext: false,
  },
  {
    title: 'Americas Youth Alliance',
    location: 'Toronto, Canada',
    date: 'October 15–17, 2026',
    isoDate: '2026-10-15',
    spots: 65,
    isNext: false,
  },
  {
    title: 'Middle East Youth Initiative',
    location: 'Dubai, UAE',
    date: 'November 8–10, 2026',
    isoDate: '2026-11-08',
    spots: 50,
    isNext: false,
  },
]

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#passport', label: 'Passport' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [showApplyForm, setShowApplyForm] = useState(false)
  const nextEvent = EVENTS.find((event) => event.isNext) ?? EVENTS[0]
  const validTicketTypeIds = new Set(TICKET_TYPES.map((ticket) => ticket.id))

  const sanitizeTicketType = (ticketType?: string) => {
    if (!ticketType) return undefined
    return validTicketTypeIds.has(ticketType) ? ticketType : undefined
  }

  const [registration, setRegistration] = useState<{
    open: boolean
    eventTitle: string
    eventDate: string
    preselectedTicket?: string
    initialFormData?: RegistrationPrefillData
  }>({ open: false, eventTitle: '', eventDate: '' })

  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventTitle: nextEvent.title,
    ticketType: '',
  })

  const openRegistrationDialog = (
    eventTitle: string,
    eventDate: string,
    preselectedTicket?: string,
    initialFormData?: RegistrationPrefillData,
  ) => {
    const safeTicketType = sanitizeTicketType(preselectedTicket)
    const safeInitialFormData = initialFormData
      ? { ...initialFormData, ticketType: sanitizeTicketType(initialFormData.ticketType) || '' }
      : undefined

    setRegistration({
      open: true,
      eventTitle,
      eventDate,
      preselectedTicket: safeTicketType,
      initialFormData: safeInitialFormData,
    })
  }

  const scrollToRegistrationForm = (eventTitle: string, preselectedTicket?: string) => {
    const safeTicketType = sanitizeTicketType(preselectedTicket)

    setRegistrationForm((prev) => ({
      ...prev,
      eventTitle,
      ticketType: safeTicketType ?? prev.ticketType,
    }))

    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleRegistrationFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const selectedEvent = EVENTS.find((event) => event.title === registrationForm.eventTitle) ?? nextEvent

    openRegistrationDialog(selectedEvent.title, selectedEvent.date, registrationForm.ticketType || undefined, {
      name: registrationForm.name,
      email: registrationForm.email,
      phone: registrationForm.phone,
      organization: registrationForm.organization,
      ticketType: registrationForm.ticketType,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:to-slate-950">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur dark:bg-slate-900/95">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/you-icon.png"
                alt="Youth Organization Union"
                width={80}
                height={80}
                className="h-12 w-auto"
                priority
              />
              <span className="font-bold text-xl text-primary">Y.O.U.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowApplyForm(true)}
              >
                Apply
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => scrollToRegistrationForm(nextEvent.title)}
              >
                Join Us
              </Button>
            </div>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-6 pt-8">
                  <nav className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-3 border-t border-border pt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setShowApplyForm(true)}
                    >
                      Apply as Founder
                    </Button>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => scrollToRegistrationForm(nextEvent.title)}
                    >
                      Register for Event
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Global Citizen Est. 2026
                </p>
                <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  All Youths Start with{' '}
                  <span className="text-primary">Y.O.U.</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  A global alliance connecting youth organization founders across 85+ countries — enabling collaboration, capacity building, and collective impact at scale.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discover Events
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowApplyForm(true)}
                >
                  Join as Founder
                </Button>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-foreground/60">Global Citizens</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">85+</p>
                  <p className="text-foreground/60">Countries</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">6</p>
                  <p className="text-foreground/60">Events in 2026</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 sm:h-[500px] flex items-center justify-center">
              <Image
                src="/you-icon.png"
                alt="Y.O.U Icon"
                width={400}
                height={400}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The World&apos;s Premier Network for Youth Leaders
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Y.O.U. (Youth Organization Union) is a global platform that connects, empowers, and amplifies youth organizations worldwide. We serve as the connector, enabler, and multiplier for the next generation of global leaders.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {[
              {
                icon: '🔗',
                title: 'Connector',
                description:
                  'We bridge youth organizations across continents, creating meaningful partnerships that transcend geography. Our network spans 85+ countries, enabling collaboration that was previously impossible for local organizations to achieve alone.',
              },
              {
                icon: '⚡',
                title: 'Enabler',
                description:
                  'We equip organizations with the tools, knowledge, and resources they need to grow. From leadership training and funding pathways to policy advocacy and the Global Citizen Passport — we make capacity building accessible.',
              },
              {
                icon: '✖️',
                title: 'Multiplier',
                description:
                  'We amplify individual impact into collective change. When 500 youth organizations act in concert, their combined reach and influence can shift systems. Y.O.U. is the platform that makes that coordination possible.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ── Global Citizen Passport ─────────────────────────────────────────── */}
      <section id="passport" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Flagship Product</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Global Citizen Passport
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  An innovative educational credential that recognizes global learning, cross-cultural competence, and youth leadership — valued by institutions in 85+ countries.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'Recognized globally by leading institutions',
                    desc: 'Your international experience, documented and verified.',
                  },
                  {
                    title: 'Track your global learning journey',
                    desc: 'Document achievements across continents and cultures.',
                  },
                  {
                    title: 'Build social impact & economic value',
                    desc: 'Unlock career opportunities and leadership roles globally.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-0.5">✓</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Your Passport Today
              </Button>
            </div>

            <div className="relative h-96 sm:h-[500px]">
              <Card className="h-full border-2 border-primary/30 flex flex-col items-center justify-between p-8">
                <CardContent className="text-center space-y-6 flex-grow flex flex-col items-center justify-center w-full">
                  <div className="text-6xl">🌍</div>
                  <p className="text-lg font-semibold text-foreground">Your Passport to Global Opportunities</p>

                  <div className="w-full grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-primary">50K+</p>
                      <p className="text-xs text-foreground/70 mt-1">Users Worldwide</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-accent">85+</p>
                      <p className="text-xs text-foreground/70 mt-1">Countries</p>
                    </div>
                  </div>

                  <div className="w-full pt-2">
                    <p className="text-xs text-foreground/60 mb-3 font-medium">Youth leaders from around the world:</p>
                    <div className="flex justify-center items-center gap-2 flex-wrap">
                      {['🇻🇳','🇲🇽','🇳🇬','🇮🇳','🇧🇷','🇵🇭','🇰🇪','🇹🇭'].map((flag, i) => (
                        <span key={i} className="text-2xl">{flag}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Membership Benefits ─────────────────────────────────────────────── */}
      <BenefitsSection />

      {/* ── Events ──────────────────────────────────────────────────────────── */}
      <section id="events" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsCountdownBanner
            title={nextEvent.title}
            dateLabel={`${nextEvent.date} - ${nextEvent.location}`}
            targetDate={nextEvent.isoDate}
            onRegister={() => scrollToRegistrationForm(nextEvent.title)}
          />

          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">2026 Calendar</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              International Events
            </h2>
            <p className="text-lg text-foreground/70">Connect with youth leaders from around the globe</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event, idx) => (
              <Card key={idx} className="border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                {event.isNext ? (
                  <div className="bg-primary px-4 py-1.5 text-xs font-semibold text-white text-center tracking-wider uppercase">
                    Next Event — Register Now
                  </div>
                ) : (
                  <div className="bg-muted px-4 py-1.5 text-xs font-semibold text-foreground/70 text-center tracking-wider uppercase">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-foreground/60">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-foreground/70">{event.date}</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {event.spots} spots left
                    </span>
                    <span className="text-xs text-foreground/50">From $21.99</span>
                  </div>
                  {event.isNext && (
                    <CountdownTimer targetDate={event.isoDate} label="Starts in" />
                  )}
                </CardContent>
                <div className="border-t border-border p-4">
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 text-foreground"
                    onClick={() => scrollToRegistrationForm(event.title)}
                    disabled={!event.isNext}
                  >
                    {event.isNext ? 'Register Now' : 'Coming Soon'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EventsRoadmapSection
        events={EVENTS}
        onRegister={(eventTitle) => scrollToRegistrationForm(eventTitle)}
      />

      {/* ── Pricing ─────────────────────────────────────────────────────────── */}
      <PricingSection
        onSelectTicket={(ticketId) =>
          scrollToRegistrationForm(nextEvent.title, ticketId)
        }
      />

      {/* ── Gallery ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-border py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Community</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See Our Community in Action
            </h2>
            <p className="text-lg text-foreground/70">Real stories from youth leaders around the world</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: '🌟', title: 'Global Conferences', desc: 'Annual summits across 6 continents' },
              { emoji: '🤝', title: 'Community Building', desc: 'Forging partnerships that last' },
              { emoji: '📚', title: 'Learning Programs', desc: 'Workshops, webinars, and bootcamps' },
              { emoji: '🚀', title: 'Innovation Projects', desc: 'Co-creating solutions to global challenges' },
              { emoji: '🌏', title: 'Cultural Exchange', desc: 'Bridging traditions and perspectives' },
              { emoji: '💡', title: 'Mentorship', desc: '1-on-1 guidance from experienced leaders' },
              { emoji: '🎯', title: 'Leadership Training', desc: 'Practical skills for real impact' },
              { emoji: '✨', title: 'Impact Stories', desc: 'Celebrating what we achieve together' },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border-border overflow-hidden hover:shadow-lg transition-all hover:scale-105 hover:border-primary/20"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-48 text-center space-y-3">
                  <div className="text-5xl">{item.emoji}</div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── Event Registration Form ─────────────────────────────────────────── */}
      <section id="apply" className="border-t border-border py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/20 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 text-center">Event Registration</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
              Register for an International Event
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 text-center">
              Fill in your details below. Any Register button above will auto-scroll to this form and pre-select your event.
            </p>

            <form onSubmit={handleRegistrationFormSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={registrationForm.name}
                    onChange={(e) => setRegistrationForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                  <Input
                    placeholder="+84..."
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Organization</label>
                  <Input
                    placeholder="Your organization"
                    value={registrationForm.organization}
                    onChange={(e) => setRegistrationForm((prev) => ({ ...prev, organization: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Event <span className="text-destructive">*</span>
                  </label>
                  <select
                    required
                    value={registrationForm.eventTitle}
                    onChange={(e) => setRegistrationForm((prev) => ({ ...prev, eventTitle: e.target.value }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {EVENTS.map((event) => (
                      <option key={event.title} value={event.title} disabled={!event.isNext}>
                        {event.title} ({event.date})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Ticket Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    required
                    value={registrationForm.ticketType}
                    onChange={(e) => setRegistrationForm((prev) => ({
                      ...prev,
                      ticketType: sanitizeTicketType(e.target.value) || '',
                    }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="" disabled>Select a ticket</option>
                    {TICKET_TYPES.map((ticket) => (
                      <option key={ticket.id} value={ticket.id}>
                        {ticket.label} - ${ticket.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Continue to Payment
                </Button>
              </div>
            </form>

            <p className="mt-6 text-sm text-foreground/50 text-center">
              You will review your details once more before completing secure payment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer id="contact" className="border-t border-border bg-primary text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@you-global.org" className="text-white/80 hover:text-white transition-colors">
                      hello@you-global.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+6581234567" className="text-white/80 hover:text-white transition-colors">
                      +65 8123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Global Headquarters</p>
                    <p className="text-white/80">Singapore, Singapore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Vietnam Office</p>
                    <p className="text-white/80">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#passport" className="text-white/80 hover:text-white transition-colors">Passport</a></li>
                  <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#apply" className="text-white/80 hover:text-white transition-colors">Apply</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>&copy; 2026 Youth Organization Union. All rights reserved. | Global Citizen Est. 2026</p>
          </div>
        </div>
      </footer>

      {/* ── Global Dialogs ───────────────────────────────────────────────────── */}

      {/* Event Registration Dialog */}
      <EventRegistrationDialog
        open={registration.open}
        onOpenChange={(open) => setRegistration((prev) => ({ ...prev, open }))}
        eventTitle={registration.eventTitle}
        eventDate={registration.eventDate}
        preselectedTicket={registration.preselectedTicket}
        initialFormData={registration.initialFormData}
      />

      {/* Founder Application Dialog */}
      <Dialog open={showApplyForm} onOpenChange={setShowApplyForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Organization Founder Application</DialogTitle>
            <DialogDescription>
              Tell us about your organization and mission. Free — no membership fee required.
            </DialogDescription>
          </DialogHeader>
          <FounderApplicationForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
