import { useEffect, useState } from 'react';

/**
 * Respect the player's system-level motion preference.
 *
 * iOS exposes this as Settings > Accessibility > Motion > Reduce Motion, Android as
 * Settings > Accessibility > Remove animations; both reach the WebView through the
 * prefers-reduced-motion media query. The game leans on strobing magnesium flashes,
 * screen shake, confetti and a continuous particle field, all of which are exactly what
 * someone enabling that setting is asking to be spared.
 *
 * Functional feedback is never removed, only its motion: a discovery still marks itself,
 * an error still registers.
 */
const QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  try {
    return window.matchMedia(QUERY).matches;
  } catch {
    return false;
  }
}

/** Reactive variant: follows the preference if the player changes it while playing. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    let mql: MediaQueryList;
    try {
      mql = window.matchMedia(QUERY);
    } catch {
      return;
    }

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
