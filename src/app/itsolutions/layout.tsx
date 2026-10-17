import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Laboratory IT Solutions',
  description: 'Explore laboratory IT and workflow management solutions from AUREX.',
  path: '/itsolutions',
})

export default function ITSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
