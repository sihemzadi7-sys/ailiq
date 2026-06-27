import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://www.ailiq.xyz/sitemap.xml',
    host: 'https://www.ailiq.xyz',
  }
}
