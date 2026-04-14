'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Layers,
  Users,
  Zap,
} from 'lucide-react'
import { ContactMessageForm } from '@/components/forms/contact-message-form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const HERO_SLIDES = [
  {
    id: 'alliance',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
    alt: 'International youth leaders collaborating',
    eyebrow: 'Youth Organization Union',
    title: 'All Youths Start with Y.O.U',
    description:
      'The official global alliance connecting youth organizations to scale capacity, credibility, and collective impact across 85+ countries.',
    primaryLabel: 'Discover Our Vision',
    secondaryLabel: 'Join The Alliance',
  },
  {
    id: 'impact',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    alt: 'Youth event crowd creating global impact',
    eyebrow: 'Global Action',
    title: 'Creating Real Impact for the Global Future',
    description:
      'From SDG projects to cross-border events, Y.O.U turns youth-led ambition into measurable global outcomes.',
    primaryLabel: 'View Projects',
    secondaryLabel: 'View Events',
  },
]

const TEAM_HIGHLIGHTS = [
  {
    name: 'Emily Dawson',
    role: 'Global President',
    region: 'Executive Board',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  {
    name: 'Marcus Le',
    role: 'Vice President',
    region: 'Executive Board',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    name: 'Aisha Bello',
    role: 'Africa Director',
    region: 'Continental Directors',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
  },
  {
    name: 'Kenji Watanabe',
    role: 'Asia Director',
    region: 'Continental Directors',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
  },
]

const MEMBER_ORGS = [
  'CSE Global',
  'Impact Youth Africa',
  'Future Leaders Asia',
  'LatAm Youth Bridge',
  'Nordic Green Campus',
  'Pacific Changemakers',
  'MENA Civic Lab',
  'EU Youth Connect',
]

const PROJECT_HIGHLIGHTS = [
  {
    title: 'Youth-Led Literacy Circles',
    org: 'Education For All Network',
    sdg: 'SDG 4',
    goal: 'Quality Education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
  },
  {
    title: 'Green Campus Alliance',
    org: 'EcoYouth Consortium',
    sdg: 'SDG 13',
    goal: 'Climate Action',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
  },
  {
    title: 'Cross-Border Mentor Network',
    org: 'Y.O.U Global Board',
    sdg: 'SDG 17',
    goal: 'Partnerships for the Goals',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
  },
]

const QUICK_FAQ = [
  {
    question: 'Who can join Y.O.U?',
    answer:
      'Registered youth-focused organizations and eligible youth leaders can apply through the Join page.',
  },
  {
    question: 'Is there a fee for alliance membership?',
    answer:
      'No membership fee is charged for alliance applications. Event tickets are handled separately on the Events page.',
  },
  {
    question: 'How long does review take?',
    answer: 'Most applications are reviewed within 5-7 business days, followed by an onboarding interview.',
  },
  {
    question: 'Where can I read policies?',
    answer: 'Visit Contact & FAQ for full Terms, Privacy Policy, and Refund Policy documentation.',
  },
]

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const previous = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (isHovering) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [isHovering, next])

  const scrollToAbout = () => {
    document.getElementById('about-highlights')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const currentSlide = HERO_SLIDES[activeSlide]
  const isFirstSlide = activeSlide === 0

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const start = touchStartX.current
    const end = e.changedTouches[0]?.clientX
    if (start === null || end === undefined) return
    const diff = start - end
    if (Math.abs(diff) < 40) return
    if (diff > 0) next()
    else previous()
  }

  return (
    <section
      id="home"
      className="relative h-[86vh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Homepage hero slider"
    >
      <Image
        src={currentSlide.image}
        alt={currentSlide.alt}
        fill
        priority
        unoptimized
        className="object-cover transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/90 via-[#08152f]/65 to-[#08152f]/30" />

      <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            {currentSlide.eyebrow}
          </p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {currentSlide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">{currentSlide.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {isFirstSlide ? (
              <button
                onClick={scrollToAbout}
                className="rounded-full bg-[#0057b8] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#004a9b]"
              >
                {currentSlide.primaryLabel}
              </button>
            ) : (
              <Link
                href="/projects"
                className="rounded-full bg-[#db4437] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#b9342a]"
              >
                {currentSlide.primaryLabel}
              </Link>
            )}

            <Link
              href={isFirstSlide ? '/join?tab=organization' : '/events'}
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/12"
            >
              {currentSlide.secondaryLabel}
            </Link>
          </div>

          {isFirstSlide && (
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                ['85+', 'Countries'],
                ['500+', 'Organizations'],
                ['10K+', 'Youth Leaders'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-black">{value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={previous}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur transition hover:bg-black/45"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur transition hover:bg-black/45"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/45'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const logoMarquee = useMemo(() => [...MEMBER_ORGS, ...MEMBER_ORGS], [])

  return (
    <div className="overflow-x-hidden bg-white">
      <HeroSlider />

      <section id="about-highlights" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0057b8]">Vision & Mission</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
              The Credibility Backbone of Youth Collaboration
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#425272]">
              Y.O.U exists to connect youth organizations with a trusted structure where collaboration, capacity building, and measurable SDG impact can scale globally.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] bg-[#08152f] p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4b400]">Our Vision</p>
              <p className="mt-4 text-xl font-semibold leading-relaxed">
                To become the leading global hub that unites youth organizations and amplifies their collective capacity and impact.
              </p>
            </article>
            <article className="rounded-[2rem] border border-[#e6ecf5] bg-[#f8fbff] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">Our Mission</p>
              <p className="mt-4 text-lg leading-relaxed text-[#425272]">
                Build a high-trust alliance through cross-border partnerships, leadership development, and shared programs that empower local action and global outcomes.
              </p>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-[#e5ebf7] bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-[#e8f1ff] p-3">
                <Compass className="h-6 w-6 text-[#0057b8]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#08152f]">Connector</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5d82]">
                Unite organizations, youth leaders, and institutions across continents.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-[#e5ebf7] bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-[#fff6df] p-3">
                <Zap className="h-6 w-6 text-[#f4b400]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#08152f]">Enabler</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5d82]">
                Strengthen member capacity through tools, training, and strategic support.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-[#e5ebf7] bg-white p-7 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-[#e7f6ee] p-3">
                <Layers className="h-6 w-6 text-[#34a853]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#08152f]">Multiplier</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5d82]">
                Scale best practices and SDG initiatives into replicable global programs.
              </p>
            </article>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#0057b8] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#004a9b]"
            >
              Read Full Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="team-highlights" className="bg-[#f7fbff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0057b8]">Global Leadership</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">Trusted Faces Behind Y.O.U</h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full border border-[#08152f] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#08152f] transition hover:bg-[#08152f] hover:text-white"
            >
              Meet The Global Board <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_HIGHLIGHTS.map((person) => (
              <article key={person.name} className="overflow-hidden rounded-[1.75rem] border border-[#dfe7f4] bg-white shadow-sm">
                <div className="relative h-64">
                  <Image src={person.image} alt={person.name} fill className="object-cover" unoptimized />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#08152f]">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#0057b8]">{person.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#5f6f8f]">{person.region}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="members-projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0057b8]">Members & SDG Impact</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">Professional. Structured. Global.</h2>
          </div>

          <div className="relative mt-12 overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-4">
              {logoMarquee.map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-[#e1e8f5] bg-[#f8fbff] px-5 py-2.5"
                >
                  <Building2 className="h-4 w-4 text-[#0057b8]" />
                  <span className="text-sm font-semibold text-[#08152f]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROJECT_HIGHLIGHTS.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-[#dfe7f4] bg-white shadow-sm">
                <div className="relative h-44">
                  <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-white">
                    {project.sdg} • {project.goal}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#08152f]">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#0057b8]">{project.org}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#08152f] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#08152f] transition hover:bg-[#08152f] hover:text-white"
            >
              See All Impact <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="join-cta" className="bg-[#f7fbff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0057b8]">Join The Alliance</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">Choose Your Participation Path</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#dce6f6] bg-white p-8 shadow-sm md:p-10">
              <div className="inline-flex rounded-2xl bg-[#e8f1ff] p-3">
                <Building2 className="h-6 w-6 text-[#0057b8]" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-[#08152f]">For Organizations</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">
                Register your organization and access a high-trust network of 500+ NGOs, partnerships, and capability-building programs.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#33476f]">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> Partnership matching and visibility</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> Knowledge exchange and tools</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> SDG collaboration opportunities</li>
              </ul>
              <Link
                href="/join?tab=organization"
                className="mt-6 inline-flex rounded-full bg-[#0057b8] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#004a9b]"
              >
                Register Your Organization
              </Link>
            </article>

            <article className="rounded-[2rem] border border-[#1f2d4a] bg-[#111827] p-8 text-white shadow-sm md:p-10">
              <div className="inline-flex rounded-2xl bg-white/10 p-3">
                <Users className="h-6 w-6 text-[#f4b400]" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold">For Youth Leaders</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Apply to become a Country Director or Continent Director and represent Y.O.U as a strategic regional leader.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> Regional leadership mandate</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> Global Board mentorship</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#34a853]" /> International exposure and policy impact</li>
              </ul>
              <Link
                href="/join?tab=role"
                className="mt-6 inline-flex rounded-full bg-[#db4437] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#b9342a]"
              >
                Apply For Director Role
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="contact-faq" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#dce6f6] bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">Contact Us</p>
              <h2 className="mt-4 text-3xl font-extrabold text-[#08152f]">Send a Quick Message</h2>
              <p className="mt-3 text-sm text-[#4a5d82]">
                Have questions about membership, roles, or policies? Send us a message and our team will reply shortly.
              </p>
              <div className="mt-6">
                <ContactMessageForm compact topic="Homepage Contact" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#dce6f6] bg-[#f8fbff] p-8 shadow-sm md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">FAQ</p>
              <h2 className="mt-4 text-3xl font-extrabold text-[#08152f]">Most Asked Questions</h2>
              <Accordion type="single" collapsible className="mt-6 space-y-3">
                {QUICK_FAQ.map((item, idx) => (
                  <AccordionItem key={item.question} value={`q-${idx}`} className="rounded-xl border border-[#dce6f6] bg-white px-4">
                    <AccordionTrigger className="text-left text-sm font-semibold text-[#0f2348] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-[#4a5d82]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#08152f] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#08152f] transition hover:bg-[#08152f] hover:text-white"
              >
                View All FAQs & Policies <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}
