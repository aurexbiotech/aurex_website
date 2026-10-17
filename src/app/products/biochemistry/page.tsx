'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'

const BiochemistryPageContent = () => {
  const searchParams = useSearchParams()
  const [selectedModel, setSelectedModel] = useState('bc-310')

  // Check for model parameter in URL and set selected model
  useEffect(() => {
    const modelParam = searchParams.get('model')
    if (modelParam) {
      setSelectedModel(modelParam)
    }
  }, [searchParams])

  const productImages = [
    '/images/bc120-plus.png',
    '/images/bc120-plus.png',
    '/images/bc120-plus.png',
  ]
  
  const bc310Images = [
    '/images/bc310-image-01.png',
    '/images/bc310-image-02.png',
  ]

  const bc410Images = [
    '/images/bc410-image-01.png',
    '/images/bc410-image-02.png',
  ]

  const bc610Images = [
    '/images/bc610-image-01.png',
    '/images/bc610-image-02.png',
  ]

  const bc810Images = [
    '/images/bc810-image-01.png',
    '/images/bc810-image-02.png',
  ]

  const sa10Images = [
    '/images/sa10-image-01.png',
    '/images/sa10-image-02.png',
  ]

  const bc15Images = [
    '/images/bc15-image-01.png',
    '/images/bc15-image-02.png',
    '/images/bc15-image-03.jpg',
    '/images/bc15-image-04.jpg',
    '/images/bc15-image-05.jpg',
    '/images/bc15-image-06.gif',
  ]

  const electrosisImages = [
    '/images/electrosis-image-01.png',
    '/images/electrosis-image-02.png',
    '/images/electrosis-image-03.png',
    '/images/electrosis-image-04.png',
  ]

  // Banner content for each product
  const bannerContent = {
    'bc-15': {
      title: 'BC-15',
      subtitle: '150 T/H Biochemistry Analyzer',
      description: 'Intelligent, compact, and reliable biochemistry analyzer with advanced ISE technology for comprehensive metabolic testing.',
      features: ['Biochemistry', 'ISE Module', 'Smart Sampling'],
      image: bc15Images[0]
    },
    'bc-310': {
      title: 'BC-310',
      subtitle: '310 T/H Biochemistry Analyzer',
      description: 'High-performance fully automated biochemistry analyzer designed for medium to high throughput laboratories with exceptional accuracy.',
      features: ['Biochemistry', 'Haematology', 'Electrolyte'],
      image: bc310Images[0]
    },
    'bc-410': {
      title: 'BC-410',
      subtitle: '400 T/H Biochemistry Analyzer',
      description: 'Advanced automation with superior performance for high-volume clinical chemistry testing with ISE integration.',
      features: ['Biochemistry', 'ISE Module', 'High Throughput'],
      image: bc410Images[0]
    },
    'bc-610': {
      title: 'BC-610',
      subtitle: '600 T/H Biochemistry Analyzer',
      description: 'Premium high-throughput analyzer delivering exceptional speed, accuracy, and reliability for large-scale laboratory operations.',
      features: ['High Throughput', 'ISE Module', 'Advanced QC'],
      image: bc610Images[0]
    },
    'bc-810': {
      title: 'BC-810',
      subtitle: '800 T/H Biochemistry Analyzer',
      description: 'Ultimate performance biochemistry analyzer with industry-leading throughput and precision for the most demanding laboratory environments.',
      features: ['Ultra High Throughput', 'Dual ISE', 'Smart Automation'],
      image: bc810Images[0]
    },
    'bc-20': {
      title: 'BC-20',
      subtitle: 'Point-of-Care Analyzer',
      description: 'Compact and portable biochemistry analyzer designed for point-of-care testing with rapid results and ease of use.',
      features: ['Portable', 'Rapid Results', 'User Friendly'],
      image: productImages[0]
    },
    'sa-10': {
      title: 'SA-10',
      subtitle: 'Semi-Automated Analyzer',
      description: 'Cost-effective semi-automated biochemistry analyzer perfect for small to medium laboratories with essential testing capabilities.',
      features: ['Semi-Automated', 'Cost Effective', 'Reliable'],
      image: sa10Images[0]
    },
    'electrosis': {
      title: 'ELECTROSIS',
      subtitle: 'Electrolyte Analyzer',
      description: 'Advanced electrolyte analyzer utilizing ISE technology for precise measurement of critical electrolytes in clinical samples.',
      features: ['ISE Technology', '8 Parameters', 'Fast Results'],
      image: '/images/electrosis-banner.png',
      imageSize: 'large'
    }
  }

  const currentBanner = bannerContent[selectedModel as keyof typeof bannerContent] || bannerContent['bc-310']

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Changes for each product */}
      <section className="relative bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white py-20">
        {/* Back Arrow Button */}
        <Link href="/products" className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 text-white hover:text-gray-200 transition-colors">
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
                <h1 className="text-6xl font-bold mb-4">{currentBanner.title}</h1>
                <p className="text-2xl text-cyan-300 mb-6">{currentBanner.subtitle}</p>
                <p className="text-xl text-gray-200 mb-8">
                  {currentBanner.description}
                </p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentBanner.features.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Product Image */}
              <div className={`relative flex items-center justify-center ${selectedModel === 'electrosis' ? 'h-[700px]' : 'h-[500px]'}`}>
                <Image
                  src={currentBanner.image}
                  alt={`${currentBanner.title} Analyzer`}
                  width={selectedModel === 'electrosis' ? 1000 : 600}
                  height={selectedModel === 'electrosis' ? 1000 : 600}
                  className={`w-auto h-auto object-contain ${selectedModel === 'electrosis' ? 'max-h-[700px] scale-110' : 'max-h-[500px]'}`}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Secondary Navigation Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 sticky top-16 z-40 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-center gap-8 text-white font-medium">
            <button onClick={() => setSelectedModel('bc-15')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-15' ? 'border-b-2 border-white' : ''}`}>BC-15</button>
            <button onClick={() => setSelectedModel('bc-310')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-310' ? 'border-b-2 border-white' : ''}`}>BC-310</button>
            <button onClick={() => setSelectedModel('bc-410')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-410' ? 'border-b-2 border-white' : ''}`}>BC-410</button>
            <button onClick={() => setSelectedModel('bc-610')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-610' ? 'border-b-2 border-white' : ''}`}>BC-610</button>
            <button onClick={() => setSelectedModel('bc-810')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-810' ? 'border-b-2 border-white' : ''}`}>BC-810</button>
            <button onClick={() => setSelectedModel('bc-20')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'bc-20' ? 'border-b-2 border-white' : ''}`}>BC-20</button>
            <button onClick={() => setSelectedModel('sa-10')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'sa-10' ? 'border-b-2 border-white' : ''}`}>SA-10</button>
            <button onClick={() => setSelectedModel('electrosis')} className={`hover:text-blue-200 transition-colors ${selectedModel === 'electrosis' ? 'border-b-2 border-white' : ''}`}>ELECTROSIS</button>
          </nav>
        </div>
      </section>

      {/* BC-310 Content Section */}
      {selectedModel === 'bc-310' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">BC-310</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Auto Chemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Innovative Design Leads The Future</h4>
                    <p className="text-lg text-gray-600">
                      Simple and novel appearance design, constant speed 300 T/H.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={bc310Images[0]}
                    alt="BC-310 Auto Chemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Efficient */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Efficient</h4>
                      <p className="text-gray-600">
                        Integration of professional design, constant speed 300 T/H Smoother, and More Efficient for Daily Biochemistry Demands
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable</h4>
                      <p className="text-gray-600">
                        Selection of Key Components and Strict Reliable Design
                      </p>
                    </div>
                  </div>

                  {/* Accurate */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Accurate</h4>
                      <p className="text-gray-600">
                        150µl Minimum reaction Volume, Micro Volume od 2µl sampling and 0.1 µl sampling Accuracy
                      </p>
                    </div>
                  </div>

                  {/* Friendly Operation */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Friendly Operation</h4>
                      <p className="text-gray-600">
                        Easy to use Operation interface, Simple and Fast Operation Mode
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={bc310Images[1]}
                    alt="BC-310 Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Every Little Details leads to a New Experience
                </h3>
                <p className="text-lg text-gray-600">
                  Integration of Professional Design with Smoother Daily Operation
                </p>
              </motion.div>
            </div>
          </section>

          {/* Intelligent Sampling Section - Image Right */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Sampling</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc310-image-03.png"
                    alt="Intelligent Sampling"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Accurate Temperature Control Section - Image Left (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc310-image-04.png"
                    alt="Accurate Temperature Control"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Accurate Temperature Control</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Maintenance free solid constant temperature completely closed direct heat, accurate temperature control, more accurate results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Waterfall Flushing & Water Shortage Section - Image Right (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Waterfall Flushing Position</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        The innovative 360-degree waterfall flushing position makes the cleaning of sampling probe, cleaning probe and mixer more efficient.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Water Shortage Alarm</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With built-in water tank, water shortage alarm can be given in advance and buffer time is reserved which will not affect the result output. Alkaline detergent can remove strong pollutants and reduce contaminations to ensure valid results.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc310-image-05.jpg"
                    alt="Waterfall Flushing System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Advanced Operation System Section with GIF - Image Right */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Advanced Operation System Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Advanced Operation System</h4>
                      <ul className="text-gray-700 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">User Friendly software interface for Easy to use</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">System will Mast test items or samples and alarm automatically when reagents, Calibrators, Or samples are Exhausted</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">Whole Process real-time Monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">Real-time Monitoring of the whole reaction process and dynamic display of reaction curve, temperature, Reagents remaining volume and Other related Information&apos;s</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">Supports a Variety of Nonlinear curve scaling types</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-sm">Supports various non linear calibrations types, and the functions of Automatics dilutions increments and decrement samples</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Product Demo GIF */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                    <Image
                      src="/images/bc310-image-06.gif"
                      alt="BC-310 Product Demo"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Biotra310 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Test Speed */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Test Speed
                    </h4>
                    <p className="text-gray-700">Constant 300 tests/hour (Mono reagent or double reagent)</p>
                  </div>

                  {/* Sample Tray */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sample Tray
                    </h4>
                    <p className="text-gray-700">70 sample positions</p>
                  </div>

                  {/* Sample Tube */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Sample Tube
                    </h4>
                    <p className="text-gray-700">Micro cup & Test tube & Blood collection tube can be used</p>
                  </div>

                  {/* Sample Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Sample Volume
                    </h4>
                    <p className="text-gray-700">2-30μL, step by 0.1μL</p>
                  </div>

                  {/* Reagent Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Reagent Volume
                    </h4>
                    <p className="text-gray-700">20-300μL, step by 1μL</p>
                  </div>

                  {/* Reaction Temperature */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Reaction Temperature
                    </h4>
                    <p className="text-gray-700">Peltier pad incubation system, reaction temperature (37℃ ± 0.1℃)</p>
                  </div>

                  {/* Mixer */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mixer
                    </h4>
                    <p className="text-gray-700">Paddle-type mixing, effective reducing of carry-over</p>
                  </div>

                  {/* Light Source */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Light Source
                    </h4>
                    <p className="text-gray-700">Halogen lamp</p>
                  </div>

                  {/* Wavelength */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Wavelength
                    </h4>
                    <p className="text-gray-700">340nm; 405nm; 450nm; 505nm; 546nm; 578nm; 630nm; 700nm (4 more options)</p>
                  </div>

                  {/* Power Supply */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Power Supply
                    </h4>
                    <p className="text-gray-700">AC 110/220V ± 10%, 50/60 Hz, 1000VA</p>
                  </div>

                  {/* Operation System */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Operation System
                    </h4>
                    <p className="text-gray-700">Windows XP, Windows 7, Windows 8, Windows 10</p>
                  </div>

                  {/* Water Consumption */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Water Consumption
                    </h4>
                    <p className="text-gray-700">≤12L/hour (maximum)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete BC-310 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* BC-410 Content */}
      {selectedModel === 'bc-410' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">BC-410</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Auto Chemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Innovative Design Leads the Future</h4>
                    <p className="text-lg text-gray-600">
                      Simple and novel appearance design, constant speed 400 T/H.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={bc410Images[0]}
                    alt="BC-410 Auto Chemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left - Four Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Efficient */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Efficient</h4>
                      <p className="text-gray-600">
                        Integration of professional design, constant speed 400 T/H Smoother, and More Efficient for Daily Biochemistry Demands
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable</h4>
                      <p className="text-gray-600">
                        Selection of Key Components and Strict Reliable Design
                      </p>
                    </div>
                  </div>

                  {/* Accurate */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Accurate</h4>
                      <p className="text-gray-600">
                        150µl Minimum reaction Volume, Micro Volume of 2µl sampling and 0.1 µl sampling Accuracy
                      </p>
                    </div>
                  </div>

                  {/* Friendly Operation */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Friendly Operation</h4>
                      <p className="text-gray-600">
                        Easy to use Operation interface, Simple and Fast Operation Mode
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={bc410Images[1]}
                    alt="BC-410 Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 text-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Every Little Details leads to a New Experience
                </h3>
                <p className="text-xl text-gray-600">
                  Integration of Professional Design with Smoother Daily Operation
                </p>
              </motion.div>
            </div>
          </section>

          {/* Intelligent Sampling Section - Image Right (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Sampling</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc410-image-03.jpg"
                    alt="Intelligent Sampling"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Accurate Temperature Control Section - Image Left (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc410-image-04.jpg"
                    alt="Accurate Temperature Control"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Accurate Temperature Control</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Maintenance free solid constant temperature completely closed direct heat, accurate temperature control, more accurate results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Waterfall Flushing & Water Shortage Section - Image Right (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Waterfall Flushing Position */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Waterfall Flushing Position</h4>
                      <p className="text-gray-600 leading-relaxed">
                        The innovative 360-degree waterfall flushing position makes the cleaning of sampling probe, cleaning probe and mixer more efficient.
                      </p>
                    </div>
                  </div>

                  {/* Water Shortage Alarm */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Water Shortage Alarm</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With built-in water tank, water shortage alarm can be given in advance and buffer time is reserved which will not affect the result output. Acid and Alkaline detergent can remove strong pollutants and reduce contaminations to ensure valid results.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc410-image-05.jpg"
                    alt="Waterfall Flushing System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Product Demo GIF Section - Left Content, Right GIF */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Demo Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900">See BC-410 in Action</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Watch our advanced auto chemistry analyzer in operation. Experience the efficiency and precision of the BC-410 system with its constant 400 tests per hour capability.
                  </p>
                </motion.div>

                {/* Right - Product Demo GIF */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                    <Image
                      src="/images/bc410-image-06.gif"
                      alt="BC-410 Product Demo"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Biotra 400 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Test Speed */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Test Speed
                    </h4>
                    <p className="text-gray-700">Constant 400 tests/hour (Mono reagent or double reagent)</p>
                  </div>

                  {/* Sample Tray */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sample Tray
                    </h4>
                    <p className="text-gray-700">120 sample positions</p>
                  </div>

                  {/* Sample Tube */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Sample Tube
                    </h4>
                    <p className="text-gray-700">Micro cup & Test tube & Blood collection tube can be used</p>
                  </div>

                  {/* Sample Volume */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Sample Volume
                    </h4>
                    <p className="text-gray-700">2-30μL, step by 0.1μL</p>
                  </div>

                  {/* Reagent Volume */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Reagent Volume
                    </h4>
                    <p className="text-gray-700">20-300μL, step by 1μL</p>
                  </div>

                  {/* Reaction Temperature */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Reaction Temperature
                    </h4>
                    <p className="text-gray-700">Peltier pad incubation system, reaction temperature (37℃ ± 0.1℃)</p>
                  </div>

                  {/* Mixer */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mixer
                    </h4>
                    <p className="text-gray-700">Paddle-type mixing, effective reducing of carry-over</p>
                  </div>

                  {/* Light Source */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Light Source
                    </h4>
                    <p className="text-gray-700">Halogen lamp</p>
                  </div>

                  {/* Wavelength */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Wavelength
                    </h4>
                    <p className="text-gray-700">340nm; 405nm; 450nm; 505nm; 546nm; 578nm; 630nm; 700nm (4 more options)</p>
                  </div>

                  {/* Power Supply */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Power Supply
                    </h4>
                    <p className="text-gray-700">AC 110/220V ± 10%, 50/60 Hz, 1000VA</p>
                  </div>

                  {/* Operation System */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Operation System
                    </h4>
                    <p className="text-gray-700">Windows XP, Windows 7, Windows 8, Windows 10</p>
                  </div>

                  {/* Water Consumption */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Water Consumption
                    </h4>
                    <p className="text-gray-700">≤15L/hour (maximum)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete BC-410 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* BC-610 Content Section */}
      {selectedModel === 'bc-610' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">BC-610</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Fully Automated Chemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Innovative Design Leads the Future</h4>
                    <p className="text-lg text-gray-600">
                      Simple and novel appearance design, constant speed 600 T/H.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={bc610Images[0]}
                    alt="BC-610 Fully Automated Chemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Efficient */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Efficient</h4>
                      <p className="text-gray-600">
                        Integration of professional design, constant speed 600 T/H Smoother, and More Efficient for Daily Biochemistry Demands
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable</h4>
                      <p className="text-gray-600">
                        Selection of Key Components and Strict Reliable Design
                      </p>
                    </div>
                  </div>

                  {/* Accurate */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Accurate</h4>
                      <p className="text-gray-600">
                        150µl Minimum reaction Volume, Micro Volume of 2µl sampling and 0.1 µl sampling Accuracy
                      </p>
                    </div>
                  </div>

                  {/* Friendly Operation */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Friendly Operation</h4>
                      <p className="text-gray-600">
                        Easy to use Operation interface, Simple and Fast Operation Mode
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={bc610Images[1]}
                    alt="BC-610 Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Every Little Details leads to a New Experience
                </h3>
                <p className="text-lg text-gray-600">
                  Integration of Professional Design with Smoother Daily Operation
                </p>
              </motion.div>
            </div>
          </section>

          {/* Intelligent Sampling Section - Image Right */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Sampling</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc610-image-03.jpg"
                    alt="Intelligent Sampling"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Accurate Temperature Control Section - Image Left (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc610-image-04.jpg"
                    alt="Accurate Temperature Control"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Accurate Temperature Control</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Maintenance free solid constant temperature completely closed direct heat, accurate temperature control, more accurate results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Waterfall Flushing & Water Shortage Section - Image Right (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Waterfall Flushing Position</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        The innovative 360-degree waterfall flushing position makes the cleaning of sampling probe, cleaning probe and mixer more efficient.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Water Shortage Alarm</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With built-in water tank, water shortage alarm can be given in advance and buffer time is reserved which will not affect the result output. Acid and Alkaline detergent can remove strong pollutants and reduce contaminations to ensure valid results.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc610-image-05.jpg"
                    alt="Waterfall Flushing System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Advanced Operation System Section with GIF - Image Right */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content - Placeholder for future content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Biotra 600 in Action</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Experience the precision and efficiency of the BC-610 Fully Automated Chemistry Analyzer in real-time operation, delivering accurate results with unmatched reliability.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Product Demo GIF */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                    <Image
                      src="/images/bc610-image-06.gif"
                      alt="BC-610 Product Demo"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Biotra 600 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Test Speed */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Test Speed
                    </h4>
                    <p className="text-gray-700">Constant 600 tests/hour (Mono reagent or double reagent)</p>
                  </div>

                  {/* Sample Tray */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sample Tray
                    </h4>
                    <p className="text-gray-700">120 sample positions</p>
                  </div>

                  {/* Sample Tube */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Sample Tube
                    </h4>
                    <p className="text-gray-700">Micro cup & Test tube & Blood collection tube can be used</p>
                  </div>

                  {/* Sample Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Sample Volume
                    </h4>
                    <p className="text-gray-700">2-30μL, step by 0.1μL</p>
                  </div>

                  {/* Reagent Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Reagent Volume
                    </h4>
                    <p className="text-gray-700">20-300μl, step by 1μl</p>
                  </div>

                  {/* Reaction Temperature */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Reaction Temperature
                    </h4>
                    <p className="text-gray-700">Water circulation reagent cooling</p>
                  </div>

                  {/* Mixer */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mixer
                    </h4>
                    <p className="text-gray-700">paddle-type mixing, effective reducing of carry-over</p>
                  </div>

                  {/* Light Source */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Light Source
                    </h4>
                    <p className="text-gray-700">Halogen lamp</p>
                  </div>

                  {/* Wavelength */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Wavelength
                    </h4>
                    <p className="text-gray-700">340-800nm, 12 wavelengths</p>
                  </div>

                  {/* Power Supply */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Power Supply
                    </h4>
                    <p className="text-gray-700">AC 110/220V ± 10%, 50/60 Hz, 1000VA</p>
                  </div>

                  {/* Operation System */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Operation System
                    </h4>
                    <p className="text-gray-700">Windows XP, Windows 7, Windows 8, Windows 10</p>
                  </div>

                  {/* Water Consumption */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Water Consumption
                    </h4>
                    <p className="text-gray-700">≤40L/hour(maximum)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete BC-610 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* BC-810 Content Section */}
      {selectedModel === 'bc-810' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">BC-810</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Fully Automated Chemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Innovative Design Leads the Future</h4>
                    <p className="text-lg text-gray-600">
                      Simple and novel appearance design, constant speed 800 T/H.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={bc810Images[0]}
                    alt="BC-810 Fully Automated Chemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Efficient */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Efficient</h4>
                      <p className="text-gray-600">
                        Integration of professional design, constant speed 800 T/H Smoother, and More Efficient for Daily Biochemistry Demands
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable</h4>
                      <p className="text-gray-600">
                        Selection of Key Components and Strict Reliable Design
                      </p>
                    </div>
                  </div>

                  {/* Accurate */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Accurate</h4>
                      <p className="text-gray-600">
                        150µl Minimum reaction Volume, Micro Volume of 2µl sampling and 0.1 µl sampling Accuracy
                      </p>
                    </div>
                  </div>

                  {/* Friendly Operation */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Friendly Operation</h4>
                      <p className="text-gray-600">
                        Easy to use Operation interface, Simple and Fast Operation Mode
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={bc810Images[1]}
                    alt="BC-810 Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Every Little Details leads to a New Experience
                </h3>
                <p className="text-lg text-gray-600">
                  Integration of Professional Design with Smoother Daily Operation
                </p>
              </motion.div>
            </div>
          </section>

          {/* Intelligent Sampling Section - Image Right */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Sampling</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc810-image-03.jpg"
                    alt="Intelligent Sampling"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Accurate Temperature Control Section - Image Left (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc810-image-04.jpg"
                    alt="Accurate Temperature Control"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Accurate Temperature Control</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Maintenance free solid constant temperature completely closed direct heat, accurate temperature control, more accurate results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Waterfall Flushing & Water Shortage Section - Image Right (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Waterfall Flushing Position</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        The innovative 360-degree waterfall flushing position makes the cleaning of sampling probe, cleaning probe and mixer more efficient.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Water Shortage Alarm</h4>
                      <p className="text-gray-600 leading-relaxed">
                        With built-in water tank, water shortage alarm can be given in advance and buffer time is reserved which will not affect the result output. Acid and Alkaline detergent can remove strong pollutants and reduce contaminations to ensure valid results.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc810-image-05.jpg"
                    alt="Waterfall Flushing System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Advanced Operation System Section with GIF - Image Right */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Biotra 800 in Action</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Experience the precision and efficiency of the BC-810 Fully Automated Chemistry Analyzer in real-time operation, delivering accurate results with unmatched reliability.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Product Demo GIF */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                    <Image
                      src="/images/bc810-image-06.gif"
                      alt="BC-810 Product Demo"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Biotra 800 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Test Speed */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Test Speed
                    </h4>
                    <p className="text-gray-700">Constant 800 tests/hour (Mono reagent or double reagent)</p>
                  </div>

                  {/* Sample Tray */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sample Tray
                    </h4>
                    <p className="text-gray-700">160 sample positions</p>
                  </div>

                  {/* Sample Tube */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Sample Tube
                    </h4>
                    <p className="text-gray-700">Micro cup & Test tube & Blood collection tube can be used</p>
                  </div>

                  {/* Sample Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Sample Volume
                    </h4>
                    <p className="text-gray-700">2-30μL, step by 0.1μL</p>
                  </div>

                  {/* Reagent Volume */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Reagent Volume
                    </h4>
                    <p className="text-gray-700">20-300μl, step by 1μl</p>
                  </div>

                  {/* Reaction Temperature */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Reaction Temperature
                    </h4>
                    <p className="text-gray-700">Water circulation reagent cooling</p>
                  </div>

                  {/* Mixer */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Mixer
                    </h4>
                    <p className="text-gray-700">paddle-type mixing, effective reducing of carry-over</p>
                  </div>

                  {/* Light Source */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Light Source
                    </h4>
                    <p className="text-gray-700">Halogen lamp</p>
                  </div>

                  {/* Wavelength */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Wavelength
                    </h4>
                    <p className="text-gray-700">340-800nm, 12 wavelengths</p>
                  </div>

                  {/* Power Supply */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Power Supply
                    </h4>
                    <p className="text-gray-700">AC 110/220V ± 10%, 50/60 Hz, 1000VA</p>
                  </div>

                  {/* Operation System */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Operation System
                    </h4>
                    <p className="text-gray-700">Windows XP, Windows 7, Windows 8, Windows 10</p>
                  </div>

                  {/* Water Consumption */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Water Consumption
                    </h4>
                    <p className="text-gray-700">≤40L/hour(maximum)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete BC-810 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* SA-10 Content Section */}
      {selectedModel === 'sa-10' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">Biotra – SA 10</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Semi-Automated Biochemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Perfect Balance of Efficiency and Flexibility</h4>
                    <p className="text-lg text-gray-600">
                      Advanced semi-automated solution for modern clinical laboratories, combining precision with user-friendly operation.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={sa10Images[0]}
                    alt="Biotra SA-10 Semi-Automated Biochemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Perfect Balance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Perfect Balance of Efficiency and Flexibility</h4>
                  </div>
                </motion.div>

                {/* Long Warranty */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Long Warranty Period Brand Accessories</h4>
                  </div>
                </motion.div>

                {/* Large Capacity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Large Capacity Storage</h4>
                  </div>
                </motion.div>

                {/* Touch Screen */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Convenient Operation Through Touch Screen</h4>
                  </div>
                </motion.div>

                {/* Easy to Use */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h4>
                  </div>
                </motion.div>

                {/* Inbuilt Incubator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Inbuilt Incubator</h4>
                  </div>
                </motion.div>

                {/* Coagulation Function */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Coagulation Function Optional</h4>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Multifunctional Incubators Section - Image Right */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Multifunctional Incubators</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Biotra 10 is Approaching Multifunctional Incubators with Different Hole Shape for Coagulation Cuvettes, Reagents, and also For Biochemistry Cuvettes so It can support to Maintain Controlled Temperature Ensures Perfect Reagent and Sample Reaction for Perfect and Accurate Result.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={sa10Images[1]}
                    alt="Multifunctional Incubators"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Multiple Ports Section - Image Left (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-xl p-8 h-[300px] flex items-center justify-center">
                    <svg className="w-32 h-32 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Multiple Ports</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        The Multiple Ports Allowing to Versatile Connectivity Options for External Devices
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          5 USB Interface
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          One Ethernet Port
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          LIS Port
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Powerful Core Section - Image Right (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Powerful Core</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Excellent and Strongly Designed inner Core supports for Fast and Accurate Data Processing including Large Data Storage
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          200000 Test Results Can be Store
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          500 Test Programme Can be Available
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-xl p-8 h-[300px] flex items-center justify-center">
                    <svg className="w-32 h-32 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intelligent Software Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-xl p-8 h-[300px] flex items-center justify-center">
                    <svg className="w-32 h-32 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Software</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Perfectly designed Software will allow Professionals to Perfect utilize without any Hesitations
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  Biotra – SA 10 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Test Method */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Test Method
                    </h4>
                    <p className="text-gray-700">1 point end, 2 point end(Sample blank), Kinetics, Fixed-time, Coagulation(optional)</p>
                  </div>

                  {/* Optics */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Optics
                    </h4>
                    <p className="text-gray-700">7 standard filters (340nm, 405nm, 450nm, 505nm, 546nm, 578nm, 630nm). 2 more for optional</p>
                  </div>

                  {/* Lamp House */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Lamp House
                    </h4>
                    <p className="text-gray-700">Long-life tungsten halogen lamp(6V/10W), auto-sleep function</p>
                  </div>

                  {/* Display */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Display
                    </h4>
                    <p className="text-gray-700">7.0&quot;TFT LCD with touch screen, 800*480 pixels</p>
                  </div>

                  {/* Printer */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Printer
                    </h4>
                    <p className="text-gray-700">Build-in thermal printer, 57mm printer paper</p>
                  </div>

                  {/* Flow Cell */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Flow Cell Capacity & Optical Path
                    </h4>
                    <p className="text-gray-700">32ul, 10mm</p>
                  </div>

                  {/* Resolution */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Resolution
                    </h4>
                    <p className="text-gray-700">0.0001 Abs</p>
                  </div>

                  {/* Photometric Range */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Photometric Range
                    </h4>
                    <p className="text-gray-700">0.0000-4.0000 Abs</p>
                  </div>

                  {/* CPU */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      CPU
                    </h4>
                    <p className="text-gray-700">ARM Cortex-A8, 800MHz</p>
                  </div>

                  {/* Memory */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                      Memory (Storage)
                    </h4>
                    <p className="text-gray-700">4GB; Over 300 programs, 200000 results can be stored</p>
                  </div>

                  {/* Operational Environment */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Operational Environment
                    </h4>
                    <p className="text-gray-700">Temperature 10℃~30℃; Humidity 30%~80%</p>
                  </div>

                  {/* Power Requirement */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Power Requirement
                    </h4>
                    <p className="text-gray-700">Wide power supply AC 100-240V, 50/60 Hz</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete SA-10 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* BC-15 Content Section */}
      {selectedModel === 'bc-15' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">BC-15</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Fully Automated Chemistry Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Innovative Design Leads the Future</h4>
                    <p className="text-lg text-gray-600">
                      Simple and novel appearance design, constant speed 150T/H.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={bc15Images[0]}
                    alt="BC-15 Fully Automated Chemistry Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Efficient */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Efficient</h4>
                      <p className="text-gray-600">
                        Integration of Professional design constant speed 150 T/H Smoother & More Efficient
                      </p>
                    </div>
                  </div>

                  {/* Reliable */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable</h4>
                      <p className="text-gray-600">
                        Selection of Key Components and Strict reliable design
                      </p>
                    </div>
                  </div>

                  {/* Accurate */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Accurate</h4>
                      <p className="text-gray-600">
                        150 µl Minimum reaction Volume Micro volume of 2µl sampling 0.1µl accuracy
                      </p>
                    </div>
                  </div>

                  {/* Friendly */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Friendly</h4>
                      <p className="text-gray-600">
                        Easy to use operation interface, Simple and Fast Operation Mode
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={bc15Images[1]}
                    alt="BC-15 Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Easy little details lead to new experience
                </h3>
              </motion.div>
            </div>
          </section>

          {/* Intelligent Sampling Section - Image Right */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Sampling</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Intelligent frequency conversion sampling technology makes sampling more accurate, anti-collision protection can largely extend the service life of sampling probe.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc15-image-03.jpg"
                    alt="Intelligent Sampling"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Sample/Reagent Tray Section - Image Left (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc15-image-04.jpg"
                    alt="Sample Reagent Tray"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Sample/Reagent Tray</h4>
                      <p className="text-gray-600 leading-relaxed">
                        40 sample positions outside, 40 reagent positions in centre, 40 reagent positions inside
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Accurate Temperature Control & Waterfall Flushing Section - Image Right (Zigzag) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Accurate Temperature Control</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Maintenance-free solid constant temperature fully enclosed direct heating, accurate temperature control, more accurate results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Waterfall Flushing Position</h4>
                      <p className="text-gray-600 leading-relaxed">
                        The innovative 360-degree waterfall flushing position makes the cleaning of sampling probe, cleaning probe and mixer more efficient.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src="/images/bc15-image-05.jpg"
                    alt="Temperature Control and Flushing System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Product Demo Section with GIF - Image Right */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">BC-15 in Action</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Experience the precision and efficiency of the BC-15 Fully Automated Chemistry Analyzer in real-time operation.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Product Demo GIF */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                    <Image
                      src="/images/bc15-image-06.gif"
                      alt="BC-15 Product Demo"
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg max-h-[300px] object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  BC-15 Technical Specifications
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Throughput */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Throughput
                    </h4>
                    <p className="text-gray-700">Constant 150T/H</p>
                  </div>

                  {/* Test Method */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Test Method
                    </h4>
                    <p className="text-gray-700">End-point, Fixed-time, Kinetic</p>
                  </div>

                  {/* Sample/Reagent Tray */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md col-span-2">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Sample/Reagent Tray
                    </h4>
                    <p className="text-gray-700">40 sample positions outside, support bar code reader, auto-dilution, STAT sample priority; 40 reagent positions in centre, 40 reagent positons inside, 40 reagent positions can support bar code reader, 24 hours uninterrupted refrigeration</p>
                  </div>

                  {/* Reaction Unit */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      Reaction Unit
                    </h4>
                    <p className="text-gray-700">44 reaction cuvettes, diameter of reaction cuvette is 6mm</p>
                  </div>

                  {/* Wavelength */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Wavelength
                    </h4>
                    <p className="text-gray-700">8 wavelengths, 340-700nm(4 more options)</p>
                  </div>

                  {/* Operation System */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md col-span-2">
                    <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Operation System
                    </h4>
                    <p className="text-gray-700">Windows 10, Windows 11 Pro</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-50 mb-8">
                  Download the complete BC-15 product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-100 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* ELECTROSIS Content Section */}
      {selectedModel === 'electrosis' && (
        <>
          {/* Hero Section with Image and Title */}
          <section className="bg-gradient-to-r from-[#F6F8FB] to-white py-16">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Title and Description */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">ELECTROSIS</h2>
                  <h3 className="text-2xl text-gray-700 mb-6">Electrolyte Analyzer</h3>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">Precision Meets Simplicity in Electrolyte Testing</h4>
                    <p className="text-lg text-gray-600">
                      Electrosis is a state-of-the-art Electrolyte Analyzer designed to deliver accurate, reliable, and efficient results in real time. Built with advanced ion-selective electrode (ISE) technology, it offers seamless electrolyte analysis with minimal operator effort—ideal for clinical laboratories, emergency units, and diagnostic centers.
                    </p>
                  </div>
                </motion.div>

                {/* Right - Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={electrosisImages[0]}
                    alt="Electrosis Electrolyte Analyzer"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg max-h-[350px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Features Section with Second Image */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Key Features */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">🔬 Key Features</h3>

                  {/* Multi-Parameter Detection */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Multi-Parameter Detection</h4>
                      <p className="text-gray-600">Na⁺, K⁺, Cl⁻, Ca²⁺, Li⁺ (configurable)</p>
                    </div>
                  </div>

                  {/* Fast Turnaround Time */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround Time</h4>
                      <p className="text-gray-600">Results in 30–60 seconds</p>
                    </div>
                  </div>

                  {/* Low Sample Volume */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Low Sample Volume</h4>
                      <p className="text-gray-600">Requires as little as 60–100 µL</p>
                    </div>
                  </div>

                  {/* Auto Calibration */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#1646AF]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Auto Calibration</h4>
                      <p className="text-gray-600">Ensures consistent accuracy without manual intervention</p>
                    </div>
                  </div>

                  {/* Large Touchscreen Interface */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Large Touchscreen Interface</h4>
                      <p className="text-gray-600">Intuitive and user-friendly operation</p>
                    </div>
                  </div>

                  {/* Sample Types */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Sample Types</h4>
                      <p className="text-gray-600">Compatible with whole blood, serum, plasma, and urine</p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Second Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={electrosisImages[1]}
                    alt="Electrosis Features Detail"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[400px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Additional Features Section - Image Left (Zigzag) */}
          <section className="py-16 bg-gradient-to-br from-[#F6F8FB] to-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={electrosisImages[2]}
                    alt="Electrosis Reagent System"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[350px] object-contain"
                  />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Reagent Pack System</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Clean, sealed, and easy-to-load cartridges ensure consistent performance and minimal contamination risk.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1646AF]/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Connectivity</h4>
                      <p className="text-gray-600 leading-relaxed">
                        USB, RS-232, LIS-ready for seamless lab integration and data management.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technical Highlights Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                  ⚙️ Technical Highlights
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                    <thead className="bg-gradient-to-r from-[#133C99] to-[#1646AF]">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-bold text-lg">Parameter</th>
                        <th className="px-6 py-4 text-left text-white font-bold text-lg">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Measurement Method</td>
                        <td className="px-6 py-4 text-gray-700">Ion-Selective Electrode (ISE)</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Throughput</td>
                        <td className="px-6 py-4 text-gray-700">Up to 60 samples/hour</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Display</td>
                        <td className="px-6 py-4 text-gray-700">7–10&quot; Full-Color LCD Touchscreen</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Storage</td>
                        <td className="px-6 py-4 text-gray-700">Up to 100,000 patient records</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Calibration</td>
                        <td className="px-6 py-4 text-gray-700">Fully Automatic / On-Demand</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Maintenance</td>
                        <td className="px-6 py-4 text-gray-700">Low maintenance design, auto-clean cycle</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Sample Volume</td>
                        <td className="px-6 py-4 text-gray-700">60–100 µL</td>
                      </tr>
                      <tr className="hover:bg-[#F6F8FB] transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Power Supply</td>
                        <td className="px-6 py-4 text-gray-700">AC 100–240 V, 50/60 Hz</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Electrosis Section - Image Right */}
          <section className="py-16 bg-gradient-to-br from-[#F6F8FB] to-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">✅ Why Choose Electrosis?</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#1646AF] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Trusted precision for critical care and general diagnostics</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#1646AF] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Compact footprint ideal for space-limited labs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#1646AF] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Easy-to-use interface for high-throughput workflows</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#1646AF] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Reliable performance with minimal downtime</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-[#1646AF] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">Backed by strong service & support from AUREX</p>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Image
                    src={electrosisImages[3]}
                    alt="Electrosis in Laboratory Setting"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-xl max-h-[400px] object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Ideal For Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                  📍 Ideal For
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#F6F8FB] to-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <h4 className="text-xl font-bold text-gray-900">Clinical Laboratories</h4>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F6F8FB] to-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <h4 className="text-xl font-bold text-gray-900">Hospitals & ICUs</h4>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F6F8FB] to-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h4 className="text-xl font-bold text-gray-900">Dialysis Centers</h4>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F6F8FB] to-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h4 className="text-xl font-bold text-gray-900">Veterinary Diagnostics</h4>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F6F8FB] to-white p-6 rounded-xl shadow-md col-span-2">
                    <div className="flex items-center space-x-3 justify-center">
                      <svg className="w-8 h-8 text-[#1646AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h4 className="text-xl font-bold text-gray-900">Research Institutions</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Technical Excellence Section */}
          <section className="py-16 bg-gradient-to-br from-[#0B1528] to-[#133C99]">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-4xl font-bold text-white mb-8 text-center">
                  Technical Excellence
                </h3>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                  <p className="text-lg text-white leading-relaxed mb-6">
                    Electrosis is a <span className="font-bold text-blue-200">next-generation, fully automated electrolyte analyzer</span>, engineered to deliver high-precision, clinically reproducible results in real time. Incorporating advanced <span className="font-bold text-blue-200">Ion-Selective Electrode (ISE) technology</span>, the system ensures rapid and accurate quantification of key electrolytes—<span className="font-bold">sodium (Na⁺), potassium (K⁺), chloride (Cl⁻), calcium (Ca²⁺), and lithium (Li⁺)</span>—from diverse biological matrices including whole blood, serum, plasma, and urine.
                  </p>
                  <p className="text-lg text-white leading-relaxed mb-6">
                    Designed for <span className="font-bold text-blue-200">minimal operator dependency</span> and streamlined workflow integration, Electrosis is ideally suited for high-throughput diagnostic environments, including critical care units (CCUs), emergency departments, and clinical core laboratories. Its robust analytical algorithms and automated calibration systems minimize drift, ensuring consistent analytical fidelity, even under intensive usage.
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    The analyzer&apos;s <span className="font-bold text-blue-200">micro-volume sampling capabilities</span>, intuitive touchscreen interface, and maintenance-free reagent pack system make it an optimal solution for modern laboratories that prioritize efficiency, traceability, and diagnostic accuracy.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Download Brochure Section */}
          <section className="py-16 bg-gradient-to-br from-[#133C99] to-[#1646AF]">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  FOR MORE INFORMATION
                </h3>
                <p className="text-xl text-blue-100 mb-8">
                  Download the complete ELECTROSIS product brochure with detailed specifications, features, and technical information.
                </p>
                <button className="group bg-white text-[#1646AF] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center mx-auto space-x-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Product Brochure</span>
                </button>
                <p className="text-blue-200 mt-4 text-sm">
                  PDF Format • Comprehensive Specifications • Ready to Print
                </p>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Main Content Section - Show for other models */}
      {selectedModel !== 'bc-310' && selectedModel !== 'bc-410' && selectedModel !== 'bc-610' && selectedModel !== 'bc-810' && selectedModel !== 'sa-10' && selectedModel !== 'bc-15' && selectedModel !== 'electrosis' && (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Clinical Diagnostics Automations
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
              <h3 className="text-2xl text-gray-700 font-semibold mb-4">
                Advanced Automated Diagnostic Solutions
              </h3>
              <p className="text-lg text-gray-600">
                Comprehensive clinical diagnostics automation systems that deliver precision, speed, and reliability for modern laboratory operations.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our clinical diagnostics automation solutions transform laboratory workflows with cutting-edge technology that ensures accurate results, reduces manual intervention, and increases throughput. From sample preparation to result reporting, our systems deliver excellence at every step.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {[
                'High-throughput immunoassay systems with STAT capabilities',
                'Automated clinical chemistry analyzers with ISE modules',
                'Integrated sample tracking and barcode management',
                'Real-time quality control and result validation',
                'Comprehensive test menus covering all clinical areas',
                'Seamless LIS integration and data management'
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2 rounded-full flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function BiochemistryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BiochemistryPageContent />
    </Suspense>
  )
}
