import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Clinical Diagnostic Solutions',
  description: 'Explore specialized clinical diagnostic solutions from AUREX: endocrine hormone profiles, oncology tumor markers, cardiovascular care, and rapid infectious disease testing.',
  path: '/solutions',
  keywords: ['clinical diagnostic solutions', 'endocrine hormones', 'oncology markers', 'cardiovascular diagnostics', 'infectious disease testing', 'diagnostic panels'],
})

export default function SolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
