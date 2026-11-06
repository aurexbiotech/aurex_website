'use client'

import React, { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  MessageSquare,
  FileText,
  Sliders,
  HeartPulse,
  Search,
  Zap,
  Activity,
  Monitor,
  RefreshCw,
  Pipette,
  Gauge,
  Play,
  FileDown,
  ChevronDown,
  HelpCircle
} from 'lucide-react'
import Footer from '@/components/Footer'

interface TestItem {
  name: string
  available: boolean
}

interface TestCategory {
  id: string
  name: string
  code: string
  description: string
  tests: TestItem[]
}

const FC2100_FAQS = [
  {
    question: 'What is the throughput and speed of the SmarLumi FC-2100?',
    answer: 'The SmarLumi FC-2100 delivers a high throughput of 200 tests per hour (T/h) with time to first diagnostic result in less than 12 minutes within an ultra-compact 0.64 m² footprint.'
  },
  {
    question: 'How many diagnostic tests are available on the FC-2100 analyzer?',
    answer: 'The FC-2100 features a comprehensive 119-test menu spanning 19 clinical categories including high-sensitivity Cardiac markers (hs-cTnI, NT-proBNP), Thyroid, Fertility, Tumor Markers (CA125, CEA, AFP), Thrombus (D-Dimer), Inflammation (PCT, IL-6), Hypertension, TORCH, and Infectious Diseases.'
  },
  {
    question: 'Does the SmarLumi FC-2100 support STAT emergency samples?',
    answer: 'Yes, the FC-2100 features dedicated STAT priority processing with continuous sample loading across 60 sample positions and 25 refrigerated reagent positions.'
  },
  {
    question: 'Does the FC-2100 support bidirectional LIS connectivity?',
    answer: 'Yes, the FC-2100 features bidirectional LIS communication supporting ASTM and HL7 protocols for automated worklist downloads, barcode scanning, and direct diagnostic report transmission.'
  },
  {
    question: 'Does AUREX Biotech provide on-site installation, calibration, and support in India?',
    answer: 'Yes, AUREX Biotech provides nationwide on-site installation, clinical application training, preventive maintenance, and 24/7 technical hotline support (+91 95439 10101 / sales@aurexbiotech.in).'
  }
]

