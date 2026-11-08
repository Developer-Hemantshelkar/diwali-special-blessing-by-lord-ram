import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ramayana: The Divine Epic Experience | By Hemant Shelkar',
  description: 'An immersive modern Ramayana web experience featuring interactive storytelling, character-based life lessons, glowing VFX animations, soothing meditative soundscapes, warm wishes from Hemant Shelkar, and personalized blessings from Lord Rama.',
  openGraph: {
    title: 'Ramayana: The Divine Epic Experience | By Hemant Shelkar',
    description: 'An immersive modern Ramayana web experience with character life lessons, modern VFX, soothing ambiance, and personalized blessings from Lord Rama.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramayana: The Divine Epic Experience | By Hemant Shelkar',
    description: 'An immersive modern Ramayana web experience with character life lessons, modern VFX, soothing ambiance, and personalized blessings from Lord Rama.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth dark ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-stone-950 text-stone-100 antialiased font-sans selection:bg-amber-500 selection:text-stone-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

