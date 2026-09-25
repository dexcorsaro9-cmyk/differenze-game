import { safeStorage } from './storage';
import type { PowerUpType } from '../types/game';

/**
 * Rewarded video: the player watches an advert to earn a power-up they would otherwise buy
 * with coins.
 *
 * Chosen over interstitials and over paywalling content because this is a slow, quiet
 * observation game. An advert that interrupts a search would break the only thing the game
 * asks of the player; one they opt into when stuck does not.
 *
 * Inert until a provider is registered. With none, isRewardAvailable is false everywhere
 * and no advert surface is rendered, so the game ships unchanged until an ad account and
 * unit ids exist.
 */
export const STORAGE_KEY_REWARD_LOG = 'differenze_reward_log_v1';

/** Daily cap and spacing, so the offer stays a helping hand rather than a grind loop. */
export const MAX_REWARDS_PER_DAY = 5;
export const REWARD_COOLDOWN_MS = 3 * 60 * 1000;

export interface RewardOffer {
  powerUp: PowerUpType;
  quantity: number;
}

export const REWARD_OFFERS: Record<PowerUpType, RewardOffer> = {
  hint: { powerUp: 'hint', quantity: 1 },
  compass_radar: { powerUp: 'compass_radar', quantity: 1 },
  freeze_time: { powerUp: 'freeze_time', quantity: 1 },
  error_shield: { powerUp: 'error_shield', quantity: 1 },
};

export interface RewardProvider {
  /** Whether an advert can be shown right now (SDK ready, inventory available). */
  isAvailable(): Promise<boolean>;
  /** Resolves once the advert closes. `completed` is false if it was dismissed early. */
  show(): Promise<{ completed: boolean }>;
}

export interface RewardLog {
  /** Local calendar day, so the cap resets with the player's own midnight. */
  day: string;
  count: number;
  lastShownAt: number;
}

let provider: RewardProvider | null = null;

/** Registers the ad provider. Called once at startup when one is configured. */
export function setRewardProvider(next: RewardProvider | null): void {
  provider = next;
}

export function hasRewardProvider(): boolean {
  return provider !== null;
}

export function todayKey(now: Date = new Date()): string {
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export function readRewardLog(now: Date = new Date()): RewardLog {
  const fresh: RewardLog = { day: todayKey(now), count: 0, lastShownAt: 0 };

  const raw = safeStorage.getItem(STORAGE_KEY_REWARD_LOG);
  if (!raw) return fresh;

  try {
    const parsed = JSON.parse(raw) as Partial<RewardLog>;
    if (parsed.day !== fresh.day) return fresh;
    return {
      day: fresh.day,
      count: typeof parsed.count === 'number' ? parsed.count : 0,
      lastShownAt: typeof parsed.lastShownAt === 'number' ? parsed.lastShownAt : 0,
    };
  } catch {
    return fresh;
  }
}

export interface RewardAvailability {
  canWatch: boolean;
  reason: 'ok' | 'no-provider' | 'daily-cap' | 'cooling-down';
  remainingToday: number;
  cooldownRemainingMs: number;
}

export function getRewardAvailability(nowMs: number = Date.now()): RewardAvailability {
  const log = readRewardLog(new Date(nowMs));
  const remainingToday = Math.max(0, MAX_REWARDS_PER_DAY - log.count);
  const sinceLast = nowMs - log.lastShownAt;
  const cooldownRemainingMs = Math.max(0, REWARD_COOLDOWN_MS - sinceLast);

  if (!provider) {
    return { canWatch: false, reason: 'no-provider', remainingToday, cooldownRemainingMs };
  }
  if (remainingToday <= 0) {
    return { canWatch: false, reason: 'daily-cap', remainingToday, cooldownRemainingMs };
  }
  if (log.lastShownAt > 0 && cooldownRemainingMs > 0) {
    return { canWatch: false, reason: 'cooling-down', remainingToday, cooldownRemainingMs };
  }

  return { canWatch: true, reason: 'ok', remainingToday, cooldownRemainingMs };
}

export type RewardResult =
  | { status: 'granted'; offer: RewardOffer }
  | { status: 'dismissed' }
  | { status: 'unavailable'; reason: RewardAvailability['reason'] }
  | { status: 'failed'; error: string };

/**
 * Shows an advert and, only if the player watched it through, reports the reward to grant.
 *
 * Granting is left to the caller so the inventory stays owned by useEconomy; this module
 * decides eligibility and never touches the player's items itself.
 */
export async function watchForReward(
  powerUp: PowerUpType,
  nowMs: number = Date.now()
): Promise<RewardResult> {
  const availability = getRewardAvailability(nowMs);
  if (!availability.canWatch || !provider) {
    return { status: 'unavailable', reason: availability.reason };
  }

  try {
    const { completed } = await provider.show();
    if (!completed) return { status: 'dismissed' };

    const log = readRewardLog(new Date(nowMs));
    safeStorage.setItem(
      STORAGE_KEY_REWARD_LOG,
      JSON.stringify({ day: log.day, count: log.count + 1, lastShownAt: nowMs } satisfies RewardLog)
    );

    return { status: 'granted', offer: REWARD_OFFERS[powerUp] };
  } catch (error) {
    return { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
}

/**
 * Builds the AdMob provider when the Capacitor plugin is installed and unit ids are set.
 *
 * The plugin is imported dynamically and the failure is swallowed on purpose: the web
 * build and any install without it simply get no provider, rather than a broken bundle.
 * Activation needs @capacitor-community/admob plus VITE_ADMOB_REWARDED_ID.
 */
export async function createAdMobProvider(
  adUnitId: string | undefined = import.meta.env.VITE_ADMOB_REWARDED_ID
): Promise<RewardProvider | null> {
  if (!adUnitId) return null;

  try {
    // Specifier kept in a variable so neither TypeScript nor the bundler tries to resolve
    // a package that is only present once the app is built for a store.
    const pluginName = '@capacitor-community/admob';
    const admob = (await import(/* @vite-ignore */ pluginName)) as {
      AdMob: {
        initialize: () => Promise<void>;
        prepareRewardVideoAd: (opts: { adId: string }) => Promise<unknown>;
        showRewardVideoAd: () => Promise<{ type?: string; amount?: number } | undefined>;
      };
    };

    await admob.AdMob.initialize();

    return {
      async isAvailable() {
        try {
          await admob.AdMob.prepareRewardVideoAd({ adId: adUnitId });
          return true;
        } catch {
          return false;
        }
      },
      async show() {
        const reward = await admob.AdMob.showRewardVideoAd();
        return { completed: !!reward };
      },
    };
  } catch {
    return null;
  }
}
