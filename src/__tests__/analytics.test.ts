import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  configureAnalytics,
  isAnalyticsActive,
  recordEvent,
  flushEvents,
  getQueueLength,
  clearQueue,
  createHttpAnalyticsTransport,
  createConfiguredAnalyticsTransport,
  MAX_QUEUED_EVENTS,
  FLUSH_BATCH_SIZE,
  STORAGE_KEY_ANALYTICS_QUEUE,
  type AnalyticsTransport,
  type GameplayEvent,
} from '../utils/analytics';

const store = new Map<string, string>();

beforeEach(() => {
  store.clear();
  configureAnalytics(null, false);
  vi.stubGlobal('window', {});
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
  });
});

const sampleEvent: GameplayEvent = {
  type: 'level_complete',
  levelId: 42,
  difficulty: 'Normale',
  sealed: false,
  timeSeconds: 96,
  errors: 2,
  hintsUsed: 1,
  stars: 3,
};

function recordingTransport() {
  const sent: unknown[][] = [];
  const transport: AnalyticsTransport = {
    send: async events => void sent.push(events),
  };
  return { transport, sent };
}

describe('consent', () => {
  it('records nothing at all when the player has not opted in', () => {
    const { transport } = recordingTransport();
    configureAnalytics(transport, false);

    recordEvent(sampleEvent);

    expect(isAnalyticsActive()).toBe(false);
    expect(getQueueLength()).toBe(0);
    expect(store.has(STORAGE_KEY_ANALYTICS_QUEUE)).toBe(false);
  });

  it('records nothing when opted in but no backend is configured', () => {
    configureAnalytics(null, true);
    recordEvent(sampleEvent);
    expect(getQueueLength()).toBe(0);
  });

  it('sends nothing on flush while inactive', async () => {
    const { transport, sent } = recordingTransport();
    configureAnalytics(transport, false);

    expect(await flushEvents()).toEqual({ status: 'inactive' });
    expect(sent).toHaveLength(0);
  });

  it('discards anything still queued when consent is withdrawn', () => {
    const { transport } = recordingTransport();
    configureAnalytics(transport, true);
    recordEvent(sampleEvent);
    expect(getQueueLength()).toBe(1);

    configureAnalytics(transport, false);
    expect(getQueueLength()).toBe(0);
  });
});

describe('what is sent', () => {
  beforeEach(() => configureAnalytics(recordingTransport().transport, true));

  it('carries no identifier of any kind', () => {
    recordEvent(sampleEvent);
    const [queued] = JSON.parse(store.get(STORAGE_KEY_ANALYTICS_QUEUE)!);

    const keys = Object.keys(queued).sort();
    expect(keys).toEqual(
      ['at', 'difficulty', 'errors', 'hintsUsed', 'levelId', 'sealed', 'stars', 'timeSeconds', 'type'].sort()
    );
    // Nothing that could link two events to one person.
    const serialized = JSON.stringify(queued).toLowerCase();
    ['playerid', 'deviceid', 'uuid', 'session', 'ip', 'user'].forEach(forbidden => {
      expect(serialized).not.toContain(forbidden);
    });
  });

  it('blunts the timestamp to the hour so it cannot fingerprint a session', () => {
    recordEvent(sampleEvent, new Date('2028-03-04T15:47:23.456Z'));
    const [queued] = JSON.parse(store.get(STORAGE_KEY_ANALYTICS_QUEUE)!);
    expect(queued.at).toBe('2028-03-04T15:00:00Z');
  });
});

describe('the queue', () => {
  beforeEach(() => configureAnalytics(recordingTransport().transport, true));

  it('keeps the most recent events when it overflows', () => {
    for (let i = 0; i < MAX_QUEUED_EVENTS + 30; i++) {
      recordEvent({ ...sampleEvent, levelId: i });
    }

    const queued = JSON.parse(store.get(STORAGE_KEY_ANALYTICS_QUEUE)!);
    expect(queued).toHaveLength(MAX_QUEUED_EVENTS);
    expect(queued[queued.length - 1].levelId).toBe(MAX_QUEUED_EVENTS + 29);
  });

  it('survives a corrupted queue rather than throwing', () => {
    store.set(STORAGE_KEY_ANALYTICS_QUEUE, 'not json');
    expect(() => recordEvent(sampleEvent)).not.toThrow();
    expect(getQueueLength()).toBe(1);
  });
});

describe('flushing', () => {
  it('sends a batch and drops only what was sent', async () => {
    const { transport, sent } = recordingTransport();
    configureAnalytics(transport, true);
    for (let i = 0; i < FLUSH_BATCH_SIZE + 5; i++) recordEvent({ ...sampleEvent, levelId: i });

    const result = await flushEvents();

    expect(result).toEqual({ status: 'sent', count: FLUSH_BATCH_SIZE });
    expect(sent[0]).toHaveLength(FLUSH_BATCH_SIZE);
    expect(getQueueLength()).toBe(5);
  });

  it('reports an empty queue rather than sending nothing', async () => {
    configureAnalytics(recordingTransport().transport, true);
    expect(await flushEvents()).toEqual({ status: 'empty' });
  });

  it('keeps events for the next attempt when the send fails', async () => {
    configureAnalytics({ send: async () => { throw new Error('offline'); } }, true);
    recordEvent(sampleEvent);

    expect(await flushEvents()).toEqual({ status: 'failed', error: 'offline' });
    expect(getQueueLength()).toBe(1);
  });
});

describe('transport configuration', () => {
  it('is null when neither endpoint is set', () => {
    expect(createConfiguredAnalyticsTransport(undefined, undefined)).toBeNull();
  });

  it('falls back to the save-sync backend so one server can serve both', () => {
    expect(createConfiguredAnalyticsTransport(undefined, 'https://example.test/saves')).not.toBeNull();
  });

  it('reports a server error instead of dropping the batch', async () => {
    const fetchImpl = (async () => ({ ok: false, status: 503 })) as unknown as typeof fetch;
    const transport = createHttpAnalyticsTransport('https://example.test/telemetry', fetchImpl);
    await expect(transport.send([])).rejects.toThrow(/503/);
  });

  it('posts the events as a single JSON body', async () => {
    const calls: [string, RequestInit | undefined][] = [];
    const fetchImpl = (async (url: string, init?: RequestInit) => {
      calls.push([url, init]);
      return { ok: true, status: 200 };
    }) as unknown as typeof fetch;

    const transport = createHttpAnalyticsTransport('https://example.test/telemetry', fetchImpl);
    await transport.send([{ ...sampleEvent, at: '2028-01-01T00:00:00Z' }]);

    expect(calls[0][0]).toBe('https://example.test/telemetry');
    expect(calls[0][1]?.method).toBe('POST');
    expect(JSON.parse(String(calls[0][1]?.body)).events).toHaveLength(1);
  });
});

describe('cleanup', () => {
  it('clears the queue on request', () => {
    configureAnalytics(recordingTransport().transport, true);
    recordEvent(sampleEvent);
    clearQueue();
    expect(getQueueLength()).toBe(0);
  });
});
