'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ContactMessageFormProps = {
  compact?: boolean
  topic?: string
}

export function ContactMessageForm({ compact = false, topic = 'General' }: ContactMessageFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (field: 'fullName' | 'email' | 'message') =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, topic }),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
      setFormData({ fullName: '', email: '', message: '' })
    } catch {
      setError('Could not send message right now. Please email contact@you-global.org')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-emerald-600" />
        <p className="font-semibold text-emerald-900">Message sent successfully.</p>
        <p className="mt-1 text-sm text-emerald-800">Our team usually responds within 1-2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#001736]">
          Message <span className="text-red-600">*</span>
        </label>
        <Textarea
          required
          rows={compact ? 4 : 6}
          value={formData.message}
          onChange={set('message')}
          placeholder="How can we support you?"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full bg-[#0057b8] text-white hover:bg-[#004a9b]">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
