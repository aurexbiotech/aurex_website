'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Camera, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter,
  Cpu,
  Zap,
  Database
} from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 5 ? 1 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Subtle Wave Background */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#1e40af"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#1e40af"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"></path>
        </svg>
      </div>

      {/* Right Side Social Bar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col space-y-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        >
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
            <Phone className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
            <Mail className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
            <Camera className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <Linkedin className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
            <Youtube className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
            <Facebook className="text-white" size={20} />
          </div>
          <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
            <Twitter className="text-white" size={20} />
          </div>
        </motion.div>
      </div>

      {/* Left Side Navigation Dots */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col space-y-3"
        >
          {[1, 2, 3, 4, 5].map((slide) => (
            <div
              key={slide}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentSlide === slide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(slide)}
            />
          ))}
          <div className="text-xs text-gray-500 mt-2 font-medium">
            {currentSlide}/05
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1646AF] tracking-wider">AUREX</h1>
              <p className="text-[#133C99] font-medium tracking-wide">Advanced Diagnostic Solutions</p>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Advancing with Innovation
                <br />
                <span className="text-[#1646AF]">and Intelligence</span>
              </h2>
            </motion.div>

            {/* Product Models - Aboreto Font with Dark Gray #333333 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 mb-6"
            >
              <span 
                className="font-aboreto tracking-wide"
                style={{ fontFamily: 'var(--font-aboreto), cursive', color: '#333333', fontSize: '14px' }}
              >
                BC-310
              </span>
              <span 
                className="font-aboreto tracking-wide"
                style={{ fontFamily: 'var(--font-aboreto), cursive', color: '#333333', fontSize: '14px' }}
              >
                BC-410
              </span>
              <span 
                className="font-aboreto tracking-wide"
                style={{ fontFamily: 'var(--font-aboreto), cursive', color: '#333333', fontSize: '14px' }}
              >
                BC-15
              </span>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F6F8FB] border border-[#BFBFBF]/40">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-[#1646AF]/20">
                  <Cpu className="text-[#1646AF]" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Smart Control</h3>
                <p className="text-xs text-[#64748B]">Intelligent automation for precise results</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F6F8FB] border border-[#BFBFBF]/40">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-[#1646AF]/20">
                  <Zap className="text-[#1646AF]" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Intelligent Interaction</h3>
                <p className="text-xs text-[#64748B]">Seamless user experience and interface</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#F6F8FB] border border-[#BFBFBF]/40">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-[#133C99]/20">
                  <Database className="text-[#133C99]" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Rapid Database Match</h3>
                <p className="text-xs text-[#64748B]">Lightning-fast data processing and analysis</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Product Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Product Container */}
            <div className="relative w-full max-w-md">
              {/* 3D Product Mockup */}
              <div className="relative bg-gradient-to-br from-white to-[#F6F8FB] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-[#BFBFBF]/30">
                {/* Product Display */}
                <div className="bg-[#0B1528] rounded-2xl p-6 mb-6 relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1646AF]/20 to-[#133C99]/20"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-[#1646AF] rounded-full"></div>
                      </div>
                      <div className="text-blue-300 text-xs font-mono tracking-wider">ONLINE</div>
                    </div>
                    
                    {/* Analysis Display */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300 text-sm">Sample Analysis</span>
                        <span className="text-blue-200 text-sm font-medium">✓ Complete</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-[#1646AF] to-[#60A5FA] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-gray-400">Accuracy</div>
                          <div className="text-white font-bold">99.7%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Speed</div>
                          <div className="text-[#60A5FA] font-bold">2.3s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">AutoLumo A6200</h3>
                  <p className="text-[#64748B] text-sm mb-4">Next-Gen Diagnostic Analyzer</p>
                  <div className="flex justify-center space-x-4 text-xs">
                    <span className="bg-[#F6F8FB] text-[#1646AF] border border-[#1646AF]/30 px-3 py-1 rounded-full font-medium">High Precision</span>
                    <span className="bg-[#F6F8FB] text-[#133C99] border border-[#133C99]/30 px-3 py-1 rounded-full font-medium">AI-Powered</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#1646AF] to-[#133C99] rounded-full opacity-80 shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-70 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
      >
        <div className="text-gray-600 text-sm font-medium mb-2">Scroll Down</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection