import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Diagnostic Applications',
  description: 'Explore diagnostic applications and laboratory workflows supported by AUREX solutions.',
  path: '/application',
})

export default function ApplicationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
