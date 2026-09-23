'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import {
  Activity,
  Bed,
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  FileCheck,
  Zap,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';

export default function HmsProductPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const clinicalCapabilities = [
    {
      title: 'Automated ESI Triage & Outpatient Queue Balancing',
      desc: 'Normalizes incoming outpatient vitals into standard Emergency Severity Index levels, balancing patient loads across active doctor consultation rooms in real time.',
    },
    {
      title: 'Real-Time Bed Turnover & Housekeeping Dispatch',
      desc: 'Instant environmental services dispatch upon electronic doctor discharge orders. Reduces empty bed lag from 110 minutes down to 35 minutes.',
    },
    {
      title: 'Pre-Compiled Clinical Discharge Packets',
      desc: 'Automatically reconciles lab results, pharmacy clearances, and insurance pre-authorizations into a unified review packet ready for 1-click attending physician sign-off.',
    },
    {
      title: 'Full Inpatient (IPD), ICU & OT Surgical Coordination',
      desc: 'Tracks ward occupancy, patient telemetry alerts, and operating theatre schedules to eliminate surgery handoff delays and nursing ratio deficits.',
    },
    {
      title: 'Integrated Digital Pharmacy & Formulary Sync',
      desc: 'Real-time e-prescriptions, automated inventory tracking, and drug-interaction safety warnings with mandatory doctor verification.',
    },
    {
      title: 'TPA & Cashless Insurance Pre-Authorization Engine',
      desc: 'Pre-formats medical records and itemized billing into insurance claim packets, cutting claim rejection rates by up to 60%.',
    },
  ];

  const comparisonPoints = [
    {
      dimension: 'Operational Scope',
      conventional: 'Basic clinic management, isolated OPD visits & basic EMR',
      nexagent: 'Full-spectrum enterprise Hospital OS: OPD, IPD, ICU, OT, Pharmacy, LIS/RIS & TPA billing',
    },
    {
      dimension: 'Queue & Flow Coordination',
      conventional: 'Manual patient token generation and receptionist-controlled lists',
      nexagent: 'Deterministic AI queue balancing with real-time room availability & acuity routing',
    },
    {
      dimension: 'Bed Turnover Dispatch',
      conventional: 'Not available; requires manual nursing phone calls to housekeeping',
      nexagent: 'Autonomous environmental services dispatch upon doctor discharge sign-off (35 min turnover)',
    },
    {
      dimension: 'Regulatory Compliance',
      conventional: 'Basic EMR record storage',
      nexagent: 'Full ABDM (M1, M2, M3), ABHA generation & NABH immutable digital audit logs',
    },
    {
      dimension: 'Clinical Safety & Governance',
      conventional: 'Generic LLM chatbots or standard web forms',
      nexagent: 'Sandboxed WebAssembly policy engine with 100% mandatory doctor sign-off gate',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-600">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/products/hms" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* Product Hero */}
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Enterprise Healthcare Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            NexAgent HMS: Beyond Basic EMRs. The Complete Hospital Operating System.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 font-medium max-w-3xl leading-relaxed">
            Eliminate operational drag across your clinical network. Orchestrate outpatient triage queues, automate bed turnover dispatch, pre-compile discharge packets, and streamline TPA claims with deterministic AI and zero hallucination risk.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 rounded-xl shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Request Hospital Pilot Access</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

        {/* Key Metrics Strip */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="text-3xl font-extrabold text-zinc-950 mb-2">35 min</div>
            <h3 className="text-sm font-bold text-zinc-900 mb-1">Average Bed Turnover</h3>
            <p className="text-xs text-zinc-500">Automated environmental services dispatch upon electronic doctor discharge order.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="text-3xl font-extrabold text-zinc-950 mb-2">42%</div>
            <h3 className="text-sm font-bold text-zinc-900 mb-1">Queue Delay Reduction</h3>
            <p className="text-xs text-zinc-500">Intelligent ESI acuity triage balances outpatient loads across consultation rooms.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="text-3xl font-extrabold text-zinc-950 mb-2">100%</div>
            <h3 className="text-sm font-bold text-zinc-900 mb-1">Doctor-in-the-Loop Governance</h3>
            <p className="text-xs text-zinc-500">Zero autonomous execution on prescriptions, diagnoses, or discharge orders.</p>
          </div>
        </section>

        {/* Comparison: Why NexAgent Surpasses Conventional HMS */}
        <section className="space-y-6 border-t border-zinc-200 pt-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
              System Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Why NexAgent HMS is engineered beyond standard software.
            </h2>
            <p className="text-sm text-zinc-600">
              Conventional point solutions and clinic tools focus on passive practitioner record-keeping. NexAgent delivers a unified, high-throughput operating system for acute healthcare facilities.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="p-4 font-bold text-zinc-950 uppercase tracking-wider font-mono">Dimension</th>
                  <th className="p-4 font-bold text-zinc-500 uppercase tracking-wider font-mono">Conventional Hospital Software</th>
                  <th className="p-4 font-bold text-white uppercase tracking-wider font-mono bg-black">NexAgent HMS (Hospital OS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 font-bold text-zinc-950 whitespace-nowrap">{row.dimension}</td>
                    <td className="p-4 text-zinc-500">{row.conventional}</td>
                    <td className="p-4 text-zinc-950 font-medium bg-zinc-50">{row.nexagent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="space-y-8 border-t border-zinc-200 pt-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Clinical Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Purpose-built for acute hospital operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicalCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-100 text-zinc-900">
                    <CheckCircle2 className="w-5 h-5 text-zinc-900" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-950">{cap.title}</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-10">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="p-8 rounded-2xl bg-black text-white space-y-6 border border-zinc-800">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Security &amp; Regulatory Standards
            </span>
            <h3 className="text-2xl font-extrabold">Enterprise Clinical Compliance</h3>
            <p className="text-sm text-zinc-400">
              Designed to integrate seamlessly into existing hospital IT infrastructures without compromising data security or regulatory standing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800 text-xs font-mono">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-white font-bold block mb-1">HL7 / FHIR</span>
              <span className="text-zinc-400">Native protocol ingestion from Epic, Cerner, and legacy hospital EMRs.</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-white font-bold block mb-1">ABDM &amp; NABH Ready</span>
              <span className="text-zinc-400">ABHA generation, M1/M2/M3 compliance &amp; immutable audit ledger logging.</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-white font-bold block mb-1">Zero Hallucination</span>
              <span className="text-zinc-400">Hardcoded WebAssembly policy checks prevent clinical limit breaches.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Deploy NexAgent HMS in your hospital network.
          </h3>
          <p className="text-sm text-zinc-600 max-w-xl mx-auto">
            Schedule a live demo with founders Manthan Kachhadiya and Savani Vraj to review queue metrics and test bed turnover workflows in a pilot sandbox.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 rounded-xl transition-all shadow-md"
            >
              Request Live HMS Demo &amp; Sandbox Access
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
