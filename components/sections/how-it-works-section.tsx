import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Join the Y.O.U network and connect with youth organization founders and leaders from 85+ countries. Share your mission, discover aligned organizations, and build meaningful cross-border partnerships.',
    icon: '🌐',
  },
  {
    number: '02',
    title: 'Build Capacity',
    description:
      'Access regional knowledge exchanges, leadership training programs, and mentorship opportunities. Grow your organization\'s capabilities through Y.O.U\'s structured development framework and peer learning.',
    icon: '📈',
  },
  {
    number: '03',
    title: 'Create Collective Impact',
    description:
      'Collaborate on joint initiatives, co-host international events, and amplify your reach through the Global Citizen Passport. Together we scale individual efforts into systemic, lasting change.',
    icon: '🚀',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How Y.O.U Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A simple, powerful framework for youth organizations to connect, grow, and create meaningful global impact.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute top-0 right-4 text-7xl font-bold text-primary/5 select-none hidden lg:block">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                {idx < steps.length - 1 && (
                  <ArrowRight className="mt-6 h-6 w-6 text-primary/40 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
