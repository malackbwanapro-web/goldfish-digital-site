import Link from 'next/link';
import { SERVICE_OFFERS, offerContactHref } from '@/lib/service-offers';

export default function ServiceOffers() {
  return (
    <section id="investment" aria-labelledby="investment-heading" className="section-padding px-6 lg:px-10 border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        <p className="text-eyebrow mb-3">Services &amp; investment</p>
        <h2 id="investment-heading" className="text-h2 mb-4">Choose the support your business needs.</h2>
        <p className="max-w-3xl text-[var(--text-muted)] mb-8">Start with a website, strengthen your social presence, or create the content that supports both. These ranges help you plan; your proposal confirms the exact scope, fees, applicable taxes and ongoing costs.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICE_OFFERS.map(offer => (
            <article key={offer.id} className="card-brand p-6 flex flex-col min-w-0">
              <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
              <p className="text-xl font-bold mb-1">{offer.price}</p>
              <p className="text-sm text-[var(--text-muted)] mb-5">{offer.period}</p>
              <p className="mb-4">{offer.description}</p>
              <p className="text-sm text-[var(--text-muted)] mb-4">{offer.scope}</p>
              <p className="text-sm text-[var(--text-muted)] mb-6">{offer.exclusions}</p>
              <Link href={offerContactHref(offer.id)} className="btn-primary mt-auto">Discuss {offer.id === 'website' ? 'my website' : offer.id === 'social' ? 'social management' : 'a content package'} →</Link>
            </article>
          ))}
        </div>
        <div className="mt-8 max-w-3xl space-y-3 text-[var(--text-muted)]">
          <p>Need a smaller starting point? Limited-scope website projects can fall within KShs 15,000–20,000. We will help you establish whether that scope fits your needs.</p>
          <p>Custom web applications, strategic ads, SEO, brand identity, automation and analytics remain available. <Link href="/contact?topic=Custom%20project" className="underline">Discuss a tailored scope</Link>. Ad spend is separate from management fees.</p>
        </div>
      </div>
    </section>
  );
}
