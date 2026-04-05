import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, eventTitle, ticketType, name, email } = body

    if (!amount || !eventTitle || !ticketType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: 'usd',
      metadata: {
        eventTitle,
        ticketType,
        name: name || '',
        email: email || '',
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Create payment intent error:', error)
    return NextResponse.json({ error: 'Failed to create payment intent' }, { status: 500 })
  }
}
