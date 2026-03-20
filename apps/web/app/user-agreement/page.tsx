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
          <CardTitle className="text-3xl text-center">User Agreement and Consent</CardTitle>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            <strong>Effective Date:</strong> March 19, 2026
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            <section className="bg-muted/50 p-4 rounded-lg border">
              <p className="text-muted-foreground font-medium mb-2">
                <strong>Important Notice:</strong> This User Agreement and Consent (&ldquo;User Agreement&rdquo;) is a supplementary agreement to the Calhame Financial Terms of Service. By accepting this User Agreement, you provide explicit consent and authorization for specific data access, processing activities, and acknowledge important limitations and risks associated with the Service.
              </p>
              <p className="text-muted-foreground">
                PLEASE READ THIS USER AGREEMENT CAREFULLY BEFORE USING THE SERVICE. BY CLICKING &ldquo;I ACCEPT&rdquo;, CONNECTING YOUR ACCOUNTING PLATFORM, OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS USER AGREEMENT AND THE TERMS OF SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">1. Acceptance and Relationship to Terms of Service</h2>
              <p className="text-muted-foreground mb-2">
                This User Agreement is entered into between you (&ldquo;you&rdquo;, &ldquo;your&rdquo;, or &ldquo;User&rdquo;) and Calhame Financial (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). This User Agreement supplements and forms part of the Calhame Financial Terms of Service (the &ldquo;Terms of Service&rdquo;), which are incorporated herein by reference.
              </p>
              <p className="text-muted-foreground mb-2">
                In the event of any conflict or inconsistency between this User Agreement and the Terms of Service, the Terms of Service shall control unless explicitly stated otherwise. All capitalized terms used but not defined in this User Agreement shall have the meanings ascribed to them in the Terms of Service.
              </p>
              <p className="text-muted-foreground">
                By accepting this User Agreement, you confirm that: (a) you have read and agree to the Terms of Service; (b) you are of legal age and have the authority to enter into binding agreements; (c) if entering this agreement on behalf of an organization, you have the authority to bind such organization; and (d) you voluntarily provide the consents and authorizations set forth below with full knowledge of their implications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Explicit Authorization for Data Access and Processing</h2>
              <p className="text-muted-foreground mb-2">
                <strong>2.1 Authorization to Access Third-Party Accounts.</strong> You explicitly and unequivocally authorize and direct Calhame Financial and its authorized service providers to access your account(s) with third-party accounting platforms, financial services providers, and application programming interfaces (including without limitation Intuit QuickBooks, QuickBooks Online, and related Intuit services) (&ldquo;Connected Accounts&rdquo;) for the purposes of retrieving, collecting, aggregating, synchronizing, storing, processing, analyzing, and displaying your financial data within the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>2.2 Scope of Data Access.</strong> You authorize the Company to retrieve and process the following categories of financial data from your Connected Accounts (&ldquo;Authorized Data&rdquo;):
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Revenue transactions, including invoices, sales receipts, payments received, and related revenue recognition data;</li>
                <li>Expense transactions, including bills, expenses, checks, credit card charges, and other expenditures;</li>
                <li>Cost of goods sold (COGS) transactions, including inventory purchases and direct costs;</li>
                <li>Customer information, including customer names, identifiers, contact information, and transaction history;</li>
                <li>Vendor and supplier information, including vendor names, identifiers, contact information, and payment history;</li>
                <li>Account information, including chart of accounts, account names, account numbers, account types, and account balances;</li>
                <li>Transaction metadata, including transaction dates, amounts, descriptions, categories, payment methods, and currency information;</li>
                <li>Company information, including company name, address, tax identification numbers, and corporate structure;</li>
                <li>Historical financial data spanning all available periods within your Connected Accounts;</li>
                <li>Any other financial, accounting, or business data available through the application programming interfaces of your Connected Accounts; and</li>
                <li>Incremental updates, modifications, and additions to all of the foregoing data as they occur over time.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>2.3 Continuous and Automated Access.</strong> You acknowledge and consent that the Company&apos;s access to your Connected Accounts will be continuous and ongoing for as long as your account with the Service remains active and connected to Third-Party Services. The Company will automatically and periodically retrieve updated data from your Connected Accounts through background synchronization processes, job queues, and workers, which may occur multiple times per day, daily, weekly, or at other intervals determined by the Company or imposed by third-party API rate limits.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>2.4 OAuth and Authentication Tokens.</strong> You authorize the Company to obtain, store, and use OAuth access tokens, refresh tokens, and other authentication credentials necessary to maintain continuous access to your Connected Accounts. You acknowledge that the Company will encrypt and securely store these authentication credentials in accordance with industry standards, but that the Company cannot guarantee absolute security.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>2.5 Data Processing and Analytics.</strong> You authorize the Company to use, process, analyze, aggregate, and transform your Authorized Data to: (a) provide the Service features and functionality; (b) generate financial reports, dashboards, charts, analytics, and insights; (c) calculate financial metrics, ratios, trends, and performance indicators; (d) synchronize and reconcile data across multiple sources; (e) detect anomalies, errors, or inconsistencies in your data; (f) improve, develop, and enhance the Service; (g) provide customer support and troubleshooting; and (h) comply with legal, regulatory, and contractual obligations.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>2.6 Cross-Border Data Transfers.</strong> You explicitly acknowledge and consent that your Authorized Data, including personal information and sensitive financial information, will be transferred to, stored in, processed in, and accessed from jurisdictions outside of your country of residence, including without limitation the United States and other countries where the Company&apos;s service providers, cloud hosting providers, and Third-Party Services are located. You acknowledge that these jurisdictions may have data protection and privacy laws that differ from those in your jurisdiction, and that your data may be subject to access by law enforcement, security agencies, and regulatory authorities in accordance with the laws of such jurisdictions.
              </p>
              <p className="text-muted-foreground">
                <strong>2.7 Duration of Authorization.</strong> This authorization shall remain in effect for as long as your account with the Service remains active and you maintain connections to Third-Party Services, unless and until you revoke this authorization by disconnecting your Connected Accounts or terminating your account with the Service in accordance with the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Acknowledgment of Data Accuracy and Verification Responsibilities</h2>
              <p className="text-muted-foreground mb-2">
                <strong>3.1 Third-Party Data Dependencies.</strong> You acknowledge, understand, and agree that the accuracy, completeness, timeliness, and reliability of all data, reports, analytics, charts, calculations, and insights provided through the Service are entirely dependent upon the accuracy, completeness, timeliness, and reliability of the data provided by your Connected Accounts and other Third-Party Services.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>3.2 No Independent Verification.</strong> You acknowledge and agree that the Company does not independently verify, audit, validate, or guarantee the accuracy of any data obtained from Third-Party Services. The Company acts solely as a data aggregator and processor, not as an auditor, verifier, or guarantor of data accuracy.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>3.3 Potential for Errors.</strong> You acknowledge and accept that errors, omissions, inaccuracies, discrepancies, delays, duplication, data corruption, synchronization failures, and other data quality issues may occur due to numerous factors, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Errors or omissions in data entered into your Connected Accounts;</li>
                <li>Technical errors, bugs, or failures in Third-Party Services or their APIs;</li>
                <li>Network interruptions, timeouts, or connectivity issues;</li>
                <li>API rate limiting, throttling, or access restrictions imposed by Third-Party Services;</li>
                <li>Changes to Third-Party Service APIs, data formats, or authentication protocols;</li>
                <li>Synchronization delays, job processing backlogs, or worker failures;</li>
                <li>Data transformation, mapping, or calculation errors;</li>
                <li>Differences in accounting methods, recognition policies, or categorization between systems;</li>
                <li>Time zone conversion issues or date/time discrepancies; or</li>
                <li>Any other technical, systemic, or human factors affecting data quality.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>3.4 Your Independent Verification Duty.</strong> You acknowledge and agree that YOU ARE SOLELY AND EXCLUSIVELY RESPONSIBLE FOR INDEPENDENTLY VERIFYING THE ACCURACY, COMPLETENESS, AND APPROPRIATENESS OF ALL DATA, REPORTS, ANALYTICS, CALCULATIONS, AND INSIGHTS PROVIDED BY THE SERVICE BEFORE RELYING UPON OR USING SUCH INFORMATION FOR ANY PURPOSE WHATSOEVER. You agree to compare data provided by the Service against your original source records, accounting systems, bank statements, and other authoritative sources to identify and correct any discrepancies.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>3.5 No Substitute for Professional Review.</strong> You acknowledge that the Service is not a substitute for professional accounting, bookkeeping, financial analysis, auditing, or other professional services. You agree to engage qualified professional accountants, auditors, and other advisors to review, verify, and validate all financial information before using such information for tax reporting, financial reporting, regulatory compliance, investor relations, lending applications, or any other purpose where accuracy is critical.
              </p>
              <p className="text-muted-foreground">
                <strong>3.6 Reporting Discrepancies.</strong> You agree to promptly report any data discrepancies, errors, or inconsistencies to the Company so that the Company may investigate and attempt to resolve such issues. However, you acknowledge that the Company may not be able to resolve discrepancies that originate from Third-Party Services or source data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Risk Acknowledgment and Financial Services Disclaimers</h2>
              <p className="text-muted-foreground mb-2">
                <strong>4.1 No Professional Advice.</strong> You expressly acknowledge, understand, and agree that:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>The Company is NOT a licensed financial advisor, certified public accountant, chartered professional accountant, tax professional, attorney, investment advisor, broker-dealer, or any other type of professional advisor;</li>
                <li>The Service does NOT provide and is NOT intended to provide financial advice, accounting advice, tax advice, legal advice, investment advice, or any other form of professional advice;</li>
                <li>No information, data, report, chart, dashboard, analysis, calculation, insight, or communication provided through the Service constitutes or should be construed as professional advice of any kind;</li>
                <li>The Company has NO fiduciary duty, advisory duty, or professional duty of care to you;</li>
                <li>The Service is provided solely for informational, analytical, and data aggregation purposes; and</li>
                <li>You should NOT make any business, financial, tax, legal, or investment decisions based solely on information provided by the Service without consulting qualified professional advisors.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>4.2 Duty to Consult Professionals.</strong> You acknowledge and agree that you have a duty and responsibility to consult with qualified, licensed, and independent professional advisors before making any decisions based on information obtained through the Service, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Certified Public Accountants (CPAs) or Chartered Professional Accountants (CPAs) for accounting, bookkeeping, and financial reporting matters;</li>
                <li>Tax professionals and tax attorneys for tax planning, tax compliance, and tax reporting matters;</li>
                <li>Financial advisors and investment advisors for financial planning and investment decisions;</li>
                <li>Attorneys for legal matters, contract interpretation, and regulatory compliance;</li>
                <li>Business consultants for strategic business decisions; and</li>
                <li>Industry-specific advisors for specialized matters relevant to your business or industry.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>4.3 No Regulatory Oversight.</strong> You acknowledge and understand that the Service is not subject to regulatory oversight by financial services regulators, accounting standards boards, securities regulators, or other professional regulatory bodies. The Company is not registered, licensed, or certified as a financial services provider, accounting firm, investment advisor, or professional services firm. The Service does not undergo regulatory examinations, audits, or quality control reviews by professional regulatory authorities.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>4.4 No Guarantee of Outcomes.</strong> You acknowledge and agree that the Company makes no representations, warranties, guarantees, or promises that use of the Service will:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-fore ground ml-4 mb-2">
                <li>Improve your financial performance, profitability, revenue, cash flow, or business outcomes;</li>
                <li>Reduce your costs, expenses, or tax liability;</li>
                <li>Help you achieve any specific business objectives or financial goals;</li>
                <li>Prevent financial losses, business failures, or adverse outcomes;</li>
                <li>Ensure compliance with applicable laws, regulations, accounting standards, or reporting requirements; or</li>
                <li>Provide any other specific benefit or result.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>4.5 Business and Financial Risks.</strong> You acknowledge and accept that all business decisions, financial decisions, and actions you take are made at your own risk and are your sole responsibility. You acknowledge that financial success depends on numerous factors outside the Company&apos;s control, including market conditions, competitive factors, economic conditions, regulatory changes, customer behavior, operational execution, and countless other variables. Historical data, past performance, trends, and patterns do not predict or guarantee future results.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>4.6 Experimental and Evolving Nature.</strong> You acknowledge that certain features, calculations, algorithms, analytics, and insights provided by the Service may be experimental, developmental, or based on methodologies that are not universally accepted or standardized. The Company may modify, update, or change its methodologies, algorithms, calculations, and features at any time without notice. You agree not to rely on any particular methodology, calculation, or feature remaining unchanged or available.
              </p>
              <p className="text-muted-foreground">
                <strong>4.7 Assumption of Risk.</strong> BY USING THE SERVICE, YOU VOLUNTARILY ASSUME ALL RISKS ASSOCIATED WITH RELIANCE ON DATA, REPORTS, ANALYTICS, AND INSIGHTS PROVIDED BY THE SERVICE. YOU ACKNOWLEDGE THAT YOU ARE MAKING AN INFORMED DECISION TO USE THE SERVICE WITH FULL AWARENESS OF ITS LIMITATIONS, DISCLAIMERS, AND POTENTIAL RISKS.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Regulatory Compliance and Legal Responsibilities</h2>
              <p className="text-muted-foreground mb-2">
                <strong>5.1 Your Sole Responsibility for Compliance.</strong> You acknowledge and agree that you are solely and exclusively responsible for ensuring that your business operations, financial practices, and use of the Service comply with all applicable federal, provincial, state, local, and international laws, regulations, rules, standards, and requirements, including without limitation:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Tax laws and regulations, including income tax, sales tax, use tax, goods and services tax (GST), harmonized sales tax (HST), value-added tax (VAT), payroll tax, and all other applicable taxes;</li>
                <li>Tax filing, reporting, and payment obligations;</li>
                <li>Financial reporting and accounting standards, including International Financial Reporting Standards (IFRS), Generally Accepted Accounting Principles (GAAP), or other applicable accounting frameworks;</li>
                <li>Securities laws and regulations, if applicable to your business;</li>
                <li>Corporate governance requirements;</li>
                <li>Auditing requirements and audit preparation;</li>
                <li>Industry-specific regulations applicable to your business or sector;</li>
                <li>Anti-money laundering (AML) and know-your-customer (KYC) requirements, if applicable;</li>
                <li>Data protection and privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation;</li>
                <li>Consumer protection laws;</li>
                <li>Employment and labor laws; and</li>
                <li>Any other laws, regulations, or requirements applicable to your business, operations, or jurisdiction.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>5.2 No Guarantee of Regulatory Compliance.</strong> You acknowledge and agree that the Company makes no representation, warranty, or guarantee that the Service, or any data, reports, calculations, or features provided by the Service, satisfy, comply with, or meet any specific regulatory, legal, tax, accounting, or reporting requirements applicable to your business. The Service is a general-purpose financial data aggregation and analysis tool and is not designed, certified, or warranted to meet specific regulatory requirements.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>5.3 Tax Compliance.</strong> You acknowledge and agree that you are solely responsible for: (a) determining your tax obligations and liabilities; (b) maintaining adequate books and records for tax purposes; (c) preparing accurate tax returns; (d) filing all required tax returns on time; (e) paying all taxes when due; and (f) complying with all applicable tax laws and regulations. The Service does not prepare tax returns, calculate tax liabilities, or provide tax advice. You should consult with qualified tax professionals regarding all tax matters.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>5.4 Financial Reporting and Audit Obligations.</strong> You acknowledge and agree that you are solely responsible for: (a) preparing accurate financial statements in accordance with applicable accounting standards; (b) ensuring your financial statements and books are audit-ready if subject to audit requirements; (c) engaging qualified auditors to audit your financial statements if required; (d) providing accurate and complete information to your auditors; and (e) complying with all financial reporting obligations to shareholders, lenders, regulators, or other stakeholders.
              </p>
              <p className="text-muted-foreground">
                <strong>5.5 Professional Consultation Required.</strong> You acknowledge that you should consult with legal counsel, regulatory compliance advisors, and other qualified professionals to understand your specific compliance obligations and to ensure that your use of the Service and your business practices comply with all applicable requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Consent to Data Processing and Storage</h2>
              <p className="text-muted-foreground mb-2">
                <strong>6.1 General Consent.</strong> You consent to the collection, use, storage, processing, transmission, disclosure, and retention of your Authorized Data and personal information by the Company and its authorized service providers, subcontractors, and subprocessors in accordance with the Terms of Service, this User Agreement, and applicable privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.2 Processing in Multiple Jurisdictions.</strong> You consent to your Authorized Data and personal information being transferred to, stored in, processed in, and accessed from multiple jurisdictions, including jurisdictions outside of Canada, such as the United States and other countries where our service providers operate. You acknowledge that different jurisdictions may have different levels of data protection, and that your data may be subject to lawful access by courts, law enforcement, and national security authorities in such jurisdictions in accordance with the laws thereof.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.3 Automated Processing.</strong> You consent to automated processing, analysis, aggregation, and transformation of your Authorized Data through software algorithms, background workers, job processing systems, and artificial intelligence or machine learning technologies (if and when implemented).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.4 Data Retention.</strong> You consent to the Company retaining your Authorized Data for as long as your account is active and for a reasonable period thereafter as necessary for legal, regulatory, business, and operational purposes, including backup, disaster recovery, dispute resolution, and compliance with legal obligations. You acknowledge that the Company may be required to retain certain data even after you request deletion, to the extent required or permitted by law.
              </p>
              <p className="text-muted-foreground">
                <strong>6.5 Withdrawal of Consent.</strong> You may withdraw your consent to data processing at any time by disconnecting your Connected Accounts and terminating your account with the Service. However, you acknowledge that withdrawal of consent will prevent the Company from providing the Service to you and may not result in immediate deletion of all your data if the Company is required or permitted to retain such data under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Data Security Risks and Acknowledgments</h2>
              <p className="text-muted-foreground mb-2">
                <strong>7.1 No Absolute Security.</strong> You acknowledge and understand that while the Company implements commercially reasonable security measures to protect your data (including encryption of authentication tokens using AES-256-GCM encryption, secure database storage with access controls, encrypted data transmission using TLS/SSL, and other security practices), NO METHOD OF ELECTRONIC TRANSMISSION, STORAGE, OR PROCESSING IS 100% SECURE. The Company CANNOT and DOES NOT guarantee absolute security of your data.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.2 Internet Transmission Risks.</strong> You acknowledge that data transmitted over the internet, including through APIs, web browsers, and network connections, may be subject to interception, unauthorized access, modification, or loss due to network failures, cyberattacks, hacking attempts, man-in-the-middle attacks, or other security threats beyond the Company&apos;s control.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.3 Your Security Responsibilities.</strong> You acknowledge and agree that you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Maintaining the confidentiality and security of your account credentials, passwords, and authentication information;</li>
                <li>Using strong, unique passwords and changing them regularly;</li>
                <li>Enabling multi-factor authentication if available;</li>
                <li>Not sharing your account credentials with unauthorized third parties;</li>
                <li>Immediately notifying the Company of any unauthorized access, security breach, or suspected compromise of your account;</li>
                <li>Securing your computer, mobile device, and network used to access the Service;</li>
                <li>Keeping your operating system, browser, and security software up to date;</li>
                <li>Being vigilant against phishing attempts, social engineering, and other security threats; and</li>
                <li>Taking all reasonable precautions to protect your account and data.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>7.4 Breach Notification.</strong> You acknowledge that in the event of a data breach that poses a real risk of significant harm to you, the Company will notify you in accordance with applicable law. However, you acknowledge that such notification may be delayed if required by law enforcement or regulatory authorities, or if immediate notification would impede investigation or remediation efforts.
              </p>
              <p className="text-muted-foreground">
                <strong>7.5 Account Monitoring.</strong> You acknowledge that you are responsible for regularly monitoring your account for suspicious activity, unauthorized access, or data discrepancies. You agree to promptly report any security concerns to the Company.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. Electronic Communications Consent</h2>
              <p className="text-muted-foreground mb-2">
                <strong>8.1 Consent to Electronic Communications.</strong> You consent to receive communications from the Company by electronic means, including by email, text message (SMS), push notifications, in-app notifications, dashboard messages, and postings on the Service (&ldquo;Electronic Communications&rdquo;). You agree that all Electronic Communications that the Company provides to you electronically satisfy any legal requirement that such communications be in writing.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.2 Types of Communications.</strong> Electronic Communications may include, without limitation:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Transactional communications related to your account, subscriptions, and use of the Service;</li>
                <li>Service announcements, system notifications, and operational messages;</li>
                <li>Security alerts and breach notifications;</li>
                <li>Billing and payment notifications;</li>
                <li>Changes to the Terms of Service, this User Agreement, or other policies;</li>
                <li>Customer support communications and responses to your inquiries;</li>
                <li>Product updates, new features, and service improvements;</li>
                <li>Educational content, tips, and best practices; and</li>
                <li>Marketing and promotional communications (subject to opt-out as described below).</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>8.3 CASL Compliance (Canada&apos;s Anti-Spam Legislation).</strong> The Company complies with Canada&apos;s Anti-Spam Legislation (CASL). By providing your consent and using the Service, you consent to receive commercial electronic messages from the Company. You may withdraw this consent at any time by following the unsubscribe instructions contained in marketing emails, updating your communication preferences in your account settings, or contacting the Company at the address specified in the Terms of Service. Withdrawal of consent for marketing communications will not affect your receipt of transactional and service-related communications necessary to provide the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.4 Delivery and Receipt.</strong> You acknowledge that Electronic Communications will be sent to the email address or mobile number associated with your account. You are responsible for maintaining current and accurate contact information. Electronic Communications are deemed received when sent by the Company, regardless of whether you actually receive or read them.
              </p>
              <p className="text-muted-foreground">
                <strong>8.5 Opt-Out Limitations.</strong> While you may opt out of marketing and promotional communications, you acknowledge that you cannot opt out of transactional, service-related, legal, or administrative communications while maintaining an active account with the Service. Such communications are necessary to provide the Service and ensure compliance with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Revocation of Access and Authorization</h2>
              <p className="text-muted-foreground mb-2">
                You may revoke the Company&apos;s authorization to access your Connected Accounts at any time by: (a) disconnecting your Connected Accounts within your account settings on the Service; (b) revoking OAuth authorization through the Third-Party Service&apos;s authorization management interface; or (c) terminating your account with the Service in accordance with the Terms of Service.
              </p>
              <p className="text-muted-foreground mb-2">
                You acknowledge and agree that revoking access will immediately prevent the Service from retrieving updated data from your Connected Accounts, which will result in: (a) inability to synchronize new or updated financial data; (b) reports and analytics based on stale or outdated data; (c) loss of functionality and features that depend on current data; and (d) potential inability to use the Service effectively or at all.
              </p>
              <p className="text-muted-foreground">
                Revocation of access does not automatically delete data previously collected and stored by the Company. To request deletion of your data, you must separately request data deletion in accordance with the Terms of Service and applicable privacy laws. The Company may retain certain data as permitted or required by law even after you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">10. Entire Agreement and Modifications</h2>
              <p className="text-muted-foreground mb-2">
                This User Agreement, together with the Terms of Service and any other legal notices or policies published by the Company, constitutes the entire agreement between you and the Company regarding the subject matter hereof and supersedes all prior understandings and agreements, whether written or oral, with respect to such subject matter.
              </p>
              <p className="text-muted-foreground mb-2">
                The Company may modify this User Agreement at any time in accordance with the modification procedures specified in the Terms of Service. Your continued use of the Service after any modifications constitutes your acceptance of the modified User Agreement.
              </p>
              <p className="text-muted-foreground">
                If you do not agree to any modifications to this User Agreement, you must stop using the Service and terminate your account in accordance with the Terms of Service.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Acknowledgment and Acceptance</h3>
              <p className="text-xs text-muted-foreground mb-2">
                BY CLICKING &ldquo;I ACCEPT&rdquo;, CONNECTING YOUR ACCOUNTING PLATFORM, OR USING THE SERVICE, YOU ACKNOWLEDGE AND CONFIRM THAT:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground ml-4 mb-3">
                <li>You have carefully read, understood, and agree to be bound by this entire User Agreement and the Terms of Service;</li>
                <li>You provide explicit and informed consent to all data access, collection, processing, storage, and transfer activities described herein;</li>
                <li>You acknowledge and accept all risks, limitations, and disclaimers set forth in this User Agreement;</li>
                <li>You understand your responsibilities for data verification, regulatory compliance, and professional consultation;</li>
                <li>You are making a voluntary and informed decision to use the Service with full awareness of its limitations and your own responsibilities; and</li>
                <li>You have the legal authority and capacity to enter into this binding agreement.</li>
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
