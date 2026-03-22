import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy - Calhame",
  description: "Privacy Policy for Calhame CFO Dashboard"
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Privacy Policy</CardTitle>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            <strong>Effective Date:</strong> March 19, 2026
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Introduction and Scope</h2>
              <p className="text-muted-foreground mb-2">
                Calhame Financial (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy and personal information. This Privacy Policy (&ldquo;Policy&rdquo;) describes how we collect, use, store, process, disclose, and protect your personal information and financial data when you access or use our CFO dashboard application and related services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="text-muted-foreground mb-2">
                This Policy applies to all users of the Service, including individuals who access the Service on their own behalf and individuals who access the Service on behalf of a company, organization, or other legal entity. By accessing or using the Service, you acknowledge that you have read, understood, and agree to the collection, use, disclosure, and processing of your personal information and financial data as described in this Policy.
              </p>
              <p className="text-muted-foreground mb-2">
                This Policy should be read in conjunction with our Terms of Service and User Agreement, which are incorporated herein by reference. All capitalized terms not defined in this Policy have the meanings ascribed to them in the Terms of Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>PIPEDA Compliance.</strong> Calhame Financial complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation in Canada, including Ontario&apos;s privacy laws. We are committed to the principles of privacy protection, including accountability, identifying purposes, consent, limiting collection, limiting use, disclosure and retention, accuracy, safeguards, openness, individual access, and challenging compliance.
              </p>
              <p className="text-muted-foreground">
                If you have any questions or concerns about this Policy or our privacy practices, please contact us using the contact information provided in Section 18.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-2">
                We collect various types of information in connection with your use of the Service, including personal information, financial data, usage information, and technical information. The categories of information we collect are described below.
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>2.1 Information You Provide Directly.</strong> When you create an account, use the Service, or communicate with us, you may provide us with the following information:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Account registration information, including your name, email address, password, and company name;</li>
                <li>Profile information, including business contact details, job title, and role;</li>
                <li>Billing and payment information, including credit card numbers, billing addresses, and payment method details (processed through third-party payment processors);</li>
                <li>Communication information, including emails, messages, feedback, support requests, and other communications you send to us;</li>
                <li>Survey responses, feedback, and other information you choose to provide; and</li>
                <li>Any other information you voluntarily provide through the Service or in your interactions with us.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>2.2 Financial Data from Third-Party Services.</strong> When you connect your accounting platform to the Service (such as Intuit QuickBooks or QuickBooks Online), you explicitly authorize us to retrieve and process your financial data from such Third-Party Services, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Revenue transactions, including invoices, sales receipts, payments received, and related revenue data;</li>
                <li>Expense transactions, including bills, expenses, checks, credit card charges, and other expenditures;</li>
                <li>Cost of goods sold (COGS) transactions, including inventory purchases and direct costs;</li>
                <li>Customer information, including customer names, identifiers, contact information, and transaction history;</li>
                <li>Vendor and supplier information, including vendor names, identifiers, contact information, and payment history;</li>
                <li>Account information, including chart of accounts, account names, account numbers, account types, and account balances;</li>
                <li>Transaction metadata, including transaction dates, amounts, descriptions, categories, payment methods, and currency information;</li>
                <li>Company information from your Third-Party Service accounts, including company name, address, and tax identifiers;</li>
                <li>Historical financial data spanning all available periods within your connected accounts; and</li>
                <li>Incremental updates, modifications, and additions to all of the foregoing data as they occur over time.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>2.3 Automatically Collected Information.</strong> When you access or use the Service, we automatically collect certain information about your device, browsing actions, and usage patterns, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Device information, including device type, operating system, browser type and version, unique device identifiers, and mobile network information;</li>
                <li>Usage information, including pages or screens viewed, links clicked, features used, time spent on pages, access times and dates, navigation paths, and referring URLs;</li>
                <li>Technical information, including IP addresses, browser characteristics, device characteristics, operating system details, language preferences, and time zone settings;</li>
                <li>Log data, including server logs, error logs, API call logs, and system event logs;</li>
                <li>Performance data, including page load times, response times, error rates, and system performance metrics;</li>
                <li>Session data, including session identifiers, session duration, and authentication events; and</li>
                <li>Cookies and similar tracking technologies, as described in Section 10.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>2.4 Authentication Credentials and Tokens.</strong> To maintain continuous access to your Third-Party Service accounts, we collect and securely store:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>OAuth 2.0 access tokens and refresh tokens obtained from Third-Party Services;</li>
                <li>Authentication credentials required to connect to Third-Party APIs;</li>
                <li>API keys, client secrets, and other credentials necessary for service integration;</li>
                <li>Session tokens and authentication state information; and</li>
                <li>User authentication information from our authentication service provider (Clerk).</li>
              </ul>

              <p className="text-muted-foreground">
                We encrypt authentication tokens and sensitive credentials using AES-256-GCM encryption before storage. However, you acknowledge that no method of electronic storage is 100% secure, as further described in Section 7.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">
                We use the information we collect for various purposes related to providing, maintaining, improving, and protecting the Service. The specific purposes for which we use your information include:
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>3.1 Service Delivery and Operations.</strong> We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Provide, operate, maintain, and deliver the Service and its features;</li>
                <li>Create and manage your user account;</li>
                <li>Authenticate your identity and manage access controls;</li>
                <li>Connect to and retrieve data from your Third-Party Service accounts;</li>
                <li>Synchronize financial data through background processing systems, job queues, and workers;</li>
                <li>Aggregate, process, analyze, and transform your financial data;</li>
                <li>Generate reports, dashboards, charts, analytics, and financial insights;</li>
                <li>Calculate financial metrics, ratios, trends, and performance indicators;</li>
                <li>Display synchronized data and analytics through our web-based interface;</li>
                <li>Process background sync jobs and automated data synchronization; and</li>
                <li>Perform data reconciliation and error detection.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>3.2 Customer Support and Communications.</strong> We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Respond to your inquiries, questions, and support requests;</li>
                <li>Provide customer support and technical assistance;</li>
                <li>Troubleshoot technical issues and resolve problems;</li>
                <li>Send you service-related notifications, updates, and announcements;</li>
                <li>Communicate with you about your account, subscriptions, billing, and transactions;</li>
                <li>Send you security alerts and breach notifications, if necessary; and</li>
                <li>Notify you of changes to our Terms of Service, this Policy, or other policies.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>3.3 Billing and Payment Processing.</strong> We use your billing and payment information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Process subscription fees and other charges;</li>
                <li>Bill you for services rendered;</li>
                <li>Manage automatic recurring billing;</li>
                <li>Process refunds, credits, and adjustments (if applicable);</li>
                <li>Detect and prevent payment fraud; and</li>
                <li>Comply with tax and accounting requirements.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>3.4 Service Improvement and Development.</strong> We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Analyze usage patterns and trends to improve the Service;</li>
                <li>Develop new features, functionality, and services;</li>
                <li>Test and evaluate new technologies and methodologies;</li>
                <li>Conduct research and analytics to enhance user experience;</li>
                <li>Identify and fix bugs, errors, and technical issues;</li>
                <li>Optimize performance, reliability, and scalability; and</li>
                <li>Understand user preferences and customize user experiences.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>3.5 Security, Fraud Prevention, and Legal Compliance.</strong> We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Detect, prevent, and respond to fraud, security incidents, and unauthorized access;</li>
                <li>Monitor for suspicious activity and security threats;</li>
                <li>Protect the security and integrity of the Service and our systems;</li>
                <li>Enforce our Terms of Service and other agreements;</li>
                <li>Comply with applicable laws, regulations, legal processes, and governmental requests;</li>
                <li>Respond to subpoenas, court orders, and lawful requests from authorities;</li>
                <li>Investigate violations of our policies and terms;</li>
                <li>Protect our rights, property, safety, and the rights, property, and safety of our users and others; and</li>
                <li>Comply with export control and sanctions requirements.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>3.6 Marketing and Promotional Communications.</strong> With your consent where required by law, we may use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Send you marketing and promotional communications about our products and services;</li>
                <li>Provide information about new features, updates, and enhancements;</li>
                <li>Send newsletters, tips, and educational content;</li>
                <li>Conduct surveys and request feedback; and</li>
                <li>Personalize marketing content based on your interests and usage.</li>
              </ul>

              <p className="text-muted-foreground">
                You may opt out of marketing communications at any time by following the unsubscribe instructions in our emails or updating your communication preferences in your account settings. Opting out of marketing communications will not affect service-related or transactional communications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Legal Bases for Processing</h2>
              <p className="text-muted-foreground mb-2">
                <strong>4.1 PIPEDA Compliance.</strong> Under PIPEDA and applicable provincial privacy legislation, we collect, use, and disclose your personal information only for purposes that a reasonable person would consider appropriate in the circumstances. Our legal bases for processing your personal information include:
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>4.2 Consent.</strong> We process your personal information based on your consent, which you provide when you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Create an account and accept our Terms of Service;</li>
                <li>Accept the User Agreement and authorize access to your Third-Party Service accounts;</li>
                <li>Connect your accounting platform (such as QuickBooks) to the Service;</li>
                <li>Submit information through the Service or provide information to us;</li>
                <li>Opt in to receive marketing communications; and</li>
                <li>Otherwise explicitly consent to specific processing activities.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                You may withdraw your consent at any time by disconnecting your Third-Party Service accounts, terminating your account, or contacting us as described in Section 18. However, withdrawal of consent may prevent us from providing certain or all features of the Service.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>4.3 Contractual Necessity.</strong> We process your personal information as necessary to perform our contractual obligations under the Terms of Service, including providing the Service, processing payments, synchronizing financial data, and delivering reports and analytics.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>4.4 Legal Obligations.</strong> We process your personal information as necessary to comply with applicable laws, regulations, legal processes, and governmental requests, including tax laws, accounting standards, anti-money laundering requirements, export control regulations, and breach notification obligations.
              </p>

              <p className="text-muted-foreground">
                <strong>4.5 Legitimate Interests.</strong> We may process your personal information based on our legitimate interests in operating, improving, and securing the Service, detecting and preventing fraud, enforcing our terms, and protecting our rights and property, provided such processing does not override your fundamental privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-2">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes. However, we may share your information with certain third parties in the following circumstances:
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>5.1 Service Providers and Subprocessors.</strong> We engage third-party service providers, contractors, and subprocessors to assist us in providing, maintaining, and improving the Service. These service providers may have access to your personal information and financial data, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Cloud hosting and infrastructure providers (for data storage and processing);</li>
                <li>Database and data storage providers;</li>
                <li>Authentication service providers (Clerk for user authentication and identity management);</li>
                <li>Payment processors and billing service providers;</li>
                <li>Email and communication service providers;</li>
                <li>Analytics and monitoring service providers;</li>
                <li>Customer support and help desk platforms;</li>
                <li>Security and fraud prevention service providers; and</li>
                <li>Other technology service providers that assist in delivering the Service.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                We require all service providers and subprocessors to maintain appropriate security measures and to process your personal information only in accordance with our instructions and applicable privacy laws. Our service providers are contractually prohibited from using your personal information for any purpose other than providing services to us.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>5.2 Third-Party Services and API Providers.</strong> When you connect your accounting platform or other Third-Party Services to our Service, we access and retrieve data from such services through their application programming interfaces (APIs). We share certain information with Third-Party Services as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Authenticate your identity and authorize access through OAuth 2.0 protocols;</li>
                <li>Retrieve financial data from your connected accounts;</li>
                <li>Maintain continuous synchronization of updated data; and</li>
                <li>Comply with Third-Party Service terms and API requirements.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                Your use of Third-Party Services is subject to the privacy policies and terms of service of those Third-Party Services. We are not responsible for the privacy practices of Third-Party Services.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>5.3 Legal and Regulatory Requirements.</strong> We may disclose your personal information if required or permitted by law, including to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Comply with legal obligations, court orders, subpoenas, warrants, or legal processes;</li>
                <li>Respond to lawful requests from governmental authorities, law enforcement, regulatory agencies, or national security agencies;</li>
                <li>Comply with tax reporting and remittance obligations;</li>
                <li>Comply with export control and economic sanctions regulations;</li>
                <li>Enforce our Terms of Service, this Policy, and other agreements;</li>
                <li>Protect our rights, property, safety, and legitimate business interests;</li>
                <li>Protect the rights, property, and safety of our users and the public;</li>
                <li>Detect, prevent, and address fraud, security incidents, and illegal activities; and</li>
                <li>Defend against legal claims and litigation.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>5.4 Business Transfers.</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, acquisition, sale of company assets, financing, bankruptcy, or other business transaction or reorganization. In such cases, we will require the acquiring entity to maintain the confidentiality of your personal information and to honor the commitments made in this Policy.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>5.5 Aggregated and De-identified Data.</strong> We may share aggregated, anonymized, or de-identified data that does not identify you personally with third parties for research, analytics, benchmarking, and other business purposes. Such data cannot be used to identify you individually.
              </p>

              <p className="text-muted-foreground">
                <strong>5.6 With Your Consent.</strong> We may share your personal information with third parties when you explicitly consent to such sharing for a specific purpose.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. International Data Transfers</h2>
              <p className="text-muted-foreground mb-2">
                <strong>6.1 Cross-Border Transfers.</strong> Your personal information and financial data may be transferred to, stored in, processed in, and accessed from countries and jurisdictions outside of Canada, including the United States and other countries where our service providers, cloud hosting providers, Third-Party Services, and business partners are located.
              </p>
              <p className="text-muted-foreground mb-2">
                These jurisdictions may have data protection and privacy laws that differ from Canadian laws. In particular, personal information transferred to the United States or other foreign jurisdictions may be subject to access by law enforcement, intelligence agencies, national security agencies, regulatory authorities, and courts in accordance with the laws of such jurisdictions, which may provide fewer privacy protections than Canadian law.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>6.2 PIPEDA Compliance for Transfers.</strong> In accordance with PIPEDA, when we transfer your personal information to service providers or other organizations outside of Canada, we:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Obtain your consent for such transfers (which you provide by using the Service and accepting this Policy);</li>
                <li>Require service providers to provide a comparable level of protection for your personal information;</li>
                <li>Enter into contractual agreements with service providers that include data protection obligations;</li>
                <li>Conduct due diligence on the privacy and security practices of service providers;</li>
                <li>Implement appropriate technical and organizational safeguards; and</li>
                <li>Remain accountable for your personal information while in the possession of third-party service providers.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>6.3 Safeguards for International Transfers.</strong> We implement appropriate safeguards to protect your personal information during international transfers, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Encryption of data in transit using TLS/SSL protocols;</li>
                <li>Encryption of sensitive data at rest using industry-standard encryption algorithms;</li>
                <li>Contractual data protection clauses with service providers;</li>
                <li>Access controls and authentication mechanisms;</li>
                <li>Regular security assessments and audits; and</li>
                <li>Incident response and breach notification procedures.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>6.4 Consent to International Transfers.</strong> By using the Service, accepting this Policy, and connecting your Third-Party Service accounts, you explicitly acknowledge and consent to the transfer of your personal information and financial data to the United States and other jurisdictions outside of Canada for the purposes described in this Policy. You acknowledge that you have been informed of the risks associated with such transfers, including the potential for access by foreign authorities.
              </p>

              <p className="text-muted-foreground">
                <strong>6.5 Questions About International Transfers.</strong> If you have questions or concerns about international transfers of your personal information, please contact us using the contact information in Section 18.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Data Security</h2>
              <p className="text-muted-foreground mb-2">
                <strong>7.1 Security Measures.</strong> We implement commercially reasonable technical, administrative, and physical security measures designed to protect your personal information and financial data from unauthorized access, use, disclosure, alteration, loss, and destruction. Our security measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Encryption of authentication tokens and sensitive credentials using AES-256-GCM encryption;</li>
                <li>Encryption of data in transit using Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols;</li>
                <li>Secure database storage with access controls and authentication;</li>
                <li>Role-based access controls and principle of least privilege;</li>
                <li>Multi-factor authentication options for user accounts;</li>
                <li>Regular security assessments, vulnerability scanning, and penetration testing;</li>
                <li>Network security controls, including firewalls and intrusion detection systems;</li>
                <li>Secure software development practices and code reviews;</li>
                <li>Employee training on security and privacy best practices;</li>
                <li>Logging and monitoring of system access and activities;</li>
                <li>Incident response and disaster recovery procedures; and</li>
                <li>Regular backups of data to prevent data loss.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>7.2 No Absolute Security.</strong> WHILE WE IMPLEMENT INDUSTRY-STANDARD SECURITY MEASURES, NO METHOD OF ELECTRONIC TRANSMISSION, STORAGE, OR PROCESSING IS 100% SECURE. WE CANNOT AND DO NOT GUARANTEE ABSOLUTE SECURITY OF YOUR PERSONAL INFORMATION OR FINANCIAL DATA. DATA TRANSMITTED OVER THE INTERNET, INCLUDING THROUGH APIS, WEB BROWSERS, AND NETWORK CONNECTIONS, MAY BE SUBJECT TO INTERCEPTION, UNAUTHORIZED ACCESS, MODIFICATION, OR LOSS DUE TO NETWORK FAILURES, CYBERATTACKS, HACKING ATTEMPTS, OR OTHER SECURITY THREATS BEYOND OUR CONTROL.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>7.3 Your Security Responsibilities.</strong> You are responsible for maintaining the security and confidentiality of your account credentials, passwords, and authentication information. You should:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Use strong, unique passwords and change them regularly;</li>
                <li>Enable multi-factor authentication if available;</li>
                <li>Not share your account credentials with unauthorized third parties;</li>
                <li>Immediately notify us of any unauthorized access or security breach;</li>
                <li>Secure your computer, mobile device, and network used to access the Service;</li>
                <li>Keep your operating system, browser, and security software up to date;</li>
                <li>Be vigilant against phishing attempts and social engineering; and</li>
                <li>Log out of your account when using shared or public devices.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>7.4 Reporting Security Incidents.</strong> If you discover or suspect any unauthorized access to your account, security vulnerabilities, or data breaches, you must immediately notify us at the contact information provided in Section 18. Prompt reporting allows us to investigate and respond to security incidents more effectively.
              </p>

              <p className="text-muted-foreground">
                <strong>7.5 Security Updates.</strong> We continuously review and update our security practices to address evolving threats and vulnerabilities. However, we cannot guarantee that our security measures will prevent all security incidents or breaches.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. Data Retention</h2>
              <p className="text-muted-foreground mb-2">
                <strong>8.1 Retention Periods.</strong> We retain your personal information and financial data for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>For as long as your account remains active and you continue to use the Service;</li>
                <li>For a reasonable period after account termination to allow you to reactivate your account or retrieve your data;</li>
                <li>As necessary to provide customer support and resolve disputes;</li>
                <li>As required to comply with legal, tax, accounting, and regulatory retention obligations;</li>
                <li>As necessary to enforce our Terms of Service and protect our legal rights;</li>
                <li>For backup, disaster recovery, and business continuity purposes; and</li>
                <li>As otherwise permitted or required by applicable law.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>8.2 Legal Retention Requirements.</strong> We may be required to retain certain personal information and financial data for specific periods under applicable laws and regulations, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Tax records and financial transaction data (typically 6-7 years under Canadian tax law);</li>
                <li>Business records required for accounting and financial reporting purposes;</li>
                <li>Records subject to legal holds, litigation, investigations, or regulatory proceedings;</li>
                <li>Records necessary to defend against legal claims within applicable limitation periods; and</li>
                <li>Other records required by industry-specific regulations or contractual obligations.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>8.3 Data Deletion.</strong> When personal information is no longer required for any purpose for which it may be used or disclosed, and we are not legally required to retain it, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Securely delete or destroy the personal information; or</li>
                <li>Anonymize or de-identify the information so that it can no longer be associated with you.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>8.4 Account Termination and Data Retrieval.</strong> If you terminate your account, we may provide you with a reasonable opportunity (not exceeding thirty (30) days) to export and retrieve your financial data. After such period, we may permanently delete your data from our active systems, subject to legal retention requirements and backup retention policies.
              </p>

              <p className="text-muted-foreground">
                <strong>8.5 Backup Retention.</strong> Deleted personal information may persist in backup systems and archives for a limited period (typically 30-90 days) before being permanently destroyed. Backup copies are maintained solely for disaster recovery purposes and are not accessible for normal business operations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-2">
                Under PIPEDA and applicable provincial privacy legislation, you have certain rights regarding your personal information. We are committed to facilitating the exercise of these rights in accordance with applicable law.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.1 Right of Access.</strong> You have the right to request access to your personal information that we hold. Upon receiving a valid access request, we will provide you with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Information about the existence, use, and disclosure of your personal information;</li>
                <li>A copy of your personal information in a commonly used format;</li>
                <li>Information about the purposes for which your personal information is used;</li>
                <li>Information about third parties to whom your personal information has been disclosed; and</li>
                <li>Information about the sources from which we collected your personal information.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                Much of your personal information and financial data is accessible directly through your account dashboard. You can also export your financial data in portable formats through the Service.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.2 Right to Correction.</strong> You have the right to request correction of inaccurate or incomplete personal information. If you believe that any personal information we hold about you is inaccurate or incomplete, you may request that we correct or update such information. You can update much of your account information directly through your account settings.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.3 Right to Deletion.</strong> You have the right to request deletion of your personal information, subject to certain legal exceptions. We will delete your personal information upon request unless:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>We are required or permitted by law to retain the information;</li>
                <li>The information is necessary to fulfill our legal, tax, or regulatory obligations;</li>
                <li>The information is necessary to defend against legal claims or enforce our rights;</li>
                <li>The information is subject to a legal hold or involved in ongoing litigation; or</li>
                <li>Deletion would impair our ability to detect fraud or security incidents.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                To request deletion of your personal information, you must first terminate your account and then submit a deletion request using the contact information in Section 18.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.4 Right to Data Portability.</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format. The Service allows you to export your financial data through the dashboard in standard formats such as CSV or JSON.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.5 Right to Withdraw Consent.</strong> You have the right to withdraw your consent to the collection, use, and disclosure of your personal information at any time, subject to legal or contractual restrictions. You may withdraw consent by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Disconnecting your Third-Party Service accounts;</li>
                <li>Terminating your account;</li>
                <li>Opting out of marketing communications;</li>
                <li>Adjusting your privacy settings and preferences; or</li>
                <li>Contacting us using the contact information in Section 18.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                Please note that withdrawal of consent may prevent us from providing certain or all features of the Service, and may result in the termination of your account.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.6 Right to Object.</strong> You have the right to object to certain processing of your personal information, including processing for direct marketing purposes. You may opt out of marketing communications at any time by following the unsubscribe instructions in our emails or updating your communication preferences.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.7 Right to File a Complaint.</strong> If you believe we have violated your privacy rights or failed to comply with PIPEDA or other applicable privacy laws, you have the right to file a complaint with us and with the Office of the Privacy Commissioner of Canada:
              </p>
              <p className="text-muted-foreground ml-4 mb-2">
                <strong>Office of the Privacy Commissioner of Canada</strong><br/>
                30 Victoria Street<br/>
                Gatineau, Quebec K1A 1H3<br/>
                Toll-free: 1-800-282-1376<br/>
                Website: www.priv.gc.ca
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>9.8 Exercising Your Rights.</strong> To exercise any of these rights, please submit a request using the contact information in Section 18. We may require you to verify your identity before processing your request. We will respond to your request within a reasonable time frame, typically within thirty (30) days, unless a different time frame is permitted or required by law. If we require additional time, we will notify you of the extension and the reasons for the delay.
              </p>

              <p className="text-muted-foreground">
                We will not charge a fee for processing your request unless permitted by law. If you make manifestly unfounded or excessive requests, we may charge a reasonable fee or refuse to process the request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">10. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-2">
                <strong>10.1 Use of Cookies.</strong> We use cookies, web beacons, pixels, and similar tracking technologies (&ldquo;Cookies&rdquo;) to collect information about your use of the Service, enhance your user experience, and provide certain features and functionality. Cookies are small data files stored on your device by your web browser.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>10.2 Types of Cookies We Use.</strong> We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the Service to function properly and cannot be disabled. They enable core functionality such as authentication, session management, security features, and access to protected areas of the Service.</li>
                <li><strong>Performance and Analytics Cookies:</strong> These cookies collect information about how you use the Service, including pages visited, features used, errors encountered, and performance metrics. We use this information to improve the Service and understand user behavior.</li>
                <li><strong>Functionality Cookies:</strong> These cookies enable enhanced features and personalization, such as remembering your preferences, settings, and customization choices.</li>
                <li><strong>Advertising and Marketing Cookies:</strong> These cookies may be used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. We may use third-party advertising networks and analytics providers that use cookies to collect information.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>10.3 Third-Party Cookies.</strong> Some cookies are placed by third-party service providers, including analytics providers, advertising networks, and social media platforms. These third parties may collect information about your online activities over time and across different websites and services. We do not control third-party cookies and recommend reviewing the privacy policies of these third parties.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>10.4 Managing Cookies.</strong> Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies or alert you when cookies are being sent. You can also delete cookies that have already been set. Please note that if you disable or delete cookies, some features of the Service may not function properly, and your user experience may be degraded.
              </p>

              <p className="text-muted-foreground">
                <strong>10.5 Analytics and Advertising Opt-Out.</strong> You may opt out of certain analytics and advertising cookies through industry opt-out mechanisms or by adjusting your browser settings. However, opting out may affect the functionality and personalization of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">11. Third-Party Services and Links</h2>
              <p className="text-muted-foreground mb-2">
                <strong>11.1 Third-Party Integrations.</strong> The Service integrates with and relies upon third-party services and platforms, including Intuit QuickBooks, QuickBooks Online, Clerk authentication services, and other third-party accounting and financial data providers. Your use of these Third-Party Services is governed by their respective privacy policies and terms of service, which we encourage you to review.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>11.2 Third-Party Links.</strong> The Service may contain links to third-party websites, applications, or services that are not owned or controlled by Calhame Financial. We are not responsible for the privacy practices, content, or policies of third-party websites or services. We encourage you to read the privacy policies of any third-party websites or services you visit or use.
              </p>

              <p className="text-muted-foreground mb-2">
                <strong>11.3 No Endorsement.</strong> The inclusion of third-party links or integrations does not imply our endorsement, sponsorship, or recommendation of such third parties or their products, services, or privacy practices. Your interactions with third-party websites and services are at your own risk.
              </p>

              <p className="text-muted-foreground">
                <strong>11.4 Data Shared with Third Parties.</strong> When you connect your Third-Party Service accounts (such as QuickBooks) to our Service, we may share certain information with those Third-Party Services as necessary to authenticate your access, retrieve your data, and maintain synchronization. We are not responsible for how Third-Party Services handle, store, or process your information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">12. Do Not Track Signals</h2>
              <p className="text-muted-foreground mb-2">
                Some web browsers have a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites that you do not want to have your online activities tracked. Currently, there is no industry standard for how to respond to DNT signals, and different browsers may send DNT signals in different ways.
              </p>
              <p className="text-muted-foreground">
                At this time, the Service does not respond to DNT signals from web browsers. We may adopt a DNT standard if and when a uniform standard is established. You can manage cookies and tracking technologies through your browser settings as described in Section 10.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">13. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground mb-2">
                <strong>13.1 Age Restrictions.</strong> The Service is not intended for use by individuals under the age of eighteen (18) years, or the age of legal majority in their jurisdiction of residence (whichever is greater). We do not knowingly collect, use, or disclose personal information from children under the applicable age of legal majority.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>13.2 Parental Consent.</strong> If you are under the age of legal majority, you must not use the Service or provide any personal information to us without the consent and supervision of a parent or legal guardian. If you are a parent or guardian and believe that your child has provided personal information to us without your consent, please contact us immediately using the contact information in Section 18.
              </p>
              <p className="text-muted-foreground">
                <strong>13.3 Deletion of Children&apos;s Information.</strong> If we become aware that we have collected personal information from a child under the applicable age of legal majority without proper consent, we will take steps to delete such information as soon as reasonably practicable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">14. Data Breach Notification</h2>
              <p className="text-muted-foreground mb-2">
                <strong>14.1 PIPEDA Breach Notification Obligations.</strong> In accordance with PIPEDA&apos;s mandatory breach notification requirements, if we experience a data breach involving personal information that poses a real risk of significant harm to affected individuals, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Notify affected individuals as soon as feasible after we become aware of the breach;</li>
                <li>Notify the Office of the Privacy Commissioner of Canada of the breach;</li>
                <li>Notify any other organizations or third parties if such notification may reduce the risk of harm or assist in mitigating the harm; and</li>
                <li>Maintain records of all breaches involving personal information.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>14.2 Breach Notification Content.</strong> If we notify you of a data breach, we will provide information about:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>The circumstances of the breach;</li>
                <li>The date or time period when the breach occurred (if known);</li>
                <li>The types of personal information involved in the breach;</li>
                <li>The steps we have taken to reduce the risk of harm;</li>
                <li>The steps you can take to reduce the risk of harm; and</li>
                <li>Contact information for you to obtain further information about the breach.</li>
              </ul>

              <p className="text-muted-foreground mb-2">
                <strong>14.3 Notification Methods.</strong> We will notify you of a data breach by email to the email address associated with your account, by posting a notice on the Service, or by other reasonable means. Notification may be delayed if law enforcement or regulatory authorities request a delay to avoid impeding their investigations.
              </p>

              <p className="text-muted-foreground">
                <strong>14.4 Incident Response.</strong> In the event of a data breach or security incident, we will conduct a thorough investigation, take steps to contain and remediate the breach, implement measures to prevent future breaches, and cooperate with law enforcement and regulatory authorities as required.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">15. Privacy by Design and Default</h2>
              <p className="text-muted-foreground mb-2">
                We are committed to incorporating privacy considerations into the design, development, and operation of the Service. Our privacy by design approach includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Implementing privacy and security measures proactively, not reactively;</li>
                <li>Embedding privacy protections into the design and architecture of our systems;</li>
                <li>Ensuring that privacy is the default setting, requiring no action by users;</li>
                <li>Minimizing the collection of personal information to only what is necessary;</li>
                <li>Limiting the use, disclosure, and retention of personal information;</li>
                <li>Implementing end-to-end security throughout the data lifecycle;</li>
                <li>Maintaining visibility and transparency about our privacy practices;</li>
                <li>Respecting user privacy and providing user-centric privacy controls; and</li>
                <li>Conducting privacy impact assessments for new features and services.</li>
              </ul>
              <p className="text-muted-foreground">
                We regularly review and update our privacy practices, security measures, and data protection technologies to ensure that we maintain appropriate protections for your personal information and adapt to evolving privacy standards and regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">16. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-2">
                We reserve the right to modify or update this Privacy Policy at any time to reflect changes in our privacy practices, legal requirements, business operations, or Service features. If we make material changes to this Policy, we will provide notice by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Posting a notice on the Service or within your account dashboard;</li>
                <li>Sending an email notification to the email address associated with your account; or</li>
                <li>Providing notice through other reasonable means.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                We will update the &ldquo;Effective Date&rdquo; at the top of this Policy to reflect the date of the most recent revision. Material changes will take effect thirty (30) days after we provide notice, unless we indicate a different effective date. Non-material changes, such as clarifications, corrections of typographical errors, or updates to contact information, may take effect immediately upon posting.
              </p>
              <p className="text-muted-foreground mb-2">
                Your continued use of the Service after the effective date of any changes to this Policy constitutes your acceptance of the revised Policy. If you do not agree to the changes, you must stop using the Service and may terminate your account in accordance with our Terms of Service.
              </p>
              <p className="text-muted-foreground">
                We encourage you to review this Policy periodically to stay informed about how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">17. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-2">
                This Privacy Policy and all matters relating to your privacy and the collection, use, and disclosure of your personal information shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, including the Personal Information Protection and Electronic Documents Act (PIPEDA), without giving effect to any principles of conflicts of law.
              </p>
              <p className="text-muted-foreground mb-2">
                Any disputes arising out of or relating to this Policy or our privacy practices shall be subject to the exclusive jurisdiction of the courts of Ontario, sitting in Toronto, except as otherwise provided in the arbitration provisions of our Terms of Service.
              </p>
              <p className="text-muted-foreground">
                If you reside in a province with substantially similar provincial privacy legislation (such as Alberta, British Columbia, or Quebec), your personal information may also be subject to such provincial privacy laws. We comply with applicable provincial privacy legislation where required.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">18. Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                If you have any questions, concerns, or complaints about this Privacy Policy, our privacy practices, or the handling of your personal information, or if you wish to exercise your privacy rights, please contact us at:
              </p>
              <p className="text-muted-foreground ml-4 mb-2">
                <strong>Calhame Financial</strong><br/>
                Privacy Inquiries<br/>
                Email:{" "}
                <a href="mailto:adam@camenzu.li" className="text-primary hover:underline">
                  adam@camenzu.li
                </a>
              </p>
              <p className="text-muted-foreground mb-2">
                For privacy-related inquiries, please include &ldquo;PRIVACY INQUIRY&rdquo; in the subject line of your email. We will make reasonable efforts to respond to your inquiry or request within thirty (30) days.
              </p>
              <p className="text-muted-foreground">
                <strong>Privacy Complaints.</strong> If you are not satisfied with our response to your privacy inquiry or complaint, you have the right to file a complaint with the Office of the Privacy Commissioner of Canada (contact information provided in Section 9.7).
              </p>
            </section>

            <section className="mt-8 pt-6 border-t bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Acknowledgment</h3>
              <p className="text-xs text-muted-foreground mb-2">
                BY USING THE SERVICE, YOU ACKNOWLEDGE THAT:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4 mb-3">
                <li>You have read, understood, and agree to this Privacy Policy;</li>
                <li>You consent to the collection, use, disclosure, and processing of your personal information and financial data as described in this Policy;</li>
                <li>You consent to the international transfer of your personal information to the United States and other jurisdictions outside of Canada;</li>
                <li>You understand your privacy rights under PIPEDA and applicable provincial privacy legislation;</li>
                <li>You acknowledge the security risks associated with electronic transmission and storage of data; and</li>
                <li>You agree that your continued use of the Service constitutes acceptance of any future modifications to this Policy.</li>
              </ul>
              <p className="text-xs text-muted-foreground italic">
                <strong>Last Updated:</strong> March 19, 2026
              </p>
            </section>

          </div>
        </CardContent>
      </Card>
    </main>
  );
}
