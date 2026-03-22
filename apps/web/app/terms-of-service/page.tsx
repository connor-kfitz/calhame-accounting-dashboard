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
            <strong>Effective Date:</strong> March 19, 2026
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-sm">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Introduction and Acceptance</h2>
              <p className="text-muted-foreground mb-2">
                Welcome to Calhame Financial (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;, &ldquo;Agreement&rdquo;) constitute a legally binding agreement between you (whether personally or on behalf of an entity, &ldquo;you&rdquo;, &ldquo;your&rdquo;, or &ldquo;User&rdquo;) and Calhame Financial governing your access to and use of our financial data aggregation and analysis platform, including our CFO dashboard application and all related services, software, data, and content (collectively, the &ldquo;Service&rdquo; or &ldquo;Calhame CFO&rdquo;).
              </p>
              <p className="text-muted-foreground mb-2">
                BY CLICKING &ldquo;I ACCEPT&rdquo;, ACCESSING, OR USING THE SERVICE, YOU REPRESENT AND WARRANT THAT: (A) YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS; (B) YOU ARE OF LEGAL AGE TO FORM A BINDING CONTRACT WITH THE COMPANY; AND (C) YOU HAVE THE AUTHORITY TO ENTER INTO THESE TERMS PERSONALLY OR ON BEHALF OF THE ENTITY YOU REPRESENT. IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO ACCESS OR USE THE SERVICE AND MUST IMMEDIATELY CEASE ALL USE.
              </p>
              <p className="text-muted-foreground">
                These Terms apply to all users of the Service, including without limitation users who are browsers, customers, merchants, vendors, and/or contributors of content. Please read these Terms carefully before accessing or using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
              <p className="text-muted-foreground mb-2">
                The Service provides cloud-based financial data aggregation, synchronization, and analysis tools designed to assist businesses in monitoring and analyzing their financial performance. The Service connects to third-party accounting platforms, including but not limited to Intuit QuickBooks and related APIs (&ldquo;Third-Party Platforms&rdquo;), to retrieve, aggregate, and process financial data including revenue transactions, expense transactions, cost of goods sold (COGS), customer information, vendor information, and related financial metrics (&ldquo;Financial Data&rdquo;).
              </p>
              <p className="text-muted-foreground mb-2">
                Data synchronization is performed asynchronously through background processing systems, job queues, and workers (&ldquo;Workers&rdquo; or &ldquo;Background Jobs&rdquo;). The Service stores synchronized Financial Data in secure databases and presents aggregated analytics, reports, charts, and dashboards to users through a web-based interface.
              </p>
              <p className="text-muted-foreground mb-2">
                The Company reserves the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, including without limitation the availability of any feature, database, or content. The Company may also impose limits on certain features or restrict access to parts or all of the Service without notice or liability.
              </p>
              <p className="text-muted-foreground">
                <strong>The Service is provided for informational and analytical purposes only. The Service does not provide financial advice, tax advice, accounting advice, legal advice, or investment advice. You should consult with qualified professional advisors before making any business, financial, legal, or tax decisions based on information obtained through the Service.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Eligibility</h2>
              <p className="text-muted-foreground mb-2">
                You must be at least eighteen (18) years of age, or the age of legal majority in your jurisdiction of residence (whichever is greater), and possess the legal authority and capacity to enter into a binding contract to use the Service. If you are entering into these Terms on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms, and in such case, &ldquo;you&rdquo; and &ldquo;your&rdquo; shall refer to such entity.
              </p>
              <p className="text-muted-foreground mb-2">
                By using the Service, you represent and warrant that you meet all eligibility requirements. If you do not meet these requirements, you must not access or use the Service.
              </p>
              <p className="text-muted-foreground">
                The Service is intended for use by businesses and individuals located in jurisdictions where such use is lawful. You are responsible for compliance with all applicable local, provincial, state, national, and international laws, treaties, and regulations in connection with your use of the Service, including without limitation those related to data privacy, international communications, and the transmission of technical or personal data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. User Accounts and Registration</h2>
              <p className="text-muted-foreground mb-2">
                To access certain features of the Service, you must register for an account (&ldquo;Account&rdquo;). When you register for an Account, you agree to: (a) provide accurate, current, and complete information about yourself as prompted by the registration process; (b) maintain and promptly update your Account information to keep it accurate, current, and complete; (c) maintain the security and confidentiality of your login credentials and restrict access to your Account and your computer or mobile device; (d) promptly notify the Company if you discover or otherwise suspect any unauthorized access to or use of your Account or any security breach; and (e) take responsibility for all activities that occur under your Account and accept all risks of unauthorized access.
              </p>
              <p className="text-muted-foreground mb-2">
                You are solely responsible for safeguarding your password and any other credentials used to access the Service. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your Account, whether or not you have authorized such activities or actions. You will immediately notify the Company of any unauthorized use of your Account.
              </p>
              <p className="text-muted-foreground">
                The Company reserves the right to suspend or terminate your Account at any time for any reason, including if any information provided during the registration process or thereafter proves to be inaccurate, false, outdated, or incomplete, or if you violate any provision of these Terms. You may not transfer, sell, or otherwise convey your Account to any third party without the Company&apos;s prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Electronic Agreement and Acceptance</h2>
              <p className="text-muted-foreground mb-2">
                You acknowledge and agree that by clicking &ldquo;I Accept&rdquo;, &ldquo;I Agree&rdquo;, or similar buttons or links as may be designated by the Company to show your approval of these Terms, or by accessing or using the Service, you are entering into a legally binding agreement with the Company. You hereby agree to the use of electronic communication in order to enter into contracts, place orders, and create other records, and to the electronic delivery of notices, policies, and records of transactions initiated or completed through the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                Furthermore, you hereby waive any rights or requirements under any laws or regulations in any jurisdiction that require an original (non-electronic) signature or delivery or retention of non-electronic records, to the extent permitted under applicable law. You agree that your electronic acceptance of these Terms shall have the same legal effect as if you had physically signed a written agreement.
              </p>
              <p className="text-muted-foreground">
                This electronic agreement complies with applicable electronic signature legislation, including without limitation the Personal Information Protection and Electronic Documents Act (Canada), the Uniform Electronic Commerce Act (Ontario), and similar provincial and federal legislation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Subscription, Fees, and Payment Terms</h2>
              <p className="text-muted-foreground mb-2">
                <strong>6.1 Subscription Plans.</strong> The Service is offered on a subscription basis with various subscription plans (&ldquo;Subscription Plans&rdquo;). The specific features, functionality, limitations, and pricing for each Subscription Plan are described on our website or within the Service. By subscribing to the Service, you agree to pay all applicable fees for the Subscription Plan you select in accordance with the payment terms presented to you during the subscription process.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.2 Payment Authorization.</strong> By providing a payment method (including credit card, debit card, or other approved payment method), you: (a) represent that you are authorized to use the designated payment method; (b) authorize the Company (or its third-party payment processor) to charge your payment method for all fees payable by you under these Terms; (c) authorize the Company (or its third-party payment processor) to charge your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you cancel the applicable subscription; and (d) agree to promptly update your Account information with any changes (for example, a change in your billing address or credit card expiration date) that may occur.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.3 Subscription Billing and Renewal.</strong> Subscription fees are billed in advance on a recurring basis (monthly, annually, or as otherwise specified in your Subscription Plan). Your subscription will automatically renew at the end of each billing period unless you cancel your subscription before the renewal date. You acknowledge and agree that your payment method will be automatically charged the applicable subscription fee for each renewal period, plus any applicable taxes, unless you cancel your subscription in accordance with Section 6.5.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.4 Fee Changes.</strong> The Company reserves the right to change subscription fees at any time upon at least thirty (30) days&apos; prior written notice to you. Fee changes will take effect at the start of the next subscription period following the date of the fee change notification. Your continued use of the Service after the fee change comes into effect constitutes your agreement to pay the modified fees. If you do not agree to the fee change, you must cancel your subscription before the new fees take effect.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.5 Cancellation.</strong> You may cancel your subscription at any time by following the cancellation procedures within your Account settings or by contacting the Company at the address specified in Section 28. Cancellation will be effective at the end of your then-current billing period, and you will not receive a refund or credit for any fees already paid for the current billing period. Following cancellation, your access to the Service will continue until the end of your current billing period, after which your access will be terminated.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.6 Free Trials.</strong> If you subscribe to the Service through a free trial, you will have access to the Service free of charge for the trial period specified at the time of registration. At the end of the free trial period, you will be automatically charged the applicable subscription fees unless you cancel your subscription before the trial period ends. The Company reserves the right, in its absolute discretion, to determine your eligibility for a free trial and to withdraw or modify a free trial at any time without prior notice and with no liability.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.7 No Refunds.</strong> EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS OR AS REQUIRED BY APPLICABLE LAW, ALL FEES ARE NON-REFUNDABLE. NO REFUNDS OR CREDITS WILL BE PROVIDED FOR PARTIAL MONTHS OR YEARS OF SERVICE, UPGRADES OR DOWNGRADES, OR FOR PERIODS IN WHICH YOUR ACCOUNT IS INACTIVE OR YOU DO NOT USE THE SERVICE. IF YOU CANCEL YOUR SUBSCRIPTION, YOU WILL NOT RECEIVE A REFUND FOR ANY FEES ALREADY PAID.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>6.8 Late Payment; Suspension.</strong> If any fees are past due, in addition to any other rights or remedies available to the Company, the Company may suspend or terminate your access to the Service without liability. You agree to pay all costs and expenses incurred by the Company in collecting past due amounts, including reasonable attorneys&apos; fees and court costs.
              </p>
              <p className="text-muted-foreground">
                <strong>6.9 Taxes.</strong> All fees are exclusive of any applicable federal, provincial, state, local, or other governmental sales, goods and services, harmonized, value-added, or other taxes, levies, or duties (collectively, &ldquo;Taxes&rdquo;). You are responsible for paying all Taxes associated with your purchase, except for Taxes based on the Company&apos;s net income. If the Company has a legal obligation to pay or collect Taxes for which you are responsible, the appropriate amount will be invoiced to and paid by you, unless you provide the Company with a valid tax exemption certificate authorized by the appropriate taxing authority.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Third-Party Integrations and Dependencies</h2>
              <p className="text-muted-foreground mb-2">
                <strong>7.1 Third-Party Services.</strong> The Service integrates with and depends upon third-party services, platforms, and application programming interfaces, including without limitation Intuit QuickBooks, Intuit APIs, Clerk authentication services, and other third-party accounting and financial data providers (collectively, &ldquo;Third-Party Services&rdquo;). The availability, functionality, accuracy, and performance of the Service is dependent upon the continued availability and proper functioning of these Third-Party Services.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.2 Authorization and OAuth.</strong> By connecting your Account to Third-Party Services, you explicitly authorize and direct the Company to: (a) access your account(s) with the Third-Party Services using OAuth 2.0 or other authorized authentication protocols; (b) retrieve, collect, and store Financial Data from your Third-Party Services accounts, including without limitation revenue transactions, expense transactions, cost of goods sold transactions, customer information, vendor information, account balances, and related financial data; (c) continuously and automatically synchronize such data on a recurring basis; and (d) use, process, analyze, and display such data within the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.3 Third-Party Terms and Policies.</strong> Your use of Third-Party Services in connection with the Service is subject to the terms of service, privacy policies, and other agreements governing your use of such Third-Party Services. You acknowledge and agree that you are solely responsible for complying with all terms and conditions imposed by Third-Party Services, and that the Company is not a party to and has no responsibility for such third-party agreements. You further acknowledge that the Third-Party Services may change their terms, policies, APIs, or functionality at any time, which may impact the availability or functionality of the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.4 No Control Over Third-Party Services.</strong> The Company does not control, endorse, sponsor, recommend, or otherwise accept responsibility for any Third-Party Services. The Company makes no representations, warranties, or guarantees regarding the availability, accuracy, reliability, completeness, or timeliness of data obtained from Third-Party Services. You acknowledge and agree that: (a) Third-Party Services may experience downtime, service interruptions, API rate limiting, or other technical issues that may temporarily or permanently affect the Service&apos;s ability to retrieve or synchronize data; (b) data obtained from Third-Party Services may be delayed, incomplete, inaccurate, or contain errors; and (c) Third-Party Services may modify, restrict, or terminate access to their services or APIs at any time.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.5 No Liability for Third-Party Acts.</strong> THE COMPANY SHALL HAVE NO LIABILITY WHATSOEVER FOR ANY ACTS, OMISSIONS, ERRORS, FAILURES, INTERRUPTIONS, DELAYS, INACCURACIES, OR DEFECTS IN DATA OR SERVICES PROVIDED BY THIRD-PARTY SERVICES, OR FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM ANY OF THE FOREGOING. Your sole remedy for any problems or dissatisfaction with Third-Party Services is to disconnect from such Third-Party Services or to cease using the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>7.6 Revocation of Access.</strong> You may revoke the Company&apos;s access to your Third-Party Services accounts at any time by following the procedures provided by the applicable Third-Party Service or by disconnecting the integration within your Account settings. You acknowledge that revoking access will prevent the Service from retrieving updated Financial Data and may result in loss of functionality or the inability to provide certain features of the Service.
              </p>
              <p className="text-muted-foreground">
                <strong>7.7 Third-Party Fees.</strong> You are solely responsible for any fees, charges, or costs imposed by Third-Party Services in connection with your use of such services. The Company is not responsible for and will not reimburse you for any third-party fees.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. Data Collection, Use, Privacy, and Protection</h2>
              <p className="text-muted-foreground mb-2">
                <strong>8.1 Data Collection.</strong> The Company collects, stores, and processes Financial Data obtained from Third-Party Services, including without limitation: revenue transactions (invoices, sales receipts, payments); expense transactions (bills, expenses, checks, credit card charges); cost of goods sold transactions; customer names and identifiers; vendor names and identifiers; account information; transaction dates, amounts, and descriptions; and related financial metadata. The Company also collects user account information, authentication credentials (encrypted), usage data, and technical information about your use of the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.2 Data Use.</strong> The Company uses collected data to: (a) provide, operate, maintain, and improve the Service; (b) synchronize and aggregate Financial Data from Third-Party Services; (c) generate reports, analytics, charts, dashboards, and financial insights; (d) process background sync jobs and workers; (e) communicate with you about the Service; (f) detect, prevent, and address technical issues, fraud, or security vulnerabilities; (g) enforce these Terms; and (h) comply with applicable legal obligations.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.3 PIPEDA Compliance.</strong> The Company complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation in Canada. The Company collects, uses, and discloses personal information only for the purposes identified in these Terms or as otherwise permitted or required by law. You have the right to access, correct, and request deletion of your personal information, subject to certain legal exceptions. To exercise these rights, contact us at the address specified in Section 28.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.4 Cross-Border Data Transfers.</strong> You acknowledge and consent that your Financial Data and personal information may be transferred to, stored in, and processed in jurisdictions outside of Canada, including without limitation the United States, where our Third-Party Services providers, cloud hosting providers, and other service providers are located. These jurisdictions may have different data protection laws than Canada, and your data may be subject to access by law enforcement and governmental authorities in accordance with the laws of such jurisdictions. By using the Service, you consent to such cross-border transfers.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.5 Data Security.</strong> The Company implements commercially reasonable technical, administrative, and physical security measures designed to protect your data from unauthorized access, use, disclosure, alteration, or destruction, including without limitation: encryption of authentication tokens and sensitive credentials using AES-256-GCM encryption; secure database storage with access controls; encrypted data transmission using TLS/SSL; and regular security assessments. However, no method of electronic transmission or storage is 100% secure, and the Company cannot guarantee absolute security.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.6 Data Retention.</strong> The Company retains your Financial Data for as long as your Account is active and for a reasonable period thereafter as necessary to provide the Service, comply with legal obligations, resolve disputes, enforce agreements, and maintain business records. You may request deletion of your data by terminating your Account and contacting us at the address specified in Section 28, subject to our legal retention obligations.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.7 Breach Notification.</strong> In the event of a data breach that poses a real risk of significant harm to you, the Company will notify you and any applicable regulatory authorities in accordance with PIPEDA and other applicable breach notification requirements. Such notification will be provided without unreasonable delay after the Company becomes aware of the breach.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>8.8 Your Data Rights.</strong> Subject to applicable law, you have the right to: (a) access your personal information that the Company holds; (b) request correction of inaccurate personal information; (c) request deletion of your personal information (subject to legal retention requirements); (d) object to or restrict certain processing of your personal information; and (e) export your Financial Data in a portable format. To exercise these rights, contact us at the address specified in Section 28.
              </p>
              <p className="text-muted-foreground">
                <strong>8.9 Subprocessors.</strong> The Company may engage third-party service providers, subcontractors, and subprocessors to assist in providing the Service, including without limitation cloud hosting providers, database providers, authentication services, API providers, and analytics services. The Company ensures that all subprocessors are bound by data protection obligations consistent with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Data Synchronization and Processing</h2>
              <p className="text-muted-foreground mb-2">
                Data synchronization between Third-Party Services and the Service is performed asynchronously through background processing systems, job queues (including BullMQ and Redis), and workers. You acknowledge and agree that: (a) Financial Data may not be synchronized in real-time and may be subject to delays ranging from minutes to hours or longer; (b) synchronization failures, delays, discrepancies, or errors may occur due to Third-Party Service availability, API rate limits, network issues, job processing backlogs, or technical failures; (c) the Company is not liable for temporary data inconsistencies, synchronization delays, or failures; and (d) you are responsible for independently verifying the accuracy and completeness of all Financial Data displayed in the Service.
              </p>
              <p className="text-muted-foreground mb-2">
                The Company may implement rate limiting, throttling, or other restrictions on data synchronization frequency to comply with Third-Party Service requirements, manage system load, or ensure service stability. The Company reserves the right to modify synchronization schedules, frequencies, or methods at any time without notice.
              </p>
              <p className="text-muted-foreground">
                You acknowledge that the Service relies on the accuracy, completeness, and timeliness of data provided by Third-Party Services. The Company does not independently verify, audit, or validate data obtained from Third-Party Services and makes no representations or warranties regarding the accuracy or reliability of such data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">10. User Responsibilities and Prohibited Conduct</h2>
              <p className="text-muted-foreground mb-2">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>In any way that violates any applicable federal, provincial, state, local, or international law or regulation;</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way;</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any &ldquo;junk mail,&rdquo; &ldquo;chain letter,&rdquo; &ldquo;spam,&rdquo; or any other similar solicitation;</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity;</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service, or which, as determined by us, may harm the Company or users of the Service or expose them to liability;</li>
                <li>To use the Service in any manner that could disable, overburden, damage, or impair the Service or interfere with any other party&apos;s use of the Service;</li>
                <li>To use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service, without the Company&apos;s prior written consent;</li>
                <li>To use any manual process to monitor or copy any of the material on the Service or for any other unauthorized purpose without the Company&apos;s prior written consent;</li>
                <li>To use any device, software, or routine that interferes with the proper working of the Service;</li>
                <li>To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful;</li>
                <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service;</li>
                <li>To attack the Service via a denial-of-service attack or a distributed denial-of-service attack;</li>
                <li>To reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Service or any part thereof;</li>
                <li>To misuse Third-Party Service APIs or integrations, including circumventing rate limits, violating third-party terms of service, or accessing data beyond the scope of your authorization;</li>
                <li>To use the Service to engage in money laundering, terrorist financing, or any other illegal financial activity;</li>
                <li>To share, sell, or otherwise provide your Account credentials or access to the Service to third parties without authorization; or</li>
                <li>To otherwise attempt to interfere with the proper working of the Service.</li>
              </ul>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality and security of your Account credentials and for all activities conducted through your Account. You agree to immediately notify the Company of any unauthorized use of your Account or any other breach of security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">11. Export Control and Sanctions Compliance</h2>
              <p className="text-muted-foreground mb-2">
                The Service and certain Third-Party Services integrated with the Service (including Intuit services) may be subject to export control laws and economic sanctions regulations of Canada, the United States, and other applicable jurisdictions, including the Export and Import Permits Act (Canada), the Special Economic Measures Act (Canada), the U.S. Export Administration Regulations, and the regulations administered by the U.S. Office of Foreign Assets Control (OFAC).
              </p>
              <p className="text-muted-foreground mb-2">
                You represent and warrant that: (a) you are not located in, under the control of, or a national or resident of any country subject to comprehensive trade embargoes or sanctions (including Cuba, Iran, North Korea, Syria, or the Crimea region of Ukraine); (b) you are not identified on any government list of prohibited or restricted parties, including the Consolidated Canadian Autonomous Sanctions List, the U.S. Treasury Department&apos;s Specially Designated Nationals List, or the U.S. Commerce Department&apos;s Denied Persons List; (c) you will not use the Service in violation of any export control or sanctions laws; and (d) you will not provide access to the Service to any person or entity who is prohibited from receiving such access under applicable export control or sanctions laws.
              </p>
              <p className="text-muted-foreground">
                The Company reserves the right to suspend or terminate your access to the Service immediately and without notice if the Company determines, in its sole discretion, that providing such access may violate applicable export control or sanctions laws, or if required by law or government authority.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">12. Audit and Monitoring Rights</h2>
              <p className="text-muted-foreground mb-2">
                The Company reserves the right, but not the obligation, to monitor your use of the Service to ensure compliance with these Terms, detect fraud or security violations, troubleshoot technical issues, and improve the Service. Such monitoring may include reviewing usage logs, API calls, data synchronization activities, and Account activities.
              </p>
              <p className="text-muted-foreground mb-2">
                Upon reasonable notice, the Company may audit your use of the Service to verify compliance with these Terms. You agree to cooperate with such audits and to provide the Company with access to relevant records and information. If an audit reveals non-compliance with these Terms, you agree to promptly remedy such non-compliance and reimburse the Company for the reasonable costs of the audit.
              </p>
              <p className="text-muted-foreground">
                The Company will treat audit results as your Confidential Information (as defined below) and will not disclose audit results to third parties except as required by law or to enforce these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">13. Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-2">
                <strong>13.1 Company Ownership.</strong> The Service and its entire contents, features, and functionality (including but not limited to all information, software, code, algorithms, text, displays, images, video, audio, design, selection and arrangement, and the &ldquo;look and feel&rdquo; of the Service) are owned by the Company, its licensors, or other providers of such material and are protected by Canada and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>13.2 Limited License.</strong> Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service solely for your internal business purposes. This license does not include any right to: (a) resell or make commercial use of the Service or its contents; (b) make derivative works based on the Service; (c) download or copy account information for the benefit of another party; (d) use any data mining, robots, or similar data gathering or extraction methods; (e) use the Service in any way that competes with the Company; or (f) use the Service other than for its intended purpose.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>13.3 User Data Ownership.</strong> As between you and the Company, you retain all ownership rights in and to your Financial Data obtained from Third-Party Services. By using the Service, you grant the Company a worldwide, non-exclusive, royalty-free license to use, copy, store, transmit, display, and process your Financial Data solely to the extent necessary to provide the Service, generate reports and analytics, and fulfill the Company&apos;s obligations under these Terms. This license terminates when you delete your data or terminate your Account, except that the Company may retain copies of your data as required by law or for legitimate business purposes such as backup, disaster recovery, or compliance with legal obligations.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>13.4 Feedback.</strong> If you provide the Company with any feedback, suggestions, ideas, or recommendations regarding the Service (&ldquo;Feedback&rdquo;), you hereby assign to the Company all rights in such Feedback and agree that the Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. The Company will treat any Feedback you provide as non-confidential and non-proprietary.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>13.5 Trademarks.</strong> The Company name, the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans mentioned in the Service are the trademarks of their respective owners.
              </p>
              <p className="text-muted-foreground">
                <strong>13.6 Copyright Infringement.</strong> If you believe that any content available through the Service infringes your copyright, you may notify the Company at the address specified in Section 28, providing: (a) identification of the copyrighted work claimed to have been infringed; (b) identification of the allegedly infringing material; (c) your contact information; (d) a statement that you have a good faith belief that use of the material is not authorized; (e) a statement that the information in the notification is accurate; and (f) your physical or electronic signature.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">14. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-2">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. THE COMPANY SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
              </p>
              <p className="text-muted-foreground mb-2">
                WITHOUT LIMITING THE FOREGOING, THE COMPANY MAKES NO WARRANTY OR REPRESENTATION THAT: (A) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (B) THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICE WILL BE ACCURATE, COMPLETE, RELIABLE, OR CURRENT; (C) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS; (D) ANY ERRORS IN THE SERVICE WILL BE CORRECTED; (E) THE SERVICE WILL BE COMPATIBLE WITH YOUR SYSTEMS OR THIRD-PARTY SERVICES; OR (F) DATA OBTAINED FROM THIRD-PARTY SERVICES WILL BE ACCURATE, COMPLETE, OR FREE FROM ERRORS.
              </p>
              <p className="text-muted-foreground mb-2">
                THE COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICE OR ANY HYPERLINKED WEBSITE, AND THE COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              </p>
              <p className="text-muted-foreground">
                NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE COMPANY OR THROUGH THE SERVICE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS. YOU ASSUME ALL RISK FOR ANY DAMAGE THAT MAY RESULT FROM YOUR USE OF OR ACCESS TO THE SERVICE, YOUR DEALING WITH ANY OTHER SERVICE USER, AND ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">15. Financial Services Disclaimers</h2>
              <p className="text-muted-foreground mb-2">
                <strong>THE SERVICE IS PROVIDED FOR INFORMATIONAL AND ANALYTICAL PURPOSES ONLY. THE COMPANY IS NOT A LICENSED FINANCIAL ADVISOR, CERTIFIED PUBLIC ACCOUNTANT, TAX PROFESSIONAL, INVESTMENT ADVISOR, BROKER-DEALER, OR LAW FIRM. THE SERVICE DOES NOT PROVIDE AND IS NOT INTENDED TO PROVIDE FINANCIAL ADVICE, ACCOUNTING ADVICE, TAX ADVICE, LEGAL ADVICE, INVESTMENT ADVICE, OR ANY OTHER PROFESSIONAL ADVICE.</strong>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>15.1 No Professional Advice.</strong> Nothing contained in the Service constitutes or should be construed as professional advice of any kind. You should not act or refrain from acting on the basis of any information, analysis, report, or dashboard provided through the Service without consulting with qualified professional advisors, including certified public accountants, tax professionals, financial advisors, investment advisors, or attorneys who are licensed to provide advice in your jurisdiction.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>15.2 No Fiduciary Duty.</strong> The Company does not act as a fiduciary or advisor to you, and no fiduciary relationship or duty is created by these Terms or your use of the Service. The Company has no obligation to verify the accuracy, completeness, or utility of any information provided through the Service, and you are solely responsible for conducting your own due diligence and verification.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>15.3 No Guarantee of Outcomes.</strong> The Company makes no representations, warranties, or guarantees that use of the Service will improve your financial performance, profitability, cash flow, or business outcomes. Financial success depends on numerous factors outside the Company&apos;s control, and past performance or historical data does not guarantee future results.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>15.4 Independent Verification Required.</strong> You acknowledge and agree that all Financial Data, reports, analytics, charts, calculations, and insights provided through the Service are for informational purposes only and may contain errors, omissions, or inaccuracies. You are solely responsible for independently verifying the accuracy and completeness of all data and for consulting with qualified professionals before making any business, financial, tax, legal, or investment decisions.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>15.5 Regulatory Compliance.</strong> You are solely responsible for ensuring that your use of the Service and any decisions you make based on information obtained through the Service comply with all applicable laws, regulations, and reporting requirements, including without limitation tax laws, securities laws, accounting standards, and financial reporting requirements. The Company makes no representation that the Service satisfies any specific regulatory, compliance, or reporting requirements applicable to your business.
              </p>
              <p className="text-muted-foreground">
                <strong>15.6 Reports are Informational Only.</strong> All reports, dashboards, analytics, calculations, and insights generated by the Service are provided for informational purposes only and should not be relied upon as the sole basis for any business, financial, tax, or legal decision. The Company is not responsible for any decisions you make based on information provided by the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">16. Beta and Experimental Features</h2>
              <p className="text-muted-foreground mb-2">
                From time to time, the Company may make available certain features, functionality, or services that are designated as beta, pilot, experimental, preview, early access, or similar designations (&ldquo;Beta Features&rdquo;). Beta Features are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for testing and evaluation purposes only.
              </p>
              <p className="text-muted-foreground mb-2">
                Beta Features may not be fully tested, may contain bugs or errors, may not be as reliable as generally available features, and may be modified or discontinued at any time without notice. THE COMPANY MAKES NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES OF ANY KIND WITH RESPECT TO BETA FEATURES. YOUR USE OF BETA FEATURES IS ENTIRELY AT YOUR OWN RISK.
              </p>
              <p className="text-muted-foreground">
                Beta Features are provided without any service level commitments, support commitments, or guarantees of continued availability. The Company may require you to opt-in or separately agree to additional terms before accessing Beta Features. You agree not to rely on Beta Features for production use or for any purpose where failure could result in financial loss, business interruption, or other harm.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">17. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-2">
                <strong>17.1 Exclusion of Damages.</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, REVENUE, BUSINESS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF OR RELATING TO:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Your use or inability to use the Service;</li>
                <li>Any interruption, suspension, or termination of the Service;</li>
                <li>Any errors, omissions, or inaccuracies in Financial Data or content;</li>
                <li>Any reliance on data, reports, analytics, or information provided by the Service;</li>
                <li>Any business decisions, financial decisions, or actions taken based on the Service;</li>
                <li>Any unauthorized access to or alteration of your transmissions or data;</li>
                <li>Any data loss, corruption, or deletion;</li>
                <li>Any failure to synchronize data or delays in data synchronization;</li>
                <li>Any Third-Party Service failures, interruptions, errors, or unavailability;</li>
                <li>Any breach of Third-Party Service terms or policies;</li>
                <li>Any statements or conduct of any third party on or through the Service;</li>
                <li>Any failure to comply with tax, accounting, legal, or regulatory requirements;</li>
                <li>Any business interruption, loss of customers, or loss of business opportunities; or</li>
                <li>Any other matter relating to the Service.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                THE FOREGOING LIMITATIONS APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>17.2 Cap on Liability.</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICE, WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, SHALL IN NO EVENT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT OF FEES ACTUALLY PAID BY YOU TO THE COMPANY IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE LIABILITY; OR (B) ONE HUNDRED CANADIAN DOLLARS (CAD $100).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>17.3 Multiple Claims.</strong> The existence of one or more claims under these Terms will not increase the Company&apos;s liability beyond the cap specified in Section 17.2. In no event shall the Company&apos;s total aggregate liability for all claims exceed the amount specified in Section 17.2, regardless of the number of claims, theories of liability, or parties asserting claims.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>17.4 Essential Purpose.</strong> You acknowledge and agree that the limitations of liability set forth in this Section 17 are fundamental elements of the basis of the bargain between you and the Company, and that the Company would not be able to provide the Service on an economically reasonable basis without such limitations. These limitations will apply even if any limited remedy fails of its essential purpose.
              </p>
              <p className="text-muted-foreground">
                <strong>17.5 Exceptions.</strong> Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations may not apply to you. In such jurisdictions, the Company&apos;s liability shall be limited to the greatest extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">18. Force Majeure</h2>
              <p className="text-muted-foreground mb-2">
                The Company shall not be liable for any delay or failure to perform any obligation under these Terms where the delay or failure results from any cause beyond the Company&apos;s reasonable control, including without limitation acts of God, earthquakes, floods, fires, epidemics, pandemics, labor disputes or other industrial disturbances, systemic electrical, telecommunications, or other utility failures, war, terrorism, civil unrest, riots, governmental actions, Third-Party Service failures or interruptions, internet outages, cyberattacks, denial of service attacks, or any other events outside the Company&apos;s reasonable control (each, a &ldquo;Force Majeure Event&rdquo;).
              </p>
              <p className="text-muted-foreground mb-2">
                In the event of a Force Majeure Event, the Company&apos;s performance under these Terms shall be suspended for the duration of the Force Majeure Event, and the Company shall be granted a reasonable extension of time to perform its obligations. The Company will use commercially reasonable efforts to mitigate the effects of any Force Majeure Event and to resume performance as soon as reasonably practicable.
              </p>
              <p className="text-muted-foreground">
                If a Force Majeure Event continues for more than thirty (30) consecutive days, either party may terminate these Terms upon written notice to the other party, and neither party shall have any further liability to the other (except for obligations accrued prior to termination and obligations that survive termination).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">19. Indemnification</h2>
              <p className="text-muted-foreground mb-2">
                <strong>19.1 Your Indemnification Obligations.</strong> You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, service providers, and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any and all claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees and court costs) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>Your violation of these Terms or any applicable law or regulation;</li>
                <li>Your use or misuse of the Service;</li>
                <li>Your Financial Data or any content you submit, post, or transmit through the Service;</li>
                <li>Your violation of any third-party rights, including without limitation any intellectual property rights, privacy rights, or contractual rights;</li>
                <li>Your violation of any Third-Party Service terms or policies;</li>
                <li>Your breach of any representations or warranties made in these Terms;</li>
                <li>Any business, financial, tax, or legal decisions you make based on the Service;</li>
                <li>Your failure to comply with applicable tax, accounting, securities, or other regulatory requirements;</li>
                <li>Any claim that your use of the Service caused harm, damage, or injury to any third party; or</li>
                <li>Your negligence or willful misconduct.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>19.2 Defense and Settlement.</strong> The Company shall have the right, at its option, to assume the exclusive defense and control of any matter subject to indemnification by you, and you shall cooperate fully with the Company in asserting any available defenses. You agree not to settle any claim subject to indemnification without the Company&apos;s prior written consent. The Company&apos;s exercise of its right to defend does not relieve you of your indemnification obligations.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>19.3 Notice and Cooperation.</strong> The Company will provide you with prompt written notice of any claim subject to indemnification; provided, however, that failure to provide such notice shall not relieve you of your indemnification obligations except to the extent you are materially prejudiced by such failure. You agree to cooperate fully with the Company in the defense of any claim and to provide the Company with all information and assistance reasonably requested.
              </p>
              <p className="text-muted-foreground">
                <strong>19.4 Costs and Expenses.</strong> Your indemnification obligations include reimbursement of all reasonable costs and expenses (including reasonable attorneys&apos; fees, expert fees, and court costs) incurred by the Company in defending against indemnified claims, regardless of whether litigation is commenced.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">20. Dispute Resolution and Binding Arbitration</h2>
              <p className="text-muted-foreground mb-2">
                <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.</strong>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.1 Agreement to Arbitrate.</strong> Subject to the exceptions specified in Section 20.6, you and the Company agree that any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Service (collectively, &ldquo;Disputes&rdquo;) shall be resolved exclusively by final and binding arbitration, rather than in court. This agreement to arbitrate is intended to be broadly interpreted and includes, without limitation, disputes relating to the interpretation, applicability, enforceability, formation, or breach of these Terms, and claims based in contract, tort, fraud, misrepresentation, or any other legal theory.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.2 Arbitration Organization and Rules.</strong> The arbitration shall be administered by the ADR Institute of Canada, Inc. (&ldquo;ADRIC&rdquo;) in accordance with its Arbitration Rules then in effect, except as modified by this Section 20. The ADRIC Arbitration Rules are available at www.adric.ca. If ADRIC is unwilling or unable to administer the arbitration, the arbitration shall be administered by another mutually agreed arbitration organization or, failing agreement, by an arbitrator appointed by a court of competent jurisdiction.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.3 Arbitration Procedures.</strong> The arbitration shall be conducted in English in Ontario, Canada, or at another location mutually agreed by the parties or determined by the arbitrator. The arbitration shall be decided by a single arbitrator, unless the parties mutually agree to three arbitrators. The arbitrator shall be a lawyer or retired judge with substantive experience in commercial disputes and technology disputes. The arbitrator shall have the authority to grant any remedy or relief that would be available in court, including injunctive or declaratory relief, statutory damages, and attorneys&apos; fees, but shall not have the authority to award punitive or exemplary damages except where permitted by statute. The arbitrator&apos;s decision shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.4 Costs and Fees.</strong> Each party shall bear its own costs and attorneys&apos; fees in connection with the arbitration, except that the arbitrator may award costs and attorneys&apos; fees to the prevailing party if permitted by law. The parties shall share equally the fees and expenses of the arbitrator and the administrative fees of ADRIC, unless the arbitrator determines that such allocation would be unjust under the circumstances, in which case the arbitrator may allocate such fees and expenses differently.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.5 Confidentiality.</strong> The arbitration proceeding and the arbitrator&apos;s award shall be kept confidential by all parties and the arbitrator, except as may be necessary to enforce the award or as otherwise required by law. Neither party may disclose the existence, content, or results of the arbitration without the prior written consent of the other party, except to the extent necessary to enforce the award, comply with legal obligations, or exercise legal rights.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.6 Exceptions to Arbitration.</strong> Notwithstanding the foregoing agreement to arbitrate, either party may: (a) bring an action in small claims court if the claim qualifies for small claims court jurisdiction; (b) seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights; or (c) seek any interim or provisional relief from a court of competent jurisdiction as necessary to protect the party&apos;s rights or property pending the completion of arbitration.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>20.7 Waiver of Jury Trial.</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND THE COMPANY HEREBY WAIVE ANY RIGHT TO A JURY TRIAL IN CONNECTION WITH ANY DISPUTES ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICE.
              </p>
              <p className="text-muted-foreground">
                <strong>20.8 No Class Actions.</strong> The arbitration shall be conducted on an individual basis only. However, nothing in these Terms shall be deemed to waive, preclude, or otherwise limit the right to bring class actions, class arbitrations, or representative actions, to the extent such waiver would be prohibited or unenforceable under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">21. Termination</h2>
              <p className="text-muted-foreground mb-2">
                <strong>21.1 Termination by You.</strong> You may terminate your Account and these Terms at any time by: (a) discontinuing your use of the Service; (b) canceling your subscription in accordance with Section 6.5; and (c) requesting deletion of your Account by contacting the Company at the address specified in Section 28. Termination will be effective upon the Company&apos;s confirmation of Account deletion or at the end of your then-current billing period, whichever is later.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>21.2 Termination by Company for Cause.</strong> The Company may suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-2">
                <li>You breach any provision of these Terms;</li>
                <li>You fail to pay any fees when due;</li>
                <li>You provide false, inaccurate, or misleading information;</li>
                <li>Your use of the Service violates applicable law or regulation;</li>
                <li>Your use of the Service poses a security risk or risk of harm to the Company or other users;</li>
                <li>You engage in fraudulent, abusive, or illegal activity;</li>
                <li>Providing the Service to you would violate export control or sanctions laws;</li>
                <li>The Company is required to terminate your access by law or government authority; or</li>
                <li>The Company determines, in its sole discretion, that continuing to provide the Service to you creates legal, regulatory, or business risk.</li>
              </ul>
              <p className="text-muted-foreground mb-2">
                <strong>21.3 Termination for Convenience.</strong> The Company may terminate these Terms and discontinue providing the Service at any time for any reason upon thirty (30) days&apos; prior written notice to you.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>21.4 Effect of Termination.</strong> Upon termination of these Terms or your Account for any reason: (a) your right to access and use the Service will immediately cease; (b) the Company may (but is not obligated to) delete your Account and all associated Financial Data; (c) you will remain liable for all fees and charges incurred prior to termination; (d) you will not be entitled to any refund of fees paid prior to termination (except as expressly required by law); and (e) all provisions of these Terms that by their nature should survive termination shall survive, including without limitation Sections 8 (Data), 13 (Intellectual Property), 14-15 (Disclaimers), 17 (Limitation of Liability), 19 (Indemnification), 20 (Dispute Resolution), 24 (Entire Agreement), 26 (Governing Law), and 28 (Contact).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>21.5 Data Retrieval.</strong> You are responsible for exporting and backing up your Financial Data before termination. Following termination, the Company may (but is not obligated to) provide you with a reasonable opportunity (not to exceed thirty (30) days) to export your Data, subject to payment of all outstanding fees. After such period, the Company may permanently delete all of your Data without further notice or liability.
              </p>
              <p className="text-muted-foreground">
                <strong>21.6 No Transition Assistance.</strong> The Company has no obligation to provide transition assistance, data migration services, or support following termination of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">22. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-2">
                The Company reserves the right, in its sole discretion, to modify or replace these Terms at any time. If a revision is material, the Company will make reasonable efforts to provide at least thirty (30) days&apos; notice prior to any new terms taking effect, by: (a) posting a notice on the Service; (b) sending an email to the email address associated with your Account; or (c) providing notice through other reasonable means.
              </p>
              <p className="text-muted-foreground mb-2">
                What constitutes a material change will be determined at the Company&apos;s sole discretion. Non-material changes, including changes to contact information, clarifications, or corrections of typographical errors, may be made without advance notice.
              </p>
              <p className="text-muted-foreground mb-2">
                The Company will update the &ldquo;Effective Date&rdquo; at the top of these Terms to reflect the date of the most recent revision. By continuing to access or use the Service after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you must stop using the Service and may terminate your Account in accordance with Section 21.1.
              </p>
              <p className="text-muted-foreground">
                It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">23. Assignment and Transfer</h2>
              <p className="text-muted-foreground mb-2">
                <strong>23.1 Restriction on Your Assignment.</strong> You may not assign, transfer, delegate, or otherwise dispose of these Terms or any of your rights or obligations hereunder, whether voluntarily or by operation of law, without the Company&apos;s prior written consent. Any attempted assignment, transfer, or delegation without such consent shall be null and void and of no effect.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>23.2 Company&apos;s Right to Assign.</strong> The Company may freely assign, transfer, or delegate these Terms and its rights and obligations hereunder, in whole or in part, without your consent or prior notice, including without limitation in connection with a merger, acquisition, corporate reorganization, sale of assets, bankruptcy, or other business transaction. Upon such assignment, the assignee shall assume all of the Company&apos;s rights and obligations under these Terms.
              </p>
              <p className="text-muted-foreground">
                <strong>23.3 Binding Effect.</strong> These Terms shall be binding upon and inure to the benefit of the parties, their successors, and permitted assigns.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">24. Severability and Waiver</h2>
              <p className="text-muted-foreground mb-2">
                <strong>24.1 Severability.</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court or arbitrator of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its original intent. If such modification is not possible, the invalid provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect. The invalidity, illegality, or unenforceability of any provision shall not affect the validity, legality, or enforceability of any other provision of these Terms.
              </p>
              <p className="text-muted-foreground">
                <strong>24.2 Waiver.</strong> No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure of the Company to assert a right or provision under these Terms shall not constitute a waiver of such right or provision. All waivers must be in writing and signed by an authorized representative of the Company to be effective.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">25. Entire Agreement</h2>
              <p className="text-muted-foreground mb-2">
                These Terms, together with any separate User Agreement you may have accepted and any other legal notices or policies published by the Company on the Service, constitute the sole and entire agreement between you and the Company with respect to the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to the Service.
              </p>
              <p className="text-muted-foreground">
                No course of dealing or trade usage, and no evidence of prior, contemporaneous, or subsequent oral agreements shall be used to contradict, explain, or supplement these Terms. If there is any conflict between these Terms and any other document, these Terms shall control unless explicitly stated otherwise in a separate written agreement signed by an authorized representative of the Company.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">26. Tax Responsibilities</h2>
              <p className="text-muted-foreground mb-2">
                <strong>26.1 Your Tax Obligations.</strong> You are solely responsible for determining, collecting, reporting, and remitting all applicable federal, provincial, state, local, and foreign taxes, duties, tariffs, levies, and other governmental charges (&ldquo;Taxes&rdquo;) related to your use of the Service, your business operations, and any transactions conducted through or analyzed using the Service. This includes, without limitation, income taxes, sales taxes, use taxes, goods and services tax (GST), harmonized sales tax (HST), value-added tax (VAT), and any other taxes imposed by taxing authorities.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>26.2 Fees Exclusive of Taxes.</strong> All fees payable under Section 6 are exclusive of Taxes. If the Company has a legal obligation to collect Taxes for which you are responsible under this Section 26, the Company will invoice you for such Taxes, and you agree to pay such Taxes in addition to the fees.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>26.3 Tax Documentation.</strong> If you claim exemption from any Taxes, you must provide the Company with a valid tax exemption certificate or other documentation reasonably satisfactory to the Company, authorized by the appropriate taxing authority. If you are required to withhold any Taxes from payments to the Company, you shall: (a) pay such withholding Taxes to the appropriate taxing authority; (b) provide the Company with official receipts or other documentation evidencing such payment; and (c) gross up the payment to the Company so that the Company receives the full amount due after withholding.
              </p>
              <p className="text-muted-foreground">
                <strong>26.4 No Tax Advice.</strong> Nothing in these Terms or the Service constitutes tax advice. You are solely responsible for consulting with qualified tax professionals regarding your tax obligations and compliance requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">27. Notices and Communications</h2>
              <p className="text-muted-foreground mb-2">
                <strong>27.1 Notices to You.</strong> The Company may provide notices, disclosures, and other communications to you: (a) by email to the email address associated with your Account; (b) by posting a notice on the Service or within your Account dashboard; or (c) by other reasonable means. Notices sent by email shall be deemed delivered when sent to the email address on file with the Company, regardless of whether you actually receive or read the email.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>27.2 Notices to Company.</strong> Any legal notices or other formal communications to the Company must be sent in writing to the address specified in Section 28 by registered mail, courier, or email with delivery confirmation. Notices to the Company shall be deemed delivered: (a) upon receipt if delivered by hand or courier; (b) three (3) business days after mailing if sent by registered mail; or (c) upon confirmation of receipt if sent by email.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>27.3 Your Contact Information.</strong> You are responsible for maintaining accurate and current contact information in your Account settings, including a valid email address. You agree to promptly notify the Company of any changes to your contact information. The Company is not liable for any consequences resulting from your failure to maintain current contact information or to receive notices sent to the email address or other contact information on file.
              </p>
              <p className="text-muted-foreground">
                <strong>27.4 Language.</strong> All communications and notices under these Terms shall be in English. If these Terms are translated into any other language, the English version shall prevail in the event of any conflict or inconsistency.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">28. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-2">
                These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any principles of conflicts of law that would require the application of the laws of another jurisdiction.
              </p>
              <p className="text-muted-foreground mb-2">
                Subject to the arbitration provisions in Section 20, you and the Company irrevocably submit to the exclusive jurisdiction of the courts of Ontario, sitting in Toronto, for resolution of any disputes that are not subject to arbitration. You irrevocably waive any objection to venue in such courts and any claim that such courts are an inconvenient forum.
              </p>
              <p className="text-muted-foreground">
                The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">29. Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                For questions, concerns, or notices regarding these Terms or the Service, please contact the Company at:
              </p>
              <p className="text-muted-foreground ml-4 mb-2">
                <strong>Calhame Financial</strong><br/>
                Email:{" "}
                <a href="mailto:adam@camenzu.li" className="text-primary hover:underline">
                  adam@camenzu.li
                </a>
              </p>
              <p className="text-muted-foreground">
                For legal notices, please use the email address above with &ldquo;LEGAL NOTICE&rdquo; in the subject line.
              </p>
            </section>

            <section className="mt-8 pt-6 border-t">
              <p className="text-xs text-muted-foreground italic">
                By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and Calhame Financial. If you do not agree to these Terms, you must not access or use the Service.
              </p>
              <p className="text-xs text-muted-foreground italic mt-2">
                Last Updated: March 19, 2026
              </p>
            </section>

          </div>
        </CardContent>
      </Card>
    </main>
  );
}
