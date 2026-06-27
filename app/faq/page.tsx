import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description:
    'Find answers to common questions about ailiq, AI tools, and how to use our directory.',
}

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is ailiq?',
        answer:
          'ailiq is a website that helps users discover, browse, and compare AI tools across categories such as writing, image generation, video, audio, productivity, and coding.',
      },
      {
        question: 'What kind of content do you publish?',
        answer:
          'We publish tool listings, comparisons, reviews, and practical guides designed to help users understand AI tools more clearly and find official product websites faster.',
      },
      {
        question: 'Do you create the AI tools listed on the website?',
        answer:
          'No. ailiq does not own or operate the third-party AI tools listed on the site unless clearly stated otherwise. We organize and present information about external tools.',
      },
      {
        question: 'Is ailiq free to use?',
        answer:
          'Yes. Browsing the directory, reading content, and exploring tool pages on ailiq is free.',
      },
    ],
  },
  {
    category: 'Tools and Listings',
    questions: [
      {
        question: 'How do you choose which AI tools to include?',
        answer:
          'Tools are selected based on relevance, category fit, usefulness, visibility in the market, and whether they are likely to be helpful for users looking for AI solutions.',
      },
      {
        question: 'Do you always test every tool directly?',
        answer:
          'Not always. Some content is based on research, public product information, feature comparisons, pricing pages, documentation, and official websites. Users should verify important details directly from the provider.',
      },
      {
        question: 'Are tool details always up to date?',
        answer:
          'We try to keep listings accurate, but AI tools change quickly. Features, pricing, limits, and availability may change over time, so it is always best to confirm key details on the official website.',
      },
      {
        question: 'Do you link to official websites?',
        answer:
          'Yes. Whenever possible, we link directly to the official website of the tool so users can access the original source for the latest information.',
      },
    ],
  },
  {
    category: 'Using the Website',
    questions: [
      {
        question: 'How can I find a specific type of AI tool?',
        answer:
          'You can browse categories, use search features if available, and compare tools by use case, category, or function depending on the page structure.',
      },
      {
        question: 'Can I compare multiple tools?',
        answer:
          'If the comparison feature is available on the site, you can use it to review multiple tools side by side and understand differences more quickly.',
      },
      {
        question: 'Do I need an account to use ailiq?',
        answer:
          'No account is required to browse the website and read content unless a future feature specifically requires one.',
      },
      {
        question: 'Which browsers are supported?',
        answer:
          'ailiq is designed to work on modern browsers such as Chrome, Firefox, Safari, and Edge.',
      },
    ],
  },
  {
    category: 'Contact and Policies',
    questions: [
      {
        question: 'How can I contact ailiq?',
        answer:
          'You can visit the Contact page or email best4liker@gmail.com for questions, corrections, or general feedback.',
      },
      {
        question: 'Do you use affiliate links?',
        answer:
          'At this time, ailiq links to official tool websites directly and does not currently rely on affiliate links.',
      },
      {
        question: 'Where can I learn about privacy and website terms?',
        answer:
          'You can read the Privacy Policy and Terms of Use pages linked in the footer for more information about data handling and website usage.',
      },
      {
        question: 'Can I request that a tool be added or updated?',
        answer:
          'Yes. You can contact us if you want to suggest a tool, report outdated information, or request a correction.',
      },
    ],
  },
] as const

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to common questions about ailiq
        </p>
      </div>

      <div className="space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {section.category}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {section.questions.map((faq, index) => (
                <AccordionItem
                  key={`${section.category}-${index}`}
                  value={`${section.category}-${index}`}
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          Still have questions?
        </h2>
        <p className="mt-2 text-muted-foreground">
          If you need help, want to report a correction, or have a suggestion, contact us directly.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
