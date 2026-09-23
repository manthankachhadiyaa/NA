'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SimulationStep {
  id: number;
  label: string;
  status: 'pending' | 'running' | 'completed' | 'waiting_approval';
  detail: string;
}

const scenarioOptions = [
  {
    id: 'discharge',
    name: 'Hospital Patient Discharge & Bed Turnover',
    steps: [
      { id: 1, label: 'Ingest Discharge Order', detail: 'Received physician electronic discharge order from EMR (Patient #8841)' },
      { id: 2, label: 'Cross-Check Clinical Clearance', detail: 'Lab values confirmed within baseline; pharmacy medication list verified' },
      { id: 3, label: 'Policy & Safety Validation', detail: 'Hospital rule #402 passed: No pending critical telemetry alerts' },
      { id: 4, label: 'Human-in-the-Loop Sign-off', detail: 'Attending physician Dr. Mehta cryptographically signs discharge authorization' },
      { id: 5, label: 'Dispatch Environmental Services', detail: 'Housekeeping alert sent: Ward 4, Bed 12 scheduled for deep sanitization' },
      { id: 6, label: 'Audit Log & Record Commit', detail: 'Discharge summary written to permanent ledger and sent to insurance' },
    ],
  },
  {
    id: 'crm',
    name: 'Enterprise Contract Renewal & Quota Sync',
    steps: [
      { id: 1, label: 'Ingest Signed Addendum', detail: 'DocuSign webhook received for Acme Corp Enterprise Agreement ($120k ARR)' },
      { id: 2, label: 'Parse Financial Terms', detail: 'Normalized contract length, payment schedules, and seat allocations' },
      { id: 3, label: 'Discount Policy Gate', detail: 'Calculated 12% discount is within pre-approved VP of Sales guidelines' },
      { id: 4, label: 'Sales Ops Confirmation', detail: 'Ops team receives 1-click Slack notification to verify billing currency' },
      { id: 5, label: 'ERP & CRM Provisioning', detail: 'Salesforce opportunity closed-won; Stripe billing schedule activated' },
      { id: 6, label: 'Commission Calculation', detail: 'Rep quota credit recorded in compensation ledger automatically' },
    ],
  },
];

export default function WorkflowSimulator() {
  const [activeScenario, setActiveScenario] = useState(scenarioOptions[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const scenario = scenarioOptions.find((s) => s.id === activeScenario) || scenarioOptions[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && currentStepIndex < scenario.steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 900);
    } else if (currentStepIndex >= scenario.steps.length - 1) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStepIndex, scenario.steps.length]);

  const handleStart = () => {
    setCurrentStepIndex(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
  };

  return (
    <section id="simulation" className="py-20 bg-[#f8f9fa] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Interactive Execution Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1117] tracking-tight">
            Watch deterministic execution in action.
          </h2>
          <p className="text-base text-[#4a5568]">
            Select an operational workflow to simulate how NexAgent processes unstructured data, enforces enterprise safety rules, triggers human approval, and commits updates.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 shadow-sm space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/[0.06] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-[#718096] font-bold whitespace-nowrap">
                Scenario:
              </span>
              <select
                value={activeScenario}
                onChange={(e) => {
                  setActiveScenario(e.target.value);
                  handleReset();
                }}
                className="bg-[#f8f9fa] border border-black/[0.10] rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#0f1117] focus:outline-none focus:border-[#2b9aaa] w-full sm:w-auto"
              >
                {scenarioOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleStart}
                disabled={isRunning || currentStepIndex >= scenario.steps.length - 1}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0f1117] hover:bg-[#1a2030] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all min-h-[44px]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Simulation</span>
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#4a5568] hover:text-[#0f1117] bg-[#f8f9fa] hover:bg-black/[0.06] rounded-lg border border-black/[0.08] transition-all min-h-[44px]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Simulation Step Flow */}
          <div className="space-y-4">
            {scenario.steps.map((step, idx) => {
              const isCompleted = currentStepIndex > idx;
              const isCurrent = currentStepIndex === idx;
              const isPending = currentStepIndex < idx;

              return (
                <div
                  key={step.id}
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isCurrent
                      ? 'bg-[#f0fafb] border-[#2b9aaa]/30 shadow-sm scale-[1.01]'
                      : isCompleted
                      ? 'bg-white border-black/[0.07]'
                      : 'bg-[#f8f9fa]/80 border-black/[0.05] opacity-60'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : isCurrent ? (
                      <Clock className="w-5 h-5 text-[#2b9aaa] animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-black/[0.20] flex items-center justify-center text-[10px] font-mono text-[#718096]">
                        {step.id}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-[#0f1117]">
                        {step.label}
                      </h4>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#718096] whitespace-nowrap">
                        {isCompleted
                          ? 'VERIFIED & EXECUTED'
                          : isCurrent
                          ? 'PROCESSING...'
                          : 'QUEUED'}
                      </span>
                    </div>
                    <p className="text-xs text-[#4a5568]">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simulation Completed Banner */}
          {currentStepIndex >= scenario.steps.length - 1 && (
            <div className="p-4 rounded-xl bg-[#0f1117] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400 shrink-0" />
                <div>
                  <div className="text-sm font-bold">Execution Completed Successfully</div>
                  <div className="text-xs text-[#94a3b8]">
                    All policy gates verified · Full audit cryptographic signature generated
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#2b9aaa] bg-white/10 px-3 py-1 rounded-md whitespace-nowrap">
                100% Deterministic
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
