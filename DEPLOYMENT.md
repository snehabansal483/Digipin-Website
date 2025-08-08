# DigiPin Website Deployment Guide

This guide covers how to deploy the DigiPin informational website to various hosting platforms.

## Quick Build

To build the website for production:

```bash
npm install
npm run build
```

The built files will be in the `dist/` directory.

## Deployment Options

### 1. GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/docs` folder (or use GitHub Actions)
5. Optionally, set up a custom domain

#### Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 2. Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

Or drag and drop the `dist` folder to Netlify's deploy interface.

### 3. Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite and configure settings
3. Deploy automatically on git push

### 4. Static Hosting (Apache/Nginx)

1. Build the project: `npm run build`
2. Upload the contents of `dist/` to your web server
3. Configure your server for SPA routing (important for React Router)

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Variables

For production deployment, you may want to set:

- `VITE_GITHUB_REPO`: Your GitHub repository URL
- `VITE_CONTACT_EMAIL`: Contact email address
- `VITE_ANALYTICS_ID`: Google Analytics ID (if using)

Create `.env.production` file:
```
VITE_GITHUB_REPO=https://github.com/yourusername/digipin
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

## Custom Domain

If using a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure DNS records to point to your hosting provider
3. Enable HTTPS (most providers offer this automatically)

## Performance Optimization

The website is already optimized with:

- ✅ Vite's built-in optimizations
- ✅ Tailwind CSS purging
- ✅ Code splitting
- ✅ Asset optimization

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] External links open in new tabs
- [ ] Responsive design works on mobile
- [ ] Mermaid diagrams render correctly
- [ ] Demo functionality works
- [ ] Contact forms/links work
- [ ] SEO meta tags are present

## Troubleshooting

### Routing Issues
If direct URLs don't work (404 errors), ensure your hosting provider supports SPA routing or configure fallback rules.

### Mermaid Diagrams Not Loading
Check browser console for JavaScript errors and ensure mermaid library loads correctly.

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript/ESLint errors: `npm run lint`

### Performance Issues
- Verify all images are optimized
- Check for large JavaScript bundles in the build output
- Use browser dev tools to identify performance bottlenecks

---

For more help, check the [Vite deployment documentation](https://vitejs.dev/guide/static-deploy.html) or create an issue in the repository.
