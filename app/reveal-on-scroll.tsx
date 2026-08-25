'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observed = new WeakSet<Element>();
    let pendingHash = window.sessionStorage.getItem('portfolio-pending-hash') ?? '';
    window.sessionStorage.removeItem('portfolio-pending-hash');

    const scrollToHash = (hash: string) => {
      const id = decodeURIComponent(hash.replace(/^#/, ''));
      const target = document.getElementById(id);
      if (!target) return false;

      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      return true;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -22% 0px', threshold: 0.1 },
    );

    const registerReveals = () => {
      const elements = document.querySelectorAll('[data-reveal]');

      elements.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);

        if (reducedMotion) {
          element.classList.add('is-revealed');
        } else {
          observer.observe(element);
        }
      });

      root.classList.add('reveal-ready');

      if (pendingHash && scrollToHash(pendingHash)) {
        window.history.pushState(null, '', `${window.location.pathname}${pendingHash}`);
        pendingHash = '';
      }
    };

    const handleHashClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const origin = event.target;
      if (!(origin instanceof Element)) return;

      const anchor = origin.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || !destination.hash) return;

      const currentPath = `${window.location.pathname}${window.location.search}`;
      const destinationPath = `${destination.pathname}${destination.search}`;

      if (destinationPath === currentPath) {
        if (!document.getElementById(decodeURIComponent(destination.hash.slice(1)))) return;
        event.preventDefault();
        window.history.pushState(null, '', `${destinationPath}${destination.hash}`);
        scrollToHash(destination.hash);
        return;
      }

      event.preventDefault();
      window.sessionStorage.setItem('portfolio-pending-hash', destination.hash);
      window.location.assign(destinationPath);
    };

    registerReveals();

    const mutationObserver = new MutationObserver(registerReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('click', handleHashClick, true);

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      document.removeEventListener('click', handleHashClick, true);
      root.classList.remove('reveal-ready');
    };
  }, []);

  return null;
}
