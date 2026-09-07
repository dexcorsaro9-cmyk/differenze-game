/**
 * Helper to resolve public assets respecting Vite's base path (e.g. on GitHub Pages).
 */
export function assetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';

  // Normalize path by removing leading slash
  let cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Normalize base (e.g. "differenze-game/" or "")
  const cleanBase = base.startsWith('/') ? base.slice(1) : base;

  // If cleanPath already starts with cleanBase, strip it to prevent duplication!
  if (cleanBase && cleanPath.startsWith(cleanBase)) {
    cleanPath = cleanPath.slice(cleanBase.length);
    cleanPath = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  }

  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
