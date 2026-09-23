'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Code2, LineChart } from 'lucide-react';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

export default function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-white border-t border-black/[0.06] content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mb-14 space-y-4"
        >
          <motion.div variants={fadeUpVariants} className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Equal Leadership · One Operating Vision</span>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Two founders. One operating vision.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#4a5568] leading-relaxed">
            NexAgent is built by two equal co-founders combining product thinking, business strategy, AI, and engineering to build intelligent systems for modern businesses.
          </motion.p>
        </motion.div>

        {/* Dual Equal Co-Founders Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Founder 1: Manthan Kachhadiya */}
          <motion.div
            variants={fadeUpVariants}
            whileHover={{ y: -4, transition: transitionPresets.fast }}
            className="bg-white rounded-2xl border border-black/[0.08] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[360px] sm:h-[400px] bg-[#0c1015]">
                <Image
                  src="/assets/founder_manthan.png"
                  alt="Manthan Kachhadiya - Co-Founder, Technology & AI"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-[#2b9aaa] bg-[#2b9aaa]/10 border border-[#2b9aaa]/25 font-bold mb-2">
                    Co-Founder
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0f1117] tracking-tight">Manthan Kachhadiya</h3>
                  <p className="text-xs text-[#2b9aaa] font-mono font-semibold mt-1">
                    Technology &amp; AI · Systems Architecture · Engineering
                  </p>
                </div>

                <blockquote className="text-sm text-[#0f1117] font-medium italic border-l-2 border-[#2b9aaa] pl-3 leading-relaxed">
                  "Focused on building the deterministic intelligence systems, WebAssembly policy runtimes, and low-latency infrastructure that turn operational workflows into reliable software."
                </blockquote>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                  Leads core systems engineering, autonomous agent runtimes, and data infrastructure. Eliminates AI hallucinations by enforcing strict schema contracts and deterministic policy boundaries before execution.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#718096]">
              <div className="flex items-center gap-2 font-mono">
                <Code2 className="w-4 h-4 text-[#2b9aaa]" />
                <span className="font-medium text-[#4a5568]">Technology &amp; AI Domain</span>
              </div>
              <Link
                href="/about#founders"
                className="font-bold text-[#0f1117] hover:text-[#2b9aaa] inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Founder 2: Savani Vraj */}
          <motion.div
            variants={fadeUpVariants}
            whileHover={{ y: -4, transition: transitionPresets.fast }}
            className="bg-white rounded-2xl border border-black/[0.08] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[360px] sm:h-[400px] bg-[#0c1015]">
                <Image
                  src="/assets/founder_vraj.png"
                  alt="Savani Vraj - Co-Founder, Product & Business"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest text-[#2b9aaa] bg-[#2b9aaa]/10 border border-[#2b9aaa]/25 font-bold mb-2">
                    Co-Founder
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0f1117] tracking-tight">Savani Vraj</h3>
                  <p className="text-xs text-[#2b9aaa] font-mono font-semibold mt-1">
                    Product &amp; Business · Operations · Enterprise Strategy
                  </p>
                </div>

                <blockquote className="text-sm text-[#0f1117] font-medium italic border-l-2 border-[#2b9aaa] pl-3 leading-relaxed">
                  "Focused on understanding complex operational bottlenecks and turning them into useful products, clinical queue workflows, and scalable enterprise partnerships."
                </blockquote>
                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                  Directs product strategy, commercial scaling, and hospital network deployments. Aligns complex operational pain points with friction-free software experiences that deliver measurable ROI.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#718096]">
              <div className="flex items-center gap-2 font-mono">
                <LineChart className="w-4 h-4 text-[#2b9aaa]" />
                <span className="font-medium text-[#4a5568]">Product &amp; Business Domain</span>
              </div>
              <Link
                href="/about#founders"
                className="font-bold text-[#0f1117] hover:text-[#2b9aaa] inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
