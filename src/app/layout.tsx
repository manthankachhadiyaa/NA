import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
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
    { name: 'Vraj Savani', url: 'https://github.com/vrajsavanii' },
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
            jobTitle: 'Founder & CEO, Technology & AI',
            sameAs: [
              'https://www.linkedin.com/in/manthankachhadiyaa/',
              'https://www.instagram.com/manthankachhadiyaa',
              'https://github.com/manthankachhadiyaa',
            ],
          },
          {
            '@type': 'Person',
            name: 'Vraj Savani',
            jobTitle: 'Founder & COO, Product & Business',
            sameAs: [
              'https://www.linkedin.com/in/vraj-savani-7973a834a/',
              'https://github.com/vrajsavanii',
            ],
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
      {
        '@type': 'FAQPage',
        '@id': 'https://nawebsite-seven.vercel.app/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does NexAgent prevent AI hallucinations in healthcare and enterprise operations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent utilizes a deterministic 7-layer architecture. Incoming requests are normalized into strict JSON schemas, and every proposed action must satisfy hardcoded WebAssembly policy rules and clinical boundaries before execution. High-stakes actions cannot execute without human cryptographic sign-off.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between NexAgent HMS and legacy hospital management software?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Legacy HMS software acts as passive databases requiring hospital staff to manually type, update, and search for records. NexAgent HMS is active operational software: it orchestrates clinical triage queues, automatically dispatches housekeeping upon patient discharge, and prepares pre-compiled clinical discharge summaries for physician review.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the human-in-the-loop approval mechanism work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Whenever an automated action exceeds a pre-configured risk threshold (e.g., patient discharge authorization, medication changes, or financial transactions over $5,000), execution is intercepted. The supervisor or physician receives a concise approval notification with all historical context and signs off with one click.',
            },
          },
          {
            '@type': 'Question',
            name: 'What technical integrations does NexAgent support out of the box?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NexAgent connects with HL7/FHIR healthcare standards, major EMR systems (Epic, Cerner), enterprise CRMs (Salesforce, HubSpot, Zoho), ERP systems (SAP, NetSuite), and modern communication protocols (Slack, WhatsApp Business, Webhooks, Kafka).',
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                try {
                  var EXTENSION_INDICATORS = [
                    'chrome-extension://',
                    'moz-extension://',
                    'safari-extension://',
                    'extension://',
                    'eppiocemhmnlbhjplcgkofciiegomcon',
                    'm_id',
                    'bis_skin_checked',
                    'bis_register',
                    'crxlauncher',
                    '__processed_'
                  ];

                  function isExtensionString(str) {
                    if (!str) return false;
                    var lower = String(str).toLowerCase();
                    for (var i = 0; i < EXTENSION_INDICATORS.length; i++) {
                      if (lower.indexOf(EXTENSION_INDICATORS[i]) !== -1) {
                        return true;
                      }
                    }
                    return false;
                  }

                  function isExtensionError(event, error) {
                    try {
                      var msg = (event && event.message) || (error && error.message) || '';
                      var filename = (event && event.filename) || '';
                      var stack = (error && error.stack) || '';
                      if (isExtensionString(msg) || isExtensionString(filename) || isExtensionString(stack)) {
                        return true;
                      }
                    } catch (e) {}
                    return false;
                  }

                  // 1. Intercept capturing window error events
                  window.addEventListener('error', function(event) {
                    if (isExtensionError(event, event && event.error)) {
                      if (typeof event.stopImmediatePropagation === 'function') {
                        event.stopImmediatePropagation();
                      }
                      if (typeof event.preventDefault === 'function') {
                        event.preventDefault();
                      }
                      return true;
                    }
                  }, true);

                  // 2. Intercept capturing window unhandledrejection events
                  window.addEventListener('unhandledrejection', function(event) {
                    try {
                      var reason = event && event.reason;
                      var msg = (reason && (reason.message || reason.stack)) || String(reason || '');
                      if (isExtensionString(msg)) {
                        if (typeof event.stopImmediatePropagation === 'function') {
                          event.stopImmediatePropagation();
                        }
                        if (typeof event.preventDefault === 'function') {
                          event.preventDefault();
                        }
                        return true;
                      }
                    } catch (e) {}
                  }, true);

                  // 3. Wrap window.addEventListener to shield Next.js dev overlay from extension errors
                  var origAddEventListener = window.addEventListener;
                  var origRemoveEventListener = window.removeEventListener;
                  var listenerMap = typeof WeakMap !== 'undefined' ? new WeakMap() : null;

                  window.addEventListener = function(type, listener, options) {
                    if (type === 'error' && typeof listener === 'function') {
                      var wrappedError = function(event) {
                        if (isExtensionError(event, event && event.error)) {
                          if (typeof event.stopImmediatePropagation === 'function') {
                            event.stopImmediatePropagation();
                          }
                          if (typeof event.preventDefault === 'function') {
                            event.preventDefault();
                          }
                          return;
                        }
                        return listener.apply(this, arguments);
                      };
                      if (listenerMap) listenerMap.set(listener, wrappedError);
                      return origAddEventListener.call(this, type, wrappedError, options);
                    }

                    if (type === 'unhandledrejection' && typeof listener === 'function') {
                      var wrappedRejection = function(event) {
                        var reason = event && event.reason;
                        var msg = (reason && (reason.message || reason.stack)) || String(reason || '');
                        if (isExtensionString(msg)) {
                          if (typeof event.stopImmediatePropagation === 'function') {
                            event.stopImmediatePropagation();
                          }
                          if (typeof event.preventDefault === 'function') {
                            event.preventDefault();
                          }
                          return;
                        }
                        return listener.apply(this, arguments);
                      };
                      if (listenerMap) listenerMap.set(listener, wrappedRejection);
                      return origAddEventListener.call(this, type, wrappedRejection, options);
                    }

                    return origAddEventListener.apply(this, arguments);
                  };

                  window.removeEventListener = function(type, listener, options) {
                    var target = (listenerMap && listenerMap.get(listener)) || listener;
                    return origRemoveEventListener.call(this, type, target, options);
                  };

                  // 4. Wrap window.onerror
                  var currentOnError = window.onerror;
                  Object.defineProperty(window, 'onerror', {
                    configurable: true,
                    get: function() {
                      return currentOnError;
                    },
                    set: function(handler) {
                      if (typeof handler === 'function') {
                        currentOnError = function(msg, url, line, col, err) {
                          if (isExtensionString(msg) || isExtensionString(url) || (err && isExtensionString(err.stack))) {
                            return true;
                          }
                          return handler.apply(this, arguments);
                        };
                      } else {
                        currentOnError = handler;
                      }
                    }
                  });

                  // 5. Filter console.error from extension noise and hydration warnings caused by extensions
                  var origConsoleError = console.error;
                  Object.defineProperty(console, 'error', {
                    configurable: true,
                    get: function() {
                      return function() {
                        var args = Array.prototype.slice.call(arguments);
                        var combined = args.map(function(a) {
                          return typeof a === 'string' ? a : ((a && (a.message || a.stack)) || '');
                        }).join(' ');

                        if (isExtensionString(combined)) {
                          return;
                        }
                        return origConsoleError.apply(console, args);
                      };
                    },
                    set: function(fn) {
                      origConsoleError = fn;
                    }
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-[#3f3f46] selection:bg-black selection:text-white min-h-screen"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

