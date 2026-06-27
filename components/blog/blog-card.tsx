import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/data/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  'Tool Comparisons': 'bg-blue-100 text-blue-800',
  'Top 10 Lists': 'bg-green-100 text-green-800',
  'Tutorials': 'bg-purple-100 text-purple-800',
  'News': 'bg-red-100 text-red-800',
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-6xl font-bold text-primary/20">AI</span>
            </div>
          </div>
          <CardHeader>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Badge className={categoryColors[post.category] || 'bg-gray-100 text-gray-800'}>
                {post.category}
              </Badge>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h2>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-muted-foreground">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
          </CardFooter>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-4xl font-bold text-primary/20">AI</span>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Badge className={`${categoryColors[post.category] || 'bg-gray-100 text-gray-800'} text-xs`}>
              {post.category}
            </Badge>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.author}</span>
          <span>{formattedDate}</span>
        </CardFooter>
      </Link>
    </Card>
  );
}
