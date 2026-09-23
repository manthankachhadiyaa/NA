import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Architecture | 7-Layer Deterministic Operational Stack | NexAgent',
  description:
    'Explore NexAgent’s 7-layer engineering architecture: edge ingestion, in-memory PII tokenization, WebAssembly policy engine, two-phase commit execution, and append-only audit ledgers.',
  keywords: [
    'Deterministic AI architecture',
    '7 layer operational stack',
    'WebAssembly policy engine',
    'Two-phase commit writes',
    'HIPAA SOC2 compliant AI',
    'NexAgent Technology',
  ],
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/technology',
  },
  openGraph: {
    title: 'Technology Architecture | 7-Layer Deterministic Operational Stack | NexAgent',
    description:
      'Engineered for mission-critical operations where error is not an option. Explore our deterministic execution architecture.',
    url: 'https://nawebsite-seven.vercel.app/technology',
    type: 'website',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent 7-Layer Technology Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Architecture | NexAgent 7-Layer Stack',
    description:
      'Deterministic execution, in-memory redaction, and cryptographic auditability for enterprise operations.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const techJsonLd = {
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
        name: 'Technology',
        item: 'https://nawebsite-seven.vercel.app/technology',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techJsonLd) }}
      />
      {children}
    </>
  );
}
