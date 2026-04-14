import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Team | Y.O.U Alliance',
  description: 'Executive Board, Continental Directors, and Country Directors of Youth Organization Union.',
}

const EXECUTIVE_BOARD = [
  {
    name: 'Emily Dawson',
    role: 'Global President',
    region: 'Global Executive Board',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  {
    name: 'Marcus Le',
    role: 'Vice President',
    region: 'Global Executive Board',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    name: 'Sara Gomez',
    role: 'Chief Strategy Officer',
    region: 'Global Executive Board',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
  },
]

const CONTINENT_DIRECTORS = [
  { name: 'Aisha Bello', role: 'Africa Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80' },
  { name: 'Kenji Watanabe', role: 'Asia Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80' },
  { name: 'Luca Rossi', role: 'Europe Director', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&q=80' },
  { name: 'Camila Ortiz', role: 'Americas Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
  { name: 'Noah Tuala', role: 'Oceania Director', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80' },
]

const COUNTRY_DIRECTORS = [
  { name: 'Linh Tran', role: 'Country Director - Vietnam' },
  { name: 'Daniel Kim', role: 'Country Director - South Korea' },
  { name: 'Fatima Ali', role: 'Country Director - Egypt' },
  { name: 'Joao Silva', role: 'Country Director - Brazil' },
  { name: 'Amira Yusuf', role: 'Country Director - Nigeria' },
  { name: 'Eva Novak', role: 'Country Director - Czech Republic' },
  { name: 'Mina Sato', role: 'Country Director - Japan' },
  { name: 'Kai Johnson', role: 'Country Director - Canada' },
]

function TeamGrid({ people }: { people: { name: string; role: string; region?: string; image?: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <article key={`${person.name}-${person.role}`} className="overflow-hidden rounded-[1.5rem] border border-[#dce6f6] bg-white shadow-sm">
          {person.image ? (
            <div className="relative h-60">
              <Image src={person.image} alt={person.name} fill className="object-cover" unoptimized />
            </div>
          ) : (
            <div className="flex h-40 items-center justify-center bg-[#eef4ff] text-5xl font-black text-[#0057b8]">
              {person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </div>
          )}
          <div className="p-5">
            <h3 className="text-lg font-extrabold text-[#08152f]">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-[#0057b8]">{person.role}</p>
            {person.region && <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#5f6f8f]">{person.region}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_42%,#f8fafc_100%)] pb-20">
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0057b8]">Our Team</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
          Governance Structure of Y.O.U Global Alliance
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[#425272]">
          Our leadership model is structured across three levels: Executive Board, Continental Directors, and Country Directors.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-8">
        <h2 className="text-3xl font-extrabold text-[#08152f]">1. Executive Board</h2>
        <p className="mt-2 text-sm text-[#4a5d82]">Strategic and governance leadership at the global level.</p>
        <div className="mt-6">
          <TeamGrid people={EXECUTIVE_BOARD} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">2. Continental Directors</h2>
        <p className="mt-2 text-sm text-[#4a5d82]">Regional coordination, program execution, and partnership expansion.</p>
        <div className="mt-6">
          <TeamGrid people={CONTINENT_DIRECTORS} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">3. Country Directors</h2>
        <p className="mt-2 text-sm text-[#4a5d82]">National representation and local alliance growth.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRY_DIRECTORS.map((person) => (
            <article key={person.name} className="rounded-2xl border border-[#dce6f6] bg-white p-5">
              <h3 className="font-extrabold text-[#08152f]">{person.name}</h3>
              <p className="mt-1 text-sm text-[#4a5d82]">{person.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
