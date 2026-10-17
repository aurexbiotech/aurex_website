'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  ChevronDown,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
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

// Extended technical highlights for in-depth section
const technicalHighlights = [
  {
    icon: Cpu,
    title: 'Advanced Chemiluminescence Detection',
    description: 'High-sensitivity photomultiplier tube (PMT) optical measurement engineered for ultra-low background noise and broad linear range.'
  },
  {
    icon: Layers,
    title: 'Integrated Reagent Refrigeration',
    description: 'Continuous 2–8°C on-board cooling ensures long reagent open-vial stability without manual loading or unloading.'
  },
  {
    icon: Sparkles,
    title: 'Smart Barcode & RFID Traceability',
    description: 'Automatic sample barcode scanning, test menu identification, and dynamic tracking of reagent inventory and expiration dates.'
  }
]

export default function SmarLumiIntroductionPage() {
  const router = useRouter()
  const prefersReducedMotion = useReducedMotion()
  const nextSectionRef = useRef<HTMLElement>(null)
  
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

  // Smooth scroll to the next section when clicking the down arrow
  const scrollToNextSection = useCallback(() => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

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
      className={`relative w-full min-h-screen bg-[#F6F8FB] text-[#111827] overflow-x-hidden selection:bg-[#1646AF] selection:text-white transition-opacity duration-300 ${
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
          SECTION 1: CINEMATIC FIRST VIEWPORT (100vh / min-h-screen)
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
            {/* The Machine Image is displayed DIRECTLY against the #F6F8FB background with NO white box */}
            <div className="relative w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[780px] flex items-center justify-center">
              <Image
                src="/images/smarlumi-fc-2100.jpg"
                alt="SmarLumi™ FC-2100 Fully Automated Chemiluminescence Immunoassay Analyzer"
                width={1400}
                height={1177}
                className="w-full h-auto object-contain max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] xl:max-h-[560px] select-none mix-blend-multiply"
                style={{ mixBlendMode: 'multiply' }}
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
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Explore AUREX</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1.5" 
                />
              </button>

              <button
                onClick={scrollToNextSection}
                className="px-4 py-3 text-xs font-semibold text-[#133C99] hover:text-[#1646AF] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>System Overview</span>
                <ChevronDown size={14} />
              </button>
            </motion.div>

          </motion.div>

        </div>

        {/* ============================================================
            BOTTOM CENTER: LARGE CONTINUOUSLY ANIMATED DOWN ARROW
            Guides visitor to scroll down; clicks smoothly to next section
            ============================================================ */}
        <div className="w-full flex flex-col items-center justify-center pt-2 pb-1 relative z-30">
          <button
            onClick={scrollToNextSection}
            aria-label="Scroll to explore more specifications and About AUREX"
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
              Scroll to explore
            </span>
          </button>
        </div>

      </section>

      {/* ============================================================
          SECTION 2: IN-DEPTH PRODUCT SPECIFICATIONS & ABOUT AUREX
          Scrolled into view smoothly when clicking the animated down arrow
          ============================================================ */}
      <section 
        ref={nextSectionRef} 
        id="fc2100-system-details"
        className="relative z-10 py-16 sm:py-24 bg-white border-t border-[#BFBFBF]/30"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F8FB] border border-[#BFBFBF]/40 text-[#1646AF] text-xs font-semibold tracking-wider uppercase mb-3">
              Diagnostic Architecture & Specifications
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
              Engineered for High-Volume Laboratory Excellence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
              The SmarLumi™ FC-2100 sets a new benchmark in clinical laboratory automation, bringing together magnetic bead chemiluminescence precision and streamlined workflow operations in a compact footprint.
            </p>
          </div>

          {/* Three Key Architectural Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {technicalHighlights.map((highlight, index) => {
              const HighlightIcon = highlight.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-[#F6F8FB] border border-[#BFBFBF]/35 hover:border-[#1646AF]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#BFBFBF]/30 text-[#1646AF] flex items-center justify-center mb-4 shadow-2xs">
                      <HighlightIcon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#111827] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* About AUREX Company Overview Card */}
          <div className="rounded-2xl bg-[#F6F8FB] border border-[#BFBFBF]/40 p-6 sm:p-10 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/40 text-[#1646AF] text-xs font-semibold tracking-wider uppercase">
                  Company Introduction
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
                  About AUREX
                </h3>

                <p className="text-base sm:text-lg text-[#111827] leading-relaxed font-medium">
                  &ldquo;AUREX is focused on presenting innovative biotechnology and laboratory automation solutions through a commitment to quality, precision, and dependable technology.&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Empowering healthcare institutions with advanced in vitro diagnostics, scalable laboratory workflow engineering, and dedicated service infrastructure that bridges the gap between scientific discovery and dependable patient care.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1646AF] hover:text-[#133C99] transition-colors group"
                  >
                    <span>Learn More About AUREX</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 bg-white rounded-xl border border-[#BFBFBF]/40 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#1646AF] font-bold text-sm mb-1">
                    <ShieldCheck size={18} />
                    <span>Precision Engineering</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Repeatable analytical performance engineered with CV ≤5% diagnostic fidelity.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#BFBFBF]/40 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#1646AF] font-bold text-sm mb-1">
                    <CheckCircle2 size={18} />
                    <span>Automated Workflow</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Seamless LIS connectivity, barcode sample identification, and automated dilution.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Central Call-to-Action to Enter BIOTRA Website */}
          <div className="text-center pt-4">
            <button
              onClick={handleExploreAurex}
              aria-label="Explore BIOTRA and Full AUREX Website"
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] cursor-pointer"
            >
              <span>Explore Full AUREX Website</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <div className="mt-3">
              <span className="text-xs text-[#64748B]">
                Access complete instrument portfolio, diagnostics catalog, and support network
              </span>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
