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
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Ryan Webb | Designer & Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Webb | Design Engineer, Senior UX/UI Designer & Front-End Developer',
    description: 'Thoughtful, accessible digital products built across UX/UI design and front-end development.',
    images: ['/og.jpg'],
  },
};

const themeInitializationScript = `
  (function () {
    try {
      var savedTheme = window.localStorage.getItem('ryan-webb-theme');
      var preference = savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : 'system';
      var theme = preference === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : preference;
      var root = document.documentElement;
      root.dataset.themePreference = preference;
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
      var themeColor = document.querySelector('meta[name="theme-color"]');
      if (themeColor) {
        themeColor.setAttribute('content', theme === 'dark' ? '#121310' : '#f4f1ea');
      }
    } catch (error) {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.dataset.themePreference = 'system';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#f4f1ea" />
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body>
        {children}
        <RevealOnScroll />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
