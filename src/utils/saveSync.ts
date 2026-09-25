import { safeStorage } from './storage';
import {
  buildBackupPayload,
  applyBackupPayload,
  isBackupPayload,
  type BackupPayload,
} from './saveData';

/**
 * Cross-device save sync.
 *
 * The export/restore in Settings already prevents a total loss, but it only helps a player
 * who remembered to export before switching phones. This carries the same payload to a
 * remote slot automatically.
 *
 * Deliberately transport-agnostic: the game does not know or care whether the slot is
 * Firebase, Supabase or a hand-rolled endpoint. Configure VITE_SYNC_ENDPOINT to activate.
 * With nothing configured every call is a no-op and the game behaves exactly as it does
 * today, so this is inert until a backend exists.
 */
export const STORAGE_KEY_PLAYER_ID = 'differenze_player_id_v1';
export const STORAGE_KEY_LAST_SYNC = 'differenze_last_sync_v1';

export interface SyncTransport {
  pull(playerId: string): Promise<BackupPayload | null>;
  push(playerId: string, payload: BackupPayload): Promise<void>;
}

export type SyncOutcome =
  | { status: 'disabled' }
  | { status: 'pushed' }
  | { status: 'pulled'; restoredKeys: number }
  | { status: 'in-sync' }
  | { status: 'failed'; error: string };

/**
 * The player's sync slot. It travels in the backup payload on purpose: entering the same
 * id on a second device is what makes both devices one save rather than two.
 */
export function getPlayerId(generate: () => string = defaultIdGenerator): string {
  const existing = safeStorage.getItem(STORAGE_KEY_PLAYER_ID);
  if (existing) return existing;

  const fresh = generate();
  safeStorage.setItem(STORAGE_KEY_PLAYER_ID, fresh);
  return fresh;
}

export function setPlayerId(id: string): boolean {
  const trimmed = id.trim().toUpperCase();
  if (!/^[A-Z0-9-]{6,64}$/.test(trimmed)) return false;
  return safeStorage.setItem(STORAGE_KEY_PLAYER_ID, trimmed);
}

function defaultIdGenerator(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no look-alikes: the player reads this aloud
  const pick = (n: number) =>
    Array.from({ length: n }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  return `${pick(4)}-${pick(4)}-${pick(4)}`;
}

/**
 * How much expedition a payload represents.
 *
 * Used to decide which side of a conflict wins. Completed levels come first because they
 * are the thing a player would be most upset to lose; coins and time break ties.
 */
export function progressScore(payload: BackupPayload | null): number {
  if (!payload?.keys) return -1;

  const progress = payload.keys['differenze_progress_v1'] as
    | { completedLevelIds?: unknown[]; discoveredClues?: unknown[] }
    | undefined;
  const economy = payload.keys['differenze_economy_v1'] as { coins?: number } | undefined;

  const completed = Array.isArray(progress?.completedLevelIds) ? progress!.completedLevelIds.length : 0;
  const clues = Array.isArray(progress?.discoveredClues) ? progress!.discoveredClues.length : 0;
  const coins = typeof economy?.coins === 'number' ? economy.coins : 0;

  return completed * 1_000_000 + clues * 1_000 + Math.min(coins, 999);
}

/** Picks the payload to keep. Ties fall to the more recent export. */
export function pickWinner(local: BackupPayload, remote: BackupPayload | null): 'local' | 'remote' {
  if (!remote) return 'local';

  const localScore = progressScore(local);
  const remoteScore = progressScore(remote);
  if (localScore !== remoteScore) return localScore > remoteScore ? 'local' : 'remote';

  const localTime = Date.parse(local.exportedAt || '') || 0;
  const remoteTime = Date.parse(remote.exportedAt || '') || 0;
  return remoteTime > localTime ? 'remote' : 'local';
}

/**
 * Reconciles this device with its remote slot.
 *
 * Never merges: a half-merged save is worse than either side. The more advanced payload
 * wins whole, which is why progressScore leads with completed levels.
 */
export async function syncSave(transport: SyncTransport | null): Promise<SyncOutcome> {
  if (!transport) return { status: 'disabled' };

  const playerId = getPlayerId();
  const local = buildBackupPayload();

  try {
    const remote = await transport.pull(playerId);
    const winner = pickWinner(local, remote);

    if (winner === 'remote' && remote) {
      const restoredKeys = applyBackupPayload(remote);
      safeStorage.setItem(STORAGE_KEY_LAST_SYNC, new Date().toISOString());
      return { status: 'pulled', restoredKeys };
    }

    if (remote && progressScore(remote) === progressScore(local)) {
      return { status: 'in-sync' };
    }

    await transport.push(playerId, local);
    safeStorage.setItem(STORAGE_KEY_LAST_SYNC, new Date().toISOString());
    return { status: 'pushed' };
  } catch (error) {
    // A sync failure must never cost the player their turn: local play continues.
    return { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
}

/**
 * A plain REST slot: GET returns the stored payload (or 404), PUT stores it.
 * Any backend that can serve those two verbs works, including a Supabase edge function
 * or a Firebase callable behind a rewrite.
 */
export function createHttpTransport(
  endpoint: string,
  fetchImpl: typeof fetch = fetch
): SyncTransport {
  const slot = (playerId: string) => `${endpoint.replace(/\/$/, '')}/${encodeURIComponent(playerId)}`;

  return {
    async pull(playerId) {
      const res = await fetchImpl(slot(playerId), { headers: { accept: 'application/json' } });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`sync pull failed: ${res.status}`);

      const body = await res.json();
      return isBackupPayload(body) ? body : null;
    },

    async push(playerId, payload) {
      const res = await fetchImpl(slot(playerId), {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`sync push failed: ${res.status}`);
    },
  };
}

/** Builds the configured transport, or null when no backend is set up. */
export function createConfiguredTransport(
  endpoint: string | undefined = import.meta.env.VITE_SYNC_ENDPOINT
): SyncTransport | null {
  if (!endpoint) return null;
  return createHttpTransport(endpoint);
}
