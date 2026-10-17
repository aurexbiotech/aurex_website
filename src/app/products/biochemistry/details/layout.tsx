import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Biochemistry Analyzer Details',
  description: 'Review biochemistry analyzer product details and laboratory testing features from AUREX.',
  path: '/products/biochemistry/details',
  keywords: ['biochemistry analyzer', 'clinical laboratory equipment', 'AUREX analyzers'],
})

export default function BiochemistryDetailsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
