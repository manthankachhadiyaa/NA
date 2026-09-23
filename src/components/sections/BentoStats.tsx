'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
} from '@/lib/motion';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  explanation: string;
}

const metrics: MetricItem[] = [
  {
    id: 'modules',
    value: '15+',
    label: 'INTEGRATED MODULES',
    explanation: 'EMR, LIS, RIS, Pharmacy, Billing & CRM',
  },
  {
    id: 'triage',
    value: '42%',
    label: 'WAIT TIME REDUCTION',
    explanation: 'Real-time outpatient queue balancing',
  },
  {
    id: 'turnaround',
    value: '35 min',
    label: 'BED TURNAROUND',
    explanation: 'Automated housekeeping dispatch',
  },
  {
    id: 'enforcement',
    value: '100%',
    label: 'POLICY ENFORCEMENT',
    explanation: 'Hardcoded WebAssembly safety filters',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'UPTIME SLA',
    explanation: 'High-availability cloud architecture',
  },
];

export default function BentoStats() {
  return (
    <section id="metrics" className="py-14 bg-[#0f1117] relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-white/[0.08]"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariants}
              className={`flex flex-col justify-center space-y-1.5 ${
                idx === 0 ? 'lg:pr-8' : idx === metrics.length - 1 ? 'lg:pl-8' : 'lg:px-8'
              } pt-4 lg:pt-0`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#2b9aaa] font-semibold">
                {item.label}
              </div>
              <div className="text-xs text-[#94a3b8] leading-relaxed">
                {item.explanation}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
