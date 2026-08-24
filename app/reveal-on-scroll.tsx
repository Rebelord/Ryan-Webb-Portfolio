'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    const registerReveals = () => {
      const elements = document.querySelectorAll('[data-reveal]');

      elements.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);

        const bounds = element.getBoundingClientRect();
        const startsInView = bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0;

        if (reducedMotion || startsInView) {
          element.classList.add('is-revealed');
        } else {
          observer.observe(element);
        }
      });

      root.classList.add('reveal-ready');
    };

    registerReveals();

    const mutationObserver = new MutationObserver(registerReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);

  return null;
}

