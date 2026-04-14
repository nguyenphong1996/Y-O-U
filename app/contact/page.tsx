import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactMessageForm } from '@/components/forms/contact-message-form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Contact & FAQ | Y.O.U Alliance',
  description: 'Contact Youth Organization Union and review FAQs and core alliance policies.',
}

const FAQS = [
  {
    q: 'What is the main purpose of Y.O.U?',
    a: 'Y.O.U is a global alliance that connects youth organizations and scales SDG-aligned impact through collaboration and leadership development.',
  },
  {
    q: 'Who can apply for membership?',
    a: 'Registered youth organizations, student-led initiatives, and youth-focused NGOs are welcome to apply.',
  },
  {
    q: 'How do director role applications work?',
    a: 'Applicants submit a profile on the Join page, then undergo regional review and an interview with alliance leadership.',
  },
  {
    q: 'How quickly does Y.O.U respond to inquiries?',
    a: 'Most inquiries are answered within 1-2 business days. Application reviews usually take 5-7 business days.',
  },
  {
    q: 'Where can I find policy documents?',
    a: 'Policy summaries are published below: Terms, Privacy Policy, and Refund Policy.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_42%,#f8fafc_100%)] pb-20">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0057b8]">Contact & FAQ</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#08152f] md:text-5xl">
          Reach the Y.O.U Team and Access Core Policies
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[#dce6f6] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-extrabold text-[#08152f]">Contact Form</h2>
          <p className="mt-3 text-sm text-[#4a5d82]">Send us your questions regarding alliance membership, roles, partnerships, or events.</p>
          <div className="mt-6">
            <ContactMessageForm topic="Contact Page" />
          </div>
        </article>

        <article className="rounded-[2rem] border border-[#dce6f6] bg-[#f8fbff] p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-extrabold text-[#08152f]">Key FAQ</h2>
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`faq-${idx}`} className="rounded-xl border border-[#dce6f6] bg-white px-4">
                <AccordionTrigger className="text-left text-sm font-semibold text-[#0f2348] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#4a5d82]">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 space-y-3 rounded-2xl border border-[#dce6f6] bg-white p-5 text-sm text-[#435577]">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#0057b8]" /> contact@you-global.org</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0057b8]" /> +00 000 000 000 (placeholder)</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0057b8]" /> Global HQ Address (placeholder)</p>
          </div>
        </article>
      </section>

      <section id="policies" className="mx-auto max-w-7xl px-6 pt-14">
        <h2 className="text-3xl font-extrabold text-[#08152f]">Policies & Public Documents</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article id="terms" className="rounded-2xl border border-[#dce6f6] bg-white p-6">
            <h3 className="text-xl font-extrabold text-[#08152f]">Terms of Service</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">
              Defines use of the Y.O.U platform, eligibility, and responsibilities for members, applicants, and partners.
            </p>
          </article>
          <article id="privacy" className="rounded-2xl border border-[#dce6f6] bg-white p-6">
            <h3 className="text-xl font-extrabold text-[#08152f]">Privacy Policy</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">
              Explains how Y.O.U collects, stores, and uses personal data from applications, forms, and event registrations.
            </p>
          </article>
          <article id="refund-policy" className="rounded-2xl border border-[#dce6f6] bg-white p-6">
            <h3 className="text-xl font-extrabold text-[#08152f]">Refund Policy</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5d82]">
              Covers eligibility, timeline, and conditions for event ticket refunds and transfers.
            </p>
          </article>
        </div>

        <div className="mt-8">
          <Link
            href="/join?tab=organization"
            className="inline-flex rounded-full bg-[#0057b8] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#004a9b]"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  )
}
