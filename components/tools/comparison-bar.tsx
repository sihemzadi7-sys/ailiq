'use client';

import Link from 'next/link';
import { X, GitCompare, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useComparison } from '@/lib/comparison-context';

export function ComparisonBar() {
  const { selectedTools, clearSelection, canCompare, isMaxReached } = useComparison();

  if (selectedTools.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm font-medium">
              {selectedTools.length} tool{selectedTools.length !== 1 ? 's' : ''} selected
            </Badge>
            
            {isMaxReached && (
              <div className="flex items-center gap-1.5 text-xs text-amber-600">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>Maximum 6 tools reached</span>
              </div>
            )}
            
            {!canCompare && selectedTools.length > 0 && (
              <span className="text-xs text-muted-foreground">
                Select at least 2 tools to compare
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSelection}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="mr-1 h-4 w-4" />
              Clear
            </Button>
            
            <Link href="/compare">
              <Button
                size="sm"
                disabled={!canCompare}
                className="bg-secondary hover:bg-secondary/90"
              >
                <GitCompare className="mr-2 h-4 w-4" />
                Compare Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
