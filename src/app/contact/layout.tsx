import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact AUREX',
  description: 'Contact AUREX for diagnostic equipment, laboratory instruments, and diagnostic solutions.',
  path: '/contact',
})

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
