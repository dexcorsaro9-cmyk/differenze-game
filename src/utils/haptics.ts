// Native mobile haptic feedback helper
export const triggerHaptic = (type: 'light' | 'medium' | 'error' | 'success', enabled: boolean = true) => {
  if (!enabled || typeof window === 'undefined' || !('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'light':
        navigator.vibrate(15);
        break;
      case 'medium':
        navigator.vibrate(30);
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
