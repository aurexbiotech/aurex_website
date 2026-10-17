'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Users, Award, Globe, TrendingUp, Heart, Target, Lightbulb, Shield, Star, Building2 } from 'lucide-react'

/**
 * COMPANY PAGE - AUREX
 * Second page of the website with 9 sub-topics
 * Features: Smooth scroll animations, button navigation, Autobio-style transitions
 */

// Initialize scroll animations (Autobio-style)
const useScrollAnimations = (activeTab: string) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .slide-in-left, .slide-in-right, .scale-in'
    );
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]); // Re-run when activeTab changes
};

// Sub-navigation items for company sections
const companySubNavigation = [
  { id: 'company-profile', name: 'Company Profile', icon: Building2 },
  { id: 'social-responsibilities', name: 'Social Responsibilities', icon: Heart },
  { id: 'leadership-programme', name: 'Leadership Programme', icon: Award },
  { id: 'investor-opportunity', name: 'Investor Opportunity', icon: TrendingUp },
  { id: 'our-vision', name: 'Our Vision', icon: Target },
  { id: 'our-mission', name: 'Our Mission', icon: Lightbulb },
  { id: 'our-culture', name: 'Our Culture', icon: Globe },
  { id: 'our-integrity', name: 'Our Integrity', icon: Shield },
  { id: 'testimonials', name: 'Testimonials', icon: Star }
]

