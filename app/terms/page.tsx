import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the terms and conditions for using ailiq and its content.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        Terms of Use
      </h1>

      <p className="mb-8 text-muted-foreground">
        Last updated: June 27, 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Agreement to Terms</h2>
          <p className="mt-4 text-muted-foreground">
            By accessing or using ailiq, you agree to be bound by these Terms of Use. If you do not
            agree with any part of these terms, please do not use the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Content and Intellectual Property</h2>
          <p className="mt-4 text-muted-foreground">
            The content on ailiq, including text, branding, graphics, and site materials, is protected
            by applicable intellectual property laws. You may not reproduce, republish, or distribute
            our content without permission, except where allowed by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Use of the Website</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>You agree not to use the site for unlawful purposes.</li>
            <li>You agree not to interfere with the site, its infrastructure, or its security.</li>
            <li>You agree not to attempt unauthorized access to restricted areas.</li>
            <li>You agree not to use automated methods to scrape or misuse the site without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Reviews and Information</h2>
          <p className="mt-4 text-muted-foreground">
            Reviews, comparisons, and tool information published on ailiq are provided for general
            informational purposes. We try to keep content useful and accurate, but we do not guarantee
            that all information is complete, current, or error-free.
          </p>
          <p className="mt-4 text-muted-foreground">
            Tool features, pricing, and availability may change at any time. You should verify important
            details directly with the official provider before making a purchase or business decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Affiliate Disclosure</h2>
          <p className="mt-4 text-muted-foreground">
            Some links on ailiq may be affiliate links. If you click an affiliate link and make a
            purchase, we may earn a commission at no additional cost to you.
          </p>
          <p className="mt-4 text-muted-foreground">
            This may influence how some products are featured on the website. However, we aim to keep
            our content useful, transparent, and honest.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Third-Party Websites</h2>
          <p className="mt-4 text-muted-foreground">
            Our website may link to third-party websites or services. We do not control and are not
            responsible for their content, terms, privacy practices, or offers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
          <p className="mt-4 text-muted-foreground">
            The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without
            warranties of any kind, express or implied.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p className="mt-4 text-muted-foreground">
            To the maximum extent permitted by law, ailiq will not be liable for any indirect,
            incidental, consequential, or special damages arising from the use of, or inability to use,
            the website or its content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes to These Terms</h2>
          <p className="mt-4 text-muted-foreground">
            We may update these Terms of Use from time to time by posting the revised version on this
            page and updating the last-updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            If you have questions about these Terms of Use, contact us at{' '}
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
