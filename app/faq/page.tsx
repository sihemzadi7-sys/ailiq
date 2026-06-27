import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about ailiq, AI tools, and how to use our directory.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is ailiq?',
        answer: 'ailiq is a website that helps users discover, browse, and compare AI tools across categories such as writing, image generation, video, audio, productivity, and coding.',
      },
      {
        question: 'How do you select which AI tools to feature?',
        answer: 'We include tools based on relevance, usefulness, category fit, visibility in the market, and their potential value for users looking for AI solutions.',
      },
      {
        question: 'Are the reviews on ailiq unbiased?',
        answer: 'We aim to present information clearly and fairly. Our goal is to help users understand tools better, compare options more easily, and visit official websites for the most accurate and up-to-date details.',
      },
      {
        question: 'How often is the directory updated?',
        answer: 'We update content regularly, but AI tools change quickly. Features, pricing, and availability may change over time, so users should always verify important details on the official website.',
      },
    ],
  },
  {
    category: 'Using the Directory',
    questions: [
      {
        question: 'How do I search for specific AI tools?',
        answer: 'You can browse categories, use search features if available, and explore tools by use case, category, or function depending on the page structure.',
      },
      {
        question: 'What do the different price categories mean?',
        answer: 'Free means a tool can be used at no cost. Freemium means a free version or limited tier is available with paid upgrades. Paid means a subscription or one-time payment is required. Some tools may also use custom or contact-based pricing.',
      },
      {
        question: 'How are tool ratings calculated?',
        answer: 'If ratings are shown on a page, they are intended to reflect an overall editorial assessment based on the information available at the time of publication or update.',
      },
      {
        question: 'Can I compare multiple tools?',
        answer: 'If the comparison feature is available on the site, you can use it to review multiple tools side by side and understand differences more quickly.',
      },
    ],
  },
  {
    category: 'Contact and Submissions',
    questions: [
      {
        question: 'Does ailiq earn money from tool recommendations?',
        answer: 'At this time, ailiq links to official tool websites directly and does not currently rely on affiliate links.',
      },
      {
        question: 'How can I submit my AI tool for review?',
        answer: 'If you would like to suggest a tool, request an update, or report outdated information, please contact us through the Contact page.',
      },
      {
        question: 'Do you offer sponsored listings?',
        answer: 'Any future paid placements or sponsored content would need to be clearly disclosed. Users should rely on the information shown on the page and official product websites for final decisions.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'Is ailiq free to use?',
        answer: 'Yes. Browsing the directory, reading content, and exploring tool pages on ailiq is free.',
      },
      {
        question: 'Do I need an account to use ailiq?',
        answer: 'No account is required to browse the directory or read content unless a future feature specifically requires one.',
      },
      {
        question: 'What browsers are supported?',
        answer: 'ailiq is designed to work on modern browsers such as Chrome, Firefox, Safari, and Edge.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to common questions about ailiq
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              {section.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {section.questions.map((faq, index) => (
                <AccordionItem key={index} value={`${section.category}-${index}`}>
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

      {/* Contact CTA */}
      <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          Still have questions?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Can't find what you're looking for? Please contact us through the Contact page.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
