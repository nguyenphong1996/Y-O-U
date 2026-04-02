'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [showEventForm, setShowEventForm] = useState(false)
  const [showPassportForm, setShowPassportForm] = useState(false)
  const [showApplyForm, setShowApplyForm] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur dark:bg-slate-900/95">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/you-icon.png"
                alt="Youth Organization Union"
                width={80}
                height={80}
                className="h-12 w-auto"
                priority
              />
              <span className="font-bold text-xl text-primary">Y.O.U.</span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="#events" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Events</a>
              <a href="#passport" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Passport</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  All Youths Start with <span className="text-primary">Y.O.U.</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  A Global Citizen movement connecting youth organization founders with international events and transformative educational experiences.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Discover Events
                </Button>
                <Button size="lg" variant="outline">
                  Join as Founder
                </Button>
              </div>
              <div className="text-sm text-foreground/60">
                <p className="font-semibold text-primary">GLOBAL CITIZEN EST. 2024</p>
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

      {/* About Section */}
      <section id="about" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Vision: A Global Hub
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Y.O.U. is building the world&apos;s premier network for youth leaders, connecting organizations and creating opportunities for global collaboration and impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {[
              {
                title: "CSE Global",
                description: "Leading the digital transformation in youth education with innovative platforms and programs."
              },
              {
                title: "Partner Organization 1",
                description: "Supporting sustainable development goals through youth empowerment and community engagement."
              },
              {
                title: "Partner Organization 2",
                description: "Promoting global citizenship and cross-cultural understanding among young leaders worldwide."
              }
            ].map((org, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{org.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{org.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="border-t border-border py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              International Events
            </h2>
            <p className="text-lg text-foreground/70">Connect with youth leaders from around the globe</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global Youth Summit 2024",
                location: "Singapore",
                date: "June 15-17, 2024"
              },
              {
                title: "African Leadership Conference",
                location: "Nairobi, Kenya",
                date: "July 20-22, 2024"
              },
              {
                title: "Asia-Pacific Youth Forum",
                location: "Bangkok, Thailand",
                date: "August 10-12, 2024"
              },
              {
                title: "European Youth Congress",
                location: "Berlin, Germany",
                date: "September 5-7, 2024"
              },
              {
                title: "Americas Youth Alliance",
                location: "Toronto, Canada",
                date: "October 15-17, 2024"
              },
              {
                title: "Middle East Youth Initiative",
                location: "Dubai, UAE",
                date: "November 8-10, 2024"
              }
            ].map((event, idx) => (
              <Card key={idx} className="border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{event.title}</CardTitle>
                  <CardDescription className="text-foreground/60 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-foreground/70">{event.date}</p>
                </CardContent>
                <div className="border-t border-border p-4">
                  <Dialog open={showEventForm} onOpenChange={setShowEventForm}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-foreground">
                        Register Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Event Registration</DialogTitle>
                        <DialogDescription>Fill in your details to register for {event.title}</DialogDescription>
                      </DialogHeader>
                      <EventRegistrationForm eventTitle={event.title} />
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Citizen Passport Section */}
      <section id="passport" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Global Citizen Passport
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  An innovative educational credential that recognizes global learning, cross-cultural competence, and youth leadership development.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Recognized globally by leading institutions</span>
                  </h3>
                  <p className="text-foreground/70 ml-8">Enhance your credentials with credentials valued worldwide</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Track your global learning journey</span>
                  </h3>
                  <p className="text-foreground/70 ml-8">Document achievements across continents and cultures</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Build social impact & economic value</span>
                  </h3>
                  <p className="text-foreground/70 ml-8">Unlock career opportunities and leadership roles globally</p>
                </div>
              </div>

              <Dialog open={showPassportForm} onOpenChange={setShowPassportForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Get Your Passport Today
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Global Citizen Passport Registration</DialogTitle>
                    <DialogDescription>Join thousands of youth leaders building a global future</DialogDescription>
                  </DialogHeader>
                  <PassportRegistrationForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="relative h-96 sm:h-[500px]">
              <Card className="h-full border-2 border-primary/30 flex flex-col items-center justify-between p-8">
                <CardContent className="text-center space-y-6 flex-grow flex flex-col items-center justify-center w-full">
                  <div className="text-6xl">🌍</div>
                  <p className="text-lg font-semibold text-foreground">Your Passport to Global Opportunities</p>
                  
                  <div className="w-full grid grid-cols-2 gap-4 pt-6">
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-primary">50K+</p>
                      <p className="text-xs text-foreground/70 mt-1">Users Worldwide</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-2xl font-bold text-accent">85+</p>
                      <p className="text-xs text-foreground/70 mt-1">Countries</p>
                    </div>
                  </div>

                  <div className="w-full pt-4">
                    <p className="text-xs text-foreground/60 mb-3 font-medium">Join youth leaders from around the world:</p>
                    <div className="flex justify-center items-center gap-2 flex-wrap">
                      <span className="text-2xl">🇻🇳</span>
                      <span className="text-2xl">🇲🇽</span>
                      <span className="text-2xl">🇳🇬</span>
                      <span className="text-2xl">🇮🇳</span>
                      <span className="text-2xl">🇧🇷</span>
                      <span className="text-2xl">🇵🇭</span>
                      <span className="text-2xl">🇰🇪</span>
                      <span className="text-2xl">🇹🇭</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-t border-border py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See Our Community in Action
            </h2>
            <p className="text-lg text-foreground/70">Real stories from youth leaders around the world</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "🌟", title: "Global Conferences" },
              { emoji: "🤝", title: "Community Building" },
              { emoji: "📚", title: "Learning Programs" },
              { emoji: "🚀", title: "Innovation Projects" },
              { emoji: "🌏", title: "Cultural Exchange" },
              { emoji: "💡", title: "Mentorship" },
              { emoji: "🎯", title: "Leadership Training" },
              { emoji: "✨", title: "Impact Stories" }
            ].map((item, idx) => (
              <Card key={idx} className="border-border overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center justify-center h-48 text-center space-y-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now (B2B) Section */}
      <section className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join Our Alliance
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Are you a youth organization founder or leader? Apply to become part of the Y.O.U. global network. We&apos;ll contact you to discuss partnership opportunities.
            </p>
          </div>

          <Dialog open={showApplyForm} onOpenChange={setShowApplyForm}>
            <DialogTrigger asChild>
              <div className="flex justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Apply Now
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Organization Founder Application</DialogTitle>
                <DialogDescription>Tell us about your organization and mission</DialogDescription>
              </DialogHeader>
              <ApplyNowForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section / Footer */}
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
                      <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                        +1 (234) 567-8900
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

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a></li>
                </ul>
                <ul className="space-y-2">
                  <li><a href="#passport" className="text-white/80 hover:text-white transition-colors">Passport</a></li>
                  <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 Youth Organization Union. All rights reserved. | Global Citizen EST. 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Event Registration Form Component
function EventRegistrationForm({ eventTitle }: { eventTitle: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Event registration:', { ...formData, event: eventTitle })
    alert(`Thank you for registering for ${eventTitle}! We'll send you confirmation details via email.`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <Input
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <Input
          required
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
        <Input
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
        <Input
          placeholder="Your organization name"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Register Now
      </Button>
    </form>
  )
}

// Passport Registration Form Component
function PassportRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Passport registration:', formData)
    alert('Thank you! We will send you details about the Global Citizen Passport program.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <Input
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <Input
          required
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Organization/School</label>
        <Input
          placeholder="Where are you from?"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Your Global Experience</label>
        <Textarea
          placeholder="Tell us about your international experiences and leadership interests..."
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Register for Passport
      </Button>
    </form>
  )
}

// Apply Now Form Component
function ApplyNowForm() {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    organizationName: '',
    organizationDescription: '',
    mission: '',
    yearFounded: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Founder application:', formData)
    alert('Thank you for your application! We will contact you within 5 business days to schedule an interview.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto pr-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Founder/Leader Name</label>
        <Input
          required
          placeholder="Your full name"
          value={formData.founderName}
          onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <Input
          required
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
        <Input
          required
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Organization Name</label>
        <Input
          required
          placeholder="Your organization name"
          value={formData.organizationName}
          onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Year Founded</label>
        <Input
          type="number"
          placeholder="2020"
          value={formData.yearFounded}
          onChange={(e) => setFormData({ ...formData, yearFounded: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Organization Description</label>
        <Textarea
          placeholder="Brief description of your organization..."
          value={formData.organizationDescription}
          onChange={(e) => setFormData({ ...formData, organizationDescription: e.target.value })}
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Your Mission & Vision</label>
        <Textarea
          required
          placeholder="What drives your organization? What impact do you want to create?"
          value={formData.mission}
          onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
          rows={3}
        />
      </div>
      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
        Submit Application
      </Button>
      <p className="text-xs text-foreground/60 text-center">No fees required. We&apos;ll contact you via email to schedule an interview.</p>
    </form>
  )
}
