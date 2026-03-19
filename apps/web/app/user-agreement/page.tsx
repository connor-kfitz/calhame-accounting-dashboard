import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "User Agreement - Calhame",
  description: "User Agreement for Calhame CFO Dashboard"
}

export default function UserAgreementPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">User Agreement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Acceptance</h2>
              <p className="text-muted-foreground">By using the Service, you agree to these Terms and our data practices.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Authorization</h2>
              <p className="text-muted-foreground mb-2">You explicitly authorize the Service to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Access your Intuit account data</li>
                <li>Retrieve financial information</li>
                <li>Store and process such data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Data Accuracy</h2>
              <p className="text-muted-foreground mb-2">You acknowledge that:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Data depends on third-party sources</li>
                <li>Errors may occur</li>
                <li>You are responsible for verifying financial outputs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Risk Acknowledgment</h2>
              <p className="text-muted-foreground">You understand that financial decisions based on the Service are made at your own risk.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Consent to Processing</h2>
              <p className="text-muted-foreground">You consent to the collection, storage, and processing of your financial data as described.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Revocation</h2>
              <p className="text-muted-foreground">You may revoke access to your Intuit account at any time, which may limit Service functionality.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Entire Agreement</h2>
              <p className="text-muted-foreground">This Agreement constitutes the entire agreement between you and the Company.</p>
            </section>

          </div>
        </CardContent>
      </Card>
    </main>
  );
}
