import type { Metadata } from 'next'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://aurexbiotech.in').replace(/\/+$/, '')
export const siteName = 'AUREX'

export const defaultKeywords = [
  'AUREX',
  'AUREX Biotech',
  'diagnostic equipment supplier',
  'laboratory equipment supplier',
  'medical diagnostic equipment',
  'clinical laboratory equipment',
  'biochemistry analyzer',
  'haematology analyzer',
  'laboratory diagnostic solutions',
  'chemiluminescence immunoassay',
  'diagnostic automation',
]

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const canonicalUrl = cleanPath === '/' ? siteUrl : `${siteUrl}${cleanPath}`

  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonicalUrl,
      siteName,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/company-logo.png`,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [`${siteUrl}/images/company-logo.png`],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/company-logo.png`,
      email: 'sales@aurexbiotech.in',
      telephone: '+91 9543910101',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam',
        addressLocality: 'Villupuram',
        addressRegion: 'Tamil Nadu',
        postalCode: '605601',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.youtube.com/channel/UCUn39KHl60KEEh9qQM6Gyiw',
        'https://www.linkedin.com/company/144084010/',
        'https://x.com/Aurexbiotech',
        'https://www.facebook.com/aurexbiotech/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      inLanguage: 'en',
    },
  ],
}

export const fc2100ProductSchema = {
  '@context': 'https://schema.org',
  '@type': ['Product', 'MedicalDevice'],
  '@id': `${siteUrl}/products/fc-2100#product`,
  name: 'SmarLumi FC-2100 Automatic Chemiluminescence Immunoassay Analyzer',
  alternateName: ['SmarLumi FC-2100', 'FC-2100 CLIA Analyzer'],
  image: [
    `${siteUrl}/images/smarlumi-fc-2100.png`
  ],
  description: 'Benchtop fully automated chemiluminescence immunoassay (CLIA) analyzer delivering 200 tests/hour, 60 sample positions, 25 reagent positions, first results in <12 min, and comprehensive 119-test menu across 19 clinical categories in a compact 0.64 m² footprint.',
  sku: 'FC-2100',
  mpn: 'FC-2100',
  brand: {
    '@type': 'Brand',
    name: 'AUREX'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Guangzhou Wondfo Biotech Co., Ltd.'
  },
  category: 'Medical Devices > In Vitro Diagnostic Instruments > Immunoassay Analyzers',
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}/products/fc-2100`,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      description: 'Institutional laboratory quotation available upon request'
    },
    seller: {
      '@type': 'Organization',
      name: 'AUREX Biotech',
      telephone: '+91 9543910101',
      email: 'sales@aurexbiotech.in'
    }
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Methodology',
      value: 'Enzymatic Chemiluminescence Immunoassay (CLIA) with magnetic microbead technology'
    },
    {
      '@type': 'PropertyValue',
      name: 'Throughput',
      value: '200 Tests per Hour (T/h)'
    },
    {
      '@type': 'PropertyValue',
      name: 'Time to First Result',
      value: '< 12 minutes'
    },
    {
      '@type': 'PropertyValue',
      name: 'Footprint',
      value: '0.64 m²'
    },
    {
      '@type': 'PropertyValue',
      name: 'Sample Capacity',
      value: '60 sample positions with STAT priority emergency queue'
    },
    {
      '@type': 'PropertyValue',
      name: 'Reagent Capacity',
      value: '25 reagent positions with RFID automatic loading'
    },
    {
      '@type': 'PropertyValue',
      name: 'Carry-over',
      value: '≤ 0.5 ppm'
    },
    {
      '@type': 'PropertyValue',
      name: 'Test Menu',
      value: '119 diagnostic assays across 19 clinical categories'
    },
    {
      '@type': 'PropertyValue',
      name: 'Connectivity',
      value: 'Bidirectional LIS communication (ASTM & HL7 protocols)'
    }
  ]
}

export const fc2100VideoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'SmarLumi FC-2100 Automatic Chemiluminescence Immunoassay Analyzer Demonstration',
  description: 'Demonstration and product overview of the SmarLumi FC-2100 fully automated CLIA analyzer by AUREX Biotech.',
  thumbnailUrl: [
    `${siteUrl}/images/smarlumi-fc-2100.png`
  ],
  uploadDate: '2026-10-31T12:00:00+05:30',
  contentUrl: `${siteUrl}/videos/fc-2100-demo.mp4`,
  embedUrl: `${siteUrl}/products/fc-2100`,
  publisher: {
    '@type': 'Organization',
    name: 'AUREX',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/company-logo.png`
    }
  }
}

export const itSolutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AUREX Healthcare & Diagnostic IT Solutions',
  provider: {
    '@type': 'Organization',
    name: 'AUREX',
    url: siteUrl
  },
  serviceType: 'Healthcare Informatics & Laboratory IT Software',
  description: 'Comprehensive enterprise healthcare IT architectures including Complete Hospital Management System (HMS), Laboratory Information System (LIS) with bidirectional ASTM/HL7 analyzer interfacing, Business Analytics, and Customized IT Solutions.',
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AUREX IT Solutions Suite',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Complete Hospital Management Solution (HMS)',
          description: 'All-in-one Hospital Information Management System connecting OPD, IPD, EHR/EMR, pharmacy, OT, and automated billing.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laboratory Information System and Management Solution (LIS)',
          description: 'High-throughput diagnostic informatics with ASTM & HL7 bidirectional instrument interfacing, barcode accessioning, and automated report dispatch.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Analytics Solution',
          description: 'Healthcare BI & executive KPI dashboards for diagnostic turnaround time (TAT) optimization, revenue intelligence, and reagent demand forecasting.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Customized Healthcare & Diagnostic IT Solutions',
          description: 'Bespoke healthcare software engineering, custom instrument driver development, and institutional clinical workflow integrations.'
        }
      }
    ]
  }
}

export const fc2100FaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the throughput of the SmarLumi FC-2100 analyzer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The SmarLumi FC-2100 delivers a high throughput of 200 tests per hour (T/h) with time to first diagnostic result in less than 12 minutes within an ultra-compact 0.64 m² footprint.'
      }
    },
    {
      '@type': 'Question',
      name: 'How many diagnostic tests are available on the FC-2100?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FC-2100 features a comprehensive 119-test menu spanning 19 clinical categories including high-sensitivity Cardiac markers (hs-cTnI, NT-proBNP), Thyroid, Fertility, Tumor Markers (CA125, CEA, AFP), Thrombus (D-Dimer), Inflammation (PCT, IL-6), Hypertension, TORCH, and Infectious Diseases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does the SmarLumi FC-2100 support STAT emergency samples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the FC-2100 features dedicated STAT priority processing with continuous sample loading across 60 sample positions and 25 refrigerated reagent positions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does the FC-2100 support bidirectional LIS connectivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the FC-2100 features bidirectional LIS communication supporting ASTM and HL7 protocols for automated worklist downloads, barcode scanning, and direct diagnostic report transmission.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does AUREX Biotech provide on-site installation and support in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AUREX Biotech provides nationwide on-site installation, clinical application training, preventive maintenance, and 24/7 technical hotline support (+91 95439 10101 / sales@aurexbiotech.in).'
      }
    }
  ]
}
