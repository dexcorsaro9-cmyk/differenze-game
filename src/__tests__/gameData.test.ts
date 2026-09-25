import { describe, it, expect, beforeAll } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { ALL_120_LEVELS } from '../data/levelRegistry';
import { LEVEL_CLUES_REGISTRY } from '../data/levelCluesData';
import { LEVEL_SCENES, getLevelScene } from '../data/levelScenes';
import {
  getLocalizedDifference,
  loadClueTranslations,
  areClueTranslationsReady,
} from '../i18n';
import type { Language } from '../i18n/types';

const EXPECTED_LEVELS = 120;
const CLUES_PER_LEVEL = 8;
const LANGUAGES: Language[] = ['it', 'en', 'es'];

/**
 * The clue registry is this game's most valuable asset: 120 levels x 8 hand-authored
 * riddles with hand-calibrated coordinates. These invariants are what a bad merge or a
 * careless recalibration pass would break, so they are asserted on every commit.
 */
describe('level registry', () => {
  it('generates exactly 120 levels with contiguous ids', () => {
    expect(ALL_120_LEVELS).toHaveLength(EXPECTED_LEVELS);
    const ids = ALL_120_LEVELS.map(l => l.id);
    expect(ids).toEqual(Array.from({ length: EXPECTED_LEVELS }, (_, i) => i + 1));
  });

  it('assigns every level to a stage of ten, with no duplicate scene photograph', () => {
    ALL_120_LEVELS.forEach(level => {
      expect(level.chapterNumber).toBe(Math.floor((level.id - 1) / 10) + 1);
      expect(level.imageA, `level ${level.id} has no scene`).toBeTruthy();
    });

    // Two levels sharing the same photograph is the duplicate-level bug class.
    const photoOwners = new Map<string, number[]>();
    ALL_120_LEVELS.forEach(level => {
      const owners = photoOwners.get(level.imageA) || [];
      owners.push(level.id);
      photoOwners.set(level.imageA, owners);
    });
    const shared = [...photoOwners.entries()].filter(([, owners]) => owners.length > 1);
    expect(shared, `levels sharing a photograph: ${JSON.stringify(shared)}`).toEqual([]);
  });

  it('gives every level a title, subtitle and story', () => {
    ALL_120_LEVELS.forEach(level => {
      expect(level.title.trim(), `level ${level.id}`).not.toBe('');
      expect(level.subtitle.trim(), `level ${level.id}`).not.toBe('');
      expect(level.story.prologue.trim(), `level ${level.id}`).not.toBe('');
      expect(level.story.resolution.trim(), `level ${level.id}`).not.toBe('');
    });
  });

  it('ships every referenced scene photograph in public/', () => {
    const missing: string[] = [];
    ALL_120_LEVELS.forEach(level => {
      // Generated SVG scenes are inline data URIs, not files on disk.
      if (level.imageA.startsWith('data:')) return;
      const relative = level.imageA.replace(/^\/+/, '').replace(/^differenze-game\//, '').split('?')[0];
      if (!existsSync(resolve(process.cwd(), 'public', relative))) {
        missing.push(`level ${level.id}: ${relative}`);
      }
    });
    expect(missing, `scene files missing from public/: ${missing.join(', ')}`).toEqual([]);
  });
});

/**
 * Guards the asset layer: every static public path the code references must exist on disk.
 * This is what a bulk rename (JPEG -> WebP) or a deleted orphan would otherwise break
 * silently, showing players an empty scene only at runtime.
 */
describe('referenced assets', () => {
  it('ships every statically referenced public asset', () => {
    const root = resolve(process.cwd());
    const pattern = /['"](\/[A-Za-z0-9_\-/.]+\.(?:webp|jpg|jpeg|png|mp4|svg))(?:\?[^'"]*)?['"]/g;
    const missing = new Set<string>();
    let checked = 0;

    const walk = (dir: string): string[] => {
      const out: string[] = [];
      readdirSync(dir).forEach(entry => {
        const full = join(dir, entry);
        // Test fixtures reference paths that are deliberately not shipped assets.
        if (statSync(full).isDirectory()) {
          if (entry !== '__tests__') out.push(...walk(full));
        } else if (/\.(ts|tsx)$/.test(entry)) {
          out.push(full);
        }
      });
      return out;
    };

    walk(resolve(root, 'src')).forEach(file => {
      const text = readFileSync(file, 'utf8');
      for (const match of text.matchAll(pattern)) {
        const assetPath = match[1].replace(/^\/+/, '');
        // Vite serves src/assets through the bundler, not from public/
        if (assetPath.startsWith('src/')) continue;
        checked++;
        if (!existsSync(resolve(root, 'public', assetPath))) {
          missing.add(`${assetPath} (${file.replace(root + '/', '')})`);
        }
      }
    });

    // Vacuity guard, not a target: fails if the scan stops finding references at all,
    // which would silently turn this test into a no-op after a refactor.
    expect(checked, 'asset references scanned').toBeGreaterThan(200);
    expect([...missing], `assets referenced but absent from public/: ${[...missing].join(', ')}`)
      .toEqual([]);
  });
});

describe('scene map', () => {
  it('registers a scene for every level from 1 to 120', () => {
    const ids = Object.keys(LEVEL_SCENES).map(Number).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: EXPECTED_LEVELS }, (_, i) => i + 1));
  });

  it('gives each level its own photograph', () => {
    const paths = Object.values(LEVEL_SCENES).map(p => p.split('?')[0]);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('refuses an unregistered level rather than silently returning nothing', () => {
    expect(() => getLevelScene(121)).toThrow(/level 121/);
    expect(() => getLevelScene(0)).toThrow();
  });
});

