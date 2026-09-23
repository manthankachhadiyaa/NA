'use client';

import React from 'react';
import { motion } from 'motion/react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

const pillars = [
  {
    num: '01',
    title: 'Zero Data Loss Ingestion',
    desc: 'Normalizes unstructured patient notes, HL7/FHIR feeds, and enterprise webhooks into typed JSON schemas.',
  },
  {
    num: '02',
    title: 'Deterministic Policy Gates',
    desc: 'Hardcoded WebAssembly rules evaluate financial thresholds and clinical guidelines before any action executes.',
  },
  {
    num: '03',
    title: 'Human-in-the-Loop Sign-Off',
    desc: 'High-stakes clinical orders and wire approvals pause automatically for one-click supervisory cryptographic sign-off.',
  },
  {
    num: '04',
    title: 'Append-Only Audit Ledger',
    desc: 'Every token, policy validation, and state commit is permanently recorded for forensic regulatory compliance.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="thesis" className="py-24 bg-white relative overflow-hidden border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left: Large Editorial Statement */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-5 space-y-6">
            <Eyebrow>The Architectural Thesis</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] tracking-tight leading-[1.12]">
              Automated operations engineered for high-stakes environments where error is not an option.
            </h2>
            <p className="text-sm sm:text-base text-[#71717a] leading-relaxed">
              Superficial AI chatbots fail in real businesses because they lack determinism, auditability, and system integration. NexAgent was built from the ground up to operate as active infrastructure—not a conversational toy.
            </p>
          </motion.div>

          {/* Right: Architecture & Pillars Narrative */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-[#fafafa] border border-black/[0.08] space-y-4">
              <h3 className="text-xl font-bold text-[#09090b] tracking-tight">
                From passive databases to active operational execution.
              </h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                Hospitals and enterprises lose thousands of hours to administrative friction: copying records between EMRs, chasing doctor sign-offs, and reconciling invoices across disconnected software. NexAgent connects your existing software tools into a single coordinated pipeline, completing manual hand-offs in seconds while keeping leadership in complete cryptographic control.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="p-6 rounded-2xl bg-white border border-black/[0.08] hover:border-black/25 transition-colors space-y-2 group shadow-xs"
                >
                  <div className="text-xs font-mono font-bold text-[#09090b] group-hover:text-black transition-colors">
                    {p.num} // ARCHITECTURE
                  </div>
                  <h4 className="text-base font-bold text-[#09090b]">{p.title}</h4>
                  <p className="text-xs text-[#71717a] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
