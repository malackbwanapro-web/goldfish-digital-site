import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Goldfish Digital & Goldfish Marketing',
  description: 'Our commitment to data privacy, transparency, and compliance with the Kenyan Data Protection Act (KDPA 2019), GDPR, and CCPA.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full flex flex-col relative py-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <div className="mb-12">
        <Link href="/" className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-widest hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-h1 font-black mb-4">Privacy Policy</h1>
        <p className="text-sm font-mono text-[var(--text-muted)]">
          Last Updated: August 11, 2026 | Compliant with Kenyan Data Protection Act (KDPA 2019), GDPR &amp; CCPA
        </p>
      </div>

      <div className="space-y-8 text-body text-[var(--text-core)] leading-relaxed">
        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">1. Data Controller Information</h2>
          <p className="mb-4">
            Goldfish Marketing (&quot;Goldfish Digital&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a creative digital marketing agency and AI systems integration consultancy based in Diani, Kwale County, Kenya (Diani Bazaar, Beach Rd).
          </p>
          <p>
            We are committed to protecting the privacy and rights of our clients, website visitors, and business partners in accordance with the Data Protection Act No. 24 of 2019 of Kenya (KDPA), General Data Protection Regulation (GDPR), and applicable privacy laws.
          </p>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Voluntary Contact &amp; Audit Data:</strong> Name, business email, phone number, company domain, and operational details submitted via our Smart Growth Audit intake forms.</li>
            <li><strong>Automated Telemetry &amp; Analytics:</strong> Anonymized usage data collected via Google Analytics 4 (GA4), including page path, browser type, referral source, and general country location.</li>
            <li><strong>Communication Records:</strong> WhatsApp messages, calendar bookings, and email correspondence related to service inquiries and project execution.</li>
          </ul>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To deliver custom digital marketing audits, web builds, and AI automation consulting services.</li>
            <li>To communicate project milestones, service proposals, and schedule strategic consultations.</li>
            <li>To monitor and optimize site performance, accessibility, and user experience.</li>
            <li>We do <strong>NOT</strong> sell, rent, or trade personal data to third-party data brokers.</li>
          </ul>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">4. Data Subject Rights</h2>
          <p className="mb-4">
            Under the Kenyan Data Protection Act 2019 and GDPR, you possess the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data held by Goldfish Marketing.</li>
            <li>Request correction or deletion of your personal records (&quot;Right to be Forgotten&quot;).</li>
            <li>Withdraw consent for direct marketing communications at any time.</li>
          </ul>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">5. Contact Our Privacy Lead</h2>
          <p>
            For privacy inquiries, data access requests, or regulatory questions, contact us directly at:
          </p>
          <div className="mt-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-mono text-sm">
            <p><strong>Email:</strong> info@goldfishmarketing.co.ke</p>
            <p><strong>Phone:</strong> +254 711 404 755</p>
            <p><strong>Address:</strong> Diani Bazaar, Beach Rd, Diani, Kwale County, Kenya</p>
          </div>
        </section>
      </div>
    </main>
  );
}
