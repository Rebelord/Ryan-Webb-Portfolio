'use client';

import { useEffect, useId, useRef, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

const themeStorageKey = 'ryan-webb-theme';
const themeOptions: Array<{
  value: ThemePreference;
  label: string;
  description: string;
}> = [
  { value: 'system', label: 'System', description: 'Follow this device' },
  { value: 'light', label: 'Light', description: 'Always use light mode' },
  { value: 'dark', label: 'Dark', description: 'Always use dark mode' },
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

export default function ThemeToggle() {
  const [preference, setPreference] =
    useState<ThemePreference>('system');
  const [resolvedTheme, setResolvedTheme] =
    useState<ResolvedTheme>('light');
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const preferenceRef = useRef<ThemePreference>('system');
  const panelId = useId();

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
    const handlePointerDown = (event: PointerEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(initializeTheme);
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
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
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      className="theme-picker"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      ref={pickerRef}
    >
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={`Color theme: ${preference}. Current appearance: ${resolvedTheme}.`}
        className="theme-trigger"
        onClick={() => setIsOpen((open) => !open)}
        ref={triggerRef}
        type="button"
      >
        <span className="theme-swatch" aria-hidden="true" />
        <span className="theme-trigger-label">Theme</span>
        <span className="theme-trigger-value">{preference}</span>
      </button>

      {isOpen ? (
        <div
          aria-label="Choose a color theme"
          className="theme-panel"
          id={panelId}
          role="group"
        >
          <p>Color theme</p>
          {themeOptions.map((option) => (
            <button
              aria-pressed={preference === option.value}
              className="theme-option"
              key={option.value}
              onClick={() => selectPreference(option.value)}
              type="button"
            >
              <span>
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
              <span className="theme-option-indicator" aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
