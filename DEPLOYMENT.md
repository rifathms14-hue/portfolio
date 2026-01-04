# Deployment Guide - Vercel

## Quick Deploy to Vercel

Your portfolio is ready to deploy to Vercel! Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init  # if not already initialized
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

That's it! Your site will be live in ~2 minutes.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production deploy**
   ```bash
   vercel --prod
   ```

## Configuration

Your project is currently configured with **static export**. This works great on Vercel, but if you want to use Vercel's optimized Next.js runtime (for better image optimization, ISR, etc.), you can:

1. Remove the static export from `next.config.js`
2. Set `images: { unoptimized: false }` 
3. Redeploy

**Note:** The current static export setup works perfectly fine on Vercel - it will serve your static files efficiently.

## Environment Variables

If you need environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next` (or `out` for static export)
- **Install Command:** `npm install`
- **Node.js Version:** 20.x (specified in package.json)

## Post-Deployment

After deployment, Vercel will provide:
- ✅ Production URL (e.g., `your-project.vercel.app`)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for PRs

## Monitoring & Analytics

Consider adding:
- Vercel Analytics (built-in)
- Vercel Speed Insights
- Custom analytics (Google Analytics, etc.)

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Support](https://vercel.com/support)



