'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronLeft, ChevronRight, Check, Lock, MapPin, Mail, Phone, Globe, Star } from 'lucide-react'
import Image from 'next/image'
import { EventRegistrationDialog } from '@/components/forms/event-registration-dialog'
import type { RegistrationPrefillData } from '@/components/forms/event-registration.types'
import { TICKET_TYPES } from '@/components/sections/pricing-section'
import { FounderApplicationForm } from '@/components/forms/founder-application-form'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// ─── Content ────────────────────────────────────────────────────────────────
const NEXT_EVENT_DATE = new Date('2026-10-15T00:00:00')

const TICKET_CARDS = [
  {
    id: 'summit-pass',
    tier: 'Standard',
    name: 'Summit Pass',
    price: '$299',
    badge: null,
    highlight: false,
    benefits: ['Full 3-day access to all sessions', 'Welcome kit & event materials', 'Digital certificate of participation', 'Networking sessions with global leaders'],
    cta: 'Register Now',
    ctaStyle: 'outline' as const,
  },
  {
    id: 'self-funded',
    tier: 'Premium',
    name: 'Self-Funded',
    price: '$440',
    badge: null,
    highlight: false,
    benefits: ['All Summit Pass perks included', '5-night accommodation package', 'Exclusive networking dinner', '1-on-1 mentorship session', 'Priority support'],
    cta: 'Register Now',
    ctaStyle: 'outline' as const,
  },
  {
    id: 'fully-funded',
    tier: 'Competitive',
    name: 'Fully Funded',
    price: '$21.99',
    priceNote: '/admin fee',
    badge: 'Most Popular',
    highlight: true,
    benefits: ['Full scholarship — sponsor covers all costs', 'Free flights & accommodation', 'Visa support & travel grants', 'All Summit Pass perks included'],
    cta: 'Apply for Scholarship',
    ctaStyle: 'primary-white' as const,
  },
  {
    id: 'partially-funded',
    tier: 'Merit-Based',
    name: 'Partially Funded',
    price: '$21.99',
    priceNote: '/admin fee',
    badge: '70% Off',
    highlight: false,
    benefits: ['70% tuition covered by sponsors', 'Full event access for all 3 days', 'Special Passport badge', 'Eligibility verification required'],
    cta: 'Apply Now',
    ctaStyle: 'outline' as const,
  },
]

const TIMELINE_STEPS = [
  { icon: '📋', title: 'Registration Opens', date: 'Dec 2025', desc: 'Submit your application and choose your ticket tier.' },
  { icon: '✅', title: 'Profile Confirmation', date: 'Jan 2026', desc: 'Applications reviewed; results in 7 business days.' },
  { icon: '🧭', title: 'Pre-Event Orientation', date: 'Feb 2026', desc: 'Online onboarding and pre-reading materials.' },
  { icon: '🎤', title: 'Summit Days', date: 'Oct 15–17', desc: 'Three days of keynotes, workshops, and networking.' },
  { icon: '🏅', title: 'Certification', date: 'Nov 2026', desc: 'Receive your official Y.O.U certificate.' },
  { icon: '🌐', title: 'Passport Updated', date: 'Ongoing', desc: 'Summit record permanently added to your Passport.' },
]

