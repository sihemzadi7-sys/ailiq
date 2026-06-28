import { tools } from '@/data/tools';
import { AITool } from './types';

export function searchTools(query: string): AITool[] {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      tool.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(slug: string): AITool[] {
  const tool = getToolBySlug(slug);
  if (!tool) return [];

  return tools
    .filter(
      (t) =>
        t.slug !== slug &&
        (tool.alternatives.includes(t.slug) || t.category === tool.category)
    )
    .slice(0, 4);
}
