import type { Metadata } from 'next'
import { Suspense } from 'react'
import { JoinPageClient } from '@/components/pages/join-page-client'

export const metadata: Metadata = {
  title: 'Join Us | Y.O.U Alliance',
  description:
    'Apply to join the Youth Organization Union as a member organization or youth leader representative.',
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="px-6 py-20 text-center text-sm text-[#4a5d82]">Loading join form...</div>}>
      <JoinPageClient />
    </Suspense>
  )
}
