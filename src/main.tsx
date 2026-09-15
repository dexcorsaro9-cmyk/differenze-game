import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Dynamic viewport height synchronization for mobile browsers (iOS Safari / Android Chrome)
function setupDynamicViewport() {
  const syncHeight = () => {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${vh}px`);
  };

  syncHeight();
  window.addEventListener('resize', syncHeight);
  window.addEventListener('orientationchange', syncHeight);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', syncHeight);
  }
}

setupDynamicViewport();

// Purge obsolete PWA and runtime caches from older versions
const CURRENT_APP_BUILD = '5.1.0';
try {
  const storedBuild = localStorage.getItem('paititi_app_build');
  if (storedBuild !== CURRENT_APP_BUILD) {
    localStorage.setItem('paititi_app_build', CURRENT_APP_BUILD);
    if (typeof window !== 'undefined' && 'caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          if (!name.includes('v5.1')) {
            caches.delete(name);
          }
        });
      });
    }
  }
} catch {
  // Ignore storage errors in restricted webview/iframe environments
}

// Prevent iOS Safari page-level pinch zoom & gesture artifacts
// so only the in-game photo stage scales via its custom touch handlers
if (typeof document !== 'undefined') {
  document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('gestureend', (e) => e.preventDefault(), { passive: false });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
