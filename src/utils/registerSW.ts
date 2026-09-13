// Service Worker Registration and PWA Lifecycle Helper
export interface SWRegistrationCallbacks {
  onOfflineReady?: () => void;
  onNeedRefresh?: () => void;
  onUpdateAvailable?: () => void;
}

export function registerExpeditionServiceWorker(callbacks: SWRegistrationCallbacks = {}) {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    // Correctly resolve sw.js relative to base URL (e.g. /differenze-game/sw.js)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const swUrl = `${baseUrl.replace(/\/$/, '')}/sw.js`;

    navigator.serviceWorker
      .register(swUrl, { scope: baseUrl })
      .then((registration) => {
        // Check if worker is installed and ready for offline use
        if (registration.active && !navigator.serviceWorker.controller) {
          callbacks.onOfflineReady?.();
        }

        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update available
                callbacks.onNeedRefresh?.();
                callbacks.onUpdateAvailable?.();
              } else {
                // Content cached for offline use
                callbacks.onOfflineReady?.();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.warn('Service Worker registration skipped or failed:', error);
      });
  });
}

// Check if game is running in standalone PWA / full-screen app mode
export function isStandaloneApp(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}
