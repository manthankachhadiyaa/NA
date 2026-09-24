'use client';

import React, { useState, useMemo } from 'react';
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
// 1. DATA DEFINITIONS FOR FULLY DYNAMIC FUNNEL
// ==========================================

export interface DepartmentSpec {
  name: string;
  problem: string;
  ingestion: string;
  policy: string;
  action: string;
  gate: string;
  impact: string;
}

export interface SetupConfig {
  id: string;
  name: string;
  subtext: string;
  icon: React.ElementType;
  defaultDepartments: string[];
  departments: DepartmentSpec[];
}

export interface ProductConfig {
  id: string;
  name: string;
  category: string;
  badge: 'AVAILABLE' | 'ENTERPRISE READY';
  description: string;
  icon: React.ElementType;
  setups: SetupConfig[];
}

export interface IndustryConfig {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  tagline: string;
  products: ProductConfig[];
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
            defaultDepartments: ['OPD Triage', 'IPD & Wards', 'Bed Turnover', 'TPA Cashless Billing'],
            departments: [
              {
                name: 'OPD Triage',
                problem: 'Crowded waiting lobbies, ungrounded room queues, and chaotic doctor room allocations.',
                ingestion: 'HL7/FHIR Inpatient Intake & Vitals Feeds',
                policy: 'Emergency Severity Index (ESI) Triage Level Rules',
                action: 'Dynamic Outpatient Queue Balancer & Room Assignment',
                gate: 'Triage Nursing Officer validation on high-acuity assignments',
                impact: '42% outpatient wait reduction',
              },
              {
                name: 'IPD & Wards',
                problem: 'Nursing shift handoff communication lag and missed medication schedule intervals.',
                ingestion: 'Bedside Patient Telemetry & Electronic Doctor Orders',
                policy: 'Nursing Ratio Limits & Strict Medication Administration Timers',
                action: 'Automated Nurse Shift Handover & IV Titration Charting',
                gate: 'Attending Physician sign-off on inpatient drug alterations',
                impact: 'Zero shift handover errors',
              },
              {
                name: 'Bed Turnover',
                problem: 'Average 110-minute vacant bed turnaround dead-time while new admissions wait in triage.',
                ingestion: 'Electronic Doctor Discharge Order Events & Room IoT',
                policy: 'Hospital Deep-Sanitization Cleaning Standard Checklist',
                action: 'Instant Housekeeping Staff Mobile Terminal Task Dispatch',
                gate: 'Sanitation Supervisor inspection approval before bed release',
                impact: '35 min average bed turnover turnaround',
              },
              {
                name: 'TPA Cashless Billing',
                problem: 'Insurance claim pre-authorization rejections, itemization queries, and discharge delays.',
                ingestion: 'Clinical Diagnostic Notes, Surgery Records & Itemized Invoices',
                policy: 'Insurer Policy Coverage Caps & Diagnostic Attachment Verification',
                action: 'Automated Cashless Pre-Auth Claim Packet Compilation & EDI Transmission',
                gate: 'Hospital Billing Superintendent final review before submission',
                impact: '60% claim query reduction',
              },
              {
                name: 'ICU & Critical Care',
                problem: 'Alarm fatigue, fragmented monitor feeds, and delayed intensivist notification.',
                ingestion: 'Continuous SpO2, Arterial Line, and Ventilator Feeds',
                policy: 'Sepsis Early Warning Score (NEWS2) Multi-Parameter Thresholds',
                action: 'Real-Time Telemetry Aggregation & Intensivist Emergency Escalation',
                gate: 'Intensivist verification on critical protocol changes',
                impact: 'Sub-2-minute clinical escalation',
              },
              {
                name: 'Emergency Trauma',
                problem: 'Delayed resuscitation bay preparation and chaotic crew notification during trauma arrivals.',
                ingestion: 'Ambulance Pre-Arrival Telemetry & Rapid Wristband Scans',
                policy: 'Trauma Activation Protocol & Mass Casualty Thresholds',
                action: 'Simultaneous Alert Routing to Trauma Surgeon, OT Crew & Blood Bank',
                gate: 'Emergency Department Head oversight on red activations',
                impact: 'Sub-90-second door-to-doctor triage',
              },
              {
                name: 'Diagnostic Lab',
                problem: 'Manual specimen result re-typing, transcription errors, and missing doctor notification.',
                ingestion: 'ASTM / HL7 Analyzer Bidirectional Streams & Phlebotomy Barcodes',
                policy: 'Delta Checks (>20% historical variance flag) & Westgard Quality Rules',
                action: 'Direct Analyzer-to-EMR Ingestion & Instant WhatsApp Patient PDF Delivery',
                gate: 'Senior Pathologist PKI digital signature before report release',
                impact: 'Zero result typing errors',
              },
              {
                name: 'Radiology PACS',
                problem: 'Slow stat scan interpretation times and delayed delivery of critical imaging findings.',
                ingestion: 'DICOM Modality Worklists (CT/MRI/X-Ray) & Zero-Loss Web PACS',
                policy: 'Renal Function / Contrast Safety Verification & Study Completeness Checks',
                action: 'Zero-Footprint Web DICOM Streaming & AI Speech-to-Text Transcription',
                gate: 'Consultant Radiologist signed diagnostic report approval',
                impact: 'Sub-45-min trauma report turnaround',
              },
              {
                name: 'Operation Theatre',
                problem: 'Turnaround dead-time between surgeries, missing sterilizer packs, and anaesthesia delays.',
                ingestion: 'Surgical Booking Roster & Autoclave Sterilization RFID Sensors',
                policy: 'WHO Surgical Safety Checklist Validation Enforcer',
                action: 'Automated Operating Suite Turnover Dispatch & Sterile Instrument Reorder',
                gate: 'Operating Surgeon sign-off before patient transfer to PACU',
                impact: '100% WHO safety checklist adherence',
              },
            ],
          },
          {
            id: 'clinic',
            name: 'Outpatient Specialty Clinic',
            subtext: 'Private practices, consultation queues, and digital billing',
            icon: Stethoscope,
            defaultDepartments: ['Consultation Queue', 'Patient EHR & Prescriptions', 'Digital Billing & UPI'],
            departments: [
              {
                name: 'Consultation Queue',
                problem: 'Waiting room crowding, unpredictable delays, and frustrated patients.',
                ingestion: 'Appointment Booking Engine & Walk-In Token Scanners',
                policy: 'Doctor Consultation Buffer Rules & Priority Patient Sorting',
                action: 'Live WhatsApp Queue Updates & Real-Time Token Projection',
                gate: 'Front desk supervisor manual priority override for emergencies',
                impact: '0 reception crowding',
              },
              {
                name: 'Patient EHR & Prescriptions',
                problem: 'Manual typing into clinic records, illegible handwriting, and missed allergy checks.',
                ingestion: 'Voice Dictation Audio & Historical Encounter Records',
                policy: 'Drug-to-Drug Allergy Contradiction Matrix & Generic Drug Equivalency',
                action: 'Structured E-Prescription Generation & Bilingual Patient Handouts',
                gate: 'Practicing Doctor digital signature on all issued prescriptions',
                impact: '12 min saved per consultation',
              },
              {
                name: 'Vitals & Rapid Triage',
                problem: 'Unrecorded triage vitals and failure to detect hypertensive or febrile spikes early.',
                ingestion: 'Digital BP Monitor, Pulse Oximeter, and Weight Scales via Bluetooth',
                policy: 'Pediatric and Adult Normal Reference Interval Screening',
                action: 'Automated Encounter Chart Pre-Population & High-Risk Visual Badge',
                gate: 'Nurse verification of captured vitals prior to doctor call-in',
                impact: '100% vitals capture compliance',
              },
              {
                name: 'Digital Billing & UPI',
                problem: 'Slow cash reconciliation, manual receipt generation, and accounting discrepancies.',
                ingestion: 'Doctor Fee Schedules & Point-of-Sale Terminal Feeds',
                policy: 'Itemized GST Schedule Mapping & Daily Collection Balance Validation',
                action: 'Instant Dynamic UPI QR Code Generation & WhatsApp Digital Receipts',
                gate: 'Clinic cashier authorization on refund or discount adjustments',
                impact: 'Sub-30-second checkout per patient',
              },
              {
                name: 'Automated Patient Follow-up',
                problem: 'Patients missing follow-up check-ins and unmonitored chronic condition regressions.',
                ingestion: 'Doctor Follow-Up Recommendations & Care Schedules',
                policy: 'Chronic Disease Protocol Intervals (Hypertension, Diabetes, Post-Op)',
                action: 'Autonomous WhatsApp Check-in Reminders & Vitals Submission Portal',
                gate: 'Doctor review required if patient submits out-of-range follow-up vitals',
                impact: '34% increase in follow-up adherence',
              },
              {
                name: 'Teleconsultation WebRTC',
                problem: 'Clunky video meeting apps requiring downloads, leading to dropped patient appointments.',
                ingestion: 'Teleconsultation WebRTC Stream & In-Call Diagnostics Viewer',
                policy: 'HIPAA & Telemedicine Practice Guidelines Compliance Checks',
                action: 'One-Click In-Browser Video Link Generation & E-Prescription Delivery',
                gate: 'Doctor live identity check before session initialization',
                impact: 'Zero patient app download friction',
              },
            ],
          },
          {
            id: 'laboratory',
            name: 'Diagnostic Laboratory',
            subtext: 'Pathology testing, analyzer LIS sync, and automated reports',
            icon: FlaskConical,
            defaultDepartments: ['Barcode Accessioning', 'Bidirectional LIS Sync', 'Pathologist Sign-off Queue', 'Automated PDF Report Dispatch'],
            departments: [
              {
                name: 'Phlebotomy & Sample Tracking',
                problem: 'Mislabeled collection tubes, lost specimens, and unrecorded collection times.',
                ingestion: 'Phlebotomy Mobile Worklist & GPS Home Collection Feeds',
                policy: 'Color-Coded Specimen Tube Rules & Temperature Stability Windows',
                action: 'Automated Barcode Label Printing & Real-Time Collection Status Sync',
                gate: 'Phlebotomist dual-identifier patient verification scan',
                impact: 'Zero specimen mix-up incidents',
              },
              {
                name: 'Barcode Accessioning',
                problem: 'Manual specimen logging, processing bottlenecks, and delayed centrifuge loading.',
                ingestion: '2D DataMatrix Barcode Scanners & Specimen Accessioning Log',
                policy: 'Sample Integrity Criteria (Hemolysis, Lipemia, Insufficient Volume)',
                action: 'Automated Worklist Allocation & Pre-Analytical Routing',
                gate: 'Lab Technician sign-off on physical specimen acceptance',
                impact: '100% chain-of-custody tracking',
              },
              {
                name: 'Bidirectional LIS Sync',
                problem: 'Manual re-typing of numerical lab values from analyzers causing clinical errors.',
                ingestion: 'ASTM / HL7 Serial & TCP Communication Streams from Analyzers',
                policy: 'Delta-Check Deviation Rules (>20% variance flags mandatory re-run)',
                action: 'Automated Analyzer Result Extraction & Direct Parameter Mapping',
                gate: 'System intercepts delta-check failures for secondary manual validation',
                impact: 'Eliminates 100% of result typing errors',
              },
              {
                name: 'Pathologist Sign-off Queue',
                problem: 'Slow reporting turnarounds and buried emergency/stat pathology specimens.',
                ingestion: 'Completed Machine Worklists & Historical Patient Test Records',
                policy: 'Normal Reference Interval Auto-Validation & Critical Boundary Filters',
                action: 'One-Click Certified Digital PKI Cryptographic Signing & Timestamping',
                gate: 'Certified Pathologist manual review required for abnormal parameters',
                impact: '50% faster report validation time',
              },
              {
                name: 'Automated PDF Report Dispatch',
                problem: 'Patients and referring doctors calling the lab repeatedly to check report status.',
                ingestion: 'Approved Test Parameters & Digital Pathologist Signature',
                policy: 'Patient Confidentiality Verification & Password-Protected PDF Rendering',
                action: 'Instant WhatsApp & SMS Delivery with QR Code Authenticity Badge',
                gate: 'Document generation locked until Pathologist signature is verified',
                impact: 'Zero patient report inquiry calls',
              },
              {
                name: 'Critical Panic Value Escalation',
                problem: 'Critical life-threatening lab values sitting unread in doctor inboxes.',
                ingestion: 'Analyzer Panic Flags (e.g., Potassium > 6.5, Platelets < 20k)',
                policy: 'Hospital Critical Biological Alert Protocol Limits',
                action: 'Automated IVR Phone Call & High-Priority WhatsApp Push to Treating Doctor',
                gate: 'Lab Supervisor documentation of verbal read-back acknowledgment',
                impact: 'Sub-3-minute physician notification',
              },
            ],
          },
          {
            id: 'pharmacy',
            name: 'Hospital & Retail Pharmacy',
            subtext: 'Inventory FEFO control, batch billing, and dispensing',
            icon: Pill,
            defaultDepartments: ['Counter Dispensing Verification', 'FEFO Batch & Expiry Control', 'Barcode GST Billing'],
            departments: [
              {
                name: 'Counter Dispensing Verification',
                problem: 'Medication dispensing mix-ups and look-alike sound-alike drug errors.',
                ingestion: 'Electronic Prescription Queue & 2D Barcode Scanners',
                policy: 'Scan-to-Verify Barcode Match & Patient Drug Allergy Matrix',
                action: 'Instant Barcode Validation & Bilingual Dosage Direction Printing',
                gate: 'Registered Pharmacist biometric sign-off on dispensed medications',
                impact: 'Zero dispensing mix-up errors',
              },
              {
                name: 'FEFO Batch & Expiry Control',
                problem: 'Expired medicine losses due to poor stock rotation and non-proactive vendor returns.',
                ingestion: 'Batch Inventory Ledger & Stock Movement Scanners',
                policy: 'First-Expiry-First-Out (FEFO) Picking Priority & 90/60/30-Day Alert Rules',
                action: 'Automated Supplier Debit Note Compilation & Return Manifest Generation',
                gate: 'Store Manager approval on supplier returns and credit adjustments',
                impact: 'Zero expired batch write-downs',
              },
              {
                name: 'Barcode GST Billing',
                problem: 'Slow peak-hour checkout lines and manual HSN code tax calculation mistakes.',
                ingestion: 'Point-of-Sale Barcode Scanners & Dynamic UPI QR Displays',
                policy: 'Multi-Slab GST (0%, 5%, 12%, 18%) HSN Drug Classification Rules',
                action: 'Sub-30-Second Invoice Generation & Direct Tally/ERP Ledger Sync',
                gate: 'Cashier supervisor authorization on bill line returns or cancellations',
                impact: 'Sub-30-second checkout per customer',
              },
              {
                name: 'Inpatient Ward Indent Fulfillment',
                problem: 'Stat medication requests for ICU/Ward sitting unfulfilled in paper queues.',
                ingestion: 'Nurse Ward Medication Indent Feeds & Pneumatic Dispatch Trackers',
                policy: 'Emergency Stat Medication Priority Sorting & Stock Allocation Rules',
                action: 'Rapid Batch Picking Route Generation & Pneumatic Tube Routing',
                gate: 'Ward Nurse digital receipt sign-off upon medication handover',
                impact: 'Under 15-min turnaround for stat ward orders',
              },
              {
                name: 'Automated Supplier PO Reorder',
                problem: 'Frequent stockouts of fast-moving essential formulations due to delayed reordering.',
                ingestion: 'Sales Velocity Telemetry & Supplier Lead-Time Database',
                policy: 'Dynamic Safety Stock Reorder Thresholds & Minimum Order Quantities',
                action: 'Automated EDI Purchase Order Generation & Vendor Transmission',
                gate: 'Procurement Head approval on purchase orders exceeding budget limits',
                impact: '100% availability of life-saving formulations',
              },
              {
                name: 'Schedule H/X Narcotics Vault',
                problem: 'Regulatory non-compliance during government drug enforcement inspections.',
                ingestion: 'Controlled Substance Dispensing Log & Patient Aadhaar Verification',
                policy: 'FDA Schedule H, H1 & X Statutory Compliance Requirements',
                action: 'Immutable Digital Narcotics Register & Daily Balance Calculation',
                gate: 'Dual-Pharmacist biometric sign-off required for Schedule X release',
                impact: '100% regulatory audit compliance',
              },
            ],
          },
          {
            id: 'radiology',
            name: 'Radiology & Imaging Center',
            subtext: 'Modality worklists, web PACS, and radiologist dictation',
            icon: Scan,
            defaultDepartments: ['Modality Worklist (MWL)', 'Zero-Footprint Web PACS', 'Radiologist Tele-Reporting', 'Critical Acute Finding Alerts'],
            departments: [
              {
                name: 'Modality Worklist (MWL)',
                problem: 'Technologists manually re-typing patient demographics onto CT/MRI consoles.',
                ingestion: 'RIS Imaging Appointment Scheduler & Lab Serum Creatinine Feeds',
                policy: 'DICOM Modality Worklist (MWL) Protocol & Contrast Safety Verification',
                action: 'Direct Push of Patient Demographics to CT, MRI, X-Ray & USG Consoles',
                gate: 'Radiology Technologist verification of contrast allergy checklist',
                impact: 'Zero console demographic typing errors',
              },
              {
                name: 'Zero-Footprint Web PACS',
                problem: 'Bulky proprietary workstations required to view diagnostic imaging studies.',
                ingestion: 'Lossless DICOM Ingestion Feeds from Modalities & S3 Archive',
                policy: 'HIPAA Compliant Encrypted Streaming & Complete Study Integrity Checks',
                action: 'Sub-2-Second Web Streaming, Multi-Planar Reconstruction (MPR) & 3D Render',
                gate: 'System auto-verifies series slice completeness before permanent archive',
                impact: 'Instant 2-sec diagnostic streaming on any device',
              },
              {
                name: 'Radiologist Tele-Reporting',
                problem: 'Severe reporting backlogs and uneven distribution of cases across sub-specialists.',
                ingestion: 'Unread DICOM Study Queue & Radiologist Specialty Availability Roster',
                policy: 'Sub-Specialty Case Allocation (Neuro, MSK, Body, Onco) & Stat Priority Rules',
                action: 'Automated Worklist Routing & Pre-Loaded Structured RADLEX Templates',
                gate: 'Consultant Radiologist signed diagnostic report approval',
                impact: '55% reduction in study reporting turnarounds',
              },
              {
                name: 'Medical Speech-to-Text Dictation',
                problem: 'Radiologists spending 3+ hours per shift manually typing lengthy radiological reports.',
                ingestion: 'Reading Room Microphone Audio & Specialized Medical Lexicon Engine',
                policy: 'RADLEX & BI-RADS Standardized Anatomical Terminology Enforcer',
                action: 'Real-Time Voice-to-Structured Report Transcription with 99.2% Accuracy',
                gate: 'Radiologist proofread and sign-off required prior to document lock',
                impact: 'Saves 2.5 hours of typing per radiologist shift',
              },
              {
                name: 'Critical Acute Finding Alerts',
                problem: 'Acute intracranial bleeds or pulmonary embolisms sitting unnoticed on non-urgent queues.',
                ingestion: 'Radiologist Report Finding Keywords & AI Triage Detection Flags',
                policy: 'Critical Radiologic Finding Protocol (Pneumothorax, Aortic Dissection, Stroke)',
                action: 'Immediate Telephony Automated Call & Encrypted WhatsApp to Referring Doctor',
                gate: 'Radiologist documentation of direct telephone communication to physician',
                impact: 'Sub-5-minute direct physician notification',
              },
              {
                name: 'Secure Patient DICOM Portal',
                problem: 'Expensive physical film printing, courier costs, and patients losing hard copies.',
                ingestion: 'Finalized Radiologist Reports & Compressed Key Imaging Studies',
                policy: 'Two-Factor Patient Authentication & Secure Time-Limited Access Tokens',
                action: 'One-Click PIN-Protected Web Viewer & Full Diagnostic DICOM Download Link',
                gate: 'Two-factor authentication required for patient and doctor access',
                impact: '100% film-free operation with zero courier delay',
              },
            ],
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
            defaultDepartments: ['Dynamic RevPAR Pricing', 'WhatsApp 24/7 Concierge', 'Housekeeping Turnover Roster', 'Bidirectional OTA Channel Sync'],
            departments: [
              {
                name: 'Dynamic RevPAR Pricing',
                problem: 'Sub-optimal room pricing during sudden demand spikes, leaving revenue on the table.',
                ingestion: 'Local Competitor ADR Scrapers, Booking Pace & City Event Calendars',
                policy: 'Rate Floor and Ceiling Guardrails & Minimum Length of Stay (MLOS) Rules',
                action: 'Algorithmic Rate Optimization Across All 15+ Connected OTA Channels',
                gate: 'Revenue Director authorization on manual rate overrides',
                impact: '+28% RevPAR increase',
              },
              {
                name: 'WhatsApp 24/7 Concierge',
                problem: 'Reception queue congestion during check-in hours and unanswered guest requests.',
                ingestion: 'Multi-Lingual Inbound Guest Messages (WhatsApp / Voice / Web)',
                policy: 'Hotel Amenity Guidelines & Guest Verification Identity Validation',
                action: 'Autonomous Guest Query Resolution & Digital Room Key Delivery',
                gate: 'Front Desk Duty Manager approval on complimentary room upgrades',
                impact: '0 min reception queue wait time',
              },
              {
                name: 'Housekeeping Turnover Roster',
                problem: 'Turnover delays between checkout and check-in causing guest arrival wait times.',
                ingestion: 'PMS Guest Checkout Events & Room Door Lock Sensor Logs',
                policy: 'VIP Guest Arrival Priority & Deep-Sanitization Cleaning Standard Checklist',
                action: 'Instant Housekeeping Staff Dispatch & Real-Time Room Status Toggling',
                gate: 'Executive Housekeeper inspection approval before room status toggles clean',
                impact: 'Reduces room turnaround time to 22 minutes',
              },
              {
                name: 'Contactless Check-In & Digital Key',
                problem: 'Front-desk crowding with long lines of arriving guests waiting for physical key cards.',
                ingestion: 'Pre-Arrival Guest Identity Submissions & RFID Door Lock Server Feeds',
                policy: 'Government ID Validation Requirements & Credit Card Pre-Authorization Bounds',
                action: 'Encrypted Digital Key Generation & One-Click Bluetooth Mobile Door Access',
                gate: 'Duty Manager verification of guest passport / ID upload',
                impact: '100% contactless arrival experience',
              },
              {
                name: 'Bidirectional OTA Channel Sync',
                problem: 'Double-booking errors and manual rate updates across Booking.com, Expedia, and Airbnb.',
                ingestion: 'Two-Way Channel Manager Booking Webhooks & Cancellation Feeds',
                policy: 'Zero Overbooking Tolerances & Rate Parity Enforcement Rules',
                action: 'Instant Sub-Second Inventory Synchronization Across All Global Portals',
                gate: 'System locks inventory synchronization during emergency property maintenance',
                impact: 'Zero double-booking incidents',
              },
              {
                name: 'F&B In-Room Dining & POS',
                problem: 'Slow room service order taking, missed special requests, and lost dining revenue.',
                ingestion: 'In-Room QR Code Dining Orders & Kitchen Display System (KDS) Telemetry',
                policy: 'Menu Item Availability & Kitchen Preparation Queue Buffers',
                action: 'Instant Ticket Routing to Chef Station & Automatic Posting to Guest Folio',
                gate: 'Restaurant Manager sign-off on billing disputes or line refunds',
                impact: '32% increase in in-room dining spend',
              },
            ],
          },
          {
            id: 'boutique_hotel',
            name: 'Boutique & Lifestyle Hotel',
            subtext: 'High-touch guest personalization and streamlined operations',
            icon: Building2,
            defaultDepartments: ['WhatsApp Guest Concierge', 'Dynamic Nightly Pricing', 'Turnover Dispatch'],
            departments: [
              {
                name: 'WhatsApp Guest Concierge',
                problem: 'High staff overhead to maintain 24/7 front desk coverage for smaller boutique hotels.',
                ingestion: 'Guest Messaging Stream on WhatsApp & In-Room QR Code Requests',
                policy: 'Boutique Property Tone-of-Voice Guidelines & Local Amenity Recommendations',
                action: 'Autonomous 24/7 Guest Assistance, Local Recommendations & Service Dispatch',
                gate: 'General Manager verification on refund requests or special accommodations',
                impact: '4.9/5 guest review satisfaction',
              },
              {
                name: 'Dynamic Nightly Pricing',
                problem: 'Static weekend tariffs failing to capture high weekend tourist premiums.',
                ingestion: 'Boutique Neighborhood Occupancy Data & Flight Arrival Velocity',
                policy: 'Max Discounting Limits & Minimum Night Stay Weekend Rules',
                action: 'Automated Rate Adjustments to Maximize Boutique RevPAR Every 30 Minutes',
                gate: 'Hotel Owner approval on seasonal promotional packages',
                impact: '+22% direct booking revenue',
              },
              {
                name: 'Turnover Dispatch',
                problem: 'Miscommunication between front desk and cleaning staff on early arrival readiness.',
                ingestion: 'Guest Departure Notifications & Front-Desk Early Arrival Flags',
                policy: 'Boutique Room Staging Protocol & Fresh Linen Certification',
                action: 'Direct Mobile Notification to Dedicated Floor Housekeeper',
                gate: 'Head Housekeeper visual inspection sign-off before key release',
                impact: '100% early check-in readiness',
              },
              {
                name: 'Guest Preference CRM',
                problem: 'Returning guests treated like first-time visitors, losing brand loyalty.',
                ingestion: 'Guest Stay History, Temperature Preferences & Dietary Requests',
                policy: 'Personalization Rulebook (Pillow Choice, Preferred Wine, Anniversary Perks)',
                action: 'Automated Room Preparation Worklist & Personalized Welcome Card Generation',
                gate: 'Guest Relations Manager review of VIP arrival amenities',
                impact: '44% repeat guest retention',
              },
              {
                name: 'Direct Booking Engine Sync',
                problem: 'High commission bleed (18-25%) paid to online travel agencies.',
                ingestion: 'Hotel Website Booking Engine API & Stripe Payment Webhooks',
                policy: 'Best-Rate-Guarantee Parity Guardrails & Member Exclusive Discount Rules',
                action: 'Instant Booking Confirmation, WhatsApp Itinerary Push & Folio Creation',
                gate: 'Cashier verification on bank wire confirmations',
                impact: 'Save thousands in monthly OTA commissions',
              },
            ],
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
            defaultDepartments: ['Cross-Tool CRM & Helpdesk Sync', 'Automated Tier-1 Ticket Resolver', 'Cryptographic Approval Gates'],
            departments: [
              {
                name: 'Cross-Tool CRM & Helpdesk Sync',
                problem: 'Sales and support out of sync due to manual copying between Salesforce and Zendesk.',
                ingestion: 'Salesforce Webhooks & Zendesk Support Event Bus',
                policy: 'Deterministic Conflict Resolution Precedence & Schema Contracts',
                action: 'Transactional Two-Phase Commit Field Synchronization Across Systems',
                gate: 'Account Director approval required to modify closed deal ARR values',
                impact: '82% reduction in cross-tool administrative lag',
              },
              {
                name: 'Automated Tier-1 Ticket Resolver',
                problem: 'Support teams drowning in repetitive password resets, billing queries, and status checks.',
                ingestion: 'Multi-Channel Support Tickets (Email, Portal, Slack)',
                policy: 'Confidence Threshold Scoring (>85% required for autonomous action)',
                action: 'Deterministic Workflow Execution Inside Helpdesk with Zero Hallucination',
                gate: 'Human Support Agent escalation if confidence score drops below 85%',
                impact: '64% automated resolution of routine requests',
              },
              {
                name: 'Contract Onboarding Pipeline',
                problem: 'Signed enterprise deals taking 3 weeks to transition into active customer onboarding.',
                ingestion: 'DocuSign Closed-Won Webhooks & CRM Order Records',
                policy: 'Contract Terms Validation & Provisioning Checklist Enforcer',
                action: 'Automated Workspace Provisioning, Jira Project Setup & Welcome Flow Dispatch',
                gate: 'RevOps Lead verification before provisioning custom enterprise tiers',
                impact: 'Cuts customer onboarding time from 3 weeks to 2 hours',
              },
              {
                name: 'Predictive SLA Breach Sentinel',
                problem: 'Support tickets breaching SLA thresholds unnoticed, leading to contractual penalty credits.',
                ingestion: 'Real-Time Ticket Queue Telemetry & On-Call Engineer Availability Roster',
                policy: 'SLA Grace Period Warning Rules (Triggers at 70% elapsed time)',
                action: 'Automated Ticket Escalation & Slack Alert Dispatch to Engineering On-Call',
                gate: 'VP of Customer Success sign-off on SLA penalty credit issuance',
                impact: 'Zero unaddressed SLA breaches',
              },
              {
                name: 'Cryptographic Approval Gates',
                problem: 'High-risk financial or operational actions executing without supervisor authorization.',
                ingestion: 'Action Execution Interception Bus & Transaction Risk Scorer',
                policy: 'Financial Threshold Limits ($5,000+) & Sensitive Data Modification Bounds',
                action: 'Interactive Approval Card Dispatch to Executive Slack with Cryptographic Hash',
                gate: 'Executive Supervisor digital signature mandatory to release paused transaction',
                impact: 'Zero unauthorized business actions',
              },
              {
                name: 'In-Memory PII Tokenization',
                problem: 'Sensitive customer identity and payment records leaking into LLM reasoning logs.',
                ingestion: 'Raw Inbound API Payloads & Customer Webhook Feeds',
                policy: 'GDPR, HIPAA & DPDP Data Privacy Redaction Standards',
                action: 'In-Memory Tokenization with Isolated Customer-Controlled Key Vault',
                gate: 'Chief Information Security Officer (CISO) access audit policy',
                impact: '100% data privacy compliance',
              },
            ],
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
            defaultDepartments: ['Real-Time Warehouse Stock Sync', 'Automated Returns & Fraud Triage', 'Wholesale Supplier PO Automation'],
            departments: [
              {
                name: 'Real-Time Warehouse Stock Sync',
                problem: 'Overselling products during flash sales due to lagged synchronization between warehouse and Shopify.',
                ingestion: 'Shopify Plus / Amazon Orders & WMS Barcode Scanners',
                policy: 'Safety Buffer Stock Calculations & Real-Time Channel Allocations',
                action: 'Sub-Second Multi-Channel Stock Decrement & Low-Inventory Banners',
                gate: 'Inventory Controller sign-off on manual stock write-downs',
                impact: 'Zero inventory overselling incidents',
              },
              {
                name: 'Automated Returns & Fraud Triage',
                problem: 'High customer support overhead processing returns and serial return fraud losses.',
                ingestion: 'Return Portal Submissions & Courier Tracking Webhooks',
                policy: 'Customer Return History Fraud Scoring & Warranty Expiry Matrix',
                action: 'Prepaid Return Label Issuance & Instant Scan-to-Refund Execution',
                gate: 'Fraud Operations Manager approval on high-value flagged returns',
                impact: '4-hour return turnaround · 0 fraud loss',
              },
              {
                name: 'Wholesale Supplier PO Automation',
                problem: 'Frequent stockouts of top-selling SKUs caused by delayed manual purchase orders.',
                ingestion: 'Sales Velocity Models & Supplier Lead-Time Database',
                policy: 'Minimum Order Quantities (MOQ) & Reorder Point Calculations',
                action: 'Automated EDI Purchase Order Creation & Supplier Transmission',
                gate: 'Procurement Director sign-off on purchase orders exceeding budget limits',
                impact: '100% SKU availability on core catalog',
              },
              {
                name: 'Split Payment & GST Reconciliation',
                problem: 'Accounting teams spending days reconciling split UPI, Card, and Cash transactions.',
                ingestion: 'Payment Gateway Webhooks & Bank Settlement Statements',
                policy: 'HSN Tax Classification Rules & Settlement Discrepancy Tolerances',
                action: 'Automated Transaction Reconciliation & Balanced Journal Entry Postings',
                gate: 'Finance Controller verification on settlement variance investigations',
                impact: '85% faster monthly book closing',
              },
              {
                name: 'Customer Order Status Bot',
                problem: 'Over 40% of customer support volume spent answering "Where is my order?" (WISMO).',
                ingestion: 'Customer Inbound Messages on WhatsApp & Courier Tracking Feeds',
                policy: 'Order Verification via Mobile OTP & Carrier Milestone Status',
                action: 'Instant Multi-Lingual WhatsApp Order Tracking & Proactive Delay Alerts',
                gate: 'Customer support agent takeover if courier reports package lost',
                impact: '70% deflection of WISMO inquiries',
              },
            ],
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
            defaultDepartments: ['Matter Intake & Conflict Checking', 'Billable Activity Reconstruction', 'Confidential Document Redaction'],
            departments: [
              {
                name: 'Matter Intake & Conflict Checking',
                problem: 'Manual conflict searches taking days, risking ethical breaches or lost client retainers.',
                ingestion: 'Client Intake Webhooks & Corporate Entity Database Feeds',
                policy: 'Ethical Corporate Conflict Checks & Adverse Party Cross-Reference',
                action: 'Instant Conflict Report Generation & Draft Engagement Letter Dispatch',
                gate: 'Managing Partner review on conflict waivers and engagement acceptance',
                impact: 'Sub-10-minute matter intake turnaround',
              },
              {
                name: 'Billable Activity Reconstruction',
                problem: 'Attorneys losing 15-20% of billable time by forgetting to log client emails and calls.',
                ingestion: 'Calendar Meetings, Outgoing Email Telemetry & Document Edit Logs',
                policy: 'Client Outside Counsel Billing Guideline Adherence (UTBMS/LEDES)',
                action: 'Automated Draft Pre-Bill Assembly & Activity Tag Suggestions',
                gate: 'Billing Partner sign-off on pre-bills and client discounts',
                impact: '18% billable revenue recovery',
              },
              {
                name: 'LEDES/UTBMS Invoice Hygiene',
                problem: 'Corporate client e-billing portals rejecting invoices due to non-compliant narratives.',
                ingestion: 'Time Entry Narratives & E-Billing Guideline Rulesets',
                policy: 'Vague Entry Detection (e.g., "attention to file") & Block-Billing Filters',
                action: 'Automated Narrative Scrubbing & LEDES 1998B File Formatting',
                gate: 'Senior Associate verification of modified narrative descriptions',
                impact: 'Zero invoice rejections from client portals',
              },
              {
                name: 'Confidential Document Redaction',
                problem: 'Manual black-lining of confidential client PII or privileged notes risking inadvertent disclosure.',
                ingestion: 'Scanned Discovery Documents, Briefs & Transaction Records',
                policy: 'Attorney-Client Privilege Tags & Statutory PII Detection Rules',
                action: 'Optical OCR Text Extraction & Permanent Cryptographic Redaction',
                gate: 'Senior Counsel validation of privilege log entries prior to release',
                impact: '100% privilege protection guarantee',
              },
              {
                name: 'Secure Client Document Portal',
                problem: 'Exchanging sensitive legal contracts via unencrypted email attachments.',
                ingestion: 'Executed Documents Vault & Client Access Permissions Roster',
                policy: 'Role-Based Access Control (RBAC) & Two-Factor Authentication',
                action: 'PIN-Protected Watermarked File Sharing & Audit Access Logging',
                gate: 'Lead Partner approval on external document permission grants',
                impact: 'Complete evidentiary chain-of-custody',
              },
            ],
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
            defaultDepartments: ['Autonomous KYC & Sanctions Screen', 'Card Dispute & Chargeback Defense', 'Multi-Rail Payment Reconciliation'],
            departments: [
              {
                name: 'Autonomous KYC & Sanctions Screen',
                problem: 'Manual compliance document checks creating days of onboarding lag for new users.',
                ingestion: 'Government ID Credential Feeds & Global Watchlist Databases (OFAC/PEP)',
                policy: 'Anti-Money Laundering (AML) Risk Thresholds & Liveness Verification Rules',
                action: 'Instant OCR Document Extraction, Sanction Matching & Risk Tier Assignment',
                gate: 'Compliance Officer sign-off on enhanced due diligence and PEP onboarding',
                impact: 'Sub-60s automated user onboarding',
              },
              {
                name: 'Card Dispute & Chargeback Defense',
                problem: 'Missing dispute response deadlines resulting in automatic revenue write-offs to issuers.',
                ingestion: 'Visa / Mastercard Dispute Notifications & Transaction Logs',
                policy: 'Card Network Compelling Evidence Requirements & Dispute Timeline Deadlines',
                action: 'Automated Evidence Package Compilation (IP, Signed Receipt, Delivery Proof)',
                gate: 'Chargeback Analyst review before evidence package submission',
                impact: '68% chargeback win rate recovery',
              },
              {
                name: 'Multi-Rail Payment Reconciliation',
                problem: 'Reconciling millions of transactions across cards, UPI, and wires taking weeks each month.',
                ingestion: 'Card Processor Settlement Statements, UPI Feeds & Core Banking Ledgers',
                policy: 'Interchange Settlement Tolerances & Currency Conversion Variance Limits',
                action: 'Daily Multi-Rail Transaction Matching & Automated Ledger Postings',
                gate: 'Treasury Controller authorization on ledger adjustment journal postings',
                impact: '88% faster settlement reconciliation',
              },
              {
                name: 'Suspicious Activity Flagging',
                problem: 'High-volume transaction laundering going undetected until regulatory audits.',
                ingestion: 'Continuous Transaction Stream & Velocity Velocity Anomaly Trackers',
                policy: 'Financial Intelligence Unit (FIU) Suspicious Transaction Matrix',
                action: 'Automated Account Freeze Interception & SAR Dossier Pre-Compilation',
                gate: 'Chief Compliance Officer review and statutory SAR submission authorization',
                impact: '100% compliance with AML regulatory mandates',
              },
              {
                name: 'Cryptographic Decision Ledger',
                problem: 'Unable to explain or audit automated risk decisions to central bank regulators.',
                ingestion: 'Risk Scoring Inputs, Prompt Models & Execution Signals',
                policy: 'Immutable Storage Standards & SHA-256 Cryptographic Hash Chaining',
                action: 'Append-Only Decision Logging & One-Click Regulatory Audit Report Export',
                gate: 'Internal Audit Committee read-only verification access',
                impact: 'Defensible regulatory audit readiness',
              },
            ],
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
  isStandalonePage?: boolean;
}

