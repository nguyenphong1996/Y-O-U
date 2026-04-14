import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Compass, Layers, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Y.O.U Alliance',
  description: 'Vision, mission, values, and the 3-root role of the Youth Organization Union global alliance.',
}

const VALUES = [
  {
    title: 'Collaboration First',
    desc: 'We create value by linking organizations, not replacing them.',
  },
  {
    title: 'Execution with Integrity',
    desc: 'We prioritize measurable outcomes, transparent governance, and long-term trust.',
  },
  {
    title: 'Inclusive Global Perspective',
    desc: 'Every region contributes local insight to a shared global strategy.',
  },
  {
    title: 'Youth-led, Future-focused',
    desc: 'Young leaders shape decisions and implementation at every level.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_40%,#f8fafc_100%)] pb-20">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0057b8]">About Y.O.U</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
          The Official Global Alliance for Youth Organizations
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#3f5071]">
          Youth Organization Union (Y.O.U) is built to connect, enable, and multiply the impact of youth organizations worldwide through shared infrastructure, strategic partnerships, and leadership development.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        <article className="rounded-[2rem] bg-[#08152f] p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4b400]">Vision</p>
          <p className="mt-4 text-2xl font-semibold leading-snug">
            To become the leading global hub uniting youth organizations to amplify capacity and collective impact.
          </p>
        </article>
        <article className="rounded-[2rem] border border-[#dce6f6] bg-white p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">Mission</p>
          <p className="mt-4 text-lg leading-relaxed text-[#3f5071]">
            Build a high-trust operating framework for youth networks to collaborate across borders, strengthen capabilities, and co-deliver SDG-aligned programs.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Our 3-Root Operating Role</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-[#dce6f6] bg-white p-6">
            <Compass className="h-6 w-6 text-[#0057b8]" />
            <h3 className="mt-3 text-xl font-extrabold text-[#08152f]">Connector</h3>
            <p className="mt-2 text-sm text-[#4b5d82]">Connect NGOs, student-led groups, institutions, and policy actors into one operating network.</p>
          </article>
          <article className="rounded-[1.5rem] border border-[#dce6f6] bg-white p-6">
            <Zap className="h-6 w-6 text-[#f4b400]" />
            <h3 className="mt-3 text-xl font-extrabold text-[#08152f]">Enabler</h3>
            <p className="mt-2 text-sm text-[#4b5d82]">Provide capability tools, governance frameworks, and strategic mentoring for growth.</p>
          </article>
          <article className="rounded-[1.5rem] border border-[#dce6f6] bg-white p-6">
            <Layers className="h-6 w-6 text-[#34a853]" />
            <h3 className="mt-3 text-xl font-extrabold text-[#08152f]">Multiplier</h3>
            <p className="mt-2 text-sm text-[#4b5d82]">Scale local models into regional and global impact programs with reusable structures.</p>
          </article>
        </div>
      </section>

      <section id="passport" className="mx-auto max-w-7xl px-6 pt-14">
        <div className="rounded-[2rem] border border-[#dce6f6] bg-[#f8fbff] p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">Global Citizen Passport Flow</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#08152f]">A Recognized Learning Journey</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4b5d82]">
            Participants in Y.O.U events and projects receive verified stamps in their Global Citizen Passport. The passport records competencies, collaboration milestones, and impact contributions for long-term credibility in education and career pathways.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#223258]">
            <span className="rounded-full bg-white px-4 py-2">Event Participation</span>
            <span className="rounded-full bg-white px-4 py-2">Project Milestones</span>
            <span className="rounded-full bg-white px-4 py-2">Leadership Credentials</span>
            <span className="rounded-full bg-white px-4 py-2">Cross-border Collaboration Records</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Core Values</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {VALUES.map((value) => (
            <article key={value.title} className="rounded-2xl border border-[#dce6f6] bg-white p-6">
              <h3 className="text-lg font-bold text-[#08152f]">{value.title}</h3>
              <p className="mt-2 text-sm text-[#4b5d82]">{value.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/join?tab=organization"
            className="inline-flex items-center gap-2 rounded-full bg-[#0057b8] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#004a9b]"
          >
            Join The Alliance <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
