import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Diagnostic and Laboratory Capabilities',
  description: 'Discover Analyze Biotech capabilities for clinical laboratories and diagnostic testing.',
  path: '/capabilities',
})

export default function CapabilitiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
