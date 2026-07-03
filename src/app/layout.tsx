import type { Metadata } from 'next';
import { bebasNeue, inter, montserrat } from './fonts';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Max Verstappen — The Apex Precision Experience',
  description: 'An interactive cinematic web portfolio of Max Verstappen.',
  openGraph: {
    title: 'Max Verstappen — The Apex Precision Experience',
    description: 'An interactive cinematic web portfolio of Max Verstappen.',
    url: 'https://maxverstappen.example.com',
    siteName: 'Max Verstappen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Verstappen — The Apex Precision Experience',
    description: 'An interactive cinematic web portfolio of Max Verstappen.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
