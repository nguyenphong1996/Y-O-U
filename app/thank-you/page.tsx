'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Home, Share2, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const bookingCode = searchParams.get('booking') || 'YOU-2026-XXXX'
  const event = searchParams.get('event') || 'Global Youth Summit 2026'
  const ticket = searchParams.get('ticket') || 'Summit Pass'
  const email = searchParams.get('email') || 'your email'

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I\'m attending a Y.O.U. event!',
        text: `I just registered for ${event} with Y.O.U. — Youth Organization Union. Join me! #YOUTHS #GlobalCitizen`,
        url: window.location.origin,
      })
    } else {
      const text = encodeURIComponent(`I just registered for ${event} with Y.O.U. — Youth Organization Union! #YOUTHS #GlobalCitizen`)
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:to-slate-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-white/95 backdrop-blur dark:bg-slate-900/95 px-4 py-4">
        <div className="mx-auto max-w-7xl flex items-center gap-3">
          <Image src="/you-icon.png" alt="Y.O.U." width={40} height={40} className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary">Y.O.U.</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg text-center space-y-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-6 dark:bg-green-900/30">
              <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Registration Successful!</h1>
            <p className="text-foreground/70">Welcome to the Y.O.U. global community.</p>
          </div>

          <Card className="border-primary/20 bg-white dark:bg-slate-900">
            <CardContent className="pt-6 space-y-4">
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                <p className="text-xs text-foreground/60 uppercase tracking-wider font-medium mb-1">Your Booking Code</p>
                <p className="text-2xl font-bold text-primary font-mono">{bookingCode}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-left">
                <div className="space-y-1">
                  <p className="text-foreground/60 text-xs uppercase tracking-wider">Event</p>
                  <p className="font-medium text-foreground">{event}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground/60 text-xs uppercase tracking-wider">Ticket Type</p>
                  <p className="font-medium text-foreground">{ticket}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 flex items-start gap-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <p>A confirmation email has been sent to <span className="font-medium text-foreground">{email}</span> with full event details.</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button onClick={handleShare} className="gap-2 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
              <Share2 className="w-4 h-4" />
              Share on Social Media
            </Button>
          </div>

          <p className="text-xs text-foreground/50">
            Questions? Contact us at{' '}
            <a href="mailto:hello@you-global.org" className="text-primary hover:underline">
              hello@you-global.org
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
      <ThankYouContent />
    </Suspense>
  )
}