const TEST_MENU: TestCategory[] = [
  {
    id: 'cardiac',
    code: 'A',
    name: 'Cardiac',
    description: 'High-sensitivity myocardial infarction, heart failure & cardiovascular risk markers',
    tests: [
      { name: 'cTnT', available: true },
      { name: 'BNP', available: true },
      { name: 'MYO', available: true },
      { name: 'hs-cTnI', available: true },
      { name: 'Lp-PLA2', available: true },
      { name: 'CK-MB', available: true },
      { name: 'NT-proBNP', available: true },
      { name: 'ST2', available: true },
      { name: 'HCY', available: false }
    ]
  },
  {
    id: 'fertility',
    code: 'B',
    name: 'Fertility',
    description: 'Reproductive endocrinology, ovarian reserve & hormone evaluation assays',
    tests: [
      { name: 'AMH', available: true },
      { name: 'β-HCG', available: true },
      { name: 'TESTO', available: true },
      { name: 'PROG', available: true },
      { name: 'E2', available: true },
      { name: 'PRL', available: true },
      { name: 'LH', available: true },
      { name: 'FSH', available: true },
      { name: 'InhB', available: true },
      { name: 'DHEA-S', available: true },
      { name: '17-OH P', available: true },
      { name: 'Free TESTO', available: true }
    ]
  },
  {
    id: 'tumor-markers',
    code: 'C',
    name: 'Tumor Markers',
    description: 'Comprehensive oncological monitoring, screening & therapeutic response markers',
    tests: [
      { name: 'CA50', available: true },
      { name: 'CA242', available: true },
      { name: 'CYFRA21-1', available: true },
      { name: 'SCCA', available: true },
      { name: 'HE4', available: true },
      { name: 'NSE', available: true },
      { name: 'CA72-4', available: true },
      { name: 'CEA', available: true },
      { name: 'CA15-3', available: true },
      { name: 'CA125', available: true },
      { name: 'CA19-9', available: true },
      { name: 'ProGRP', available: true },
      { name: 'AFP', available: true },
      { name: 'PIVKA-II', available: true },
      { name: 'FPSA', available: true },
      { name: 'TPSA', available: true }
    ]
  },
  {
    id: 'craniocerebral',
    code: 'D',
    name: 'Craniocerebral Injury',
    description: 'Acute central nervous system & traumatic brain injury biomarkers',
    tests: [
      { name: 'S100β', available: true }
    ]
  },
  {
    id: 'gastric',
    code: 'E',
    name: 'Gastric Function',
    description: 'Mucosal evaluation, atrophic gastritis screening & gastric cancer risk profiling',
    tests: [
      { name: 'G-17', available: true },
      { name: 'PGI', available: true },
      { name: 'PGII', available: true },
      { name: 'H.pylori Ab', available: true }
    ]
  },
  {
    id: 'thrombus',
    code: 'F',
    name: 'Thrombus',
    description: 'Active coagulation cascade, fibrinolysis & deep vein thrombosis evaluation',
    tests: [
      { name: 'TM', available: true },
      { name: 'TAT', available: true },
      { name: 'FDP', available: true },
      { name: 'PIC', available: true },
      { name: 't-PAIC', available: true },
      { name: 'D-Dimer', available: true }
    ]
  },
  {
    id: 'thyroid',
    code: 'G',
    name: 'Thyroid',
    description: 'Complete thyrometabolic axis, autoimmune thyroiditis & thyroid oncology assays',
    tests: [
      { name: 'TSH', available: true },
      { name: 'FT3', available: true },
      { name: 'FT4', available: true },
      { name: 'TT3', available: true },
      { name: 'TT4', available: true },
      { name: 'Anti-TPO', available: true },
      { name: 'Anti-Tg', available: true },
      { name: 'Tg', available: true },
      { name: 'CT', available: false },
      { name: 'T-Uptake', available: false },
      { name: 'TBG', available: false },
      { name: 'TRAb', available: false },
      { name: 'TSAb', available: false },
      { name: 'rT3', available: false }
    ]
  },
  {
    id: 'pre-eclampsia',
    code: 'H',
    name: 'Pre-Eclampsia',
    description: 'Early gestational angiogenic balance & hypertensive pregnancy screening',
    tests: [
      { name: 'PLGF', available: true },
      { name: 'sFlt-1', available: true }
    ]
  },
  {
    id: 'kidney',
    code: 'I',
    name: 'Kidney Function',
    description: 'Early renal tubular injury & acute kidney injury (AKI) surveillance',
    tests: [
      { name: 'NGAL', available: true }
    ]
  },
  {
    id: 'bone-metabolism',
    code: 'J',
    name: 'Bone Metabolism',
    description: 'Calcium homeostasis, parathyroid function & osteometabolic disorder markers',
    tests: [
      { name: '25-OH VD', available: true },
      { name: 'PTH', available: true },
      { name: 'Calcitionin', available: false }
    ]
  },
  {
    id: 'anemia',
    code: 'K',
    name: 'Anemia',
    description: 'Iron storage evaluation, erythropoiesis & nutritional megaloblastic profiling',
    tests: [
      { name: 'Ferritin', available: true },
      { name: 'Folate', available: true },
      { name: 'VB12', available: true }
    ]
  },
  {
    id: 'hypertension',
    code: 'L',
    name: 'Hypertension',
    description: 'Renin-angiotensin-aldosterone axis & adrenal cortical endocrine diagnostics',
    tests: [
      { name: 'REN', available: true },
      { name: 'Cortisol', available: true },
      { name: 'AI', available: true },
      { name: 'A II', available: true },
      { name: 'ACTH', available: true },
      { name: 'ALD', available: true }
    ]
  },
  {
    id: 'inflammation',
    code: 'M',
    name: 'Inflammation',
    description: 'Acute phase response, severe bacterial infection & sepsis differentiation',
    tests: [
      { name: 'IL-6', available: true },
      { name: 'PCT', available: true },
      { name: 'SAA', available: true },
      { name: 'CRP', available: false }
    ]
  },
  {
    id: 'infectious-disease',
    code: 'N',
    name: 'Infectious Disease',
    description: 'Hepatitis viral markers, retroviral screening & atypical respiratory serology',
    tests: [
      { name: 'HBeAg', available: true },
      { name: 'Anti-HBe', available: true },
      { name: 'Anti-HBc', available: true },
      { name: 'HBsAg', available: true },
      { name: 'Anti-HBs', available: true },
      { name: 'Anti-TP', available: true },
      { name: 'HIV Ag/Ab', available: true },
      { name: 'Anti-HCV', available: true },
      { name: 'M. Pneumonia IgG', available: true },
      { name: 'M. Pneumonia IgM', available: true },
      { name: 'Chlamydia pn. IgG', available: false },
      { name: 'Chlamydia pn. IgM', available: false }
    ]
  },
  {
    id: 'growth-hormone',
    code: 'O',
    name: 'Growth Hormone',
    description: 'Somatotropic pituitary axis & developmental endocrine diagnostics',
    tests: [
      { name: 'GH', available: false },
      { name: 'IGF-1', available: false },
      { name: 'IGFBP-3', available: false }
    ]
  },
  {
    id: 'torch',
    code: 'P',
    name: 'TORCH',
    description: 'Congenital & perinatal infectious antibody profiling (IgG/IgM)',
    tests: [
      { name: 'TOXO IgG', available: true },
      { name: 'TOXO IgM', available: true },
      { name: 'Rubella IgG', available: true },
      { name: 'Rubella IgM', available: true },
      { name: 'CMV IgG', available: true },
      { name: 'CMV IgM', available: true },
      { name: 'HSV-1 IgG', available: true },
      { name: 'HSV-1 IgM', available: true },
      { name: 'HSV-2 IgG', available: true },
      { name: 'HSV-2 IgM', available: true }
    ]
  },
  {
    id: 'liver-fibrosis',
    code: 'Q',
    name: 'Liver Fibrosis',
    description: 'Extracellular matrix turnover & chronic hepatic fibrogenesis assessment',
    tests: [
      { name: 'HA', available: false },
      { name: 'CIV', available: false },
      { name: 'PIIINP', available: false },
      { name: 'LN', available: false }
    ]
  },
  {
    id: 'autoimmune',
    code: 'R',
    name: 'Autoimmune',
    description: 'Systemic autoimmune screening, connective tissue & immune globulin panels',
    tests: [
      { name: 'IgE', available: true },
      { name: 'ANA Screen', available: true },
      { name: 'Anti-CCP', available: true },
      { name: 'Anti-ds DNA', available: true },
      { name: 'IgA', available: false },
      { name: 'IgG', available: false },
      { name: 'IgM', available: false }
    ]
  },
  {
    id: 'diabetes',
    code: 'S',
    name: 'Diabetes',
    description: 'Endogenous pancreatic beta-cell reserve & insulin secretion quantification',
    tests: [
      { name: 'Insulin', available: true },
      { name: 'C-Peptide', available: true }
    ]
  }
]

