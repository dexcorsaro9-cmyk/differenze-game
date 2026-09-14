import React, { useState, useMemo } from 'react';
import {
  EXPLORERS,
  ALL_OUTFITS,
  ALL_ACCESSORIES,
  getEquipmentSetsStatus,
  type ExplorerProfile,
  type WardrobeOutfit,
  type WardrobeAccessory,
  type WardrobePerk,
} from '../data/avatarData';
import { AvatarShowcase, type EquipmentSlotType } from './AvatarShowcase';
import { ItemInspectModal } from './ItemInspectModal';
import {
  X,
  Sparkles,
  Shield,
  Check,
  Lock,
  Coins,
  Compass,
  Eye,
  Crosshair,
  BookOpen,
  Glasses,
  Lightbulb,
  Crown,
  Zap,
  Sun,
  Music,
  UserCheck,
  Search,
  Footprints,
  Backpack,
  Shirt,
  Layers,
  RotateCcw,
  Hammer,
  Snowflake,
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';

interface WardrobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ExplorerProfile;
  coins: number;
  currentLevelId: number;
  discoveredRelicCount: number;
  onUpdateProfile: (newProfile: ExplorerProfile) => void;
  onSpendCoins: (amount: number) => boolean;
  onOpenAvatarCreator: () => void;
}