export default function ChooseYourSetup({
  onOpenStrategyCall,
  isStandalonePage = false,
}: ChooseYourSetupProps) {
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
  const [expandedDepartmentName, setExpandedDepartmentName] = useState<string | null>('OPD Triage');

  // Derived current selections
  const currentIndustry = useMemo(
    () => industryWorkflowData.find((ind) => ind.id === selectedIndustryId) || industryWorkflowData[0],
    [selectedIndustryId]
  );

  const currentProduct = useMemo(
    () => currentIndustry.products.find((prod) => prod.id === selectedProductId) || currentIndustry.products[0],
    [currentIndustry, selectedProductId]
  );

  const currentSetup = useMemo(
    () => currentProduct.setups.find((setup) => setup.id === selectedSetupId) || currentProduct.setups[0],
    [currentProduct, selectedSetupId]
  );

  // Active department objects based on user selection
  const activeDepartmentSpecs = useMemo(() => {
    return currentSetup.departments.filter((dept) =>
      selectedDepartments.length === 0 ? true : selectedDepartments.includes(dept.name)
    );
  }, [currentSetup, selectedDepartments]);

  // Handler: Change Industry (resets product, setup, and departments)
  const handleSelectIndustry = (indId: string) => {
    setSelectedIndustryId(indId);
    const ind = industryWorkflowData.find((i) => i.id === indId) || industryWorkflowData[0];
    const defaultProd = ind.products[0];
    setSelectedProductId(defaultProd.id);
    const defaultSetup = defaultProd.setups[0];
    setSelectedSetupId(defaultSetup.id);
    setSelectedDepartments(defaultSetup.defaultDepartments);
    setExpandedDepartmentName(defaultSetup.defaultDepartments[0] || null);
  };

  // Handler: Change Product (resets setup and departments)
  const handleSelectProduct = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = currentIndustry.products.find((p) => p.id === prodId) || currentIndustry.products[0];
    const defaultSetup = prod.setups[0];
    setSelectedSetupId(defaultSetup.id);
    setSelectedDepartments(defaultSetup.defaultDepartments);
    setExpandedDepartmentName(defaultSetup.defaultDepartments[0] || null);
  };

  // Handler: Change Setup (resets departments)
  const handleSelectSetup = (setupId: string) => {
    setSelectedSetupId(setupId);
    const setup = currentProduct.setups.find((s) => s.id === setupId) || currentProduct.setups[0];
    setSelectedDepartments(setup.defaultDepartments);
    setExpandedDepartmentName(setup.defaultDepartments[0] || null);
  };

  // Handler: Toggle Department Tag
  const toggleDepartment = (deptName: string) => {
    setSelectedDepartments((prev) => {
      const isAlreadySelected = prev.includes(deptName);
      const updated = isAlreadySelected ? prev.filter((d) => d !== deptName) : [...prev, deptName];
      if (!isAlreadySelected) {
        setExpandedDepartmentName(deptName);
      }
      return updated;
    });
  };

  const content = (
    <div className={`space-y-12 ${isStandalonePage ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'}`}>
      {!isStandalonePage && (
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.div variants={fadeUpVariants}>
            <Eyebrow>Progressive Architecture Configurator</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] tracking-tight leading-[1.12]"
          >
            Find Your Tailored Operational Architecture.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-base text-[#71717a]">
            Follow the 4-step progressive pipeline: Select your industry ➔ choose your core product ➔ customize facility &amp; departments ➔ inspect your dynamically synthesized architecture recommendation.
          </motion.p>
        </motion.div>
      )}

      {/* ========================================================== */}
      {/* STEP 1: INDUSTRY WE WORK WITH */}
      {/* ========================================================== */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#09090b] text-white text-xs font-mono font-bold flex items-center justify-center">
              1
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#09090b] uppercase tracking-wider font-mono">
              Industry We Work With
            </h3>
          </div>
          <span className="text-xs font-mono text-[#09090b] font-semibold hidden sm:inline">
            Active: {currentIndustry.name}
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
                  className={`p-4 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 ${
                    isSelected
                      ? 'bg-white border-black ring-1 ring-black shadow-md scale-[1.02]'
                      : 'bg-[#fafafa] border-black/[0.08] hover:bg-white hover:border-black/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div
                      className={`p-2.5 rounded-xl w-fit transition-colors ${
                        isSelected
                          ? 'bg-black text-white'
                          : 'bg-black/[0.04] text-[#71717a]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#09090b] line-clamp-1">
                        {ind.shortName}
                      </h4>
                      <p className="text-[10px] text-[#71717a] line-clamp-2 mt-0.5">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="pt-2 mt-2 border-t border-black/10 flex items-center gap-1 text-[10px] font-mono text-[#09090b] font-bold">
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
        {/* STEP 2: EXPANDS TO MAIN PRODUCTS */}
        {/* ========================================================== */}
        <div className="space-y-4 pt-4 border-t border-black/[0.06]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#09090b] text-white text-xs font-mono font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#09090b] uppercase tracking-wider font-mono">
                Engineered Products for {currentIndustry.shortName}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#71717a]">
              {currentIndustry.products.length} {currentIndustry.products.length === 1 ? 'System' : 'Systems'} Available
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
                  className={`p-6 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 ${
                    isSelected
                      ? 'bg-white border-black ring-1 ring-black shadow-lg'
                      : 'bg-[#fafafa] border-black/[0.08] hover:bg-white hover:border-black/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-bold">
                        {prod.category}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold bg-black/[0.05] text-[#09090b] border border-black/10">
                        {prod.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                          isSelected
                            ? 'bg-black text-white'
                            : 'bg-black/[0.04] text-[#71717a]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#09090b]">{prod.name}</h4>
                        <p className="text-xs text-[#71717a] leading-relaxed mt-1">
                          {prod.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#3f3f46]">
                    <span>{isSelected ? '✓ Active Core Product' : 'Select Core Product'}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#09090b] translate-x-1' : 'text-[#a1a1aa]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* STEP 3: CUSTOMISE SETUP (FACILITY & DEPARTMENTS) */}
        {/* ========================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#fafafa] border border-black/[0.08] shadow-xs space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#09090b] text-white text-xs font-mono font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#09090b] uppercase tracking-wider font-mono">
                  Customise Setup: Choose Facility &amp; Departments
                </h3>
              </div>
              <span className="text-xs font-mono text-[#09090b] font-bold">
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
                    className={`p-4 rounded-xl border text-left transition-all duration-150 flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-black ring-1 ring-black shadow-sm'
                        : 'bg-white/60 border-black/[0.08] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? 'bg-black text-white' : 'bg-black/[0.04] text-[#71717a]'
                        }`}
                      >
                        <SIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#09090b] block">
                          {setup.name}
                        </span>
                        <span className="text-[10px] text-[#71717a] line-clamp-1">
                          {setup.subtext}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#09090b] shrink-0 stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Department Multi-Select Chips */}
          <div className="pt-4 border-t border-black/[0.06] space-y-4">
            <div className="text-center sm:text-left space-y-1">
              <h4 className="text-sm font-bold text-[#09090b]">
                What operational departments do you manage in your {currentSetup.name}?
              </h4>
              <p className="text-xs text-[#71717a]">
                Click to toggle operational areas. The architecture blueprint below dynamically re-synthesizes in real time:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {currentSetup.departments.map((dept) => {
                const isSelected = selectedDepartments.includes(dept.name);

                return (
                  <button
                    key={dept.name}
                    onClick={() => toggleDepartment(dept.name)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 flex items-center gap-1.5 min-h-[38px] ${
                      isSelected
                        ? 'bg-[#09090b] text-white font-bold shadow-sm scale-[1.02] border border-[#09090b]'
                        : 'bg-white text-[#3f3f46] hover:text-[#09090b] border border-black/[0.08] hover:border-black/20'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                    <span>{dept.name}</span>
                    {isSelected && (
                      <span className="text-[10px] text-zinc-300 ml-0.5 font-mono">
                        active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* STEP 4: DYNAMIC TAILORED ARCHITECTURE RECOMMENDATION */}
        {/* ========================================================== */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-black/15 shadow-xl space-y-8 ring-1 ring-black/5">
          {/* Header: Identity of Tailored Solution */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.08] pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#09090b] text-white text-xs font-mono font-bold flex items-center justify-center">
                  4
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#09090b] font-bold">
                  Tailored Solution Architecture Blueprint
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Customized {currentProduct.name} for {currentSetup.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#71717a]">
                Configured for {activeDepartmentSpecs.length} Active {activeDepartmentSpecs.length === 1 ? 'Area' : 'Areas'}:{' '}
                <span className="font-semibold text-[#09090b]">
                  {activeDepartmentSpecs.map((d) => d.name).join(', ')}
                </span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fafafa] border border-black/[0.08] self-start sm:self-auto shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] font-bold block">
                Target Operational Impact
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#09090b]">
                {activeDepartmentSpecs[0]?.impact || 'Deterministic Operational Throughput'}
              </span>
            </div>
          </div>

          {/* Dynamic Operational Drag & Problem Solved */}
          <div className="p-5 rounded-2xl bg-[#fafafa] border border-black/[0.06] space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#09090b] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Friction Eliminated Across Your Selected Areas</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {activeDepartmentSpecs.slice(0, 4).map((dept) => (
                <div key={dept.name} className="text-xs text-[#3f3f46] flex items-start gap-2">
                  <span className="text-[#09090b] font-bold shrink-0">[{dept.name}]:</span>
                  <span>{dept.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic 4-Tier Blueprint Matrix (Changes with Selected Departments) */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] font-bold block">
              Dynamic Deterministic Execution Matrix ({activeDepartmentSpecs.length} Configured Departments)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Tier 1: Ingestion Layer (Dynamic) */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#09090b] font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#09090b]" />
                  <span>1. Ingestion Feeds</span>
                </div>
                <div className="space-y-2">
                  {activeDepartmentSpecs.map((dept) => (
                    <div key={dept.name} className="text-xs text-[#3f3f46] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#71717a] block">{dept.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#09090b] shrink-0" />
                        <span className="line-clamp-2">{dept.ingestion}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 2: Policy Rules (Dynamic) */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#09090b] font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#09090b]" />
                  <span>2. Deterministic Policies</span>
                </div>
                <div className="space-y-2">
                  {activeDepartmentSpecs.map((dept) => (
                    <div key={dept.name} className="text-xs text-[#3f3f46] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#71717a] block">{dept.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#09090b] shrink-0" />
                        <span className="line-clamp-2">{dept.policy}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 3: Autonomous Actions (Dynamic) */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#09090b] font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#09090b]" />
                  <span>3. Autonomous Actions</span>
                </div>
                <div className="space-y-2">
                  {activeDepartmentSpecs.map((dept) => (
                    <div key={dept.name} className="text-xs text-[#3f3f46] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#71717a] block">{dept.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#09090b] shrink-0" />
                        <span className="line-clamp-2">{dept.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 4: Human Governance Gate (Dynamic) */}
              <div className="p-5 rounded-2xl bg-[#09090b] text-white shadow-xs space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>4. Mandatory Human Gate</span>
                </div>
                <div className="space-y-2">
                  {activeDepartmentSpecs.map((dept) => (
                    <div key={dept.name} className="text-xs text-[#d4d4d8] space-y-0.5 border-b border-white/[0.08] pb-1.5 last:border-0 last:pb-0">
                      <span className="text-[10px] font-mono text-[#a1a1aa] block">{dept.name}</span>
                      <span className="line-clamp-2">{dept.gate}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#a1a1aa] block pt-1 border-t border-white/10">
                  Zero autonomous bypass.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Deep-Dive Module Drawers (Downward Expandable on User Click) */}
          <div className="pt-4 border-t border-black/[0.08] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#09090b] font-bold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#09090b]" />
                <span>Department Operational Deep-Dives (Click to Expand Down)</span>
              </span>
              <span className="text-xs text-[#71717a]">
                {activeDepartmentSpecs.length} Configured
              </span>
            </div>

            <div className="space-y-2">
              {activeDepartmentSpecs.map((dept) => {
                const isExpanded = expandedDepartmentName === dept.name;

                return (
                  <div
                    key={dept.name}
                    className={`rounded-2xl border transition-all duration-150 overflow-hidden bg-white ${
                      isExpanded
                        ? 'border-black ring-1 ring-black shadow-sm'
                        : 'border-black/[0.08] hover:border-black/20'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedDepartmentName(isExpanded ? null : dept.name)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#09090b] bg-black/[0.05] border border-black/10 px-2.5 py-0.5 rounded-full">
                          {dept.name}
                        </span>
                        <span className="text-xs font-bold text-[#09090b] hidden sm:inline">
                          {dept.impact}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#71717a]">
                          {isExpanded ? 'Collapse' : 'Expand Down'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#71717a] transition-transform duration-150 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-black/[0.06] bg-[#fafafa] space-y-3">
                        <p className="text-xs text-[#3f3f46] leading-relaxed">
                          <strong>Friction Solved:</strong> {dept.problem}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#3f3f46]">
                          <div className="p-3 rounded-xl bg-white border border-black/[0.06] space-y-1">
                            <span className="text-[10px] font-mono text-[#71717a] uppercase font-bold block">
                              Ingestion Protocol
                            </span>
                            <span>{dept.ingestion}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-black/[0.06] space-y-1">
                            <span className="text-[10px] font-mono text-[#71717a] uppercase font-bold block">
                              Automated Action
                            </span>
                            <span>{dept.action}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#09090b] text-white space-y-1">
                            <span className="text-[10px] font-mono text-[#a1a1aa] uppercase font-bold block">
                              Human Sign-Off Gate
                            </span>
                            <span className="text-[#d4d4d8]">{dept.gate}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#71717a]">
              Ready to review this tailored architecture with founders <strong>Manthan Kachhadiya</strong> &amp; <strong>Vraj Savani</strong>?
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
        </div>
      </div>
  );

  if (isStandalonePage) {
    return content;
  }

  return (
    <section id="setup" className="py-24 bg-white border-t border-black/[0.08] relative content-visibility-auto">
      {content}
    </section>
  );
}