export default function FC2100ProductPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true)
          })
          .catch(() => {
            // Autoplay was blocked by browser policy; user can tap manual play button
            setIsVideoPlaying(false)
          })
      }
    }
  }, [])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  // Total test count calculation across all 19 categories
  const totalTestCount = useMemo(() => {
    return TEST_MENU.reduce((sum, cat) => sum + cat.tests.length, 0)
  }, [])

  // In development and available counts
  const inDevelopmentCount = useMemo(() => {
    return TEST_MENU.reduce((sum, cat) => sum + cat.tests.filter(t => !t.available).length, 0)
  }, [])

  const availableCount = useMemo(() => {
    return TEST_MENU.reduce((sum, cat) => sum + cat.tests.filter(t => t.available).length, 0)
  }, [])

  // Filtered categories based on search input & tab selection
  const filteredCategories = useMemo(() => {
    return TEST_MENU.map((category) => {
      // If a specific category is selected, match it
      if (selectedCategory !== 'all' && selectedCategory !== 'in-development' && selectedCategory !== 'available') {
        if (category.id !== selectedCategory) return null
      }

      let tests = category.tests

      // Filter by development status if active
      if (selectedCategory === 'in-development') {
        tests = tests.filter(t => !t.available)
      } else if (selectedCategory === 'available') {
        tests = tests.filter(t => t.available)
      }

      // Filter by search query if typed
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matchesCategoryName = category.name.toLowerCase().includes(query)
        if (!matchesCategoryName) {
          tests = tests.filter(t => t.name.toLowerCase().includes(query))
        }
      }

      // If no tests remain in this category after filtering, exclude it
      if (tests.length === 0) return null

      return {
        ...category,
        tests
      }
    }).filter((c): c is TestCategory => c !== null)
  }, [searchQuery, selectedCategory])

  const technicalSpecifications = [
    { parameter: 'Methodology', specification: 'Chemiluminescence Immunoassay (CLIA)' },
    { parameter: 'Dimension', specification: '900 mm × 710 mm × 590 mm' },
    { parameter: 'Weight', specification: '140 kg' },
    { parameter: 'Throughput', specification: '200 T/h' },
    { parameter: 'Time for first result', specification: 'Less than 12 minutes' },
    { parameter: 'Reagent position', specification: '25' },
    { parameter: 'Reagent specification', specification: '25 or 50 T/Bottle' },
    { parameter: 'Reagent refrigeration', specification: '2–8°C on-board refrigeration' },
    { parameter: 'Sample position', specification: '60' },
    { parameter: 'Sample volume', specification: '5–150 μL' },
    { parameter: 'Sample type', specification: 'Whole blood / Serum / Plasma / Urine / Cerebrospinal fluid' },
    { parameter: 'Test mode', specification: 'Batch / STAT' },
    { parameter: 'Probe system', specification: 'Liquid level detection / Block detection / Collision protection' },
    { parameter: 'Storage capacity', specification: '≥ 60000 results' },
    { parameter: 'Operation system', specification: '15.6-inch touch screen / Windows 10 / Bidirectional LIS compatible' }
  ]

  const featureGroups = [
    {
      group: 'A. Flexibility & Efficiency',
      tag: 'Peak Productivity',
      icon: <Zap className="text-[#1646AF]" size={22} />,
      points: [
        'STAT mode supported for emergency clinical priority.',
        'Only 0.64 m² footprint with 60 high-capacity sample positions.',
        'Less than 12 minutes for the first diagnostic result.',
        'High throughput delivering 200 tests per hour.',
        'RFID management for effortless, contactless reagent loading.'
      ]
    },
    {
      group: 'B. Better User Experience',
      tag: 'Ergonomic Workflow',
      icon: <Monitor className="text-[#1646AF]" size={22} />,
      points: [
        'Built-in touch screen operation for intuitive instrument handling.',
        'Seamless bidirectional LIS communication with central laboratory servers.',
        'Visual management of consumables and reagents with live status prompts.',
        'Cuvettes loading by dumping — zero manual tube orientation required.',
        'Continuous loading and offloading of reagents and samples during operation.'
      ]
    },
    {
      group: 'C. Fully Automatic Analyzer',
      tag: 'Hands-Free Automation',
      icon: <RefreshCw className="text-[#1646AF]" size={22} />,
      points: [
        'Primary tube sampling without secondary aliquoting.',
        'Automatic barcode identification for both patient samples and reagent kits.',
        'Automatic dilution function for concentrated and high-titer specimens.',
        'Automatic rerun capability triggered by out-of-range clinical criteria.'
      ]
    },
    {
      group: 'D. Smart & Accurate Machine System',
      tag: 'Analytical Precision',
      icon: <ShieldCheck className="text-[#1646AF]" size={22} />,
      points: [
        'Negligible carry-over is ≤ 0.5 ppm for pristine analytical integrity.',
        'Constant 2–8°C onboard reagent refrigeration guaranteeing active potency.',
        'Needle collision protection and sensitive block/clot detection.',
        'High-precision liquid level detection for micro-volume sample aspirating.',
        'Automatic switching of double substrate bottles during uninterrupted runs.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#111827]">
      {/* Top Breadcrumb Navigation with Accessible Home Icon */}
      <nav 
        aria-label="Breadcrumb"
        className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-[58px] sm:top-[68px] z-40 shadow-xs"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <ol className="flex items-center gap-2.5 text-xs sm:text-sm list-none p-0 m-0">
            <li>
              <Link 
                href="/biotra" 
                aria-label="Home"
                title="Home"
                className="inline-flex items-center justify-center p-1.5 rounded-lg text-[#1646AF] hover:text-[#133C99] hover:bg-[#F6F8FB] transition-all cursor-pointer"
              >
                <Home size={18} className="stroke-[2.2]" />
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link 
                href="/products" 
                className="font-medium text-[#64748B] hover:text-[#1646AF] transition-colors"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <span className="font-bold text-[#133C99]">
                SmarLumi FC-2100
              </span>
            </li>
          </ol>
          
          <div className="text-xs font-semibold text-[#64748B] hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>CLIA Immunoassay • 200 T/h • 19 Clinical Panels</span>
          </div>
        </div>
      </nav>

      {/* SECTION 1: Product Hero (White Theme Redesign & Autoplay Video Integration) */}
      <header className="relative bg-white text-[#111827] py-8 sm:py-12 lg:py-16 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Product Information (Refined, Compact Font Sizes) */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1646AF]/10 border border-[#1646AF]/20 text-[11px] sm:text-xs font-bold tracking-wide text-[#1646AF]">
                <Sparkles size={13} />
                <span>Next-Generation Chemiluminescence Immunoassay (CLIA)</span>
              </div>
              
              {/* Headings */}
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#133C99]">
                  SmarLumi FC-2100
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-[#1646AF] font-bold leading-snug">
                  Automatic Chemiluminescence Immunoassay Analyzer
                </p>
              </div>

              {/* Verified Source Documentation Attribution */}
              <div className="p-3 rounded-xl bg-[#F6F8FB] border border-gray-200 text-[11px] sm:text-xs text-[#64748B] leading-relaxed text-left max-w-xl mx-auto lg:mx-0">
                <p className="font-semibold text-[#111827]">Source Specifications:</p>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  Manufactured by <strong className="text-[#133C99]">Guangzhou Wondfo Biotech Co., Ltd.</strong> • Distributed & Supported across Diagnostic Networks by <strong className="text-[#1646AF]">AUREX Biotech</strong>
                </p>
              </div>
              
              {/* Product Description */}
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mx-auto lg:mx-0">
                A benchtop immunoassay powerhouse combining enzymatic chemiluminescence (CLIA) with high-efficiency magnetic microbead technology. Delivering 200 tests per hour and first results in less than 12 minutes within an ultra-compact 0.64 m² footprint.
              </p>

              {/* Quick Specification Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5 text-xs font-semibold">
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#F6F8FB] border border-gray-200 text-center">
                  <div className="text-[#133C99] font-extrabold text-sm sm:text-base">200 T/h</div>
                  <div className="text-[10px] text-[#64748B] font-medium">Throughput</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#F6F8FB] border border-gray-200 text-center">
                  <div className="text-[#133C99] font-extrabold text-sm sm:text-base">&lt; 12 min</div>
                  <div className="text-[10px] text-[#64748B] font-medium">First Result</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#F6F8FB] border border-gray-200 text-center">
                  <div className="text-[#133C99] font-extrabold text-sm sm:text-base">0.64 m²</div>
                  <div className="text-[10px] text-[#64748B] font-medium">Footprint</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#F6F8FB] border border-gray-200 text-center">
                  <div className="text-[#133C99] font-extrabold text-sm sm:text-base">60 / 25</div>
                  <div className="text-[10px] text-[#64748B] font-medium">Samples / Reagents</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1.5 flex flex-wrap gap-2.5 justify-center lg:justify-start">
                <Link
                  href="/contact?subject=Quotation%20Request%20for%20SmarLumi%20FC-2100"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#133C99] hover:bg-[#1646AF] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-2xs hover:shadow-xs transition-all duration-300 text-center"
                >
                  <MessageSquare size={15} />
                  <span>Request Quotation</span>
                </Link>

                <a
                  href="/documents/smarlumi-fc-2100-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="SmarLumi-FC-2100-Brochure-AUREX.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-2xs hover:shadow-xs transition-all duration-300 text-center cursor-pointer"
                >
                  <FileDown size={15} />
                  <span>Download Brochure (PDF)</span>
                </a>

                <Link
                  href="/contact?subject=FC-2100%20Technical%20Consultation"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#F6F8FB] text-[#133C99] font-semibold text-xs sm:text-sm rounded-lg border border-gray-300 hover:border-[#133C99] transition-all duration-300 text-center"
                >
                  <FileText size={15} />
                  <span>Consult Technical Team</span>
                </Link>

                <a
                  href="#test-menu"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#F6F8FB] hover:bg-gray-100 text-[#64748B] hover:text-[#133C99] font-medium text-xs sm:text-sm rounded-lg border border-gray-200 transition-all duration-300 text-center"
                >
                  <HeartPulse size={14} />
                  <span>View 119 Tests</span>
                </a>
              </div>
            </div>

            {/* Right Column: Autoplay Demonstration Video (Large Size Display) */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-full lg:max-w-[700px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-auto max-h-[460px] sm:max-h-[540px] lg:max-h-[620px] object-contain rounded-2xl mx-auto block shadow-xs"
                  aria-label="SmarLumi FC-2100 Automatic Chemiluminescence Immunoassay Analyzer Demonstration Video"
                >
                  <source src="/videos/fc-2100-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Manual Play Fallback in case browser prevents autoplay */}
                {!isVideoPlaying && (
                  <button
                    type="button"
                    onClick={handlePlayVideo}
                    aria-label="Play Product Video"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#133C99]/90 hover:bg-[#1646AF] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 z-20 cursor-pointer"
                  >
                    <Play size={28} className="translate-x-0.5 fill-current" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* SECTION 2: Product Overview */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1646AF]/10 text-[#1646AF] text-xs font-bold tracking-wider uppercase">
              <Activity size={14} />
              <span>Diagnostic Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              SmarLumi FC-2100 Product Overview
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              The <strong>SmarLumi FC-2100</strong> is an advanced, fully automatic Chemiluminescence Immunoassay Analyzer manufactured by Guangzhou Wondfo Biotech Co., Ltd. and integrated into the comprehensive diagnostic portfolio of AUREX Biotech. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              <div className="p-5 rounded-2xl bg-[#F6F8FB] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-3">
                  <Gauge size={20} />
                </div>
                <h3 className="font-bold text-[#111827] text-base mb-1">Ultra-High Throughput</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Generates up to <strong>200 tests per hour</strong> with first results ready in <strong>less than 12 minutes</strong>, ensuring rapid turnaround for hospital emergency departments and busy clinical laboratories.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F6F8FB] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-3">
                  <Layers size={20} />
                </div>
                <h3 className="font-bold text-[#111827] text-base mb-1">0.64 m² Minimal Footprint</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Accommodates <strong>60 sample positions</strong> and <strong>25 refrigerated reagent positions</strong> within just <strong>0.64 m²</strong> of laboratory bench space, optimizing floor efficiency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F6F8FB] border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#1646AF]/10 text-[#1646AF] flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-[#111827] text-base mb-1">Uncompromising Accuracy</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Maintains analytical carry-over at <strong>≤ 0.5 ppm</strong> with 2–8°C constant reagent refrigeration, probe collision protection, liquid level detection, and intelligent auto-dilution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Complete Product Features (All 4 Feature Groups from PDF) */}
      <section className="py-14 sm:py-20 bg-[#F6F8FB] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1646AF]/10 text-[#1646AF] text-xs font-bold tracking-wider uppercase">
              <Sparkles size={14} />
              <span>Core Operational Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Complete Product Features
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Every feature group extracted verbatim from verified technical documentation to provide full operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featureGroups.map((group, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1646AF]/10">
                        {group.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#111827]">
                          {group.group}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#1646AF] uppercase tracking-wider">
                          {group.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-4">
                    {group.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                        <CheckCircle2 size={17} className="text-[#1646AF] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Technical Specifications & Dilution System */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1646AF]/10 text-[#1646AF] text-xs font-bold tracking-wider uppercase">
              <Sliders size={14} />
              <span>Verified Laboratory Data</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Technical Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Complete parameter data exactly as certified in the official technical documentation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Specifications Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
              <div className="bg-[#133C99] text-white p-4 sm:p-5 flex items-center justify-between">
                <span className="font-bold text-sm sm:text-base">Instrument Parameters</span>
                <span className="text-xs text-blue-200">SmarLumi FC-2100 Verified Standards</span>
              </div>
              <div className="divide-y divide-gray-100">
                {technicalSpecifications.map((spec, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-1.5 sm:gap-4 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F6F8FB]/60'
                    }`}
                  >
                    <div className="sm:col-span-5 text-xs sm:text-sm font-bold text-[#111827] flex items-center">
                      {spec.parameter}
                    </div>
                    <div className="sm:col-span-7 text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                      {spec.specification}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DILUTION FUNCTION Dedicated Highlight Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#F6F8FB] to-white border border-[#1646AF]/30 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#1646AF] text-white">
                  <Pipette size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                    Advanced Dilution Functionality
                  </h3>
                  <p className="text-xs text-[#64748B]">Integrated microfluidic sample handling capabilities</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#133C99] mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#133C99]/10 flex items-center justify-center text-[11px]">1</span>
                    <span>Support Automatic Dilution</span>
                  </div>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">
                    Automated onboard pre-dilution and onboard sample preparation without manual pipetting steps.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#133C99] mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#133C99]/10 flex items-center justify-center text-[11px]">2</span>
                    <span>Fixed Multiple Dilution</span>
                  </div>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">
                    User-configured fixed dilution ratios for standardized high-concentration specimen protocols.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#133C99] mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#133C99]/10 flex items-center justify-center text-[11px]">3</span>
                    <span>Exceeded Linearity Dilution</span>
                  </div>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">
                    Automatic remeasurement dilution whenever initial results exceed the analytical measurement range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Complete Test Menu (All 19 Categories & All 119 Individual Tests) */}
      <section id="test-menu" className="py-14 sm:py-20 bg-[#F6F8FB] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1646AF]/10 text-[#1646AF] text-xs font-bold tracking-wider uppercase">
              <HeartPulse size={14} />
              <span>Comprehensive Diagnostic Repertoire</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Complete Test Menu
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Featuring all <strong>19 clinical categories</strong> and <strong>{totalTestCount} individual diagnostic assays</strong> from the official SmarLumi FC-2100 technical specification.
            </p>

            {/* Test Status Legend (Matching Official Brochure) */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 pb-1 text-xs sm:text-sm font-semibold">
              <button
                type="button"
                onClick={() => setSelectedCategory(selectedCategory === 'available' ? 'all' : 'available')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === 'available'
                    ? 'bg-[#1646AF] text-white ring-2 ring-[#1646AF]/30 shadow-xs'
                    : 'bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 text-[#133C99]'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedCategory === 'available' ? 'bg-white' : 'bg-[#1646AF]'} shadow-2xs`} />
                <span>Available ({availableCount})</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory(selectedCategory === 'in-development' ? 'all' : 'in-development')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === 'in-development'
                    ? 'bg-[#1E293B] text-white ring-2 ring-[#1E293B]/30 shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-300/80 text-[#1E293B]'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${selectedCategory === 'in-development' ? 'bg-white' : 'bg-[#1E293B]'} shadow-2xs`} />
                <span>In Development ({inDevelopmentCount})</span>
              </button>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search specific test or panel (e.g. Troponin, TSH, CA125, NGAL, S100β, D-Dimer)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white border border-gray-300 rounded-xl text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1646AF] focus:border-transparent shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600 px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Category Jump Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#133C99] text-white shadow-xs'
                    : 'bg-white text-[#64748B] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All 19 Panels ({totalTestCount} Assays)
              </button>

              {/* In Development Filter Pill */}
              <button
                onClick={() => setSelectedCategory(selectedCategory === 'in-development' ? 'all' : 'in-development')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'in-development'
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'bg-white text-[#1E293B] hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${selectedCategory === 'in-development' ? 'bg-white' : 'bg-[#1E293B]'}`} />
                <span>In Development ({inDevelopmentCount})</span>
              </button>

              {/* Available Filter Pill */}
              <button
                onClick={() => setSelectedCategory(selectedCategory === 'available' ? 'all' : 'available')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'available'
                    ? 'bg-[#1646AF] text-white shadow-xs'
                    : 'bg-white text-[#133C99] hover:bg-gray-100 border border-blue-200'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${selectedCategory === 'available' ? 'bg-white' : 'bg-[#1646AF]'}`} />
                <span>Available ({availableCount})</span>
              </button>

              {TEST_MENU.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-[#133C99] text-white shadow-xs'
                      : 'bg-white text-[#64748B] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {c.code}. {c.name} ({c.tests.length})
                </button>
              ))}
            </div>
          </div>

          {/* Test Menu Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredCategories.length === 0 ? (
              <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-gray-200 p-8">
                <Search size={32} className="mx-auto text-gray-300 mb-2" />
                <p className="text-base font-bold text-gray-700">No tests matching &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-gray-500 mt-1">Try searching by abbreviation (e.g. PCT, cTnT, CEA, TSH) or reset the filter.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
                  className="mt-4 px-4 py-2 bg-[#1646AF] text-white text-xs font-semibold rounded-lg"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <div 
                  key={cat.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-xs hover:border-[#1646AF]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Letter Code & Count Badge */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#133C99] text-white flex items-center justify-center text-xs font-bold">
                          {cat.code}
                        </span>
                        <h3 className="text-base font-bold text-[#111827]">
                          {cat.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#1646AF]/10 text-[#1646AF]">
                        {cat.tests.length} {cat.tests.length === 1 ? 'Test' : 'Tests'}
                      </span>
                    </div>

                    <p className="text-[12px] text-[#64748B] mb-4 line-clamp-2">
                      {cat.description}
                    </p>

                    {/* Chips of Tests */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {cat.tests.map((test, tIdx) => (
                        <span 
                          key={tIdx}
                          title={test.available ? 'Available' : 'In Development'}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
                            test.available
                              ? 'bg-[#F6F8FB] hover:bg-blue-50 border border-gray-200 font-semibold text-[#1E293B]'
                              : 'bg-gray-100/75 hover:bg-gray-100 border border-gray-300/80 font-medium text-[#475569]'
                          }`}
                        >
                          <span 
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              test.available 
                                ? 'bg-[#1646AF] shadow-2xs' 
                                : 'bg-[#1E293B]'
                            }`}
                          />
                          <span>{test.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SECTION: Frequently Asked Questions (FAQ) with Accordion */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#133C99] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200/80">
              <HelpCircle size={14} />
              <span>Diagnostic Technical Support & Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Common questions from laboratory directors and clinical pathologists regarding SmarLumi FC-2100 deployment.
            </p>
          </div>

          <div className="space-y-3.5">
            {FC2100_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111827] hover:text-[#1646AF] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-[#133C99] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Product Enquiry & Consultation */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              Integrate SmarLumi FC-2100 into Your Diagnostic Workflow
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Connect with AUREX Biotech clinical specialists to discuss instrument deployment, reagent logistics, LIS integration, and laboratory quotation packages.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/contact?subject=Quotation%20Request%20for%20SmarLumi%20FC-2100"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#133C99] hover:bg-[#F6F8FB] hover:text-[#1646AF] font-bold text-sm sm:text-base rounded-xl shadow-md transition-all duration-300"
              >
                <MessageSquare size={17} />
                <span>Request Quotation</span>
              </Link>
              <a
                href="/documents/smarlumi-fc-2100-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="SmarLumi-FC-2100-Brochure-AUREX.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all duration-300 cursor-pointer"
              >
                <FileDown size={17} />
                <span>Download Brochure (PDF)</span>
              </a>
              <Link
                href="/contact?subject=FC-2100%20Technical%20Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 transition-all duration-300"
              >
                <FileText size={17} />
                <span>Contact Specialists</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
