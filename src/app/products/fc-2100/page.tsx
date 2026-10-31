'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Layers, 
  MessageSquare,
  FileText,
  Sliders,
  Cpu,
  HeartPulse
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function FC2100ProductPage() {
  const testMenuCategories = [
    {
      category: 'Cardiac Markers',
      tests: ['Cardiac Troponin I (cTnI)', 'CK-MB', 'Myoglobin (Myo)', 'NT-proBNP', 'D-Dimer']
    },
    {
      category: 'Thyroid Function',
      tests: ['TSH', 'Total T3 (TT3)', 'Total T4 (TT4)', 'Free T3 (FT3)', 'Free T4 (FT4)', 'Anti-TPO']
    },
    {
      category: 'Fertility & Hormones',
      tests: ['β-hCG', 'LH', 'FSH', 'Prolactin (PRL)', 'Progesterone (Prog)', 'Testosterone', 'Estradiol (E2)', 'AMH']
    },
    {
      category: 'Inflammation & Sepsis',
      tests: ['Procalcitonin (PCT)', 'Interleukin-6 (IL-6)', 'hs-CRP + CRP', 'Serum Amyloid A (SAA)']
    },
    {
      category: 'Tumor Markers',
      tests: ['AFP', 'CEA', 'Total PSA', 'Free PSA', 'CA 125', 'CA 19-9', 'CA 15-3']
    },
    {
      category: 'Bone & Metabolism',
      tests: ['25-OH Vitamin D', 'Intact PTH', 'Ferritin', 'Folate', 'Vitamin B12']
    }
  ]

  const technicalSpecifications = [
    { label: 'Methodology', value: 'Enzymatic Chemiluminescence Immunoassay (CLIA), ALP-AMPPD system' },
    { label: 'Separation Technology', value: 'Paramagnetic micron-sized microbeads with multistage magnetic capture' },
    { label: 'Analytical Throughput', value: 'Up to 100 tests per hour' },
    { label: 'Time to First Result', value: 'Approximately 10 to 15 minutes (assay-dependent)' },
    { label: 'Sample Capacity', value: 'Multi-position continuous loading carousel with STAT emergency priority' },
    { label: 'Sample Types', value: 'Serum, Plasma, Whole Blood (assay-dependent)' },
    { label: 'Sample Pipetting Volume', value: '10 µL – 100 µL with liquid level and clot detection' },
    { label: 'Reagent Positions', value: 'Dedicated refrigerated carousel with continuous 2°C – 8°C temperature control' },
    { label: 'Reagent Management', value: 'Integrated RFID contactless identification with automatic tracking' },
    { label: 'Incubation Temperature', value: 'Precision thermal chamber at 37.0°C ± 0.3°C' },
    { label: 'Optical Detection', value: 'High-sensitivity low-noise Photomultiplier Tube (PMT)' },
    { label: 'Sample Carryover', value: '< 10⁻⁵ (negligible carryover with coated probe & intensive wash)' },
    { label: 'User Interface', value: 'Built-in industrial high-definition touchscreen with intuitive GUI' },
    { label: 'Data Connectivity', value: 'Bidirectional LIS / HIS integration via RS-232, TCP/IP Ethernet & USB' },
    { label: 'Dimensions & Footprint', value: 'Compact benchtop configuration engineered for space optimization' },
    { label: 'Power Requirements', value: '100–240 V AC, 50/60 Hz, energy-efficient operational mode' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sub Header Navigation with Accessible Home Icon (Task 2) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-[58px] sm:top-[68px] z-40 shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
            <Link 
              href="/biotra" 
              aria-label="Home"
              title="Home"
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-lg text-[#1646AF] hover:text-[#133C99] hover:bg-[#F6F8FB] transition-all duration-200 cursor-pointer"
            >
              <Home size={19} className="stroke-[2.2]" />
            </Link>
            <span className="text-gray-300">/</span>
            <Link 
              href="/products" 
              className="font-medium text-[#64748B] hover:text-[#1646AF] transition-colors"
            >
              Products
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#133C99]">
              SmarLumi™ FC-2100
            </span>
          </div>
          
          <div className="text-xs font-semibold text-[#64748B] hidden sm:block">
            Clinical Immunoassay • Chemiluminescence CLIA
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF] text-white py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Product Information */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Sparkles size={14} />
                <span>Advanced Automated CLIA Platform</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                SmarLumi™ FC-2100
              </h1>
              
              <p className="text-lg sm:text-2xl text-cyan-200 font-semibold leading-snug">
                Fully Automated Chemiluminescence Immunoassay Analyzer
              </p>
              
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Engineered for clinical laboratories and diagnostic healthcare centers, the SmarLumi™ FC-2100 combines high-affinity magnetic microbead separation with enzymatic chemiluminescence (ALP-AMPPD) to deliver ultra-sensitive, reliable diagnostic results in a space-saving benchtop architecture.
              </p>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap gap-2.5 pt-1 justify-center lg:justify-start text-xs font-semibold text-white">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                  Up to 100 Tests/Hour
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                  10–15 Min Rapid Result
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                  Paramagnetic Microbead CLIA
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                  2°C–8°C Onboard Refrigeration
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                  STAT Emergency Priority
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact?subject=Quotation%20Request%20for%20SmarLumi%20FC-2100"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] hover:text-[#1646AF] font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <MessageSquare size={17} />
                  <span>Request Quotation</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 transition-all duration-300 text-center"
                >
                  <FileText size={17} />
                  <span>Consult Technical Team</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Instrument Display */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xs">
                <Image
                  src="/images/smarlumi-fc-2100.png"
                  alt="SmarLumi™ FC-2100 Fully Automated Chemiluminescence Immunoassay Analyzer"
                  width={900}
                  height={756}
                  className="w-full h-auto object-contain max-h-[320px] sm:max-h-[420px] drop-shadow-2xl select-none"
                  priority
                  quality={90}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Engineered for High-Accuracy Clinical Chemistry
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
              Designed with precision mechanics, intelligent sample detection, and advanced enzymatic chemiluminescence for comprehensive clinical reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Enzymatic Chemiluminescence (ALP-AMPPD)
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Utilizes alkaline phosphatase (ALP) catalysis with AMPPD substrate, providing sustained glow luminescence, ultra-high sensitivity, and an expansive linear dynamic range across all diagnostic assays.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Paramagnetic Microbead Separation
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Superparamagnetic nanoparticles maximize surface area binding and reaction velocity. Rapid magnetic field isolation facilitates thorough wash cycles, eliminating non-specific binding and optical noise.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Fast Turnaround & STAT Priority
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Processes up to 100 tests per hour with emergency STAT sample insertion. Delivers first diagnostic results in just 10 to 15 minutes, accelerating clinical decision-making for acute patient care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Smart Pipetting & Clot Protection
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Precision Teflon-coated sampling needle incorporates real-time liquid level sensing, clot detection, and multi-axis anti-collision safeguarding, preventing probe damage and analytical contamination.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <Sliders size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Refrigerated Reagent & RFID Tracking
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Onboard cooling system maintains reagent carousels at a constant 2°C – 8°C. Built-in RFID reader instantaneously imports calibration curves, lot numbers, test expiration, and remaining test quantities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-5">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">
                Intuitive GUI & Bidirectional LIS
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Full-color high-definition touchscreen interface simplifies test initiation, maintenance routines, and calibration tracking. Seamless bidirectional LIS/HIS connectivity automates laboratory workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Test Menu */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1646AF]/10 text-[#1646AF] text-xs font-bold tracking-wider uppercase mb-3">
              <HeartPulse size={14} />
              <span>Extensive Diagnostic Repertoire</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              SmarLumi™ FC-2100 Test Menu
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
              Supporting clinical decisions across multiple pathological disciplines with high precision and clinical sensitivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testMenuCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="rounded-2xl p-6 bg-gradient-to-b from-[#F6F8FB] to-white border border-gray-200 shadow-xs"
              >
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1646AF]" />
                  <h3 className="text-base font-bold text-[#111827]">
                    {cat.category}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#64748B]">
                  {cat.tests.map((test, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-700">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB] border-t border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Technical Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Verified instrument specifications engineered for high-performance laboratory operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
            <div className="divide-y divide-gray-100">
              {technicalSpecifications.map((spec, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-4.5 gap-2 sm:gap-4 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                  }`}
                >
                  <div className="sm:col-span-4 text-xs sm:text-sm font-bold text-[#111827] flex items-center">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-8 text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Deploy SmarLumi™ FC-2100 in Your Diagnostic Laboratory
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto mb-8">
            Contact our biomedical instrumentation specialists for product demonstrations, reagent packaging details, and institutional quotation requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href="/contact?subject=FC-2100%20Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] hover:text-[#1646AF] font-bold text-sm sm:text-base rounded-xl shadow-md transition-all duration-300"
            >
              <MessageSquare size={17} />
              <span>Contact Specialists</span>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 transition-all duration-300"
            >
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
