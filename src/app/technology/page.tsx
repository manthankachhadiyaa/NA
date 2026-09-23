'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import TechStackExplorer from '@/components/interactive/TechStackExplorer';
import { ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TechnologyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568]">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/technology" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Deterministic Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f1117] tracking-tight leading-[1.12]">
            The 7-Layer Deterministic Operating Stack.
          </h1>

          <p className="text-lg sm:text-xl text-[#2d3748] font-medium max-w-3xl leading-relaxed">
            Enterprise software cannot rely on unpredictable, single-prompt AI wrappers. NexAgent enforces an engineered 7-layer pipeline designed for deterministic execution, continuous auditability, and absolute policy safety.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#152e3a] hover:bg-[#1e4557] rounded-xl shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Schedule Technical Architecture Deep-Dive</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

        {/* Embedded Interactive 7-Layer Explorer */}
        <section id="architecture" className="border-t border-black/10 pt-8">
          <TechStackExplorer />
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
