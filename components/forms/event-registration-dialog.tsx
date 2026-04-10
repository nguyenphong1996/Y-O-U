'use client'

import { useState, useCallback, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, CreditCard, Loader2, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { TICKET_TYPES } from '@/components/sections/pricing-section'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// ─── Types ──────────────────────────────────────────────────────────────────

interface FormData {
  name: string
  email: string
  phone: string
  organization: string
  ticketType: string
}

interface EventRegistrationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  eventTitle: string
  eventDate?: string
  preselectedTicket?: string
  initialFormData?: {
    name: string
    email: string
    phone: string
    organization: string
    ticketType: string
  }
}

// ─── Main Dialog ─────────────────────────────────────────────────────────────

export function EventRegistrationDialog({
  open,
  onOpenChange,
  eventTitle,
  eventDate,
  preselectedTicket,
  initialFormData,
}: EventRegistrationDialogProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: initialFormData?.name || '',
    email: initialFormData?.email || '',
    phone: initialFormData?.phone || '',
    organization: initialFormData?.organization || '',
    ticketType: preselectedTicket || initialFormData?.ticketType || '',
  })
  const [clientSecret, setClientSecret] = useState('')
  const [bookingCode, setBookingCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const selectedTicket = TICKET_TYPES.find((t) => t.id === formData.ticketType)

  useEffect(() => {
    if (!open) return

    setFormData({
      name: initialFormData?.name || '',
      email: initialFormData?.email || '',
      phone: initialFormData?.phone || '',
      organization: initialFormData?.organization || '',
      ticketType: preselectedTicket || initialFormData?.ticketType || '',
    })
  }, [open, preselectedTicket, initialFormData])

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.ticketType) {
      setError('Please select a ticket type')
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedTicket!.price,
          eventTitle,
          ticketType: selectedTicket!.label,
          name: formData.name,
          email: formData.email,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setClientSecret(data.clientSecret)
      setStep(2)
    } catch (err) {
      setError('Could not initiate payment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePaymentSuccess = useCallback(
    async (paymentMethod: string, paymentId: string) => {
      try {
        const res = await fetch('/api/save-registration', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            eventTitle,
            ticketType: selectedTicket!.label,
            amount: selectedTicket!.price,
            paymentMethod,
            paymentId,
          }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error)
        setBookingCode(data.bookingCode)
        setStep(3)
      } catch {
        setError('Payment succeeded but registration save failed. Contact hello@you-global.org')
      }
    },
    [formData, eventTitle, selectedTicket],
  )

  const handleClose = (open: boolean) => {
    if (!open) {
      // Reset on close
      setTimeout(() => {
        setStep(1)
        setClientSecret('')
        setBookingCode('')
        setError('')
        setLoading(false)
      }, 300)
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  s < step
                    ? 'bg-green-500 text-white'
                    : s === step
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground/40'
                }`}
              >
                {s < step ? '✓' : s}
              </div>
              {s < 3 && <div className={`h-0.5 w-8 ${s < step ? 'bg-green-500' : 'bg-muted'}`} />}
            </div>
          ))}
          <span className="ml-2 text-xs text-foreground/60">
            {step === 1 ? 'Your Info' : step === 2 ? 'Payment' : 'Confirmed'}
          </span>
        </div>

        {/* Step 1 — Personal info */}
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Register for {eventTitle}</DialogTitle>
              <DialogDescription>
                {eventDate ? `${eventDate} — ` : ''}Fill in your details below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleStep1Submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Organization</label>
                  <Input
                    placeholder="Your org"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Ticket Type <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.ticketType}
                  onValueChange={(v) => setFormData({ ...formData, ticketType: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a ticket type" />
                  </SelectTrigger>
                  <SelectContent>
                    {TICKET_TYPES.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.label} — ${t.price}
                        {t.price === 21.99 ? ' (admin fee)' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white">
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                ) : (
                  <><ChevronRight className="mr-2 h-4 w-4" />Continue to Payment</>
                )}
              </Button>
            </form>
          </>
        )}

        {/* Step 2 — Payment */}
        {step === 2 && clientSecret && selectedTicket && (
          <>
            <DialogHeader>
              <DialogTitle>Payment</DialogTitle>
              <DialogDescription>Complete your registration for {eventTitle}</DialogDescription>
            </DialogHeader>

            {/* Order summary */}
            <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2 text-sm">
              <div className="flex justify-between text-foreground/70">
                <span>Event</span>
                <span className="font-medium text-foreground">{eventTitle}</span>
              </div>
              {eventDate && (
                <div className="flex justify-between text-foreground/70">
                  <span>Date</span>
                  <span>{eventDate}</span>
                </div>
              )}
              <div className="flex justify-between text-foreground/70">
                <span>Ticket</span>
                <span>{selectedTicket.label}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-bold text-foreground">
                <span>Total</span>
                <span>${selectedTicket.price}</span>
              </div>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            {/* Stripe card payment */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CreditCard className="h-4 w-4" />
                Pay with Card
              </div>
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: { theme: 'stripe' },
                }}
              >
                <StripePaymentForm
                  onSuccess={handlePaymentSuccess}
                  onError={setError}
                  amount={selectedTicket.price}
                />
              </Elements>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-border" />
              <span className="text-xs text-foreground/50">or pay with</span>
              <div className="flex-1 border-t border-border" />
            </div>

            {/* PayPal */}
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                currency: 'USD',
              }}
            >
              <PayPalButtons
                style={{ layout: 'horizontal', height: 44 }}
                createOrder={(_, actions) =>
                  actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'USD',
                          value: selectedTicket.price.toFixed(2),
                        },
                        description: `${eventTitle} — ${selectedTicket.label}`,
                      },
                    ],
                  })
                }
                onApprove={async (data, actions) => {
                  const order = await actions.order!.capture()
                  await handlePaymentSuccess('paypal', order.id!)
                }}
                onError={() => setError('PayPal payment failed. Please try again or use a card.')}
              />
            </PayPalScriptProvider>

            <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="w-full text-foreground/60">
              ← Back to details
            </Button>
          </>
        )}

        {/* Step 3 — Confirmation */}
        {step === 3 && (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">You&apos;re registered!</h3>
              <p className="text-foreground/70 text-sm mt-1">Check your email for confirmation details.</p>
            </div>
            <div className="rounded-lg bg-primary/5 border border-primary/20 px-6 py-3 w-full">
              <p className="text-xs text-foreground/60 uppercase tracking-wider mb-1">Booking Code</p>
              <p className="text-xl font-bold text-primary font-mono">{bookingCode}</p>
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                handleClose(false)
                window.location.href = `/thank-you?booking=${bookingCode}&event=${encodeURIComponent(eventTitle)}&ticket=${encodeURIComponent(selectedTicket?.label || '')}&email=${encodeURIComponent(formData.email)}`
              }}
            >
              View Full Confirmation
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// ─── Stripe Payment Sub-form ─────────────────────────────────────────────────

function StripePaymentForm({
  onSuccess,
  onError,
  amount,
}: {
  onSuccess: (method: string, id: string) => Promise<void>
  onError: (msg: string) => void
  amount: number
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
      redirect: 'if_required',
    })

    if (error) {
      onError(error.message || 'Payment failed')
      setLoading(false)
    } else if (paymentIntent?.status === 'succeeded') {
      await onSuccess('stripe', paymentIntent.id)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        {loading ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
        ) : (
          `Pay $${amount}`
        )}
      </Button>
    </form>
  )
}
