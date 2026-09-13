export interface ExpeditionMedal {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  ribbonColor: string;
  medalTier: 'bronze' | 'silver' | 'gold' | 'legendary';
  coinReward: number;
  category: 'esplorazione' | 'maestria' | 'collezione' | 'velocita';
}

export const EXPEDITION_MEDALS: ExpeditionMedal[] = [
  {
    id: 'hawk_eye',
    title: 'Occhio di Falco',
    subtitle: 'Percezione Pura',
    description: 'Trova 5 differenze senza utilizzare alcun indizio o radar.',
    iconName: 'Eye',
    ribbonColor: 'from-amber-700 to-amber-900',
    medalTier: 'silver',
    coinReward: 150,
    category: 'maestria',
  },
  {
    id: 'speed_demon',
    title: 'Cronografo d\'Oro',
    subtitle: 'Velocità Fulminea',
    description: 'Completa qualsiasi livello di spedizione in meno di 45 secondi.',
    iconName: 'Zap',
    ribbonColor: 'from-yellow-500 to-amber-600',
    medalTier: 'gold',
    coinReward: 250,
    category: 'velocita',
  },
  {
    id: 'flawless_run',
    title: 'Spedizione Impeccabile',
    subtitle: 'Nessun Errore',
    description: 'Decifra un intero sito archeologico senza commettere un singolo errore.',
    iconName: 'Shield',
    ribbonColor: 'from-emerald-600 to-teal-800',
    medalTier: 'silver',
    coinReward: 150,
    category: 'maestria',
  },
  {
    id: 'full_set_synergy',
    title: 'Aura dei Sacerdoti',
    subtitle: 'Set Completo',
    description: 'Equipaggia almeno 3 pezzi dello stesso Set Archeologico nell\'Armeria.',
    iconName: 'Crown',
    ribbonColor: 'from-yellow-400 to-amber-700',
    medalTier: 'gold',
    coinReward: 300,
    category: 'collezione',
  },
  {
    id: 'lore_master',
    title: 'Epigrafista Provato',
    subtitle: 'Archivio Storico',
    description: 'Raccogli e documenta almeno 20 indizi storici nel Diario di Spedizione.',
    iconName: 'BookOpen',
    ribbonColor: 'from-indigo-600 to-blue-900',
    medalTier: 'bronze',
    coinReward: 120,
    category: 'esplorazione',
  },
  {
    id: 'relic_hunter',
    title: 'Cacciatore di Reliquie',
    subtitle: 'Archeologia Proibita',
    description: 'Trova almeno 3 reliquie d\'oro celate nei siti archeologici.',
    iconName: 'Sparkles',
    ribbonColor: 'from-purple-600 to-indigo-900',
    medalTier: 'gold',
    coinReward: 350,
    category: 'collezione',
  },
  {
    id: 'andes_climber',
    title: 'Scalatore del Cóndor',
    subtitle: 'Verso le Alte Vette',
    description: 'Raggiungi la Tappa 5 (Ande Centrali & Cripta di Vilcabamba).',
    iconName: 'Compass',
    ribbonColor: 'from-cyan-600 to-blue-800',
    medalTier: 'silver',
    coinReward: 200,
    category: 'esplorazione',
  },
  {
    id: 'sun_priest',
    title: 'Erede del Sole',
    subtitle: 'I Cancelli di Paititi',
    description: 'Raggiungi la Tappa 9 (Tempio del Sole & Sancta Sanctorum).',
    iconName: 'Sun',
    ribbonColor: 'from-amber-500 to-orange-700',
    medalTier: 'gold',
    coinReward: 400,
    category: 'esplorazione',
  },
  {
    id: 'combo_master',
    title: 'Fiamma Inarrestabile',
    subtitle: 'Ritmo Perfetto',
    description: 'Concatena una serie Combo x4 o superiore scoprendo differenze a raffica.',
    iconName: 'Flame',
    ribbonColor: 'from-orange-500 to-red-700',
    medalTier: 'silver',
    coinReward: 180,
    category: 'velocita',
  },
  {
    id: 'cartographer',
    title: 'Maestro Cartografo',
    subtitle: 'Navigatore Geodetico',
    description: 'Completa almeno 10 tappe e consulta la rotta sul Mappamondo 3D.',
    iconName: 'MapPin',
    ribbonColor: 'from-teal-600 to-emerald-900',
    medalTier: 'bronze',
    coinReward: 120,
    category: 'esplorazione',
  },
  {
    id: 'wealthy_explorer',
    title: 'Forziere di Vilcabamba',
    subtitle: 'Ricchezza Archeologica',
    description: 'Accumula un tesoro totale di oltre 1.000 Monete d\'Oro.',
    iconName: 'Coins',
    ribbonColor: 'from-yellow-400 to-amber-600',
    medalTier: 'silver',
    coinReward: 200,
    category: 'collezione',
  },
  {
    id: 'grand_archaeologist',
    title: 'Leggenda del 1928',
    subtitle: 'Eroe della Royal Geographic',
    description: 'Trionfa in tutti i 120 livelli e scopri il destino della Spedizione Cruz.',
    iconName: 'Trophy',
    ribbonColor: 'from-yellow-300 via-amber-500 to-yellow-600',
    medalTier: 'legendary',
    coinReward: 1000,
    category: 'maestria',
  },
];

export type Achievement = ExpeditionMedal;
export const ALL_ACHIEVEMENTS = EXPEDITION_MEDALS;

