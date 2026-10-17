'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import FixedSideBar from '@/components/FixedSideBar'
import { 
  Zap, 
  Clock, 
  FlaskConical, 
  Thermometer, 
  Radio, 
  Network, 
  Workflow, 
  Activity, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react'

// Key specifications for SmarLumi FC-2100
const productSpecs = [
  {
    icon: Zap,
    label: 'Throughput',
    value: 'Up to 200 tests/hour',
    detail: 'High speed continuous operation'
  },
  {
    icon: Clock,
    label: 'First Results',
    value: 'Under 12 minutes',
    detail: 'Rapid clinical turnaround'
  },
  {
    icon: FlaskConical,
    label: 'Sample Capacity',
    value: 'Up to 60 samples',
    detail: 'Flexible batch & STAT loading'
  },
  {
    icon: Thermometer,
    label: 'Reagent Cooling',
    value: '2–8°C on-board',
    detail: 'Maintains reagent integrity 24/7'
  },
  {
    icon: Radio,
    label: 'Reagent Management',
    value: 'RFID Tracking',
    detail: 'Automatic calibration & expiry log'
  },
  {
    icon: Network,
    label: 'Connectivity',
    value: 'Bidirectional LIS',
    detail: 'Seamless laboratory networking'
  },
  {
    icon: Workflow,
    label: 'Workflow',
    value: 'STAT & Auto Dilution',
    detail: 'Primary tubes with barcode support'
  },
  {
    icon: Activity,
    label: 'Testing Areas',
    value: 'Multi-Panel Diagnostics',
    detail: 'Cardiac, thyroid, tumor & infection'
  }
]

export default function SmarLumiIntroductionPage() {
  const router = useRouter()
  const prefersReducedMotion = useReducedMotion()
  const touchStartY = useRef<number | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)

  // Navigate to existing BIOTRA homepage
  const navigateToBiotra = useCallback(() => {
    if (isNavigating) return
    setIsNavigating(true)
    router.push('/biotra')
  }, [isNavigating, router])

  // Handle Wheel Scroll (scroll down triggers smooth navigation to BIOTRA)
  useEffect(() => {
    let lastWheelTime = 0
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      // Only trigger if scrolled downwards at bottom or intentional strong down scroll
      if (e.deltaY > 60 && now - lastWheelTime > 1000) {
        lastWheelTime = now
        // If near the bottom of the page or triggered
        const scrollBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
        if (scrollBottom) {
          navigateToBiotra()
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return
      const touchEndY = e.changedTouches[0].clientY
      const diffY = touchStartY.current - touchEndY
      // Swipe up (scroll down) by at least 70px when at bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (diffY > 70 && isAtBottom) {
        navigateToBiotra()
      }
      touchStartY.current = null
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [navigateToBiotra])

  return (
    <main className="relative bg-white text-[#111827] min-h-screen selection:bg-[#1646AF] selection:text-white">
      {/* Fixed Vertical Side Bar */}
      <FixedSideBar />

      {/* ============================================================
          SECTION 1: SMARLUMI™ FC-2100 PRODUCT HERO
          ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Large High-Resolution Product Image (~58% width on desktop) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 flex justify-center items-center order-1"
            >
              <div className="relative w-full max-w-[680px] lg:max-w-[780px] flex items-center justify-center">
                <Image
                  src="/images/smarlumi-fc-2100.jpg"
                  alt="SmarLumi™ FC-2100 Fully Automated Chemiluminescence Immunoassay Analyzer"
                  width={1400}
                  height={1177}
                  className="w-full h-auto object-contain max-h-[460px] sm:max-h-[520px] lg:max-h-[580px] transition-transform duration-500 hover:scale-[1.01]"
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 58vw"
                />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Product Information & Specifications (~42% width) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col justify-center order-2 text-left"
            >
              {/* Small Eyebrow Label */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs font-bold tracking-[0.22em] text-[#1646AF] uppercase">
                  AUREX PROUDLY INTRODUCES
                </span>
              </div>

              {/* Main Product Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#111827] leading-tight mb-2">
                SmarLumi™ FC-2100
              </h1>

              {/* Product Category Subtitle */}
              <h2 className="text-base sm:text-lg font-semibold text-[#133C99] tracking-normal mb-4">
                Fully Automated Chemiluminescence Immunoassay Analyzer
              </h2>

              {/* Product Description */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                SmarLumi™ FC-2100 is a compact, fully automated chemiluminescence immunoassay analyzer designed for laboratory testing. It delivers a throughput of up to 200 tests per hour, with first results in under 12 minutes, CV ≤5%, STAT capability, and automatic dilution.
              </p>

              {/* Key Product Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mb-6">
                {productSpecs.map((spec, index) => {
                  const SpecIcon = spec.icon
                  return (
                    <div 
                      key={index}
                      className="p-3 rounded-xl bg-[#F6F8FB] border border-[#BFBFBF]/30 flex items-start gap-2.5 transition-colors hover:border-[#1646AF]/40"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white border border-[#BFBFBF]/40 flex items-center justify-center text-[#1646AF] shrink-0 mt-0.5">
                        <SpecIcon size={15} />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span className="block text-xs sm:text-[13px] font-bold text-[#111827] leading-snug">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Compact Footprint Note & Direct CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#133C99] hover:bg-[#1646AF] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
                >
                  Request Specifications
                </Link>
                <button
                  onClick={navigateToBiotra}
                  className="px-5 py-3 bg-white hover:bg-[#F6F8FB] text-[#133C99] border border-[#BFBFBF]/60 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore BIOTRA</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================
          CENTRAL SWIPE / SCROLL NAVIGATION CONTROL
          Navigates smoothly to the existing BIOTRA homepage
          ============================================================ */}
      <section className="py-10 bg-white border-t border-[#BFBFBF]/30 text-center">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          
          <button
            onClick={navigateToBiotra}
            aria-label="Navigate to BIOTRA Product Homepage"
            className="group flex flex-col items-center justify-center p-3 sm:px-6 sm:py-3.5 rounded-full border-2 border-[#133C99] hover:bg-[#133C99] text-[#133C99] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] cursor-pointer shadow-xs hover:shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                EXPLORE BIOTRA
              </span>
              <motion.div
                animate={prefersReducedMotion ? false : { y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </motion.div>
            </div>
          </button>

          <span className="text-[11px] font-medium text-[#64748B] tracking-wide mt-2">
            Scroll or click to discover more
          </span>

          {/* Secondary Direct Link */}
          <div className="mt-3">
            <Link
              href="/biotra"
              className="text-xs text-[#64748B] hover:text-[#1646AF] underline underline-offset-4 transition-colors"
            >
              Direct Link to BIOTRA Homepage
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
