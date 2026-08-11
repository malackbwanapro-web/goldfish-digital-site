import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import SchemaMarkup from './components/SchemaMarkup';
import MobileStickyBar from './components/MobileStickyBar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gold-fish-digital.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Goldfish Digital | Enterprise AI Systems & Automation Infrastructure',
    template: '%s | Goldfish Digital',
  },
  description:
    'We design, deploy, and integrate production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises in Diani, Kenya & worldwide.',
  keywords: [
    'custom AI systems',
    'enterprise automation pipelines',
    'agentic workflows',
    'operational infrastructure optimization',
    'deterministic workflows',
    'data pipeline engineering',
    'Goldfish Marketing Diani',
    'Kenya AI agency',
    'digital marketing agency Kwale',
  ],
  authors: [{ name: 'Goldfish Marketing', url: 'https://goldfishmarketing.co.ke' }],
  creator: 'Goldfish Marketing',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Goldfish Digital',
    title: 'Goldfish Digital | Enterprise AI Systems & Automation Infrastructure',
    description:
      'We design, deploy, and integrate production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Goldfish Digital Enterprise AI & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goldfish Digital | Enterprise AI Systems & Automation Infrastructure',
    description:
      'Production-ready AI pipelines and deterministic workflows to eliminate structural overhead for modern enterprises.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: googleVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-core)] transition-colors duration-300 pb-16 lg:pb-0">
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <MobileStickyBar />
      </body>
    </html>
  );
}
