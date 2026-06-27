import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ComparisonProvider } from '@/lib/comparison-context'
import { ComparisonBar } from '@/components/tools/comparison-bar'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AI ToolsHub - Discover the Best AI Tools',
    template: '%s | AI ToolsHub',
  },
  description: 'Comprehensive directory of AI tools with reviews, comparisons, and guides. Find the perfect AI tool for writing, image generation, video creation, and more.',
  keywords: ['AI tools', 'artificial intelligence', 'ChatGPT', 'Midjourney', 'AI writing', 'AI image generator', 'AI video'],
  authors: [{ name: 'AI ToolsHub' }],
  creator: 'AI ToolsHub',
  publisher: 'AI ToolsHub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ailiq.xyz',
    siteName: 'AI ToolsHub',
    title: 'AI ToolsHub - Discover the Best AI Tools',
    description: 'Comprehensive directory of AI tools with reviews, comparisons, and guides.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI ToolsHub - Discover the Best AI Tools',
    description: 'Comprehensive directory of AI tools with reviews, comparisons, and guides.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#e62117',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ComparisonProvider>
          <Header />
          <main className="min-h-screen pb-16">
            {children}
          </main>
          <Footer />
          <ComparisonBar />
        </ComparisonProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
