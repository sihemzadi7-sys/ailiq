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
  description: 'Find answers to common questions about AI ToolsHub, AI tools, and how to use our directory.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is AI ToolsHub?',
        answer: 'AI ToolsHub is a comprehensive directory of AI tools designed to help you discover, compare, and choose the best AI solutions for your needs. We provide in-depth reviews, ratings, and comparisons of tools across various categories including writing, image generation, video creation, coding, and more.',
      },
      {
        question: 'How do you select which AI tools to feature?',
        answer: 'We carefully evaluate AI tools based on their functionality, user experience, pricing, reliability, and overall value. Our team tests each tool and gathers feedback from the AI community to ensure we only feature quality products that genuinely help users.',
      },
      {
        question: 'Are the reviews on AI ToolsHub unbiased?',
        answer: 'Yes, we strive to provide honest and unbiased reviews. While we may earn affiliate commissions from some tools, this never influences our ratings or recommendations. Our primary goal is to help you find the right tool for your needs.',
      },
      {
        question: 'How often is the directory updated?',
        answer: 'We continuously update our directory as new AI tools are released and existing tools receive updates. We also regularly revisit our reviews to ensure they reflect the current state of each product.',
      },
    ],
  },
  {
    category: 'Using the Directory',
    questions: [
      {
        question: 'How do I search for specific AI tools?',
        answer: 'You can use our search bar at the top of the AI Tools page to search by tool name or keyword. Additionally, you can filter tools by category (Writing, Image, Video, etc.) and price type (Free, Freemium, Paid) using the sidebar filters.',
      },
      {
        question: 'What do the different price categories mean?',
        answer: 'Free means the tool is completely free to use. Freemium indicates a free tier with paid upgrades available. Paid means you need to purchase a subscription or license to use the tool. Contact for pricing means you need to reach out to the company for custom pricing.',
      },
      {
        question: 'How are tool ratings calculated?',
        answer: 'Our ratings are based on multiple factors including ease of use, feature quality, value for money, customer support, and reliability. Each tool is rated on a 1-5 star scale, with ratings reflecting our overall assessment after thorough testing.',
      },
      {
        question: 'Can I compare multiple tools?',
        answer: 'Yes! You can select up to 6 tools by clicking the checkbox on each tool card, then use the comparison feature to see them side-by-side. This helps you evaluate which tool best fits your specific requirements.',
      },
    ],
  },
  {
    category: 'Affiliate & Business',
    questions: [
      {
        question: 'Does AI ToolsHub earn money from tool recommendations?',
        answer: 'Yes, we may earn affiliate commissions when you sign up for a tool through our links. This helps us maintain the website and continue providing free content. However, this never affects our honest reviews and ratings.',
      },
      {
        question: 'How can I submit my AI tool for review?',
        answer: 'If you have developed an AI tool and would like it to be featured on AI ToolsHub, please contact us through our Contact page. We review all submissions and will get back to you if your tool meets our quality standards.',
      },
      {
        question: 'Do you offer sponsored listings?',
        answer: 'We do offer sponsored placement opportunities. However, sponsored tools are always clearly labeled, and sponsorship does not affect our review ratings or content. Contact us for more information about advertising opportunities.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'Is AI ToolsHub free to use?',
        answer: 'Absolutely! AI ToolsHub is completely free to browse and use. You can explore our entire directory, read all reviews, and access our blog content without any cost.',
      },
      {
        question: 'Do I need an account to use AI ToolsHub?',
        answer: 'No account is required to browse the directory or read reviews. However, some future features like saving favorite tools or creating custom comparison lists may require an account.',
      },
      {
        question: 'What browsers are supported?',
        answer: 'AI ToolsHub works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.',
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
          Find answers to common questions about AI ToolsHub
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
          {"Can't find what you're looking for? Feel free to reach out to us."}
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
