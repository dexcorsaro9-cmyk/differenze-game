import type { Language } from '../types';
import type { Difference } from '../../types/game';
import type { StageCluesTranslations } from './types';

export * from './types';

import { STAGE_1_CLUES_I18N } from './stage1';
import { STAGE_2_CLUES_I18N } from './stage2';
import { STAGE_3_CLUES_I18N } from './stage3';
import { STAGE_4_CLUES_I18N } from './stage4';
import { STAGE_5_CLUES_I18N } from './stage5';
import { STAGE_6_CLUES_I18N } from './stage6';
import { STAGE_7_CLUES_I18N } from './stage7';
import { STAGE_8_CLUES_I18N } from './stage8';
import { STAGE_9_CLUES_I18N } from './stage9';
import { STAGE_10_CLUES_I18N } from './stage10';
import { STAGE_11_CLUES_I18N } from './stage11';
import { STAGE_12_CLUES_I18N } from './stage12';

const ALL_CLUES_I18N: StageCluesTranslations = {
  ...STAGE_1_CLUES_I18N,
  ...STAGE_2_CLUES_I18N,
  ...STAGE_3_CLUES_I18N,
  ...STAGE_4_CLUES_I18N,
  ...STAGE_5_CLUES_I18N,
  ...STAGE_6_CLUES_I18N,
  ...STAGE_7_CLUES_I18N,
  ...STAGE_8_CLUES_I18N,
  ...STAGE_9_CLUES_I18N,
  ...STAGE_10_CLUES_I18N,
  ...STAGE_11_CLUES_I18N,
  ...STAGE_12_CLUES_I18N,
};

export function getLocalizedDifference(diff: Difference, lang: Language): Difference;
export function getLocalizedDifference(diff: null, lang: Language): null;
export function getLocalizedDifference(diff: Difference | null, lang: Language): Difference | null;
export function getLocalizedDifference(diff: Difference | null, lang: Language): Difference | null {
  if (!diff) return null;
  if (lang === 'it') return diff;
  const trans = ALL_CLUES_I18N[diff.id]?.[lang];
  if (!trans) return diff;
  return {
    ...diff,
    name: trans.name || diff.name,
    riddle: trans.riddle || diff.riddle,
    loreClue: trans.loreClue || diff.loreClue,
  };
}

export function getLocalizedDifferences(diffs: Difference[], lang: Language): Difference[] {
  if (lang === 'it') return diffs;
  return diffs.map(d => getLocalizedDifference(d, lang));
}
