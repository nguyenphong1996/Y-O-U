import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      country,
      continent,
      desiredRole,
      currentOrganization,
      leadershipExperience,
      motivation,
    } = body

    if (!fullName || !email || !country || !continent || !desiredRole || !motivation) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO role_applications
        (full_name, email, phone, country, continent, desired_role, current_organization, leadership_experience, motivation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    const result = stmt.run(
      fullName,
      email,
      phone || null,
      country,
      continent,
      desiredRole,
      currentOrganization || null,
      leadershipExperience || null,
      motivation,
    )

    return NextResponse.json({ success: true, id: result.lastInsertRowid })
  } catch (error) {
    console.error('Apply role error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
