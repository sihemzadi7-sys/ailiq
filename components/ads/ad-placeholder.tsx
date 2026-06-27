/**
 * Ad Placeholder Component
 * 
 * Replace these placeholders with actual Google AdSense code when you have an account.
 * 
 * Steps to integrate AdSense:
 * 1. Sign up at https://www.google.com/adsense/
 * 2. Get your ad client ID (ca-pub-XXXXXXXXXX)
 * 3. Replace the placeholder divs with actual AdSense code
 * 4. Add the AdSense script to your layout.tsx:
 *    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
 */

interface AdPlaceholderProps {
  type: 'banner' | 'sidebar' | 'in-article' | 'rectangle';
  className?: string;
}

const adSizes: Record<string, { width: string; height: string; label: string }> = {
  banner: { width: '100%', height: '90px', label: 'Banner Ad (728x90)' },
  sidebar: { width: '300px', height: '250px', label: 'Sidebar Ad (300x250)' },
  'in-article': { width: '100%', height: '250px', label: 'In-Article Ad' },
  rectangle: { width: '336px', height: '280px', label: 'Rectangle Ad (336x280)' },
};

export function AdPlaceholder({ type, className = '' }: AdPlaceholderProps) {
  const size = adSizes[type];
  
  // In production, return nothing or actual ad code
  if (process.env.NODE_ENV === 'production') {
    return (
      <div 
        className={`ad-container ${className}`}
        style={{ 
          width: size.width, 
          minHeight: size.height,
          maxWidth: '100%'
        }}
      >
        {/* 
          Replace this with actual AdSense code:
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
      </div>
    );
  }

  // Development placeholder
  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 ${className}`}
      style={{ 
        width: size.width, 
        minHeight: size.height,
        maxWidth: '100%'
      }}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">{size.label}</p>
        <p className="text-xs text-muted-foreground/75">Ad Placeholder</p>
      </div>
    </div>
  );
}
