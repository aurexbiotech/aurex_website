import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Diagnostic and Laboratory Products',
  description: 'Browse diagnostic equipment, laboratory instruments, and analyzers from AUREX.',
  path: '/products',
})

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
