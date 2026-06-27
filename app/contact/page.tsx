import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ailiq for questions, corrections, feedback, or partnership inquiries.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        Contact Us
      </h1>

      <p className="mb-8 text-muted-foreground">
        Last updated: June 27, 2026
      </p>

      <div className="space-y-8">
        <section className="prose prose-neutral max-w-none">
          <h2 className="text-xl font-semibold text-foreground">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            If you have a question, correction, feedback, business inquiry, or suggestion for a tool we
            should review, you can contact us directly by email.
          </p>
          <p className="mt-4 text-muted-foreground">
            We aim to keep ailiq useful, accurate, and easy to navigate, and we welcome helpful feedback
            from users and tool makers.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-foreground">Email</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                For general questions, corrections, partnerships, or support:
              </p>
              <a
                href="mailto:best4liker@gmail.com"
                className="mt-3 inline-block text-base font-medium text-primary hover:underline"
              >
                best4liker@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="prose prose-neutral max-w-none">
          <h2 className="text-xl font-semibold text-foreground">Before You Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If your question is about how we handle data, please review our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="mt-4 text-muted-foreground">
            If your question is about website rules, content usage, or general limitations, please read
            our{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-lg font-semibold text-foreground">Response Time</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We usually respond as soon as possible, but response times may vary depending on message
            volume.
          </p>
        </section>
      </div>
    </div>
  )
}
