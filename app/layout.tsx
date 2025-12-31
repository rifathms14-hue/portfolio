import type { Metadata } from 'next'
import { GridPattern } from '@/components/ui/grid-pattern'
import './globals.css'
import './fonts.css'

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Rifath - Portfolio',
    template: '%s | Mohamed Rifath'
  },
  description: 'Product Designer experienced in System Designs, Enterprise SaaS, FinTech and Design Systems',
  keywords: ['portfolio', 'product designer', 'system design', 'enterprise saas', 'fintech', 'design systems'],
  authors: [{ name: 'Mohamed Rifath' }],
  creator: 'Mohamed Rifath',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Mohamed Rifath',
    title: 'Mohamed Rifath - Portfolio',
    description: 'Product Designer experienced in System Designs, Enterprise SaaS, FinTech and Design Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Rifath - Portfolio',
    description: 'Product Designer experienced in System Designs, Enterprise SaaS, FinTech and Design Systems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // #region agent log
  if (typeof window !== 'undefined') {
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'layout.tsx:46',message:'RootLayout render',data:{isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  }
  // #endregion
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body style={{ position: 'relative' }}>
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
          ]}
          style={{
            maskImage: 'radial-gradient(600px circle at center, white, transparent)',
            WebkitMaskImage: 'radial-gradient(600px circle at center, white, transparent)',
            left: 0,
            right: 0,
            top: '-30%',
            height: '200%',
            transform: 'skewY(12deg)',
            opacity: 1,
          }}
        />
        {children}
      </body>
    </html>
  )
}


