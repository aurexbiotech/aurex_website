import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'BIOTRA Diagnostic Systems',
  description: 'Explore the BIOTRA clinical biochemistry and automated laboratory diagnostic series from AUREX, including BC-310, BC-15, and BC-410.',
  path: '/biotra',
  keywords: ['BIOTRA', 'clinical biochemistry', 'diagnostic systems', 'automated laboratory analyzers', 'BC-310', 'BC-15', 'BC-410'],
})

export default function BiotraLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
