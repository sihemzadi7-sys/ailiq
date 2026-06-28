import { AITool } from '@/lib/tools/types';

export const seoTools: AITool[] = [
  {
    slug: 'ahrefs',
    name: 'Ahrefs',
    category: 'SEO',
    price: 'Paid',
    shortDescription: 'Powerful SEO suite for keyword research, backlink analysis, and competitor tracking.',
    rating: 4.8,
    affiliateUrl: 'https://ahrefs.com',
    reviewContent: `...`,
    pros: ['Excellent backlink database'],
    cons: ['Expensive for beginners'],
    images: ['/images/tools/ahrefs/1.jpg'],
    pricingTiers: [],
    faqs: [],
    alternatives: ['semrush', 'moz-pro'],
    featured: true,
    createdAt: '2026-06-28'
  }
];
