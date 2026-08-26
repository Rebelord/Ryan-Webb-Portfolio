import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy | Ryan Webb',
  description: 'How analytics preferences and Microsoft Clarity are used on Ryan Webb\'s portfolio.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page section-shell">
      <header className="privacy-header">
        <Link className="brand" href="/" aria-label="Ryan Webb, home">
          <span className="brand-mark">RW</span>
          <span>Ryan Webb</span>
        </Link>
        <Link className="text-link" href="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
      </header>

      <article className="privacy-content">
        <p className="eyebrow">Privacy</p>
        <h1>Your visit, your choice.</h1>
        <p className="privacy-lead">
          This portfolio uses Microsoft Clarity only when you allow analytics.
          Declining analytics does not affect access to any part of the site.
        </p>

        <section>
          <h2>What analytics may collect</h2>
          <p>
            Clarity may record pages viewed, clicks, scrolling, browser and
            device information, approximate location, and pseudonymous session
            identifiers. Sensitive page content is masked according to the
            project&apos;s Clarity settings.
          </p>
        </section>

        <section>
          <h2>How the information is used</h2>
          <p>
            Analytics are used to understand navigation patterns, find usability
            problems, and improve this portfolio. The information is not sold or
            used for advertising by this site.
          </p>
        </section>

        <section>
          <h2>Your preference</h2>
          <p>
            Your choice is stored in your browser. Use the Analytics preferences
            control at the bottom of the site to review or change it at any time.
          </p>
        </section>

        <section>
          <h2>Microsoft Clarity</h2>
          <p>
            Microsoft processes Clarity data under its own privacy terms. Review
            the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noreferrer">Microsoft Privacy Statement</a> for more information.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about this site&apos;s analytics can be sent to{' '}
            <a href="mailto:hello@ryandwebb.com">hello@ryandwebb.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
