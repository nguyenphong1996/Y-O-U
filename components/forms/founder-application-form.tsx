'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Loader2 } from 'lucide-react'

export function FounderApplicationForm() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    organizationName: '',
    yearFounded: '',
    memberCount: '',
    website: '',
    organizationDescription: '',
    mission: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/apply-founder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us at hello@you-global.org')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-bold text-foreground">Application Submitted!</h3>
        <p className="text-foreground/70 max-w-sm">
          Thank you for applying. We&apos;ll review your application and contact you within 5 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Representative Name <span className="text-destructive">*</span>
          </label>
          <Input required placeholder="Your full name" value={formData.founderName} onChange={set('founderName')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Organization Name <span className="text-destructive">*</span>
          </label>
          <Input required placeholder="Organization name" value={formData.organizationName} onChange={set('organizationName')} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Email <span className="text-destructive">*</span>
          </label>
          <Input required type="email" placeholder="your@email.com" value={formData.email} onChange={set('email')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
          <Input placeholder="+1 (555) 000-0000" value={formData.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Year Founded</label>
          <Input type="number" placeholder="2020" min="1900" max={String(currentYear)} value={formData.yearFounded} onChange={set('yearFounded')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Current Members</label>
          <Input type="number" placeholder="500" min="0" value={formData.memberCount} onChange={set('memberCount')} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Website / Social Media</label>
        <Input placeholder="https://yourorg.org or @yourhandle" value={formData.website} onChange={set('website')} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Organization Description <span className="text-destructive">*</span>
        </label>
        <Textarea
          required
          placeholder="Brief description of your organization and what you do..."
          value={formData.organizationDescription}
          onChange={set('organizationDescription')}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Mission & Vision <span className="text-destructive">*</span>
        </label>
        <Textarea
          required
          placeholder="What drives your organization? What impact do you want to create?"
          value={formData.mission}
          onChange={set('mission')}
          rows={3}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full bg-[#0057b8] hover:bg-[#004a9b] text-white">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>
      <p className="text-xs text-foreground/60 text-center">
        No fees required. We&apos;ll contact you via email to schedule an interview.
      </p>
    </form>
  )
}
