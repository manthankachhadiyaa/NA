import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexAgent Hospitality OS | AI Property Management & Dynamic Pricing',
  description:
    'AI-powered hotel management system (PMS): algorithmic RevPAR dynamic pricing, 24/7 WhatsApp autonomous guest concierge, automated room turnover dispatch, and 2-way OTA sync.',
  keywords: [
    'Hospitality management system',
    'Hotel PMS software',
    'Dynamic room pricing algorithm',
    'WhatsApp hotel concierge',
    'Room turnover housekeeping automation',
    'OTA channel synchronization',
    'NexAgent Hospitality OS',
  ],
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/products/hospitality',
  },
  openGraph: {
    title: 'NexAgent Hospitality OS | AI Property Management & Dynamic Pricing',
    description:
      'Maximize RevPAR with dynamic pricing and delight guests with 24/7 autonomous WhatsApp concierge workflows.',
    url: 'https://nawebsite-seven.vercel.app/products/hospitality',
    type: 'website',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Hospitality OS - AI Property Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent Hospitality OS | AI Hotel Management System',
    description:
      'Algorithmic dynamic pricing, 24/7 autonomous concierge, and automated room turnover dispatch.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hospitalityJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://nawebsite-seven.vercel.app/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: 'https://nawebsite-seven.vercel.app/#products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hospitality OS',
            item: 'https://nawebsite-seven.vercel.app/products/hospitality',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'NexAgent Hospitality OS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        description:
          'AI-powered hotel property management system featuring dynamic pricing, 24/7 WhatsApp concierge, and automated room turnover dispatch.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityJsonLd) }}
      />
      {children}
    </>
  );
}
