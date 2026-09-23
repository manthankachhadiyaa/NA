import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Infrastructure & Hospital Network Operations | NexAgent',
  description:
    'Full-scale hospital network orchestration: outpatient triage queues, 35-minute bed turnover, nursing station handoffs, and ABDM/NABH compliance with 100% doctor-in-the-loop safety.',
  keywords: [
    'Healthcare infrastructure',
    'Hospital network operations',
    'Outpatient triage queues',
    'Bed turnover automation',
    'ABDM compliance',
    'NABH digital logs',
    'NexAgent Healthcare',
  ],
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/industries/healthcare',
  },
  openGraph: {
    title: 'Healthcare Infrastructure & Hospital Network Operations | NexAgent',
    description:
      'Engineered for hospital networks where patient safety and operational throughput are paramount.',
    url: 'https://nawebsite-seven.vercel.app/industries/healthcare',
    type: 'website',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Healthcare Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Infrastructure | NexAgent',
    description:
      'Hospital network orchestration with deterministic AI and mandatory doctor approval gates.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function HealthcareIndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const healthcareJsonLd = {
    '@context': 'https://schema.org',
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
        name: 'Industries',
        item: 'https://nawebsite-seven.vercel.app/#industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Healthcare',
        item: 'https://nawebsite-seven.vercel.app/industries/healthcare',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthcareJsonLd) }}
      />
      {children}
    </>
  );
}
