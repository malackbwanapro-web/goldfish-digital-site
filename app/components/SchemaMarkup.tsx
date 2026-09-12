import React from 'react';

export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.goldfishmarketing.co.ke/#organization',
        'name': 'Goldfish Marketing',
        'alternateName': 'Goldfish Digital',
        'url': 'https://www.goldfishmarketing.co.ke',
        'logo': 'https://www.goldfishmarketing.co.ke/logo-light.svg',
        'image': 'https://www.goldfishmarketing.co.ke/og-image.png',
        'description': 'Diani & Kenya premier digital marketing, high-converting web design, SEO, and AI automation agency for growing SMEs & hospitality brands.',
        'telephone': '+254711404755',
        'email': 'goldfishprojex@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Diani Bazaar, Beach Rd',
          'addressLocality': 'Diani',
          'addressRegion': 'Kwale County',
          'postalCode': '80401',
          'addressCountry': 'KE'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': -4.2796,
          'longitude': 39.5947
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          'opens': '08:00',
          'closes': '18:00'
        },
        'sameAs': [
          'https://www.facebook.com/goldfishmarketing',
          'https://www.instagram.com/goldfishmarketing',
          'https://github.com/malackbwanapro-web/goldfish-digital-site'
        ],
        'priceRange': '$$$',
        'knowsAbout': [
          'Enterprise AI Automation',
          'Smart Web & App Ecosystems',
          'Advanced Visibility Engineering',
          'SEO, GEO & CRO',
          'Brand Identity & Content Creation',
          'Digital Presence & Paid Growth'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.goldfishmarketing.co.ke/#website',
        'url': 'https://www.goldfishmarketing.co.ke',
        'name': 'Goldfish Digital',
        'publisher': {
          '@id': 'https://www.goldfishmarketing.co.ke/#organization'
        },
        'inLanguage': 'en-US'
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
