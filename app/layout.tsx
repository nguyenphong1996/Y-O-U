import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Y.O.U. - Youth Organization Union | Global Citizen Network',
  description: 'Connect youth organization founders with international events, educational programs, and the Global Citizen Passport. Build your leadership journey with Y.O.U.',
  generator: 'v0.app',
  openGraph: {
    title: 'Youth Organization Union - All Youths Start with Y.O.U.',
    description: 'A global network for youth organization founders connecting with events and transformative experiences.',
    url: 'https://you-global.org',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/you-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/you-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
