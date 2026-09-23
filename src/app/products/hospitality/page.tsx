'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import {
  Hotel,
  TrendingUp,
  Sparkles,
  RefreshCw,
  CalendarCheck,
  Utensils,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Key,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';

export default function HospitalityProductPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const capabilities = [
    {
      title: 'Algorithmic Dynamic Revenue & Pricing Engine',
      desc: 'Continuously evaluates real-time market demand, local events, competitor pricing, and booking pace to optimize room rates dynamically—maximizing RevPAR without manual intervention.',
      icon: TrendingUp,
    },
    {
      title: '24/7 Autonomous Guest Concierge & Digital Key',
      desc: 'Native multi-lingual AI agent operating across WhatsApp, web, and voice. Handles guest inquiries, room service orders, digital key issuance, and self check-in/out with zero front desk queues.',
      icon: Sparkles,
    },
    {
      title: 'Real-Time Housekeeping & Maintenance Dispatch',
      desc: 'Instant task routing triggered automatically when a guest checks out or reports an issue. Prioritizes rooms based on upcoming VIP arrivals and tracks turnover progress in real time.',
      icon: RefreshCw,
    },
    {
      title: 'Unified 2-Way OTA Channel Synchronization',
      desc: 'Instant, bidirectional inventory synchronization across Booking.com, Expedia, Agoda, Airbnb, and direct booking engines. Completely eliminates double-booking errors.',
      icon: CalendarCheck,
    },
    {
      title: 'Contactless F&B, POS & Banquet Management',
      desc: 'In-room QR dining, smart Kitchen Display System (KDS) coordination, automated mini-bar inventory replenishment, and seamless instant room-folio charging.',
      icon: Utensils,
    },
    {
      title: 'Unified Guest Profile & Preferences Ledger',
      desc: 'Centralizes guest stay history, dietary requirements, room temperature preferences, and loyalty status across single hotels or multi-property enterprise chains.',
      icon: Key,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568]">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/products/hospitality" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* Product Hero */}
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>AI-Powered Hospitality Operating System</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f1117] tracking-tight leading-[1.12]">
            NexAgent Hospitality OS: The Entirely AI-Powered Hotel Management System.
          </h1>

          <p className="text-lg sm:text-xl text-[#2d3748] font-medium max-w-3xl leading-relaxed">
            Transform hotel operations from fragmented manual handoffs into an autonomous, high-revenue ecosystem. Maximize RevPAR with algorithmic dynamic pricing, delight guests with 24/7 autonomous concierge workflows, and automate room turnover dispatch.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#152e3a] hover:bg-[#1e4557] rounded-xl shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Request Live Hospitality Demo &amp; Sandbox</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

        {/* Operational Proof Points */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-[#0f1117] mb-2">+28%</div>
            <h3 className="text-sm font-bold text-[#2d3748] mb-1">RevPAR Maximization</h3>
            <p className="text-xs text-[#718096]">Algorithmic dynamic room pricing driven by real-time booking pace and local market demand.</p>
          </div>

          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-[#0f1117] mb-2">0 min</div>
            <h3 className="text-sm font-bold text-[#2d3748] mb-1">Reception Queue Wait Time</h3>
            <p className="text-xs text-[#718096]">Automated mobile check-in, WhatsApp concierge, and digital room key generation.</p>
          </div>

          <div className="bg-white rounded-2xl border border-black/10 p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-[#0f1117] mb-2">22 min</div>
            <h3 className="text-sm font-bold text-[#2d3748] mb-1">Average Room Turnover</h3>
            <p className="text-xs text-[#718096]">Automated housekeeping dispatch triggered upon checkout with smart priority routing.</p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="space-y-8 border-t border-black/10 pt-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#2b9aaa] uppercase tracking-wider">
              Autonomous Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1117]">
              Engineered for luxury resorts, boutique hotels &amp; enterprise chains.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#2b9aaa]/10 text-[#2b9aaa]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0f1117]">{cap.title}</h3>
                  </div>
                  <p className="text-sm text-[#4a5568] leading-relaxed pl-12">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Integration & Architecture */}
        <section className="p-8 rounded-2xl bg-[#0f1117] text-white space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs font-bold text-[#2b9aaa] uppercase tracking-wider">
              Integration &amp; Architecture
            </span>
            <h3 className="text-2xl font-extrabold">Enterprise Hospitality Infrastructure</h3>
            <p className="text-sm text-[#94a3b8]">
              Seamlessly integrates with your existing locks, payment gateways, channel managers, and accounting systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#2b9aaa] font-bold block mb-1">2-Way OTA Sync</span>
              <span className="text-[#cbd5e1]">Direct certified integration with Booking.com, Expedia, Agoda, and Airbnb.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#2b9aaa] font-bold block mb-1">Smart Locks &amp; IoT</span>
              <span className="text-[#cbd5e1]">Native support for Assa Abloy, Salto, Dormakaba, and smart room thermostats.</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[#2b9aaa] font-bold block mb-1">PCI-DSS Level 1</span>
              <span className="text-[#cbd5e1]">End-to-end tokenized payment processing and automated guest folio reconciliation.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-white border border-black/10 shadow-sm text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1117]">
            Deploy NexAgent Hospitality OS in your property.
          </h3>
          <p className="text-sm text-[#4a5568] max-w-xl mx-auto">
            Schedule a live demo and test-drive our AI concierge, dynamic pricing engine, and housekeeping dispatch in a pilot sandbox.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#152e3a] hover:bg-[#1e4557] rounded-xl transition-all shadow-md"
            >
              Request Live Demo &amp; Sandbox Access
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
