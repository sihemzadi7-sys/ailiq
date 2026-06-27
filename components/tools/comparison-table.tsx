'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useComparison } from '@/lib/comparison-context';
import { tools, type AITool } from '@/lib/data/tools';

// Helper to check if values differ across tools
function valuesDiffer(toolsToCompare: AITool[], getValue: (tool: AITool) => string | number): boolean {
  if (toolsToCompare.length < 2) return false;
  const firstValue = getValue(toolsToCompare[0]);
  return toolsToCompare.some((tool) => getValue(tool) !== firstValue);
}

// Star rating component
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
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

// Extract key features from review content (first 5 bullet points or features mentioned)
function extractKeyFeatures(tool: AITool): string[] {
  // Use pros as key features, limited to 5
  return tool.pros.slice(0, 5);
}

// Generate "Best for" sentence based on category and description
function getBestFor(tool: AITool): string {
  const bestForMap: Record<string, string> = {
    Writing: 'Content creators and writers who need AI-powered writing assistance.',
    Image: 'Designers and artists seeking AI image generation capabilities.',
    Video: 'Video creators looking for AI-powered video editing and generation.',
    Code: 'Developers who want AI assistance for coding and debugging.',
    Productivity: 'Professionals seeking to automate and streamline their workflow.',
    Audio: 'Musicians and podcasters needing AI audio tools.',
    '3D': '3D artists and game developers working with AI-generated assets.',
    Marketing: 'Marketers looking to enhance their campaigns with AI.',
    SEO: 'SEO specialists optimizing content for search engines.',
    Research: 'Researchers and analysts who need AI-powered information retrieval.',
  };
  return bestForMap[tool.category] || 'Users looking for powerful AI capabilities.';
}

export function ComparisonTable() {
  const { selectedTools: selectedIds, clearSelection, canCompare } = useComparison();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Get full tool objects from IDs
  const selectedTools = tools.filter((tool) => selectedIds.includes(tool.slug));

  // Show loading state during hydration
  if (!isHydrated) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // Show empty state if not enough tools selected
  if (!canCompare || selectedTools.length < 2) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12">
          <h2 className="text-xl font-semibold text-foreground">
            Please select 2-6 tools to compare
          </h2>
          <p className="mt-2 text-muted-foreground">
            Go to the AI Tools Directory and use the checkboxes to select tools you want to compare.
          </p>
          <Button asChild className="mt-6 bg-secondary hover:bg-secondary/90">
            <Link href="/tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Directory
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Check which rows have differing values
  const categoryDiffers = valuesDiffer(selectedTools, (t) => t.category);
  const priceDiffers = valuesDiffer(selectedTools, (t) => t.price);
  const ratingDiffers = valuesDiffer(selectedTools, (t) => t.rating);

  const rows = [
    { label: 'Category', key: 'category', differs: categoryDiffers },
    { label: 'Price', key: 'price', differs: priceDiffers },
    { label: 'Rating', key: 'rating', differs: ratingDiffers },
    { label: 'Key Features', key: 'features', differs: false },
    { label: 'Pros', key: 'pros', differs: false },
    { label: 'Cons', key: 'cons', differs: false },
    { label: 'Best For', key: 'bestFor', differs: false },
    { label: 'Actions', key: 'actions', differs: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header with clear button */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Comparing {selectedTools.length} tools
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={clearSelection}
          className="text-destructive hover:bg-destructive/10"
        >
          Clear Selection
        </Button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[800px]">
          {/* Tool Names Header */}
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="sticky left-0 z-10 min-w-[140px] bg-muted/50 px-4 py-4 text-left text-sm font-semibold text-foreground">
                Tool
              </th>
              {selectedTools.map((tool) => (
                <th
                  key={tool.slug}
                  className="min-w-[200px] px-4 py-4 text-center text-base font-bold text-foreground"
                >
                  {tool.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => {
              const isEvenRow = rowIndex % 2 === 0;
              const baseRowClass = isEvenRow ? 'bg-background' : 'bg-muted/30';
              const highlightClass = row.differs ? 'bg-secondary/10' : '';

              return (
                <tr key={row.key} className={`border-b border-border ${baseRowClass}`}>
                  {/* Row Label */}
                  <td
                    className={`sticky left-0 z-10 px-4 py-4 text-sm font-medium text-foreground ${
                      isEvenRow ? 'bg-background' : 'bg-muted/30'
                    }`}
                  >
                    {row.label}
                  </td>

                  {/* Tool Values */}
                  {selectedTools.map((tool) => {
                    const cellClass = row.differs ? highlightClass : '';

                    return (
                      <td
                        key={`${tool.slug}-${row.key}`}
                        className={`px-4 py-4 text-center ${cellClass}`}
                      >
                        {row.key === 'category' && (
                          <span className="inline-flex rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary">
                            {tool.category}
                          </span>
                        )}

                        {row.key === 'price' && (
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                              tool.price === 'Free'
                                ? 'bg-green-100 text-green-700'
                                : tool.price === 'Freemium'
                                  ? 'bg-blue-100 text-blue-700'
                                  : tool.price === 'Paid'
                                    ? 'bg-orange-100 text-orange-700'
                                    : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tool.price}
                          </span>
                        )}

                        {row.key === 'rating' && (
                          <div className="flex justify-center">
                            <StarRating rating={tool.rating} />
                          </div>
                        )}

                        {row.key === 'features' && (
                          <ul className="space-y-1 text-left text-sm">
                            {extractKeyFeatures(tool).map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {row.key === 'pros' && (
                          <ul className="space-y-1 text-left text-sm">
                            {tool.pros.slice(0, 3).map((pro, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                                <span className="text-muted-foreground">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {row.key === 'cons' && (
                          <ul className="space-y-1 text-left text-sm">
                            {tool.cons.slice(0, 3).map((con, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="text-muted-foreground">{con}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {row.key === 'bestFor' && (
                          <p className="text-sm text-muted-foreground">{getBestFor(tool)}</p>
                        )}

                        {row.key === 'actions' && (
                          <div className="flex flex-col items-center gap-2">
                            <Button
                              asChild
                              size="sm"
                              className="w-full bg-primary hover:bg-primary/90"
                            >
                              <a
                                href={tool.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Get {tool.name}
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="w-full border-secondary text-secondary hover:bg-secondary/10"
                            >
                              <Link href={`/tools/${tool.slug}`}>Read Review</Link>
                            </Button>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Back to directory link */}
      <div className="text-center">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/tools">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Tools Directory
          </Link>
        </Button>
      </div>
    </div>
  );
}
