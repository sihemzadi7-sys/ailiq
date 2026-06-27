import type { Metadata } from 'next'
import { Mail, MessageSquare, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | AILIQ',
  description: 'Get in touch with AILIQ for questions, partnerships, feedback, or tool submissions.',
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    value: 'best4liker@gmail.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat support',
    value: 'Not available yet',
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We typically respond within',
    value: '24-48 hours',
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a question, feedback, or business inquiry? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        {contactMethods.map((method) => (
          <Card key={method.title}>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{method.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
              <p className="mt-2 font-medium text-foreground">{method.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Submit Your AI Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Have you developed an AI tool that you&apos;d like featured on AILIQ?
                We&apos;re always looking for innovative tools to add to our directory.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>- Free submission for quality tools</li>
                <li>- Thorough review process</li>
                <li>- Detailed listing with pros and cons</li>
                <li>- Optional sponsored placement available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Interested in advertising, sponsorship, or partnership opportunities?
                We offer multiple ways to promote your AI tool to our audience.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>- Sponsored listings</li>
                <li>- Display advertising</li>
                <li>- Content partnerships</li>
                <li>- Affiliate programs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Follow AILIQ and stay updated with the latest AI tools and reviews.
              </p>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" size="sm">X</Button>
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Newsletter</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
