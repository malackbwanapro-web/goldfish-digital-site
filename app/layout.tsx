import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import SchemaMarkup from './components/SchemaMarkup';
import MobileStickyBar from './components/MobileStickyBar';
import WhatsAppFloat from './components/WhatsAppFloat';

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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.goldfishmarketing.co.ke';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Digital Marketing, Web Design & AI Agency Kenya | Goldfish Marketing',
    template: '%s | Goldfish Marketing',
  },
  description:
    'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
  keywords: [
    'digital marketing agency Kenya',
    'web design agency Diani',
    'SEO agency Mombasa',
    'AI automation Kenya',
    'high converting websites Kenya',
    'Goldfish Marketing Diani',
    'Meta ads management Kenya',
    'WhatsApp automation SMEs',
  ],
  authors: [{ name: 'Goldfish Marketing', url: 'https://www.goldfishmarketing.co.ke' }],
  creator: 'Goldfish Marketing',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: 'Goldfish Marketing',
    title: 'Digital Marketing, Web Design & AI Agency Kenya | Goldfish Marketing',
    description:
      'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Goldfish Marketing Digital Growth & AI Agency Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing, Web Design & AI Agency Kenya | Goldfish Marketing',
    description:
      'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
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
    google: googleVerification || 'google8ac8b339d5eac038',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} ${poppins.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-core)] transition-colors duration-300 pb-16 lg:pb-0">
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
