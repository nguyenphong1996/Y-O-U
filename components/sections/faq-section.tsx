import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Who can apply to join the Y.O.U. alliance?',
    answer:
      'Any registered youth organization, student-led initiative, or youth-focused NGO can apply. We welcome organizations from all countries and sectors — education, environment, social entrepreneurship, arts, sports, and more. The founding team should be 35 years old or younger.',
  },
  {
    question: 'Is there a membership fee to join Y.O.U.?',
    answer:
      'No. Joining the Y.O.U. alliance as a founding member organization is completely free. We believe barriers to entry undermine the spirit of global youth collaboration. Revenue from events and the Global Citizen Passport supports our operations.',
  },
  {
    question: 'What is the selection process for new member organizations?',
    answer:
      'After you submit your application, our team reviews it within 5 business days. If your organization fits our criteria, we schedule a 30-minute video call to learn more about your mission and how we can collaborate. Successful applicants are onboarded within 2 weeks.',
  },
  {
    question: 'What funding options are available for conference attendance?',
    answer:
      'We offer 4 ticket tiers: Summit Pass ($299, self-funded), Self-Funded All-Inclusive ($440 with accommodation), and two scholarship tracks — Fully Funded and Partially Funded (both at a $21.99 admin fee). Scholarship applications are reviewed based on organizational impact and geographic diversity.',
  },
  {
    question: 'When is the deadline to register for the Global Youth Summit 2026?',
    answer:
      'Early bird registration closes April 30, 2026. Standard registration is open until May 31, 2026. Scholarship (funded) applications must be submitted by April 15, 2026 to allow time for review. We strongly recommend applying early as spots are limited.',
  },
  {
    question: 'What are the logistics for the Global Youth Summit in Singapore?',
    answer:
      'The summit runs June 15-17, 2026 at a central Singapore venue (details sent upon registration). Singapore requires a visa for some nationalities — we provide a formal invitation letter upon payment. Self-Funded All-Inclusive ticket holders receive 3 nights accommodation and airport transfers.',
  },
  {
    question: 'How does the Global Citizen Passport work?',
    answer:
      'The Global Citizen Passport is a digital credential that tracks and verifies your international learning journey — events attended, trainings completed, and cross-cultural projects contributed to. It\'s recognized by Y.O.U. partner institutions globally. Member organizations can issue Passport stamps to their own participants.',
  },
  {
    question: 'Can I get a refund if I cannot attend after registering?',
    answer:
      'Summit Pass and Self-Funded tickets are refundable (minus a 10% processing fee) up to 30 days before the event. Within 30 days, tickets can be transferred to another person from your organization. Funded scholarship spots ($21.99 admin fee) are non-refundable but transferable.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, Amex) via Stripe, and PayPal. All transactions are processed securely. Prices are in USD. Your bank may charge a foreign transaction fee depending on your country.',
  },
  {
    question: 'How can I get more information or support?',
    answer:
      'Email us at hello@you-global.org — our team responds within 1 business day. You can also follow us on social media for updates. For urgent event-related queries, use the contact form on our website and mark it "Urgent."',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-white py-20 sm:py-32 dark:bg-slate-950/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about Y.O.U., our events, and the Global Citizen Passport.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-center text-foreground/60">
          Still have questions?{' '}
          <a href="mailto:hello@you-global.org" className="text-primary font-medium hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </section>
  )
}