// Hero Banner Component
const HeroBanner = ({ activeSection }: { activeSection: string }) => {
  // Dynamic banner content based on active section
  const getBannerContent = () => {
    switch (activeSection) {
      case 'social-responsibilities':
        return {
          image: '/images/social-responsibilities-banner.jpg',
          alt: 'Social Responsibilities - Creating Positive Impact Through Healthcare',
          title: 'Social Responsibilities',
          subtitle: 'Creating Positive Impact Through Healthcare'
        }
      case 'leadership-programme':
        return {
          image: '/images/leadership-programme-banner.jpg',
          alt: 'Leadership Programme - Developing Future Leaders in Biotechnology & Healthcare',
          title: 'Leadership Programme',
          subtitle: 'Developing Future Leaders in Biotechnology & Healthcare'
        }
      case 'investor-opportunity':
        return {
          image: '/images/investor-opportunity-banner.jpg',
          alt: 'Investor Opportunity - Investor Relations',
          title: 'Investor Opportunity',
          subtitle: 'Investor Relations'
        }
      case 'our-vision':
        return {
          image: '/images/our-vision-banner.jpg',
          alt: 'Our Vision - Shaping the Future of Diagnostics Worldwide',
          title: 'Our Vision',
          subtitle: 'Shaping the Future of Diagnostics Worldwide'
        }
      case 'our-mission':
        return {
          image: '/images/our-mission-banner.jpg',
          alt: 'Our Mission - Empowering Healthcare Professionals with Advanced Diagnostic Solutions',
          title: 'Our Mission',
          subtitle: 'Empowering Healthcare Professionals with Advanced Diagnostic Solutions'
        }
      case 'our-culture':
        return {
          image: '/images/our-culture-banner.jpg',
          alt: 'Our Culture - Innovation, Collaboration, and Excellence at Every Step',
          title: 'Our Culture',
          subtitle: 'Innovation, Collaboration, and Excellence at Every Step'
        }
      case 'our-integrity':
        return {
          image: '/images/our-integrity-banner.jpg',
          alt: 'Our Integrity - Building Trust Through Ethical Excellence',
          title: 'Our Integrity',
          subtitle: 'Building Trust Through Ethical Excellence'
        }
      case 'testimonials':
        return {
          image: '/images/testimonials-banner.jpg',
          alt: 'Testimonials - Celebrating Customer Success Stories',
          title: 'Testimonials',
          subtitle: 'Celebrating Customer Success Stories'
        }
      default:
        return {
          image: '/images/company-profile-banner.jpg',
          alt: 'Company Profile - Our Business Excellence and Innovation',
          title: 'Company Profile',
          subtitle: 'Delivering Excellence in Diagnostics'
        }
    }
  }

  const bannerContent = getBannerContent()

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/90 via-[#133C99]/80 to-[#1646AF]/85 z-10"></div>
        <Image
          src={bannerContent.image}
          alt={bannerContent.alt}
          fill
          className="object-cover object-center blur-sm"
          priority
          quality={60}
          loading="eager"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Building2 className="w-20 h-20 mx-auto mb-6 text-blue-200" />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            {bannerContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {bannerContent.subtitle}
          </p>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#1646AF]/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-[#133C99]/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-80 animate-ping"></div>
      </div>
    </section>
  )
}

// Sub Navigation Component - Enhanced with AUREX Brand styling
const SubNavigation = ({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex flex-wrap justify-center gap-2">
          {companySubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg overflow-hidden ${
                activeSection === item.id
                  ? 'text-[#1646AF] bg-white shadow-md'
                  : 'text-gray-600 hover:text-[#1646AF] hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {/* AUREX Royal Blue accent underline for active item */}
              <motion.div
                initial={false}
                animate={{
                  scaleX: activeSection === item.id ? 1 : 0,
                  opacity: activeSection === item.id ? 1 : 0
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] origin-left"
              />
              {/* Hover effect underline */}
              <motion.div
                initial={false}
                animate={{
                  scaleX: 0,
                  opacity: 0
                }}
                whileHover={{
                  scaleX: activeSection === item.id ? 0 : 0.7,
                  opacity: activeSection === item.id ? 0 : 0.6
                }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#1646AF] origin-center"
                style={{ width: '80%' }}
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
}

// Main Company Page Component Content
function CompanyPageContent() {
  const searchParams = useSearchParams()
  const sectionParam = searchParams.get('section')
  
  // Initialize activeTab state - default to 'company-profile'
  const [activeTab, setActiveTab] = useState<string>('company-profile')
  
  // Initialize scroll animations - re-run when tab changes
  useScrollAnimations(activeTab)
  
  // Handle URL parameter only on mount
  useEffect(() => {
    // Valid section IDs
    const validSections = [
      'company-profile',
      'social-responsibilities',
      'leadership-programme',
      'investor-opportunity',
      'our-vision',
      'our-mission',
      'our-culture',
      'our-integrity',
      'testimonials'
    ]
    
    if (sectionParam && validSections.includes(sectionParam)) {
      setActiveTab(sectionParam)
    }
  }, [sectionParam])
  
  // Scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('company-scroll-progress');
      if (scrollProgress) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / documentHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Centralized content rendering function with strict conditional logic
  const renderContent = () => {
    switch (activeTab) {
      case 'company-profile':
        return (
          <div className="space-y-16">
            {/* We are Headquartered in Tamil Nadu, India */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1528] mb-4">We are Headquartered in Tamil Nadu, India</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  AUREX is a trusted leader in advanced healthcare and diagnostic solutions. We specialize in delivering state-of-the-art automation products and technologies designed to empower healthcare professionals and researchers across multiple verticals.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/company-profile-1.jpg"
                  alt="Corporate Office Headquarters"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/30 to-transparent"></div>
              </div>
            </div>

            {/* Innovation and Partnerships */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="md:col-start-2">
                <h2 className="text-3xl font-bold text-[#0B1528] mb-4">Innovation and Partnerships</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Through strategic collaborations with globally renowned partners and manufacturers, we leverage world-class expertise in design and manufacturing to deliver reliable, innovative, and performance-driven solutions tailored for the Indian healthcare and research ecosystem.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/company-profile-2.jpg"
                  alt="Innovation and Global Partnerships"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/30 to-transparent"></div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-[#0B1528] mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to transform diagnostics and research workflows by introducing solutions that enhance efficiency, accuracy, and scalability—enabling professionals to achieve superior outcomes and contribute to scientific and medical advancements.
              </p>
            </div>

            {/* Customer-First Philosophy */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1528] mb-4">Customer-First Philosophy</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At AUREX, our customer-first philosophy sets us apart. We offer expert consultation, rapid technical support, and customized maintenance programs to ensure seamless laboratory operations and sustained performance.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/company-profile-3.jpg"
                  alt="Customer-First Philosophy and Technical Support"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/30 to-transparent"></div>
              </div>
            </div>

            {/* Trusted Partner */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-[#0B1528] mb-4">Trusted Partner</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                As trusted exporters, importers, and distributors, we proudly serve hospitals, diagnostic laboratories, research institutions, and healthcare professionals across India—empowering them with the tools and technologies needed to achieve precise diagnostics and optimized operational efficiency.
              </p>
            </div>
          </div>
        )

      case 'social-responsibilities':
        return (
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">Social Responsibilities: A Fundamental Value</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At AUREX, social responsibility is not just an initiative — it is a fundamental value embedded in our mission and operations. We believe that societal progress and individual well-being go hand in hand, and we are dedicated to creating a positive, measurable, and enduring impact on the communities we serve.
              </p>
            </div>

            {/* Key Focus Areas Heading */}
            <div className="animate-on-scroll mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#133C99] mb-8 border-b-4 border-[#1646AF] pb-2 inline-block">
                Key Focus Areas
              </h3>
            </div>

            {/* Promoting Healthcare Access */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528] mb-4 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  Promoting Healthcare Access
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Delivering innovative and dependable diagnostic solutions to underserved regions and healthcare facilities.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Driving affordability and accessibility to enable hospitals and laboratories to operate efficiently and expand patient reach.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/social-responsibility-1.jpg"
                  alt="Promoting Healthcare Access and Medical Services"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-[#0B1528] font-semibold">Promoting Healthcare Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Talent Development */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                Education & Talent Development
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Championing science and technology education through scholarships, outreach programs, and strategic collaborations with academic institutions.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Organizing specialized training, workshops, and internship programs to nurture the next generation of healthcare professionals and laboratory experts.</span>
                </li>
              </ul>
            </div>

            {/* Ethical Standards & Quality */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                Ethical Standards & Quality
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Adhering to the highest ethical standards in clinical practices, prioritizing patient safety, data integrity, and regulatory compliance.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consistently maintaining world-class quality benchmarks, earning the trust of healthcare providers and the communities we serve.</span>
                </li>
              </ul>
            </div>

            {/* Environmental Stewardship */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border border-gray-100 md:col-start-2">
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528] mb-4 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  Environmental Stewardship
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Implementing sustainable manufacturing and operational practices aimed at minimizing our environmental footprint.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Promoting waste reduction, responsible sourcing, and energy-efficient technologies across all facilities.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/social-responsibility-2.jpg"
                  alt="Environmental Stewardship and Sustainability"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-[#0B1528] font-semibold">Environmental Stewardship</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Engagement */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528] mb-4 flex items-center">
                <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                Community Engagement
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Actively participating in local development projects, healthcare camps, public awareness initiatives, and disaster relief programs.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Encouraging employees to engage in volunteer activities, making social impact a collective responsibility.</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="animate-on-scroll mt-12 bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1528] mb-4">Our Vision for Impact</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We view social responsibility as an extension of our core purpose: advancing healthcare, empowering communities, and fostering a healthier, more equitable society. By integrating ethical business practices with meaningful community initiatives, we strive to set new benchmarks in diagnostics and in corporate citizenship.
              </p>
            </div>
          </div>
        )

      case 'leadership-programme':
        return (
          <div className="space-y-12">
            {/* Introduction */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">Leadership Programme</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A Leadership Programme in Biotechnology & Healthcare is designed to equip current and aspiring leaders with the strategic vision, managerial acumen, and innovation-driven mindset needed to excel in this fast-evolving, highly regulated industry. Tailored for professionals across all levels — from executives and department heads to researchers and quality managers — the programme empowers participants to lead with clarity, confidence, and purpose.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-on-scroll">
              <Image
                src="/images/background.jpg"
                alt="Leadership Programme in Healthcare"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1646AF]/80 to-[#133C99]/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <Award className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Leading the Future of Healthcare</h3>
                  <p className="text-xl">Empowering Leaders, Transforming Organizations</p>
                </div>
              </div>
            </div>

            {/* Key Features Section Header */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1646AF] mb-8 border-b-4 border-[#1646AF] pb-2 inline-block">
                Key Features
              </h3>
            </div>

            {/* Strategic Leadership Excellence */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Strategic Leadership Excellence</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gain deep insights into the unique challenges and opportunities shaping biotechnology and healthcare.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn to craft, implement, and adapt strategies that bridge scientific innovation with business growth.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Master scenario planning, risk mitigation, and guiding organizations through regulatory and market shifts.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/leadership-1.jpg"
                  alt="Strategic Leadership Excellence in Healthcare"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1646AF]/60 to-transparent"></div>
              </div>
            </div>

            {/* High-Performance Team Building */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/leadership-2.jpg"
                  alt="High-Performance Team Building in Healthcare"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1646AF]/60 to-transparent"></div>
              </div>
              <div className="bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">High-Performance Team Building</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cultivate the ability to inspire, engage, and lead cross-functional teams effectively.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strengthen communication, conflict resolution, and emotional intelligence to foster collaboration and drive results.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Regulatory & Quality Mastery */}
            <div className="animate-on-scroll bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Regulatory & Quality Mastery</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive understanding of compliance frameworks including GCP, GMP, quality assurance, and auditing.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develop readiness for regulatory inspections, certifications, and international compliance standards.</span>
                </li>
              </ul>
            </div>

            {/* Innovation & Technology Leadership */}
            <div className="animate-on-scroll bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Innovation & Technology Leadership</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Explore leadership approaches for emerging technologies: genomics, digital health, telemedicine, and AI-driven diagnostics.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Learn to build a culture of innovation, encouraging experimentation and continuous improvement.</span>
                </li>
              </ul>
            </div>

            {/* Change Leadership & Sustainability */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Change Leadership & Sustainability</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop the skills to steer organizations through transformation, disruption, and market evolution.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrate sustainable practices and business models to ensure long-term impact and resilience.</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/leadership-3.jpg"
                  alt="Change Leadership and Sustainability"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1646AF]/60 to-transparent"></div>
              </div>
            </div>

            {/* Immersive, Practical Learning */}
            <div className="animate-on-scroll bg-gradient-to-br from-[#1646AF]/5 to-[#1646AF]/10 p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Immersive, Practical Learning</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Engage in interactive workshops, case studies, simulations, and personalized coaching.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Work on real-world projects that translate concepts into actionable organizational solutions.</span>
                </li>
              </ul>
            </div>

            {/* Target Audience */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1646AF] mb-6">Target Audience</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF]">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Biotech and healthcare executives, department heads, and administrators.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF]">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regulatory affairs professionals, researchers, quality managers, and operational leaders.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1646AF] mb-6">Expected Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#1646AF]/10 to-[#1646AF]/5 p-6 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sharpened strategic thinking and evidence-based decision-making.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stronger talent development, succession planning, and team performance.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1646AF]/10 to-[#1646AF]/5 p-6 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Increased agility to respond to industry disruptions and regulatory shifts.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-gray-700 text-lg">
                      <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                      <span>A strengthened culture of innovation and operational excellence.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact - Closing Statement */}
            <div className="animate-on-scroll mt-12 bg-gradient-to-r from-[#1646AF] to-[#133C99] p-10 rounded-xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Star className="w-12 h-12 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold">Impact</h3>
              </div>
              <p className="text-lg leading-relaxed">
                This programme drives personal growth and organizational transformation, developing leaders who are ethical, adaptive, and forward-thinking. By nurturing capable decision-makers, it ensures that biotechnology and healthcare organizations remain competitive, innovative, and future-ready in the global market.
              </p>
            </div>
          </div>
        )

      case 'investor-opportunity':
        return (
          <div className="space-y-12">
            {/* Main Header */}
            <div className="animate-on-scroll text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">Investor Relations</h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                At AUREX, we believe that our mission to transform healthcare diagnostics represents not just a business — but a powerful, future-ready investment opportunity. By partnering with us, investors can help drive innovation, advance global health, and capture value in one of the world&apos;s most dynamic, fast-growing sectors.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-on-scroll">
              <Image
                src="/images/investor-4.jpg"
                alt="Investment Opportunity in Healthcare Innovation"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#133C99]/85 to-[#1646AF]/85"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <TrendingUp className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Invest in the Future of Healthcare</h3>
                  <p className="text-xl">Partner with Innovation, Drive Global Impact</p>
                </div>
              </div>
            </div>

            {/* Why Invest Section Header */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#133C99] mb-8 border-b-4 border-[#1646AF] pb-2 inline-block">
                Why Invest in AUREX
              </h3>
            </div>

            {/* Thriving Market Landscape */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Thriving Market Landscape</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Global demand for diagnostics, laboratory automation, and healthcare technology is surging — fuelled by rising healthcare needs, precision medicine, and digital transformation.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/investor-1.jpg"
                  alt="Thriving Market Landscape and Growth Opportunities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
              </div>
            </div>

            {/* Innovation-Centric Portfolio */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Innovation-Centric Portfolio</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Our offerings combine advanced engineering and software solutions across multiple high-impact domains:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clinical Diagnostics Automation</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Medical Imaging Sciences</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Stem Cell Banking & Regenerative Medicine Solutions</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Andrology & Advanced Reproductive Diagnostics</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Veterinary & Animal Husbandry Automation</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Analytical Laboratory Automation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Proven, Scalable Business Model */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/investor-2.jpg"
                  alt="Proven Scalable Business Model"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
              </div>
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Proven, Scalable Business Model</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Since 2014, we have partnered with global OEM leaders with patented technologies — delivering globally competitive, quality-assured, and scalable solutions to the Indian and international markets.
                </p>
              </div>
            </div>

            {/* Strategic Global Growth Roadmap */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Strategic Global Growth Roadmap</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our expansion strategy includes building a strong international footprint, forming strategic alliances, and scaling exports — unlocking long-term, sustainable growth potential.
              </p>
            </div>

            {/* Commitment to Sustainability & Impact */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Commitment to Sustainability & Impact</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We go beyond profits. Our initiatives focus on affordable healthcare access, eco-conscious manufacturing, and community development — allowing investors to align with a meaningful social mission.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/investor-3.jpg"
                  alt="Commitment to Sustainability and Social Impact"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
              </div>
            </div>

            {/* Key Investment Opportunities */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#133C99] mb-8 border-b-4 border-[#1646AF] pb-2 inline-block">
                Key Investment Opportunities
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF] hover:shadow-2xl transition-shadow border-x border-b border-gray-100">
                <h5 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  Equity Partnerships
                </h5>
                <p className="text-gray-700 text-lg">Participate in our growth story and benefit from long-term value creation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF] hover:shadow-2xl transition-shadow border-x border-b border-gray-100">
                <h5 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  Joint Ventures & Strategic Alliances
                </h5>
                <p className="text-gray-700 text-lg">Co-develop next-generation technologies and enter new geographies.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF] hover:shadow-2xl transition-shadow border-x border-b border-gray-100">
                <h5 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  R&D Investment
                </h5>
                <p className="text-gray-700 text-lg">Accelerate innovation by funding research and intellectual property development.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1646AF] hover:shadow-2xl transition-shadow border-x border-b border-gray-100">
                <h5 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                  <div className="w-3 h-3 bg-[#1646AF] rounded-full mr-3"></div>
                  Infrastructure & Expansion Funding
                </h5>
                <p className="text-gray-700 text-lg">Scale manufacturing capacity, global distribution, and service networks.</p>
              </div>
            </div>

            {/* Investor Benefits */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#133C99] mb-8 border-b-4 border-[#1646AF] pb-2 inline-block">
                Investor Benefits
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              <div className="bg-[#F6F8FB] p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Attractive ROI from a rapidly expanding healthcare sector.</span>
                </div>
              </div>
              <div className="bg-[#F6F8FB] p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Early-Mover Advantage in niche domains like laboratory automation & reproductive diagnostics.</span>
                </div>
              </div>
              <div className="bg-[#F6F8FB] p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transparent Governance with clear financial reporting and compliance standards.</span>
                </div>
              </div>
              <div className="bg-[#F6F8FB] p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong Leadership with global exposure and deep technical expertise.</span>
                </div>
              </div>
              <div className="bg-[#F6F8FB] p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-3 text-gray-700 text-lg">
                  <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social Impact Opportunity through investments that improve healthcare accessibility.</span>
                </div>
              </div>
            </div>

            {/* Being Shareholder with Us */}
            <div className="animate-on-scroll mt-16 bg-gradient-to-r from-[#133C99] to-[#1646AF] p-10 rounded-xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Star className="w-12 h-12 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold">Being Shareholder with Us</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                At AUREX, we view investors as strategic partners in innovation and impact. By investing in us, you contribute to building the next generation of healthcare solutions, improving lives, and shaping the future of diagnostics — while creating lasting value for all stakeholders.
              </p>
              <div className="mt-8 pt-6 border-t border-white/30">
                <h4 className="text-2xl font-bold mb-4">Contact Our Investor Relations Team</h4>
                <div className="flex flex-col md:flex-row gap-4">
                  <a href="/contact" className="bg-white text-[#1646AF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors text-center shadow-lg">
                    Get in Touch
                  </a>
                  <a href="mailto:investors@aurexbiotech.com" className="bg-[#0B1528] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0B1528]/80 transition-colors text-center border border-white/20">
                    Email Investor Relations
                  </a>
                </div>
              </div>
            </div>
          </div>
        )

      case 'our-vision':
        return (
          <div className="space-y-12">
            {/* Main Vision Statement */}
            <div className="animate-on-scroll text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                Our vision is to redefine healthcare diagnostics through innovation, intelligent automation, and accessible technology. We empower medical and research professionals in India by delivering cutting-edge, cost-effective laboratory solutions supported by exceptional service. Our mission is to create smarter, more efficient laboratories that deliver accurate and timely results — improving patient outcomes, strengthening public health systems, and advancing scientific discovery. Rooted in our commitment to social responsibility, we work toward a future where healthcare innovation is accessible, sustainable, and equitable for all.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-on-scroll">
              <Image
                src="/images/vision-1.jpg"
                alt="AI in Healthcare - Transforming diagnostic technology"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <Target className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Transforming Healthcare, One Lab at a Time</h3>
                  <p className="text-xl">Innovation • Accessibility • Excellence</p>
                </div>
              </div>
            </div>

            {/* Vision Pillars Section */}
            <div className="animate-on-scroll mt-16">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
                Our Vision Pillars
              </h3>
            </div>

            {/* Pioneering Innovation */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Pioneering Innovation</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Driving the next wave of diagnostic excellence through advanced R&D, breakthrough automation, and adoption of disruptive technologies.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vision-2.jpg"
                  alt="Pioneering Innovation in Healthcare Technology"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Expanding Global Presence */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/vision-3.jpg"
                  alt="Expanding Global Healthcare Presence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600 md:col-start-2">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Expanding Global Presence</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Strengthening our footprint across international markets through strategic partnerships, exports, and localized operations — making world-class diagnostics universally available.
                </p>
              </div>
            </div>

            {/* Advancing Access & Affordability */}
            <div className="animate-on-scroll bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Advancing Access & Affordability</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Delivering high-quality, cost-efficient solutions to underserved regions, bridging the healthcare gap and empowering emerging markets.
              </p>
            </div>

            {/* Setting Industry Standards */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Setting Industry Standards</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Collaborating with global health bodies to shape regulatory frameworks, elevate diagnostic accuracy, and ensure patient safety and data integrity.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vision-4.jpg"
                  alt="Setting Healthcare Industry Standards"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Empowering Health Ecosystems */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/vision-5.jpg"
                  alt="Empowering Health Ecosystems and Communities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600 md:col-start-2">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Empowering Health Ecosystems</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Building capacity through training, digital connectivity, and laboratory upskilling — creating more resilient and future-ready healthcare systems.
                </p>
              </div>
            </div>

            {/* Driving Sustainable Impact */}
            <div className="animate-on-scroll bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Driving Sustainable Impact</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Embedding sustainability and ethics into every process — from eco-conscious product design to responsible manufacturing and scalable, long-term health solutions.
              </p>
            </div>

            {/* Our Commitment - Closing Statement */}
            <div className="animate-on-scroll mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 p-10 rounded-xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Star className="w-12 h-12 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold">Our Commitment</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Through these pillars, AUREX is committed to transforming diagnostics globally — delivering measurable impact, raising industry benchmarks, and improving lives worldwide.
              </p>
            </div>
          </div>
        )

      case 'our-mission':
        return (
          <div className="space-y-12">
            {/* Main Mission Statement */}
            <div className="animate-on-scroll text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                We empower healthcare and research professionals with advanced, affordable, and reliable diagnostic solutions that improve lives and strengthen health systems.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-on-scroll">
              <Image
                src="/images/mission-1.jpg"
                alt="Our Mission - Empowering Healthcare Worldwide"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <Target className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Empowering Healthcare Worldwide</h3>
                  <p className="text-xl">Innovation • Accessibility • Excellence</p>
                </div>
              </div>
            </div>

            {/* We are committed to */}
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-bold text-[#133C99] mb-8 text-center">
                We are committed to:
              </h3>
            </div>

            {/* Delivering Innovation */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Delivering Innovation</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Integrating cutting-edge engineering and software technologies into scalable automation solutions for laboratories of all sizes.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mission-2.jpg"
                  alt="Innovation - Hand holding lightbulb representing breakthrough ideas"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Enhancing Accuracy & Efficiency */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/mission-3.jpg"
                  alt="Project Management Efficiency - Optimizing healthcare processes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Enhancing Accuracy & Efficiency</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Creating smarter, faster diagnostic systems that enable better patient outcomes and robust public health infrastructure.
                </p>
              </div>
            </div>

            {/* Expanding Access */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Expanding Access</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Making world-class diagnostics accessible and affordable for underserved regions and emerging markets.
              </p>
            </div>

            {/* Supporting Professionals */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Supporting Professionals</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Offering comprehensive training, technical support, and capacity-building to empower the global healthcare community.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mission-4.jpg"
                  alt="Supporting Healthcare Professionals - Training and development strategies"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Driving Sustainability */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/mission-5.jpg"
                  alt="Driving Sustainability - Environmental consciousness and eco-friendly practices"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Driving Sustainability</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Embedding eco-conscious and ethical practices across product design, manufacturing, and service delivery.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="animate-on-scroll mt-16 bg-gradient-to-r from-[#133C99] to-[#1646AF] p-10 rounded-xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Star className="w-12 h-12 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold">Our Impact</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Through this mission, we aim to make diagnostics a catalyst for healthier societies, enabling timely, accurate decision-making for medical professionals worldwide.
              </p>
            </div>
          </div>
        )

      case 'our-culture':
        return (
          <div className="space-y-12">
            {/* Main Culture Statement */}
            <div className="animate-on-scroll text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">Our Culture</h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                Our culture is the engine that powers our innovation, growth, and impact. We believe that a strong culture drives strong results — for our people, our partners, and the communities we serve.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-on-scroll">
              <Image
                src="/images/culture-1.jpg"
                alt="Scientific Research Laboratory - Our Culture of Excellence"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <Star className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Where Passion Meets Purpose</h3>
                  <p className="text-xl">Innovation • Collaboration • Excellence</p>
                </div>
              </div>
            </div>

            {/* Defined By Us Section */}
            <div className="animate-on-scroll">
              <h3 className="text-3xl md:text-4xl font-bold text-[#133C99] mb-8 text-center">
                Defined By Us
              </h3>
            </div>

            {/* Innovation-First Mindset */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Innovation-First Mindset</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We champion curiosity, creativity, and continuous improvement — empowering teams to turn challenges into opportunities and ideas into breakthroughs.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/culture-2.jpg"
                  alt="Innovation Mindset - Creative thinking and breakthrough ideas"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Collaboration & Respect */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/culture-3.jpg"
                  alt="Collaboration and Respect - Teamwork and inclusive culture"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Collaboration & Respect</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We cultivate openness, inclusivity, and mutual respect, where diverse perspectives fuel better decisions and teamwork drive meaningful outcomes.
                </p>
              </div>
            </div>

            {/* Customer-Centric Approach */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Customer-Centric Approach</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Every solution we deliver is designed to solve real challenges for healthcare professionals, combining practicality with high impact.
              </p>
            </div>

            {/* Commitment to Excellence */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF]">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Commitment to Excellence</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We set the highest benchmarks for quality, precision, and reliability — making excellence a daily discipline, not just a goal.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/culture-4.jpg"
                  alt="Company Culture - Excellence in healthcare innovation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Learning & Growth */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll md:grid-flow-dense">
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl md:col-start-1 md:row-start-1">
                <Image
                  src="/images/culture-5.jpg"
                  alt="Learning and Growth - Professional development and advancement"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-[#F6F8FB] p-8 rounded-xl shadow-lg border-l-4 border-[#1646AF] md:col-start-2">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#1646AF] mr-3" />
                  <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Learning & Growth</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We invest in people through training, mentorship, and knowledge-sharing, ensuring a future-ready, empowered workforce.
                </p>
              </div>
            </div>

            {/* Integrity & Responsibility */}
            <div className="animate-on-scroll bg-[#F6F8FB] p-8 rounded-xl border-l-4 border-[#1646AF]">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#1646AF] mr-3" />
                <h4 className="text-xl md:text-2xl font-semibold text-[#0B1528]">Integrity & Responsibility</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ethical practices and social responsibility guide every decision — from innovation to community engagement.
              </p>
            </div>

            {/* The Outcome - Closing Statement */}
            <div className="animate-on-scroll mt-16 bg-gradient-to-r from-[#133C99] to-[#1646AF] p-10 rounded-xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Star className="w-12 h-12 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold">The Outcome</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Our culture creates an environment where passion meets purpose — inspiring innovation that transforms healthcare and building trust with every stakeholder we serve.
              </p>
            </div>
          </div>
        )

      case 'our-integrity':
        return (
          <div className="space-y-16">
            {/* Main Statement */}
            <div className="text-center max-w-4xl mx-auto px-4 animate-on-scroll">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our integrity is the foundation of our business philosophy and corporate culture. We are committed to operating with the highest ethical standards, transparency, and accountability — not just as a compliance measure, but as a way to foster trust, honesty, and respect in every interaction.
              </p>
            </div>

            {/* Hero Section */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden animate-on-scroll" style={{ backgroundColor: '#1646AF' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-5xl font-bold text-white">Our Integrity</h3>
              </div>
            </div>

            {/* Core Principles Header */}
            <div className="text-center animate-on-scroll">
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#1646AF' }}>Core Principles</h3>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1646AF' }}></div>
            </div>

            {/* 1. Ethical Conduct */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Ethical Conduct</h4>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Uphold uncompromising ethical standards across research, manufacturing, sales, and customer engagement.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Ensure every employee and partner acts with honesty, fairness, and professionalism.</span>
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/integrity-1.jpg"
                  alt="Ethical Conduct - Upholding professional standards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 2. Transparency */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/integrity-2.jpg"
                  alt="Transparency - Open and clear communication"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Transparency</h4>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Communicate openly and clearly with clients, investors, partners, and employees.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Build confidence through visibility that supports informed decisions.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Quality & Compliance */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Quality & Compliance</h4>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Adhere strictly to global quality benchmarks, regulatory requirements, and industry best practices.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Safeguard patient safety, product reliability, and data integrity.</span>
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/integrity-3.jpg"
                  alt="Quality and Compliance - Adhering to global standards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 4. Respect & Responsibility */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/integrity-4.jpg"
                  alt="Respect and Responsibility - Championing dignity and fairness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Respect & Responsibility</h4>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Champion dignity, inclusivity, and fairness for all stakeholders.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Take responsibility for business decisions and their social and environmental impact.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Accountability */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Accountability</h4>
                </div>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Empower teams to uphold these principles at every level.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl mt-1" style={{ color: '#1646AF' }}>•</span>
                    <span>Encourage speaking up in good faith to address concerns and drive continuous improvement.</span>
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/integrity-5.jpg"
                  alt="Accountability - Empowering teams to uphold principles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Closing Statement */}
            <div className="relative rounded-2xl overflow-hidden animate-on-scroll">
              <div className="px-8 py-16 text-center" style={{ background: 'linear-gradient(135deg, #133C99 0%, #0E2A6C 100%)' }}>
                <p className="text-2xl font-semibold text-white leading-relaxed max-w-4xl mx-auto">
                  By embedding these values into everything we do, AUREX builds enduring trust and delivers innovative, reliable healthcare solutions with honour and responsibility.
                </p>
              </div>
            </div>
          </div>
        )

      case 'testimonials':
        return (
          <div className="space-y-16">
            {/* Main Statement */}
            <div className="text-center max-w-4xl mx-auto px-4 animate-on-scroll">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Testimonials page celebrates the voices of our customers, partners, and healthcare professionals who have experienced the impact of AUREX&apos;s solutions firsthand. These stories serve as a powerful testament to our commitment to excellence, innovation, and long-term partnership.
              </p>
            </div>

            {/* Hero Section */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden animate-on-scroll" style={{ backgroundColor: '#1646AF' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-5xl font-bold text-white">Our Testimonials</h3>
              </div>
            </div>

            {/* Discover Here Header */}
            <div className="text-center animate-on-scroll">
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#1646AF' }}>Discover Here</h3>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1646AF' }}></div>
            </div>

            {/* 1. Authentic Customer Quotes */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Authentic Customer Quotes</h4>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Powerful statements highlighting how our solutions have enhanced efficiency, accuracy, and patient care in real-world settings.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonial-1.jpg"
                  alt="Authentic Customer Quotes - Inspirational service feedback"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 2. Case Studies & Success Stories */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/testimonial-2.jpg"
                  alt="Case Studies and Success Stories - SEO illustration methodology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Case Studies & Success Stories</h4>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Detailed accounts showcasing challenges, solutions, and measurable outcomes achieved with our products and services.
                </p>
              </div>
            </div>

            {/* 3. Video Testimonials */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Video Testimonials</h4>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Engaging interviews with clinicians, lab managers, and industry experts sharing their positive experiences and trust in our brand.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonial-3.jpg"
                  alt="Video Testimonials - Engaging customer interviews"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 4. Industry Recognition */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="relative h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/testimonial-4.jpg"
                  alt="Industry Recognition - Employee recognition and excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Industry Recognition</h4>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Endorsements from leading hospitals, research institutions, and diagnostic networks, reinforcing our reputation for quality and reliability.
                </p>
              </div>
            </div>

            {/* 5. Diverse Perspectives */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold" style={{ color: '#1646AF' }}>Diverse Perspectives</h4>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Feedback spanning specialties such as clinical biochemistry, haematology, molecular diagnostics, and advanced automation, reflecting our wide industry impact.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/testimonial-5.jpg"
                  alt="Diverse Perspectives - Multiple viewpoints and inclusivity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* It Matters Because Section */}
            <div className="animate-on-scroll">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4" style={{ color: '#1646AF' }}>It Matters Because</h3>
                <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#1646AF' }}></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Builds Trust */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-t-4" style={{ borderColor: '#1646AF' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: '#1646AF' }}>Builds Trust</h4>
                  </div>
                  <p className="text-gray-700">
                    Authentic voices inspire confidence in our technology and support services.
                  </p>
                </div>

                {/* Demonstrates Value */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-t-4" style={{ borderColor: '#1646AF' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: '#1646AF' }}>Demonstrates Value</h4>
                  </div>
                  <p className="text-gray-700">
                    Real-world results highlight the ROI and performance advantages of partnering with us.
                  </p>
                </div>

                {/* Creates Connection */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-t-4" style={{ borderColor: '#1646AF' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#1646AF' }}>
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: '#1646AF' }}>Creates Connection</h4>
                  </div>
                  <p className="text-gray-700">
                    Stories and experiences resonate with potential clients, making our brand relatable and memorable.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="relative rounded-2xl overflow-hidden animate-on-scroll">
              <div className="px-8 py-16 text-center" style={{ background: 'linear-gradient(135deg, #133C99 0%, #0E2A6C 100%)' }}>
                <p className="text-2xl font-semibold text-white leading-relaxed max-w-4xl mx-auto">
                  Featuring genuine voices and real outcomes, our Testimonials page reflects AUREX&apos;s unwavering commitment to customer satisfaction, continuous innovation, and empowering healthcare excellence.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Select a sub-topic above to view details.</p>
          </div>
        )
    }
  }

  // Get current section title and metadata - Direct mapping without data object dependency
  const getCurrentSectionMeta = () => {
    switch (activeTab) {
      case 'company-profile':
        return {
          title: 'Company Profile',
          subtitle: 'Delivering Excellence in Diagnostics',
          description: 'AUREX is a trusted leader in advanced healthcare and diagnostic solutions.'
        }
      case 'social-responsibilities':
        return {
          title: 'Social Responsibilities',
          subtitle: 'Creating Positive Impact Through Healthcare',
          description: 'Social responsibility is a fundamental value embedded in our mission and operations.'
        }
      case 'leadership-programme':
        return {
          title: 'Leadership Programme',
          subtitle: 'Developing Future Leaders in Biotechnology & Healthcare',
          description: 'Equipping current and aspiring leaders with strategic vision, managerial acumen, and innovation-driven mindset.'
        }
      case 'investor-opportunity':
        return {
          title: 'Investor Opportunity',
          subtitle: 'Investor Relations',
          description: 'At AUREX, we believe that our mission to transform healthcare diagnostics represents not just a business — but a powerful, future-ready investment opportunity.'
        }
      case 'our-vision':
        return {
          title: 'Our Vision',
          subtitle: 'Shaping the Future of Diagnostics Worldwide',
          description: 'Our vision is to redefine healthcare diagnostics through innovation, intelligent automation, and accessible technology.'
        }
      case 'our-mission':
        return {
          title: 'Our Mission',
          subtitle: 'Empowering Healthcare Professionals with Advanced Diagnostic Solutions',
          description: 'We empower healthcare and research professionals with advanced, affordable, and reliable diagnostic solutions that improve lives and strengthen health systems.'
        }
      case 'our-culture':
        return {
          title: 'Our Culture',
          subtitle: 'Innovation, Collaboration, and Excellence at Every Step',
          description: 'Our culture is the engine that powers our innovation, growth, and impact.'
        }
      case 'our-integrity':
        return {
          title: 'Our Integrity',
          subtitle: 'Building Trust Through Ethical Excellence',
          description: 'Our integrity is the foundation of our business philosophy and corporate culture.'
        }
      case 'testimonials':
        return {
          title: 'Testimonials',
          subtitle: 'Celebrating Customer Success Stories',
          description: 'Our Testimonials page celebrates the voices of our customers, partners, and healthcare professionals.'
        }
      default:
        return {
          title: 'Company',
          subtitle: 'Select a topic',
          description: 'Choose a sub-topic from the navigation above'
        }
    }
  }

  const currentMeta = getCurrentSectionMeta()

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="company-scroll-progress" className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] z-50" style={{ width: '0%' }} />
      
      {/* Hero Banner */}
      <HeroBanner activeSection={activeTab} />
      
      {/* Sub Navigation */}
      <SubNavigation activeSection={activeTab} setActiveSection={setActiveTab} />
      
      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">
              {currentMeta.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-6 rounded-full"></div>
            <h2 className="text-2xl text-gray-700 font-semibold mb-4">
              {currentMeta.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentMeta.description}
            </p>
          </div>

          {/* Dynamic Content - Using Switch Statement */}
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scale-in">
            <button className="bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#0B1528] hover:to-[#133C99] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              {activeTab === 'investor-opportunity' ? 'Contact Investor Relations' : 
               activeTab === 'testimonials' ? 'View All Testimonials' : 
               'Learn More About Us'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default function CompanyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CompanyPageContent />
    </Suspense>
  )
}
