import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://karol-ziolkowski.vercel.app/'), // <-- Wklej tu swój adres z Vercela
  title: {
    default: 'Karol Ziółkowski | Web Developer & Next.js Freelancer',
    template: '%s | Karol Ziółkowski',
  },
  description:
    'Tworzę nowoczesne, szybkie i dopracowane strony internetowe oraz aplikacje w Next.js dla firm i klientów indywidualnych. Zobacz portfolio Karola Ziółkowskiego i zleć swój projekt.',
  keywords: [
    'Karol Ziółkowski',
    'web developer',
    'programista Next.js',
    'freelancer Next.js',
    'tworzenie stron internetowych',
    'aplikacje webowe',
    'React',
    'Tailwind CSS',
    'portfolio programisty',
  ],
  authors: [{ name: 'Karol Ziółkowski' }],
  creator: 'Karol Ziółkowski',
  publisher: 'Karol Ziółkowski',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    siteName: 'Karol Ziółkowski | Portfolio',
    title: 'Karol Ziółkowski | Web Developer & Next.js Freelancer',
    description:
      'Nowoczesne, szybkie i dopracowane strony internetowe oraz aplikacje w Next.js dla firm i klientów indywidualnych.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Karol Ziółkowski – Web Developer & Next.js Freelancer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karol Ziółkowski | Web Developer & Next.js Freelancer',
    description:
      'Nowoczesne, szybkie i dopracowane strony internetowe oraz aplikacje w Next.js dla firm i klientów indywidualnych.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Karol Ziółkowski – Web Developer & Next.js Freelancer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}