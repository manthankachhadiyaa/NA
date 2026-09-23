'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Cpu,
  ShieldCheck,
  UserCheck,
  Zap,
  RefreshCw,
  TrendingUp,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface PipelineStage {
  id: number;
  name: string;
  shortLabel: string;
  icon: React.ElementType;
  whatHappens: string;
  whyItMatters: string;
  example: string;
  businessImpact: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: 1,
    name: '01. Ingest & Normalize',
    shortLabel: 'Ingestion',
    icon: FileText,
    whatHappens: 'Captures unstructured incoming business data from emails, PDFs, HL7/FHIR hospital feeds, and webhooks.',
    whyItMatters: 'Removes the need for human staff to manually copy and paste text between disconnected enterprise tools.',
    example: 'A multi-page clinical discharge summary or vendor invoice is received via webhook.',
    businessImpact: 'Instant data readiness; zero human copy-paste errors.',
  },
  {
    id: 2,
    name: '02. Contextual Understanding',
    shortLabel: 'Reasoning',
    icon: Cpu,
    whatHappens: 'Parses text in memory, redacts PII/PHI, and converts information into strict, typed JSON schemas.',
    whyItMatters: 'Ensures AI operations are grounded in validated data structures rather than unconstrained text prompts.',
    example: 'Extracts patient vitals, diagnosis codes, and medication lists into structured fields.',
    businessImpact: 'HIPAA & SOC2 alignment with in-memory data sanitization.',
  },
  {
    id: 3,
    name: '03. Policy Boundary Check',
    shortLabel: 'Validation',
    icon: ShieldCheck,
    whatHappens: 'Evaluates incoming tasks against hardcoded WebAssembly enterprise rules, clinical thresholds, and limits.',
    whyItMatters: 'Guarantees the system operates strictly within predefined compliance boundaries without hallucinating actions.',
    example: 'Verifies whether a requested invoice discount or patient prescription alteration requires executive sign-off.',
    businessImpact: 'Zero unauthorized bypass; deterministic policy enforcement.',
  },
  {
    id: 4,
    name: '04. Human-in-the-Loop Intercept',
    shortLabel: 'Governance',
    icon: UserCheck,
    whatHappens: 'High-stakes decisions automatically pause and route to a designated human supervisor with one-click approval.',
    whyItMatters: 'Places human leadership in cryptographic control of critical decisions while automating routine legwork.',
    example: 'The attending physician receives an alert to sign off on a pre-compiled discharge packet.',
    businessImpact: '100% human oversight on clinical and high-value financial actions.',
  },
  {
    id: 5,
    name: '05. Transactional Execution & Sync',
    shortLabel: 'Execution',
    icon: Zap,
    whatHappens: 'Dispatches confirmed state updates directly into target systems (EMR, CRM, ERP, and databases).',
    whyItMatters: 'Eliminates administrative lag by completing the actual work across all connected enterprise systems.',
    example: 'Updates hospital bed status to "Cleaning Scheduled" and notifies housekeeping on mobile.',
    businessImpact: 'Cuts bed turnover time from 110 minutes to 35 minutes.',
  },
  {
    id: 6,
    name: '06. Traceable Audit Ledger',
    shortLabel: 'Audit',
    icon: RefreshCw,
    whatHappens: 'Every input token, policy validation, human approval signature, and database commit is logged to an immutable ledger.',
    whyItMatters: 'Provides complete forensic visibility for regulatory audits, internal compliance, and continuous optimization.',
    example: 'Full timeline record generated showing doctor sign-off timestamp and bed turnover dispatch.',
    businessImpact: 'Audit-ready compliance records with zero manual documentation effort.',
  },
];

export default function SolutionsPipeline() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const current = pipelineStages.find((s) => s.id === activeStage) || pipelineStages[0];
  const CurrentIcon = current.icon;

  return (
    <section id="solutions" className="py-24 bg-[#f8f9fa] border-t border-black/[0.06] relative content-visibility-auto">
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
            <Eyebrow pulseColor="cyan">Operating Architecture</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            How NexAgent turns business input into executed action.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#4a5568] leading-relaxed">
            Unlike superficial chat bots, NexAgent Infra operates as an intelligent pipeline: every task is ingested, validated against strict enterprise rules, gated by human approval, and committed transactionally.
          </motion.p>
        </motion.div>

        {/* Pipeline Stepper & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Sequential Pipeline Stages */}
          <div className="lg:col-span-5 space-y-2.5">
            {pipelineStages.map((stage) => {
              const isSelected = activeStage === stage.id;
              const StageIcon = stage.icon;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/30 min-h-[44px] ${
                    isSelected
                      ? 'bg-white text-[#0f1117] border-[#2b9aaa]/30 shadow-md translate-x-1'
                      : 'bg-white/60 text-[#4a5568] border-black/[0.07] hover:bg-white hover:border-black/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected ? 'bg-[#2b9aaa]/10 text-[#2b9aaa]' : 'bg-black/[0.04] text-[#718096]'
                      }`}
                    >
                      <StageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-sm font-bold block ${isSelected ? 'text-[#0f1117]' : 'text-[#2d3748]'}`}>
                        {stage.name}
                      </span>
                      <span className={`text-xs block ${isSelected ? 'text-[#718096]' : 'text-[#94a3b8]'}`}>
                        {stage.shortLabel}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold ${
                      isSelected ? 'bg-[#2b9aaa]/10 text-[#2b9aaa]' : 'bg-black/[0.04] text-[#94a3b8]'
                    }`}
                  >
                    Step 0{stage.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Stage Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={transitionPresets.fast}
                className="space-y-6"
              >
                {/* Stage Header */}
                <div className="flex items-start sm:items-center gap-4 border-b border-black/[0.06] pb-6 flex-wrap">
                  <div className="p-3.5 rounded-2xl bg-[#2b9aaa]/10 text-[#2b9aaa] shrink-0">
                    <CurrentIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2b9aaa] font-bold">
                      Operating Stage 0{current.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1117] mt-1">
                      {current.name}
                    </h3>
                  </div>
                </div>

                {/* What Happens */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0f1117] font-bold">
                    What Happens
                  </h4>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {current.whatHappens}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0f1117] font-bold">
                    Why It Matters
                  </h4>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {current.whyItMatters}
                  </p>
                </div>

                {/* Real-World Example */}
                <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-black/[0.07] space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold">
                    Operational Example
                  </div>
                  <div className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                    {current.example}
                  </div>
                </div>

                {/* Business Outcome Banner */}
                <div className="p-5 rounded-2xl bg-[#0f1117] text-white flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold">
                      Verified Business Outcome
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {current.businessImpact}
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-[#2b9aaa] shrink-0" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
