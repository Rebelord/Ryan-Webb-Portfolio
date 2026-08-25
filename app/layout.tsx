import type { Metadata } from 'next';
import './globals.css';
import RevealOnScroll from './reveal-on-scroll';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ryandwebb.com',
  ),
  title: 'Ryan Webb | Designer & Developer',
  description:
    'Ryan Webb is a multidisciplinary designer and developer creating digital products, client websites, and thoughtful React experiences.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ryan Webb | Designer & Developer',
    description: 'Digital products, client websites, and thoughtful React experiences.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ryan Webb | Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Webb | Designer & Developer',
    description: 'Digital products, client websites, and thoughtful React experiences.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
