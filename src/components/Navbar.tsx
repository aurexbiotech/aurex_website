'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react'

// Category to route mapping
const categoryRoutes: { [key: string]: string } = {
  'Company': '/company',
  'Products': '/products',
  'Application': '/application',
  'Capabilities': '/capabilities',
  'IT Solutions': '/itsolutions',
  'Contact Us': '/contact',
  'Legal Tenders': '/legal'
}

const menuData = {
  Company: [
    'Company Profile',
    'Social Responsibilities',
    'Leadership Programme',
    'Investor Opportunity',
    'Our Vision',
    'Our Mission',
    'Our Culture',
    'Our Integrity',
    'Testimonials'
  ],
  Products: [
    'Clinical Diagnostics Automations',
    'Medical Imaging Sciences',
    'Advanced Andrology',
    'Transfusion Medicine',
    'Stemcel Research and Medicine',
    'Critical Care Solutions',
    'Sample Tracking Automation',
    'Analytical Laboratory Automations'
  ],
  Application: [
    'Clinical Diagnostics',
    'Life Science Research',
    'Patient Monitoring',
    'Veterinary Solutions'
  ],
  Capabilities: [
    'Turnkey Projects',
    'Service',
    'Supports',
    'Knowledge Centre',
    'Digital Learning Platforms',
    'Skill Centre',
    'Downloads',
    'Workshops',
    'Media Centre',
    'Blogs'
  ],
  'IT Solutions': [
    'Clinical Diagnostics Managements',
    'Hospital Management',
    'Research and Development Laboratory Management'
  ],
  'Contact Us': [
    'Inquire Now',
    'Technical Support',
    'Sales Offices',
    'Find a Distributor'
  ],
  'Legal Tenders': [
    'Our Sales Policy',
    'Our Service Policy',
    'Warranty Policy',
    'Integrity Policy',
    'Declaimers',
    'Cookies Policy'
  ]
}

const Navbar = () => {
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const toggleFullScreenMenu = () => setIsFullScreenMenuOpen(!isFullScreenMenuOpen)

  return (
    <>
      {/* Premium Corporate Gray Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F8FB]/95 backdrop-blur-md border-b border-[#BFBFBF]/40 shadow-xs">
        {/* Main Navigation with responsive padding */}
        <nav className="w-full px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo with responsive sizing - Blue AUREX with BIOTECH AUTOMATION underneath */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#1646AF] group-hover:text-[#133C99] transition-colors leading-none tracking-wider">
                AUREX
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-[#64748B] tracking-[0.24em] uppercase mt-1.5 leading-none">
                BIOTECH AUTOMATION
              </span>
            </Link>

            {/* Menu Button with responsive sizing */}
            <div className="flex items-center">
              <button
                onClick={toggleFullScreenMenu}
                aria-label="Toggle navigation menu"
                className="flex items-center justify-center space-x-1.5 sm:space-x-2 bg-[#133C99] hover:bg-[#1646AF] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 font-medium shadow-sm border border-transparent text-center cursor-pointer"
              >
                <Menu size={18} className="sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm lg:text-base font-semibold">Menu</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Screen AUREX Corporate Menu Overlay */}
      <AnimatePresence>
        {isFullScreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#133C99]/98"
          >
            <div className="absolute inset-0 backdrop-blur-md">
              
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 md:p-8 border-b border-white/15">
                {/* Branding */}
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wider leading-none">AUREX</h1>
                  <span className="text-[10px] sm:text-xs text-blue-200 tracking-[0.24em] uppercase font-semibold mt-1.5 leading-none">BIOTECH AUTOMATION</span>
                </div>

                {/* Prominent Close Button */}
                <button
                  onClick={toggleFullScreenMenu}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white text-[#1646AF] hover:bg-[#F6F8FB] hover:text-[#133C99] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg shadow-black/10"
                >
                  <X size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 font-bold" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4 sm:p-6 md:p-8 h-full overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    
                    {Object.entries(menuData).map(([category, items]) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Object.keys(menuData).indexOf(category) * 0.05, ease: "easeOut" }}
                        className="space-y-3 sm:space-y-4 md:space-y-6"
                      >
                        {/* Category Header - Link */}
                        <Link
                          href={categoryRoutes[category]}
                          onClick={toggleFullScreenMenu}
                          className="block"
                        >
                          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-white/90 transition-colors duration-300 cursor-pointer border-b border-white/20 pb-2 sm:pb-3 text-left tracking-wide group">
                            <span className="relative">
                              {category}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                            </span>
                          </h2>
                        </Link>
                        
                        {/* Category Links */}
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          {items.map((item, index) => (
                              <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.2, 
                                delay: (Object.keys(menuData).indexOf(category) * 0.05) + (index * 0.02),
                                ease: "easeOut"
                              }}
                            >
                              <Link
                                href={`${categoryRoutes[category]}#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                                onClick={toggleFullScreenMenu}
                                className="block text-white/80 hover:text-white hover:pl-2 sm:hover:pl-4 transition-all duration-300 text-sm sm:text-base font-medium leading-relaxed text-left group"
                              >
                                <span className="relative">
                                  {item}
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></span>
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="mt-10 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-white/15"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                          <Phone className="text-white/80" size={18} />
                          <span className="text-white/90 font-medium text-sm sm:text-base">+91 9543910101</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                          <Phone className="text-white/80" size={18} />
                          <span className="text-white/90 font-medium text-sm sm:text-base">+91 8144418046</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                        <Mail className="text-white/80" size={18} />
                        <span className="text-white/90 font-medium text-sm sm:text-base break-all">sales@aurexbiotech.com</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3">
                        <MapPin className="text-white/80 flex-shrink-0" size={18} />
                        <span className="text-white/90 font-medium text-sm sm:text-base leading-relaxed">1/51, Barathiyar Street, Mundiyampakkam, TamilNadu, India - 605601</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar