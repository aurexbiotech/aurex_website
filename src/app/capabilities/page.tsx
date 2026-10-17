'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Settings, Headphones, BookOpen, Microscope, Cpu, Shield, Lightbulb, Globe, GraduationCap, FileCheck, FileText, Award } from 'lucide-react'

// Sub-navigation items - Updated with new capabilities topics
const capabilitiesSubNavigation = [
  { id: 'turnkey-projects', name: 'Turnkey Projects', active: true },
  { id: 'service', name: 'Service', active: false },
  { id: 'supports', name: 'Supports', active: false },
  { id: 'knowledge-centre', name: 'Knowledge Centre', active: false },
  { id: 'digital-learning-platforms', name: 'Digital Learning Platforms', active: false },
  { id: 'skill-centre', name: 'Skill Centre', active: false },
  { id: 'downloads', name: 'Downloads', active: false },
  { id: 'workshops', name: 'Workshops', active: false },
  { id: 'media-centre', name: 'Media Centre', active: false },
  { id: 'blogs', name: 'Blogs', active: false }
]

// Content data for each capabilities section
const capabilitiesContent = {
  'turnkey-projects': {
    title: 'Turnkey Projects',
    subtitle: 'Building Future-Ready Healthcare Ecosystems',
    description: 'End-to-end turnkey solutions for multispecialty hospitals, diagnostic laboratories, and R&D facilities — delivering ready-to-operate facilities that are efficient, scalable, and globally compliant.',
    content: [
      {
        type: 'turnkey-content',
        data: {
          intro: {
            title: 'Turnkey Projects: Building Future-Ready Healthcare Ecosystems',
            text: 'We deliver end-to-end turnkey solutions for multispecialty hospitals, diagnostic laboratories, and R&D facilities, enabling clients to focus on care and innovation while we handle everything else. Our holistic approach spans conceptual design, legal compliance, certification, business model development, and commissioning — delivering ready-to-operate facilities that are efficient, scalable, and globally compliant.'
          },
          solutions: [
            {
              title: 'Multispecialty Hospital Turnkey Solutions',
              sections: [
                {
                  subtitle: 'Planning & Design',
                  points: [
                    'Collaborative planning with architects, medical planners, and compliance experts to design patient-centric, regulation-ready spaces.',
                    'Optimize patient flow, staff productivity, and ensure safety and infrastructure compliance.'
                  ]
                },
                {
                  subtitle: 'Infrastructure Development',
                  description: 'Execution of civil works, MEP, HVAC, and medical gas systems to meet international healthcare standards.'
                },
                {
                  subtitle: 'Medical Equipment Integration',
                  description: 'Supply, installation, and calibration of diagnostic, imaging, surgical, and ICU equipment.'
                },
                {
                  subtitle: 'Healthcare IT & Digital Systems',
                  description: 'Implementation of HIS, EMR, PACS, and interoperability solutions, ensuring compliance with data privacy regulations.'
                },
                {
                  subtitle: 'Legal & Certification Support',
                  description: 'End-to-end assistance with hospital licensing, NABH accreditation, fire & safety clearances, biomedical waste compliance, and environmental approvals.'
                },
                {
                  subtitle: 'Business Models & Scalability',
                  points: [
                    'Development of customized business and revenue models, service-line planning, and financial feasibility studies.',
                    'Design of scalable operational frameworks to support long-term growth and service expansion.'
                  ]
                },
                {
                  subtitle: 'Training & Commissioning',
                  points: [
                    'Hands-on staff training for equipment, infection control, and workflow management.',
                    'Complete commissioning and documentation for a smooth, compliant facility launch.'
                  ]
                }
              ],
              image: 'hospital-design'
            },
            {
              title: 'Multispecialty Laboratory Turnkey Solutions',
              sections: [
                {
                  subtitle: 'Lab Design & Workflow Optimization',
                  description: 'Design modular, flexible labs aligned with NABL, WHO, and BIS standards.'
                },
                {
                  subtitle: 'Equipment Procurement & Installation',
                  description: 'Supply, installation, and calibration of Analyzers and lab instruments with validation reports.'
                },
                {
                  subtitle: 'Automation & IT Integration',
                  description: 'Setup of LIMS, sample tracking systems, and workflow automation with regulatory-compliant data management.'
                },
                {
                  subtitle: 'Quality, Legal & Accreditation Support',
                  description: 'Assistance with NABL accreditation, ISO 15189 compliance, SOP development, and biosafety approvals.'
                },
                {
                  subtitle: 'Business & Growth Roadmap',
                  description: 'Creation of operational models, pricing strategies, and scalability modules to help labs expand into multiple locations or add new specialties seamlessly.'
                }
              ],
              image: 'lab-interior'
            },
            {
              title: 'Research & Development Laboratory Turnkey Solutions',
              sections: [
                {
                  subtitle: 'Custom Lab Design',
                  description: 'Bespoke R&D spaces designed for specific disciplines, clean room classifications, and GLP compliance.'
                },
                {
                  subtitle: 'Advanced Instrumentation',
                  description: 'Supply and commissioning of high-precision equipment with traceable calibration certificates.'
                },
                {
                  subtitle: 'Regulatory & Certification Facilitation',
                  description: 'Support for GLP certification, DSIR recognition, biosafety compliance (BSL-2/BSL-3), and IP documentation.'
                },
                {
                  subtitle: 'Business Model Advisory',
                  description: 'Guidance for commercialization of research outcomes, IP strategy, and funding models to accelerate innovation.'
                }
              ],
              image: 'rd-cleanroom'
            }
          ],
          benefits: [
            'Single-Window Execution – Design, legal, certification, business planning, and commissioning under one roof.',
            'Ready-to-Operate Facilities – Compliant, accredited, and revenue-ready from day one.',
            'Tailored Business Models – Strategic frameworks designed to ensure profitability and scalability.',
            'Regulatory Confidence – Documentation and approvals that stand up to audits and inspections.',
            'Future-Ready Growth – Built-in scalability for multi-location expansion and service diversification.'
          ],
          impact: {
            title: 'Our Impact',
            text: 'We go beyond construction — we build operationally sound, scalable, and future-proof healthcare ecosystems. Our turnkey solutions empower clients to deliver world-class patient care, run profitable operations, and remain agile in a rapidly evolving healthcare landscape.',
            image: 'global-compliance'
          }
        }
      }
    ]
  },
  'service': {
    title: 'Service',
    subtitle: 'Comprehensive Laboratory Service Solutions',
    description: 'Professional service solutions covering equipment maintenance, technical support, and operational assistance to ensure optimal laboratory performance.',
    content: [
      {
        type: 'service-content',
        data: null
      }
    ]
  },
  'supports': {
    title: 'Supports',
    subtitle: 'Certification & Regulatory Compliance Support',
    description: 'We understand that regulatory compliance and third-party certifications are critical for establishing trust, ensuring quality, and meeting industry benchmarks. We provide end-to-end support to help our clients obtain the necessary certifications that validate their operations, products, and services.',
    content: [
      {
        type: 'text',
        data: 'We understand that regulatory compliance and third-party certifications are critical for establishing trust, ensuring quality, and meeting industry benchmarks. We provide end-to-end support to help our clients obtain the necessary certifications that validate their operations, products, and services.'
      },
      {
        type: 'text',
        data: 'Our Certification Support Includes:'
      },
      {
        type: 'benefits',
        data: [
          'NABL (National Accreditation Board for Testing and Calibration Laboratories) - Guidance on implementing quality management systems (QMS) for laboratory accreditation, preparation of documentation, SOPs, and internal audits, pre-assessment readiness checks and gap analysis',
          'NABH (National Accreditation Board for Hospitals & Healthcare Providers) - Support for hospital quality and patient safety compliance, assistance in setting up procedures for infection control, staff training, and facility management',
          'ISO Certifications (ISO 9001, ISO 13485, ISO 15189, etc.) - Consulting for implementing internationally recognized standards for quality, safety, and efficiency, complete documentation, process alignment, and compliance tracking',
          'CE, FDA, and Other Global Certifications - Assistance with CE marking, FDA clearance, and other global regulatory requirements for medical devices and diagnostics, coordination with authorized certification bodies for testing and approval',
          'Environmental, Health & Safety Certifications - Support in achieving ISO 14001 (Environmental Management) and ISO 45001 (Occupational Health & Safety) certifications, implementation of eco-friendly, safe, and sustainable lab practices'
        ]
      },
      {
        type: 'text',
        data: 'Our Approach:'
      },
      {
        type: 'benefits',
        data: [
          'Gap Analysis & Roadmap: Identify compliance gaps and create a step-by-step plan to achieve certification',
          'Documentation & SOP Development: Prepare robust, audit-ready documentation',
          'Training & Awareness: Equip staff with knowledge to maintain compliance long-term',
          'Audit & Liaison Support: Coordinate with third-party auditors, provide pre-audit checks, and support during assessments',
          'Continuous Improvement: Help clients maintain certification through periodic reviews and updates'
        ]
      },
      {
        type: 'text',
        data: 'Value to Our Clients:'
      },
      {
        type: 'benefits',
        data: [
          'Faster Certification Process – Streamlined approach saves time and reduces rework',
          'Regulatory Confidence – Ensures compliance with local and global healthcare standards',
          'Enhanced Credibility – Strengthens market reputation and builds patient trust',
          'Business Growth Enablement – Opens doors to collaborations, funding, and new market opportunities'
        ]
      }
    ]
  },
  'knowledge-centre': {
    title: 'Knowledge Centre',
    subtitle: 'Innovation, Education, and Collaboration Hub',
    description: 'The Knowledge Centre at AUREX is a dedicated hub for innovation, education, and collaboration, created to empower healthcare professionals, researchers, and clients with cutting-edge insights and practical expertise. It reflects our commitment to continuous learning, skill-building, and shaping the future of diagnostics.',
    content: [
      {
        type: 'text',
        data: 'The Knowledge Centre at AUREX is a dedicated hub for innovation, education, and collaboration, created to empower healthcare professionals, researchers, and clients with cutting-edge insights and practical expertise. It reflects our commitment to continuous learning, skill-building, and shaping the future of diagnostics.'
      },
      {
        type: 'text',
        data: 'Key Features:'
      },
      {
        type: 'benefits',
        data: [
          'Resource Library - Curated collection of scientific articles, whitepapers, product manuals, and application notes showcasing the latest in diagnostics and biotechnology. Case studies and success stories highlighting real-world applications and proven best practices',
          'Training & Education - Hands-on workshops, live product demos, and interactive webinars designed for laboratory professionals, clinicians, and biomedical engineers. E-learning modules, video tutorials, and troubleshooting guides to help users master new technologies and boost efficiency',
          'Expert Support & Consultation - Direct access to technical advisors and subject-matter experts for workflow optimization and application support. Guidance on automation integration, regulatory compliance, and technology adoption strategies',
          'Innovation & Collaboration Space - A platform for joint research projects, idea incubation, and innovation forums. Partnerships with academic institutions, industry leaders, and healthcare providers to co-create next-gen diagnostic solutions',
          'Industry Insights & Updates - Regular newsletters, blogs, and bulletins featuring global diagnostic trends, regulatory changes, and clinical best practices. Early access to new product launches, upgrades, and innovations from AUREX'
        ]
      },
      {
        type: 'text',
        data: 'Who Benefits:'
      },
      {
        type: 'text',
        data: 'The Knowledge Centre serves healthcare professionals, researchers, students, and clients, enabling them to stay ahead in an evolving diagnostics landscape. It is a collaborative platform designed to inspire innovation, share expertise, and build a stronger, more informed diagnostics community.'
      }
    ]
  },
  'digital-learning-platforms': {
    title: 'Digital Learning Platforms',
    subtitle: 'Interactive, Accessible, and Personalized Learning',
    description: 'To empower users and cultivate a culture of continuous learning, the AUREX Knowledge Centre integrates cutting-edge digital education tools that deliver interactive, accessible, and personalized learning experiences for healthcare and diagnostics professionals.',
    content: [
      {
        type: 'text',
        data: 'To empower users and cultivate a culture of continuous learning, the AUREX Knowledge Centre integrates cutting-edge digital education tools that deliver interactive, accessible, and personalized learning experiences for healthcare and diagnostics professionals.'
      },
      {
        type: 'text',
        data: 'Our Digital Learning Components:'
      },
      {
        type: 'benefits',
        data: [
          'Cloud-Based Learning Management System (LMS) - Centralized LMS with structured learning paths, certification programs, and progress tracking. Features interactive modules, video tutorials, quizzes, and downloadable resources for all skill levels',
          'Virtual Product Simulators - Realistic digital simulators replicate instrument workflows for hands-on practice in a risk-free environment. Supports training in operation, calibration, and troubleshooting before using live equipment',
          'Live & On-Demand Webinars - Expert-led live sessions on emerging technologies, clinical applications, and compliance updates. On-demand library for anytime replay, ensuring flexible access to knowledge',
          'Collaborative Knowledge Platforms - Secure discussion forums and knowledge boards for peer-to-peer learning and expert Q&A. Facilitates global collaboration, case study sharing, and problem-solving',
          'Mobile-First Learning - Fully optimized for smartphones and tablets, allowing on-the-go training for field engineers and lab professionals',
          'Gamification & Professional Certification - Badges, leaderboards, and rewards drive engagement and motivation. Digital certificates of completion support compliance, skill validation, and career growth',
          'Feedback & Analytics Intelligence - Integrated analytics dashboards monitor learner progress and training impact. Continuous feedback loops ensure platform evolution in line with industry trends'
        ]
      },
      {
        type: 'text',
        data: 'Impact:'
      },
      {
        type: 'text',
        data: 'Through these advanced digital learning tools, the AUREX Knowledge Centre delivers smarter, faster, and more engaging training, empowering users to achieve diagnostic excellence, accelerate skill development, and stay ahead in a rapidly evolving healthcare ecosystem.'
      }
    ]
  },
  'skill-centre': {
    title: 'Skill Centre',
    subtitle: 'Cutting-Edge Training and Development Hubs',
    description: 'The Skill Centres of AUREX are cutting-edge training and development hubs designed to bridge the gap between academic learning and real-world expertise. They empower biotechnology and diagnostics professionals with hands-on, industry-ready skills to excel in the fast-evolving healthcare and life sciences sector.',
    content: [
      {
        type: 'text',
        data: 'The Skill Centres of AUREX are cutting-edge training and development hubs designed to bridge the gap between academic learning and real-world expertise. They empower biotechnology and diagnostics professionals with hands-on, industry-ready skills to excel in the fast-evolving healthcare and life sciences sector.'
      },
      {
        type: 'text',
        data: 'Key Features:'
      },
      {
        type: 'benefits',
        data: [
          'Hands-On Technical Training - Instructor-led, lab-based programs using advanced biotechnology equipment, Analyzers, and automation systems. Covers instrument setup, sample processing, QC, calibration, and troubleshooting with real-world case studies',
          'Industry-Driven Curriculum - Training designed to align with current and future industry demands. Focus areas include molecular biology, bioinformatics, genetic engineering, immunoassays, regulatory compliance, and data analytics',
          'Digital & Virtual Learning - Simulations, e-learning modules, and virtual labs for critical skills such as PCR setup, cell culture, and data management. Integrated assessments with real-time performance tracking and feedback',
          'Certifications & Career Growth - Globally recognized certifications on completion of modules. Enhances employability and career prospects for lab professionals, researchers, and technologists',
          'Mentorship, Internships & Placement - Structured mentorship programs and supervised internships in partner hospitals and diagnostic labs. Placement assistance with leading healthcare and biotech networks for top-performing candidates',
          'Soft Skills & Leadership Training - Programs in scientific communication, teamwork, project management, and bioethics. Prepares participants to become future-ready leaders in biotechnology and healthcare',
          'Exposure to Emerging Technologies - Hands-on access to AI-driven diagnostics, synthetic biology, automation platforms, and next-gen sequencing tools'
        ]
      },
      {
        type: 'text',
        data: 'Impact:'
      },
      {
        type: 'text',
        data: 'By combining practical training, digital learning, and industry mentorship, AUREX Skill Centres create a complete ecosystem for workforce transformation—equipping participants to drive innovation, meet industry challenges, and shape the future of diagnostics and life sciences.'
      }
    ]
  },
  'downloads': {
    title: 'Downloads',
    subtitle: 'Your One-Stop Resource Hub – Anytime, Anywhere',
    description: 'The AUREX Download Centre is a centralized, user-friendly digital hub designed to give customers, partners, and professionals instant access to critical resources, documents, and updates. Built for speed, convenience, and reliability, it ensures you always have the latest tools and information at your fingertips.',
    content: [
      {
        type: 'text',
        data: 'The AUREX Download Centre is a centralized, user-friendly digital hub designed to give customers, partners, and professionals instant access to critical resources, documents, and updates. Built for speed, convenience, and reliability, it ensures you always have the latest tools and information at your fingertips.'
      },
      {
        type: 'text',
        data: 'What You Can Access:'
      },
      {
        type: 'benefits',
        data: [
          'Product Catalogues & Brochures - Complete catalogues covering our entire range of diagnostic analyzers, reagents, and automation solutions. Downloadable brochures with key features, benefits, and application highlights',
          'User Manuals & Technical Guides - Step-by-step installation, operation, and maintenance manuals for all instruments. Troubleshooting guides and FAQs to ensure smooth, uninterrupted performance',
          'Software & Firmware Updates - Access to the latest drivers, software patches, and firmware upgrades. Release notes and logs for clear, transparent version control',
          'Certificates & Compliance Documents - ISO certifications, regulatory approvals, and quality compliance records. Safety Data Sheets (SDS) for reagents, consumables, and critical materials',
          'Case Studies & Whitepapers - Real-world success stories showcasing measurable outcomes in clinical and research settings. Expert-written whitepapers covering emerging technologies, best practices, and industry insights',
          'Marketing & Training Resources - Posters, infographics, and product leaflets to support lab visibility and awareness. Training slides, e-learning content, and recorded webinars for continuous education and skill development'
        ]
      },
      {
        type: 'text',
        data: 'Key Benefits:'
      },
      {
        type: 'benefits',
        data: [
          '24/7 Availability – Access essential resources anywhere, anytime',
          'Organized & Searchable – Find exactly what you need in seconds',
          'Always Up-to-Date – Regularly refreshed to ensure the latest versions',
          'Secure & Reliable – A robust platform for hassle-free, safe downloads'
        ]
      },
      {
        type: 'text',
        data: 'Why It Matters:'
      },
      {
        type: 'text',
        data: 'The Download Centre reflects our commitment to transparency, customer empowerment, and operational excellence — enabling users to stay informed, compliant, and fully equipped to deliver world-class diagnostics.'
      }
    ]
  },
  'workshops': {
    title: 'Workshops',
    subtitle: 'Hands-On Learning. Real-World Impact.',
    description: 'At AUREX, our specialized workshop programmes are designed to equip healthcare and biotechnology professionals with practical expertise, scientific insight, and exposure to the latest innovations in diagnostics and laboratory methodologies.',
    content: [
      {
        type: 'text',
        data: 'At AUREX, our specialized workshop programmes are designed to equip healthcare and biotechnology professionals with practical expertise, scientific insight, and exposure to the latest innovations in diagnostics and laboratory methodologies.'
      },
      {
        type: 'text',
        data: 'Key Features:'
      },
      {
        type: 'benefits',
        data: [
          'Hands-On Technical Training - Intensive lab sessions using state-of-the-art analyzers and automation systems. Practical experience in instrument setup, operation, troubleshooting, and preventive maintenance',
          'Expert-Led Learning - Conducted by industry veterans and domain experts. Deep dives into scientific principles, workflow optimization, and best practices',
          'Cutting-Edge Topics - Molecular biology techniques, immunoassays, clinical chemistry, haematology, and bioinformatics. Data analysis, quality control, and emerging fields such as AI-driven diagnostics and next-gen sequencing',
          'Flexible Delivery Formats - In-person workshops for immersive, hands-on training. Live webinars and virtual sessions for remote participation and global access',
          'Certification & Continuing Education - Certificates of completion to boost professional credentials. Eligible for continuing education credits in select regions',
          'Innovation & Research Orientation - Exposure to emerging technologies, global trends, and future-ready workflows. Encourages participants to adopt a forward-thinking approach to diagnostics'
        ]
      },
      {
        type: 'text',
        data: 'Benefits for Participants:'
      },
      {
        type: 'benefits',
        data: [
          'Build job-ready technical skills for daily lab operations',
          'Stay aligned with global scientific and technological trends',
          'Network with peers, experts, and industry leaders',
          'Strengthen career growth with recognized certifications'
        ]
      },
      {
        type: 'text',
        data: 'Popular Workshop Modules:'
      },
      {
        type: 'benefits',
        data: [
          'Haematology & Clinical Chemistry Analyzer Training',
          'Molecular Diagnostics: Techniques & Applications',
          'Laboratory Data Analysis & Visualization',
          'Quality Control & Regulatory Compliance',
          'Introduction to NGS & Bioinformatics'
        ]
      },
      {
        type: 'text',
        data: 'Registration & Customization:'
      },
      {
        type: 'text',
        data: 'Detailed workshop schedules, registration assistance, and tailor-made corporate training packages are available on request — ensuring the right training for every team, every time.'
      }
    ]
  },
  'media-centre': {
    title: 'Media Centre',
    subtitle: 'Your Gateway to News, Insights & Corporate Communications',
    description: 'The Media Centre at AUREX serves as our central communication hub, designed to deliver timely, accurate, and engaging information to stakeholders, media professionals, partners, and customers. This dynamic platform offers a single point of access to corporate news, official statements, multimedia resources, and event updates—reinforcing our commitment to transparency, collaboration, and brand excellence.',
    content: [
      {
        type: 'text',
        data: 'The Media Centre at AUREX serves as our central communication hub, designed to deliver timely, accurate, and engaging information to stakeholders, media professionals, partners, and customers. This dynamic platform offers a single point of access to corporate news, official statements, multimedia resources, and event updates—reinforcing our commitment to transparency, collaboration, and brand excellence.'
      },
      {
        type: 'text',
        data: 'Key Features:'
      },
      {
        type: 'benefits',
        data: [
          'Press Releases & News - Stay informed with the latest company announcements, product launches, strategic partnerships, and key milestones. Access official statements highlighting business achievements, industry recognitions, and CSR initiatives',
          'Multimedia Gallery - Explore a curated collection of high-resolution images and videos from product demos, training programs, trade shows, and corporate events. Media-friendly assets are optimized for publication and download',
          'Media Contacts - Direct access to our communications team for interviews, media inquiries, and collaboration opportunities. Includes verified contact details for fast, professional correspondence',
          'Corporate Publications - Access annual reports, newsletters, brochures, and whitepapers for in-depth insights into our strategy, innovation, and market leadership',
          'Events & Webinars - Stay updated on press conferences, live webinars, and product launch events. Replay past sessions on demand to never miss key announcements',
          'Social Media Integration - Engage with our official social channels for real-time updates and community discussions. Seamless integration ensures consistent communication across platforms'
        ]
      },
      {
        type: 'text',
        data: 'Benefits:'
      },
      {
        type: 'benefits',
        data: [
          'Strengthens trust through open, transparent communication',
          'Amplifies brand presence and builds media relationships',
          'Streamlines information access for journalists and partners',
          'Delivers credibility and speed in corporate messaging'
        ]
      },
      {
        type: 'text',
        data: 'The AUREX Media Centre embodies our vision of proactive communication—building stronger relationships with stakeholders, partners, and the public through reliable, timely, and media-ready content.'
      }
    ]
  },
  'blogs': {
    title: 'Blogs',
    subtitle: 'Insights, Innovation, and Knowledge in Healthcare & Biotechnology',
    description: 'Our Blogs is a dedicated platform for sharing expert insights, scientific advancements, and industry trends in biotechnology, diagnostics, and healthcare. Our blog empowers healthcare professionals, researchers, and stakeholders with thought leadership content, practical guidance, and innovative perspectives that support knowledge growth and informed decision-making.',
    content: [
      {
        type: 'text',
        data: 'Our Blogs is a dedicated platform for sharing expert insights, scientific advancements, and industry trends in biotechnology, diagnostics, and healthcare. Our blog empowers healthcare professionals, researchers, and stakeholders with thought leadership content, practical guidance, and innovative perspectives that support knowledge growth and informed decision-making.'
      },
      {
        type: 'text',
        data: 'What You Will Find:'
      },
      {
        type: 'benefits',
        data: [
          'Industry Insights - In-depth analysis of emerging trends in diagnostics, laboratory automation, and healthcare technologies. Articles on policy changes, regulatory updates, and global healthcare innovations',
          'Scientific & Technical Knowledge - Step-by-step guides and tutorials on laboratory techniques, clinical workflows, and research methodologies. Updates on cutting-edge technologies including molecular diagnostics, AI-driven healthcare solutions, and next-generation sequencing',
          'Product & Solution Spotlights - Detailed explorations of AUREX instruments, automation solutions, and software innovations. Case studies demonstrating real-world applications, improved efficiency, and enhanced patient outcomes',
          'Thought Leadership & Expert Opinions - Perspectives from industry experts, researchers, and biotech professionals on healthcare challenges and innovations. Interviews, guest posts, and commentary on trends shaping the diagnostics ecosystem',
          'Educational Resources - Informative articles on laboratory best practices, quality management, and workflow optimization. Tips, e-learning content, and insights to enhance professional skills and knowledge'
        ]
      },
      {
        type: 'text',
        data: 'Benefits of Reading Our Blog:'
      },
      {
        type: 'benefits',
        data: [
          'Stay informed about global diagnostics and healthcare innovations',
          'Gain practical knowledge to enhance lab operations and research practices',
          'Access expert perspectives that inspire innovation and problem-solving',
          'Connect with a community of professionals, researchers, and healthcare enthusiasts'
        ]
      },
      {
        type: 'text',
        data: 'The AUREX Blog serves as a knowledge-sharing hub, reflecting our commitment to continuous learning, scientific advancement, and empowering the healthcare community with actionable insights and thought leadership.'
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

const TurnkeyContent = ({ data }: {
  data: {
    intro: { title: string; text: string };
    solutions: Array<{
      title: string;
      sections: Array<{
        subtitle: string;
        description?: string;
        points?: string[];
      }>;
      image: string;
    }>;
    benefits: string[];
    impact: { title: string; text: string; image: string };
  }
}) => {
  const getImageSrc = (imageType: string) => {
    switch (imageType) {
      case 'hospital-design':
        return '/images/hospital-solutions.jpg' // Isometric Laboratory Room
      case 'lab-interior':
        return '/images/lab-solutions-new.jpeg' // AdobeStock Lab
      case 'rd-cleanroom':
        return '/images/research-development-new.avif' // Blue/White Theme Room
      case 'global-compliance':
        return '/images/compliance-new.jpg' // Compliance Image
      default:
        return '/images/background.jpg'
    }
  }

  return (
    <div className="space-y-16">
      {/* Introduction */}
      <div className="animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6">{data.intro.title}</h2>
        <p className="text-gray-700 leading-relaxed text-lg">{data.intro.text}</p>
      </div>

      {/* Solutions */}
      {data.solutions.map((solution, solutionIndex) => {
        const imageSrc = getImageSrc(solution.image)
        const isEven = solutionIndex % 2 === 0

        return (
          <div key={solutionIndex} className="mb-16">
            {/* Solution with Image */}
            <div className={`grid md:grid-cols-2 gap-8 items-start animate-on-scroll mb-8 ${isEven ? '' : 'md:grid-flow-dense'}`}>
              {/* Text Content */}
              <div className={isEven ? '' : 'md:col-start-2'}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#133C99] mb-6 border-b-4 border-[#1646AF] pb-2">
                  {solution.title}
                </h3>

                {/* Sections */}
                <div className="space-y-6">
                  {solution.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg md:text-xl font-semibold text-[#0B1528] mb-3 flex items-center">
                        <div className="w-2 h-2 bg-[#1646AF] rounded-full mr-3"></div>
                        {section.subtitle}
                      </h4>
                      
                      {section.description && (
                        <p className="text-gray-700 leading-relaxed ml-5">{section.description}</p>
                      )}
                      
                      {section.points && (
                        <ul className="space-y-2 ml-5">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start space-x-3 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-[#133C99] rounded-full mt-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                <Image
                  src={imageSrc}
                  alt={solution.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl">
                    <h4 className="text-[#0B1528] font-bold text-lg">{solution.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">Comprehensive turnkey solution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            {solutionIndex < data.solutions.length - 1 && (
              <div className="border-t-2 border-gray-200 my-12"></div>
            )}
          </div>
        )
      })}

      {/* Key Benefits */}
      <div className="animate-on-scroll bg-[#F6F8FB] border border-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1528] mb-6 flex items-center">
          <Shield className="w-8 h-8 mr-3 text-[#1646AF]" />
          Key Benefits
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {data.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-100">
              <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact Statement with Image */}
      <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
        <div className="bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{data.impact.title}</h3>
          <p className="leading-relaxed text-lg">{data.impact.text}</p>
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={getImageSrc(data.impact.image)}
            alt={data.impact.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Globe className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-bold">Global Compliance & Reach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const StatsContent = ({ stats }: { stats: { icon: React.ElementType; label: string; value: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-center bg-[#F6F8FB] border border-gray-100 p-6 rounded-xl"
      >
        <stat.icon className="w-8 h-8 text-[#1646AF] mx-auto mb-4" />
        <div className="text-3xl font-bold text-[#0B1528] mb-2">{stat.value}</div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
      </motion.div>
    ))}
  </div>
)

const TimelineContent = ({ timeline }: { timeline: { year: string; event: string }[] }) => (
  <div className="space-y-6 mb-12">
    {timeline.map((item, index) => (
      <motion.div
        key={index}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-4 bg-[#F6F8FB] border border-gray-100 p-6 rounded-lg"
      >
        <div className="bg-[#1646AF] text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center shadow-sm">
          {item.year}
        </div>
        <p className="text-gray-700 text-lg flex-1">{item.event}</p>
      </motion.div>
    ))}
  </div>
)

const LeadershipContent = ({ leaders }: { leaders: { name: string; position: string; bio: string }[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {leaders.map((leader, index) => (
      <motion.div
        key={index}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
      >
        <div className="w-24 h-24 bg-[#F6F8FB] border border-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Microscope className="w-12 h-12 text-[#1646AF]" />
        </div>
        <h3 className="text-xl font-bold text-[#0B1528] mb-2 text-center">{leader.name}</h3>
        <p className="text-[#1646AF] font-semibold text-center mb-4">{leader.position}</p>
        <p className="text-gray-600 text-sm leading-relaxed text-center">{leader.bio}</p>
      </motion.div>
    ))}
  </div>
)

const BenefitsContent = ({ benefits }: { benefits: string[] }) => (
  <div className="grid md:grid-cols-2 gap-4 mb-12">
    {benefits.map((benefit, index) => (
      <motion.div
        key={index}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-3 bg-[#F6F8FB] border border-gray-100 p-4 rounded-lg"
      >
        <div className="w-2 h-2 bg-[#1646AF] rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-gray-700">{benefit}</p>
      </motion.div>
    ))}
  </div>
)

// ServiceContent Component
const ServiceContent = () => {
  return (
    <div className="space-y-20 min-h-screen">
      {/* ========== SECTION 1: GENERAL SERVICES ========== */}
      <section className="opacity-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1528] mb-6">
            General Services
          </h2>
          <p className="text-lg text-[#2C3E50] max-w-4xl mx-auto leading-relaxed">
            At AUREX, we provide <span className="font-bold">end-to-end support</span> for all laboratory instruments, 
            ensuring reliability, accuracy, and longevity. Our services encompass professional maintenance, original parts supply, 
            certified reagents, and flexible service contracts tailored to your operational needs.
          </p>
        </div>

        {/* Service Details Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Installation & Commissioning */}
          <div className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300">
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-[#4A90A4]" />
              Installation & Commissioning
            </h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Professional installation of Instruments and automation platforms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Accurate calibration and validation to guarantee reliable results from day one.</span>
              </li>
            </ul>
          </div>

          {/* Technician Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[280px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          >
            <Image
              src="/images/technician-maintenance.jpg"
              alt="Technician performing maintenance on laboratory equipment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Professional On-Site Service</p>
            </div>
          </motion.div>

          {/* Preventive & Corrective Maintenance */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-[#4A90A4]" />
              Preventive & Corrective Maintenance
            </h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Scheduled preventive maintenance to maximize performance and prevent downtime.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Rapid corrective support and on-site troubleshooting to restore functionality quickly.</span>
              </li>
            </ul>
          </motion.div>

          {/* Original Spare Parts */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
              <Cpu className="w-6 h-6 mr-3 text-[#4A90A4]" />
              Original Spare Parts
            </h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Supply of <span className="font-bold">100% genuine spare parts</span> to maintain equipment reliability and extend life cycle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>All replacements comply with manufacturer specifications and international quality standards.</span>
              </li>
            </ul>
          </motion.div>

          {/* Original Reagents & Consumables */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
              <FileCheck className="w-6 h-6 mr-3 text-[#4A90A4]" />
              Original Reagents & Consumables
            </h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Certified, high-quality reagents and consumables for consistent test accuracy and reproducibility.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1">•</span>
                <span>Timely supply to ensure uninterrupted laboratory operations.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* Service Contracts */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#ADD8E6] to-[#B0E0E6] p-8 rounded-xl shadow-sm border-2 border-[#87CEEB]"
          >
            <h3 className="text-2xl font-bold text-[#0B1528] mb-6">
              Service Contracts
            </h3>

            {/* AMC */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#2C5F77]" />
                Annual Maintenance Contract (AMC)
              </h4>
              <p className="text-[#1A1A1A] mb-4 leading-relaxed">
                Comprehensive and customized AMC options covering preventive maintenance, breakdown support, 
                spare parts, and calibration.
              </p>
              <p className="font-semibold text-[#0B1528] mb-2">Benefits:</p>
              <ul className="space-y-2 text-[#1A1A1A]">
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">✓</span>
                  <span>Reduced downtime and extended equipment lifespan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">✓</span>
                  <span>Priority service and rapid response for urgent repairs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">✓</span>
                  <span>Cost-effective, predictable maintenance planning.</span>
                </li>
              </ul>
            </div>

            {/* CMC */}
            <div>
              <h4 className="text-xl font-bold text-[#0B1528] mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-[#2C5F77]" />
                Comprehensive Maintenance Contract (CMC)
              </h4>
              <p className="text-[#1A1A1A] leading-relaxed">
                Full-scale coverage including all-inclusive maintenance, spare parts, reagents, and technical support. 
                Ideal for laboratories and hospitals requiring end-to-end care and minimal operational disruption.
              </p>
            </div>
          </motion.div>

          {/* Reagents Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[280px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          >
            <Image
              src="/images/certified-reagents.jpg"
              alt="Box of certified laboratory reagents"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Certified Reagents & Consumables</p>
            </div>
          </motion.div>

          {/* Workflow Continuity Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[320px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          >
            <Image
              src="/images/workflow-uptime.jpg"
              alt="Diagram showing laboratory workflow continuity and high uptime"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Maximum Uptime & Workflow Continuity</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-[#87CEEB] to-[#B0E0E6] p-12 rounded-2xl shadow-xl border-2 border-[#4A90A4]"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#0B1528]">
          Why Choose AUREX for Instrument Care
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <li className="flex items-start space-x-3">
            <span className="text-[#2C5F77] text-xl mt-1 font-bold">✦</span>
            <div className="text-[#1A1A1A]">
              <span className="font-bold text-[#0B1528]">Reliability</span> – Original parts and certified reagents ensure consistent, high-precision results.
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#2C5F77] text-xl mt-1 font-bold">✦</span>
            <div className="text-[#1A1A1A]">
              <span className="font-bold text-[#0B1528]">Expert Support</span> – Skilled technicians provide on-site, remote, and emergency assistance.
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#2C5F77] text-xl mt-1 font-bold">✦</span>
            <div className="text-[#1A1A1A]">
              <span className="font-bold text-[#0B1528]">Regulatory Compliance</span> – Maintenance and calibration in line with ISO, NABL, and other regulatory standards.
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#2C5F77] text-xl mt-1 font-bold">✦</span>
            <div className="text-[#1A1A1A]">
              <span className="font-bold text-[#0B1528]">Operational Continuity</span> – AMCs and CMCs safeguard your laboratory from unexpected downtime.
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-[#2C5F77] text-xl mt-1 font-bold">✦</span>
            <div className="text-[#1A1A1A]">
              <span className="font-bold text-[#0B1528]">Cost Efficiency</span> – Tailored service contracts optimize maintenance budgets and resource planning.
            </div>
          </li>
        </ul>
        <p className="text-center mt-8 text-lg text-[#1A1A1A] max-w-4xl mx-auto">
          With AUREX&apos;s instrument services, genuine spares, reagents, and flexible AMC/CMC contracts, 
          laboratories can achieve <span className="font-bold text-[#0B1528]">uninterrupted workflow, maximum uptime, and reliable diagnostics</span>.
        </p>
      </motion.div>

      </section>

      {/* ========== SECTION 2: REGULATORY SUPPORT & CERTIFICATION ========== */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1528] mb-6">
            Regulatory Support & Certification
          </h2>
          <p className="text-lg text-[#2C3E50] max-w-4xl mx-auto leading-relaxed">
            We understand that regulatory compliance and third-party certifications are critical for establishing trust, 
            ensuring quality, and meeting industry benchmarks. We provide <span className="font-bold">end-to-end support</span> to 
            help our clients obtain the necessary certifications that validate their operations, products, and services.
          </p>
        </div>

        {/* Certification Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left Column - Certifications */}
          <div className="space-y-8">
            {/* NABL */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#ADD8E6] to-[#B0E0E6] p-8 rounded-xl shadow-sm border-2 border-[#87CEEB]"
            >
              <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-[#2C5F77]" />
                NABL (National Accreditation Board for Testing and Calibration Laboratories)
              </h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">•</span>
                  <span>Guidance on implementing quality management systems (QMS) for laboratory accreditation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">•</span>
                  <span>Preparation of documentation, SOPs, and internal audits.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C5F77] mr-3 mt-1 font-bold">•</span>
                  <span>Pre-assessment readiness checks and gap analysis.</span>
                </li>
              </ul>
            </motion.div>

            {/* NABH */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
            >
              <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-[#4A90A4]" />
                NABH (National Accreditation Board for Hospitals & Healthcare Providers)
              </h3>
              <ul className="space-y-3 text-[#2C3E50]">
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Support for hospital quality and patient safety compliance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Assistance in setting up procedures for infection control, staff training, and facility management.</span>
                </li>
              </ul>
            </motion.div>

            {/* ISO Certifications */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
            >
              <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
                <FileCheck className="w-6 h-6 mr-3 text-[#4A90A4]" />
                ISO Certifications (ISO 9001, ISO 13485, ISO 15189, etc.)
              </h3>
              <ul className="space-y-3 text-[#2C3E50]">
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Consulting for implementing internationally recognized standards for quality, safety, and efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Complete documentation, process alignment, and compliance tracking.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - More Certifications & Image */}
          <div className="space-y-8">
            {/* Certification Image */}
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
            >
              <Image
                src="/images/certification-documents.jpg"
                alt="Certification seals and documents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
                <p className="text-[#0B1528] font-bold text-lg">Regulatory Certifications & Compliance</p>
              </div>
            </motion.div>

            {/* CE, FDA */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
            >
              <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-[#4A90A4]" />
                CE, FDA, and Other Global Certifications
              </h3>
              <ul className="space-y-3 text-[#2C3E50]">
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Assistance with CE marking, FDA clearance, and other global regulatory requirements for medical devices and diagnostics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Coordination with authorized certification bodies for testing and approval.</span>
                </li>
              </ul>
            </motion.div>

            {/* Environmental & Safety */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
            >
              <h3 className="text-2xl font-bold text-[#0B1528] mb-4 flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-[#4A90A4]" />
                Environmental, Health & Safety Certifications
              </h3>
              <ul className="space-y-3 text-[#2C3E50]">
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Support in achieving ISO 14001 (Environmental Management) and ISO 45001 (Occupational Health & Safety) certifications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                  <span>Implementation of eco-friendly, safe, and sustainable lab practices.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Our Approach */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#87CEEB] to-[#B0E0E6] p-10 rounded-2xl shadow-xl border-2 border-[#4A90A4] mb-10"
        >
          <h3 className="text-3xl font-bold text-[#0B1528] mb-6 text-center">Our Approach</h3>
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-[#1A1A1A]">
            <li className="flex items-start space-x-3">
              <span className="text-[#2C5F77] text-xl mt-1 font-bold">✓</span>
              <div>
                <span className="font-bold text-[#0B1528]">Gap Analysis & Roadmap:</span> Identify compliance gaps and create a step-by-step plan to achieve certification.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#2C5F77] text-xl mt-1 font-bold">✓</span>
              <div>
                <span className="font-bold text-[#0B1528]">Documentation & SOP Development:</span> Prepare robust, audit-ready documentation.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#2C5F77] text-xl mt-1 font-bold">✓</span>
              <div>
                <span className="font-bold text-[#0B1528]">Training & Awareness:</span> Equip staff with knowledge to maintain compliance long-term.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#2C5F77] text-xl mt-1 font-bold">✓</span>
              <div>
                <span className="font-bold text-[#0B1528]">Audit & Liaison Support:</span> Coordinate with third-party auditors, provide pre-audit checks, and support during assessments.
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#2C5F77] text-xl mt-1 font-bold">✓</span>
              <div>
                <span className="font-bold text-[#0B1528]">Continuous Improvement:</span> Help clients maintain certification through periodic reviews and updates.
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Value to Clients */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#F8F8F8] border-2 border-[#D3D3D3] p-10 rounded-2xl shadow-sm"
        >
          <h3 className="text-3xl font-bold text-[#0B1528] mb-6 text-center">Value to Our Clients</h3>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <li className="flex items-center space-x-3 bg-gradient-to-r from-[#C6E5F5] to-[#D4EDF7] p-4 rounded-lg border border-[#87CEEB]">
              <span className="text-[#4A90A4] text-2xl font-bold">→</span>
              <span className="font-bold text-[#0B1528]">Faster Certification Process</span>
            </li>
            <li className="flex items-center space-x-3 bg-gradient-to-r from-[#C6E5F5] to-[#D4EDF7] p-4 rounded-lg border border-[#87CEEB]">
              <span className="text-[#4A90A4] text-2xl font-bold">→</span>
              <span className="font-bold text-[#0B1528]">Regulatory Confidence</span>
            </li>
            <li className="flex items-center space-x-3 bg-gradient-to-r from-[#C6E5F5] to-[#D4EDF7] p-4 rounded-lg border border-[#87CEEB]">
              <span className="text-[#4A90A4] text-2xl font-bold">→</span>
              <span className="font-bold text-[#0B1528]">Enhanced Credibility</span>
            </li>
            <li className="flex items-center space-x-3 bg-gradient-to-r from-[#C6E5F5] to-[#D4EDF7] p-4 rounded-lg border border-[#87CEEB]">
              <span className="text-[#4A90A4] text-2xl font-bold">→</span>
              <span className="font-bold text-[#0B1528]">Business Growth Enablement</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ========== SECTION 3: KNOWLEDGE CENTRE ========== */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1528] mb-6">
            Knowledge Centre
          </h2>
          <p className="text-lg text-[#2C3E50] max-w-4xl mx-auto leading-relaxed">
            The Knowledge Centre at AUREX is a dedicated hub for <span className="font-bold">innovation, education, and collaboration</span>, 
            created to empower healthcare professionals, researchers, and clients with cutting-edge insights and practical expertise. 
            It reflects our commitment to continuous learning, skill-building, and shaping the future of diagnostics.
          </p>
        </div>

        {/* Knowledge Centre Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Resource Library */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#ADD8E6] to-[#B0E0E6] p-8 rounded-xl shadow-sm border-2 border-[#87CEEB]"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-[#2C5F77]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 text-center">Resource Library</h3>
            <ul className="space-y-3 text-[#1A1A1A]">
              <li className="flex items-start">
                <span className="text-[#2C5F77] mr-3 mt-1 font-bold">•</span>
                <span>Curated collection of scientific articles, whitepapers, product manuals, and application notes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2C5F77] mr-3 mt-1 font-bold">•</span>
                <span>Case studies and success stories highlighting real-world applications and proven best practices.</span>
              </li>
            </ul>
          </motion.div>

          {/* Training & Education */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-12 h-12 text-[#4A90A4]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 text-center">Training & Education</h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Hands-on workshops, live product demos, and interactive webinars.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>E-learning modules, video tutorials, and troubleshooting guides.</span>
              </li>
            </ul>
          </motion.div>

          {/* Expert Support */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-12 h-12 text-[#4A90A4]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 text-center">Expert Support & Consultation</h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Direct access to technical advisors and subject-matter experts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Guidance on workflow optimization and technology adoption strategies.</span>
              </li>
            </ul>
          </motion.div>

          {/* Innovation & Collaboration */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-12 h-12 text-[#4A90A4]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 text-center">Innovation & Collaboration Space</h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Platform for joint research projects, idea incubation, and innovation forums.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Partnerships with academic institutions, industry leaders, and healthcare providers.</span>
              </li>
            </ul>
          </motion.div>

          {/* Industry Insights */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm border border-gray-300"
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-[#4A90A4]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1528] mb-4 text-center">Industry Insights & Updates</h3>
            <ul className="space-y-3 text-[#2C3E50]">
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Regular newsletters, blogs, and bulletins featuring global diagnostic trends.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4A90A4] mr-3 mt-1 font-bold">•</span>
                <span>Early access to new product launches, upgrades, and innovations.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Knowledge Centre Images Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Training Workshop Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[250px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          >
            <Image
              src="/images/training-workshop.jpg"
              alt="Training and workshop session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Training & Workshops</p>
            </div>
          </motion.div>

          {/* Library Resource Hub Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[250px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          >
            <Image
              src="/images/library-resource-hub.jpg"
              alt="Library and resource hub"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Resource Library</p>
            </div>
          </motion.div>

          {/* Field Service Technician Image */}
          {/* Field Service Technician Image */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[250px] rounded-xl overflow-hidden shadow-lg border-2 border-[#87CEEB]"
          > <Image
              src="/images/field-service-tech.jpg"
              alt="Field service technician at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ADD8E6]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#ADD8E6]/90">
              <p className="text-[#0B1528] font-bold text-lg">Field Service Excellence</p>
            </div>
          </motion.div>
        </div>

        {/* Who Benefits */}
        {/* Who Benefits */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[#87CEEB] to-[#B0E0E6] p-10 rounded-2xl shadow-xl border-2 border-[#4A90A4] text-center"
        > <h3 className="text-3xl font-bold text-[#0B1528] mb-6">Who Benefits</h3>
          <p className="text-lg text-[#1A1A1A] max-w-4xl mx-auto leading-relaxed">
            The Knowledge Centre serves <span className="font-bold text-[#0B1528]">healthcare professionals, researchers, students, and clients</span>, 
            enabling them to stay ahead in an evolving diagnostics landscape. It is a collaborative platform designed to inspire innovation, 
            share expertise, and build a stronger, more informed diagnostics community.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

// Hero Banner Component
const HeroBanner = ({ activeSection }: { activeSection: string }) => {
  // Dynamic content based on active section
  const getBannerContent = () => {
    if (activeSection === 'service') {
      return {
        image: '/images/service-banner.jpg',
        title: 'Service',
        subtitle: 'Comprehensive Laboratory Service Solutions',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'supports') {
      return {
        image: '/images/support-banner.jpg',
        title: 'Supports',
        subtitle: 'Certification & Regulatory Compliance Support',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'knowledge-centre') {
      return {
        image: '/images/knowledge-banner.jpg',
        title: 'Knowledge Centre',
        subtitle: 'Innovation, Education, and Collaboration Hub',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'digital-learning-platforms') {
      return {
        image: '/images/digital-learning-banner.jpg',
        title: 'Digital Learning Platforms',
        subtitle: 'Interactive, Accessible, and Personalized Learning',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'skill-centre') {
      return {
        image: '/images/skill-center-banner.jpg',
        title: 'Skill Centre',
        subtitle: 'Cutting-Edge Training and Development Hubs',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'downloads') {
      return {
        image: '/images/downloads-banner.png',
        title: 'Downloads',
        subtitle: 'Your One-Stop Resource Hub – Anytime, Anywhere',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'workshops') {
      return {
        image: '/images/workshop-banner.jpg',
        title: 'Workshops',
        subtitle: 'Hands-On Learning. Real-World Impact.',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'media-centre') {
      return {
        image: '/images/media-center-banner.jpg',
        title: 'Media Centre',
        subtitle: 'Your Gateway to News, Insights & Corporate Communications',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'blogs') {
      return {
        image: '/images/blogs-banner.jpg',
        title: 'Blogs',
        subtitle: 'Insights, Innovation, and Knowledge in Healthcare & Biotechnology',
        blur: 'blur-[1px]'
      }
    }
    if (activeSection === 'turnkey-projects') {
      return {
        image: '/images/turnkey-banner.jpg',
        title: 'Turnkey Projects',
        subtitle: 'Building Future-Ready Healthcare Ecosystems',
        blur: 'blur-[1px]'
      }
    }
    return {
      image: '/images/background.jpg',
      title: 'Capabilities',
      subtitle: 'Comprehensive capabilities and services to support your diagnostic needs.',
      blur: ''
    }
  }

  const content = getBannerContent()

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/90 via-[#133C99]/85 to-[#1646AF]/85 z-10"></div>
        <Image
          src={content.image}
          alt={content.title}
          fill
          className={`object-cover object-center transition-all duration-500 ${content.blur}`}
          priority={activeSection === 'service'}
          loading={activeSection === 'service' ? 'eager' : 'lazy'}
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT3k/VEfEU95P1QbqFhC0Dc8/npRWg+6WwA/dgWDGOSvB2kYwBAomwkjGWd6/5QEBZEZ7n6VQ7D5jW9pWy2rbqBvexKOMdK8M4Qhqy4Q4jvQ=="
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-gray-100 mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-2">
            {content.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Sub Navigation Component - Enhanced with AUREX Royal Blue accent styling
const SubNavigation = ({ activeSection, setActiveSection }: { 
  activeSection: string, 
  setActiveSection: (section: string) => void 
}) => {
  return (
    <section className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-md border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-3 md:py-4">
        <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 max-w-full overflow-x-auto scrollbar-hide">
          {capabilitiesSubNavigation.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-2 sm:px-3 md:px-4 py-2 md:py-3 font-semibold text-xs sm:text-sm transition-all duration-300 rounded-t-lg overflow-hidden whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[#1646AF] bg-white shadow-md'
                  : 'text-slate-600 hover:text-[#1646AF] hover:bg-white/50'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Royal Blue accent underline for active item */}
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
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#1646AF] to-[#133C99] origin-center"
                style={{ width: '80%' }}
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </section>
  )
}

// Initialize scroll animations
const useScrollAnimations = () => {
  React.useEffect(() => {
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

    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};

// Main Capabilities Page Component
export default function CapabilitiesPage() {
  const [activeSection, setActiveSection] = useState('turnkey-projects')
  
  // Initialize scroll animations
  useScrollAnimations()

  // Re-observe elements when active section changes
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        el.classList.remove('visible');
        // Trigger reflow
        void el.getBoundingClientRect();
      });
      
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

      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [activeSection]);

  // Get current section content
  const currentContent = capabilitiesContent[activeSection as keyof typeof capabilitiesContent]

  const renderContent = (item: { type: string; data: unknown }, index: number) => {
    switch (item.type) {
      case 'text':
        return <TextContent key={`text-${index}`} text={item.data as string} />
      case 'turnkey-content':
        return <TurnkeyContent key={`turnkey-${index}`} data={item.data as { intro: { title: string; text: string }; solutions: Array<{ title: string; sections: Array<{ subtitle: string; description?: string; points?: string[] }>; image: string }>; benefits: string[]; impact: { title: string; text: string; image: string } }} />
      case 'service-content':
        return <ServiceContent key={`service-${index}`} />
      case 'stats':
        return <StatsContent key={`stats-${index}`} stats={item.data as { icon: React.ElementType; label: string; value: string }[]} />
      case 'timeline':
        return <TimelineContent key={`timeline-${index}`} timeline={item.data as { year: string; event: string }[]} />
      case 'leadership':
        return <LeadershipContent key={`leadership-${index}`} leaders={item.data as { name: string; position: string; bio: string }[]} />
      case 'benefits':
        return <BenefitsContent key={`benefits-${index}`} benefits={item.data as string[]} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner activeSection={activeSection} />
      
      {/* Sub Navigation */}
      <SubNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1528] mb-4 md:mb-6">
              {currentContent.title}
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#1646AF] to-[#133C99] mx-auto mb-4 md:mb-6"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-3 md:mb-4 px-2">
              {currentContent.subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              {currentContent.description}
            </p>
          </motion.div>

          {/* Dynamic Content - Explicit Conditional Rendering */}
          <motion.div
            key={activeSection}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Turnkey Projects Content */}
            {activeSection === 'turnkey-projects' && (
              <>
                {capabilitiesContent['turnkey-projects'].content.map((item, index) => (
                  <div key={`turnkey-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Service Content */}
            {activeSection === 'service' && (
              <>
                {capabilitiesContent['service'].content.map((item, index) => (
                  <div key={`service-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Supports Content */}
            {activeSection === 'supports' && (
              <>
                {capabilitiesContent['supports'].content.map((item, index) => (
                  <div key={`supports-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Knowledge Centre Content */}
            {activeSection === 'knowledge-centre' && (
              <>
                {capabilitiesContent['knowledge-centre'].content.map((item, index) => (
                  <div key={`knowledge-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Digital Learning Platforms Content */}
            {activeSection === 'digital-learning-platforms' && (
              <>
                {capabilitiesContent['digital-learning-platforms'].content.map((item, index) => (
                  <div key={`digital-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Skill Centre Content */}
            {activeSection === 'skill-centre' && (
              <>
                {capabilitiesContent['skill-centre'].content.map((item, index) => (
                  <div key={`skill-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Downloads Content */}
            {activeSection === 'downloads' && (
              <>
                {capabilitiesContent['downloads'].content.map((item, index) => (
                  <div key={`downloads-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Workshops Content */}
            {activeSection === 'workshops' && (
              <>
                {capabilitiesContent['workshops'].content.map((item, index) => (
                  <div key={`workshops-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Media Centre Content */}
            {activeSection === 'media-centre' && (
              <>
                {capabilitiesContent['media-centre'].content.map((item, index) => (
                  <div key={`media-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}

            {/* Blogs Content */}
            {activeSection === 'blogs' && (
              <>
                {capabilitiesContent['blogs'].content.map((item, index) => (
                  <div key={`blogs-${index}`}>
                    {renderContent(item, index)}
                  </div>
                ))}
              </>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#133C99] to-[#1646AF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#0B1528] hover:to-[#133C99] transition-all duration-300 shadow-lg shadow-[#1646AF]/25"
            >
              {activeSection === 'turnkey-projects' ? 'Start Your Project' : 
               activeSection === 'downloads' ? 'Access Downloads' : 
               activeSection === 'workshops' ? 'Register for Workshops' :
               activeSection === 'blogs' ? 'Read Latest Posts' :
               'Learn More About Our Capabilities'}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}