import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MySampark Privacy Policy | Saurabh Infosys",
  description: "Privacy Policy for MySampark — AI social media automation platform by Saurabh Infosys. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://saurabhinfosys.com/products/mysampark/privacy-policy" },
};

export default function MySamparkPrivacyPolicy() {
  return (
    <main className="font-dm">
      <section className="relative py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm text-accent font-semibold uppercase tracking-widest mb-3">MySampark · Legal</p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold text-ink mb-4">Privacy Policy</h1>
            <p className="text-ink-light text-sm">Effective May 30, 2026 · Version 1.0 · Last updated May 30, 2026</p>
          </div>

          <div className="space-y-10">

            <Section id="1" title="1. Introduction & Data Controller Information">
              <p>This Privacy Policy explains how <strong>Saurabh Infosys</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;, or the &quot;Company&quot;), the Data Fiduciary under the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and data controller under applicable international privacy laws, collects, uses, stores, processes, discloses, and protects personal data when you use <strong>MY SAMPARK</strong> (&quot;Platform&quot;), a web-based social media scheduling, AI content generation, and multi-platform publishing service.</p>
              <InfoBox>
                <p><strong>Data Fiduciary / Data Controller:</strong> Saurabh Infosys</p>
                <p><strong>Grievance Officer:</strong> info@mysampark.com</p>
                <p><strong>Data Protection Officer:</strong> info@mysampark.com</p>
              </InfoBox>
              <p>This Privacy Policy applies to all users of the Platform, including individuals, businesses, and authorized agents who access or use our services. By accessing or using the Platform, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</p>
              <p>MY SAMPARK integrates with the following social media platforms: X (Twitter), LinkedIn, Instagram, Facebook, Pinterest, and YouTube. By connecting your social accounts, you authorize us to access and use data from these platforms strictly as described in this policy.</p>
              <p>This Privacy Policy is drafted in compliance with the Digital Personal Data Protection Act, 2023 (India), General Data Protection Regulation (EU/EEA), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), and other applicable data protection laws.</p>
            </Section>

            <Section id="2" title="2. Definitions">
              <div className="space-y-3">
                {[
                  { term: "Personal Data", def: "Any data about you that is identifiable by or in relation to such data, as defined under the DPDP Act, 2023." },
                  { term: "Sensitive Personal Data", def: "Includes financial data, health data, biometric data, and any data classified as sensitive under applicable law." },
                  { term: "Processing", def: "Any operation performed on personal data, including collection, storage, use, disclosure, and deletion." },
                  { term: "Data Principal", def: "The individual to whom the personal data relates, as defined under the DPDP Act, 2023." },
                  { term: "Data Fiduciary", def: "Saurabh Infosys, which determines the purpose and means of processing personal data." },
                  { term: "Consent Manager", def: "An entity registered with the Data Protection Board of India that manages consent on behalf of Data Principals." },
                ].map(({ term, def }) => (
                  <div key={term} className="flex gap-4">
                    <span className="font-syne font-semibold text-ink text-sm w-52 flex-shrink-0">{term}</span>
                    <span className="text-ink-light text-sm">{def}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="3" title="3. Information We Collect">
              <p>We collect the following categories of personal data depending on how you use the Platform:</p>
              <SubSection title="a. Identifiers & Account Information">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Email address and/or phone number for account creation, login, and OTP-based verification</li>
                  <li>Full name, profile picture, and role associated with your account</li>
                  <li>Account credentials (stored securely)</li>
                </ul>
              </SubSection>
              <SubSection title="b. Business Profile Information">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Business name, industry, description, and contact details</li>
                  <li>Business address, website URL, and products/services offered</li>
                  <li>Business logo and branding assets</li>
                  <li>Social media profile URLs for all connected platforms</li>
                </ul>
              </SubSection>
              <SubSection title="c. Connected Social Media Account Data">
                <p className="text-ink-light text-sm mb-3">When you connect a social media account via OAuth, we collect the following:</p>
                <div className="space-y-3">
                  {[
                    { platform: "X (Twitter)", items: ["Account handle, display name, profile image, and account ID", "OAuth access tokens for posting and scheduling", "Permission to post, read, and manage tweets on your behalf"] },
                    { platform: "LinkedIn", items: ["Profile name, email, profile photo, and LinkedIn member ID", "OAuth access tokens for posting and scheduling", "Access to LinkedIn Pages you administer", "Permission to post, read, and manage content on your profile and pages"] },
                    { platform: "Instagram", items: ["Instagram account username, account ID, and profile picture", "OAuth access tokens for posting and scheduling", "Access to Instagram Business/Creator account insights", "Permission to publish posts, reels, and stories on your behalf"] },
                    { platform: "Facebook", items: ["Facebook account name, user ID, and profile picture", "OAuth access tokens for posting and scheduling", "Access to Facebook Pages you administer", "Permission to publish posts, manage pages, and access page insights"] },
                    { platform: "Pinterest", items: ["Pinterest account username, user ID, and profile information", "OAuth access tokens for posting and scheduling", "Access to your boards and pins for content publishing", "Permission to create pins and manage boards on your behalf"] },
                    { platform: "YouTube", items: ["Google account name, email, profile picture, and YouTube channel ID", "OAuth access tokens for uploading and managing videos", "Permission to upload videos, manage video metadata, and access basic channel analytics"] },
                  ].map(({ platform, items }) => (
                    <div key={platform} className="bg-white/60 border border-ink/8 rounded-xl p-4">
                      <p className="font-syne font-bold text-ink text-sm mb-2">{platform}</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {items.map((item) => <li key={item} className="text-ink-light text-sm">{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </SubSection>
              <SubSection title="d. Uploaded & Generated Content">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Images, logos, captions, videos, and other media you upload or create through the Platform</li>
                  <li>AI-generated content created using our content generation features</li>
                  <li>Campaign details, scheduling preferences, post configurations, and first comments</li>
                </ul>
              </SubSection>
              <SubSection title="e. Usage & Device Information">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Log data including IP address, browser type, operating system, and access timestamps</li>
                  <li>Pages visited, features used, and interaction patterns within the Platform</li>
                  <li>Device identifiers and referral URLs</li>
                  <li>Error logs and performance diagnostics</li>
                </ul>
              </SubSection>
              <SubSection title="f. Payment & Subscription Information">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Subscription plan details, billing status, and credit balance</li>
                  <li>Payment transactions processed through secure third-party payment processors</li>
                  <li>We do not store full credit/debit card numbers on our servers</li>
                </ul>
              </SubSection>
              <SubSection title="g. Communications">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li>Support requests, feedback, and inquiries you submit to us</li>
                  <li>Transactional emails (OTP codes, account alerts, subscription updates)</li>
                </ul>
              </SubSection>
            </Section>

            <Section id="4" title="4. How We Collect Information">
              <ul className="list-disc pl-5 space-y-2 text-ink-light text-sm">
                <li><strong className="text-ink">Directly from you:</strong> When you create an account, fill out your business profile, upload content, connect social media accounts, make a purchase, or contact support.</li>
                <li><strong className="text-ink">Automatically:</strong> Through cookies, server logs, and similar technologies when you access or use the Platform (see Section 16).</li>
                <li><strong className="text-ink">From social media platforms:</strong> When you authorize OAuth connections with X (Twitter), LinkedIn, Instagram, Facebook, Pinterest, or YouTube.</li>
                <li><strong className="text-ink">From third-party service providers:</strong> Payment processors, analytics providers, and infrastructure partners may share limited data with us as necessary to provide their services.</li>
              </ul>
            </Section>

            <Section id="5" title="5. Purpose of Processing & Legal Basis">
              <div className="overflow-x-auto rounded-xl border border-ink/8">
                <table className="w-full text-sm">
                  <thead className="bg-ink/4">
                    <tr>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Purpose</th>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {[
                      { purpose: "Account Creation & Authentication", basis: "Consent (DPDP Act); Performance of a contract (GDPR Art. 6(1)(b))" },
                      { purpose: "Service Delivery & Platform Operation", basis: "Consent (DPDP Act); Performance of a contract (GDPR Art. 6(1)(b))" },
                      { purpose: "Social Media Publishing", basis: "Consent (DPDP Act); Performance of a contract (GDPR Art. 6(1)(b))" },
                      { purpose: "Billing & Subscription Management", basis: "Performance of a contract (GDPR Art. 6(1)(b)); Legal obligation (GDPR Art. 6(1)(c))" },
                      { purpose: "Communications & Support", basis: "Consent (DPDP Act); Legitimate interest (GDPR Art. 6(1)(f))" },
                      { purpose: "Security & Fraud Prevention", basis: "Legitimate interest (GDPR Art. 6(1)(f)); Compliance with law (DPDP Act Section 7)" },
                      { purpose: "Platform Improvement & Analytics", basis: "Legitimate interest (GDPR Art. 6(1)(f))" },
                      { purpose: "Legal Compliance", basis: "Legal obligation (DPDP Act; GDPR Art. 6(1)(c))" },
                    ].map(({ purpose, basis }, i) => (
                      <tr key={purpose} className={i % 2 === 0 ? "" : "bg-ink/2"}>
                        <td className="p-3 text-ink">{purpose}</td>
                        <td className="p-3 text-ink-light">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <InfoBox variant="note">
                We do not use your personal data for targeted advertising, sell or rent your personal data to third parties, or use your data for automated decision-making that produces legal effects.
              </InfoBox>
            </Section>

            <Section id="6" title="6. Consent & Notice">
              <p>In compliance with Section 6 of the DPDP Act, 2023, we obtain your consent before processing your personal data. Our consent is free, specific, informed, unconditional, and unambiguous.</p>
              <p>You may withdraw your consent at any time by contacting us at <a href="mailto:info@mysampark.com" className="text-accent hover:underline">info@mysampark.com</a> or through the Platform settings. Upon withdrawal, we will cease processing your personal data for the purposes for which consent was withdrawn, unless retention is required by law.</p>
            </Section>

            <Section id="7" title="7. Social Media Platform Integrations">
              <div className="overflow-x-auto rounded-xl border border-ink/8">
                <table className="w-full text-sm">
                  <thead className="bg-ink/4">
                    <tr>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Platform</th>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Data Accessed</th>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Actions Performed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {[
                      { platform: "X (Twitter)", data: "Handle, name, profile image, account ID, OAuth tokens", actions: "Post, schedule, and manage tweets" },
                      { platform: "LinkedIn", data: "Profile name, email, photo, member ID, page IDs, OAuth tokens", actions: "Post, schedule content to profile and pages" },
                      { platform: "Instagram", data: "Username, account ID, profile picture, OAuth tokens, insights", actions: "Publish posts, reels, and stories" },
                      { platform: "Facebook", data: "Account name, user ID, profile picture, page IDs, OAuth tokens", actions: "Publish posts, manage pages, access insights" },
                      { platform: "Pinterest", data: "Username, user ID, profile info, boards, OAuth tokens", actions: "Create pins, manage boards" },
                      { platform: "YouTube", data: "Google account name, email, photo, channel ID, OAuth tokens", actions: "Upload videos, manage metadata, access analytics" },
                    ].map(({ platform, data, actions }, i) => (
                      <tr key={platform} className={i % 2 === 0 ? "" : "bg-ink/2"}>
                        <td className="p-3 font-semibold text-ink">{platform}</td>
                        <td className="p-3 text-ink-light">{data}</td>
                        <td className="p-3 text-ink-light">{actions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <InfoBox variant="note">
                <strong>LinkedIn-Specific Terms:</strong> We access and use LinkedIn data solely to provide the publishing, scheduling, and analytics features you request. We do not use LinkedIn data for advertising, do not sell or transfer it to third parties, and do not combine it with data from other sources for purposes unrelated to the service. We will delete LinkedIn-derived data when you disconnect your account.
              </InfoBox>
              <p>We do not access private messages, personal conversations, or contact lists from any connected social media platform. You may disconnect any social account at any time from the &quot;Connected Accounts&quot; section.</p>
            </Section>

            <Section id="8" title="8. AI-Generated Content">
              <ul className="list-disc pl-5 space-y-2 text-ink-light text-sm">
                <li><strong className="text-ink">Data Used for AI:</strong> AI content generation uses your business profile information, uploaded content, and prompts you provide.</li>
                <li><strong className="text-ink">No Training on Your Data:</strong> Your data is not used to train, fine-tune, or improve external AI models.</li>
                <li><strong className="text-ink">AI Service Providers:</strong> AI processing may be performed by third-party providers under strict data processing agreements that prohibit using your data for model training.</li>
                <li><strong className="text-ink">User Responsibility:</strong> Users are solely responsible for reviewing, editing, and ensuring that AI-generated content complies with applicable laws and platform policies.</li>
                <li><strong className="text-ink">No Guarantees:</strong> We do not guarantee the accuracy, originality, or legal compliance of AI-generated output.</li>
              </ul>
            </Section>

            <Section id="9" title="9. Data Sharing & Third-Party Service Providers">
              <p>We do not sell, rent, or trade your personal information. We share data only with trusted third-party vendors (cloud hosting, payment processing, analytics, email delivery, AI service providers, customer support) who are contractually bound to protect your data. We may also disclose data when required by law or in connection with a business transfer.</p>
              <InfoBox variant="note">
                In the preceding 12 months, we have not sold or shared any personal information of consumers to third parties for cross-context behavioral advertising.
              </InfoBox>
            </Section>

            <Section id="10" title="10. International Data Transfers">
              <p>Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for EEA transfers, Data Processing Agreements, and compliance with the DPDP Act for cross-border transfers.</p>
            </Section>

            <Section id="11" title="11. Data Retention">
              <div className="overflow-x-auto rounded-xl border border-ink/8">
                <table className="w-full text-sm">
                  <thead className="bg-ink/4">
                    <tr>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Data Category</th>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Retention Period</th>
                      <th className="text-left p-3 font-syne font-semibold text-ink">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {[
                      { cat: "Account information", period: "Duration of account + 30 days", reason: "Service delivery and account management" },
                      { cat: "Business profile data", period: "Duration of account + 30 days", reason: "Service delivery" },
                      { cat: "OAuth tokens", period: "Until disconnected or account deleted", reason: "Social media publishing" },
                      { cat: "Uploaded content & media", period: "Duration of account + 30 days", reason: "Content delivery" },
                      { cat: "Log & usage data", period: "12 months from collection", reason: "Security, performance monitoring" },
                      { cat: "Payment & billing records", period: "7 years from transaction", reason: "Legal and tax compliance" },
                      { cat: "Support communications", period: "3 years from resolution", reason: "Quality assurance and dispute resolution" },
                    ].map(({ cat, period, reason }, i) => (
                      <tr key={cat} className={i % 2 === 0 ? "" : "bg-ink/2"}>
                        <td className="p-3 text-ink">{cat}</td>
                        <td className="p-3 text-ink-light">{period}</td>
                        <td className="p-3 text-ink-light">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Upon account deletion, we initiate removal of your data within 30 days. Some data may be retained in encrypted backups for up to 90 days for disaster recovery purposes before permanent deletion.</p>
            </Section>

            <Section id="12" title="12. Data Security & Safeguards">
              <p>We implement reasonable security safeguards including industry-standard encryption for data in transit and at rest, secure session management, access controls, intrusion detection systems, regular security audits, role-based access controls, and employee training on data protection.</p>
              <p>In the event of a personal data breach, we will notify the Data Protection Board of India and relevant supervisory authorities within 72 hours and notify affected individuals promptly.</p>
            </Section>

            <Section id="13" title="13. Your Rights">
              <SubSection title="a. Rights Under DPDP Act, 2023 (India)">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li><strong className="text-ink">Right to Access:</strong> Request a summary of your personal data being processed</li>
                  <li><strong className="text-ink">Right to Correction:</strong> Request correction of inaccurate or incomplete personal data</li>
                  <li><strong className="text-ink">Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-ink">Right to Grievance Redressal:</strong> Raise a grievance regarding the processing of your personal data</li>
                  <li><strong className="text-ink">Right to Nomination:</strong> Nominate another individual to exercise your rights in the event of your death or incapacity</li>
                  <li><strong className="text-ink">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
              </SubSection>
              <SubSection title="b. Rights Under GDPR (EEA, UK, and Switzerland Residents)">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li><strong className="text-ink">Right of Access (Article 15):</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong className="text-ink">Right to Rectification (Article 16):</strong> Request correction of inaccurate or incomplete personal data</li>
                  <li><strong className="text-ink">Right to Erasure (Article 17):</strong> Request deletion of your personal data</li>
                  <li><strong className="text-ink">Right to Restrict Processing (Article 18):</strong> Request limitation of processing</li>
                  <li><strong className="text-ink">Right to Data Portability (Article 20):</strong> Receive your data in machine-readable format</li>
                  <li><strong className="text-ink">Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
                  <li><strong className="text-ink">Right to Lodge a Complaint:</strong> File a complaint with your local data protection supervisory authority</li>
                </ul>
              </SubSection>
              <SubSection title="c. Rights Under CCPA/CPRA (California Residents)">
                <ul className="list-disc pl-5 space-y-1 text-ink-light text-sm">
                  <li><strong className="text-ink">Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected</li>
                  <li><strong className="text-ink">Right to Delete:</strong> Request deletion of personal information collected from you</li>
                  <li><strong className="text-ink">Right to Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong className="text-ink">Right to Opt-Out:</strong> We do not sell or share personal information as defined under CCPA</li>
                  <li><strong className="text-ink">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
                </ul>
              </SubSection>
            </Section>

            <Section id="14" title="14. How to Exercise Your Rights">
              <InfoBox>
                <p><strong>Email:</strong> <a href="mailto:info@mysampark.com" className="text-accent hover:underline">info@mysampark.com</a> — include &quot;Privacy Data Request&quot; in the subject line</p>
                <p><strong>In-App:</strong> Use the Settings page to update or manage your data directly</p>
              </InfoBox>
              <p>To protect your privacy, we must verify your identity before processing any data request. Response timelines: DPDP Act — within a reasonable timeframe; GDPR — within 30 days (extendable by 60 days); CCPA — within 45 days (extendable by 45 days).</p>
              <p>To request complete account deletion, email <a href="mailto:info@mysampark.com" className="text-accent hover:underline">info@mysampark.com</a> with subject &quot;Account Deletion Request&quot;. Upon deletion, all social media connections will be disconnected, all OAuth tokens revoked, and all personal data permanently erased.</p>
            </Section>

            <Section id="15" title="15. Children's Privacy">
              <p>MY SAMPARK is not intended for users under the age of 18. We do not knowingly process personal data of children without verifiable parental or guardian consent. If you believe we have collected data from a child, please contact us immediately at <a href="mailto:info@mysampark.com" className="text-accent hover:underline">info@mysampark.com</a>.</p>
            </Section>

            <Section id="16" title="16. Cookies & Tracking Technologies">
              <p>We use only essential cookies (required for authentication, session management, and security) and optional functional cookies (to remember your preferences). We do not use advertising or targeting cookies, third-party tracking pixels, or cross-site tracking technologies.</p>
            </Section>

            <Section id="17" title="17. Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you via email or through a prominent notice on the Platform before the changes take effect. Your continued use of the Platform after changes are posted constitutes acceptance of the revised policy.</p>
            </Section>

            <Section id="18" title="18. Contact Us">
              <InfoBox>
                <p className="font-syne font-bold text-ink mb-1">Saurabh Infosys</p>
                <p>Data Fiduciary / Data Controller for MY SAMPARK</p>
                <p>Grievance Officer / Data Protection Officer: <a href="mailto:info@mysampark.com" className="text-accent hover:underline">info@mysampark.com</a></p>
              </InfoBox>
              <p>For GDPR-related inquiries, you also have the right to lodge a complaint with your local data protection supervisory authority. For DPDP Act-related inquiries, you may file a complaint with the Data Protection Board of India (DPBI).</p>
              <p className="text-xs text-ink/40 pt-4 border-t border-ink/8">This Privacy Policy was last updated on May 30, 2026.</p>
            </Section>

          </div>
        </div>
      </section>
    </main>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={`section-${id}`} className="scroll-mt-24">
      <h2 className="font-syne text-xl font-bold text-ink mb-4 pb-2 border-b border-ink/8">{title}</h2>
      <div className="space-y-4 text-ink-light text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <h3 className="font-syne font-semibold text-ink text-sm mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function InfoBox({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "note" }) {
  return (
    <div className={`rounded-xl p-4 border text-sm space-y-1 ${variant === "note" ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-accent/5 border-accent/15 text-ink"}`}>
      {children}
    </div>
  );
}
