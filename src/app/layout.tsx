import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://karolziolkowski.pl'),
  title: {
    default: 'Karol Ziółkowski — Web Development & Design',
    template: '%s | Karol Ziółkowski',
  },
  description:
    'Projektuję i wdrażam ultraszybkie, dedykowane strony internetowe dla firm w Next.js. Szyty na miarę design, czysty kod i wysoka konwersja.',
  keywords: [
    'Karol Ziółkowski',
    'web developer',
    'tworzenie stron internetowych',
    'strony Next.js',
    'tworzenie stron www',
    'freelancer web development',
  ],
  authors: [{ name: 'Karol Ziółkowski' }],
  creator: 'Karol Ziółkowski',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://karolziolkowski.pl',
    title: 'Karol Ziółkowski — Web Development & Design',
    description:
      'Ultraszybkie strony internetowe dla firm w Next.js. Szyty na miarę design, czysty kod i brak szablonów.',
    siteName: 'Karol Ziółkowski',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karol Ziółkowski — Web Development & Design',
    description:
      'Ultraszybkie strony internetowe w Next.js. Dedykowany design i czysty kod.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}