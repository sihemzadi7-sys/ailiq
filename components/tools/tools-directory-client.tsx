'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ToolCard } from '@/components/tools/tool-card';
import { AdPlaceholder } from '@/components/ads/ad-placeholder';
import { 
  getAllTools, 
  categories, 
  priceTypes, 
  type Category, 
  type PriceType,
  type AITool 
} from '@/lib/data/tools';

type SortOption = 'rating' | 'name' | 'newest';

interface ToolsDirectoryClientProps {
  initialCategory?: string;
}

export function ToolsDirectoryClient({ initialCategory }: ToolsDirectoryClientProps) {
  const allTools = getAllTools();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory as Category] : []
  );
  const [selectedPriceTypes, setSelectedPriceTypes] = useState<PriceType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredTools = useMemo(() => {
    let result = [...allTools];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.shortDescription.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((tool) => selectedCategories.includes(tool.category));
    }

    // Price filter
    if (selectedPriceTypes.length > 0) {
      result = result.filter((tool) => selectedPriceTypes.includes(tool.price));
    }

    // Sort
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    return result;
  }, [allTools, searchQuery, selectedCategories, selectedPriceTypes, sortBy]);

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePriceType = (priceType: PriceType) => {
    setSelectedPriceTypes((prev) =>
      prev.includes(priceType)
        ? prev.filter((p) => p !== priceType)
        : [...prev, priceType]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedPriceTypes([]);
    setSortBy('rating');
  };

  const hasActiveFilters =
    searchQuery || selectedCategories.length > 0 || selectedPriceTypes.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-4 font-semibold text-foreground">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="cursor-pointer text-sm font-normal"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Type */}
      <div>
        <h3 className="mb-4 font-semibold text-foreground">Price</h3>
        <div className="space-y-3">
          {priceTypes.map((priceType) => (
            <div key={priceType} className="flex items-center gap-2">
              <Checkbox
                id={`price-${priceType}`}
                checked={selectedPriceTypes.includes(priceType)}
                onCheckedChange={() => togglePriceType(priceType)}
              />
              <Label
                htmlFor={`price-${priceType}`}
                className="cursor-pointer text-sm font-normal"
              >
                {priceType}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          AI Tools Directory
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover and compare the best AI tools for your workflow
        </p>
      </div>

      {/* Search and Controls */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1 lg:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search AI tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Filters */}
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedCategories.length + selectedPriceTypes.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer gap-1"
              onClick={() => toggleCategory(category)}
            >
              {category}
              <X className="h-3 w-3" />
            </Badge>
          ))}
          {selectedPriceTypes.map((priceType) => (
            <Badge
              key={priceType}
              variant="secondary"
              className="cursor-pointer gap-1"
              onClick={() => togglePriceType(priceType)}
            >
              {priceType}
              <X className="h-3 w-3" />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-6 px-2 text-xs"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredTools.length}</span> of{' '}
          <span className="font-medium text-foreground">{allTools.length}</span> tools
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
            <FilterContent />
          </div>
          <div className="mt-6">
            <AdPlaceholder type="sidebar" />
          </div>
        </aside>

        {/* Tools Grid */}
        <div className="flex-1">
          {filteredTools.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredTools.map((tool, index) => (
                <>
                  <ToolCard key={tool.slug} tool={tool} />
                  {/* Insert ad every 6 tools */}
                  {(index + 1) % 6 === 0 && index !== filteredTools.length - 1 && (
                    <div key={`ad-${index}`} className="sm:col-span-2 xl:col-span-3">
                      <AdPlaceholder type="in-article" className="mx-auto" />
                    </div>
                  )}
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="text-lg font-semibold text-foreground">No tools found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
