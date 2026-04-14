import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, message, topic } = body

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO contact_messages
        (full_name, email, message, topic)
      VALUES (?, ?, ?, ?)
    `)

    const result = stmt.run(fullName, email, message, topic || null)
    return NextResponse.json({ success: true, id: result.lastInsertRowid })
  } catch (error) {
    console.error('Contact message error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
