import { safeStorage } from './storage';

/**
 * Optional, anonymous gameplay analytics.
 *
 * The problem it exists to solve: the difficulty curve across 120 levels is currently a
 * set of estimates. telemetry.ts already records accuracy and times, but only on the
 * device, so there is no way to learn which level players stall on or quit at, and every
 * balance decision after this one would stay an opinion.
 *
 * Three deliberate constraints, in order of importance:
 *
 *   1. **No identifier of any kind is sent.** Not a player id, not a device id, not an
 *      advertising id, nothing that links two events to the same person. That is enough
 *      to answer "which level is too hard" and "where do people stop", which is what the
 *      balance work needs. It cannot answer per-player retention, and that is the price.
 *   2. **Opt-in, off by default.** The published privacy policy guarantees nothing is
 *      transmitted; that guarantee stays true for every player who does not turn this on.
 *   3. **Inert unless configured.** With no endpoint the queue is never even written.
 *
 * Failures are swallowed. Analytics must never cost a player their turn.
 */
export const STORAGE_KEY_ANALYTICS_QUEUE = 'differenze_analytics_queue_v1';

/** Bounded so a long offline stretch cannot grow storage without limit. */
export const MAX_QUEUED_EVENTS = 200;
export const FLUSH_BATCH_SIZE = 25;

export type GameplayEventType = 'level_start' | 'level_complete' | 'level_failed';

export interface GameplayEvent {
  type: GameplayEventType;
  levelId: number;
  difficulty: string;
  /** Whether the scene required naming the riddle first. */
  sealed: boolean;
  /** Completion only. */
  timeSeconds?: number;
  errors?: number;
  hintsUsed?: number;
  stars?: number;
}

interface QueuedEvent extends GameplayEvent {
  /** Rounded to the hour: enough to bucket by build era, too coarse to fingerprint. */
  at: string;
}

export interface AnalyticsTransport {
  send(events: QueuedEvent[]): Promise<void>;
}

let transport: AnalyticsTransport | null = null;
let enabled = false;

export function configureAnalytics(next: AnalyticsTransport | null, isEnabled: boolean): void {
  transport = next;
  enabled = isEnabled;
  if (!isEnabled) clearQueue();
}

export function isAnalyticsActive(): boolean {
  return transport !== null && enabled;
}

function readQueue(): QueuedEvent[] {
  const raw = safeStorage.getItem(STORAGE_KEY_ANALYTICS_QUEUE);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as QueuedEvent[]) : [];
  } catch {
    return [];
  }
}

function writeQueue(events: QueuedEvent[]): void {
  safeStorage.setItem(STORAGE_KEY_ANALYTICS_QUEUE, JSON.stringify(events));
}

export function clearQueue(): void {
  safeStorage.removeItem(STORAGE_KEY_ANALYTICS_QUEUE);
}

export function getQueueLength(): number {
  return readQueue().length;
}

/** Hour precision: enough to correlate with a release, not enough to single anyone out. */
function coarseTimestamp(now: Date): string {
  return `${now.toISOString().slice(0, 13)}:00:00Z`;
}

/** Queues an event. A no-op when analytics are off or unconfigured. */
export function recordEvent(event: GameplayEvent, now: Date = new Date()): void {
  if (!isAnalyticsActive()) return;

  const queue = readQueue();
  queue.push({ ...event, at: coarseTimestamp(now) });

  // Drop the oldest rather than the newest: recent play is the more useful signal.
  writeQueue(queue.slice(-MAX_QUEUED_EVENTS));
}

export type FlushOutcome =
  | { status: 'inactive' }
  | { status: 'empty' }
  | { status: 'sent'; count: number }
  | { status: 'failed'; error: string };

/**
 * Sends one batch. Events are only dropped from the queue once the send resolves, so a
 * failure keeps them for the next attempt instead of losing them.
 */
export async function flushEvents(): Promise<FlushOutcome> {
  if (!isAnalyticsActive() || !transport) return { status: 'inactive' };

  const queue = readQueue();
  if (queue.length === 0) return { status: 'empty' };

  const batch = queue.slice(0, FLUSH_BATCH_SIZE);

  try {
    await transport.send(batch);
    writeQueue(readQueue().slice(batch.length));
    return { status: 'sent', count: batch.length };
  } catch (error) {
    return { status: 'failed', error: error instanceof Error ? error.message : String(error) };
  }
}

export function createHttpAnalyticsTransport(
  endpoint: string,
  fetchImpl: typeof fetch = fetch
): AnalyticsTransport {
  return {
    async send(events) {
      const res = await fetchImpl(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ events }),
      });
      if (!res.ok) throw new Error(`analytics send failed: ${res.status}`);
    },
  };
}

/**
 * Uses VITE_TELEMETRY_ENDPOINT, or falls back to the save-sync backend's /telemetry path
 * so a single small server can serve both. Null when neither is set.
 */
export function createConfiguredAnalyticsTransport(
  telemetryEndpoint: string | undefined = import.meta.env.VITE_TELEMETRY_ENDPOINT,
  syncEndpoint: string | undefined = import.meta.env.VITE_SYNC_ENDPOINT
): AnalyticsTransport | null {
  const endpoint = telemetryEndpoint || (syncEndpoint ? `${syncEndpoint.replace(/\/$/, '')}/telemetry` : undefined);
  if (!endpoint) return null;
  return createHttpAnalyticsTransport(endpoint);
}
