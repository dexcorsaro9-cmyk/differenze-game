// Procedural Web Audio API sound synthesizer for iOS-like game audio
class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  // Melodic bell/chime for finding a difference
  public playSuccess() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0, now + idx * 0.04);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.04 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.36);
    });
  }

  // Soft dull error buzz for wrong spot
  public playError() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.21);
  }

  // Shimmer sound for hint
  public playHint() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [880, 1108.73, 1318.51, 1760]; // A5, C#6, E6, A6

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0, now + i * 0.06);
      gain.gain.linearRampToValueAtTime(0.18, now + i * 0.06 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.46);
    });
  }

  // Victory fanfare for level cleared
  public playVictory() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const chords = [
      { notes: [523.25, 659.25, 783.99], time: 0, dur: 0.25 }, // C
      { notes: [587.33, 698.46, 880.00], time: 0.25, dur: 0.25 }, // Dm
      { notes: [659.25, 783.99, 987.77], time: 0.5, dur: 0.3 }, // Em
      { notes: [783.99, 1046.50, 1318.51], time: 0.8, dur: 0.7 }, // G -> C6 octave
    ];

    chords.forEach(({ notes, time, dur }) => {
      notes.forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0, now + time);
        gain.gain.linearRampToValueAtTime(0.18, now + time + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur + 0.05);
      });
    });
  }

  // Aliases for clear UI semantics
  public playLevelWin() {
    this.playVictory();
  }

  public playSelect() {
    this.playTap();
  }

  // Click/pop
  public playTap() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Golden coin pickup sound
  public playCoin() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [987.77, 1318.51]; // B5, E6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.26);
    });
  }

  // Melodic bell/chime for finding a difference with combo streak pitch scaling
  public playComboSuccess(streakLevel: number = 1) {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Pitch multiplier based on streak (up to streak 5)
    const pitchMult = Math.min(2.0, 1 + (streakLevel - 1) * 0.18);
    const baseNotes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const notes = baseNotes.slice(0, Math.min(4, 2 + streakLevel)).map(n => n * pitchMult);
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = streakLevel >= 3 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.045);

      gain.gain.setValueAtTime(0, now + idx * 0.045);
      gain.gain.linearRampToValueAtTime(0.28, now + idx * 0.045 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.38);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.045);
      osc.stop(now + idx * 0.045 + 0.4);
    });
  }

  // Crisp micro-metallic coin tick for tally counting
  public playCoinTick() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1480 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.04);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.045);
  }

  // Dramatic individual star reveal fanfare
  public playStarSound(starIndex: number) {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const chords = [
      [523.25, 659.25], // Star 1: C5 + E5
      [659.25, 783.99, 987.77], // Star 2: E5 + G5 + B5
      [783.99, 1046.5, 1318.51, 1567.98], // Star 3: G5 + C6 + E6 + G6 Grand Triad
    ];

    const currentNotes = chords[Math.min(starIndex - 1, 2)] || chords[0];
    currentNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);

      gain.gain.setValueAtTime(0, now + idx * 0.03);
      gain.gain.linearRampToValueAtTime(0.3, now + idx * 0.03 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.03);
      osc.stop(now + idx * 0.03 + 0.65);
    });
  }

  // Majestic crystalline shield block sound
  public playShieldBlock() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [440, 659.25, 880, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.025);

      gain.gain.setValueAtTime(0, now + idx * 0.025);
      gain.gain.linearRampToValueAtTime(0.28, now + idx * 0.025 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.025 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.025);
      osc.stop(now + idx * 0.025 + 0.52);
    });
  }

  // Chilly frost whoosh for time freeze
  public playFreeze() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [1760, 1396.91, 1046.5, 783.99]; // A6, F6, C6, G5
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.18, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.42);
    });
  }

  // Navigational radar/compass ping
  public playCompass() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.35);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.36);
  }

  // Optical archive lens / camera shutter past-vision reveal
  public playArchiveLens() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Mechanical click + brass shimmer
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(1040, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(330, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  // Protective rune shield activate
  public playShield() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(640, now + 0.2);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.42);
  }

  // Shield deflection sound on blocked error
  public playShieldBreak() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.25);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  // Triumphant orchestral fanfare for unearthing a secret ancient relic
  public playRelicFound() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Deep ancient temple bronze gong impact
    const gong = ctx.createOscillator();
    const gongGain = ctx.createGain();
    gong.type = 'sine';
    gong.frequency.setValueAtTime(130.81, now); // C3
    gong.frequency.exponentialRampToValueAtTime(65.4, now + 1.2);
    gongGain.gain.setValueAtTime(0.35, now);
    gongGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
    gong.connect(gongGain);
    gongGain.connect(ctx.destination);
    gong.start(now);
    gong.stop(now + 1.45);

    // 2. Brass trumpet triumphant fanfare (C4 -> G4 -> C5 -> E5 -> G5)
    const fanfareNotes = [261.63, 392.0, 523.25, 659.25, 783.99];
    fanfareNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.18, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.65);
    });

    // 3. Shimmering celestial chimes (E6 -> G6 -> B6 -> C7)
    const chimeNotes = [1318.51, 1567.98, 1975.53, 2093.0];
    chimeNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + 0.45 + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.75);
    });
  }

  // Vintage 1928 propeller engine sound for flight path
  public playAirplaneFlight(durationSec: number = 4.0) {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(82, now);
    osc1.frequency.linearRampToValueAtTime(88, now + durationSec * 0.5);
    osc1.frequency.linearRampToValueAtTime(80, now + durationSec);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(164, now);
    osc2.frequency.linearRampToValueAtTime(176, now + durationSec * 0.5);
    osc2.frequency.linearRampToValueAtTime(160, now + durationSec);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.12, now + 0.4);
    gainNode.gain.setValueAtTime(0.12, now + durationSec - 0.5);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + durationSec);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + durationSec);
    osc2.stop(now + durationSec);
  }

  // =========================================================================
  // AAA JUICINESS & PHYSICAL IMPACT SOUND EFFECTS
  // =========================================================================

  // Tactile wax seal stamp impact ("Timbro di Ceralacca")
  public playStamp() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Heavy physical mechanical/brass thud (75Hz -> 28Hz)
    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(75, now);
    thudOsc.frequency.exponentialRampToValueAtTime(28, now + 0.18);

    thudGain.gain.setValueAtTime(0.45, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.23);

    // 2. Crisp brass seal metallic ring on wax
    const ringOsc = ctx.createOscillator();
    const ringGain = ctx.createGain();
    ringOsc.type = 'triangle';
    ringOsc.frequency.setValueAtTime(640, now);
    ringOsc.frequency.exponentialRampToValueAtTime(220, now + 0.14);

    ringGain.gain.setValueAtTime(0.2, now);
    ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    ringOsc.connect(ringGain);
    ringGain.connect(ctx.destination);
    ringOsc.start(now);
    ringOsc.stop(now + 0.16);

    // 3. Subtle wax crackle / parchment friction burst
    const noiseLen = Math.floor(ctx.sampleRate * 0.08);
    const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const output = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (noiseLen * 0.3));
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuf;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1200, now);
    noiseFilter.Q.setValueAtTime(2.0, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSource.start(now);
  }

  // Cascading coin flurry sound when flying coins reach the top counter
  public playCoinBurst() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Fast melodic arpeggio of golden coin clinks
    const freqs = [987.77, 1174.66, 1318.51, 1567.98, 1760.0]; // B5, D6, E6, G6, A6

    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = now + idx * 0.05;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.2);
    });
  }

  // Low dull physical vibration when tapping wrong spot
  public playScreenShakeImpact() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  // Triumphant daily expedition completion fanfare
  public playDailyRewardClaim() {
    if (!this.isEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Choral brass fanfare (D4 -> F#4 -> A4 -> D5 -> F#5)
    const notes = [293.66, 369.99, 440.0, 587.33, 739.99];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = now + i * 0.09;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.22, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.75);
    });
  }

  // =========================================================================
  // CONTINUOUS PROCEDURAL ORCHESTRAL BGM ENGINE (1928 ADVENTURE SOUNDSCAPE)
  // =========================================================================
  private bgmGainNode: GainNode | null = null;
  private bgmFilterNode: BiquadFilterNode | null = null;
  private isBgmPlaying: boolean = false;
  private bgmEnabled: boolean = (() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('differenze_bgm_enabled');
      return saved !== 'false';
    }
    return true;
  })();
  private bgmVolume: number = 0.38;
  private bgmLoopTimer: number | null = null;
  private bgmStepIndex: number = 0;
  private currentTheme: 'exploration' | 'excavation' = 'exploration';

  // Chord progressions in ancient Dorian / D minor mode (Indiana Jones / Howard Shore archaeological style)
  // Each chord has [RootBass, HarpArpNotes...]
  private readonly chordsExploration = [
    { bass: 146.83, harp: [293.66, 349.23, 440.0, 523.25, 587.33] }, // Dm (D3, F3, A4, C5, D5)
    { bass: 116.54, harp: [233.08, 293.66, 349.23, 466.16, 587.33] }, // Bb (Bb2, D3, F3, Bb4, D5)
    { bass: 130.81, harp: [261.63, 329.63, 392.0, 523.25, 659.25] }, // C  (C3, E3, G4, C5, E5)
    { bass: 110.00, harp: [220.00, 261.63, 329.63, 440.00, 523.25] }, // Am (A2, C3, E3, A4, C5)
  ];

  private readonly chordsExcavation = [
    { bass: 110.00, harp: [220.00, 261.63, 329.63, 392.00, 440.00] }, // Am mystic
    { bass: 123.47, harp: [246.94, 293.66, 369.99, 440.00, 493.88] }, // Bm
    { bass: 98.00,  harp: [196.00, 246.94, 293.66, 392.00, 493.88] }, // G
    { bass: 146.83, harp: [293.66, 349.23, 440.00, 523.25, 587.33] }, // Dm
  ];

  public setBGMEnabled(enabled: boolean) {
    this.bgmEnabled = enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('differenze_bgm_enabled', enabled ? 'true' : 'false');
    }
    if (!enabled) {
      this.pauseBGM();
    } else {
      this.startBGM(this.currentTheme);
    }
  }

  public getBGMEnabled(): boolean {
    return this.bgmEnabled;
  }

  public isBgmActive(): boolean {
    return this.isBgmPlaying && this.bgmEnabled;
  }

  public setBGMTheme(theme: 'exploration' | 'excavation') {
    if (this.currentTheme === theme) return;
    this.currentTheme = theme;
    if (this.isBgmPlaying && this.bgmEnabled) {
      this.startBGM(theme);
    }
  }

  // Start continuous orchestral atmospheric music loop
  public startBGM(theme: 'exploration' | 'excavation' = 'exploration') {
    this.currentTheme = theme;
    if (!this.bgmEnabled) return;

    const ctx = this.getContext();
    if (!ctx) return;

    // Ensure audio context is active
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    if (this.isBgmPlaying && this.bgmLoopTimer !== null) {
      // Smooth theme transition
      return;
    }

    // Master BGM Gain Node
    if (!this.bgmGainNode) {
      this.bgmGainNode = ctx.createGain();
      this.bgmFilterNode = ctx.createBiquadFilter();
      this.bgmFilterNode.type = 'lowpass';
      this.bgmFilterNode.frequency.setValueAtTime(3200, ctx.currentTime);
      this.bgmFilterNode.Q.setValueAtTime(1.0, ctx.currentTime);

      this.bgmGainNode.connect(this.bgmFilterNode);
      this.bgmFilterNode.connect(ctx.destination);
    }

    const now = ctx.currentTime;
    this.bgmGainNode.gain.cancelScheduledValues(now);
    this.bgmGainNode.gain.setValueAtTime(this.bgmGainNode.gain.value, now);
    this.bgmGainNode.gain.linearRampToValueAtTime(this.bgmVolume, now + 1.2);

    this.isBgmPlaying = true;
    this.bgmStepIndex = 0;

    // Schedule initial bar immediately
    this.scheduleNextBGMBar();

    // Start precise bar scheduler loop (every 3.6 seconds per 4-beat bar)
    if (this.bgmLoopTimer !== null) clearInterval(this.bgmLoopTimer);
    this.bgmLoopTimer = window.setInterval(() => {
      if (this.isBgmPlaying && this.bgmEnabled) {
        this.scheduleNextBGMBar();
      }
    }, 3600);
  }

  public pauseBGM() {
    if (!this.bgmGainNode || !this.ctx) {
      this.isBgmPlaying = false;
      return;
    }
    const now = this.ctx.currentTime;
    this.bgmGainNode.gain.cancelScheduledValues(now);
    this.bgmGainNode.gain.linearRampToValueAtTime(0.001, now + 0.6);

    if (this.bgmLoopTimer !== null) {
      clearInterval(this.bgmLoopTimer);
      this.bgmLoopTimer = null;
    }
    this.isBgmPlaying = false;
  }

  public stopBGM() {
    this.pauseBGM();
  }

  public toggleBGM(): boolean {
    const next = !this.bgmEnabled;
    this.setBGMEnabled(next);
    return next;
  }

  // Synthesizes one bar of rich cinematic adventure music
  private scheduleNextBGMBar() {
    const ctx = this.getContext();
    if (!ctx || !this.bgmGainNode || !this.isBgmPlaying || !this.bgmEnabled) return;

    const chords = this.currentTheme === 'exploration' ? this.chordsExploration : this.chordsExcavation;
    const currentChord = chords[this.bgmStepIndex % chords.length];
    this.bgmStepIndex++;

    const startTime = ctx.currentTime + 0.05;
    const barDuration = 3.6; // seconds

    // 1. Warm Cello / Double-Bass Pedal Drone
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    const bassFilter = ctx.createBiquadFilter();

    bassFilter.type = 'lowpass';
    bassFilter.frequency.setValueAtTime(280, startTime);

    bassOsc.type = 'triangle';
    bassOsc.frequency.setValueAtTime(currentChord.bass, startTime);

    bassGain.gain.setValueAtTime(0, startTime);
    bassGain.gain.linearRampToValueAtTime(0.14, startTime + 0.8);
    bassGain.gain.setValueAtTime(0.14, startTime + barDuration - 0.7);
    bassGain.gain.linearRampToValueAtTime(0.001, startTime + barDuration);

    bassOsc.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(this.bgmGainNode);

    bassOsc.start(startTime);
    bassOsc.stop(startTime + barDuration + 0.1);

    // 2. Acoustic Celtic Harp / Classical Arpeggios (5 delicate notes across the bar)
    const harpNotes = currentChord.harp;
    const noteInterval = barDuration / harpNotes.length;

    harpNotes.forEach((freq, idx) => {
      const noteTime = startTime + idx * noteInterval;

      const harpOsc = ctx.createOscillator();
      const harpGain = ctx.createGain();

      harpOsc.type = 'sine';
      harpOsc.frequency.setValueAtTime(freq, noteTime);

      // Acoustic pluck envelope: fast attack, natural exponential ring
      harpGain.gain.setValueAtTime(0, noteTime);
      harpGain.gain.linearRampToValueAtTime(0.09, noteTime + 0.02);
      harpGain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.85);

      harpOsc.connect(harpGain);
      harpGain.connect(this.bgmGainNode!);

      harpOsc.start(noteTime);
      harpOsc.stop(noteTime + 0.9);
    });

    // 3. Ancient Flute / Whistle Lyrical Fragment (Every second bar)
    if (this.bgmStepIndex % 2 === 0) {
      const fluteOsc = ctx.createOscillator();
      const fluteGain = ctx.createGain();
      const fluteLfo = ctx.createOscillator();
      const fluteLfoGain = ctx.createGain();

      const fluteStartTime = startTime + 0.6;
      const fluteFreq = harpNotes[harpNotes.length - 1]; // High melodic note

      // Gentle breathy vibrato
      fluteLfo.type = 'sine';
      fluteLfo.frequency.setValueAtTime(4.8, fluteStartTime);
      fluteLfoGain.gain.setValueAtTime(3.5, fluteStartTime);
      fluteLfo.connect(fluteLfoGain);
      fluteLfoGain.connect(fluteOsc.frequency);

      fluteOsc.type = 'triangle';
      fluteOsc.frequency.setValueAtTime(fluteFreq, fluteStartTime);

      fluteGain.gain.setValueAtTime(0, fluteStartTime);
      fluteGain.gain.linearRampToValueAtTime(0.08, fluteStartTime + 0.4);
      fluteGain.gain.exponentialRampToValueAtTime(0.001, fluteStartTime + 2.0);

      fluteOsc.connect(fluteGain);
      fluteGain.connect(this.bgmGainNode);

      fluteLfo.start(fluteStartTime);
      fluteOsc.start(fluteStartTime);

      fluteLfo.stop(fluteStartTime + 2.1);
      fluteOsc.stop(fluteStartTime + 2.1);
    }
  }
}

export const sound = new SoundManager();

