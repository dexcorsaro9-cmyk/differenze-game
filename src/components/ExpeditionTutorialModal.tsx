import React, { useState } from 'react';
import { EXPLORERS, type ExplorerProfile } from '../data/avatarData';
import {
  Compass,
  Star,
  Globe,
  Shield,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Eye,
  Zap,
  Search,
  Snowflake,
  ZoomIn,
  Move,
  MousePointerClick,
  CheckCircle2,
  Award
} from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerHaptic } from '../utils/haptics';
import { useTranslation } from '../i18n/LanguageContext';
import { getLocalizedExplorer } from '../i18n/gameDataTranslations';

interface ExpeditionTutorialModalProps {
  isOpen: boolean;
  profile: ExplorerProfile;
  onComplete: () => void;
}

export const ExpeditionTutorialModal: React.FC<ExpeditionTutorialModalProps> = ({
  isOpen,
  profile,
  onComplete,
}) => {
  const { language, t, interpolate } = useTranslation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [hasPracticedDifference, setHasPracticedDifference] = useState<boolean>(false);
  const [practiceZoom, setPracticeZoom] = useState<number>(1);
  const [selectedToolId, setSelectedToolId] = useState<string>('hint');

  if (!isOpen) return null;

  const explorer = getLocalizedExplorer(EXPLORERS[profile.avatarId] || EXPLORERS.samira, language);

  const handleTestDifferenceClick = () => {
    if (!hasPracticedDifference) {
      setHasPracticedDifference(true);
      sound.playSuccess();
      triggerHaptic('success');
    }
  };

  const steps = [
    {
      id: 'differences',
      title: t.tutorial.step1Title,
      subtitle: t.tutorial.step1Subtitle,
      badge: t.tutorial.step1Badge,
      icon: Eye,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3 sm:p-4 space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-[11px] font-serif text-amber-300">
            <span className="font-bold flex items-center gap-1.5">
              <MousePointerClick className="w-4 h-4 text-amber-400 animate-bounce" />
              {t.tutorial.step1SceneIntro}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px] border border-emerald-500/40">
              {t.tutorial.step1RelicsCount}
            </span>
          </div>

          {/* Single Atmospheric Scene Preview */}
          <div
            onClick={handleTestDifferenceClick}
            className={`relative bg-gradient-to-b from-[#2d1e11] via-[#1a1008] to-[#0d0703] border-2 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[140px] cursor-pointer transition-all active:scale-[0.98] select-none ${
              hasPracticedDifference
                ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)]'
                : 'border-amber-400/80 hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]'
            }`}
          >
            {/* Ambient desk vignette */}
            <div className="relative w-full h-24 bg-stone-950/80 rounded-xl border border-amber-900/60 flex items-center justify-center gap-6 px-4 overflow-hidden">
              <div className="flex flex-col items-center opacity-70">
                <span className="text-3xl filter drop-shadow">📜</span>
                <span className="text-[8px] text-amber-300/80 font-mono">{t.tutorial.step1Manuscript}</span>
              </div>

              <div className="flex flex-col items-center opacity-70">
                <span className="text-3xl filter drop-shadow">🕯️</span>
                <span className="text-[8px] text-amber-300/80 font-mono">{t.tutorial.step1Lantern}</span>
              </div>

              {/* Target Relic: Professor Bellini's Astrolabe */}
              <div className="relative flex flex-col items-center">
                <div className={`p-2 rounded-full transition-all ${
                  hasPracticedDifference
                    ? 'ring-4 ring-emerald-400 bg-emerald-500/20 shadow-[0_0_20px_#10b981]'
                    : 'ring-2 ring-dashed ring-amber-400 animate-pulse bg-amber-500/10'
                }`}>
                  <span className="text-3xl filter drop-shadow">🧭</span>
                </div>
                <span className={`text-[8px] font-bold font-mono mt-0.5 ${hasPracticedDifference ? 'text-emerald-300' : 'text-amber-300 animate-bounce'}`}>
                  {hasPracticedDifference ? t.tutorial.step1Sealed : t.tutorial.step1ClickRelic}
                </span>

                {/* Wax Seal Stamp FX */}
                {hasPracticedDifference && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center font-black text-xs shadow-lg border border-white animate-stamp-slam">
                    ✓
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center opacity-70">
                <span className="text-3xl filter drop-shadow">⚱️</span>
                <span className="text-[8px] text-amber-300/80 font-mono">{t.tutorial.step1Amphora}</span>
              </div>
            </div>

            <div className="mt-2 text-[10.5px] font-serif text-amber-200/90 text-center">
              {hasPracticedDifference ? (
                <span className="text-emerald-300 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {t.tutorial.step1SuccessFlash}
                </span>
              ) : (
                <span>
                  <strong>{t.tutorial.step1RiddleIntro}</strong> <em>{t.tutorial.step1RiddleSample}</em>
                </span>
              )}
            </div>
          </div>

          <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/20 text-center text-xs text-amber-200/80">
            {t.tutorial.step1SceneDesc}
          </div>
        </div>
      ),
      message: t.tutorial.step1Message,
      tip: t.tutorial.step1Tip,
    },
    {
      id: 'zoom_and_pan',
      title: t.tutorial.step2Title,
      subtitle: t.tutorial.step2Subtitle,
      badge: t.tutorial.step2Badge,
      icon: ZoomIn,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3.5 space-y-3 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300 font-serif flex items-center gap-1.5">
              <ZoomIn className="w-4 h-4 text-amber-400" />
              {interpolate(t.tutorial.step2Magnification, { zoom: practiceZoom })}
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 4].map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setPracticeZoom(lvl);
                    sound.playTap();
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    practiceZoom === lvl
                      ? 'bg-amber-500 text-stone-950 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {lvl}x
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full h-24 bg-stone-950 rounded-xl overflow-hidden border border-amber-900/60 flex items-center justify-center">
            <div
              className="transition-transform duration-300 flex items-center gap-4 select-none"
              style={{ transform: `scale(${practiceZoom})` }}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl">🏺</span>
                <span className="text-[8px] text-amber-400 font-mono">{t.tutorial.step2MinoanVase}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">🧭</span>
                <span className="text-[8px] text-amber-400 font-mono">{t.tutorial.step2Astrolabe}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl">🗝️</span>
                <span className="text-[8px] text-amber-400 font-mono">{t.tutorial.step2TemplarSeal}</span>
              </div>
            </div>

            {/* Gesture Guide Overlay */}
            <div className="absolute bottom-1.5 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/70 border border-amber-500/30 text-[9px] text-amber-300 font-mono">
              <Move className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{t.tutorial.step2DragToPan}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10.5px] font-serif text-amber-200/90 text-left">
            <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-500/30">
              <strong className="text-amber-300 block mb-0.5">{t.tutorial.step2BrassLensTitle}</strong>
              {t.tutorial.step2BrassLensDesc}
            </div>
            <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-500/30">
              <strong className="text-amber-300 block mb-0.5">{t.tutorial.step2SunlightTitle}</strong>
              {t.tutorial.step2SunlightDesc}
            </div>
          </div>
        </div>
      ),
      message: t.tutorial.step2Message,
      tip: t.tutorial.step2Tip,
    },
    {
      id: 'powerups',
      title: t.tutorial.step3Title,
      subtitle: t.tutorial.step3Subtitle,
      badge: t.tutorial.step3Badge,
      icon: Zap,
      renderIllustration: () => {
        const toolDetails: Record<string, { title: string; desc: string; color: string; icon: React.ReactNode }> = {
          freeze: {
            title: t.tutorial.step3FreezeTitle,
            desc: t.tutorial.step3FreezeDesc,
            color: 'text-cyan-300 border-cyan-500/60 bg-cyan-950/50',
            icon: <Snowflake className="w-5 h-5 text-cyan-400" />
          },
          radar: {
            title: t.tutorial.step3RadarTitle,
            desc: t.tutorial.step3RadarDesc,
            color: 'text-amber-300 border-amber-500/60 bg-amber-950/50',
            icon: <Compass className="w-5 h-5 text-amber-400" />
          },
          hint: {
            title: t.tutorial.step3HintTitle,
            desc: t.tutorial.step3HintDesc,
            color: 'text-yellow-300 border-yellow-500/60 bg-yellow-950/50',
            icon: <Search className="w-5 h-5 text-yellow-400" />
          },
          shield: {
            title: t.tutorial.step3ShieldTitle,
            desc: t.tutorial.step3ShieldDesc,
            color: 'text-indigo-300 border-indigo-500/60 bg-indigo-950/50',
            icon: <Shield className="w-5 h-5 text-indigo-400" />
          },
        };

        const activeTool = toolDetails[selectedToolId];

        return (
          <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3 sm:p-4 space-y-3 shadow-inner">
            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('freeze');
                  sound.playFreeze();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'freeze'
                    ? 'bg-cyan-950 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-cyan-500/50'
                }`}
              >
                <Snowflake className="w-5 h-5 text-cyan-300" />
                <span className="text-[9px] font-black uppercase text-cyan-200">{t.powerUps.freezeTime}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('radar');
                  sound.playCompass();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'radar'
                    ? 'bg-amber-950 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-amber-500/50'
                }`}
              >
                <Compass className="w-5 h-5 text-amber-300" />
                <span className="text-[9px] font-black uppercase text-amber-200">{t.powerUps.compassRadar}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('hint');
                  sound.playHint();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'hint'
                    ? 'bg-yellow-950 border-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-yellow-500/50'
                }`}
              >
                <Search className="w-5 h-5 text-yellow-300" />
                <span className="text-[9px] font-black uppercase text-yellow-200">{t.powerUps.hint}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedToolId('shield');
                  sound.playShield();
                }}
                className={`p-2 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  selectedToolId === 'shield'
                    ? 'bg-indigo-950 border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)] scale-105'
                    : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:border-indigo-500/50'
                }`}
              >
                <Shield className="w-5 h-5 text-indigo-300" />
                <span className="text-[9px] font-black uppercase text-indigo-200">{t.powerUps.errorShield}</span>
              </button>
            </div>

            {/* Selected Tool Details Banner */}
            <div className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all ${activeTool.color}`}>
              <div className="shrink-0 p-1.5 rounded-lg bg-black/40 border border-white/10">
                {activeTool.icon}
              </div>
              <div className="text-left leading-snug">
                <h4 className="text-xs font-black font-serif uppercase tracking-wide">
                  {activeTool.title}
                </h4>
                <p className="text-[11px] opacity-90 font-medium">
                  {activeTool.desc}
                </p>
              </div>
            </div>
          </div>
        );
      },
      message: t.tutorial.step3Message,
      tip: t.tutorial.step3Tip,
    },
    {
      id: 'milestone_dilemmas',
      title: t.tutorial.step4Title,
      subtitle: t.tutorial.step4Subtitle,
      badge: t.tutorial.step4Badge,
      icon: Compass,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3.5 space-y-3 shadow-inner text-left">
          <div className="flex items-center gap-2.5 pb-2 border-b border-amber-900/60">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shrink-0 shadow">
              <Compass className="w-5 h-5 text-amber-300 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-xs font-black text-amber-100 font-serif uppercase tracking-wider">
                {t.tutorial.step4MilestonesHeader}
              </h4>
              <p className="text-[10px] text-amber-400/80 font-mono">
                {t.tutorial.step4MilestonesSub}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-500/40 space-y-1">
              <span className="text-lg">🏛️</span>
              <div className="text-amber-300 font-bold text-[10px]">{t.tutorial.step4Academy}</div>
              <p className="text-[9px] text-stone-300 leading-tight">{t.tutorial.step4AcademyDesc}</p>
            </div>

            <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 space-y-1">
              <span className="text-lg">🗝️</span>
              <div className="text-indigo-300 font-bold text-[10px]">{t.tutorial.step4Archive}</div>
              <p className="text-[9px] text-stone-300 leading-tight">{t.tutorial.step4ArchiveDesc}</p>
            </div>

            <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-1">
              <span className="text-lg">🌿</span>
              <div className="text-emerald-300 font-bold text-[10px]">{t.tutorial.step4Nature}</div>
              <p className="text-[9px] text-stone-300 leading-tight">{t.tutorial.step4NatureDesc}</p>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-black/50 border border-amber-500/30 text-[10.5px] text-amber-200/90 font-serif text-center">
            {t.tutorial.step4AffinityNote}
          </div>
        </div>
      ),
      message: t.tutorial.step4Message,
      tip: t.tutorial.step4Tip,
    },
    {
      id: 'stars_and_relics',
      title: t.tutorial.step5Title,
      subtitle: t.tutorial.step5Subtitle,
      badge: t.tutorial.step5Badge,
      icon: Award,
      renderIllustration: () => (
        <div className="w-full bg-[#1c120a] border-2 border-amber-500/50 rounded-2xl p-3.5 space-y-3 shadow-inner text-left">
          <div className="flex items-center gap-2.5 pb-2 border-b border-amber-900/60">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center shrink-0 shadow">
              <Award className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h4 className="text-xs font-black text-amber-100 font-serif uppercase tracking-wider">
                {t.tutorial.step5ProgressionTitle}
              </h4>
              <p className="text-[10px] text-amber-400/80 font-mono">
                {t.tutorial.step5ProgressionSub}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-600/40 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{t.tutorial.step5StarsTitle}</span>
              </div>
              <p className="text-[10px] text-stone-300 leading-tight">
                {t.tutorial.step5StarsDesc}
              </p>
            </div>

            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-600/40 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.tutorial.step5GlobeTitle}</span>
              </div>
              <p className="text-[10px] text-stone-300 leading-tight">
                {t.tutorial.step5GlobeDesc}
              </p>
            </div>
          </div>
        </div>
      ),
      message: t.tutorial.step5Message,
      tip: t.tutorial.step5Tip,
    },
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    sound.playTap();
    triggerHaptic('light');

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    sound.playTap();
    triggerHaptic('light');

    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    sound.playLevelWin();
    triggerHaptic('success');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#22160d] via-[#170e07] to-[#0e0703] border-2 border-amber-500/70 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar inside Modal */}
        <div className="w-full leather-belt px-4 py-3 flex items-center justify-between border-b border-amber-600/40 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-md shrink-0 bg-stone-900">
              <img
                src={explorer.portrait}
                alt={explorer.name}
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black text-amber-100 font-serif leading-none">
                  {profile.playerName}
                </h3>
                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold">
                  {explorer.title}
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-serif mt-0.5 block">
                {t.tutorial.officialManual}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Step Counter Dots */}
            <div className="flex items-center gap-1">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setCurrentStep(idx);
                    sound.playTap();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentStep
                      ? 'w-6 bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                      : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  title={interpolate(t.tutorial.stepOf, { current: idx + 1, total: steps.length })}
                />
              ))}
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={handleComplete}
              className="px-2.5 py-1 rounded-full bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-[11px] font-bold border border-amber-600/60 transition cursor-pointer active:scale-90 flex items-center gap-1 shadow"
              title={t.tutorial.skipTutorial}
            >
              <span>{t.tutorial.skipTutorial}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Center Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1">
          
          {/* Step Category Badge & Title */}
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-bold uppercase tracking-wider mb-1">
              {currentStepData.badge} • {interpolate(t.tutorial.stepOf, { current: currentStep + 1, total: steps.length })}
            </span>
            <h2 className="text-lg sm:text-xl font-black text-amber-100 font-serif leading-tight">
              {currentStepData.title}
            </h2>
            <p className="text-xs text-amber-300/80 font-medium">
              {currentStepData.subtitle}
            </p>
          </div>

          {/* Illustrated Visual Card */}
          {currentStepData.renderIllustration()}

          {/* Guide Dialogue */}
          <div className="bg-stone-950/80 border border-amber-900/50 rounded-2xl p-3 sm:p-3.5 shadow-inner">
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic">
              "{currentStepData.message}"
            </p>

            {/* Practical Tip */}
            <div className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center gap-2 text-[11px] text-emerald-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{currentStepData.tip}</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-3 sm:p-4 bg-black/70 border-t border-amber-900/40 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`py-2 px-3.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
              currentStep > 0
                ? 'bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 cursor-pointer active:scale-95'
                : 'opacity-30 cursor-not-allowed text-stone-600'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.tutorial.prevStep}</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="py-2.5 px-5 rounded-xl font-black font-serif tracking-wider text-xs uppercase bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center gap-2 cursor-pointer active:scale-95 transition"
          >
            <span>{currentStep === steps.length - 1 ? t.tutorial.startExpedition : t.tutorial.nextStep}</span>
            {currentStep === steps.length - 1 ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
