import type { Metadata } from 'next';
import Link from 'next/link';
import { ACTUAL_CLIENTS } from './data/actualClientsData';
import { PUBLISHED_PROJECTS } from './data/publishedProjects';
import FooterCloser from '../components/FooterCloser';
export const metadata: Metadata = {
  title: { absolute: 'Website Projects & Client Work | Goldfish Marketing' },
  description: 'Explore website projects for accommodation, restaurants, tour operators and other businesses in Kenya.',
  alternates: { canonical: 'https://www.goldfishmarketing.co.ke/portfolio' },
};
export default function PortfolioPage() {
  return <main><section className="section-padding px-6 lg:px-10"><div className="max-w-7xl mx-auto">
    <p className="text-eyebrow mb-3">Goldfish Marketing portfolio</p><h1 className="text-h1 mb-5">See the work. Find a fit for your business.</h1>
    <p className="max-w-3xl text-[var(--text-muted)] mb-10">Explore client websites across hospitality, tourism, restaurants and other services. Start with a business like yours, then talk to Malack about what your website needs to do.</p>
    <div className="grid md:grid-cols-2 gap-6 mb-12">{PUBLISHED_PROJECTS.map(project => <article key={project.slug} className="card-brand p-6"><p className="text-eyebrow mb-3">{project.sector}</p><h2 className="text-2xl font-bold mb-3">{project.name}</h2><p className="mb-5">{project.description}</p><Link className="btn-outline" href={`/portfolio/${project.slug}`}>Explore the project →</Link></article>)}</div>
    <h2 className="text-h2 mb-6">More client websites</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{ACTUAL_CLIENTS.map(client => <article key={client.id} className="card-brand p-6"><h3 className="text-xl font-bold mb-3">{client.name}</h3><a href={client.liveUrl} target="_blank" rel="noopener noreferrer" className="underline">View website ↗</a></article>)}</div>
    <p className="mt-10"><Link className="btn-primary" href="/contact?service=website">Discuss your website →</Link></p>
  </div></section><FooterCloser /></main>;
}
