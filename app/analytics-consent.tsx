'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

type ConsentPreference = 'allowed' | 'declined';
type ClarityWindow = Window & {
  clarity?: (...args: unknown[]) => void;
};

const consentStorageKey = 'ryan-webb-analytics-consent';

export default function AnalyticsConsent() {
  const [preference, setPreference] = useState<ConsentPreference | null>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initializePreference = window.setTimeout(() => {
      const savedPreference = window.localStorage.getItem(consentStorageKey);
      setPreference(
        savedPreference === 'allowed' || savedPreference === 'declined'
          ? savedPreference
          : null,
      );
    }, 0);

    return () => window.clearTimeout(initializePreference);
  }, []);

  function savePreference(nextPreference: ConsentPreference) {
    window.localStorage.setItem(consentStorageKey, nextPreference);
    setPreference(nextPreference);
    setIsOpen(false);

    const clarity = (window as ClarityWindow).clarity;
    if (!clarity) return;

    if (nextPreference === 'allowed') {
      clarity('consentv2', {
        ad_Storage: 'denied',
        analytics_Storage: 'granted',
      });
      return;
    }

    clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'denied',
    });
    clarity('consent', false);
    clarity('stop');
  }

  const showBanner = preference !== undefined && (preference === null || isOpen);

  return (
    <>
      {preference === 'allowed' ? (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          onReady={() => {
            (window as ClarityWindow).clarity?.('consentv2', {
              ad_Storage: 'denied',
              analytics_Storage: 'granted',
            });
          }}
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y84bj4gqd6");
          `}
        </Script>
      ) : null}

      {showBanner ? (
        <aside className="analytics-consent" aria-label="Analytics preferences">
          <div className="analytics-consent-copy">
            <p className="analytics-consent-label">Site analytics</p>
            <p>
              I use Microsoft Clarity to understand how visitors navigate this
              portfolio and improve the experience. You can continue without
              analytics. <Link href="/privacy/">Privacy details</Link>
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => savePreference('declined')}>
              Continue without
            </button>
            <button
              className="analytics-consent-allow"
              type="button"
              onClick={() => savePreference('allowed')}
            >
              Allow analytics
            </button>
          </div>
        </aside>
      ) : null}

      {preference !== undefined && preference !== null && !isOpen ? (
        <button
          className="analytics-preferences-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Analytics preferences
        </button>
      ) : null}
    </>
  );
}
