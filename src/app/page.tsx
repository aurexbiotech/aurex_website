'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  FlaskConical, 
  Thermometer, 
  Radio, 
  Network, 
  Workflow, 
  Activity,
  ArrowRight,
  ChevronDown
} from 'lucide-react'

// Verified SmarLumi™ FC-2100 specifications
const primarySpecs = [
  {
    icon: Zap,
    label: 'Throughput',
    value: 'Up to 200 tests/h',
    sub: 'Continuous automation'
  },
  {
    icon: Clock,
    label: 'First Results',
    value: '< 12 minutes',
    sub: 'Rapid clinical turnaround'
  },
  {
    icon: ShieldCheck,
    label: 'Precision',
    value: 'CV ≤ 5%',
    sub: 'High diagnostic fidelity'
  },
  {
    icon: FlaskConical,
    label: 'Sample Capacity',
    value: '60 samples',
    sub: 'Flexible batch & STAT'
  },
  {
    icon: Thermometer,
    label: 'Reagent Cooling',
    value: '2–8°C on-board',
    sub: '24/7 reagent integrity'
  },
  {
    icon: Radio,
    label: 'Reagent Tracking',
    value: 'RFID automated',
    sub: 'Auto calibration & expiry'
  },
  {
    icon: Network,
    label: 'Connectivity',
    value: 'Bidirectional LIS',
    sub: 'Seamless laboratory network'
  },
  {
    icon: Workflow,
    label: 'Workflow',
    value: 'STAT & Auto Dilution',
    sub: 'Primary tube & barcode'
  }
]

