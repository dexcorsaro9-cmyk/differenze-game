import { afterEach, vi } from 'vitest';

/**
 * Shared test setup.
 *
 * The game talks to a lot of browser surface the node environment does not provide, and
 * jsdom does not implement: Web Audio, vibration, matchMedia, canvas. Component tests care
 * about behaviour, not about those, so they are stubbed once here.
 */
if (typeof window !== 'undefined') {
  if (!window.matchMedia) {
    window.matchMedia = ((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    })) as typeof window.matchMedia;
  }

  if (!window.HTMLMediaElement.prototype.play) {
    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  }

  if (!navigator.vibrate) {
    Object.defineProperty(navigator, 'vibrate', { value: () => true, writable: true });
  }

  if (!HTMLCanvasElement.prototype.getContext) {
    // jsdom has no canvas backend; the ambient particle field only needs it to exist.
    HTMLCanvasElement.prototype.getContext = (() => null) as unknown as typeof HTMLCanvasElement.prototype.getContext;
  }

  if (!window.AudioContext) {
    // The procedural synthesiser builds its graph lazily; a stub keeps it from throwing.
    Object.defineProperty(window, 'AudioContext', {
      writable: true,
      value: class {
        state = 'running';
        currentTime = 0;
        destination = {};
        createOscillator() {
          return { connect() {}, start() {}, stop() {}, frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} }, type: 'sine' };
        }
        createGain() {
          return { connect() {}, gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {}, value: 0 } };
        }
        createBufferSource() { return { connect() {}, start() {}, stop() {}, buffer: null, loop: false }; }
        createBuffer() { return { getChannelData: () => new Float32Array(1) }; }
        createBiquadFilter() { return { connect() {}, frequency: { setValueAtTime() {}, value: 0 }, Q: { value: 0 }, type: 'lowpass' }; }
        resume() { return Promise.resolve(); }
        suspend() { return Promise.resolve(); }
        close() { return Promise.resolve(); }
      },
    });
  }
}

afterEach(() => {
  vi.clearAllMocks();
  // A suite may stub localStorage with only the methods it needs.
  if (typeof localStorage !== 'undefined' && typeof localStorage.clear === 'function') {
    localStorage.clear();
  }
});
