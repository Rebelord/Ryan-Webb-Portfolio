import type { Metadata } from 'next';
import './globals.css';
import AnalyticsConsent from './analytics-consent';
import RevealOnScroll from './reveal-on-scroll';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ryandwebb.com',
  ),
  title: 'Ryan Webb | Design Engineer, Senior UX/UI Designer & Front-End Developer',
  description:
    'Design engineer and senior UX/UI designer building thoughtful, accessible digital products with React, TypeScript, and front-end code.',
  keywords: [
    'Design Engineer',
    'UX Engineer',
    'Senior UX/UI Designer',
    'Senior UX Designer',
    'Product Design Engineer',
    'Design Technologist',
    'Front-End Developer focused on UI and design systems',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ryan Webb | Design Engineer, Senior UX/UI Designer & Front-End Developer',
    description: 'Thoughtful, accessible digital products built across UX/UI design and front-end development.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ryan Webb | Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Webb | Design Engineer, Senior UX/UI Designer & Front-End Developer',
    description: 'Thoughtful, accessible digital products built across UX/UI design and front-end development.',
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
        <AnalyticsConsent />
      </body>
    </html>
  );
}
