import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Legal Information',
  description: 'Legal information and policies for the Analyze Biotech website.',
  path: '/legal',
})

export default function LegalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