export default function SmarLumiIntroductionPage() {
  const router = useRouter()
  const prefersReducedMotion = useReducedMotion()
  const touchStartY = useRef<number | null>(null)
  
  // Animation state: 'center' -> 'settled'
  const [phase, setPhase] = useState<'center' | 'settled'>('center')
  const [isDesktop, setIsDesktop] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  // Track viewport width for responsive cinematic transitions
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Sequence controller: center reveal -> move to left
  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase('settled')
      return
    }

    // Phase 1 (Center reveal) displays for 450ms, then Phase 2 (Move to left) initiates
    const timer = setTimeout(() => {
      setPhase('settled')
    }, 450)

    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  // Navigate to existing BIOTRA / AUREX main website
  const handleExploreAurex = useCallback(() => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      router.push('/biotra')
    }, prefersReducedMotion ? 0 : 300)
  }, [isExiting, router, prefersReducedMotion])

  // Wheel and Touch navigation: scrolling down smoothly enters the main website
  useEffect(() => {
    let lastWheelTime = 0

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (e.deltaY > 50 && now - lastWheelTime > 900) {
        lastWheelTime = now
        handleExploreAurex()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return
      const touchEndY = e.changedTouches[0].clientY
      const diffY = touchStartY.current - touchEndY
      if (diffY > 60) {
        handleExploreAurex()
      }
      touchStartY.current = null
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        handleExploreAurex()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleExploreAurex])

  // Staggered variants for product details on the right
  const rightColumnContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.55 // Appears after machine movement is well underway
      }
    }
  }

  const childItemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <main 
      className={`relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#F6F8FB] text-[#111827] overflow-x-hidden selection:bg-[#1646AF] selection:text-white transition-opacity duration-300 ${
        isExiting ? 'opacity-0 scale-[0.99] pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Decorative Ambient Radial Elements */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1646AF]/5 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#133C99]/5 blur-3xl" />
      </div>

      {/* ============================================================
          CINEMATIC FULL-SCREEN PRODUCT BANNER
          Features center-to-left machine animation and staggered text
          ============================================================ */}
      <section className="relative z-10 w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-10 xl:px-14 py-5 sm:py-6 lg:py-5">
        
        {/* Subtle Top Cue (Clean & minimal, NO header, NO menu, NO navigation items) */}
        <div className="w-full flex items-center justify-between pt-1">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#1646AF] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1646AF]">
              AUREX • Biotechnology & Laboratory Automation
            </span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="hidden sm:flex items-center gap-2 text-xs text-[#64748B] font-medium"
          >
            <span>Product Introduction</span>
            <span className="text-[#BFBFBF]">•</span>
            <span className="text-[#133C99] font-semibold">SmarLumi™ FC-2100</span>
          </motion.div>
        </div>

        {/* Cinematic Hero Composition */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center my-auto py-4 lg:py-0">
          
          {/* ============================================================
              LEFT COLUMN: Cinematic Machine Entrance Animation
              Starts centered at scale 1.15, then moves smoothly to the left
              ============================================================ */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: isDesktop ? '30%' : 0, scale: 1.15 }
            }
            animate={{
              opacity: 1,
              x: phase === 'settled' || !isDesktop ? 0 : '30%',
              scale: phase === 'settled' ? 1.0 : 1.15
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1] // Premium smooth cubic bezier curve
            }}
            className="lg:col-span-7 flex justify-center items-center relative order-1 z-20"
          >
            {/* The Machine Image is displayed DIRECTLY against the #F6F8FB background with true alpha transparency */}
            <div className="relative w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[780px] flex items-center justify-center">
              <Image
                src="/images/smarlumi-fc-2100.png"
                alt="SmarLumi™ FC-2100 Fully Automated Chemiluminescence Immunoassay Analyzer"
                width={1400}
                height={1177}
                className="w-full h-auto object-contain max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] xl:max-h-[560px] select-none"
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 58vw"
              />
            </div>
          </motion.div>

          {/* ============================================================
              RIGHT COLUMN: Product Details Staggered Reveal
              Reveals only after the machine has begun settling into position
              ============================================================ */}
          <motion.div
            variants={rightColumnContainerVariants}
            initial="hidden"
            animate={phase === 'settled' ? 'visible' : 'hidden'}
            className="lg:col-span-5 flex flex-col justify-center order-2 text-left space-y-3 xl:space-y-3.5 z-10"
          >
            {/* Eyebrow Label */}
            <motion.div variants={childItemVariants} className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#1646AF]/10 text-[#1646AF] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase border border-[#1646AF]/20">
                AUREX PROUDLY INTRODUCES
              </span>
            </motion.div>

            {/* Main Title & Category */}
            <motion.div variants={childItemVariants} className="space-y-1">
              <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-black tracking-tight text-[#111827] leading-tight">
                SmarLumi™ FC-2100
              </h1>
              <h2 className="text-xs sm:text-sm xl:text-base font-semibold text-[#133C99] tracking-normal leading-snug">
                Fully Automated Chemiluminescence Immunoassay Analyzer
              </h2>
            </motion.div>

            {/* Short Product Description */}
            <motion.p variants={childItemVariants} className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl">
              SmarLumi™ FC-2100 is a compact, benchtop chemiluminescence immunoassay analyzer engineered for clinical laboratories, delivering rapid results with uncompromised precision and automated workflow.
            </motion.p>

            {/* Compact Specifications Grid */}
            <motion.div variants={childItemVariants} className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
              {primarySpecs.map((spec, index) => {
                const SpecIcon = spec.icon
                return (
                  <div
                    key={index}
                    className="p-2 sm:p-2.5 rounded-lg bg-white/90 border border-[#BFBFBF]/40 shadow-xs flex items-center gap-2.5 transition-all duration-200 hover:border-[#1646AF]/50 hover:bg-white"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#F6F8FB] border border-[#BFBFBF]/30 flex items-center justify-center text-[#1646AF] shrink-0">
                      <SpecIcon size={14} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider leading-none">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-[#111827] leading-tight mt-0.5 truncate">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* Testing Areas Indicator Badge */}
            <motion.div
              variants={childItemVariants}
              className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-[#BFBFBF]/30 text-xs text-[#64748B]"
            >
              <Activity size={14} className="text-[#1646AF] shrink-0" />
              <span className="font-semibold text-[#111827] text-[11px] sm:text-xs">Clinical Panels:</span>
              <span className="text-[11px] sm:text-xs text-[#64748B] truncate">
                Cardiac • Thyroid • Tumor • Infectious Disease
              </span>
            </motion.div>

            {/* Explore AUREX Button (Navigates to main website) */}
            <motion.div variants={childItemVariants} className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleExploreAurex}
                aria-label="Explore AUREX main website"
                className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Explore AUREX</span>
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-300 group-hover:translate-x-1.5" 
                />
              </button>
            </motion.div>

          </motion.div>

        </div>

        {/* ============================================================
            BOTTOM CENTER: LARGE CONTINUOUSLY ANIMATED DOWN ARROW
            Guides visitor to enter the main website; clicks to navigate
            ============================================================ */}
        <div className="w-full flex flex-col items-center justify-center pt-2 pb-1 relative z-30">
          <button
            onClick={handleExploreAurex}
            aria-label="Explore AUREX main website"
            className="group flex flex-col items-center justify-center p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133C99] cursor-pointer"
          >
            <motion.div
              animate={prefersReducedMotion ? false : { y: [0, 8, 0] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 border-2 border-[#133C99] text-[#133C99] group-hover:bg-[#133C99] group-hover:text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
            >
              <ChevronDown size={26} className="stroke-[2.5] transition-colors" />
            </motion.div>
            <span className="text-[11px] font-bold text-[#133C99] tracking-wider uppercase mt-1.5 group-hover:text-[#1646AF] transition-colors">
              Explore AUREX
            </span>
          </button>
        </div>

      </section>

    </main>
  )
}
