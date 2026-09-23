import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NexAgent | Leadership, Architecture & Engineering Mission',
  description:
    'Meet NexAgent co-founders Manthan Kachhadiya and Savani Vraj. Learn how our engineering-first team builds deterministic AI systems for healthcare and enterprise operations.',
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/about',
  },
  openGraph: {
    title: 'About NexAgent | Leadership, Architecture & Engineering Mission',
    description:
      'Meet co-founders Manthan Kachhadiya (AI Systems) and Savani Vraj (Operations). Building deterministic AI operating systems with human-in-the-loop governance.',
    url: 'https://nawebsite-seven.vercel.app/about',
    type: 'profile',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Co-Founders - Manthan Kachhadiya and Savani Vraj',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NexAgent | Leadership & Engineering Mission',
    description:
      'Meet co-founders Manthan Kachhadiya and Savani Vraj. Building deterministic AI systems that participate in real enterprise operations.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
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
        name: 'About',
        item: 'https://nawebsite-seven.vercel.app/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
