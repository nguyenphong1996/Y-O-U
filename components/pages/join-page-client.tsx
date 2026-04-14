'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Building2, Sparkles, Users2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FounderApplicationForm } from '@/components/forms/founder-application-form'
import { RoleApplicationForm } from '@/components/forms/role-application-form'

const VALID_TABS = new Set(['organization', 'role'])

export function JoinPageClient() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('organization')

  useEffect(() => {
    const requested = searchParams.get('tab')
    if (requested && VALID_TABS.has(requested)) {
      setActiveTab(requested)
    }
  }, [searchParams])

  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_45%,#f9fafb_100%)]">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0057b8]">Join Us</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
          Become Part of the Official Y.O.U Alliance Network
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[#3d4e6f]">
          Choose your path: register your organization as a member, or apply to represent your country and continent as a Y.O.U director.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-[#dbe7fb] bg-white p-6 shadow-[0_18px_60px_rgba(0,87,184,0.08)] md:p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="gap-6">
            <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl bg-[#edf4ff] p-1">
              <TabsTrigger value="organization" className="h-11 rounded-xl font-semibold data-[state=active]:bg-white">
                <Building2 className="mr-2 h-4 w-4" /> Membership Application
              </TabsTrigger>
              <TabsTrigger value="role" className="h-11 rounded-xl font-semibold data-[state=active]:bg-white">
                <Users2 className="mr-2 h-4 w-4" /> Role Application
              </TabsTrigger>
            </TabsList>

            <TabsContent value="organization">
              <div className="mb-6 rounded-2xl border border-[#dfe8f7] bg-[#f8fbff] p-4">
                <p className="text-sm font-semibold text-[#0e2247]">For Organizations</p>
                <p className="mt-1 text-sm text-[#4a5d82]">
                  Join a trusted network of 500+ youth organizations and co-create cross-border impact programs.
                </p>
              </div>
              <FounderApplicationForm />
            </TabsContent>

            <TabsContent value="role">
              <div className="mb-6 rounded-2xl border border-[#dfe8f7] bg-[#f8fbff] p-4">
                <p className="text-sm font-semibold text-[#0e2247]">For Youth Leaders</p>
                <p className="mt-1 text-sm text-[#4a5d82]">
                  Apply as Country Director or Continent Director and lead Y.O.U representation in your region.
                </p>
              </div>
              <RoleApplicationForm />
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-[#dbe7fb] bg-white shadow-[0_18px_60px_rgba(0,87,184,0.08)]">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazk4b2lxNnQ5d3J0OXNoN3E0NzN2cWxrOHV0c2h2eXowbnJjN2FjZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26AHONQ79FdWZhAI0/giphy.gif"
              alt="Animated youth collaboration moment"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0057b8]">Alliance Culture</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#08152f]">Global by Design</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">
                Y.O.U unites local youth action into one global movement through mentoring, policy exchange, and collaborative SDG programs.
              </p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#e9edf3] bg-[#111827] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4b400]">Selection Flow</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>1. Submit your application form</li>
              <li>2. Internal review by regional leadership</li>
              <li>3. Interview and onboarding confirmation</li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#34a853]" />
              Average review time: 5-7 business days
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
