import type { Metadata } from 'next';
import { ToolsDirectoryClient } from '@/components/tools/tools-directory-client';

export const metadata: Metadata = {
  title: 'AI Tools Directory',
  description: 'Browse and compare the best AI tools for writing, image generation, video creation, coding, and more. Find the perfect AI tool for your workflow.',
  openGraph: {
    title: 'AI Tools Directory | AI ToolsHub',
    description: 'Browse and compare the best AI tools for writing, image generation, video creation, coding, and more.',
  },
};

interface ToolsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const params = await searchParams;
  return <ToolsDirectoryClient initialCategory={params.category} />;
}
