import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about ailiq, our editorial approach, how we review AI tools, and how we keep our recommendations transparent.',
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
            ailiq is an independent website focused on discovering, comparing, and explaining AI tools
            for creators, marketers, developers, teams, and curious professionals.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our goal is to help visitors understand what a tool does, who it is best for,
            what its strengths and limitations are, and whether it is worth trying.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">What We Publish</h2>
          <p className="mt-4 text-muted-foreground">
            We publish curated tool listings, reviews, comparisons, and practical guides related to AI
            writing, image generation, video creation, audio, productivity, coding, and automation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How We Review Tools</h2>
          <p className="mt-4 text-muted-foreground">
            Our reviews and recommendations are based on research, hands-on evaluation when possible,
            publicly available product information, feature analysis, pricing review, and comparison
            against similar tools in the market.
          </p>
          <p className="mt-4 text-muted-foreground">
            Because AI products change quickly, features, pricing, and availability may change without
            notice. We encourage users to verify important details on official provider websites before
            making a purchase decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Affiliate Transparency</h2>
          <p className="mt-4 text-muted-foreground">
            Some pages on ailiq may contain affiliate links. This means we may earn a commission if you
            click a link and make a purchase, at no extra cost to you.
          </p>
          <p className="mt-4 text-muted-foreground">
            We aim to keep our content useful and transparent. You can read more on our{' '}
            <Link href="/affiliate-disclosure" className="text-primary hover:underline">
              Affiliate Disclosure
            </Link>{' '}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Privacy and Contact</h2>
          <p className="mt-4 text-muted-foreground">
            Like most modern websites, ailiq may use analytics, cookies, and third-party services to
            understand usage, improve performance, and support site functionality.
          </p>
          <p className="mt-4 text-muted-foreground">
            Read our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            or contact us at{' '}
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
