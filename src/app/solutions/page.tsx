'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Activity, 
  Heart, 
  ShieldAlert, 
  Dna, 
  Building2, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const solutionsList = [
  {
    id: 'endocrine',
    title: 'Endocrine Hormone Solutions',
    icon: Activity,
    description: 'Comprehensive automated hormone profiling for thyroid, reproductive, and metabolic diagnostics utilizing high-sensitivity chemiluminescent technology.',
    highlights: ['Thyroid function panels', 'Fertility & reproductive health', 'Metabolic disorder tracking']
  },
  {
    id: 'women-children',
    title: 'Women & Children Health',
    icon: Heart,
    description: 'Specialized clinical testing solutions tailored for maternal health, prenatal screening, pediatric monitoring, and reproductive wellness.',
    highlights: ['Prenatal biomarker screening', 'Pediatric micro-sample testing', 'Maternal health surveillance']
  },
  {
    id: 'infectious-diseases',
    title: 'Infectious Disease Testing',
    icon: ShieldAlert,
    description: 'Rapid, high-throughput pathogen detection and antimicrobial resistance monitoring designed for critical care and epidemiological safety.',
    highlights: ['Multiplex viral detection', 'Bacterial resistance profiling', 'Rapid acute infection markers']
  },
  {
    id: 'oncology',
    title: 'Tumor Markers & Oncology',
    icon: Dna,
    description: 'Precision oncology biomarker analysis delivering ultra-sensitive screening, therapeutic monitoring, and disease recurrence tracking.',
    highlights: ['Solid tumor biomarkers', 'Hematologic malignancy panels', 'Post-treatment recurrence monitoring']
  },
  {
    id: 'cardiovascular',
    title: 'Cardiovascular Care',
    icon: Sparkles,
    description: 'Immediate point-of-care and laboratory cardiac assessment tools including high-sensitivity troponin, BNP, and vascular risk profiles.',
    highlights: ['High-sensitivity troponin', 'Heart failure monitoring', 'Acute coronary syndrome panels']
  },
  {
    id: 'turnkey-labs',
    title: 'Turnkey Laboratory Engineering',
    icon: Building2,
    description: 'End-to-end turnkey facility planning, regulatory compliance support (ISO/NABL), instrument commissioning, and workflow optimization.',
    highlights: ['Architectural laboratory design', 'Regulatory certification assurance', 'Complete instrumentation setup']
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF] text-white py-16 sm:py-20 md:py-24 pt-28 sm:pt-32">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Clinical & Laboratory Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Solutions for Modern Healthcare
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
              AUREX delivers fully integrated diagnostic ecosystems that combine clinical precision, automated workflow intelligence, and dependable patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-4">
              Comprehensive Diagnostic Portfolios
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Explore our specialized testing platforms and turnkey laboratory automations developed to empower modern hospital and research environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsList.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-[#BFBFBF]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F6F8FB] border border-[#BFBFBF]/40 flex items-center justify-center text-[#1646AF] mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-2 text-xs sm:text-sm text-[#111827]">
                          <CheckCircle2 size={16} className="text-[#1646AF] shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/products?solution=${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1646AF] hover:text-[#133C99] transition-colors group"
                  >
                    <span>View Related Systems</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-[#133C99] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Need a Custom Solution for Your Institution?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Our application specialists and biomedical engineers will assist you in sizing, configuring, and commissioning the ideal diagnostic setup for your facility.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] font-semibold rounded-lg shadow-sm transition-all text-sm"
              >
                Contact Application Specialist
              </Link>
              <Link
                href="/products"
                className="px-6 py-3.5 bg-[#1646AF] hover:bg-[#133C99] text-white border border-white/20 font-semibold rounded-lg shadow-sm transition-all text-sm"
              >
                Browse All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
