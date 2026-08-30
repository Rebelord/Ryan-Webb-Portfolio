'use client';

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';

type ThemePreference = 'light' | 'system' | 'dark';
type ResolvedTheme = 'light' | 'dark';

const themeStorageKey = 'ryan-webb-theme';
const themeOptions: Array<{
  value: ThemePreference;
  label: string;
}> = [
  { value: 'light', label: 'Light theme' },
  { value: 'system', label: 'Follow system theme' },
  { value: 'dark', label: 'Dark theme' },
];

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(preference: ThemePreference): ResolvedTheme {
  const resolvedTheme =
    preference === 'system' ? getSystemTheme() : preference;
  const root = document.documentElement;
  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
  themeColor?.setAttribute(
    'content',
    resolvedTheme === 'dark' ? '#121310' : '#f4f1ea',
  );

  return resolvedTheme;
}

function getSavedPreference(): ThemePreference {
  try {
    const savedPreference = window.localStorage.getItem(themeStorageKey);
    return savedPreference === 'light' || savedPreference === 'dark'
      ? savedPreference
      : 'system';
  } catch {
    return 'system';
  }
}

function ThemeIcon({ theme }: { theme: ThemePreference }) {
  return (
    <span
      className={`theme-icon theme-icon--${theme}`}
      aria-hidden="true"
    />
  );
}

export default function ThemeToggle() {
  const [preference, setPreference] =
    useState<ThemePreference>('system');
  const [resolvedTheme, setResolvedTheme] =
    useState<ResolvedTheme>('light');
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const preferenceRef = useRef<ThemePreference>('system');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initializeTheme = window.setTimeout(() => {
      const initialPreference = getSavedPreference();
      preferenceRef.current = initialPreference;
      setPreference(initialPreference);
      setResolvedTheme(applyTheme(initialPreference));
    }, 0);

    const handleSystemThemeChange = () => {
      if (preferenceRef.current !== 'system') return;
      setResolvedTheme(applyTheme('system'));
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => {
      window.clearTimeout(initializeTheme);
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  function selectPreference(nextPreference: ThemePreference) {
    try {
      if (nextPreference === 'system') {
        window.localStorage.removeItem(themeStorageKey);
      } else {
        window.localStorage.setItem(themeStorageKey, nextPreference);
      }
    } catch {
      // The selection still applies for this visit when storage is unavailable.
    }

    preferenceRef.current = nextPreference;
    setPreference(nextPreference);
    setResolvedTheme(applyTheme(nextPreference));
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % themeOptions.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex =
        (currentIndex - 1 + themeOptions.length) % themeOptions.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = themeOptions.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextPreference = themeOptions[nextIndex].value;
    selectPreference(nextPreference);
    optionRefs.current[nextIndex]?.focus();
  }

  return (
    <div
      aria-label={`Color theme. Current appearance: ${resolvedTheme}.`}
      className="theme-picker"
      role="radiogroup"
    >
      <span className="theme-selection" aria-hidden="true" />
      {themeOptions.map((option, index) => (
        <button
          aria-checked={preference === option.value}
          aria-label={option.label}
          className="theme-choice"
          data-label={option.label}
          key={option.value}
          onClick={() => selectPreference(option.value)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          ref={(element) => {
            optionRefs.current[index] = element;
          }}
          role="radio"
          tabIndex={preference === option.value ? 0 : -1}
          type="button"
        >
          <ThemeIcon theme={option.value} />
        </button>
      ))}
    </div>
  );
}
