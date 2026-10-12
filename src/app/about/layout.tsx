import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About Analyze Biotech',
  description: 'Learn about Analyze Biotech and its diagnostic and laboratory equipment solutions.',
  path: '/about',
})

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
