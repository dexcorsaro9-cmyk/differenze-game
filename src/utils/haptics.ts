export type HapticType =
  | 'tap'
  | 'light'
  | 'medium'
  | 'error'
  | 'success'
  | 'clue_found'
  | 'combo'
  | 'three_stars'
  | 'powerup_used'
  | 'relic_discovered';

// Native mobile haptic feedback helper
export const triggerHaptic = (type: HapticType, enabled: boolean = true) => {
  if (!enabled || typeof window === 'undefined' || !('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'tap':
        navigator.vibrate(10);
        break;
      case 'light':
        navigator.vibrate(15);
        break;
      case 'medium':
        navigator.vibrate(35);
        break;
      case 'clue_found':
        // Crisp dual-click feedback for discovering a hidden difference
        navigator.vibrate([25, 35, 40]);
        break;
      case 'combo':
        // Accelerating celebratory pulse for consecutive fast finds
        navigator.vibrate([18, 30, 22, 30, 38]);
        break;
      case 'three_stars':
        // Triumphant 3-star victory fanfare
        navigator.vibrate([40, 50, 40, 50, 80]);
        break;
      case 'powerup_used':
        // Tool engagement mechanical buzz
        navigator.vibrate([20, 35, 20]);
        break;
      case 'relic_discovered':
        // Legendary artifact gold shimmer vibration
        navigator.vibrate([45, 60, 45, 60, 110]);
        break;
      case 'success':
        navigator.vibrate([20, 50, 30]);
        break;
      case 'error':
        navigator.vibrate([40, 60, 40]);
        break;
    }
  } catch {
    // Ignore environments where vibration is blocked
  }
};
