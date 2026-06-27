import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogCard } from '@/components/blog/blog-card';
import { AdPlaceholder } from '@/components/ads/ad-placeholder';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/data/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Person',
          name: post.author,
        },
        datePublished: post.publishedAt,
      }),
    },
  };
}

const categoryColors: Record<string, string> = {
  'Tool Comparisons': 'bg-blue-100 text-blue-800',
  'Top 10 Lists': 'bg-green-100 text-green-800',
  'Tutorials': 'bg-purple-100 text-purple-800',
  'News': 'bg-red-100 text-red-800',
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="line-clamp-1 text-foreground">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            {/* Back Link */}
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <Badge className={categoryColors[post.category] || 'bg-gray-100 text-gray-800'}>
                {post.category}
              </Badge>
              <h1 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </span>
              </div>
            </header>

            {/* Featured Image Placeholder */}
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">AI</span>
              </div>
            </div>

            {/* Ad */}
            <AdPlaceholder type="in-article" className="mb-8" />

            {/* Content */}
            <div className="prose prose-neutral max-w-none">
              <div 
                className="text-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/^#\s(.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
                    .replace(/^##\s(.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>')
                    .replace(/^###\s(.+)$/gm, '<h4 class="text-lg font-medium mt-4 mb-2 text-foreground">$1</h4>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^-\s(.+)$/gm, '<li class="ml-4">$1</li>')
                    .replace(/```([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
                    .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground leading-relaxed">')
                    .replace(/^/, '<p class="mb-4 text-muted-foreground leading-relaxed">')
                    .replace(/$/, '</p>')
                }}
              />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-foreground">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-8">
              <span className="text-sm font-medium text-foreground">Share this article:</span>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Ad */}
            <AdPlaceholder type="in-article" className="mt-8" />

            {/* Author Card */}
            <Card className="mt-8">
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    AI tools expert and technology writer. Passionate about helping people find the right tools for their workflow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-80">
            <div className="sticky top-24 space-y-6">
              {/* Ad */}
              <AdPlaceholder type="sidebar" />

              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">In This Article</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    {post.content
                      .match(/^##?\s(.+)$/gm)
                      ?.slice(0, 6)
                      .map((heading, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {heading.replace(/^##?\s/, '')}
                        </a>
                      ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <p className="line-clamp-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                          {relatedPost.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {relatedPost.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Newsletter */}
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-base">Subscribe to Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get the latest AI tool reviews and updates.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="mb-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        {/* More Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              You Might Also Like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
