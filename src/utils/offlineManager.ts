import { generateAll120Levels } from '../data/levelRegistry';
import { STAGE_BRIEFINGS } from '../data/stageBriefingsData';
import { assetUrl } from './assetUrl';

export const OFFLINE_CACHE_VERSION = 'paititi-expedition-v6.0';
export const OFFLINE_RUNTIME_CACHE = `paititi-runtime-${OFFLINE_CACHE_VERSION}`;
export const OFFLINE_CORE_CACHE = `paititi-core-${OFFLINE_CACHE_VERSION}`;

/**
 * Returns a deduplicated list of all core asset URLs required for full offline play.
 */
export function getAllExpeditionAssetUrls(): string[] {
  const urls = new Set<string>();

  // 1. Core Shell Assets & Avatars
  const coreAssets = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.svg',
    '/icon-192.png',
    '/icon-512.png',
    '/apple-touch-icon.png',
    '/splash_screen.jpg',
    '/app_icon.jpg',
    '/avatars/female_samira.jpg',
    '/avatars/female_samira_back.jpg',
    '/avatars/male_mateo.jpg',
    '/avatars/male_mateo_back.jpg',
  ];
  coreAssets.forEach((asset) => {
    urls.add(assetUrl(asset));
  });

  // 2. Stage Briefing Banners
  Object.values(STAGE_BRIEFINGS).forEach((briefing) => {
    if (briefing.bannerImage) {
      urls.add(assetUrl(briefing.bannerImage));
    }
  });

  // 3. All 120 Levels: Photographic Plates A & B
  const allLevels = generateAll120Levels();
  allLevels.forEach((lvl) => {
    if (lvl.imageA) urls.add(assetUrl(lvl.imageA));
    if (lvl.imageB) urls.add(assetUrl(lvl.imageB));
  });

  return Array.from(urls).filter(Boolean);
}

export interface OfflineCacheStatus {
  isSupported: boolean;
  total: number;
  cached: number;
  isReady: boolean;
  percentage: number;
}

/**
 * Checks how many expedition assets are currently cached in CacheStorage.
 */
export async function getOfflineCacheStatus(): Promise<OfflineCacheStatus> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return { isSupported: false, total: 0, cached: 0, isReady: false, percentage: 0 };
  }

  try {
    const urls = getAllExpeditionAssetUrls();
    const total = urls.length;
    if (total === 0) {
      return { isSupported: true, total: 0, cached: 0, isReady: true, percentage: 100 };
    }

    const cache = await caches.open(OFFLINE_RUNTIME_CACHE);
    let cachedCount = 0;

    // Check in parallel batches of 25
    const BATCH_SIZE = 25;
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const chunk = urls.slice(i, i + BATCH_SIZE);
      const matches = await Promise.all(
        chunk.map((url) => cache.match(url, { ignoreSearch: true }))
      );
      matches.forEach((m) => {
        if (m) cachedCount++;
      });
    }

    const percentage = Math.round((cachedCount / total) * 100);
    const isReady = total > 0 && cachedCount >= Math.floor(total * 0.95);

    return {
      isSupported: true,
      total,
      cached: cachedCount,
      isReady,
      percentage,
    };
  } catch (err) {
    console.warn('Failed to inspect offline cache status:', err);
    return { isSupported: true, total: 0, cached: 0, isReady: false, percentage: 0 };
  }
}

/**
 * Downloads and caches all expedition assets with concurrency control and progress reporting.
 */
export async function downloadExpeditionOffline(
  onProgress?: (loaded: number, total: number, percent: number) => void
): Promise<{ success: boolean; total: number; cached: number; failed: number }> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    throw new Error('CacheStorage API is not available on this browser.');
  }

  const urls = getAllExpeditionAssetUrls();
  const total = urls.length;
  if (total === 0) return { success: true, total: 0, cached: 0, failed: 0 };

  const cache = await caches.open(OFFLINE_RUNTIME_CACHE);
  let loaded = 0;
  let failed = 0;

  const CONCURRENCY = 4;
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const currentIndex = index++;
      const url = urls[currentIndex];

      try {
        const alreadyCached = await cache.match(url, { ignoreSearch: true });
        if (!alreadyCached) {
          const response = await fetch(url, { cache: 'no-cache' });
          if (response.ok && (response.status === 200 || response.type === 'opaque')) {
            await cache.put(url, response);
          } else {
            failed++;
          }
        }
      } catch (err) {
        console.warn(`[Offline Precache] Failed asset: ${url}`, err);
        failed++;
      } finally {
        loaded++;
        if (onProgress) {
          const percent = Math.min(100, Math.round((loaded / total) * 100));
          onProgress(loaded, total, percent);
        }
      }
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, () => worker());
  await Promise.all(workers);

  const status = await getOfflineCacheStatus();
  return {
    success: status.isReady || failed < total * 0.1,
    total,
    cached: status.cached,
    failed,
  };
}
