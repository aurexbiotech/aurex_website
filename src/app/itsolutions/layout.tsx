import type { Metadata } from 'next'
import { createPageMetadata, itSolutionsSchema } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Laboratory IT Solutions & Hospital Management Systems | AUREX',
  description: 'Enterprise healthcare IT solutions: Complete Hospital Management System (HMS), Laboratory Information System (LIS) with bidirectional ASTM/HL7 analyzer interfacing, Business Analytics, and Customized IT Solutions.',
  path: '/itsolutions',
  keywords: [
    'Hospital Management System',
    'Laboratory Information System',
    'LIS software India',
    'HMS software Tamil Nadu',
    'bidirectional analyzer interfacing',
    'ASTM HL7 diagnostic middleware',
    'healthcare business analytics',
    'customized healthcare IT solutions',
    'hospital EMR EHR software'
  ]
})

export default function ITSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itSolutionsSchema)
        }}
      />
      {children}
    </>
  )
}
