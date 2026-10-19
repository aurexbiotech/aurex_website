'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  Globe, 
  Users, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  RotateCcw
} from 'lucide-react'

// Area of Interest dropdown options requested in specification
const AREA_OF_INTEREST_OPTIONS = [
  'General Inquiry',
  'Immunoassay Systems',
  'Microbiology Solutions',
  'Clinical Chemistry',
  'Molecular Diagnostics',
  'Quality Control',
  'Technical Support',
  'Partnership Opportunities'
]

// Sub-navigation items for contact sections
const contactSubNavigation = [
  { id: 'contact-form', name: 'Send Message' },
  { id: 'global-offices', name: 'Global Offices' },
  { id: 'support-channels', name: 'Support Channels' },
  { id: 'emergency-support', name: 'Emergency Support' }
]

const offices = [
  {
    region: 'India Office',
    address: '163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam, Villupuram, VILLUPURAM, TAMIL NADU, 605601',
    phone: '+91 9543910101, +91 8144418046',
    email: 'aurexbiotech@gmail.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
  }
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Instant technical & sales enquiry on WhatsApp',
    contact: '+91 9543910101',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/919543910101'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: '24/7 technical assistance available',
    contact: '+91 9543910101, +91 8144418046',
    action: 'Call Now',
    href: 'tel:+919543910101'
  },
  {
    icon: Mail,
    title: 'Email Inquiries',
    description: 'Send detailed requirements directly',
    contact: 'aurexbiotech@gmail.com',
    action: 'Send Email',
    href: 'mailto:aurexbiotech@gmail.com'
  },
  {
    icon: Users,
    title: 'Schedule Consultation',
    description: 'Book a session with diagnostic specialists',
    contact: 'Product specialists available',
    action: 'Book Meeting',
    href: '#contact-form'
  }
]

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Official Navy Blue Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#133C99]/90 to-[#1646AF]/85 z-10" />
        <Image
          src="/images/background.jpg"
          alt="AUREX Biotech Laboratory Automation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Connect with our biotechnology engineering team to explore automated immunoassay, clinical chemistry, and laboratory diagnostics solutions.
          </p>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#1646AF] rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-[#60A5FA] rounded-full opacity-40 animate-bounce" />
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-80 animate-ping" />
      </div>
    </section>
  )
}

