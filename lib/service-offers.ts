// Prices confirmed by Malack during acquisition planning. Scope is quoted separately.
export const SERVICE_OFFERS = [
  {
    id: 'website', title: 'Websites for growing businesses',
    price: 'KShs 50,000–80,000', period: 'Typical business website project',
    description: 'For accommodation groups, tour operators, restaurants and service businesses that need a clearer path from visitor to enquiry.',
    scope: 'We agree the pages, content, enquiry journey and technical requirements before quoting.',
    exclusions: 'Custom applications, booking or payment integrations, photography, hosting and ongoing support are scoped separately.',
    message: 'Hi Malack, I would like to discuss a business website. My main goal is to attract and qualify more enquiries. Please help me define the scope and budget.',
  },
  {
    id: 'social', title: 'Social media management',
    price: 'KShs 15,000–25,000', period: 'Per month',
    description: 'For businesses that need consistent management of their social presence alongside their website.',
    scope: 'We agree platforms, publishing frequency, responsibilities and reporting before the retainer begins.',
    exclusions: 'Dedicated photography and video production are not included. Paid advertising and media spend are quoted separately.',
    message: 'Hi Malack, I am interested in social media management at KShs 15,000–25,000 per month. I would like to discuss platforms, posting frequency and the content available.',
  },
  {
    id: 'content', title: 'Photography & video content',
    price: 'KShs 50,000–100,000', period: 'Per content package',
    description: 'Photo and video packages planned to provide approximately 8–12 weeks of content.',
    scope: 'We agree the shoot plan, final deliverables, formats and intended use before production.',
    exclusions: 'The number of weeks depends on your publishing schedule. Social management, ad management and media spend are separate.',
    message: 'Hi Malack, I would like a photography and video package at KShs 50,000–100,000 to support approximately 8–12 weeks of content. Please help me plan the shoot and deliverables.',
  },
] as const;

export function getServiceOffer(id: string | null) {
  return SERVICE_OFFERS.find(offer => offer.id === id);
}

export function offerContactHref(id: string) {
  return `/contact?service=${encodeURIComponent(id)}`;
}
