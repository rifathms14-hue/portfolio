# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring optimized performance, SEO, and smooth animations.

## Features

- ⚡ **Blitz-fast loading** - Optimized for maximum performance
- 📱 **Fully responsive** - Desktop, Tablet, and Mobile support
- 🎨 **Smooth animations** - Powered by Framer Motion
- 🔍 **SEO optimized** - Meta tags, structured data, and more
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎯 **Modern stack** - Next.js 14, React 18, TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

1. **Personal Details**: Edit `app/layout.tsx` to update metadata and SEO information
2. **Content**: Update components in the `components/` directory:
   - `Hero.tsx` - Your name and tagline
   - `About.tsx` - About section content and skills
   - `Projects.tsx` - Your projects
   - `Contact.tsx` - Social links and contact information
3. **Colors**: Modify CSS variables in `app/globals.css`

### Performance Optimizations

- Images: Use Next.js `Image` component for automatic optimization
- Fonts: Already optimized with `font-display: swap`
- Code splitting: Automatic with Next.js
- Lazy loading: Implemented for animations

### SEO Configuration

Update the following in `app/layout.tsx`:
- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Verification codes

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

## Performance Tips

1. Use Next.js Image component for all images
2. Optimize images before uploading (WebP/AVIF format)
3. Enable compression in production
4. Use CDN for static assets
5. Monitor with Lighthouse

## License

MIT






