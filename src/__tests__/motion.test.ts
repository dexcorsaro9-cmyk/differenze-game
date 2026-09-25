import { describe, it, expect, afterEach } from 'vitest';
import { prefersReducedMotion } from '../utils/motion';

type Win = { matchMedia?: (q: string) => unknown };
const g = globalThis as { window?: Win };
const original = g.window;

/** The module reads window.matchMedia, so the stub has to live on window, not globalThis. */
function stubWindow(matches: boolean | 'throw' | 'missing') {
  g.window = {
    matchMedia:
      matches === 'missing'
        ? undefined
        : (query: string) => {
            if (matches === 'throw') throw new Error('matchMedia unavailable');
            return { matches, media: query, addEventListener() {}, removeEventListener() {} };
          },
  };
}

afterEach(() => {
  if (original === undefined) delete g.window;
  else g.window = original;
});

describe('reduced motion preference', () => {
  it('reports the system preference when it is set', () => {
    stubWindow(true);
    expect(prefersReducedMotion()).toBe(true);
  });

  it('reports false when the player has not asked for reduced motion', () => {
    stubWindow(false);
    expect(prefersReducedMotion()).toBe(false);
  });

  it('defaults to full motion where there is no window at all', () => {
    delete g.window;
    expect(prefersReducedMotion()).toBe(false);
  });

  it('defaults to full motion where matchMedia is missing', () => {
    stubWindow('missing');
    expect(prefersReducedMotion()).toBe(false);
  });

  it('never throws, so a restricted WebView cannot break a render', () => {
    stubWindow('throw');
    expect(() => prefersReducedMotion()).not.toThrow();
    expect(prefersReducedMotion()).toBe(false);
  });
});
