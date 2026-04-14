import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Members & Projects', href: '/members' },
  { label: 'Join Us', href: '/join?tab=organization' },
  { label: 'Events', href: '/events' },
  { label: 'Contact & FAQ', href: '/contact' },
  { label: 'Terms', href: '/contact#terms' },
  { label: 'Privacy Policy', href: '/contact#privacy' },
  { label: 'Refund Policy', href: '/contact#refund-policy' },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#08152f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/you-icon.png" alt="Y.O.U logo" width={40} height={40} className="h-10 w-auto" unoptimized />
              <span className="text-2xl font-extrabold tracking-tight">Y.O.U</span>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75">
              Connecting Youth Organizations for Global Impact. Official information portal of the Youth Organization Union alliance.
            </p>

            <div className="mt-7 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#f4b400]" /> Phone: +00 000 000 000 (placeholder)</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#34a853]" /> Email: contact@you-global.org</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#db4437]" /> HQ Address: to be updated</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/75 transition hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/55">Quick Links</h2>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/55">
          © 2026 Youth Organization Union. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
