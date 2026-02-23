# Deployment Guide

## Prerequisites

- Node.js 20+
- npm 10+
- Cloudflare account with Pages enabled
- Wrangler CLI (`npx wrangler`)

## Local Development

```bash
# Clone the repository
git clone https://github.com/rjbizsolution23-wq/eugene-solutions-llc.git
cd eugene-solutions-llc

# Install dependencies
npm install

# Build the project
npm run build

# Start local dev server
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000
```

Visit http://localhost:3000

## Production Deployment

### Manual Deployment

```bash
# Build
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name eugene-solutions-llc
```

### CI/CD Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically deploys on push to `main`.

**Required Secrets:**
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### Setting Up CI/CD

1. Go to GitHub repo Settings > Secrets and variables > Actions
2. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
3. Push to main branch to trigger deployment

## URLs

- **Production:** https://eugene-solutions-llc.pages.dev
- **GitHub:** https://github.com/rjbizsolution23-wq/eugene-solutions-llc

## Verification

After deployment, verify all routes return 200:

```bash
for route in / /services /pricing /about /contact /blog /faq /tax-resources /careers /privacy /terms /accessibility /portal /admin /api/health; do
  echo "$route: $(curl -s -o /dev/null -w '%{http_code}' https://eugene-solutions-llc.pages.dev$route)"
done
```

## Environment Variables

For future integrations (D1 database, KV storage, etc.), use:

```bash
# Add secrets
npx wrangler pages secret put API_KEY --project-name eugene-solutions-llc
```
