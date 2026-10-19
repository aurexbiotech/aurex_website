# Deployment Guide for AUREX Website

## Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides the best integration.

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

**Benefits:**
- Automatic deployments on every push
- Preview deployments for branches
- Edge functions support
- Built-in analytics
- Custom domains

**Configuration:**
- No configuration needed for basic deployment
- Automatic environment detection
- Optimized for Next.js

---

### 2. Netlify

**Steps:**
1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder OR connect GitHub repo
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

**Configuration:**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages (Static Export)

**Steps:**
1. Update `next.config.ts`:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
export default nextConfig
```

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
  }
}
```

3. Run: `npm run deploy`

**Note:** Some features like API routes won't work with static export.

---

### 4. Custom Server Deployment

For VPS or dedicated servers:

**Requirements:**
- Node.js 18+
- PM2 (for production)

**Steps:**
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Start: `npm start`

**Production with PM2:**
```bash
npm install -g pm2
pm2 start npm --name "aurex" -- start
pm2 save
pm2 startup
```

---

## Environment Variables

For production deployment, set these environment variables:

```bash
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Contact form
CONTACT_FORM_ENDPOINT=your_form_endpoint

# Optional: Newsletter
NEWSLETTER_API_KEY=your_newsletter_api_key
```

---

## Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

### GitHub Pages:
1. Go to Repository Settings → Pages
2. Add custom domain in settings
3. Create CNAME file in root with your domain

---

## SSL/HTTPS

- **Vercel & Netlify**: Automatic SSL certificates
- **GitHub Pages**: Automatic for github.io domains
- **Custom Server**: Use Let's Encrypt with Nginx/Apache

---

## Performance Optimization

Before deployment:

1. **Optimize Images**: Replace placeholder images with optimized versions
2. **Bundle Analysis**: `npm run build` and check bundle size
3. **Lighthouse Audit**: Test performance, accessibility, SEO
4. **Meta Tags**: Verify all pages have proper meta tags

---

## Troubleshooting

**Build Errors:**
- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check TypeScript errors: `npx tsc --noEmit`

**Runtime Errors:**
- Check browser console
- Verify all imports are correct
- Check for client/server code conflicts

**Deployment Issues:**
- Verify build settings match your platform
- Check environment variables
- Review deployment logs

---

## Monitoring & Analytics

**Recommended Tools:**
- Google Analytics 4
- Vercel Analytics (if using Vercel)
- Google Search Console
- Hotjar or similar for user behavior

**Setup Google Analytics:**
1. Create GA4 property
2. Add tracking ID to environment variables
3. Add GA component to layout

---

## Maintenance

**Regular Tasks:**
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Performance monitoring
- Content updates
- Backup considerations

**Automated Tasks:**
- Set up dependabot for dependency updates
- Configure automated testing on PR
- Set up monitoring alerts

---

Need help? Check the main README.md or create an issue in the repository.