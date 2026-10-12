import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Haematology Analyzers',
  description: 'Explore haematology analyzers for clinical laboratory testing from Analyze Biotech.',
  path: '/products/haematology',
  keywords: ['haematology analyzer', 'hematology analyzer'],
})

export default function HaematologyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
