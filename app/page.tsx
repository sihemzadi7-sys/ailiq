import Link from 'next/link';
import { ArrowRight, Search, Sparkles, TrendingUp, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToolCard } from '@/components/tools/tool-card';
import { BlogCard } from '@/components/blog/blog-card';
import { AdPlaceholder } from '@/components/ads/ad-placeholder';
import { getFeaturedTools, getAllTools, categories } from '@/lib/data/tools';
import { getFeaturedPosts, getAllPosts } from '@/lib/data/blog';

export default function HomePage() {
  const featuredTools = getFeaturedTools().slice(0, 4);
  const recentTools = getAllTools().slice(0, 8);
  const featuredPosts = getFeaturedPosts().slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Discover 500+ AI Tools
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find the Perfect{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Tool
              </span>{' '}
              for Your Needs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
              Comprehensive reviews, comparisons, and guides for the best AI tools in writing, 
              image generation, video creation, coding, and more.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/tools">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <Search className="h-5 w-5" />
                  Browse All Tools
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="gap-2">
                  Read Reviews
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { label: 'AI Tools', value: '500+', icon: Zap },
              { label: 'Reviews', value: '200+', icon: Star },
              { label: 'Categories', value: '10', icon: Search },
              { label: 'Monthly Users', value: '50K+', icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground lg:text-3xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="border-y border-border bg-muted/30 py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AdPlaceholder type="banner" className="mx-auto" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find AI tools organized by their primary use case
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/tools?category=${encodeURIComponent(category)}`}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Featured Tools
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Our top picks for AI tools that deliver exceptional value
              </p>
            </div>
            <Link href="/tools" className="hidden sm:block">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools">
              <Button variant="outline" className="gap-2">
                View All Tools
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Tools Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Recently Added
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                The latest AI tools added to our directory
              </p>
            </div>
            <Link href="/tools" className="hidden sm:block">
              <Button variant="outline" className="gap-2">
                Browse Directory
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recentTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <section className="border-y border-border bg-muted/30 py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AdPlaceholder type="banner" className="mx-auto" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Latest from the Blog
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                In-depth reviews, comparisons, and guides
              </p>
            </div>
            <Link href="/blog" className="hidden sm:block">
              <Button variant="outline" className="gap-2">
                All Posts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          {/* Featured Post */}
          {featuredPosts[0] && (
            <div className="mb-8">
              <BlogCard post={featuredPosts[0]} featured />
            </div>
          )}
          
          {/* Recent Posts Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Ready to Find Your Perfect AI Tool?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Browse our comprehensive directory of AI tools and find the perfect solution for your workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/tools">
              <Button size="lg" variant="secondary" className="gap-2">
                <Search className="h-5 w-5" />
                Explore All Tools
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Submit a Tool
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
