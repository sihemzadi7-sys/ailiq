import type { Metadata } from 'next';
import { ImageIcon, Download, Settings, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Tool - Create Eye-Catching Thumbnails',
  description: 'Create stunning YouTube thumbnails with our free online tool. Easy to use, no design skills required.',
};

export default function ThumbnailToolPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <ImageIcon className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
          YouTube Thumbnail Tool
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Create eye-catching YouTube thumbnails that drive clicks. 
          No design skills required.
        </p>
      </div>

      {/* Features */}
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Palette className="h-5 w-5 text-secondary" />
            </div>
            <CardTitle className="mt-4">Custom Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Choose from dozens of professionally designed templates optimized for YouTube.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Settings className="h-5 w-5 text-secondary" />
            </div>
            <CardTitle className="mt-4">Easy Customization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Add text, images, and effects with our intuitive drag-and-drop editor.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Download className="h-5 w-5 text-secondary" />
            </div>
            <CardTitle className="mt-4">Instant Download</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Download your thumbnail in the perfect 1280x720 resolution for YouTube.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tool Placeholder */}
      <Card className="mb-16">
        <CardContent className="flex flex-col items-center justify-center py-24">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ImageIcon className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-foreground">
            Thumbnail Editor Coming Soon
          </h2>
          <p className="mt-2 max-w-md text-center text-muted-foreground">
            We&apos;re working on an amazing thumbnail creation tool. 
            Subscribe to our newsletter to be notified when it launches!
          </p>
          <div className="mt-6 flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-border bg-background px-4 py-2 text-foreground"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Notify Me
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          YouTube Thumbnail Best Practices
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-foreground">Use High Contrast Colors</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bright, contrasting colors help your thumbnail stand out in search results and suggested videos.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-foreground">Add Faces</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thumbnails with human faces showing emotion get higher click-through rates.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-foreground">Keep Text Minimal</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use 3-4 words max. The text should be large enough to read on mobile devices.
            </p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-foreground">Maintain Consistency</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use a consistent style across your thumbnails to build brand recognition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
