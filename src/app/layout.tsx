import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://karol-ziolkowski.vercel.app'),
  title: "Karol Ziółkowski | Web Developer & Next.js Freelancer",
  description: "Nowoczesne, szybkie strony i aplikacje internetowe tworzone w Next.js i Tailwind CSS.",
  openGraph: {
    title: "Karol Ziółkowski | Web Developer & Next.js Freelancer",
    description: "Nowoczesne, szybkie strony i aplikacje internetowe tworzone w Next.js i Tailwind CSS.",
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}