'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import { Stethoscope, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HealthcareIndustryPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568]">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/industries/healthcare" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Healthcare &amp; Clinical Networks</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f1117] tracking-tight leading-[1.12]">
            Healthcare Technology: Autonomous Coordination with Human Sign-off.
          </h1>

          <p className="text-lg sm:text-xl text-[#2d3748] font-medium max-w-3xl leading-relaxed">
            Hospitals manage high-stakes, multi-departmental workflows where delays cost lives and administrative friction causes doctor burnout. NexAgent delivers deterministic automation that coordinates staff, queues, and bed turnover.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/products/hms"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#152e3a] hover:bg-[#1e4557] rounded-xl shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Explore NexAgent HMS Suite</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2d3748] bg-white hover:bg-black/5 border border-black/10 rounded-xl transition-all"
            >
              Request Live Demo
            </button>
          </div>
        </section>

        {/* Operational Friction vs Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#ef4444] font-bold">
              The Healthcare Friction Problem
            </div>
            <h3 className="text-xl font-bold text-[#0f1117]">Disconnected Clinical Hand-offs</h3>
            <p className="text-sm text-[#4a5568] leading-relaxed">
              When a patient is discharged, hours are lost waiting for pharmacy clearance, manual insurance approval, and environmental services notification. Doctors spend over 35% of their working hours re-entering data across fragmented EMR screens.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2ecc71] font-bold">
              The NexAgent Solution
            </div>
            <h3 className="text-xl font-bold text-[#0f1117]">Deterministic Queue Orchestration</h3>
            <p className="text-sm text-[#4a5568] leading-relaxed">
              NexAgent monitors electronic orders to immediately trigger housekeeping dispatch, pre-populate discharge summaries, and cross-check clinical guidelines. Human physicians retain 100% cryptographic approval authority.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
