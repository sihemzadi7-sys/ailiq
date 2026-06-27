import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCard } from '@/components/blog/blog-card';
import { AdPlaceholder } from '@/components/ads/ad-placeholder';
import { getAllPosts, getFeaturedPosts, blogCategories } from '@/lib/data/blog';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog - AI Tools Reviews & Guides',
  description: 'In-depth reviews, comparisons, and tutorials about AI tools. Learn how to use ChatGPT, Midjourney, and other AI tools effectively.',
  openGraph: {
    title: 'Blog | AI ToolsHub',
    description: 'In-depth reviews, comparisons, and tutorials about AI tools.',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          AI Tools Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          In-depth reviews, comparisons, tutorials, and the latest AI news
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        <Link href="/blog">
          <Button variant="outline" size="sm">
            All Posts
          </Button>
        </Link>
        {blogCategories.map((category) => (
          <Link key={category} href={`/blog/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`}>
            <Button variant="ghost" size="sm">
              {category}
            </Button>
          </Link>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPosts[0] && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Featured</h2>
          <BlogCard post={featuredPosts[0]} featured />
        </div>
      )}

      {/* Ad */}
      <AdPlaceholder type="banner" className="mx-auto mb-12" />

      {/* All Posts Grid */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-foreground">All Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, index) => (
            <>
              <BlogCard key={post.slug} post={post} />
              {/* Insert ad every 6 posts */}
              {(index + 1) % 6 === 0 && index !== allPosts.length - 1 && (
                <div key={`ad-${index}`} className="sm:col-span-2 lg:col-span-3">
                  <AdPlaceholder type="in-article" className="mx-auto" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          Stay Updated with AI Trends
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Get the latest AI tool reviews and industry news delivered to your inbox.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground sm:w-64"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
