import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ryan Webb — Designer & Developer',
  description:
    'Ryan Webb is a multidisciplinary creative learning React and building thoughtful digital products.',
  openGraph: {
    title: 'Ryan Webb — Designer & Developer',
    description: 'Thoughtful digital experiences, built with curiosity.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ryan Webb — Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Webb — Designer & Developer',
    description: 'Thoughtful digital experiences, built with curiosity.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
