import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Diagnostic and Laboratory Capabilities',
  description: 'Discover AUREX capabilities for clinical laboratories, automation, and diagnostic testing.',
  path: '/capabilities',
})

export default function CapabilitiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
