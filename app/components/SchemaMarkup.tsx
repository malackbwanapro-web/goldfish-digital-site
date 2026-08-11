import React from 'react';

export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': 'https://gold-fish-digital.netlify.app/#organization',
        'name': 'Goldfish Marketing',
        'alternateName': 'Goldfish Digital',
        'url': 'https://gold-fish-digital.netlify.app',
        'logo': 'https://gold-fish-digital.netlify.app/logo-light.svg',
        'image': 'https://gold-fish-digital.netlify.app/og-image.png',
        'description': 'Diani premier creative digital marketing agency & enterprise AI systems integration consultancy. Local experts with global standards.',
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
        '@id': 'https://gold-fish-digital.netlify.app/#website',
        'url': 'https://gold-fish-digital.netlify.app',
        'name': 'Goldfish Digital',
        'publisher': {
          '@id': 'https://gold-fish-digital.netlify.app/#organization'
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
