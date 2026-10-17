import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About AUREX',
  description: 'Learn about AUREX and our advanced diagnostic and clinical laboratory solutions.',
  path: '/about',
})

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
