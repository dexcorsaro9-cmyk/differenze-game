import React, { useState } from 'react';
import { X, Snowflake, Compass, Search, Shield, Package, Sparkles, Coins, Check, AlertCircle } from 'lucide-react';
import type { PowerUpInventory, ShopItem } from '../types/game';
import { sound } from '../utils/audio';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  coins: number;
  inventory: PowerUpInventory;
  onBuyItem: (item: ShopItem) => boolean;
  onClaimEmergencyFunds: () => void;
}

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'freeze_single',
    name: 'Congela Tempo (20s)',
    description: 'Ferma il cronometro per 20 secondi. Mantieni il tempo basso per conquistare le 3 stelle!',
    type: 'freeze_time',
    powerUpType: 'freeze_time',
    quantity: 1,
    coinPrice: 60,
    iconName: 'Snowflake',
  },
  {
    id: 'freeze_triple',
    name: 'Tris Congela Tempo (x3)',
    description: 'Scorta da 3 utilizzi di Ferma-Tempo da 20 secondi ciascuno.',
    type: 'freeze_time',
    powerUpType: 'freeze_time',
    quantity: 3,
    coinPrice: 150,
    iconName: 'Snowflake',
    badge: 'Risparmi 30🪙',
  },
  {
    id: 'compass_single',
    name: "Bussola d'Astrolabio (x1)",
    description: 'Punta ed evidenzia il quadrante della scena contenente un indizio per 8 secondi.',
    type: 'compass_radar',
    powerUpType: 'compass_radar',
    quantity: 1,
    coinPrice: 40,
    iconName: 'Compass',
  },
  {
    id: 'compass_triple',
    name: 'Kit Bussole d\'Oro (x3)',
    description: 'Pacco da 3 bussole di rilevamento per i settori più complessi.',
    type: 'compass_radar',
    powerUpType: 'compass_radar',
    quantity: 3,
    coinPrice: 100,
    iconName: 'Compass',
    badge: 'Risparmi 20🪙',
  },
  {
    id: 'hint_triple',
    name: 'Lente d\'Ingrandimento (x3)',
    description: 'Punta e centra direttamente la lente sul punto esatto della differenza.',
    type: 'hint',
    powerUpType: 'hint',
    quantity: 3,
    coinPrice: 100,
    iconName: 'Search',
  },
  {
    id: 'shield_single',
    name: 'Scudo del Guardiano (x1)',
    description: 'Attiva una barriera sacra: assorbe il prossimo tocco errato senza perdere cuori.',
    type: 'error_shield',
    powerUpType: 'error_shield',
    quantity: 1,
    coinPrice: 45,
    iconName: 'Shield',
  },
  {
    id: 'shield_triple',
    name: 'Bastione Runico (x3)',
    description: '3 Scudi protettivi per esplorare le rovine senza timore di sbagliare.',
    type: 'error_shield',
    powerUpType: 'error_shield',
    quantity: 3,
    coinPrice: 110,
    iconName: 'Shield',
    badge: 'Risparmi 25🪙',
  },
  {
    id: 'expedition_bundle',
    name: 'Baule della Spedizione',
    description: 'Pacco completo di scorte: 2x Ferma-Tempo, 2x Bussole, 2x Scudi e 3x Lenti d\'Ingrandimento!',
    type: 'bundle',
    quantity: 1,
    coinPrice: 250,
    iconName: 'Package',
    badge: 'Super Valore!',
    contents: [
      { type: 'freeze_time', count: 2 },
      { type: 'compass_radar', count: 2 },
      { type: 'error_shield', count: 2 },
      { type: 'hint', count: 3 },
    ],
  },
];

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  coins,
  inventory,
  onBuyItem,
  onClaimEmergencyFunds,
}) => {
  const [purchaseSuccessId, setPurchaseSuccessId] = useState<string | null>(null);
  const [notEnoughCoinsId, setNotEnoughCoinsId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleBuy = (item: ShopItem) => {
    if (coins < item.coinPrice) {
      sound.playError();
      setNotEnoughCoinsId(item.id);
      setTimeout(() => setNotEnoughCoinsId(null), 1500);
      return;
    }

    const success = onBuyItem(item);
    if (success) {
      sound.playCoin();
      setPurchaseSuccessId(item.id);
      setTimeout(() => setPurchaseSuccessId(null), 1200);
    }
  };

  const getItemIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Search':
        return <Search className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Package':
        return <Package className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-700/80 rounded-3xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Glow Ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span>Emporio Archeologico</span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Acquista strumenti speciali usando le monete d'oro vinte nei livelli
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Coins Balance Pill */}
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 shadow-inner">
              <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-extrabold text-amber-300">
                {coins}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-amber-400/80 font-bold">
                Monete
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Inventory Summary Bar */}
        <div className="flex items-center justify-around py-2 px-3 bg-slate-950/60 rounded-xl border border-slate-800/80 my-3 text-[11px] sm:text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ferma Tempo: <strong>{inventory.freeze_time}</strong></span>
          </div>
          <div className="text-slate-700">•</div>
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Bussole: <strong>{inventory.compass_radar}</strong></span>
          </div>
          <div className="text-slate-700">•</div>
          <div className="flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lenti: <strong>{inventory.hint}</strong></span>
          </div>
          <div className="text-slate-700">•</div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span>Scudi: <strong>{inventory.error_shield}</strong></span>
          </div>
        </div>

        {/* Shop Items Grid */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 my-1 custom-scrollbar">
          {SHOP_ITEMS.map(item => {
            const canAfford = coins >= item.coinPrice;
            const isSuccess = purchaseSuccessId === item.id;
            const isNotEnough = notEnoughCoinsId === item.id;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 transition-all gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-inner shrink-0">
                    {getItemIcon(item.iconName, 'w-5 h-5 text-amber-300 stroke-[2]')}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-100">
                        {item.name}
                      </h4>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-amber-500/25 border border-amber-400/50 text-amber-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug max-w-sm mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleBuy(item)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 ${
                      isSuccess
                        ? 'bg-emerald-500 text-white'
                        : isNotEnough
                        ? 'bg-red-500/80 text-white animate-shake'
                        : canAfford
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/30'
                        : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                    }`}
                  >
                    {isSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Preso!</span>
                      </>
                    ) : isNotEnough ? (
                      <>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Mancano Monete</span>
                      </>
                    ) : (
                      <>
                        <Coins className="w-3.5 h-3.5 text-current fill-current" />
                        <span>{item.coinPrice} 🪙</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Relief / Bottom Note */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="italic">
            💡 Vinci monete trovando le 10 differenze (+20 a scoperta, +100 bonus a 3 stelle)!
          </span>

          {coins < 40 && (
            <button
              onClick={() => {
                onClaimEmergencyFunds();
                sound.playCoin();
              }}
              className="px-2.5 py-1 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 border border-indigo-500/40 text-indigo-300 font-semibold text-[11px] active:scale-95 transition-all"
            >
              Richiedi Rifornimento (+60 🪙)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
