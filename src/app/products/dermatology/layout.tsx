import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Dermatology Diagnostic Solutions & Advanced Cellular Imaging',
  description: 'AUREX delivers comprehensive dermatology diagnostic platforms, combining high-resolution digital dermoscopy, automated tissue section processing, and molecular skin lesion profiling.',
  path: '/products/dermatology',
  keywords: [
    'Dermatology Diagnostics',
    'Skin Pathology Systems',
    'AUREX Dermatology',
    'Cutaneous Histopathology',
    'Clinical Dermatology Automation'
  ]
})

export default function DermatologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
