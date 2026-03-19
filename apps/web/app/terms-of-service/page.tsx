import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service - Calhame",
  description: "Terms of Service for Calhame CFO Dashboard"
}

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Terms of Service</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Effective Date:</strong> March 18, 2026
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
              <p className="text-muted-foreground mb-2">
                Welcome to Calhame Financial (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms of Service and User Agreement (&ldquo;Terms&rdquo;) govern your access to and use of our CFO/accounting application (the &ldquo;Service&rdquo; or &ldquo;Calhame CFO&rdquo;).
              </p>
              <p className="text-muted-foreground">
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
              <p className="text-muted-foreground mb-2">
                The Service provides financial data aggregation and analysis tools by connecting to third-party platforms, including Intuit APIs, to retrieve revenue, expense, and cost of goods sold (COGS) data and synchronize it into our database.
              </p>
              <p className="text-muted-foreground">
                Data synchronization is performed through background processing systems (&ldquo;Workers&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Eligibility</h2>
              <p className="text-muted-foreground">
                You must be at least 18 years old and capable of forming a binding contract to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. User Accounts</h2>
              <p className="text-muted-foreground mb-2">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
              <p className="text-muted-foreground">
                You agree to provide accurate and complete information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Third-Party Integrations</h2>
              <p className="text-muted-foreground mb-2">
                Our Service integrates with third-party services, including Intuit.
              </p>
              <p className="text-muted-foreground mb-2">By connecting your account, you:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Authorize us to access your financial data via the Intuit API</li>
                <li>Acknowledge that we do not control third-party services</li>
                <li>Agree to comply with the terms of those third-party providers</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We are not responsible for the availability, accuracy, or reliability of third-party data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Data Collection and Use</h2>
              <p className="text-muted-foreground mb-2">
                We collect and store financial data including revenue, expenses, and COGS.
              </p>
              <p className="text-muted-foreground mb-2">We use this data to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Provide the Service</li>
                <li>Generate reports and analytics</li>
                <li>Improve our platform</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We implement reasonable security measures, but cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Data Synchronization and Processing</h2>
              <p className="text-muted-foreground mb-2">
                Data synchronization is performed asynchronously via Workers.
              </p>
              <p className="text-muted-foreground mb-2">You acknowledge that:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Data may not be real-time</li>
                <li>Delays, failures, or discrepancies may occur</li>
                <li>We are not liable for temporary inconsistencies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. User Responsibilities</h2>
              <p className="text-muted-foreground mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Use the Service for unlawful purposes</li>
                <li>Attempt to reverse engineer or disrupt the Service</li>
                <li>Misuse API integrations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Intellectual Property</h2>
              <p className="text-muted-foreground mb-2">
                All rights, title, and interest in the Service remain with the Company.
              </p>
              <p className="text-muted-foreground">
                You are granted a limited, non-exclusive, non-transferable license to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">10. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-2">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind.
              </p>
              <p className="text-muted-foreground">
                We do not guarantee accuracy, completeness, or suitability of financial data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">11. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-2">
                To the maximum extent permitted by law, the Company shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business data</li>
                <li>Errors in financial reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless the Company from any claims arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">13. Termination</h2>
              <p className="text-muted-foreground mb-2">
                We may suspend or terminate your access at any time for violation of these Terms.
              </p>
              <p className="text-muted-foreground">
                You may stop using the Service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">14. Modifications</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. Continued use constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">15. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of Canada and the United States.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">16. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions, contact us at:{" "}
                <a href="mailto:adam@camenzu.li" className="text-primary hover:underline">
                  adam@camenzu.li
                </a>
              </p>
            </section>

          </div>
        </CardContent>
      </Card>
    </main>
  );
}
