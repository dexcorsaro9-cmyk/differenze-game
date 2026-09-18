import { safeStorage } from './storage';

export const STORAGE_KEY_TELEMETRY = 'differenze_telemetry_v1';

export interface ExpeditionTelemetry {
  totalHits: number;
  totalErrors: number;
  hintsUsedCount: number;
  independentHits: number;
  totalPlayTimeSeconds: number;
  fastestLevelId: number | null;
  fastestTimeSeconds: number | null;
}

const DEFAULT_TELEMETRY: ExpeditionTelemetry = {
  totalHits: 0,
  totalErrors: 0,
  hintsUsedCount: 0,
  independentHits: 0,
  totalPlayTimeSeconds: 0,
  fastestLevelId: null,
  fastestTimeSeconds: null,
};

/**
 * Loads expedition telemetry from localStorage with intelligent fallbacks
 * computed from existing bestTimes and completedLevelIds.
 */
export function getExpeditionTelemetry(
  completedLevelIds: number[] = [],
  bestTimes: Record<number, number> = {}
): ExpeditionTelemetry {
  let telemetry: ExpeditionTelemetry = { ...DEFAULT_TELEMETRY };

  try {
    const raw = safeStorage.getItem(STORAGE_KEY_TELEMETRY);
    if (raw) {
      telemetry = { ...DEFAULT_TELEMETRY, ...JSON.parse(raw) };
    }
  } catch {
    // fallback
  }

  // Calculate sum of best times as baseline play time
  const bestTimesSum = Object.values(bestTimes).reduce((acc, t) => acc + (t || 0), 0);
  if (telemetry.totalPlayTimeSeconds < bestTimesSum) {
    telemetry.totalPlayTimeSeconds = bestTimesSum;
  }

  // Baseline hits from completed levels (8 differences per level)
  const baselineHits = completedLevelIds.length * 8;
  if (telemetry.totalHits < baselineHits) {
    telemetry.totalHits = baselineHits;
  }

  if (telemetry.independentHits === 0 && telemetry.totalHits > 0) {
    telemetry.independentHits = Math.max(0, telemetry.totalHits - telemetry.hintsUsedCount);
  }

  // Find fastest level from bestTimes if not recorded
  if (!telemetry.fastestTimeSeconds || telemetry.fastestTimeSeconds === 0) {
    let minTime = Infinity;
    let minLvl: number | null = null;
    Object.entries(bestTimes).forEach(([lvlStr, time]) => {
      const t = Number(time);
      if (t > 0 && t < minTime) {
        minTime = t;
        minLvl = parseInt(lvlStr, 10);
      }
    });
    if (minLvl !== null && minTime !== Infinity) {
      telemetry.fastestLevelId = minLvl;
      telemetry.fastestTimeSeconds = minTime;
    }
  }

  return telemetry;
}

/**
 * Persists telemetry updates safely.
 */
export function saveExpeditionTelemetry(telemetry: ExpeditionTelemetry): void {
  try {
    safeStorage.setItem(STORAGE_KEY_TELEMETRY, JSON.stringify(telemetry));
  } catch {
    // safe fallback
  }
}

/**
 * Records a successful difference found.
 */
export function recordHit(isIndependent: boolean = true): void {
  const current = getExpeditionTelemetry();
  current.totalHits += 1;
  if (isIndependent) {
    current.independentHits += 1;
  }
  saveExpeditionTelemetry(current);
}

/**
 * Records an error click.
 */
export function recordError(): void {
  const current = getExpeditionTelemetry();
  current.totalErrors += 1;
  saveExpeditionTelemetry(current);
}

/**
 * Records power-up hint or radar usage.
 */
export function recordHintUsed(): void {
  const current = getExpeditionTelemetry();
  current.hintsUsedCount += 1;
  saveExpeditionTelemetry(current);
}

/**
 * Records level completion, time elapsed, and evaluates fastest speedrun.
 */
export function recordLevelCompletion(levelId: number, timeElapsedSeconds: number): void {
  const current = getExpeditionTelemetry();
  current.totalPlayTimeSeconds += timeElapsedSeconds;

  if (
    timeElapsedSeconds > 0 &&
    (current.fastestTimeSeconds === null || timeElapsedSeconds < current.fastestTimeSeconds)
  ) {
    current.fastestTimeSeconds = timeElapsedSeconds;
    current.fastestLevelId = levelId;
  }

  saveExpeditionTelemetry(current);
}

/**
 * Calculates percentage of touch precision.
 */
export function getAccuracyPercentage(telemetry: ExpeditionTelemetry): number {
  const total = telemetry.totalHits + telemetry.totalErrors;
  if (total === 0) return 100;
  const pct = Math.round((telemetry.totalHits / total) * 1000) / 10;
  return Math.min(100, Math.max(0, pct));
}

/**
 * Formats play time in "Xh Ym Zs" format.
 */
export function formatPlayTime(seconds: number): string {
  if (!seconds || seconds <= 0) return '0s';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
  parts.push(`${secs}s`);

  return parts.join(' ');
}
