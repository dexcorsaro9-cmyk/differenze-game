import { useState, useEffect, useCallback } from 'react';
import { safeStorage } from '../utils/storage';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { ALL_ACHIEVEMENTS, type Achievement } from '../data/achievementsData';
import type { ConsularVisa } from '../data/passportData';
import type { PowerUpInventory, PowerUpType, ShopItem } from '../types/game';
import type { CoinBurstEvent } from '../components/FlyingCoinParticles';

const STORAGE_KEY_ECONOMY = 'differenze_economy_v1';
const STORAGE_KEY_INVENTORY = 'differenze_inventory_v1';
const STORAGE_KEY_MEDALS = 'differenze_medals_v1';
const STORAGE_KEY_CLAIMED_MEDALS = 'differenze_claimed_medals_v1';
const STORAGE_KEY_CLAIMED_VISAS = 'differenze_claimed_visas_v1';

const DEFAULT_INVENTORY: PowerUpInventory = {
  freeze_time: 2,
  compass_radar: 2,
  hint: 3,
  error_shield: 1,
};

export const useEconomy = (onOpenShopModal?: () => void) => {
  // Coins
  const [coins, setCoins] = useState<number>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_ECONOMY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return typeof parsed.coins === 'number' ? parsed.coins : 150;
      } catch {
        return 150;
      }
    }
    return 150;
  });

  // Power-up Inventory
  const [inventory, setInventory] = useState<PowerUpInventory>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_INVENTORY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback default
      }
    }
    return DEFAULT_INVENTORY;
  });

  // Flying Coins Particle Bursts & Counter Bounce
  const [coinBursts, setCoinBursts] = useState<CoinBurstEvent[]>([]);
  const [isCoinBouncing, setIsCoinBouncing] = useState<boolean>(false);

  // Expedition Medals
  const [unlockedMedalIds, setUnlockedMedalIds] = useState<string[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_MEDALS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  const [claimedMedalIds, setClaimedMedalIds] = useState<string[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_CLAIMED_MEDALS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  // Consular Visas
  const [claimedVisaIds, setClaimedVisaIds] = useState<string[]>(() => {
    const saved = safeStorage.getItem(STORAGE_KEY_CLAIMED_VISAS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  // Active floating toast for medal unlock
  const [unlockedToastMedal, setUnlockedToastMedal] = useState<Achievement | null>(null);

  // Sync to safeStorage
  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_ECONOMY, JSON.stringify({ coins }));
  }, [coins]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_INVENTORY, JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_MEDALS, JSON.stringify(unlockedMedalIds));
  }, [unlockedMedalIds]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_CLAIMED_MEDALS, JSON.stringify(claimedMedalIds));
  }, [claimedMedalIds]);

  useEffect(() => {
    safeStorage.setItem(STORAGE_KEY_CLAIMED_VISAS, JSON.stringify(claimedVisaIds));
  }, [claimedVisaIds]);

  // Spend Coins helper
  const spendCoins = useCallback((amount: number): boolean => {
    if (coins >= amount) {
      setCoins(c => c - amount);
      return true;
    }
    return false;
  }, [coins]);

  // Unlock Medal helper
  const unlockMedal = useCallback((medalId: string) => {
    setUnlockedMedalIds(prev => {
      if (prev.includes(medalId)) return prev;
      const medal = ALL_ACHIEVEMENTS.find((m: Achievement) => m.id === medalId);
      if (medal) {
        sound.playAchievementUnlock();
        triggerHaptic('success');
        setUnlockedToastMedal(medal);
        setTimeout(() => {
          setUnlockedToastMedal((curr: Achievement | null) => (curr?.id === medalId ? null : curr));
        }, 4200);
      }
      return [...prev, medalId];
    });
  }, []);

  // Claim Medal Bounty
  const handleClaimMedalBounty = useCallback((medalId: string) => {
    const medal = ALL_ACHIEVEMENTS.find((m: Achievement) => m.id === medalId);
    if (!medal) return;
    setClaimedMedalIds(prev => {
      if (prev.includes(medalId)) return prev;
      return [...prev, medalId];
    });
    setCoins(c => c + medal.coinReward);
    sound.playCoinBurst();
    triggerHaptic('success');
  }, []);

  // Claim Visa Bounty
  const handleClaimVisaBounty = useCallback((visa: ConsularVisa) => {
    setClaimedVisaIds(prev => {
      if (prev.includes(visa.id)) return prev;
      return [...prev, visa.id];
    });
    setCoins(c => c + visa.bounty);
    sound.playCoinBurst();
    triggerHaptic('success');
  }, []);

  // Quick In-Bar Purchase with Coins
  const handleQuickBuy = useCallback(
    (type: PowerUpType, vibrationEnabled = true) => {
      const PRICES: Record<PowerUpType, number> = {
        freeze_time: 60,
        compass_radar: 40,
        hint: 50,
        error_shield: 45,
      };
      const price = PRICES[type];
      if (coins >= price) {
        setCoins(c => c - price);
        setInventory(inv => ({ ...inv, [type]: inv[type] + 1 }));
        sound.playCoin();
        triggerHaptic('success', vibrationEnabled);
      } else if (onOpenShopModal) {
        onOpenShopModal();
      }
    },
    [coins, onOpenShopModal]
  );

  // Shop item purchase
  const handleBuyShopItem = useCallback(
    (item: ShopItem): boolean => {
      if (coins < item.coinPrice) return false;
      setCoins(c => c - item.coinPrice);

      if (item.type === 'bundle' && item.contents) {
        setInventory(inv => {
          const next = { ...inv };
          item.contents?.forEach(entry => {
            next[entry.type] = (next[entry.type] || 0) + entry.count;
          });
          return next;
        });
      } else if (item.powerUpType) {
        setInventory(inv => ({
          ...inv,
          [item.powerUpType!]: inv[item.powerUpType!] + item.quantity,
        }));
      }
      return true;
    },
    [coins]
  );

  // Emergency expedition relief
  const handleClaimEmergencyFunds = useCallback(() => {
    setCoins(c => c + 60);
  }, []);

  // Coin particle handlers
  const handleCoinBurstComplete = useCallback((burstId: string) => {
    setCoinBursts(prev => prev.filter(b => b.id !== burstId));
  }, []);

  const handleCoinLanded = useCallback(() => {
    setIsCoinBouncing(true);
    setTimeout(() => setIsCoinBouncing(false), 450);
  }, []);

  const triggerCoinBurst = useCallback((startX: number, startY: number, count: number) => {
    setCoinBursts(prev => [
      ...prev,
      {
        id: `${Date.now()}_${Math.random()}`,
        startX,
        startY,
        count,
      },
    ]);
  }, []);

  // Reset economy state
  const resetEconomy = useCallback(() => {
    safeStorage.removeItem(STORAGE_KEY_ECONOMY);
    safeStorage.removeItem(STORAGE_KEY_INVENTORY);
    safeStorage.removeItem(STORAGE_KEY_MEDALS);
    safeStorage.removeItem(STORAGE_KEY_CLAIMED_MEDALS);
    safeStorage.removeItem(STORAGE_KEY_CLAIMED_VISAS);
    setCoins(150);
    setInventory(DEFAULT_INVENTORY);
    setUnlockedMedalIds([]);
    setClaimedMedalIds([]);
    setClaimedVisaIds([]);
    setUnlockedToastMedal(null);
  }, []);

  return {
    coins,
    setCoins,
    inventory,
    setInventory,
    coinBursts,
    isCoinBouncing,
    unlockedMedalIds,
    setUnlockedMedalIds,
    claimedMedalIds,
    claimedVisaIds,
    unlockedToastMedal,
    setUnlockedToastMedal,
    spendCoins,
    unlockMedal,
    handleClaimMedalBounty,
    handleClaimVisaBounty,
    handleQuickBuy,
    handleBuyShopItem,
    handleClaimEmergencyFunds,
    handleCoinBurstComplete,
    handleCoinLanded,
    triggerCoinBurst,
    resetEconomy,
  };
};
