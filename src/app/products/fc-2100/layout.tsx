import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'SmarLumi™ FC-2100 Fully Automated Chemiluminescence Immunoassay Analyzer',
  description: 'AUREX SmarLumi™ FC-2100 is a compact, benchtop chemiluminescence immunoassay (CLIA) analyzer utilizing magnetic microbeads and enzymatic amplification for rapid, ultra-precise clinical diagnostics.',
  path: '/products/fc-2100',
  keywords: [
    'SmarLumi FC-2100',
    'FC-2100 Analyzer',
    'Chemiluminescence Immunoassay Analyzer',
    'CLIA Analyzer',
    'AUREX Biotech',
    'Magnetic Microbead CLIA',
    'Clinical Diagnostic Automation',
    'Benchtop Immunoassay Analyzer'
  ]
})

export default function FC2100Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
