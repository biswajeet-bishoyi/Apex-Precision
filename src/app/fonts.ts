import { Bebas_Neue, Inter, Montserrat } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-interface',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-editorial',
});
