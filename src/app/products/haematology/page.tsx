'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Zap, Layers, TestTube, Droplet, FlaskRound, Thermometer, Wind, Lightbulb } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'

const HaematologyPageContent = () => {
  const searchParams = useSearchParams()
  const [selectedModel, setSelectedModel] = useState('default')

  // Check for model parameter in URL and set selected model

  useEffect(() => {
    const modelParam = searchParams.get('model')
    if (modelParam) {
      setSelectedModel(modelParam)
    }
  }, [searchParams])

  // Product images
  const hemotxproImages = [
    '/images/hemotxpro-01.png',
    '/images/hemotxpro-02.png',
    '/images/hemotxpro-03.jpg',
    '/images/hemotxpro-04.jpg',
  ]

  const hemotxi5Images = [
    '/images/hemotxi5-01.png',
    '/images/hemotxi5-02.png',
    '/images/hemotxi5-03.png',
  ]

  const hemotxiImages = [
    '/images/hemotxi-new.png',
    '/images/hemotxi-new.png',
  ]

  // Banner content for each product
  const bannerContent = {
    'default': {
      title: 'Hemotx',
      subtitle: 'The State of Art Hematology Analyzer Product Line',
      description: 'Offers Wide Variants for Hematology Analysis Needs Advanced Precision in Hematology Diagnostics. We proudly introduce the Hemotx Hematology Analyzer Series — a comprehensive solution designed to empower modern clinical laboratories.',
      features: ['Advanced Precision', 'Multiple Variants', 'Superior Accuracy'],
      image: hemotxproImages[0]
    },
    'hemotxpro': {
      title: 'Hemotx',
      subtitle: 'The State of Art Hematology Analyzer Product Line',
      description: 'Offers Wide Variants for Hematology Analysis Needs Advanced Precision in Hematology Diagnostics. We proudly introduce the Hemotx Hematology Analyzer Series — a comprehensive solution designed to empower modern clinical laboratories.',
      features: ['Advanced Precision', 'Multiple Variants', 'Superior Accuracy'],
      image: hemotxproImages[0]
    },
    'hemotxi5': {
      title: 'Hemotx i5',
      subtitle: '5-Part Differential Analyzer',
      description: 'Cutting-edge 5-part differential haematology analyzer delivering precise WBC differentiation with advanced flagging technology for confident clinical decisions.',
      features: ['5-Part Differential', 'Advanced Flagging', 'High Precision'],
      image: hemotxi5Images[0]
    },
    'hemotxi': {
      title: 'Hemotx i',
      subtitle: 'Intelligent Haematology System',
      description: 'Intelligent haematology analyzer with automated sampling, low reagent consumption, and exceptional performance for routine and critical care testing.',
      features: ['Auto Sampling', 'Low Reagent Use', 'Fast Results'],
      image: hemotxiImages[0]
    }
  }

  const currentBanner = bannerContent[selectedModel as keyof typeof bannerContent] || bannerContent['default']

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Changes for each product */}
      <section className="relative text-slate-900 py-20 bg-gradient-to-br from-[#F6F8FB] via-white to-[#F6F8FB] border-b border-[#BFBFBF]/40">
        {/* Back Arrow Button */}
        <Link href="/products" className="absolute top-6 left-6 z-50 text-slate-600 hover:text-[#1646AF] transition-colors">
          <ArrowLeft size={32} />
        </Link>
        
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Product Info */}
              <div>
                <h1 className="text-6xl font-bold mb-4 text-[#0B1528]">{currentBanner.title}</h1>
                <p className="text-2xl text-[#1646AF] mb-6 font-bold">{currentBanner.subtitle}</p>
                <p className="text-xl text-slate-600 mb-8">
                  {currentBanner.description}
                </p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentBanner.features.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-[#133C99] text-white rounded-full text-sm font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Product Image */}
              <div className="relative flex items-center justify-center h-[500px]">
                <Image
                  src={currentBanner.image}
                  alt={`${currentBanner.title} Analyzer`}
                  width={600}
                  height={600}
                  className="w-auto h-auto object-contain max-h-[500px]"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Secondary Navigation Bar */}
      <section className="sticky top-16 z-40 shadow-sm bg-[#F6F8FB] border-b border-[#BFBFBF]/40">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-center gap-8 text-slate-700 font-medium">
            <button onClick={() => setSelectedModel('hemotxpro')} className={`transition-colors py-1 ${selectedModel === 'hemotxpro' ? 'text-[#1646AF] border-b-2 border-[#1646AF] font-bold' : 'text-slate-600 hover:text-[#1646AF]'}`}>Hemotx Pro</button>
            <button onClick={() => setSelectedModel('hemotxi5')} className={`transition-colors py-1 ${selectedModel === 'hemotxi5' ? 'text-[#1646AF] border-b-2 border-[#1646AF] font-bold' : 'text-slate-600 hover:text-[#1646AF]'}`}>Hemotx i5</button>
            <button onClick={() => setSelectedModel('hemotxi')} className={`transition-colors py-1 ${selectedModel === 'hemotxi' ? 'text-[#1646AF] border-b-2 border-[#1646AF] font-bold' : 'text-slate-600 hover:text-[#1646AF]'}`}>Hemotx i</button>
          </nav>
        </div>
      </section>

      {/* Product Details Section - Changes based on selected model */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedModel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {selectedModel === 'hemotxpro' && (
                <div className="space-y-16">
                  {/* Overview Section */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-bold text-[#0B1528] mb-6">Hemotx Pro Overview</h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Introducing Hemotx Pro, a compact and intelligent 3-Part Hematology Analyzer engineered to deliver high-precision CBC testing for clinical laboratories, diagnostic centers, and hospitals. Designed with advanced microfluidic technology and intelligent algorithms, Hemotx Pro ensures fast, accurate, and cost-effective results — every time.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">21 Parameters + 3 Histograms</h3>
                            <p className="text-gray-600">Comprehensive blood analysis with WBC differential (Lymphocytes, Monocytes, Granulocytes)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">60 Tests per Hour</h3>
                            <p className="text-gray-600">Ideal throughput for medium-volume labs with consistent accuracy</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">Minimal Sample Volume</h3>
                            <p className="text-gray-600">Requires only 9-10 µL of whole blood for complete analysis</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">User-Friendly Interface</h3>
                            <p className="text-gray-600">Touchscreen display with intuitive software and built-in thermal printer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={hemotxproImages[0]}
                        alt="Hemotx Pro Analyzer"
                        width={600}
                        height={500}
                        className="rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Technical Specifications - Card Based Layout */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Hemotx Pro Technical Specifications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Throughput */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Throughput</h3>
                        </div>
                        <p className="text-gray-700">Up to 60 samples/hour</p>
                      </motion.div>

                      {/* Measured Parameters */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Parameters</h3>
                        </div>
                        <p className="text-gray-700">21 Parameters + 3 Histograms</p>
                      </motion.div>

                      {/* WBC Differential */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TestTube className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">WBC Differential</h3>
                        </div>
                        <p className="text-gray-700">Lymphocytes, Monocytes, Granulocytes</p>
                      </motion.div>

                      {/* Sample Volume */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Droplet className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Sample Volume</h3>
                        </div>
                        <p className="text-gray-700">10 µL (Whole Blood) / 20 µL (Pre-diluted)</p>
                      </motion.div>

                      {/* Measuring Principle */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <FlaskRound className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Measuring Principle</h3>
                        </div>
                        <p className="text-gray-700">Electrical Impedance Method</p>
                      </motion.div>

                      {/* Display */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Display</h3>
                        </div>
                        <p className="text-gray-700">10 inch Color Touchscreen</p>
                      </motion.div>

                      {/* Data Storage */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Data Storage</h3>
                        </div>
                        <p className="text-gray-700">Up to 100,000 Results with Histograms</p>
                      </motion.div>

                      {/* Maintenance */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Wind className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Maintenance</h3>
                        </div>
                        <p className="text-gray-700">Auto Cleaning, Startup & Shutdown Protocols</p>
                      </motion.div>

                      {/* Calibration */}
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Thermometer className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">QC & Calibration</h3>
                        </div>
                        <p className="text-gray-700">Automatic Calibration & Quality Control</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Clinical & Operational Advantages */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Clinical & Operational Advantages</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">High Sensitivity & Accuracy</h3>
                        <p className="text-gray-600">Uses impedance technology and refined algorithms to ensure diagnostic confidence in WBC, RBC, and platelet analysis</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Compact & Space-Efficient</h3>
                        <p className="text-gray-600">Bench-top design fits easily in space-constrained labs without compromising performance</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimal Training Required</h3>
                        <p className="text-gray-600">Intuitive software interface designed for lab technicians and new users with easy-to-follow workflows</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Reagent Management</h3>
                        <p className="text-gray-600">Compatible with proprietary or open-system reagents, offering flexibility in operational costs</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Built-in QC & Calibration</h3>
                        <p className="text-gray-600">Internal controls ensure long-term precision and instrument stability with automated validation</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Maintenance</h3>
                        <p className="text-gray-600">Auto cleaning and calibration features reduce manual intervention and ensure optimal performance</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {selectedModel === 'hemotxi5' && (
                <div className="space-y-16">
                  {/* Overview Section */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-bold text-[#0B1528] mb-2">Hemotx-i5</h2>
                      <h3 className="text-3xl font-bold text-[#0B1528] mb-6">5-Part Hematology Analyzer</h3>
                      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Precision Redefined for Advanced Diagnostics</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Hemotx is a high-performance 5-part differential hematology analyzer engineered to deliver precise, detailed, and high-throughput Complete Blood Count (CBC) analysis. Designed for advanced diagnostic laboratories, multi-specialty hospitals, and research institutions, Hemotx provides in-depth WBC classification and a broad range of hematological parameters for superior clinical interpretation.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">29 Reportable Parameters</h3>
                            <p className="text-gray-600">Complete 5-part WBC differential including Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">Advanced Dual-Channel Technology</h3>
                            <p className="text-gray-600">Optical and impedance-based measurement for superior accuracy</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">High Throughput</h3>
                            <p className="text-gray-600">Up to 80 tests/hour with minimal sample volume (as low as 20 µL)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">LIS/HIS Ready</h3>
                            <p className="text-gray-600">Seamless connectivity and data sharing with built-in printer & high-capacity storage</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/hemotxi5-main.png"
                        alt="Hemotx Analyzer"
                        width={600}
                        height={500}
                        className="rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Hemotx i5 – Technical Overview</h2>
                    <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
                      The Hemotx is a fully automated, high-precision 5-part differential hematology analyzer, designed to meet the rigorous demands of modern clinical laboratories. It integrates flow cytometry with laser scattering, impedance analysis, and advanced algorithmic intelligence to deliver exceptionally accurate, reproducible, and detailed hematologic assessments.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Measurement Principle</h3>
                        </div>
                        <p className="text-gray-700">Dual-channel: laser scattering, flow cytometry, impedance + cyanide-free hemoglobin photometry</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Parameters</h3>
                        </div>
                        <p className="text-gray-700">29 parameters including 5-part WBC differential, Reticulocyte (optional), and calculated indices</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TestTube className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">WBC Classification</h3>
                        </div>
                        <p className="text-gray-700">Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Throughput</h3>
                        </div>
                        <p className="text-gray-700">Up to 80–90 tests per hour, ideal for mid- to high-volume labs</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Droplet className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Sample Volume</h3>
                        </div>
                        <p className="text-gray-700">As low as 20 µL (whole blood), enabling pediatric sample analysis</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Flagging Capability</h3>
                        </div>
                        <p className="text-gray-700">Real-time intelligent flagging of abnormal cells (immature granulocytes, blast cells)</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">User Interface</h3>
                        </div>
                        <p className="text-gray-700">10.4–12 inch full-color touchscreen with graphic histograms and scatter plots</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TestTube className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Data Storage</h3>
                        </div>
                        <p className="text-gray-700">&gt;100,000 patient results with full traceability and histogram retention</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Wind className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Connectivity</h3>
                        </div>
                        <p className="text-gray-700">LIS/HIS integration via RS-232, USB, or Ethernet; supports HL7 protocol</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Clinical & Operational Benefits */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Clinical & Operational Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Part Differentiation</h3>
                        <p className="text-gray-600">Highly accurate 5-part differentiation for better diagnostic insights and clinical decision making</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective Operation</h3>
                        <p className="text-gray-600">Minimal sample and reagent usage for cost-effective operation without compromising accuracy</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Friendly Interface</h3>
                        <p className="text-gray-600">Intuitive interface for quick training and smooth workflow integration in busy lab environments</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Flagging System</h3>
                        <p className="text-gray-600">Intelligent alerts for abnormal cells and critical values ensure nothing is missed</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Compact Design</h3>
                        <p className="text-gray-600">Powerful performance in a space-saving design – ideal for labs with limited space</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
                        <p className="text-gray-600">Combines laser scattering, flow cytometry, and impedance for superior accuracy and reliability</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {selectedModel === 'hemotxi' && (
                <div className="space-y-16">
                  {/* Overview Section */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-4xl font-bold text-[#0B1528] mb-2">Hemotx-i</h2>
                      <h3 className="text-3xl font-bold text-[#0B1528] mb-6">5-Part Hematology Analyzer</h3>
                      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Precision Redefined for Advanced Diagnostics</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Hemotx is a high-performance 5-part differential hematology analyzer engineered to deliver precise, detailed, and high-throughput Complete Blood Count (CBC) analysis. Designed for advanced diagnostic laboratories, multi-specialty hospitals, and research institutions, Hemotx provides in-depth WBC classification and a broad range of hematological parameters for superior clinical interpretation.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">29 Reportable Parameters</h3>
                            <p className="text-gray-600">Complete 5-part WBC differential: Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">Advanced Dual-Channel Technology</h3>
                            <p className="text-gray-600">Optical and impedance-based measurement for superior accuracy</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">High Throughput & Low Sample Volume</h3>
                            <p className="text-gray-600">Up to 80 tests/hour with sample volume as low as 20 µL</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">LIS/HIS Ready</h3>
                            <p className="text-gray-600">Seamless connectivity and data sharing with built-in printer & high-capacity storage</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/hemotxi-new.png"
                        alt="Hemotx Analyzer"
                        width={1000}
                        height={900}
                        className="rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Hemotx i – Technical Overview</h2>
                    <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
                      The Hemotx is a fully automated, high-precision 5-part differential hematology analyzer, designed to meet the rigorous demands of modern clinical laboratories. It integrates flow cytometry with laser scattering, impedance analysis, and advanced algorithmic intelligence to deliver exceptionally accurate, reproducible, and detailed hematologic assessments.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Measurement Principle</h3>
                        </div>
                        <p className="text-gray-700">Dual-channel: laser scattering, flow cytometry, impedance + cyanide-free hemoglobin photometry</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Parameters</h3>
                        </div>
                        <p className="text-gray-700">29 parameters including 5-part WBC differential, Reticulocyte (optional), and calculated indices</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TestTube className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">WBC Classification</h3>
                        </div>
                        <p className="text-gray-700">Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Throughput</h3>
                        </div>
                        <p className="text-gray-700">Up to 80–90 tests per hour, ideal for mid- to high-volume labs</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Droplet className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Sample Volume</h3>
                        </div>
                        <p className="text-gray-700">As low as 20 µL (whole blood), enabling pediatric sample analysis</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Flagging Capability</h3>
                        </div>
                        <p className="text-gray-700">Real-time intelligent flagging of abnormal cells (immature granulocytes, blast cells)</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Layers className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">User Interface</h3>
                        </div>
                        <p className="text-gray-700">10.4–12 inch full-color touchscreen with graphic histograms and scatter plots</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TestTube className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Data Storage</h3>
                        </div>
                        <p className="text-gray-700">&gt;100,000 patient results with full traceability and histogram retention</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Wind className="text-blue-600" size={28} />
                          <h3 className="text-lg font-bold text-blue-900">Connectivity</h3>
                        </div>
                        <p className="text-gray-700">LIS/HIS integration via RS-232, USB, or Ethernet; supports HL7 protocol</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Clinical & Operational Benefits */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#0B1528] mb-8 text-center">Clinical & Operational Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Part Differentiation</h3>
                        <p className="text-gray-600">Highly accurate 5-part differentiation for better diagnostic insights and clinical decision making</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective Operation</h3>
                        <p className="text-gray-600">Minimal sample and reagent usage for cost-effective operation without compromising accuracy</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Friendly Interface</h3>
                        <p className="text-gray-600">Intuitive interface for quick training and smooth workflow integration in busy lab environments</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Flagging System</h3>
                        <p className="text-gray-600">Intelligent alerts for abnormal cells and critical values ensure nothing is missed</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Compact Design</h3>
                        <p className="text-gray-600">Powerful performance in a space-saving design – ideal for labs with limited space</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg"
                      >
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                          <CheckCircle className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed & Sensitivity</h3>
                        <p className="text-gray-600">Whether routine or critical monitoring, empowers your lab with speed, sensitivity, and superior performance</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-gray-900" style={{ backgroundColor: '#D3D3D3' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Haematology Lab?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the precision and reliability of our advanced haematology analyzers. Contact us today for a demonstration or consultation.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-900 hover:bg-gray-700 hover:text-white font-semibold rounded-full transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function HaematologyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HaematologyPageContent />
    </Suspense>
  )
}
