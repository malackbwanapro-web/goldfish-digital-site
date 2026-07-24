import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Goldfish Digital | Enterprise AI Systems & Automation Infrastructure',
    template: '%s | Goldfish Digital',
  },
  description:
    'We design, deploy, and integrate production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises.',
  keywords: [
    'custom AI systems',
    'enterprise automation pipelines',
    'agentic workflows',
    'operational infrastructure optimization',
    'deterministic workflows',
    'data pipeline engineering',
  ],
  authors: [{ name: 'Goldfish Digital', url: 'https://goldfishdigital.com' }],
  creator: 'Goldfish Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldfishdigital.com',
    siteName: 'Goldfish Digital',
    title: 'Goldfish Digital | Enterprise AI Systems & Automation Infrastructure',
    description:
      'We design, deploy, and integrate production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-core)] transition-colors duration-300">
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
