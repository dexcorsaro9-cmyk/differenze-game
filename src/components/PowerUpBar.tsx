import React from 'react';
import { Snowflake, Compass, Search, Shield, Plus, ShoppingBag } from 'lucide-react';
import type { PowerUpInventory, PowerUpType } from '../types/game';

interface PowerUpBarProps {
  inventory: PowerUpInventory;
  coins: number;
  isTimeFrozen: boolean;
  freezeSecondsLeft: number;
  isShieldActive: boolean;
  onUsePowerUp: (type: PowerUpType) => void;
  onQuickBuy: (type: PowerUpType) => void;
  onOpenShop: () => void;
}

export const PowerUpBar: React.FC<PowerUpBarProps> = ({
  inventory,
  coins,
  isTimeFrozen,
  freezeSecondsLeft,
  isShieldActive,
  onUsePowerUp,
  onQuickBuy,
  onOpenShop,
}) => {
  const POWER_UP_CONFIG = [
    {
      type: 'freeze_time' as PowerUpType,
      name: 'Congela',
      price: 60,
      count: inventory.freeze_time,
      icon: Snowflake,
      active: isTimeFrozen,
      activeBadge: `${freezeSecondsLeft}s`,
      colorActive: 'border-cyan-400 bg-cyan-500/30 text-cyan-200 ring-2 ring-cyan-400/60 shadow-[0_0_15px_rgba(34,211,238,0.5)]',
      colorNormal: 'text-cyan-400 border-amber-600/40 bg-[#25170c]/90',
    },
    {
      type: 'compass_radar' as PowerUpType,
      name: 'Radar',
      price: 40,
      count: inventory.compass_radar,
      icon: Compass,
      active: false,
      activeBadge: null,
      colorActive: 'border-amber-400 bg-amber-500/30 text-amber-200 ring-2 ring-amber-400/60',
      colorNormal: 'text-amber-400 border-amber-600/40 bg-[#25170c]/90',
    },
    {
      type: 'hint' as PowerUpType,
      name: 'Indizio',
      price: 50,
      count: inventory.hint,
      icon: Search,
      active: false,
      activeBadge: null,
      colorActive: 'border-emerald-400 bg-emerald-500/30 text-emerald-200 ring-2 ring-emerald-400/60',
      colorNormal: 'text-emerald-400 border-amber-600/40 bg-[#25170c]/90',
    },
    {
      type: 'error_shield' as PowerUpType,
      name: 'Scudo',
      price: 45,
      count: inventory.error_shield,
      icon: Shield,
      active: isShieldActive,
      activeBadge: 'ON',
      colorActive: 'border-indigo-400 bg-indigo-500/35 text-indigo-200 ring-2 ring-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-pulse',
      colorNormal: 'text-indigo-400 border-amber-600/40 bg-[#25170c]/90',
    },
  ];

  return (
    <div className="w-full leather-belt safe-pb border-t-2 border-amber-500/70 px-2.5 py-2 grid grid-cols-5 gap-1.5 z-20 shadow-[0_-8px_25px_rgba(0,0,0,0.8)] select-none shrink-0">
      {POWER_UP_CONFIG.map(item => {
        const Icon = item.icon;
        const hasItem = item.count > 0;
        const canAfford = coins >= item.price;

        return (
          <button
            key={item.type}
            onClick={() => {
              if (hasItem && !item.active) {
                onUsePowerUp(item.type);
              } else if (!hasItem) {
                onQuickBuy(item.type);
              }
            }}
            disabled={item.active}
            className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl border-2 transition-all active:scale-90 active:translate-y-0.5 shadow-[0_4px_10px_rgba(0,0,0,0.6)] ${
              item.active
                ? item.colorActive + ' rounded-2xl'
                : hasItem
                ? 'border-amber-400/60 bg-gradient-to-b from-[#3a2212] via-[#2a170a] to-[#1a0e06] text-amber-200 hover:border-amber-300'
                : 'border-amber-900/40 bg-[#160c05]/95 text-stone-400'
            }`}
          >
            {/* Main Icon */}
            <div className="relative mb-0.5">
              <Icon className={`w-4 h-4 stroke-[2.2] ${item.active ? 'animate-spin' : ''}`} />
              {/* Count Badge on Corner */}
              {hasItem && !item.active && (
                <span className="absolute -top-1.5 -right-2.5 px-1.5 py-0.2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 font-black text-[9px] border border-amber-100 shadow-sm leading-none min-w-[15px] text-center">
                  {item.count}
                </span>
              )}
            </div>

            {/* Action Label or Price */}
            <div className="text-[10px] font-bold tracking-tight leading-none text-center font-serif mt-0.5">
              {item.active ? (
                <span className="text-[9px] font-black text-cyan-200 bg-cyan-950/90 px-1.5 py-0.5 rounded-full">
                  {item.activeBadge}
                </span>
              ) : hasItem ? (
                <span className="text-amber-200">{item.name}</span>
              ) : (
                <span className={`text-[9px] font-bold flex items-center justify-center gap-0.5 ${canAfford ? 'text-yellow-300' : 'text-stone-500'}`}>
                  <Plus className="w-2 h-2" />
                  {item.price}🪙
                </span>
              )}
            </div>
          </button>
        );
      })}

      {/* Emporio / Shop Quick Button */}
      <button
        onClick={onOpenShop}
        className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-gradient-to-b from-amber-500/35 via-yellow-600/30 to-amber-800/40 hover:from-amber-500/45 border-2 border-amber-400/80 text-amber-200 shadow-[0_4px_12px_rgba(245,158,11,0.25)] active:scale-90 active:translate-y-0.5 transition-all"
        title="Emporio Archeologico"
      >
        <ShoppingBag className="w-4 h-4 text-amber-300 mb-0.5 fill-amber-400/20" />
        <span className="text-[10px] font-bold tracking-tight leading-none text-center font-serif text-amber-200 mt-0.5">
          Shop
        </span>
      </button>
    </div>
  );
};
