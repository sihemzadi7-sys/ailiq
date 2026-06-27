import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about AILIQ, our editorial approach, how we review AI tools, and how we keep our recommendations transparent.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        About AILIQ
      </h1>

      <p className="mb-8 text-muted-foreground">
        Last updated: June 27, 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
          <p className="mt-4 text-muted-foreground">
            AILIQ is an independent website focused on discovering, comparing, and explaining AI tools
            for creators, marketers, developers, teams, and curious professionals.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our goal is to help visitors quickly understand what a tool does, who it is best for,
            what its strengths and limitations are, and whether it is worth trying.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">What We Publish</h2>
          <p className="mt-4 text-muted-foreground">
            We publish curated tool listings, reviews, comparisons, and practical guides related to AI
            writing, image generation, video creation, audio, productivity, coding, and automation.
          </p>
          <p className="mt-4 text-muted-foreground">
            We aim to make our content clear, useful, and easy to scan so visitors can make faster and
            more informed decisions.
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
            Because AI products change quickly, features, pricing, availability, and policies may be
            updated by providers without notice. We encourage users to verify important details on the
            official product website before making a purchase decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Editorial Principles</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>We aim for accuracy, clarity, and usefulness.</li>
            <li>We try to present strengths, weaknesses, and best-fit use cases fairly.</li>
            <li>We update content when tools change significantly or when information becomes outdated.</li>
            <li>We do not guarantee that every listing, feature, or price is always current.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Affiliate Transparency</h2>
          <p className="mt-4 text-muted-foreground">
            Some pages on AILIQ may contain affiliate links. This means we may earn a commission if you
            click a link and make a purchase, at no extra cost to you.
          </p>
          <p className="mt-4 text-muted-foreground">
            Affiliate relationships may influence which products we choose to feature, but we aim to
            keep our content useful and transparent. You can read more on our{' '}
            <Link href="/affiliate-disclosure" className="text-primary hover:underline">
              Affiliate Disclosure
            </Link>{' '}
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Privacy and Data</h2>
          <p className="mt-4 text-muted-foreground">
            Like most modern websites, AILIQ may use analytics, cookies, and third-party services to
            understand usage, improve performance, and support site functionality.
          </p>
          <p className="mt-4 text-muted-foreground">
            For more details, please review our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            If you have a question, correction, partnership inquiry, or feedback about a listing, you
            can contact us through our{' '}
            <Link href="/contact" className="text-primary hover:underline">
              Contact
            </Link>{' '}
            page or email us at{' '}
            <a href="mailto:hello@ailiq.xyz" className="text-primary hover:underline">
              hello@ailiq.xyz
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
