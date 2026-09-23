'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Hotel,
  Briefcase,
  ShoppingBag,
  Scale,
  Landmark,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers,
  Sparkles,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

interface IndustryModule {
  id: string;
  name: string;
  tagline: string;
  workflows: string[];
  connectedSystems: string[];
  governanceGate: string;
}

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  oneLiner: string;
  coreChallenge: string;
  solution: string;
  gate: string;
  modules: IndustryModule[];
}

const industryList: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Hospital Networks',
    icon: Stethoscope,
    oneLiner: 'Full-scale Hospital OS: outpatient triage queues, bed turnover, and EMR discharge sync.',
    coreChallenge: 'Manual bed turnover delays, doctor sign-off backlogs, and ABDM/NABH compliance overhead.',
    solution: 'Automated housekeeping dispatch, pre-populated clinical discharge packets, and ABDM M1/M2/M3 compliance.',
    gate: 'Physician prescription, diagnosis sign-off and discharge approval',
    modules: [
      {
        id: 'hc-triage',
        name: 'Outpatient Triage & ESI Acuity Balancer',
        tagline: 'Balances patient arrival queues across consultation rooms in real time.',
        workflows: [
          'Evaluates incoming patient vitals against Emergency Severity Index guidelines',
          'Reroutes non-emergent consults dynamically to shortest available doctor queue',
          'Pushes real-time wait timestamps to patient WhatsApp notifications',
        ],
        connectedSystems: ['HL7/FHIR Intake', 'Consultation EMR', 'WhatsApp Cloud API'],
        governanceGate: 'Triage Nursing Supervisor sign-off on red-flag acuity elevations',
      },
      {
        id: 'hc-bed',
        name: 'Autonomous Bed Turnover & Housekeeping Dispatch',
        tagline: 'Reduces vacant bed turnaround delay from 110 min to 35 min.',
        workflows: [
          'Listens for doctor electronic discharge order and flags bed immediately',
          'Routes cleaning assignment directly to environmental services staff terminal',
          'Confirms room sanitization via photo upload and updates admissions board',
        ],
        connectedSystems: ['Bed Management Board', 'Housekeeping Staff App', 'IoT Sensors'],
        governanceGate: 'Sanitation Inspector sign-off before admission release',
      },
      {
        id: 'hc-tpa',
        name: 'TPA Cashless Pre-Auth & Claim Engine',
        tagline: 'Pre-formats medical records into insurer claims cutting rejection by 60%.',
        workflows: [
          'Extracts clinical notes, diagnostic tests, and itemized billing lines',
          'Validates policy coverage caps and mandatory diagnostic attachments',
          'Monitors cashless approval status and updates discharge counter',
        ],
        connectedSystems: ['TPA Web Portals', 'Hospital Billing Core', 'Insurance EDI Gateways'],
        governanceGate: 'Hospital Billing Superintendent final review before submission',
      },
    ],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Hotel Operations',
    icon: Hotel,
    oneLiner: 'Dynamic room pricing, 24/7 autonomous guest concierge, and housekeeping turnover dispatch.',
    coreChallenge: 'Manual rate adjustments, front-desk check-in queues, and slow room turnover communication.',
    solution: 'Algorithmic dynamic RevPAR pricing, WhatsApp guest concierge, and instant housekeeping dispatch.',
    gate: 'Manager approval on rate override limits and credit refunds',
    modules: [
      {
        id: 'hosp-pricing',
        name: 'Algorithmic RevPAR Dynamic Pricing Engine',
        tagline: 'Optimizes room rates continuously based on booking pace and local demand.',
        workflows: [
          'Scrapes local competitor ADR and event calendars every 15 minutes',
          'Adjusts room rates dynamically across all connected OTA channels',
          'Prevents rate degradation during unexpected localized demand spikes',
        ],
        connectedSystems: ['Channel Manager API', 'PMS Rate Grid', 'Local Event Feeds'],
        governanceGate: 'Revenue Director approval on rates breaching defined floor/ceiling rules',
      },
      {
        id: 'hosp-concierge',
        name: '24/7 Autonomous Guest Concierge & Digital Key',
        tagline: 'Zero front-desk queues via multi-lingual WhatsApp concierge.',
        workflows: [
          'Issues secure encrypted digital room keys directly to guest smartphones',
          'Handles in-room dining orders and automatically routes tickets to kitchen KDS',
          'Resolves extra towel and maintenance requests with automated staff dispatch',
        ],
        connectedSystems: ['Door Lock RFID Cloud', 'Kitchen Display System', 'WhatsApp Business'],
        governanceGate: 'Front Desk Manager verification for room upgrades and key re-issues',
      },
      {
        id: 'hosp-turnover',
        name: 'Automated Housekeeping Turnover Roster',
        tagline: 'Prioritizes room cleaning based on incoming VIP check-in schedule.',
        workflows: [
          'Detects guest checkout in PMS and dispatches maid to specific room floor',
          'Prioritizes early-arrival VIP guests for priority room preparation',
          'Logs minibar inventory consumption and posts charges to guest folio',
        ],
        connectedSystems: ['PMS Room Ledger', 'Housekeeping Tablet App', 'Minibar Barcode Scanner'],
        governanceGate: 'Executive Housekeeper inspection verification prior to guest check-in',
      },
    ],
  },
  {
    id: 'b2b',
    name: 'B2B & Enterprise Services',
    icon: Briefcase,
    oneLiner: 'Client onboarding pipelines, SLA tracking, and cross-team task handoffs.',
    coreChallenge: 'Manual data re-entry between CRM, support desk, and billing systems.',
    solution: 'Bi-directional CRM/ERP field sync with automatic conflict resolution.',
    gate: 'Contract pricing concessions and SLA penalty sign-offs',
    modules: [
      {
        id: 'b2b-sync',
        name: 'Bidirectional CRM & ERP Sync Pipeline',
        tagline: 'Maintains 100% field parity across Salesforce, HubSpot, and NetSuite.',
        workflows: [
          'Synchronizes contract terms, renewal dates, and billing entities automatically',
          'Resolves data collision conflicts using customer-defined deterministic precedence',
          'Creates automated onboarding projects in Jira upon CRM deal closed-won',
        ],
        connectedSystems: ['Salesforce API', 'HubSpot CRM', 'Oracle NetSuite', 'Jira Service Management'],
        governanceGate: 'Account Director approval required to modify closed deal ARR values',
      },
      {
        id: 'b2b-sla',
        name: 'Proactive SLA Breach Escalation Engine',
        tagline: 'Monitors support ticket resolution times and prevents contractual penalties.',
        workflows: [
          'Predicts ticket resolution bottlenecks 2 hours before SLA threshold breaches',
          'Reassigns high-tier customer tickets automatically to on-duty escalation engineers',
          'Dispatches status update summaries to executive sponsors via Slack/Teams',
        ],
        connectedSystems: ['Zendesk API', 'PagerDuty', 'Enterprise Slack/Teams Bot'],
        governanceGate: 'VP of Customer Success sign-off on SLA penalty credit credits',
      },
      {
        id: 'b2b-approvals',
        name: 'Multi-Tier Cryptographic Approval Gates',
        tagline: 'Guarantees zero unauthorized business actions across back-office tools.',
        workflows: [
          'Pauses transactions when discount percentages or credit terms exceed policies',
          'Routes interactive approval cards directly to executive Slack and mobile devices',
          'Embeds cryptographic supervisor signature into immutable audit logs',
        ],
        connectedSystems: ['Slack Interactive Messages', 'Hardware Security Module', 'Audit Log Server'],
        governanceGate: 'CFO / VP Finance digital signature on high-value commitments',
      },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Commerce Operations',
    icon: ShoppingBag,
    oneLiner: 'Omnichannel inventory reconciliation, returns processing, and supplier coordination.',
    coreChallenge: 'Discrepancies between warehouse stock and online store availability.',
    solution: 'Real-time multi-warehouse inventory sync and automated returns triage.',
    gate: 'High-value supplier invoice approvals (> $10,000)',
    modules: [
      {
        id: 'ret-inventory',
        name: 'Omnichannel Real-Time Inventory Reconciler',
        tagline: 'Synchronizes physical warehouse stock with Shopify, Amazon, and POS.',
        workflows: [
          'Reconciles stock decrements across e-commerce channels with sub-second latency',
          'Calculates safety buffers to prevent overselling during high-velocity flash sales',
          'Triggers automated reorder requests when warehouse bin counts hit minimum thresholds',
        ],
        connectedSystems: ['Shopify Plus', 'Amazon Seller API', 'WMS Warehouse Ledger'],
        governanceGate: 'Inventory Controller sign-off on manual stock write-downs',
      },
      {
        id: 'ret-returns',
        name: 'Automated Return Triage & Fraud Shield',
        tagline: 'Processes customer return authorizations and prevents serial return fraud.',
        workflows: [
          'Evaluates customer return histories against warranty terms and fraud patterns',
          'Generates prepaid courier shipping labels and return barcoded manifests',
          'Auto-releases refunds upon warehouse scan confirming genuine item receipt',
        ],
        connectedSystems: ['Returnly/Loop Returns', 'Logistics Courier API', 'Stripe Billing'],
        governanceGate: 'Fraud Operations Manager approval on high-value flagged returns',
      },
      {
        id: 'ret-po',
        name: 'Wholesale Supplier Reorder Automation',
        tagline: 'Eliminates inventory stockouts across top-selling SKU categories.',
        workflows: [
          'Projects 30-day demand curves incorporating seasonal velocity and supplier lead-times',
          'Auto-drafts wholesale purchase orders formatted to vendor EDI specifications',
          'Matches incoming packing slips against original PO line-items and invoices',
        ],
        connectedSystems: ['Supplier EDI Gateway', 'ERP Inventory Module', 'Accounts Payable Core'],
        governanceGate: 'Procurement Director sign-off on purchase orders exceeding budget limits',
      },
    ],
  },
  {
    id: 'prof_services',
    name: 'Professional Services & Legal',
    icon: Scale,
    oneLiner: 'Matter intake, document metadata extraction, and engagement billing hygiene.',
    coreChallenge: 'Hours lost to manual timesheet reconciliation and client document filing.',
    solution: 'Automated billable activity detection and secure document indexing.',
    gate: 'Partner review on final client deliverables and invoices',
    modules: [
      {
        id: 'prof-intake',
        name: 'Automated Matter Intake & Conflict Checking',
        tagline: 'Indexes new client engagements and runs instantaneous conflict searches.',
        workflows: [
          'Extracts corporate entities, adverse parties, and parent companies from client intake forms',
          'Cross-references historical client ledgers and active matters for ethical conflicts',
          'Generates engagement letters and fee agreements with automated e-signature links',
        ],
        connectedSystems: ['Legal Practice Management', 'Corporate Conflict Database', 'DocuSign API'],
        governanceGate: 'Managing Partner review on conflict waivers and engagement acceptance',
      },
      {
        id: 'prof-billing',
        name: 'Billable Activity Reconstruction & Invoice Hygiene',
        tagline: 'Captures missed billable hours while ensuring LEDES billing compliance.',
        workflows: [
          'Reconstructs billable activity logs from calendar meetings, emails, and document edits',
          'Validates time entries against client outside counsel billing guidelines (UTBMS/LEDES)',
          'Flags non-compliant narrative entries before invoice submission to eliminate client write-downs',
        ],
        connectedSystems: ['Outlook/Google Calendar', 'Time Billing Software', 'E-Billing Portals'],
        governanceGate: 'Billing Partner sign-off on final pre-bill adjustments and discounts',
      },
      {
        id: 'prof-docs',
        name: 'Secure Document Extraction & Redaction Vault',
        tagline: 'Extracts metadata and redacts confidential client information automatically.',
        workflows: [
          'Processes scanned contracts, briefs, and discovery records with optical OCR',
          'Detects privileged attorney-client communications and applies automated tags',
          'Redacts sensitive PII and trade secrets before external discovery disclosure',
        ],
        connectedSystems: ['Document Management System', 'eDiscovery OCR Engine', 'Cold Storage Archive'],
        governanceGate: 'Senior Associate validation of privilege log entries prior to disclosure',
      },
    ],
  },
  {
    id: 'fintech',
    name: 'Financial Technology & Risk Operations',
    icon: Landmark,
    oneLiner: 'KYC/AML document extraction, dispute routing, and risk threshold enforcement.',
    coreChallenge: 'Back-office compliance bottlenecks and manual document re-verification.',
    solution: 'Instant ID extraction and automated cross-referencing against sanction lists.',
    gate: 'Suspicious Activity Report (SAR) filing decisions',
    modules: [
      {
        id: 'fin-kyc',
        name: 'Autonomous KYC Verification & Sanctions Screening',
        tagline: 'Verifies customer identity and screens against global AML watchlists.',
        workflows: [
          'Extracts government ID credentials, tax numbers, and proof of address with optical AI',
          'Screens individual and corporate entities against OFAC, PEP, and global sanctions databases',
          'Calculates holistic AML risk score and routes high-risk entities to enhanced due diligence',
        ],
        connectedSystems: ['Government Identity APIs', 'Refinitiv/World-Check AML', 'Core Banking Ledger'],
        governanceGate: 'Compliance Officer sign-off on enhanced due diligence and PEP onboarding',
      },
      {
        id: 'fin-disputes',
        name: 'Card Dispute & Chargeback Defense Orchestrator',
        tagline: 'Recovers lost revenue by compiling evidence packets within card network deadlines.',
        workflows: [
          'Ingests Visa/Mastercard dispute notices and retrieves matching transaction proofs',
          'Auto-assembles signed delivery confirmations, IP logs, and customer communications',
          'Submits standardized chargeback defense packages directly into card issuer gateways',
        ],
        connectedSystems: ['Visa Resolve Online', 'Mastercard Dispute Portal', 'Payment Gateway Vault'],
        governanceGate: 'Chargeback Analyst review before evidence packet submission',
      },
      {
        id: 'fin-reconcile',
        name: 'Multi-Rail Payment Settlement Reconciliation',
        tagline: 'Reconciles payment gateway payouts against bank ledger accounts daily.',
        workflows: [
          'Matches million-record transaction logs across card processors, UPI, and wire rails',
          'Identifies interchange fee discrepancies, settlement delays, and phantom charge reversals',
          'Generates automated adjustment entries and alerts treasury to liquidity mismatches',
        ],
        connectedSystems: ['Treasury Management System', 'SWIFT / Banking Feeds', 'General Ledger ERP'],
        governanceGate: 'Treasury Controller authorization on ledger adjustment journal postings',
      },
    ],
  },
];

