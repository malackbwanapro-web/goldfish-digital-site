import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PUBLISHED_PROJECTS } from '../data/publishedProjects';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import FooterCloser from '../../components/FooterCloser';
type Props = { params: { slug: string } };
export function generateStaticParams() { return [...PUBLISHED_PROJECTS, ...PORTFOLIO_PROJECTS].map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const project = PUBLISHED_PROJECTS.find(p => p.slug === params.slug);
  return project ? { title: { absolute: `${project.name} Website Project | Goldfish Marketing` }, description: project.description, alternates: { canonical: `https://www.goldfishmarketing.co.ke/portfolio/${project.slug}` } }
    : { title: { absolute: 'Explore Our Client Work | Goldfish Marketing' }, robots: { index: false, follow: true }, description: 'Explore current Goldfish Marketing client website projects.' };
}
export default function ProjectPage({ params }: Props) {
  const project = PUBLISHED_PROJECTS.find(p => p.slug === params.slug);
  if (!project && !PORTFOLIO_PROJECTS.some(p => p.slug === params.slug)) notFound();
  return <main><section className="section-padding px-6"><div className="max-w-3xl mx-auto">
    <Link href="/portfolio" className="underline">← All client work</Link>
    {project ? <><h1 className="text-h1 my-6">{project.name}</h1><p className="text-body-lg mb-6">{project.description}</p><h2 className="text-h3 mb-3">The project</h2><p className="mb-6">{project.context}</p><h2 className="text-h3 mb-3">What this example demonstrates</h2><p className="mb-6">{project.evidence}</p><a className="btn-outline mb-8" href={project.url} target="_blank" rel="noopener noreferrer">View client website ↗</a><p>Planning something similar? Start with your customers, the information they need, and the action you want them to take.</p></>
    : <><h1 className="text-h1 my-6">Explore our current client work</h1><p className="mb-6">This detailed case study is being reviewed. Visit our portfolio to see current client websites and project summaries.</p></>}
    <Link className="btn-primary mt-8" href="/contact?service=website">Discuss your project →</Link>
  </div></section><FooterCloser /></main>;
}
