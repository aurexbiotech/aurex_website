import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Biochemistry Analyzers',
  description: 'Explore biochemistry analyzers and related laboratory solutions from AUREX.',
  path: '/products/biochemistry',
  keywords: ['biochemistry analyzers', 'clinical chemistry analyzer', 'AUREX analyzers'],
})

export default function BiochemistryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
