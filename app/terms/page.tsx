import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Read the terms and conditions for using AI ToolsHub website and services.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
        Terms of Use
      </h1>
      
      <p className="mb-8 text-muted-foreground">
        Last updated: January 1, 2024
      </p>

      <div className="prose prose-neutral max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Agreement to Terms</h2>
          <p className="mt-4 text-muted-foreground">
            By accessing or using AI ToolsHub, you agree to be bound by these Terms of Use. 
            If you disagree with any part of these terms, you may not access the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p className="mt-4 text-muted-foreground">
            The content on AI ToolsHub, including text, graphics, logos, images, and software, 
            is the property of AI ToolsHub and is protected by copyright, trademark, and other 
            intellectual property laws. You may not reproduce, distribute, modify, or create 
            derivative works without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">User Conduct</h2>
          <p className="mt-4 text-muted-foreground">
            When using our website, you agree not to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Use the site for any unlawful purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to any portion of the site</li>
            <li>Interfere with or disrupt the site or servers connected to the site</li>
            <li>Use any automated means to access the site without our permission</li>
            <li>Transmit any viruses, malware, or other malicious code</li>
            <li>Impersonate any person or entity</li>
            <li>Collect personal information about other users</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Reviews and Content</h2>
          <p className="mt-4 text-muted-foreground">
            Our AI tool reviews represent our opinions based on our testing and research. 
            While we strive for accuracy, we cannot guarantee that all information is complete 
            or current. Tool features, pricing, and availability may change without notice.
          </p>
          <p className="mt-4 text-muted-foreground">
            We recommend that you verify information directly with tool providers before making 
            purchasing decisions. We are not responsible for any decisions you make based on 
            our content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Affiliate Disclosure</h2>
          <p className="mt-4 text-muted-foreground">
            AI ToolsHub participates in affiliate marketing programs. This means we may earn 
            commissions when you click on links to third-party products and services and make 
            a purchase. This does not affect the price you pay or our editorial independence.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our reviews are based on our genuine assessment of each tool, regardless of 
            affiliate relationships. We only recommend products we believe provide value to our users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Third-Party Links</h2>
          <p className="mt-4 text-muted-foreground">
            Our website contains links to third-party websites that are not owned or controlled 
            by AI ToolsHub. We have no control over and assume no responsibility for the content, 
            privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Disclaimer of Warranties</h2>
          <p className="mt-4 text-muted-foreground">
            AI ToolsHub is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no 
            warranties, expressed or implied, regarding the operation of the website or the 
            information, content, or materials included on the site.
          </p>
          <p className="mt-4 text-muted-foreground">
            We do not warrant that the website will be uninterrupted, timely, secure, or 
            error-free. We do not make any warranties as to the results that may be obtained 
            from use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p className="mt-4 text-muted-foreground">
            In no event shall AI ToolsHub, its directors, employees, partners, agents, or 
            affiliates be liable for any indirect, incidental, special, consequential, or 
            punitive damages, including without limitation, loss of profits, data, use, or 
            goodwill, arising out of or in connection with your use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Indemnification</h2>
          <p className="mt-4 text-muted-foreground">
            You agree to indemnify and hold harmless AI ToolsHub and its affiliates from any 
            claims, losses, damages, liabilities, and expenses (including legal fees) arising 
            out of your use of the website or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
          <p className="mt-4 text-muted-foreground">
            We reserve the right to modify these Terms at any time. We will notify users of 
            any material changes by posting the updated Terms on this page. Your continued use 
            of the site after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Governing Law</h2>
          <p className="mt-4 text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of 
            the United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p className="mt-2 text-muted-foreground">
            Email: legal@aitoolshub.com
          </p>
        </section>
      </div>
    </div>
  );
}
