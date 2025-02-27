import './globals.css';

import type { Metadata, Viewport } from 'next';
// import Script from 'next/script';
import { pathwayExtreme, oswald } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Kylan Duncan - Full Stack Engineer',
  description:
    'Full Stack Engineer and current freelancer from Houston, TX. Looking for new opportunities to build robust applications.',
  generator: 'Next.js',
  applicationName: 'Kylan Duncan',
  keywords: [
    'developer',
    'software engineer',
    'software',
    'full stack',
    'full stack engineer',
    'node',
    'node.js',
    'javascript',
    'tech',
    'software engineer portfolio',
    'software',
    'full stack engineer portfolio',
    'houston',
    'texas',
    'united states',
  ],
  openGraph: {
    title: 'Kylan Duncan - Full Stack Engineer',
    description:
      'Full Stack Engineer and current freelancer from Houston, TX. Looking for new opportunities to build robust applications.',
    url: 'https://cloudydaiyz.com',
    siteName: 'www.cloudydaiyz.com',
    locale: 'en-us',
    type: 'website',
    images: [
      {
        url: 'https://cloudydaiyz.com/portfolio-og.png',
        width: 1200,
        height: 630,
        alt: 'Kylan Duncan - Full Stack Engineer',
      },
    ],
  },
  twitter: {
    title: 'Kylan Duncan - Full Stack Engineer',
    description:
      'Full Stack Engineer and current freelancer from Houston, TX. Looking for new opportunities to build robust applications.',
    card: 'summary_large_image',
    images: ['https://cloudydaiyz.com/portfolio-og.png'],
    creator: '',
    creatorId: '',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='custom-scroll'>
      <body
        className={`flex min-h-screen flex-col bg-[#1C1F28] text-white ${pathwayExtreme.variable} ${oswald.variable} font-[family-name:--font-pathway-extreme] antialiased`}
      >
        {children}
      </body>
      {/* 
      <Script id='gtag-1' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} async />
      <Script id='gtag-1'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_ID}');
        `}
      </Script> 
      */}
    </html>
  );
}
