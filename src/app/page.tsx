'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import HmsShowcase from '@/components/products/HmsShowcase';
import ConfiguratorTeaser from '@/components/interactive/ConfiguratorTeaser';
import BentoStats from '@/components/sections/BentoStats';
import FoundersSection from '@/components/sections/FoundersSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import StrategyCallModal from '@/components/modals/StrategyCallModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#3f3f46] overflow-x-hidden">
      {/* Top Standard Navigation */}
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/" />

      {/* Main Flow: Minimalist, High-Signal Unicorn Architecture */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section with Monochrome Architecture Totem */}
        <HeroSection onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 2. Architectural Thesis & 4 Pillars */}
        <WhatWeDo />

        {/* 3. Flagship Products: NexAgent HMS (Hospital OS) & Hospitality OS */}
        <HmsShowcase onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 4. Dedicated Solution Architect Teaser (Links to /setup) */}
        <ConfiguratorTeaser onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 5. Measurable Outcomes & Bento Stats */}
        <BentoStats />

        {/* 6. Co-Founders Presentation: Manthan Kachhadiya & Savani Vraj */}
        <FoundersSection />

        {/* 7. Executive Operational FAQ */}
        <FaqAccordion />

        {/* 8. Final High-Contrast Monochrome Strategy Call Strip */}
        <section className="py-24 bg-[#09090b] text-white relative overflow-hidden border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-bold uppercase tracking-wider mx-auto text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
              <span>Enterprise Operational Readiness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Eliminate operational friction with deterministic AI.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Request a live product demonstration and sandbox access with co-founders Manthan Kachhadiya and Savani Vraj to test NexAgent in your operational environment.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#09090b] bg-white hover:bg-zinc-200 active:scale-[0.98] rounded-full shadow-xl transition-all"
              >
                Request Live Demo &amp; Sandbox Access
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenStrategyCall={() => setModalOpen(true)} />

      {/* Strategy Call Booking Modal */}
      <StrategyCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
