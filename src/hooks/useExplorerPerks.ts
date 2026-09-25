import { useMemo } from 'react';
import {
  ALL_OUTFITS,
  ALL_ACCESSORIES,
  getActiveSetBonuses,
  type ExplorerProfile,
} from '../data/avatarData';

export interface EquippedPerk {
  type: string;
  value: number;
}

export interface ExplorerPerks {
  /** The first active set synergy, or null. Drives the full_set_synergy medal. */
  primaryActiveSet: ReturnType<typeof getActiveSetBonuses>[number] | null;
  /** Every perk granted by the eight equipment slots plus any active set bonuses. */
  equippedPerks: EquippedPerk[];
  coinBonusPercent: number;
  freezeBonusSeconds: number;
  radarBonusPercent: number;
  hasPassiveFreeShield: boolean;
}

const sumPerk = (perks: EquippedPerk[], type: string): number =>
  perks.filter(p => p.type === type).reduce((sum, p) => sum + p.value, 0);

/**
 * Resolves the explorer's eight equipment slots into the bonuses a run actually uses.
 *
 * Extracted from App so the rules live next to the data they read, and so a wardrobe
 * change recomputes once per profile change rather than on every render of the app root.
 */
export function useExplorerPerks(profile: ExplorerProfile): ExplorerPerks {
  return useMemo(() => {
    const slotted = [
      ALL_OUTFITS.find(o => o.id === profile.equippedOutfitId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedHeadgearId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedToolId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedOffHandId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedLegsId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedBootsId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedTalismanId),
      ALL_ACCESSORIES.find(a => a.id === profile.equippedBackId),
    ];

    const activeSets = getActiveSetBonuses(
      profile.equippedOutfitId,
      profile.equippedHeadgearId,
      profile.equippedToolId,
      profile.equippedOffHandId,
      profile.equippedLegsId,
      profile.equippedBootsId,
      profile.equippedTalismanId,
      profile.equippedBackId
    ).filter(s => s.isActive);

    const equippedPerks = [
      ...slotted.map(item => item?.perk),
      ...activeSets.map(s => s.set.perk),
    ].filter(Boolean) as EquippedPerk[];

    return {
      primaryActiveSet: activeSets[0] || null,
      equippedPerks,
      coinBonusPercent: sumPerk(equippedPerks, 'coin_boost'),
      freezeBonusSeconds: sumPerk(equippedPerks, 'freeze_boost'),
      radarBonusPercent: sumPerk(equippedPerks, 'radar_boost'),
      hasPassiveFreeShield: equippedPerks.some(p => p.type === 'free_shield'),
    };
  }, [profile]);
}
