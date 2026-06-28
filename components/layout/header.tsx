'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'AI Tools', href: '/tools' },
  { name: 'Compare', href: '/compare' },
  { name: 'Blog', href: '/blog' },
  { name: 'Thumbnail Tool', href: '/thumbnail-tool' },
]

const moreLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">AI</span>
          </div>
          <span className="text-xl font-bold text-foreground">AILIQ</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                aria-haspopup="menu"
              >
                More
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {moreLinks.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/tools">
              <Search className="mr-2 h-4 w-4" />
              Search Tools
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden">
          <div className="space-y-1 px-4 pb-4">
            {[...navigation, ...moreLinks].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2 text-base font-medium hover:bg-muted hover:text-foreground ${
                  isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
              <Button asChild className="w-full" size="sm">
                <Link href="/tools" onClick={() => setMobileMenuOpen(false)}>
                  <Search className="mr-2 h-4 w-4" />
                  Search Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
