import type { Metadata } from 'next';
import { Chakra_Petch, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const chakraPetch = Chakra_Petch({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sh0ckWaveZero · Full Stack Developer',
  description:
    'Terminal-native profile of Sh0ckWaveZero (MidSeeLee), full stack developer in Bangkok. TypeScript, Next.js, Go, Rust and embedded systems.',
  openGraph: {
    title: 'Sh0ckWaveZero · Full Stack Developer',
    description:
      'Full stack developer in Bangkok. TypeScript, Next.js, Go, Rust and embedded systems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
