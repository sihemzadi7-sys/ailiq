import type { MetadataRoute } from 'next'

type Tool = {
  slug: string
  updatedAt?: string | Date
}

type BlogPost = {
  slug: string
  updatedAt?: string | Date
}

const baseUrl = 'https://www.ailiq.xyz'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: `${baseUrl}/tools`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/compare`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${baseUrl}/thumbnail-tool`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/faq`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

async function getTools(): Promise<Tool[]> {
  try {
    const res = await fetch(`${baseUrl}/api/tools`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const data = await res.json()

    if (Array.isArray(data)) return data
    if (Array.isArray(data?.tools)) return data.tools

    return []
  } catch {
    return []
  }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const data = await res.json()

    if (Array.isArray(data)) return data
    if (Array.isArray(data?.posts)) return data.posts

    return []
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tools, blogPosts] = await Promise.all([getTools(), getBlogPosts()])

  const toolRoutes: MetadataRoute.Sitemap = tools
    .filter((tool) => tool?.slug)
    .map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: tool.updatedAt ? new Date(tool.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  return [...staticRoutes, ...toolRoutes, ...blogRoutes]
}
