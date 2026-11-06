'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Building2, 
  Database, 
  LineChart, 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  PhoneCall,
  FileCheck2,
  Workflow
} from 'lucide-react'

interface ITSolutionItem {
  id: string
  code: string
  badge: string
  name: string
  shortName: string
  tagline: string
  definition: string
  icon: React.ElementType
  accentColor: string
  bgLight: string
  borderAccent: string
  badgeBg: string
  badgeText: string
  metricLabel: string
  metricValue: string
  features: string[]
  architecture: string[]
}

const IT_SOLUTIONS: ITSolutionItem[] = [
  {
    id: 'hospital-management',
    code: '01',
    badge: 'Healthcare Enterprise ERP',
    name: 'Complete Hospital Management Solution',
    shortName: 'Hospital Management',
    tagline: 'Unified clinical intelligence, end-to-end OPD/IPD operations, and seamless patient lifecycle administration.',
    definition: 'An all-in-one Hospital Information Management System (HIMS) engineered to connect patient registration, Electronic Medical Records (EMR/EHR), clinical consultations, pharmacy inventory, inpatient bed management, OT scheduling, and automated billing into a cohesive, secure digital ecosystem.',
    icon: Building2,
    accentColor: '#1646AF',
    bgLight: 'from-blue-50/70 to-white',
    borderAccent: 'border-blue-200/80',
    badgeBg: 'bg-blue-100 text-[#133C99] border-blue-200',
    badgeText: 'text-[#133C99]',
    metricLabel: 'Clinical Workflow',
    metricValue: '100% Paperless',
    features: [
      'Complete OPD, IPD, Emergency & Day-Care Admission Workflows',
      'Longitudinal Electronic Medical Records (EMR / EHR) with Clinical Notes',
      'Integrated Pharmacy, Ward Dispensing & Centralized Inventory Control',
      'Automated Medical Billing, Cashless TPA & Insurance Claim Processing',
      'Operating Theater (OT) Scheduling & Real-Time Bed Allocation',
      'Role-Based Access Control (RBAC) & NABH / HIPAA Data Security Standards'
    ],
    architecture: [
      'Multi-department Integration',
      'Doctor & Nurse Clinical Portals',
      'Cashless TPA Interfacing',
      'NABH Audit Compliance'
    ]
  },
  {
    id: 'laboratory-management',
    code: '02',
    badge: 'Diagnostic Informatics & Interfacing',
    name: 'Laboratory Information System and Management Solution',
    shortName: 'Lab Information System (LIS)',
    tagline: 'Total diagnostic workflow automation, bidirectional instrument interfacing, and rapid turnaround reporting.',
    definition: 'A high-throughput diagnostic informatics platform engineered for modern pathology, biochemistry, and clinical laboratories. Delivering automated barcode sample accessioning, bidirectional instrument interfacing, multi-rule QC verification, and instant multi-channel digital report distribution.',
    icon: Database,
    accentColor: '#0284C7',
    bgLight: 'from-sky-50/70 to-white',
    borderAccent: 'border-sky-200/80',
    badgeBg: 'bg-sky-100 text-[#0369A1] border-sky-200',
    badgeText: 'text-[#0369A1]',
    metricLabel: 'Instrument Interfacing',
    metricValue: 'ASTM / HL7 Bidirectional',
    features: [
      'ASTM & HL7 Bidirectional Analyzer Interfacing (Automated Result Upload)',
      'Smart Barcode Sample Accessioning & Positive Patient Identification (PPID)',
      'Multi-rule Westgard Quality Control (QC) & Automated Delta Checking',
      'Instant Multi-Channel Report Dispatch via WhatsApp, SMS, Email & Web Portal',
      'Diagnostic Reagent Inventory & Automated Lot Expiry Tracking',
      'Multi-Center Sample Logistics & Phlebotomy Collection Management'
    ],
    architecture: [
      'Direct Machine Interfacing',
      'Barcode Specimen Accessioning',
      'Delta QC Verification',
      'Multi-Channel Digital Dispatch'
    ]
  },
  {
    id: 'business-analytics',
    code: '03',
    badge: 'Healthcare BI & Intelligence',
    name: 'Business Analytics Solution',
    shortName: 'Business Analytics',
    tagline: 'Real-time clinical visibility, turnaround time optimization, and predictive executive intelligence.',
    definition: 'An advanced healthcare business intelligence and analytics suite that transforms transactional hospital and diagnostic data into actionable operational insights, real-time KPI dashboards, turnaround time monitoring, and predictive procurement forecasting.',
    icon: LineChart,
    accentColor: '#4F46E5',
    bgLight: 'from-indigo-50/70 to-white',
    borderAccent: 'border-indigo-200/80',
    badgeBg: 'bg-indigo-100 text-[#4338CA] border-indigo-200',
    badgeText: 'text-[#4338CA]',
    metricLabel: 'Decision Intelligence',
    metricValue: 'Real-Time KPIs',
    features: [
      'Real-Time Executive & Departmental KPI Dashboards',
      'Diagnostic Turnaround Time (TAT) & Operational Bottleneck Analytics',
      'Financial Intelligence, Test Profitability & Departmental Revenue Metrics',
      'Predictive Reagent Demand Forecasting & Consumption Trend Analysis',
      'Doctor Referral Trends & Patient Demographic Heatmaps',
      'Accreditation & Compliance Audit-Ready Reports (NABL / ISO 15189)'
    ],
    architecture: [
      'Real-Time KPI Dashboards',
      'TAT Bottleneck Monitoring',
      'Predictive Reagent Forecasting',
      'NABL / ISO Compliance Reporting'
    ]
  },
  {
    id: 'customized-solution',
    code: '04',
    badge: 'Tailored Enterprise Engineering',
    name: 'Customized Healthcare & Diagnostic IT Solutions',
    shortName: 'Customized Solutions',
    tagline: 'Tailored clinical architectures, proprietary analyzer interfacing, and bespoke institutional workflow design.',
    definition: 'Flexible, full-stack customized healthcare software engineering designed to fit unique laboratory networks, specialized hospital workflows, proprietary analyzer driver protocols, third-party EHR/PACS/billing bridges, and dedicated multi-tier diagnostic portals.',
    icon: Sliders,
    accentColor: '#0D9488',
    bgLight: 'from-teal-50/70 to-white',
    borderAccent: 'border-teal-200/80',
    badgeBg: 'bg-teal-100 text-[#0F766E] border-teal-200',
    badgeText: 'text-[#0F766E]',
    metricLabel: 'System Architecture',
    metricValue: '100% Tailored to Client Specs',
    features: [
      'Bespoke Diagnostic & Clinical Workflow Customization',
      'Proprietary Instrument Drivers & Custom Middleware Development',
      'Third-Party Hospital EHR, PACS & Billing System API Bridges',
      'Tailored Patient Self-Service Portals & Branded Mobile Apps',
      'Hybrid Cloud or Secure Air-Gapped On-Premise Deployments',
      'Dedicated Custom Engineering Support with 24/7 Guaranteed SLA'
    ],
    architecture: [
      'Custom HL7 / FHIR Middleware',
      'Proprietary Device Interfacing',
      'Tailored REST & GraphQL APIs',
      'Dedicated Enterprise SLA'
    ]
  }
]

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative min-h-[58vh] sm:min-h-[64vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#133C99]/90 to-[#1646AF]/85 z-10" />
        <Image
          src="/images/background.jpg"
          alt="IT Solutions and Technology"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span>Healthcare Informatics & Enterprise Diagnostic Software</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-tight">
            AUREX IT Solutions
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light">
            Comprehensive digital healthcare architectures engineered for hospitals, reference diagnostic networks, and healthcare leaders. Transforming operational efficiency from patient admission to bidirectional instrument interfacing and real-time executive decision intelligence.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact?subject=IT%20Solutions%20Consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#133C99] hover:bg-blue-50 font-bold text-sm shadow-lg transition-all"
            >
              <span>Request Software Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919543910101"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all"
            >
              <PhoneCall className="w-4 h-4 text-blue-300" />
              <span>Call Us: +91 95439 10101</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Sub Navigation Component
const SubNavigation = ({ 
  activeFilter, 
  setActiveFilter 
}: { 
  activeFilter: string
  setActiveFilter: (id: string) => void 
}) => {
  const tabs = [
    { id: 'all', name: 'All Solutions' },
    { id: 'hospital-management', name: '1. Hospital Management' },
    { id: 'laboratory-management', name: '2. Lab Information System (LIS)' },
    { id: 'business-analytics', name: '3. Business Analytics' },
    { id: 'customized-solution', name: '4. Customized Solutions' }
  ]

  return (
    <section className="sticky top-[58px] sm:top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-2xs">
      <div className="container mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        <nav className="flex overflow-x-auto scrollbar-none justify-start sm:justify-center gap-2 whitespace-nowrap">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1646AF] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#1646AF] hover:bg-gray-100/80'
                }`}
              >
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>
    </section>
  )
}

export default function ITSolutionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredSolutions = activeFilter === 'all' 
    ? IT_SOLUTIONS 
    : IT_SOLUTIONS.filter(s => s.id === activeFilter)

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#111827]">
      <HeroBanner />
      <SubNavigation activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Main Solutions Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-md bg-blue-100 text-[#1646AF] text-xs font-bold tracking-widest uppercase mb-3 border border-blue-200/80">
              Enterprise Software Suite
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
              Specialized Healthcare IT Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Purpose-built architectures designed to eliminate manual bottlenecks, secure patient records, automate laboratory analyzer data flows, and furnish executive leaders with actionable intelligence.
            </p>
          </div>

          {/* Solution Cards Display */}
          <div className="space-y-12 lg:space-y-14">
            <AnimatePresence mode="popLayout">
              {filteredSolutions.map((solution, idx) => {
                const IconComponent = solution.icon

                return (
                  <motion.div
                    key={solution.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: solution.accentColor }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                      
                      {/* Left: Solution Overview & Identity */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm bg-gray-100 text-[#133C99] border border-gray-200">
                            {solution.code}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${solution.badgeBg}`}>
                            {solution.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug mb-2">
                            {solution.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-[#1646AF] leading-relaxed italic">
                            &ldquo;{solution.tagline}&rdquo;
                          </p>
                        </div>

                        {/* Definition Card */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F8FB] border border-gray-200/90 text-xs sm:text-sm text-[#475569] leading-relaxed">
                          <strong className="block text-[#111827] font-semibold mb-1.5">Solution Definition:</strong>
                          {solution.definition}
                        </div>

                        {/* Highlight Metric */}
                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 flex items-center justify-between">
                          <span className="text-xs text-[#64748B] font-medium">{solution.metricLabel}</span>
                          <span className="text-sm font-bold text-[#133C99]">{solution.metricValue}</span>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2">
                          <Link
                            href={`/contact?subject=${encodeURIComponent(solution.name + ' Inquiry')}`}
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1646AF] hover:bg-[#133C99] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
                          >
                            <span>Request Detailed Proposal & Demo</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Detailed Capabilities & Architecture */}
                      <div className="lg:col-span-7 bg-[#F6F8FB]/80 p-6 sm:p-8 rounded-2xl border border-gray-200/80 space-y-6">
                        
                        {/* Capabilities Header */}
                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                            style={{ backgroundColor: solution.accentColor }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-[#111827]">
                              Key Functional Capabilities & Modules
                            </h4>
                            <p className="text-xs text-[#64748B]">Enterprise features included out of the box</p>
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                          {solution.features.map((feature, fIdx) => (
                            <div 
                              key={fIdx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-[13px] text-[#334155] font-medium leading-snug">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Architecture Badges */}
                        <div className="pt-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">
                            Architecture Highlights
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {solution.architecture.map((arch, aIdx) => (
                              <span 
                                key={aIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-semibold text-[#1E293B]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1646AF]" />
                                <span>{arch}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Technical Integration & Assurance Grid */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                Enterprise Standards Across All AUREX IT Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Engineered for maximum reliability, bulletproof cybersecurity, and seamless compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1646AF] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827]">Compliance & Security</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  HIPAA-aligned data architecture, NABH and ISO 15189 compliance audit logging.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827]">Analyzer Interfacing</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Universal ASTM & HL7 bidirectional protocol support for all leading diagnostic analyzers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827]">99.9% High Availability</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Cloud or on-premise local server deployment with real-time automated data backups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827]">Instant Multi-Channel Dispatch</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Automated test report distribution to patients and clinicians via WhatsApp, SMS and PDF portal.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#133C99] to-[#1646AF] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="px-3 py-1 rounded-full bg-white/15 text-blue-200 text-xs font-semibold border border-white/20">
                Healthcare IT Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Modernize Your Hospital or Diagnostic Laboratory
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-light">
                Consult with our senior healthcare IT specialists for workflow evaluation, bidirectional instrument connectivity, or an interactive demonstration of our specialized solutions.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?subject=IT%20Solutions%20Live%20Demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#133C99] hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919543910101"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-blue-300" />
                  <span>Call +91 95439 10101</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