export const WardrobeModal: React.FC<WardrobeModalProps> = ({
  isOpen,
  onClose,
  profile,
  coins,
  currentLevelId,
  discoveredRelicCount,
  onUpdateProfile,
  onSpendCoins,
  onOpenAvatarCreator,
}) => {
  // Active Slot Selected (for Paperdoll highlight and item drawer)
  const [selectedSlot, setSelectedSlot] = useState<EquipmentSlotType>('torso');

  // Mobile view toggle ('outfits' | 'paperdoll' | 'drawer')
  const [mobileTab, setMobileTab] = useState<'outfits' | 'paperdoll' | 'drawer'>('outfits');

  // Live Fitting Room Previews across all 8 slots
  const [previewOutfitId, setPreviewOutfitId] = useState<string | null>(null);
  const [previewHeadgearId, setPreviewHeadgearId] = useState<string | null>(null);
  const [previewToolId, setPreviewToolId] = useState<string | null>(null);
  const [previewOffHandId, setPreviewOffHandId] = useState<string | null>(null);
  const [previewLegsId, setPreviewLegsId] = useState<string | null>(null);
  const [previewBootsId, setPreviewBootsId] = useState<string | null>(null);
  const [previewTalismanId, setPreviewTalismanId] = useState<string | null>(null);
  const [previewBackId, setPreviewBackId] = useState<string | null>(null);

  // Modal for Close-Up Item Lore & 3D Inspection
  const [inspectItem, setInspectItem] = useState<WardrobeOutfit | WardrobeAccessory | null>(null);

  const currentExplorer = EXPLORERS[profile.avatarId] || EXPLORERS.samira;

  const safeUnlockedOutfitIds = useMemo(() => {
    return Array.isArray(profile.unlockedOutfitIds) && profile.unlockedOutfitIds.length > 0
      ? profile.unlockedOutfitIds
      : [currentExplorer.defaultOutfitId];
  }, [profile.unlockedOutfitIds, currentExplorer.defaultOutfitId]);

  const safeUnlockedAccessoryIds = useMemo(() => {
    return Array.isArray(profile.unlockedAccessoryIds) ? profile.unlockedAccessoryIds : [];
  }, [profile.unlockedAccessoryIds]);

  // Available outfits for current explorer
  const availableOutfits = ALL_OUTFITS.filter(o => o.avatarId === profile.avatarId);

  // Items currently worn/previewed
  const displayOutfit = ALL_OUTFITS.find(o => o.id === (previewOutfitId || profile.equippedOutfitId));
  const displayHeadgear = ALL_ACCESSORIES.find(
    a => a.id === (previewHeadgearId !== null ? previewHeadgearId : profile.equippedHeadgearId)
  );
  const displayTool = ALL_ACCESSORIES.find(
    a => a.id === (previewToolId !== null ? previewToolId : profile.equippedToolId)
  );
  const displayOffHand = ALL_ACCESSORIES.find(
    a =>
      a.id ===
      (previewOffHandId !== null
        ? previewOffHandId
        : profile.equippedOffHandId || 'off_compass_brass')
  );
  const displayLegs = ALL_ACCESSORIES.find(
    a =>
      a.id ===
      (previewLegsId !== null
        ? previewLegsId
        : profile.equippedLegsId || 'legs_cargo_khaki')
  );
  const displayBoots = ALL_ACCESSORIES.find(
    a =>
      a.id ===
      (previewBootsId !== null
        ? previewBootsId
        : profile.equippedBootsId || 'boots_leather_hiker')
  );
  const displayTalisman = ALL_ACCESSORIES.find(
    a => a.id === (previewTalismanId !== null ? previewTalismanId : profile.equippedTalismanId)
  );
  const displayBack = ALL_ACCESSORIES.find(
    a => a.id === (previewBackId !== null ? previewBackId : profile.equippedBackId || null)
  );

  // Dynamic Tags of currently worn / previewed items across all 8 slots
  const displayedTags: string[] = [
    displayOutfit?.tag,
    displayHeadgear?.tag,
    displayTool?.tag,
    displayOffHand?.tag,
    displayLegs?.tag,
    displayBoots?.tag,
    displayTalisman?.tag,
    displayBack?.tag,
  ].filter((t): t is string => Boolean(t));

  const equipmentSetsStatus = useMemo(
    () => getEquipmentSetsStatus(displayedTags),
    [displayedTags]
  );

  const activeSetBonuses = equipmentSetsStatus.filter(s => s.isActive);

  // Dynamic RPG Stats Summation across active/previewed equipment + active Set Bonuses
  const activePerks = [
    displayOutfit?.perk,
    displayHeadgear?.perk,
    displayTool?.perk,
    displayOffHand?.perk,
    displayLegs?.perk,
    displayBoots?.perk,
    displayTalisman?.perk,
    displayBack?.perk,
    ...activeSetBonuses.map(s => s.set.perk),
  ].filter(Boolean) as WardrobePerk[];

  const totalCoinBonus = activePerks
    .filter(p => p.type === 'coin_boost')
    .reduce((sum, p) => sum + p.value, 0);

  const totalFreezeBonus = activePerks
    .filter(p => p.type === 'freeze_boost')
    .reduce((sum, p) => sum + p.value, 0);

  const totalRadarBonus = activePerks
    .filter(p => p.type === 'radar_boost')
    .reduce((sum, p) => sum + p.value, 0);

  const hasErrorShield = activePerks.some(p => p.type === 'free_shield');

  const isAnyPreviewActive =
    previewOutfitId !== null ||
    previewHeadgearId !== null ||
    previewToolId !== null ||
    previewOffHandId !== null ||
    previewLegsId !== null ||
    previewBootsId !== null ||
    previewTalismanId !== null ||
    previewBackId !== null;

  const handleClearPreviews = () => {
    setPreviewOutfitId(null);
    setPreviewHeadgearId(null);
    setPreviewToolId(null);
    setPreviewOffHandId(null);
    setPreviewLegsId(null);
    setPreviewBootsId(null);
    setPreviewTalismanId(null);
    setPreviewBackId(null);
  };

  const handleSelectSlot = (slot: EquipmentSlotType) => {
    setSelectedSlot(slot);
    if (slot === 'torso') {
      setMobileTab('outfits');
    } else {
      setMobileTab('drawer');
    }
    sound.playTap();
    triggerHaptic('light');
  };

  // Toggle Live Preview
  const handleTogglePreview = (item: WardrobeOutfit | WardrobeAccessory) => {
    if ('avatarId' in item) {
      setPreviewOutfitId(prev => (prev === item.id ? null : item.id));
    } else {
      switch (item.slot) {
        case 'headgear':
          setPreviewHeadgearId(prev => (prev === item.id ? null : item.id));
          break;
        case 'tool':
        case 'main_hand':
          setPreviewToolId(prev => (prev === item.id ? null : item.id));
          break;
        case 'off_hand':
          setPreviewOffHandId(prev => (prev === item.id ? null : item.id));
          break;
        case 'legs':
          setPreviewLegsId(prev => (prev === item.id ? null : item.id));
          break;
        case 'boots':
          setPreviewBootsId(prev => (prev === item.id ? null : item.id));
          break;
        case 'talisman':
          setPreviewTalismanId(prev => (prev === item.id ? null : item.id));
          break;
        case 'back':
          setPreviewBackId(prev => (prev === item.id ? null : item.id));
          break;
      }
    }
    sound.playSelect();
    triggerHaptic('light');
  };

  // Equip or Buy Outfit
  const handleEquipOutfit = (outfit: WardrobeOutfit) => {
    const isUnlocked = safeUnlockedOutfitIds.includes(outfit.id) || outfit.cost === 0;

    if (!isUnlocked) {
      if (currentLevelId < outfit.requiredLevel) {
        sound.playError();
        triggerHaptic('error');
        return;
      }
      if (outfit.requiredRelics && discoveredRelicCount < outfit.requiredRelics) {
        sound.playError();
        triggerHaptic('error');
        return;
      }
      if (coins < outfit.cost) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      const success = onSpendCoins(outfit.cost);
      if (!success) return;

      const newProfile: ExplorerProfile = {
        ...profile,
        equippedOutfitId: outfit.id,
        unlockedOutfitIds: Array.from(new Set([...safeUnlockedOutfitIds, outfit.id])),
      };
      onUpdateProfile(newProfile);
      setPreviewOutfitId(null);
      sound.playLevelWin();
      triggerHaptic('success');
    } else {
      const newProfile: ExplorerProfile = {
        ...profile,
        equippedOutfitId: outfit.id,
      };
      onUpdateProfile(newProfile);
      setPreviewOutfitId(null);
      sound.playSelect();
      triggerHaptic('light');
    }
  };

  // Equip or Buy Accessory across all 7 accessory slots
  const handleEquipAccessory = (acc: WardrobeAccessory) => {
    const isUnlocked =
      safeUnlockedAccessoryIds.includes(acc.id) ||
      acc.cost === 0 ||
      acc.id === 'legs_cargo_khaki' ||
      acc.id === 'boots_leather_hiker' ||
      acc.id === 'back_canvas_pack' ||
      acc.id === 'off_compass_brass';

    if (!isUnlocked) {
      if (currentLevelId < acc.requiredLevel) {
        sound.playError();
        triggerHaptic('error');
        return;
      }
      if (coins < acc.cost) {
        sound.playError();
        triggerHaptic('error');
        return;
      }

      const success = onSpendCoins(acc.cost);
      if (!success) return;

      const newProfile: ExplorerProfile = {
        ...profile,
        unlockedAccessoryIds: Array.from(new Set([...safeUnlockedAccessoryIds, acc.id])),
        ...(acc.slot === 'headgear' && { equippedHeadgearId: acc.id }),
        ...((acc.slot === 'tool' || acc.slot === 'main_hand') && { equippedToolId: acc.id }),
        ...(acc.slot === 'off_hand' && { equippedOffHandId: acc.id }),
        ...(acc.slot === 'legs' && { equippedLegsId: acc.id }),
        ...(acc.slot === 'boots' && { equippedBootsId: acc.id }),
        ...(acc.slot === 'talisman' && { equippedTalismanId: acc.id }),
        ...(acc.slot === 'back' && { equippedBackId: acc.id }),
      };
      onUpdateProfile(newProfile);

      // Clear preview for this slot
      if (acc.slot === 'headgear') setPreviewHeadgearId(null);
      if (acc.slot === 'tool' || acc.slot === 'main_hand') setPreviewToolId(null);
      if (acc.slot === 'off_hand') setPreviewOffHandId(null);
      if (acc.slot === 'legs') setPreviewLegsId(null);
      if (acc.slot === 'boots') setPreviewBootsId(null);
      if (acc.slot === 'talisman') setPreviewTalismanId(null);
      if (acc.slot === 'back') setPreviewBackId(null);

      sound.playLevelWin();
      triggerHaptic('success');
    } else {
      // Toggle equip / unequip
      const newProfile = { ...profile };
      if (acc.slot === 'headgear') {
        newProfile.equippedHeadgearId = profile.equippedHeadgearId === acc.id ? null : acc.id;
        setPreviewHeadgearId(null);
      } else if (acc.slot === 'tool' || acc.slot === 'main_hand') {
        newProfile.equippedToolId = profile.equippedToolId === acc.id ? null : acc.id;
        setPreviewToolId(null);
      } else if (acc.slot === 'off_hand') {
        newProfile.equippedOffHandId = profile.equippedOffHandId === acc.id ? null : acc.id;
        setPreviewOffHandId(null);
      } else if (acc.slot === 'legs') {
        newProfile.equippedLegsId = profile.equippedLegsId === acc.id ? null : acc.id;
        setPreviewLegsId(null);
      } else if (acc.slot === 'boots') {
        newProfile.equippedBootsId = profile.equippedBootsId === acc.id ? null : acc.id;
        setPreviewBootsId(null);
      } else if (acc.slot === 'talisman') {
        newProfile.equippedTalismanId = profile.equippedTalismanId === acc.id ? null : acc.id;
        setPreviewTalismanId(null);
      } else if (acc.slot === 'back') {
        newProfile.equippedBackId = profile.equippedBackId === acc.id ? null : acc.id;
        setPreviewBackId(null);
      }
      onUpdateProfile(newProfile);
      sound.playSelect();
      triggerHaptic('light');
    }
  };

  // Helper for accessory icon
  const renderAccessoryIcon = (iconName: string, className = 'w-4 h-4') => {
    const props = { className };
    switch (iconName) {
      case 'Glasses': return <Glasses {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Music': return <Music {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Crosshair': return <Crosshair {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Snowflake': return <Snowflake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  // Get current slot items
  const currentSlotItems = useMemo(() => {
    if (selectedSlot === 'torso') {
      return availableOutfits;
    }
    if (selectedSlot === 'main_hand') {
      return ALL_ACCESSORIES.filter(a => a.slot === 'tool' || a.slot === 'main_hand');
    }
    return ALL_ACCESSORIES.filter(a => a.slot === selectedSlot);
  }, [selectedSlot, availableOutfits]);

  // Slot definitions for the RPG Paperdoll frame
  const LEFT_SLOTS: {
    id: EquipmentSlotType;
    name: string;
    subname: string;
    icon: React.ComponentType<{ className?: string }>;
    item: WardrobeOutfit | WardrobeAccessory | undefined;
    isPreview: boolean;
  }[] = [
    {
      id: 'headgear',
      name: 'Testa',
      subname: 'Copricapo',
      icon: Crown,
      item: displayHeadgear,
      isPreview: previewHeadgearId !== null,
    },
    {
      id: 'talisman',
      name: 'Collo',
      subname: 'Amuleto',
      icon: Sparkles,
      item: displayTalisman,
      isPreview: previewTalismanId !== null,
    },
    {
      id: 'torso',
      name: 'Busto',
      subname: 'Tenuta & Giacca',
      icon: Shirt,
      item: displayOutfit,
      isPreview: previewOutfitId !== null,
    },
    {
      id: 'back',
      name: 'Schiena',
      subname: 'Zaino & Mantello',
      icon: Backpack,
      item: displayBack,
      isPreview: previewBackId !== null,
    },
  ];

  const RIGHT_SLOTS: {
    id: EquipmentSlotType;
    name: string;
    subname: string;
    icon: React.ComponentType<{ className?: string }>;
    item: WardrobeOutfit | WardrobeAccessory | undefined;
    isPreview: boolean;
  }[] = [
    {
      id: 'main_hand',
      name: 'Mano DX',
      subname: 'Strumento Primario',
      icon: Hammer,
      item: displayTool,
      isPreview: previewToolId !== null,
    },
    {
      id: 'off_hand',
      name: 'Mano SX',
      subname: 'Scudo & Carte',
      icon: Shield,
      item: displayOffHand,
      isPreview: previewOffHandId !== null,
    },
    {
      id: 'legs',
      name: 'Gambe',
      subname: 'Pantaloni Tattici',
      icon: Layers,
      item: displayLegs,
      isPreview: previewLegsId !== null,
    },
    {
      id: 'boots',
      name: 'Piedi',
      subname: 'Calzature da Marcia',
      icon: Footprints,
      item: displayBoots,
      isPreview: previewBootsId !== null,
    },
  ];

  const ALL_SLOTS = [...LEFT_SLOTS, ...RIGHT_SLOTS];
  const activeSlotMeta = ALL_SLOTS.find(s => s.id === selectedSlot) || LEFT_SLOTS[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 pb-2 pt-8 sm:px-4 sm:pb-4 sm:pt-10 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      <div className="relative w-full max-w-6xl bg-stone-950 border-2 border-amber-500/70 rounded-3xl shadow-[0_0_60px_rgba(217,119,6,0.35)] overflow-hidden flex flex-col h-[86vh] max-h-[820px]">
        
        {/* Ancient Header */}
        <div className="relative px-3 sm:px-5 py-2.5 border-b border-amber-900/60 bg-gradient-to-r from-[#1b120c] via-[#2a1a10] to-[#1b120c] flex items-center justify-between shrink-0 shadow-lg">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border-2 border-amber-400 overflow-hidden shadow-md shrink-0">
              <img
                src={currentExplorer.portrait}
                alt={currentExplorer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black text-amber-100 font-serif leading-tight">
                  Armeria & Camerino RPG
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-[9px] font-bold text-amber-300 uppercase tracking-widest">
                  8 Slot Equipaggiamento
                </span>
              </div>
              <div className="text-[11px] text-stone-300 font-medium">
                {profile.playerName} · <span className="text-amber-400 font-bold">{currentExplorer.title}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Coins badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-950/80 border border-amber-500/50 rounded-full text-amber-300 font-bold text-xs shadow-inner">
              <Coins className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{coins}</span>
            </div>

            {/* Change character link */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenAvatarCreator();
              }}
              className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 text-xs font-bold border border-stone-700 transition cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Cambia Eroe</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View Toggle Bar (Only visible on small screens) */}
        <div className="lg:hidden flex items-center justify-around bg-stone-900 border-b border-stone-800 p-1.5 shrink-0 text-xs font-bold gap-1">
          <button
            type="button"
            onClick={() => {
              setMobileTab('outfits');
              setSelectedSlot('torso');
            }}
            className={`flex-1 py-1.5 px-2 rounded-xl transition text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'outfits'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200 bg-stone-950/60'
            }`}
          >
            <Shirt className="w-3.5 h-3.5" />
            <span>👗 Tenute</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('paperdoll')}
            className={`flex-1 py-1.5 px-2 rounded-xl transition text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'paperdoll'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200 bg-stone-950/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Eroe & Stats</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('drawer')}
            className={`flex-1 py-1.5 px-2 rounded-xl transition text-center cursor-pointer flex items-center justify-center gap-1 ${
              mobileTab === 'drawer'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black shadow-md'
                : 'text-stone-400 hover:text-stone-200 bg-stone-950/60'
            }`}
          >
            <Hammer className="w-3.5 h-3.5" />
            <span>Armeria</span>
          </button>
        </div>

        {/* Main Content Area: 2-Column Responsive Layout */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-3 p-2 sm:p-3">
          
          {/* MOBILE VIEW 1: DEDICATED OUTFITS VIEW (Immediate visual access to all Outfits) */}
          <div
            className={`lg:hidden flex flex-col h-full overflow-hidden ${
              mobileTab === 'outfits' ? 'flex' : 'hidden'
            }`}
          >
            {/* Top: Character Live Showcase on Pedestal */}
            <div className="h-[250px] sm:h-[300px] shrink-0 p-1">
              <AvatarShowcase
                profile={profile}
                previewOutfitId={previewOutfitId}
                previewHeadgearId={previewHeadgearId}
                previewToolId={previewToolId}
                previewOffHandId={previewOffHandId}
                previewLegsId={previewLegsId}
                previewBootsId={previewBootsId}
                previewTalismanId={previewTalismanId}
                previewBackId={previewBackId}
                selectedSlot="torso"
                onSelectSlot={handleSelectSlot}
                onClearPreview={handleClearPreviews}
                onSelectInspectItem={(id, isOutfit) => {
                  if (isOutfit) {
                    const found = availableOutfits.find(o => o.id === id);
                    if (found) setInspectItem(found);
                  } else {
                    const found = ALL_ACCESSORIES.find(a => a.id === id);
                    if (found) setInspectItem(found);
                  }
                }}
                showSlotNodes={false}
              />
            </div>

            {/* Bottom: Scrollable Outfits Catalog */}
            <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-2 custom-scrollbar bg-stone-950/40 rounded-2xl border border-amber-900/30 mt-1">
              <div className="flex items-center justify-between px-1 pb-1 text-xs text-amber-300 font-bold border-b border-amber-900/40">
                <span className="flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5 text-amber-400" />
                  Tenute di {currentExplorer.name} ({availableOutfits.length})
                </span>
                {previewOutfitId && (
                  <button
                    type="button"
                    onClick={() => setPreviewOutfitId(null)}
                    className="text-[10px] text-amber-400 hover:text-amber-200 flex items-center gap-1 underline cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Ripristina
                  </button>
                )}
              </div>

              {availableOutfits.map(outfit => {
                const isEquipped = profile.equippedOutfitId === outfit.id;
                const isPreviewing = previewOutfitId === outfit.id;
                const isUnlocked = safeUnlockedOutfitIds.includes(outfit.id) || outfit.cost === 0;
                const canUnlockLevel = currentLevelId >= outfit.requiredLevel;
                const canUnlockRelics =
                  !('requiredRelics' in outfit) ||
                  !outfit.requiredRelics ||
                  discoveredRelicCount >= outfit.requiredRelics;
                const canAfford = coins >= outfit.cost;

                return (
                  <div
                    key={outfit.id}
                    className={`p-2.5 rounded-2xl border transition-all ${
                      isPreviewing
                        ? 'bg-amber-950/70 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] ring-1 ring-amber-400'
                        : isEquipped
                        ? 'bg-amber-950/30 border-amber-500/70 shadow-md'
                        : isUnlocked
                        ? 'bg-stone-900/80 border-stone-800 hover:border-stone-700'
                        : 'bg-stone-950/60 border-stone-800/60 opacity-85'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0 flex-1">
                        <div className="p-2 rounded-xl bg-stone-900 border border-stone-700 text-amber-400 shrink-0">
                          <Shirt className="w-4 h-4 text-amber-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-bold text-stone-100 font-serif">
                              {outfit.name}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-stone-800 text-amber-300 font-medium border border-stone-700">
                              {outfit.tag}
                            </span>
                          </div>
                          <p className="text-[10px] text-stone-400 mt-0.5 leading-tight line-clamp-2">
                            {outfit.description}
                          </p>
                        </div>
                      </div>
                      {outfit.perk && outfit.perk.label !== 'Assetto Standard' && (
                        <div className="shrink-0 px-1.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[9px] font-bold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                          <span>{outfit.perk.label}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-2 pt-1.5 flex items-center justify-between border-t border-stone-800/80 gap-2">
                      <div className="text-[11px]">
                        {!isUnlocked ? (
                          <div className="flex items-center gap-1 font-bold text-amber-300">
                            <Coins className="w-3 h-3 text-amber-400" />
                            <span>{outfit.cost} Monete</span>
                            {!canUnlockLevel && (
                              <span className="text-[9px] text-red-400">
                                (Liv. {outfit.requiredLevel})
                              </span>
                            )}
                            {!canUnlockRelics && (
                              <span className="text-[9px] text-red-400">
                                ({outfit.requiredRelics} Reliquie)
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Posseduto
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleTogglePreview(outfit)}
                          className={`px-2 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                            isPreviewing
                              ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                              : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40'
                          }`}
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isPreviewing ? 'In Prova' : 'Anteprima'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEquipOutfit(outfit)}
                          disabled={!isUnlocked && (!canUnlockLevel || !canUnlockRelics || !canAfford)}
                          className={`px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                            isEquipped
                              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/60'
                              : isUnlocked
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-black shadow-md hover:brightness-110'
                              : canUnlockLevel && canUnlockRelics && canAfford
                              ? 'bg-amber-600 hover:bg-amber-500 text-stone-950 font-black shadow'
                              : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed opacity-60'
                          }`}
                        >
                          {isEquipped ? (
                            <>
                              <Check className="w-3 h-3 stroke-[3]" />
                              <span>Indossato</span>
                            </>
                          ) : isUnlocked ? (
                            <span>Indossa</span>
                          ) : (
                            <>
                              <Lock className="w-3 h-3" />
                              <span>Sblocca</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 1: RPG PAPERDOLL FRAME (FULL BODY HERO + 8 SLOTS + STATS) */}
          {/* ============================================================== */}
          <div
            className={`lg:col-span-7 flex flex-col h-full overflow-hidden ${
              mobileTab === 'paperdoll' ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {/* Paperdoll Stage Container */}
            <div className="flex-1 min-h-0 relative flex flex-col bg-stone-900/60 rounded-2xl border border-amber-900/40 p-2 overflow-hidden shadow-inner">
              
              {/* Paperdoll Framing: Left Slots | Full-Body Model Center | Right Slots */}
              <div className="flex-1 min-h-0 flex items-stretch justify-between gap-1 sm:gap-2 relative">
                
                {/* Left 4 Equipment Slots */}
                <div className="w-24 sm:w-28 flex flex-col justify-between py-1 z-20 shrink-0 gap-1.5">
                  {LEFT_SLOTS.map(slot => {
                    const isSelected = selectedSlot === slot.id;
                    const IconComp = slot.icon;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleSelectSlot(slot.id)}
                        className={`w-full p-1.5 sm:p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-center relative ${
                          isSelected
                            ? 'bg-amber-950/90 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] ring-2 ring-amber-400/80'
                            : 'bg-black/75 hover:bg-stone-900/90 border-amber-500/30 hover:border-amber-400/60'
                        }`}
                      >
                        {slot.isPreview && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                        )}
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div
                            className={`p-1 rounded-lg ${
                              isSelected
                                ? 'bg-amber-500 text-stone-950'
                                : 'bg-stone-800 text-amber-400'
                            }`}
                          >
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span
                            className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider truncate ${
                              isSelected ? 'text-amber-300 font-black' : 'text-stone-300'
                            }`}
                          >
                            {slot.name}
                          </span>
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-amber-200/90 font-medium truncate">
                          {slot.item ? slot.item.name : <span className="text-stone-500 italic">Vuoto</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Center: The Full-Body Hero Character Showcase on Pedestal */}
                <div className="flex-1 min-h-0 relative flex items-center justify-center">
                  <AvatarShowcase
                    profile={profile}
                    previewOutfitId={previewOutfitId}
                    previewHeadgearId={previewHeadgearId}
                    previewToolId={previewToolId}
                    previewOffHandId={previewOffHandId}
                    previewLegsId={previewLegsId}
                    previewBootsId={previewBootsId}
                    previewTalismanId={previewTalismanId}
                    previewBackId={previewBackId}
                    selectedSlot={selectedSlot}
                    onSelectSlot={handleSelectSlot}
                    onClearPreview={handleClearPreviews}
                    onSelectInspectItem={(id, isOutfit) => {
                      if (isOutfit) {
                        const found = availableOutfits.find(o => o.id === id);
                        if (found) setInspectItem(found);
                      } else {
                        const found = ALL_ACCESSORIES.find(a => a.id === id);
                        if (found) setInspectItem(found);
                      }
                    }}
                    showControls={false}
                  />
                </div>

                {/* Right 4 Equipment Slots */}
                <div className="w-24 sm:w-28 flex flex-col justify-between py-1 z-20 shrink-0 gap-1.5">
                  {RIGHT_SLOTS.map(slot => {
                    const isSelected = selectedSlot === slot.id;
                    const IconComp = slot.icon;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleSelectSlot(slot.id)}
                        className={`w-full p-1.5 sm:p-2 rounded-xl border text-right transition-all cursor-pointer flex flex-col justify-center relative items-end ${
                          isSelected
                            ? 'bg-amber-950/90 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] ring-2 ring-amber-400/80'
                            : 'bg-black/75 hover:bg-stone-900/90 border-amber-500/30 hover:border-amber-400/60'
                        }`}
                      >
                        {slot.isPreview && (
                          <span className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                        )}
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider truncate ${
                              isSelected ? 'text-amber-300 font-black' : 'text-stone-300'
                            }`}
                          >
                            {slot.name}
                          </span>
                          <div
                            className={`p-1 rounded-lg ${
                              isSelected
                                ? 'bg-amber-500 text-stone-950'
                                : 'bg-stone-800 text-amber-400'
                            }`}
                          >
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-amber-200/90 font-medium truncate w-full text-right">
                          {slot.item ? slot.item.name : <span className="text-stone-500 italic">Vuoto</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Dynamic RPG Stats Attribute Bar (Totals summed from all 8 slots) */}
              <div className="mt-2 pt-2 border-t border-amber-900/40 bg-stone-950/80 rounded-xl p-2 shrink-0">
                <div className="flex items-center justify-between mb-1 text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Attributi di Spedizione Attivi</span>
                  </div>
                  {isAnyPreviewActive && (
                    <span className="text-[9px] text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
                      Include Statistiche Anteprima
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                  {/* Stat 1: Difesa Errori */}
                  <div
                    className={`p-1.5 rounded-lg border flex flex-col items-center justify-center transition-all ${
                      hasErrorShield
                        ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                      <Shield className="w-3 h-3 text-emerald-400" />
                      <span>Difesa</span>
                    </div>
                    <div className="text-xs font-black mt-0.5">
                      {hasErrorShield ? '1 Scudo Attivo' : 'Nessuno'}
                    </div>
                  </div>

                  {/* Stat 2: Bonus Monete */}
                  <div
                    className={`p-1.5 rounded-lg border flex flex-col items-center justify-center transition-all ${
                      totalCoinBonus > 0
                        ? 'bg-amber-950/60 border-amber-500/60 text-amber-300'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                      <Coins className="w-3 h-3 text-amber-400" />
                      <span>Bonus Oro</span>
                    </div>
                    <div className="text-xs font-black mt-0.5">
                      {totalCoinBonus > 0 ? `+${totalCoinBonus}%` : '0%'}
                    </div>
                  </div>

                  {/* Stat 3: Congelamento */}
                  <div
                    className={`p-1.5 rounded-lg border flex flex-col items-center justify-center transition-all ${
                      totalFreezeBonus > 0
                        ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-300'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                      <Snowflake className="w-3 h-3 text-cyan-400" />
                      <span>Dilatazione</span>
                    </div>
                    <div className="text-xs font-black mt-0.5">
                      {totalFreezeBonus > 0 ? `+${totalFreezeBonus}s Tempo` : '0s'}
                    </div>
                  </div>

                  {/* Stat 4: Radar Perlustrazione */}
                  <div
                    className={`p-1.5 rounded-lg border flex flex-col items-center justify-center transition-all ${
                      totalRadarBonus > 0
                        ? 'bg-purple-950/60 border-purple-500/60 text-purple-300'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] font-bold">
                      <Compass className="w-3 h-3 text-purple-400" />
                      <span>Percezione</span>
                    </div>
                    <div className="text-xs font-black mt-0.5">
                      {totalRadarBonus > 0 ? `+${totalRadarBonus}% Radar` : '0%'}
                    </div>
                  </div>
                </div>

                {/* Sinergie di Set Archeologico (3+ pezzi) */}
                <div className="mt-2 pt-1.5 border-t border-amber-900/40">
                  <div className="flex items-center justify-between mb-1 text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Crown className="w-3 h-3 text-amber-400" />
                      <span>Sinergie di Set Archeologico</span>
                    </div>
                    <span className="text-[9px] text-amber-400/90 font-medium">
                      {activeSetBonuses.length > 0 ? (
                        <span className="text-yellow-300 font-bold">✨ {activeSetBonuses.length} Set Attivo!</span>
                      ) : (
                        <span className="text-stone-400">Combina 3 pezzi affini</span>
                      )}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {equipmentSetsStatus.map(s => (
                      <div
                        key={s.set.id}
                        className={`px-2 py-1 rounded-lg border flex items-center justify-between transition-all ${
                          s.isActive
                            ? `bg-gradient-to-r ${s.set.themeGradient} ${s.set.borderAccent} shadow-[0_0_10px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/60`
                            : 'bg-black/40 border-stone-800/90 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-xs shrink-0">{s.set.badge}</span>
                          <div className="flex flex-col min-w-0">
                            <span
                              className={`text-[9px] sm:text-[10px] font-black truncate leading-tight ${
                                s.isActive ? 'text-amber-200 font-black' : 'text-stone-300'
                              }`}
                            >
                              {s.set.shortName}
                            </span>
                            <span className="text-[8px] text-amber-300/80 truncate leading-none mt-0.5">
                              {s.set.perk.label}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0 pl-1">
                          <span
                            className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                              s.isActive
                                ? 'bg-amber-400 text-stone-950 shadow-sm font-black'
                                : 'bg-stone-850 text-stone-400 border border-stone-700'
                            }`}
                          >
                            {s.equippedCount}/{s.set.minPieces}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 2: ARMORY CATALOG DRAWER FOR THE SELECTED SLOT           */}
          {/* ============================================================== */}
          <div
            className={`lg:col-span-5 flex flex-col h-full bg-stone-900/90 rounded-2xl border border-amber-900/50 overflow-hidden shadow-2xl ${
              mobileTab === 'drawer' ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {/* Slot Switcher Pills (Horizontal Scrolling on mobile) */}
            <div className="p-2 border-b border-stone-800 bg-stone-950/80 overflow-x-auto custom-scrollbar shrink-0">
              <div className="flex items-center gap-1 min-w-max">
                {ALL_SLOTS.map(s => {
                  const isSelected = selectedSlot === s.id;
                  const IconComp = s.icon;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleSelectSlot(s.id)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shrink-0 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-black shadow-md'
                          : 'bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-800'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Active Slot Header */}
            <div className="px-3.5 py-2 border-b border-amber-950/60 bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/30 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {React.createElement(activeSlotMeta.icon, { className: 'w-4 h-4' })}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-amber-100 font-serif">
                    Slot: {activeSlotMeta.name} ({activeSlotMeta.subname})
                  </h3>
                  <div className="text-[10px] text-stone-400">
                    {currentSlotItems.length} equipaggiamenti disponibili per questa parte
                  </div>
                </div>
              </div>

              {isAnyPreviewActive && (
                <button
                  type="button"
                  onClick={handleClearPreviews}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-[10px] font-bold border border-stone-600 transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Annulla Anteprima</span>
                </button>
              )}
            </div>

            {/* Scrollable Catalog of Items for Active Slot */}
            <div className="flex-1 overflow-y-auto p-2.5 sm:p-3 space-y-2.5 custom-scrollbar bg-stone-950/40">
              {currentSlotItems.map(item => {
                const isOutfit = 'avatarId' in item;
                const isEquipped = isOutfit
                  ? profile.equippedOutfitId === item.id
                  : (selectedSlot === 'headgear' && profile.equippedHeadgearId === item.id) ||
                    (selectedSlot === 'talisman' && profile.equippedTalismanId === item.id) ||
                    (selectedSlot === 'main_hand' && profile.equippedToolId === item.id) ||
                    (selectedSlot === 'off_hand' &&
                      (profile.equippedOffHandId || 'off_compass_brass') === item.id) ||
                    (selectedSlot === 'legs' &&
                      (profile.equippedLegsId || 'legs_cargo_khaki') === item.id) ||
                    (selectedSlot === 'boots' &&
                      (profile.equippedBootsId || 'boots_leather_hiker') === item.id) ||
                    (selectedSlot === 'back' && profile.equippedBackId === item.id);

                const isPreviewing = isOutfit
                  ? previewOutfitId === item.id
                  : (selectedSlot === 'headgear' && previewHeadgearId === item.id) ||
                    (selectedSlot === 'talisman' && previewTalismanId === item.id) ||
                    (selectedSlot === 'main_hand' && previewToolId === item.id) ||
                    (selectedSlot === 'off_hand' && previewOffHandId === item.id) ||
                    (selectedSlot === 'legs' && previewLegsId === item.id) ||
                    (selectedSlot === 'boots' && previewBootsId === item.id) ||
                    (selectedSlot === 'back' && previewBackId === item.id);

                const isUnlocked = isOutfit
                  ? safeUnlockedOutfitIds.includes(item.id) || item.cost === 0
                  : safeUnlockedAccessoryIds.includes(item.id) ||
                    item.cost === 0 ||
                    item.id === 'legs_cargo_khaki' ||
                    item.id === 'boots_leather_hiker' ||
                    item.id === 'back_canvas_pack' ||
                    item.id === 'off_compass_brass';

                const canUnlockLevel = currentLevelId >= item.requiredLevel;
                const canUnlockRelics =
                  !('requiredRelics' in item) ||
                  !item.requiredRelics ||
                  discoveredRelicCount >= item.requiredRelics;
                const canAfford = coins >= item.cost;

                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border transition-all ${
                      isPreviewing
                        ? 'bg-amber-950/70 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] ring-1 ring-amber-400'
                        : isEquipped
                        ? 'bg-amber-950/30 border-amber-500/70 shadow-md'
                        : isUnlocked
                        ? 'bg-stone-900/80 border-stone-800 hover:border-stone-700'
                        : 'bg-stone-950/60 border-stone-800/60 opacity-85'
                    }`}
                  >
                    {/* Item Top Info */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <div className="p-2 rounded-xl bg-stone-900 border border-stone-700 text-amber-400 shrink-0">
                          {isOutfit ? (
                            <Shirt className="w-5 h-5 text-amber-400" />
                          ) : (
                            renderAccessoryIcon(
                              (item as WardrobeAccessory).iconName,
                              'w-5 h-5 text-amber-400'
                            )
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                            <span className="text-xs sm:text-sm font-bold text-stone-100 font-serif">
                              {item.name}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-stone-800 text-amber-300 font-medium border border-stone-700">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-400 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Perk badge */}
                      {item.perk && item.perk.label !== 'Assetto Standard' && (
                        <div className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                          <span>{item.perk.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions Bar */}
                    <div className="mt-2.5 pt-2 flex items-center justify-between border-t border-stone-800/80 gap-2">
                      {/* Price / Unlock Requirements */}
                      <div className="text-xs">
                        {!isUnlocked ? (
                          <div className="flex items-center gap-1.5 font-bold text-amber-300">
                            <Coins className="w-3.5 h-3.5 text-amber-400" />
                            <span>{item.cost} Monete</span>
                            {!canUnlockLevel && (
                              <span className="text-[10px] text-red-400 font-normal">
                                (Liv. {item.requiredLevel})
                              </span>
                            )}
                            {!canUnlockRelics && (
                              <span className="text-[10px] text-red-400 font-normal">
                                ({('requiredRelics' in item && item.requiredRelics) || 0} Reliquie)
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            Posseduto
                          </div>
                        )}
                      </div>

                      {/* Action buttons: Anteprima + Ispeziona + Equipaggia/Sblocca */}
                      <div className="flex items-center gap-1.5">
                        {/* 1. Anteprima live fitting */}
                        <button
                          type="button"
                          onClick={() => handleTogglePreview(item)}
                          className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                            isPreviewing
                              ? 'bg-amber-500 text-stone-950 shadow-[0_0_12px_#f59e0b]'
                              : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40'
                          }`}
                          title="Vedi subito questo pezzo indossato sul corpo del modello"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{isPreviewing ? 'In Prova' : 'Anteprima'}</span>
                        </button>

                        {/* 2. Ispeziona scheda completa */}
                        <button
                          type="button"
                          onClick={() => setInspectItem(item)}
                          className="p-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition cursor-pointer"
                          title="Ispeziona modello e dettagli"
                        >
                          <Search className="w-3.5 h-3.5" />
                        </button>

                        {/* 3. Equipaggia o Sblocca */}
                        {isEquipped ? (
                          <button
                            type="button"
                            onClick={() => (isOutfit ? null : handleEquipAccessory(item as WardrobeAccessory))}
                            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
                              isOutfit
                                ? 'bg-amber-500/20 border border-amber-400/50 text-amber-300 cursor-default'
                                : 'bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 cursor-pointer'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>{isOutfit ? 'Indossato' : 'Rimuovi'}</span>
                          </button>
                        ) : isUnlocked ? (
                          <button
                            type="button"
                            onClick={() =>
                              isOutfit
                                ? handleEquipOutfit(item as WardrobeOutfit)
                                : handleEquipAccessory(item as WardrobeAccessory)
                            }
                            className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black shadow-md transition cursor-pointer active:scale-95"
                          >
                            Equipaggia
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              isOutfit
                                ? handleEquipOutfit(item as WardrobeOutfit)
                                : handleEquipAccessory(item as WardrobeAccessory)
                            }
                            disabled={!canUnlockLevel || !canUnlockRelics || !canAfford}
                            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer active:scale-95 ${
                              canUnlockLevel && canUnlockRelics && canAfford
                                ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
                                : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
                            }`}
                          >
                            {!canUnlockLevel || !canUnlockRelics ? (
                              <>
                                <Lock className="w-3 h-3" />
                                Bloccato
                              </>
                            ) : (
                              <>
                                <Coins className="w-3 h-3" />
                                Sblocca
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Drawer Footer Notice */}
            <div className="px-3.5 py-2 border-t border-stone-800 bg-stone-950/90 text-[10px] text-stone-400 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="truncate">Tutti i bonus sono cumulativi e attivi nelle differenze.</span>
              </div>
              <span className="text-amber-400 font-bold shrink-0">{profile.playerName}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Close-Up Item Inspector Modal */}
      {inspectItem && (
        <ItemInspectModal
          item={inspectItem}
          isOpen={true}
          onClose={() => setInspectItem(null)}
          isUnlocked={
            'avatarId' in inspectItem
              ? safeUnlockedOutfitIds.includes(inspectItem.id) || inspectItem.cost === 0
              : safeUnlockedAccessoryIds.includes(inspectItem.id) ||
                inspectItem.cost === 0 ||
                inspectItem.id === 'legs_cargo_khaki' ||
                inspectItem.id === 'boots_leather_hiker' ||
                inspectItem.id === 'back_canvas_pack' ||
                inspectItem.id === 'off_compass_brass'
          }
          isEquipped={
            'avatarId' in inspectItem
              ? profile.equippedOutfitId === inspectItem.id
              : (inspectItem.slot === 'headgear' && profile.equippedHeadgearId === inspectItem.id) ||
                ((inspectItem.slot === 'tool' || inspectItem.slot === 'main_hand') &&
                  profile.equippedToolId === inspectItem.id) ||
                (inspectItem.slot === 'off_hand' &&
                  (profile.equippedOffHandId || 'off_compass_brass') === inspectItem.id) ||
                (inspectItem.slot === 'legs' &&
                  (profile.equippedLegsId || 'legs_cargo_khaki') === inspectItem.id) ||
                (inspectItem.slot === 'boots' &&
                  (profile.equippedBootsId || 'boots_leather_hiker') === inspectItem.id) ||
                (inspectItem.slot === 'talisman' &&
                  profile.equippedTalismanId === inspectItem.id) ||
                (inspectItem.slot === 'back' && profile.equippedBackId === inspectItem.id)
          }
          isPreviewing={
            'avatarId' in inspectItem
              ? previewOutfitId === inspectItem.id
              : (inspectItem.slot === 'headgear' && previewHeadgearId === inspectItem.id) ||
                ((inspectItem.slot === 'tool' || inspectItem.slot === 'main_hand') &&
                  previewToolId === inspectItem.id) ||
                (inspectItem.slot === 'off_hand' && previewOffHandId === inspectItem.id) ||
                (inspectItem.slot === 'legs' && previewLegsId === inspectItem.id) ||
                (inspectItem.slot === 'boots' && previewBootsId === inspectItem.id) ||
                (inspectItem.slot === 'talisman' && previewTalismanId === inspectItem.id) ||
                (inspectItem.slot === 'back' && previewBackId === inspectItem.id)
          }
          canUnlockLevel={currentLevelId >= inspectItem.requiredLevel}
          canUnlockRelics={
            !('requiredRelics' in inspectItem) ||
            !inspectItem.requiredRelics ||
            discoveredRelicCount >= inspectItem.requiredRelics
          }
          canAfford={coins >= inspectItem.cost}
          onTryOn={() => {
            handleTogglePreview(inspectItem);
            setInspectItem(null);
          }}
          onBuyOrEquip={() => {
            if ('avatarId' in inspectItem) {
              handleEquipOutfit(inspectItem);
            } else {
              handleEquipAccessory(inspectItem);
            }
            setInspectItem(null);
          }}
        />
      )}
    </div>
  );
};
