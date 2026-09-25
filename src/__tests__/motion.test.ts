import { describe, it, expect, afterEach } from 'vitest';
import { prefersReducedMotion } from '../utils/motion';

const original = (globalThis as { matchMedia?: unknown }).matchMedia;

function stubMatchMedia(matches: boolean | 'throw') {
  (globalThis as { matchMedia?: unknown }).matchMedia = (query: string) => {
    if (matches === 'throw') throw new Error('matchMedia unavailable');
    return { matches, media: query, addEventListener() {}, removeEventListener() {} };
  };
}

afterEach(() => {
  if (original === undefined) delete (globalThis as { matchMedia?: unknown }).matchMedia;
  else (globalThis as { matchMedia?: unknown }).matchMedia = original;
});

describe('reduced motion preference', () => {
  it('reports the system preference when it is set', () => {
    stubMatchMedia(true);
    expect(prefersReducedMotion()).toBe(true);
  });

  it('reports false when the player has not asked for reduced motion', () => {
    stubMatchMedia(false);
    expect(prefersReducedMotion()).toBe(false);
  });

  it('defaults to full motion where matchMedia is missing', () => {
    delete (globalThis as { matchMedia?: unknown }).matchMedia;
    expect(prefersReducedMotion()).toBe(false);
  });

  it('never throws, so a hostile WebView cannot break a render', () => {
    stubMatchMedia('throw');
    expect(() => prefersReducedMotion()).not.toThrow();
    expect(prefersReducedMotion()).toBe(false);
  });
});
