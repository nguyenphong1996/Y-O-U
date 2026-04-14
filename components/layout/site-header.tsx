'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Members & Projects', href: '/members' },
  { label: 'Events', href: '/events' },
  { label: 'Contact & FAQ', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navWithState = useMemo(() => {
    return NAV.map((item) => {
      const isMembers = item.href === '/members' && (pathname === '/members' || pathname === '/projects')
      const isExact = pathname === item.href
      return { ...item, active: isMembers || isExact }
    })
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'border-b border-[#dce6f6] bg-white/96 shadow-[0_10px_30px_rgba(7,24,51,0.06)]' : 'bg-white/85'
        } backdrop-blur-xl`}
      >
        <div className="mx-auto grid h-[74px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/you-icon.png" alt="Y.O.U logo" width={38} height={38} className="h-9 w-auto" unoptimized priority />
            <span className="text-xl font-extrabold tracking-tight text-[#08152f]">Y.O.U</span>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
            {navWithState.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                  item.active
                    ? 'bg-[#08152f] text-white'
                    : 'text-[#2a3d64] hover:bg-[#eef4ff] hover:text-[#08152f]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/join?tab=organization"
              className="hidden rounded-full bg-[#db4437] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#bc3328] lg:inline-flex"
            >
              Join The Alliance
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#0f2348] transition hover:bg-[#eef4ff] lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="h-[74px]" />

      <div className={`fixed inset-0 z-40 transition ${mobileOpen ? 'visible' : 'invisible'} lg:hidden`}>
        <button
          aria-label="Close mobile menu backdrop"
          className={`absolute inset-0 bg-[#08152f]/50 backdrop-blur-sm transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        <aside className={`absolute right-0 top-0 h-full w-[300px] bg-[#0f1f3d] p-5 transition-transform ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-4">
            <span className="text-lg font-extrabold text-white">Y.O.U</span>
            <button
              aria-label="Close menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/80 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="space-y-1">
            {navWithState.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  item.active ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/join?tab=organization"
            className="mt-6 block rounded-xl bg-[#db4437] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Join The Alliance
          </Link>
        </aside>
      </div>
    </>
  )
}
