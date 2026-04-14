import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Members & Projects | Y.O.U Alliance',
  description: 'Explore Y.O.U member organizations and SDG-aligned projects.',
}

const MEMBER_ORGANIZATIONS = [
  { name: 'CSE Global', region: 'Asia-Pacific', focus: 'Education & Youth Skills' },
  { name: 'Impact Youth Africa', region: 'Africa', focus: 'Civic Innovation' },
  { name: 'Future Leaders Asia', region: 'Asia', focus: 'Leadership Development' },
  { name: 'LatAm Youth Bridge', region: 'Americas', focus: 'Social Inclusion' },
  { name: 'Nordic Green Campus', region: 'Europe', focus: 'Climate Action' },
  { name: 'MENA Civic Lab', region: 'Middle East', focus: 'Policy & Advocacy' },
  { name: 'Pacific Changemakers', region: 'Oceania', focus: 'Community Resilience' },
  { name: 'SDG Youth Lab', region: 'Global', focus: 'Cross-border Projects' },
]

const PROJECTS = [
  {
    title: 'Youth-Led Literacy Circles',
    sdg: 'SDG 4',
    goal: 'Quality Education',
    description: 'Peer-to-peer learning circles in underserved communities across Southeast Asia and Africa.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
  },
  {
    title: 'Green Campus Alliance',
    sdg: 'SDG 13',
    goal: 'Climate Action',
    description: 'Student-led emissions reduction and sustainability programs in 100+ universities.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
  },
  {
    title: 'Women in Youth Leadership',
    sdg: 'SDG 5',
    goal: 'Gender Equality',
    description: 'Mentorship and leadership pipeline for emerging women leaders in social impact organizations.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=1200&q=80',
  },
  {
    title: 'Global Mentor Mesh',
    sdg: 'SDG 17',
    goal: 'Partnerships for the Goals',
    description: 'Cross-border mentor matching between senior experts and youth-led organizations.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
  },
  {
    title: 'Youth Employability Bootcamp',
    sdg: 'SDG 8',
    goal: 'Decent Work and Economic Growth',
    description: 'Regional bootcamps focused on employability, entrepreneurship, and digital economy skills.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80',
  },
  {
    title: 'Inclusive City Labs',
    sdg: 'SDG 11',
    goal: 'Sustainable Cities and Communities',
    description: 'Youth-led urban inclusion pilots co-designed with municipal stakeholders.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
  },
]

export default function MembersPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_42%,#f8fafc_100%)] pb-20">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0057b8]">Members & Projects</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
          Alliance Members and UNESCO-style SDG Impact Portfolio
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[#425272]">
          Y.O.U connects organizations across continents and publishes project outcomes aligned with UN SDGs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-8">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Member Organizations</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBER_ORGANIZATIONS.map((org) => (
            <article key={org.name} className="rounded-2xl border border-[#dce6f6] bg-white p-5">
              <h3 className="text-lg font-extrabold text-[#08152f]">{org.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0057b8]">{org.region}</p>
              <p className="mt-3 text-sm text-[#4a5d82]">{org.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">SDG Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.5rem] border border-[#dce6f6] bg-white shadow-sm">
              <div className="relative h-44">
                <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-[#111827]/85 px-3 py-1 text-xs font-semibold text-white">
                  {project.sdg}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-[#08152f]">{project.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#0057b8]">{project.goal}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
