import type { Metadata } from 'next'

export const siteUrl = 'https://www.analyzebiotech.in'
export const siteName = 'Analyze Biotech'

export const defaultKeywords = [
  'diagnostic equipment supplier',
  'laboratory equipment supplier',
  'medical diagnostic equipment',
  'clinical laboratory equipment',
  'biochemistry analyzer',
  'laboratory diagnostic solutions',
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
  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      type: 'website',
      images: [
        {
          url: '/images/company-logo.png',
          alt: `${siteName} logo`,
        },
      ],
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
      email: 'sales@analyzebiotech.in',
      telephone: '+91 9543910101',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1/51, Barathiyar Street, Mundiyampakkam',
        addressRegion: 'Tamil Nadu',
        postalCode: '605601',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.youtube.com/@AnalyzeBiotechindia',
        'https://www.facebook.com/AnalyzeBiotech/',
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
