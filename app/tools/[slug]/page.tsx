import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  ArrowLeft,
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ToolCard } from '@/components/tools/tool-card';
import { AdPlaceholder } from '@/components/ads/ad-placeholder';
import { getToolBySlug, getRelatedTools, getAllTools } from '@/lib/data/tools';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} Review - Is It Worth It?`,
    description: tool.shortDescription,
    openGraph: {
      title: `${tool.name} Review | AI ToolsHub`,
      description: tool.shortDescription,
      type: 'article',
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          applicationCategory: 'AI Tool',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: tool.rating,
          bestRating: 5,
        },
        author: {
          '@type': 'Organization',
          name: 'AI ToolsHub',
        },
      }),
    },
  };
}

const priceColors: Record<string, string> = {
  'Free': 'bg-green-100 text-green-800',
  'Freemium': 'bg-blue-100 text-blue-800',
  'Paid': 'bg-orange-100 text-orange-800',
  'Contact for pricing': 'bg-gray-100 text-gray-800',
};

const categoryColors: Record<string, string> = {
  'Writing': 'bg-purple-100 text-purple-800',
  'Image': 'bg-pink-100 text-pink-800',
  'Video': 'bg-red-100 text-red-800',
  'Code': 'bg-yellow-100 text-yellow-800',
  'Productivity': 'bg-green-100 text-green-800',
  'Audio': 'bg-indigo-100 text-indigo-800',
  '3D': 'bg-cyan-100 text-cyan-800',
  'Marketing': 'bg-orange-100 text-orange-800',
  'SEO': 'bg-teal-100 text-teal-800',
  'Research': 'bg-emerald-100 text-emerald-800',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : star - 0.5 <= rating
              ? 'fill-yellow-400/50 text-yellow-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
      <span className="ml-2 text-lg font-semibold text-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(slug);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tools" className="hover:text-foreground">AI Tools</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            {/* Back Link */}
            <Link
              href="/tools"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all tools
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={categoryColors[tool.category] || 'bg-gray-100 text-gray-800'}>
                  {tool.category}
                </Badge>
                <Badge className={priceColors[tool.price] || 'bg-gray-100 text-gray-800'}>
                  {tool.price}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                {tool.name} Review
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {tool.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <StarRating rating={tool.rating} />
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    Get {tool.name}
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Ad */}
            <AdPlaceholder type="in-article" className="mb-8" />

            {/* Review Content */}
            <article className="prose prose-neutral max-w-none">
              <div 
                className="text-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: tool.reviewContent
                    .replace(/^#\s(.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
                    .replace(/^##\s(.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>')
                    .replace(/^###\s(.+)$/gm, '<h4 class="text-lg font-medium mt-4 mb-2 text-foreground">$1</h4>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^-\s(.+)$/gm, '<li class="ml-4">$1</li>')
                    .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground leading-relaxed">')
                    .replace(/^/, '<p class="mb-4 text-muted-foreground leading-relaxed">')
                    .replace(/$/, '</p>')
                }}
              />
            </article>

            {/* Pros and Cons */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Check className="h-5 w-5" />
                    Pros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-green-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <X className="h-5 w-5" />
                    Cons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-red-700">
                        <X className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Table */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Pricing Plans
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {tool.pricingTiers.map((tier, index) => (
                  <Card 
                    key={index}
                    className={tier.recommended ? 'border-primary ring-2 ring-primary/20' : ''}
                  >
                    <CardHeader>
                      {tier.recommended && (
                        <Badge className="mb-2 w-fit bg-primary text-primary-foreground">
                          Recommended
                        </Badge>
                      )}
                      <CardTitle>{tier.name}</CardTitle>
                      <p className="text-2xl font-bold text-foreground">{tier.price}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ad */}
            <AdPlaceholder type="in-article" className="mt-12" />

            {/* FAQs */}
            {tool.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {tool.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Ready to try {tool.name}?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Get started today and see how it can transform your workflow.
              </p>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-6 inline-block"
              >
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  Visit {tool.name}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-80">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <Badge className={categoryColors[tool.category] || 'bg-gray-100 text-gray-800'}>
                      {tool.category}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pricing</span>
                    <Badge className={priceColors[tool.price] || 'bg-gray-100 text-gray-800'}>
                      {tool.price}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tool.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block"
                  >
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      Get {tool.name}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Ad */}
              <AdPlaceholder type="sidebar" />

              {/* Related Tools */}
              {relatedTools.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Alternatives</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedTools.slice(0, 3).map((relatedTool) => (
                      <Link
                        key={relatedTool.slug}
                        href={`/tools/${relatedTool.slug}`}
                        className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                      >
                        <div>
                          <div className="font-medium text-foreground">
                            {relatedTool.name}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {relatedTool.rating.toFixed(1)}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>

        {/* More Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              Similar Tools You Might Like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
