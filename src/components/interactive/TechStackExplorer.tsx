'use client';

import React, { useState } from 'react';
import { Layers, ShieldAlert, Cpu, CheckSquare, Zap, FileText, Database } from 'lucide-react';

interface TechLayer {
  level: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  guarantee: string;
  latency: string;
}

const techLayers: TechLayer[] = [
  {
    level: 'Layer 01',
    name: 'Unified Ingestion Layer',
    tagline: 'Multi-Protocol Event Ingestion',
    icon: Database,
    description:
      'Ingests raw events from HL7/FHIR hospital feeds, enterprise webhooks, Kafka event streams, and REST APIs with zero data loss.',
    guarantee: 'At-least-once delivery with guaranteed idempotent message deduplication',
    latency: '< 15ms',
  },
  {
    level: 'Layer 02',
    name: 'Context Normalization Engine',
    tagline: 'Deterministic Entity Extraction',
    icon: Layers,
    description:
      'Parses unstructured patient notes, customer tickets, and PDF documents into strongly-typed JSON schemas while redacting PII/PHI in-memory.',
    guarantee: 'Automatic PII/PHI tokenization before any downstream reasoning occurs',
    latency: '< 40ms',
  },
  {
    level: 'Layer 03',
    name: 'Policy & Safety Boundary Filter',
    tagline: 'Hardcoded Enterprise Rules',
    icon: ShieldAlert,
    description:
      'Evaluates incoming operations against strict organizational policies, financial limits, and clinical thresholds before LLMs can suggest actions.',
    guarantee: 'Zero hallucinated bypass; policies execute on deterministic WebAssembly runtimes',
    latency: '< 5ms',
  },
  {
    level: 'Layer 04',
    name: 'Contextual Reasoning Core',
    tagline: 'Deterministic Agent Routing',
    icon: Cpu,
    description:
      'Evaluates normalized state against historical databases and standard operating procedures (SOPs) to assemble proposed action payloads.',
    guarantee: 'Strict JSON-Schema output enforcement with fallback self-correction',
    latency: '< 350ms',
  },
  {
    level: 'Layer 05',
    name: 'Human-in-the-Loop Approval Gate',
    tagline: 'Supervisor Oversight Intercept',
    icon: CheckSquare,
    description:
      'High-risk operations (e.g., patient discharge sign-offs, wire transfers > $10k) automatically pause in a unified executive queue pending human review.',
    guarantee: 'Zero autonomous execution for actions above risk threshold without cryptographic signature',
    latency: 'Real-time sync',
  },
  {
    level: 'Layer 06',
    name: 'Deterministic Execution Connectors',
    tagline: 'Transactional Enterprise Dispatch',
    icon: Zap,
    description:
      'Dispatches authorized state changes directly into target systems: hospital EMR, CRM, ERP, messaging queues, and database records.',
    guarantee: 'Two-phase commit transactions with automated compensation rollbacks',
    latency: '< 80ms',
  },
  {
    level: 'Layer 07',
    name: 'Traceable Audit Ledger',
    tagline: 'Immutable Event Telemetry',
    icon: FileText,
    description:
      'Every input token, policy check, human approval signature, and database write is permanently preserved in an append-only audit trail.',
    guarantee: 'SOC2 Type II, HIPAA, and ISO 27001 audit readiness out of the box',
    latency: '< 20ms',
  },
];

export default function TechStackExplorer() {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const activeLayer = techLayers[selectedLayer];
  const IconComponent = activeLayer.icon;

  return (
    <section id="technology" className="py-20 bg-[#f8f8f6] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="status-badge-pill">
            <span className="pulse-dot" />
            <span>Architecture &amp; Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1a24] tracking-tight">
            The 7-Layer Deterministic Operating Stack.
          </h2>
          <p className="text-base text-[#4a5766]">
            NexAgent does not rely on fragile single-prompt AI scripts. We built a 7-layer pipeline designed for enterprise reliability, continuous auditability, and absolute policy enforcement.
          </p>
        </div>

        {/* 7-Layer Interactive Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Layer Steps (Left) */}
          <div className="lg:col-span-6 space-y-2">
            {techLayers.map((layer, idx) => {
              const isSelected = selectedLayer === idx;
              const LayerIcon = layer.icon;
              return (
                <button
                  key={layer.level}
                  onClick={() => setSelectedLayer(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-zinc-50 text-zinc-950 border-black shadow-sm ring-1 ring-black'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      <LayerIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isSelected ? 'text-zinc-950' : 'text-zinc-400'
                        }`}
                      >
                        {layer.level}
                      </span>
                      <span className={`text-sm font-bold ${isSelected ? 'text-zinc-950' : 'text-zinc-700'}`}>
                        {layer.name}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded font-medium ${
                      isSelected ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {layer.latency}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Layer Deep-Dive Card (Right) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-zinc-200 pb-6">
              <div className="p-3.5 rounded-xl bg-black text-white">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  {activeLayer.level} · {activeLayer.tagline}
                </span>
                <h3 className="text-2xl font-extrabold text-zinc-950 mt-0.5">
                  {activeLayer.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              {activeLayer.description}
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold mb-1">
                  Security &amp; Determinism Guarantee
                </div>
                <div className="text-xs sm:text-sm text-zinc-950 font-medium">
                  {activeLayer.guarantee}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black text-white flex items-center justify-between border border-zinc-800">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                    Target Execution Budget
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {activeLayer.latency} latency ceiling
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-md">
                  P99 Performance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
