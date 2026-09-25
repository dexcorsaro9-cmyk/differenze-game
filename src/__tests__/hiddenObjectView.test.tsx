// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import { HiddenObjectView } from '../components/HiddenObjectView';
import { LanguageProvider } from '../i18n/LanguageContext';
import type { Difference } from '../types/game';

// The procedural synthesiser and the haptics bridge are browser surface this test does
// not exercise; mocking them keeps the assertions about interaction, not about Web Audio.
vi.mock('../utils/audio', () => ({
  sound: new Proxy({}, { get: () => () => {} }),
}));
vi.mock('../utils/haptics', () => ({ triggerHaptic: () => {} }));

/**
 * Interaction tests for the investigation stage.
 *
 * The pure tap-resolution rules are covered in hitDetection.test.ts; what this file adds
 * is the wiring: that a tap on the rendered photograph reaches those rules with the right
 * coordinates, and that the spam penalty charges an error instead of granting immunity,
 * which was the balance hole these tests exist to keep closed.
 */
const STAGE = { left: 0, top: 0, width: 400, height: 300 };

const clues: Difference[] = [
  { id: 'a', x: 25, y: 25, radius: 5.5, name: 'Reperto A', loreClue: 'lore A', riddle: 'enigma A' },
  { id: 'b', x: 75, y: 75, radius: 5.5, name: 'Reperto B', loreClue: 'lore B', riddle: 'enigma B' },
];

function renderStage(overrides: Partial<React.ComponentProps<typeof HiddenObjectView>> = {}) {
  const onDifferenceClick = vi.fn();
  const onErrorClick = vi.fn();

  const utils = render(
    <LanguageProvider>
      <HiddenObjectView
        imageA="/levels/test.webp"
        differences={clues}
        foundDifferenceIds={[]}
        activeHint={null}
        onDifferenceClick={onDifferenceClick}
        onErrorClick={onErrorClick}
        levelId={1}
        {...overrides}
      />
    </LanguageProvider>
  );

  return { ...utils, onDifferenceClick, onErrorClick };
}

/** jsdom gives every element a zero-sized rect, so the stage has to be given a size. */
function stubStageGeometry() {
  Element.prototype.getBoundingClientRect = function () {
    return {
      ...STAGE,
      right: STAGE.left + STAGE.width,
      bottom: STAGE.top + STAGE.height,
      x: STAGE.left,
      y: STAGE.top,
      toJSON: () => ({}),
    } as DOMRect;
  };
}

/** Screen coordinates for a clue's centre, given the stubbed stage geometry. */
function pointFor(clue: Difference) {
  return {
    clientX: STAGE.left + (clue.x / 100) * STAGE.width,
    clientY: STAGE.top + (clue.y / 100) * STAGE.height,
  };
}

function tapStage(point: { clientX: number; clientY: number }) {
  const stage = document.querySelector('img')?.parentElement;
  if (!stage) throw new Error('stage not rendered');
  fireEvent.click(stage, point);
}

const originalRect = Element.prototype.getBoundingClientRect;

beforeEach(() => {
  // jsdom reports navigator.language as en-US, so the language is pinned explicitly
  // rather than letting the provider's detection decide what these assertions read.
  localStorage.setItem('differenze_language_v1', 'it');
  stubStageGeometry();
  Element.prototype.scrollIntoView = () => {};
});

afterEach(() => {
  Element.prototype.getBoundingClientRect = originalRect;
  cleanup();
});

describe('tapping the stage', () => {
  it('reports the clue under a direct tap', () => {
    const { onDifferenceClick, onErrorClick } = renderStage();

    tapStage(pointFor(clues[0]));

    expect(onDifferenceClick).toHaveBeenCalledTimes(1);
    expect(onDifferenceClick.mock.calls[0][0].id).toBe('a');
    expect(onErrorClick).not.toHaveBeenCalled();
  });

  it('reports an error for a tap in empty space', () => {
    const { onDifferenceClick, onErrorClick } = renderStage();

    tapStage({ clientX: 200, clientY: 150 });

    expect(onDifferenceClick).not.toHaveBeenCalled();
    expect(onErrorClick).toHaveBeenCalledTimes(1);
  });

  it('ignores a clue that has already been found', () => {
    const { onDifferenceClick, onErrorClick } = renderStage({ foundDifferenceIds: ['a'] });

    tapStage(pointFor(clues[0]));

    expect(onDifferenceClick).not.toHaveBeenCalled();
    expect(onErrorClick).toHaveBeenCalledTimes(1);
  });

  it('passes the tap position through as a percentage of the photograph', () => {
    const { onDifferenceClick } = renderStage();

    tapStage(pointFor(clues[1]));

    const [, percentage] = onDifferenceClick.mock.calls[0];
    expect(percentage.x).toBeCloseTo(75, 0);
    expect(percentage.y).toBeCloseTo(75, 0);
  });
});

describe('spam penalty', () => {
  // Misses are spaced more than 35px apart: two taps closer than that within 350ms are a
  // double-tap zoom gesture, not two errors, which is deliberate and worth not breaking.
  const missAt = (i: number) => ({ clientX: 120 + i * 50, clientY: 150 });

  beforeEach(() => {
    // Frozen clock: the penalty window must not expire between a tap and its assertion.
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('charges a rapid burst of misses instead of letting it through free', () => {
    const { onErrorClick } = renderStage();

    // Three misses well inside the 650ms window
    for (let i = 0; i < 3; i++) tapStage(missAt(i));

    // Every miss is charged, the third one included: it triggers the penalty rather than
    // earning an exemption from it, which is the whole point of the fix.
    expect(onErrorClick).toHaveBeenCalledTimes(3);
  });

  it('absorbs the rest of the burst rather than charging it five times over', () => {
    const { onErrorClick } = renderStage();

    for (let i = 0; i < 8; i++) tapStage(missAt(i));

    // Without the lock this would be 8. The burst costs three, then the stage stops
    // accepting taps for the penalty window.
    expect(onErrorClick).toHaveBeenCalledTimes(3);
  });

  it('shows the player why the stage stopped responding', () => {
    renderStage();

    for (let i = 0; i < 4; i++) tapStage(missAt(i));

    expect(screen.getByText(/Osserva, non tempestare/i)).toBeTruthy();
  });

  it('accepts taps again once the penalty window has passed', () => {
    const { onDifferenceClick } = renderStage();

    for (let i = 0; i < 4; i++) tapStage(missAt(i));
    expect(onDifferenceClick).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    tapStage(pointFor(clues[0]));
    expect(onDifferenceClick).toHaveBeenCalledTimes(1);
  });
});
