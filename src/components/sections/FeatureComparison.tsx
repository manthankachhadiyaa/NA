'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Clock, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

interface ComparisonRow {
  feature: string;
  nexagent: boolean;
  traditional: boolean;
  note?: string;
}

const comparisonFeatures: ComparisonRow[] = [
  {
    feature: 'Deterministic Policy Boundary Enforcement (Wasm)',
    nexagent: true,
    traditional: false,
    note: 'Hardcoded rules prevent ungrounded AI hallucination',
  },
  {
    feature: 'Human-in-the-Loop Supervisory Sign-Off Gate',
    nexagent: true,
    traditional: false,
    note: '1-click cryptographic approval on critical actions',
  },
  {
    feature: 'In-Memory PII/PHI Tokenization & Redaction',
    nexagent: true,
    traditional: false,
    note: 'HIPAA & SOC2 compliant data sanitization',
  },
  {
    feature: 'Two-Phase Commit EMR, CRM & ERP Sync',
    nexagent: true,
    traditional: false,
    note: 'Transactional writes with automated rollback',
  },
  {
    feature: 'Automated Housekeeping & Bed Turnover Dispatch',
    nexagent: true,
    traditional: false,
    note: 'Cuts bed turnover from 110 min to 35 min',
  },
  {
    feature: 'Cryptographic Append-Only Audit Ledger',
    nexagent: true,
    traditional: false,
    note: 'Forensic visibility for regulatory compliance',
  },
  {
    feature: 'Emergency Severity Index (ESI) Triage Balancing',
    nexagent: true,
    traditional: false,
    note: '42% reduction in outpatient waiting queues',
  },
  {
    feature: 'Multi-Branch & Cross-Facility Resource Routing',
    nexagent: true,
    traditional: false,
    note: 'Decentralized inter-hospital bed coordination',
  },
  {
    feature: 'Passive Database Storage (Manual Entry Required)',
    nexagent: false,
    traditional: true,
    note: 'Legacy systems require constant manual staff typing',
  },
];

const highlights = [
  {
    id: 'h1',
    metric: '80%',
    label: 'Less Documentation Lag',
    icon: Clock,
  },
  {
    id: 'h2',
    metric: '3x',
    label: 'Faster Patient Throughput',
    icon: Zap,
  },
  {
    id: 'h3',
    metric: '99.9%',
    label: 'Uptime Guarantee',
    icon: ShieldCheck,
  },
  {
    id: 'h4',
    metric: '40%',
    label: 'Overhead Reduction',
    icon: TrendingUp,
  },
];

export default function FeatureComparison() {
  return (
    <section id="compare" className="py-24 bg-white border-t border-black/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="cyan">Competitive Differentiators</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Traditional Operations vs NexAgent Infra
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#718096]">
            Discover why modern hospitals, healthcare networks, and enterprise teams choose NexAgent Infra for deterministic, audited execution.
          </motion.p>
        </motion.div>

        {/* 4 Highlight Cards on Top */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.id}
                variants={fadeUpVariants}
                className="p-6 rounded-2xl bg-white border border-black/[0.08] flex flex-col justify-between space-y-4 group hover:border-[#2b9aaa]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-black/[0.04] text-[#2b9aaa]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0f1117] tracking-tight">
                    {h.metric}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#718096] mt-1 font-semibold">
                    {h.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Comparison Table */}
        <div className="rounded-3xl bg-white border border-black/[0.08] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-black/[0.08] bg-[#f8f9fa]">
                  <th className="py-5 px-6 sm:px-8 text-xs font-mono uppercase tracking-wider text-[#718096] font-semibold w-1/2">
                    Core Capability / Architecture
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-xs font-mono uppercase tracking-wider text-[#0f1117] font-bold w-1/4 bg-[#2b9aaa]/10 border-x border-[#2b9aaa]/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2b9aaa] inline-block" />
                      <span>NexAgent Infra</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-xs font-mono uppercase tracking-wider text-[#718096] font-semibold w-1/4">
                    Legacy / Traditional HIMS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-sm">
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-black/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6 sm:px-8 text-[#0f1117] font-medium">
                      <div>{row.feature}</div>
                      {row.note && (
                        <div className="text-xs text-[#718096] font-normal mt-0.5">
                          {row.note}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 sm:px-8 bg-[#2b9aaa]/[0.03] border-x border-[#2b9aaa]/20 text-center sm:text-left">
                      {row.nexagent ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2ecc71]">
                          <Check className="w-4 h-4 text-[#2ecc71] stroke-[3]" />
                          <span className="hidden sm:inline">Included</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#718096]">
                          <X className="w-4 h-4 text-[#718096]" />
                          <span className="hidden sm:inline">None</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-center sm:text-left">
                      {row.traditional ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4a5568]">
                          <Check className="w-4 h-4 text-[#718096]" />
                          <span className="hidden sm:inline">Manual Only</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#ef4444]">
                          <X className="w-4 h-4 text-[#ef4444]" />
                          <span className="hidden sm:inline">Not Supported</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
