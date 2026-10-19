import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise Portal Login | HRM & CRM',
  description: 'Secure enterprise access to AUREX Human Resource Management (HRM) and Customer Relationship Management (CRM) portals.',
  path: '/login',
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
