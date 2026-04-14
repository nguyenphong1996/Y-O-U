'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function RoleApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    continent: '',
    desiredRole: '',
    currentOrganization: '',
    leadershipExperience: '',
    motivation: '',
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
      const res = await fetch('/api/apply-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Submission failed. Please retry or email hello@you-global.org')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <CheckCircle className="h-16 w-16 text-green-600" />
        <h3 className="text-xl font-bold text-[#001736]">Role Application Submitted</h3>
        <p className="max-w-md text-sm text-[#44506a]">
          Thank you for applying. Our Global Board will review your profile and contact you within 7 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">
            Full Name <span className="text-red-600">*</span>
          </label>
          <Input required value={formData.fullName} onChange={set('fullName')} placeholder="Your full name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">
            Email <span className="text-red-600">*</span>
          </label>
          <Input required type="email" value={formData.email} onChange={set('email')} placeholder="you@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">Phone</label>
          <Input value={formData.phone} onChange={set('phone')} placeholder="+84 ..." />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">
            Desired Role <span className="text-red-600">*</span>
          </label>
          <Input
            required
            value={formData.desiredRole}
            onChange={set('desiredRole')}
            placeholder="Country Director / Continent Director"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">
            Country <span className="text-red-600">*</span>
          </label>
          <Input required value={formData.country} onChange={set('country')} placeholder="Vietnam" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#001736]">
            Continent <span className="text-red-600">*</span>
          </label>
          <Input required value={formData.continent} onChange={set('continent')} placeholder="Asia" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#001736]">Current Organization</label>
        <Input
          value={formData.currentOrganization}
          onChange={set('currentOrganization')}
          placeholder="Your NGO / Student Chapter"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#001736]">Leadership Experience</label>
        <Textarea
          rows={3}
          value={formData.leadershipExperience}
          onChange={set('leadershipExperience')}
          placeholder="Tell us your relevant leadership experience"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#001736]">
          Why do you want to represent Y.O.U? <span className="text-red-600">*</span>
        </label>
        <Textarea
          required
          rows={4}
          value={formData.motivation}
          onChange={set('motivation')}
          placeholder="Share your motivation and impact goals"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full bg-[#0057b8] text-white hover:bg-[#004a9b]">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Apply For Director Role'
        )}
      </Button>
    </form>
  )
}
