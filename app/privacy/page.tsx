import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how ailiq collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        Privacy Policy
      </h1>

      <p className="mb-8 text-muted-foreground">
        Last updated: June 27, 2026
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
          <p className="mt-4 text-muted-foreground">
            ailiq (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
            your personal data. This Privacy Policy explains how we collect, use, disclose, and
            safeguard information when you visit ailiq.xyz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong>Personal information:</strong> We may collect information you provide directly,
              such as your name, email address, and message if you contact us.
            </li>
            <li>
              <strong>Usage data:</strong> We may automatically collect technical information such as IP
              address, browser type, device information, referring pages, and on-site activity.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> We may use cookies and similar tools to
              improve site functionality, analyze traffic, and support advertising or affiliate tracking.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Operate, maintain, and improve the website.</li>
            <li>Analyze traffic and user behavior.</li>
            <li>Respond to messages, questions, or support requests.</li>
            <li>Monitor site performance, reliability, and security.</li>
            <li>Support advertising, affiliate attribution, and content optimization where applicable.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
          <p className="mt-4 text-muted-foreground">
            We may use third-party services for analytics, advertising, hosting, and link tracking.
            These providers may collect information according to their own policies.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong>Analytics providers:</strong> We may use analytics tools to understand how visitors
              use the website and improve performance.
            </li>
            <li>
              <strong>Advertising partners:</strong> Third-party vendors, including Google, may use
              cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </li>
            <li>
              <strong>Affiliate partners:</strong> Some links on our website may be affiliate links, and
              purchases made through them may generate a commission for us.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-4 text-muted-foreground">
            Cookies may be used to remember preferences, measure traffic, improve the user experience,
            and support advertising or affiliate attribution. You can usually control cookies through
            your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
          <p className="mt-4 text-muted-foreground">
            We take reasonable measures to protect information, but no method of transmission over the
            internet or electronic storage is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
          <p className="mt-4 text-muted-foreground">
            Depending on your location, you may have rights related to access, correction, deletion,
            restriction, objection, or portability of your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy</h2>
          <p className="mt-4 text-muted-foreground">
            This website is not intended for children, and we do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
          <p className="mt-4 text-muted-foreground">
            We may update this Privacy Policy from time to time by posting a revised version on this page
            and updating the last-updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have questions about this Privacy Policy, contact us at{' '}
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
