'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Scan,
  Briefcase,
  ArrowRight,
  Check,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface SetupOption {
  id: string;
  name: string;
  subtext: string;
  badge?: string;
  icon: React.ElementType;
}

const setupOptions: SetupOption[] = [
  {
    id: 'hospital',
    name: 'Hospital',
    subtext: 'Multi-specialty hospital management & bed turnover',
    badge: 'Available',
    icon: Building2,
  },
  {
    id: 'clinic',
    name: 'Clinic',
    subtext: 'Private practices and outpatient queue balance',
    badge: 'Coming Soon',
    icon: Stethoscope,
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    subtext: 'Diagnostic labs and bidirectional LIS sync',
    badge: 'Coming Soon',
    icon: FlaskConical,
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    subtext: 'Inventory, batch billing, and dispensing',
    badge: 'Coming Soon',
    icon: Pill,
  },
  {
    id: 'radiology',
    name: 'Radiology',
    subtext: 'RIS, PACS, and imaging workflow routing',
    badge: 'Coming Soon',
    icon: Scan,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtext: 'Cross-tool CRM, ERP, and operations sync',
    badge: 'Available',
    icon: Briefcase,
  },
];

const departmentTags = [
  'OPD',
  'IPD',
  'Day Care',
  'Emergency',
  'Pharmacy',
  'Laboratory',
  'Radiology',
  'Nursing',
  'Dialysis',
  'EMR / Prescription',
  'MRD',
  'Appointment Queue',
];

interface ChooseYourSetupProps {
  onOpenStrategyCall: () => void;
}

export default function ChooseYourSetup({ onOpenStrategyCall }: ChooseYourSetupProps) {
  const [selectedSetup, setSelectedSetup] = useState<string>('hospital');
  const [selectedTags, setSelectedTags] = useState<string[]>([
    'OPD',
    'IPD',
    'Emergency',
    'EMR / Prescription',
  ]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section id="setup" className="py-24 bg-white border-t border-black/[0.08] relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="cyan">Environment Configurator</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Choose Your Setup
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#718096]">
            Select your operational environment to explore tailored modules, automated workflows, and governance rules.
          </motion.p>
        </motion.div>

        {/* 6 Environment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {setupOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedSetup === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => setSelectedSetup(opt.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40 ${
                  isSelected
                    ? 'bg-white border-[#2b9aaa] ring-2 ring-[#2b9aaa]/25 shadow-lg'
                    : 'bg-[#f8f9fa] border-black/[0.06] hover:bg-white hover:border-black/15'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]'
                        : 'bg-black/[0.04] text-[#718096] group-hover:text-[#0f1117]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-[#0f1117]">
                        {opt.name}
                      </span>
                      {opt.badge && (
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                            opt.badge === 'Available'
                              ? 'bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20'
                              : 'bg-black/[0.04] text-[#718096] border border-black/[0.08]'
                          }`}
                        >
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#718096] block mt-0.5 line-clamp-1">
                      {opt.subtext}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected
                      ? 'text-[#2b9aaa] translate-x-1'
                      : 'text-[#94a3b8] group-hover:text-[#0f1117]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Department Multi-Select Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f9fa] border border-black/[0.08] shadow-sm text-center space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f1117] tracking-tight">
              What departments do you manage?
            </h3>
            <p className="text-xs sm:text-sm text-[#718096]">
              Select all operational areas you want to orchestrate (multi-select enabled):
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {departmentTags.map((tag) => {
              const isChecked = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 min-h-[40px] sm:min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40 ${
                    isChecked
                      ? 'bg-[#0f1117] text-white font-bold shadow-md scale-[1.02] border border-[#0f1117]'
                      : 'bg-white text-[#4a5568] hover:text-[#0f1117] hover:bg-white/80 border border-black/[0.08]'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 text-[#2b9aaa] stroke-[3]" />}
                  <span>{tag}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="md"
              showArrow
              onClick={onOpenStrategyCall}
            >
              View Tailored Architecture Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
