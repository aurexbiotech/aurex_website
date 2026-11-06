import type { Metadata } from 'next'
import { createPageMetadata, fc2100ProductSchema, fc2100VideoSchema, fc2100FaqSchema } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'SmarLumi FC-2100 Automatic Chemiluminescence Immunoassay Analyzer (200 T/h)',
  description: 'SmarLumi FC-2100 is an automatic Chemiluminescence Immunoassay Analyzer delivering 200 T/h with first results in <12 min across 19 clinical panels and 119 verified assays in a compact 0.64 m² footprint.',
  path: '/products/fc-2100',
  keywords: [
    'SmarLumi FC-2100',
    'FC-2100 Analyzer',
    'Automatic Chemiluminescence Immunoassay Analyzer',
    'CLIA Analyzer',
    'Wondfo FC-2100',
    'AUREX Biotech',
    '200 tests per hour',
    'High throughput CLIA',
    'Cardiac Troponin hs-cTnI',
    'Tumor Markers CA125 CEA AFP',
    'Thyroid TSH FT3 FT4',
    'Clinical Diagnostic Automation',
    'Benchtop Immunoassay Analyzer'
  ]
})

export default function FC2100Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([fc2100ProductSchema, fc2100VideoSchema, fc2100FaqSchema])
        }}
      />
      {children}
    </>
  )
}
