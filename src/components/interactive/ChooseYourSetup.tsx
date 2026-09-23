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
  Building2,
  FlaskConical,
  Pill,
  Scan,
  ShieldCheck,
  Check,
  ChevronDown,
  ArrowRight,
  Layers,
  Sparkles,
  Zap,
  Clock,
  Cpu,
  Compass,
} from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  fadeUpVariants,
  staggerContainerVariants,
  viewportConfig,
  transitionPresets,
} from '@/lib/motion';

// ==========================================
// 1. DATA DEFINITIONS FOR 4-STEP FUNNEL
// ==========================================

interface IndustryConfig {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  tagline: string;
  products: ProductConfig[];
}

interface ProductConfig {
  id: string;
  name: string;
  category: string;
  badge: 'AVAILABLE' | 'ENTERPRISE READY';
  description: string;
  icon: React.ElementType;
  setups: SetupConfig[];
}

interface SetupConfig {
  id: string;
  name: string;
  subtext: string;
  icon: React.ElementType;
  departments: string[];
  defaultDepartments: string[];
  // Architecture synthesis template
  problemStatement: string;
  ingestionFeeds: string[];
  policyRules: string[];
  automatedActions: string[];
  humanGate: string;
  metric: string;
}

const industryWorkflowData: IndustryConfig[] = [
  // ----------------------------------------------------
  // 1. HEALTHCARE & HOSPITAL NETWORKS
  // ----------------------------------------------------
  {
    id: 'healthcare',
    name: 'Healthcare & Hospital Networks',
    shortName: 'Healthcare',
    icon: Stethoscope,
    tagline: 'Multi-specialty hospital management, clinical queue triage, and bed turnaround.',
    products: [
      {
        id: 'hms',
        name: 'NexAgent HMS (Hospital OS)',
        category: 'ACUTE CARE INFRASTRUCTURE',
        badge: 'AVAILABLE',
        description:
          'Comprehensive Hospital Operating System orchestrating outpatient triage, automated bed turnover, EMR documentation, and TPA billing.',
        icon: Stethoscope,
        setups: [
          {
            id: 'hospital',
            name: 'Multi-Specialty Hospital',
            subtext: 'Acute care facility, multiple wards, ICU, and OT suites',
            icon: Building2,
            departments: [
              'OPD Triage',
              'IPD & Wards',
              'ICU & Critical Care',
              'Emergency Trauma',
              'Bed Turnover',
              'Central Pharmacy',
              'Diagnostic Lab',
              'Radiology PACS',
              'Operation Theatre',
              'TPA Cashless Billing',
            ],
            defaultDepartments: ['OPD Triage', 'IPD & Wards', 'Bed Turnover', 'TPA Cashless Billing'],
            problemStatement:
              'Eliminates 110-minute bed turnover dead-time, reduces outpatient reception queues by 42%, and prepares pre-compiled insurance claim packets with 100% doctor sign-off.',
            ingestionFeeds: ['HL7/FHIR Hospital Stream', 'Doctor Electronic Orders', 'Inpatient Ward Telemetry'],
            policyRules: ['Emergency Severity Index (ESI) Triage Thresholds', 'NABH/ABDM Protocol Validations', 'Narcotic Drug Formulary Bounds'],
            automatedActions: ['Autonomous Housekeeping Terminal Dispatch', 'Pre-Compiled Discharge Summary Assembly', 'TPA Insurance Packet Generation'],
            humanGate: 'Attending Physician sign-off on discharge and prescription orders',
            metric: '35 min average bed turnaround · 42% queue reduction',
          },
          {
            id: 'clinic',
            name: 'Outpatient Specialty Clinic',
            subtext: 'Private practices, consultation queues, and digital billing',
            icon: Stethoscope,
            departments: [
              'Consultation Queue',
              'Patient EHR & Prescriptions',
              'Vitals & Rapid Triage',
              'Digital Billing & UPI',
              'Automated Patient Follow-up',
              'Teleconsultation WebRTC',
            ],
            defaultDepartments: ['Consultation Queue', 'Patient EHR & Prescriptions', 'Digital Billing & UPI'],
            problemStatement:
              'Eliminates patient wait frustration with dynamic WhatsApp queue alerts, voice-to-prescription documentation, and zero-reconciliation billing.',
            ingestionFeeds: ['Appointment Scheduler API', 'Patient Vitals Monitors', 'WhatsApp Business Webhooks'],
            policyRules: ['Drug-to-Drug Allergy Contradiction Check', 'Doctor Consultation Buffer Limits', 'Cashless UPI Verification'],
            automatedActions: ['Dynamic Queue Balancer & WhatsApp Alerts', 'Bilingual E-Prescription Dispatch', 'Automated Chronic Care Follow-up Recalls'],
            humanGate: 'Practicing Physician digital signature on all issued prescriptions',
            metric: '0 reception crowding · 12 min saved per consultation',
          },
          {
            id: 'laboratory',
            name: 'Diagnostic Laboratory',
            subtext: 'Pathology testing, analyzer LIS sync, and automated reports',
            icon: FlaskConical,
            departments: [
              'Phlebotomy & Sample Tracking',
              'Barcode Accessioning',
              'Bidirectional Analyzer LIS Sync',
              'Pathologist Sign-off Queue',
              'Automated PDF Report Dispatch',
              'Critical Panic Value Escalation',
            ],
            defaultDepartments: ['Barcode Accessioning', 'Bidirectional Analyzer LIS Sync', 'Pathologist Sign-off Queue', 'Automated PDF Report Dispatch'],
            problemStatement:
              'Eliminates manual lab result typing through bidirectional analyzer integration, auto-flagging critical panic values within 3 minutes.',
            ingestionFeeds: ['ASTM / HL7 Analyzer Serial Streams', 'Phlebotomy Barcode Scans', 'Patient Test Requisitions'],
            policyRules: ['Delta Check Validation (>20% Variance Flag)', 'Westgard Quality Control Rules', 'Critical Panic Value Thresholds'],
            automatedActions: ['Direct Machine-to-LIS Data Ingestion', 'Watermarked PDF Report Generation', 'Instant WhatsApp Patient PDF Delivery'],
            humanGate: 'Certified Pathologist digital PKI signature before report release',
            metric: 'Sub-3-minute panic value escalation · 0 typing errors',
          },
          {
            id: 'pharmacy',
            name: 'Hospital & Retail Pharmacy',
            subtext: 'Inventory FEFO control, batch billing, and dispensing',
            icon: Pill,
            departments: [
              'Counter Dispensing Verification',
              'Inpatient Ward Indent Fulfillment',
              'FEFO Batch & Expiry Control',
              'Barcode GST Billing',
              'Automated Supplier PO Reorder',
              'Schedule H/X Narcotics Vault',
            ],
            defaultDepartments: ['Counter Dispensing Verification', 'FEFO Batch & Expiry Control', 'Barcode GST Billing'],
            problemStatement:
              'Eliminates dispensing medication mix-ups with scan-to-verify barcodes and avoids expired stock losses via proactive FEFO vendor routing.',
            ingestionFeeds: ['Doctor E-Prescription Stream', 'Inpatient Ward Indents', 'Barcode Inventory Scanners'],
            policyRules: ['FEFO Picking Priority Enforcement', 'Schedule X Narcotic Identity Requirements', 'Minimum Reorder Stock Thresholds'],
            automatedActions: ['Barcode Dispense Verification Match', 'Supplier EDI Purchase Order Drafting', 'Automated GST Invoice HSN Mapping'],
            humanGate: 'Licensed Pharmacist biometric verification on all dispensed medicines',
            metric: 'Zero expired batch write-downs · 30-sec checkout',
          },
          {
            id: 'radiology',
            name: 'Radiology & Imaging Center',
            subtext: 'Modality worklists, web PACS, and radiologist dictation',
            icon: Scan,
            departments: [
              'Modality Worklist (MWL)',
              'Zero-Footprint Web PACS',
              'Radiologist Tele-Reporting',
              'Medical Speech-to-Text Dictation',
              'Critical Acute Finding Alerts',
              'Secure Patient DICOM Portal',
            ],
            defaultDepartments: ['Modality Worklist (MWL)', 'Zero-Footprint Web PACS', 'Radiologist Tele-Reporting', 'Critical Acute Finding Alerts'],
            problemStatement:
              'Accelerates stat scan turnaround time by 55%, routing emergency trauma scans directly to on-call radiologists with zero typing latency.',
            ingestionFeeds: ['DICOM Modality Worklists (CT/MRI/X-Ray)', 'Zero-Loss PACS Storage Engine', 'Voice Dictation Streams'],
            policyRules: ['Renal Function / Contrast Safety Verification', 'Critical Acute Stroke / Trauma Flags', 'DICOM Study Completeness Checks'],
            automatedActions: ['Lossless DICOM Ingestion & Web Streaming', 'Structured RADLEX Report Generation', 'Automated Referring Physician Alert'],
            humanGate: 'Consultant Radiologist signed diagnostic report approval',
            metric: 'Sub-45-min trauma report turnaround · 100% film-free',
          },
        ],
      },
      {
        id: 'predictive_flow',
        name: 'Predictive Capacity & Flow Network',
        category: 'CAPACITY INTELLIGENCE',
        badge: 'ENTERPRISE READY',
        description:
          'Forecasts hospital ward bottlenecks and nurse-to-patient ratios 48 hours in advance, balancing shifts proactively.',
        icon: Clock,
        setups: [
          {
            id: 'hospital_network',
            name: 'Regional Hospital Network',
            subtext: 'Multi-campus capacity coordination & telemetry',
            icon: Building2,
            departments: ['Surge Forecasting', 'Shift Balancing', 'Resource Allocation', 'Inter-Hospital Transfers'],
            defaultDepartments: ['Surge Forecasting', 'Shift Balancing', 'Resource Allocation'],
            problemStatement:
              'Eliminates ICU and ward overflow crises by predicting admission surges 48 hours in advance and recommending optimal staffing adjustments.',
            ingestionFeeds: ['Regional Admission Data', 'Census & Bed Availability', 'Local Epidemiological Trends'],
            policyRules: ['Mandatory Nurse-to-Patient Safety Ratios', 'Max Overtime Caps', 'ICU Bed Buffer Minimums'],
            automatedActions: ['Surge Probability Modeling', 'Staff Shift-Swap Recommendations', 'Inter-Campus Load Redistribution'],
            humanGate: 'Chief Medical Officer / Nursing Director sign-off on surge declarations',
            metric: '48-hour proactive surge warning · 18% overtime reduction',
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------
  // 2. HOSPITALITY & HOTEL OPERATIONS
  // ----------------------------------------------------
  {
    id: 'hospitality',
    name: 'Hospitality & Hotel Operations',
    shortName: 'Hospitality',
    icon: Hotel,
    tagline: 'Dynamic room pricing, 24/7 autonomous guest concierge, and housekeeping turnover.',
    products: [
      {
        id: 'hospitality_os',
        name: 'NexAgent Hospitality OS',
        category: 'PROPERTY MANAGEMENT INFRASTRUCTURE',
        badge: 'AVAILABLE',
        description:
          'Entirely AI-powered Property Management System (PMS) featuring algorithmic RevPAR optimization, WhatsApp concierge, and 2-way OTA sync.',
        icon: Hotel,
        setups: [
          {
            id: 'resort_hotel',
            name: 'Resort & Multi-Property Group',
            subtext: 'Full-service resort, villas, dynamic rates, and guest concierge',
            icon: Hotel,
            departments: [
              'Dynamic RevPAR Pricing',
              'WhatsApp 24/7 Concierge',
              'Housekeeping Turnover Roster',
              'Contactless Check-In & Digital Key',
              'Bidirectional OTA Channel Sync',
              'F&B In-Room Dining & POS',
            ],
            defaultDepartments: ['Dynamic RevPAR Pricing', 'WhatsApp 24/7 Concierge', 'Housekeeping Turnover Roster', 'Bidirectional OTA Channel Sync'],
            problemStatement:
              'Maximizes RevPAR through 15-minute algorithmic pricing adjustments while completely removing front-desk check-in queues via WhatsApp digital keys.',
            ingestionFeeds: ['Competitor ADR & Rate Scrapers', 'Guest WhatsApp Messages', 'OTA Bookings (Booking, Expedia, Airbnb)'],
            policyRules: ['Rate Floor & Ceiling Guardrails', 'VIP Guest Upgrade Policy Rules', 'Minibar Inventory Reconciliation Logic'],
            automatedActions: ['Algorithmic Rate Optimization', 'Digital Key Issuance over WhatsApp', 'Instant Housekeeping Dispatch on Checkout'],
            humanGate: 'Revenue Manager override authorization on manual rate adjustments',
            metric: '+28% RevPAR increase · 0 min reception queue wait time',
          },
          {
            id: 'boutique_hotel',
            name: 'Boutique & Lifestyle Hotel',
            subtext: 'High-touch guest personalization and streamlined operations',
            icon: Building2,
            departments: [
              'WhatsApp Guest Concierge',
              'Dynamic Nightly Pricing',
              'Turnover Dispatch',
              'Guest Preference CRM',
              'Direct Booking Engine Sync',
            ],
            defaultDepartments: ['WhatsApp Guest Concierge', 'Dynamic Nightly Pricing', 'Turnover Dispatch'],
            problemStatement:
              'Provides 24/7 white-glove concierge capabilities without overnight front-desk overhead, tailoring recommendations to guest profiles.',
            ingestionFeeds: ['Guest Inbound Messages', 'Direct Booking Engine', 'Housekeeping Mobile Status'],
            policyRules: ['Guest Preference Match Matrix', 'Complimentary Service Approval Limits', 'Damage Deposit Verification'],
            automatedActions: ['In-Room Dining Routing to KDS', 'Automated Room Readiness Alerts', 'Post-Stay Review Solicitation'],
            humanGate: 'General Manager verification on high-value guest refund requests',
            metric: '4.9/5 guest review satisfaction · 100% contactless arrival',
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------
  // 3. B2B & ENTERPRISE SERVICES
  // ----------------------------------------------------
  {
    id: 'b2b',
    name: 'B2B & Enterprise Services',
    shortName: 'B2B Enterprise',
    icon: Briefcase,
    tagline: 'Cross-tool CRM/ERP transactional sync, SLA tracking, and human-in-the-loop approval gates.',
    products: [
      {
        id: 'enterprise_core',
        name: 'Enterprise Operations Core',
        category: 'ENTERPRISE AUTOMATION',
        badge: 'AVAILABLE',
        description:
          'Unified operational platform connecting Salesforce, Zendesk, SAP, and databases with transactional two-phase commit writes.',
        icon: Zap,
        setups: [
          {
            id: 'saas_corp',
            name: 'B2B SaaS & Tech Enterprise',
            subtext: 'Customer onboarding, CRM sync, and tier-1 ticket resolution',
            icon: Briefcase,
            departments: [
              'Cross-Tool CRM & Helpdesk Sync',
              'Automated Tier-1 Ticket Resolver',
              'Contract Onboarding Pipeline',
              'Predictive SLA Breach Sentinel',
              'Cryptographic Approval Gates',
              'In-Memory PII Tokenization',
            ],
            defaultDepartments: ['Cross-Tool CRM & Helpdesk Sync', 'Automated Tier-1 Ticket Resolver', 'Cryptographic Approval Gates'],
            problemStatement:
              'Eliminates cross-tool administrative handoff lag between support and sales while enforcing strict human approval gates for critical actions.',
            ingestionFeeds: ['Salesforce / HubSpot Webhooks', 'Zendesk Ticket Stream', 'Slack / Teams Event Bus'],
            policyRules: ['Confidence Threshold Scoring (>85% to execute)', 'Hardcoded Contract Modification Boundaries', 'PII/PHI Anonymization Filter'],
            automatedActions: ['Bidirectional CRM Field Synchronization', 'Autonomous Standard Ticket Resolution', 'Jira Engineering Bug Sync'],
            humanGate: 'Executive Supervisor one-click sign-off on transactions breaching risk scores',
            metric: '82% reduction in cross-tool lag · 0 unauthorized actions',
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------
  // 4. RETAIL & COMMERCE OPERATIONS
  // ----------------------------------------------------
  {
    id: 'retail',
    name: 'Retail & Commerce Operations',
    shortName: 'Retail & Commerce',
    icon: ShoppingBag,
    tagline: 'Omnichannel inventory reconciliation, returns processing, and supplier coordination.',
    products: [
      {
        id: 'commerce_core',
        name: 'Omnichannel Commerce Engine',
        category: 'COMMERCE INFRASTRUCTURE',
        badge: 'AVAILABLE',
        description:
          'Real-time multi-warehouse inventory reconciler, automated returns fraud shield, and supplier PO generation.',
        icon: ShoppingBag,
        setups: [
          {
            id: 'omnichannel_brand',
            name: 'Omnichannel Retail Brand',
            subtext: 'Online Shopify/Amazon stores with physical warehouse network',
            icon: ShoppingBag,
            departments: [
              'Real-Time Warehouse Stock Sync',
              'Automated Returns & Fraud Triage',
              'Wholesale Supplier PO Automation',
              'Split Payment & GST Reconciliation',
              'Customer Order Status Bot',
            ],
            defaultDepartments: ['Real-Time Warehouse Stock Sync', 'Automated Returns & Fraud Triage', 'Wholesale Supplier PO Automation'],
            problemStatement:
              'Prevents overselling during high-velocity flash sales and cuts customer return processing times from 5 days down to instant scan-to-refund.',
            ingestionFeeds: ['Shopify Plus / Amazon Orders', 'WMS Barcode Scanners', 'Courier Tracking Webhooks'],
            policyRules: ['Safety Buffer Stock Calculations', 'Customer Return Fraud Scoring', 'Supplier Lead Time Buffers'],
            automatedActions: ['Sub-Second Stock Sync Across Channels', 'Prepaid Return Label Generation', 'Automated EDI Purchase Order Creation'],
            humanGate: 'Fraud Operations Manager sign-off on flagged high-value returns',
            metric: 'Zero inventory overselling · 4-hour return turnaround',
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------
  // 5. PROFESSIONAL SERVICES & LEGAL
  // ----------------------------------------------------
  {
    id: 'prof_services',
    name: 'Professional Services & Legal',
    shortName: 'Legal & Advisory',
    icon: Scale,
    tagline: 'Matter intake, automated conflict checking, billable activity detection, and document redaction.',
    products: [
      {
        id: 'legal_ops',
        name: 'Practice Operations OS',
        category: 'PRACTICE INFRASTRUCTURE',
        badge: 'AVAILABLE',
        description:
          'Automated client matter intake, instantaneous ethical conflict checking, LEDES invoice hygiene, and confidential document redaction.',
        icon: Scale,
        setups: [
          {
            id: 'law_firm',
            name: 'Law Firm & Advisory Practice',
            subtext: 'Partner billing, matter management, and confidential discovery',
            icon: Scale,
            departments: [
              'Matter Intake & Conflict Checking',
              'Billable Activity Reconstruction',
              'LEDES/UTBMS Invoice Hygiene',
              'Confidential Document Redaction',
              'Secure Client Document Portal',
            ],
            defaultDepartments: ['Matter Intake & Conflict Checking', 'Billable Activity Reconstruction', 'Confidential Document Redaction'],
            problemStatement:
              'Eliminates missed billable hours through automated activity reconstruction and prevents client write-downs by enforcing LEDES guidelines.',
            ingestionFeeds: ['Calendar & Email Telemetry', 'Client Intake Webhooks', 'Scanned Discovery Documents'],
            policyRules: ['Ethical Corporate Conflict Checks', 'Client Billing Guideline Adherence', 'Attorney-Client Privilege Tags'],
            automatedActions: ['Automated Draft Pre-Bill Assembly', 'Optical OCR Metadata Extraction', 'Confidential PII Redaction Vault'],
            humanGate: 'Billing Partner sign-off on pre-bills and client deliverable release',
            metric: '18% billable revenue recovery · 0 conflict breaches',
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------
  // 6. FINANCIAL TECHNOLOGY & RISK
  // ----------------------------------------------------
  {
    id: 'fintech',
    name: 'Financial Technology & Risk',
    shortName: 'Fintech & Risk',
    icon: Landmark,
    tagline: 'Autonomous KYC/AML sanctions screening, card dispute defense, and payment settlement reconciliation.',
    products: [
      {
        id: 'fintech_risk',
        name: 'Risk & Dispute Defense Core',
        category: 'FINANCIAL INFRASTRUCTURE',
        badge: 'AVAILABLE',
        description:
          'Automated KYC document extraction, continuous sanctions screening, card dispute evidence assembly, and ledger reconciliation.',
        icon: Landmark,
        setups: [
          {
            id: 'fintech_platform',
            name: 'Fintech & Payment Gateway',
            subtext: 'High-volume transaction processing, AML risk, and card disputes',
            icon: Landmark,
            departments: [
              'Autonomous KYC & Sanctions Screen',
              'Card Dispute & Chargeback Defense',
              'Multi-Rail Payment Reconciliation',
              'Suspicious Activity Flagging',
              'Cryptographic Decision Ledger',
            ],
            defaultDepartments: ['Autonomous KYC & Sanctions Screen', 'Card Dispute & Chargeback Defense', 'Multi-Rail Payment Reconciliation'],
            problemStatement:
              'Recovers lost revenue by assembling card dispute evidence within network deadlines and eliminates onboarding backlogs with sub-60s KYC verification.',
            ingestionFeeds: ['Visa/Mastercard Dispute Feeds', 'Government Identity APIs', 'Multi-Rail Banking Feeds'],
            policyRules: ['OFAC / PEP Sanctions Thresholds', 'Card Network Evidence Requirements', 'Interchange Settlement Tolerances'],
            automatedActions: ['Standardized Dispute Evidence Package Submission', 'Daily Multi-Rail Ledger Reconciliation', 'Instant AML Risk Scoring'],
            humanGate: 'Compliance Officer sign-off on Suspicious Activity Reports (SAR)',
            metric: '68% chargeback win rate · Sub-60s KYC verification',
          },
        ],
      },
    ],
  },
];

// ==========================================
// 2. MAIN PROGRESSIVE FUNNEL COMPONENT
// ==========================================

interface ChooseYourSetupProps {
  onOpenStrategyCall: () => void;
}

export default function ChooseYourSetup({ onOpenStrategyCall }: ChooseYourSetupProps) {
  // Funnel State
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('healthcare');
  const [selectedProductId, setSelectedProductId] = useState<string>('hms');
  const [selectedSetupId, setSelectedSetupId] = useState<string>('hospital');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([
    'OPD Triage',
    'IPD & Wards',
    'Bed Turnover',
    'TPA Cashless Billing',
  ]);

  // Derived current selections
  const currentIndustry =
    industryWorkflowData.find((ind) => ind.id === selectedIndustryId) || industryWorkflowData[0];
  const currentProduct =
    currentIndustry.products.find((prod) => prod.id === selectedProductId) || currentIndustry.products[0];
  const currentSetup =
    currentProduct.setups.find((setup) => setup.id === selectedSetupId) || currentProduct.setups[0];

  // Handler: Change Industry (resets product, setup, and departments)
  const handleSelectIndustry = (indId: string) => {
    setSelectedIndustryId(indId);
    const ind = industryWorkflowData.find((i) => i.id === indId) || industryWorkflowData[0];
    const defaultProd = ind.products[0];
    setSelectedProductId(defaultProd.id);
    const defaultSetup = defaultProd.setups[0];
    setSelectedSetupId(defaultSetup.id);
    setSelectedDepartments(defaultSetup.defaultDepartments);
  };

  // Handler: Change Product (resets setup and departments)
  const handleSelectProduct = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = currentIndustry.products.find((p) => p.id === prodId) || currentIndustry.products[0];
    const defaultSetup = prod.setups[0];
    setSelectedSetupId(defaultSetup.id);
    setSelectedDepartments(defaultSetup.defaultDepartments);
  };

  // Handler: Change Setup (resets departments)
  const handleSelectSetup = (setupId: string) => {
    setSelectedSetupId(setupId);
    const setup = currentProduct.setups.find((s) => s.id === setupId) || currentProduct.setups[0];
    setSelectedDepartments(setup.defaultDepartments);
  };

  // Handler: Toggle Department Tag
  const toggleDepartment = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  return (
    <section id="setup" className="py-24 bg-white border-t border-black/[0.08] relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow pulseColor="cyan">Progressive Architecture Configurator</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight leading-[1.12]"
          >
            Find Your Tailored Operational Architecture.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-base text-[#718096]">
            Follow the 4-step discovery pipeline: Choose your industry ➔ select your product ➔ customize your setup and departments ➔ receive a tailored, policy-bounded solution architecture.
          </motion.p>
        </motion.div>

        {/* ========================================================== */}
        {/* STEP 1: INDUSTRY WE WORK WITH */}
        {/* ========================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#0f1117] text-white text-xs font-mono font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0f1117] uppercase tracking-wider font-mono">
                Industry We Work With
              </h3>
            </div>
            <span className="text-xs font-mono text-[#2b9aaa] font-semibold hidden sm:inline">
              Selected: {currentIndustry.name}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {industryWorkflowData.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustryId === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40 ${
                    isSelected
                      ? 'bg-white border-[#2b9aaa] ring-2 ring-[#2b9aaa]/25 shadow-md scale-[1.02]'
                      : 'bg-[#f8f9fa] border-black/[0.06] hover:bg-white hover:border-black/15'
                  }`}
                >
                  <div className="space-y-3">
                    <div
                      className={`p-2.5 rounded-xl w-fit transition-colors ${
                        isSelected
                          ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]'
                          : 'bg-black/[0.04] text-[#718096]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0f1117] line-clamp-1">
                        {ind.shortName}
                      </h4>
                      <p className="text-[10px] text-[#718096] line-clamp-2 mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="pt-2 mt-2 border-t border-[#2b9aaa]/20 flex items-center gap-1 text-[10px] font-mono text-[#2b9aaa] font-bold">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Active</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* STEP 2: EXPANDS DOWNWARD TO MAIN PRODUCTS */}
        {/* ========================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`product-step-${currentIndustry.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={transitionPresets.fast}
            className="space-y-4 pt-4 border-t border-black/[0.06]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#0f1117] text-white text-xs font-mono font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#0f1117] uppercase tracking-wider font-mono">
                  Engineered Products for {currentIndustry.shortName}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#718096]">
                {currentIndustry.products.length} {currentIndustry.products.length === 1 ? 'System Available' : 'Systems Available'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentIndustry.products.map((prod) => {
                const Icon = prod.icon;
                const isSelected = selectedProductId === prod.id;

                return (
                  <button
                    key={prod.id}
                    onClick={() => handleSelectProduct(prod.id)}
                    className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40 ${
                      isSelected
                        ? 'bg-white border-[#2b9aaa] ring-2 ring-[#2b9aaa]/25 shadow-lg'
                        : 'bg-[#f8f9fa] border-black/[0.06] hover:bg-white hover:border-black/15'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold">
                          {prod.category}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20">
                          {prod.badge}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div
                          className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                            isSelected
                              ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]'
                              : 'bg-black/[0.04] text-[#718096]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#0f1117]">{prod.name}</h4>
                          <p className="text-xs text-[#718096] leading-relaxed mt-1">
                            {prod.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#4a5568]">
                      <span>{isSelected ? '✓ Active Core Product' : 'Select Core Product'}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#2b9aaa] translate-x-1' : 'text-[#94a3b8]'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================== */}
        {/* STEP 3: CUSTOMISE SETUP (FACILITY & DEPARTMENTS) */}
        {/* ========================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`setup-step-${currentProduct.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={transitionPresets.fast}
            className="p-8 sm:p-10 rounded-3xl bg-[#f8f9fa] border border-black/[0.08] shadow-sm space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#0f1117] text-white text-xs font-mono font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0f1117] uppercase tracking-wider font-mono">
                    Customise Setup: Choose Facility &amp; Departments
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#2b9aaa] font-bold">
                  {currentSetup.name}
                </span>
              </div>

              {/* Setups Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentProduct.setups.map((setup) => {
                  const SIcon = setup.icon;
                  const isSelected = selectedSetupId === setup.id;

                  return (
                    <button
                      key={setup.id}
                      onClick={() => handleSelectSetup(setup.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-[#2b9aaa] ring-2 ring-[#2b9aaa]/25 shadow-sm'
                          : 'bg-white/60 border-black/[0.06] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]' : 'bg-black/[0.04] text-[#718096]'
                          }`}
                        >
                          <SIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-[#0f1117] block">
                            {setup.name}
                          </span>
                          <span className="text-[10px] text-[#718096] line-clamp-1">
                            {setup.subtext}
                          </span>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#2b9aaa] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Department Multi-Select Chips */}
            <div className="pt-4 border-t border-black/[0.06] space-y-4">
              <div className="text-center sm:text-left space-y-1">
                <h4 className="text-sm font-bold text-[#0f1117]">
                  What operational departments do you manage in your {currentSetup.name}?
                </h4>
                <p className="text-xs text-[#718096]">
                  Select the departments you want NexAgent to orchestrate (multi-select enabled):
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {currentSetup.departments.map((dept) => {
                  const isSelected = selectedDepartments.includes(dept);

                  return (
                    <button
                      key={dept}
                      onClick={() => toggleDepartment(dept)}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 min-h-[38px] ${
                        isSelected
                          ? 'bg-[#0f1117] text-white font-bold shadow-sm scale-[1.02] border border-[#0f1117]'
                          : 'bg-white text-[#4a5568] hover:text-[#0f1117] border border-black/[0.08]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-[#2b9aaa] stroke-[3]" />}
                      <span>{dept}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================== */}
        {/* STEP 4: TAILORED ARCHITECTURE RECOMMENDATION */}
        {/* ========================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`recommendation-${selectedIndustryId}-${selectedProductId}-${selectedSetupId}-${selectedDepartments.join(',')}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={transitionPresets.fast}
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#2b9aaa]/40 shadow-xl space-y-8 ring-1 ring-[#2b9aaa]/20"
          >
            {/* Header: Identity of Tailored Solution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#2b9aaa] text-white text-xs font-mono font-bold flex items-center justify-center">
                    4
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#2b9aaa] font-bold">
                    Tailored Solution Architecture Blueprint
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1117] tracking-tight">
                  Customized {currentProduct.name} for {currentSetup.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#718096]">
                  Configured for: {selectedDepartments.length > 0 ? selectedDepartments.join(', ') : 'All Core Departments'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0fafb] border border-[#2b9aaa]/20 self-start sm:self-auto shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold block">
                  Projected Operational Impact
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0f1117]">
                  {currentSetup.metric}
                </span>
              </div>
            </div>

            {/* The Operational Drag Solved */}
            <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-black/[0.06] space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Operational Problem This Architecture Eliminates</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {currentSetup.problemStatement}
              </p>
            </div>

            {/* 4-Tier Blueprint Matrix */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#718096] font-bold block">
                Deterministic Execution Architecture
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Tier 1: Ingestion */}
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>1. Ingestion Layer</span>
                  </div>
                  <div className="space-y-1.5">
                    {currentSetup.ingestionFeeds.map((feed, fIdx) => (
                      <div key={fIdx} className="text-xs text-[#4a5568] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] shrink-0" />
                        <span>{feed}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier 2: Policy Rules */}
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>2. Deterministic Policies</span>
                  </div>
                  <div className="space-y-1.5">
                    {currentSetup.policyRules.map((rule, rIdx) => (
                      <div key={rIdx} className="text-xs text-[#4a5568] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] shrink-0" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier 3: Autonomous Actions */}
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>3. Autonomous Actions</span>
                  </div>
                  <div className="space-y-1.5">
                    {currentSetup.automatedActions.map((act, aIdx) => (
                      <div key={aIdx} className="text-xs text-[#4a5568] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier 4: Human Governance Gate */}
                <div className="p-5 rounded-2xl bg-[#0f1117] text-white shadow-xs space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>4. Mandatory Human Gate</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    {currentSetup.humanGate}
                  </p>
                  <span className="text-[10px] font-mono text-[#94a3b8] block pt-1 border-t border-white/10">
                    Zero autonomous bypass.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#718096]">
                Ready to review this tailored architecture with founders <strong>Manthan Kachhadiya</strong> &amp; <strong>Savani Vraj</strong>?
              </div>

              <Button
                variant="primary"
                size="md"
                showArrow
                onClick={onOpenStrategyCall}
                className="w-full sm:w-auto"
              >
                Request Live Demo for This Architecture
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
