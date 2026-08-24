import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ryan-webb-portfolio.rwebb626.chatgpt.site'),
  title: 'Ryan Webb — Designer & Developer',
  description:
    'Ryan Webb is a multidisciplinary designer and developer creating digital products, client websites, and thoughtful React experiences.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ryan Webb — Designer & Developer',
    description: 'Digital products, client websites, and thoughtful React experiences.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ryan Webb — Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Webb — Designer & Developer',
    description: 'Digital products, client websites, and thoughtful React experiences.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
