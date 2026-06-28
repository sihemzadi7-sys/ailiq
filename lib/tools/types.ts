export type Category =
  | 'Writing'
  | 'Image'
  | 'Video'
  | 'Code'
  | 'Productivity'
  | 'Audio'
  | '3D'
  | 'Marketing'
  | 'SEO'
  | 'Research';

export type PriceType = 'Free' | 'Freemium' | 'Paid' | 'Contact for pricing';

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AITool {
  slug: string;
  name: string;
  category: Category;
  price: PriceType;
  shortDescription: string;
  rating: number;
  affiliateUrl: string;
  reviewContent: string;
  pros: string[];
  cons: string[];
  images: string[];
  pricingTiers: PricingTier[];
  faqs: FAQ[];
  alternatives: string[];
  featured?: boolean;
  createdAt: string;
}
