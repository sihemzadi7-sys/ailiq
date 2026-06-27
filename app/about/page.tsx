import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about ailiq, our editorial approach, how we review AI tools, and how we help users discover official tool websites.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        About ailiq
      </h1>

      <p className="mb-8 text-muted-foreground">
        Last updated: June 27, 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
          <p className="mt-4 text-muted-foreground">
            ailiq is an independent website dedicated to discovering, organizing, and explaining AI tools
            for creators, marketers, developers, students, teams, and curious professionals.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our goal is to help visitors quickly understand what a tool does, who it is for, and where
            to find the official website for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">What We Publish</h2>
          <p className="mt-4 text-muted-foreground">
            We publish AI tool listings, reviews, comparisons, and practical guides covering writing,
            image generation, video, audio, productivity, coding, and related categories.
          </p>
          <p className="mt-4 text-muted-foreground">
            We aim to keep our content clear, useful, and easy to scan so users can compare tools faster
            and make better-informed decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How We Select and Review Tools</h2>
          <p className="mt-4 text-muted-foreground">
            Our content is based on research, public product information, feature comparison, category
            analysis, pricing review, and direct evaluation when possible.
          </p>
          <p className="mt-4 text-muted-foreground">
            Because AI products evolve quickly, features, pricing, availability, and policies may change
            over time. We encourage users to verify important information directly on the official tool
            website before making any decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Official Links</h2>
          <p className="mt-4 text-muted-foreground">
            Whenever possible, we link directly to the official website of the tool or service being
            discussed. This helps users access the most accurate and up-to-date product information from
            the original source.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Transparency</h2>
          <p className="mt-4 text-muted-foreground">
            We aim to present information clearly and honestly. We do not guarantee that every page is
            always fully up to date, but we work to improve and refresh content when tools change.
          </p>
          <p className="mt-4 text-muted-foreground">
            You can learn more about how we handle data and site usage in our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            and review our{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            If you have a correction, suggestion, partnership inquiry, or general question, you can reach
            us through our{' '}
            <Link href="/contact" className="text-primary hover:underline">
              Contact
            </Link>{' '}
            page or by email at{' '}
            <a href="mailto:best4liker@gmail.com" className="text-primary hover:underline">
              best4liker@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
