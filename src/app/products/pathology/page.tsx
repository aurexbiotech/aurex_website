'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Home, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  FileText 
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function PathologyPage() {
  const pathologyWorkflows = [
    {
      title: 'Automated Enclosed Tissue Processors',
      desc: 'Microprocessor-controlled vacuum infiltration systems with active reagent management, specimen protection protocols, and ultra-low paraffin consumption for flawless biopsy embedding.'
    },
    {
      title: 'High-Precision Rotary Microtomes',
      desc: 'Ergonomic semi-automated and fully automated microtomy systems featuring motorized specimen feed, anti-roll devices, and adjustable trimming thicknesses from 0.5 µm to 100 µm.'
    },
    {
      title: 'High-Throughput H&E Slide Stainers',
      desc: 'Continuous-load linear and robotic histology stainers featuring customizable staining protocols, active carbon filtration, and integrated coverslipping workstation handoff.'
    },
    {
      title: 'Digital Whole Slide Imaging (WSI)',
      desc: 'High-speed 20x/40x digital slide scanners delivering sub-micron optical resolution, automated barcode tracking, and DICOM-compliant pathology PACS interoperability.'
    },
    {
      title: 'Immunohistochemistry & ISH Staining',
      desc: 'Automated multiplex IHC/ISH platforms providing standardized incubation, high epitope retrieval consistency, and validated primary antibody panels for clinical oncology.'
    },
    {
      title: 'Liquid-Based Cytology (LBC) Systems',
      desc: 'Automated cell dispersion, filtration, and thin-layer slide transfer systems ensuring uniform cellular monolayers for cervical, thyroid, and body fluid cytopathology.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sub Header Navigation */}
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
              Pathology
            </span>
          </div>
          <div className="text-xs font-semibold text-[#64748B] hidden sm:block">
            Clinical Solutions • Histopathology & Cytology Automation
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF] text-white py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Sparkles size={14} />
                <span>Histopathology & Cytology Automation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Pathology Diagnostic Solutions
              </h1>
              <p className="text-lg sm:text-2xl text-cyan-200 font-semibold">
                High-Throughput Tissue Processing, Staining & Digital Pathology
              </p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                AUREX empowers pathology laboratories with automated tissue processors, automated coverslippers, intelligent slide scanners, and precision microtomy solutions that enhance diagnostic confidence from biopsy to report.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <Link
                  href="/contact?subject=Pathology%20Diagnostic%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] hover:text-[#1646AF] font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <MessageSquare size={17} />
                  <span>Request Product Consultation</span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 transition-all duration-300 text-center"
                >
                  <FileText size={17} />
                  <span>Explore Catalog</span>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xs">
                <Image
                  src="/images/pathology.jpg"
                  alt="Pathology and Histology Automation Systems"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover max-h-[300px] sm:max-h-[380px] drop-shadow-2xl rounded-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Workflows */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Comprehensive Pathology Automation
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Integrated instruments designed for clinical precision, throughput, and laboratory safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pathologyWorkflows.map((flow, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{flow.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Modernize Your Anatomic Pathology Workflow</h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto mb-8">
            Speak with our histopathology workflow architects to design a high-throughput, turn-key histology suite.
          </p>
          <Link
            href="/contact?subject=Pathology%20Suite%20Setup"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] font-bold text-sm sm:text-base rounded-xl shadow-md transition-all duration-300"
          >
            <span>Consult Pathology Specialists</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
