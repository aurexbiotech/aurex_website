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
      email: 'sales@aurexbiotech.com',
      telephone: '+91 9543910101',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '163B/98, 163/BG,163B/h Chennai Main Road, Mundiyambakkam, Villupuram',
        addressLocality: 'Villupuram',
        addressRegion: 'Tamil Nadu',
        postalCode: '605601',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.youtube.com/@aurexbiotech',
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
