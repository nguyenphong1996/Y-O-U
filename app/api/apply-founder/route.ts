import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      founderName,
      email,
      phone,
      organizationName,
      yearFounded,
      memberCount,
      website,
      organizationDescription,
      mission,
    } = body

    if (!founderName || !email || !organizationName || !mission) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO founder_applications
        (founder_name, email, phone, organization_name, year_founded, member_count, website, organization_description, mission)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    const result = stmt.run(
      founderName,
      email,
      phone || null,
      organizationName,
      yearFounded ? parseInt(yearFounded) : null,
      memberCount ? parseInt(memberCount) : null,
      website || null,
      organizationDescription || null,
      mission,
    )

    return NextResponse.json({ success: true, id: result.lastInsertRowid })
  } catch (error) {
    console.error('Apply founder error:', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
