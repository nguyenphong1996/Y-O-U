import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Y.O.U Alliance | Youth Organization Union Official Portal',
  description:
    'Official website of Youth Organization Union (Y.O.U), connecting youth organizations worldwide through leadership, collaboration, and SDG impact programs.',
  openGraph: {
    title: 'Y.O.U Alliance — All Youths Start with Y.O.U',
    description:
      'Official portal of the Youth Organization Union global alliance.',
    url: 'https://you-global.org',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/you-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#f8fbff] text-[#111827]">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
