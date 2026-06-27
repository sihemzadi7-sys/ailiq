'use client';

import Link from 'next/link';
import { Star, ExternalLink, Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useComparison } from '@/lib/comparison-context';
import type { AITool } from '@/lib/data/tools';

interface ToolCardProps {
  tool: AITool;
  showCompareCheckbox?: boolean;
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
          className={`h-4 w-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : star - 0.5 <= rating
              ? 'fill-yellow-400/50 text-yellow-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function ToolCard({ tool, showCompareCheckbox = true }: ToolCardProps) {
  const { isSelected, toggleTool, canSelectMore, isMaxReached } = useComparison();
  
  const selected = isSelected(tool.slug);
  const disabled = !selected && isMaxReached;

  const handleCheckboxChange = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      toggleTool(tool.slug);
    }
  };

  return (
    <Card className="group relative flex h-full flex-col transition-all hover:shadow-lg">
      {/* Comparison Checkbox */}
      {showCompareCheckbox && (
        <div 
          className="absolute right-3 top-3 z-10"
          onClick={handleCheckboxChange}
        >
          <div
            className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded border-2 transition-all ${
              selected
                ? 'border-secondary bg-secondary text-white'
                : disabled
                ? 'border-muted bg-muted/50 cursor-not-allowed opacity-50'
                : 'border-muted-foreground/30 bg-background hover:border-secondary'
            }`}
            title={disabled ? 'Maximum 6 tools reached' : selected ? 'Remove from comparison' : 'Add to comparison'}
          >
            {selected && <Check className="h-3 w-3" />}
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 pr-6">
            <Link href={`/tools/${tool.slug}`}>
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {tool.name}
              </h3>
            </Link>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge className={categoryColors[tool.category] || 'bg-gray-100 text-gray-800'}>
                {tool.category}
              </Badge>
              <Badge className={priceColors[tool.price] || 'bg-gray-100 text-gray-800'}>
                {tool.price}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {tool.shortDescription}
        </p>
        <div className="mt-4">
          <StarRating rating={tool.rating} />
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-0">
        <Link href={`/tools/${tool.slug}`} className="flex-1">
          <Button variant="outline" className="w-full" size="sm">
            Read Review
          </Button>
        </Link>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1"
        >
          <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
            Get Tool
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