// Sub Navigation Component
const SubNavigation = ({ 
  activeSection, 
  setActiveSection 
}: { 
  activeSection: string
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-[#F6F8FB]/95 backdrop-blur-md border-b border-[#BFBFBF]/30 shadow-xs">
      <div className="container mx-auto px-6 py-3.5">
        <nav className="flex flex-wrap justify-center gap-2" aria-label="Contact Section Navigation">
          {contactSubNavigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-2.5 font-semibold text-xs sm:text-sm transition-all duration-200 rounded-lg cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#1646AF] bg-white shadow-xs border border-[#BFBFBF]/40'
                  : 'text-[#64748B] hover:text-[#1646AF] hover:bg-white/60'
              }`}
            >
              <span>{item.name}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeContactSection"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1646AF] rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState('contact-form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    subject: '',
    message: '',
    website: '' // Honeypot field for anti-spam bots
  })

  // Validation Error State
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Validation function
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Full Name is required.'
        if (value.trim().length < 2) return 'Full Name must be at least 2 characters.'
        return ''
      case 'email':
        if (!value.trim()) return 'Email Address is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.'
        return ''
      case 'interest':
        if (!value) return 'Please select an area of interest.'
        return ''
      case 'subject':
        if (!value.trim()) return 'Subject is required.'
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required.'
        if (value.trim().length < 10) return 'Message must be at least 10 characters.'
        return ''
      case 'phone':
        if (value.trim() && !/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{3,6}$/.test(value.trim())) {
          return 'Please enter a valid phone number or leave blank.'
        }
        return ''
      default:
        return ''
    }
  }

  // Handle Input Change with validation
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const errorMsg = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: errorMsg }))
    }
  }

  // Handle Input Blur
  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const errorMsg = validateField(field, formData[field as keyof typeof formData])
    setErrors(prev => ({ ...prev, [field]: errorMsg }))
  }

  // Validate entire form before submission
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      interest: validateField('interest', formData.interest),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
      phone: validateField('phone', formData.phone)
    }

    // Filter out empty errors
    const activeErrors: Record<string, string> = {}
    let isValid = true
    Object.keys(newErrors).forEach(key => {
      if (newErrors[key]) {
        activeErrors[key] = newErrors[key]
        isValid = false
      }
    })

    setErrors(activeErrors)
    setTouched({
      name: true,
      email: true,
      interest: true,
      subject: true,
      message: true,
      phone: true
    })

    return isValid
  }

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Clear previous error
    setSubmitError(null)

    // 1. Client-side Validation
    if (!validateForm()) {
      return
    }

    // Prevent duplicate submissions while in flight
    if (isSubmitting) return
    setIsSubmitting(true)

    // Generate unique idempotency key for this submission attempt
    const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

    // 2. Dispatch to Server-Side API (handles both Email and WhatsApp delivery)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey
        },
        body: JSON.stringify({
          ...formData,
          idempotencyKey
        })
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsSubmitted(true)
        setSubmitError(null)
      } else {
        // Neutral customer-facing message without exposing internal details
        setSubmitError(
          typeof data?.error === 'string' && 
          !data.error.includes('credentials') && 
          !data.error.includes('API') && 
          !data.error.includes('HTTP')
            ? data.error
            : "We couldn't process your enquiry right now. Please try again shortly."
        )
      }
    } catch {
      // Safe fallback error without exposing network or system specifics
      setSubmitError("We couldn't process your enquiry right now. Please try again shortly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form to submit another enquiry
  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      interest: '',
      subject: '',
      message: '',
      website: ''
    })
    setErrors({})
    setTouched({})
    setSubmitError(null)
    setIsSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#111827]">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* ============================================================
                CONTACT FORM SECTION
                ============================================================ */}
            {activeSection === 'contact-form' && (
              <div id="contact-form" className="max-w-4xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFBFBF]/40 text-[#1646AF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-2xs">
                    DIRECT INQUIRY
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto">
                    Submit your requirement below. Our engineering team will review your enquiry and connect with you directly.
                  </p>
                </div>

                {/* Success Screen: Replaces the form completely upon successful processing */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-2xl shadow-sm border border-[#BFBFBF]/40 p-8 sm:p-14 text-center max-w-2xl mx-auto"
                  >
                    {/* Subtle Success Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[#133C99]/10 border border-[#133C99]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#133C99]" strokeWidth={2.2} />
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mb-3">
                      Message Sent Successfully!
                    </h3>

                    {/* Message */}
                    <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for contacting AUREX. Our team will get back to you within 24 hours.
                    </p>

                    {/* Submit New Enquiry Button */}
                    <div>
                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] focus-visible:ring-offset-2"
                      >
                        <RotateCcw size={16} />
                        <span>Submit New Enquiry</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Form Card */
                  <div className="bg-white rounded-2xl shadow-sm border border-[#BFBFBF]/40 p-6 sm:p-10">
                    
                    {/* Neutral Error Alert on submission failure */}
                    {submitError && (
                      <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-sm font-medium">
                        <AlertCircle size={18} className="text-rose-600 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                      
                      {/* Anti-spam Honeypot Field (invisible to users) */}
                      <div className="hidden" aria-hidden="true">
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      {/* Row 1: Full Name & Email Address */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {/* Full Name */}
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                          >
                            Full Name <span className="text-rose-600" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('name')}
                            placeholder="e.g. Dr. Rajesh Kumar"
                            aria-required="true"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                              errors.name 
                                ? 'border-rose-400 focus:ring-rose-200' 
                                : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                            }`}
                          />
                          {errors.name && (
                            <p id="name-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                          >
                            Email Address <span className="text-rose-600" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('email')}
                            placeholder="name@hospital.com"
                            aria-required="true"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                              errors.email 
                                ? 'border-rose-400 focus:ring-rose-200' 
                                : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                            }`}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Company & Phone Number (Both Optional) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {/* Company */}
                        <div>
                          <label 
                            htmlFor="company" 
                            className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                          >
                            Company / Institution <span className="text-[#64748B] font-normal text-xs">(optional)</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="e.g. Apollo Diagnostics"
                            className="w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border border-[#BFBFBF]/50 text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:border-[#1646AF] focus:outline-none focus:ring-2 focus:ring-[#1646AF]/15"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label 
                            htmlFor="phone" 
                            className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                          >
                            Phone Number <span className="text-[#64748B] font-normal text-xs">(optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('phone')}
                            placeholder="+91 98765 43210"
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                              errors.phone 
                                ? 'border-rose-400 focus:ring-rose-200' 
                                : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                            }`}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Area of Interest */}
                      <div>
                        <label 
                          htmlFor="interest" 
                          className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                        >
                          Area of Interest <span className="text-rose-600" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('interest')}
                          aria-required="true"
                          aria-invalid={Boolean(errors.interest)}
                          aria-describedby={errors.interest ? 'interest-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm transition-colors focus:bg-white focus:outline-none focus:ring-2 cursor-pointer ${
                            !formData.interest ? 'text-[#64748B]' : 'text-[#111827]'
                          } ${
                            errors.interest 
                              ? 'border-rose-400 focus:ring-rose-200' 
                              : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                          }`}
                        >
                          <option value="" disabled>Select an area of interest</option>
                          {AREA_OF_INTEREST_OPTIONS.map((option, idx) => (
                            <option key={idx} value={option} className="text-[#111827]">
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.interest && (
                          <p id="interest-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                            <AlertCircle size={12} />
                            <span>{errors.interest}</span>
                          </p>
                        )}
                      </div>

                      {/* Row 4: Subject */}
                      <div>
                        <label 
                          htmlFor="subject" 
                          className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                        >
                          Subject <span className="text-rose-600" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('subject')}
                          placeholder="e.g. Quotation Request for SmarLumi FC-2100"
                          aria-required="true"
                          aria-invalid={Boolean(errors.subject)}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                            errors.subject 
                              ? 'border-rose-400 focus:ring-rose-200' 
                                : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                          }`}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                            <AlertCircle size={12} />
                            <span>{errors.subject}</span>
                          </p>
                        )}
                      </div>

                      {/* Row 5: Message */}
                      <div>
                        <label 
                          htmlFor="message" 
                          className="block text-xs sm:text-sm font-bold text-[#111827] mb-1.5"
                        >
                          Message <span className="text-rose-600" aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('message')}
                          placeholder="Please describe your inquiry, instrument capacity requirements, or testing panel questions..."
                          aria-required="true"
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`w-full px-4 py-3 bg-[#F6F8FB] rounded-xl border text-sm text-[#111827] placeholder:text-[#64748B]/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 resize-y ${
                            errors.message 
                              ? 'border-rose-400 focus:ring-rose-200' 
                              : 'border-[#BFBFBF]/50 focus:border-[#1646AF] focus:ring-[#1646AF]/15'
                          }`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                            <AlertCircle size={12} />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#133C99] hover:bg-[#1646AF] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1646AF] focus-visible:ring-offset-2 cursor-pointer"
                        >
                          <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                          <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                        </button>
                      </div>

                      {/* Privacy Notice */}
                      <p className="text-[11px] text-[#64748B] pt-2 border-t border-[#BFBFBF]/30 leading-relaxed">
                        Your inquiry is transmitted securely with SSL encryption and processed directly by our biotechnology automation engineering team.
                      </p>

                    </form>
                  </div>
                )}

              </div>
            )}

            {/* ============================================================
                GLOBAL OFFICES SECTION
                ============================================================ */}
            {activeSection === 'global-offices' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-3">Global Offices</h2>
                  <p className="text-base text-[#64748B]">
                    Visit us at one of our offices worldwide
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-xs border border-[#BFBFBF]/40 p-8 hover:shadow-md transition-shadow"
                    >
                      <div className="w-14 h-14 bg-[#F6F8FB] border border-[#1646AF]/20 rounded-xl flex items-center justify-center mb-6">
                        <Building2 className="text-[#1646AF]" size={28} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#111827] mb-4">{office.region}</h3>
                      
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex items-start space-x-3">
                          <MapPin className="text-[#64748B] mt-0.5 shrink-0" size={16} />
                          <span className="text-[#64748B]">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="text-[#64748B] shrink-0" size={16} />
                          <span className="text-[#64748B] font-medium">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="text-[#64748B] shrink-0" size={16} />
                          <a href={`mailto:${office.email}`} className="text-[#1646AF] hover:underline break-all">
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="text-[#64748B] shrink-0" size={16} />
                          <span className="text-[#64748B]">{office.hours}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-12 bg-white border border-[#BFBFBF]/40 rounded-2xl h-80 flex items-center justify-center shadow-xs"
                >
                  <div className="text-center">
                    <Globe className="text-[#1646AF]/40 mx-auto mb-3" size={56} />
                    <h3 className="text-lg font-semibold text-[#111827] mb-1">Global Presence</h3>
                    <p className="text-xs text-[#64748B]">Headquartered in Tamil Nadu, India with pan-India distribution network</p>
                  </div>
                </motion.div>
              </div>
            )}

            {/* ============================================================
                SUPPORT CHANNELS SECTION
                ============================================================ */}
            {activeSection === 'support-channels' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-3">Multiple Ways to Reach Us</h2>
                  <p className="text-base text-[#64748B]">
                    Choose the communication channel that works best for your clinical institution
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#BFBFBF]/40 hover:shadow-md transition-shadow group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-14 h-14 bg-[#F6F8FB] border border-[#1646AF]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1646AF] group-hover:text-white transition-colors text-[#1646AF]">
                          <method.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111827] mb-2">{method.title}</h3>
                        <p className="text-[#64748B] mb-3 text-sm leading-relaxed">{method.description}</p>
                        <div className="text-[#1646AF] font-bold text-base mb-6">{method.contact}</div>
                      </div>
                      <a
                        href={method.href}
                        onClick={method.href === '#contact-form' ? () => setActiveSection('contact-form') : undefined}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#133C99] hover:bg-[#1646AF] text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow-xs"
                      >
                        <span>{method.action}</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================
                EMERGENCY SUPPORT SECTION
                ============================================================ */}
            {activeSection === 'emergency-support' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-3">24/7 Emergency Support</h2>
                  <p className="text-base text-[#64748B]">
                    Critical diagnostic instrument support when you need it most
                  </p>
                </div>

                <div className="bg-[#133C99] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-white/20">
                  <div className="text-center mb-8">
                    <Phone className="mx-auto mb-5 text-white" size={56} />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Emergency Hotline</h3>
                    <p className="text-sm sm:text-base text-white/80 mb-6 max-w-xl mx-auto">
                      For critical diagnostic instrument failures or urgent laboratory workflow needs, our emergency engineering team is available 24/7.
                    </p>
                    <div className="text-2xl sm:text-3xl font-bold mb-1 text-white">+91 9543910101</div>
                    <div className="text-2xl sm:text-3xl font-bold mb-6 text-white">+91 8144418046</div>
                    <a 
                      href="tel:+919543910101" 
                      className="inline-block bg-white text-[#1646AF] hover:bg-[#F6F8FB] hover:text-[#133C99] px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-md"
                    >
                      Call Emergency Support
                    </a>
                  </div>

                  <div className="border-t border-white/20 pt-6 mt-6">
                    <h4 className="text-base sm:text-lg font-bold mb-3 text-white">What qualifies as an emergency?</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                      <li>• Complete instrument failure impacting ongoing patient diagnostic batches</li>
                      <li>• Critical diagnostic calibration discrepancy requiring immediate field service</li>
                      <li>• Safety-related electromechanical analyzer malfunction</li>
                      <li>• Bidirectional LIS connectivity disruption on emergency sample lines</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
