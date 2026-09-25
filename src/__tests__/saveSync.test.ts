import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getPlayerId,
  setPlayerId,
  progressScore,
  pickWinner,
  syncSave,
  createHttpTransport,
  createConfiguredTransport,
  STORAGE_KEY_PLAYER_ID,
  type SyncTransport,
} from '../utils/saveSync';
import type { BackupPayload } from '../utils/saveData';

/** In-memory localStorage, since these tests run in the node environment. */
const store = new Map<string, string>();
beforeEach(() => {
  store.clear();
  vi.stubGlobal('window', {});
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
  });
});

function payload(completed: number, coins = 0, exportedAt = '2028-01-01T00:00:00.000Z'): BackupPayload {
  return {
    game: 'Paititi_1928',
    version: '2.0',
    exportedAt,
    keys: {
      differenze_progress_v1: {
        completedLevelIds: Array.from({ length: completed }, (_, i) => i + 1),
        discoveredClues: [],
      },
      differenze_economy_v1: { coins },
    },
  };
}

describe('player id', () => {
  it('generates a readable id once and reuses it', () => {
    const first = getPlayerId();
    expect(first).toMatch(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
    expect(getPlayerId()).toBe(first);
  });

  it('avoids characters a player would misread aloud', () => {
    const id = getPlayerId();
    expect(id).not.toMatch(/[OI01]/);
  });

  it('accepts a valid id typed on a second device', () => {
    expect(setPlayerId('abcd-2345-wxyz')).toBe(true);
    expect(store.get(STORAGE_KEY_PLAYER_ID)).toBe('ABCD-2345-WXYZ');
  });

  it('rejects an id that is too short or malformed', () => {
    expect(setPlayerId('nope')).toBe(false);
    expect(setPlayerId('has spaces here')).toBe(false);
  });
});

describe('conflict resolution', () => {
  it('ranks by completed levels first', () => {
    expect(progressScore(payload(10))).toBeGreaterThan(progressScore(payload(9, 999)));
  });

  it('keeps the more advanced save', () => {
    expect(pickWinner(payload(5), payload(12))).toBe('remote');
    expect(pickWinner(payload(20), payload(3))).toBe('local');
  });

  it('keeps local when there is nothing remote yet', () => {
    expect(pickWinner(payload(1), null)).toBe('local');
  });

  it('breaks an exact tie with the more recent export', () => {
    const older = payload(7, 100, '2028-01-01T00:00:00.000Z');
    const newer = payload(7, 100, '2028-06-01T00:00:00.000Z');
    expect(pickWinner(older, newer)).toBe('remote');
    expect(pickWinner(newer, older)).toBe('local');
  });

  it('treats a missing payload as no progress at all', () => {
    expect(progressScore(null)).toBe(-1);
  });
});

describe('syncing', () => {
  const fakeTransport = (remote: BackupPayload | null) => {
    const pushed: BackupPayload[] = [];
    const transport: SyncTransport = {
      pull: async () => remote,
      push: async (_id, p) => void pushed.push(p),
    };
    return { transport, pushed };
  };

  it('does nothing at all when no backend is configured', async () => {
    expect(await syncSave(null)).toEqual({ status: 'disabled' });
  });

  it('uploads when this device is ahead', async () => {
    store.set('differenze_progress_v1', JSON.stringify({ completedLevelIds: [1, 2, 3], discoveredClues: [] }));
    const { transport, pushed } = fakeTransport(payload(1));

    expect(await syncSave(transport)).toEqual({ status: 'pushed' });
    expect(pushed).toHaveLength(1);
  });

  it('restores when the remote slot is ahead', async () => {
    store.set('differenze_progress_v1', JSON.stringify({ completedLevelIds: [1], discoveredClues: [] }));
    const { transport, pushed } = fakeTransport(payload(40, 500));

    const result = await syncSave(transport);
    expect(result.status).toBe('pulled');
    expect(pushed).toHaveLength(0);

    const restored = JSON.parse(store.get('differenze_progress_v1')!);
    expect(restored.completedLevelIds).toHaveLength(40);
  });

  it('never lets a transport failure interrupt play', async () => {
    const transport: SyncTransport = {
      pull: async () => { throw new Error('offline'); },
      push: async () => {},
    };

    const result = await syncSave(transport);
    expect(result).toEqual({ status: 'failed', error: 'offline' });
  });
});

describe('http transport', () => {
  it('treats an empty slot as no remote save rather than an error', async () => {
    const fetchImpl = (async () => ({ status: 404, ok: false })) as unknown as typeof fetch;
    const transport = createHttpTransport('https://example.test/saves', fetchImpl);
    expect(await transport.pull('ABCD-2345-WXYZ')).toBeNull();
  });

  it('refuses a slot serving something that is not one of our saves', async () => {
    const fetchImpl = (async () => ({
      status: 200,
      ok: true,
      json: async () => ({ hello: 'world' }),
    })) as unknown as typeof fetch;
    const transport = createHttpTransport('https://example.test/saves', fetchImpl);
    expect(await transport.pull('ABCD-2345-WXYZ')).toBeNull();
  });

  it('reports a server error instead of silently losing the save', async () => {
    const fetchImpl = (async () => ({ status: 500, ok: false })) as unknown as typeof fetch;
    const transport = createHttpTransport('https://example.test/saves', fetchImpl);
    await expect(transport.pull('ABCD-2345-WXYZ')).rejects.toThrow(/500/);
  });

  it('is not configured when no endpoint is set', () => {
    expect(createConfiguredTransport(undefined)).toBeNull();
    expect(createConfiguredTransport('https://example.test/saves')).not.toBeNull();
  });
});
