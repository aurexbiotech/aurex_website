'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import DirectionalNavButtons from './DirectionalNavButtons'
import { 
  Microscope, 
  Activity, 
  Users, 
  Droplet, 
  Leaf, 
  HeartPulse,
  BarChart3,
  FlaskRound
} from 'lucide-react'

// Clinical Diagnostics subdivisions
const clinicalDiagnosticsModels = [
  { id: 'biochemistry', name: 'Biochemistry', fullName: 'Biochemistry Solutions' },
  { id: 'haematology', name: 'Haematology', fullName: 'Haematology Systems' },
  { id: 'electrolyte', name: 'Electrolyte', fullName: 'Electrolyte Analysis' }
]

const productSlides = [
  {
    id: 'clinical-diagnostics',
    name: 'Clinical Diagnostics Automations',
    icon: Activity,
    description: 'Fully automated clinical diagnostic systems delivering rapid, accurate results with minimal human intervention for enhanced laboratory efficiency',
    image: '/images/bc120-plus.png',
    background: '/images/diagnostic_lab.png',
    color: 'from-[#1646AF] to-[#133C99]',
    hasSubdivisions: true
  },
  {
    id: 'medical-imaging',
    name: 'Medical Imaging Sciences',
    icon: Microscope,
    description: 'Advanced imaging technologies integrating AI-powered analysis for precise visualization and interpretation of medical specimens',
    image: '/images/medical-imaging.webp',
    background: '/images/background.jpg',
    color: 'from-[#133C99] to-[#0E2A6C]'
  },
  {
    id: 'advanced-andrology',
    name: 'Advanced Andrology',
    icon: Users,
    description: 'Specialized systems for comprehensive male reproductive health analysis including sperm quality assessment and fertility diagnostics',
    image: '/images/advanced-andrology.png',
    background: '/images/corporate-background.jpg',
    color: 'from-[#1646AF] to-[#0E2A6C]'
  },
  {
    id: 'transfusion-medicine',
    name: 'Transfusion Medicine',
    icon: Droplet,
    description: 'State-of-the-art blood typing, crossmatching, and antibody screening systems ensuring safe and compatible transfusions',
    image: '/images/transfusion-medicine-hero.jpg',
    background: '/images/hero-background.jpg',
    color: 'from-[#133C99] to-[#1646AF]'
  },
  {
    id: 'stemcell-research',
    name: 'Stemcell Research and Medicine',
    icon: Leaf,
    description: 'Cutting-edge platforms for stem cell isolation, characterization, and therapeutic applications in regenerative medicine',
    image: '/images/stemcell-research.avif',
    background: '/images/analyzer-device.jpg',
    color: 'from-[#0E2A6C] to-[#1646AF]'
  },
  {
    id: 'critical-care',
    name: 'Critical Care Solutions',
    icon: HeartPulse,
    description: 'Rapid point-of-care testing systems providing critical diagnostic information for immediate clinical decision-making',
    image: '/images/critical-care.jpg',
    background: '/images/bc410-features.png',
    color: 'from-[#1646AF] to-[#0E2A6C]'
  },
  {
    id: 'sample-tracking',
    name: 'Sample Tracking Automation',
    icon: BarChart3,
    description: 'Intelligent barcode and RFID-based sample management systems ensuring complete traceability and chain of custody',
    image: '/images/sample-tracking.jpg',
    background: '/images/3915891.jpg',
    color: 'from-[#133C99] to-[#1646AF]'
  },
  {
    id: 'analytical-laboratory',
    name: 'Analytical Laboratory Automations',
    icon: FlaskRound,
    description: 'Comprehensive laboratory automation solutions integrating robotics, AI, and advanced analytics for maximum throughput and accuracy',
    image: '/images/analytical-laboratory.png',
    background: '/images/graphic-illustration-light-blue-wallpaper-template-website-cover-background-design_545033-2371.jpg',
    color: 'from-[#1646AF] to-[#133C99]'
  }
]

const RoyalProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedModel, setSelectedModel] = useState('biochemistry')

  const currentProduct = productSlides[currentSlide]
  const showSubdivisions = currentProduct.hasSubdivisions

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F1F5F9]">
      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex items-center px-8 sm:px-16 pt-16 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/50 text-[#1646AF] text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
                  Diagnostic Systems
                </div>

                {/* Main Section Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight mb-3">
                  Products
                </h1>

                {/* Current Product Category */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1646AF] tracking-tight mb-3">
                  {currentProduct.name}
                </h2>

                <p className="text-base lg:text-lg text-[#64748B] leading-relaxed mb-6">
                  {currentProduct.description}
                </p>

                {/* Clinical Diagnostics Subdivision Navigation */}
                {showSubdivisions && (
                  <div className="bg-white border border-[#BFBFBF]/40 rounded-xl p-1.5 shadow-xs mb-6 inline-flex flex-wrap gap-1">
                    {clinicalDiagnosticsModels.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => setSelectedModel(model.id)}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                          selectedModel === model.id
                            ? 'bg-[#1646AF] text-white shadow-xs'
                            : 'text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9]'
                        }`}
                      >
                        {model.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* Bottom CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#1646AF] hover:bg-[#133C99] text-white rounded-lg font-medium shadow-sm transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white hover:bg-[#F1F5F9] text-[#1646AF] border border-[#BFBFBF]/60 rounded-lg font-medium transition-all duration-200 shadow-xs"
                  >
                    + Watch More
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Device Image */}
            <div className="flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative flex items-center justify-center w-full max-w-lg"
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image 
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    width={560}
                    height={420}
                    className="max-h-[360px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Directional Navigation Buttons - Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  )
}

export default RoyalProductsSection