'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
              <Eyebrow>
                Deterministic Cloud Infrastructure · Healthcare &amp; Enterprise
              </Eyebrow>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#09090b] tracking-tight leading-[1.08]"
            >
              Operations.{' '}
              <span className="text-[#09090b] underline decoration-black/20 underline-offset-8">
                Reinvented.
              </span>
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              variants={fadeUpVariants}
              className="text-sm sm:text-base md:text-lg text-[#52525b] max-w-2xl leading-relaxed"
            >
              NexAgent builds deterministic AI operating systems that power real business operations—from complete Hospital Management Systems (HMS) and AI-driven Hospitality platforms to cross-enterprise workflow synchronization, with mandatory human-in-the-loop governance.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/setup"
                className="btn-architect"
              >
                <span>Launch Solution Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenStrategyCall}
                className="btn-demo-glow"
              >
                <span>Request Live Demo</span>
              </button>
            </motion.div>

            {/* Technical Metadata Bar */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs font-mono text-[#71717a] flex flex-wrap items-center gap-x-4 gap-y-1 pt-1"
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
                    className={`rounded-2xl border transition-all duration-150 overflow-hidden ${
                      isActive
                        ? 'bg-white border-black ring-1 ring-black/10 shadow-sm'
                        : 'bg-[#fafafa] border-black/[0.08] hover:bg-white hover:border-black/20'
                    }`}
                  >
                    <button
                      onClick={() => setActiveLayer(layer.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 min-h-[44px]"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? 'text-[#09090b]' : 'text-[#71717a]'
                          }`}
                        >
                          {layer.idx}
                        </span>
                        <div>
                          <span className={`font-bold text-sm sm:text-base block ${isActive ? 'text-[#09090b]' : 'text-[#3f3f46]'}`}>
                            {layer.name}
                          </span>
                          {!isActive && (
                            <span className="text-xs text-[#71717a] block line-clamp-1">
                              {layer.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#71717a] transition-transform duration-200 shrink-0 ${
                          isActive ? 'rotate-180 text-[#09090b]' : ''
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="px-5 pb-5 pt-1 border-t border-black/[0.06] space-y-2.5">
                        <p className="text-xs sm:text-sm text-[#3f3f46] font-medium leading-relaxed">
                          {layer.description}
                        </p>
                        <ul className="space-y-1.5 text-xs text-[#71717a]">
                          {layer.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Plus className="w-3.5 h-3.5 text-[#09090b] mt-0.5 shrink-0" />
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
