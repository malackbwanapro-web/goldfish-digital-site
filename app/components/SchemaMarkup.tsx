import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';

export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': `${SITE_CONFIG.SITE_URL}/#organization`,
        'name': SITE_CONFIG.BRAND_NAME,
        'alternateName': ['Goldfish Digital', 'Goldfish Marketing Agency Kenya'],
        'url': SITE_CONFIG.SITE_URL,
        'logo': `${SITE_CONFIG.SITE_URL}/logo-light.svg`,
        'image': `${SITE_CONFIG.SITE_URL}/og-image.png`,
        'description': 'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
        'telephone': `+${SITE_CONFIG.WHATSAPP_NUMBER}`,
        'email': SITE_CONFIG.OFFICIAL_INFO_EMAIL,
        'priceRange': '$$$',
        'currenciesAccepted': 'KES, USD, EUR, GBP',
        'paymentAccepted': 'Cash, Credit Card, M-Pesa, Bank Transfer',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': SITE_CONFIG.HQ_ADDRESS,
          'addressLocality': SITE_CONFIG.HQ_CITY,
          'addressRegion': SITE_CONFIG.HQ_REGION,
          'postalCode': SITE_CONFIG.HQ_POSTAL_CODE,
          'addressCountry': 'KE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': SITE_CONFIG.GEO_COORDINATES.latitude,
          'longitude': SITE_CONFIG.GEO_COORDINATES.longitude
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Coast Province, Kenya' },
          { '@type': 'City', 'name': 'Diani Beach' },
          { '@type': 'City', 'name': 'Mombasa' },
          { '@type': 'City', 'name': 'Nairobi' },
          { '@type': 'Country', 'name': 'Kenya' },
          { '@type': 'AdministrativeArea', 'name': 'East Africa' }
        ],
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '08:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Saturday'],
            'opens': '09:00',
            'closes': '14:00'
          }
        ],
        'sameAs': [
          'https://www.facebook.com/goldfishmarketingKE',
          'https://www.instagram.com/goldfishmarketingke/',
          'https://www.tiktok.com/@goldfishmarketingke'
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Digital Growth & AI Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Smart Web & App Ecosystems',
                'url': 'https://www.goldfishmarketing.co.ke/services/smart-web-app-ecosystems'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Advanced Visibility Engineering (SEO/GEO)',
                'url': 'https://www.goldfishmarketing.co.ke/services/advanced-visibility-engineering'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'AI Automation for SMEs',
                'url': 'https://www.goldfishmarketing.co.ke/services/ai-automation-sme'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Brand Identity & Content Creation',
                'url': 'https://www.goldfishmarketing.co.ke/services/brand-identity-content-creation'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Digital Presence & Paid Growth Management',
                'url': 'https://www.goldfishmarketing.co.ke/services/digital-presence-paid-growth-management'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Strategic Analytics & Audits',
                'url': 'https://www.goldfishmarketing.co.ke/services/strategic-analytics-audits'
              }
            }
          ]
        },
        'knowsAbout': [
          'Enterprise AI Automation',
          'Hospitality Booking Engine Development',
          'Next.js Web Applications',
          'Search Engine Optimization (SEO)',
          'Generative Engine Optimization (GEO)',
          'KDPA 2019 Compliance',
          'M-Pesa Payment Gateways',
          'WhatsApp AI Workflows'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.goldfishmarketing.co.ke/#website',
        'url': 'https://www.goldfishmarketing.co.ke',
        'name': 'Goldfish Marketing',
        'alternateName': 'Goldfish Digital',
        'publisher': {
          '@id': 'https://www.goldfishmarketing.co.ke/#organization'
        },
        'inLanguage': 'en-KE'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
