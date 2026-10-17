'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DirectionalNavButtons from './DirectionalNavButtons'

const solutionsData = [
  {
    id: 'endocrine',
    title: 'Endocrine Hormone',
    description: 'Comprehensive hormone analysis for thyroid, reproductive, and metabolic disorders with advanced chemiluminescent detection technology.',
    bodyPart: 'thyroid',
    color: 'from-[#1646AF] to-[#133C99]'
  },
  {
    id: 'women-children',
    title: 'Women & Children',
    description: 'Specialized diagnostic solutions for maternal health, pediatric care, and reproductive wellness with precision testing capabilities.',
    bodyPart: 'reproductive',
    color: 'from-[#133C99] to-[#0E2A6C]'
  },
  {
    id: 'infection',
    title: 'Infection',
    description: 'Rapid pathogen detection and antimicrobial resistance testing for bacterial, viral, and fungal infections with real-time monitoring.',
    bodyPart: 'lungs',
    color: 'from-[#1646AF] to-[#0E2A6C]'
  },
  {
    id: 'tumor-markers',
    title: 'Tumor Markers',
    description: 'Early cancer detection and monitoring through comprehensive biomarker analysis with high sensitivity and specificity.',
    bodyPart: 'organs',
    color: 'from-[#133C99] to-[#1646AF]'
  },
  {
    id: 'cardiovascular',
    title: 'Cardiovascular',
    description: 'Comprehensive cardiovascular diagnostics including troponin, BNP, and lipid analysis for heart disease management.',
    bodyPart: 'heart',
    color: 'from-[#0E2A6C] to-[#1646AF]'
  },
  {
    id: 'chronic',
    title: 'Chronic',
    description: 'Long-term disease monitoring and management with specialized biomarker panels for chronic conditions.',
    bodyPart: 'immune',
    color: 'from-[#1646AF] to-[#0E2A6C]'
  },
  {
    id: 'autoimmune',
    title: 'Autoimmune Diseases',
    description: 'Advanced autoimmune disorder diagnosis with comprehensive antibody and inflammatory marker analysis.',
    bodyPart: 'immune',
    color: 'from-[#133C99] to-[#1646AF]'
  },
  {
    id: 'more-info',
    title: 'More Info',
    description: 'Discover additional diagnostic solutions and comprehensive testing capabilities for specialized medical applications.',
    bodyPart: 'organs',
    color: 'from-[#1646AF] to-[#133C99]'
  }
]

const BodyVisualization = ({ bodyPart, isActive }: { bodyPart: string; isActive: boolean }) => {
  const getVisualization = () => {
    switch (bodyPart) {
      case 'thyroid':
        return (
          <div className="relative w-64 h-80">
            {/* Human silhouette */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-32 h-40 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
              <div className="w-20 h-32 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full mt-2" />
            </div>
            {/* Thyroid glow */}
            <motion.div
              animate={{ 
                opacity: isActive ? [0.6, 1, 0.6] : 0.3,
                scale: isActive ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            />
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-cyan-300 rounded-full opacity-80" />
          </div>
        )
      
      case 'heart':
        return (
          <div className="relative w-64 h-80">
            <div className="absolute inset-0 opacity-20">
              <div className="w-32 h-40 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
              <div className="w-20 h-32 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full mt-2" />
            </div>
            <motion.div
              animate={{ 
                opacity: isActive ? [0.6, 1, 0.6] : 0.3,
                scale: isActive ? [1, 1.15, 1] : 1
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-sm"
            />
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-7 bg-red-300 rounded-full opacity-80" />
          </div>
        )
      
      case 'lungs':
        return (
          <div className="relative w-64 h-80">
            <div className="absolute inset-0 opacity-20">
              <div className="w-32 h-40 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
              <div className="w-20 h-32 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full mt-2" />
            </div>
            <motion.div
              animate={{ 
                opacity: isActive ? [0.6, 1, 0.6] : 0.3,
                scale: isActive ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-18 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-12 bg-gradient-to-b from-[#1646AF] to-[#133C99] rounded-full blur-sm -mr-2" />
              <div className="w-6 h-12 bg-gradient-to-b from-[#1646AF] to-[#133C99] rounded-full blur-sm ml-4 -mt-12" />
            </motion.div>
          </div>
        )
      
      default:
        return (
          <div className="relative w-64 h-80">
            <div className="absolute inset-0 opacity-30">
              <div className="w-32 h-40 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-full" />
              <div className="w-20 h-32 mx-auto bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full mt-2" />
            </div>
            <motion.div
              animate={{ opacity: isActive ? [0.4, 0.8, 0.4] : 0.2 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-[#1646AF]/25 to-[#133C99]/25 rounded-full blur-lg"
            />
          </div>
        )
    }
  }

  return (
    <div className="flex items-center justify-center h-full">
      {getVisualization()}
    </div>
  )
}

const AutobioSolutionsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutionsData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const activeSolution = solutionsData[currentSlide]

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + solutionsData.length) % solutionsData.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % solutionsData.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Immersive Deep Navy Background */}
      <div className="absolute inset-0">
        {/* Deep Navy Blue Royal Business Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800" />
        
        {/* Subtle Medical Background Image (blurred) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 blur-sm"
          style={{
            backgroundImage: `url('/images/background.jpg')`
          }}
        />
        
        {/* Premium overlay for depth and elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-blue-900/20" />
        
        {/* Subtle anatomical pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='medGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.05'/%3E%3Cstop offset='100%25' stop-color='%23ffffff' stop-opacity='0.02'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='url(%23medGrad)' stroke-width='1'/%3E%3Ccircle cx='100' cy='100' r='30' fill='none' stroke='url(%23medGrad)' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '400px 400px'
            }}
          />
        </div>
      </div>

      {/* Main content - Upper Two-Thirds */}
      <div className="relative z-10 h-screen">
        {/* Content Container - Centered in upper 2/3 */}
        <div className="absolute inset-0 top-0 bottom-1/3 flex items-center justify-center">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  {/* Solution category title with Royal Business elegance */}
                  <motion.h1
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                    style={{ 
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: '700',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {activeSolution.title}
                  </motion.h1>

                  {/* Description with elegant typography */}
                  <motion.p
                    className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeSolution.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Right Content - Medical Visualization */}
              <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSolution.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Enhanced medical visualization with glow effect */}
                    <div className="relative">
                      <BodyVisualization bodyPart={activeSolution.bodyPart} isActive={true} />
                      {/* Premium glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1646AF]/25 to-[#133C99]/25 blur-3xl scale-150 opacity-60" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-Anchored Royal Business Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* AUREX Corporate Navigation Container */}
        <div className="bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-slate-900/80 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-8 py-6">
            
            {/* Horizontal Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
              {solutionsData.map((solution, index) => (
                <motion.button
                  key={solution.id}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border whitespace-nowrap
                    ${currentSlide === index 
                      ? 'bg-[#1646AF] text-white border-white/30 shadow-lg shadow-[#1646AF]/40 font-semibold' 
                      : 'bg-slate-800/60 text-gray-200 border-slate-600/50 hover:bg-[#1646AF]/25 hover:text-white hover:border-[#1646AF]/50 hover:shadow-md'
                    }
                  `}
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {solution.title}
                </motion.button>
              ))}
            </div>
            
            {/* Elegant Selection Indicator */}
            <div className="flex justify-center">
              <motion.div 
                className="flex items-center space-x-3 bg-slate-800/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-[#1646AF] rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-white/80" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {activeSolution.title} • {solutionsData.findIndex(s => s.id === activeSolution.id) + 1} of {solutionsData.length}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
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

export default AutobioSolutionsSection