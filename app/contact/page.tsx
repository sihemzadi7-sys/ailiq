import type { Metadata } from 'next';
import { Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AI ToolsHub. We are here to help with questions about AI tools, partnerships, or feedback.',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    value: 'hello@aitoolshub.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    value: 'Coming soon',
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We typically respond within',
    value: '24-48 hours',
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a question, feedback, or business inquiry? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Methods */}
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
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="tool-submission">Submit an AI Tool</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="advertising">Advertising</SelectItem>
                    <SelectItem value="bug">Report a Bug</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Submit Your AI Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Have you developed an AI tool that you&apos;d like featured on AI ToolsHub? 
                We&apos;re always looking for innovative tools to add to our directory.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>- Free submission for quality tools</li>
                <li>- Thorough review process</li>
                <li>- Detailed listing with pros/cons</li>
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
                We offer various ways to promote your AI tool to our engaged audience.
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
                Join our growing community of AI enthusiasts and professionals.
              </p>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">Discord</Button>
                <Button variant="outline" size="sm">Newsletter</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
