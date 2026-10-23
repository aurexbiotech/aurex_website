import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise Portal Login | HRM, CRM, Projects & Investors Management',
  description: 'Secure enterprise access to AUREX Human Resource Management (HRM), Customer Relationship Management (CRM), Turnkey Projects, and Investors Management portals.',
  path: '/login',
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children
}
