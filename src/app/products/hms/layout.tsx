import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexAgent HMS | Enterprise Hospital Operating System & Queue Balancer',
  description:
    'Full-scale Hospital Management System: automated ESI outpatient triage, 35-minute bed turnover dispatch, pre-compiled discharge packets, ABDM M1/M2/M3, and TPA cashless claims.',
  keywords: [
    'Hospital Management System',
    'HMS software',
    'outpatient queue balancer',
    'ESI triage automation',
    'hospital bed turnover system',
    'ABDM compliance software',
    'TPA insurance billing engine',
    'NexAgent HMS',
  ],
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/products/hms',
  },
  openGraph: {
    title: 'NexAgent HMS | Enterprise Hospital Operating System & Queue Balancer',
    description:
      'Orchestrate outpatient triage queues, automate bed turnover, pre-compile discharge packets, and streamline TPA claims with deterministic AI.',
    url: 'https://nawebsite-seven.vercel.app/products/hms',
    type: 'website',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent HMS - Hospital Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent HMS | Enterprise Hospital Operating System',
    description:
      'Complete hospital operating system. Automated outpatient triage, 35-min bed turnover, and 100% doctor-in-the-loop governance.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function HmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hmsJsonLd = {
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
            name: 'Hospital Management System (HMS)',
            item: 'https://nawebsite-seven.vercel.app/products/hms',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'NexAgent HMS (Hospital OS)',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Cloud / Web',
        description:
          'Enterprise hospital operating system managing outpatient triage queues, bed turnover dispatch, EMR/EHR, digital pharmacy formulary, and TPA cashless claims.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '38',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hmsJsonLd) }}
      />
      {children}
    </>
  );
}
