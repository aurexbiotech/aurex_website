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
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Image with Blur */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md scale-110 transition-all duration-700"
          style={{
            backgroundImage: `url("${currentProduct.background}")`
          }}
        />
        {/* Colored overlay matching product theme */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentProduct.color} opacity-30`} />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-screen flex items-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center"
          >
            {/* Left Column - Content */}
            <div className="w-1/2 px-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-lg mx-auto"
              >
                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 tracking-wider text-left"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '800' }}
                >
                  Products
                </motion.h1>

                {/* Current Product Category */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="mb-6">
                    <h2 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide text-left mb-4"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '700' }}
                    >
                      {currentProduct.name}
                    </h2>
                  </div>
                  <p className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-2xl text-left">
                    {currentProduct.description}
                  </p>
                </motion.div>

                {/* Clinical Diagnostics Subdivision Navigation */}
                {showSubdivisions && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-8"
                  >
                    <div className="bg-[#133C99]/90 border border-white/20 backdrop-blur-md rounded-lg p-4">
                      <div className="flex items-center justify-around gap-4">
                        {clinicalDiagnosticsModels.map((model) => (
                          <button
                            key={model.id}
                            onClick={() => setSelectedModel(model.id)}
                            className={`flex flex-col items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                              selectedModel === model.id
                                ? 'bg-white/25 shadow-lg ring-1 ring-white/50'
                                : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="text-center">
                              <div 
                                className="font-aboreto font-semibold mb-1 text-white"
                                style={{ fontFamily: 'var(--font-aboreto), cursive', fontSize: '14px' }}
                              >
                                {model.name}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Device Image */}
            <div className="w-1/2 flex flex-col justify-center items-center px-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex flex-col items-center"
              >
                {/* Analyzer Device Image */}
                <div className="relative mb-8">
                  <Image 
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    width={currentProduct.id === 'clinical-diagnostics' || currentProduct.id === 'advanced-andrology' ? 500 : 700}
                    height={520}
                    className={`${currentProduct.id === 'clinical-diagnostics' || currentProduct.id === 'advanced-andrology' ? 'w-[500px]' : 'w-[700px]'} h-auto ${currentProduct.id === 'sample-tracking' ? 'blur-[2px]' : ''}`}
                    priority
                  />
                </div>

                {/* Bottom Buttons */}
                <div className="flex space-x-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-[#1646AF] hover:bg-[#133C99] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#1646AF]/40 border border-white/20"
                  >
                    Learn More
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white rounded-full font-semibold border border-white/30 backdrop-blur-sm transition-colors shadow-lg flex items-center space-x-2"
                  >
                    <span>+</span>
                    <span>Watch More</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Directional Navigation Buttons - Bottom Center */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50">
        <DirectionalNavButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </section>
  )
}

export default RoyalProductsSection