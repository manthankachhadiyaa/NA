'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StrategyCallModal from '@/components/modals/StrategyCallModal';
import {
  ShieldCheck,
  Cpu,
  Users,
  Layers,
  TrendingUp,
  Lock,
  ArrowRight,
  Code2,
  LineChart,
  Globe2,
  Building2,
} from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Deterministic Over Generative',
    icon: Cpu,
    desc: 'Unpredictable chatbots have no place in core business operations. We build deterministic pipelines where identical inputs produce identical, validated, and auditable outputs.',
  },
  {
    num: '02',
    title: 'Zero Hallucination Tolerance',
    icon: ShieldCheck,
    desc: 'Every extracted record, clinical parameter, and financial figure is validated against strict schemas and hardcoded WebAssembly policy rules before any action is executed.',
  },
  {
    num: '03',
    title: 'Human-in-the-Loop Governance',
    icon: Users,
    desc: 'High-stakes decisions are never autonomous. We build friction-free approval gates that place human supervisors in full cryptographic control of critical outcomes.',
  },
  {
    num: '04',
    title: 'Composable Integration Stack',
    icon: Layers,
    desc: 'We integrate with your existing software—EMRs, CRMs, ERPs, Kafka, and SQL—without demanding costly, high-risk rip-and-replace migrations.',
  },
  {
    num: '05',
    title: 'Measurable Operational ROI',
    icon: TrendingUp,
    desc: 'We measure success by hours saved, queue delays eliminated, and bed turnaround acceleration—never by vanity engagement metrics or chat volumes.',
  },
  {
    num: '06',
    title: 'Zero Trust Security & Privacy',
    icon: Lock,
    desc: 'Built with in-memory PII/PHI redaction, HIPAA & SOC2 alignment, and immutable audit ledgers designed for clinical and financial compliance.',
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4a5568]">
      <Navbar onOpenStrategyCall={() => setModalOpen(true)} activePath="/about" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* Company Header */}
        <section className="space-y-6">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Company &amp; Operating Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f1117] tracking-tight">
            About NexAgent
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 font-medium max-w-3xl leading-relaxed">
            The operating layer for businesses moving from manual work to intelligent operations.
          </p>

          <blockquote className="p-6 rounded-2xl bg-zinc-50 border-l-4 border-black shadow-sm text-base sm:text-lg italic text-zinc-950 leading-relaxed">
            “NexAgent is being built by two founders with a shared vision: make sophisticated AI-powered business systems accessible to businesses of every size.”
          </blockquote>
        </section>

        {/* 01 — Why We Exist */}
        <section className="space-y-6 border-t border-zinc-200 pt-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-zinc-400 font-bold">01</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">Why We Exist</h2>
          </div>

          <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
            <p>
              Every day, organizations lose tens of thousands of productive hours to operational friction: copying information across disconnected software tools, manually triaging customer tickets, chasing approvals, and reconciling records.
            </p>
            <p>
              While modern software provides databases and communication channels, it still relies on human beings as the glue between systems. Most &ldquo;AI solutions&rdquo; introduced to solve this are superficial chat wrappers that deflect conversations without actually resolving underlying work.
            </p>
            <p className="font-semibold text-zinc-950">
              NexAgent exists to eliminate this friction. We build software that doesn&rsquo;t just log tasks—it executes them deterministically, integrating directly into enterprise stacks and clinical systems to turn requests into completed work.
            </p>
          </div>
        </section>

        {/* 02 — What We're Building */}
        <section className="space-y-6 border-t border-zinc-200 pt-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-zinc-400 font-bold">02</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">What We&rsquo;re Building</h2>
          </div>

          <p className="text-base text-zinc-600 leading-relaxed">
            We build AI-powered business software, automation systems, dashboards, CRM systems, workflows, and industry-specific business solutions. Our systems are engineered to participate directly in operations with complete human-in-the-loop governance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-zinc-950">Enterprise Workflow Automation</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Connects fragmented enterprise tools, normalizes multi-channel requests, and executes routine cross-department handoffs deterministically.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-zinc-950">NexAgent HMS (Healthcare Suite)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Purpose-built hospital operating software that orchestrates outpatient triage queues, bed turnover housekeeping, and EMR discharge documentation.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — How We Think */}
        <section className="space-y-8 border-t border-zinc-200 pt-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-zinc-400 font-bold">03</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">How We Think</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-400">{pillar.num}</span>
                    <div className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-900">
                      <PillarIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950">{pillar.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 04 — The Founders */}
        <section id="founders" className="space-y-8 border-t border-zinc-200 pt-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-zinc-400 font-bold">04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
                Built by Two Founders. One Vision.
              </h2>
            </div>
            <p className="text-base text-zinc-600">
              NexAgent is built by two equal co-founders with equal equity, equal decision-making authority, and complementary domains of responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Manthan Kachhadiya */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-[360px] sm:h-[400px] bg-zinc-900">
                  <Image
                    src="/assets/founder_manthan.webp"
                    alt="Manthan Kachhadiya - Co-Founder"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-zinc-900 bg-zinc-100 border border-zinc-300 font-bold mb-2">
                      Co-Founder
                    </div>
                    <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Manthan Kachhadiya</h3>
                    <p className="text-xs text-zinc-500 font-mono font-semibold mt-1">
                      Technology &amp; AI · Systems Architecture · Engineering
                    </p>
                  </div>

                  <blockquote className="text-sm text-zinc-900 font-medium italic border-l-2 border-black pl-3 leading-relaxed">
                    “Focused on building the technology and intelligence systems that turn ideas into working, reliable products.”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Leads core software engineering, deterministic agent runtimes, WebAssembly safety policy filters, and low-latency infrastructure. Dedicated to building mission-critical software systems that eliminate human error.
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-zinc-200 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Code2 className="w-4 h-4 text-zinc-900" />
                <span className="font-medium text-zinc-700">Domain: Technology &amp; AI</span>
              </div>
            </div>

            {/* Savani Vraj */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-[360px] sm:h-[400px] bg-zinc-900">
                  <Image
                    src="/assets/founder_vraj.webp"
                    alt="Savani Vraj - Co-Founder"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-zinc-900 bg-zinc-100 border border-zinc-300 font-bold mb-2">
                      Co-Founder
                    </div>
                    <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Savani Vraj</h3>
                    <p className="text-xs text-zinc-500 font-mono font-semibold mt-1">
                      Product &amp; Business · Operations · Strategy
                    </p>
                  </div>

                  <blockquote className="text-sm text-zinc-900 font-medium italic border-l-2 border-black pl-3 leading-relaxed">
                    “Focused on understanding business problems and turning them into useful products and systems.”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Directs product strategy, commercial scaling, and hospital network deployments. Focuses on translating complex operational friction into streamlined, high-leverage software experiences that deliver measurable ROI.
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-zinc-200 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <LineChart className="w-4 h-4 text-zinc-900" />
                <span className="font-medium text-zinc-700">Domain: Product &amp; Business</span>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Where We're Going */}
        <section className="space-y-6 border-t border-zinc-200 pt-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-zinc-400 font-bold">05</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">Where We&rsquo;re Going</h2>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-4">
            <p className="text-base text-zinc-600 leading-relaxed">
              NexAgent is operating globally from India, building toward a large-scale technology company. We are pioneering the next era of enterprise software: systems that do not just store records or chat, but actively participate in operations.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-zinc-900" />
                <span>Global Cloud Architecture</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-zinc-900" />
                <span>Operating from India for Global Enterprises</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200">
                ✦ Founded: 2026
              </span>
            </div>
          </div>
        </section>

        {/* 06 — Work With Us */}
        <section className="p-8 sm:p-12 rounded-2xl bg-black text-white text-center space-y-5 border border-zinc-800">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
            <span>06 — Work With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build intelligent operations with us?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Schedule an architecture discovery call directly with co-founders Manthan Kachhadiya and Savani Vraj to discuss your operational workflows.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-100 active:scale-[0.98] rounded-xl shadow-lg transition-all"
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
