'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Hotel,
  Briefcase,
  ShoppingBag,
  Scale,
  Landmark,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  oneLiner: string;
  coreChallenge: string;
  solution: string;
  gate: string;
}

const industryList: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Hospital Networks',
    icon: Stethoscope,
    oneLiner: 'Full-scale Hospital OS: outpatient triage queues, bed turnover, and EMR discharge sync.',
    coreChallenge: 'Manual bed turnover delays, doctor sign-off backlogs, and ABDM/NABH compliance overhead.',
    solution: 'Automated housekeeping dispatch, pre-populated clinical discharge packets, and ABDM M1/M2/M3 compliance.',
    gate: 'Physician prescription, diagnosis sign-off and discharge approval',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Hotel Operations',
    icon: Hotel,
    oneLiner: 'Dynamic room pricing, 24/7 autonomous guest concierge, and housekeeping turnover dispatch.',
    coreChallenge: 'Manual rate adjustments, front-desk check-in queues, and slow room turnover communication.',
    solution: 'Algorithmic dynamic RevPAR pricing, WhatsApp guest concierge, and instant housekeeping dispatch.',
    gate: 'Manager approval on rate override limits and credit refunds',
  },
  {
    id: 'b2b',
    name: 'B2B & Enterprise Services',
    icon: Briefcase,
    oneLiner: 'Client onboarding pipelines, SLA tracking, and cross-team task handoffs.',
    coreChallenge: 'Manual data re-entry between CRM, support desk, and billing systems.',
    solution: 'Bi-directional CRM/ERP field sync with automatic conflict resolution.',
    gate: 'Contract pricing concessions and SLA penalty sign-offs',
  },
  {
    id: 'retail',
    name: 'Retail & Commerce Operations',
    icon: ShoppingBag,
    oneLiner: 'Omnichannel inventory reconciliation, returns processing, and supplier coordination.',
    coreChallenge: 'Discrepancies between warehouse stock and online store availability.',
    solution: 'Real-time multi-warehouse inventory sync and automated returns triage.',
    gate: 'High-value supplier invoice approvals (> $10,000)',
  },
  {
    id: 'prof_services',
    name: 'Professional Services',
    icon: Scale,
    oneLiner: 'Matter intake, document metadata extraction, and engagement billing hygiene.',
    coreChallenge: 'Hours lost to manual timesheet reconciliation and client document filing.',
    solution: 'Automated billable activity detection and secure document indexing.',
    gate: 'Partner review on final client deliverables and invoices',
  },
  {
    id: 'fintech',
    name: 'Financial Technology & Operations',
    icon: Landmark,
    oneLiner: 'KYC/AML document extraction, dispute routing, and risk threshold enforcement.',
    coreChallenge: 'Back-office compliance bottlenecks and manual document re-verification.',
    solution: 'Instant ID extraction and automated cross-referencing against sanction lists.',
    gate: 'Suspicious Activity Report (SAR) filing decisions',
  },
];

export default function IndustryExplorer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>(industryList[0].id);

  const activeIndustry = industryList.find((i) => i.id === selectedId) || industryList[0];

  return (
    <section id="industries" className="py-24 bg-white border-t border-black/[0.06] relative content-visibility-auto">
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
            <Eyebrow pulseColor="cyan">Unified Architecture · Multi-Sector Operations</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Every industry is primary. One unified solution, customized to your exact workflows.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#4a5568]">
            We do not build fragmented, one-off tools. NexAgent engineers one comprehensive, battle-tested core operational platform with all capabilities out-of-the-box, then seamlessly customizes it to your facility's exact operational requirements.
          </motion.p>
        </motion.div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {industryList.map((ind) => {
            const isHovered = hoveredId === ind.id;
            const isSelected = selectedId === ind.id;
            const isDimmed = hoveredId !== null && !isHovered;
            const IndIcon = ind.icon;

            return (
              <motion.div
                key={ind.id}
                onMouseEnter={() => setHoveredId(ind.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(ind.id)}
                animate={{
                  opacity: isDimmed ? 0.55 : 1,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={transitionPresets.fast}
                className={`p-6 rounded-2xl border cursor-pointer transition-colors duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2b9aaa]/35 shadow-md ring-1 ring-[#2b9aaa]/20'
                    : 'bg-[#f8f9fa] border-black/[0.07] hover:bg-white hover:border-black/[0.14]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected || isHovered
                          ? 'bg-[#2b9aaa]/10 text-[#2b9aaa]'
                          : 'bg-black/[0.05] text-[#718096]'
                      }`}
                    >
                      <IndIcon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold bg-[#2b9aaa]/10 px-2 py-0.5 rounded-full border border-[#2b9aaa]/20">
                        Active View
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#0f1117]">{ind.name}</h3>
                  <p className="text-xs text-[#718096] leading-relaxed line-clamp-2">
                    {ind.oneLiner}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#4a5568] group">
                  <span>Inspect Sector</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isHovered ? 'translate-x-1 text-[#2b9aaa]' : 'text-[#94a3b8]'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={transitionPresets.fast}
            className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 lg:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2b9aaa] font-bold">
                    Sector Blueprint
                  </span>
                  <span className="text-xs text-[#94a3b8]">·</span>
                  <h4 className="text-lg font-bold text-[#0f1117]">{activeIndustry.name}</h4>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  {activeIndustry.oneLiner}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#fff5f5] border border-red-100 space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-bold">
                      Operational Drag
                    </div>
                    <div className="text-xs text-[#4a5568] leading-relaxed">
                      {activeIndustry.coreChallenge}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f0fdf4] border border-green-100 space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-green-700 font-bold">
                      NexAgent Execution
                    </div>
                    <div className="text-xs text-[#4a5568] leading-relaxed">
                      {activeIndustry.solution}
                    </div>
                  </div>
                </div>
              </div>

              {/* Human-in-the-Loop Governance Callout */}
              <div className="lg:col-span-4 bg-[#0f1117] text-white rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#2b9aaa] text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mandatory Human Gate</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {activeIndustry.gate}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#94a3b8] block">
                    Zero autonomous bypass on high-stakes actions.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
