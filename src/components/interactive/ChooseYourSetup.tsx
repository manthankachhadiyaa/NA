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
  ChevronDown,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
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
    badge: 'Available',
    icon: Stethoscope,
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    subtext: 'Diagnostic labs and bidirectional LIS sync',
    badge: 'Available',
    icon: FlaskConical,
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    subtext: 'Inventory, batch billing, and dispensing',
    badge: 'Available',
    icon: Pill,
  },
  {
    id: 'radiology',
    name: 'Radiology',
    subtext: 'RIS, PACS, and imaging workflow routing',
    badge: 'Available',
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

interface DepartmentModule {
  id: string;
  tag: string;
  title: string;
  outcome: string;
  workflows: string[];
  connectedSystems: string[];
  governanceGate: string;
}

const setupDepartmentMap: Record<string, { tags: string[]; defaultSelected: string[]; modules: DepartmentModule[] }> = {
  hospital: {
    tags: [
      'OPD Triage',
      'IPD & Wards',
      'ICU & Critical Care',
      'Emergency',
      'Bed Turnover',
      'Central Pharmacy',
      'Diagnostic Lab',
      'Radiology & PACS',
      'Operation Theatre (OT)',
      'MRD Records',
      'TPA Cashless Billing',
      'Day Care Surgery',
    ],
    defaultSelected: ['OPD Triage', 'IPD & Wards', 'Bed Turnover', 'TPA Cashless Billing'],
    modules: [
      {
        id: 'opd',
        tag: 'OPD Triage',
        title: 'Outpatient Triage & Intelligent Queue Balancer',
        outcome: 'Cuts patient reception queue wait times by 42%',
        workflows: [
          'Normalizes incoming patient symptoms into Emergency Severity Index (ESI) tiers',
          'Dynamically balances consultation queues across active specialty OPD rooms',
          'Pushes real-time wait telemetry to patient WhatsApp and digital waiting room signage',
        ],
        connectedSystems: ['HL7/FHIR Intake', 'Consultation EMR', 'WhatsApp Business API'],
        governanceGate: 'Triage Nursing Supervisor verification for elevated acuity scores',
      },
      {
        id: 'ipd',
        tag: 'IPD & Wards',
        title: 'Inpatient Ward & Nursing Station Coordination',
        outcome: 'Zero nursing handoff errors across shift changes',
        workflows: [
          'Aggregates hourly vital telemetry, IV fluid schedules, and doctor rounds into unified station boards',
          'Automates clinical order execution and nurse shift transition handoffs',
          'Flags abnormal telemetry trends 2 hours before acute escalation',
        ],
        connectedSystems: ['Bedside Monitors', 'Inpatient EHR', 'Nurse Call Workstations'],
        governanceGate: 'Attending Physician sign-off on inpatient medication & dosage changes',
      },
      {
        id: 'bed',
        tag: 'Bed Turnover',
        title: 'Autonomous Bed Turnover & Housekeeping Dispatch',
        outcome: 'Reduces vacant bed turnaround from 110 min to 35 min',
        workflows: [
          'Detects doctor electronic discharge order and flags bed as pending turnover',
          'Dispatches housekeeping task automatically via staff mobile terminal with room-cleaning checklist',
          'Marks bed instantly available in central admission roster upon supervisor photo confirmation',
        ],
        connectedSystems: ['Admission Ledger', 'Housekeeping Staff App', 'IoT Room Sensors'],
        governanceGate: 'Environmental Services Inspector verification upon terminal cleaning',
      },
      {
        id: 'tpa',
        tag: 'TPA Cashless Billing',
        title: 'TPA & Cashless Pre-Authorization Claims Engine',
        outcome: '60% reduction in initial claim queries & rejection rates',
        workflows: [
          'Pre-compiles medical histories, diagnostic tests, and itemized estimates into insurer claim packets',
          'Verifies policy coverage ceilings, deductible limits, and required attachments',
          'Monitors cashless approval progress and updates patient discharge desk in real time',
        ],
        connectedSystems: ['TPA Portals', 'Hospital Billing Core', 'Insurance EDI Gateways'],
        governanceGate: 'Hospital Billing Superintendent final review before submission',
      },
      {
        id: 'icu',
        tag: 'ICU & Critical Care',
        title: 'ICU Telemetry & High-Acuity Surveillance',
        outcome: 'Continuous multi-parameter vigilance with zero alert fatigue',
        workflows: [
          'Monitors continuous SpO2, arterial lines, and ventilator settings with smart thresholding',
          'Automates bedside charting and clinical titration logs',
          'Synchronizes critical alert escalation paths to intensivist mobile devices',
        ],
        connectedSystems: ['Ventilator HL7 Feeds', 'Bedside Infusion Pumps', 'Central ICU Console'],
        governanceGate: 'Intensivist verification on all critical protocol changes',
      },
      {
        id: 'emergency',
        tag: 'Emergency',
        title: 'Trauma & Emergency Department Orchestrator',
        outcome: 'Sub-90-second door-to-doctor triage categorization',
        workflows: [
          'Instant red-flag trauma registration with rapid digital wristband assignment',
          'Triggers simultaneous alerts to trauma surgeon, OT crew, and blood bank',
          'Pre-allocates resuscitation bay and diagnostic imaging slots immediately',
        ],
        connectedSystems: ['Ambulance Telemetry', 'Trauma Bay Console', 'Blood Bank LIS'],
        governanceGate: 'Emergency Department Head oversight on red triage activations',
      },
      {
        id: 'lab',
        tag: 'Diagnostic Lab',
        title: 'Diagnostic Laboratory & LIS Integration',
        outcome: 'Automated bidirectional sync with zero manual re-entry',
        workflows: [
          'Ingests test requests from doctors and generates unique barcode specimen labels',
          'Transfers sample results directly from automated analyzers via ASTM/HL7',
          'Dispatches verified PDF reports automatically via WhatsApp and doctor inbox',
        ],
        connectedSystems: ['Hematology/Biochemistry Analyzers', 'LIS Database', 'WhatsApp Gateway'],
        governanceGate: 'Senior Pathologist digital signature prior to report release',
      },
      {
        id: 'rad',
        tag: 'Radiology & PACS',
        title: 'Radiology RIS & PACS Workflow Routing',
        outcome: 'Accelerates stat scan reporting turnaround by 55%',
        workflows: [
          'Manages modality worklists for CT, MRI, X-Ray, and Ultrasound machines',
          'Ingests DICOM studies directly into web-accessible zero-footprint viewer',
          'Routes urgent trauma studies to on-call radiologists with AI transcription',
        ],
        connectedSystems: ['DICOM PACS', 'Radiology Modalities', 'Web DICOM Viewer'],
        governanceGate: 'Consultant Radiologist signed diagnostic report approval',
      },
      {
        id: 'ot',
        tag: 'Operation Theatre (OT)',
        title: 'Surgical Suite & OT Schedule Balancer',
        outcome: 'Maximizes theatre utilization and eliminates turnaround dead-time',
        workflows: [
          'Coordinates surgical equipment, sterilizer packs, and anaesthetist schedules',
          'Tracks surgical milestones from patient wheel-in to PACU recovery',
          'Triggers sterile reprocessing indents immediately upon procedure close',
        ],
        connectedSystems: ['CSSD Autoclave System', 'Anaesthesia EMR', 'OT Scheduling Board'],
        governanceGate: 'Chief of Surgery sign-off on theatre booking and PACU discharge',
      },
      {
        id: 'pharmacy',
        tag: 'Central Pharmacy',
        title: 'Inpatient & Outpatient Pharmacy Fulfillment',
        outcome: 'Eliminates dispensing errors and stockout incidents',
        workflows: [
          'Validates electronic prescriptions against patient allergy records and drug interactions',
          'Routes inpatient ward indents directly to automated dispensing carousels',
          'Reorders critical formulary inventory before minimum safety thresholds are reached',
        ],
        connectedSystems: ['Pharmacy POS', 'Wholesale Supplier EDI', 'Hospital EMR'],
        governanceGate: 'Licensed Pharmacist verification on all dispensed prescriptions',
      },
      {
        id: 'mrd',
        tag: 'MRD Records',
        title: 'Medical Records Department (MRD) & Compliance Ledger',
        outcome: '100% ABDM & NABH regulatory audit compliance readiness',
        workflows: [
          'Indexes complete inpatient case sheets with automated ICD-10 coding suggestions',
          'Links digital discharge summaries to Ayushman Bharat Health Account (ABHA)',
          'Archives records into tamper-proof cryptographically signed cold storage',
        ],
        connectedSystems: ['ABDM Gateway', 'ICD-10 Engine', 'Encrypted Document Vault'],
        governanceGate: 'MRD Officer validation on statutory registry submissions',
      },
      {
        id: 'daycare',
        tag: 'Day Care Surgery',
        title: 'Same-Day Procedure & Short-Stay Unit Engine',
        outcome: 'Streamlines same-day admissions and discharges within 6 hours',
        workflows: [
          'Pre-admits planned minor procedure patients with digital consent paperwork',
          'Tracks post-op recovery milestones against standardized discharge criteria',
          'Generates post-discharge care instructions and medication timers automatically',
        ],
        connectedSystems: ['Patient Portal', 'Surgical Billing', 'Automated SMS Reminders'],
        governanceGate: 'Operating Surgeon sign-off on same-day fit-to-leave clearance',
      },
    ],
  },
  clinic: {
    tags: [
      'OPD Consultations',
      'Appointment Queue',
      'Patient EHR & Prescriptions',
      'Vitals & Rapid Triage',
      'Digital Billing & Receipts',
      'Follow-up Automation',
      'Teleconsultation',
      'Point-of-Care Lab Dispatch',
    ],
    defaultSelected: ['OPD Consultations', 'Appointment Queue', 'Patient EHR & Prescriptions', 'Digital Billing & Receipts'],
    modules: [
      {
        id: 'consult',
        tag: 'OPD Consultations',
        title: 'Private Practice & Multi-Specialty Consultation Engine',
        outcome: 'Saves 12 minutes per patient consultation with structured documentation',
        workflows: [
          'Instantly loads prior patient encounter history, allergies, and chronic conditions',
          'Provides voice-to-prescription dictation with brand and generic drug suggestions',
          'Generates bilingual patient discharge instructions with dietary guidelines',
        ],
        connectedSystems: ['Clinic EMR', 'WhatsApp Prescription Bot', 'Drug Formulary Database'],
        governanceGate: 'Doctor digital signature on all generated e-prescriptions',
      },
      {
        id: 'queue',
        tag: 'Appointment Queue',
        title: 'Dynamic Appointment & Walk-in Queue Balancer',
        outcome: 'Eliminates reception crowding and minimizes patient wait frustration',
        workflows: [
          'Merges online pre-booked slots and walk-in tokens into an optimized timeline',
          'Updates waiting patients on expected doctor consultation times via WhatsApp',
          'Detects delays and dynamically adjusts future appointment buffers',
        ],
        connectedSystems: ['Reception Tablet App', 'WhatsApp Queue Notification', 'Google Calendar Sync'],
        governanceGate: 'Front-desk supervisor manual priority override when medically urgent',
      },
      {
        id: 'ehr',
        tag: 'Patient EHR & Prescriptions',
        title: 'Smart EHR with Drug-to-Drug Safety Checks',
        outcome: 'Zero adverse drug reaction occurrences across practice visits',
        workflows: [
          'Cross-references prescribed medications against known patient drug allergies',
          'Suggests cost-effective generic alternatives when branded medicines are out of stock',
          'Syncs e-prescriptions directly to partner local pharmacies for home delivery',
        ],
        connectedSystems: ['National Drug Registry', 'Partner Pharmacy Network', 'Patient Medical Vault'],
        governanceGate: 'Practicing Doctor sign-off on dosage adjustments and substitutions',
      },
      {
        id: 'billing',
        tag: 'Digital Billing & Receipts',
        title: 'Integrated Point-of-Sale & Digital Payment Receipts',
        outcome: 'Instant UPI/Card payment collection with zero accounting discrepancies',
        workflows: [
          'Auto-generates itemized consultation and procedure bills based on doctor fees',
          'Sends instant UPI QR code payment links directly to patient mobile phones',
          'Automatically reconciles daily cash and digital collections with tally accounting',
        ],
        connectedSystems: ['UPI Payment Gateway', 'Tally/QuickBooks ERP', 'WhatsApp Receipt Bot'],
        governanceGate: 'Clinic cashier verification on discount approvals or refunds',
      },
      {
        id: 'followup',
        tag: 'Follow-up Automation',
        title: 'Autonomous Patient Recall & Chronic Care Reminders',
        outcome: '34% increase in timely chronic care follow-up visit adherence',
        workflows: [
          'Schedules automated reminders 3 days before recommended follow-up date',
          'Collects at-home blood pressure and glucose readings through WhatsApp chat',
          'Alerts doctor if patient reports worsening symptoms in follow-up check-in',
        ],
        connectedSystems: ['Automated WhatsApp Bot', 'Patient Care CRM', 'SMS Gateway'],
        governanceGate: 'Doctor review required if patient submits out-of-range vitals',
      },
      {
        id: 'tele',
        tag: 'Teleconsultation',
        title: 'Secure HD Video Consultation & Digital Waiting Room',
        outcome: 'Expands practice reach with zero technical friction for patients',
        workflows: [
          'Generates single-click video links requiring zero app downloads for patients',
          'Provides in-call screen sharing of diagnostic lab reports and X-rays',
          'Locks session and auto-generates digitally signed e-prescription upon call end',
        ],
        connectedSystems: ['WebRTC Video Server', 'Digital Signature Gateway', 'Payment Gateway'],
        governanceGate: 'Practicing Doctor live identity verification before session start',
      },
    ],
  },
  laboratory: {
    tags: [
      'Sample Collection & Phlebotomy',
      'Barcode Accessioning',
      'Bidirectional LIS Sync',
      'Pathologist Verification Queue',
      'Automated PDF Report Generation',
      'WhatsApp & SMS Dispatch',
      'Critical Panic Value Alerts',
      'Reagent Stock & Quality Control',
    ],
    defaultSelected: ['Barcode Accessioning', 'Bidirectional LIS Sync', 'Pathologist Verification Queue', 'WhatsApp & SMS Dispatch'],
    modules: [
      {
        id: 'phleb',
        tag: 'Sample Collection & Phlebotomy',
        title: 'Phlebotomy Center & Home Collection Dispatch',
        outcome: 'Prevents sample misidentification and collection tube mix-ups',
        workflows: [
          'Routes phlebotomists to home collection requests with optimized GPS routing',
          'Specifies exact collection tube types (EDTA, Serum, Heparin) based on booked panels',
          'Records sample collection timestamp and temperature requirements',
        ],
        connectedSystems: ['Phlebotomy Mobile App', 'Google Maps API', 'Accessioning Registry'],
        governanceGate: 'Phlebotomist digital confirmation of patient dual-identifier scan',
      },
      {
        id: 'accession',
        tag: 'Barcode Accessioning',
        title: 'Automated Barcode Accessioning & Sample Tracking',
        outcome: '100% chain-of-custody tracking from vein to analyzer',
        workflows: [
          'Prints 2D DataMatrix barcode labels with specimen type and test code mapping',
          'Logs sample entry into centrifuge and preparation stations',
          'Flags hemolyzed, lipemic, or insufficient volume samples before testing',
        ],
        connectedSystems: ['Barcode Thermal Printers', 'Barcode Scanners', 'LIS Core Database'],
        governanceGate: 'Lab Technician sign-off on specimen integrity acceptance',
      },
      {
        id: 'lis_sync',
        tag: 'Bidirectional LIS Sync',
        title: 'Bidirectional Medical Analyzer Sync (ASTM/HL7)',
        outcome: 'Eliminates 100% of manual result typing errors into reports',
        workflows: [
          'Pushes pending test worklist directly into automated biochemistry and hematology analyzers',
          'Reads completed numeric and qualitative parameters directly over RS232/TCP interfaces',
          'Performs automatic delta checks against patient previous historical test results',
        ],
        connectedSystems: ['Automated Clinical Analyzers', 'ASTM/HL7 Protocol Driver', 'Central LIS'],
        governanceGate: 'System flags delta-check deviations >20% for mandatory re-run',
      },
      {
        id: 'path_queue',
        tag: 'Pathologist Verification Queue',
        title: 'Pathologist 1-Click Verification & Sign-Off Worklist',
        outcome: 'Accelerates turnaround time while maintaining clinical rigor',
        workflows: [
          'Auto-approves results completely within normal reference intervals if configured',
          'Prioritizes abnormal and stat orders at top of pathologist review worklist',
          'Applies certified digital signature and cryptographic timestamp to finalized files',
        ],
        connectedSystems: ['Pathologist Desktop Station', 'Digital PKI Token Gateway', 'LIS Database'],
        governanceGate: 'Certified Pathologist manual sign-off on all abnormal and panic reports',
      },
      {
        id: 'pdf_gen',
        tag: 'Automated PDF Report Generation',
        title: 'High-Fidelity Branded PDF Lab Report Generator',
        outcome: 'Generates medical-grade reports with clear graphical reference ranges',
        workflows: [
          'Renders doctor-friendly reports with visual normal/abnormal indicator bars',
          'Embeds patient QR verification code for authenticity validation',
          'Supports multi-specialty formatting for Histopathology, Microbiology, and Genomics',
        ],
        connectedSystems: ['PDF Rendering Engine', 'QR Code Verification Server', 'S3 Storage'],
        governanceGate: 'Document generation locked until Pathologist digital signature validated',
      },
      {
        id: 'dispatch',
        tag: 'WhatsApp & SMS Dispatch',
        title: 'Instant WhatsApp & Multi-Channel Patient Dispatch',
        outcome: 'Zero patient calls inquiring about report status',
        workflows: [
          'Dispatches completed password-protected PDF directly to patient WhatsApp',
          'Sends SMS alert with secure one-time download link for non-WhatsApp users',
          'Simultaneously pushes report into referring doctor portal and hospital EMR',
        ],
        connectedSystems: ['WhatsApp Cloud API', 'SMS Gateway Provider', 'Referring Doctor Portal'],
        governanceGate: 'Automated audit log records delivery receipt confirmation',
      },
      {
        id: 'panic',
        tag: 'Critical Panic Value Alerts',
        title: 'Critical Panic Value Immediate Escalation Engine',
        outcome: 'Under 3-minute notification to treating physician for life-threatening values',
        workflows: [
          'Instantly identifies results breaching critical biological thresholds (e.g. Potassium > 6.5)',
          'Triggers automated voice call and high-priority WhatsApp push to attending doctor',
          'Logs mandatory read-back acknowledgment from clinical staff into compliance ledger',
        ],
        connectedSystems: ['Automated IVR Telephony', 'Doctor Mobile App', 'CAP Compliance Ledger'],
        governanceGate: 'Lab Supervisor verification of verbal read-back documentation',
      },
      {
        id: 'qc_stock',
        tag: 'Reagent Stock & Quality Control',
        title: 'Reagent Inventory & Levey-Jennings Quality Control',
        outcome: 'Zero testing downtime due to stockout or calibration failure',
        workflows: [
          'Plots daily QC controls on Levey-Jennings charts with Westgard rule evaluation',
          'Tracks reagent lot numbers, open-vial stability, and tests remaining',
          'Generates auto-purchase requisitions when reagent inventory hits reorder thresholds',
        ],
        connectedSystems: ['Analyzer Reagent RFID', 'Inventory Management ERP', 'NABL Audit Log'],
        governanceGate: 'Quality Manager sign-off required if Westgard rejection rule triggers',
      },
    ],
  },
  pharmacy: {
    tags: [
      'Counter & OPD Dispensing',
      'Inpatient Ward Indent',
      'Batch & Expiry Date Tracking',
      'Barcode & GST Billing',
      'Supplier PO Automation',
      'Drug-Drug Interaction Screen',
      'Narcotics & Schedule H Register',
      'Minimum Safety Stock Triggers',
    ],
    defaultSelected: ['Counter & OPD Dispensing', 'Batch & Expiry Date Tracking', 'Barcode & GST Billing', 'Drug-Drug Interaction Screen'],
    modules: [
      {
        id: 'dispense',
        tag: 'Counter & OPD Dispensing',
        title: 'Outpatient Prescription Dispensing & Barcode Verification',
        outcome: 'Zero dispensing mix-ups with scan-to-verify safety workflows',
        workflows: [
          'Pulls electronic prescriptions instantly when patient mobile or token is scanned',
          'Forces barcode scan of physical medicine strip before line-item is added to bill',
          'Prints dosage direction labels in patient preferred language (Hindi/Gujarati/English)',
        ],
        connectedSystems: ['Hospital EMR', '2D Barcode Scanners', 'Label Thermal Printers'],
        governanceGate: 'Registered Pharmacist verification on prescription dispensing',
      },
      {
        id: 'expiry',
        tag: 'Batch & Expiry Date Tracking',
        title: 'Automated FEFO (First-Expiry-First-Out) Inventory Engine',
        outcome: 'Zero expired medicine losses through proactive vendor return routing',
        workflows: [
          'Enforces First-Expiry-First-Out picking logic at dispensing counters',
          'Generates 90-day, 60-day, and 30-day early warning lists for near-expiry batches',
          'Auto-compiles supplier debit notes for credit returns of near-expiry stocks',
        ],
        connectedSystems: ['Batch Management Database', 'Supplier Account Ledger', 'Stock Audit App'],
        governanceGate: 'Store Manager approval on supplier debit notes and returns',
      },
      {
        id: 'billing_gst',
        tag: 'Barcode & GST Billing',
        title: 'High-Speed GST Billing & HSN Reconciler',
        outcome: 'Sub-30-second checkout per customer during peak hours',
        workflows: [
          'Calculates exact multi-slab GST (0%, 5%, 12%, 18%) mapped to medicine HSN codes',
          'Accepts split payments (Cash, UPI QR, Credit Card, Insurance Co-pay)',
          'Syncs invoice ledger directly to GST e-invoicing and accounting software',
        ],
        connectedSystems: ['GST E-Invoice Portal', 'UPI Dynamic QR Displays', 'Tally/Zoho ERP'],
        governanceGate: 'Cashier supervisor authorization on bill cancellations or line returns',
      },
      {
        id: 'ddi',
        tag: 'Drug-Drug Interaction Screen',
        title: 'Clinical Interaction & Allergy Screening Engine',
        outcome: 'Prevents dangerous contraindications before medication reaches patient',
        workflows: [
          'Evaluates multi-drug prescriptions against comprehensive pharmacological interaction databases',
          'Alerts pharmacist to severe drug-to-drug, drug-to-food, and duplicate therapy warnings',
          'Flags pediatric and geriatric dosage limit safety warnings automatically',
        ],
        connectedSystems: ['Pharmacological Safety API', 'Patient Clinical Record', 'Prescription Core'],
        governanceGate: 'Pharmacist mandatory reason documentation before overriding minor warnings',
      },
      {
        id: 'inpatient_indent',
        tag: 'Inpatient Ward Indent',
        title: 'Ward Indent Fulfillment & Nurse Station Return Engine',
        outcome: 'Under 15-minute turnaround for stat medication delivery to ICU/Ward',
        workflows: [
          'Receives electronic medication administration indents directly from ward nurses',
          'Groups indents by ward location and rack position for rapid batch assembly',
          'Processes unused medicine returns and auto-credits patient hospital folio',
        ],
        connectedSystems: ['Ward Nursing Stations', 'Pneumatic Tube Dispatch', 'Billing Core'],
        governanceGate: 'Receiving Nurse verification signature upon medicine handover',
      },
      {
        id: 'supplier_po',
        tag: 'Supplier PO Automation',
        title: 'Automated Purchase Order & Wholesale Supplier Sync',
        outcome: 'Maintains optimal 15-day inventory cover without overstocking',
        workflows: [
          'Monitors sales velocity and calculates reorder quantities based on supplier lead times',
          'Generates EDI purchase orders and transmits them directly to pharmaceutical distributors',
          'Matches incoming Goods Receipt Notes (GRN) against supplier invoices and PO rates',
        ],
        connectedSystems: ['Distributor EDI Portals', 'GRN Mobile Scanner', 'Accounts Payable Core'],
        governanceGate: 'Purchase Head approval on purchase orders exceeding budget limits',
      },
      {
        id: 'narcotics',
        tag: 'Narcotics & Schedule H Register',
        title: 'Schedule H, H1 & X Statutory Narcotics Registry',
        outcome: '100% compliance with FDA drug enforcement audit standards',
        workflows: [
          'Maintains immutable digital register of all controlled substances dispensed',
          'Captures prescribing doctor registration number, patient Aadhaar, and physical ID',
          'Generates daily opening, dispensed, and closing stock balances for drug inspectors',
        ],
        connectedSystems: ['Digital Narcotics Vault', 'Doctor Registry Lookup', 'State Drug Control Portal'],
        governanceGate: 'Dual-pharmacist biometric sign-off required for Schedule X release',
      },
    ],
  },
  radiology: {
    tags: [
      'Modality Worklist (MWL)',
      'DICOM & PACS Ingestion',
      'Radiologist Tele-Reporting',
      'Speech-to-Text Dictation',
      'Critical Finding Alerts',
      'Secure Patient Portal',
      'Equipment Telemetry',
      'Radiation Dose Tracking',
    ],
    defaultSelected: ['Modality Worklist (MWL)', 'DICOM & PACS Ingestion', 'Radiologist Tele-Reporting', 'Critical Finding Alerts'],
    modules: [
      {
        id: 'mwl',
        tag: 'Modality Worklist (MWL)',
        title: 'Automated Modality Worklist (MWL) & Scheduling',
        outcome: 'Zero patient demographic typing errors on CT/MRI consoles',
        workflows: [
          'Transfers booked imaging appointments directly into modality consoles via DICOM MWL',
          'Allocates machine time slots based on scan protocol duration (e.g. Brain MRI vs Contrast Abdomen)',
          'Verifies patient renal function (Serum Creatinine) before scheduling IV contrast scans',
        ],
        connectedSystems: ['CT/MRI/X-Ray Modalities', 'Hospital OPD/IPD Roster', 'Lab LIS for Creatinine'],
        governanceGate: 'Radiology Technologist verification of contrast safety checklist',
      },
      {
        id: 'pacs',
        tag: 'DICOM & PACS Ingestion',
        title: 'Zero-Footprint Web PACS & Cloud Image Archive',
        outcome: 'Instant sub-2-second diagnostic image streaming on any device',
        workflows: [
          'Ingests DICOM studies directly from imaging equipment with lossless compression',
          'Streams multi-planar reconstruction (MPR), 3D volume rendering, and MIP in browser',
          'Enables instant side-by-side comparison with historical prior scans of the same patient',
        ],
        connectedSystems: ['High-Performance DICOM PACS', 'Cloud Object Storage', 'Zero-Footprint Web Viewer'],
        governanceGate: 'System checks study completeness before archiving to permanent tier',
      },
      {
        id: 'reporting',
        tag: 'Radiologist Tele-Reporting',
        title: 'Radiologist Tele-Reporting Queue & Workload Router',
        outcome: 'Sub-45-minute turnaround for emergency trauma imaging studies',
        workflows: [
          'Distributes studies to sub-specialist radiologists (Neuro, MSK, Body, Onco) automatically',
          'Pre-loads standardized reporting templates customized to clinical indications',
          'Attaches certified digital signature and cryptographic timestamp upon report authorization',
        ],
        connectedSystems: ['Radiologist Reporting Cockpit', 'Digital PKI Server', 'Hospital EMR'],
        governanceGate: 'Consultant Radiologist mandatory digital signature on finalized report',
      },
      {
        id: 'critical_rad',
        tag: 'Critical Finding Alerts',
        title: 'Critical Imaging Finding Immediate Escalation Engine',
        outcome: 'Sub-5-minute direct physician notification for acute intracranial bleeds or embolisms',
        workflows: [
          'Detects critical diagnostic findings (e.g. aortic dissection, acute stroke, pneumothorax)',
          'Triggers immediate phone call and encrypted WhatsApp message to referring consultant',
          'Logs receiving doctor acknowledgment and timestamp for medico-legal audit defense',
        ],
        connectedSystems: ['Automated Telephony Engine', 'Doctor Mobile App', 'NABH Medico-Legal Ledger'],
        governanceGate: 'Radiologist confirmation of verbal communication to attending physician',
      },
      {
        id: 'speech',
        tag: 'Speech-to-Text Dictation',
        title: 'Medical AI Speech-to-Text Dictation & Structuring',
        outcome: 'Saves radiologists 2.5 hours of manual keyboard typing every shift',
        workflows: [
          'Transcribes medical terminology, anatomical coordinates, and measurements with 99.2% accuracy',
          'Transforms freeform dictation into structured RADLEX/BI-RADS compliant reports',
          'Understands varied regional accents and noisy reading-room environments',
        ],
        connectedSystems: ['Specialized Medical LLM Speech Engine', 'Microphone Input Hardware', 'RIS Database'],
        governanceGate: 'Radiologist proofread and sign-off required prior to document lock',
      },
      {
        id: 'patient_portal_rad',
        tag: 'Secure Patient Portal',
        title: 'Secure Patient Imaging Portal & Film-Free Sharing',
        outcome: 'Eliminates expensive physical film printing and courier logistics',
        workflows: [
          'Provides patients and referring doctors with secure PIN-protected web link to DICOM viewer',
          'Allows 1-click downloading of diagnostic-quality DICOM files or compressed JPEG summaries',
          'Enables patients to share entire imaging histories securely for second opinions',
        ],
        connectedSystems: ['HIPAA Compliant Web Portal', 'SMS/WhatsApp Dispatcher', 'Encrypted S3 Storage'],
        governanceGate: 'Two-factor authentication required for patient and doctor access',
      },
    ],
  },
  enterprise: {
    tags: [
      'Cross-Department Workflows',
      'CRM & Helpdesk Sync',
      'ERP & Finance Reconciliation',
      'Human-in-the-Loop Approval',
      'Multi-Tenant SLA Routing',
      'Cryptographic Audit Ledger',
      'In-Memory PII Tokenization',
      'Vendor Contract Authorization',
    ],
    defaultSelected: ['Cross-Department Workflows', 'CRM & Helpdesk Sync', 'ERP & Finance Reconciliation', 'Human-in-the-Loop Approval'],
    modules: [
      {
        id: 'cross_dept',
        tag: 'Cross-Department Workflows',
        title: 'Cross-Departmental Event & Orchestration Pipeline',
        outcome: 'Eliminates manual inter-departmental email chases and status lags',
        workflows: [
          'Listens to webhook triggers across HR, Operations, Legal, and IT systems',
          'Executes sequential multi-step tasks with conditional branching and automated fallbacks',
          'Dispatches Slack/Teams notifications with interactive approval buttons',
        ],
        connectedSystems: ['Kafka Event Bus', 'Slack/MS Teams Apps', 'Enterprise Webhooks'],
        governanceGate: 'Department Head sign-off on cross-team resource allocation',
      },
      {
        id: 'crm_sync',
        tag: 'CRM & Helpdesk Sync',
        title: 'Bidirectional CRM & Support Desk Auto-Reconciler',
        outcome: '100% data consistency between Salesforce, HubSpot, and Zendesk',
        workflows: [
          'Resolves ticket data synchronization conflicts automatically using deterministic precedence',
          'Pushes customer account health telemetry into CRM deal records in real time',
          'Extracts action items from closed support tickets and creates engineering bug tickets',
        ],
        connectedSystems: ['Salesforce Service Cloud', 'Zendesk API', 'HubSpot CRM', 'Jira Service Desk'],
        governanceGate: 'Account Executive review on CRM revenue field overwrites',
      },
      {
        id: 'erp_rec',
        tag: 'ERP & Finance Reconciliation',
        title: 'Automated Invoice Matching & Two-Way ERP Ledger Sync',
        outcome: '82% reduction in monthly accounting close cycle duration',
        workflows: [
          'Extracts line items, tax IDs, and payment terms from supplier PDF invoices',
          'Performs 3-way matching between Purchase Order, Goods Receipt, and Vendor Invoice',
          'Posts balanced journal entries directly into SAP, NetSuite, or Tally with rollback support',
        ],
        connectedSystems: ['SAP S/4HANA', 'Oracle NetSuite', 'Tally Prime', 'OCR Extraction Engine'],
        governanceGate: 'Finance Controller authorization for invoices exceeding $5,000 threshold',
      },
      {
        id: 'hitl_gate',
        tag: 'Human-in-the-Loop Approval',
        title: 'Cryptographic Human-in-the-Loop Approval Gates',
        outcome: 'Zero autonomous execution on high-stakes business operations',
        workflows: [
          'Halts pipeline execution automatically when transaction risk score exceeds safety limits',
          'Generates one-click supervisory approval payloads with detailed contextual rationale',
          'Records cryptographic signature of the approving human supervisor for compliance audits',
        ],
        connectedSystems: ['WebAssembly Policy Engine', 'Hardware Security Module (HSM)', 'Admin Mobile App'],
        governanceGate: 'Designated executive signature mandatory to release transaction execution',
      },
      {
        id: 'pii_proxy',
        tag: 'In-Memory PII Tokenization',
        title: 'In-Memory PII/PHI Tokenization & Redaction Proxy',
        outcome: '100% compliance with GDPR, HIPAA, and DPDP enterprise privacy laws',
        workflows: [
          'Intercepts raw incoming payloads and replaces sensitive PII/PHI with synthetic tokens',
          'Executes AI analysis exclusively on tokenized data with zero sensitive leakage',
          'De-tokenizes output securely only within isolated customer-controlled perimeter',
        ],
        connectedSystems: ['In-Memory Redis Proxy', 'Customer Key Vault', 'Egress Security Filter'],
        governanceGate: 'Chief Information Security Officer (CISO) access audit policy',
      },
      {
        id: 'audit_ledger',
        tag: 'Cryptographic Audit Ledger',
        title: 'Append-Only Forensic Audit & Decision Ledger',
        outcome: 'Complete regulatory auditability for every automated business action',
        workflows: [
          'Records every event trigger, prompt version, confidence score, and executed API call',
          'Generates cryptographic SHA-256 hash chains preventing retroactive log tampering',
          'Provides exportable compliance audit reports for SOC 2 Type II and ISO 27001 auditors',
        ],
        connectedSystems: ['Immutable Storage Engine', 'SOC 2 Evidence Collector', 'SIEM / Splunk Sync'],
        governanceGate: 'Internal Audit Committee read-only verification access',
      },
    ],
  },
};

interface ChooseYourSetupProps {
  onOpenStrategyCall: () => void;
}

export default function ChooseYourSetup({ onOpenStrategyCall }: ChooseYourSetupProps) {
  const [selectedSetup, setSelectedSetup] = useState<string>('hospital');
  const [selectedTags, setSelectedTags] = useState<string[]>(setupDepartmentMap.hospital.defaultSelected);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('opd');

  const currentConfig = setupDepartmentMap[selectedSetup] || setupDepartmentMap.hospital;

  const handleSelectSetup = (setupId: string) => {
    setSelectedSetup(setupId);
    const newConfig = setupDepartmentMap[setupId] || setupDepartmentMap.hospital;
    setSelectedTags(newConfig.defaultSelected);
    setExpandedModuleId(newConfig.modules[0]?.id || null);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const isCurrentlySelected = prev.includes(tag);
      const updated = isCurrentlySelected ? prev.filter((t) => t !== tag) : [...prev, tag];

      // If turning on, set this module as expanded
      if (!isCurrentlySelected) {
        const matchingModule = currentConfig.modules.find((m) => m.tag === tag);
        if (matchingModule) {
          setExpandedModuleId(matchingModule.id);
        }
      }
      return updated;
    });
  };

  // Find modules corresponding to selected tags (or all modules if none selected)
  const activeModules = currentConfig.modules.filter((m) =>
    selectedTags.length === 0 ? true : selectedTags.includes(m.tag)
  );

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
            <Eyebrow pulseColor="cyan">Dynamic Environment Configurator</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1117] tracking-tight"
          >
            Choose Your Setup
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-base text-[#718096]">
            Select your operational facility to explore tailored departments, automated workflows, and human-in-the-loop governance boundaries.
          </motion.p>
        </motion.div>

        {/* 6 Environment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {setupOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedSetup === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectSetup(opt.id)}
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

        {/* Dynamic Department Multi-Select Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#f8f9fa] border border-black/[0.08] shadow-sm space-y-8">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f1117] tracking-tight">
              What departments do you manage in your {setupOptions.find((s) => s.id === selectedSetup)?.name}?
            </h3>
            <p className="text-xs sm:text-sm text-[#718096]">
              Department options update dynamically. Select areas to configure automated workflows and inspect inner feature modules:
            </p>
          </div>

          {/* Department Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {currentConfig.tags.map((tag) => {
              const isChecked = selectedTags.includes(tag);
              const matchingModule = currentConfig.modules.find((m) => m.tag === tag);
              const isExpanded = expandedModuleId === matchingModule?.id;

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
                  {isChecked && (
                    <span className="text-[10px] bg-white/20 text-[#2b9aaa] px-1.5 py-0.2 rounded-full ml-1">
                      active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Inner Products & Modules Section (Downward Expandable on User Click) */}
          <div className="pt-6 border-t border-black/[0.08] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base font-bold text-[#0f1117] tracking-tight flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#2b9aaa]" />
                  <span>Inner Product Modules &amp; Feature Capabilities</span>
                </h4>
                <p className="text-xs text-[#718096]">
                  Click any module below to expand downward and inspect automated workflows, connected systems, and human governance gates.
                </p>
              </div>
              <span className="text-xs font-mono text-[#2b9aaa] font-bold">
                {activeModules.length} Active {activeModules.length === 1 ? 'Module' : 'Modules'} Configured
              </span>
            </div>

            {/* Accordion / Downward Expandable Module Cards */}
            <div className="space-y-3 pt-2">
              {activeModules.map((module) => {
                const isExpanded = expandedModuleId === module.id;

                return (
                  <div
                    key={module.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                      isExpanded
                        ? 'border-[#2b9aaa]/40 shadow-md ring-1 ring-[#2b9aaa]/15'
                        : 'border-black/[0.08] hover:border-black/20'
                    }`}
                  >
                    {/* Collapsible Header */}
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b9aaa]/40"
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div
                          className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                            isExpanded ? 'bg-[#2b9aaa]/15 text-[#2b9aaa]' : 'bg-black/[0.04] text-[#718096]'
                          }`}
                        >
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-xs font-mono font-bold text-[#2b9aaa] bg-[#2b9aaa]/10 px-2 py-0.5 rounded-full">
                              {module.tag}
                            </span>
                            <h5 className="text-sm sm:text-base font-bold text-[#0f1117]">
                              {module.title}
                            </h5>
                          </div>
                          <span className="text-xs text-[#718096] block mt-1">
                            {module.outcome}
                          </span>
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

                    {/* Expandable Downside Content Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-black/[0.06] bg-[#fafbfc] space-y-5">
                            {/* Automated Workflows */}
                            <div className="space-y-2">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#0f1117] font-bold flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#2b9aaa]" />
                                <span>Autonomous AI Workflows</span>
                              </span>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                                {module.workflows.map((wf, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-white border border-black/[0.06] text-xs text-[#4a5568] leading-relaxed flex items-start gap-2 shadow-xs"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2b9aaa] shrink-0 mt-1.5" />
                                    <span>{wf}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Connected Systems & Human Governance Gate */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
                              {/* Connected Systems */}
                              <div className="md:col-span-6 p-4 rounded-xl bg-white border border-black/[0.06] space-y-1.5 shadow-xs">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#718096] font-bold block">
                                  Synchronized Enterprise Systems
                                </span>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {module.connectedSystems.map((sys, sIdx) => (
                                    <span
                                      key={sIdx}
                                      className="text-xs px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#0f1117] font-medium border border-black/[0.05]"
                                    >
                                      {sys}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Human Gate */}
                              <div className="md:col-span-6 p-4 rounded-xl bg-[#0f1117] text-white space-y-1 shadow-xs">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b9aaa] font-bold flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5" />
                                  <span>Mandatory Human Governance Gate</span>
                                </span>
                                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                                  {module.governanceGate}
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

          {/* Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              showArrow
              onClick={onOpenStrategyCall}
            >
              Deploy This Architecture in Your {setupOptions.find((s) => s.id === selectedSetup)?.name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
