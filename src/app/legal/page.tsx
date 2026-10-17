'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'

// Type definitions
interface StatItem {
  icon: React.ElementType
  label: string
  value: string
}

interface TimelineItem {
  year: string
  event: string
}

type ContentItem = 
  | { type: 'text'; data: string }
  | { type: 'stats'; data: StatItem[] }
  | { type: 'benefits'; data: string[] }
  | { type: 'timeline'; data: TimelineItem[] }

// Sub-navigation items - Updated with new legal policy topics
const legalSubNavigation = [
  { id: 'our-sales-policy', name: 'Our Sales Policy', active: true },
  { id: 'our-service-policy', name: 'Our Service Policy', active: false },
  { id: 'warranty-policy', name: 'Warranty Policy', active: false },
  { id: 'integrity-policy', name: 'Integrity Policy', active: false },
  { id: 'declaimers', name: 'Declaimers', active: false },
  { id: 'cookies-policy', name: 'Cookies Policy', active: false }
]

// Content data for each legal section
const legalContent = {
  'our-sales-policy': {
    title: 'Our Sales Policy',
    subtitle: 'Client-Focused, Transparent, and Reliable',
    description: 'At AUREX, we are committed to a client-first approach. Our sales policies ensure transparency, efficiency, and long-term partnerships by providing clear processes, customized solutions, and dedicated support for all healthcare and research requirements.',
    content: [
      {
        type: 'text',
        data: 'At AUREX, we are committed to a client-first approach. Our sales policies ensure transparency, efficiency, and long-term partnerships by providing clear processes, customized solutions, and dedicated support for all healthcare and research requirements.'
      },
      {
        type: 'text',
        data: 'Pre-Sales Policies:'
      },
      {
        type: 'benefits',
        data: [
          'Transparent Pricing - Competitive, value-driven pricing with no hidden costs. Tailored quotations based on client-specific needs, volumes, and project scope',
          'Customized Solutions - Personalized product recommendations aligned with laboratory workflows and research goals. Flexible options: phased deployments, leasing, or bundled packages',
          'Product Demonstration & Consultation - Live demonstrations and trials for informed decision-making. Expert consultation for optimal solution selection and integration guidance'
        ]
      },
      {
        type: 'text',
        data: 'Sales Policies:'
      },
      {
        type: 'benefits',
        data: [
          'Order Processing & Delivery - Streamlined order confirmation and real-time tracking. On-time delivery with secure packaging and professional logistics support',
          'Payment Terms & Financing Options - Multiple payment modes: bank transfer, online payments, and EMI plans. Milestone-based payment schedules for turnkey or large-scale projects',
          'Ethical Standards & Confidentiality - Strict adherence to client confidentiality and ethical business practices. Transparent documentation for every transaction',
          'Feedback & Continuous Improvement - Clients are encouraged to share feedback. Commitment to continuous improvement to enhance service quality and client satisfaction'
        ]
      },
      {
        type: 'text',
        data: 'Why Clients Choose AUREX:'
      },
      {
        type: 'benefits',
        data: [
          'Transparency: Clear pricing, policies, and communication',
          'Customization: Solutions tailored to unique lab and research requirements',
          'Reliability: End-to-end support from pre-sales to post-sales service',
          'Trust & Integrity: Ethical practices, data confidentiality, and client-centric approach',
          'Long-Term Partnerships: Supporting operational excellence and scientific advancement'
        ]
      }
    ]
  },
  'our-service-policy': {
    title: 'Our Service Policy',
    subtitle: 'Reliable, Transparent, and Client-Centric',
    description: 'Our service policies are designed to ensure seamless operations, maximum uptime, and long-term client satisfaction. From installation to maintenance and compliance support, we provide comprehensive solutions that empower laboratories, hospitals, and research facilities.',
    content: [
      {
        type: 'text',
        data: 'Our service policies are designed to ensure seamless operations, maximum uptime, and long-term client satisfaction. From installation to maintenance and compliance support, we provide comprehensive solutions that empower laboratories, hospitals, and research facilities.'
      },
      {
        type: 'text',
        data: 'Installation & Commissioning:'
      },
      {
        type: 'benefits',
        data: [
          'Professional installation by certified engineers',
          'Complete commissioning support for accurate performance and regulatory compliance',
          'Calibration and validation to ensure instruments are ready for immediate use'
        ]
      },
      {
        type: 'text',
        data: 'Maintenance Contracts:'
      },
      {
        type: 'benefits',
        data: [
          'Annual Maintenance Contract (AMC) - Scheduled preventive maintenance for reliable performance. Timely service visits and remote troubleshooting support',
          'Comprehensive Maintenance Contract (CMC) - Full-service coverage including repairs, replacements, and technical advisory. Priority response to minimize downtime and ensure operational continuity'
        ]
      },
      {
        type: 'text',
        data: 'Spare Parts & Reagents:'
      },
      {
        type: 'benefits',
        data: [
          'Supply of original spare parts and certified reagents',
          'Fast delivery and technical guidance for replacements',
          'Maintains accuracy, reliability, and long-term instrument performance'
        ]
      },
      {
        type: 'text',
        data: 'Technical Support & Troubleshooting:'
      },
      {
        type: 'benefits',
        data: [
          '24/7 support via phone, email, and remote diagnostics',
          'On-site assistance for complex issues',
          'Expert guidance for workflow optimization and instrument operation'
        ]
      },
      {
        type: 'text',
        data: 'Training & Capacity Building:'
      },
      {
        type: 'benefits',
        data: [
          'Hands-on training for laboratory staff on operation, maintenance, and quality assurance',
          'Workshops, e-learning modules, and virtual tutorials',
          'Knowledge transfer ensures clients maximize their investment'
        ]
      },
      {
        type: 'text',
        data: 'Regulatory & Compliance Support:'
      },
      {
        type: 'benefits',
        data: [
          'Assistance with third-party certifications and regulatory approvals',
          'Guidance on GLP, NABL, ISO, and other compliance standards',
          'Documentation support for audits and legal compliance'
        ]
      },
      {
        type: 'text',
        data: 'Client Feedback & Continuous Improvement:'
      },
      {
        type: 'benefits',
        data: [
          'Clients can provide feedback on all service aspects',
          'Commitment to continuous improvement based on client insights',
          'Ensures evolving support aligned with operational needs'
        ]
      },
      {
        type: 'text',
        data: 'Key Benefits for Clients:'
      },
      {
        type: 'benefits',
        data: [
          'Reliable and timely service to minimize downtime',
          'Access to original parts, certified reagents, and skilled technicians',
          'Transparent policies with clear terms',
          'Enhanced operational efficiency, compliance, and productivity',
          'Strengthened trust through ethical and client-focused practices'
        ]
      },
      {
        type: 'text',
        data: 'Our Service Policies deliver end-to-end support, technical expertise, and operational excellence, enabling clients to focus on accurate diagnostics, research innovation, and superior patient care.'
      }
    ]
  },
  'warranty-policy': {
    title: 'Warranty Policy',
    subtitle: 'Reliable, Transparent, and Client-Focused',
    description: 'We ensure that all our diagnostic instruments, laboratory automation systems, and related products are backed by a robust and transparent warranty, offering clients peace of mind and confidence in their investment.',
    content: [
      {
        type: 'text',
        data: 'We ensure that all our diagnostic instruments, laboratory automation systems, and related products are backed by a robust and transparent warranty, offering clients peace of mind and confidence in their investment.'
      },
      {
        type: 'text',
        data: 'Warranty Coverage:'
      },
      {
        type: 'benefits',
        data: [
          'Covers defects in materials, workmanship, and functionality under normal operating conditions',
          'Includes certified reagents and accessories supplied with instruments for quality assurance',
          'Applies only to products used according to user manuals and training guidelines'
        ]
      },
      {
        type: 'text',
        data: 'Warranty Period:'
      },
      {
        type: 'benefits',
        data: [
          'Standard warranty duration is specified in the purchase agreement or invoice',
          'Effective from the date of installation and commissioning',
          'Extended warranty options are available for long-term coverage'
        ]
      },
      {
        type: 'text',
        data: 'Warranty Services:'
      },
      {
        type: 'benefits',
        data: [
          'Repair or Replacement: Faulty components or instruments are repaired or replaced at no additional cost',
          'On-Site Support: Certified engineers provide prompt on-site troubleshooting and service',
          'Remote Assistance: Tele-support and diagnostics for minor issues to reduce downtime'
        ]
      },
      {
        type: 'text',
        data: 'Terms & Conditions:'
      },
      {
        type: 'benefits',
        data: [
          'Warranty excludes damage caused by misuse, unauthorized modifications, environmental factors, or accidents',
          'Routine maintenance, consumables, and normal wear-and-tear are not covered',
          'Warranty claims require purchase proof, installation report, and warranty certificate'
        ]
      },
      {
        type: 'text',
        data: 'Warranty Claim Process:'
      },
      {
        type: 'benefits',
        data: [
          '1. Report issues via official support channels: email, phone, or portal',
          '2. Claims are evaluated promptly, and corrective action is scheduled',
          '3. Transparent tracking ensures clients are informed at every step'
        ]
      },
      {
        type: 'text',
        data: 'Additional Benefits:'
      },
      {
        type: 'benefits',
        data: [
          'Priority support for clients under AMC/CMC agreements',
          'Guaranteed access to original spare parts and certified reagents',
          'Supports operational efficiency, reliability, and client confidence'
        ]
      },
      {
        type: 'text',
        data: 'Our Warranty Policies ensure clients receive trusted, high-performance, and dependable solutions, reinforcing long-term partnerships and operational excellence.'
      },
      {
        type: 'text',
        data: 'Copy Rights & Intellectual Property:'
      },
      {
        type: 'text',
        data: 'Ownership of Content:'
      },
      {
        type: 'benefits',
        data: [
          'All content—including text, images, videos, logos, and downloads—is copyright protected',
          'Unauthorized reproduction, modification, or distribution is prohibited'
        ]
      },
      {
        type: 'text',
        data: 'Usage Permissions:'
      },
      {
        type: 'benefits',
        data: [
          'Materials may be used for personal, educational, or professional purposes with proper attribution',
          'Commercial use or public distribution requires written permission'
        ]
      },
      {
        type: 'text',
        data: 'Third-Party Content:'
      },
      {
        type: 'benefits',
        data: [
          'Any third-party content is used under proper licenses or permissions',
          'Users must not violate third-party copyrights'
        ]
      },
      {
        type: 'text',
        data: 'Compliance & Legal Obligations:'
      },
      {
        type: 'benefits',
        data: [
          'We follow all relevant national and international privacy and copyright laws',
          'Violations of copyright or unauthorized use of content may result in legal action'
        ]
      }
    ]
  },
  'integrity-policy': {
    title: 'Integrity Policy',
    subtitle: 'Ethical Excellence, Transparency, and Accountability',
    description: 'At AUREX, integrity is the foundation of everything we do. We are committed to conducting all operations with ethical excellence, transparency, and accountability, building trust with clients, partners, employees, and stakeholders worldwide.',
    content: [
      {
        type: 'text',
        data: 'At AUREX, integrity is the foundation of everything we do. We are committed to conducting all operations with ethical excellence, transparency, and accountability, building trust with clients, partners, employees, and stakeholders worldwide.'
      },
      {
        type: 'text',
        data: 'Our Core Principles:'
      },
      {
        type: 'benefits',
        data: [
          'Ethical Conduct - Maintain uncompromising ethical practices across research, manufacturing, sales, and support. Ensure all employees and partners act with honesty, fairness, and professionalism',
          'Transparency - Provide clear, accurate, and timely communication to clients, investors, and stakeholders. Promote informed decision-making and accountability in all business activities',
          'Quality & Compliance - Adhere strictly to regulatory standards, industry best practices, and quality protocols. Prioritize patient safety, product reliability, and data integrity',
          'Respect & Responsibility - Treat all stakeholders with dignity and fairness. Accept responsibility for actions and their impact on society, the environment, and business',
          'Accountability - Ensure employees are responsible for upholding these principles. Encourage reporting of unethical behaviour in good faith to promote continuous improvement'
        ]
      },
      {
        type: 'text',
        data: 'Implementation & Commitment:'
      },
      {
        type: 'benefits',
        data: [
          'Integrity is embedded in every process, operation, and decision',
          'Regular training, audits, and awareness programs reinforce adherence',
          'Leadership sets the standard, ensuring integrity guides both strategic and daily decisions'
        ]
      },
      {
        type: 'text',
        data: 'Why Integrity Matters:'
      },
      {
        type: 'benefits',
        data: [
          'Builds trust and credibility with clients, partners, and stakeholders',
          'Strengthens organizational culture, accountability, and employee engagement',
          'Supports sustainable growth and a strong reputation in the healthcare industry'
        ]
      },
      {
        type: 'text',
        data: 'By making integrity the cornerstone of our work, AUREX delivers reliable, ethical, and high-quality healthcare solutions, while earning the confidence and trust of all those we serve.'
      }
    ]
  },
  'declaimers': {
    title: 'Website Disclaimer',
    subtitle: 'AUREX',
    description: 'The content, materials, and services provided on this website ("Site") by AUREX ("we," "our," or "us") are intended for general informational and educational purposes only. By accessing or using this Site, you acknowledge and agree to this Disclaimer. If you do not agree, please refrain from using our Site.',
    content: [
      {
        type: 'text',
        data: 'Last Updated: 2026'
      },
      {
        type: 'text',
        data: 'The content, materials, and services provided on this website ("Site") by AUREX ("we," "our," or "us") are intended for general informational and educational purposes only. By accessing or using this Site, you acknowledge and agree to this Disclaimer. If you do not agree, please refrain from using our Site.'
      },
      {
        type: 'text',
        data: 'No Medical or Professional Advice:'
      },
      {
        type: 'text',
        data: 'All content, products, and services on this Site are provided solely for informational purposes to the Medical, Healthcare and Research and Development Professionals do not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding any medical condition, diagnosis, or treatment options.'
      },
      {
        type: 'text',
        data: 'Accuracy of Information:'
      },
      {
        type: 'text',
        data: 'While we strive to ensure that the information presented on this Site is accurate, current, and reliable, we make no express or implied warranties regarding the completeness, suitability, or accuracy of the content, products, or services. Your use of this Site and reliance on any information is entirely at your own risk.'
      },
      {
        type: 'text',
        data: 'Limitation of Liability:'
      },
      {
        type: 'text',
        data: 'AUREX, including its directors, employees, and affiliates, shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:'
      },
      {
        type: 'benefits',
        data: [
          'Accessing or using the Site',
          'Reliance on any content, products, or services provided',
          'Errors, omissions, or inaccuracies in information',
          'Technical failures, viruses, or downtime'
        ]
      },
      {
        type: 'text',
        data: 'Third-Party Links:'
      },
      {
        type: 'text',
        data: 'The Site may contain links to third-party websites for reference and convenience only. We do not control, endorse, or assume responsibility for the content, products, services, or practices of any linked third-party websites.'
      },
      {
        type: 'text',
        data: 'Intellectual Property:'
      },
      {
        type: 'text',
        data: 'All content on this Site—including text, graphics, logos, images, and downloadable materials—is the intellectual property of AUREX, unless otherwise stated. Unauthorized use, reproduction, or distribution of any material is strictly prohibited.'
      },
      {
        type: 'text',
        data: 'Changes to This Disclaimer:'
      },
      {
        type: 'text',
        data: 'We reserve the right to modify or update this Disclaimer at any time without prior notice. Continued use of the Site following any changes constitutes your acceptance of the updated Disclaimer.'
      }
    ]
  },
  'cookies-policy': {
    title: 'Cookie Policy',
    subtitle: 'AUREX',
    description: 'AUREX ("we," "our," or "us") uses cookies and similar technologies on this website ("Site") to enhance your browsing experience, analyze site performance, and personalize content. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.',
    content: [
      {
        type: 'text',
        data: 'Last Updated: 2026'
      },
      {
        type: 'text',
        data: 'AUREX ("we," "our," or "us") uses cookies and similar technologies on this website ("Site") to enhance your browsing experience, analyze site performance, and personalize content. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.'
      },
      {
        type: 'text',
        data: 'What Are Cookies?'
      },
      {
        type: 'text',
        data: 'Cookies are small text files stored on your device when you visit a website. They enable the Site to remember your actions, preferences, and login information, providing a smoother and more personalized user experience.'
      },
      {
        type: 'text',
        data: 'Types of Cookies We Use:'
      },
      {
        type: 'benefits',
        data: [
          'Essential Cookies - Required for core website functionality. Enable features such as secure login, form submissions, and navigation',
          'Performance & Analytics Cookies - Collect anonymized data on Site usage. Help measure traffic, identify popular pages, and enhance performance',
          'Functional Cookies - Remember user preferences (e.g., language, location, display settings). Enable a more tailored browsing experience',
          'Marketing & Advertising Cookies - Track browsing behaviour to deliver relevant advertisements where applicable. Help evaluate the effectiveness of marketing campaigns'
        ]
      },
      {
        type: 'text',
        data: 'Third-Party Cookies:'
      },
      {
        type: 'text',
        data: 'Certain cookies may be set by third-party services integrated into our Site, such as Google Analytics, YouTube, or social media plugins. These third parties may collect and use data according to their own privacy policies.'
      },
      {
        type: 'text',
        data: 'How We Use Cookies:'
      },
      {
        type: 'text',
        data: 'We use cookies to:'
      },
      {
        type: 'benefits',
        data: [
          'Ensure secure and reliable website functionality',
          'Enhance user experience by remembering preferences',
          'Analyze traffic and user behaviour to optimize content and services',
          'Deliver relevant marketing content where applicable'
        ]
      },
      {
        type: 'text',
        data: 'Managing Your Cookie Preferences:'
      },
      {
        type: 'text',
        data: 'You have control over cookies and can:'
      },
      {
        type: 'benefits',
        data: [
          'Accept or reject non-essential cookies via our cookie banner (if implemented)',
          'Adjust browser settings to block or delete cookies',
          'Opt out of tracking cookies through third-party tools (e.g., Google Analytics opt-out)'
        ]
      },
      {
        type: 'text',
        data: 'Note: Disabling certain cookies may affect website functionality and limit your user experience.'
      },
      {
        type: 'text',
        data: 'Updates to This Policy:'
      },
      {
        type: 'text',
        data: 'We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or business practices. Any updates will be posted here with a revised "Last Updated" date.'
      }
    ]
  }
}

