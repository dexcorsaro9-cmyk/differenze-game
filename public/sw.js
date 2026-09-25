// =========================================================================
// PAITITI 1928 - EXPEDITION SERVICE WORKER (OFFLINE ARCHIVE ENGINE v6.0)
// =========================================================================
const CACHE_VERSION = 'paititi-expedition-v6.0';
const CACHE_NAME = `paititi-core-${CACHE_VERSION}`;
const RUNTIME_CACHE = `paititi-runtime-${CACHE_VERSION}`;

// Core static assets to cache immediately upon installation
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './splash_screen.webp',
  './app_icon.jpg',
  './avatars/female_samira.webp',
  './avatars/female_samira_back.webp',
  './avatars/male_mateo.webp',
  './avatars/male_mateo_back.webp'
];

// Install Event: Pre-cache shell and force activation without waiting
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          fetch(url, { cache: 'no-cache' })
            .then((response) => {
              if (response && response.ok) return cache.put(url, response);
            })
            .catch(() => {})
        )
      );
    })
  );
});

// Activate Event: Aggressively purge all outdated caches and claim clients
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-First for HTML/Scripts/Styles to avoid stale code lock; Cache-First for Heavy Media
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and non-http(s) protocols
  if (request.method !== 'GET') return;
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // 1. Navigation Requests (HTML entry points): Network-First
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('./index.html') || caches.match('/');
          });
        })
    );
    return;
  }

  // 2. Application Code & Metadata (JS bundles, CSS, Manifest, JSON): Network-First
  const isCodeOrData =
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.json') ||
    request.destination === 'script' ||
    request.destination === 'style';

  if (isCodeOrData) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 3. Static Media Assets (Images, Audio, WebFonts): Cache-First with Network Revalidation
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => null);
    })
  );
});

// Lifecycle and Diagnostic Messages
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => caches.delete(name)));
    });
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0]?.postMessage({ version: CACHE_VERSION });
  }
});
