import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['500', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nawebsite-seven.vercel.app'),
  title: {
    default: 'NexAgent | AI-Powered Business Software & Hospital Management Systems (HMS)',
    template: '%s | NexAgent',
  },
  description:
    'NexAgent builds deterministic AI business software and hospital management systems (HMS). Eliminate manual queues with human-in-the-loop workflows.',
  keywords: [
    'NexAgent',
    'AI-powered business software',
    'Hospital Management System',
    'HMS software',
    'outpatient triage automation',
    'hospital bed turnaround system',
    'workflow automation',
    'deterministic AI',
    'human-in-the-loop governance',
  ],
  authors: [
    { name: 'Manthan Kachhadiya', url: 'https://github.com/manthankachhadiyaa' },
    { name: 'Savani Vraj', url: 'https://github.com/vrajsavanii' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://nawebsite-seven.vercel.app/',
    title: 'NexAgent | AI-Powered Business Software & Hospital Management Systems',
    description:
      'Deterministic AI systems that participate in real business operations. Automate clinical queues, bed turnover, and enterprise workflows.',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Logo - Deterministic AI & Hospital Management Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexAgent | AI-Powered Business Software & Hospital Management Systems',
    description:
      'Deterministic AI business systems. Featuring NexAgent HMS for clinical triage and bed turnover orchestration.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
  icons: {
    icon: '/assets/nexagent_logo.png',
  },
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://nawebsite-seven.vercel.app/#organization',
        name: 'NexAgent',
        url: 'https://nawebsite-seven.vercel.app/',
        logo: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        description:
          'NexAgent is a deterministic AI technology company building enterprise business software and hospital management systems (HMS).',
        foundingDate: '2026',
        founders: [
          {
            '@type': 'Person',
            name: 'Manthan Kachhadiya',
            jobTitle: 'Co-Founder, Technology & AI',
          },
          {
            '@type': 'Person',
            name: 'Savani Vraj',
            jobTitle: 'Co-Founder, Product & Business',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        sameAs: ['https://github.com/manthankachhadiyaa/NA'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nawebsite-seven.vercel.app/#website',
        url: 'https://nawebsite-seven.vercel.app/',
        name: 'NexAgent',
        publisher: {
          '@id': 'https://nawebsite-seven.vercel.app/#organization',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://nawebsite-seven.vercel.app/#hms',
        name: 'NexAgent HMS',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Cloud / Web',
        description:
          'Hospital Management System and clinical queue orchestration software designed to streamline outpatient triage, bed turnover, and EMR workflows.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#4a5568] selection:bg-[#3fa8b8] selection:text-white min-h-screen">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

