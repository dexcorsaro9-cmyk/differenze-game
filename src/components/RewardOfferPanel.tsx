import React, { useCallback, useEffect, useState } from 'react';
import { Clapperboard, Loader2 } from 'lucide-react';
import {
  hasRewardProvider,
  getRewardAvailability,
  watchForReward,
  REWARD_OFFERS,
  type RewardAvailability,
} from '../utils/rewards';
import { useTranslation } from '../i18n/LanguageContext';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import type { PowerUpType } from '../types/game';

interface RewardOfferPanelProps {
  onRewardGranted: (powerUp: PowerUpType, quantity: number) => void;
  vibrationEnabled?: boolean;
}

const POWER_UP_ORDER: PowerUpType[] = ['hint', 'compass_radar', 'freeze_time', 'error_shield'];

/**
 * Optional rewarded-advert surface.
 *
 * Renders nothing at all unless an ad provider has been registered, so the shop looks
 * exactly as it does today until an ad account exists. Advert-watching is never required
 * to progress: every offer here is a power-up the player can also simply buy with coins.
 */
export const RewardOfferPanel: React.FC<RewardOfferPanelProps> = ({
  onRewardGranted,
  vibrationEnabled = true,
}) => {
  const { t, interpolate } = useTranslation();
  const [availability, setAvailability] = useState<RewardAvailability>(() => getRewardAvailability());
  const [pending, setPending] = useState<PowerUpType | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // The cooldown ticks down while the shop is open, so the button re-enables in place.
  useEffect(() => {
    if (!hasRewardProvider()) return;
    const interval = setInterval(() => setAvailability(getRewardAvailability()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleWatch = useCallback(
    async (powerUp: PowerUpType) => {
      if (pending) return;
      setPending(powerUp);
      setNotice(null);

      const result = await watchForReward(powerUp);
      setPending(null);
      setAvailability(getRewardAvailability());

      if (result.status === 'granted') {
        onRewardGranted(result.offer.powerUp, result.offer.quantity);
        sound.playCoinBurst();
        triggerHaptic('success', vibrationEnabled);
        setNotice(t.rewards.granted);
      } else if (result.status === 'dismissed') {
        setNotice(t.rewards.dismissed);
      } else if (result.status === 'failed') {
        setNotice(t.rewards.failed);
      }
    },
    [pending, onRewardGranted, vibrationEnabled, t]
  );

  if (!hasRewardProvider()) return null;

  const statusLine =
    availability.reason === 'daily-cap'
      ? t.rewards.dailyCapReached
      : availability.reason === 'cooling-down'
        ? interpolate(t.rewards.coolingDown, {
            minutes: Math.max(1, Math.ceil(availability.cooldownRemainingMs / 60000)),
          })
        : interpolate(t.rewards.remainingToday, { count: availability.remainingToday });

  return (
    <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/60 space-y-2.5">
      <div className="flex items-center gap-2">
        <Clapperboard className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <h5 className="text-sm font-bold text-amber-100">{t.rewards.sectionTitle}</h5>
          <p className="text-[11px] text-amber-200/70">{t.rewards.sectionSubtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {POWER_UP_ORDER.map(powerUp => (
          <button
            key={powerUp}
            disabled={!availability.canWatch || pending !== null}
            onClick={() => handleWatch(powerUp)}
            className={`flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl text-[11px] font-bold border transition-colors ${
              availability.canWatch && !pending
                ? 'bg-amber-500 text-stone-950 border-amber-300'
                : 'bg-slate-900/60 text-slate-500 border-slate-700 cursor-not-allowed'
            }`}
          >
            {pending === powerUp ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Clapperboard className="w-3.5 h-3.5" />
            )}
            <span>+{REWARD_OFFERS[powerUp].quantity}</span>
            <span className="truncate">{t.powerUps[powerUp as keyof typeof t.powerUps] as string}</span>
          </button>
        ))}
      </div>

      <p className="text-[11px] text-amber-200/60">{notice ?? statusLine}</p>
    </div>
  );
};
