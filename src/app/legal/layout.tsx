import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Legal Information',
  description: 'Legal information, service warranties, and corporate policies for AUREX.',
  path: '/legal',
})

export default function LegalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
