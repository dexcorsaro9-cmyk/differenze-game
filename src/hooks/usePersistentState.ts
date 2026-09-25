import { useState } from 'react';
import { safeStorage } from '../utils/storage';

/**
 * useState backed by localStorage, read once on mount.
 *
 * The app had this same try/parse/fallback block written out for every persisted value.
 * Writing is left to the caller's existing save effects, so this changes how state is
 * seeded, not when it is stored.
 *
 * `revive` lets a caller migrate or normalise whatever was on disk, which matters because
 * a save can come from an older build or from a restored backup file.
 */
export function usePersistentJson<T>(
  key: string,
  fallback: T,
  revive?: (parsed: unknown) => T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  return useState<T>(() => {
    const saved = safeStorage.getItem(key);
    if (saved === null) return revive ? revive(null) : fallback;

    try {
      const parsed = JSON.parse(saved);
      return revive ? revive(parsed) : (parsed as T);
    } catch {
      return revive ? revive(null) : fallback;
    }
  });
}

/** Same idea for a plain string flag, with no JSON layer. */
export function usePersistentFlag(
  key: string,
  truthyValue = 'true'
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  return useState<boolean>(() => safeStorage.getItem(key) === truthyValue);
}

/** True when anything at all is stored under this key. */
export function hasStoredValue(key: string): boolean {
  return safeStorage.getItem(key) !== null;
}
