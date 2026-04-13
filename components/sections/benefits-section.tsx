import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: '🗺️',
    title: 'Regional Knowledge Access',
    description:
      'Gain deep insight into youth ecosystems across Southeast Asia, Africa, Europe, and the Americas. Tap into Y.O.U\'s curated intelligence on funding landscapes, policy environments, and emerging opportunities.',
  },
  {
    icon: '🎓',
    title: 'Leadership Training & Capacity Building',
    description:
      'Access world-class workshops, online courses, and in-person bootcamps designed for youth organization leaders. Build skills in fundraising, impact measurement, community organizing, and global advocacy.',
  },
  {
    icon: '🤝',
    title: 'Project Support & Collaboration',
    description:
      'Get matched with complementary organizations for joint projects. Receive technical assistance, mentorship from experienced leaders, and access to Y.O.U\'s resource library for NGO operations.',
  },
  {
    icon: '🛂',
    title: 'Global Citizen Passport Co-ownership',
    description:
      'As a member organization, your community gains privileged access to — and co-ownership of — the Global Citizen Passport system. Recognize your members\' achievements and expand their global credentials.',
  },
  {
    icon: '🌍',
    title: 'International Visibility & Network',
    description:
      'Get featured in Y.O.U publications, international conferences, and partner channels. Build your organization\'s global profile and forge strategic alliances with leaders across 85+ countries.',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Why Join</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Membership Benefits</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Y.O.U membership gives your organization the tools, network, and visibility to grow beyond borders.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(0, 3).map((benefit, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg hover:border-primary/20 transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom 2 centered */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:max-w-2xl lg:mx-auto">
          {benefits.slice(3).map((benefit, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg hover:border-primary/20 transition-all">
              <CardContent className="pt-6 space-y-4">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