export default function IndustryExplorer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>(industryList[0].id);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(industryList[0].modules[0].id);

  const activeIndustry = industryList.find((i) => i.id === selectedId) || industryList[0];

  const handleSelectIndustry = (indId: string) => {
    setSelectedId(indId);
    const ind = industryList.find((i) => i.id === indId) || industryList[0];
    setExpandedModuleId(ind.modules[0]?.id || null);
  };

  return (
    <section id="industries" className="py-24 bg-white border-t border-black/[0.06] relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="cyan">Unified Architecture · Multi-Sector Operations</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Every industry is primary. One unified architecture, customized to your exact workflows.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#4a5568]">
            We do not build fragmented, one-off tools. NexAgent engineers one comprehensive, battle-tested core operational platform with all capabilities out-of-the-box, then seamlessly customizes it to your facility&apos;s exact operational requirements.
          </motion.p>
        </motion.div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {industryList.map((ind) => {
            const isHovered = hoveredId === ind.id;
            const isSelected = selectedId === ind.id;
            const isDimmed = hoveredId !== null && !isHovered;
            const IndIcon = ind.icon;

            return (
              <motion.div
                key={ind.id}
                onMouseEnter={() => setHoveredId(ind.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleSelectIndustry(ind.id)}
                animate={{
                  opacity: isDimmed ? 0.55 : 1,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={transitionPresets.fast}
                className={`p-6 rounded-2xl border cursor-pointer transition-colors duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2b9aaa]/35 shadow-md ring-1 ring-[#2b9aaa]/20'
                    : 'bg-[#f8f9fa] border-black/[0.07] hover:bg-white hover:border-black/[0.14]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected || isHovered
                          ? 'bg-[#2b9aaa]/10 text-[#2b9aaa]'
                          : 'bg-black/[0.05] text-[#718096]'
                      }`}
                    >
                      <IndIcon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold bg-[#2b9aaa]/10 px-2 py-0.5 rounded-full border border-[#2b9aaa]/20">
                        Active View
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#0f1117]">{ind.name}</h3>
                  <p className="text-xs text-[#718096] leading-relaxed line-clamp-2">
                    {ind.oneLiner}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#4a5568] group">
                  <span>Inspect Sector</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isHovered ? 'translate-x-1 text-[#2b9aaa]' : 'text-[#94a3b8]'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel + Downward Expandable Feature Modules */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={transitionPresets.fast}
            className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 lg:p-10 shadow-sm space-y-8"
          >
            {/* Sector Blueprint Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2b9aaa] font-bold">
                    Sector Blueprint
                  </span>
                  <span className="text-xs text-[#94a3b8]">·</span>
                  <h4 className="text-lg font-bold text-[#0f1117]">{activeIndustry.name}</h4>
                </div>

                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  {activeIndustry.oneLiner}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#fff5f5] border border-red-100 space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-bold">
                      Operational Drag
                    </div>
                    <div className="text-xs text-[#4a5568] leading-relaxed">
                      {activeIndustry.coreChallenge}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f0fdf4] border border-green-100 space-y-1.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-green-700 font-bold">
                      NexAgent Execution
                    </div>
                    <div className="text-xs text-[#4a5568] leading-relaxed">
                      {activeIndustry.solution}
                    </div>
                  </div>
                </div>
              </div>

              {/* Human-in-the-Loop Governance Callout */}
              <div className="lg:col-span-4 bg-[#0f1117] text-white rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#2b9aaa] text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mandatory Human Gate</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {activeIndustry.gate}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#94a3b8] block">
                    Zero autonomous bypass on high-stakes actions.
                  </span>
                </div>
              </div>
            </div>

            {/* Inner Sector Feature Modules (Downward Expandable on User Click) */}
            <div className="pt-6 border-t border-black/[0.08] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h5 className="text-base font-bold text-[#0f1117] tracking-tight flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#2b9aaa]" />
                    <span>Sector-Specific Inner Modules &amp; Automation Workflows</span>
                  </h5>
                  <p className="text-xs text-[#718096]">
                    Click any module below to expand downward and inspect the underlying workflows and human checkpoints.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#2b9aaa] font-bold">
                  {activeIndustry.modules.length} Pre-Built Modules Available
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {activeIndustry.modules.map((mod) => {
                  const isExpanded = expandedModuleId === mod.id;

                  return (
                    <div
                      key={mod.id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                        isExpanded
                          ? 'border-[#2b9aaa]/40 shadow-sm ring-1 ring-[#2b9aaa]/15'
                          : 'border-black/[0.08] hover:border-black/20'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl shrink-0 transition-colors ${
                              isExpanded ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]' : 'bg-black/[0.04] text-[#718096]'
                            }`}
                          >
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <h6 className="text-sm font-bold text-[#0f1117]">{mod.name}</h6>
                            <span className="text-xs text-[#718096] block">{mod.tagline}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[11px] font-semibold text-[#718096] hidden sm:inline">
                            {isExpanded ? 'Collapse' : 'Expand Down'}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4 text-[#718096]" />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="industry-mod-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-2 border-t border-black/[0.06] bg-[#fafbfc] space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                                {mod.workflows.map((wf, wIdx) => (
                                  <div
                                    key={wIdx}
                                    className="p-3 rounded-xl bg-white border border-black/[0.06] text-xs text-[#4a5568] flex items-start gap-2 shadow-xs"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] shrink-0 mt-1.5" />
                                    <span>{wf}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] space-y-1 shadow-xs">
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#718096] font-bold block">
                                    Integrated Systems
                                  </span>
                                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                                    {mod.connectedSystems.map((sys, sIdx) => (
                                      <span
                                        key={sIdx}
                                        className="text-xs px-2 py-0.5 rounded bg-[#f1f5f9] text-[#0f1117] font-medium"
                                      >
                                        {sys}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-[#0f1117] text-white space-y-1 shadow-xs">
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>Human Supervisory Checkpoint</span>
                                  </span>
                                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                                    {mod.governanceGate}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
