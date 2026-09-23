'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import SolutionsPipeline from '@/components/interactive/SolutionsPipeline';
import HmsShowcase from '@/components/products/HmsShowcase';
import ChooseYourSetup from '@/components/interactive/ChooseYourSetup';
import IndustryExplorer from '@/components/interactive/IndustryExplorer';
import BentoStats from '@/components/sections/BentoStats';
import FoundersSection from '@/components/sections/FoundersSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import StrategyCallModal from '@/components/modals/StrategyCallModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/" />

      {/* Main Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section + Signature 3D Totem Visual */}
        <HeroSection onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 2. Architectural Thesis */}
        <WhatWeDo />

        {/* 3. Solutions Operating Pipeline */}
        <SolutionsPipeline />

        {/* 4. Products: NexAgent HMS, Hospitality & Core */}
        <HmsShowcase onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 5. Interactive Environment Configurator */}
        <ChooseYourSetup onOpenStrategyCall={() => setModalOpen(true)} />

        {/* 6. Specialized Industries */}
        <IndustryExplorer />

        {/* 7. Measurable Bento Stats */}
        <BentoStats />

        {/* 8. Equal Co-Founders Presentation */}
        <FoundersSection />

        {/* 9. Executive FAQ Accordion */}
        <FaqAccordion />

        {/* Final High-Impact Strategy Call Strip */}
        <section className="py-20 bg-[#0f1117] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#2b9aaa] text-xs font-mono font-bold uppercase tracking-wider mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] animate-pulse inline-block" />
              <span>Ready for Operational Transformation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Eliminate operational friction with deterministic AI.
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Request a live product demo and pilot sandbox access with co-founders Manthan Kachhadiya and Savani Vraj to test our systems in your operational environment.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f1117] bg-white hover:bg-[#f1f5f9] active:scale-[0.98] rounded-xl shadow-lg transition-all"
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
