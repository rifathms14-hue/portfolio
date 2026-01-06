import type { Metadata } from 'next'
import Script from 'next/script'
import GridPatternWrapper from '@/components/ui/grid-pattern-wrapper'
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body style={{ position: 'relative' }}>
        {/* Microsoft Clarity - Loads in head as recommended */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ux7fc8m9ew");
            `,
          }}
        />
        <GridPatternWrapper />
        {children}
      </body>
    </html>
  )
}


