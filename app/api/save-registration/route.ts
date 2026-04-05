import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'

function generateBookingCode(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(Math.random() * 9000) + 1000
  return `YOU-${year}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      organization,
      eventTitle,
      ticketType,
      amount,
      paymentMethod,
      paymentId,
    } = body

    if (!name || !email || !eventTitle || !ticketType || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let bookingCode = generateBookingCode()
    // Ensure unique booking code
    let attempts = 0
    while (attempts < 5) {
      const existing = db.prepare('SELECT id FROM event_registrations WHERE booking_code = ?').get(bookingCode)
      if (!existing) break
      bookingCode = generateBookingCode()
      attempts++
    }

    const stmt = db.prepare(`
      INSERT INTO event_registrations
        (name, email, phone, organization, event_title, ticket_type, amount, payment_method, payment_id, booking_code, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'paid')
    `)

    stmt.run(
      name,
      email,
      phone || null,
      organization || null,
      eventTitle,
      ticketType,
      parseFloat(amount),
      paymentMethod || null,
      paymentId || null,
      bookingCode,
    )

    return NextResponse.json({ success: true, bookingCode })
  } catch (error) {
    console.error('Save registration error:', error)
    return NextResponse.json({ error: 'Failed to save registration' }, { status: 500 })
  }
}
