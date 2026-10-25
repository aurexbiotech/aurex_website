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
  const lastModified = new Date()

  return publicRoutes.map((path) => ({
    url: path === '/' ? siteUrl : `${siteUrl}${path}`,
    lastModified,
  }))
}
