'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Stethoscope,
  Hotel,
  Zap,
  Clock,
  Network,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface ProductItem {
  id: string;
  category: string;
  name: string;
  status: 'AVAILABLE' | 'IN DEVELOPMENT' | 'ENTERPRISE READY' | 'FUTURE';
  statusColor: string;
  description: string;
  outcome: string;
  icon: React.ElementType;
  href: string;
  features: string[];
}

const products: ProductItem[] = [
  {
    id: 'hms',
    category: 'HEALTHCARE INFRASTRUCTURE',
    name: 'NexAgent HMS (Hospital OS)',
    status: 'AVAILABLE',
    statusColor: 'text-green-700 bg-green-50 border-green-200',
    description:
      'Complete hospital operating system far beyond basic clinic EMRs. Orchestrates outpatient intake queues, automated bed turnover dispatch, EMR/EHR, digital pharmacy formulary, and TPA insurance billing with 100% doctor-in-the-loop safety.',
    outcome: '35 min average bed turnaround & ABDM/NABH compliance ready',
    icon: Stethoscope,
    href: '/products/hms',
    features: [
      'Automated ESI triage queue load-balancing & zero-wait routing',
      'Instant housekeeping dispatch on doctor discharge order',
      'Pre-compiled discharge summaries for 1-click MD sign-off',
      'Full ABDM (M1, M2, M3) & NABH digital audit compliance',
    ],
  },
  {
    id: 'hospitality',
    category: 'HOSPITALITY MANAGEMENT',
    name: 'NexAgent Hospitality OS',
    status: 'AVAILABLE',
    statusColor: 'text-green-700 bg-green-50 border-green-200',
    description:
      'Entirely AI-powered cloud property management system (PMS). Features algorithmic dynamic room pricing, 24/7 autonomous guest concierge (WhatsApp/web/voice), mobile self check-in/out, automated room turnover dispatch, and 2-way OTA synchronization.',
    outcome: '28% RevPAR increase & 0 min reception queue wait times',
    icon: Hotel,
    href: '/products/hospitality',
    features: [
      'Algorithmic dynamic rate optimization maximizing RevPAR',
      '24/7 autonomous guest concierge over WhatsApp & voice',
      'Real-time room turnover automation triggered upon guest checkout',
      'Instant 2-way OTA synchronization (Booking, Expedia, Airbnb)',
    ],
  },
  {
    id: 'operations-core',
    category: 'ENTERPRISE AUTOMATION',
    name: 'Enterprise Operations Core',
    status: 'AVAILABLE',
    statusColor: 'text-green-700 bg-green-50 border-green-200',
    description:
      'One unified, comprehensive solution that includes everything out-of-the-box, customized directly to your organization’s exact operational workflows and compliance boundaries.',
    outcome: '82% reduction in cross-tool administrative handoff lag',
    icon: Zap,
    href: '/solutions/workflow-automation',
    features: [
      'Single battle-tested core platform customized to client workflows',
      'Bi-directional transactional sync for ERP, CRM & databases',
      'In-memory PII/PHI tokenization before reasoning occurs',
      'Cryptographic human-in-the-loop approval gates',
    ],
  },
  {
    id: 'predictive-flow',
    category: 'CAPACITY INTELLIGENCE',
    name: 'Predictive Capacity & Flow Network',
    status: 'ENTERPRISE READY',
    statusColor: 'text-[#2b9aaa] bg-[#2b9aaa]/10 border-[#2b9aaa]/25',
    description:
      'Forecasts hospital ward capacity bottlenecks, nurse-to-patient ratios, and hotel occupancy surges 24 to 48 hours in advance, enabling leadership to open surge resources proactively.',
    outcome: 'Proactive capacity planning & shift balancing',
    icon: Clock,
    href: '/technology',
    features: [
      'Localized admission & occupancy surge forecasting',
      'Automated shift-swap and staffing recommendation engine',
      'Decentralized cross-facility resource ledger and telemetry',
    ],
  },
];

interface HmsShowcaseProps {
  onOpenStrategyCall: () => void;
}

export default function HmsShowcase({ onOpenStrategyCall }: HmsShowcaseProps) {
  return (
    <section id="products" className="py-24 bg-[#f8f9fa] border-t border-black/[0.06] relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="cyan">Product Portfolio</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Software systems built for real operations.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#4a5568]">
            Every NexAgent Infra product is engineered around one standard: measurable operational throughput with zero ungrounded actions. Clearly delineated by deployment readiness.
          </motion.p>
        </motion.div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={prod.id}
                variants={fadeUpVariants}
                whileHover={{ y: -4, transition: transitionPresets.fast }}
                className={`rounded-3xl bg-white border border-black/[0.08] hover:border-[#2b9aaa]/30 hover:shadow-md p-8 sm:p-10 transition-all flex flex-col justify-between group ${
                  isFeatured ? 'lg:col-span-12 xl:col-span-7' : idx === 1 ? 'lg:col-span-12 xl:col-span-5' : 'lg:col-span-6'
                }`}
              >
                <div className="space-y-6">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#2b9aaa] font-semibold">
                      {prod.category}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider font-bold ${prod.statusColor}`}
                    >
                      {prod.status}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#2b9aaa]/08 border border-[#2b9aaa]/15 text-[#2b9aaa] group-hover:scale-110 transition-transform shrink-0 bg-[#f0fafb]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0f1117] tracking-tight">
                        {prod.name}
                      </h3>
                      <p className="text-sm text-[#4a5568] leading-relaxed mt-2">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2">
                    {prod.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-[#4a5568]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2b9aaa] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Outcome & Link */}
                <div className="pt-8 mt-8 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block">
                      Operational Outcome
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0f1117]">
                      {prod.outcome}
                    </span>
                  </div>

                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2b9aaa] hover:text-[#0f1117] transition-colors self-start sm:self-auto"
                  >
                    <span>Inspect System</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
