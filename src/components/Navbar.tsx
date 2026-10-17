'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Building2, 
  Sparkles, 
  Microscope, 
  PhoneCall,
  ChevronRight
} from 'lucide-react'

// Primary navigation items requested in reference
const navItems = [
  {
    name: 'About Aurex',
    href: '/about',
    description: 'Company profile, vision & global leadership',
    icon: Building2
  },
  {
    name: 'Solutions',
    href: '/solutions',
    description: 'Clinical diagnostics, endocrinology & oncology',
    icon: Sparkles
  },
  {
    name: 'Products',
    href: '/products',
    description: 'Analyzers, instruments & laboratory systems',
    icon: Microscope
  },
  {
    name: 'Support',
    href: '/capabilities',
    description: 'Service engineering, knowledge centre & technical support',
    icon: PhoneCall
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Direct inquiries, sales network & headquarters',
    icon: PhoneCall
  }
]

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Toggle menu state
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => {
    setIsMenuOpen(false)
    buttonRef.current?.focus()
  }

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Handle Escape key to close dropdown
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  // Automatically close dropdown on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <nav 
        className="w-full px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* LEFT & CENTER CONTAINER */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            
            {/* LEFT: AUREX Brand Wordmark & Subtitle */}
            <Link 
              href="/" 
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

            {/* CENTER: Dedicated Menu Button between Logo and Navigation */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                aria-controls="header-navigation-menu"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[#133C99] hover:text-[#1646AF] hover:bg-[#F6F8FB] border border-[#BFBFBF]/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] cursor-pointer ${
                  isMenuOpen ? 'bg-[#F6F8FB] text-[#1646AF] border-[#1646AF]/40' : 'bg-white'
                }`}
              >
                {isMenuOpen ? (
                  <X size={18} className="stroke-[2.2]" />
                ) : (
                  <Menu size={18} className="stroke-[2.2]" />
                )}
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#111827]">
                  Menu
                </span>
              </button>

              {/* Functional Dropdown Popover */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    id="header-navigation-menu"
                    ref={menuRef}
                    role="menu"
                    aria-label="Site Navigation Options"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute left-0 mt-2.5 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 z-50 focus:outline-none"
                  >
                    <div className="px-3 py-2 border-b border-gray-100 mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Navigation Options
                      </span>
                      <span className="text-[10px] text-[#64748B] font-medium">
                        Press Esc to close
                      </span>
                    </div>

                    <div className="space-y-1">
                      {navItems.map((item) => {
                        const ItemIcon = item.icon
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group ${
                              isActive
                                ? 'bg-[#F6F8FB] text-[#1646AF]'
                                : 'text-[#111827] hover:bg-[#F6F8FB] hover:text-[#1646AF]'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isActive 
                                ? 'bg-[#1646AF] text-white' 
                                : 'bg-[#F6F8FB] text-[#133C99] group-hover:bg-[#1646AF] group-hover:text-white'
                            }`}>
                              <ItemIcon size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-semibold ${
                                  isActive ? 'text-[#1646AF]' : 'text-[#111827] group-hover:text-[#1646AF]'
                                }`}>
                                  {item.name}
                                </span>
                                <ChevronRight 
                                  size={14} 
                                  className={`transition-transform duration-200 ${
                                    isActive ? 'text-[#1646AF]' : 'text-gray-300 group-hover:translate-x-0.5 group-hover:text-[#1646AF]'
                                  }`} 
                                />
                              </div>
                              <p className="text-[11px] text-[#64748B] leading-snug line-clamp-1 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Display Four Navigation Options */}
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

        </div>
      </nav>
    </header>
  )
}

export default Navbar