// Content Components
const TextContent = ({ text }: { text: string }) => (
  <div className="prose prose-lg max-w-none mb-8">
    <p className="text-gray-700 leading-relaxed text-lg">{text}</p>
  </div>
)

const StatsContent = ({ stats }: { stats: StatItem[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-center bg-[#F6F8FB] border border-[#BFBFBF]/40 p-6 rounded-xl"
      >
        <stat.icon className="w-8 h-8 text-[#1646AF] mx-auto mb-4" />
        <div className="text-3xl font-bold text-[#0B1528] mb-2">{stat.value}</div>
        <div className="text-sm text-[#64748B] font-medium">{stat.label}</div>
      </motion.div>
    ))}
  </div>
)

const TimelineContent = ({ timeline }: { timeline: TimelineItem[] }) => (
  <div className="space-y-6 mb-12">
    {timeline.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-4 bg-[#F6F8FB] p-6 rounded-lg border border-gray-100"
      >
        <div className="bg-[#1646AF] text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center shadow-sm">
          {item.year}
        </div>
        <p className="text-gray-700 text-lg flex-1">{item.event}</p>
      </motion.div>
    ))}
  </div>
)

const BenefitsContent = ({ benefits }: { benefits: string[] }) => (
  <div className="grid md:grid-cols-2 gap-4 mb-12">
    {benefits.map((benefit, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-3 bg-[#F6F8FB] p-4 rounded-lg border border-gray-100"
      >
        <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-gray-700">{benefit}</p>
      </motion.div>
    ))}
  </div>
)

// Hero Banner Component
const HeroBanner = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/90 via-[#133C99]/85 to-[#1646AF]/85 z-10"></div>
        <Image
          src="/images/background.jpg"
          alt="Legal Documents and Policies"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-100 mb-8 tracking-tight">
            Legal Tenders
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Comprehensive policies and legal documentation for transparent business operations.
          </p>
        </motion.div>
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
          {legalSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-4 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg overflow-hidden ${
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
                transition={{ duration: 0.2 }}
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

// Main Legal Page Component
export default function LegalPage() {
  const [activeSection, setActiveSection] = useState('our-sales-policy')

  // Get current section content
  const currentContent = legalContent[activeSection as keyof typeof legalContent]

  const renderContent = (item: ContentItem) => {
    switch (item.type) {
      case 'text':
        return <TextContent key={Math.random()} text={item.data} />
      case 'stats':
        return <StatsContent key={Math.random()} stats={item.data} />
      case 'timeline':
        return <TimelineContent key={Math.random()} timeline={item.data} />
      case 'benefits':
        return <BenefitsContent key={Math.random()} benefits={item.data} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1528] mb-6">
              {currentContent.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-6 rounded-full"></div>
            <h2 className="text-2xl text-gray-700 font-semibold mb-4">
              {currentContent.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>
          </motion.div>

          {/* Dynamic Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {currentContent.content.map((item, index) => (
              <div key={index}>
                {renderContent(item as ContentItem)}
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300 shadow-lg"
            >
              {activeSection === 'our-sales-policy' ? 'View Sales Terms' : 
               activeSection === 'warranty-policy' ? 'Download Warranty Guide' : 
               activeSection === 'cookies-policy' ? 'Manage Cookie Preferences' :
               activeSection === 'declaimers' ? 'Read Full Disclaimers' :
               'Download Policy Documentation'}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}