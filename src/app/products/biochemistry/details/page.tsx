'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Beaker, TestTube, Activity, Zap } from 'lucide-react'
import Footer from '@/components/Footer'

const BiochemistryDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/products/biochemistry" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Biochemistry
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#133C99] to-[#1646AF] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              Precision Chemistry Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Advanced Biochemistry Automation for Modern Laboratories
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cutting-Edge Biochemistry Automation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AUREX delivers cutting-edge fully automated Biochemistry solutions designed for faster turnaround, superior analytical accuracy, and complete workflow automation. Our systems are engineered to meet the demanding needs of modern clinical laboratories.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From routine profiles to advanced assays — our systems ensure maximum reliability, and seamless scalability for every laboratory need.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {[
                {
                  icon: Beaker,
                  title: 'Comprehensive Test Menu',
                  description: 'Wide range of biochemistry parameters including routine chemistry, special chemistry, and electrolytes'
                },
                {
                  icon: Activity,
                  title: 'High Throughput',
                  description: 'Process up to 800+ tests per hour with continuous loading capability and minimal downtime'
                },
                {
                  icon: TestTube,
                  title: 'Sample Efficiency',
                  description: 'Minimal sample volume requirements with automatic dilution and re-run capabilities'
                },
                {
                  icon: Zap,
                  title: 'STAT Priority',
                  description: 'Emergency sample processing with results in under 10 minutes for critical parameters'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F6F8FB] border border-[#BFBFBF]/40 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <feature.icon className="text-[#1646AF] mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Automated sample handling and processing',
                  'Real-time quality control monitoring',
                  'Integrated LIS connectivity',
                  'Reduced turnaround time',
                  'Lower cost per test',
                  'Minimal maintenance requirements',
                  'User-friendly interface',
                  'Comprehensive data management',
                  'ISO 15189 compliant'
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <CheckCircle className="text-[#1646AF] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#F6F8FB] border border-[#BFBFBF]/40 p-8 rounded-xl mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Throughput: Up to 800 tests/hour</li>
                    <li>• Sample Volume: 2-35 µL</li>
                    <li>• Reagent Volume: 25-300 µL</li>
                    <li>• Reaction Time: 10 minutes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Capacity</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sample Positions: 90 (Primary) + 45 (Secondary)</li>
                    <li>• Reagent Positions: 90 positions</li>
                    <li>• ISE Module: Integrated</li>
                    <li>• Cuvettes: 120 reusable</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white p-12 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Laboratory?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today to learn more about our Biochemistry solutions
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <button className="px-8 py-3 bg-white text-[#1646AF] rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                  Request Demo
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default BiochemistryDetailsPage
