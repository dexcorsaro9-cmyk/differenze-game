import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  BACKUP_STORAGE_KEYS,
  NON_PORTABLE_STORAGE_KEYS,
  isBackupPayload,
  encodeSaveCode,
  decodeSaveCode,
  SAVE_CODE_PREFIX,
} from '../utils/saveData';

function sourceFiles(dir: string, acc: string[] = []): string[] {
  readdirSync(dir).forEach(entry => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry !== '__tests__') sourceFiles(full, acc);
    } else if (/\.(ts|tsx)$/.test(entry)) {
      acc.push(full);
    }
  });
  return acc;
}

/**
 * Every key the game persists must be either backed up or explicitly declared
 * device-local. Without this test a new persisted key silently drops out of the save
 * file, which is exactly how the daily-expedition streak was being lost on restore.
 */
describe('save portability', () => {
  const src = resolve(process.cwd(), 'src');

  const persistedKeys = (() => {
    const found = new Set<string>();
    const patterns = [
      /(?:safeStorage|localStorage)\.(?:get|set|remove)Item\(\s*'([^']+)'/g,
      /STORAGE_KEY[A-Z_]*\s*=\s*'([^']+)'/g,
    ];

    sourceFiles(src).forEach(file => {
      const text = readFileSync(file, 'utf8');
      patterns.forEach(pattern => {
        for (const match of text.matchAll(pattern)) found.add(match[1]);
      });
    });

    return [...found].sort();
  })();

  it('finds the keys the game actually writes', () => {
    expect(persistedKeys.length).toBeGreaterThan(15);
  });

  it('covers every persisted key in the backup, or declares it device-local', () => {
    const covered = new Set<string>([...BACKUP_STORAGE_KEYS, ...NON_PORTABLE_STORAGE_KEYS]);
    const uncovered = persistedKeys.filter(key => !covered.has(key));
    expect(
      uncovered,
      `keys neither backed up nor declared device-local: ${uncovered.join(', ')}`
    ).toEqual([]);
  });

  it('lists no phantom keys the game never writes', () => {
    const real = new Set(persistedKeys);
    const phantom = BACKUP_STORAGE_KEYS.filter(key => !real.has(key));
    expect(phantom, `backed-up keys that no code touches: ${phantom.join(', ')}`).toEqual([]);
  });

  it('keeps the backup list free of duplicates', () => {
    expect(new Set(BACKUP_STORAGE_KEYS).size).toBe(BACKUP_STORAGE_KEYS.length);
  });

  it('never backs up the device-local build marker', () => {
    NON_PORTABLE_STORAGE_KEYS.forEach(key => {
      expect(BACKUP_STORAGE_KEYS as readonly string[]).not.toContain(key);
    });
  });
});

describe('save code round trip', () => {
  const payload = {
    game: 'Paititi_1928',
    version: '2.0',
    exportedAt: '1928-05-01T00:00:00.000Z',
    keys: {
      differenze_progress_v1: { currentLevelId: 42, completedLevelIds: [1, 2, 3] },
      differenze_economy_v1: { coins: 1928 },
      differenze_atmosphere: 'lantern',
    },
  };

  it('survives encode then decode', () => {
    const decoded = decodeSaveCode(encodeSaveCode(payload));
    expect(decoded).toEqual(payload);
  });

  it('accepts a code with or without its prefix', () => {
    const code = encodeSaveCode(payload);
    expect(decodeSaveCode(code.slice(SAVE_CODE_PREFIX.length))).toEqual(payload);
  });

  it('accepts raw exported JSON too', () => {
    expect(decodeSaveCode(JSON.stringify(payload))).toEqual(payload);
  });

  it('rejects garbage instead of throwing', () => {
    expect(decodeSaveCode('not a save')).toBeNull();
    expect(decodeSaveCode('')).toBeNull();
    expect(decodeSaveCode('{"game":"something_else","keys":{}}')).toBeNull();
  });

  it('recognises only its own payloads', () => {
    expect(isBackupPayload(payload)).toBe(true);
    expect(isBackupPayload({ keys: {} })).toBe(false);
    expect(isBackupPayload(null)).toBe(false);
    expect(isBackupPayload('PAITITI')).toBe(false);
  });
});