describe('clue data', () => {
  it('has bespoke clues for all 120 levels', () => {
    const ids = Object.keys(LEVEL_CLUES_REGISTRY).map(Number).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: EXPECTED_LEVELS }, (_, i) => i + 1));
  });

  it('gives every level exactly 8 clues', () => {
    ALL_120_LEVELS.forEach(level => {
      expect(level.differences, `level ${level.id}`).toHaveLength(CLUES_PER_LEVEL);
    });
  });

  it('keeps every clue id globally unique', () => {
    const all = ALL_120_LEVELS.flatMap(l => l.differences.map(d => d.id));
    expect(all).toHaveLength(EXPECTED_LEVELS * CLUES_PER_LEVEL);
    expect(new Set(all).size).toBe(all.length);
  });

  it('keeps every clue inside the playable margins', () => {
    const offside: string[] = [];
    ALL_120_LEVELS.forEach(level => {
      level.differences.forEach(d => {
        if (d.x < 4 || d.x > 96 || d.y < 4 || d.y > 96) {
          offside.push(`${d.id} (${d.x}, ${d.y})`);
        }
      });
    });
    expect(offside, `clues too close to an edge: ${offside.join(', ')}`).toEqual([]);
  });

  it('never places two clues of one scene on the same spot', () => {
    const collisions: string[] = [];
    ALL_120_LEVELS.forEach(level => {
      const seen = new Set<string>();
      level.differences.forEach(d => {
        const spot = `${d.x},${d.y}`;
        if (seen.has(spot)) collisions.push(`level ${level.id} @ ${spot}`);
        seen.add(spot);
      });
    });
    expect(collisions).toEqual([]);
  });

  it('writes a distinct riddle and lore line for every clue', () => {
    ALL_120_LEVELS.forEach(level => {
      level.differences.forEach(d => {
        expect(d.name.trim(), d.id).not.toBe('');
        expect(d.loreClue.trim(), d.id).not.toBe('');
      });
    });

    // The 960 riddles are the selling point; duplicates would be a copy-paste regression.
    const riddles = ALL_120_LEVELS.flatMap(l => l.differences.map(d => (d.riddle || '').trim()))
      .filter(r => r !== '');
    const duplicates = riddles.filter((r, i) => riddles.indexOf(r) !== i);
    expect([...new Set(duplicates)], 'duplicated riddles').toEqual([]);
  });
});

describe('clue localisation', () => {
  beforeAll(async () => {
    // Clue dictionaries load per language on demand; exercising that path here is also
    // what proves the lazy loader actually resolves every stage chunk.
    await Promise.all(LANGUAGES.map(lang => loadClueTranslations(lang)));
  });

  it('reports Italian as ready without loading anything', () => {
    expect(areClueTranslationsReady('it')).toBe(true);
  });

  it('loads a dictionary for each translated language', () => {
    expect(areClueTranslationsReady('en')).toBe(true);
    expect(areClueTranslationsReady('es')).toBe(true);
  });

  it('translates every clue into every supported language', () => {
    const gaps: string[] = [];

    ALL_120_LEVELS.forEach(level => {
      level.differences.forEach(diff => {
        LANGUAGES.forEach(lang => {
          const localized = getLocalizedDifference(diff, lang);
          if (!localized.name?.trim() || !localized.loreClue?.trim()) {
            gaps.push(`${diff.id} [${lang}]`);
          }
        });
      });
    });

    expect(gaps, `untranslated clues: ${gaps.slice(0, 10).join(', ')}`).toEqual([]);
  });

  it('actually changes the strings, rather than falling back to Italian', () => {
    const sample = ALL_120_LEVELS[0].differences[0];
    const en = getLocalizedDifference(sample, 'en');
    const es = getLocalizedDifference(sample, 'es');

    expect(en.name).not.toBe(sample.name);
    expect(es.name).not.toBe(sample.name);
    expect(en.name).not.toBe(es.name);
  });
});
