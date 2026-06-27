import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how AI ToolsHub collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        Privacy Policy
      </h1>
      
      <p className="mb-8 text-muted-foreground">
        Last updated: January 1, 2024
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
          <p className="mt-4 text-muted-foreground">
            AI ToolsHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting 
            your personal data. This privacy policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <p className="mt-4 text-muted-foreground">
            We may collect information about you in various ways:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong>Personal Data:</strong> When you subscribe to our newsletter or contact us, 
              we may collect your name, email address, and any other information you provide.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect certain information when you 
              visit our website, including your IP address, browser type, operating system, 
              referring URLs, and information about how you interact with our site.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to track 
              activity on our website and hold certain information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="mt-4 text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Send you newsletters, marketing communications, and other information</li>
            <li>Find and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
          <p className="mt-4 text-muted-foreground">
            We may use third-party services that collect, monitor, and analyze data:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to track and analyze 
              website traffic. Google Analytics collects information such as how often users 
              visit the site, what pages they visit, and what other sites they used before coming to our site.
            </li>
            <li>
              <strong>Advertising Partners:</strong> We may use third-party advertising companies 
              (such as Google AdSense) to serve ads when you visit our website.
            </li>
            <li>
              <strong>Affiliate Links:</strong> Our website contains affiliate links to various 
              AI tool providers. When you click these links and make purchases, we may earn commissions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-4 text-muted-foreground">
            We use cookies to enhance your experience on our website. You can instruct your 
            browser to refuse all cookies or to indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
          <p className="mt-4 text-muted-foreground">
            We implement appropriate technical and organizational security measures to protect 
            your personal data. However, no method of transmission over the Internet or method 
            of electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
          <p className="mt-4 text-muted-foreground">
            Depending on your location, you may have certain rights regarding your personal data:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure of your data</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy</h2>
          <p className="mt-4 text-muted-foreground">
            Our website is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
          <p className="mt-4 text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2 text-muted-foreground">
            Email: privacy@aitoolshub.com
          </p>
        </section>
      </div>
    </div>
  );
}
