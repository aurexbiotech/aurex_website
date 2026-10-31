import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Pathology Diagnostic Solutions & Histopathology Automation',
  description: 'AUREX empowers pathology laboratories with automated tissue processors, automated coverslippers, intelligent slide scanners, and precision microtomy solutions.',
  path: '/products/pathology',
  keywords: [
    'Pathology Diagnostics',
    'Histopathology Automation',
    'AUREX Pathology',
    'Tissue Processing Systems',
    'Digital Pathology'
  ]
})

export default function PathologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
