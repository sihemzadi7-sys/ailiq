import type { Metadata } from 'next';
import { ComparisonTable } from '@/components/tools/comparison-table';

export const metadata: Metadata = {
  title: 'Compare AI Tools',
  description: 'Compare multiple AI tools side by side to find the best one for your needs. View features, pricing, pros, cons, and ratings in one table.',
  openGraph: {
    title: 'Compare AI Tools | AI ToolsHub',
    description: 'Compare multiple AI tools side by side to find the best one for your needs.',
  },
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-balance text-3xl font-bold text-foreground lg:text-4xl">
          Compare AI Tools
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          See how your selected tools stack up against each other
        </p>
      </div>

      {/* Comparison Table */}
      <ComparisonTable />
    </div>
  );
}
