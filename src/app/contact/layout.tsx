import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Analyze Biotech',
  description: 'Contact Analyze Biotech for diagnostic equipment, laboratory equipment, and laboratory diagnostic solutions.',
  path: '/contact',
})

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
