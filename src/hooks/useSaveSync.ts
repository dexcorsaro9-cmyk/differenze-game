import { useCallback, useEffect, useRef, useState } from 'react';
import {
  syncSave,
  createConfiguredTransport,
  getPlayerId,
  type SyncOutcome,
  type SyncTransport,
} from '../utils/saveSync';

/**
 * Keeps this device reconciled with its remote save slot.
 *
 * Inert unless VITE_SYNC_ENDPOINT is configured: with no backend the transport is null,
 * every call short-circuits to 'disabled', and the game behaves exactly as it does without
 * this hook. A sync is attempted on mount and whenever the caller reports meaningful
 * progress, never in the middle of a run.
 */
export function useSaveSync(progressMarker: number) {
  const [transport] = useState<SyncTransport | null>(() => createConfiguredTransport());
  const [lastOutcome, setLastOutcome] = useState<SyncOutcome | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const inFlightRef = useRef(false);

  const runSync = useCallback(async () => {
    if (!transport || inFlightRef.current) return;

    inFlightRef.current = true;
    setIsSyncing(true);
    try {
      const outcome = await syncSave(transport);
      setLastOutcome(outcome);

      // A pull rewrote localStorage underneath the running app; a reload is the honest way
      // to adopt it rather than leaving half the screen showing the old save.
      if (outcome.status === 'pulled' && typeof window !== 'undefined') {
        window.location.reload();
      }
    } finally {
      inFlightRef.current = false;
      setIsSyncing(false);
    }
  }, [transport]);

  useEffect(() => {
    void runSync();
  }, [runSync, progressMarker]);

  return {
    isConfigured: transport !== null,
    isSyncing,
    lastOutcome,
    playerId: getPlayerId(),
    syncNow: runSync,
  };
}
