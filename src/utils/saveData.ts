import { safeStorage } from './storage';

/**
 * Canonical list of localStorage keys that make up a portable save.
 * This is the single source of truth: the Settings backup/restore flow and the
 * data-integrity test both read it, so a new persisted key cannot silently fall
 * out of the backup (which is how the daily-expedition streak used to be lost).
 */
export const BACKUP_STORAGE_KEYS = [
  // Expedition progress (current level, completed levels, clues, best times, stars)
  'differenze_progress_v1',
  'differenze_saga_ending_v1',
  // Economy & inventory
  'differenze_economy_v1',
  'differenze_inventory_v1',
  // Collections & rewards
  'differenze_relics_v1',
  'differenze_medals_v1',
  'differenze_claimed_medals_v1',
  'differenze_claimed_visas_v1',
  // Explorer identity
  'differenze_avatar_v1',
  'differenze_expedition_choices_v1',
  // Daily expedition streak
  'differenze_daily_v1',
  // Onboarding flags
  'differenze_tutorial_v1',
  'differenze_seen_briefings_v1',
  'paititi_seen_telegram_v1',
  // Preferences
  'differenze_settings_v1',
  'differenze_language_v1',
  'differenze_atmosphere',
  'differenze_photofilter',
  'differenze_vintage_crackle',
  'differenze_bgm_enabled',
  // Statistics
  'differenze_telemetry_v1',
  // Cloud sync slot: the same id on two devices is what makes them one save
  'differenze_player_id_v1',
] as const;

/**
 * Keys that are persisted but deliberately excluded from a save file.
 * `paititi_app_build` records which build last ran on this device and drives cache
 * invalidation on startup; restoring a stale value from another device would suppress
 * that check, so it stays device-local.
 */
export const NON_PORTABLE_STORAGE_KEYS = [
  'paititi_app_build',
  // When this device last reconciled with its sync slot. Restoring another device's
  // timestamp would misreport how fresh this device is.
  'differenze_last_sync_v1',
] as const;

export const SAVE_CODE_PREFIX = 'PAITITI_1928_SAVE:';
export const SAVE_FORMAT_VERSION = '2.0';

export interface BackupPayload {
  game: string;
  version: string;
  exportedAt: string;
  keys: Record<string, unknown>;
}

/** Collects every portable key currently present in storage. */
export function buildBackupPayload(): BackupPayload {
  const keys: Record<string, unknown> = {};

  BACKUP_STORAGE_KEYS.forEach((key) => {
    const val = safeStorage.getItem(key);
    if (val !== null) {
      try {
        keys[key] = JSON.parse(val);
      } catch {
        keys[key] = val;
      }
    }
  });

  return {
    game: 'Paititi_1928',
    version: SAVE_FORMAT_VERSION,
    exportedAt: new Date().toISOString(),
    keys,
  };
}

/** True when the object looks like one of our save files. */
export function isBackupPayload(data: unknown): data is BackupPayload {
  if (!data || typeof data !== 'object') return false;
  const candidate = data as Partial<BackupPayload>;
  return candidate.game === 'Paititi_1928' && !!candidate.keys && typeof candidate.keys === 'object';
}

/**
 * Writes the portable keys of a payload back into storage.
 * Unknown keys in the file are ignored, so a save from a newer build cannot inject
 * arbitrary entries into localStorage. Returns how many keys were restored.
 */
export function applyBackupPayload(data: BackupPayload): number {
  const incoming = data.keys || {};
  let count = 0;

  BACKUP_STORAGE_KEYS.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(incoming, key)) {
      const value = incoming[key];
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      if (safeStorage.setItem(key, serialized)) count++;
    }
  });

  return count;
}

export function encodeSaveCode(data: BackupPayload): string {
  const jsonStr = JSON.stringify(data);
  const base64 = btoa(
    encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
  return `${SAVE_CODE_PREFIX}${base64}`;
}

export function decodeSaveCode(code: string): BackupPayload | null {
  const parse = (raw: string): BackupPayload | null => {
    try {
      const parsed = JSON.parse(raw);
      return isBackupPayload(parsed) ? parsed : null;
    } catch {
      return null;
    }
  };

  try {
    let raw = code.trim();
    if (raw.startsWith(SAVE_CODE_PREFIX)) {
      raw = raw.slice(SAVE_CODE_PREFIX.length).trim();
    }
    const decodedStr = decodeURIComponent(
      Array.prototype.map
        .call(atob(raw), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return parse(decodedStr);
  } catch {
    return parse(code.trim());
  }
}
