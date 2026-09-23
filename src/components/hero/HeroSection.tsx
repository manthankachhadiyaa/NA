'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Plus, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';
import TotemAnimation from './TotemAnimation';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import TechnicalGrid from '@/components/ui/TechnicalGrid';
import {
  fadeUpVariants,
  staggerContainerVariants,
  transitionPresets,
} from '@/lib/motion';

interface HeroSectionProps {
  onOpenStrategyCall: () => void;
}

interface AccordionItem {
  id: string;
  idx: string;
  name: string;
  description: string;
  features: string[];
}

const operationalLayers: AccordionItem[] = [
  {
    id: 'connect',
    idx: '01',
    name: 'Unified Data & Event Ingestion',
    description: 'Captures and normalizes incoming requests from HL7/FHIR hospital feeds, EMRs, PDFs, and webhooks.',
    features: [
      'Automatic PII/PHI redaction in memory before downstream reasoning',
      'Transforms unstructured text and emails into strongly-typed JSON schemas',
      'Idempotent message deduplication with zero data loss',
    ],
  },
  {
    id: 'action',
    idx: '02',
    name: 'Contextual Reasoning Core',
    description: 'Understands operational state and evaluates standard operating procedures in real time.',
    features: [
      'Cross-references historical clinical or enterprise records instantly',
      'Strict schema validation eliminates ungrounded hallucinations',
      'Automated task triage load balancing based on priority & urgency',
    ],
  },
  {
    id: 'control',
    idx: '03',
    name: 'Policy & Human-in-the-Loop Governance',
    description: 'Enforces hardcoded enterprise boundaries with supervisory cryptographic sign-off.',
    features: [
      'Deterministic WebAssembly rules prevent unauthorized action bypass',
      'Clinical & high-value financial actions automatically pause for 1-click human approval',
      'Full compliance with HIPAA, SOC2 Type II, and ISO 27001 standards',
    ],
  },
  {
    id: 'context',
    idx: '04',
    name: 'Transactional Execution & Audit Ledger',
    description: 'Dispatches confirmed state updates directly into target systems with immutable telemetry.',
    features: [
      'Two-phase commit writes into hospital EMRs, CRMs, ERPs, and databases',
      'Cuts bed turnover time to 35 minutes and outpatient wait delays by 42%',
      'Append-only cryptographic ledger captures every decision for forensic auditability',
    ],
  },
];

export default function HeroSection({ onOpenStrategyCall }: HeroSectionProps) {
  const [activeLayer, setActiveLayer] = useState<string>('connect');

  return (
    <section id="home" className="relative w-full pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
      {/* Subtle Background Grid */}
      <TechnicalGrid withVignette withDots={false} dark={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Copy & Operational Pipeline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Eyebrow Pill */}
            <motion.div variants={fadeUpVariants}>
              <Eyebrow pulseColor="cyan">
                Agentic Cloud Infrastructure · Built for Healthcare, Hospitality &amp; Enterprise
              </Eyebrow>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f1117] tracking-tight leading-[1.08]"
            >
              Operations.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f1117] via-[#2b9aaa] to-[#1a6b7a]">
                Reinvented.
              </span>
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              variants={fadeUpVariants}
              className="text-sm sm:text-base md:text-lg text-[#4a5568] max-w-2xl leading-relaxed"
            >
              NexAgent builds deterministic AI operating systems that power real business operations—from complete Hospital Management Systems (HMS) and AI-driven Hospitality platforms to cross-enterprise workflow synchronization, with mandatory human-in-the-loop governance.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="md"
                showArrow
                onClick={onOpenStrategyCall}
                className="w-full sm:w-auto justify-center"
              >
                Request Live Demo
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#products"
                className="w-full sm:w-auto justify-center"
              >
                Explore Products ↓
              </Button>
            </motion.div>

            {/* Technical Metadata Bar */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs font-mono text-[#94a3b8] flex flex-wrap items-center gap-x-4 gap-y-1 pt-1"
            >
              <span>✦ Founded 2026</span>
              <span>✦ Operating Globally from India</span>
              <span>✦ Zero Unauthorized Bypass</span>
            </motion.div>

            {/* Interactive 4-Layer Operational Pipeline Accordion */}
            <motion.div variants={fadeUpVariants} className="pt-4 space-y-2.5">
              {operationalLayers.map((layer) => {
                const isActive = activeLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isActive
                        ? 'bg-white border-[#2b9aaa]/30 shadow-[0_4px_20px_rgba(43,154,170,0.10)]'
                        : 'bg-[#f8f9fa] border-black/[0.07] hover:bg-white hover:border-black/[0.12]'
                    }`}
                  >
                    <button
                      onClick={() => setActiveLayer(layer.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40 min-h-[44px]"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? 'text-[#2b9aaa]' : 'text-[#94a3b8]'
                          }`}
                        >
                          {layer.idx}
                        </span>
                        <div>
                          <span className={`font-bold text-sm sm:text-base block ${isActive ? 'text-[#0f1117]' : 'text-[#2d3748]'}`}>
                            {layer.name}
                          </span>
                          {!isActive && (
                            <span className="text-xs text-[#718096] block line-clamp-1">
                              {layer.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#718096] transition-transform duration-300 shrink-0 ${
                          isActive ? 'rotate-180 text-[#2b9aaa]' : ''
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="px-5 pb-5 pt-1 border-t border-[#2b9aaa]/10 space-y-2.5">
                        <p className="text-xs sm:text-sm text-[#4a5568] font-medium leading-relaxed">
                          {layer.description}
                        </p>
                        <ul className="space-y-1.5 text-xs text-[#718096]">
                          {layer.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Plus className="w-3.5 h-3.5 text-[#2b9aaa] mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: 3D Totem Visual */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <TotemAnimation activeLayer={activeLayer} onSelectLayer={setActiveLayer} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
