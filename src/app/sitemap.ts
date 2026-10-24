import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

const publicRoutes = [
  '/',
  '/about',
  '/application',
  '/capabilities',
  '/company',
  '/contact',
  '/itsolutions',
  '/legal',
  '/products',
  '/products/biochemistry',
  '/products/biochemistry/details',
  '/products/haematology',
  '/biotra',
  '/solutions',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
  }))
}
