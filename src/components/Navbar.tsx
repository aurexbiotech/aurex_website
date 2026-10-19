'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  LogIn
} from 'lucide-react'

// Primary navigation items displayed in header
const navItems = [
  { name: 'About Aurex', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Support', href: '/capabilities' },
  { name: 'Contact', href: '/contact' }
]

// Category to route mapping for full-screen menu page
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
    'Stemcell Research and Medicine',
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
    'Disclaimers',
    'Cookies Policy'
  ]
}

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false)

  const toggleFullScreenMenu = () => setIsFullScreenMenuOpen((prev) => !prev)

  // Automatically close menu on route change
  useEffect(() => {
    setIsFullScreenMenuOpen(false)
  }, [pathname])

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (isFullScreenMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isFullScreenMenuOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullScreenMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Completely hide header on the root SmarLumi introduction page
  if (pathname === '/') {
    return null
  }

  return (
    <>
      {/* Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <nav 
          className="w-full px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4"
          aria-label="Main Navigation"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* LEFT: AUREX Brand Logo & Menu Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link 
                href="/biotra" 
                className="flex flex-col items-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] rounded-md"
                aria-label="AUREX Biotech Automation Home"
              >
                <span className="text-2xl sm:text-3xl md:text-[32px] font-black text-[#1646AF] group-hover:text-[#133C99] transition-colors leading-none tracking-wider">
                  AUREX
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-[#64748B] tracking-[0.24em] uppercase mt-1 leading-none">
                  BIOTECH AUTOMATION
                </span>
              </Link>

              {/* Menu Button that opens the Full-Screen Menu Page */}
              <button
                onClick={toggleFullScreenMenu}
                aria-label={isFullScreenMenuOpen ? 'Close navigation menu' : 'Open navigation menu page'}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#133C99] hover:bg-[#1646AF] text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 font-semibold shadow-sm text-xs sm:text-sm cursor-pointer hover:scale-105 active:scale-95"
              >
                <Menu size={17} className="stroke-[2.2]" />
                <span>Menu</span>
              </button>
            </div>

            {/* RIGHT: Display Navigation Options + Login Button */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm lg:text-[15px] font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] rounded ${
                        isActive
                          ? 'text-[#1646AF] font-semibold'
                          : 'text-[#111827] hover:text-[#1646AF]'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span 
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1646AF] rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Portal Login Button */}
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#133C99] hover:bg-[#1646AF] text-white text-xs lg:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF]"
              >
                <LogIn size={15} />
                <span>Login</span>
              </Link>
            </div>

          </div>
        </nav>
      </header>

      {/* Full-Screen AUREX Corporate Menu Overlay Page (Old Version Restored) */}
      <AnimatePresence>
        {isFullScreenMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#133C99]/98 flex flex-col"
          >
            <div className="relative w-full h-full flex flex-col backdrop-blur-md overflow-hidden">
              
              {/* Menu Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 md:p-8 border-b border-white/15 shrink-0">
                {/* Branding */}
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wider leading-none">AUREX</h1>
                  <span className="text-[10px] sm:text-xs text-blue-200 tracking-[0.24em] uppercase font-semibold mt-1.5 leading-none">BIOTECH AUTOMATION</span>
                </div>

                {/* Right Header: Portal Login & Prominent Close Button */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsFullScreenMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white text-white hover:text-[#133C99] rounded-xl text-xs sm:text-sm font-bold transition-all duration-200"
                  >
                    <LogIn size={16} />
                    <span>Portal Login</span>
                  </Link>
                  <button
                    onClick={toggleFullScreenMenu}
                    aria-label="Close navigation menu"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-[#1646AF] hover:bg-[#F6F8FB] hover:text-[#133C99] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg shadow-black/10 cursor-pointer"
                  >
                    <X size={22} className="font-bold stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-6 sm:gap-8 lg:gap-10">
                    {Object.entries(menuData).map(([category, items]) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: Object.keys(menuData).indexOf(category) * 0.04 }}
                        className="space-y-3 sm:space-y-4"
                      >
                        {/* Category Header Link */}
                        <Link
                          href={categoryRoutes[category]}
                          onClick={() => setIsFullScreenMenuOpen(false)}
                          className="block"
                        >
                          <h2 className="text-base sm:text-lg font-bold text-white hover:text-white/90 transition-colors duration-300 cursor-pointer border-b border-white/20 pb-2 text-left tracking-wide group">
                            <span className="relative">
                              {category}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                            </span>
                          </h2>
                        </Link>
                        
                        {/* Category Links */}
                        <div className="space-y-2">
                          {items.map((item) => (
                            <Link
                              key={item}
                              href={`${categoryRoutes[category]}#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                              onClick={() => setIsFullScreenMenuOpen(false)}
                              className="block text-white/80 hover:text-white hover:pl-2 transition-all duration-200 text-xs sm:text-sm font-medium leading-relaxed text-left group"
                            >
                              <span className="relative">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300"></span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Contact Info in Menu Page */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="text-blue-300 shrink-0" size={16} />
                          <span className="text-white/90 font-medium text-xs sm:text-sm">+91 9543910101</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="text-blue-300 shrink-0" size={16} />
                          <span className="text-white/90 font-medium text-xs sm:text-sm">+91 8144418046</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="text-blue-300 shrink-0" size={16} />
                        <span className="text-white/90 font-medium text-xs sm:text-sm">sales@aurexbiotech.com</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="text-blue-300 shrink-0 mt-0.5" size={16} />
                        <span className="text-white/90 font-medium text-xs sm:text-sm leading-relaxed">
                          163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam, Villupuram, VILLUPURAM, TAMIL NADU, 605601
                        </span>
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