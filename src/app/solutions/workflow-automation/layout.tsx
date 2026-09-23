import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deterministic Workflow Automation | Enterprise Operations Core | NexAgent',
  description:
    'Eliminate repetitive manual operations and cross-tool lag. NexAgent connects ERPs, CRMs, and databases into self-executing, policy-bounded operational pipelines with human-in-the-loop governance.',
  keywords: [
    'Enterprise workflow automation',
    'Deterministic AI operations',
    'CRM ERP transactional sync',
    'Human in the loop approval gates',
    'Business process automation',
    'NexAgent Enterprise Core',
  ],
  alternates: {
    canonical: 'https://nawebsite-seven.vercel.app/solutions/workflow-automation',
  },
  openGraph: {
    title: 'Deterministic Workflow Automation | Enterprise Operations Core | NexAgent',
    description:
      'Connect your disparate software stacks into self-executing, policy-bounded operational pipelines with cryptographic audit logging.',
    url: 'https://nawebsite-seven.vercel.app/solutions/workflow-automation',
    type: 'website',
    images: [
      {
        url: 'https://nawebsite-seven.vercel.app/assets/nexagent_logo.png',
        width: 800,
        height: 600,
        alt: 'NexAgent Enterprise Workflow Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deterministic Workflow Automation | NexAgent',
    description:
      'Policy-bounded operational pipelines connecting CRM, ERP, and databases with zero unauthorized bypass.',
    images: ['https://nawebsite-seven.vercel.app/assets/nexagent_logo.png'],
  },
};

export default function WorkflowAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const workflowJsonLd = {
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
        name: 'Solutions',
        item: 'https://nawebsite-seven.vercel.app/#solutions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Workflow Automation',
        item: 'https://nawebsite-seven.vercel.app/solutions/workflow-automation',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowJsonLd) }}
      />
      {children}
    </>
  );
}
