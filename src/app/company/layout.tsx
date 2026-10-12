import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Company',
  description: 'Learn about Analyze Biotech Private Limited and its healthcare and laboratory diagnostic solutions.',
  path: '/company',
})

export default function CompanyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