// ─── Countdown Hook ──────────────────────────────────────────────────────────
function useCountdown(target: Date) {
  const [countdown, setCountdown] = useState({ days: 0, hrs: 0, min: 0, sec: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { setCountdown({ days: 0, hrs: 0, min: 0, sec: 0 }); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setCountdown({ days: d, hrs: h, min: m, sec: s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return countdown
}

// ─── Hero Slider ─────────────────────────────────────────────────────────────
function HeroSlider({ onRegister, onJoin }: { onRegister: () => void; onJoin: () => void }) {
  const [slide, setSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const countdown = useCountdown(NEXT_EVENT_DATE)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const next = useCallback(() => setSlide(s => (s + 1) % 2), [])
  const prev = useCallback(() => setSlide(s => (s - 1 + 2) % 2), [])

  useEffect(() => {
    if (isHovering) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isHovering, next])

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Slide A – Event */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: slide === 0 ? 1 : 0, pointerEvents: slide === 0 ? 'auto' : 'none' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Diverse crowd of energetic young leaders at Global Youth Summit 2026"
          fill className="object-cover" priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001736] via-[#001736]/65 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">Global Youth Summit 2026</span>
              </div>
              {/* Headline */}
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Unleash The <br />
                <span className="text-[#47a1ff]">Catalyst</span> Within.
              </h1>
              {/* Location + Date */}
              <p className="text-white/70 font-medium">📍 Hanoi, Vietnam &nbsp;·&nbsp; October 15–17, 2026</p>
              {/* Countdown */}
              <div className="flex gap-6">
                {[
                  { v: countdown.days, l: 'Days' },
                  { v: countdown.hrs, l: 'Hours' },
                  { v: countdown.min, l: 'Mins' },
                  { v: countdown.sec, l: 'Secs' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <div className="text-4xl font-black text-white tabular-nums">{String(v).padStart(2,'0')}</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest mt-1">{l}</div>
                  </div>
                ))}
              </div>
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onRegister}
                  className="bg-[#47a1ff] text-white px-10 py-4 rounded-3xl font-bold text-lg hover:bg-white hover:text-[#001736] transition-all shadow-xl active:scale-95"
                >
                  Register for Event
                </button>
                <button
                  onClick={() => document.getElementById('event')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-white/30 text-white px-10 py-4 rounded-3xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95"
                >
                  Explore More
                </button>
              </div>
            </div>
            {/* Stat badges – Desktop only */}
            <div className="hidden md:grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#47a1ff]/20 blur-[120px] rounded-full pointer-events-none" />
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl space-y-2 translate-y-12">
                <div className="text-5xl font-black text-white">150+</div>
                <div className="text-white/70 font-medium">Global Chapters</div>
              </div>
              <div className="bg-[#47a1ff] p-8 rounded-3xl space-y-2">
                <div className="text-5xl font-black text-white uppercase">Y.O.U</div>
                <div className="text-white/90 font-medium">Started with All Youths.</div>
              </div>
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl col-span-2">
                <p className="text-white/80 leading-relaxed italic">&quot;The movement that cannot be contained. Join us in shaping the sustainable future of 2030.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide B – Organization */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: slide === 1 ? 1 : 0, pointerEvents: slide === 1 ? 'auto' : 'none' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt="Diverse young professionals collaborating on global initiatives"
          fill className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001736]/90 via-[#001736]/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="inline-block px-3 py-1 bg-[#ffba38]/20 text-[#ffba38] text-xs font-bold rounded-full uppercase tracking-widest border border-[#ffba38]/40">
              Youth Organization Union
            </span>
            <h2 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              All Youths Start<br />with <span className="text-[#47a1ff]">Y.O.U</span>
            </h2>
            <p className="text-white/80 text-xl font-medium max-w-xl mx-auto">
              A global alliance of youth organizations across 85+ countries, driving change through collaboration and action.
            </p>
            {/* Stat chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {[['85+', 'Countries'], ['500+', 'Organizations'], ['10K+', 'Youth Leaders']].map(([v, l]) => (
                <div key={l} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                  <span className="text-white font-black text-xl">{v}</span>
                  <span className="text-white/60 text-sm ml-2">{l}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onJoin}
              className="bg-white text-[#001736] px-12 py-4 rounded-3xl font-bold text-lg hover:bg-[#47a1ff] hover:text-white transition-all shadow-xl active:scale-95"
            >
              Join Y.O.U
            </button>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
        <ChevronRight className="w-5 h-5" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {[0, 1].map(i => (
          <button key={i} onClick={() => setSlide(i)} aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${slide === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [registration, setRegistration] = useState<{
    open: boolean; eventTitle: string; eventDate: string;
    preselectedTicket?: string; initialFormData?: RegistrationPrefillData
  }>({ open: false, eventTitle: '', eventDate: '' })

  const validTicketIds = new Set(TICKET_TYPES.map(t => t.id))
  const sanitize = (id?: string) => id && validTicketIds.has(id) ? id : undefined

  const openPayment = (ticketId?: string) => {
    setRegistration({
      open: true,
      eventTitle: 'Global Youth Summit 2026',
      eventDate: 'October 15–17, 2026',
      preselectedTicket: sanitize(ticketId),
    })
  }

  const NAV = [
    { label: 'Home', href: '#home' },
    { label: 'Event', href: '#event' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fbf8fe', color: '#1b1b1f' }}>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50" style={{ background: 'rgba(251,248,254,0.85)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(27,27,31,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image src="/you-icon.png" alt="Y.O.U" width={40} height={40} className="h-10 w-auto" priority unoptimized />
            <span className="text-2xl font-black tracking-tighter" style={{ color: '#001736' }}>Y.O.U</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm uppercase tracking-wider font-semibold transition-colors hover:text-[#0060a8]"
                style={{ color: '#001736' }}
              >{l.label}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block bg-[#001736] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Join Now
          </button>

          {/* Mobile hamburger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-[#001736] text-white border-0">
              <div className="flex flex-col gap-8 pt-8">
                <span className="text-2xl font-black tracking-tighter">Y.O.U</span>
                <nav className="flex flex-col gap-5">
                  {NAV.map(l => (
                    <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                    >{l.label}</a>
                  ))}
                </nav>
                <button
                  onClick={() => { setMobileMenuOpen(false); document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="bg-[#47a1ff] text-white py-4 rounded-2xl font-bold text-center"
                >
                  Join Now
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ── Hero Slider ─────────────────────────────────────────────────────── */}
      <div className="pt-[72px]">
        <HeroSlider
          onRegister={() => openPayment()}
          onJoin={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>

      {/* ── Event + Passport ────────────────────────────────────────────────── */}
      <section id="event" className="py-32 bg-white relative overflow-hidden">
        {/* background ghost text */}
        <div className="absolute -top-8 -left-4 text-[9rem] font-black text-[#001736]/5 pointer-events-none select-none leading-none">Y.O.U</div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          {/* Left — Event story */}
          <div className="space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0060a8]">Why Attend?</span>
              <h2 className="text-5xl font-black text-[#001736] tracking-tighter leading-tight mt-3">
                Build Your<br />Leadership Journey
              </h2>
              <p className="text-[#43474f] mt-4 text-lg leading-relaxed">
                Every event you attend earns you skills, connections, and credentials that compound into a powerful long-term portfolio.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: '🌐', title: 'Global Network', desc: 'Connect with young leaders from 85+ countries at our annual international forums and workshops.' },
                { icon: '⚡', title: 'Real-World Skills', desc: 'Learn directly from CEOs, NGO directors, and international policy experts who shape tomorrow.' },
                { icon: '🏅', title: 'International Credential', desc: 'Earn blockchain-verified certificates recognized globally — valuable for university applications and careers.' },
              ].map(b => (
                <div key={b.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0" style={{ background: '#f6f2f8' }}>
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#001736]">{b.title}</h4>
                    <p className="text-[#43474f] leading-relaxed text-sm mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#timeline" className="inline-flex items-center gap-2 text-[#0060a8] font-bold hover:gap-4 transition-all">
              See Full Timeline <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — Passport Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#001736] rounded-[3rem] rotate-3 scale-105 opacity-5" />
            <div className="relative bg-white shadow-2xl rounded-[3rem] p-12 border border-[#f0edf2] overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe className="w-24 h-24 text-[#001736]" />
              </div>
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-black text-[#001736] italic uppercase">Global Citizen Passport</div>
                  <Star className="w-6 h-6 text-[#0060a8] fill-[#0060a8]" />
                </div>
                {/* Passport visual */}
                <div className="w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[#001736] to-[#002b5b] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🌍</div>
                    <div className="font-bold text-sm tracking-widest uppercase text-white/60">Global Citizen</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] uppercase text-[#43474f] font-bold tracking-widest">Passport ID</div>
                    <div className="text-lg font-bold text-[#001736]">YOU-2026-X892</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#43474f] font-bold tracking-widest">Current Status</div>
                    <div className="text-lg font-bold text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-600" /> Active
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-[#001736] text-white py-4 rounded-2xl font-bold hover:bg-[#002b5b] transition-all"
                >
                  Activate Your Passport
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────────────── */}
      <section id="timeline" className="py-32" style={{ background: '#f6f2f8' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0060a8]">6-Step Journey</span>
            <h2 className="text-5xl font-black text-[#001736] tracking-tighter mt-3">Event Roadmap</h2>
            <p className="text-[#43474f] mt-4 font-medium">Your 6-step journey to becoming a true Catalyst</p>
          </div>
          {/* Desktop: horizontal */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 w-full h-[2px] bg-[#c4c6d0]/40" />
            <div className="grid grid-cols-6 gap-4">
              {TIMELINE_STEPS.map((step, i) => (
                <div key={step.title} className="relative z-10 group text-center">
                  <div className={`w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 text-2xl transition-all duration-500 border ${i === 3 ? 'bg-[#001736] text-white border-[#001736]' : 'bg-white border-[#e4e1e7] group-hover:bg-[#001736] group-hover:text-white'}`}>
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-[#001736] text-sm">{step.title}</h4>
                  <p className="text-xs text-[#43474f] mt-1">{step.date}</p>
                  <p className="text-xs text-[#43474f] mt-2 leading-relaxed hidden group-hover:block">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: vertical */}
          <div className="md:hidden relative ml-4 pl-8 border-l-2 border-[#e4e1e7] space-y-10">
            {TIMELINE_STEPS.map((step, i) => (
              <div key={step.title} className="relative">
                <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ring-4 ring-white ${i === 3 ? 'bg-[#001736] text-white' : 'bg-[#747780] text-white'}`}>
                  {i + 1}
                </div>
                <h4 className="font-bold text-[#001736]">{step.title}</h4>
                <p className="text-xs text-[#0060a8] font-medium mt-0.5">{step.date}</p>
                <p className="text-sm text-[#43474f] mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tickets ─────────────────────────────────────────────────────────── */}
      <section id="tickets" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0060a8]">Flexible Tiers</span>
              <h2 className="text-5xl font-black text-[#001736] tracking-tighter mt-3">Choose Your Ticket</h2>
              <p className="text-[#43474f] mt-4 font-medium max-w-lg">Participation packages designed to fit every personal development need and financial situation.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#f6f2f8] p-2 rounded-2xl">
              <button className="bg-white px-6 py-2 rounded-xl font-bold text-sm shadow-sm text-[#001736]">Individual</button>
              <button className="px-6 py-2 rounded-xl font-bold text-sm text-[#43474f]">Group (3+)</button>
            </div>
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {TICKET_CARDS.map(card => (
              <div key={card.id}
                className={`rounded-[2.5rem] p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] relative ${card.highlight ? 'bg-[#001736] text-white shadow-2xl scale-105' : 'bg-[#f6f2f8]'}`}
              >
                {card.badge && (
                  <div className={`absolute -top-4 ${card.highlight ? 'left-1/2 -translate-x-1/2' : 'right-6'} text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest ${card.highlight ? 'bg-[#47a1ff] text-white' : 'bg-[#001736] text-white'}`}>
                    {card.badge}
                  </div>
                )}
                <div className={`font-bold text-xl mb-2 ${card.highlight ? 'text-white/80' : 'text-[#001736]'}`}>{card.name}</div>
                <div className={`text-4xl font-black mb-1 ${card.highlight ? 'text-white' : 'text-[#001736]'}`}>
                  {card.price}
                  {card.priceNote && <span className={`text-sm font-normal ml-1 ${card.highlight ? 'text-white/50' : 'text-[#43474f]/50'}`}>{card.priceNote}</span>}
                </div>
                <ul className="space-y-3 mb-10 flex-grow text-sm mt-6">
                  {card.benefits.map(b => (
                    <li key={b} className={`flex items-start gap-2 ${card.highlight ? 'text-white/80' : 'text-[#43474f]'}`}>
                      {card.highlight
                        ? <Star className="w-4 h-4 text-[#47a1ff] fill-[#47a1ff] shrink-0 mt-0.5" />
                        : <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      }
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openPayment(card.id)}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    card.ctaStyle === 'primary-white'
                      ? 'bg-white text-[#001736] hover:bg-[#47a1ff] hover:text-white'
                      : 'border-2 border-[#001736] text-[#001736] hover:bg-[#001736] hover:text-white'
                  }`}
                >
                  {card.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile/tablet: horizontal scroll carousel */}
          <div className="lg:hidden flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {TICKET_CARDS.map(card => (
              <div key={card.id}
                className={`min-w-[280px] snap-center rounded-3xl p-6 flex flex-col shrink-0 relative ${card.highlight ? 'bg-[#001736] text-white' : 'bg-[#f6f2f8]'}`}
              >
                {card.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1 rounded-full font-black uppercase ${card.highlight ? 'bg-[#47a1ff] text-white' : 'bg-[#001736] text-white'}`}>
                    {card.badge}
                  </div>
                )}
                <div className={`font-bold text-lg mb-2 ${card.highlight ? 'text-white/80' : 'text-[#001736]'}`}>{card.name}</div>
                <div className={`text-3xl font-black mb-6 ${card.highlight ? 'text-white' : 'text-[#001736]'}`}>{card.price}</div>
                <ul className="space-y-2 mb-8 flex-grow text-sm">
                  {card.benefits.slice(0, 3).map(b => (
                    <li key={b} className={`flex items-start gap-2 ${card.highlight ? 'text-white/80' : 'text-[#43474f]'}`}>
                      <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openPayment(card.id)}
                  className={`w-full py-3 rounded-2xl font-bold text-sm transition-all ${
                    card.highlight
                      ? 'bg-white text-[#001736] hover:bg-[#47a1ff] hover:text-white'
                      : 'border-2 border-[#001736] text-[#001736] hover:bg-[#001736] hover:text-white'
                  }`}
                >
                  {card.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="mt-16 pt-10 border-t border-[#f0edf2] flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <div className="flex items-center gap-8 text-[#001736] font-black text-lg grayscale">
              {['VISA', 'MasterCard', 'Stripe', 'PayPal'].map(m => <span key={m}>{m}</span>)}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#43474f]">
              <Lock className="w-4 h-4" /> SSL 256-bit Secure Checkout
            </div>
          </div>
        </div>
      </section>

      {/* ── Membership ──────────────────────────────────────────────────────── */}
      <section id="membership" className="py-32 overflow-hidden" style={{ background: '#f0edf2' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Form card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0060a8]">Join Our Network</span>
            <h3 className="text-3xl font-black text-[#001736] mt-3 mb-8">Become an Internal Y.O.U Member</h3>
            <FounderApplicationForm />
          </div>

          {/* Visual side */}
          <div className="relative flex flex-col items-center lg:items-start space-y-10">
            <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Diverse young people joining hands in unity"
                fill className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001736]/80 to-transparent flex flex-col justify-end p-10">
                <div className="text-white text-3xl font-black leading-tight">Every great journey<br />starts with Y.O.U</div>
                <div className="text-white/60 mt-3 text-sm font-medium">Join 50,000+ Catalysts worldwide.</div>
              </div>
            </div>
            {/* Stacked avatars */}
            <div className="flex items-center gap-1">
              {['🧑‍🎓','👩‍💼','👨‍🏫'].map((emoji, i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-lg bg-[#001736] flex items-center justify-center text-xl -ml-3 first:ml-0 z-10" style={{ zIndex: 10 - i }}>
                  {emoji}
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg bg-[#47a1ff] flex items-center justify-center text-white font-bold text-xs -ml-3">+10k</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer id="contact" className="bg-[#001736] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter">Y.O.U</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Youth Organization Union — a global platform that empowers and amplifies youth organizations through international events, credentials, and community.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#47a1ff] transition-colors cursor-pointer">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              {['About Us', 'Upcoming Events', 'Y.O.U Passport', 'Partner Ecosystem', 'Scholarships'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              {['FAQ', 'Registration Guide', 'Terms of Service', 'Privacy Policy', 'Press & Media'].map(link => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact</h4>
            <div className="space-y-5 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#47a1ff] shrink-0" />
                <span>contact@you-global.org</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#47a1ff] shrink-0" />
                <span>Global Catalyst Center,<br />123 Momentum Way, International City</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#47a1ff] shrink-0" />
                <span>+84 123 456 789</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-medium uppercase tracking-widest">
          <div>© 2026 Youth Organization Union. All rights reserved.</div>
          <div className="flex gap-8">
            <span>Made for the next generation</span>
            <span>Vietnam Chapter</span>
          </div>
        </div>
      </footer>

      {/* ── Dialogs ─────────────────────────────────────────────────────────── */}
      <EventRegistrationDialog
        open={registration.open}
        onOpenChange={(open) => setRegistration(prev => ({ ...prev, open }))}
        eventTitle={registration.eventTitle}
        eventDate={registration.eventDate}
        preselectedTicket={registration.preselectedTicket}
        initialFormData={registration.initialFormData}
      />

      <Dialog open={showApplyForm} onOpenChange={setShowApplyForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Organization Founder Application</DialogTitle>
            <DialogDescription>Tell us about your organization and mission. Free — no membership fee required.</DialogDescription>
          </DialogHeader>
          <FounderApplicationForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
