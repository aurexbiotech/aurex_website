'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Building2, 
  Lock, 
  Mail, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  BarChart3, 
  Wrench, 
  Truck, 
  Sparkles,
  LogIn,
  RotateCcw,
  FolderKanban,
  Briefcase,
  Layers,
  ClipboardCheck,
  TrendingUp,
  Landmark,
  PieChart
} from 'lucide-react'

type PortalType = 'hrm' | 'crm' | 'projects' | 'investors'

export default function LoginPage() {
  const [activePortal, setActivePortal] = useState<PortalType>('hrm')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // HRM Form State
  const [hrmForm, setHrmForm] = useState({
    employeeId: '',
    department: 'Clinical Diagnostics Engineering',
    password: '',
    remember: true
  })

  // CRM Form State
  const [crmForm, setCrmForm] = useState({
    clientId: '',
    accountType: 'Hospital / Clinical Diagnostic Center',
    password: '',
    remember: true
  })

  // Projects Form State
  const [projectsForm, setProjectsForm] = useState({
    projectId: '',
    projectCategory: 'Turnkey Diagnostic Laboratory Commissioning',
    password: '',
    remember: true
  })

  // Investors Form State
  const [investorsForm, setInvestorsForm] = useState({
    investorId: '',
    shareholderCategory: 'Institutional / Venture Partner',
    password: '',
    remember: true
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Demo Autofill Helpers
  const fillHrmDemo = () => {
    setHrmForm({
      employeeId: 'EMP-4081 (Dr. Rajesh Kumar)',
      department: 'Clinical Diagnostics Engineering',
      password: '••••••••••••',
      remember: true
    })
    setErrorMessage(null)
  }

  const fillCrmDemo = () => {
    setCrmForm({
      clientId: 'CLI-8820 (Apollo Diagnostics)',
      accountType: 'Hospital / Clinical Diagnostic Center',
      password: '••••••••••••',
      remember: true
    })
    setErrorMessage(null)
  }

  const fillProjectsDemo = () => {
    setProjectsForm({
      projectId: 'PRJ-9040 (Apex Diagnostics Turnkey Setup)',
      projectCategory: 'Turnkey Diagnostic Laboratory Commissioning',
      password: '••••••••••••',
      remember: true
    })
    setErrorMessage(null)
  }

  const fillInvestorsDemo = () => {
    setInvestorsForm({
      investorId: 'INV-7020 (Aurex Healthcare Equity Partner)',
      shareholderCategory: 'Institutional / Venture Partner',
      password: '••••••••••••',
      remember: true
    })
    setErrorMessage(null)
  }

  // Handle Submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    const currentId = activePortal === 'hrm' 
      ? hrmForm.employeeId 
      : activePortal === 'crm' 
        ? crmForm.clientId 
        : activePortal === 'projects'
          ? projectsForm.projectId
          : investorsForm.investorId
    const currentPass = activePortal === 'hrm' 
      ? hrmForm.password 
      : activePortal === 'crm' 
        ? crmForm.password 
        : activePortal === 'projects'
          ? projectsForm.password
          : investorsForm.password

    if (!currentId.trim() || !currentPass.trim()) {
      setErrorMessage(
        activePortal === 'hrm' 
          ? 'Please enter your Employee ID or Corporate Email and Password.' 
          : activePortal === 'crm'
            ? 'Please enter your Partner Client ID or Email and Password.'
            : activePortal === 'projects'
              ? 'Please enter your Project ID or Engineer Code and Password.'
              : 'Please enter your Investor ID or Portfolio Email and Security Key.'
      )
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsAuthenticated(true)
    }, 1200)
  }

  const handleSignOut = () => {
    setIsAuthenticated(false)
    setHrmForm({
      employeeId: '',
      department: 'Clinical Diagnostics Engineering',
      password: '',
      remember: true
    })
    setCrmForm({
      clientId: '',
      accountType: 'Hospital / Clinical Diagnostic Center',
      password: '',
      remember: true
    })
    setProjectsForm({
      projectId: '',
      projectCategory: 'Turnkey Diagnostic Laboratory Commissioning',
      password: '',
      remember: true
    })
    setInvestorsForm({
      investorId: '',
      shareholderCategory: 'Institutional / Venture Partner',
      password: '',
      remember: true
    })
    setErrorMessage(null)
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#111827] flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <header className="w-full bg-white border-b border-gray-100 shadow-2xs py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/biotra" 
            className="flex flex-col items-start group focus-visible:outline-none"
            aria-label="AUREX Home"
          >
            <span className="text-2xl sm:text-3xl font-black text-[#1646AF] group-hover:text-[#133C99] transition-colors leading-none tracking-wider">
              AUREX
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#64748B] tracking-[0.24em] uppercase mt-1 leading-none">
              BIOTECH AUTOMATION
            </span>
          </Link>

          <Link
            href="/biotra"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#1646AF] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            <span>Back to Website</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          
          {/* Header Title & Portal Switcher */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/40 text-[#1646AF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
              <ShieldCheck size={14} />
              <span>SECURE ENTERPRISE PORTAL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-2">
              AUREX Management Systems
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto">
              Choose your dedicated workspace to access employee operations or clinical partner relations.
            </p>

            {/* Portal Tab Switcher (HRM vs CRM vs Projects vs Investors Management) */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 p-1.5 bg-white rounded-2xl border border-[#BFBFBF]/40 shadow-xs max-w-4xl w-full gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setActivePortal('hrm')
                  setIsAuthenticated(false)
                  setErrorMessage(null)
                }}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePortal === 'hrm'
                    ? 'bg-[#133C99] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#133C99] hover:bg-gray-50'
                }`}
              >
                <Users size={17} />
                <div className="text-left">
                  <div className="leading-tight">HRM Portal</div>
                  <div className={`text-[10px] font-normal ${activePortal === 'hrm' ? 'text-blue-200' : 'text-[#64748B]'}`}>
                    Staff & Payroll
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActivePortal('crm')
                  setIsAuthenticated(false)
                  setErrorMessage(null)
                }}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePortal === 'crm'
                    ? 'bg-[#1646AF] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#1646AF] hover:bg-gray-50'
                }`}
              >
                <Building2 size={17} />
                <div className="text-left">
                  <div className="leading-tight">CRM Portal</div>
                  <div className={`text-[10px] font-normal ${activePortal === 'crm' ? 'text-blue-200' : 'text-[#64748B]'}`}>
                    Hospital & Partner
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActivePortal('projects')
                  setIsAuthenticated(false)
                  setErrorMessage(null)
                }}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePortal === 'projects'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#0B1528] hover:bg-gray-50'
                }`}
              >
                <FolderKanban size={17} />
                <div className="text-left">
                  <div className="leading-tight">Projects Portal</div>
                  <div className={`text-[10px] font-normal ${activePortal === 'projects' ? 'text-blue-200' : 'text-[#64748B]'}`}>
                    Turnkey & Lab PMS
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActivePortal('investors')
                  setIsAuthenticated(false)
                  setErrorMessage(null)
                }}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activePortal === 'investors'
                    ? 'bg-[#0E2A6C] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#0E2A6C] hover:bg-gray-50'
                }`}
              >
                <TrendingUp size={17} />
                <div className="text-left">
                  <div className="leading-tight">Investors Management</div>
                  <div className={`text-[10px] font-normal ${activePortal === 'investors' ? 'text-blue-200' : 'text-[#64748B]'}`}>
                    Equity & Portfolio
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Authenticated State Display */}
          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#BFBFBF]/40 shadow-sm text-center max-w-xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 border border-emerald-200">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] mb-2">
                {activePortal === 'hrm' 
                  ? 'HRM Session Authenticated' 
                  : activePortal === 'crm' 
                    ? 'CRM Partner Workspace Connected' 
                    : activePortal === 'projects'
                      ? 'Projects & Turnkey PMS Connected'
                      : 'Investors Management Terminal Connected'}
              </h2>
              <p className="text-sm text-[#64748B] mb-6 leading-relaxed">
                Welcome back. You are authenticated under{' '}
                <strong className="text-[#111827]">
                  {activePortal === 'hrm' 
                    ? hrmForm.employeeId 
                    : activePortal === 'crm' 
                      ? crmForm.clientId 
                      : activePortal === 'projects'
                        ? projectsForm.projectId
                        : investorsForm.investorId}
                </strong>
                . Ready to manage clinical diagnostics, investments, and operational governance workflows.
              </p>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <RotateCcw size={15} />
                  <span>Sign Out / Switch Account</span>
                </button>
                <Link
                  href="/biotra"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#133C99] hover:bg-[#1646AF] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                >
                  <span>Return to Website</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            /* Layout Cards Switcher */
            <AnimatePresence mode="wait">
              {activePortal === 'hrm' ? (
                /* ============================================================
                   LAYOUT 1: HRM (HUMAN RESOURCE MANAGEMENT) PORTAL
                   ============================================================ */
                <motion.div
                  key="hrm-layout"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-[#BFBFBF]/40 shadow-sm overflow-hidden"
                >
                  {/* Left Column: Form Section */}
                  <div className="lg:col-span-7 p-6 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#133C99] mb-1">
                          Staff Access
                        </div>
                        <h2 className="text-2xl font-bold text-[#111827]">
                          HRM Portal Sign In
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={fillHrmDemo}
                        className="text-xs font-semibold text-[#1646AF] hover:underline cursor-pointer bg-[#1646AF]/10 px-2.5 py-1.5 rounded-md"
                      >
                        Auto-fill Demo
                      </button>
                    </div>

                    {errorMessage && (
                      <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Department / Division */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Department / Division
                        </label>
                        <select
                          value={hrmForm.department}
                          onChange={(e) => setHrmForm({ ...hrmForm, department: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF] cursor-pointer"
                        >
                          <option>Clinical Diagnostics Engineering</option>
                          <option>Immunoassay & Biochemistry R&D</option>
                          <option>Quality Assurance & Regulatory Affairs</option>
                          <option>Field Application & Instrument Service</option>
                          <option>Supply Chain & Cold-Chain Logistics</option>
                          <option>Human Resources & Administration</option>
                        </select>
                      </div>

                      {/* Employee ID / Email */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Employee ID or Corporate Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={hrmForm.employeeId}
                            onChange={(e) => setHrmForm({ ...hrmForm, employeeId: e.target.value })}
                            placeholder="e.g. EMP-4081 or user@aurexbiotech.com"
                            className="w-full pl-10 pr-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF]"
                          />
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-[#111827]">
                            Password
                          </label>
                          <a href="#" onClick={(e) => { e.preventDefault(); alert('Please contact HR IT Desk (+91 9543910101) to reset your employee password.') }} className="text-xs font-medium text-[#1646AF] hover:underline">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={hrmForm.password}
                            onChange={(e) => setHrmForm({ ...hrmForm, password: e.target.value })}
                            placeholder="Enter your security password"
                            className="w-full pl-10 pr-10 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF]"
                          />
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#111827] cursor-pointer"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Checkbox */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          id="hrm-remember"
                          type="checkbox"
                          checked={hrmForm.remember}
                          onChange={(e) => setHrmForm({ ...hrmForm, remember: e.target.checked })}
                          className="w-4 h-4 text-[#133C99] rounded border-gray-300 focus:ring-[#1646AF]"
                        />
                        <label htmlFor="hrm-remember" className="text-xs text-[#64748B] cursor-pointer">
                          Keep me signed in on this authorized company workstation
                        </label>
                      </div>

                      {/* Sign In Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Authenticating HRM Session...</span>
                          </>
                        ) : (
                          <>
                            <LogIn size={16} />
                            <span>Sign In to HRM Portal</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Right Column: HRM Features & Notice Panel */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1646AF] text-white p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-4 border border-white/15">
                        <Sparkles size={13} />
                        <span>Workforce Operations</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Internal Employee & HR Center
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
                        Streamlined access for biotechnology scientists, clinical service engineers, and operations personnel.
                      </p>

                      <div className="space-y-3.5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Clock size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Biometric Attendance</div>
                            <div className="text-[11px] text-blue-100/80">Real-time attendance logs and shift verification</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <FileText size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Payroll & Tax Forms</div>
                            <div className="text-[11px] text-blue-100/80">Digital payslips, TDS, and compensation packages</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Wrench size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Service Work Orders</div>
                            <div className="text-[11px] text-blue-100/80">Hospital machine maintenance and calibration tickets</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/15 text-[11px] text-blue-200/80 flex items-center justify-between">
                      <span>AUREX Employee Network</span>
                      <span>v4.2 Corporate</span>
                    </div>
                  </div>
                </motion.div>
              ) : activePortal === 'crm' ? (
                /* ============================================================
                   LAYOUT 2: CRM (CUSTOMER RELATIONSHIP MANAGEMENT) PORTAL
                   ============================================================ */
                <motion.div
                  key="crm-layout"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-[#BFBFBF]/40 shadow-sm overflow-hidden"
                >
                  {/* Left Column: Form Section */}
                  <div className="lg:col-span-7 p-6 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1646AF] mb-1">
                          Client & Partner Access
                        </div>
                        <h2 className="text-2xl font-bold text-[#111827]">
                          CRM Portal Sign In
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={fillCrmDemo}
                        className="text-xs font-semibold text-[#1646AF] hover:underline cursor-pointer bg-[#1646AF]/10 px-2.5 py-1.5 rounded-md"
                      >
                        Auto-fill Demo
                      </button>
                    </div>

                    {errorMessage && (
                      <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Account / Partner Type */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Partner / Account Category
                        </label>
                        <select
                          value={crmForm.accountType}
                          onChange={(e) => setCrmForm({ ...crmForm, accountType: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF] cursor-pointer"
                        >
                          <option>Hospital / Clinical Diagnostic Center</option>
                          <option>Pathology & Immunoassay Laboratory</option>
                          <option>Authorized Diagnostics Distributor</option>
                          <option>Healthcare Chain / Institutional Buyer</option>
                          <option>Research & Academic Institution</option>
                          <option>Government Tender Partner</option>
                        </select>
                      </div>

                      {/* Partner ID / Work Email */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Client ID or Registered Work Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={crmForm.clientId}
                            onChange={(e) => setCrmForm({ ...crmForm, clientId: e.target.value })}
                            placeholder="e.g. CLI-8820 or lab.director@hospital.com"
                            className="w-full pl-10 pr-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF]"
                          />
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-[#111827]">
                            Password
                          </label>
                          <a href="#" onClick={(e) => { e.preventDefault(); alert('Please contact AUREX Institutional Client Support (sales@aurexbiotech.com) for password recovery.') }} className="text-xs font-medium text-[#1646AF] hover:underline">
                            Forgot Credentials?
                          </a>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={crmForm.password}
                            onChange={(e) => setCrmForm({ ...crmForm, password: e.target.value })}
                            placeholder="Enter your CRM portal password"
                            className="w-full pl-10 pr-10 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1646AF]/20 focus:border-[#1646AF]"
                          />
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#111827] cursor-pointer"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Checkbox */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          id="crm-remember"
                          type="checkbox"
                          checked={crmForm.remember}
                          onChange={(e) => setCrmForm({ ...crmForm, remember: e.target.checked })}
                          className="w-4 h-4 text-[#1646AF] rounded border-gray-300 focus:ring-[#1646AF]"
                        />
                        <label htmlFor="crm-remember" className="text-xs text-[#64748B] cursor-pointer">
                          Remember this healthcare institution on this device
                        </label>
                      </div>

                      {/* Sign In Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#1646AF] hover:bg-[#133C99] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Connecting to CRM Gateway...</span>
                          </>
                        ) : (
                          <>
                            <LogIn size={16} />
                            <span>Sign In to CRM Portal</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Right Column: CRM Features & Notice Panel */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#0E2A6C] via-[#1646AF] to-[#1E3A8A] text-white p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-4 border border-white/15">
                        <Sparkles size={13} />
                        <span>Client Solutions</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Diagnostic Partner & Client Hub
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
                        Complete lifecycle management for laboratory equipment, reagent consumables, and LIS support.
                      </p>

                      <div className="space-y-3.5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Truck size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Reagent & Consumable Orders</div>
                            <div className="text-[11px] text-blue-100/80">Track batches, shipping temperatures, and expedited dispatch</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <BarChart3 size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Analyzer Calibration & QC</div>
                            <div className="text-[11px] text-blue-100/80">Photomultiplier PMT calibration certificates and daily QC logs</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <FileText size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Tenders & Quotations</div>
                            <div className="text-[11px] text-blue-100/80">Institutional tender filings, warranty status, and SLA contracts</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/15 text-[11px] text-blue-200/80 flex items-center justify-between">
                      <span>Hospital Partner Network</span>
                      <span>24/7 Client LIS Gateway</span>
                    </div>
                  </div>
                </motion.div>
              ) : activePortal === 'projects' ? (
                /* ============================================================
                   LAYOUT 3: PROJECTS (TURNKEY & ENGINEERING PMS) PORTAL
                   ============================================================ */
                <motion.div
                  key="projects-layout"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-[#BFBFBF]/40 shadow-sm overflow-hidden"
                >
                  {/* Left Column: Form Section */}
                  <div className="lg:col-span-7 p-6 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0B1528] mb-1">
                          Engineering & Site Execution
                        </div>
                        <h2 className="text-2xl font-bold text-[#111827]">
                          Projects Portal Sign In
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={fillProjectsDemo}
                        className="text-xs font-semibold text-[#133C99] hover:underline cursor-pointer bg-[#133C99]/10 px-2.5 py-1.5 rounded-md"
                      >
                        Auto-fill Demo
                      </button>
                    </div>

                    {errorMessage && (
                      <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Project Category / Scope */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Project Category / Commissioning Phase
                        </label>
                        <select
                          value={projectsForm.projectCategory}
                          onChange={(e) => setProjectsForm({ ...projectsForm, projectCategory: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#133C99]/20 focus:border-[#133C99] cursor-pointer"
                        >
                          <option>Turnkey Diagnostic Laboratory Commissioning</option>
                          <option>Hospital Pathology Automation Setup</option>
                          <option>Cleanroom & Biosafety Lab Construction</option>
                          <option>Instrument Installation & Site Inspection</option>
                          <option>LIS / HIS Equipment Interfacing</option>
                          <option>NABL & ISO 15189 Quality Handover</option>
                        </select>
                      </div>

                      {/* Project ID / Lead Engineer Code */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Project ID or Lead Engineer Code
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={projectsForm.projectId}
                            onChange={(e) => setProjectsForm({ ...projectsForm, projectId: e.target.value })}
                            placeholder="e.g. PRJ-9040 or engineer@aurexbiotech.com"
                            className="w-full pl-10 pr-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#133C99]/20 focus:border-[#133C99]"
                          />
                          <FolderKanban className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-[#111827]">
                            Security Key / Project PIN
                          </label>
                          <a href="#" onClick={(e) => { e.preventDefault(); alert('Please contact the AUREX Project Management Office (projects@aurexbiotech.com) for authorization tokens.') }} className="text-xs font-medium text-[#133C99] hover:underline">
                            Request Key Access?
                          </a>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={projectsForm.password}
                            onChange={(e) => setProjectsForm({ ...projectsForm, password: e.target.value })}
                            placeholder="Enter project authorization key"
                            className="w-full pl-10 pr-10 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#133C99]/20 focus:border-[#133C99]"
                          />
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#111827] cursor-pointer"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Checkbox */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          id="prj-remember"
                          type="checkbox"
                          checked={projectsForm.remember}
                          onChange={(e) => setProjectsForm({ ...projectsForm, remember: e.target.checked })}
                          className="w-4 h-4 text-[#0B1528] rounded border-gray-300 focus:ring-[#133C99]"
                        />
                        <label htmlFor="prj-remember" className="text-xs text-[#64748B] cursor-pointer">
                          Keep this project dashboard active on this workstation
                        </label>
                      </div>

                      {/* Sign In Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#0B1528] hover:bg-[#133C99] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Connecting to Turnkey PMS Core...</span>
                          </>
                        ) : (
                          <>
                            <LogIn size={16} />
                            <span>Sign In to Projects Portal</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Projects Features & Notice Panel */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1528] via-[#133C99] to-[#1E3A8A] text-white p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-4 border border-white/15">
                        <Briefcase size={13} />
                        <span>Turnkey PMS Operations</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Laboratory Engineering & Projects Hub
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
                        Centralized execution control for turnkey diagnostic centers, hospital lab fit-outs, and instrumentation commissioning.
                      </p>

                      <div className="space-y-3.5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Layers size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Milestone Tracking & Gantt</div>
                            <div className="text-[11px] text-blue-100/80">Site architectural blueprints, civil MEP readiness, and HVAC logs</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Wrench size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Installation & Testing Protocols</div>
                            <div className="text-[11px] text-blue-100/80">Analyzer electrical staging, uncrating approvals, and IQ/OQ/PQ validation</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <ClipboardCheck size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">NABL & Regulatory Handover</div>
                            <div className="text-[11px] text-blue-100/80">Compliance documentation dossiers, staff SOP training, and audit sign-off</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/15 text-[11px] text-blue-200/80 flex items-center justify-between">
                      <span>Turnkey Projects Division</span>
                      <span>PMO Engineering Gateway</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ============================================================
                   LAYOUT 4: INVESTORS MANAGEMENT PORTAL
                   ============================================================ */
                <motion.div
                  key="investors-layout"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-[#BFBFBF]/40 shadow-sm overflow-hidden"
                >
                  {/* Left Column: Form Section */}
                  <div className="lg:col-span-7 p-6 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#0E2A6C] mb-1">
                          Shareholder & Capital Relations
                        </div>
                        <h2 className="text-2xl font-bold text-[#111827]">
                          Investors Management Sign In
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={fillInvestorsDemo}
                        className="text-xs font-semibold text-[#0E2A6C] hover:underline cursor-pointer bg-[#0E2A6C]/10 px-2.5 py-1.5 rounded-md"
                      >
                        Auto-fill Demo
                      </button>
                    </div>

                    {errorMessage && (
                      <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                      {/* Shareholder Category / Investor Type */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Investor Category / Shareholder Classification
                        </label>
                        <select
                          value={investorsForm.shareholderCategory}
                          onChange={(e) => setInvestorsForm({ ...investorsForm, shareholderCategory: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E2A6C]/20 focus:border-[#0E2A6C] cursor-pointer"
                        >
                          <option>Institutional / Venture Partner</option>
                          <option>Private Equity & Healthcare Fund</option>
                          <option>Equity Shareholder / Accredited Investor</option>
                          <option>Angel Syndicate / Asset Management Group</option>
                          <option>Financial Analyst / Statutory Auditor</option>
                          <option>Strategic Corporate Investment Partner</option>
                        </select>
                      </div>

                      {/* Investor ID / Work Email */}
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1.5">
                          Investor ID or Registered Portfolio Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={investorsForm.investorId}
                            onChange={(e) => setInvestorsForm({ ...investorsForm, investorId: e.target.value })}
                            placeholder="e.g. INV-7020 or partner@healthcarecapital.com"
                            className="w-full pl-10 pr-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E2A6C]/20 focus:border-[#0E2A6C]"
                          />
                          <Landmark className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                        </div>
                      </div>

                      {/* Security Key / Password */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-[#111827]">
                            Security Token / Investor PIN
                          </label>
                          <a href="#" onClick={(e) => { e.preventDefault(); alert('Please contact AUREX Investor Relations Desk (investor.relations@aurexbiotech.com / +91 9543910101) for security token verification.') }} className="text-xs font-medium text-[#0E2A6C] hover:underline">
                            Request Key Access?
                          </a>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={investorsForm.password}
                            onChange={(e) => setInvestorsForm({ ...investorsForm, password: e.target.value })}
                            placeholder="Enter investor authorization key"
                            className="w-full pl-10 pr-10 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E2A6C]/20 focus:border-[#0E2A6C]"
                          />
                          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#111827] cursor-pointer"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Remember Checkbox */}
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          id="inv-remember"
                          type="checkbox"
                          checked={investorsForm.remember}
                          onChange={(e) => setInvestorsForm({ ...investorsForm, remember: e.target.checked })}
                          className="w-4 h-4 text-[#0E2A6C] rounded border-gray-300 focus:ring-[#0E2A6C]"
                        />
                        <label htmlFor="inv-remember" className="text-xs text-[#64748B] cursor-pointer">
                          Keep this investor dashboard active on this authorized device
                        </label>
                      </div>

                      {/* Sign In Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#0E2A6C] hover:bg-[#133C99] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Authenticating Investor Terminal...</span>
                          </>
                        ) : (
                          <>
                            <LogIn size={16} />
                            <span>Sign In to Investors Management</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Investors Features & Notice Panel */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1528] via-[#0E2A6C] to-[#1646AF] text-white p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-4 border border-white/15">
                        <TrendingUp size={13} />
                        <span>Investor Relations</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Financial Governance & Investor Hub
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
                        Direct oversight of capitalization metrics, R&D patent valuations, global diagnostic market revenue, and dividend records.
                      </p>

                      <div className="space-y-3.5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <BarChart3 size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Financial Reports & EBITDA</div>
                            <div className="text-[11px] text-blue-100/80">Quarterly balance sheets, audited Capex/Opex statements, and revenue growth</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <PieChart size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Equity & Shareholding Records</div>
                            <div className="text-[11px] text-blue-100/80">Cap table distributions, Series equity allocations, and share certificate ledgers</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Landmark size={16} className="text-blue-200" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">R&D Valuation & Global Pipeline</div>
                            <div className="text-[11px] text-blue-100/80">Biotechnology diagnostic patents, international certifications, and ROI projections</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/15 text-[11px] text-blue-200/80 flex items-center justify-between">
                      <span>AUREX Investor Network</span>
                      <span>Institutional IR Gateway</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

        </div>
      </main>

      {/* Footer Notice */}
      <footer className="py-6 px-4 text-center border-t border-gray-200 bg-white/80">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#1646AF]" />
            <span>256-Bit SSL End-to-End Encryption • ISO 13485:2016 Certified Diagnostic Infrastructure</span>
          </div>
          <div>
            © 2026 AUREX Biotech Automation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
