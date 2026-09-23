'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import { Layers, Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WorkflowAutomationSolutionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568]">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/solutions/workflow-automation" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Enterprise Workflow Automation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f1117] tracking-tight leading-[1.12]">
            Deterministic AI Workflows for Enterprise Operations.
          </h1>

          <p className="text-lg sm:text-xl text-[#2d3748] font-medium max-w-3xl leading-relaxed">
            Eliminate repetitive manual operations, data re-entry, and uncoordinated status updates. NexAgent connects your disparate software stacks into self-executing, policy-bounded operational pipelines.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#152e3a] hover:bg-[#1e4557] rounded-xl shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Book an Automation Discovery Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="/technology"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2d3748] bg-white hover:bg-black/5 border border-black/10 rounded-xl transition-all"
            >
              Inspect 7-Layer Architecture
            </Link>
          </div>
        </section>

        {/* 3 Pillars of NexAgent Automation */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm space-y-3">
            <div className="p-2.5 rounded-xl bg-[#2b9aaa]/10 text-[#2d3748] w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0f1117]">Cross-Tool Normalization</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              Ingests unstructured emails, PDF invoices, and webhook events, converting them into structured JSON schemas automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm space-y-3">
            <div className="p-2.5 rounded-xl bg-[#2b9aaa]/10 text-[#2d3748] w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0f1117]">Policy Boundary Governance</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              Hardcoded business limits ensure operations never bypass financial approval thresholds or compliance mandates.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm space-y-3">
            <div className="p-2.5 rounded-xl bg-[#2b9aaa]/10 text-[#2d3748] w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0f1117]">Transactional Commit</h3>
            <p className="text-xs text-[#718096] leading-relaxed">
              Dispatches updates directly to CRM, ERP, and SQL databases with full rollback support and immutable cryptographic logging.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
