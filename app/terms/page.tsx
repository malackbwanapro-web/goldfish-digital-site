import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service | Goldfish Marketing',
  },
  description:
    'Terms of Service and client engagement agreements for Goldfish Marketing web, SEO, and AI automation consulting services.',
  alternates: {
    canonical: 'https://www.goldfishmarketing.co.ke/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full flex flex-col relative py-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <div className="mb-12">
        <Link href="/" className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-widest hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-h1 font-black mb-4">Terms of Service</h1>
        <p className="text-sm font-mono text-[var(--text-muted)]">
          Effective Date: August 11, 2026 | Goldfish Marketing Services Agreement
        </p>
      </div>

      <div className="space-y-8 text-body text-[var(--text-core)] leading-relaxed">
        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">1. Agreement Overview</h2>
          <p>
            By accessing or using the services provided by Goldfish Marketing (&quot;Goldfish Digital&quot;, &quot;we&quot;, &quot;us&quot;), including our website, client portals, smart growth audits, digital marketing management, web engineering, and AI automation consulting, you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">2. Scope of Client Engagements</h2>
          <p className="mb-4">
            Service scopes, deliverables, timelines, and payment structures (Foundation, Growth, or Dominance packages) are defined in client-specific Statement of Work (SOW) proposals.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web &amp; App Ecosystems:</strong> Client retains full ownership of custom code, graphics, and assets upon final invoice settlement.</li>
            <li><strong>AI &amp; Automation Systems:</strong> Workflows deployed on client infrastructure remain the intellectual property of the client, subject to third-party API terms (e.g., OpenAI, Google Cloud, Meta).</li>
            <li><strong>Audits &amp; Strategy Briefs:</strong> Audit reports are delivered as advisory recommendations based on empirical performance data at the time of evaluation.</li>
          </ul>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">3. Intellectual Property</h2>
          <p>
            All original branding elements, code snippets, trade names, and trademarks associated with &quot;Goldfish Marketing&quot; and &quot;Goldfish Digital&quot; belong exclusively to Goldfish Marketing. Client materials remain the property of the respective client.
          </p>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">4. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes shall be submitted to binding arbitration in Kwale County / Mombasa, Kenya.
          </p>
        </section>

        <section className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border-subtle)]">
          <h2 className="text-h3 font-bold mb-4 text-[var(--accent-gold)]">5. Contact Information</h2>
          <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] font-mono text-sm space-y-1">
            <p><strong>Goldfish Marketing</strong></p>
            <p>Diani Bazaar, Beach Rd, Diani, Kwale County, Kenya</p>
            <p>Email: info@goldfishmarketing.co.ke | Phone: +254 711 404 755</p>
          </div>
        </section>
      </div>
    </main>
  );
}
