import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  setRewardProvider,
  hasRewardProvider,
  getRewardAvailability,
  watchForReward,
  readRewardLog,
  createAdMobProvider,
  todayKey,
  MAX_REWARDS_PER_DAY,
  REWARD_COOLDOWN_MS,
  STORAGE_KEY_REWARD_LOG,
  type RewardProvider,
} from '../utils/rewards';

const store = new Map<string, string>();

beforeEach(() => {
  store.clear();
  setRewardProvider(null);
  vi.stubGlobal('window', {});
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
  });
});

const alwaysWatched: RewardProvider = {
  isAvailable: async () => true,
  show: async () => ({ completed: true }),
};

const dismissed: RewardProvider = {
  isAvailable: async () => true,
  show: async () => ({ completed: false }),
};

function seedLog(count: number, lastShownAt: number, day = todayKey()) {
  store.set(STORAGE_KEY_REWARD_LOG, JSON.stringify({ day, count, lastShownAt }));
}

describe('without an ad provider', () => {
  it('offers nothing at all', () => {
    expect(hasRewardProvider()).toBe(false);
    expect(getRewardAvailability().canWatch).toBe(false);
    expect(getRewardAvailability().reason).toBe('no-provider');
  });

  it('refuses to grant a reward', async () => {
    const result = await watchForReward('hint');
    expect(result).toEqual({ status: 'unavailable', reason: 'no-provider' });
  });
});

describe('eligibility', () => {
  beforeEach(() => setRewardProvider(alwaysWatched));

  it('allows the first watch of the day', () => {
    const availability = getRewardAvailability();
    expect(availability.canWatch).toBe(true);
    expect(availability.remainingToday).toBe(MAX_REWARDS_PER_DAY);
  });

  it('stops at the daily cap', () => {
    seedLog(MAX_REWARDS_PER_DAY, 0);
    const availability = getRewardAvailability(Date.now());
    expect(availability.canWatch).toBe(false);
    expect(availability.reason).toBe('daily-cap');
    expect(availability.remainingToday).toBe(0);
  });

  it('spaces adverts out rather than allowing a grind loop', () => {
    // Must be a real "now": the log is scoped to the local calendar day, so an arbitrary
    // epoch value would land on a different day and reset the log instead.
    const now = Date.now();
    seedLog(1, now - 1000);
    const availability = getRewardAvailability(now);
    expect(availability.canWatch).toBe(false);
    expect(availability.reason).toBe('cooling-down');
    expect(availability.cooldownRemainingMs).toBeGreaterThan(0);
  });

  it('allows another once the cooldown has passed', () => {
    const now = Date.now();
    seedLog(1, now - REWARD_COOLDOWN_MS - 1);
    expect(getRewardAvailability(now).canWatch).toBe(true);
  });

  it("resets the cap on a new day rather than carrying it over", () => {
    seedLog(MAX_REWARDS_PER_DAY, 0, '1928-05-01');
    const log = readRewardLog();
    expect(log.count).toBe(0);
    expect(getRewardAvailability().canWatch).toBe(true);
  });
});

describe('watching', () => {
  it('grants the offer when the advert is watched through', async () => {
    setRewardProvider(alwaysWatched);
    const result = await watchForReward('compass_radar');

    expect(result.status).toBe('granted');
    if (result.status === 'granted') {
      expect(result.offer.powerUp).toBe('compass_radar');
      expect(result.offer.quantity).toBeGreaterThan(0);
    }
  });

  it('grants nothing when the player dismisses it early', async () => {
    setRewardProvider(dismissed);
    expect(await watchForReward('hint')).toEqual({ status: 'dismissed' });
  });

  it('does not spend one of the daily watches on a dismissal', async () => {
    setRewardProvider(dismissed);
    await watchForReward('hint');
    expect(readRewardLog().count).toBe(0);
  });

  it('counts a completed watch against the daily cap', async () => {
    setRewardProvider(alwaysWatched);
    const now = 1_000_000_000;
    await watchForReward('hint', now);

    const log = readRewardLog(new Date(now));
    expect(log.count).toBe(1);
    expect(log.lastShownAt).toBe(now);
  });

  it('reports a provider failure instead of throwing into the UI', async () => {
    setRewardProvider({
      isAvailable: async () => true,
      show: async () => { throw new Error('sdk exploded'); },
    });

    expect(await watchForReward('hint')).toEqual({ status: 'failed', error: 'sdk exploded' });
  });
});

describe('admob provider', () => {
  it('is not built without an ad unit id', async () => {
    expect(await createAdMobProvider(undefined)).toBeNull();
  });

  it('degrades to no provider when the plugin is not installed', async () => {
    // The web build has no Capacitor plugin; this must not throw.
    expect(await createAdMobProvider('ca-app-pub-test/1234')).toBeNull();
  });
});
